
import React, { useState, useMemo } from 'react';
import { WeeklyPlan, Meal, Ingredient } from '../types';
import { Icons } from '../constants';

interface ShoppingListViewProps {
  mealPlan: WeeklyPlan;
}

const ShoppingListView: React.FC<ShoppingListViewProps> = ({ mealPlan }) => {
  const [selectedDays, setSelectedDays] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);
  const [viewType, setViewType] = useState<'aggregated' | 'daily'>('aggregated');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState<boolean>(false);

  const dayNames = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

  // Normalizacja nazw jednostek dla lepszego sumowania
  const normalizeUnit = (unit: string): string => {
    const u = unit.toLowerCase().trim().replace('.', '');
    if (['szt', 'sztuki', 'sztuka', 'jajko', 'jajka'].includes(u)) return 'szt';
    if (['kulka', 'kulki'].includes(u)) return 'szt';
    if (['łyżka', 'łyżki'].includes(u)) return 'łyżka';
    if (['łyżeczka', 'łyżeczki'].includes(u)) return 'łyżeczka';
    if (['kromka', 'kromki'].includes(u)) return 'kromka';
    return u;
  };

  const parseAmount = (amountStr: string, itemName: string, multiplier: number = 1) => {
    const match = amountStr.match(/^(\d+\/\d+|\d+(?:[.,]\d+)?)\s*(.*)$/);
    if (!match) return { val: 0, unit: amountStr };
    
    let rawVal = match[1].replace(',', '.');
    let val = 0;

    if (rawVal.includes('/')) {
      const [num, den] = rawVal.split('/').map(Number);
      val = num / den;
    } else {
      val = parseFloat(rawVal);
    }

    let unit = normalizeUnit(match[2]);
    let finalVal = val * multiplier;

    // SPECJALNA LOGIKA DLA JAJEK: Jeśli są w gramach, zamień na sztuki (1 jajko = 55g)
    const lowerName = itemName.toLowerCase();
    if ((lowerName.includes('jajko') || lowerName.includes('jaja') || lowerName.includes('jajek')) && unit === 'g') {
      finalVal = finalVal / 55;
      unit = 'szt';
    }

    return { val: finalVal, unit };
  };

  const aggregatedList = useMemo(() => {
    const totals: Record<string, { val: number; unit: string }> = {};

    mealPlan.days
      .filter(d => selectedDays.includes(d.day))
      .forEach(day => {
        day.meals.forEach(meal => {
          const mMult = meal.multiplier ?? 1;
          meal.ingredients.forEach(ing => {
            // Normalizacja klucza produktu (np. "Jajka (rozmiar L)" i "Jaja" -> "Jajka")
            let nameKey = ing.item.toLowerCase().trim();
            if (nameKey.includes('jaj')) nameKey = 'jajka';
            if (nameKey.includes('mozzarella')) nameKey = 'mozzarella';
            
            const { val, unit } = parseAmount(ing.amount, nameKey, mMult);

            const key = `${nameKey}_${unit}`;
            if (!totals[key]) {
              totals[key] = { val, unit };
            } else {
              totals[key].val += val;
            }
          });
        });
      });

    return Object.entries(totals)
      .map(([fullKey, data]) => {
        const namePart = fullKey.split('_')[0];
        return {
          name: namePart.charAt(0).toUpperCase() + namePart.slice(1),
          amount: Math.round(data.val * 10) / 10, // Zaokrąglamy do 1 miejsca po przecinku (np. 1.5 szt)
          unit: data.unit
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [mealPlan, selectedDays]);

  const handleCopy = async () => {
    let text = "";
    if (viewType === 'aggregated') {
      text = aggregatedList
        .filter(item => !checkedItems[`agg-${item.name}-${item.unit}`])
        .map(item => `${item.name}: ${item.amount} ${item.unit}`)
        .join('\n');
    } else {
      const dailyLines: string[] = [];
      mealPlan.days.filter(d => selectedDays.includes(d.day)).forEach(d => {
        dailyLines.push(`--- ${dayNames[d.day - 1].toUpperCase()} ---`);
        d.meals.forEach(m => {
          const mMult = m.multiplier ?? 1;
          m.ingredients.forEach((ing, idx) => {
            const { val, unit } = parseAmount(ing.amount, ing.item, mMult);
            dailyLines.push(`${ing.item}: ${Math.round(val * 10) / 10} ${unit}`);
          });
        });
      });
      text = dailyLines.join('\n');
    }

    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      alert("Lista skopiowana! Wszystkie produkty zostały przeliczone i zsumowane.");
    } catch (err) { alert("Błąd kopiowania."); }
  };

  const toggleDay = (d: number) => {
    setSelectedDays(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6 sticky top-20 z-40">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">Lista Zakupów</h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-0.5">Automatyczne przeliczanie jajek i sumowanie produktów.</p>
          </div>
          <button 
            onClick={handleCopy}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-xs uppercase transition-all shadow-xl active:scale-95 ${copied ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white'}`}
          >
            {copied ? <Icons.Check className="w-5 h-5"/> : <Icons.Clipboard className="w-5 h-5"/>}
            Kopiuj listę
          </button>
        </div>

        <div className="flex bg-slate-100 p-1 rounded-xl w-full sm:w-fit mx-auto sm:mx-0">
          <button onClick={() => setViewType('aggregated')} className={`flex-1 sm:flex-none px-6 py-2 rounded-lg text-[10px] font-black uppercase transition-all ${viewType === 'aggregated' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400'}`}>Suma (Agregacja)</button>
          <button onClick={() => setViewType('daily')} className={`flex-1 sm:flex-none px-6 py-2 rounded-lg text-[10px] font-black uppercase transition-all ${viewType === 'daily' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400'}`}>Widok Dni</button>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
        {dayNames.map((name, i) => (
          <button key={i} onClick={() => toggleDay(i + 1)} className={`px-4 py-3 rounded-xl text-[10px] font-black uppercase border transition-all shrink-0 ${selectedDays.includes(i + 1) ? 'bg-emerald-50 border-emerald-500 text-emerald-700 shadow-sm' : 'bg-white border-slate-100 text-slate-400'}`}>
            {name.substring(0, 3)}
          </button>
        ))}
      </div>

      <div className="animate-in fade-in duration-500">
        {viewType === 'aggregated' ? (
          <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="bg-emerald-500 px-8 py-5 text-white flex justify-between items-center">
              <span className="text-xs font-black uppercase tracking-widest">Podsumowanie zakupów ({aggregatedList.length})</span>
              <span className="text-[10px] bg-white/20 px-2 py-1 rounded-lg">Dni: {selectedDays.length}</span>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
              {aggregatedList.map((item, idx) => {
                const id = `agg-${item.name}-${item.unit}`;
                const isChecked = !!checkedItems[id];
                return (
                  <label key={idx} className="flex items-center gap-4 cursor-pointer group py-2 border-b border-slate-50 last:border-0">
                    <input type="checkbox" checked={isChecked} onChange={() => setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }))} className="w-5 h-5 rounded-lg border-slate-200 text-emerald-600 focus:ring-emerald-500" />
                    <div className="flex-grow min-w-0">
                      <span className={`block text-sm font-bold leading-tight transition-all ${isChecked ? 'text-slate-300 line-through opacity-50' : 'text-slate-700'}`}>{item.name}</span>
                      <span className={`text-[11px] font-black ${isChecked ? 'text-slate-200' : 'text-emerald-500'}`}>{item.amount} {item.unit}</span>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {mealPlan.days.filter(day => selectedDays.includes(day.day)).map(day => (
                <section key={day.day} className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
                  <div className="bg-slate-50 p-6 px-10 border-b border-slate-100 flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-xs font-black shadow-lg">{day.day}</div>
                    <h3 className="text-xl font-black text-slate-800 tracking-tight">{dayNames[day.day - 1]}</h3>
                  </div>
                  <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {day.meals.map((meal, mIdx) => (
                        <div key={mIdx} className="space-y-4">
                          <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-widest border-b border-slate-50 pb-2 truncate">{meal.name}</h4>
                          <div className="space-y-3">
                            {meal.ingredients.map((ing, iIdx) => {
                              const { val, unit } = parseAmount(ing.amount, ing.item, meal.multiplier ?? 1);
                              return (
                                <div key={iIdx} className="flex-grow min-w-0">
                                  <span className="block text-xs font-bold text-slate-700">{ing.item}</span>
                                  <span className="text-[10px] font-black text-emerald-500">{Math.round(val * 10) / 10} {unit}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                    ))}
                  </div>
                </section>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingListView;


import React, { useState, useEffect } from 'react';
import { WeeklyPlan } from '../types';
import { Icons } from '../constants';

interface ShoppingListViewProps {
  mealPlan: WeeklyPlan;
}

const ShoppingListView: React.FC<ShoppingListViewProps> = ({ mealPlan }) => {
  const [selectedDays, setSelectedDays] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState<'standard' | 'listonic' | null>(null);

  const mealTypeLabels: Record<string, string> = {
    breakfast: 'Śniadanie',
    snack1: 'II Śniadanie',
    lunch: 'Obiad',
    snack2: 'Podwieczorek',
    dinner: 'Kolacja'
  };

  const dayNames = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

  useEffect(() => {
    const initialState: Record<string, boolean> = {};
    mealPlan.days.forEach(day => {
      day.meals.forEach(meal => {
        meal.ingredients.forEach((ing, idx) => {
          const id = `${day.day}-${meal.type}-${ing.item}-${idx}`;
          if (checkedItems[id] === undefined) {
            initialState[id] = true;
          }
        });
      });
    });
    if (Object.keys(initialState).length > 0) {
      setCheckedItems(prev => ({ ...prev, ...initialState }));
    }
  }, [mealPlan]);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleMeal = (dayNum: number, mealType: string, value: boolean) => {
    const newState = { ...checkedItems };
    const day = mealPlan.days.find(d => d.day === dayNum);
    const meal = day?.meals.find(m => m.type === mealType);
    meal?.ingredients.forEach((ing, idx) => {
      newState[`${dayNum}-${mealType}-${ing.item}-${idx}`] = value;
    });
    setCheckedItems(newState);
  };

  const toggleDay = (dayNum: number, value: boolean) => {
    const newState = { ...checkedItems };
    const day = mealPlan.days.find(d => d.day === dayNum);
    day?.meals.forEach(meal => {
      meal.ingredients.forEach((ing, idx) => {
        newState[`${dayNum}-${meal.type}-${ing.item}-${idx}`] = value;
      });
    });
    setCheckedItems(newState);
  };

  const handleCopy = async (target: 'standard' | 'listonic') => {
    const toCopy: string[] = [];
    
    mealPlan.days.forEach(day => {
      if (!selectedDays.includes(day.day)) return;
      
      day.meals.forEach(meal => {
        meal.ingredients.forEach((ing, idx) => {
          const id = `${day.day}-${meal.type}-${ing.item}-${idx}`;
          if (checkedItems[id]) {
            const cleanItem = ing.item.replace(/[*_~`]/g, '').trim();
            // FORMAT DLA LISTONIC: Czysta linia "Produkt Ilość"
            toCopy.push(`${cleanItem} ${ing.amount}`);
          }
        });
      });
    });

    if (toCopy.length === 0) {
      alert("Lista jest pusta!");
      return;
    }

    const uniqueListArray = Array.from(new Set(toCopy));
    
    // ZAWSZE UŻYWAMY NOWEJ LINII (\n)
    // Listonic przy wklejaniu listy sformatowanej nowymi liniami rozdziela pozycje.
    const finalString = uniqueListArray.join('\n');

    try {
      await navigator.clipboard.writeText(finalString);
      setCopied(target);
      setTimeout(() => setCopied(null), 2000);
      
      if (target === 'listonic') {
        alert("Skopiowano listę! Wklej ją w Listonic. Jeśli nie rozdzieli się od razu, wklej jeszcze raz przytrzymując pole dodawania.");
      }
    } catch (err) {
      alert("Błąd kopiowania.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-slate-100 shadow-sm flex flex-col lg:flex-row justify-between items-center gap-8 sticky top-20 z-40">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">Zakupy</h2>
          <p className="text-slate-400 text-sm mt-1 font-medium">Lista produktów do wklejenia w Listonic.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <button 
            onClick={() => handleCopy('standard')}
            className={`flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-[10px] uppercase transition-all border ${copied === 'standard' ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}`}
          >
            {copied === 'standard' ? <Icons.Check /> : <Icons.Clipboard />}
            Zwykła lista
          </button>
          <button 
            onClick={() => handleCopy('listonic')}
            className={`flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-[10px] uppercase transition-all shadow-xl active:scale-95 ${copied === 'listonic' ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white hover:bg-black'}`}
          >
            {copied === 'listonic' ? <Icons.Check /> : <Icons.ShoppingBag />}
            Kopiuj do Listonic
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
        {dayNames.map((name, i) => (
          <button
            key={i}
            onClick={() => {
              const d = i + 1;
              setSelectedDays(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]);
            }}
            className={`px-4 py-2.5 rounded-xl text-[10px] font-black uppercase border-2 transition-all ${selectedDays.includes(i + 1) ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-white border-slate-100 text-slate-400'}`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6">
        {mealPlan.days
          .filter(day => selectedDays.includes(day.day))
          .map(day => (
            <section key={day.day} className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
              <div className="bg-slate-50/50 p-6 px-10 border-b border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-[11px] font-black shadow-lg shadow-emerald-100">{day.day}</div>
                  <h3 className="text-xl font-black text-slate-800 tracking-tight">{dayNames[day.day - 1]}</h3>
                </div>
                <div className="flex gap-6">
                  <button onClick={() => toggleDay(day.day, true)} className="text-[10px] font-black text-emerald-600 uppercase tracking-wide">Wszystko</button>
                  <button onClick={() => toggleDay(day.day, false)} className="text-[10px] font-black text-slate-400 uppercase tracking-wide">Nic</button>
                </div>
              </div>

              <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {day.meals.map((meal, mIdx) => (
                  <div key={mIdx} className="space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-50 pb-3">
                      <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">{mealTypeLabels[meal.type]}</h4>
                      <div className="flex gap-3">
                        <button onClick={() => toggleMeal(day.day, meal.type, true)} className="text-emerald-500"><Icons.Check className="w-4 h-4"/></button>
                        <button onClick={() => toggleMeal(day.day, meal.type, false)} className="text-slate-200"><Icons.Plus className="w-4 h-4 rotate-45"/></button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {meal.ingredients.map((ing, iIdx) => {
                        const id = `${day.day}-${meal.type}-${ing.item}-${iIdx}`;
                        return (
                          <label key={iIdx} className="flex items-start gap-4 cursor-pointer group">
                            <input 
                              type="checkbox" 
                              checked={!!checkedItems[id]} 
                              onChange={() => toggleItem(id)}
                              className="mt-1 w-5 h-5 rounded-lg border-slate-200 text-emerald-600 focus:ring-emerald-500 transition-all"
                            />
                            <div className="flex-grow min-w-0">
                              <span className={`block text-sm font-bold leading-snug transition-all ${checkedItems[id] ? 'text-slate-700' : 'text-slate-200 line-through'}`}>
                                {ing.item}
                              </span>
                              <span className={`text-[10px] font-black ${checkedItems[id] ? 'text-emerald-500' : 'text-slate-100'}`}>
                                {ing.amount}
                              </span>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
      </div>
    </div>
  );
};

export default ShoppingListView;

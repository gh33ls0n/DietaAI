
import React, { useState, useEffect } from 'react';
import { WeeklyPlan } from '../types';
import { Icons } from '../constants';

interface ShoppingListViewProps {
  mealPlan: WeeklyPlan;
}

const ShoppingListView: React.FC<ShoppingListViewProps> = ({ mealPlan }) => {
  const [selectedDays, setSelectedDays] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState<boolean>(false);

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

  const handleCopy = async () => {
    const toCopy: string[] = [];
    
    mealPlan.days.forEach(day => {
      if (!selectedDays.includes(day.day)) return;
      day.meals.forEach(meal => {
        meal.ingredients.forEach((ing, idx) => {
          const id = `${day.day}-${meal.type}-${ing.item}-${idx}`;
          if (checkedItems[id]) {
            const cleanItem = ing.item.replace(/[*_~`]/g, '').trim();
            toCopy.push(`${cleanItem} ${ing.amount}`);
          }
        });
      });
    });

    if (toCopy.length === 0) return;

    const uniqueList = Array.from(new Set(toCopy)).join('\n');

    try {
      await navigator.clipboard.writeText(uniqueList);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      alert("Skopiowano listę! Możesz ją teraz wkleić w Listonic.");
    } catch (err) {
      alert("Błąd kopiowania.");
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 sticky top-20 z-40">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">Twoja Lista</h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-0.5">Zaznacz co chcesz kupić i skopiuj.</p>
        </div>
        <button 
          onClick={handleCopy}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 sm:py-5 rounded-2xl font-black text-[10px] sm:text-xs uppercase transition-all shadow-xl active:scale-95 ${copied ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white'}`}
        >
          {copied ? <Icons.Check className="w-4 h-4 sm:w-5 sm:h-5"/> : <Icons.Clipboard className="w-4 h-4 sm:w-5 sm:h-5"/>}
          Skopiuj listę
        </button>
      </div>

      {/* POWIĘKSZONE PRZYCISKI DNI NA DESKTOP */}
      <div className="flex overflow-x-auto gap-1.5 sm:gap-3 pb-2 scrollbar-hide">
        {dayNames.map((name, i) => (
          <button
            key={i}
            onClick={() => {
              const d = i + 1;
              setSelectedDays(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]);
            }}
            className={`px-3 py-2 sm:px-6 sm:py-3.5 rounded-xl text-[9px] sm:text-[11px] font-black uppercase border transition-all shrink-0 ${selectedDays.includes(i + 1) ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-white border-slate-100 text-slate-400'}`}
          >
            {name.substring(0, 3)}
          </button>
        ))}
      </div>

      {/* POWIĘKSZONE SEKCJE NA KOMPUTERZE (p-8 i gap-10) */}
      <div className="grid grid-cols-1 gap-4 sm:gap-8">
        {mealPlan.days
          .filter(day => selectedDays.includes(day.day))
          .map(day => (
            <section key={day.day} className="bg-white rounded-[24px] sm:rounded-[32px] border border-slate-100 shadow-sm overflow-hidden animate-in fade-in duration-300">
              <div className="bg-slate-50 p-4 sm:p-6 px-6 sm:px-10 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 bg-emerald-500 rounded-lg sm:rounded-2xl flex items-center justify-center text-white text-[10px] sm:text-xs font-black shadow-lg shadow-emerald-50">{day.day}</div>
                  <h3 className="text-base sm:text-xl font-black text-slate-800 tracking-tight">{dayNames[day.day - 1]}</h3>
                </div>
              </div>

              <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                {day.meals.map((meal, mIdx) => (
                  <div key={mIdx} className="space-y-4 sm:space-y-6">
                    <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-widest border-b border-slate-50 pb-2">{mealTypeLabels[meal.type]}</h4>
                    <div className="space-y-3 sm:space-y-4">
                      {meal.ingredients.map((ing, iIdx) => {
                        const id = `${day.day}-${meal.type}-${ing.item}-${iIdx}`;
                        return (
                          <label key={iIdx} className="flex items-start gap-3 sm:gap-4 cursor-pointer group">
                            <input 
                              type="checkbox" 
                              checked={!!checkedItems[id]} 
                              onChange={() => toggleItem(id)}
                              className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-lg border-slate-200 text-emerald-600 transition-all"
                            />
                            <div className="flex-grow min-w-0">
                              <span className={`block text-xs sm:text-sm font-bold leading-tight ${checkedItems[id] ? 'text-slate-700' : 'text-slate-200 line-through'}`}>
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

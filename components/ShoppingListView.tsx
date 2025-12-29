
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
            if (target === 'listonic') {
              // ZMIANA: Tylko nazwa i ilość, BEZ PRZECINKA na końcu ( Listonic lepiej to czyta )
              toCopy.push(`${cleanItem} ${ing.amount}`);
            } else {
              toCopy.push(`${cleanItem} (${ing.amount})`);
            }
          }
        });
      });
    });

    if (toCopy.length === 0) {
      alert("Lista jest pusta!");
      return;
    }

    // Unikalna lista
    const uniqueListArray = Array.from(new Set(toCopy));
    
    // ZMIANA: Czysty znak nowej linii (LF) bez zbędnych spacji
    const uniqueList = uniqueListArray.join('\n');

    try {
      await navigator.clipboard.writeText(uniqueList);
      setCopied(target);
      setTimeout(() => setCopied(null), 2000);
      
      if (target === 'listonic') {
        // ZMIANA: Ważna instrukcja dla użytkownika
        alert("SKOPIOWANO!\n\nWAŻNE: W aplikacji Listonic kliknij przycisk [+], a następnie wybierz opcję 'Dodaj wiele produktów' i tam wklej listę.");
      }
    } catch (err) {
      alert("Błąd kopiowania.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-lg flex flex-col lg:flex-row justify-between items-center gap-6 sticky top-20 z-40">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-bold text-slate-800">Twoje Zakupy</h2>
          <p className="text-slate-400 text-sm mt-1">Gotowa lista do wklejenia w Listonic.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <button 
            onClick={() => handleCopy('standard')}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-black text-xs uppercase transition-all shadow-md ${copied === 'standard' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            {copied === 'standard' ? <Icons.Check /> : <Icons.Clipboard />}
            Zwykła lista
          </button>
          <button 
            onClick={() => handleCopy('listonic')}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-black text-xs uppercase transition-all shadow-lg active:scale-95 ${copied === 'listonic' ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-white hover:bg-slate-900'}`}
          >
            {copied === 'listonic' ? <Icons.Check /> : <Icons.ShoppingBag />}
            Do Listonic (Mobile)
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
            className={`px-4 py-2.5 rounded-xl text-[10px] font-black uppercase border-2 transition-all ${selectedDays.includes(i + 1) ? 'bg-emerald-100 border-emerald-500 text-emerald-700' : 'bg-white border-slate-100 text-slate-400'}`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6">
        {mealPlan.days
          .filter(day => selectedDays.includes(day.day))
          .map(day => (
            <section key={day.day} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
              <div className="bg-slate-50 p-4 px-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center text-white text-[10px] font-black">{day.day}</div>
                  <h3 className="text-base font-bold text-slate-800">{dayNames[day.day - 1]}</h3>
                </div>
                <div className="flex gap-4">
                  <button onClick={() => toggleDay(day.day, true)} className="text-[9px] font-black text-emerald-600 uppercase hover:underline">Zaznacz wszystko</button>
                  <button onClick={() => toggleDay(day.day, false)} className="text-[9px] font-black text-slate-400 uppercase hover:underline">Odznacz</button>
                </div>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {day.meals.map((meal, mIdx) => (
                  <div key={mIdx} className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-50 pb-2">
                      <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{mealTypeLabels[meal.type]}</h4>
                      <div className="flex gap-2">
                        <button onClick={() => toggleMeal(day.day, meal.type, true)} className="text-emerald-600 hover:scale-110 transition-transform"><Icons.Check className="w-4 h-4"/></button>
                        <button onClick={() => toggleMeal(day.day, meal.type, false)} className="text-slate-300 hover:scale-110 transition-transform"><Icons.Plus className="w-4 h-4 rotate-45"/></button>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {meal.ingredients.map((ing, iIdx) => {
                        const id = `${day.day}-${meal.type}-${ing.item}-${iIdx}`;
                        return (
                          <label key={iIdx} className="flex items-start gap-3 cursor-pointer group">
                            <input 
                              type="checkbox" 
                              checked={!!checkedItems[id]} 
                              onChange={() => toggleItem(id)}
                              className="mt-0.5 w-4 h-4 rounded-lg border-slate-200 text-emerald-600 focus:ring-emerald-500 transition-all"
                            />
                            <div className="flex-grow min-w-0">
                              <span className={`block text-sm font-semibold leading-tight transition-all ${checkedItems[id] ? 'text-slate-700' : 'text-slate-300 line-through'}`}>
                                {ing.item}
                              </span>
                              <span className={`text-[10px] font-bold ${checkedItems[id] ? 'text-emerald-500' : 'text-slate-200'}`}>
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

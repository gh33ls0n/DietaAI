
import React, { useState, useEffect } from 'react';
import { WeeklyPlan } from '../types';
import { Icons } from '../constants';

interface ShoppingListViewProps {
  mealPlan: WeeklyPlan;
}

const ShoppingListView: React.FC<ShoppingListViewProps> = ({ mealPlan }) => {
  const [selectedDays, setSelectedDays] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  const mealTypeLabels: Record<string, string> = {
    breakfast: 'Śniadanie',
    snack1: 'II Śniadanie',
    lunch: 'Obiad',
    snack2: 'Podwieczorek',
    dinner: 'Kolacja'
  };

  const dayNames = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

  // Initialize all items as checked (to buy) on first load
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

  const handleCopy = async () => {
    const toCopy: string[] = [];
    
    mealPlan.days.forEach(day => {
      if (!selectedDays.includes(day.day)) return;
      
      day.meals.forEach(meal => {
        meal.ingredients.forEach((ing, idx) => {
          const id = `${day.day}-${meal.type}-${ing.item}-${idx}`;
          if (checkedItems[id]) {
            toCopy.push(`${ing.item} (${ing.amount})`);
          }
        });
      });
    });

    if (toCopy.length === 0) {
      alert("Wszystkie składniki są odznaczone (już je masz). Zaznacz to, co chcesz kupić!");
      return;
    }

    // Deduplicate for Listonic (if someone wants a clean list)
    const uniqueList = Array.from(new Set(toCopy)).join('\n');

    try {
      await navigator.clipboard.writeText(uniqueList);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert("Błąd kopiowania.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Top bar with global actions */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6 sticky top-20 z-40">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Twoja Lista Zakupów</h2>
          <p className="text-slate-500 text-sm mt-1">Odznacz to, co już masz w lodówce. Skopiujemy tylko resztę.</p>
        </div>
        <button 
          onClick={handleCopy}
          className={`w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-2xl font-bold transition-all shadow-lg active:scale-95 ${copied ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
        >
          {copied ? <Icons.Check /> : <Icons.Clipboard />}
          {copied ? 'Skopiowano do Listonic!' : 'Kopiuj listę do kupienia'}
        </button>
      </div>

      {/* Day Selector Quick Filters */}
      <div className="flex flex-wrap gap-2">
        {dayNames.map((name, i) => (
          <button
            key={i}
            onClick={() => {
              const d = i + 1;
              setSelectedDays(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold border-2 transition-all ${selectedDays.includes(i + 1) ? 'bg-emerald-100 border-emerald-500 text-emerald-700' : 'bg-white border-slate-100 text-slate-400'}`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Grouped Shopping List */}
      <div className="grid grid-cols-1 gap-8">
        {mealPlan.days
          .filter(day => selectedDays.includes(day.day))
          .map(day => (
            <section key={day.day} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
              <div className="bg-slate-50 p-4 px-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">{day.day}</div>
                  <h3 className="text-lg font-bold text-slate-800">{dayNames[day.day - 1]}</h3>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => toggleDay(day.day, true)} className="text-[10px] font-bold text-emerald-600 hover:underline">Wszystko do kupienia</button>
                  <span className="text-slate-300">|</span>
                  <button onClick={() => toggleDay(day.day, false)} className="text-[10px] font-bold text-slate-400 hover:underline">Już mam wszystko</button>
                </div>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {day.meals.map((meal, mIdx) => (
                  <div key={mIdx} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">{mealTypeLabels[meal.type]}</h4>
                      <div className="flex gap-2">
                        <button onClick={() => toggleMeal(day.day, meal.type, true)} className="text-[9px] font-bold text-emerald-600" title="Zaznacz posiłek"><Icons.Check className="w-3 h-3"/></button>
                        <button onClick={() => toggleMeal(day.day, meal.type, false)} className="text-[9px] font-bold text-slate-300" title="Odznacz posiłek"><Icons.Plus className="w-3 h-3 rotate-45"/></button>
                      </div>
                    </div>
                    <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100 space-y-3">
                      <p className="text-[11px] font-bold text-slate-800 line-clamp-1 border-b border-slate-200 pb-2 mb-2">{meal.name}</p>
                      {meal.ingredients.map((ing, iIdx) => {
                        const id = `${day.day}-${meal.type}-${ing.item}-${iIdx}`;
                        return (
                          <label key={iIdx} className="flex items-start gap-3 cursor-pointer group">
                            <input 
                              type="checkbox" 
                              checked={!!checkedItems[id]} 
                              onChange={() => toggleItem(id)}
                              className="mt-1 w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                            />
                            <div className="flex-grow min-w-0">
                              <span className={`block text-sm font-medium leading-tight transition-all ${checkedItems[id] ? 'text-slate-700' : 'text-slate-300 line-through'}`}>
                                {ing.item}
                              </span>
                              <span className={`text-[10px] italic ${checkedItems[id] ? 'text-emerald-600' : 'text-slate-300'}`}>
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

      {selectedDays.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
          <p className="text-slate-500">Wybierz przynajmniej jeden dzień, aby zobaczyć listę zakupów.</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingListView;

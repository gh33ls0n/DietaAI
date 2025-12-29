
import React, { useState, useMemo } from 'react';
import { WeeklyPlan, DayPlan, Meal } from '../types';
import { Icons } from '../constants';

interface MealPlanViewProps {
  mealPlan: WeeklyPlan;
  allAvailableMeals: Meal[];
  onRegenerate: () => void;
  onUpdateMeal: (day: number, mealType: string, newMeal: Meal) => void;
  onCopyDay: (sourceDay: number, targetDays: number[]) => void;
  onAddCustomMeal: (meal: Meal) => void;
}

const MealPlanView: React.FC<MealPlanViewProps> = ({ 
  mealPlan, allAvailableMeals, onRegenerate, onUpdateMeal, onCopyDay, onAddCustomMeal 
}) => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [swappingMealType, setSwappingMealType] = useState<string | null>(null);
  const [isCopyingDay, setIsCopyingDay] = useState(false);
  const [copyTargetDays, setCopyTargetDays] = useState<number[]>([]);
  const [swapSearch, setSwapSearch] = useState("");

  const currentDayPlan = mealPlan.days.find(d => d.day === selectedDay) || mealPlan.days[0];

  const totals = currentDayPlan.meals.reduce((acc, m) => ({
    calories: acc.calories + (m.calories || 0),
    protein: acc.protein + (m.protein || 0),
    fats: acc.fats + (m.fats || 0),
    carbs: acc.carbs + (m.carbs || 0),
  }), { calories: 0, protein: 0, fats: 0, carbs: 0 });

  const mealTypeLabels: Record<string, string> = {
    breakfast: 'Śniadanie',
    snack1: 'II Śniadanie',
    lunch: 'Obiad',
    snack2: 'Podwieczorek',
    dinner: 'Kolacja'
  };

  const handleSwap = (day: number, meal: Meal) => {
    const mealWithCorrectType = { ...meal, type: swappingMealType as any };
    onUpdateMeal(day, swappingMealType!, mealWithCorrectType);
    setSwappingMealType(null);
    setSwapSearch("");
  };

  const handleSaveToLibrary = (meal: Meal) => {
    const alreadyInLibrary = allAvailableMeals.some(m => m.name === meal.name);
    if (alreadyInLibrary) {
      alert("To danie jest już w Twojej bazie!");
      return;
    }
    onAddCustomMeal({ ...meal });
    alert("Danie zostało zapisane w Twojej bazie inspiracji!");
  };

  const handleSaveAllDayToLibrary = () => {
    let count = 0;
    currentDayPlan.meals.forEach(meal => {
      const alreadyInLibrary = allAvailableMeals.some(m => m.name === meal.name);
      if (!alreadyInLibrary) {
        onAddCustomMeal({ ...meal });
        count++;
      }
    });
    alert(`Zapisano ${count} nowych dań do Twojej bazy!`);
  };

  const handleCopyMealToNextDay = (meal: Meal) => {
    if (selectedDay < 7) {
      onUpdateMeal(selectedDay + 1, meal.type, { ...meal });
      alert(`Skopiowano posiłek na dzień ${selectedDay + 1}!`);
    } else {
      alert("Nie można kopiować poza 7 dzień.");
    }
  };

  const handleApplyCopyDay = () => {
    if (copyTargetDays.length > 0) {
      onCopyDay(selectedDay, copyTargetDays);
      setIsCopyingDay(false);
      setCopyTargetDays([]);
      alert("Dzień został skopiowany!");
    }
  };

  const toggleTargetDay = (d: number) => {
    setCopyTargetDays(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]);
  };

  const swappableMeals = useMemo(() => {
    if (!swappingMealType) return [];
    const sharedTypes = ['breakfast', 'snack1', 'dinner'];
    let filtered = allAvailableMeals;
    if (sharedTypes.includes(swappingMealType)) {
      filtered = allAvailableMeals.filter(m => sharedTypes.includes(m.type));
    } else {
      filtered = allAvailableMeals.filter(m => m.type === swappingMealType);
    }
    if (swapSearch) {
      filtered = filtered.filter(m => m.name.toLowerCase().includes(swapSearch.toLowerCase()));
    }
    return filtered;
  }, [swappingMealType, allAvailableMeals, swapSearch]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8">
      {/* Sidebar Dni */}
      <div className="lg:col-span-3 flex lg:flex-col gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
        {mealPlan.days.map((dayPlan) => (
          <button
            key={dayPlan.day}
            onClick={() => setSelectedDay(dayPlan.day)}
            className={`flex-shrink-0 lg:w-full p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border-2 transition-all text-left ${selectedDay === dayPlan.day ? 'border-emerald-500 bg-emerald-50' : 'border-slate-100 bg-white'}`}
          >
            <span className={`block text-[9px] font-black uppercase ${selectedDay === dayPlan.day ? 'text-emerald-600' : 'text-slate-400'}`}>Dzień {dayPlan.day}</span>
            <span className={`block text-sm sm:text-base font-bold ${selectedDay === dayPlan.day ? 'text-emerald-900' : 'text-slate-600'}`}>
              {['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'][dayPlan.day - 1]}
            </span>
          </button>
        ))}
        <button onClick={onRegenerate} title="Wygeneruj nowy jadłospis" className="flex-shrink-0 lg:mt-4 p-2.5 sm:p-4 rounded-xl border-2 border-dashed border-slate-200 text-slate-400 hover:text-emerald-500 transition-all">
          <Icons.Plus className="mx-auto" />
        </button>
      </div>

      {/* Lista Posiłków */}
      <div className="lg:col-span-9 space-y-3 sm:space-y-6">
        {/* ZMIANA: Rozjaśnione tło (emerald-600 zamiast slate-900) */}
        <div className="bg-emerald-600 rounded-3xl p-5 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="flex justify-between items-center relative z-10">
            <div>
              <p className="text-[10px] font-black opacity-70 uppercase tracking-widest mb-1">Dzienne zapotrzebowanie</p>
              <p className="text-2xl sm:text-4xl font-black">{totals.calories} <span className="text-sm opacity-60">kcal</span></p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="flex gap-1.5">
                <button 
                  onClick={handleSaveAllDayToLibrary}
                  title="Zarchiwizuj cały ten dzień w swojej bazie"
                  className="bg-white/20 hover:bg-white/30 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-tight flex items-center gap-1.5 transition-all"
                >
                  <Icons.Save className="w-3.5 h-3.5" /> Zapisz dzień
                </button>
                <button 
                  onClick={() => setIsCopyingDay(true)}
                  className="bg-white/20 hover:bg-white/30 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-tight flex items-center gap-1.5 transition-all"
                >
                  <Icons.Copy className="w-3.5 h-3.5" /> Kopiuj dzień
                </button>
              </div>
              <div className="flex gap-4 sm:gap-8 text-center bg-black/10 px-4 py-2 rounded-2xl">
                <div><span className="block text-[8px] opacity-60 uppercase font-black">Białko</span><span className="text-xs sm:text-lg font-bold">{totals.protein}g</span></div>
                <div><span className="block text-[8px] opacity-60 uppercase font-black">Tłuszcz</span><span className="text-xs sm:text-lg font-bold">{totals.fats}g</span></div>
                <div><span className="block text-[8px] opacity-60 uppercase font-black">Węgle</span><span className="text-xs sm:text-lg font-bold">{totals.carbs}g</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-4">
          {currentDayPlan.meals.map((meal, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-6 shadow-sm hover:border-emerald-200 transition-all">
              <div className="flex items-center gap-3">
                <div className="flex-grow min-w-0 cursor-pointer" onClick={() => setSelectedMeal(meal)}>
                   <div className="flex items-center gap-2 mb-0.5">
                     <span className="text-[9px] font-black text-emerald-600 uppercase bg-emerald-50 px-1.5 py-0.5 rounded tracking-tighter">
                       {mealTypeLabels[meal.type]}
                     </span>
                     <span className="text-[9px] font-bold text-slate-300">{meal.calories} kcal</span>
                   </div>
                   <h4 className="text-sm sm:text-lg font-bold text-slate-800 truncate">{meal.name}</h4>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <button 
                    onClick={() => handleSaveToLibrary(meal)} 
                    title="Zapisz to danie w swojej bazie inspiracji"
                    className="p-2 sm:p-2.5 bg-slate-50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
                  >
                    <Icons.Save className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <button 
                    onClick={() => handleCopyMealToNextDay(meal)} 
                    title="Kopiuj na jutro"
                    className="p-2 sm:p-2.5 bg-slate-50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
                  >
                    <Icons.Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <button 
                    onClick={() => setSwappingMealType(meal.type)} 
                    title="Wymień"
                    className="p-2 sm:p-2.5 bg-slate-50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
                  >
                    <Icons.Swap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <button 
                    onClick={() => setSelectedMeal(meal)} 
                    title="Zobacz przepis"
                    className="p-2 sm:p-2.5 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <Icons.ChefHat className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Kopiowania Dnia */}
      {isCopyingDay && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsCopyingDay(false)}></div>
          <div className="relative bg-white w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 p-6 space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-bold text-slate-800">Kopiuj Dzień {selectedDay}</h2>
              <p className="text-xs text-slate-400 font-bold uppercase mt-1">Wybierz dni docelowe:</p>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map(d => (
                <button
                  key={d}
                  disabled={d === selectedDay}
                  onClick={() => toggleTargetDay(d)}
                  className={`p-3 rounded-xl font-black text-sm border-2 transition-all ${d === selectedDay ? 'bg-slate-50 border-slate-100 text-slate-200' : copyTargetDays.includes(d) ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg' : 'bg-white border-slate-100 text-slate-400 hover:border-emerald-200'}`}
                >
                  {d}
                </button>
              ))}
            </div>
            <div className="flex gap-2 pt-2">
              <button onClick={() => setIsCopyingDay(false)} className="flex-1 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl text-sm">Anuluj</button>
              <button 
                onClick={handleApplyCopyDay} 
                disabled={copyTargetDays.length === 0}
                className="flex-1 py-3 bg-emerald-600 disabled:bg-slate-300 text-white font-bold rounded-xl text-sm shadow-lg shadow-emerald-200"
              >
                Kopiuj
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Wymiany */}
      {swappingMealType && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSwappingMealType(null)}></div>
          <div className="relative bg-white w-full max-w-4xl rounded-2xl overflow-hidden max-h-[85vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="p-4 border-b border-slate-100 space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-800">Wymień posiłek</h2>
                <button onClick={() => setSwappingMealType(null)} className="p-2 hover:bg-slate-100 rounded-full"><Icons.Plus className="rotate-45" /></button>
              </div>
              <input 
                type="text" 
                placeholder="Szukaj..." 
                value={swapSearch}
                onChange={(e) => setSwapSearch(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 outline-none text-sm"
              />
            </div>
            <div className="p-4 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              {swappableMeals.map((meal, idx) => (
                <div key={idx} onClick={() => handleSwap(selectedDay, meal)} className="border border-slate-100 rounded-xl p-3 hover:border-emerald-500 hover:bg-emerald-50 transition-all cursor-pointer flex justify-between items-center">
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-800 truncate">{meal.name}</h4>
                    <span className="text-[10px] font-bold text-emerald-600">{meal.calories} kcal</span>
                  </div>
                  <Icons.ArrowRight className="w-4 h-4 text-slate-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal Przepisu */}
      {selectedMeal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedMeal(null)}></div>
          <div className="relative bg-white w-full max-w-2xl rounded-2xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl">
            <div className="bg-emerald-600 p-6 text-white shrink-0">
              <span className="text-[10px] font-black opacity-70 uppercase tracking-widest">{mealTypeLabels[selectedMeal.type]}</span>
              <h2 className="text-xl font-bold mb-1 leading-tight">{selectedMeal.name}</h2>
              <p className="text-sm font-bold bg-white/20 inline-block px-2 py-0.5 rounded-lg">{selectedMeal.calories} kcal</p>
            </div>
            <div className="p-6 overflow-y-auto space-y-6">
              <section>
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">Składniki</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedMeal.ingredients.map((ing, i) => (
                    <div key={i} className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs flex justify-between">
                      <span className="text-slate-600">{ing.item}</span>
                      <span className="font-bold text-emerald-600">{ing.amount}</span>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">Sposób przygotowania</h3>
                <div className="bg-slate-50 p-4 rounded-xl text-slate-600 text-xs leading-relaxed whitespace-pre-wrap">{selectedMeal.recipe}</div>
              </section>
            </div>
            <div className="p-4 border-t border-slate-100 shrink-0">
              <button onClick={() => setSelectedMeal(null)} className="w-full py-3 bg-slate-800 text-white font-bold rounded-xl text-sm">Zamknij</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealPlanView;

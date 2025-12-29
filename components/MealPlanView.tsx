
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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
      {/* Sidebar Dni */}
      <div className="lg:col-span-3 flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
        {mealPlan.days.map((dayPlan) => (
          <button
            key={dayPlan.day}
            onClick={() => setSelectedDay(dayPlan.day)}
            className={`flex-shrink-0 lg:w-full px-5 py-4 rounded-2xl border transition-all text-left ${selectedDay === dayPlan.day ? 'border-emerald-500 bg-emerald-50/50 shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200'}`}
          >
            <span className={`block text-[9px] font-black uppercase tracking-wider ${selectedDay === dayPlan.day ? 'text-emerald-600' : 'text-slate-400'}`}>Dzień {dayPlan.day}</span>
            <span className={`block text-base font-bold ${selectedDay === dayPlan.day ? 'text-slate-900' : 'text-slate-500'}`}>
              {['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'][dayPlan.day - 1]}
            </span>
          </button>
        ))}
      </div>

      {/* Lista Posiłków */}
      <div className="lg:col-span-9 space-y-6">
        {/* PODSUMOWANIE - ULTRA CLEAN WHITE */}
        <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="text-center sm:text-left">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1">Bilans Dnia</p>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-5xl sm:text-6xl font-black text-slate-800 tracking-tighter">{totals.calories}</span>
              <span className="text-lg font-black text-emerald-500">kcal</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center sm:items-end gap-6 w-full sm:w-auto">
            <div className="flex gap-2">
              <button onClick={() => setIsCopyingDay(true)} className="bg-slate-50 hover:bg-slate-100 text-slate-500 px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-tight transition-all">
                Kopiuj dzień
              </button>
              <button onClick={handleSaveAllDayToLibrary} className="bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-tight transition-all shadow-lg">
                Zapisz bazę
              </button>
            </div>
            <div className="flex gap-8 sm:gap-12">
              <div className="text-center"><span className="block text-[9px] text-slate-400 uppercase font-black mb-1">Białko</span><span className="text-lg font-bold text-slate-700">{totals.protein}g</span></div>
              <div className="text-center"><span className="block text-[9px] text-slate-400 uppercase font-black mb-1">Tłuszcz</span><span className="text-lg font-bold text-slate-700">{totals.fats}g</span></div>
              <div className="text-center"><span className="block text-[9px] text-slate-400 uppercase font-black mb-1">Węgle</span><span className="text-lg font-bold text-slate-700">{totals.carbs}g</span></div>
            </div>
          </div>
        </div>

        {/* LISTA POSIŁKÓW */}
        <div className="space-y-3">
          {currentDayPlan.meals.map((meal, idx) => (
            <div key={idx} className="bg-white rounded-[24px] border border-slate-100 p-6 shadow-sm hover:border-emerald-200 transition-all group flex items-center gap-6">
                <div className="flex-grow min-w-0 cursor-pointer" onClick={() => setSelectedMeal(meal)}>
                   <div className="flex items-center gap-3 mb-1">
                     <span className="text-[10px] font-black text-emerald-600 uppercase bg-emerald-50 px-2 py-0.5 rounded-lg">
                       {mealTypeLabels[meal.type]}
                     </span>
                     <span className="text-xs font-bold text-slate-300">{meal.calories} kcal</span>
                   </div>
                   <h4 className="text-lg sm:text-xl font-bold text-slate-800 truncate group-hover:text-emerald-700 transition-colors">{meal.name}</h4>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={() => setSwappingMealType(meal.type)} className="p-3 bg-slate-50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all"><Icons.Swap className="w-5 h-5" /></button>
                  <button onClick={() => setSelectedMeal(meal)} className="p-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-all shadow-md"><Icons.ChefHat className="w-5 h-5" /></button>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL KOPIOWANIA */}
      {isCopyingDay && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsCopyingDay(false)}></div>
          <div className="relative bg-white w-full max-w-sm rounded-[32px] overflow-hidden shadow-2xl p-8 space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-800">Kopiuj Plan</h2>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-2 tracking-widest">Wybierz dni docelowe</p>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map(d => (
                <button
                  key={d}
                  disabled={d === selectedDay}
                  onClick={() => toggleTargetDay(d)}
                  className={`h-12 rounded-xl font-black text-sm border-2 transition-all ${d === selectedDay ? 'bg-slate-50 border-slate-100 text-slate-200' : copyTargetDays.includes(d) ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-100' : 'bg-white border-slate-100 text-slate-400 hover:border-emerald-200'}`}
                >
                  {d}
                </button>
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              <button onClick={() => setIsCopyingDay(false)} className="flex-1 py-4 bg-slate-100 text-slate-600 font-bold rounded-2xl text-sm">Anuluj</button>
              <button onClick={handleApplyCopyDay} disabled={copyTargetDays.length === 0} className="flex-1 py-4 bg-emerald-600 text-white font-bold rounded-2xl text-sm shadow-xl">Gotowe</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL WYMIANY */}
      {swappingMealType && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSwappingMealType(null)}></div>
          <div className="relative bg-white w-full max-w-4xl rounded-[32px] overflow-hidden max-h-[85vh] flex flex-col shadow-2xl">
            <div className="p-6 border-b border-slate-50 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-800">Co zjesz zamiast?</h2>
                <button onClick={() => setSwappingMealType(null)} className="p-2 hover:bg-slate-100 rounded-full transition-all"><Icons.Plus className="rotate-45" /></button>
              </div>
              <input type="text" placeholder="Szukaj dania w bazie..." value={swapSearch} onChange={(e) => setSwapSearch(e.target.value)} className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-emerald-500 outline-none text-sm transition-all" />
            </div>
            <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {swappableMeals.map((meal, idx) => (
                <div key={idx} onClick={() => handleSwap(selectedDay, meal)} className="border border-slate-50 bg-white rounded-2xl p-5 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer flex justify-between items-center group">
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-800 text-sm truncate group-hover:text-emerald-700">{meal.name}</h4>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-tighter">{meal.calories} kcal</span>
                  </div>
                  <Icons.ArrowRight className="w-4 h-4 text-slate-200 group-hover:text-emerald-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODAL PRZEPISU */}
      {selectedMeal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setSelectedMeal(null)}></div>
          <div className="relative bg-white w-full max-w-2xl rounded-[40px] overflow-hidden max-h-[90vh] flex flex-col shadow-2xl">
            <div className="bg-emerald-600 p-10 text-white shrink-0">
              <span className="text-[10px] font-black opacity-70 uppercase tracking-[0.2em]">{mealTypeLabels[selectedMeal.type]}</span>
              <h2 className="text-3xl font-black mb-3 leading-tight tracking-tight">{selectedMeal.name}</h2>
              <div className="flex flex-wrap gap-3 mt-6">
                <p className="text-xs font-black bg-white/20 px-4 py-2 rounded-xl">{selectedMeal.calories} kcal</p>
                <p className="text-xs font-bold bg-white/10 px-4 py-2 rounded-xl">B: {selectedMeal.protein}g • T: {selectedMeal.fats}g • W: {selectedMeal.carbs}g</p>
              </div>
            </div>
            <div className="p-10 overflow-y-auto space-y-10">
              <section>
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Składniki</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedMeal.ingredients.map((ing, i) => (
                    <div key={i} className="bg-slate-50/50 p-4 rounded-2xl border border-slate-100 text-sm flex justify-between items-center">
                      <span className="text-slate-600 font-medium">{ing.item}</span>
                      <span className="font-black text-emerald-600">{ing.amount}</span>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Przygotowanie</h3>
                <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap italic opacity-90">{selectedMeal.recipe}</div>
              </section>
            </div>
            <div className="p-8 border-t border-slate-50 shrink-0">
              <button onClick={() => setSelectedMeal(null)} className="w-full py-5 bg-slate-900 text-white font-bold rounded-[24px] text-sm transition-all shadow-xl hover:bg-black">Zamknij</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealPlanView;


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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8">
      {/* Sidebar Dni */}
      <div className="lg:col-span-3 flex lg:flex-col gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
        {mealPlan.days.map((dayPlan) => (
          <button
            key={dayPlan.day}
            onClick={() => setSelectedDay(dayPlan.day)}
            className={`flex-shrink-0 lg:w-full p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all text-left ${selectedDay === dayPlan.day ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 bg-white'}`}
          >
            <span className={`block text-[8px] font-black uppercase ${selectedDay === dayPlan.day ? 'text-emerald-600' : 'text-slate-400'}`}>Dzień {dayPlan.day}</span>
            <span className={`block text-sm sm:text-base font-bold ${selectedDay === dayPlan.day ? 'text-emerald-900' : 'text-slate-600'}`}>
              {['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'][dayPlan.day - 1]}
            </span>
          </button>
        ))}
      </div>

      {/* Lista Posiłków */}
      <div className="lg:col-span-9 space-y-4">
        {/* PODSUMOWANIE - STERYLNA BIEL */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Dzisiejszy plan</p>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-4xl sm:text-5xl font-black text-slate-800">{totals.calories}</span>
              <span className="text-sm font-black text-emerald-500 uppercase">kcal</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center sm:items-end gap-4 w-full sm:w-auto">
            <div className="flex gap-2">
              <button 
                onClick={() => setIsCopyingDay(true)}
                className="bg-slate-50 hover:bg-slate-100 text-slate-500 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-tight flex items-center gap-2 border border-slate-200 transition-all"
              >
                <Icons.Copy className="w-3 h-3" /> Kopiuj dzień
              </button>
              <button 
                onClick={handleSaveAllDayToLibrary}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-tight flex items-center gap-2 shadow-sm transition-all"
              >
                <Icons.Save className="w-3 h-3" /> Zapisz w bazie
              </button>
            </div>
            <div className="flex gap-4 sm:gap-8 justify-center sm:justify-end w-full border-t border-slate-100 pt-4 sm:border-0 sm:pt-0">
              <div className="text-center"><span className="block text-[8px] text-slate-400 uppercase font-black">Białko</span><span className="text-sm font-bold text-slate-700">{totals.protein}g</span></div>
              <div className="text-center"><span className="block text-[8px] text-slate-400 uppercase font-black">Tłuszcz</span><span className="text-sm font-bold text-slate-700">{totals.fats}g</span></div>
              <div className="text-center"><span className="block text-[8px] text-slate-400 uppercase font-black">Węgle</span><span className="text-sm font-bold text-slate-700">{totals.carbs}g</span></div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {currentDayPlan.meals.map((meal, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 shadow-sm hover:border-emerald-200 transition-all group flex items-center gap-4">
                <div className="flex-grow min-w-0 cursor-pointer" onClick={() => setSelectedMeal(meal)}>
                   <div className="flex items-center gap-2 mb-0.5">
                     <span className="text-[9px] font-black text-emerald-600 uppercase bg-emerald-50 px-1.5 py-0.5 rounded">
                       {mealTypeLabels[meal.type]}
                     </span>
                     <span className="text-[10px] font-bold text-slate-300">{meal.calories} kcal</span>
                   </div>
                   <h4 className="text-base sm:text-lg font-bold text-slate-800 truncate group-hover:text-emerald-700 transition-colors">{meal.name}</h4>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button onClick={() => setSwappingMealType(meal.type)} className="p-2 sm:p-2.5 bg-slate-50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-all"><Icons.Swap className="w-4 h-4" /></button>
                  <button onClick={() => setSelectedMeal(meal)} className="p-2 sm:p-2.5 bg-slate-800 text-white rounded-lg hover:bg-emerald-600 transition-all"><Icons.ChefHat className="w-4 h-4" /></button>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modale */}
      {isCopyingDay && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsCopyingDay(false)}></div>
          <div className="relative bg-white w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl p-6 space-y-6 animate-in zoom-in-95">
            <div className="text-center">
              <h2 className="text-xl font-bold text-slate-800">Kopiuj Dzień {selectedDay}</h2>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-widest">Wybierz dni docelowe</p>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map(d => (
                <button
                  key={d}
                  disabled={d === selectedDay}
                  onClick={() => toggleTargetDay(d)}
                  className={`p-3 rounded-xl font-black text-sm border-2 transition-all ${d === selectedDay ? 'bg-slate-50 border-slate-100 text-slate-200' : copyTargetDays.includes(d) ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white border-slate-100 text-slate-400 hover:border-emerald-200'}`}
                >
                  {d}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => setIsCopyingDay(false)} className="flex-1 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl text-sm">Anuluj</button>
              <button onClick={handleApplyCopyDay} disabled={copyTargetDays.length === 0} className="flex-1 py-3 bg-emerald-600 disabled:bg-slate-300 text-white font-bold rounded-xl text-sm">Zastosuj</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Wymiany */}
      {swappingMealType && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSwappingMealType(null)}></div>
          <div className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden max-h-[85vh] flex flex-col shadow-2xl">
            <div className="p-4 border-b border-slate-100 space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-800">Wymień posiłek</h2>
                <button onClick={() => setSwappingMealType(null)} className="p-2 hover:bg-slate-100 rounded-full transition-all"><Icons.Plus className="rotate-45" /></button>
              </div>
              <input type="text" placeholder="Szukaj dania..." value={swapSearch} onChange={(e) => setSwapSearch(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 outline-none text-sm transition-all" />
            </div>
            <div className="p-4 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {swappableMeals.map((meal, idx) => (
                <div key={idx} onClick={() => handleSwap(selectedDay, meal)} className="border border-slate-100 rounded-xl p-3 hover:border-emerald-500 hover:bg-emerald-50 transition-all cursor-pointer flex justify-between items-center group">
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-800 text-sm truncate group-hover:text-emerald-700">{meal.name}</h4>
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
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSelectedMeal(null)}></div>
          <div className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95">
            <div className="bg-emerald-600 p-8 text-white shrink-0">
              <span className="text-[10px] font-black opacity-70 uppercase tracking-widest">{mealTypeLabels[selectedMeal.type]}</span>
              <h2 className="text-2xl font-bold mb-1 leading-tight">{selectedMeal.name}</h2>
              <div className="flex gap-4 mt-3">
                <p className="text-xs font-bold bg-white/20 px-3 py-1 rounded-lg">{selectedMeal.calories} kcal</p>
                <p className="text-xs font-medium bg-white/10 px-3 py-1 rounded-lg">B: {selectedMeal.protein}g • T: {selectedMeal.fats}g • W: {selectedMeal.carbs}g</p>
              </div>
            </div>
            <div className="p-8 overflow-y-auto space-y-6">
              <section>
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Składniki</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedMeal.ingredients.map((ing, i) => (
                    <div key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm flex justify-between">
                      <span className="text-slate-600">{ing.item}</span>
                      <span className="font-bold text-emerald-600">{ing.amount}</span>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Instrukcja</h3>
                <div className="bg-slate-50 p-5 rounded-xl text-slate-700 text-sm leading-relaxed whitespace-pre-wrap border border-slate-100 italic">{selectedMeal.recipe}</div>
              </section>
            </div>
            <div className="p-6 border-t border-slate-100 shrink-0">
              <button onClick={() => setSelectedMeal(null)} className="w-full py-4 bg-slate-800 text-white font-bold rounded-2xl text-sm transition-all shadow-lg active:scale-95">Zamknij</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealPlanView;

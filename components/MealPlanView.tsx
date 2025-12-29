
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
            className={`flex-shrink-0 lg:w-full p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border-2 transition-all text-left ${selectedDay === dayPlan.day ? 'border-emerald-500 bg-emerald-50 shadow-sm' : 'border-slate-100 bg-white'}`}
          >
            <span className={`block text-[9px] font-black uppercase ${selectedDay === dayPlan.day ? 'text-emerald-600' : 'text-slate-400'}`}>Dzień {dayPlan.day}</span>
            <span className={`block text-sm sm:text-base font-bold ${selectedDay === dayPlan.day ? 'text-emerald-900' : 'text-slate-600'}`}>
              {['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'][dayPlan.day - 1]}
            </span>
          </button>
        ))}
        <button onClick={onRegenerate} title="Wygeneruj nowy jadłospis" className="flex-shrink-0 lg:mt-4 p-2.5 sm:p-4 rounded-xl border-2 border-dashed border-slate-200 text-slate-400 hover:text-emerald-500 transition-all">
          <Icons.Plus className="mx-auto" />
        </button>
      </div>

      {/* Lista Posiłków */}
      <div className="lg:col-span-9 space-y-3 sm:space-y-6">
        {/* ZMIANA: Ultralekki design podsumowania */}
        <div className="bg-white rounded-3xl p-5 sm:p-8 border-l-8 border-emerald-500 shadow-lg relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="relative z-10">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Dzienne zapotrzebowanie</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-5xl font-black text-slate-800">{totals.calories}</span>
              <span className="text-sm font-bold text-emerald-600 uppercase">kcal</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:items-end gap-4 w-full sm:w-auto">
            <div className="flex gap-2">
              <button 
                onClick={handleSaveAllDayToLibrary}
                className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-tight flex items-center gap-2 transition-all border border-emerald-100"
              >
                <Icons.Save className="w-3.5 h-3.5" /> Zapisz dzień
              </button>
              <button 
                onClick={() => setIsCopyingDay(true)}
                className="bg-slate-50 hover:bg-slate-100 text-slate-600 px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-tight flex items-center gap-2 transition-all border border-slate-200"
              >
                <Icons.Copy className="w-3.5 h-3.5" /> Kopiuj na inne dni
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center sm:text-right w-full">
              <div className="bg-slate-50/50 p-2 rounded-xl">
                <span className="block text-[8px] text-slate-400 uppercase font-black">Białko</span>
                <span className="text-sm font-bold text-slate-700">{totals.protein}g</span>
              </div>
              <div className="bg-slate-50/50 p-2 rounded-xl">
                <span className="block text-[8px] text-slate-400 uppercase font-black">Tłuszcz</span>
                <span className="text-sm font-bold text-slate-700">{totals.fats}g</span>
              </div>
              <div className="bg-slate-50/50 p-2 rounded-xl">
                <span className="block text-[8px] text-slate-400 uppercase font-black">Węglow.</span>
                <span className="text-sm font-bold text-slate-700">{totals.carbs}g</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-4">
          {currentDayPlan.meals.map((meal, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-6 shadow-sm hover:border-emerald-200 hover:shadow-md transition-all group relative overflow-hidden">
              <div className="flex items-center gap-4">
                <div className="flex-grow min-w-0 cursor-pointer" onClick={() => setSelectedMeal(meal)}>
                   <div className="flex items-center gap-2 mb-1">
                     <span className="text-[10px] font-black text-emerald-600 uppercase bg-emerald-50 px-2 py-0.5 rounded">
                       {mealTypeLabels[meal.type]}
                     </span>
                     <span className="text-xs font-bold text-slate-300 tracking-tight">{meal.calories} kcal</span>
                   </div>
                   <h4 className="text-base sm:text-xl font-bold text-slate-800 truncate group-hover:text-emerald-700 transition-colors">{meal.name}</h4>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button onClick={() => handleSaveToLibrary(meal)} title="Do ulubionych" className="p-2 sm:p-3 bg-slate-50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all"><Icons.Save className="w-4 h-4" /></button>
                  <button onClick={() => setSwappingMealType(meal.type)} title="Wymień" className="p-2 sm:p-3 bg-slate-50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all"><Icons.Swap className="w-4 h-4" /></button>
                  <button onClick={() => setSelectedMeal(meal)} className="p-2 sm:p-3 bg-slate-800 text-white rounded-xl hover:bg-emerald-600 transition-all shadow-sm"><Icons.ChefHat className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modale pozostają bez zmian w strukturze, tylko lekkie poprawki wizualne */}
      {isCopyingDay && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsCopyingDay(false)}></div>
          <div className="relative bg-white w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl p-6 space-y-6 animate-in zoom-in-95 duration-200">
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
                  className={`p-3 rounded-xl font-black text-sm border-2 transition-all ${d === selectedDay ? 'bg-slate-50 border-slate-100 text-slate-200' : copyTargetDays.includes(d) ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-200' : 'bg-white border-slate-100 text-slate-400 hover:border-emerald-200'}`}
                >
                  {d}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => setIsCopyingDay(false)} className="flex-1 py-3 bg-slate-100 text-slate-600 font-bold rounded-2xl text-sm">Anuluj</button>
              <button onClick={handleApplyCopyDay} disabled={copyTargetDays.length === 0} className="flex-1 py-3 bg-emerald-600 disabled:bg-slate-300 text-white font-bold rounded-2xl text-sm shadow-lg shadow-emerald-200">Zastosuj</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Wymiany */}
      {swappingMealType && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSwappingMealType(null)}></div>
          <div className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden max-h-[85vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-800">Wymień posiłek: {mealTypeLabels[swappingMealType]}</h2>
                <button onClick={() => setSwappingMealType(null)} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><Icons.Plus className="rotate-45" /></button>
              </div>
              <div className="relative">
                <input type="text" placeholder="Szukaj ulubionego dania..." value={swapSearch} onChange={(e) => setSwapSearch(e.target.value)} className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none text-sm transition-all" />
              </div>
            </div>
            <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {swappableMeals.map((meal, idx) => (
                <div key={idx} onClick={() => handleSwap(selectedDay, meal)} className="border border-slate-100 rounded-2xl p-4 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all cursor-pointer flex justify-between items-center group shadow-sm">
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-800 truncate group-hover:text-emerald-700">{meal.name}</h4>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-tighter">{meal.calories} kcal</span>
                  </div>
                  <Icons.ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
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
          <div className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="bg-emerald-600 p-8 text-white shrink-0 relative">
              <span className="text-[10px] font-black opacity-70 uppercase tracking-widest">{mealTypeLabels[selectedMeal.type]}</span>
              <h2 className="text-2xl font-bold mb-2 leading-tight">{selectedMeal.name}</h2>
              <div className="flex gap-4 mt-4">
                <p className="text-xs font-bold bg-white/20 px-3 py-1.5 rounded-xl">{selectedMeal.calories} kcal</p>
                <p className="text-xs font-medium bg-white/10 px-3 py-1.5 rounded-xl">B: {selectedMeal.protein}g • T: {selectedMeal.fats}g • W: {selectedMeal.carbs}g</p>
              </div>
              <button onClick={() => setSelectedMeal(null)} className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"><Icons.Plus className="rotate-45" /></button>
            </div>
            <div className="p-8 overflow-y-auto space-y-8">
              <section>
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Składniki potrzebne</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedMeal.ingredients.map((ing, i) => (
                    <div key={i} className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-sm flex justify-between items-center">
                      <span className="text-slate-600 font-medium">{ing.item}</span>
                      <span className="font-bold text-emerald-600">{ing.amount}</span>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Instrukcja krok po kroku</h3>
                <div className="bg-emerald-50/30 p-5 rounded-2xl text-slate-700 text-sm leading-relaxed whitespace-pre-wrap border border-emerald-100 italic">{selectedMeal.recipe}</div>
              </section>
            </div>
            <div className="p-6 border-t border-slate-100 shrink-0">
              <button onClick={() => setSelectedMeal(null)} className="w-full py-4 bg-slate-800 text-white font-bold rounded-2xl text-sm shadow-lg">Rozumiem, do dzieła!</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealPlanView;

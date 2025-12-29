
import React, { useState, useMemo } from 'react';
import { WeeklyPlan, DayPlan, Meal } from '../types';
import { Icons } from '../constants';

interface MealPlanViewProps {
  mealPlan: WeeklyPlan;
  allAvailableMeals: Meal[];
  onRegenerate: () => void;
  onUpdateMeal: (day: number, mealType: string, newMeal: Meal) => void;
  onCopyDay: (sourceDay: number, targetDays: number[]) => void;
  onCopyMealToDays: (meal: Meal, targetDays: number[]) => void;
  onAddCustomMeal: (meal: Meal) => void;
}

const MealPlanView: React.FC<MealPlanViewProps> = ({ 
  mealPlan, allAvailableMeals, onRegenerate, onUpdateMeal, onCopyDay, onCopyMealToDays, onAddCustomMeal 
}) => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [swappingMealType, setSwappingMealType] = useState<string | null>(null);
  
  // Stany dla kopiowania
  const [copyMode, setCopyMode] = useState<'day' | 'meal' | null>(null);
  const [mealToCopy, setMealToCopy] = useState<Meal | null>(null);
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

  const dayShortNames = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'];

  const handleApplyCopy = () => {
    if (copyTargetDays.length === 0) return;

    if (copyMode === 'day') {
      onCopyDay(selectedDay, copyTargetDays);
      alert(`Skopiowano Dzień ${selectedDay} do wybranych dni!`);
    } else if (copyMode === 'meal' && mealToCopy) {
      onCopyMealToDays(mealToCopy, copyTargetDays);
      alert(`Skopiowano posiłek "${mealToCopy.name}" do wybranych dni!`);
    }
    
    setCopyMode(null);
    setMealToCopy(null);
    setCopyTargetDays([]);
  };

  const toggleTargetDay = (d: number) => {
    setCopyTargetDays(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]);
  };

  // Fix: Added handleSwap function to resolve missing function error
  const handleSwap = (day: number, newMeal: Meal) => {
    if (swappingMealType) {
      onUpdateMeal(day, swappingMealType, newMeal);
      setSwappingMealType(null);
      setSwapSearch("");
    }
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
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
      {/* Nawigacja Dni */}
      <div className="flex lg:flex-col gap-1.5 lg:gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:w-56 shrink-0 scrollbar-hide">
        {mealPlan.days.map((dayPlan) => (
          <button
            key={dayPlan.day}
            onClick={() => setSelectedDay(dayPlan.day)}
            className={`flex flex-col items-center justify-center min-w-[46px] h-[46px] lg:min-w-0 lg:h-auto lg:items-start lg:p-4 rounded-xl lg:rounded-2xl border transition-all ${selectedDay === dayPlan.day ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm' : 'border-slate-100 bg-white text-slate-400 hover:border-slate-200'}`}
          >
            <span className="text-[7px] lg:text-[8px] font-black uppercase lg:mb-1">Dzień {dayPlan.day}</span>
            <span className="text-xs lg:text-base font-bold leading-none">
              <span className="lg:hidden">{dayShortNames[dayPlan.day - 1]}</span>
              <span className="hidden lg:inline">{['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'][dayPlan.day - 1]}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Kontener Posiłków */}
      <div className="flex-grow space-y-4">
        {/* PODSUMOWANIE DNIA */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 border-l-8 border-l-emerald-500">
          <div className="text-center sm:text-left">
            <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-0.5">Suma kalorii</p>
            <div className="flex items-baseline gap-1.5 justify-center sm:justify-start">
              <span className="text-4xl font-black text-slate-800 tracking-tighter">{totals.calories}</span>
              <span className="text-xs font-black text-emerald-500 uppercase">kcal</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center sm:items-end gap-3 w-full sm:w-auto">
            <div className="flex gap-2 w-full sm:w-auto">
              <button onClick={() => setCopyMode('day')} className="flex-1 bg-slate-50 text-slate-600 px-4 py-2 rounded-xl text-[9px] font-black uppercase border border-slate-200 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                Kopiuj Dzień
              </button>
              <button onClick={onRegenerate} className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-xl text-[9px] font-black uppercase shadow-md">
                Nowy plan
              </button>
            </div>
            <div className="flex gap-6">
              <div className="text-center"><span className="block text-[8px] text-slate-400 uppercase font-black">B</span><span className="text-xs font-bold text-slate-700">{totals.protein}g</span></div>
              <div className="text-center"><span className="block text-[8px] text-slate-400 uppercase font-black">T</span><span className="text-xs font-bold text-slate-700">{totals.fats}g</span></div>
              <div className="text-center"><span className="block text-[8px] text-slate-400 uppercase font-black">W</span><span className="text-xs font-bold text-slate-700">{totals.carbs}g</span></div>
            </div>
          </div>
        </div>

        {/* LISTA POSIŁKÓW */}
        <div className="space-y-2">
          {currentDayPlan.meals.map((meal, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm flex items-center gap-3">
                <div className="flex-grow min-w-0 cursor-pointer" onClick={() => setSelectedMeal(meal)}>
                   <div className="flex items-center gap-2 mb-0.5">
                     <span className="text-[8px] font-black text-emerald-600 uppercase bg-emerald-50 px-1.5 py-0.5 rounded">
                       {mealTypeLabels[meal.type]}
                     </span>
                     <span className="text-[10px] font-bold text-slate-300">{meal.calories} kcal</span>
                   </div>
                   <h4 className="text-base font-bold text-slate-800 truncate">{meal.name}</h4>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  {/* PRZYCISK KOPIOWANIA POSIŁKU */}
                  <button onClick={() => { setMealToCopy(meal); setCopyMode('meal'); }} className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:text-emerald-600" title="Kopiuj ten posiłek">
                    <Icons.Copy className="w-4 h-4" />
                  </button>
                  <button onClick={() => setSwappingMealType(meal.type)} className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:text-emerald-600" title="Wymień">
                    <Icons.Swap className="w-4 h-4" />
                  </button>
                  <button onClick={() => setSelectedMeal(meal)} className="p-2 bg-slate-900 text-white rounded-lg hover:bg-emerald-600">
                    <Icons.ChefHat className="w-4 h-4" />
                  </button>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL MULTI-WYBORU DNI (DO KOPIOWANIA) */}
      {copyMode && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => { setCopyMode(null); setCopyTargetDays([]); }}></div>
          <div className="relative bg-white w-full max-w-sm rounded-3xl p-6 space-y-6 shadow-2xl animate-in zoom-in-95">
            <div className="text-center">
              <h2 className="text-xl font-bold text-slate-800">
                {copyMode === 'day' ? `Kopiuj Dzień ${selectedDay}` : 'Kopiuj posiłek'}
              </h2>
              <p className="text-slate-400 text-xs mt-1">Zaznacz dni docelowe (można kilka):</p>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map(d => (
                <button
                  key={d}
                  disabled={copyMode === 'day' && d === selectedDay}
                  onClick={() => toggleTargetDay(d)}
                  className={`h-11 rounded-xl font-black text-xs border-2 transition-all ${
                    copyMode === 'day' && d === selectedDay 
                      ? 'bg-slate-50 border-slate-100 text-slate-200 cursor-not-allowed' 
                      : copyTargetDays.includes(d) 
                        ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-100' 
                        : 'bg-white border-slate-100 text-slate-400 hover:border-slate-300'
                  }`}
                >
                  {dayShortNames[d-1]}
                </button>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <button onClick={() => { setCopyMode(null); setCopyTargetDays([]); }} className="flex-1 py-4 bg-slate-100 text-slate-600 font-bold rounded-2xl text-xs uppercase tracking-widest">
                Anuluj
              </button>
              <button 
                onClick={handleApplyCopy} 
                disabled={copyTargetDays.length === 0} 
                className="flex-1 py-4 bg-emerald-600 text-white font-black rounded-2xl text-xs uppercase tracking-widest shadow-xl shadow-emerald-100 disabled:opacity-50 disabled:shadow-none"
              >
                Zastosuj ({copyTargetDays.length})
              </button>
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
                <button onClick={() => setSwappingMealType(null)} className="p-2"><Icons.Plus className="rotate-45" /></button>
              </div>
              <input type="text" placeholder="Szukaj..." value={swapSearch} onChange={(e) => setSwapSearch(e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm" />
            </div>
            <div className="p-4 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {swappableMeals.map((meal, idx) => (
                <div key={idx} onClick={() => handleSwap(selectedDay, meal)} className="border border-slate-50 rounded-xl p-3 hover:border-emerald-500 hover:bg-emerald-50 cursor-pointer flex justify-between items-center group">
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-800 text-sm truncate">{meal.name}</h4>
                    <span className="text-[9px] font-bold text-emerald-600 uppercase">{meal.calories} kcal</span>
                  </div>
                  <Icons.ArrowRight className="w-3 h-3 text-slate-200" />
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
          <div className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95">
            <div className="bg-emerald-600 p-6 text-white shrink-0">
              <span className="text-[9px] font-black opacity-70 uppercase tracking-widest">{mealTypeLabels[selectedMeal.type]}</span>
              <h2 className="text-xl font-bold mb-1 leading-tight">{selectedMeal.name}</h2>
              <div className="flex gap-3 mt-3">
                <p className="text-[10px] font-bold bg-white/20 px-3 py-1 rounded-lg">{selectedMeal.calories} kcal</p>
                <p className="text-[10px] font-medium bg-white/10 px-3 py-1 rounded-lg">B: {selectedMeal.protein}g • T: {selectedMeal.fats}g • W: {selectedMeal.carbs}g</p>
              </div>
            </div>
            <div className="p-6 overflow-y-auto space-y-6">
              <section>
                <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Składniki</h3>
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
                <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Przygotowanie</h3>
                <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap italic">{selectedMeal.recipe}</div>
              </section>
            </div>
            <div className="p-4 border-t border-slate-50 shrink-0">
              <button onClick={() => setSelectedMeal(null)} className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl text-sm shadow-xl active:scale-95">Zamknij</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealPlanView;

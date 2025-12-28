
import React, { useState } from 'react';
import { WeeklyPlan, DayPlan, Meal } from '../types';
import { Icons } from '../constants';
import { MEAL_DATABASE } from '../services/mealDatabase';

interface MealPlanViewProps {
  mealPlan: WeeklyPlan;
  onRegenerate: () => void;
  onUpdateMeal: (day: number, mealType: string, newMeal: Meal) => void;
}

const MealPlanView: React.FC<MealPlanViewProps> = ({ mealPlan, onRegenerate, onUpdateMeal }) => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [swappingMealType, setSwappingMealType] = useState<string | null>(null);

  const currentDayPlan = mealPlan.days.find(d => d.day === selectedDay) || mealPlan.days[0];

  // Daily totals calculation
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
  };

  const getSwappableMeals = (type: string) => {
    const sharedTypes = ['breakfast', 'snack1', 'dinner'];
    if (sharedTypes.includes(type)) {
      return MEAL_DATABASE.filter(m => sharedTypes.includes(m.type));
    }
    return MEAL_DATABASE.filter(m => m.type === type);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Day Selector Sidebar */}
      <div className="lg:col-span-3 flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
        {mealPlan.days.map((dayPlan) => (
          <button
            key={dayPlan.day}
            onClick={() => setSelectedDay(dayPlan.day)}
            className={`flex-shrink-0 lg:w-full p-4 rounded-2xl border-2 transition-all text-left ${selectedDay === dayPlan.day ? 'border-emerald-500 bg-emerald-50' : 'border-slate-100 hover:border-slate-200'}`}
          >
            <span className={`block text-xs font-bold uppercase ${selectedDay === dayPlan.day ? 'text-emerald-600' : 'text-slate-400'}`}>Dzień {dayPlan.day}</span>
            <span className={`block font-semibold ${selectedDay === dayPlan.day ? 'text-emerald-900' : 'text-slate-600'}`}>
              {['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'][dayPlan.day - 1]}
            </span>
          </button>
        ))}
        <button onClick={onRegenerate} className="flex-shrink-0 lg:mt-4 p-4 rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 hover:text-emerald-500 hover:border-emerald-200 transition-all text-left">
          <span className="flex items-center gap-2 text-sm font-bold"><Icons.Plus />Nowy plan</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="lg:col-span-9 space-y-6">
        {/* Daily Summary Card */}
        <div className="bg-slate-800 rounded-3xl p-6 text-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold opacity-80 uppercase tracking-wider">Podsumowanie dnia</h3>
              <p className="text-3xl font-black text-emerald-400">{totals.calories} <span className="text-xl font-normal opacity-60">kcal</span></p>
            </div>
            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
              <span className="text-xs font-bold uppercase opacity-60">Status planu</span>
              <p className="text-sm font-bold text-emerald-300">Zbilansowany 5/5</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/5 p-3 rounded-xl border border-white/10">
              <span className="block text-[10px] font-bold uppercase opacity-50 mb-1">Białko</span>
              <span className="text-lg font-bold">{totals.protein}g</span>
              <div className="h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-emerald-500" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/10">
              <span className="block text-[10px] font-bold uppercase opacity-50 mb-1">Tłuszcze</span>
              <span className="text-lg font-bold">{totals.fats}g</span>
              <div className="h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-orange-400" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/10">
              <span className="block text-[10px] font-bold uppercase opacity-50 mb-1">Węglow.</span>
              <span className="text-lg font-bold">{totals.carbs}g</span>
              <div className="h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-blue-400" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Meals List */}
        <div className="space-y-4">
          {currentDayPlan.meals.map((meal, idx) => (
            <div key={idx} className="group bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4 cursor-pointer flex-grow" onClick={() => setSelectedMeal(meal)}>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0 font-bold group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">{idx + 1}</div>
                  <div className="min-w-0 flex-grow">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">{mealTypeLabels[meal.type] || meal.type}</span>
                    <h4 className="text-lg font-bold text-slate-800 leading-tight truncate">{meal.name}</h4>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-emerald-700 font-bold text-sm">{meal.calories} kcal</span>
                      <div className="flex gap-2 text-[10px] font-bold text-slate-400 uppercase">
                        <span>B: {meal.protein}g</span>
                        <span>T: {meal.fats}g</span>
                        <span>W: {meal.carbs}g</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setSwappingMealType(meal.type); }}
                    className="flex items-center gap-2 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-600 px-4 py-2 rounded-xl text-sm font-bold text-slate-500 transition-colors"
                  >
                    <Icons.Swap className="w-4 h-4" /> <span className="hidden sm:inline">Zmień</span>
                  </button>
                  <button 
                    onClick={() => setSelectedMeal(meal)}
                    className="bg-slate-800 hover:bg-emerald-600 px-4 py-2 rounded-xl text-sm font-bold text-white transition-colors"
                  >
                    Przepis
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals remain similarly structured but with macro info */}
      {swappingMealType && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSwappingMealType(null)}></div>
          <div className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden max-h-[85vh] flex flex-col shadow-2xl">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">Wybierz inne danie na {mealTypeLabels[swappingMealType]}</h2>
              <button onClick={() => setSwappingMealType(null)} className="p-2 hover:bg-slate-100 rounded-full"><Icons.Plus className="rotate-45" /></button>
            </div>
            <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getSwappableMeals(swappingMealType).map((meal, idx) => (
                <div key={idx} className="border border-slate-100 rounded-2xl p-4 hover:border-emerald-500 hover:bg-emerald-50 transition-all cursor-pointer flex flex-col justify-between" onClick={() => handleSwap(selectedDay, meal)}>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">{meal.name}</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-emerald-600 font-bold text-xs">{meal.calories} kcal</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">B:{meal.protein} T:{meal.fats} W:{meal.carbs}</span>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all">Wybierz</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedMeal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedMeal(null)}></div>
          <div className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl">
            <div className="bg-emerald-600 p-8 text-white relative">
              <button onClick={() => setSelectedMeal(null)} className="absolute top-4 right-4 text-white/80 hover:text-white"><Icons.Plus className="rotate-45 w-8 h-8" /></button>
              <div className="flex gap-4 mb-2">
                 <span className="text-emerald-200 text-xs font-bold uppercase tracking-widest">{mealTypeLabels[selectedMeal.type]}</span>
                 <span className="text-white text-xs font-bold uppercase bg-white/20 px-2 py-0.5 rounded-md">B:{selectedMeal.protein} T:{selectedMeal.fats} W:{selectedMeal.carbs}</span>
              </div>
              <h2 className="text-2xl font-bold">{selectedMeal.name}</h2>
              <p className="text-emerald-100 mt-1 font-bold">{selectedMeal.calories} kcal</p>
            </div>
            <div className="p-8 overflow-y-auto space-y-8">
              <section>
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><Icons.ShoppingBag />Składniki</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedMeal.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      <span className="text-slate-700"><span className="font-bold">{ing.amount}</span> {ing.item}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><Icons.ChefHat />Przygotowanie</h3>
                <div className="text-slate-600 leading-relaxed whitespace-pre-wrap bg-slate-50 p-6 rounded-2xl border border-slate-100">{selectedMeal.recipe}</div>
              </section>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button onClick={() => setSelectedMeal(null)} className="px-6 py-2 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-colors">Zamknij</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealPlanView;

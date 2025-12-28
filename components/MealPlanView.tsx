
import React, { useState, useMemo } from 'react';
import { WeeklyPlan, DayPlan, Meal } from '../types';
import { Icons } from '../constants';

interface MealPlanViewProps {
  mealPlan: WeeklyPlan;
  allAvailableMeals: Meal[];
  onRegenerate: () => void;
  onUpdateMeal: (day: number, mealType: string, newMeal: Meal) => void;
}

const MealPlanView: React.FC<MealPlanViewProps> = ({ mealPlan, allAvailableMeals, onRegenerate, onUpdateMeal }) => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [swappingMealType, setSwappingMealType] = useState<string | null>(null);
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
    // Kopiujemy posiłek, ale nadajemy mu typ slotu, do którego trafia
    const mealWithCorrectType = { ...meal, type: swappingMealType as any };
    onUpdateMeal(day, swappingMealType!, mealWithCorrectType);
    setSwappingMealType(null);
    setSwapSearch("");
  };

  const swappableMeals = useMemo(() => {
    if (!swappingMealType) return [];
    
    const sharedTypes = ['breakfast', 'snack1', 'dinner'];
    let filtered = allAvailableMeals;

    // Najpierw filtrujemy po typie
    if (sharedTypes.includes(swappingMealType)) {
      filtered = allAvailableMeals.filter(m => sharedTypes.includes(m.type));
    } else {
      filtered = allAvailableMeals.filter(m => m.type === swappingMealType);
    }

    // Następnie filtrujemy po wyszukiwarce
    if (swapSearch) {
      filtered = filtered.filter(m => m.name.toLowerCase().includes(swapSearch.toLowerCase()));
    }

    // Sortujemy: własne posiłki na górę (możemy je rozpoznać np. po braku w oryginalnej bazie lub specjalnej fladze, 
    // ale najprościej - jeśli nie są częścią MEAL_DATABASE z importu, choć tu mamy allAvailableMeals jako sumę)
    // Dla uproszczenia: sortujemy alfabetycznie, ale pokazujemy wszystkie pasujące.
    return filtered;
  }, [swappingMealType, allAvailableMeals, swapSearch]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Sidebar Dni */}
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
        <button onClick={onRegenerate} className="flex-shrink-0 lg:mt-4 p-4 rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 hover:text-emerald-500 transition-all text-left">
          <span className="flex items-center gap-2 text-sm font-bold"><Icons.Plus />Nowy plan AI</span>
        </button>
      </div>

      {/* Lista Posiłków */}
      <div className="lg:col-span-9 space-y-6">
        <div className="bg-slate-800 rounded-3xl p-6 text-white shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-sm font-bold opacity-60 uppercase">Podsumowanie dnia</h3>
              <p className="text-3xl font-black text-emerald-400">{totals.calories} kcal</p>
            </div>
            <div className="flex gap-4 text-center">
              <div><span className="block text-[10px] opacity-50 uppercase font-bold">Białko</span><span className="font-bold">{totals.protein}g</span></div>
              <div><span className="block text-[10px] opacity-50 uppercase font-bold">Tłuszcz</span><span className="font-bold">{totals.fats}g</span></div>
              <div><span className="block text-[10px] opacity-50 uppercase font-bold">Węgl.</span><span className="font-bold">{totals.carbs}g</span></div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {currentDayPlan.meals.map((meal, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex-grow cursor-pointer" onClick={() => setSelectedMeal(meal)}>
                   <span className="text-[10px] font-black text-emerald-600 uppercase tracking-tighter">{mealTypeLabels[meal.type]}</span>
                   <h4 className="text-lg font-bold text-slate-800">{meal.name}</h4>
                   <p className="text-sm font-bold text-slate-400">{meal.calories} kcal • B:{meal.protein} T:{meal.fats} W:{meal.carbs}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setSwappingMealType(meal.type)} className="p-3 bg-slate-50 text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-colors"><Icons.Swap className="w-5 h-5" /></button>
                  <button onClick={() => setSelectedMeal(meal)} className="px-6 py-2 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors">Przepis</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Wymiany */}
      {swappingMealType && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSwappingMealType(null)}></div>
          <div className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden max-h-[85vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-800">Wymień: {mealTypeLabels[swappingMealType]}</h2>
                <button onClick={() => setSwappingMealType(null)} className="p-2 hover:bg-slate-100 rounded-full"><Icons.Plus className="rotate-45" /></button>
              </div>
              <input 
                type="text" 
                placeholder="Szukaj po nazwie (np. Twoje własne danie...)" 
                value={swapSearch}
                onChange={(e) => setSwapSearch(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:border-emerald-500 outline-none"
              />
            </div>
            <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {swappableMeals.length > 0 ? swappableMeals.map((meal, idx) => (
                <div key={idx} onClick={() => handleSwap(selectedDay, meal)} className="group border border-slate-100 rounded-2xl p-4 hover:border-emerald-500 hover:bg-emerald-50 transition-all cursor-pointer flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1 group-hover:text-emerald-700">{meal.name}</h4>
                    <span className="text-xs font-bold text-emerald-600">{meal.calories} kcal</span>
                  </div>
                  <button className="mt-4 w-full py-2 bg-slate-800 text-white rounded-xl text-xs font-bold group-hover:bg-emerald-600 transition-colors">Wybierz</button>
                </div>
              )) : (
                <div className="col-span-full py-12 text-center text-slate-400 font-medium">Nie znaleziono pasujących posiłków.</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal Przepisu */}
      {selectedMeal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedMeal(null)}></div>
          <div className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl">
            <div className="bg-emerald-600 p-8 text-white">
              <span className="text-xs font-bold opacity-70 uppercase">{mealTypeLabels[selectedMeal.type]}</span>
              <h2 className="text-2xl font-bold">{selectedMeal.name}</h2>
              <p className="font-bold">{selectedMeal.calories} kcal</p>
            </div>
            <div className="p-8 overflow-y-auto space-y-8">
              <section>
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Icons.ShoppingBag /> Składniki</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedMeal.ingredients.map((ing, i) => (
                    <div key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm">
                      <span className="font-bold text-emerald-600">{ing.amount}</span> {ing.item}
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2"><Icons.ChefHat /> Przygotowanie</h3>
                <div className="bg-slate-50 p-4 rounded-2xl text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">{selectedMeal.recipe}</div>
              </section>
            </div>
            <button onClick={() => setSelectedMeal(null)} className="m-8 mt-0 py-3 bg-slate-800 text-white font-bold rounded-2xl">Zamknij</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealPlanView;

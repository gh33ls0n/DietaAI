
import React, { useState, useMemo } from 'react';
import { WeeklyPlan, DayPlan, Meal, Ingredient, Product, ProductCategory } from '../types';
import { Icons } from '../constants';
import { PRODUCT_DATABASE } from '../services/productDatabase';

interface MealPlanViewProps {
  mealPlan: WeeklyPlan;
  allAvailableMeals: Meal[];
  onRegenerate: () => void;
  onUpdateMeal: (day: number, mealType: string, newMeal: Meal) => void;
  onCopyDay: (sourceDay: number, targetDays: number[]) => void;
  onCopyMultipleMealsToDays: (meals: Meal[], targetDays: number[]) => void;
  onAddCustomMeal: (meal: Meal) => void;
}

// Globalna funkcja pomocnicza do ujednolicania nazw produktów - ulepszona o głębsze dopasowanie
export const getCanonicalProductName = (itemName: string): string => {
  if (!itemName) return "";
  const normalized = itemName.toLowerCase().trim();
  
  // 1. Sprawdź dokładne dopasowanie
  let match = PRODUCT_DATABASE.find(p => p.name.toLowerCase() === normalized);
  if (match) return match.name;

  // 2. Szukanie po rdzeniu każdego słowa (agresywne usuwanie końcówek polskich)
  const stripSuffix = (word: string) => word.replace(/(a|u|ego|iej|ej|ych|ich|m|mi|ach|ów|ę|ą|y)$/, '');
  
  const itemRoot = normalized.split(/\s+/).map(stripSuffix).join(' ');

  // Szukaj produktu, którego znormalizowana nazwa (bez końcówek) najbardziej pasuje
  // Sortujemy DB od najdłuższych nazw, żeby "Chleb żytni pełnoziarnisty" złapać przed "Chleb"
  const sortedDb = [...PRODUCT_DATABASE].sort((a, b) => b.name.length - a.name.length);

  for (const product of sortedDb) {
    const pName = product.name.toLowerCase();
    const pRoot = pName.split(/\s+/).map(stripSuffix).join(' ');
    
    // Jeśli znormalizowane rdzenie się zgadzają ALBO jedna nazwa zawiera drugą
    if (itemRoot === pRoot || normalized.includes(pName) || pName.includes(normalized) || itemRoot.startsWith(pRoot) || pRoot.startsWith(itemRoot)) {
      return product.name;
    }
  }

  return itemName.charAt(0).toUpperCase() + itemName.slice(1);
};

const MealPlanView: React.FC<MealPlanViewProps> = ({ 
  mealPlan, allAvailableMeals, onRegenerate, onUpdateMeal, onCopyDay, onCopyMultipleMealsToDays, onAddCustomMeal 
}) => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [swappingMealType, setSwappingMealType] = useState<string | null>(null);
  const [swappingIngredient, setSwappingIngredient] = useState<{ mealIndex: number, ingIndex: number } | null>(null);
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedMealIndices, setSelectedMealIndices] = useState<number[]>([]);
  const [copyMode, setCopyMode] = useState<'day' | 'multi-meal' | null>(null);
  const [copyTargetDays, setCopyTargetDays] = useState<number[]>([]);
  const [swapSearch, setSwapSearch] = useState("");

  const currentDayPlan = mealPlan.days.find(d => d.day === selectedDay) || mealPlan.days[0];

  const totals = currentDayPlan.meals.reduce((acc, m) => {
    const mult = m.multiplier ?? 1;
    return {
      calories: acc.calories + Math.round((m.calories || 0) * mult),
      protein: acc.protein + Math.round((m.protein || 0) * mult),
      fats: acc.fats + Math.round((m.fats || 0) * mult),
      carbs: acc.carbs + Math.round((m.carbs || 0) * mult),
    };
  }, { calories: 0, protein: 0, fats: 0, carbs: 0 });

  const mealTypeLabels: Record<string, string> = {
    breakfast: 'Śniadanie',
    snack1: 'II Śniadanie',
    lunch: 'Obiad',
    snack2: 'Podwieczorek',
    dinner: 'Kolacja'
  };

  const dayShortNames = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'];

  const findProductInDatabase = (itemName: string) => {
    const canonicalName = getCanonicalProductName(itemName).toLowerCase();
    return PRODUCT_DATABASE.find(p => p.name.toLowerCase() === canonicalName);
  };

  const formatAmount = (amount: string, itemName: string, mult: number): string => {
    const cleanAmount = amount.replace(/\s+/g, ' ').trim();
    if (mult === 1) return cleanAmount;
    const match = cleanAmount.match(/^(\d+\/\d+|\d+(?:[.,]\d+)?)\s*(.*)$/);
    if (!match) return cleanAmount;
    let val = parseFloat(match[1].replace(',', '.'));
    let unit = match[2].trim();
    let finalVal = val * mult;
    const displayVal = finalVal % 1 === 0 ? finalVal.toString() : finalVal.toFixed(1).replace('.', ',');
    return `${displayVal} ${unit}`;
  };

  const parseToGrams = (amount: string, itemName: string): number => {
    const match = amount.match(/^(\d+\/\d+|\d+(?:[.,]\d+)?)\s*(.*)$/);
    if (!match) return 0;
    let val = parseFloat(match[1].replace(',', '.'));
    const unit = match[2].trim().toLowerCase();
    const lowerName = itemName.toLowerCase();
    if (unit === 'g' || unit === 'gram' || unit === 'ml') return val;
    if (unit.includes('kromk')) return val * 30;
    if (unit.includes('plast')) return val * 20;
    if (unit.includes('łyż')) return unit.includes('ecz') ? val * 5 : val * 15;
    if (unit.includes('szt')) {
      if (lowerName.includes('jaj')) return val * 55;
      if (lowerName.includes('pomidor')) return val * 160;
      if (lowerName.includes('papryk')) return val * 140;
      return val * 100;
    }
    return val;
  };

  const handleApplyCopy = () => {
    if (copyTargetDays.length === 0) return;
    if (copyMode === 'day') {
      onCopyDay(selectedDay, copyTargetDays);
    } else if (copyMode === 'multi-meal') {
      const mealsToCopy = currentDayPlan.meals.filter((_, idx) => selectedMealIndices.includes(idx));
      onCopyMultipleMealsToDays(mealsToCopy, copyTargetDays);
    }
    setCopyMode(null);
    setCopyTargetDays([]);
    setIsSelectionMode(false);
    setSelectedMealIndices([]);
  };

  const toggleTargetDay = (d: number) => {
    setCopyTargetDays(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]);
  };

  const handleSwap = (day: number, newMeal: Meal) => {
    if (swappingMealType) {
      onUpdateMeal(day, swappingMealType, { ...newMeal, multiplier: 1 });
      setSwappingMealType(null);
      setSwapSearch("");
    }
  };

  const handleMultiplierChange = (mealType: string, newMult: number) => {
    const meal = currentDayPlan.meals.find(m => m.type === mealType);
    if (meal) {
      onUpdateMeal(selectedDay, mealType, { ...meal, multiplier: newMult });
    }
  };

  const handleIngredientSwap = (substituteProduct: Product) => {
    if (!swappingIngredient) return;
    const { mealIndex, ingIndex } = swappingIngredient;
    const meal = currentDayPlan.meals[mealIndex];
    const originalIng = meal.ingredients[ingIndex];
    const originalProduct = findProductInDatabase(originalIng.item);
    if (!originalProduct) {
      alert(`Błąd dopasowania produktu: ${originalIng.item}`);
      setSwappingIngredient(null);
      return;
    }
    const originalWeight = parseToGrams(originalIng.amount, originalIng.item);
    const originalCals = (originalWeight / 100) * originalProduct.calories;
    const newWeight = (originalCals * 100) / substituteProduct.calories;
    const newAmount = `${Math.round(newWeight)}${substituteProduct.unit}`;
    const newIngredients = [...meal.ingredients];
    newIngredients[ingIndex] = { item: substituteProduct.name, amount: newAmount };
    let totalCals = 0, totalP = 0, totalF = 0, totalC = 0;
    newIngredients.forEach(ing => {
      const p = findProductInDatabase(ing.item);
      const w = parseToGrams(ing.amount, ing.item);
      if (p) {
        totalCals += (w / 100) * p.calories;
        totalP += (w / 100) * p.protein;
        totalF += (w / 100) * p.fats;
        totalC += (w / 100) * p.carbs;
      }
    });
    const updatedMeal: Meal = { ...meal, ingredients: newIngredients, calories: Math.round(totalCals), protein: Math.round(totalP), fats: Math.round(totalF), carbs: Math.round(totalC) };
    onUpdateMeal(selectedDay, meal.type, updatedMeal);
    setSwappingIngredient(null);
  };

  const ingredientSubstituteOptions = useMemo(() => {
    if (!swappingIngredient) return [];
    const meal = currentDayPlan.meals[swappingIngredient.mealIndex];
    const ing = meal.ingredients[swappingIngredient.ingIndex];
    const matchedProduct = findProductInDatabase(ing.item);
    if (!matchedProduct) return [];
    return PRODUCT_DATABASE.filter(p => p.category === matchedProduct.category && p.name !== matchedProduct.name);
  }, [swappingIngredient, currentDayPlan]);

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
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 relative">
      {/* Sidebar Dni */}
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

      <div className="flex-grow space-y-4">
        {/* Suma Dnia */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 border-l-8 border-l-emerald-500">
          <div className="text-center sm:text-left">
            <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-0.5">Suma dnia</p>
            <div className="flex items-baseline gap-1.5 justify-center sm:justify-start">
              <span className="text-4xl font-black text-slate-800 tracking-tighter">{totals.calories}</span>
              <span className="text-xs font-black text-emerald-500 uppercase">kcal</span>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-3 w-full sm:w-auto">
            <div className="flex gap-2 w-full sm:w-auto">
              <button onClick={() => setIsSelectionMode(!isSelectionMode)} className={`flex-1 px-4 py-2 rounded-xl text-[9px] font-black uppercase border transition-all ${isSelectionMode ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600'}`}>{isSelectionMode ? 'Anuluj' : 'Wybierz'}</button>
              <button onClick={() => setCopyMode('day')} className="flex-1 bg-slate-900 text-white px-4 py-2 rounded-xl text-[9px] font-black uppercase shadow-md">Kopiuj Dzień</button>
            </div>
            <div className="flex gap-6">
              <div className="text-center"><span className="block text-[8px] text-slate-400 uppercase font-black">B</span><span className="text-xs font-bold text-slate-700">{totals.protein}g</span></div>
              <div className="text-center"><span className="block text-[8px] text-slate-400 uppercase font-black">T</span><span className="text-xs font-bold text-slate-700">{totals.fats}g</span></div>
              <div className="text-center"><span className="block text-[8px] text-slate-400 uppercase font-black">W</span><span className="text-xs font-bold text-slate-700">{totals.carbs}g</span></div>
            </div>
          </div>
        </div>

        {/* Lista Posiłków */}
        <div className="space-y-4 pb-24 lg:pb-0">
          {currentDayPlan.meals.map((meal, mealIdx) => {
            const mMult = meal.multiplier ?? 1;
            return (
              <div key={mealIdx} onClick={() => isSelectionMode ? setSelectedMealIndices(prev => prev.includes(mealIdx) ? prev.filter(i => i !== mealIdx) : [...prev, mealIdx]) : setSelectedMeal(meal)} className={`bg-white rounded-3xl border p-5 shadow-sm transition-all cursor-pointer group ${isSelectionMode && selectedMealIndices.includes(mealIdx) ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-100 hover:border-slate-200'}`}>
                <div className="flex items-start gap-4">
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[9px] font-black text-emerald-600 uppercase bg-emerald-50 px-2 py-0.5 rounded-lg">{mealTypeLabels[meal.type]}</span>
                      <span className="text-[10px] font-bold text-slate-400">{Math.round(meal.calories * mMult)} kcal</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 mb-3">{meal.name}</h4>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {meal.ingredients.map((ing, ingIdx) => (
                        <div key={ingIdx} className="bg-slate-50 border border-slate-100 px-2 py-1 rounded-lg flex items-center gap-1.5 relative">
                          <span className="text-[10px] text-slate-600 font-medium">{getCanonicalProductName(ing.item)}</span>
                          <span className="text-[10px] font-black text-emerald-600">{formatAmount(ing.amount, ing.item, mMult)}</span>
                        </div>
                      ))}
                    </div>

                    {!isSelectionMode && (
                      <div className="pt-3 border-t border-slate-50 flex items-center gap-4" onClick={e => e.stopPropagation()}>
                        <div className="flex-grow flex items-center gap-3">
                          <span className="text-[9px] font-black text-slate-300 uppercase">Porcja</span>
                          <input type="range" min="0.1" max="2.0" step="0.1" value={mMult} onChange={(e) => handleMultiplierChange(meal.type, parseFloat(e.target.value))} className="flex-grow h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
                          <span className="text-[10px] font-black text-emerald-600 w-8">{mMult.toFixed(1)}x</span>
                        </div>
                        <button onClick={(e) => { e.stopPropagation(); setSwappingMealType(meal.type); }} className="p-2 text-slate-300 hover:text-emerald-500 transition-colors"><Icons.Swap className="w-5 h-5" /></button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Wymiany Posiłku */}
      {swappingMealType && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSwappingMealType(null)}></div>
          <div className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden max-h-[85vh] flex flex-col shadow-2xl animate-in slide-in-from-bottom-4">
            <div className="p-5 border-b border-slate-100 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-800">Wymień cały posiłek</h2>
                  <p className="text-[10px] font-bold text-emerald-600 uppercase">Sekcja: {mealTypeLabels[swappingMealType]}</p>
                </div>
                <button onClick={() => setSwappingMealType(null)} className="p-2 bg-slate-50 rounded-full text-slate-400"><Icons.Plus className="rotate-45" /></button>
              </div>
              <input value={swapSearch} onChange={(e) => setSwapSearch(e.target.value)} placeholder="Szukaj dania..." className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm outline-none font-medium" />
            </div>
            
            <div className="p-5 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-3">
              {swappableMeals.map((meal, idx) => (
                <div key={idx} onClick={() => handleSwap(selectedDay, meal)} className="group bg-white border border-slate-100 rounded-2xl p-4 hover:border-emerald-500 hover:bg-emerald-50 transition-all cursor-pointer flex flex-col gap-2 shadow-sm">
                  <div className="flex justify-between items-start gap-2">
                    <div className="min-w-0">
                      <h4 className="font-bold text-slate-800 text-sm group-hover:text-emerald-700 truncate">{meal.name}</h4>
                      <div className="flex gap-2 items-center">
                        <span className="text-[9px] font-black text-emerald-600 uppercase tracking-tighter">{meal.calories} kcal</span>
                      </div>
                    </div>
                    <Icons.ArrowRight className="w-4 h-4 text-slate-200 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal Szczegółów Posiłku */}
      {selectedMeal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedMeal(null)}></div>
          <div className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95">
            <div className="bg-emerald-600 p-6 text-white shrink-0">
              <span className="text-[10px] font-black opacity-70 uppercase tracking-widest">{mealTypeLabels[selectedMeal.type]}</span>
              <h2 className="text-2xl font-bold mb-3 tracking-tight leading-tight">{selectedMeal.name}</h2>
            </div>
            <div className="p-8 overflow-y-auto space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center"><Icons.ChefHat className="w-5 h-5"/></div>
                  <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Sposób przygotowania</h3>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-slate-700 text-sm leading-relaxed whitespace-pre-wrap italic">
                  {selectedMeal.recipe || "Brak instrukcji."}
                </div>
              </section>

              <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-4">Produkty i ilości</h3>
                <div className="space-y-2">
                  {selectedMeal.ingredients.map((ing, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-slate-200 last:border-0">
                      <span className="text-sm text-slate-600">{getCanonicalProductName(ing.item)}</span>
                      <span className="text-sm font-bold text-emerald-600">{formatAmount(ing.amount, ing.item, selectedMeal.multiplier || 1)}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            <div className="p-4 border-t border-slate-50 shrink-0">
              <button onClick={() => setSelectedMeal(null)} className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl text-sm shadow-xl active:scale-95 transition-all">Zamknij</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Kopiowania */}
      {copyMode && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => { setCopyMode(null); setCopyTargetDays([]); }}></div>
          <div className="relative bg-white w-full max-w-sm rounded-3xl p-6 shadow-2xl animate-in zoom-in-95">
            <h2 className="text-lg font-bold text-slate-800 text-center mb-4">Kopiowanie</h2>
            <div className="grid grid-cols-4 gap-2 mb-6">
              {[1, 2, 3, 4, 5, 6, 7].map(d => (
                <button key={d} disabled={copyMode === 'day' && d === selectedDay} onClick={() => toggleTargetDay(d)} className={`h-10 rounded-xl font-bold text-xs border-2 transition-all ${copyMode === 'day' && d === selectedDay ? 'bg-slate-50 border-slate-100 text-slate-100' : copyTargetDays.includes(d) ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white border-slate-100 text-slate-400'}`}>{dayShortNames[d-1]}</button>
              ))}
            </div>
            <button onClick={handleApplyCopy} disabled={copyTargetDays.length === 0} className="w-full py-4 bg-emerald-600 text-white font-black rounded-2xl text-xs uppercase shadow-xl disabled:opacity-50">Zastosuj</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealPlanView;

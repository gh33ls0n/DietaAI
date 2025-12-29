
import React, { useState, useMemo, useEffect } from 'react';
import { MEAL_DATABASE } from '../services/mealDatabase';
import { PRODUCT_DATABASE } from '../services/productDatabase';
import { Icons } from '../constants';
import { Meal, Ingredient, Product, WeeklyPlan } from '../types';

interface InspirationsViewProps {
  customMeals: Meal[];
  mealPlan: WeeklyPlan | null;
  onAddCustomMeal: (meal: Meal) => void;
  onDeleteCustomMeal: (name: string) => void;
  onUpdateMeal: (day: number, mealType: string, newMeal: Meal) => void;
}

const InspirationsView: React.FC<InspirationsViewProps> = ({ 
  customMeals, mealPlan, onAddCustomMeal, onDeleteCustomMeal, onUpdateMeal 
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [searchQuery, setSearchQuery] = useState<{index: number, query: string}>({ index: -1, query: '' });
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});
  
  // Stan dla wstawiania do jadłospisu
  const [insertDay, setInsertDay] = useState(1);
  const [insertType, setInsertType] = useState<string>('lunch');

  const [newMeal, setNewMeal] = useState<Partial<Meal>>({
    name: '', calories: 0, protein: 0, fats: 0, carbs: 0, type: 'lunch', recipe: '',
    ingredients: [{ item: '', amount: '' }]
  });

  const mealTypeLabels: Record<string, string> = {
    breakfast: 'Śniadanie',
    snack1: 'II Śniadanie',
    lunch: 'Obiad',
    snack2: 'Podwieczorek',
    dinner: 'Kolacja'
  };

  // Grupowanie wszystkich dań (wbudowane + własne)
  const groupedMeals = useMemo(() => {
    const all = [...MEAL_DATABASE, ...customMeals];
    const groups: Record<string, Meal[]> = {
      breakfast: [],
      snack1: [],
      lunch: [],
      snack2: [],
      dinner: []
    };
    
    all.forEach(m => {
      if (groups[m.type]) {
        groups[m.type].push(m);
      } else {
        // Jeśli typ jest nieznany, wrzuć do śniadań jako fallback
        groups.breakfast.push(m);
      }
    });

    // Sortowanie alfabetyczne w grupach
    Object.keys(groups).forEach(key => {
      groups[key].sort((a, b) => a.name.localeCompare(b.name));
    });

    return groups;
  }, [customMeals]);

  const toggleCategory = (cat: string) => {
    setOpenCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  useEffect(() => {
    const totals = (newMeal.ingredients || []).reduce((acc, ing) => {
      const weight = parseFloat(ing.amount);
      const product = PRODUCT_DATABASE.find(p => p.name.toLowerCase() === ing.item.toLowerCase());
      if (product && !isNaN(weight)) {
        const r = weight / 100;
        return { cal: acc.cal + (product.calories * r), p: acc.p + (product.protein * r), f: acc.f + (product.fats * r), c: acc.c + (product.carbs * r) };
      }
      return acc;
    }, { cal: 0, p: 0, f: 0, c: 0 });
    setNewMeal(prev => ({ ...prev, calories: Math.round(totals.cal), protein: Math.round(totals.p), fats: Math.round(totals.f), carbs: Math.round(totals.c) }));
  }, [newMeal.ingredients]);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.query) return [];
    const q = searchQuery.query.toLowerCase();
    return PRODUCT_DATABASE.filter(p => p.name.toLowerCase().includes(q)).slice(0, 8);
  }, [searchQuery.query]);

  const handleInsert = () => {
    if (!selectedMeal || !mealPlan) return;
    onUpdateMeal(insertDay, insertType, { ...selectedMeal, type: insertType as any });
    alert(`Danie "${selectedMeal.name}" zostało wstawione do Dnia ${insertDay}!`);
    setSelectedMeal(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Biblioteka Dań</h2>
          <p className="text-slate-400 text-sm mt-0.5">Twoje centrum inspiracji i własnych przepisów.</p>
        </div>
        <button onClick={() => setIsAdding(true)} className="bg-emerald-600 text-white font-bold px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2 transition-all active:scale-95">
          <Icons.Plus /> Nowe danie
        </button>
      </div>

      {/* LISTA KATEGORII (AKORDEONY) */}
      <div className="space-y-3">
        {Object.entries(mealTypeLabels).map(([type, label]) => {
          const meals = groupedMeals[type] || [];
          const isOpen = !!openCategories[type];
          
          if (meals.length === 0) return null;

          return (
            <div key={type} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all">
              <button 
                onClick={() => toggleCategory(type)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isOpen ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                    <Icons.ChefHat className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-black text-slate-800 tracking-tight">{label}</h3>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{meals.length} pozycji</span>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45 text-emerald-500' : 'text-slate-300'}`}>
                  <Icons.Plus className="w-6 h-6" />
                </div>
              </button>

              {isOpen && (
                <div className="p-4 pt-0 border-t border-slate-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 animate-in slide-in-from-top-2 duration-300">
                  {meals.map((meal) => {
                    const isCustom = customMeals.some(cm => cm.name === meal.name);
                    return (
                      <div 
                        key={meal.name} 
                        onClick={() => { setSelectedMeal(meal); setInsertType(meal.type); }}
                        className={`group relative p-4 rounded-xl border transition-all cursor-pointer flex justify-between items-center ${isCustom ? 'bg-emerald-50/30 border-emerald-100 hover:border-emerald-500' : 'bg-white border-slate-100 hover:border-emerald-400 hover:shadow-md'}`}
                      >
                        <div className="min-w-0">
                          <h4 className="font-bold text-slate-800 text-sm truncate">{meal.name}</h4>
                          <div className="flex gap-2 items-center">
                            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-tighter">{meal.calories} kcal</span>
                            {isCustom && <span className="text-[8px] font-black bg-emerald-500 text-white px-1.5 py-0.5 rounded uppercase">Mój</span>}
                          </div>
                        </div>
                        {isCustom && (
                          <button 
                            onClick={(e) => { e.stopPropagation(); onDeleteCustomMeal(meal.name); }} 
                            className="opacity-0 group-hover:opacity-100 p-2 text-slate-300 hover:text-red-500 transition-all"
                          >
                            <Icons.Plus className="rotate-45 w-4 h-4" />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* FORMULARZ DODAWANIA NOWEGO DANIA */}
      {isAdding && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsAdding(false)}></div>
          <div className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">Kalkulator Dania</h2>
              <button onClick={() => setIsAdding(false)} className="p-2 hover:bg-slate-100 rounded-full"><Icons.Plus className="rotate-45" /></button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (newMeal.name) { onAddCustomMeal(newMeal as Meal); setIsAdding(false); }
            }} className="p-6 overflow-y-auto space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required placeholder="Nazwa dania" value={newMeal.name} onChange={e => setNewMeal({...newMeal, name: e.target.value})} className="px-4 py-2 bg-slate-50 border rounded-xl outline-none" />
                <select value={newMeal.type} onChange={e => setNewMeal({...newMeal, type: e.target.value as any})} className="px-4 py-2 bg-slate-50 border rounded-xl outline-none">
                  <option value="breakfast">Śniadanie</option>
                  <option value="snack1">II Śniadanie</option>
                  <option value="lunch">Obiad</option>
                  <option value="snack2">Podwieczorek</option>
                  <option value="dinner">Kolacja</option>
                </select>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl text-white flex justify-around text-center">
                <div><p className="text-[8px] opacity-40 uppercase">Kcal</p><p className="text-xl font-bold text-emerald-400">{newMeal.calories}</p></div>
                <div><p className="text-[8px] opacity-40 uppercase">B (g)</p><p className="text-sm font-bold">{newMeal.protein}</p></div>
                <div><p className="text-[8px] opacity-40 uppercase">T (g)</p><p className="text-sm font-bold">{newMeal.fats}</p></div>
                <div><p className="text-[8px] opacity-40 uppercase">W (g)</p><p className="text-sm font-bold">{newMeal.carbs}</p></div>
              </div>
              <div className="space-y-2">
                {newMeal.ingredients?.map((ing, idx) => (
                  <div key={idx} className="flex gap-2 relative">
                    <input placeholder="Produkt" value={ing.item} onChange={e => {
                      const u = [...(newMeal.ingredients || [])]; u[idx].item = e.target.value;
                      setNewMeal({...newMeal, ingredients: u}); setSearchQuery({index: idx, query: e.target.value});
                    }} className="flex-grow px-3 py-2 bg-slate-50 border rounded-lg text-sm" />
                    <input placeholder="g" type="number" value={ing.amount} onChange={e => {
                      const u = [...(newMeal.ingredients || [])]; u[idx].amount = e.target.value;
                      setNewMeal({...newMeal, ingredients: u});
                    }} className="w-20 px-3 py-2 bg-slate-50 border rounded-lg text-sm" />
                    {searchQuery.index === idx && filteredProducts.length > 0 && (
                      <div className="absolute z-50 top-full left-0 right-0 bg-white border shadow-xl rounded-xl mt-1 overflow-hidden">
                        {filteredProducts.map(p => (
                          <button key={p.name} type="button" onClick={() => {
                            const u = [...(newMeal.ingredients || [])]; u[idx].item = p.name;
                            setNewMeal({...newMeal, ingredients: u}); setSearchQuery({index: -1, query: ''});
                          }} className="w-full text-left px-4 py-2 hover:bg-emerald-50 text-xs flex justify-between">
                            <span>{p.name}</span><span className="text-emerald-600">{p.calories} kcal</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <button type="button" onClick={() => setNewMeal({...newMeal, ingredients: [...(newMeal.ingredients || []), {item: '', amount: ''}]})} className="text-emerald-600 text-xs font-bold">+ Dodaj składnik</button>
              </div>
              <textarea placeholder="Przepis..." value={newMeal.recipe} onChange={e => setNewMeal({...newMeal, recipe: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border rounded-xl min-h-[100px] text-sm" />
              <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg">Zapisz w moich posiłkach</button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL PODGLĄDU DANIA I WSTAWIANIA DO JADŁOSPISU */}
      {selectedMeal && (
        <div className="fixed inset-0 z-[160] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedMeal(null)}></div>
          <div className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95">
            <div className="bg-emerald-600 p-6 text-white flex justify-between items-start">
              <div>
                <span className="text-[10px] font-black opacity-70 uppercase tracking-widest">{mealTypeLabels[selectedMeal.type] || "Danie"}</span>
                <h2 className="text-2xl font-bold leading-tight tracking-tight">{selectedMeal.name}</h2>
                <div className="flex gap-2 mt-2">
                  <p className="text-xs font-bold bg-white/20 inline-block px-3 py-1 rounded-lg">{selectedMeal.calories} kcal</p>
                  <p className="text-xs font-medium bg-white/10 inline-block px-3 py-1 rounded-lg">B: {selectedMeal.protein}g • T: {selectedMeal.fats}g • W: {selectedMeal.carbs}g</p>
                </div>
              </div>
              <button onClick={() => setSelectedMeal(null)} className="p-2 hover:bg-white/10 rounded-full transition-all"><Icons.Plus className="rotate-45" /></button>
            </div>

            <div className="p-6 overflow-y-auto space-y-8">
              {/* Sekcja wstawiania */}
              <section className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                <h3 className="text-[10px] font-black text-emerald-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Icons.Swap className="w-4 h-4"/> Wstaw do jadłospisu
                </h3>
                {!mealPlan ? (
                  <p className="text-xs text-emerald-600 font-bold">Najpierw wygeneruj lub wczytaj jadłospis.</p>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-slate-400 uppercase">Dzień</label>
                        <select value={insertDay} onChange={e => setInsertDay(parseInt(e.target.value))} className="w-full px-3 py-2 bg-white border rounded-xl text-sm font-bold outline-none">
                          {[1,2,3,4,5,6,7].map(d => <option key={d} value={d}>Dzień {d}</option>)}
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-slate-400 uppercase">Posiłek</label>
                        <select value={insertType} onChange={e => setInsertType(e.target.value)} className="w-full px-3 py-2 bg-white border rounded-xl text-sm font-bold outline-none">
                          {Object.entries(mealTypeLabels).map(([val, label]) => <option key={val} value={val}>{label}</option>)}
                        </select>
                      </div>
                    </div>
                    <button onClick={handleInsert} className="w-full bg-emerald-600 text-white font-black py-4 rounded-xl shadow-md hover:bg-emerald-700 transition-all active:scale-95 text-xs">
                      POTWIERDŹ WSTAWIENIE
                    </button>
                  </div>
                )}
              </section>

              <section>
                <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4">Składniki</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedMeal.ingredients.map((ing, i) => (
                    <div key={i} className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs flex justify-between">
                      <span className="text-slate-600 font-medium">{ing.item}</span>
                      <span className="font-bold text-emerald-600">{ing.amount}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4">Przepis</h3>
                <div className="bg-slate-50 p-5 rounded-2xl text-slate-600 text-xs leading-relaxed whitespace-pre-wrap italic opacity-80">{selectedMeal.recipe}</div>
              </section>
            </div>
            <div className="p-4 border-t border-slate-50 shrink-0">
               <button onClick={() => setSelectedMeal(null)} className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl text-sm shadow-xl active:scale-95">Zamknij podgląd</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InspirationsView;

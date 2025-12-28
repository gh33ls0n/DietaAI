
import React, { useState, useMemo, useEffect } from 'react';
import { MEAL_DATABASE } from '../services/mealDatabase';
import { PRODUCT_DATABASE } from '../services/productDatabase';
import { Icons, APP_NAME } from '../constants';
import { Meal, Ingredient, Product } from '../types';

interface InspirationsViewProps {
  customMeals: Meal[];
  onAddCustomMeal: (meal: Meal) => void;
  onDeleteCustomMeal: (name: string) => void;
}

const InspirationsView: React.FC<InspirationsViewProps> = ({ customMeals, onAddCustomMeal, onDeleteCustomMeal }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [searchQuery, setSearchQuery] = useState<{index: number, query: string}>({ index: -1, query: '' });
  
  const [newMeal, setNewMeal] = useState<Partial<Meal>>({
    name: '',
    calories: 0,
    protein: 0,
    fats: 0,
    carbs: 0,
    type: 'lunch',
    recipe: '',
    ingredients: [{ item: '', amount: '' }]
  });

  // Auto-calculate totals whenever ingredients change
  useEffect(() => {
    const ings = newMeal.ingredients || [];
    const totals = ings.reduce((acc, ing) => {
      return {
        cal: acc.cal + (ing.calories || 0),
        p: acc.p + (ing.protein || 0),
        f: acc.f + (ing.fats || 0),
        c: acc.c + (ing.carbs || 0),
      };
    }, { cal: 0, p: 0, f: 0, c: 0 });

    setNewMeal(prev => ({
      ...prev,
      calories: Math.round(totals.cal),
      protein: Math.round(totals.p),
      fats: Math.round(totals.f),
      carbs: Math.round(totals.c)
    }));
  }, [newMeal.ingredients]);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.query) return [];
    return PRODUCT_DATABASE.filter(p => 
      p.name.toLowerCase().includes(searchQuery.query.toLowerCase())
    ).slice(0, 8);
  }, [searchQuery.query]);

  const handleSelectProduct = (product: Product, index: number) => {
    const updated = [...(newMeal.ingredients || [])];
    const amount = updated[index].amount;
    
    updated[index] = { ...updated[index], item: product.name };
    
    // Przelicz od razu po wyborze, jeśli podano ilość
    const weight = parseFloat(amount);
    if (!isNaN(weight)) {
      const ratio = weight / 100;
      updated[index].calories = product.calories * ratio;
      updated[index].protein = product.protein * ratio;
      updated[index].fats = product.fats * ratio;
      updated[index].carbs = product.carbs * ratio;
    }

    setNewMeal(prev => ({ ...prev, ingredients: updated }));
    setSearchQuery({ index: -1, query: '' });
  };

  const handleUpdateIngredient = (index: number, field: keyof Ingredient, value: string) => {
    const updated = [...(newMeal.ingredients || [])];
    const currentIng = updated[index];
    
    if (field === 'item') {
      currentIng.item = value;
      setSearchQuery({ index, query: value });
      
      // Próbuj dopasować w locie, jeśli użytkownik wpisał całą nazwę
      const exactProduct = PRODUCT_DATABASE.find(p => p.name.toLowerCase() === value.toLowerCase());
      if (exactProduct) {
        const weight = parseFloat(currentIng.amount);
        if (!isNaN(weight)) {
          const ratio = weight / 100;
          currentIng.calories = exactProduct.calories * ratio;
          currentIng.protein = exactProduct.protein * ratio;
          currentIng.fats = exactProduct.fats * ratio;
          currentIng.carbs = exactProduct.carbs * ratio;
        }
      } else {
        // Resetuj makro jeśli produkt nie istnieje
        currentIng.calories = 0;
        currentIng.protein = 0;
        currentIng.fats = 0;
        currentIng.carbs = 0;
      }
    } else if (field === 'amount') {
      currentIng.amount = value;
      const weight = parseFloat(value);
      const product = PRODUCT_DATABASE.find(p => p.name.toLowerCase() === currentIng.item.toLowerCase());
      
      if (product && !isNaN(weight)) {
        const ratio = weight / 100;
        currentIng.calories = product.calories * ratio;
        currentIng.protein = product.protein * ratio;
        currentIng.fats = product.fats * ratio;
        currentIng.carbs = product.carbs * ratio;
      }
    }
    
    setNewMeal(prev => ({ ...prev, ingredients: updated }));
  };

  const handleRemoveIngredient = (index: number) => {
    const updated = (newMeal.ingredients || []).filter((_, i) => i !== index);
    if (updated.length === 0) updated.push({ item: '', amount: '' });
    setNewMeal(prev => ({ ...prev, ingredients: updated }));
  };

  const handleAddIngredientRow = () => {
    setNewMeal(prev => ({
      ...prev,
      ingredients: [...(prev.ingredients || []), { item: '', amount: '' }]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMeal.name && (newMeal.calories || 0) > 0) {
      onAddCustomMeal(newMeal as Meal);
      setIsAdding(false);
      setNewMeal({
        name: '',
        calories: 0, protein: 0, fats: 0, carbs: 0,
        type: 'lunch', recipe: '',
        ingredients: [{ item: '', amount: '' }]
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Baza Posiłków</h2>
          <p className="text-slate-500 text-sm">Przeglądaj dania lub dodaj własne z automatycznym kalkulatorem Excel.</p>
        </div>
        <button onClick={() => setIsAdding(true)} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2 transition-all active:scale-95">
          <Icons.Plus /> Dodaj własny posiłek
        </button>
      </div>

      {isAdding && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsAdding(false)}></div>
          <div className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">Nowy Posiłek</h2>
              <button onClick={() => setIsAdding(false)} className="p-2 hover:bg-slate-100 rounded-full"><Icons.Plus className="rotate-45" /></button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase">Nazwa Twojego dania</label>
                  <input required placeholder="np. Leczo z cukinii" value={newMeal.name} onChange={e => setNewMeal({...newMeal, name: e.target.value})} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase">Gdzie w jadłospisie?</label>
                  <select value={newMeal.type} onChange={e => setNewMeal({...newMeal, type: e.target.value as any})} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 outline-none">
                    <option value="breakfast">Śniadanie / Kolacja</option>
                    <option value="lunch">Obiad (ciepły)</option>
                    <option value="snack2">Podwieczorek / Słodkie</option>
                  </select>
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl text-white">
                <p className="text-[10px] font-bold opacity-40 uppercase mb-4 text-center tracking-widest">Wartości odżywcze całości</p>
                <div className="flex justify-around text-center">
                  <div><span className="block text-[10px] font-bold opacity-60 uppercase mb-1">Kcal</span><span className="text-2xl font-black text-emerald-400">{newMeal.calories}</span></div>
                  <div><span className="block text-[10px] font-bold opacity-60 uppercase mb-1">B (g)</span><span className="text-xl font-bold">{newMeal.protein}</span></div>
                  <div><span className="block text-[10px] font-bold opacity-60 uppercase mb-1">T (g)</span><span className="text-xl font-bold">{newMeal.fats}</span></div>
                  <div><span className="block text-[10px] font-bold opacity-60 uppercase mb-1">W (g)</span><span className="text-xl font-bold">{newMeal.carbs}</span></div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-400 uppercase">Składniki (wpisz np. "Cukinia")</label>
                {newMeal.ingredients?.map((ing, idx) => {
                  const isMatch = PRODUCT_DATABASE.some(p => p.name.toLowerCase() === ing.item.toLowerCase());
                  return (
                    <div key={idx} className="space-y-2">
                      <div className="flex gap-2 relative items-center">
                        <div className="flex-grow">
                          <div className="relative">
                            <input 
                              placeholder="Szukaj produktu..." 
                              value={ing.item} 
                              onChange={e => handleUpdateIngredient(idx, 'item', e.target.value)} 
                              className={`w-full px-4 py-3 bg-slate-50 border-2 rounded-2xl text-sm outline-none transition-all ${isMatch ? 'border-emerald-100 focus:border-emerald-500' : 'border-slate-100 focus:border-emerald-500'}`} 
                            />
                            {isMatch && (
                              <div className="absolute right-3 top-3.5 text-emerald-500" title="Produkt rozpoznany!">
                                <Icons.Check className="w-4 h-4" />
                              </div>
                            )}
                          </div>
                          {searchQuery.index === idx && filteredProducts.length > 0 && (
                            <div className="absolute z-20 top-full left-0 right-0 bg-white border border-slate-200 shadow-2xl rounded-2xl mt-2 overflow-hidden max-h-48 overflow-y-auto">
                              {filteredProducts.map((p, pIdx) => (
                                <button key={pIdx} type="button" onClick={() => handleSelectProduct(p, idx)} className="w-full text-left px-5 py-3 hover:bg-emerald-50 text-sm flex justify-between border-b border-slate-50 last:border-0">
                                  <span className="font-bold text-slate-700">{p.name}</span>
                                  <span className="text-emerald-600 text-xs font-bold">{p.calories} kcal/100g</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="w-24 relative">
                          <input 
                            placeholder="Waga" 
                            value={ing.amount} 
                            onChange={e => handleUpdateIngredient(idx, 'amount', e.target.value)} 
                            className="w-full px-3 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm outline-none focus:border-emerald-500" 
                          />
                          <span className="absolute right-2 top-3 text-[10px] font-bold text-slate-300">g</span>
                        </div>
                        <button type="button" onClick={() => handleRemoveIngredient(idx)} className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                           <Icons.Plus className="w-5 h-5 rotate-45" />
                        </button>
                      </div>
                    </div>
                  );
                })}
                <button type="button" onClick={handleAddIngredientRow} className="bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold py-2 px-4 rounded-xl flex items-center gap-1 transition-all"><Icons.Plus className="w-3 h-3"/> Dodaj kolejny składnik</button>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase">Twój przepis (krótko)</label>
                <textarea placeholder="np. Cukinię pokroić w kostkę, dusić z pomidorami..." value={newMeal.recipe} onChange={e => setNewMeal({...newMeal, recipe: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl min-h-[100px] text-sm focus:border-emerald-500 outline-none" />
              </div>

              <button type="submit" disabled={!newMeal.name || (newMeal.calories || 0) <= 0} className="w-full bg-emerald-600 disabled:bg-slate-300 text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-emerald-700 transition-all active:scale-95">Zapisz w swojej bazie</button>
            </form>
          </div>
        </div>
      )}

      {/* User's Custom Meals Section */}
      {customMeals.length > 0 && (
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-slate-700 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Twoje własne posiłki</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customMeals.map((meal, idx) => (
              <div key={idx} className="bg-white rounded-3xl border-2 border-emerald-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow group relative">
                <button onClick={() => onDeleteCustomMeal(meal.name)} className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-full z-10 transition-colors"><Icons.Plus className="rotate-45 w-4 h-4" /></button>
                <div className="h-24 bg-emerald-50 flex items-center justify-center text-emerald-300"><Icons.ChefHat className="w-10 h-10" /></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest bg-emerald-100 px-2 py-1 rounded-md">WŁASNY</span>
                    <span className="font-bold text-slate-700 text-sm">{meal.calories} kcal</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 truncate">{meal.name}</h3>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-bold text-slate-500 px-2 py-1 bg-slate-50 rounded-lg">B: {meal.protein}g</span>
                    <span className="text-[10px] font-bold text-slate-500 px-2 py-1 bg-slate-50 rounded-lg">T: {meal.fats}g</span>
                    <span className="text-[10px] font-bold text-slate-500 px-2 py-1 bg-slate-50 rounded-lg">W: {meal.carbs}g</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <hr className="border-slate-100" />

      {/* Main Database Section */}
      <h3 className="text-lg font-bold text-slate-700">Standardowa baza posiłków</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MEAL_DATABASE.map((meal, idx) => (
          <div key={idx} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
            <div className="h-32 bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white relative overflow-hidden">
               <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-500"><Icons.Apple className="w-full h-full scale-150 rotate-12" /></div>
               <div className="z-10 bg-white/20 backdrop-blur-md p-3 rounded-full"><Icons.ChefHat /></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded-md">BAZA {APP_NAME}</span>
                <span className="font-bold text-slate-700 text-sm">{meal.calories} kcal</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-4 truncate">{meal.name}</h3>
              <div className="flex flex-wrap gap-2">
                  {meal.ingredients?.slice(0, 3).map((ing, i) => (
                    <span key={i} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-1 rounded-lg">{ing.item}</span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InspirationsView;

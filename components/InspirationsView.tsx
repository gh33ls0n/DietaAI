
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

  // Reaktywne przeliczanie sumy kalorii i makro na podstawie składników
  useEffect(() => {
    const ings = newMeal.ingredients || [];
    const totals = ings.reduce((acc, ing) => {
      // Szukamy produktu w bazie (niewrażliwe na wielkość liter)
      const weight = parseFloat(ing.amount);
      const product = PRODUCT_DATABASE.find(p => p.name.toLowerCase() === ing.item.toLowerCase());
      
      if (product && !isNaN(weight)) {
        const ratio = weight / 100;
        return {
          cal: acc.cal + (product.calories * ratio),
          p: acc.p + (product.protein * ratio),
          f: acc.f + (product.fats * ratio),
          c: acc.c + (product.carbs * ratio),
        };
      }
      return acc;
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
    const q = searchQuery.query.toLowerCase();
    return PRODUCT_DATABASE.filter(p => 
      p.name.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [searchQuery.query]);

  const handleSelectProduct = (product: Product, index: number) => {
    const updated = [...(newMeal.ingredients || [])];
    updated[index] = { ...updated[index], item: product.name };
    setNewMeal(prev => ({ ...prev, ingredients: updated }));
    setSearchQuery({ index: -1, query: '' });
  };

  const handleUpdateIngredient = (index: number, field: keyof Ingredient, value: string) => {
    const updated = [...(newMeal.ingredients || [])];
    updated[index] = { ...updated[index], [field]: value };
    
    if (field === 'item') {
      setSearchQuery({ index, query: value });
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
          <h2 className="text-2xl font-bold text-slate-800">Moja Baza Posiłków</h2>
          <p className="text-slate-500 text-sm">Dodaj swoje ulubione dania. Składniki zostaną przeliczone automatycznie.</p>
        </div>
        <button onClick={() => setIsAdding(true)} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2 transition-all active:scale-95">
          <Icons.Plus /> Stwórz własne danie
        </button>
      </div>

      {isAdding && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsAdding(false)}></div>
          <div className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">Nowy Posiłek (Kalkulator)</h2>
              <button onClick={() => setIsAdding(false)} className="p-2 hover:bg-slate-100 rounded-full"><Icons.Plus className="rotate-45" /></button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase">Nazwa dania</label>
                  <input required placeholder="np. Leczo z cukinii" value={newMeal.name} onChange={e => setNewMeal({...newMeal, name: e.target.value})} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase">Kategoria</label>
                  <select value={newMeal.type} onChange={e => setNewMeal({...newMeal, type: e.target.value as any})} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 outline-none">
                    <option value="breakfast">Śniadanie / Kolacja</option>
                    <option value="lunch">Obiad</option>
                    <option value="snack2">Przekąska / Deser</option>
                  </select>
                </div>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl text-white shadow-inner">
                <p className="text-[10px] font-bold opacity-40 uppercase mb-4 text-center tracking-widest">Suma wartości odżywczych</p>
                <div className="flex justify-around text-center">
                  <div><span className="block text-[10px] font-bold opacity-60 uppercase mb-1">Kcal</span><span className="text-2xl font-black text-emerald-400">{newMeal.calories}</span></div>
                  <div><span className="block text-[10px] font-bold opacity-60 uppercase mb-1">B (g)</span><span className="text-xl font-bold">{newMeal.protein}</span></div>
                  <div><span className="block text-[10px] font-bold opacity-60 uppercase mb-1">T (g)</span><span className="text-xl font-bold">{newMeal.fats}</span></div>
                  <div><span className="block text-[10px] font-bold opacity-60 uppercase mb-1">W (g)</span><span className="text-xl font-bold">{newMeal.carbs}</span></div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-400 uppercase">Składniki (np. Cukinia, Kurczak)</label>
                {newMeal.ingredients?.map((ing, idx) => {
                  const isMatch = PRODUCT_DATABASE.some(p => p.name.toLowerCase() === ing.item.toLowerCase());
                  return (
                    <div key={idx} className="space-y-2">
                      <div className="flex gap-2 relative items-center">
                        <div className="flex-grow">
                          <div className="relative">
                            <input 
                              placeholder="Produkt..." 
                              value={ing.item} 
                              onChange={e => handleUpdateIngredient(idx, 'item', e.target.value)} 
                              className={`w-full px-4 py-3 bg-slate-50 border-2 rounded-2xl text-sm outline-none transition-all ${isMatch ? 'border-emerald-100 bg-emerald-50/30' : 'border-slate-100 focus:border-emerald-500'}`} 
                            />
                            {isMatch && (
                              <div className="absolute right-3 top-3.5 text-emerald-500 animate-in fade-in zoom-in">
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
                            type="number"
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
                <button type="button" onClick={handleAddIngredientRow} className="text-emerald-600 text-xs font-bold py-2 px-4 rounded-xl flex items-center gap-1 hover:bg-emerald-50 transition-all"><Icons.Plus className="w-3 h-3"/> Dodaj składnik</button>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase">Opis / Przepis</label>
                <textarea placeholder="Jak przygotować to danie?" value={newMeal.recipe} onChange={e => setNewMeal({...newMeal, recipe: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl min-h-[100px] text-sm focus:border-emerald-500 outline-none" />
              </div>

              <button type="submit" disabled={!newMeal.name || (newMeal.calories || 0) <= 0} className="w-full bg-emerald-600 disabled:bg-slate-300 text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-emerald-700 transition-all active:scale-95">Zapisz w moich posiłkach</button>
            </form>
          </div>
        </div>
      )}

      {/* Wyświetlanie własnych posiłków */}
      {customMeals.length > 0 && (
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-slate-700">Moje dania</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customMeals.map((meal, idx) => (
              <div key={idx} className="bg-white rounded-3xl border-2 border-emerald-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow group relative">
                <button onClick={() => onDeleteCustomMeal(meal.name)} className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-full z-10 transition-colors"><Icons.Plus className="rotate-45 w-4 h-4" /></button>
                <div className="h-20 bg-emerald-50 flex items-center justify-center text-emerald-200"><Icons.ChefHat className="w-8 h-8" /></div>
                <div className="p-6">
                  <span className="text-[9px] font-bold text-emerald-600 uppercase bg-emerald-100 px-2 py-1 rounded mb-2 inline-block">WŁASNE</span>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 truncate">{meal.name}</h3>
                  <p className="text-sm font-bold text-slate-400">{meal.calories} kcal</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <hr className="border-slate-100" />
      
      <h3 className="text-lg font-bold text-slate-700">Standardowe inspiracje</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MEAL_DATABASE.slice(0, 6).map((meal, idx) => (
          <div key={idx} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 opacity-60">
            <h3 className="text-sm font-bold text-slate-800 mb-1 truncate">{meal.name}</h3>
            <span className="text-xs text-slate-400">{meal.calories} kcal</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InspirationsView;


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
    name: '', calories: 0, protein: 0, fats: 0, carbs: 0, type: 'lunch', recipe: '',
    ingredients: [{ item: '', amount: '' }]
  });

  const totalInLibrary = MEAL_DATABASE.length + customMeals.length;

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

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-800">Baza Posiłków</h2>
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-black uppercase">
              {totalInLibrary} dań
            </span>
          </div>
          <p className="text-slate-500 text-sm">Przeglądaj lub dodawaj własne przepisy.</p>
        </div>
        <button onClick={() => setIsAdding(true)} className="bg-emerald-600 text-white font-bold px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2 transition-all active:scale-95">
          <Icons.Plus /> Nowe danie
        </button>
      </div>

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
                  <option value="breakfast">Śniadanie / Kolacja</option>
                  <option value="lunch">Obiad</option>
                  <option value="snack2">Przekąska / Deser</option>
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

      {customMeals.length > 0 && (
        <section className="space-y-4">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Moje przepisy</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {customMeals.map(meal => (
              <div key={meal.name} className="bg-white p-4 rounded-2xl border-2 border-emerald-50 shadow-sm flex justify-between items-center group">
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{meal.name}</h4>
                  <p className="text-[10px] text-slate-400 font-bold">{meal.calories} kcal</p>
                </div>
                <button onClick={() => onDeleteCustomMeal(meal.name)} className="p-2 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><Icons.Plus className="rotate-45 w-4 h-4" /></button>
              </div>
            ))}
          </div>
        </section>
      )}

      <hr className="border-slate-100" />
      <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Wbudowana baza</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 opacity-70">
        {MEAL_DATABASE.slice(0, 9).map(m => (
          <div key={m.name} className="bg-white p-4 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-700 text-sm truncate">{m.name}</h4>
            <p className="text-[10px] text-slate-400">{m.calories} kcal</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InspirationsView;

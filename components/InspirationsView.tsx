
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
  
  const [insertDay, setInsertDay] = useState(1);
  const [insertType, setInsertType] = useState<string>('lunch');

  const [newMeal, setNewMeal] = useState<Partial<Meal>>({
    name: '', calories: 0, protein: 0, fats: 0, carbs: 0, type: 'lunch', recipe: '',
    ingredients: [{ item: '', amount: '' }]
  });

  const displayGroups = [
    { id: 'zupy', label: 'Zupy i Kremy', icon: <Icons.ChefHat className="w-5 h-5" /> },
    { id: 'kurczak', label: 'Drób (Kurczak, Indyk)', icon: <Icons.Apple className="w-5 h-5" /> },
    { id: 'wolowina', label: 'Wołowina', icon: <Icons.ChefHat className="w-5 h-5" /> },
    { id: 'wieprzowina', label: 'Wieprzowina', icon: <Icons.ChefHat className="w-5 h-5" /> },
    { id: 'ryby', label: 'Ryby i Owoce Morza', icon: <Icons.ChefHat className="w-5 h-5" /> },
    { id: 'sniadania', label: 'Śniadania i Kolacje', icon: <Icons.Clipboard className="w-5 h-5" /> },
    { id: 'koktajle', label: 'Koktajle i Desery', icon: <Icons.Apple className="w-5 h-5" /> },
    { id: 'inne', label: 'Inne i Wege', icon: <Icons.Plus className="w-5 h-5" /> }
  ];

  const mealTypeLabels: Record<string, string> = {
    breakfast: 'Śniadanie',
    snack1: 'II Śniadanie',
    lunch: 'Obiad',
    snack2: 'Podwieczorek',
    dinner: 'Kolacja'
  };

  const getCategoryForMeal = (meal: Meal): string => {
    const name = meal.name.toLowerCase();
    const ingredients = meal.ingredients.map(i => i.item.toLowerCase()).join(' ');
    const combined = `${name} ${ingredients}`;
    if (name.includes('zupa') || name.includes('krem') || name.includes('harira') || name.includes('pho') || name.includes('chowder')) return 'zupy';
    if (combined.includes('kurczak') || combined.includes('indyk') || combined.includes('kaczka')) return 'kurczak';
    if (combined.includes('wołowin') || combined.includes('stek') || combined.includes('burger')) return 'wolowina';
    if (combined.includes('wieprzowin') || combined.includes('schab') || combined.includes('polędwiczka wieprzowa')) return 'wieprzowina';
    if (combined.includes('ryba') || combined.includes('łosoś') || combined.includes('tuńczyk') || combined.includes('krewetki')) return 'ryby';
    if (meal.type === 'snack2' || name.includes('koktajl') || name.includes('deser') || name.includes('smoothie')) return 'koktajle';
    if (['breakfast', 'snack1', 'dinner'].includes(meal.type)) return 'sniadania';
    return 'inne';
  };

  const groupedMeals = useMemo(() => {
    const all = [...MEAL_DATABASE, ...customMeals];
    const groups: Record<string, Meal[]> = { zupy: [], kurczak: [], wolowina: [], wieprzowina: [], ryby: [], sniadania: [], koktajle: [], inne: [] };
    all.forEach(m => groups[getCategoryForMeal(m)].push(m));
    Object.keys(groups).forEach(key => groups[key].sort((a, b) => a.name.localeCompare(b.name)));
    return groups;
  }, [customMeals]);

  const toggleCategory = (catId: string) => {
    setOpenCategories(prev => ({ ...prev, [catId]: !prev[catId] }));
  };

  const handleInsert = () => {
    if (!selectedMeal || !mealPlan) return;
    onUpdateMeal(insertDay, insertType, { ...selectedMeal, type: insertType as any, multiplier: 1 });
    alert(`Danie wstawione do jadłospisu!`);
    setSelectedMeal(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div><h2 className="text-2xl font-black text-slate-800 tracking-tight">Biblioteka Dań</h2><p className="text-slate-400 text-sm mt-0.5">Wszystkie posiłki ze składnikami.</p></div>
        <button onClick={() => setIsAdding(true)} className="bg-emerald-600 text-white font-bold px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2 active:scale-95 transition-all"><Icons.Plus /> Dodaj własne</button>
      </div>

      <div className="space-y-3">
        {displayGroups.map((group) => {
          const meals = groupedMeals[group.id] || [];
          const isOpen = !!openCategories[group.id];
          if (meals.length === 0) return null;
          return (
            <div key={group.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all">
              <button onClick={() => toggleCategory(group.id)} className="w-full px-5 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isOpen ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'}`}>{group.icon}</div>
                  <div className="text-left"><h3 className="font-black text-slate-800 text-sm sm:text-base leading-tight">{group.label}</h3><span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{meals.length} pozycji</span></div>
                </div>
                <Icons.Plus className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-45 text-emerald-500' : 'text-slate-300'}`} />
              </button>
              
              {isOpen && (
                <div className="p-4 pt-0 border-t border-slate-50 grid grid-cols-1 md:grid-cols-2 gap-3 animate-in slide-in-from-top-2">
                  {meals.map((meal) => {
                    const isCustom = customMeals.some(cm => cm.name === meal.name);
                    return (
                      <div key={meal.name} onClick={() => { setSelectedMeal(meal); setInsertType(meal.type); }} className={`p-4 rounded-3xl border transition-all cursor-pointer flex flex-col gap-2 ${isCustom ? 'bg-emerald-50/30 border-emerald-100 hover:border-emerald-500' : 'bg-white border-slate-100 hover:border-emerald-400 shadow-sm'}`}>
                        <div className="flex justify-between items-start gap-2">
                          <div className="min-w-0">
                            <h4 className="font-bold text-slate-800 text-sm sm:text-base leading-tight mb-1">{meal.name}</h4>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-tighter">{meal.calories} kcal</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedMeal && (
        <div className="fixed inset-0 z-[160] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedMeal(null)}></div>
          <div className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95">
            <div className="bg-emerald-600 p-6 text-white shrink-0">
              <span className="text-[10px] font-black opacity-70 uppercase tracking-widest">{mealTypeLabels[selectedMeal.type]}</span>
              <h2 className="text-xl sm:text-2xl font-bold leading-tight tracking-tight">{selectedMeal.name}</h2>
              <div className="flex gap-2 mt-3">
                <span className="bg-white/20 px-3 py-1 rounded-lg text-[10px] font-bold uppercase">{selectedMeal.calories} kcal</span>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-8">
              {mealPlan && (
                <section className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                  <h3 className="text-[10px] font-black text-emerald-800 uppercase tracking-widest mb-4">Dodaj do jadłospisu</h3>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="space-y-1"><label className="text-[9px] font-bold text-slate-400 uppercase">Który dzień?</label><select value={insertDay} onChange={e => setInsertDay(parseInt(e.target.value))} className="w-full px-3 py-2 bg-white border border-emerald-200 rounded-xl text-sm font-bold outline-none">{[1,2,3,4,5,6,7].map(d => <option key={d} value={d}>Dzień {d}</option>)}</select></div>
                    <div className="space-y-1"><label className="text-[9px] font-bold text-slate-400 uppercase">Jaki posiłek?</label><select value={insertType} onChange={e => setInsertType(e.target.value)} className="w-full px-3 py-2 bg-white border border-emerald-200 rounded-xl text-sm font-bold outline-none">{Object.entries(mealTypeLabels).map(([val, label]) => <option key={val} value={val}>{label}</option>)}</select></div>
                  </div>
                  <button onClick={handleInsert} className="w-full bg-emerald-600 text-white font-black py-4 rounded-xl text-xs shadow-md">POTWIERDŹ DODANIE</button>
                </section>
              )}

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center"><Icons.ChefHat className="w-5 h-5"/></div>
                  <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Sposób przygotowania</h3>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-slate-700 text-sm italic">
                  {selectedMeal.recipe || "Brak instrukcji."}
                </div>
              </section>
              
              <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-4">Składniki</h3>
                <div className="space-y-2">
                  {selectedMeal.ingredients.map((ing, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-slate-200 last:border-0">
                      <span className="text-sm text-slate-600">{ing.item}</span>
                      <span className="text-sm font-bold text-emerald-600">{ing.amount}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            
            <div className="p-4 border-t border-slate-50 shrink-0">
              <button onClick={() => setSelectedMeal(null)} className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl text-sm active:scale-95 transition-all">Zamknij</button>
            </div>
          </div>
        </div>
      )}

      {isAdding && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsAdding(false)}></div>
          <div className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95">
             <div className="p-6 border-b border-slate-100 flex items-center justify-between">
               <h2 className="text-xl font-bold text-slate-800">Nowe własne danie</h2>
               <button onClick={() => setIsAdding(false)} className="p-2"><Icons.Plus className="rotate-45" /></button>
             </div>
             <form onSubmit={(e) => { e.preventDefault(); if (newMeal.name) { onAddCustomMeal(newMeal as Meal); setIsAdding(false); } }} className="p-6 overflow-y-auto space-y-4">
                <input required placeholder="Nazwa Twojego posiłku..." value={newMeal.name} onChange={e => setNewMeal({...newMeal, name: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold" />
                <button type="submit" className="w-full bg-emerald-600 text-white font-black py-4 rounded-2xl shadow-lg">ZAPISZ W MOJEJ BAZIE</button>
             </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InspirationsView;

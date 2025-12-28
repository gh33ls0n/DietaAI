
import React from 'react';
import { MEAL_DATABASE } from '../services/mealDatabase';
import { Icons, APP_NAME } from '../constants';

const InspirationsView: React.FC = () => {
  const getLabel = (type: string) => {
    if (['breakfast', 'snack1', 'dinner'].includes(type)) return 'Danie na zimno / Kanapki';
    if (type === 'lunch') return 'Obiad (Ciepłe)';
    if (type === 'snack2') return 'Podwieczorek / Koktajl';
    return type;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Baza Posiłków</h2>
          <p className="text-slate-500">Przeglądaj dania dostępne w {APP_NAME}. Pamiętaj, że śniadania, II śniadania i kolacje są wymienne!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MEAL_DATABASE.map((meal, idx) => (
          <div key={idx} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
            <div className="h-32 bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white relative overflow-hidden">
               <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-500">
                  <Icons.Apple className="w-full h-full scale-150 rotate-12" />
               </div>
               <div className="z-10 bg-white/20 backdrop-blur-md p-3 rounded-full">
                  <Icons.ChefHat />
               </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded-md">
                  {getLabel(meal.type)}
                </span>
                <span className="font-bold text-slate-700 text-sm">{meal.calories} kcal</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-4">{meal.name}</h3>
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Główne składniki:</p>
                <div className="flex flex-wrap gap-2">
                  {meal.ingredients?.slice(0, 3).map((ing, i) => (
                    <span key={i} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-1 rounded-lg">
                      {ing.item}
                    </span>
                  ))}
                  {(meal.ingredients?.length ?? 0) > 3 && (
                    <span className="text-[11px] text-slate-400">+{meal.ingredients!.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InspirationsView;

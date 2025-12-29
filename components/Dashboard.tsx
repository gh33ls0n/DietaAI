
import React, { useState } from 'react';
import { UserProfile, WeeklyPlan, Meal } from '../types';
import { Icons, APP_NAME } from '../constants';
import MealPlanView from './MealPlanView';
import ShoppingListView from './ShoppingListView';
import InspirationsView from './InspirationsView';
import SettingsView from './SettingsView';

interface DashboardProps {
  profile: UserProfile;
  mealPlan: WeeklyPlan | null;
  allAvailableMeals: Meal[];
  customMeals: Meal[];
  calories: number;
  isLoading: boolean;
  error: string | null;
  cloudId: string | null;
  onGenerate: () => void;
  onUpdateMeal: (day: number, mealType: string, newMeal: Meal) => void;
  onCopyDay: (sourceDay: number, targetDays: number[]) => void;
  onCopyMealToDays: (meal: Meal, targetDays: number[]) => void;
  onUpdateProfile: (profile: UserProfile) => void;
  onAddCustomMeal: (meal: Meal) => void;
  onDeleteCustomMeal: (name: string) => void;
  onReset: () => void;
  onSetCloudId: (id: string | null) => void;
  onExportFile: () => void;
  onImportData: (data: any) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ 
  profile, mealPlan, allAvailableMeals, customMeals, calories, isLoading, error, cloudId,
  onGenerate, onUpdateMeal, onCopyDay, onCopyMealToDays, onUpdateProfile, onAddCustomMeal, onDeleteCustomMeal, onReset, onSetCloudId,
  onExportFile, onImportData
}) => {
  const [activeTab, setActiveTab] = useState<'meals' | 'shopping' | 'inspirations' | 'settings'>('meals');

  return (
    <div className="space-y-4 sm:space-y-8 animate-in fade-in duration-500">
      {/* Pasek statusu */}
      <section className="bg-white p-3 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-200 flex items-center justify-between gap-2 overflow-x-auto scrollbar-hide">
        <div className="flex-shrink-0">
          <h2 className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Limit</h2>
          <div className="flex items-baseline gap-1">
            <span className="text-xl sm:text-3xl font-black text-emerald-600">{calories}</span>
            <span className="text-xs font-bold text-slate-300">kcal</span>
          </div>
        </div>
        <div className="h-8 w-px bg-slate-100 flex-shrink-0"></div>
        <div className="flex-shrink-0">
          <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-tight">Waga</span>
          <span className="text-sm sm:text-lg font-bold text-slate-700">{profile.weight} kg</span>
        </div>
        <div className="h-8 w-px bg-slate-100 flex-shrink-0"></div>
        <div className="flex-shrink-0 text-right">
          <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-tight">Cel</span>
          <span className="text-xs sm:text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
            {profile.goal === 'LOSE' ? 'Redukcja' : profile.goal === 'MAINTAIN' ? 'Utrzymanie' : 'Masa'}
          </span>
        </div>
      </section>

      {/* Loading & Errors */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center p-12 text-center">
          <div className="relative w-16 h-16 mb-6">
            <div className="absolute inset-0 border-4 border-emerald-100 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h3 className="text-lg font-bold text-slate-800">Pracuję nad menu...</h3>
        </div>
      )}
      {error && <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-center text-sm">{error}</div>}

      {/* Kontener Karty */}
      {!isLoading && (
        <div className="space-y-4">
          <div className="flex bg-slate-200/50 p-1 rounded-xl w-full sm:w-fit overflow-x-auto scrollbar-hide">
            <button onClick={() => setActiveTab('meals')} className={`flex-1 sm:flex-none flex items-center justify-center gap-1 px-2.5 sm:px-4 py-2 rounded-lg transition-all text-[10px] sm:text-xs font-bold whitespace-nowrap ${activeTab === 'meals' ? 'bg-white shadow-sm text-emerald-600' : 'text-slate-500'}`}><Icons.ChefHat className="w-3.5 h-3.5 sm:w-4 sm:h-4" />Jadłospis</button>
            <button onClick={() => setActiveTab('shopping')} className={`flex-1 sm:flex-none flex items-center justify-center gap-1 px-2.5 sm:px-4 py-2 rounded-lg transition-all text-[10px] sm:text-xs font-bold whitespace-nowrap ${activeTab === 'shopping' ? 'bg-white shadow-sm text-emerald-600' : 'text-slate-500'}`}><Icons.ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />Zakupy</button>
            <button onClick={() => setActiveTab('inspirations')} className={`flex-1 sm:flex-none flex items-center justify-center gap-1 px-2.5 sm:px-4 py-2 rounded-lg transition-all text-[10px] sm:text-xs font-bold whitespace-nowrap ${activeTab === 'inspirations' ? 'bg-white shadow-sm text-emerald-600' : 'text-slate-500'}`}><Icons.Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />Baza</button>
            <button onClick={() => setActiveTab('settings')} className={`flex-1 sm:flex-none flex items-center justify-center gap-1 px-2.5 sm:px-4 py-2 rounded-lg transition-all text-[10px] sm:text-xs font-bold whitespace-nowrap ${activeTab === 'settings' ? 'bg-white shadow-sm text-emerald-600' : 'text-slate-500'}`}><Icons.Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" />Opcje</button>
          </div>

          <div className="mt-2">
            {activeTab === 'meals' && (
              mealPlan ? (
                <MealPlanView 
                  mealPlan={mealPlan} 
                  allAvailableMeals={allAvailableMeals} 
                  onRegenerate={onGenerate} 
                  onUpdateMeal={onUpdateMeal} 
                  onCopyDay={onCopyDay} 
                  onCopyMealToDays={onCopyMealToDays}
                  onAddCustomMeal={onAddCustomMeal} 
                />
              ) : (
                <div className="bg-white p-12 rounded-3xl text-center border-2 border-dashed border-slate-100">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Brak jadłospisu</h3>
                  <button onClick={onGenerate} className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold">Generuj teraz</button>
                </div>
              )
            )}
            {activeTab === 'shopping' && mealPlan && <ShoppingListView mealPlan={mealPlan} />}
            {activeTab === 'inspirations' && (
              <InspirationsView 
                customMeals={customMeals} 
                onAddCustomMeal={onAddCustomMeal} 
                onDeleteCustomMeal={onDeleteCustomMeal}
                mealPlan={mealPlan}
                onUpdateMeal={onUpdateMeal}
              />
            )}
            {activeTab === 'settings' && (
              <SettingsView 
                profile={profile} 
                mealPlan={mealPlan} 
                customMeals={customMeals} 
                cloudId={cloudId} 
                onUpdateProfile={onUpdateProfile} 
                onReset={onReset} 
                onSetCloudId={onSetCloudId}
                onExportFile={onExportFile}
                onImportData={onImportData}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;


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
  calories: number;
  isLoading: boolean;
  error: string | null;
  onGenerate: () => void;
  onUpdateMeal: (day: number, mealType: string, newMeal: Meal) => void;
  onUpdateProfile: (profile: UserProfile) => void;
  onReset: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ 
  profile, mealPlan, calories, isLoading, error, onGenerate, onUpdateMeal, onUpdateProfile, onReset
}) => {
  const [activeTab, setActiveTab] = useState<'meals' | 'shopping' | 'inspirations' | 'settings'>('meals');

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-6">
        <div>
          <h2 className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-1">Dzienne zapotrzebowanie</h2>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-emerald-600">{calories}</span>
            <span className="text-xl font-semibold text-slate-400">kcal</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-slate-100 rounded-2xl p-4 text-center min-w-[100px]">
            <span className="block text-slate-400 text-xs font-bold uppercase">Waga</span>
            <span className="text-lg font-bold text-slate-700">{profile.weight} kg</span>
          </div>
          <div className="bg-slate-100 rounded-2xl p-4 text-center min-w-[100px]">
            <span className="block text-slate-400 text-xs font-bold uppercase">Cel</span>
            <span className="text-lg font-bold text-slate-700">
              {profile.goal === 'LOSE' ? 'Redukcja' : profile.goal === 'MAINTAIN' ? 'Utrzymanie' : 'Masa'}
            </span>
          </div>
        </div>
      </section>

      {!mealPlan && !isLoading && activeTab !== 'settings' && (
        <div className="bg-emerald-50 border-2 border-emerald-100 p-12 rounded-3xl text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-500">
            <Icons.ChefHat />
          </div>
          <h3 className="text-2xl font-bold text-emerald-900">Twój jadłospis {APP_NAME} czeka</h3>
          <p className="text-emerald-700 max-w-md mx-auto">Generujemy plan 5 posiłków dziennie zgodny z Twoimi wymaganiami.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={onGenerate}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all"
            >
              Generuj Jadłospis
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className="bg-white text-emerald-600 border-2 border-emerald-100 hover:border-emerald-200 font-bold px-8 py-3 rounded-xl transition-all"
            >
              Dostosuj dane
            </button>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="flex flex-col items-center justify-center p-20 text-center">
          <div className="relative w-20 h-20 mb-6">
            <div className="absolute inset-0 border-4 border-emerald-100 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h3 className="text-xl font-bold text-slate-800">{APP_NAME} przygotowuje plan...</h3>
          <p className="text-slate-500 mt-2">To potrwa tylko chwilę.</p>
        </div>
      )}

      {error && <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-center">{error}</div>}

      {(mealPlan || activeTab === 'inspirations' || activeTab === 'settings') && !isLoading && (
        <div className="space-y-6">
          <div className="flex bg-slate-100 p-1 rounded-2xl w-fit mx-auto sm:mx-0 overflow-x-auto scrollbar-hide">
            <button onClick={() => setActiveTab('meals')} className={`flex items-center gap-2 px-6 py-2 rounded-xl transition-all whitespace-nowrap ${activeTab === 'meals' ? 'bg-white shadow-sm text-emerald-600 font-bold' : 'text-slate-500 hover:text-slate-700'}`}><Icons.ChefHat />Jadłospis</button>
            <button onClick={() => setActiveTab('shopping')} className={`flex items-center gap-2 px-6 py-2 rounded-xl transition-all whitespace-nowrap ${activeTab === 'shopping' ? 'bg-white shadow-sm text-emerald-600 font-bold' : 'text-slate-500 hover:text-slate-700'}`}><Icons.ShoppingBag />Lista Zakupów</button>
            <button onClick={() => setActiveTab('inspirations')} className={`flex items-center gap-2 px-6 py-2 rounded-xl transition-all whitespace-nowrap ${activeTab === 'inspirations' ? 'bg-white shadow-sm text-emerald-600 font-bold' : 'text-slate-500 hover:text-slate-700'}`}><Icons.Plus />Baza Posiłków</button>
            <button onClick={() => setActiveTab('settings')} className={`flex items-center gap-2 px-6 py-2 rounded-xl transition-all whitespace-nowrap ${activeTab === 'settings' ? 'bg-white shadow-sm text-emerald-600 font-bold' : 'text-slate-500 hover:text-slate-700'}`}><Icons.Settings />Ustawienia</button>
          </div>

          <div className="mt-6">
            {activeTab === 'meals' && mealPlan ? (
              <MealPlanView mealPlan={mealPlan} onRegenerate={onGenerate} onUpdateMeal={onUpdateMeal} />
            ) : activeTab === 'shopping' && mealPlan ? (
              <ShoppingListView mealPlan={mealPlan} />
            ) : activeTab === 'inspirations' ? (
              <InspirationsView />
            ) : activeTab === 'settings' ? (
              <SettingsView profile={profile} onUpdateProfile={onUpdateProfile} onReset={onReset} />
            ) : (
              <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                <p className="text-slate-500">Brak aktywnego jadłospisu.</p>
                <button onClick={onGenerate} className="mt-4 text-emerald-600 font-bold underline">Generuj teraz</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

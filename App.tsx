
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { UserProfile, WeeklyPlan, Gender, ActivityLevel, Meal } from './types';
import { Icons, APP_NAME } from './constants';
import Header from './components/Header';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';
import { generateMealPlan } from './services/geminiService';
import { MEAL_DATABASE } from './services/mealDatabase';
import { CloudService } from './services/cloudService';

const App: React.FC = () => {
  const [cloudId, setCloudId] = useState<string | null>(() => localStorage.getItem('cloud_id'));
  const [syncStatus, setSyncStatus] = useState<'synced' | 'syncing' | 'error'>('synced');

  const [profile, setProfile] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('user_profile');
    return saved ? JSON.parse(saved) : null;
  });
  
  const [mealPlan, setMealPlan] = useState<WeeklyPlan | null>(() => {
    const saved = localStorage.getItem('weekly_plan');
    return saved ? JSON.parse(saved) : null;
  });

  const [customMeals, setCustomMeals] = useState<Meal[]>(() => {
    const saved = localStorage.getItem('custom_meals');
    return saved ? JSON.parse(saved) : [];
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // --- LOGIKA SYNCHRONIZACJI ---

  // 1. Ładowanie z chmury przy starcie
  useEffect(() => {
    const initCloud = async () => {
      if (cloudId) {
        setSyncStatus('syncing');
        const remote = await CloudService.loadData(cloudId);
        if (remote) {
          if (remote.profile) setProfile(remote.profile);
          if (remote.mealPlan) setMealPlan(remote.mealPlan);
          if (remote.customMeals) setCustomMeals(remote.customMeals);
          setSyncStatus('synced');
        } else {
          setSyncStatus('error');
        }
      }
    };
    initCloud();
  }, [cloudId]);

  // 2. Automatyczny zapis w chmurze przy każdej zmianie (Debounced)
  useEffect(() => {
    if (!cloudId || !profile) return;

    const timer = setTimeout(async () => {
      setSyncStatus('syncing');
      const success = await CloudService.saveData(cloudId, {
        profile,
        mealPlan,
        customMeals,
        lastUpdated: new Date().toISOString()
      });
      setSyncStatus(success ? 'synced' : 'error');
    }, 2000); // Czekaj 2 sekundy po ostatniej zmianie przed wysłaniem

    // Lokalny backup
    localStorage.setItem('user_profile', JSON.stringify(profile));
    if (mealPlan) localStorage.setItem('weekly_plan', JSON.stringify(mealPlan));
    localStorage.setItem('custom_meals', JSON.stringify(customMeals));
    
    return () => clearTimeout(timer);
  }, [profile, mealPlan, customMeals, cloudId]);

  const allAvailableMeals = useMemo(() => [...MEAL_DATABASE, ...customMeals], [customMeals]);

  const calculatedCalories = useMemo(() => {
    if (!profile) return 0;
    const { age, weight, height, gender, activityLevel, goal } = profile;
    let bmr = (10 * weight) + (6.25 * height) - (5 * age);
    bmr = gender === Gender.MALE ? bmr + 5 : bmr - 161;
    let tdee = bmr * parseFloat(activityLevel);
    if (goal === 'LOSE') tdee -= 500;
    if (goal === 'GAIN') tdee += 500;
    return Math.round(tdee);
  }, [profile]);

  const handleGeneratePlan = async () => {
    if (!profile) return;
    setIsLoading(true);
    setError(null);
    try {
      const plan = await generateMealPlan(profile, calculatedCalories);
      setMealPlan(plan);
    } catch (err: any) {
      setError(err.message || "Błąd podczas generowania jadłospisu.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateMeal = (day: number, mealType: string, newMeal: Meal) => {
    if (!mealPlan) return;
    const updatedDays = mealPlan.days.map(d => {
      if (d.day === day) {
        return {
          ...d,
          meals: d.meals.map(m => m.type === mealType ? newMeal : m)
        };
      }
      return d;
    });
    setMealPlan({ days: updatedDays });
  };

  const handleCopyDay = (sourceDayNum: number, targetDaysNums: number[]) => {
    if (!mealPlan) return;
    const sourceDay = mealPlan.days.find(d => d.day === sourceDayNum);
    if (!sourceDay) return;
    const updatedDays = mealPlan.days.map(d => {
      if (targetDaysNums.includes(d.day)) {
        return { ...d, meals: sourceDay.meals.map(m => ({ ...m })) };
      }
      return d;
    });
    setMealPlan({ days: updatedDays });
  };

  const handleAddCustomMeal = (meal: Meal) => {
    setCustomMeals(prev => [...prev, meal]);
  };

  const handleDeleteCustomMeal = (mealName: string) => {
    setCustomMeals(prev => prev.filter(m => m.name !== mealName));
  };

  const handleUpdateProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
  };

  const handleReset = () => {
    if (confirm("Czy na pewno chcesz zresetować swoje dane? To usunie profil i jadłospis z tego urządzenia.")) {
      setProfile(null);
      setMealPlan(null);
      setCloudId(null);
      localStorage.clear();
      window.location.reload();
    }
  };

  const handleSetCloudId = (id: string) => {
    localStorage.setItem('cloud_id', id);
    setCloudId(id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onReset={handleReset} showReset={!!profile} syncStatus={syncStatus} />
      
      <main className="flex-grow container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-5xl">
        {!profile ? (
          <Onboarding onComplete={setProfile} onSetCloudId={handleSetCloudId} />
        ) : (
          <Dashboard 
            profile={profile} 
            mealPlan={mealPlan} 
            allAvailableMeals={allAvailableMeals}
            customMeals={customMeals}
            calories={calculatedCalories}
            isLoading={isLoading}
            error={error}
            cloudId={cloudId}
            onGenerate={handleGeneratePlan}
            onUpdateMeal={handleUpdateMeal}
            onCopyDay={handleCopyDay}
            onUpdateProfile={handleUpdateProfile}
            onAddCustomMeal={handleAddCustomMeal}
            onDeleteCustomMeal={handleDeleteCustomMeal}
            onReset={handleReset}
            onSetCloudId={handleSetCloudId}
          />
        )}
      </main>

      <footer className="bg-white border-t border-slate-100 py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-slate-400 text-[10px] uppercase font-bold tracking-widest">
          {APP_NAME} &bull; {cloudId ? `KONTO: ${cloudId}` : 'TRYB OFFLINE'}
        </div>
      </footer>
    </div>
  );
};

export default App;

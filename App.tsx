
import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { UserProfile, WeeklyPlan, Gender, ActivityLevel, Meal } from './types';
import { Icons, APP_NAME } from './constants';
import Header from './components/Header';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';
import { generateMealPlan } from './services/geminiService';
import { MEAL_DATABASE } from './services/mealDatabase';
import { CloudService } from './services/cloudService';
import LZString from 'lz-string';

const App: React.FC = () => {
  const [cloudId, setCloudId] = useState<string | null>(() => localStorage.getItem('cloud_id'));
  const [syncStatus, setSyncStatus] = useState<'synced' | 'syncing' | 'error'>('synced');
  const [syncError, setSyncError] = useState<string | null>(null);
  
  const preventNextSave = useRef(false);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // 1. OBSŁUGA MAGIC LINKU (URL SYNC)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const syncData = params.get('s');
    
    if (syncData) {
      try {
        const decompressed = LZString.decompressFromEncodedURIComponent(syncData);
        if (decompressed) {
          const data = JSON.parse(decompressed);
          if (data.profile) {
            if (confirm("Wykryto dane z Magic Linku. Czy chcesz je zaimportować i nadpisać obecny jadłospis?")) {
              setProfile(data.profile);
              setMealPlan(data.mealPlan);
              setCustomMeals(data.customMeals || []);
              // Czyścimy URL po imporcie
              window.history.replaceState({}, document.title, window.location.pathname);
              alert("Dane zaimportowane pomyślnie!");
            }
          }
        }
      } catch (e) {
        console.error("Magic Link Error:", e);
      }
    }
  }, []);

  // Funkcja manualnej synchronizacji
  const forceSync = useCallback(async () => {
    if (!profile) return;
    setSyncStatus('syncing');
    
    const result = await CloudService.saveData(cloudId, {
      profile,
      mealPlan,
      customMeals,
      lastUpdated: new Date().toISOString()
    });
    
    if (result.success) {
      if (result.id && result.id !== cloudId) {
        setCloudId(result.id);
        localStorage.setItem('cloud_id', result.id);
      }
      setSyncStatus('synced');
      setSyncError(null);
    } else {
      setSyncStatus('error');
      setSyncError(result.error);
    }
  }, [profile, mealPlan, customMeals, cloudId]);

  // Ładowanie z chmury (inicjalne)
  useEffect(() => {
    const initCloud = async () => {
      if (!cloudId) return;
      setSyncStatus('syncing');
      try {
        const remote = await CloudService.loadData(cloudId);
        if (remote) {
          preventNextSave.current = true;
          if (remote.profile) setProfile(remote.profile);
          if (remote.mealPlan) setMealPlan(remote.mealPlan);
          if (remote.customMeals) setCustomMeals(remote.customMeals);
          setSyncStatus('synced');
          setSyncError(null);
        }
      } catch (err) {
        setSyncStatus('error');
      }
    };
    initCloud();
  }, [cloudId]);

  // Automatyczny zapis lokalny
  useEffect(() => {
    if (!profile) return;
    localStorage.setItem('user_profile', JSON.stringify(profile));
    if (mealPlan) localStorage.setItem('weekly_plan', JSON.stringify(mealPlan));
    localStorage.setItem('custom_meals', JSON.stringify(customMeals));

    if (preventNextSave.current) {
      preventNextSave.current = false;
      return;
    }

    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(forceSync, 5000);
    
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, [profile, mealPlan, customMeals, forceSync]);

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
      setError(err.message || "Błąd generowania.");
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

  const handleUpdateProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
  };

  const handleReset = () => {
    if (confirm("Zresetować wszystko?")) {
      localStorage.clear();
      window.location.href = window.location.pathname;
    }
  };

  const handleSetCloudId = (id: string | null) => {
    if (id) {
      localStorage.setItem('cloud_id', id);
    } else {
      localStorage.removeItem('cloud_id');
    }
    setCloudId(id);
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onReset={handleReset} 
        showReset={!!profile} 
        syncStatus={syncStatus} 
        syncError={syncError} 
        onRetrySync={forceSync}
      />
      
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
            onAddCustomMeal={(m) => setCustomMeals(p => [...p, m])}
            onDeleteCustomMeal={(n) => setCustomMeals(p => p.filter(m => m.name !== n))}
            onReset={handleReset}
            onSetCloudId={handleSetCloudId}
          />
        )}
      </main>
    </div>
  );
};

export default App;

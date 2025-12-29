
import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
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

  const handleReset = () => {
    if (confirm("CZY NA PEWNO? Stracisz wszystkie dane lokalne!")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  const handleExportFile = () => {
    const data = { profile, mealPlan, customMeals, version: '1.6', exportDate: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `dieta_gilsona_backup.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImportData = (data: any) => {
    if (data && data.profile) {
      preventNextSave.current = true;
      setProfile(data.profile);
      setMealPlan(data.mealPlan || null);
      setCustomMeals(data.customMeals || []);
      alert("Wszystkie dane zostały wczytane pomyślnie!");
    } else {
      alert("Nieprawidłowy format pliku kopii zapasowej.");
    }
  };

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
        }
      } catch (err) { setSyncStatus('error'); }
    };
    initCloud();
  }, [cloudId]);

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
    saveTimeoutRef.current = setTimeout(forceSync, 10000);
    return () => { if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current); };
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header onReset={handleReset} showReset={!!profile} syncStatus={syncStatus} syncError={syncError} onRetrySync={forceSync} />
      <main className="flex-grow container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-5xl">
        {!profile ? (
          <Onboarding onComplete={setProfile} onSetCloudId={(id) => { setCloudId(id); localStorage.setItem('cloud_id', id); }} />
        ) : (
          <Dashboard 
            profile={profile} mealPlan={mealPlan} allAvailableMeals={allAvailableMeals} customMeals={customMeals} calories={calculatedCalories} isLoading={isLoading} error={error} cloudId={cloudId}
            onGenerate={async () => {
              setIsLoading(true); setError(null);
              try { setMealPlan(await generateMealPlan(profile, calculatedCalories)); } 
              catch (err: any) { setError(err.message); } 
              finally { setIsLoading(false); }
            }}
            onUpdateMeal={(day, type, newMeal) => {
              if (!mealPlan) return;
              setMealPlan({ days: mealPlan.days.map(d => d.day === day ? { ...d, meals: d.meals.map(m => m.type === type ? newMeal : m) } : d) });
            }}
            onCopyDay={(source, targets) => {
              if (!mealPlan) return;
              const s = mealPlan.days.find(d => d.day === source);
              if (s) setMealPlan({ days: mealPlan.days.map(d => targets.includes(d.day) ? { ...d, meals: s.meals.map(m => ({ ...m })) } : d) });
            }}
            onCopyMealToDays={(meal, targets) => {
              if (!mealPlan) return;
              setMealPlan({ 
                days: mealPlan.days.map(d => targets.includes(d.day) 
                  ? { ...d, meals: d.meals.map(m => m.type === meal.type ? { ...meal } : m) } 
                  : d
                ) 
              });
            }}
            onUpdateProfile={setProfile}
            onAddCustomMeal={(m) => setCustomMeals(p => [...p, m])}
            onDeleteCustomMeal={(n) => setCustomMeals(p => p.filter(m => m.name !== n))}
            onReset={handleReset}
            onSetCloudId={(id) => { setCloudId(id); if (id) localStorage.setItem('cloud_id', id); else localStorage.removeItem('cloud_id'); window.location.reload(); }}
            onExportFile={handleExportFile}
            onImportData={handleImportData}
          />
        )}
      </main>
    </div>
  );
};

export default App;

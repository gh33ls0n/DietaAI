
import React, { useState } from 'react';
import { UserProfile, Gender, ActivityLevel } from '../types';
import { Icons, APP_NAME } from '../constants';

interface OnboardingProps {
  onComplete: (profile: UserProfile) => void;
  onSetCloudId: (id: string) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete, onSetCloudId }) => {
  const [isImporting, setIsImporting] = useState(false);
  const [importId, setImportId] = useState("");
  const [formData, setFormData] = useState<Partial<UserProfile>>({
    gender: Gender.FEMALE,
    goal: 'MAINTAIN',
    activityLevel: ActivityLevel.MODERATE,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.age && formData.weight && formData.height) {
      onComplete(formData as UserProfile);
    }
  };

  const handleImport = (e: React.FormEvent) => {
    e.preventDefault();
    if (importId.length >= 4) {
      onSetCloudId(importId.toUpperCase());
      // Aplikacja przeładuje się automatycznie dzięki useEffect w App.tsx
    }
  };

  const updateField = (field: keyof UserProfile, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="bg-emerald-500 p-8 text-white text-center">
        <h1 className="text-3xl font-bold mb-2">Witaj w {APP_NAME}</h1>
        <p className="opacity-90">Stwórz nowy profil lub wczytaj istniejący z chmury.</p>
        
        <div className="mt-6 flex justify-center gap-4">
          <button 
            onClick={() => setIsImporting(false)} 
            className={`px-4 py-2 rounded-xl text-xs font-bold border-2 transition-all ${!isImporting ? 'bg-white text-emerald-600 border-white' : 'bg-transparent text-white border-white/30'}`}
          >
            Nowy Profil
          </button>
          <button 
            onClick={() => setIsImporting(true)} 
            className={`px-4 py-2 rounded-xl text-xs font-bold border-2 transition-all ${isImporting ? 'bg-white text-emerald-600 border-white' : 'bg-transparent text-white border-white/30'}`}
          >
            Mam już konto
          </button>
        </div>
      </div>
      
      {!isImporting ? (
        <form onSubmit={handleSubmit} className="p-8 space-y-6 animate-in slide-in-from-left-4 duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gender selection */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Płeć</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => updateField('gender', Gender.MALE)}
                  className={`py-3 px-4 rounded-xl border-2 transition-all ${formData.gender === Gender.MALE ? 'border-emerald-500 bg-emerald-50 text-emerald-700 font-bold' : 'border-slate-100 hover:border-slate-200 text-slate-500'}`}
                >
                  Mężczyzna
                </button>
                <button
                  type="button"
                  onClick={() => updateField('gender', Gender.FEMALE)}
                  className={`py-3 px-4 rounded-xl border-2 transition-all ${formData.gender === Gender.FEMALE ? 'border-emerald-500 bg-emerald-50 text-emerald-700 font-bold' : 'border-slate-100 hover:border-slate-200 text-slate-500'}`}
                >
                  Kobieta
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Wiek</label>
              <input 
                required
                type="number" 
                placeholder="lat"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-emerald-500 outline-none transition-all"
                onChange={(e) => updateField('age', parseInt(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Waga (kg)</label>
              <input 
                required
                type="number" 
                placeholder="np. 70"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-emerald-500 outline-none transition-all"
                onChange={(e) => updateField('weight', parseFloat(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Wzrost (cm)</label>
              <input 
                required
                type="number" 
                placeholder="np. 175"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-emerald-500 outline-none transition-all"
                onChange={(e) => updateField('height', parseFloat(e.target.value))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Poziom aktywności</label>
            <select 
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-emerald-500 outline-none transition-all"
              value={formData.activityLevel}
              onChange={(e) => updateField('activityLevel', e.target.value)}
            >
              <option value={ActivityLevel.SEDENTARY}>Brak ruchu (praca siedząca)</option>
              <option value={ActivityLevel.LIGHT}>Lekka aktywność (1-2 treningi/tydz)</option>
              <option value={ActivityLevel.MODERATE}>Średnia aktywność (3-4 treningi/tydz)</option>
              <option value={ActivityLevel.ACTIVE}>Duża aktywność (codzienne treningi)</option>
              <option value={ActivityLevel.VERY_ACTIVE}>Bardzo duża (sportowiec/praca fizyczna)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Twój cel</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {['LOSE', 'MAINTAIN', 'GAIN'].map((goal) => (
                <button
                  key={goal}
                  type="button"
                  onClick={() => updateField('goal', goal)}
                  className={`py-3 px-2 rounded-xl border-2 text-sm transition-all ${formData.goal === goal ? 'border-emerald-500 bg-emerald-50 text-emerald-700 font-bold' : 'border-slate-100 hover:border-slate-200 text-slate-500'}`}
                >
                  {goal === 'LOSE' ? 'Redukcja' : goal === 'MAINTAIN' ? 'Utrzymanie' : 'Masa'}
                </button>
              ))}
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
          >
            Rozpocznij przygodę
            <Icons.ArrowRight />
          </button>
        </form>
      ) : (
        <form onSubmit={handleImport} className="p-8 space-y-6 animate-in slide-in-from-right-4 duration-300 text-center">
          <div className="mx-auto w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 mb-4">
            <Icons.Swap className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-slate-800">Wczytaj dane z chmury</h2>
          <p className="text-slate-500 text-sm">Wpisz 8-znakowy klucz, który wygenerowałeś na innym urządzeniu.</p>
          
          <input 
            required
            autoFocus
            maxLength={8}
            className="w-full text-center text-3xl font-black tracking-widest uppercase px-4 py-5 rounded-2xl border-4 border-slate-100 focus:border-emerald-500 outline-none transition-all placeholder:opacity-20"
            placeholder="KOD-1234"
            value={importId}
            onChange={(e) => setImportId(e.target.value)}
          />

          <button 
            type="submit"
            disabled={importId.length < 4}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
          >
            Wczytaj dane
            <Icons.Check />
          </button>
        </form>
      )}
    </div>
  );
};

export default Onboarding;

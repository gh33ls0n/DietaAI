
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
    if (importId.length >= 6) {
      onSetCloudId(importId.toUpperCase().trim());
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
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Płeć</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => updateField('gender', Gender.MALE)}
                  className={`py-3 px-4 rounded-xl border-2 transition-all ${formData.gender === Gender.MALE ? 'border-emerald-500 bg-emerald-50 text-emerald-700 font-bold' : 'border-slate-100 text-slate-500'}`}
                >
                  Mężczyzna
                </button>
                <button
                  type="button"
                  onClick={() => updateField('gender', Gender.FEMALE)}
                  className={`py-3 px-4 rounded-xl border-2 transition-all ${formData.gender === Gender.FEMALE ? 'border-emerald-500 bg-emerald-50 text-emerald-700 font-bold' : 'border-slate-100 text-slate-500'}`}
                >
                  Kobieta
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Wiek</label>
              <input required type="number" placeholder="lat" className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-emerald-500 outline-none" onChange={(e) => updateField('age', parseInt(e.target.value))} />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Waga (kg)</label>
              <input required type="number" placeholder="np. 70" className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-emerald-500 outline-none" onChange={(e) => updateField('weight', parseFloat(e.target.value))} />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Wzrost (cm)</label>
              <input required type="number" placeholder="np. 175" className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-emerald-500 outline-none" onChange={(e) => updateField('height', parseFloat(e.target.value))} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Poziom aktywności</label>
            <select className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-emerald-500 outline-none" value={formData.activityLevel} onChange={(e) => updateField('activityLevel', e.target.value)}>
              <option value={ActivityLevel.SEDENTARY}>Brak ruchu</option>
              <option value={ActivityLevel.LIGHT}>Lekka aktywność</option>
              <option value={ActivityLevel.MODERATE}>Średnia aktywność</option>
              <option value={ActivityLevel.ACTIVE}>Duża aktywność</option>
              <option value={ActivityLevel.VERY_ACTIVE}>Bardzo duża</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2">
            Rozpocznij przygodę <Icons.ArrowRight />
          </button>
        </form>
      ) : (
        <form onSubmit={handleImport} className="p-8 space-y-6 text-center">
          <Icons.Swap className="w-12 h-12 mx-auto text-emerald-500 mb-4" />
          <h2 className="text-xl font-bold text-slate-800">Wczytaj dane z chmury</h2>
          <p className="text-slate-500 text-sm">Wpisz swój 8-znakowy klucz.</p>
          <input 
            required autoFocus maxLength={12}
            className="w-full text-center text-3xl font-black tracking-widest uppercase px-4 py-5 rounded-2xl border-4 border-slate-100 focus:border-emerald-500 outline-none"
            placeholder="ABCDEFGH"
            value={importId}
            onChange={(e) => setImportId(e.target.value)}
          />
          <button type="submit" disabled={importId.length < 6} className="w-full bg-emerald-600 disabled:bg-slate-300 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2">
            Wczytaj dane <Icons.Check />
          </button>
        </form>
      )}
    </div>
  );
};

export default Onboarding;

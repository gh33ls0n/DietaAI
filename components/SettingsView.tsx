
import React, { useState } from 'react';
import { UserProfile, Gender, ActivityLevel } from '../types';
import { Icons } from '../constants';

interface SettingsViewProps {
  profile: UserProfile;
  onUpdateProfile: (updatedProfile: UserProfile) => void;
  onReset: () => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({ profile, onUpdateProfile, onReset }) => {
  const [localWeight, setLocalWeight] = useState(profile.weight.toString());
  const [formData, setFormData] = useState<UserProfile>(profile);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  const handleWeightSave = () => {
    const newWeight = parseFloat(localWeight);
    if (!isNaN(newWeight) && newWeight > 0) {
      const updated = { ...profile, weight: newWeight };
      onUpdateProfile(updated);
      setFormData(updated);
      showFeedback("Waga została zaktualizowana!");
    }
  };

  const handleFullUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(formData);
    showFeedback("Ustawienia zostały zapisane!");
  };

  const showFeedback = (msg: string) => {
    setSaveMessage(msg);
    setTimeout(() => setSaveMessage(null), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {saveMessage && (
        <div className="fixed bottom-8 right-8 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-2xl z-50 animate-bounce">
          {saveMessage}
        </div>
      )}

      {/* Szybka aktualizacja wagi */}
      <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
            <Icons.Apple />
          </div>
          <h2 className="text-xl font-bold text-slate-800">Szybka aktualizacja wagi</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="flex-grow space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase">Aktualna waga (kg)</label>
            <input 
              type="number" 
              value={localWeight}
              onChange={(e) => setLocalWeight(e.target.value)}
              className="w-full px-6 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 outline-none transition-all font-bold text-lg"
            />
          </div>
          <button 
            onClick={handleWeightSave}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-2xl transition-all shadow-lg active:scale-95"
          >
            Zapisz wagę
          </button>
          <button 
            onClick={() => setLocalWeight(profile.weight.toString())}
            className="bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold px-6 py-3 rounded-2xl transition-all"
          >
            Resetuj
          </button>
        </div>
        <p className="mt-4 text-sm text-slate-500 italic">
          * Zmiana wagi automatycznie przeliczy Twoje dzienne zapotrzebowanie kaloryczne widoczne na Dashboardzie.
        </p>
      </section>

      {/* Pełne ustawienia profilu */}
      <form onSubmit={handleFullUpdate} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
            <Icons.Settings />
          </div>
          <h2 className="text-xl font-bold text-slate-800">Twoje dane i preferencje</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase">Wiek</label>
            <input 
              type="number" 
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: parseInt(e.target.value)})}
              className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-emerald-500 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase">Wzrost (cm)</label>
            <input 
              type="number" 
              value={formData.height}
              onChange={(e) => setFormData({...formData, height: parseInt(e.target.value)})}
              className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-emerald-500 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase">Płeć</label>
            <select 
              value={formData.gender}
              onChange={(e) => setFormData({...formData, gender: e.target.value as Gender})}
              className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-emerald-500 outline-none transition-all"
            >
              <option value={Gender.MALE}>Mężczyzna</option>
              <option value={Gender.FEMALE}>Kobieta</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase">Poziom aktywności (Praca/Ruch)</label>
          <select 
            value={formData.activityLevel}
            onChange={(e) => setFormData({...formData, activityLevel: e.target.value as ActivityLevel})}
            className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-emerald-500 outline-none transition-all"
          >
            <option value={ActivityLevel.SEDENTARY}>Brak ruchu (praca siedząca)</option>
            <option value={ActivityLevel.LIGHT}>Lekka aktywność (1-2 treningi/tydz)</option>
            <option value={ActivityLevel.MODERATE}>Średnia aktywność (3-4 treningi/tydz)</option>
            <option value={ActivityLevel.ACTIVE}>Duża aktywność (codzienne treningi)</option>
            <option value={ActivityLevel.VERY_ACTIVE}>Bardzo duża (sportowiec/praca fizyczna)</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase">Twój cel</label>
          <div className="grid grid-cols-3 gap-3">
            {['LOSE', 'MAINTAIN', 'GAIN'].map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setFormData({...formData, goal: g as any})}
                className={`py-3 rounded-xl border-2 transition-all font-bold text-sm ${formData.goal === g ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-slate-100 text-slate-400'}`}
              >
                {g === 'LOSE' ? 'Redukcja' : g === 'MAINTAIN' ? 'Utrzymanie' : 'Masa'}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase">Preferencje żywieniowe</label>
          <textarea 
            value={formData.preferences}
            onChange={(e) => setFormData({...formData, preferences: e.target.value})}
            className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-emerald-500 outline-none transition-all min-h-[100px]"
            placeholder="Np. bez laktozy, tylko kanapki..."
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 rounded-2xl shadow-lg transition-all"
        >
          Zapisz wszystkie zmiany
        </button>
      </form>

      {/* Niebezpieczna strefa */}
      <section className="bg-red-50 p-8 rounded-3xl border border-red-100">
        <h2 className="text-xl font-bold text-red-800 mb-2">Strefa Niebezpieczna</h2>
        <p className="text-red-600 mb-6 text-sm">Zresetowanie danych spowoduje nieodwracalne usunięcie profilu i Twojego aktualnego jadłospisu.</p>
        <button 
          onClick={onReset}
          className="bg-white border-2 border-red-200 text-red-600 hover:bg-red-600 hover:text-white font-bold px-8 py-3 rounded-2xl transition-all"
        >
          Zresetuj wszystkie dane aplikacji
        </button>
      </section>
    </div>
  );
};

export default SettingsView;

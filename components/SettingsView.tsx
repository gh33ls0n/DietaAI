
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
  const [syncCode, setSyncCode] = useState("");
  const [showSync, setShowSync] = useState(false);

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

  const generateSyncCode = () => {
    const data = {
      profile: localStorage.getItem('user_profile'),
      plan: localStorage.getItem('weekly_plan'),
      custom: localStorage.getItem('custom_meals')
    };
    const code = btoa(encodeURIComponent(JSON.stringify(data)));
    setSyncCode(code);
    setShowSync(true);
  };

  const importSyncCode = () => {
    try {
      const decoded = JSON.parse(decodeURIComponent(atob(syncCode)));
      if (decoded.profile) localStorage.setItem('user_profile', decoded.profile);
      if (decoded.plan) localStorage.setItem('weekly_plan', decoded.plan);
      if (decoded.custom) localStorage.setItem('custom_meals', decoded.custom);
      alert("Dane zaimportowane pomyślnie! Strona zostanie odświeżona.");
      window.location.reload();
    } catch (e) {
      alert("Nieprawidłowy kod synchronizacji.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {saveMessage && (
        <div className="fixed bottom-8 right-8 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-2xl z-50 animate-bounce">
          {saveMessage}
        </div>
      )}

      {/* Synchronizacja */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl text-white shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <Icons.Swap className="text-emerald-400" />
          <h2 className="text-xl font-bold">Synchronizacja Międzyurządzeniowa</h2>
        </div>
        <p className="text-slate-400 text-sm mb-6">Chcesz przenieść jadłospis i własne dania na telefon? Wygeneruj kod na komputerze i wklej go na telefonie.</p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <button onClick={generateSyncCode} className="bg-emerald-600 hover:bg-emerald-500 px-6 py-2 rounded-xl font-bold transition-all text-sm">Wygeneruj kod eksportu</button>
            <button onClick={() => {setShowSync(true); setSyncCode("");}} className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-xl font-bold transition-all text-sm">Wczytaj kod z innego urządzenia</button>
          </div>

          {showSync && (
            <div className="space-y-3 animate-in zoom-in-95">
              <textarea 
                value={syncCode}
                onChange={(e) => setSyncCode(e.target.value)}
                placeholder="Wklej kod tutaj..."
                className="w-full h-32 bg-black/20 border border-white/10 rounded-2xl p-4 text-xs font-mono outline-none focus:border-emerald-500/50"
              />
              <div className="flex gap-2">
                <button onClick={importSyncCode} className="bg-emerald-500 px-6 py-2 rounded-xl font-bold text-sm">Zatwierdź Import</button>
                <button onClick={() => {
                   navigator.clipboard.writeText(syncCode);
                   showFeedback("Kod skopiowany!");
                }} className="bg-slate-700 px-6 py-2 rounded-xl font-bold text-sm">Kopiuj do schowka</button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Szybka aktualizacja wagi */}
      <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
            <Icons.Apple />
          </div>
          <h2 className="text-xl font-bold text-slate-800">Aktualna waga</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="flex-grow space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase">Twoja waga (kg)</label>
            <input type="number" value={localWeight} onChange={(e) => setLocalWeight(e.target.value)} className="w-full px-6 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 outline-none transition-all font-bold text-lg" />
          </div>
          <button onClick={handleWeightSave} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-2xl transition-all shadow-lg">Zapisz wagę</button>
        </div>
      </section>

      {/* Reszta ustawień */}
      <form onSubmit={handleFullUpdate} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2"><Icons.Settings /> Pełny profil</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400 uppercase">Wiek</label>
            <input type="number" value={formData.age} onChange={(e) => setFormData({...formData, age: parseInt(e.target.value)})} className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl outline-none" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400 uppercase">Wzrost</label>
            <input type="number" value={formData.height} onChange={(e) => setFormData({...formData, height: parseInt(e.target.value)})} className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl outline-none" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400 uppercase">Cel</label>
            <select value={formData.goal} onChange={(e) => setFormData({...formData, goal: e.target.value as any})} className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl outline-none">
              <option value="LOSE">Redukcja</option>
              <option value="MAINTAIN">Utrzymanie</option>
              <option value="GAIN">Masa</option>
            </select>
          </div>
        </div>
        <button type="submit" className="w-full bg-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-slate-900 transition-all">Zapisz zmiany profilu</button>
      </form>
      
      <button onClick={onReset} className="w-full py-4 text-red-500 font-bold border-2 border-dashed border-red-100 rounded-2xl hover:bg-red-50 transition-all">Wyczyść wszystkie dane aplikacji</button>
    </div>
  );
};

export default SettingsView;

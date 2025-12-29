
import React, { useState } from 'react';
import { UserProfile, Meal, WeeklyPlan, Gender, ActivityLevel } from '../types';
import { Icons } from '../constants';

interface SettingsViewProps {
  profile: UserProfile;
  mealPlan: WeeklyPlan | null;
  customMeals: Meal[];
  cloudId: string | null;
  onUpdateProfile: (updatedProfile: UserProfile) => void;
  onReset: () => void;
  onSetCloudId: (id: string | null) => void;
  onExportFile: () => void;
  onImportData: (data: any) => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({ 
  profile, mealPlan, customMeals, cloudId, 
  onUpdateProfile, onReset, onSetCloudId, onExportFile, onImportData 
}) => {
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [inputCloudId, setInputCloudId] = useState("");
  
  // Lokalny stan formularza dla płynności edycji
  const [form, setForm] = useState<UserProfile>(profile);

  const showFeedback = (msg: string) => {
    setSaveMessage(msg);
    setTimeout(() => setSaveMessage(null), 3000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target?.result as string);
          onImportData(data);
        } catch (err) {
          alert("Błąd: Plik nie jest poprawnym formatem kopii zapasowej.");
        }
      };
      reader.readAsText(file);
    }
  };

  const saveProfile = () => {
    onUpdateProfile(form);
    showFeedback("Zapisano zmiany w profilu!");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {saveMessage && (
        <div className="fixed bottom-8 right-8 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-2xl z-[200] animate-in slide-in-from-right">
          {saveMessage}
        </div>
      )}

      {/* 1. EDYCJA PARAMETRÓW CIAŁA I CELU */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <Icons.Apple className="text-emerald-500" /> Profil i Cel
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Waga (kg)</label>
            <input type="number" value={form.weight} onChange={e => setForm({...form, weight: parseFloat(e.target.value)})} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl font-bold" />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Wzrost (cm)</label>
            <input type="number" value={form.height} onChange={e => setForm({...form, height: parseFloat(e.target.value)})} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl font-bold" />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Wiek</label>
            <input type="number" value={form.age} onChange={e => setForm({...form, age: parseInt(e.target.value)})} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl font-bold" />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Płeć</label>
            <select value={form.gender} onChange={e => setForm({...form, gender: e.target.value as Gender})} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl font-bold outline-none">
              <option value={Gender.MALE}>Mężczyzna</option>
              <option value={Gender.FEMALE}>Kobieta</option>
            </select>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Twój Cel</label>
          <div className="grid grid-cols-3 gap-2">
            {(['LOSE', 'MAINTAIN', 'GAIN'] as const).map(g => (
              <button 
                key={g}
                onClick={() => setForm({...form, goal: g})}
                className={`py-3 rounded-xl text-xs font-bold border-2 transition-all ${form.goal === g ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-slate-50 text-slate-400 bg-slate-50'}`}
              >
                {g === 'LOSE' ? 'Redukcja' : g === 'MAINTAIN' ? 'Utrzymanie' : 'Masa'}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Aktywność</label>
          <select value={form.activityLevel} onChange={e => setForm({...form, activityLevel: e.target.value as ActivityLevel})} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl font-bold outline-none">
            <option value={ActivityLevel.SEDENTARY}>Brak ruchu</option>
            <option value={ActivityLevel.LIGHT}>Lekka aktywność (1-2x)</option>
            <option value={ActivityLevel.MODERATE}>Średnia (3-4x)</option>
            <option value={ActivityLevel.ACTIVE}>Duża (codziennie)</option>
            <option value={ActivityLevel.VERY_ACTIVE}>Sportowiec</option>
          </select>
        </div>

        <button onClick={saveProfile} className="w-full bg-emerald-600 text-white font-black py-4 rounded-2xl shadow-lg hover:bg-emerald-700 transition-all active:scale-95">
          ZAPISZ ZMIANY W PROFILU
        </button>
      </section>

      {/* 2. KOPIA PLIKOWA (NAPRAWIONA) */}
      <section className="bg-slate-800 p-8 rounded-3xl text-white shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <Icons.Save className="w-8 h-8 text-emerald-400" />
          <h2 className="text-xl font-bold uppercase tracking-tight">Kopia zapasowa (.json)</h2>
        </div>
        <p className="text-slate-400 text-sm mb-6">Pobierz kopię danych jako plik. Zadziała na każdym telefonie. Prześlij plik na nowe urządzenie i kliknij "Wczytaj".</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button onClick={onExportFile} className="bg-white text-slate-900 font-black py-4 rounded-2xl shadow-lg hover:bg-emerald-50 transition-all">POBIERZ PLIK KOPII</button>
          <label className="bg-emerald-600 text-white font-black py-4 rounded-2xl shadow-lg hover:bg-emerald-700 transition-all text-center cursor-pointer">
            WCZYTAJ Z PLIKU
            <input type="file" accept=".json,application/json" onChange={handleFileUpload} className="hidden" />
          </label>
        </div>
      </section>

      {/* 3. CLOUD ID */}
      <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold mb-2 text-slate-800 flex items-center gap-2">
          <Icons.Swap className="text-emerald-500 w-5 h-5" /> Synchronizacja Cloud
        </h2>
        {cloudId ? (
          <div className="bg-slate-50 p-4 rounded-2xl flex justify-between items-center">
            <p className="text-xl font-mono font-bold text-emerald-600">{cloudId}</p>
            <button onClick={() => onSetCloudId(null)} className="text-red-500 font-bold text-xs uppercase">Odłącz</button>
          </div>
        ) : (
          <div className="flex gap-2">
            <input value={inputCloudId} onChange={(e) => setInputCloudId(e.target.value.toLowerCase())} placeholder="Wpisz ID" className="flex-grow bg-slate-50 px-4 py-3 rounded-xl outline-none" />
            <button onClick={() => onSetCloudId(inputCloudId)} className="bg-slate-800 text-white px-6 rounded-xl font-bold">Połącz</button>
          </div>
        )}
      </section>

      <button onClick={onReset} className="w-full py-4 text-red-400 text-[10px] font-black uppercase tracking-widest border-t border-slate-100 pt-10">
        SKASUJ WSZYSTKIE DANE (RESET)
      </button>
    </div>
  );
};

export default SettingsView;

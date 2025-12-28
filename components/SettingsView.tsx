
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

  // Ulepszone kodowanie UTF-8 dla Base64 (obsługa polskich znaków)
  const generateSyncCode = () => {
    const data = {
      profile: localStorage.getItem('user_profile'),
      plan: localStorage.getItem('weekly_plan'),
      custom: localStorage.getItem('custom_meals')
    };
    const jsonStr = JSON.stringify(data);
    // encodeURIComponent + btoa to bezpieczna metoda na polskie znaki
    const code = btoa(encodeURIComponent(jsonStr));
    setSyncCode(code);
    setShowSync(true);
  };

  const importSyncCode = () => {
    // 1. Czyszczenie kodu z białych znaków (spacje, entery), które psują atob
    const cleanCode = syncCode.trim().replace(/[\n\r\s]/g, "");
    
    if (!cleanCode) {
      alert("Wklej najpierw kod synchronizacji.");
      return;
    }

    try {
      // 2. Dekodowanie z uwzględnieniem UTF-8
      const decodedStr = decodeURIComponent(atob(cleanCode));
      const decoded = JSON.parse(decodedStr);
      
      if (decoded.profile) localStorage.setItem('user_profile', decoded.profile);
      if (decoded.plan) localStorage.setItem('weekly_plan', decoded.plan);
      if (decoded.custom) localStorage.setItem('custom_meals', decoded.custom);
      
      alert("Dane zaimportowane pomyślnie! Strona zostanie odświeżona.");
      window.location.reload();
    } catch (e) {
      console.error("Sync Error:", e);
      alert("BŁĄD: Kod jest nieprawidłowy lub uszkodzony. Upewnij się, że skopiowałeś go w całości (od początku do końca) bez brakujących znaków.");
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
          <h2 className="text-xl font-bold">Synchronizacja Konta (Chmura Gilsona)</h2>
        </div>
        <p className="text-slate-400 text-sm mb-6">Kod jest długi, ponieważ zawiera całą Twoją historię i jadłospis. Prześlij go w całości, aby przenieść dane.</p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <button onClick={generateSyncCode} className="bg-emerald-600 hover:bg-emerald-500 px-6 py-2 rounded-xl font-bold transition-all text-sm">Wygeneruj kod mojego konta</button>
            <button onClick={() => {setShowSync(true); setSyncCode("");}} className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-xl font-bold transition-all text-sm">Wklej kod z innego urządzenia</button>
          </div>

          {showSync && (
            <div className="space-y-3 animate-in zoom-in-95">
              <div className="relative">
                <textarea 
                  value={syncCode}
                  onChange={(e) => setSyncCode(e.target.value)}
                  placeholder="Tutaj wklej kod..."
                  className="w-full h-40 bg-black/40 border border-white/10 rounded-2xl p-4 text-[10px] font-mono outline-none focus:border-emerald-500/50 text-emerald-100 placeholder:text-slate-600"
                />
                {syncCode.length > 0 && (
                   <div className="absolute top-2 right-2 px-2 py-1 bg-emerald-500/20 rounded text-[9px] font-bold text-emerald-400 uppercase">
                     Wykryto: {syncCode.length} znaków
                   </div>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                <button onClick={importSyncCode} className="bg-emerald-500 hover:bg-emerald-400 px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all">Zastosuj Importuj</button>
                <button onClick={() => {
                   navigator.clipboard.writeText(syncCode);
                   showFeedback("Kod skopiowany!");
                }} className="bg-slate-700 px-6 py-3 rounded-xl font-bold text-sm">Kopiuj do schowka</button>
                <button onClick={() => setSyncCode("")} className="bg-white/5 px-4 py-3 rounded-xl font-bold text-sm hover:bg-white/10">Wyczyść</button>
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
          <h2 className="text-xl font-bold text-slate-800">Moje parametry</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="flex-grow space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase">Twoja waga (kg)</label>
            <input type="number" value={localWeight} onChange={(e) => setLocalWeight(e.target.value)} className="w-full px-6 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 outline-none transition-all font-bold text-lg" />
          </div>
          <button onClick={handleWeightSave} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-2xl transition-all shadow-lg">Aktualizuj wagę</button>
        </div>
      </section>

      <form onSubmit={handleFullUpdate} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2"><Icons.Settings /> Szczegóły profilu</h2>
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
        <button type="submit" className="w-full bg-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-slate-900 transition-all">Zapisz ustawienia</button>
      </form>
      
      <button onClick={onReset} className="w-full py-4 text-red-500 font-bold border-2 border-dashed border-red-100 rounded-2xl hover:bg-red-50 transition-all">Usuń moje dane z tego urządzenia</button>
    </div>
  );
};

export default SettingsView;

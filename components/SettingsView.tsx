
import React, { useState } from 'react';
import { UserProfile, Meal } from '../types';
import { Icons } from '../constants';
import { CloudService } from '../services/cloudService';
import { parseRecipesJson } from '../services/recipeParser';

interface SettingsViewProps {
  profile: UserProfile;
  cloudId: string | null;
  onUpdateProfile: (updatedProfile: UserProfile) => void;
  onReset: () => void;
  onSetCloudId: (id: string | null) => void;
  onBulkAddMeals?: (meals: Meal[]) => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({ profile, cloudId, onUpdateProfile, onReset, onSetCloudId, onBulkAddMeals }) => {
  const [localWeight, setLocalWeight] = useState(profile.weight.toString());
  const [formData, setFormData] = useState<UserProfile>(profile);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [inputCloudId, setInputCloudId] = useState("");
  const [isTesting, setIsTesting] = useState(false);

  const handleWeightSave = () => {
    const newWeight = parseFloat(localWeight);
    if (!isNaN(newWeight) && newWeight > 0) {
      onUpdateProfile({ ...profile, weight: newWeight });
      showFeedback("Waga zaktualizowana!");
    }
  };

  const handleFullUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(formData);
    showFeedback("Ustawienia zapisane!");
  };

  const showFeedback = (msg: string) => {
    setSaveMessage(msg);
    setTimeout(() => setSaveMessage(null), 3000);
  };

  const handleTestConnection = async () => {
    setIsTesting(true);
    const result = await CloudService.saveData(cloudId, {
      profile,
      mealPlan: null,
      customMeals: [],
      lastUpdated: new Date().toISOString()
    });
    setIsTesting(false);
    
    if (result.success) {
      alert("Połączenie z chmurą działa poprawnie! Dane są bezpieczne.");
    } else {
      alert("Twoja sieć blokuje bezpośredni zapis do chmury. Aplikacja przełączyła się w tryb bezpieczny (zapis tylko na tym urządzeniu).");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {saveMessage && (
        <div className="fixed bottom-8 right-8 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-2xl z-50 animate-in slide-in-from-right">
          {saveMessage}
        </div>
      )}

      <section className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Icons.Swap className="w-32 h-32" />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <Icons.Swap className="text-emerald-400 w-5 h-5" />
            Synchronizacja Danych
          </h2>
          <p className="text-slate-400 text-sm mb-6 max-w-md">Twój unikalny klucz pozwala na dostęp do jadłospisu z telefonu, tabletu i komputera.</p>
          
          {cloudId ? (
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">Twoje ID Chmury</p>
                  <p className="text-2xl font-mono font-bold tracking-wider">{cloudId}</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button 
                    onClick={() => { navigator.clipboard.writeText(cloudId); showFeedback("Skopiowano ID!"); }}
                    className="flex-1 sm:flex-none p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all flex items-center justify-center gap-2 text-xs font-bold"
                  >
                    <Icons.Clipboard className="w-4 h-4" /> Kopiuj
                  </button>
                  <button 
                    onClick={() => onSetCloudId(null)}
                    className="flex-1 sm:flex-none p-3 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-xl transition-all flex items-center justify-center gap-2 text-xs font-bold"
                  >
                    <Icons.Plus className="w-4 h-4 rotate-45" /> Rozłącz
                  </button>
                </div>
              </div>
              <button 
                onClick={handleTestConnection}
                disabled={isTesting}
                className="text-[10px] font-bold text-slate-500 hover:text-emerald-400 transition-colors uppercase tracking-widest"
              >
                {isTesting ? "Testowanie..." : "→ Testuj połączenie z serwerem"}
              </button>
            </div>
          ) : (
            <div className="bg-white/5 p-6 rounded-2xl border border-dashed border-white/20 text-center">
              <p className="text-sm text-slate-300 mb-4">Nie masz jeszcze ID? Zmień coś w profilu, a utworzymy je automatycznie.</p>
              <div className="flex gap-2 max-w-xs mx-auto">
                <input 
                  value={inputCloudId}
                  onChange={(e) => setInputCloudId(e.target.value.toUpperCase())}
                  placeholder="WPISZ ID"
                  className="flex-grow bg-white/10 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-emerald-500 font-mono text-center"
                />
                <button 
                  onClick={() => onSetCloudId(inputCloudId)}
                  className="bg-emerald-600 px-6 py-2 rounded-xl font-bold text-sm hover:bg-emerald-500 transition-all"
                >
                  Połącz
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
            <Icons.Apple className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-800">Szybka aktualizacja wagi</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="flex-grow space-y-2 w-full">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Twoja aktualna waga (kg)</label>
            <input 
              type="number" 
              value={localWeight} 
              onChange={(e) => setLocalWeight(e.target.value)} 
              className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 outline-none font-black text-2xl text-slate-700" 
            />
          </div>
          <button 
            onClick={handleWeightSave}
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-10 py-4 rounded-2xl transition-all shadow-lg shadow-emerald-100 active:scale-95"
          >
            Aktualizuj
          </button>
        </div>
      </section>

      <form onSubmit={handleFullUpdate} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
            <Icons.Settings className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-800">Szczegóły Profilu</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Wiek</label>
            <input type="number" value={formData.age} onChange={(e) => setFormData({...formData, age: parseInt(e.target.value)})} className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl outline-none focus:border-emerald-500 font-bold" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Wzrost (cm)</label>
            <input type="number" value={formData.height} onChange={(e) => setFormData({...formData, height: parseInt(e.target.value)})} className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl outline-none focus:border-emerald-500 font-bold" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Cel sylwetkowy</label>
            <select value={formData.goal} onChange={(e) => setFormData({...formData, goal: e.target.value as any})} className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl outline-none focus:border-emerald-500 font-bold">
              <option value="LOSE">Redukcja tłuszczu</option>
              <option value="MAINTAIN">Utrzymanie formy</option>
              <option value="GAIN">Budowa masy</option>
            </select>
          </div>
        </div>
        
        <button type="submit" className="w-full bg-slate-800 text-white font-bold py-5 rounded-2xl shadow-xl hover:bg-slate-900 transition-all active:scale-[0.98]">
          Zapisz zmiany profilu
        </button>
      </form>
      
      <div className="pt-4">
        <button onClick={onReset} className="w-full py-4 text-red-400 text-xs font-bold uppercase tracking-widest border-2 border-dashed border-red-50 rounded-2xl hover:bg-red-50 hover:border-red-100 transition-all">
          Wyczyść pamięć aplikacji i wyloguj
        </button>
      </div>
    </div>
  );
};

export default SettingsView;

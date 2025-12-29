
import React, { useState } from 'react';
import { UserProfile, Meal, WeeklyPlan } from '../types';
import { Icons } from '../constants';
import { CloudService } from '../services/cloudService';
import LZString from 'lz-string';

interface SettingsViewProps {
  profile: UserProfile;
  mealPlan: WeeklyPlan | null;
  customMeals: Meal[];
  cloudId: string | null;
  onUpdateProfile: (updatedProfile: UserProfile) => void;
  onReset: () => void;
  onSetCloudId: (id: string | null) => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({ profile, mealPlan, customMeals, cloudId, onUpdateProfile, onReset, onSetCloudId }) => {
  const [localWeight, setLocalWeight] = useState(profile.weight.toString());
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [inputCloudId, setInputCloudId] = useState("");
  const [isGeneratingLink, setIsGeneratingLink] = useState(false);

  const showFeedback = (msg: string) => {
    setSaveMessage(msg);
    setTimeout(() => setSaveMessage(null), 3000);
  };

  const generateMagicLink = () => {
    setIsGeneratingLink(true);
    const data = { profile, mealPlan, customMeals };
    const compressed = LZString.compressToEncodedURIComponent(JSON.stringify(data));
    const url = `${window.location.origin}${window.location.pathname}?s=${compressed}`;
    
    navigator.clipboard.writeText(url).then(() => {
      alert("MAGIC LINK SKOPIOWANY!\n\nTo Twój jadłospis zaklęty w adresie URL. Wyślij ten link do siebie (np. na e-mail) i otwórz go na innym urządzeniu. To omija wszystkie blokady Netii.");
      setIsGeneratingLink(false);
    });
  };

  const copyRawData = () => {
    const data = { profile, mealPlan, customMeals };
    const text = LZString.compressToBase64(JSON.stringify(data));
    navigator.clipboard.writeText(text).then(() => {
      showFeedback("Kod danych skopiowany!");
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {saveMessage && (
        <div className="fixed bottom-8 right-8 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-2xl z-50 animate-in slide-in-from-right">
          {saveMessage}
        </div>
      )}

      {/* METODA 1: MAGIC LINK (NIEZAWODNA) */}
      <section className="bg-emerald-600 p-8 rounded-3xl text-white shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <Icons.Copy className="w-8 h-8 opacity-50" />
          <h2 className="text-xl font-bold uppercase tracking-tight">Omiń blokady Netii (Magic Link)</h2>
        </div>
        <p className="text-emerald-100 text-sm mb-6">Jeśli chmura nie działa, użyj tej metody. Wygenerujemy link, który zawiera wszystkie Twoje dane. Otwórz go na telefonie lub innym komputerze, aby natychmiast przenieść jadłospis.</p>
        <button 
          onClick={generateMagicLink}
          disabled={isGeneratingLink}
          className="w-full bg-white text-emerald-700 font-black py-4 rounded-2xl shadow-lg hover:bg-emerald-50 transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          {isGeneratingLink ? 'Generowanie...' : 'GENERUJ I KOPIUJ LINK SYNC'}
          <Icons.ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* METODA 2: CHMURA GOOGLE */}
      <section className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <Icons.Swap className="text-emerald-400 w-5 h-5" />
            Synchronizacja Cloud
          </h2>
          <p className="text-slate-400 text-sm mb-6">Tradycyjna chmura Google. Jeśli działa, synchronizacja odbywa się w tle.</p>
          
          {cloudId ? (
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">ID Twojej Chmury</p>
                <p className="text-2xl font-mono font-bold tracking-wider">{cloudId}</p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button onClick={() => onSetCloudId(null)} className="flex-1 sm:flex-none p-3 bg-red-500/20 text-red-400 rounded-xl text-xs font-bold">Rozłącz</button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <input 
                value={inputCloudId}
                onChange={(e) => setInputCloudId(e.target.value.toLowerCase())}
                placeholder="Wpisz ID"
                className="flex-grow bg-white/10 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none"
              />
              <button onClick={() => onSetCloudId(inputCloudId)} className="bg-emerald-600 px-6 py-2 rounded-xl font-bold text-sm">Połącz</button>
            </div>
          )}
        </div>
      </section>

      {/* METODA 3: MANUALNA KOPIA */}
      <section className="bg-white p-6 rounded-3xl border border-slate-200">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Metoda awaryjna</h3>
        <button onClick={copyRawData} className="w-full py-3 border-2 border-dashed border-slate-100 rounded-2xl text-slate-500 text-xs font-bold hover:bg-slate-50 transition-all">
          SKOPIUJ CAŁĄ BAZĘ DANYCH JAKO TEKST
        </button>
      </section>

      <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><Icons.Apple className="text-emerald-500"/> Aktualizacja wagi</h2>
        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <input type="number" value={localWeight} onChange={(e) => setLocalWeight(e.target.value)} className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-2xl font-black" />
          <button onClick={() => {
            const w = parseFloat(localWeight);
            if(w > 0) onUpdateProfile({...profile, weight: w});
            showFeedback("Zapisano!");
          }} className="w-full sm:w-auto bg-slate-800 text-white font-bold px-10 py-4 rounded-2xl">Zapisz</button>
        </div>
      </section>

      <button onClick={onReset} className="w-full py-4 text-red-400 text-[10px] font-black uppercase tracking-widest">
        Wyczyść dane i zacznij od nowa
      </button>
    </div>
  );
};

export default SettingsView;


import React, { useState } from 'react';
import { UserProfile, Meal, WeeklyPlan } from '../types';
import { Icons } from '../constants';
import { CloudService } from '../services/cloudService';

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
  const [localWeight, setLocalWeight] = useState(profile.weight.toString());
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [inputCloudId, setInputCloudId] = useState("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target?.result as string);
          onImportData(data);
          showFeedback("Wczytano jadłospis!");
        } catch (err) {
          alert("Błędny format pliku.");
        }
      };
      reader.readAsText(file);
    }
  };

  const showFeedback = (msg: string) => {
    setSaveMessage(msg);
    setTimeout(() => setSaveMessage(null), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {saveMessage && (
        <div className="fixed bottom-8 right-8 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-2xl z-50 animate-in slide-in-from-right">
          {saveMessage}
        </div>
      )}

      {/* SYNC PLIKOWY - OSTATECZNA METODA */}
      <section className="bg-slate-800 p-8 rounded-3xl text-white shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <Icons.Save className="w-8 h-8 text-emerald-400" />
          <h2 className="text-xl font-bold uppercase tracking-tight">Kopia zapasowa / Przenoszenie</h2>
        </div>
        <p className="text-slate-400 text-sm mb-6">Pobierz plik ze swoją dietą i wyślij go sobie na Messengerze lub mailu. Na drugim urządzeniu po prostu go wczytaj. To działa nawet bez internetu i omija wszystkie blokady.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button 
            onClick={onExportFile}
            className="bg-white text-slate-900 font-black py-4 rounded-2xl shadow-lg hover:bg-emerald-50 transition-all flex items-center justify-center gap-2"
          >
            POBIERZ PLIK .DIETA
          </button>
          
          <label className="bg-emerald-600 text-white font-black py-4 rounded-2xl shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 cursor-pointer text-center">
            WCZYTAJ Z PLIKU
            <input type="file" accept=".dieta,application/json" onChange={handleFileUpload} className="hidden" />
          </label>
        </div>
      </section>

      {/* CLOUD ID - DLA TYCH CO MAJĄ SZCZĘŚCIE Z ISP */}
      <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-slate-800">
          <Icons.Swap className="text-emerald-500 w-5 h-5" />
          Synchronizacja w chmurze
        </h2>
        <p className="text-slate-500 text-sm mb-6">Jeśli Twoja sieć na to pozwala, dane będą przesyłane w tle automatycznie.</p>
        
        {cloudId ? (
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">ID Twojej Chmury</p>
              <p className="text-2xl font-mono font-bold tracking-wider text-emerald-600">{cloudId}</p>
            </div>
            <button onClick={() => onSetCloudId(null)} className="p-3 bg-red-50 text-red-500 rounded-xl text-xs font-bold hover:bg-red-100 transition-colors">Odłącz</button>
          </div>
        ) : (
          <div className="flex gap-2">
            <input 
              value={inputCloudId}
              onChange={(e) => setInputCloudId(e.target.value.toLowerCase())}
              placeholder="Wpisz kod chmury"
              className="flex-grow bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald-500"
            />
            <button onClick={() => onSetCloudId(inputCloudId)} className="bg-slate-800 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-700">Połącz</button>
          </div>
        )}
      </section>

      {/* WAGA */}
      <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><Icons.Apple className="text-emerald-500"/> Aktualizacja wagi</h2>
        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <input type="number" value={localWeight} onChange={(e) => setLocalWeight(e.target.value)} className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-2xl font-black" />
          <button onClick={() => {
            const w = parseFloat(localWeight);
            if(w > 0) onUpdateProfile({...profile, weight: w});
            showFeedback("Zapisano!");
          }} className="w-full sm:w-auto bg-emerald-600 text-white font-bold px-10 py-4 rounded-2xl">Zapisz wagę</button>
        </div>
      </section>

      <button onClick={onReset} className="w-full py-4 text-slate-300 text-[10px] font-black uppercase tracking-widest hover:text-red-400 transition-colors">
        Wyczyść dane i zacznij od nowa
      </button>
    </div>
  );
};

export default SettingsView;

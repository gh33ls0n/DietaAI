
import React, { useState } from 'react';
import { UserProfile, Meal } from '../types';
import { Icons } from '../constants';
import { CloudService } from '../services/cloudService';

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
  const [lastError, setLastError] = useState<string | null>(null);

  const handleWeightSave = () => {
    const newWeight = parseFloat(localWeight);
    if (!isNaN(newWeight) && newWeight > 0) {
      onUpdateProfile({ ...profile, weight: newWeight });
      showFeedback("Waga zaktualizowana!");
    }
  };

  const showFeedback = (msg: string) => {
    setSaveMessage(msg);
    setTimeout(() => setSaveMessage(null), 3000);
  };

  const handleTestConnection = async () => {
    setIsTesting(true);
    setLastError(null);
    const result = await CloudService.saveData(cloudId, {
      profile,
      mealPlan: null,
      customMeals: [],
      lastUpdated: new Date().toISOString()
    });
    setIsTesting(false);
    
    if (result.success) {
      alert("POŁĄCZONO! Infrastruktura Google (Firebase) działa w Twojej sieci.");
    } else {
      setLastError(result.error || "Nieznany błąd sieciowy.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
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
            Synchronizacja (Firebase Google)
          </h2>
          <p className="text-slate-400 text-sm mb-6 max-w-md">Tryb chmury pozwala na współdzielenie jadłospisu. Jeśli nadal widzisz 'Tryb Lokalny', Twoja sieć Netia może mieć włączoną blokadę 'Bezpieczny Internet'.</p>
          
          {cloudId ? (
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">ID Chmury</p>
                  <p className="text-2xl font-mono font-bold tracking-wider">{cloudId}</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button 
                    onClick={() => { navigator.clipboard.writeText(cloudId); showFeedback("Skopiowano!"); }}
                    className="flex-1 sm:flex-none p-3 bg-white/10 rounded-xl text-xs font-bold"
                  >
                    Kopiuj
                  </button>
                  <button 
                    onClick={() => onSetCloudId(null)}
                    className="flex-1 sm:flex-none p-3 bg-red-500/20 text-red-400 rounded-xl text-xs font-bold"
                  >
                    Rozłącz
                  </button>
                </div>
              </div>
              <button 
                onClick={handleTestConnection}
                disabled={isTesting}
                className="text-[10px] font-bold text-slate-500 hover:text-emerald-400 transition-colors uppercase"
              >
                {isTesting ? "Łączenie z Google..." : "→ Sprawdź połączenie"}
              </button>
              
              {lastError && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-300">
                  <p className="font-bold mb-1">Błąd techniczny:</p>
                  <code className="block bg-black/20 p-2 rounded">{lastError}</code>
                  <p className="mt-2 opacity-60">Jeśli widzisz 'Failed to fetch', Twój router Netii blokuje porty API. Zalecamy wyłączenie usługi 'Bezpieczny Internet' w panelu Netii.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white/5 p-6 rounded-2xl border border-dashed border-white/20 text-center">
              <p className="text-sm text-slate-300 mb-4">Wprowadź ID z innego urządzenia:</p>
              <div className="flex gap-2 max-w-xs mx-auto">
                <input 
                  value={inputCloudId}
                  onChange={(e) => setInputCloudId(e.target.value.toLowerCase())}
                  placeholder="ID"
                  className="flex-grow bg-white/10 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-emerald-500 text-center font-mono"
                />
                <button 
                  onClick={() => onSetCloudId(inputCloudId)}
                  className="bg-emerald-600 px-6 py-2 rounded-xl font-bold text-sm"
                >
                  Połącz
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Reszta SettingsView pozostaje bez zmian */}
      <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
            <Icons.Apple className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-800">Aktualizacja wagi</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="flex-grow space-y-2 w-full">
            <input type="number" value={localWeight} onChange={(e) => setLocalWeight(e.target.value)} className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-2xl font-black" />
          </div>
          <button onClick={handleWeightSave} className="w-full sm:w-auto bg-emerald-600 text-white font-bold px-10 py-4 rounded-2xl">Zaktualizuj</button>
        </div>
      </section>
      
      <div className="pt-4">
        <button onClick={onReset} className="w-full py-4 text-red-400 text-xs font-bold uppercase tracking-widest border-2 border-dashed border-red-50 rounded-2xl">
          Wyczyść wszystko i wyloguj
        </button>
      </div>
    </div>
  );
};

export default SettingsView;

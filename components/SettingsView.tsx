
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
  onSetCloudId: (id: string) => void;
  onBulkAddMeals?: (meals: Meal[]) => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({ profile, cloudId, onUpdateProfile, onReset, onSetCloudId, onBulkAddMeals }) => {
  const [localWeight, setLocalWeight] = useState(profile.weight.toString());
  const [formData, setFormData] = useState<UserProfile>(profile);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [inputCloudId, setInputCloudId] = useState("");
  const [isImporting, setIsImporting] = useState(false);

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

  const handleCreateCloudAccount = () => {
    const newId = CloudService.generateKey();
    onSetCloudId(newId);
    showFeedback("Utworzono konto w chmurze!");
  };

  const handleConnectCloud = () => {
    if (inputCloudId.length < 4) {
      alert("Wprowadź poprawny klucz konta.");
      return;
    }
    onSetCloudId(inputCloudId.toUpperCase());
    showFeedback("Połączono z kontem!");
    setTimeout(() => window.location.reload(), 1000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsImporting(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        const parsedMeals = parseRecipesJson(json);
        if (onBulkAddMeals) {
          onBulkAddMeals(parsedMeals);
          showFeedback(`Zaimportowano ${parsedMeals.length} przepisów!`);
        }
      } catch (err) {
        alert("Błąd podczas czytania pliku JSON. Upewnij się, że format jest poprawny.");
      } finally {
        setIsImporting(false);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {saveMessage && (
        <div className="fixed bottom-8 right-8 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-2xl z-50 animate-in slide-in-from-right-4">
          {saveMessage}
        </div>
      )}

      {/* Import Sekcja */}
      <section className="bg-emerald-50 p-8 rounded-3xl border-2 border-emerald-100 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
            <Icons.Plus />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Masowy Import Przepisów</h2>
            <p className="text-slate-500 text-xs">Wgraj swój plik JSON (nawet 1300+ przepisów). Aplikacja automatycznie je skategoryzuje.</p>
          </div>
        </div>
        
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-emerald-300 border-dashed rounded-2xl cursor-pointer bg-emerald-50/50 hover:bg-emerald-100 transition-all">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {isImporting ? (
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
              ) : (
                <>
                  <Icons.Clipboard className="w-8 h-8 mb-3 text-emerald-500" />
                  <p className="mb-2 text-sm text-emerald-700 font-bold underline">Kliknij, aby wybrać plik .json</p>
                  <p className="text-xs text-emerald-500">Przetworzymy go lokalnie w Twojej przeglądarce</p>
                </>
              )}
            </div>
            <input type="file" className="hidden" accept=".json" onChange={handleFileUpload} disabled={isImporting} />
          </label>
        </div>
      </section>

      <section className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl border border-white/5">
        <div className="flex items-center gap-3 mb-4">
          <Icons.Swap className="text-emerald-400" />
          <h2 className="text-xl font-bold">Synchronizacja w chmurze</h2>
        </div>
        
        {!cloudId ? (
          <div className="space-y-4">
            <p className="text-slate-400 text-sm">Twoje dane są obecnie zapisywane tylko na tym urządzeniu. Załóż darmowe konto chmurowe, aby mieć do nich dostęp wszędzie.</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={handleCreateCloudAccount} className="bg-emerald-600 hover:bg-emerald-500 px-6 py-2 rounded-xl font-bold transition-all text-sm">Generuj mój klucz chmury</button>
              <div className="flex-grow flex gap-2">
                <input 
                  value={inputCloudId}
                  onChange={(e) => setInputCloudId(e.target.value)}
                  placeholder="Wpisz klucz z innego urządzenia..."
                  className="flex-grow bg-white/10 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-emerald-500"
                />
                <button onClick={handleConnectCloud} className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl font-bold text-sm">Połącz</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-white/10 p-4 rounded-2xl flex justify-between items-center">
              <div>
                <p className="text-[10px] font-bold text-emerald-400 uppercase">Twój aktywny klucz dostępu</p>
                <p className="text-2xl font-black tracking-widest">{cloudId}</p>
              </div>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(cloudId);
                  showFeedback("Skopiowano klucz!");
                }}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all"
              >
                <Icons.Clipboard className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-400">Zapisz ten klucz. Wpisz go na nowym urządzeniu, aby natychmiast wczytać swój jadłospis.</p>
          </div>
        )}
      </section>

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

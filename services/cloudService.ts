
import { UserProfile, WeeklyPlan, Meal } from "../types";
import LZString from "lz-string";

interface CloudData {
  profile: UserProfile | null;
  mealPlan: WeeklyPlan | null;
  customMeals: Meal[];
  lastUpdated: string;
}

const BUCKET_ID = 'dietagilsona_v3_compressed'; 
const API_BASE = `https://kvdb.io/${BUCKET_ID}`;

export const CloudService = {
  /**
   * Pobiera dane z dwóch niezależnych kluczy (Core i Library) i łączy je w jeden obiekt.
   */
  loadData: async (cloudId: string): Promise<CloudData | null> => {
    try {
      // Pobieramy dane równolegle (Performance!)
      const [resCore, resLib] = await Promise.all([
        fetch(`${API_BASE}/${cloudId}?t=${Date.now()}`),
        fetch(`${API_BASE}/${cloudId}_lib?t=${Date.now()}`)
      ]);

      let coreData: any = {};
      let libData: any = { customMeals: [] };

      if (resCore.ok) {
        const raw = await resCore.text();
        const decompressed = LZString.decompressFromBase64(raw);
        coreData = JSON.parse(decompressed || raw);
      }

      if (resLib.ok) {
        const raw = await resLib.text();
        const decompressed = LZString.decompressFromBase64(raw);
        libData = JSON.parse(decompressed || raw);
      }

      if (!resCore.ok && !resLib.ok) return null;

      return {
        profile: coreData.profile || null,
        mealPlan: coreData.mealPlan || null,
        customMeals: libData.customMeals || coreData.customMeals || [],
        lastUpdated: coreData.lastUpdated || new Date().toISOString()
      };
    } catch (e) {
      console.error("Cloud Load Error:", e);
      return null;
    }
  },

  /**
   * Rozdziela dane na dwie paczki i zapisuje je pod osobnymi kluczami.
   */
  saveData: async (cloudId: string, data: CloudData): Promise<{success: boolean, error?: string}> => {
    try {
      // 1. Paczka CORE (Profil + Jadłospis)
      const corePayload = JSON.stringify({
        profile: data.profile,
        mealPlan: data.mealPlan,
        lastUpdated: data.lastUpdated
      });
      
      // 2. Paczka LIBRARY (Tylko Twoje 1300 przepisów)
      const libPayload = JSON.stringify({
        customMeals: data.customMeals
      });

      const compressedCore = LZString.compressToBase64(corePayload);
      const compressedLib = LZString.compressToBase64(libPayload);

      console.log(`Sync Stats: Core: ${(compressedCore.length/1024).toFixed(1)}KB, Library: ${(compressedLib.length/1024).toFixed(1)}KB`);

      // Sprawdzenie limitu fizycznego serwera (512KB na klucz)
      if (compressedLib.length > 510000) {
        return { 
          success: false, 
          error: "Baza przepisów jest zbyt duża (nawet po kompresji > 500KB)." 
        };
      }

      // Zapisujemy obie paczki
      const [statusCore, statusLib] = await Promise.all([
        fetch(`${API_BASE}/${cloudId}`, { method: 'POST', body: compressedCore }),
        fetch(`${API_BASE}/${cloudId}_lib`, { method: 'POST', body: compressedLib })
      ]);

      if (statusCore.ok && statusLib.ok) {
        return { success: true };
      }
      
      return { 
        success: false, 
        error: "Błąd podczas zapisu jednego z segmentów danych." 
      };
    } catch (e) {
      console.error("Cloud Save Error:", e);
      return { success: false, error: "Błąd połączenia." };
    }
  },

  generateKey: () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = 'DG-';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
};

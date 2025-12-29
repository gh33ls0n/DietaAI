
import { UserProfile, WeeklyPlan, Meal } from "../types";
import LZString from "lz-string";

interface CloudData {
  profile: UserProfile | null;
  mealPlan: WeeklyPlan | null;
  customMeals: Meal[];
  lastUpdated: string;
}

/**
 * CloudService V6 - Stabilna synchronizacja
 * 
 * Rozwiązanie problemu "Failed to fetch":
 * 1. Użycie płaskiej struktury kluczy (bez ukośników w nazwie klucza).
 * 2. Przesyłanie danych jako 'text/plain', co czyni zapytanie "Simple Request".
 *    Dzięki temu przeglądarka nie wysyła zapytania OPTIONS (preflight), które często jest blokowane.
 * 3. Kompresja LZ-String pozwala zmieścić nawet 1500+ przepisów w limicie 512KB większości darmowych KV.
 */
const API_BASE = `https://api.keyvalue.xyz`;
const APP_PREFIX = "DG_V6"; 

export const CloudService = {
  /**
   * Pobiera dane z chmury.
   */
  loadData: async (cloudId: string): Promise<CloudData | null> => {
    try {
      // Używamy unikalnego, płaskiego klucza
      const fullKey = `${APP_PREFIX}_${cloudId}`;
      
      const res = await fetch(`${API_BASE}/${fullKey}?t=${Date.now()}`, {
        method: 'GET',
        headers: { 
          'Accept': 'text/plain'
        }
      });

      if (!res.ok) {
        if (res.status === 404) {
          console.log("Konto nie istnieje w chmurze, używam danych lokalnych.");
          return null;
        }
        throw new Error(`Błąd serwera: ${res.status}`);
      }

      const raw = await res.text();
      if (!raw || raw.length < 10) return null;

      // Dekompresja danych
      const decompressed = LZString.decompressFromBase64(raw);
      const data = JSON.parse(decompressed || raw);

      return {
        profile: data.profile || null,
        mealPlan: data.mealPlan || null,
        customMeals: data.customMeals || [],
        lastUpdated: data.lastUpdated || new Date().toISOString()
      };
    } catch (e) {
      console.error("Cloud Load Error:", e);
      return null;
    }
  },

  /**
   * Zapisuje dane w chmurze.
   */
  saveData: async (cloudId: string, data: CloudData): Promise<{success: boolean, error?: string}> => {
    try {
      const fullKey = `${APP_PREFIX}_${cloudId}`;
      
      // Pakujemy wszystko w jeden obiekt dla maksymalnej spójności
      const payload = JSON.stringify({
        profile: data.profile,
        mealPlan: data.mealPlan,
        customMeals: data.customMeals,
        lastUpdated: data.lastUpdated
      });

      const compressed = LZString.compressToBase64(payload);

      /**
       * CRITICAL FIX: Wysyłamy jako text/plain.
       * To zapobiega wysyłaniu zapytania preflight OPTIONS.
       * Jeśli serwer nie wspiera OPTIONS (co jest częste w darmowych API), 
       * to właśnie to powoduje błąd "Failed to fetch".
       */
      const response = await fetch(`${API_BASE}/${fullKey}`, {
        method: 'POST',
        body: compressed,
        headers: {
          'Content-Type': 'text/plain' 
        }
      });

      if (response.ok) {
        return { success: true };
      } else {
        return { success: false, error: `Błąd serwera: ${response.status}` };
      }
    } catch (e: any) {
      console.error("Cloud Save Error:", e);
      // Jeśli błąd to "Failed to fetch", zazwyczaj winny jest CORS lub brak internetu
      return { 
        success: false, 
        error: e.message === "Failed to fetch" 
          ? "Błąd sieci (CORS/Blokada). Spróbuj za chwilę." 
          : "Nie udało się zapisać danych." 
      };
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

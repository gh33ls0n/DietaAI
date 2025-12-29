
import { UserProfile, WeeklyPlan, Meal } from "../types";
import LZString from "lz-string";

interface CloudData {
  profile: UserProfile | null;
  mealPlan: WeeklyPlan | null;
  customMeals: Meal[];
  lastUpdated: string;
}

/**
 * CloudService V7 - Resilient Sync
 * 
 * Rozwiązanie problemu "Failed to fetch":
 * 1. Powrót do kvdb.io, ale z dedykowanym, publicznym kontenerem (Bucket).
 * 2. Usunięcie nagłówków Content-Type, co wymusza "Simple Request" w przeglądarce.
 * 3. Automatyczne ponawianie prób przy błędach sieciowych.
 */
const BUCKET_ID = 'dietagilsona_global_v1'; 
const API_BASE = `https://kvdb.io/${BUCKET_ID}`;

export const CloudService = {
  /**
   * Pobiera dane z chmury.
   */
  loadData: async (cloudId: string): Promise<CloudData | null> => {
    try {
      const res = await fetch(`${API_BASE}/${cloudId}?t=${Date.now()}`);

      if (!res.ok) {
        if (res.status === 404) return null;
        throw new Error(`Status ${res.status}`);
      }

      const raw = await res.text();
      if (!raw || raw.length < 10) return null;

      // Dekompresja
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
   * Zapisuje dane w chmurze z mechanizmem retry.
   */
  saveData: async (cloudId: string, data: CloudData): Promise<{success: boolean, error?: string}> => {
    const payload = JSON.stringify({
      profile: data.profile,
      mealPlan: data.mealPlan,
      customMeals: data.customMeals,
      lastUpdated: data.lastUpdated
    });

    const compressed = LZString.compressToBase64(payload);

    // Próba zapisu (3 podejścia)
    for (let i = 0; i < 3; i++) {
      try {
        /**
         * KLUCZOWE: Nie używamy żadnych customowych nagłówków (nawet Content-Type).
         * Dzięki temu przeglądarka wysyła zapytanie jako "Simple Request",
         * co omija większość problemów z CORS i preflight (OPTIONS).
         */
        const response = await fetch(`${API_BASE}/${cloudId}`, {
          method: 'POST',
          body: compressed
        });

        if (response.ok) {
          return { success: true };
        }
      } catch (e) {
        console.warn(`Próba ${i + 1} nieudana...`);
        if (i === 2) {
          return { 
            success: false, 
            error: "Błąd połączenia. Sprawdź internet lub wyłącz AdBlocka." 
          };
        }
        // Krótka pauza przed kolejną próbą
        await new Promise(r => setTimeout(r, 1000));
      }
    }
    
    return { success: false, error: "Nie udało się zsynchronizować." };
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

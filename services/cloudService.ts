
import { UserProfile, WeeklyPlan, Meal } from "../types";
import LZString from "lz-string";

interface CloudData {
  profile: UserProfile | null;
  mealPlan: WeeklyPlan | null;
  customMeals: Meal[];
  lastUpdated: string;
}

/**
 * CloudService V8 - JsonBlob Provider
 * 
 * JsonBlob jest stabilniejszy i lepiej obsługuje CORS niż proste KV story.
 * Cloud ID w tej wersji to unikalny identyfikator bloba.
 */
const API_BASE = "https://jsonblob.com/api/jsonBlob";

export const CloudService = {
  /**
   * Pobiera dane z chmury.
   */
  loadData: async (cloudId: string): Promise<CloudData | null> => {
    try {
      // Jeśli ID nie wygląda na ID JsonBlob, ignorujemy
      if (cloudId.length < 10) return null;

      const res = await fetch(`${API_BASE}/${cloudId}`, {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
      });

      if (!res.ok) {
        if (res.status === 404) return null;
        throw new Error(`Błąd: ${res.status}`);
      }

      const rawData = await res.json();
      
      // Dane są przechowywane jako skompresowany string w polu 'd'
      if (!rawData.d) return null;

      const decompressed = LZString.decompressFromBase64(rawData.d);
      const data = JSON.parse(decompressed);

      return {
        profile: data.profile || null,
        mealPlan: data.mealPlan || null,
        customMeals: data.customMeals || [],
        lastUpdated: data.lastUpdated || new Date().toISOString()
      };
    } catch (e) {
      console.error("Cloud Load Error:", e);
      throw e;
    }
  },

  /**
   * Zapisuje dane. Jeśli cloudId nie istnieje, tworzy nowy blob.
   */
  saveData: async (cloudId: string | null, data: CloudData): Promise<{success: boolean, id?: string, error?: string}> => {
    try {
      const payload = JSON.stringify({
        profile: data.profile,
        mealPlan: data.mealPlan,
        customMeals: data.customMeals,
        lastUpdated: data.lastUpdated
      });

      const compressed = LZString.compressToBase64(payload);
      const body = JSON.stringify({ d: compressed });

      // Jeśli nie mamy ID, tworzymy nowy zasób (POST)
      if (!cloudId) {
        const res = await fetch(API_BASE, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: body
        });

        if (res.ok) {
          // Pobieramy ID z nagłówka Location: .../api/jsonBlob/{ID}
          const location = res.headers.get('Location');
          const newId = location?.split('/').pop();
          return { success: true, id: newId };
        }
      } else {
        // Jeśli mamy ID, aktualizujemy istniejący (PUT)
        const res = await fetch(`${API_BASE}/${cloudId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: body
        });

        if (res.ok) return { success: true, id: cloudId };
      }

      return { success: false, error: "Serwer odrzucił dane." };
    } catch (e: any) {
      console.error("Cloud Save Error:", e);
      return { 
        success: false, 
        error: "Blokada sieci. Sprawdź AdBlocka lub VPN." 
      };
    }
  }
};


import { UserProfile, WeeklyPlan, Meal } from "../types";
import LZString from "lz-string";

interface CloudData {
  profile: UserProfile | null;
  mealPlan: WeeklyPlan | null;
  customMeals: Meal[];
  lastUpdated: string;
}

/**
 * CloudService V10 - JsonBlob Stability Provider
 * JsonBlob jest najstabilniejszą darmową bazą JSON z poprawnym CORS.
 */
const API_BASE = "https://jsonblob.com/api/jsonBlob";

export const CloudService = {
  /**
   * Pobiera dane z chmury.
   */
  loadData: async (cloudId: string): Promise<CloudData | null> => {
    try {
      if (!cloudId || cloudId.length < 5) return null;

      const res = await fetch(`${API_BASE}/${cloudId}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        },
        mode: 'cors'
      });

      if (!res.ok) return null;

      const raw = await res.json();
      // JsonBlob przechowuje dane w polu 'd' (zgodnie z naszym poprzednim zapisem) lub jako root
      const content = raw.d || raw;
      
      if (typeof content !== 'string') return null;

      const decompressed = LZString.decompressFromBase64(content);
      if (!decompressed) return null;
      
      return JSON.parse(decompressed);
    } catch (e) {
      console.warn("Cloud Load Error:", e);
      return null;
    }
  },

  /**
   * Zapisuje dane. Używa POST dla nowych i PUT dla istniejących.
   */
  saveData: async (cloudId: string | null, data: CloudData): Promise<{success: boolean, id?: string, error?: string}> => {
    try {
      const payload = JSON.stringify(data);
      const compressed = LZString.compressToBase64(payload);
      const body = JSON.stringify({ d: compressed });

      // Wybór metody: POST tworzy nowy blob, PUT aktualizuje istniejący
      const url = cloudId ? `${API_BASE}/${cloudId}` : API_BASE;
      const method = cloudId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: body,
        mode: 'cors'
      });

      if (res.ok) {
        // Jeśli to był POST, musimy wyciągnąć nowe ID z nagłówka Location
        if (method === 'POST') {
          const location = res.headers.get('Location');
          if (location) {
            const newId = location.split('/').pop();
            return { success: true, id: newId };
          }
        }
        return { success: true, id: cloudId || undefined };
      }

      return { success: false, error: `Błąd serwera: ${res.status}` };
    } catch (e: any) {
      console.error("Cloud Save Critical Error:", e);
      return { 
        success: false, 
        error: "Blokada CORS lub błąd certyfikatu serwera." 
      };
    }
  }
};

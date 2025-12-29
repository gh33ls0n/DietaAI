
import { UserProfile, WeeklyPlan, Meal } from "../types";
import LZString from "lz-string";

interface CloudData {
  profile: UserProfile | null;
  mealPlan: WeeklyPlan | null;
  customMeals: Meal[];
  lastUpdated: string;
}

/**
 * CloudService V12 - npoint.io Provider
 * npoint.io jest wyjątkowo odporny na blokady CORS i błędy preflight.
 */
const API_BASE = "https://api.npoint.io";

export const CloudService = {
  /**
   * Pobiera dane z chmury.
   */
  loadData: async (cloudId: string): Promise<CloudData | null> => {
    if (!cloudId || cloudId.length < 5) return null;

    try {
      const res = await fetch(`${API_BASE}/${cloudId}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!res.ok) return null;

      const raw = await res.json();
      // npoint przechowuje dane bezpośrednio
      const content = raw.d || raw;
      
      if (typeof content !== 'string') return null;

      const decompressed = LZString.decompressFromBase64(content);
      return decompressed ? JSON.parse(decompressed) : null;
    } catch (e) {
      console.warn("Npoint Load Error:", e);
      return null;
    }
  },

  /**
   * Zapisuje dane.
   */
  saveData: async (cloudId: string | null, data: CloudData): Promise<{success: boolean, id?: string, error?: string}> => {
    try {
      const payload = JSON.stringify(data);
      const compressed = LZString.compressToBase64(payload);
      
      // Dla npoint.io używamy POST do tworzenia i POST/PUT do edycji (zależy od implementacji bin-u)
      // Ale najbezpieczniejszy dla CORS jest POST na konkretny endpoint.
      const url = cloudId ? `${API_BASE}/${cloudId}` : API_BASE;
      
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ d: compressed })
      });

      if (res.ok) {
        const result = await res.json();
        // npoint zwraca ID w polu 'id' lub 'binId'
        const newId = result.id || result.binId || cloudId;
        return { success: true, id: newId };
      }

      return { success: false, error: `Serwer zwrócił błąd ${res.status}` };
    } catch (e: any) {
      console.error("Critical Sync Error:", e);
      return { 
        success: false, 
        error: "Połączenie zablokowane przez Twoją sieć (CORS/Firewall)." 
      };
    }
  },

  generateShortId: () => {
    return Math.random().toString(36).substring(2, 12).toLowerCase();
  }
};

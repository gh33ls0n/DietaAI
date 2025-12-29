
import { UserProfile, WeeklyPlan, Meal } from "../types";
import LZString from "lz-string";

interface CloudData {
  profile: UserProfile | null;
  mealPlan: WeeklyPlan | null;
  customMeals: Meal[];
  lastUpdated: string;
}

/**
 * CloudService V13 - Firebase/Google Infrastructure
 * Wykorzystuje Google Firebase REST API - najbardziej zaufaną domenę, 
 * rzadko blokowaną przez dostawców takich jak Netia.
 */
const FIREBASE_URL = "https://dieta-gilsona-default-rtdb.europe-west1.firebasedatabase.app/sync";

export const CloudService = {
  /**
   * Pobiera dane. Używamy .json na końcu (wymóg Firebase REST API).
   */
  loadData: async (cloudId: string): Promise<CloudData | null> => {
    if (!cloudId || cloudId.length < 5) return null;

    try {
      // Wykorzystujemy Google-hosted domain
      const res = await fetch(`${FIREBASE_URL}/${cloudId}.json`, {
        method: 'GET',
        mode: 'cors'
      });

      if (!res.ok) return null;

      const raw = await res.json();
      if (!raw || !raw.d) return null;

      const decompressed = LZString.decompressFromBase64(raw.d);
      return decompressed ? JSON.parse(decompressed) : null;
    } catch (e) {
      console.warn("Cloud Load Error (Google/Firebase):", e);
      return null;
    }
  },

  /**
   * Zapisuje dane przy użyciu PUT (nadpisywanie w Firebase).
   */
  saveData: async (cloudId: string | null, data: CloudData): Promise<{success: boolean, id?: string, error?: string}> => {
    const activeId = cloudId || CloudService.generateShortId();
    
    try {
      const compressed = LZString.compressToBase64(JSON.stringify(data));
      
      // PUT na Firebase REST API jest bardzo proste i rzadko blokowane
      const res = await fetch(`${FIREBASE_URL}/${activeId}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ d: compressed, ts: Date.now() })
      });

      if (res.ok) {
        return { success: true, id: activeId };
      }

      return { success: false, error: `Status: ${res.status}` };
    } catch (e: any) {
      console.error("Critical Sync Error:", e);
      // Przekazujemy czytelny błąd dla diagnostyki
      return { 
        success: false, 
        error: e.message || "Błąd sieci/CORS"
      };
    }
  },

  generateShortId: () => {
    // Firebase lubi proste klucze bez znaków specjalnych
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
};

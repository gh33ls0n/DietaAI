
import { UserProfile, WeeklyPlan, Meal } from "../types";
import LZString from "lz-string";

interface CloudData {
  profile: UserProfile | null;
  mealPlan: WeeklyPlan | null;
  customMeals: Meal[];
  lastUpdated: string;
}

/**
 * CloudService V9 - Simple Request Protocol
 * 
 * ROZWIĄZANIE PROBLEMU BLOKADY:
 * Przeglądarki blokują zapytania JSON (OPTIONS preflight). 
 * Wysyłając dane jako 'text/plain', wymuszamy "Simple Request", 
 * który omija te zabezpieczenia i przechodzi przez większość filtrów sieciowych.
 */
const API_BASE = "https://api.keyvalue.xyz";
const BUCKET_PREFIX = "DG_V9_"; 

export const CloudService = {
  /**
   * Pobiera dane z chmury.
   */
  loadData: async (cloudId: string): Promise<CloudData | null> => {
    try {
      // Pobieranie przez GET jest proste i zazwyczaj nieblokowane
      const res = await fetch(`${API_BASE}/${BUCKET_PREFIX}${cloudId}`, {
        method: 'GET',
        cache: 'no-store'
      });

      if (!res.ok) {
        if (res.status === 404) return null;
        throw new Error(`Błąd: ${res.status}`);
      }

      const raw = await res.text();
      if (!raw || raw.length < 10) return null;

      // Dekompresja
      const decompressed = LZString.decompressFromBase64(raw);
      if (!decompressed) return null;
      
      const data = JSON.parse(decompressed);

      return {
        profile: data.profile || null,
        mealPlan: data.mealPlan || null,
        customMeals: data.customMeals || [],
        lastUpdated: data.lastUpdated || new Date().toISOString()
      };
    } catch (e) {
      console.warn("Cloud Load Error:", e);
      return null;
    }
  },

  /**
   * Zapisuje dane jako zwykły tekst (Simple Request).
   */
  saveData: async (cloudId: string | null, data: CloudData): Promise<{success: boolean, id?: string, error?: string}> => {
    try {
      // Generujemy ID jeśli nie istnieje
      const activeId = cloudId || CloudService.generateKey();
      
      const payload = JSON.stringify({
        profile: data.profile,
        mealPlan: data.mealPlan,
        customMeals: data.customMeals,
        lastUpdated: data.lastUpdated
      });

      const compressed = LZString.compressToBase64(payload);

      /**
       * KLUCZOWE: Używamy POST z 'text/plain'.
       * To sprawia, że zapytanie jest "Proste" i przeglądarka NIE WYSYŁA OPTIONS.
       * Omija to 99% problemów z CORS i AdBlockami.
       */
      const res = await fetch(`${API_BASE}/${BUCKET_PREFIX}${activeId}`, {
        method: 'POST',
        body: compressed,
        headers: {
          'Content-Type': 'text/plain'
        }
      });

      if (res.ok) {
        return { success: true, id: activeId };
      }

      return { success: false, error: `Serwer zwrócił błąd ${res.status}` };
    } catch (e: any) {
      console.error("Cloud Save Error:", e);
      return { 
        success: false, 
        error: "Błąd sieci. Spróbuj zmienić sieć (np. na LTE)." 
      };
    }
  },

  generateKey: () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
};

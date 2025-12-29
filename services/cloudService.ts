
import { UserProfile, WeeklyPlan, Meal } from "../types";
import LZString from "lz-string";

interface CloudData {
  profile: UserProfile | null;
  mealPlan: WeeklyPlan | null;
  customMeals: Meal[];
  lastUpdated: string;
}

/**
 * CloudService V11 - Multi-Provider Resilient Architecture
 * Wykorzystuje dwa niezależne serwery, aby ominąć lokalne blokady DNS/CORS.
 */
const PROVIDERS = {
  KVDB: "https://kvdb.io/25vK8Zq3XmB8zS5Dk2FpTq", // Dedykowany bucket
  JSONBLOB: "https://jsonblob.com/api/jsonBlob"
};

export const CloudService = {
  /**
   * Pobiera dane z chmury, próbując różnych dostawców.
   */
  loadData: async (cloudId: string): Promise<CloudData | null> => {
    if (!cloudId || cloudId.length < 4) return null;

    // Próba 1: KVDB (Zazwyczaj szybszy i mniej blokowany w PL)
    try {
      const res = await fetch(`${PROVIDERS.KVDB}/${cloudId}`, { 
        method: 'GET',
        cache: 'no-store'
      });
      if (res.ok) {
        const raw = await res.text();
        return CloudService.decompress(raw);
      }
    } catch (e) {
      console.warn("KVDB Load Failed, trying fallback...");
    }

    // Próba 2: JSONBLOB (Zapas)
    try {
      const res = await fetch(`${PROVIDERS.JSONBLOB}/${cloudId}`, { method: 'GET' });
      if (res.ok) {
        const json = await res.json();
        return CloudService.decompress(json.d || json);
      }
    } catch (e) {
      console.error("All Cloud Providers Failed.");
    }

    return null;
  },

  /**
   * Zapisuje dane. Jeśli cloudId nie istnieje, tworzy nowy zasób na KVDB.
   */
  saveData: async (cloudId: string | null, data: CloudData): Promise<{success: boolean, id?: string, error?: string}> => {
    const compressed = CloudService.compress(data);
    const activeId = cloudId || CloudService.generateShortId();

    try {
      // Używamy PUT na KVDB - jest najbardziej odporny na błędy "Failed to fetch"
      const res = await fetch(`${PROVIDERS.KVDB}/${activeId}`, {
        method: 'PUT',
        body: compressed,
        headers: { 'Content-Type': 'text/plain' }, // Simple Request - omija OPTIONS preflight
        mode: 'cors'
      });

      if (res.ok) {
        return { success: true, id: activeId };
      }

      // Fallback do JSONBLOB jeśli KVDB padnie
      const blobRes = await fetch(cloudId ? `${PROVIDERS.JSONBLOB}/${cloudId}` : PROVIDERS.JSONBLOB, {
        method: cloudId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ d: compressed })
      });

      if (blobRes.ok) {
        let newId = cloudId;
        if (!cloudId) {
          const loc = blobRes.headers.get('Location');
          newId = loc ? loc.split('/').pop() || activeId : activeId;
        }
        return { success: true, id: newId || activeId };
      }

      return { success: false, error: "Błąd serwerów zapasowych." };
    } catch (e) {
      console.warn("Cloud Save Failed (Network/CORS block)");
      return { success: false, error: "Sieć blokuje połączenie z chmurą." };
    }
  },

  compress: (data: any): string => {
    return LZString.compressToBase64(JSON.stringify(data));
  },

  decompress: (raw: string): CloudData | null => {
    try {
      if (!raw || raw.length < 10) return null;
      const decompressed = LZString.decompressFromBase64(raw);
      return decompressed ? JSON.parse(decompressed) : null;
    } catch {
      return null;
    }
  },

  generateShortId: () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  }
};

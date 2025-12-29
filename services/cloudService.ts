
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
   * Pobiera dane i dekompresuje je
   */
  loadData: async (cloudId: string): Promise<CloudData | null> => {
    try {
      const response = await fetch(`${API_BASE}/${cloudId}?t=${Date.now()}`);
      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error(`Serwer zwrócił błąd: ${response.status}`);
      }
      
      const rawData = await response.text();
      
      // Sprawdzamy czy dane są skompresowane (zwykle zaczynają się od znaków kontrolnych lub są w Base64)
      // LZString.decompressFromBase64 zwraca null jeśli dane nie są w tym formacie
      let decoded;
      try {
        const decompressed = LZString.decompressFromBase64(rawData);
        decoded = decompressed ? JSON.parse(decompressed) : JSON.parse(rawData);
      } catch (e) {
        // Jeśli dekompresja zawiedzie, spróbuj sparsować jako czysty JSON (dla starych danych)
        decoded = JSON.parse(rawData);
      }
      
      return decoded;
    } catch (e) {
      console.error("Cloud Load Error:", e);
      const localFallback = localStorage.getItem(`cloud_cache_${cloudId}`);
      if (localFallback) {
        try {
          const decompressed = LZString.decompressFromBase64(localFallback);
          return decompressed ? JSON.parse(decompressed) : JSON.parse(localFallback);
        } catch (err) {
          return JSON.parse(localFallback);
        }
      }
      return null;
    }
  },

  /**
   * Kompresuje dane i zapisuje w chmurze
   */
  saveData: async (cloudId: string, data: CloudData): Promise<{success: boolean, error?: string}> => {
    try {
      const jsonString = JSON.stringify(data);
      // Kompresja do Base64 (najbezpieczniejsza dla transferu HTTP)
      const compressed = LZString.compressToBase64(jsonString);
      
      console.log(`Cloud Sync: Original size: ${(jsonString.length / 1024).toFixed(1)}KB, Compressed: ${(compressed.length / 1024).toFixed(1)}KB`);

      // Limit kvdb.io to ok 512KB. Po kompresji 2MB powinno zajmować ok 150-250KB.
      if (compressed.length > 500000) {
        return { 
          success: false, 
          error: "Nawet po kompresji dane są za duże. Przekroczono 500KB." 
        };
      }

      const response = await fetch(`${API_BASE}/${cloudId}`, {
        method: 'POST',
        body: compressed, // Wysyłamy skompresowany ciąg znaków
      });

      if (response.ok) {
        localStorage.setItem(`cloud_cache_${cloudId}`, compressed);
        return { success: true };
      }
      
      return { 
        success: false, 
        error: response.status === 413 ? "Serwer odrzucił paczkę (zbyt duża)." : "Błąd serwera." 
      };
    } catch (e) {
      console.error("Cloud Save Error:", e);
      return { success: false, error: "Brak połączenia z internetem." };
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

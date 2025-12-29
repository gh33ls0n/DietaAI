
import { UserProfile, WeeklyPlan, Meal } from "../types";
import LZString from "lz-string";

interface CloudData {
  profile: UserProfile | null;
  mealPlan: WeeklyPlan | null;
  customMeals: Meal[];
  lastUpdated: string;
}

const BUCKET_ID = 'dietagilsona_v4_adaptive'; 
const API_BASE = `https://kvdb.io/${BUCKET_ID}`;

// Maksymalna liczba przepisów w jednym fragmencie (bezpieczny bufor)
const CHUNK_SIZE = 200;

export const CloudService = {
  /**
   * Pobiera dane główne oraz wszystkie fragmenty biblioteki w sposób równoległy.
   */
  loadData: async (cloudId: string): Promise<CloudData | null> => {
    try {
      // 1. Pobierz CORE, aby dowiedzieć się, ile jest fragmentów
      const resCore = await fetch(`${API_BASE}/${cloudId}?t=${Date.now()}`);
      if (!resCore.ok) return null;

      const rawCore = await resCore.text();
      const decompressedCore = LZString.decompressFromBase64(rawCore);
      const coreData = JSON.parse(decompressedCore || rawCore);

      const chunkCount = coreData.libChunkCount || 0;
      let allCustomMeals: Meal[] = [];

      if (chunkCount > 0) {
        // 2. Pobierz wszystkie fragmenty biblioteki równolegle
        const chunkPromises = [];
        for (let i = 0; i < chunkCount; i++) {
          chunkPromises.push(fetch(`${API_BASE}/${cloudId}_lib_${i}?t=${Date.now()}`).then(r => r.text()));
        }

        const rawChunks = await Promise.all(chunkPromises);
        
        rawChunks.forEach(raw => {
          try {
            const decompressed = LZString.decompressFromBase64(raw);
            const chunk = JSON.parse(decompressed || raw);
            if (chunk.meals) {
              allCustomMeals = [...allCustomMeals, ...chunk.meals];
            }
          } catch (e) {
            console.error("Błąd dekodowania fragmentu biblioteki:", e);
          }
        });
      } else if (coreData.customMeals) {
        // Wsparcie dla starego formatu (legacy)
        allCustomMeals = coreData.customMeals;
      }

      return {
        profile: coreData.profile || null,
        mealPlan: coreData.mealPlan || null,
        customMeals: allCustomMeals,
        lastUpdated: coreData.lastUpdated || new Date().toISOString()
      };
    } catch (e) {
      console.error("Cloud Load Error:", e);
      return null;
    }
  },

  /**
   * Dzieli customMeals na fragmenty i zapisuje wszystko w chmurze.
   */
  saveData: async (cloudId: string, data: CloudData): Promise<{success: boolean, error?: string}> => {
    try {
      // 1. Podziel posiłki na fragmenty po CHUNK_SIZE sztuk
      const mealChunks: Meal[][] = [];
      for (let i = 0; i < data.customMeals.length; i += CHUNK_SIZE) {
        mealChunks.push(data.customMeals.slice(i, i + CHUNK_SIZE));
      }

      // 2. Przygotuj CORE (z informacją o liczbie fragmentów)
      const corePayload = JSON.stringify({
        profile: data.profile,
        mealPlan: data.mealPlan,
        lastUpdated: data.lastUpdated,
        libChunkCount: mealChunks.length
      });
      const compressedCore = LZString.compressToBase64(corePayload);

      // 3. Przygotuj fragmenty biblioteki
      const savePromises = [
        fetch(`${API_BASE}/${cloudId}`, { method: 'POST', body: compressedCore })
      ];

      mealChunks.forEach((chunkMeals, index) => {
        const chunkPayload = JSON.stringify({ meals: chunkMeals });
        const compressedChunk = LZString.compressToBase64(chunkPayload);
        
        // Logowanie dla celów diagnostycznych
        console.log(`Fragment ${index} (rozmiar): ${(compressedChunk.length/1024).toFixed(1)}KB`);
        
        savePromises.push(
          fetch(`${API_BASE}/${cloudId}_lib_${index}`, { method: 'POST', body: compressedChunk })
        );
      });

      const results = await Promise.all(savePromises);
      const allOk = results.every(r => r.ok);

      if (allOk) {
        return { success: true };
      }
      
      return { 
        success: false, 
        error: "Nie udało się zapisać wszystkich fragmentów danych." 
      };
    } catch (e) {
      console.error("Cloud Save Error:", e);
      return { success: false, error: "Błąd połączenia z chmurą." };
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

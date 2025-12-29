
import { UserProfile, WeeklyPlan, Meal } from "../types";
import LZString from "lz-string";

interface CloudData {
  profile: UserProfile | null;
  mealPlan: WeeklyPlan | null;
  customMeals: Meal[];
  lastUpdated: string;
}

// Używamy stabilnego i otwartego API keyvalue.xyz
const API_BASE = `https://api.keyvalue.xyz`;
// Unikalny prefiks dla aplikacji Dieta Gilsona, aby klucze nie kolidowały z innymi aplikacjami
const APP_PREFIX = "dietagilsona_v5";

const CHUNK_SIZE = 50;
const MAX_RETRIES = 3;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const CloudService = {
  /**
   * Pobiera dane z chmury.
   */
  loadData: async (cloudId: string): Promise<CloudData | null> => {
    try {
      const fullKey = `${APP_PREFIX}_${cloudId}`;
      
      // 1. Pobierz CORE (Profil + Meta)
      const resCore = await fetch(`${API_BASE}/${fullKey}/core?t=${Date.now()}`);
      if (!resCore.ok) return null;

      const rawCore = await resCore.text();
      const decompressedCore = LZString.decompressFromBase64(rawCore);
      const coreData = JSON.parse(decompressedCore || rawCore);

      const chunkCount = coreData.libChunkCount || 0;
      let allCustomMeals: Meal[] = [];
      let mealPlan: WeeklyPlan | null = null;

      // 2. Pobierz JADŁOSPIS
      if (coreData.hasExternalPlan) {
        try {
          const resPlan = await fetch(`${API_BASE}/${fullKey}/plan?t=${Date.now()}`);
          if (resPlan.ok) {
            const rawPlan = await resPlan.text();
            const decompressedPlan = LZString.decompressFromBase64(rawPlan);
            mealPlan = JSON.parse(decompressedPlan || rawPlan);
          }
        } catch (e) {
          console.warn("Błąd pobierania planu.");
        }
      }

      // 3. Pobierz BIBLIOTEKĘ (Fragmenty)
      if (chunkCount > 0) {
        // Tu używamy sekwencyjnego pobierania dla stabilności
        for (let i = 0; i < chunkCount; i++) {
          try {
            const res = await fetch(`${API_BASE}/${fullKey}/lib_${i}?t=${Date.now()}`);
            if (res.ok) {
              const raw = await res.text();
              const decompressed = LZString.decompressFromBase64(raw);
              const chunk = JSON.parse(decompressed || raw);
              if (chunk.meals) {
                allCustomMeals = [...allCustomMeals, ...chunk.meals];
              }
            }
          } catch (e) {
            console.error(`Błąd fragmentu ${i}`);
          }
        }
      }

      return {
        profile: coreData.profile || null,
        mealPlan: mealPlan || coreData.mealPlan || null,
        customMeals: allCustomMeals,
        lastUpdated: coreData.lastUpdated || new Date().toISOString()
      };
    } catch (e) {
      console.error("Cloud Load Error:", e);
      return null;
    }
  },

  /**
   * Zapisuje dane w chmurze (Metoda POST dla keyvalue.xyz).
   */
  saveData: async (cloudId: string, data: CloudData): Promise<{success: boolean, error?: string}> => {
    try {
      const fullKey = `${APP_PREFIX}_${cloudId}`;
      
      // 1. Podział na fragmenty
      const mealChunks: Meal[][] = [];
      for (let i = 0; i < data.customMeals.length; i += CHUNK_SIZE) {
        mealChunks.push(data.customMeals.slice(i, i + CHUNK_SIZE));
      }

      // 2. Lista zadań (Zapis na keyvalue.xyz to POST na /KEY/SUBKEY)
      const tasks: {url: string, body: string, label: string}[] = [];
      
      if (data.mealPlan) {
        tasks.push({
          url: `${API_BASE}/${fullKey}/plan`,
          body: LZString.compressToBase64(JSON.stringify(data.mealPlan)),
          label: "Jadłospis"
        });
      }

      mealChunks.forEach((chunk, index) => {
        tasks.push({
          url: `${API_BASE}/${fullKey}/lib_${index}`,
          body: LZString.compressToBase64(JSON.stringify({ meals: chunk })),
          label: `Biblioteka ${index + 1}`
        });
      });

      tasks.push({
        url: `${API_BASE}/${fullKey}/core`,
        body: LZString.compressToBase64(JSON.stringify({
          profile: data.profile,
          lastUpdated: data.lastUpdated,
          libChunkCount: mealChunks.length,
          hasExternalPlan: !!data.mealPlan
        })),
        label: "Dane profilu"
      });

      // 3. Wysyłanie sekwencyjne
      for (const task of tasks) {
        let success = false;
        let lastError = "";

        for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
          try {
            const res = await fetch(task.url, { 
              method: 'POST', 
              body: task.body 
            });
            
            if (res.ok) {
              success = true;
              break; 
            }
            lastError = `Serwer: ${res.status}`;
          } catch (e: any) {
            lastError = e.message || "Błąd sieci";
          }
          
          if (!success && attempt < MAX_RETRIES) {
            await delay(800 * attempt);
          }
        }

        if (!success) {
          return { success: false, error: `${task.label}: ${lastError}` };
        }
        await delay(150);
      }

      return { success: true };
    } catch (e) {
      return { success: false, error: "Błąd krytyczny połączenia." };
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

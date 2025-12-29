
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

// Zmniejszamy rozmiar fragmentu dla stabilności (100 przepisów na paczkę)
const CHUNK_SIZE = 100;
const MAX_RETRIES = 3;

// Pomocnicza funkcja opóźnienia
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const CloudService = {
  /**
   * Pobiera dane główne oraz fragmenty.
   */
  loadData: async (cloudId: string): Promise<CloudData | null> => {
    try {
      const resCore = await fetch(`${API_BASE}/${cloudId}?t=${Date.now()}`);
      if (!resCore.ok) return null;

      const rawCore = await resCore.text();
      const decompressedCore = LZString.decompressFromBase64(rawCore);
      const coreData = JSON.parse(decompressedCore || rawCore);

      const chunkCount = coreData.libChunkCount || 0;
      let allCustomMeals: Meal[] = [];

      if (chunkCount > 0) {
        // Pobieranie fragmentów (tutaj Promise.all zwykle działa ok, bo to GET)
        const chunkPromises = [];
        for (let i = 0; i < chunkCount; i++) {
          chunkPromises.push(
            fetch(`${API_BASE}/${cloudId}_lib_${i}?t=${Date.now()}`)
              .then(r => r.ok ? r.text() : "")
          );
        }

        const rawChunks = await Promise.all(chunkPromises);
        
        rawChunks.forEach(raw => {
          if (!raw) return;
          try {
            const decompressed = LZString.decompressFromBase64(raw);
            const chunk = JSON.parse(decompressed || raw);
            if (chunk.meals) {
              allCustomMeals = [...allCustomMeals, ...chunk.meals];
            }
          } catch (e) {
            console.error("Błąd dekodowania fragmentu:", e);
          }
        });
      } else if (coreData.customMeals) {
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
   * Zapisuje dane sekwencyjnie z mechanizmem ponawiania prób.
   */
  saveData: async (cloudId: string, data: CloudData): Promise<{success: boolean, error?: string}> => {
    try {
      // 1. Podział na mniejsze fragmenty
      const mealChunks: Meal[][] = [];
      for (let i = 0; i < data.customMeals.length; i += CHUNK_SIZE) {
        mealChunks.push(data.customMeals.slice(i, i + CHUNK_SIZE));
      }

      // 2. Przygotowanie paczek do wysłania
      const payloads: {url: string, body: string}[] = [];
      
      const corePayload = JSON.stringify({
        profile: data.profile,
        mealPlan: data.mealPlan,
        lastUpdated: data.lastUpdated,
        libChunkCount: mealChunks.length
      });
      payloads.push({ url: `${API_BASE}/${cloudId}`, body: LZString.compressToBase64(corePayload) });

      mealChunks.forEach((chunk, index) => {
        const chunkPayload = JSON.stringify({ meals: chunk });
        payloads.push({ 
          url: `${API_BASE}/${cloudId}_lib_${index}`, 
          body: LZString.compressToBase64(chunkPayload) 
        });
      });

      // 3. Wysyłanie sekwencyjne z retry
      console.log(`Starting sync of ${payloads.length} chunks...`);
      
      for (let i = 0; i < payloads.length; i++) {
        const item = payloads[i];
        let success = false;
        let lastError = "";

        for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
          try {
            const res = await fetch(item.url, { 
              method: 'POST', 
              body: item.body,
              // Zapobieganie cache'owaniu
              headers: { 'Cache-Control': 'no-cache' }
            });
            
            if (res.ok) {
              success = true;
              break; 
            }
            lastError = `Server returned ${res.status}`;
          } catch (e: any) {
            lastError = e.message;
          }
          
          if (attempt < MAX_RETRIES) {
            console.warn(`Retry ${attempt}/${MAX_RETRIES} for chunk ${i}...`);
            await delay(500 * attempt); // Eksponencjalne oczekiwanie
          }
        }

        if (!success) {
          return { 
            success: false, 
            error: `Błąd zapisu fragmentu ${i}: ${lastError}` 
          };
        }
        
        // Mała przerwa między chunkami, żeby nie przeciążyć API
        await delay(100);
      }

      return { success: true };
    } catch (e) {
      console.error("Cloud Save Error:", e);
      return { success: false, error: "Krytyczny błąd połączenia." };
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

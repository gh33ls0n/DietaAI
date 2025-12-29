
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

// Ultra-bezpieczny rozmiar fragmentu (50 przepisów)
const CHUNK_SIZE = 50;
const MAX_RETRIES = 3;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const CloudService = {
  /**
   * Pobiera wszystkie rozproszone fragmenty danych.
   */
  loadData: async (cloudId: string): Promise<CloudData | null> => {
    try {
      // 1. Pobierz CORE
      const resCore = await fetch(`${API_BASE}/${cloudId}?t=${Date.now()}`);
      if (!resCore.ok) return null;

      const rawCore = await resCore.text();
      const decompressedCore = LZString.decompressFromBase64(rawCore);
      const coreData = JSON.parse(decompressedCore || rawCore);

      const chunkCount = coreData.libChunkCount || 0;
      let allCustomMeals: Meal[] = [];
      let mealPlan: WeeklyPlan | null = coreData.mealPlan || null;

      // 2. Jeśli plan jest w osobnym fragmencie, pobierz go
      if (coreData.hasExternalPlan) {
        try {
          const resPlan = await fetch(`${API_BASE}/${cloudId}_plan?t=${Date.now()}`);
          if (resPlan.ok) {
            const rawPlan = await resPlan.text();
            const decompressedPlan = LZString.decompressFromBase64(rawPlan);
            mealPlan = JSON.parse(decompressedPlan || rawPlan);
          }
        } catch (e) {
          console.warn("Nie udało się pobrać wydzielonego planu, używam cache lokalnego.");
        }
      }

      // 3. Pobierz bibliotekę przepisów
      if (chunkCount > 0) {
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
            if (chunk.meals) allCustomMeals = [...allCustomMeals, ...chunk.meals];
          } catch (e) {
            console.error("Błąd dekodowania fragmentu:", e);
          }
        });
      }

      return {
        profile: coreData.profile || null,
        mealPlan,
        customMeals: allCustomMeals,
        lastUpdated: coreData.lastUpdated || new Date().toISOString()
      };
    } catch (e) {
      console.error("Cloud Load Error:", e);
      return null;
    }
  },

  /**
   * Zapisuje dane z maksymalną ostrożnością.
   */
  saveData: async (cloudId: string, data: CloudData): Promise<{success: boolean, error?: string}> => {
    try {
      // 1. Podział biblioteki na małe paczki
      const mealChunks: Meal[][] = [];
      for (let i = 0; i < data.customMeals.length; i += CHUNK_SIZE) {
        mealChunks.push(data.customMeals.slice(i, i + CHUNK_SIZE));
      }

      // 2. Przygotowanie listy zadań do wykonania (sekwencyjnie)
      const tasks: {url: string, body: string, label: string}[] = [];
      
      // Zadanie: Plan (osobno, bo bywa duży)
      if (data.mealPlan) {
        const planPayload = JSON.stringify(data.mealPlan);
        tasks.push({
          url: `${API_BASE}/${cloudId}_plan`,
          body: LZString.compressToBase64(planPayload),
          label: "Jadłospis"
        });
      }

      // Zadanie: Biblioteka
      mealChunks.forEach((chunk, index) => {
        const chunkPayload = JSON.stringify({ meals: chunk });
        tasks.push({
          url: `${API_BASE}/${cloudId}_lib_${index}`,
          body: LZString.compressToBase64(chunkPayload),
          label: `Paczka przepisów ${index + 1}/${mealChunks.length}`
        });
      });

      // Zadanie: CORE (na samym końcu, jako potwierdzenie sukcesu reszty)
      const corePayload = JSON.stringify({
        profile: data.profile,
        lastUpdated: data.lastUpdated,
        libChunkCount: mealChunks.length,
        hasExternalPlan: !!data.mealPlan
      });
      tasks.push({
        url: `${API_BASE}/${cloudId}`,
        body: LZString.compressToBase64(corePayload),
        label: "Dane profilu"
      });

      // 3. Wykonanie sekwencyjne z dużym buforem bezpieczeństwa
      for (const task of tasks) {
        let success = false;
        let errorMsg = "";

        for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
          try {
            // Używamy prostego POST bez zbędnych nagłówków, które mogą powodować błędy CORS/Fetch
            const res = await fetch(task.url, { 
              method: 'POST', 
              body: task.body,
              cache: 'no-store'
            });
            
            if (res.ok) {
              success = true;
              break; 
            }
            errorMsg = `Status ${res.status}`;
          } catch (e: any) {
            errorMsg = e.message || "Błąd sieci";
          }
          
          if (attempt < MAX_RETRIES) {
            await delay(1000 * attempt); // Dłuższe czekanie przy błędzie
          }
        }

        if (!success) {
          return { success: false, error: `${task.label}: ${errorMsg}` };
        }
        
        await delay(200); // 0.2s przerwy między paczkami
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

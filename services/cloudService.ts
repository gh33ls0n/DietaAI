
import { UserProfile, WeeklyPlan, Meal } from "../types";

interface CloudData {
  profile: UserProfile | null;
  mealPlan: WeeklyPlan | null;
  customMeals: Meal[];
  lastUpdated: string;
}

// Używamy publicznego bucketu na kvdb.io dla rzeczywistej synchronizacji między urządzeniami
const BUCKET_ID = 'dietagilsona_v1_public'; 
const API_BASE = `https://kvdb.io/${BUCKET_ID}`;

export const CloudService = {
  /**
   * Pobiera dane z prawdziwej chmury
   */
  loadData: async (cloudId: string): Promise<CloudData | null> => {
    try {
      const response = await fetch(`${API_BASE}/${cloudId}`);
      if (!response.ok) {
        if (response.status === 404) return null; // Klucz jeszcze nie istnieje
        throw new Error("Błąd serwera");
      }
      return await response.json();
    } catch (e) {
      console.error("Cloud Load Error:", e);
      // Jeśli nie ma sieci, próbujemy chociaż z lokalnego cache
      const localFallback = localStorage.getItem(`cloud_cache_${cloudId}`);
      return localFallback ? JSON.parse(localFallback) : null;
    }
  },

  /**
   * Zapisuje dane w prawdziwej chmurze (dostępne z każdego urządzenia)
   */
  saveData: async (cloudId: string, data: CloudData): Promise<boolean> => {
    try {
      // Optymalizacja: usuwamy bardzo ciężkie dane, jeśli przekraczają limity (opcjonalnie)
      // Ale dla 1300 przepisów JSON powinien się zmieścić w standardowym limicie 512KB/1MB
      const response = await fetch(`${API_BASE}/${cloudId}`, {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Zapisujemy też lokalnie jako szybki cache
        localStorage.setItem(`cloud_cache_${cloudId}`, JSON.stringify(data));
        return true;
      }
      return false;
    } catch (e) {
      console.error("Cloud Save Error:", e);
      return false;
    }
  },

  /**
   * Generuje nowy, unikalny klucz konta
   */
  generateKey: () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Bez mylących znaków jak 0, O, 1, I
    let result = 'DG-';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
};


import { UserProfile, WeeklyPlan, Meal } from "../types";

interface CloudData {
  profile: UserProfile | null;
  mealPlan: WeeklyPlan | null;
  customMeals: Meal[];
  lastUpdated: string;
}

const BUCKET_ID = 'dietagilsona_v2_prod'; 
const API_BASE = `https://kvdb.io/${BUCKET_ID}`;

export const CloudService = {
  /**
   * Pobiera i czyści dane z chmury
   */
  loadData: async (cloudId: string): Promise<CloudData | null> => {
    try {
      const response = await fetch(`${API_BASE}/${cloudId}?t=${Date.now()}`); // Cache busting
      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error(`Serwer zwrócił błąd: ${response.status}`);
      }
      return await response.json();
    } catch (e) {
      console.error("Cloud Load Error:", e);
      const localFallback = localStorage.getItem(`cloud_cache_${cloudId}`);
      return localFallback ? JSON.parse(localFallback) : null;
    }
  },

  /**
   * Zapisuje dane z optymalizacją wielkości
   */
  saveData: async (cloudId: string, data: CloudData): Promise<{success: boolean, error?: string}> => {
    try {
      // Optymalizacja: Usuwamy zbędne białe znaki i metadane przed wysyłką
      // Jeśli baza jest nadal za duża, musimy ją "odchudzić"
      const payload = JSON.stringify(data);
      
      // Sprawdzenie limitu (około 500KB dla kvdb.io)
      if (payload.length > 500000) {
        return { 
          success: false, 
          error: "Baza jest za duża (max 500KB). Usuń kilka przepisów lub skróć opisy." 
        };
      }

      const response = await fetch(`${API_BASE}/${cloudId}`, {
        method: 'POST',
        body: payload,
      });

      if (response.ok) {
        localStorage.setItem(`cloud_cache_${cloudId}`, payload);
        return { success: true };
      }
      
      return { 
        success: false, 
        error: response.status === 413 ? "Zbyt duża ilość danych." : "Błąd serwera." 
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

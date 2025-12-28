
import { UserProfile, WeeklyPlan, Meal } from "../types";

// Struktura danych w bazie
interface CloudData {
  profile: UserProfile | null;
  mealPlan: WeeklyPlan | null;
  customMeals: Meal[];
  lastUpdated: string;
}

/**
 * Usługa CloudService obsługuje zapis i odczyt danych z chmury.
 * W wersji produkcyjnej tutaj łączymy się z Supabase, Firebase lub własnym API.
 */
export const CloudService = {
  // Symulacja endpointu (zastąp własnym adresem bazy danych)
  API_URL: 'https://jsonbin.org/me/dietagilsona', 

  /**
   * Pobiera dane z chmury na podstawie unikalnego ID
   */
  loadData: async (cloudId: string): Promise<CloudData | null> => {
    try {
      // W realnym scenariuszu: const response = await fetch(`${API_URL}/${cloudId}`);
      // Na potrzeby prezentacji używamy localStorage jako "pamięci serwera" symulując opóźnienie
      await new Promise(resolve => setTimeout(resolve, 800));
      const remoteData = localStorage.getItem(`cloud_remote_${cloudId}`);
      return remoteData ? JSON.parse(remoteData) : null;
    } catch (e) {
      console.error("Cloud Load Error:", e);
      return null;
    }
  },

  /**
   * Zapisuje dane w chmurze
   */
  saveData: async (cloudId: string, data: CloudData): Promise<boolean> => {
    try {
      // W realnym scenariuszu: await fetch(`${API_URL}/${cloudId}`, { method: 'POST', body: JSON.stringify(data) });
      await new Promise(resolve => setTimeout(resolve, 500));
      localStorage.setItem(`cloud_remote_${cloudId}`, JSON.stringify({
        ...data,
        lastUpdated: new Date().toISOString()
      }));
      return true;
    } catch (e) {
      console.error("Cloud Save Error:", e);
      return false;
    }
  },

  /**
   * Generuje nowy, unikalny klucz konta
   */
  generateKey: () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  }
};

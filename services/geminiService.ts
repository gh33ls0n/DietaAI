
import { GoogleGenAI, Type } from "@google/genai";
import { UserProfile, WeeklyPlan } from "../types";
import { APP_NAME } from "../constants";

export const generateMealPlan = async (profile: UserProfile, targetCalories: number): Promise<WeeklyPlan> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Jesteś profesjonalnym dietetykiem tworzącym plany dla aplikacji ${APP_NAME}. Stwórz jadłospis na 7 dni dla osoby o zapotrzebowaniu ${targetCalories} kcal.
  
  OSTRZEŻENIE: Użytkownik nienawidzi soczewicy (LENTILS) - ABSOLUTNY ZAKAZ UŻYWANIA.
  
  ZASADY KONSTRUKCJI POSIŁKÓW:
  1. Śniadanie, II Śniadanie, Kolacja: Te posiłki MUSZĄ BYĆ KANAPKAMI (różne pieczywo; różne dodatki).
  2. WYJĄTEK NIEDZIELA: Dzień 7, śniadanie to obowiązkowo Jajecznica lub Jajka na miękko.
  3. Obiad: Jedyny ciepły, większy posiłek. Klasyki polskie w wersji fit.
  4. Podwieczorek (snack2): Lekka przekąska.
  
  ZASADY NAZEWNICTWA (KRYTYCZNE):
  - Pole "item" (produkt): Zawsze mianownik liczby pojedynczej (np. "Chleb żytni", "Serek kanapkowy", "Szynka z kurczaka", "Jajko kurze", "Papryka czerwona").
  - Pole "amount" (ilość): Zawsze naturalna, odmieniona forma z jednostką (np. "2 kromki", "3 plastry", "1/2 sztuki", "150g").
  
  DLA PIECZYWA: Zawsze używaj jednostek: "kromka", "bułka", "sztuka".
  DLA MIĘSA/RYB: Używaj "g".
  
  Odpowiedz wyłącznie JSON zgodnym ze schematem.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          days: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                day: { type: Type.INTEGER },
                meals: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      name: { type: Type.STRING },
                      calories: { type: Type.INTEGER },
                      protein: { type: Type.INTEGER },
                      fats: { type: Type.INTEGER },
                      carbs: { type: Type.INTEGER },
                      type: { type: Type.STRING, enum: ['breakfast', 'snack1', 'lunch', 'snack2', 'dinner'] },
                      recipe: { type: Type.STRING },
                      ingredients: {
                        type: Type.ARRAY,
                        items: {
                          type: Type.OBJECT,
                          properties: {
                            item: { type: Type.STRING },
                            amount: { type: Type.STRING }
                          },
                          required: ["item", "amount"]
                        }
                      }
                    },
                    required: ["name", "calories", "protein", "fats", "carbs", "type", "ingredients", "recipe"]
                  }
                }
              },
              required: ["day", "meals"]
            }
          }
        },
        required: ["days"]
      }
    }
  });

  try {
    const data = JSON.parse(response.text);
    return data as WeeklyPlan;
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    throw new Error("Nie udało się wygenerować planu. Spróbuj jeszcze raz.");
  }
};

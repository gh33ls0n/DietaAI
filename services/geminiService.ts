
import { GoogleGenAI, Type } from "@google/genai";
import { UserProfile, WeeklyPlan } from "../types";

export const generateMealPlan = async (profile: UserProfile, targetCalories: number): Promise<WeeklyPlan> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Jesteś profesjonalnym dietetykiem tworzącym plany w stylu Vitalia.pl. Stwórz jadłospis na 7 dni dla osoby o zapotrzebowaniu ${targetCalories} kcal.
  
  OSTRZEŻENIE: Użytkownik nienawidzi soczewicy (LENTILS) - ABSOLUTNY ZAKAZ UŻYWANIA.
  
  ZASADY KONSTRUKCJI POSIŁKÓW:
  1. Śniadanie, II Śniadanie, Kolacja: Te posiłki MUSZĄ BYĆ KANAPKAMI (różne pieczywo: żytnie, grahams, bułki pełnoziarniste; różne dodatki: wędliny, sery, pasty jajeczne, ryby, twarożki, warzywa).
  2. WYJĄTEK NIEDZIELA: Dzień 7, śniadanie to obowiązkowo Jajecznica lub Jajka na miękko (z pieczywem).
  3. Obiad: Jedyny ciepły, większy posiłek. Klasyki polskie w wersji fit (schab pieczony, drób, makaron, ryż z mięsem).
  4. Podwieczorek (snack2): Lekka przekąska (jogurt, owoc, serek wiejski na słodko, orzechy).
  
  JEDNOSTKI I MIARY (BARDZO WAŻNE):
  - DLA PIECZYWA: Nigdy nie używaj gramów. Zawsze używaj jednostek domowych: "kromka", "bułka", "sztuka".
  - DLA MIĘSA I RYB: Możesz używać gramów.
  
  DLA KAŻDEGO POSIŁKU WYLICZ MAKROSKŁADNIKI (Białko, Tłuszcze, Węglowodany).
  
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
                      protein: { type: Type.INTEGER, description: "Białko w gramach" },
                      fats: { type: Type.INTEGER, description: "Tłuszcze w gramach" },
                      carbs: { type: Type.INTEGER, description: "Węglowodany w gramach" },
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

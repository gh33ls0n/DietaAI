
import { GoogleGenAI, Type } from "@google/genai";
import { UserProfile, WeeklyPlan } from "../types";
import { APP_NAME } from "../constants";

export const generateMealPlan = async (profile: UserProfile, targetCalories: number): Promise<WeeklyPlan> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Jesteś profesjonalnym dietetykiem aplikacji ${APP_NAME}. Stwórz jadłospis na 7 dni (${targetCalories} kcal).
  
  ZASADY KONSTRUKCJI:
  1. Śniadanie, II Śniadanie, Kolacja: KANAPKI (różne pieczywo i dodatki).
  2. NIEDZIELA (Dzień 7) Śniadanie: Jajecznica lub Jajka na miękko.
  3. Obiad: Jedyny ciepły posiłek. Klasyki polskie fit.
  
  ZASADY NAZEWNICTWA (KRYTYCZNE DLA LISTY ZAKUPÓW):
  - Pole "item" (Produkt): TYLKO MIANOWNIK LICZBY POJEDYNCZEJ. Nigdy nie odmieniaj!
    * BŁĄD: "Pomidora", "Szynki z kurczaka", "Chleba żytniego", "Jajek kurzych".
    * POPRAWNIE: "Pomidor", "Szynka z kurczaka", "Chleb żytni", "Jajko kurze".
  
  - Pole "amount" (Ilość): NATURALNA ODMIANA pasująca do liczby.
    * BŁĄD: "2 kromka", "160 g", "3 plaster".
    * POPRAWNIE: "2 kromki", "160g", "3 plastry", "1/2 sztuki", "2 sztuki".
  
  OSTRZEŻENIE: ABSOLUTNY ZAKAZ używania soczewicy (LENTILS).
  
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


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
  - Pole "item" (Produkt): TYLKO MIANOWNIK LICZBY POJEDYNCZEJ (nazwa jak z etykiety w sklepie).
  - Pole "amount" (Ilość): POPRAWNA ODMIANA gramatyczna pasująca do liczby.
  
  TABELA POPRAWNOŚCI:
  | BŁĄD (nie używaj w 'item') | POPRAWNIE ('item')      | POPRAWNIE ('amount') |
  |----------------------------|-------------------------|----------------------|
  | Chleba żytniego            | Chleb żytni             | 2 kromki             |
  | Szynki z kurczaka          | Szynka z kurczaka       | 3 plastry            |
  | Pomidora                   | Pomidor                 | 160g                 |
  | Jajek kurzych              | Jajko kurze             | 2 sztuki             |
  | Ryżu basmati               | Ryż basmati             | 50g                  |
  | Oliwy z oliwek             | Oliwa z oliwek          | 10g                  |
  | Mięsa z piersi kurczaka    | Pierś kurczaka          | 150g                 |
  | Sosu sojowego              | Sos sojowy              | 20g                  |
  
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

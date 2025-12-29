
import { Meal, Ingredient } from "../types";
import { PRODUCT_DATABASE } from "./productDatabase";

export const parseRecipesJson = (jsonData: any[]): Meal[] => {
  return jsonData.map(recipe => {
    const title = recipe.title.toLowerCase();
    
    // 1. Automatyczna kategoryzacja
    let type: Meal['type'] = 'lunch';
    if (title.includes('kanapka') || title.includes('tost') || title.includes('jajecz') || title.includes('omlet') || title.includes('pasta') || title.includes('twarożek')) {
      type = 'breakfast';
    } else if (title.includes('koktajl') || title.includes('smoothie') || title.includes('shake') || title.includes('jogurt') || title.includes('owoc') || title.includes('skyr') || title.includes('deser')) {
      type = 'snack2';
    } else if (title.includes('zupa') || title.includes('krem') || title.includes('obiad') || title.includes('makaron') || title.includes('gulasz') || title.includes('risotto')) {
      type = 'lunch';
    }

    // 2. Przetwarzanie składników
    const ingredients: Ingredient[] = recipe.ingredients.map((ingStr: string) => {
      const match = ingStr.match(/(\d+(?:[.,]\d+)?)\s*(g|ml|szt|łyż|kromka|ząbek|opakowanie)/i);
      const amount = match ? match[0] : "1 szt";
      const item = ingStr.replace(/(\d+(?:[.,]\d+)?)\s*(g|ml|szt|łyż|kromka|ząbek|opakowanie)/i, '').replace(':', '').trim();
      return { item: item || "Składnik", amount };
    }).filter((i: any) => i.item.length > 2 && !i.item.toLowerCase().includes('składniki'));

    // 3. Heurystyczne wyliczanie kalorii (uproszczone)
    // Jeśli nie znajdziemy produktu w bazie, dajemy średnie wartości dla typu posiłku
    let calories = type === 'lunch' ? 550 : type === 'breakfast' ? 350 : 200;
    let protein = type === 'lunch' ? 35 : 20;
    let fats = type === 'lunch' ? 15 : 10;
    let carbs = type === 'lunch' ? 60 : 40;

    // Próba dokładniejszego wyliczenia na podstawie bazy produktów
    let calculatedCal = 0;
    ingredients.forEach(ing => {
      const weightMatch = ing.amount.match(/(\d+)/);
      const weight = weightMatch ? parseInt(weightMatch[1]) : 50;
      const product = PRODUCT_DATABASE.find(p => ing.item.toLowerCase().includes(p.name.toLowerCase()));
      if (product) {
        calculatedCal += (product.calories * weight) / 100;
      }
    });

    if (calculatedCal > 100) calories = Math.round(calculatedCal);

    return {
      name: recipe.title,
      calories,
      protein,
      fats,
      carbs,
      type,
      ingredients,
      recipe: recipe.steps.join('\n')
    };
  });
};


import { Product } from "../types";

export const PRODUCT_DATABASE: Product[] = [
  // WARZYWA I OWOCE (DO OBIADÓW)
  { name: "Cukinia", calories: 17, protein: 1, fats: 0, carbs: 3, unit: 'g' },
  { name: "Bakłażan", calories: 25, protein: 1, fats: 0, carbs: 6, unit: 'g' },
  { name: "Pomidor", calories: 18, protein: 1, fats: 0, carbs: 4, unit: 'g' },
  { name: "Papryka czerwona", calories: 31, protein: 1, fats: 0, carbs: 6, unit: 'g' },
  { name: "Papryka żółta", calories: 27, protein: 1, fats: 0, carbs: 5, unit: 'g' },
  { name: "Papryka zielona", calories: 20, protein: 1, fats: 0, carbs: 4, unit: 'g' },
  { name: "Ziemniaki", calories: 77, protein: 2, fats: 0, carbs: 17, unit: 'g' },
  { name: "Bataty", calories: 86, protein: 2, fats: 0, carbs: 20, unit: 'g' },
  { name: "Brokuły", calories: 34, protein: 3, fats: 0, carbs: 7, unit: 'g' },
  { name: "Kalafior", calories: 25, protein: 2, fats: 0, carbs: 5, unit: 'g' },
  { name: "Marchew", calories: 41, protein: 1, fats: 0, carbs: 10, unit: 'g' },
  { name: "Pietruszka (korzeń)", calories: 36, protein: 3, fats: 1, carbs: 6, unit: 'g' },
  { name: "Seler (korzeń)", calories: 42, protein: 1, fats: 0, carbs: 9, unit: 'g' },
  { name: "Cebula czerwona", calories: 40, protein: 1, fats: 0, carbs: 9, unit: 'g' },
  { name: "Czosnek", calories: 149, protein: 6, fats: 0, carbs: 33, unit: 'g' },
  { name: "Fasolka szparagowa", calories: 31, protein: 2, fats: 0, carbs: 7, unit: 'g' },
  { name: "Szpinak świeży", calories: 23, protein: 3, fats: 0, carbs: 4, unit: 'g' },
  { name: "Jarmuż", calories: 49, protein: 4, fats: 1, carbs: 9, unit: 'g' },
  { name: "Pieczarki", calories: 22, protein: 3, fats: 0, carbs: 3, unit: 'g' },
  { name: "Pomidory suszone", calories: 213, protein: 14, fats: 14, carbs: 12, unit: 'g' },
  { name: "Ananas", calories: 50, protein: 1, fats: 0, carbs: 13, unit: 'g' },
  { name: "Mango", calories: 60, protein: 1, fats: 0, carbs: 15, unit: 'g' },

  // MIĘSO (Baza Respo)
  { name: "Pierś z kurczaka", calories: 110, protein: 21, fats: 1, carbs: 0, unit: 'g' },
  { name: "Mięso z uda kurczaka (bez skóry)", calories: 120, protein: 19, fats: 5, carbs: 0, unit: 'g' },
  { name: "Pierś z indyka", calories: 105, protein: 22, fats: 1, carbs: 0, unit: 'g' },
  { name: "Mięso mielone z indyka", calories: 120, protein: 20, fats: 4, carbs: 0, unit: 'g' },
  { name: "Wołowina chuda", calories: 150, protein: 20, fats: 7, carbs: 0, unit: 'g' },
  { name: "Polędwiczka wieprzowa", calories: 110, protein: 21, fats: 2, carbs: 0, unit: 'g' },
  { name: "Schab bez kości", calories: 120, protein: 22, fats: 3, carbs: 0, unit: 'g' },
  { name: "Boczek wędzony (chudy)", calories: 300, protein: 15, fats: 25, carbs: 1, unit: 'g' },
  { name: "Kaczka (pierś bez skóry)", calories: 140, protein: 20, fats: 6, carbs: 0, unit: 'g' },

  // ZBOŻOWE I KASZE
  { name: "Ryż basmati", calories: 350, protein: 8, fats: 1, carbs: 78, unit: 'g' },
  { name: "Ryż brązowy", calories: 350, protein: 7, fats: 3, carbs: 75, unit: 'g' },
  { name: "Kasza gryczana", calories: 340, protein: 12, fats: 3, carbs: 70, unit: 'g' },
  { name: "Kasza bulgur", calories: 340, protein: 12, fats: 2, carbs: 76, unit: 'g' },
  { name: "Kasza jaglana", calories: 350, protein: 11, fats: 3, carbs: 70, unit: 'g' },
  { name: "Kasza pęczak", calories: 350, protein: 10, fats: 2, carbs: 75, unit: 'g' },
  { name: "Makaron pełnoziarnisty", calories: 350, protein: 14, fats: 3, carbs: 65, unit: 'g' },
  { name: "Makaron spaghetti (durum)", calories: 360, protein: 12, fats: 1, carbs: 75, unit: 'g' },
  { name: "Makaron ryżowy", calories: 360, protein: 7, fats: 1, carbs: 80, unit: 'g' },
  { name: "Kuskus", calories: 350, protein: 12, fats: 1, carbs: 72, unit: 'g' },
  { name: "Tortilla pełnoziarnista", calories: 290, protein: 9, fats: 7, carbs: 45, unit: 'g' },

  // INNE / SOSY
  { name: "Mleczko kokosowe Light", calories: 75, protein: 1, fats: 7, carbs: 2, unit: 'ml' },
  { name: "Sos sojowy", calories: 60, protein: 10, fats: 0, carbs: 5, unit: 'ml' },
  { name: "Masło orzechowe", calories: 588, protein: 25, fats: 50, carbs: 13, unit: 'g' },
  { name: "Oliwa z oliwek", calories: 884, protein: 0, fats: 100, carbs: 0, unit: 'ml' },
  { name: "Passata pomidorowa", calories: 30, protein: 2, fats: 0, carbs: 5, unit: 'ml' },
  { name: "Koncentrat pomidorowy", calories: 95, protein: 5, fats: 1, carbs: 18, unit: 'g' },
  { name: "Pesto zielone", calories: 450, protein: 5, fats: 45, carbs: 7, unit: 'g' },
  { name: "Pesto czerwone", calories: 380, protein: 4, fats: 35, carbs: 12, unit: 'g' },
  { name: "Hummus", calories: 166, protein: 8, fats: 10, carbs: 14, unit: 'g' },
  { name: "Sezam", calories: 573, protein: 18, fats: 50, carbs: 23, unit: 'g' },
  { name: "Miód", calories: 304, protein: 0, fats: 0, carbs: 82, unit: 'g' },
  { name: "Sok z cytryny", calories: 22, protein: 0, fats: 0, carbs: 7, unit: 'ml' }
];

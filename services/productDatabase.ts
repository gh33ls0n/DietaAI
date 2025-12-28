
import { Product } from "../types";

export const PRODUCT_DATABASE: Product[] = [
  // WARZYWA I GRZYBY
  { name: "Cukinia", calories: 17, protein: 1, fats: 0, carbs: 3, unit: 'g' },
  { name: "Bakłażan", calories: 25, protein: 1, fats: 0, carbs: 6, unit: 'g' },
  { name: "Pomidor", calories: 18, protein: 1, fats: 0, carbs: 4, unit: 'g' },
  { name: "Ogórek", calories: 15, protein: 1, fats: 0, carbs: 3, unit: 'g' },
  { name: "Ogórek kiszony", calories: 11, protein: 1, fats: 0, carbs: 2, unit: 'g' },
  { name: "Papryka czerwona", calories: 31, protein: 1, fats: 0, carbs: 6, unit: 'g' },
  { name: "Papryka żółta", calories: 27, protein: 1, fats: 0, carbs: 5, unit: 'g' },
  { name: "Ziemniaki", calories: 77, protein: 2, fats: 0, carbs: 17, unit: 'g' },
  { name: "Bataty", calories: 86, protein: 2, fats: 0, carbs: 20, unit: 'g' },
  { name: "Brokuły", calories: 34, protein: 3, fats: 0, carbs: 7, unit: 'g' },
  { name: "Kalafior", calories: 25, protein: 2, fats: 0, carbs: 5, unit: 'g' },
  { name: "Marchew", calories: 41, protein: 1, fats: 0, carbs: 10, unit: 'g' },
  { name: "Fasolka szparagowa", calories: 31, protein: 2, fats: 0, carbs: 7, unit: 'g' },
  { name: "Szpinak świeży", calories: 23, protein: 3, fats: 0, carbs: 4, unit: 'g' },
  { name: "Pieczarki", calories: 22, protein: 3, fats: 0, carbs: 3, unit: 'g' },
  { name: "Cebula biała", calories: 40, protein: 1, fats: 0, carbs: 9, unit: 'g' },
  { name: "Czosnek", calories: 149, protein: 6, fats: 0, carbs: 33, unit: 'g' },
  { name: "Pędy bambusa", calories: 27, protein: 3, fats: 0, carbs: 5, unit: 'g' },
  { name: "Kukurydza konserwowa", calories: 86, protein: 3, fats: 1, carbs: 19, unit: 'g' },
  { name: "Groszek zielony", calories: 81, protein: 5, fats: 0, carbs: 14, unit: 'g' },

  // MIĘSO
  { name: "Pierś z kurczaka", calories: 110, protein: 21, fats: 1, carbs: 0, unit: 'g' },
  { name: "Mięso z uda kurczaka (bez skóry)", calories: 120, protein: 19, fats: 5, carbs: 0, unit: 'g' },
  { name: "Pierś z indyka", calories: 105, protein: 22, fats: 1, carbs: 0, unit: 'g' },
  { name: "Wołowina chuda (polędwica/ligawa)", calories: 140, protein: 22, fats: 5, carbs: 0, unit: 'g' },
  { name: "Wołowina mielona chuda", calories: 160, protein: 19, fats: 9, carbs: 0, unit: 'g' },
  { name: "Mięso mielone z indyka", calories: 120, protein: 20, fats: 4, carbs: 0, unit: 'g' },
  { name: "Schab bez kości", calories: 120, protein: 22, fats: 3, carbs: 0, unit: 'g' },
  { name: "Polędwiczka wieprzowa", calories: 110, protein: 21, fats: 2, carbs: 0, unit: 'g' },

  // ZBOŻOWE I DODATKI SKROBIOWE
  { name: "Ryż brązowy (suchy)", calories: 350, protein: 7, fats: 3, carbs: 75, unit: 'g' },
  { name: "Ryż basmati (suchy)", calories: 350, protein: 8, fats: 1, carbs: 78, unit: 'g' },
  { name: "Kasza gryczana (sucha)", calories: 340, protein: 12, fats: 3, carbs: 70, unit: 'g' },
  { name: "Kasza pęczak (sucha)", calories: 350, protein: 10, fats: 2, carbs: 75, unit: 'g' },
  { name: "Kasza bulgur (sucha)", calories: 340, protein: 12, fats: 2, carbs: 76, unit: 'g' },
  { name: "Makaron pełnoziarnisty (suchy)", calories: 350, protein: 14, fats: 3, carbs: 65, unit: 'g' },
  { name: "Makaron ryżowy (suchy)", calories: 360, protein: 7, fats: 1, carbs: 80, unit: 'g' },
  { name: "Tortilla pełnoziarnista", calories: 290, protein: 9, fats: 7, carbs: 45, unit: 'g' },
  { name: "Bułka grahamka", calories: 250, protein: 9, fats: 3, carbs: 48, unit: 'g' },

  // SOSY I TŁUSZCZE
  { name: "Oliwa z oliwek", calories: 884, protein: 0, fats: 100, carbs: 0, unit: 'ml' },
  { name: "Mleczko kokosowe Light", calories: 75, protein: 1, fats: 7, carbs: 2, unit: 'ml' },
  { name: "Sos sojowy", calories: 60, protein: 10, fats: 0, carbs: 5, unit: 'ml' },
  { name: "Passata pomidorowa", calories: 30, protein: 2, fats: 0, carbs: 5, unit: 'ml' },
  { name: "Masło orzechowe", calories: 588, protein: 25, fats: 50, carbs: 13, unit: 'g' },
  { name: "Jogurt naturalny", calories: 61, protein: 4, fats: 3, carbs: 5, unit: 'g' },
  { name: "Musztarda", calories: 100, protein: 4, fats: 4, carbs: 8, unit: 'g' },
  { name: "Miód", calories: 304, protein: 0, fats: 0, carbs: 82, unit: 'g' },
  { name: "Ser Mozzarella Light", calories: 160, protein: 19, fats: 9, carbs: 1, unit: 'g' }
];

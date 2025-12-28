
import { Product } from "../types";

export const PRODUCT_DATABASE: Product[] = [
  // WARZYWA (Niskokaloryczne i strączkowe)
  { name: "Cukinia", calories: 17, protein: 1, fats: 0, carbs: 3, unit: 'g' },
  { name: "Pomidor", calories: 18, protein: 1, fats: 0, carbs: 4, unit: 'g' },
  { name: "Ogórek", calories: 15, protein: 1, fats: 0, carbs: 3, unit: 'g' },
  { name: "Ogórek kiszony", calories: 11, protein: 1, fats: 0, carbs: 2, unit: 'g' },
  { name: "Papryka czerwona", calories: 31, protein: 1, fats: 0, carbs: 6, unit: 'g' },
  { name: "Papryka żółta", calories: 27, protein: 1, fats: 0, carbs: 5, unit: 'g' },
  { name: "Papryka zielona", calories: 20, protein: 1, fats: 0, carbs: 3, unit: 'g' },
  { name: "Ziemniaki", calories: 77, protein: 2, fats: 0, carbs: 17, unit: 'g' },
  { name: "Bataty", calories: 86, protein: 2, fats: 0, carbs: 20, unit: 'g' },
  { name: "Brokuły", calories: 34, protein: 3, fats: 0, carbs: 7, unit: 'g' },
  { name: "Kalafior", calories: 25, protein: 2, fats: 0, carbs: 5, unit: 'g' },
  { name: "Cebula", calories: 40, protein: 1, fats: 0, carbs: 9, unit: 'g' },
  { name: "Czosnek", calories: 149, protein: 6, fats: 1, carbs: 33, unit: 'g' },
  { name: "Marchew", calories: 41, protein: 1, fats: 0, carbs: 10, unit: 'g' },
  { name: "Rzodkiewka", calories: 16, protein: 1, fats: 0, carbs: 3, unit: 'g' },
  { name: "Sałata lodowa", calories: 14, protein: 1, fats: 0, carbs: 3, unit: 'g' },
  { name: "Sałata rzymska", calories: 17, protein: 1, fats: 0, carbs: 3, unit: 'g' },
  { name: "Szpinak świeży", calories: 23, protein: 3, fats: 0, carbs: 4, unit: 'g' },
  { name: "Rukola", calories: 25, protein: 3, fats: 1, carbs: 4, unit: 'g' },
  { name: "Fasolka szparagowa", calories: 31, protein: 2, fats: 0, carbs: 7, unit: 'g' },
  { name: "Kukurydza (konserwowa)", calories: 96, protein: 3, fats: 1, carbs: 21, unit: 'g' },
  { name: "Pieczarki", calories: 22, protein: 3, fats: 0, carbs: 3, unit: 'g' },
  { name: "Bakłażan", calories: 25, protein: 1, fats: 0, carbs: 6, unit: 'g' },

  // MIĘSO I RYBY
  { name: "Pierś z kurczaka", calories: 110, protein: 21, fats: 1, carbs: 0, unit: 'g' },
  { name: "Udo z kurczaka (bez skóry)", calories: 120, protein: 19, fats: 4, carbs: 0, unit: 'g' },
  { name: "Pierś z indyka", calories: 105, protein: 22, fats: 1, carbs: 0, unit: 'g' },
  { name: "Wołowina chuda (mielona)", calories: 150, protein: 20, fats: 7, carbs: 0, unit: 'g' },
  { name: "Schab bez kości", calories: 125, protein: 22, fats: 4, carbs: 0, unit: 'g' },
  { name: "Łosoś świeży", calories: 208, protein: 20, fats: 13, carbs: 0, unit: 'g' },
  { name: "Dorsz świeży", calories: 82, protein: 18, fats: 1, carbs: 0, unit: 'g' },
  { name: "Makrela wędzona", calories: 220, protein: 19, fats: 15, carbs: 0, unit: 'g' },
  { name: "Szynka drobiowa", calories: 95, protein: 18, fats: 2, carbs: 1, unit: 'g' },
  { name: "Tuńczyk w sosie własnym", calories: 116, protein: 26, fats: 1, carbs: 0, unit: 'g' },

  // NABIAŁ I JAJA
  { name: "Jajko (rozmiar L)", calories: 143, protein: 13, fats: 10, carbs: 1, unit: 'g' },
  { name: "Twaróg chudy", calories: 90, protein: 18, fats: 0, carbs: 3, unit: 'g' },
  { name: "Twaróg półtłusty", calories: 133, protein: 16, fats: 5, carbs: 4, unit: 'g' },
  { name: "Serek wiejski lekki", calories: 81, protein: 11, fats: 3, carbs: 2, unit: 'g' },
  { name: "Skyr naturalny", calories: 65, protein: 12, fats: 0, carbs: 4, unit: 'g' },
  { name: "Jogurt naturalny", calories: 61, protein: 4, fats: 3, carbs: 5, unit: 'g' },
  { name: "Jogurt grecki", calories: 115, protein: 9, fats: 5, carbs: 4, unit: 'g' },
  { name: "Mozzarella light", calories: 165, protein: 19, fats: 9, carbs: 1, unit: 'g' },
  { name: "Ser żółty Gouda", calories: 350, protein: 25, fats: 27, carbs: 0, unit: 'g' },
  { name: "Ser typu Feta", calories: 264, protein: 14, fats: 21, carbs: 4, unit: 'g' },
  { name: "Mleko 2%", calories: 50, protein: 3, fats: 2, carbs: 5, unit: 'ml' },
  { name: "Mleko owsiane", calories: 45, protein: 1, fats: 1, carbs: 7, unit: 'ml' },

  // PRODUKTY ZBOŻOWE
  { name: "Chleb żytni pełnoziarnisty", calories: 220, protein: 6, fats: 2, carbs: 45, unit: 'g' },
  { name: "Chleb graham", calories: 230, protein: 8, fats: 2, carbs: 46, unit: 'g' },
  { name: "Bułka grahamka", calories: 250, protein: 8, fats: 2, carbs: 50, unit: 'g' },
  { name: "Ryż basmati (suchy)", calories: 351, protein: 8, fats: 1, carbs: 77, unit: 'g' },
  { name: "Kasza gryczana (sucha)", calories: 343, protein: 13, fats: 3, carbs: 62, unit: 'g' },
  { name: "Kasza jaglana (sucha)", calories: 350, protein: 11, fats: 3, carbs: 68, unit: 'g' },
  { name: "Makaron pełnoziarnisty (suchy)", calories: 348, protein: 14, fats: 2, carbs: 66, unit: 'g' },
  { name: "Płatki owsiane", calories: 366, protein: 13, fats: 7, carbs: 59, unit: 'g' },
  { name: "Mąka pszenna pełnoziarnista", calories: 340, protein: 13, fats: 2, carbs: 62, unit: 'g' },
  { name: "Mąka orkiszowa", calories: 350, protein: 14, fats: 2, carbs: 65, unit: 'g' },

  // OWOCE
  { name: "Jabłko", calories: 52, protein: 0, fats: 0, carbs: 12, unit: 'g' },
  { name: "Banan", calories: 89, protein: 1, fats: 0, carbs: 21, unit: 'g' },
  { name: "Borówki", calories: 57, protein: 1, fats: 0, carbs: 12, unit: 'g' },
  { name: "Maliny", calories: 52, protein: 1, fats: 1, carbs: 5, unit: 'g' },
  { name: "Truskawki", calories: 32, protein: 1, fats: 0, carbs: 6, unit: 'g' },
  { name: "Awokado", calories: 160, protein: 2, fats: 15, carbs: 9, unit: 'g' },
  { name: "Gruszka", calories: 57, protein: 0, fats: 0, carbs: 12, unit: 'g' },
  { name: "Kiwi", calories: 61, protein: 1, fats: 1, carbs: 11, unit: 'g' },

  // TŁUSZCZE I DODATKI
  { name: "Oliwa z oliwek", calories: 884, protein: 0, fats: 100, carbs: 0, unit: 'ml' },
  { name: "Olej rzepakowy", calories: 884, protein: 0, fats: 100, carbs: 0, unit: 'ml' },
  { name: "Masło", calories: 717, protein: 1, fats: 81, carbs: 1, unit: 'g' },
  { name: "Masło orzechowe", calories: 588, protein: 25, fats: 50, carbs: 13, unit: 'g' },
  { name: "Hummus", calories: 166, protein: 8, fats: 10, carbs: 14, unit: 'g' },
  { name: "Orzechy włoskie", calories: 654, protein: 15, fats: 65, carbs: 7, unit: 'g' },
  { name: "Nasiona chia", calories: 486, protein: 17, fats: 31, carbs: 42, unit: 'g' },
  { name: "Pestki dyni", calories: 559, protein: 30, fats: 49, carbs: 11, unit: 'g' },
  { name: "Sos sojowy", calories: 53, protein: 8, fats: 0, carbs: 5, unit: 'ml' },
  { name: "Miód", calories: 304, protein: 0, fats: 0, carbs: 82, unit: 'g' }
];

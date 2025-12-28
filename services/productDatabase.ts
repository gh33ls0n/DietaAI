
import { Product } from "../types";

export const PRODUCT_DATABASE: Product[] = [
  // WARZYWA
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
  { name: "Rzodkiewka", calories: 16, protein: 1, fats: 0, carbs: 3, unit: 'g' },
  { name: "Szpinak świeży", calories: 23, protein: 3, fats: 0, carbs: 4, unit: 'g' },
  { name: "Jarmuż", calories: 49, protein: 4, fats: 1, carbs: 9, unit: 'g' },
  { name: "Cebula biała", calories: 40, protein: 1, fats: 0, carbs: 9, unit: 'g' },
  { name: "Czosnek", calories: 149, protein: 6, fats: 0, carbs: 33, unit: 'g' },
  { name: "Pomidory suszone", calories: 213, protein: 14, fats: 14, carbs: 12, unit: 'g' },
  { name: "Fasola biała (puszka)", calories: 139, protein: 10, fats: 1, carbs: 25, unit: 'g' },
  { name: "Kukurydza konserwowa", calories: 86, protein: 3, fats: 1, carbs: 19, unit: 'g' },
  { name: "Burak gotowany", calories: 43, protein: 2, fats: 0, carbs: 10, unit: 'g' },

  // MIĘSO I RYBY
  { name: "Pierś z kurczaka", calories: 110, protein: 21, fats: 1, carbs: 0, unit: 'g' },
  { name: "Pierś z indyka", calories: 105, protein: 22, fats: 1, carbs: 0, unit: 'g' },
  { name: "Wołowina chuda", calories: 150, protein: 20, fats: 7, carbs: 0, unit: 'g' },
  { name: "Schab bez kości", calories: 120, protein: 22, fats: 3, carbs: 0, unit: 'g' },
  { name: "Łosoś wędzony", calories: 160, protein: 22, fats: 8, carbs: 0, unit: 'g' },
  { name: "Pstrąg wędzony", calories: 153, protein: 24, fats: 6, carbs: 0, unit: 'g' },
  { name: "Makrela wędzona", calories: 205, protein: 19, fats: 15, carbs: 0, unit: 'g' },
  { name: "Tuńczyk (puszka)", calories: 116, protein: 26, fats: 1, carbs: 0, unit: 'g' },
  { name: "Szynka drobiowa", calories: 100, protein: 18, fats: 2, carbs: 1, unit: 'g' },

  // NABIAŁ
  { name: "Jajko (rozmiar L)", calories: 143, protein: 13, fats: 10, carbs: 1, unit: 'g' },
  { name: "Skyr naturalny", calories: 65, protein: 12, fats: 0, carbs: 4, unit: 'g' },
  { name: "Twaróg chudy", calories: 90, protein: 18, fats: 0, carbs: 3, unit: 'g' },
  { name: "Serek wiejski lekki", calories: 81, protein: 11, fats: 3, carbs: 2, unit: 'g' },
  { name: "Jogurt naturalny", calories: 61, protein: 4, fats: 3, carbs: 5, unit: 'g' },
  { name: "Ser żółty gouda", calories: 350, protein: 25, fats: 27, carbs: 1, unit: 'g' },
  { name: "Ser Mozzarella Light", calories: 160, protein: 19, fats: 9, carbs: 1, unit: 'g' },
  { name: "Ser Camembert Light", calories: 200, protein: 22, fats: 12, carbs: 1, unit: 'g' },
  { name: "Ser Ricotta", calories: 174, protein: 11, fats: 13, carbs: 3, unit: 'g' },
  { name: "Mleko 2%", calories: 50, protein: 3, fats: 2, carbs: 5, unit: 'ml' },
  { name: "Napój owsiany", calories: 45, protein: 1, fats: 1, carbs: 8, unit: 'ml' },
  { name: "Napój migdałowy", calories: 25, protein: 1, fats: 2, carbs: 1, unit: 'ml' },

  // ZBOŻOWE
  { name: "Chleb żytni pełnoziarnisty", calories: 220, protein: 6, fats: 2, carbs: 45, unit: 'g' },
  { name: "Chleb graham", calories: 230, protein: 8, fats: 2, carbs: 46, unit: 'g' },
  { name: "Płatki owsiane", calories: 366, protein: 13, fats: 7, carbs: 59, unit: 'g' },
  { name: "Mąka pełnoziarnista", calories: 340, protein: 12, fats: 2, carbs: 68, unit: 'g' },

  // OWOCE I ORZECHY
  { name: "Jabłko", calories: 52, protein: 0, fats: 0, carbs: 12, unit: 'g' },
  { name: "Banan", calories: 89, protein: 1, fats: 0, carbs: 21, unit: 'g' },
  { name: "Borówki", calories: 57, protein: 1, fats: 0, carbs: 12, unit: 'g' },
  { name: "Truskawki", calories: 33, protein: 1, fats: 0, carbs: 8, unit: 'g' },
  { name: "Maliny", calories: 52, protein: 1, fats: 0, carbs: 12, unit: 'g' },
  { name: "Mango", calories: 60, protein: 1, fats: 0, carbs: 15, unit: 'g' },
  { name: "Ananas", calories: 50, protein: 1, fats: 0, carbs: 13, unit: 'g' },
  { name: "Awokado", calories: 160, protein: 2, fats: 15, carbs: 9, unit: 'g' },
  { name: "Orzechy włoskie", calories: 654, protein: 15, fats: 65, carbs: 14, unit: 'g' },
  { name: "Masło orzechowe", calories: 588, protein: 25, fats: 50, carbs: 13, unit: 'g' },
  { name: "Nasiona Chia", calories: 486, protein: 17, fats: 31, carbs: 42, unit: 'g' },
  { name: "Daktyle suszone", calories: 282, protein: 2, fats: 0, carbs: 75, unit: 'g' },

  // INNE
  { name: "Oliwa z oliwek", calories: 884, protein: 0, fats: 100, carbs: 0, unit: 'ml' },
  { name: "Hummus", calories: 166, protein: 8, fats: 10, carbs: 14, unit: 'g' },
  { name: "Pesto zielone", calories: 450, protein: 5, fats: 45, carbs: 7, unit: 'g' },
  { name: "Kakao", calories: 228, protein: 20, fats: 14, carbs: 58, unit: 'g' },
  { name: "Miód", calories: 304, protein: 0, fats: 0, carbs: 82, unit: 'g' },
  { name: "Sok z cytryny", calories: 22, protein: 0, fats: 0, carbs: 7, unit: 'ml' },
  { name: "Konfitura z żurawiny", calories: 180, protein: 0, fats: 0, carbs: 45, unit: 'g' }
];

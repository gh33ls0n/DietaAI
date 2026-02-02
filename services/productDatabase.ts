
import { Product } from "../types";

export const PRODUCT_DATABASE: Product[] = [
  // WARZYWA (VEGETABLE)
  { name: "Papryka czerwona", calories: 31, protein: 1, fats: 0, carbs: 6, unit: 'g', category: 'VEGETABLE' },
  { name: "Papryka żółta", calories: 27, protein: 1, fats: 0, carbs: 5, unit: 'g', category: 'VEGETABLE' },
  { name: "Papryka zielona", calories: 20, protein: 1, fats: 0, carbs: 4, unit: 'g', category: 'VEGETABLE' },
  { name: "Papryka", calories: 28, protein: 1, fats: 0, carbs: 6, unit: 'g', category: 'VEGETABLE' },
  { name: "Cukinia", calories: 17, protein: 1, fats: 0, carbs: 3, unit: 'g', category: 'VEGETABLE' },
  { name: "Bakłażan", calories: 25, protein: 1, fats: 0, carbs: 6, unit: 'g', category: 'VEGETABLE' },
  { name: "Pomidor", calories: 18, protein: 1, fats: 0, carbs: 4, unit: 'g', category: 'VEGETABLE' },
  { name: "Pomidorki koktajlowe", calories: 20, protein: 1, fats: 0, carbs: 4, unit: 'g', category: 'VEGETABLE' },
  { name: "Brokuł", calories: 34, protein: 3, fats: 0, carbs: 7, unit: 'g', category: 'VEGETABLE' },
  { name: "Marchew", calories: 41, protein: 1, fats: 0, carbs: 10, unit: 'g', category: 'VEGETABLE' },
  { name: "Ogórek", calories: 15, protein: 1, fats: 0, carbs: 3, unit: 'g', category: 'VEGETABLE' },
  { name: "Rzodkiewka", calories: 16, protein: 1, fats: 0, carbs: 4, unit: 'g', category: 'VEGETABLE' },
  { name: "Szpinak", calories: 23, protein: 3, fats: 0, carbs: 4, unit: 'g', category: 'VEGETABLE' },
  { name: "Cebula", calories: 40, protein: 1, fats: 0, carbs: 9, unit: 'g', category: 'VEGETABLE' },

  // OWOCE (FRUIT)
  { name: "Banan", calories: 89, protein: 1, fats: 0, carbs: 23, unit: 'g', category: 'FRUIT' },
  { name: "Truskawki", calories: 33, protein: 1, fats: 0, carbs: 8, unit: 'g', category: 'FRUIT' },
  { name: "Borówki", calories: 57, protein: 1, fats: 0, carbs: 14, unit: 'g', category: 'FRUIT' },
  { name: "Jabłko", calories: 52, protein: 0, fats: 0, carbs: 14, unit: 'g', category: 'FRUIT' },
  { name: "Mango", calories: 60, protein: 1, fats: 0, carbs: 15, unit: 'g', category: 'FRUIT' },

  // BIAŁKO (PROTEIN)
  { name: "Pierś kurczaka", calories: 110, protein: 21, fats: 1, carbs: 0, unit: 'g', category: 'PROTEIN' },
  { name: "Pierś indyka", calories: 105, protein: 22, fats: 1, carbs: 0, unit: 'g', category: 'PROTEIN' },
  { name: "Wołowina", calories: 140, protein: 22, fats: 5, carbs: 0, unit: 'g', category: 'PROTEIN' },
  { name: "Schab", calories: 120, protein: 22, fats: 3, carbs: 0, unit: 'g', category: 'PROTEIN' },
  { name: "Łosoś", calories: 208, protein: 20, fats: 13, carbs: 0, unit: 'g', category: 'PROTEIN' },
  { name: "Tofu", calories: 76, protein: 8, fats: 5, carbs: 2, unit: 'g', category: 'PROTEIN' },
  { name: "Jajko", calories: 143, protein: 13, fats: 10, carbs: 1, unit: 'g', category: 'PROTEIN' },

  // WĘGLOWODANY (CARB)
  { name: "Ziemniaki", calories: 77, protein: 2, fats: 0, carbs: 17, unit: 'g', category: 'CARB' },
  { name: "Ryż basmati", calories: 350, protein: 8, fats: 1, carbs: 78, unit: 'g', category: 'CARB' },
  { name: "Kasza gryczana", calories: 340, protein: 12, fats: 3, carbs: 70, unit: 'g', category: 'CARB' },
  { name: "Makaron", calories: 350, protein: 12, fats: 1, carbs: 72, unit: 'g', category: 'CARB' },
  { name: "Chleb żytni", calories: 250, protein: 6, fats: 2, carbs: 48, unit: 'g', category: 'CARB' },

  // NABIAŁ (DAIRY)
  { name: "Jogurt naturalny", calories: 61, protein: 4, fats: 3, carbs: 5, unit: 'g', category: 'DAIRY' },
  { name: "Skyr naturalny", calories: 65, protein: 12, fats: 0, carbs: 4, unit: 'g', category: 'DAIRY' },
  { name: "Twaróg chudy", calories: 90, protein: 20, fats: 0, carbs: 4, unit: 'g', category: 'DAIRY' },
  { name: "Mleko 1.5%", calories: 45, protein: 3, fats: 2, carbs: 5, unit: 'ml', category: 'DAIRY' },

  // TŁUSZCZE (FAT)
  { name: "Oliwa z oliwek", calories: 884, protein: 0, fats: 100, carbs: 0, unit: 'ml', category: 'FAT' },
  { name: "Masło orzechowe", calories: 590, protein: 25, fats: 50, carbs: 13, unit: 'g', category: 'FAT' },
  { name: "Awokado", calories: 160, protein: 2, fats: 15, carbs: 9, unit: 'g', category: 'FAT' }
];

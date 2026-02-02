
import { Product } from "../types";

export const PRODUCT_DATABASE: Product[] = [
  // WARZYWA (VEGETABLE)
  { name: "Papryka czerwona", calories: 31, protein: 1, fats: 0, carbs: 6, unit: 'g', category: 'VEGETABLE' },
  { name: "Papryka żółta", calories: 27, protein: 1, fats: 0, carbs: 5, unit: 'g', category: 'VEGETABLE' },
  { name: "Papryka zielona", calories: 20, protein: 1, fats: 0, carbs: 4, unit: 'g', category: 'VEGETABLE' },
  { name: "Papryka", calories: 28, protein: 1, fats: 0, carbs: 6, unit: 'g', category: 'VEGETABLE' },
  { name: "Cukinia", calories: 17, protein: 1, fats: 0, carbs: 3, unit: 'g', category: 'VEGETABLE' },
  { name: "Pomidor", calories: 18, protein: 1, fats: 0, carbs: 4, unit: 'g', category: 'VEGETABLE' },
  { name: "Ogórek", calories: 15, protein: 1, fats: 0, carbs: 3, unit: 'g', category: 'VEGETABLE' },
  { name: "Rzodkiewka", calories: 16, protein: 1, fats: 0, carbs: 4, unit: 'g', category: 'VEGETABLE' },
  { name: "Cebula", calories: 40, protein: 1, fats: 0, carbs: 9, unit: 'g', category: 'VEGETABLE' },

  // BIAŁKO (PROTEIN)
  { name: "Jajko kurze", calories: 143, protein: 13, fats: 10, carbs: 1, unit: 'g', category: 'PROTEIN' },
  { name: "Szynka z kurczaka", calories: 100, protein: 18, fats: 2, carbs: 1, unit: 'g', category: 'PROTEIN' },
  { name: "Szynka z indyka", calories: 95, protein: 19, fats: 1, carbs: 1, unit: 'g', category: 'PROTEIN' },
  { name: "Pierś kurczaka", calories: 110, protein: 21, fats: 1, carbs: 0, unit: 'g', category: 'PROTEIN' },
  { name: "Wołowina", calories: 140, protein: 22, fats: 5, carbs: 0, unit: 'g', category: 'PROTEIN' },
  { name: "Łosoś", calories: 208, protein: 20, fats: 13, carbs: 0, unit: 'g', category: 'PROTEIN' },

  // NABIAŁ (DAIRY)
  { name: "Serek kanapkowy", calories: 160, protein: 6, fats: 14, carbs: 4, unit: 'g', category: 'DAIRY' },
  { name: "Serek wiejski lekki", calories: 80, protein: 11, fats: 3, carbs: 2, unit: 'g', category: 'DAIRY' },
  { name: "Twaróg chudy", calories: 90, protein: 20, fats: 0, carbs: 4, unit: 'g', category: 'DAIRY' },
  { name: "Jogurt naturalny", calories: 61, protein: 4, fats: 3, carbs: 5, unit: 'g', category: 'DAIRY' },

  // WĘGLOWODANY (CARB)
  { name: "Chleb żytni", calories: 250, protein: 6, fats: 2, carbs: 48, unit: 'g', category: 'CARB' },
  { name: "Chleb graham", calories: 240, protein: 8, fats: 2, carbs: 45, unit: 'g', category: 'CARB' },
  { name: "Grahamka", calories: 260, protein: 9, fats: 2, carbs: 50, unit: 'g', category: 'CARB' },
  { name: "Ziemniaki", calories: 77, protein: 2, fats: 0, carbs: 17, unit: 'g', category: 'CARB' },
  { name: "Ryż basmati", calories: 350, protein: 8, fats: 1, carbs: 78, unit: 'g', category: 'CARB' },

  // TŁUSZCZE (FAT)
  { name: "Oliwa z oliwek", calories: 884, protein: 0, fats: 100, carbs: 0, unit: 'ml', category: 'FAT' },
  { name: "Awokado", calories: 160, protein: 2, fats: 15, carbs: 9, unit: 'g', category: 'FAT' }
];

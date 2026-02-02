
export enum ActivityLevel {
  SEDENTARY = '1.2', // Brak ruchu
  LIGHT = '1.375',   // Lekka aktywność (1-2 razy w tyg)
  MODERATE = '1.55', // Średnia aktywność (3-4 razy w tyg)
  ACTIVE = '1.725',   // Duża aktywność (codziennie)
  VERY_ACTIVE = '1.9' // Bardzo duża (sportowiec/praca fizyczna)
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export type ProductCategory = 'PROTEIN' | 'CARB' | 'DAIRY' | 'FRUIT' | 'VEGETABLE' | 'FAT' | 'OTHER';

export interface UserProfile {
  age: number;
  weight: number;
  height: number;
  gender: Gender;
  activityLevel: ActivityLevel;
  goal: 'LOSE' | 'MAINTAIN' | 'GAIN';
  preferences: string;
}

export interface Ingredient {
  item: string;
  amount: string;
  calories?: number;
  protein?: number;
  fats?: number;
  carbs?: number;
}

export interface Product {
  name: string;
  calories: number; // per 100g
  protein: number;  // per 100g
  fats: number;     // per 100g
  carbs: number;    // per 100g
  unit: 'g' | 'ml' | 'szt';
  category: ProductCategory;
}

export interface Meal {
  name: string;
  calories: number;
  protein: number;
  fats: number;
  carbs: number;
  ingredients: Ingredient[];
  recipe: string;
  type: 'breakfast' | 'snack1' | 'lunch' | 'snack2' | 'dinner';
  multiplier?: number; // Skala porcji (np. 0.5, 1.0, 1.5)
}

export interface DayPlan {
  day: number;
  meals: Meal[];
}

export interface WeeklyPlan {
  days: DayPlan[];
}

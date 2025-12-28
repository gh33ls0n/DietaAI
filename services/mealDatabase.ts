
import { Meal } from "../types";
import { BREAKFAST_MEALS } from "./mealDbBreakfasts";
import { LUNCH_MEALS } from "./mealDbLunches";
import { SNACK_MEALS } from "./mealDbSnacks";

/**
 * Agregujemy wszystkie posiłki z oddzielnych plików bazy danych.
 * Dzięki temu edycja koktajli nie wpłynie na obiady.
 */
export const MEAL_DATABASE: Meal[] = [
  ...BREAKFAST_MEALS,
  ...LUNCH_MEALS,
  ...SNACK_MEALS
];

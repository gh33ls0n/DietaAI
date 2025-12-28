
import { Meal } from "../types";

export const LUNCH_MEALS: Meal[] = [
  {
    name: "Burger Wołowy Fit z pieczonymi batatami",
    calories: 580, protein: 38, fats: 18, carbs: 65,
    type: "lunch",
    ingredients: [
      { item: "Wołowina mielona chuda", amount: "150g" },
      { item: "Bułka grahamka", amount: "1 szt" },
      { item: "Bataty", amount: "150g" }
    ],
    recipe: "Mięso uformuj w burgera i grilluj. Bataty upiecz (200st, 25 min). Złóż burgera z warzywami."
  },
  {
    name: "Pizza Fit na cienkim cieście pełnoziarnistym",
    calories: 590, protein: 35, fats: 16, carbs: 75,
    type: "lunch",
    ingredients: [
      { item: "Mąka pełnoziarnista", amount: "80g" },
      { item: "Ser Mozzarella Light", amount: "60g" },
      { item: "Passata pomidorowa", amount: "50ml" }
    ],
    recipe: "Zrób spód z mąki i wody. Piecz z dodatkami 10 min w 220st."
  },
  {
    name: "Pulpety z indyka w sosie koperkowym (Ania Gotuje)",
    calories: 520, protein: 36, fats: 14, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Pierś z indyka", amount: "150g" },
      { item: "Ziemniaki", amount: "200g" },
      { item: "Koper świeży", amount: "1/2 pęczka" }
    ],
    recipe: "Uformuj pulpety, gotuj w wywarze. Dodaj koper i jogurt do sosu. Podawaj z ziemniakami."
  },
  {
    name: "Ryba po grecku w wersji lekkiej",
    calories: 440, protein: 32, fats: 10, carbs: 48,
    type: "lunch",
    ingredients: [
      { item: "Dorsz świeży", amount: "150g" },
      { item: "Marchew", amount: "100g" },
      { item: "Passata pomidorowa", amount: "100ml" }
    ],
    recipe: "Rybę upiecz. Warzywa zetrzyj, podduś z passatą. Przykryj rybę grubą warstwą warzyw."
  },
  {
    name: "Gołąbki bez zawijania z indykiem (Kwestia Smaku)",
    calories: 490, protein: 34, fats: 12, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z indyka", amount: "120g" },
      { item: "Kapusta pekińska", amount: "150g" },
      { item: "Ryż brązowy (suchy)", amount: "50g" }
    ],
    recipe: "Mięso wymieszaj z ryżem i posiekaną kapustą. Piecz w sosie pomidorowym."
  },
  {
    name: "Gulasz z indyka z kolorową papryką",
    calories: 510, protein: 35, fats: 14, carbs: 60,
    type: "lunch",
    ingredients: [
      { item: "Pierś z indyka", amount: "150g" },
      { item: "Papryka czerwona", amount: "100g" },
      { item: "Kasza gryczana (sucha)", amount: "60g" }
    ],
    recipe: "Indyka i paprykę duś do miękkości. Podawaj z kaszą gryczaną."
  },
  {
    name: "Schab pieczony z rozmarynem",
    calories: 490, protein: 35, fats: 15, carbs: 52,
    type: "lunch",
    ingredients: [
      { item: "Schab bez kości", amount: "130g" },
      { item: "Ziemniaki", amount: "150g" }
    ],
    recipe: "Schab i ziemniaki upiecz w naczyniu żaroodpornym z ziołami."
  },
  {
    name: "Mielone z indyka z purée i buraczkami",
    calories: 515, protein: 34, fats: 15, carbs: 56,
    type: "lunch",
    ingredients: [
      { item: "Pierś z indyka", amount: "120g" },
      { item: "Ziemniaki", amount: "200g" },
      { item: "Burak gotowany", amount: "100g" }
    ],
    recipe: "Mielone upiecz w piekarniku. Podawaj z ubitymi ziemniakami i tartymi burakami."
  }
];

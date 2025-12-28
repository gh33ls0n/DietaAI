
import { Meal } from "../types";

export const SNACK_MEALS: Meal[] = [
  // --- TWOJE WCZEŚNIEJSZE ---
  {
    name: "Skyr z borówkami i migdałami",
    calories: 230, protein: 22, fats: 6, carbs: 24,
    type: "snack2",
    ingredients: [
      { item: "Skyr naturalny", amount: "150g" },
      { item: "Borówki", amount: "50g" }
    ],
    recipe: "Wymieszaj wszystko w miseczce."
  },
  {
    name: "Budyń jaglany z malinami",
    calories: 240, protein: 8, fats: 5, carbs: 42,
    type: "snack2",
    ingredients: [
      { item: "Płatki owsiane", amount: "40g" },
      { item: "Jogurt naturalny", amount: "100g" },
      { item: "Maliny", amount: "50g" }
    ],
    recipe: "Namoczone płatki owsiane wymieszaj z jogurtem i owocami."
  },

  // --- NOWE KOKTAJLE RESPO ---
  {
    name: "Koktajl 'Energia' (Banan, masło orzechowe, jogurt)",
    calories: 320, protein: 12, fats: 12, carbs: 45,
    type: "snack2",
    ingredients: [
      { item: "Banan", amount: "1 szt" },
      { item: "Masło orzechowe", amount: "1 łyżka" },
      { item: "Jogurt naturalny", amount: "100g" }
    ],
    recipe: "Zblenduj wszystkie składniki na gładką masę."
  },
  {
    name: "Zielone Smoothie 'Detoks' (Szpinak, jabłko, cytryna)",
    calories: 180, protein: 4, fats: 2, carbs: 40,
    type: "snack2",
    ingredients: [
      { item: "Szpinak świeży", amount: "garść" },
      { item: "Jabłko", amount: "1 szt" },
      { item: "Sok z cytryny", amount: "1 łyżka" },
      { item: "Miód", amount: "1 łyżeczka" }
    ],
    recipe: "Zblenduj z odrobiną wody."
  },
  {
    name: "Koktajl 'Różowa Moc' (Truskawki, burak, jabłko)",
    calories: 210, protein: 5, fats: 2, carbs: 48,
    type: "snack2",
    ingredients: [
      { item: "Truskawki", amount: "100g" },
      { item: "Burak gotowany", amount: "50g" },
      { item: "Jabłko", amount: "1 szt" }
    ],
    recipe: "Zblenduj składniki z dodatkiem wody lub soku z cytryny."
  },
  {
    name: "Fit Snickers Shake (Banan, kakao, fistaszki)",
    calories: 340, protein: 10, fats: 14, carbs: 48,
    type: "snack2",
    ingredients: [
      { item: "Banan", amount: "1 szt" },
      { item: "Kakao", amount: "1 łyżka" },
      { item: "Masło orzechowe", amount: "1 łyżeczka" },
      { item: "Mleko 2%", amount: "150ml" }
    ],
    recipe: "Zblenduj na wysokich obrotach."
  },
  {
    name: "Koktajl Mango Lassi Fit",
    calories: 260, protein: 12, fats: 4, carbs: 45,
    type: "snack2",
    ingredients: [
      { item: "Mango", amount: "100g" },
      { item: "Skyr naturalny", amount: "100g" },
      { item: "Miód", amount: "1/2 łyżeczki" }
    ],
    recipe: "Mango zblenduj ze skyrem. Możesz dodać szczyptę kardamonu."
  },
  {
    name: "Smoothie Jagodowe z Nasionami Chia",
    calories: 230, protein: 8, fats: 6, carbs: 38,
    type: "snack2",
    ingredients: [
      { item: "Borówki", amount: "100g" },
      { item: "Nasiona Chia", amount: "1 łyżka" },
      { item: "Napój migdałowy", amount: "200ml" }
    ],
    recipe: "Chia namocz wcześniej lub zblenduj od razu z owocami i napojem."
  },
  {
    name: "Koktajl 'Szarlotka' (Jabłko, płatki, cynamon)",
    calories: 280, protein: 8, fats: 5, carbs: 52,
    type: "snack2",
    ingredients: [
      { item: "Jabłko", amount: "1 szt" },
      { item: "Płatki owsiane", amount: "2 łyżki" },
      { item: "Jogurt naturalny", amount: "100g" }
    ],
    recipe: "Jabłko zblenduj z płatkami i dużą ilością cynamonu."
  },
  {
    name: "Zielona Moc 'Jarmuż-Ananas'",
    calories: 210, protein: 4, fats: 1, carbs: 50,
    type: "snack2",
    ingredients: [
      { item: "Ananas", amount: "100g" },
      { item: "Jarmuż", amount: "garść" },
      { item: "Banan", amount: "1/2 szt" }
    ],
    recipe: "Zblenduj z wodą kokosową lub zwykłą wodą."
  },
  {
    name: "Czekoladowa Wiśnia Fit Shake",
    calories: 250, protein: 18, fats: 5, carbs: 38,
    type: "snack2",
    ingredients: [
      { item: "Maliny", amount: "100g" },
      { item: "Kakao", amount: "1 łyżka" },
      { item: "Twaróg chudy", amount: "50g" },
      { item: "Mleko 2%", amount: "100ml" }
    ],
    recipe: "Twaróg nada koktajlowi kremową konsystencję i dużo białka."
  },
  {
    name: "Tropikalne Odświeżenie (Mango, Kokos)",
    calories: 270, protein: 3, fats: 14, carbs: 36,
    type: "snack2",
    ingredients: [
      { item: "Mango", amount: "100g" },
      { item: "Napój migdałowy", amount: "150ml" },
      { item: "Wiórki kokosowe", amount: "1 łyżka" }
    ],
    recipe: "Idealny na upalne dni. Zblenduj z lodem."
  }
];

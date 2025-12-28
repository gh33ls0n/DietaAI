
import { Meal } from "../types";

export const SNACK_MEALS: Meal[] = [
  // --- WCZEŚNIEJSZE BAZOWE ---
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
    name: "Serek wiejski z rzodkiewką i szczypiorkiem",
    calories: 190, protein: 18, fats: 6, carbs: 12,
    type: "snack2",
    ingredients: [
      { item: "Serek wiejski lekki", amount: "150g" },
      { item: "Rzodkiewka", amount: "3 szt" }
    ],
    recipe: "Wymieszaj posiekaną rzodkiewkę z serkiem."
  },

  // --- KOKTAJLE RESPO (Strona 1-4) ---
  {
    name: "Koktajl 'Energia' (Banan, masło orzechowe, jogurt)",
    calories: 320, protein: 12, fats: 12, carbs: 45,
    type: "snack2",
    ingredients: [
      { item: "Banan", amount: "1 szt" },
      { item: "Masło orzechowe", amount: "1 łyżka" },
      { item: "Jogurt naturalny", amount: "100g" }
    ],
    recipe: "Zblenduj na gładką masę."
  },
  {
    name: "Zielony Koktajl z Gruszką i Pietruszką",
    calories: 195, protein: 4, fats: 2, carbs: 42,
    type: "snack2",
    ingredients: [
      { item: "Gruszka", amount: "1 szt" },
      { item: "Pietruszka (natka)", amount: "1/2 pęczka" },
      { item: "Banan", amount: "1/2 szt" },
      { item: "Woda", amount: "100ml" }
    ],
    recipe: "Zblenduj natkę z owocami. Bogactwo witaminy C!"
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
    recipe: "Burak i truskawki to genialne połączenie dla układu krwionośnego."
  },
  {
    name: "Fit Snickers Shake",
    calories: 340, protein: 10, fats: 14, carbs: 48,
    type: "snack2",
    ingredients: [
      { item: "Banan", amount: "1 szt" },
      { item: "Kakao", amount: "1 łyżka" },
      { item: "Masło orzechowe", amount: "1 łyżeczka" },
      { item: "Mleko 2%", amount: "150ml" }
    ],
    recipe: "Zblenduj. Smakuje jak znany baton, a jest fit."
  },
  {
    name: "Koktajl Mango Lassi Light",
    calories: 260, protein: 12, fats: 4, carbs: 45,
    type: "snack2",
    ingredients: [
      { item: "Mango", amount: "100g" },
      { item: "Skyr naturalny", amount: "100g" },
      { item: "Miód", amount: "1/2 łyżeczki" }
    ],
    recipe: "Zblenduj mango ze skyrem. Możesz dodać szczyptę kardamonu."
  },
  {
    name: "Zielona Moc 'Kiwi-Jarmuż'",
    calories: 185, protein: 4, fats: 1, carbs: 44,
    type: "snack2",
    ingredients: [
      { item: "Kiwi", amount: "2 szt" },
      { item: "Jarmuż", amount: "garść" },
      { item: "Jabłko", amount: "1/2 szt" }
    ],
    recipe: "Orzeźwiający, lekko kwaśny koktajl oczyszczający."
  },
  {
    name: "Koktajl 'Szarlotka' (Jabłko, płatki, cynamon)",
    calories: 280, protein: 8, fats: 5, carbs: 52,
    type: "snack2",
    ingredients: [
      { item: "Jabłko", amount: "1 szt" },
      { item: "Płatki owsiane", amount: "2 łyżki" },
      { item: "Jogurt naturalny", amount: "100g" },
      { item: "Cynamon", amount: "szczypta" }
    ],
    recipe: "Gęsty i sycący koktajl o smaku ciasta z jabłkami."
  },
  {
    name: "Smoothie 'Antyoksydant' (Jagody, chia, napój migdałowy)",
    calories: 230, protein: 7, fats: 8, carbs: 36,
    type: "snack2",
    ingredients: [
      { item: "Borówki", amount: "100g" },
      { item: "Nasiona Chia", amount: "1 łyżka" },
      { item: "Napój migdałowy", amount: "200ml" }
    ],
    recipe: "Zblenduj. Chia doda kwasów Omega-3."
  },
  {
    name: "Koktajl 'Złote Mleko' (Pomarańcza, kurkuma, imbir)",
    calories: 160, protein: 3, fats: 1, carbs: 38,
    type: "snack2",
    ingredients: [
      { item: "Pomarańcza", amount: "1 szt" },
      { item: "Imbir świeży", amount: "1 cm" },
      { item: "Banan", amount: "1/2 szt" }
    ],
    recipe: "Koktajl odpornościowy. Dodaj szczyptę kurkumy przed blendowaniem."
  },
  {
    name: "Czekoladowy Shake z Twarogiem i Maliniami",
    calories: 290, protein: 24, fats: 6, carbs: 38,
    type: "snack2",
    ingredients: [
      { item: "Maliny", amount: "100g" },
      { item: "Twaróg chudy", amount: "80g" },
      { item: "Mleko 2%", amount: "100ml" },
      { item: "Kakao", amount: "1 łyżka" }
    ],
    recipe: "Wysokobiałkowy shake o konsystencji musu."
  },
  {
    name: "Smoothie 'Tropikalny Raj' (Ananas, kokos)",
    calories: 275, protein: 3, fats: 12, carbs: 42,
    type: "snack2",
    ingredients: [
      { item: "Ananas", amount: "150g" },
      { item: "Napój owsiany", amount: "150ml" },
      { item: "Wiórki kokosowe", amount: "1 łyżka" }
    ],
    recipe: "Słodki i egzotyczny. Idealny na drugie śniadanie lub deser."
  },
  {
    name: "Shake 'Kawowy Budzik'",
    calories: 210, protein: 18, fats: 4, carbs: 28,
    type: "snack2",
    ingredients: [
      { item: "Skyr naturalny", amount: "100g" },
      { item: "Banan", amount: "1/2 szt" },
      { item: "Kawa espresso", amount: "30ml" }
    ],
    recipe: "Zblenduj kawę z bananem i skyrem. Energia od rana!"
  },
  {
    name: "Smoothie z Brzoskwini i Migdałów",
    calories: 245, protein: 6, fats: 10, carbs: 36,
    type: "snack2",
    ingredients: [
      { item: "Brzoskwinia", amount: "1 szt" },
      { item: "Napój migdałowy", amount: "200ml" },
      { item: "Masło orzechowe", amount: "1 łyżeczka" }
    ],
    recipe: "Aksamitne smoothie o delikatnym smaku."
  },
  {
    name: "Zielone Smoothie 'Oczyszczenie' (Szpinak, ogórek, cytryna)",
    calories: 140, protein: 4, fats: 1, carbs: 32,
    type: "snack2",
    ingredients: [
      { item: "Szpinak świeży", amount: "garść" },
      { item: "Ogórek", amount: "1/2 szt" },
      { item: "Jabłko", amount: "1 szt" },
      { item: "Sok z cytryny", amount: "2 łyżki" }
    ],
    recipe: "Najlżejszy z koktajli, świetnie nawadnia."
  },
  {
    name: "Koktajl 'Bounty' Fit (Kakao, kokos, banan)",
    calories: 310, protein: 5, fats: 14, carbs: 46,
    type: "snack2",
    ingredients: [
      { item: "Banan", amount: "1 szt" },
      { item: "Wiórki kokosowe", amount: "2 łyżki" },
      { item: "Kakao", amount: "1 łyżeczka" },
      { item: "Woda", amount: "100ml" }
    ],
    recipe: "Smakuje jak deser, dostarcza dobrych tłuszczy."
  },
  {
    name: "Smoothie 'Zimowe' (Pomarańcza, banan, imbir)",
    calories: 195, protein: 3, fats: 1, carbs: 48,
    type: "snack2",
    ingredients: [
      { item: "Pomarańcza", amount: "1 szt" },
      { item: "Banan", amount: "1/2 szt" },
      { item: "Imbir świeży", amount: "1 cm" }
    ],
    recipe: "Rozgrzewające i pełne witaminy C."
  },
  {
    name: "Shake 'Jagodowy Sernik'",
    calories: 260, protein: 22, fats: 4, carbs: 38,
    type: "snack2",
    ingredients: [
      { item: "Borówki", amount: "80g" },
      { item: "Twaróg chudy", amount: "100g" },
      { item: "Jogurt naturalny", amount: "50g" }
    ],
    recipe: "Bardzo gęsty, można jeść łyżeczką jak deser."
  },
  {
    name: "Koktajl 'Letnie Orzeźwienie' (Arbuz, mięta, limonka)",
    calories: 120, protein: 2, fats: 1, carbs: 30,
    type: "snack2",
    ingredients: [
      { item: "Jabłko", amount: "1 szt" },
      { item: "Sok z cytryny", amount: "2 łyżki" }
    ],
    recipe: "Lekka baza owocowa z dużą ilością świeżej mięty."
  },
  {
    name: "Smoothie 'Aksamitne Awokado'",
    calories: 290, protein: 5, fats: 18, carbs: 34,
    type: "snack2",
    ingredients: [
      { item: "Awokado", amount: "1/2 szt" },
      { item: "Banan", amount: "1/2 szt" },
      { item: "Napój sojowy", amount: "150ml" }
    ],
    recipe: "Kremowe, sycące, bogate w zdrowe kwasy tłuszczowe."
  },
  {
    name: "Koktajl 'Dynia & Jabłko' (Smak Jesieni)",
    calories: 220, protein: 4, fats: 2, carbs: 50,
    type: "snack2",
    ingredients: [
      { item: "Jabłko", amount: "1 szt" },
      { item: "Marchew", amount: "100g" },
      { item: "Cynamon", amount: "1 łyżeczka" }
    ],
    recipe: "Słodki koktajl warzywno-owocowy z korzenną nutą."
  },
  {
    name: "Smoothie z Kiwi i Mango",
    calories: 190, protein: 3, fats: 1, carbs: 46,
    type: "snack2",
    ingredients: [
      { item: "Kiwi", amount: "1 szt" },
      { item: "Mango", amount: "80g" },
      { item: "Woda kokosowa", amount: "150ml" }
    ],
    recipe: "Egzotyczna bomba witaminowa."
  },
  {
    name: "Shake 'Moc Daktyli' (Banan, daktyle, orzechy)",
    calories: 360, protein: 8, fats: 12, carbs: 62,
    type: "snack2",
    ingredients: [
      { item: "Banan", amount: "1 szt" },
      { item: "Daktyle suszone", amount: "2 szt" },
      { item: "Napój migdałowy", amount: "200ml" }
    ],
    recipe: "Bardzo słodki, naturalnie energetyczny przed treningiem."
  },
  {
    name: "Koktajl 'Zielona Gruszka'",
    calories: 175, protein: 3, fats: 1, carbs: 42,
    type: "snack2",
    ingredients: [
      { item: "Gruszka", amount: "1 szt" },
      { item: "Szpinak świeży", amount: "garść" },
      { item: "Napój owsiany", amount: "100ml" }
    ],
    recipe: "Delikatny, kremowy koktajl o stonowanym smaku."
  },
  {
    name: "Smoothie 'Burak & Malina'",
    calories: 180, protein: 4, fats: 1, carbs: 42,
    type: "snack2",
    ingredients: [
      { item: "Maliny", amount: "100g" },
      { item: "Burak gotowany", amount: "50g" },
      { item: "Sok z cytryny", amount: "1 łyżka" }
    ],
    recipe: "Piękny kolor i niesamowity smak malin przełamany burakiem."
  }
];

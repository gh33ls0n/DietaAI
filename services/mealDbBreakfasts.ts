
import { Meal } from "../types";

export const BREAKFAST_MEALS: Meal[] = [
  {
    name: "Kanapka z pastą z tuńczyka, kukurydzy i jogurtu",
    calories: 340, protein: 28, fats: 8, carbs: 42,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni pełnoziarnisty", amount: "2 kromki" },
      { item: "Tuńczyk (puszka)", amount: "80g" },
      { item: "Kukurydza konserwowa", amount: "2 łyżki" },
      { item: "Jogurt naturalny", amount: "1 łyżka" }
    ],
    recipe: "Wymieszaj tuńczyka z kukurydzą i jogurtem. Nałóż na chleb."
  },
  {
    name: "Kanapka z wędzonym pstrągiem i chrzanem",
    calories: 330, protein: 25, fats: 9, carbs: 38,
    type: "dinner",
    ingredients: [
      { item: "Chleb graham", amount: "2 kromki" },
      { item: "Pstrąg wędzony", amount: "60g" },
      { item: "Chrzan", amount: "1 łyżeczka" }
    ],
    recipe: "Posmaruj chleb chrzanem, ułóż rybę i świeżego ogórka."
  },
  {
    name: "Pasta z makreli wędzonej z twarogiem",
    calories: 390, protein: 32, fats: 18, carbs: 34,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Makrela wędzona", amount: "50g" },
      { item: "Twaróg chudy", amount: "50g" }
    ],
    recipe: "Wymieszaj makrelę z twarogiem i szczypiorkiem na pastę."
  },
  {
    name: "Kanapka z łososiem wędzonym i serkiem ricotta",
    calories: 360, protein: 24, fats: 14, carbs: 36,
    type: "breakfast",
    ingredients: [
      { item: "Chleb graham", amount: "2 kromki" },
      { item: "Ser Ricotta", amount: "2 łyżki" },
      { item: "Łosoś wędzony", amount: "40g" }
    ],
    recipe: "Ricottę nałóż na chleb, ułóż łososia i posyp rukolą."
  },
  {
    name: "Kanapka z białą fasolą i suszonymi pomidorami",
    calories: 385, protein: 18, fats: 12, carbs: 54,
    type: "dinner",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Fasola biała (puszka)", amount: "100g" },
      { item: "Pomidory suszone", amount: "3 szt" }
    ],
    recipe: "Fasolę zblenduj z suszonymi pomidorami na gładką masę."
  },
  {
    name: "Kanapka Caprese z pesto i mozzarellą light",
    calories: 410, protein: 21, fats: 19, carbs: 42,
    type: "breakfast",
    ingredients: [
      { item: "Chleb graham", amount: "2 kromki" },
      { item: "Ser Mozzarella Light", amount: "60g" },
      { item: "Pesto zielone", amount: "1 łyżeczka" }
    ],
    recipe: "Pesto na chleb, potem mozzarella i pomidor."
  },
  {
    name: "Guacamole z jajkiem sadzonym na grzankach",
    calories: 430, protein: 18, fats: 25, carbs: 38,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Awokado", amount: "1/2 szt" },
      { item: "Jajko (rozmiar L)", amount: "1 szt" }
    ],
    recipe: "Rozgnieć awokado z cytryną. Nałóż na chleb z jajkiem."
  },
  {
    name: "Kanapka z hummusem, rzodkiewką i kiełkami",
    calories: 340, protein: 12, fats: 14, carbs: 48,
    type: "snack1",
    ingredients: [
      { item: "Chleb graham", amount: "2 kromki" },
      { item: "Hummus", amount: "3 łyżki" },
      { item: "Rzodkiewka", amount: "4 szt" }
    ],
    recipe: "Posmaruj chleb hummusem, ułóż rzodkiewkę i kiełki."
  },
  {
    name: "Kanapka z camembertem light i żurawiną",
    calories: 375, protein: 22, fats: 14, carbs: 46,
    type: "dinner",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Ser Camembert Light", amount: "60g" },
      { item: "Konfitura z żurawiny", amount: "1 łyżeczka" }
    ],
    recipe: "Na pieczywie ułóż sałatę, camembert i kropkę żurawiny."
  },
  {
    name: "Kanapka z indykiem i musztardą miodową",
    calories: 345, protein: 25, fats: 7, carbs: 48,
    type: "breakfast",
    ingredients: [
      { item: "Chleb graham", amount: "2 kromki" },
      { item: "Szynka drobiowa", amount: "60g" },
      { item: "Musztarda", amount: "1 łyżeczka" },
      { item: "Miód", amount: "1/2 łyżeczki" }
    ],
    recipe: "Wymieszaj musztardę z miodem, posmaruj chleb. Ułóż wędlinę."
  }
];

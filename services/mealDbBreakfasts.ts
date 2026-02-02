
import { Meal } from "../types";

export const BREAKFAST_MEALS: Meal[] = [
  {
    name: "Kanapka z pastą z tuńczyka i jogurtu",
    calories: 340, protein: 28, fats: 8, carbs: 42,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Tuńczyk (puszka)", amount: "80g" },
      { item: "Kukurydza konserwowa", amount: "2 łyżki" },
      { item: "Jogurt naturalny", amount: "1 łyżka" }
    ],
    recipe: "1. Tuńczyka odsączyć i wymieszać z kukurydzą oraz jogurtem. 2. Doprawić pieprzem i opcjonalnie szczypiorkiem. 3. Nałożyć grubą warstwę na kromki chleba."
  },
  {
    name: "Kanapka z pstrągiem i chrzanem",
    calories: 330, protein: 25, fats: 9, carbs: 38,
    type: "dinner",
    ingredients: [
      { item: "Grahamka", amount: "1 szt" },
      { item: "Pstrąg wędzony", amount: "60g" },
      { item: "Chrzan", amount: "1 łyżeczka" }
    ],
    recipe: "1. Grahamkę przekroić na pół i lekko opiec w tosterze. 2. Jedną stronę posmarować chrzanem. 3. Ułożyć kawałki wędzonej ryby i plasterki świeżego ogórka."
  },
  {
    name: "Pasta z makreli wędzonej i twarogu",
    calories: 390, protein: 32, fats: 18, carbs: 34,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Makrela wędzona", amount: "50g" },
      { item: "Twaróg chudy", amount: "50g" }
    ],
    recipe: "1. Makrelę oczyścić z ości i rozdrobnić widelcem. 2. Wymieszać z twarogiem i łyżką jogurtu. 3. Dodać dużo szczypiorku i nałożyć na pieczywo."
  },
  {
    name: "Kanapka z łososiem i ricottą",
    calories: 360, protein: 24, fats: 14, carbs: 36,
    type: "breakfast",
    ingredients: [
      { item: "Chleb graham", amount: "2 kromki" },
      { item: "Ser Ricotta", amount: "2 łyżki" },
      { item: "Łosoś wędzony", amount: "2 plastry" }
    ],
    recipe: "1. Kromki chleba posmarować serem ricotta. 2. Położyć plastry łososia. 3. Posypać świeżo mielonym pieprzem i skropić cytryną."
  },
  {
    name: "Kanapka Caprese z pesto",
    calories: 410, protein: 21, fats: 19, carbs: 42,
    type: "breakfast",
    ingredients: [
      { item: "Grahamka", amount: "1 szt" },
      { item: "Ser Mozzarella Light", amount: "1/2 szt" },
      { item: "Pesto zielone", amount: "1 łyżeczka" },
      { item: "Pomidor", amount: "1 szt" }
    ],
    recipe: "1. Bułkę przekroić i posmarować pesto. 2. Ułożyć plasterki mozzarelli i pomidora naprzemiennie. 3. Oprószyć bazylią."
  },
  {
    name: "Tosty z awokado i jajkiem sadzonym",
    calories: 430, protein: 18, fats: 25, carbs: 38,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Awokado", amount: "1/2 szt" },
      { item: "Jajko (rozmiar L)", amount: "1 szt" }
    ],
    recipe: "1. Awokado rozgnieść widelcem z solą i sokiem z cytryny. 2. Chleb podpiec w tosterze. 3. Na patelni usmażyć jajko sadzone tak, by żółtko pozostało płynne. 4. Na tosty nałożyć awokado, a na wierzch jajko."
  },
  {
    name: "Kanapka z hummusem i rzodkiewką",
    calories: 340, protein: 12, fats: 14, carbs: 48,
    type: "snack1",
    ingredients: [
      { item: "Grahamka", amount: "1 szt" },
      { item: "Hummus", amount: "3 łyżki" },
      { item: "Rzodkiewka", amount: "4 szt" }
    ],
    recipe: "1. Grahamkę posmarować grubą warstwą hummusu. 2. Rzodkiewki pokroić w cienkie plasterki i ułożyć na wierzchu. 3. Można posypać kiełkami."
  },
  {
    name: "Kanapka z indykiem i miodową musztardą",
    calories: 345, protein: 25, fats: 7, carbs: 48,
    type: "breakfast",
    ingredients: [
      { item: "Grahamka", amount: "1 szt" },
      { item: "Szynka drobiowa", amount: "4 plastry" },
      { item: "Musztarda", amount: "1 łyżeczka" },
      { item: "Miód", amount: "1/2 łyżeczki" }
    ],
    recipe: "1. Musztardę wymieszać z miodem i posmarować bułkę. 2. Ułożyć plastry szynki i ulubioną sałatę."
  }
];

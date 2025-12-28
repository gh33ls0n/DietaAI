
import { Meal } from "../types";

export const LUNCH_MEALS: Meal[] = [
  // --- KURCZAK (CHICKEN) ---
  {
    name: "Kurczak w sosie słodko-kwaśnym z ananasem",
    calories: 520, protein: 35, fats: 12, carbs: 68,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "150g" },
      { item: "Ananas", amount: "100g" },
      { item: "Ryż basmati", amount: "60g" },
      { item: "Papryka czerwona", amount: "80g" }
    ],
    recipe: "Kurczaka i warzywa podsmaż. Dodaj ananasa i sos z octu ryżowego, miodu i koncentratu. Podawaj z ryżem."
  },
  {
    name: "Kurczak Caprese zapiekany z mozzarellą",
    calories: 480, protein: 42, fats: 18, carbs: 38,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "160g" },
      { item: "Ser Mozzarella Light", amount: "40g" },
      { item: "Pomidor", amount: "100g" },
      { item: "Pesto zielone", amount: "15g" }
    ],
    recipe: "Kurczaka nacinij, włóż plastry mozzarelli i pomidora. Piecz 25 min w 180st. Podawaj z lekką sałatką."
  },
  {
    name: "Fit Gyros z domowym sosem tzatziki",
    calories: 540, protein: 38, fats: 16, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "150g" },
      { item: "Tortilla pełnoziarnista", amount: "1 szt" },
      { item: "Jogurt naturalny", amount: "50g" },
      { item: "Ogórek", amount: "50g" }
    ],
    recipe: "Mięso przypraw przyprawą gyros i upiecz. Zrób sos z jogurtu, ogórka i czosnku. Zawiń w tortillę z warzywami."
  },
  {
    name: "Kurczak Curry z mango i mleczkiem kokosowym",
    calories: 560, protein: 34, fats: 22, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "140g" },
      { item: "Mango", amount: "80g" },
      { item: "Mleczko kokosowe Light", amount: "80ml" },
      { item: "Ryż jaśminowy", amount: "50g" }
    ],
    recipe: "Podsmaż kurczaka z pastą curry. Dodaj mango i mleczko. Duś 10 min. Podawaj z ryżem."
  },
  {
    name: "Sznycle z kurczaka w płatkach kukurydzianych",
    calories: 510, protein: 36, fats: 14, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "150g" },
      { item: "Ziemniaki", amount: "200g" },
      { item: "Marchew", amount: "100g" }
    ],
    recipe: "Kurczaka obtocz w pokruszonych płatkach kukurydzianych i upiecz bez tłuszczu. Podawaj z puree i surówką."
  },
  {
    name: "Kurczak Teriyaki z sezamem i brokułami",
    calories: 490, protein: 35, fats: 12, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "150g" },
      { item: "Brokuły", amount: "150g" },
      { item: "Sos sojowy", amount: "20ml" },
      { item: "Sezam", amount: "5g" },
      { item: "Ryż basmati", amount: "50g" }
    ],
    recipe: "Kurczaka podsmaż, dodaj sos sojowy, miód i sezam. Wymieszaj z ugotowanymi brokułami i ryżem."
  },
  {
    name: "Kurczak w sosie pomidorowo-paprykowym z kuskusem",
    calories: 475, protein: 33, fats: 10, carbs: 64,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "140g" },
      { item: "Papryka czerwona", amount: "100g" },
      { item: "Passata pomidorowa", amount: "100ml" },
      { item: "Kuskus", amount: "50g" }
    ],
    recipe: "Warzywa i mięso podduś w passacie. Dopraw ziołami prowansalskimi. Podawaj z kuskusem."
  },

  // --- INDYK (TURKEY) ---
  {
    name: "Pulpety z indyka w sosie koperkowym",
    calories: 460, protein: 32, fats: 14, carbs: 52,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z indyka", amount: "150g" },
      { item: "Ziemniaki", amount: "150g" },
      { item: "Jogurt naturalny", amount: "30g" }
    ],
    recipe: "Uformuj pulpety i gotuj w wywarze. Sos zabiel jogurtem i dodaj dużo koperku. Podawaj z ziemniakami."
  },
  {
    name: "Pieczeń z indyka z warzywami korzeniowymi",
    calories: 490, protein: 38, fats: 12, carbs: 56,
    type: "lunch",
    ingredients: [
      { item: "Pierś z indyka", amount: "160g" },
      { item: "Marchew", amount: "100g" },
      { item: "Pietruszka (korzeń)", amount: "50g" },
      { item: "Kasza pęczak", amount: "50g" }
    ],
    recipe: "Indyka upiecz w rękawie z warzywami. Podawaj z ugotowaną kaszą pęczak."
  },
  {
    name: "Indyk w sosie kurkowym z kaszą bulgur",
    calories: 530, protein: 35, fats: 18, carbs: 54,
    type: "lunch",
    ingredients: [
      { item: "Pierś z indyka", amount: "140g" },
      { item: "Kasza bulgur", amount: "60g" },
      { item: "Pieczarki", amount: "100g" }
    ],
    recipe: "Indyka podsmaż, dodaj grzyby i odrobinę chudej śmietanki lub jogurtu. Podawaj z kaszą."
  },
  {
    name: "Stir-fry z indykiem i orzechami nerkowca",
    calories: 550, protein: 34, fats: 24, carbs: 50,
    type: "lunch",
    ingredients: [
      { item: "Pierś z indyka", amount: "130g" },
      { item: "Orzechy włoskie", amount: "20g" },
      { item: "Cukinia", amount: "100g" },
      { item: "Makaron ryżowy", amount: "50g" }
    ],
    recipe: "Mięso i cukinię smaż krótko na dużym ogniu. Dodaj sos sojowy i orzechy. Wymieszaj z makaronem."
  },

  // --- WOŁOWINA (BEEF) ---
  {
    name: "Chili con Carne z chudej wołowiny",
    calories: 580, protein: 42, fats: 16, carbs: 64,
    type: "lunch",
    ingredients: [
      { item: "Wołowina chuda", amount: "150g" },
      { item: "Ryż brązowy", amount: "60g" },
      { item: "Passata pomidorowa", amount: "100ml" }
    ],
    recipe: "Mięso mielone podsmaż, dodaj passatę, kukurydzę i fasolę. Dopraw chili. Podawaj z ryżem brązowym."
  },
  {
    name: "Burger Wołowy Fit z pieczonymi batatami",
    calories: 595, protein: 38, fats: 22, carbs: 68,
    type: "lunch",
    ingredients: [
      { item: "Wołowina chuda", amount: "150g" },
      { item: "Bataty", amount: "150g" },
      { item: "Bułka grahamka", amount: "1 szt" }
    ],
    recipe: "Mięso ugrilluj. Bataty upiecz w słupkach. Złóż burgera z dużą ilością warzyw i musztardą."
  },
  {
    name: "Gulasz wołowy z papryką i kaszą gryczaną",
    calories: 570, protein: 45, fats: 18, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Wołowina chuda", amount: "150g" },
      { item: "Kasza gryczana", amount: "60g" },
      { item: "Papryka czerwona", amount: "100g" }
    ],
    recipe: "Wołowinę duś z cebulą i papryką do miękkości (ok. 1.5h). Podawaj z ugotowaną kaszą gryczaną."
  },
  {
    name: "Stek wołowy z grillowanymi warzywami",
    calories: 510, protein: 44, fats: 24, carbs: 32,
    type: "lunch",
    ingredients: [
      { item: "Wołowina chuda", amount: "160g" },
      { item: "Cukinia", amount: "100g" },
      { item: "Papryka żółta", amount: "100g" }
    ],
    recipe: "Stek grilluj wg uznania. Warzywa pokrój w plastry i grilluj obok mięsa. Skrop oliwą."
  },

  // --- WIEPRZOWINA (PORK) ---
  {
    name: "Polędwiczka wieprzowa w sosie musztardowym",
    calories: 485, protein: 35, fats: 14, carbs: 52,
    type: "lunch",
    ingredients: [
      { item: "Polędwiczka wieprzowa", amount: "150g" },
      { item: "Ziemniaki", amount: "150g" },
      { item: "Musztarda", amount: "20g" }
    ],
    recipe: "Polędwiczkę upiecz lub uduś. Sos zrób z musztardy i jogurtu. Podawaj z ziemniakami i fasolką."
  },
  {
    name: "Schab pieczony z rozmarynem i jabłkiem",
    calories: 470, protein: 38, fats: 12, carbs: 54,
    type: "lunch",
    ingredients: [
      { item: "Schab bez kości", amount: "140g" },
      { item: "Jabłko", amount: "100g" },
      { item: "Kasza bulgur", amount: "50g" }
    ],
    recipe: "Schab upiecz z plasterkami jabłek i rozmarynem. Podawaj z kaszą bulgur."
  },
  {
    name: "Polędwiczka z kurkami i makaronem pełnoziarnistym",
    calories: 550, protein: 36, fats: 18, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Polędwiczka wieprzowa", amount: "130g" },
      { item: "Makaron pełnoziarnisty", amount: "60g" },
      { item: "Pieczarki", amount: "100g" }
    ],
    recipe: "Mięso i grzyby podsmaż, połącz z ugotowanym makaronem i natką pietruszki."
  },

  // --- INNE / MIESZANE ---
  {
    name: "Bowl z pieczonym kurczakiem, mango i awokado",
    calories: 580, protein: 32, fats: 26, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "120g" },
      { item: "Mango", amount: "50g" },
      { item: "Awokado", amount: "1/2 szt" },
      { item: "Ryż brązowy", amount: "50g" }
    ],
    recipe: "Ułóż wszystkie składniki w misce na bazie ryżu. Skrop sokiem z cytryny i sosem sojowym."
  },
  {
    name: "Makaron z indykiem i suszonymi pomidorami",
    calories: 535, protein: 35, fats: 16, carbs: 64,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z indyka", amount: "120g" },
      { item: "Makaron spaghetti (durum)", amount: "70g" },
      { item: "Pomidory suszone", amount: "30g" }
    ],
    recipe: "Indyka podsmaż z czosnkiem i suszonymi pomidorami. Wymieszaj z makaronem i świeżą bazylią."
  },
  {
    name: "Tortilla z kruchą wołowiną i sosem salsa",
    calories: 560, protein: 36, fats: 18, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Wołowina chuda", amount: "130g" },
      { item: "Tortilla pełnoziarnista", amount: "1 szt" },
      { item: "Papryka czerwona", amount: "50g" }
    ],
    recipe: "Wołowinę pokrój w paski, podsmaż z przyprawą meksykańską. Zawiń z papryką i domową salsą."
  },
  {
    name: "Zapiekanka makaronowa z kurczakiem i brokułem",
    calories: 510, protein: 42, fats: 14, carbs: 56,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "140g" },
      { item: "Makaron pełnoziarnisty", amount: "50g" },
      { item: "Brokuły", amount: "150g" },
      { item: "Ser Mozzarella Light", amount: "30g" }
    ],
    recipe: "Wymieszaj składniki w naczyniu, posyp serem i zapiekaj 15 min do rozpuszczenia sera."
  },
  {
    name: "Kurczak w płatkach migdałowych z fasolką",
    calories: 495, protein: 38, fats: 22, carbs: 38,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "150g" },
      { item: "Fasolka szparagowa", amount: "200g" }
    ],
    recipe: "Kurczaka obtocz w płatkach migdałowych i upiecz. Podawaj z gotowaną fasolką szparagową."
  },
  {
    name: "Gulasz z indyka z dynią i kaszą jaglaną",
    calories: 480, protein: 32, fats: 12, carbs: 64,
    type: "lunch",
    ingredients: [
      { item: "Pierś z indyka", amount: "140g" },
      { item: "Kasza jaglana", amount: "50g" },
      { item: "Bataty", amount: "100g" }
    ],
    recipe: "Indyka i bataty (zamiast dyni) duś w bulionie. Podawaj z ugotowaną kaszą jaglaną."
  }
];

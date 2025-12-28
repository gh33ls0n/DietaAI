
import { Meal } from "../types";

export const LUNCH_MEALS: Meal[] = [
  // --- WCZEŚNIEJSZE KLASYKI ---
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

  // --- OBIADY RESPO: DROBIOWE (KURCZAK / INDYK) ---
  {
    name: "Kurczak w sosie orzechowym Satay z ryżem",
    calories: 540, protein: 36, fats: 20, carbs: 55,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "150g" },
      { item: "Ryż basmati (suchy)", amount: "50g" },
      { item: "Masło orzechowe", amount: "20g" },
      { item: "Mleczko kokosowe Light", amount: "50ml" },
      { item: "Sos sojowy", amount: "10ml" }
    ],
    recipe: "Kurczaka podsmaż. Masło orzechowe wymieszaj z mleczkiem i sosem sojowym, podgrzej. Podawaj z ryżem i ogórkiem."
  },
  {
    name: "Indyk duszony z dynią i kaszą bulgur",
    calories: 480, protein: 34, fats: 10, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Pierś z indyka", amount: "140g" },
      { item: "Kasza bulgur (sucha)", amount: "60g" },
      { item: "Marchew", amount: "100g" },
      { item: "Cukinia", amount: "100g" }
    ],
    recipe: "Indyka i warzywa pokrój w kostkę, duś pod przykryciem z ziołami. Podawaj z ugotowaną kaszą."
  },
  {
    name: "Kurczak po tajsku z czerwoną papryką i pędami bambusa",
    calories: 510, protein: 35, fats: 14, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "150g" },
      { item: "Pędy bambusa", amount: "50g" },
      { item: "Papryka czerwona", amount: "100g" },
      { item: "Makaron ryżowy (suchy)", amount: "50g" }
    ],
    recipe: "Kurczaka i paprykę podsmaż na oliwie. Dodaj bambus i sos sojowy. Wymieszaj z makaronem ryżowym."
  },
  {
    name: "Tortilla z chrupiącym kurczakiem i sosem czosnkowym",
    calories: 530, protein: 38, fats: 15, carbs: 60,
    type: "lunch",
    ingredients: [
      { item: "Tortilla pełnoziarnista", amount: "1 szt" },
      { item: "Pierś z kurczaka", amount: "120g" },
      { item: "Jogurt naturalny", amount: "2 łyżki" },
      { item: "Czosnek", amount: "1 ząbek" },
      { item: "Mix sałat", amount: "garść" }
    ],
    recipe: "Kurczaka przypraw i upiecz. Zrób sos z jogurtu i czosnku. Zawiń wszystko w tortillę."
  },
  {
    name: "Gulasz z indyka z pieczarkami i pęczakiem",
    calories: 495, protein: 33, fats: 12, carbs: 64,
    type: "lunch",
    ingredients: [
      { item: "Pierś z indyka", amount: "130g" },
      { item: "Pieczarki", amount: "150g" },
      { item: "Kasza pęczak (sucha)", amount: "60g" },
      { item: "Cebula biała", amount: "1/2 szt" }
    ],
    recipe: "Cebulę i mięso podsmaż, dodaj pieczarki i duś. Podawaj z gęstym sosem własnym i kaszą."
  },
  {
    name: "Strogonow z kurczaka z ogórkiem kiszonym",
    calories: 470, protein: 34, fats: 11, carbs: 56,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "150g" },
      { item: "Ogórek kiszony", amount: "2 szt" },
      { item: "Ziemniaki", amount: "200g" },
      { item: "Koncentrat pomidorowy", amount: "1 łyżka" }
    ],
    recipe: "Kurczaka pokrój w słupki, podsmaż. Dodaj pokrojone ogórki, koncentrat i odrobinę wody. Duś 10 min."
  },
  {
    name: "Makaron pełnoziarnisty z kurczakiem i zielonym pesto",
    calories: 560, protein: 36, fats: 22, carbs: 54,
    type: "lunch",
    ingredients: [
      { item: "Makaron pełnoziarnisty (suchy)", amount: "60g" },
      { item: "Pierś z kurczaka", amount: "120g" },
      { item: "Pesto zielone", amount: "20g" },
      { item: "Pomidory suszone", amount: "3 szt" }
    ],
    recipe: "Makaron ugotuj. Kurczaka podsmaż, wymieszaj z makaronem, pesto i posiekanymi pomidorami."
  },

  // --- OBIADY RESPO: WOŁOWINA I WIEPRZOWINA ---
  {
    name: "Chili con Carne z chudej wołowiny",
    calories: 540, protein: 38, fats: 16, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Wołowina mielona chuda", amount: "150g" },
      { item: "Fasola biała (puszka)", amount: "80g" },
      { item: "Kukurydza konserwowa", amount: "30g" },
      { item: "Passata pomidorowa", amount: "100ml" },
      { item: "Ryż brązowy (suchy)", amount: "40g" }
    ],
    recipe: "Wołowinę podsmaż z cebulą. Dodaj fasolę, kukurydzę i passatę. Dopraw chili i kminem. Podawaj z ryżem."
  },
  {
    name: "Polędwiczka wieprzowa w sosie musztardowym",
    calories: 490, protein: 35, fats: 14, carbs: 52,
    type: "lunch",
    ingredients: [
      { item: "Polędwiczka wieprzowa", amount: "150g" },
      { item: "Ziemniaki", amount: "150g" },
      { item: "Musztarda", amount: "2 łyżki" },
      { item: "Fasolka szparagowa", amount: "100g" }
    ],
    recipe: "Polędwiczkę upiecz w całości. Zrób sos z musztardy i jogurtu. Podawaj z ziemniakami i fasolką."
  },
  {
    name: "Gulasz wołowy z kolorową papryką (Respo Classic)",
    calories: 565, protein: 42, fats: 18, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Wołowina chuda (polędwica/ligawa)", amount: "150g" },
      { item: "Papryka czerwona", amount: "100g" },
      { item: "Kasza gryczana (sucha)", amount: "60g" },
      { item: "Cebula biała", amount: "1 szt" }
    ],
    recipe: "Wołowinę duś z cebulą i papryką do miękkości (ok. 1.5h). Podawaj z ugotowaną kaszą gryczaną."
  },
  {
    name: "Mielone z indyka zapiekane z mozzarellą i cukinią",
    calories: 520, protein: 38, fats: 18, carbs: 48,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z indyka", amount: "150g" },
      { item: "Cukinia", amount: "200g" },
      { item: "Ser Mozzarella Light", amount: "40g" },
      { item: "Ziemniaki", amount: "150g" }
    ],
    recipe: "Mięso ułóż na plastrach cukinii, posyp serem i piecz 25 min. Podawaj z ziemniakami."
  },

  // --- OBIADY RESPO: SZYBKIE I NOWOCZESNE ---
  {
    name: "Bowl z kurczakiem, mango i ryżem basmati",
    calories: 510, protein: 32, fats: 12, carbs: 68,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "120g" },
      { item: "Mango", amount: "80g" },
      { item: "Ryż basmati (suchy)", amount: "60g" },
      { item: "Ogórek", amount: "50g" }
    ],
    recipe: "Ryż ugotuj. Kurczaka podsmaż w marynacie miodowo-sojowej. Ułóż w misce z mango i ogórkiem."
  },
  {
    name: "Spaghetti Bolognese Fit z indykiem",
    calories: 545, protein: 36, fats: 14, carbs: 68,
    type: "lunch",
    ingredients: [
      { item: "Makaron pełnoziarnisty (suchy)", amount: "70g" },
      { item: "Mięso mielone z indyka", amount: "120g" },
      { item: "Passata pomidorowa", amount: "150ml" },
      { item: "Cebula biała", amount: "1/2 szt" }
    ],
    recipe: "Mięso podsmaż z cebulą, zalej passatą i duś z bazylią. Podawaj z makaronem."
  },
  {
    name: "Zapiekanka makaronowa z kurczakiem i brokułem",
    calories: 535, protein: 38, fats: 16, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Makaron pełnoziarnisty (suchy)", amount: "60g" },
      { item: "Pierś z kurczaka", amount: "120g" },
      { item: "Brokuły", amount: "150g" },
      { item: "Ser Mozzarella Light", amount: "30g" }
    ],
    recipe: "Wymieszaj podgotowany makaron, kurczaka i brokuły. Posyp serem i piecz 15 min."
  },
  {
    name: "Kurczak w płatkach kukurydzianych z surówką z marchwi",
    calories: 570, protein: 35, fats: 16, carbs: 70,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "150g" },
      { item: "Ziemniaki", amount: "200g" },
      { item: "Marchew", amount: "100g" },
      { item: "Jabłko", amount: "50g" }
    ],
    recipe: "Kurczaka obtocz w pokruszonych płatkach (bez cukru) i upiecz. Podawaj z purée i surówką z jabłka i marchwi."
  },
  {
    name: "Stek wołowy z pieczonymi warzywami korzeniowymi",
    calories: 590, protein: 45, fats: 22, carbs: 52,
    type: "lunch",
    ingredients: [
      { item: "Wołowina chuda (polędwica/ligawa)", amount: "160g" },
      { item: "Ziemniaki", amount: "150g" },
      { item: "Marchew", amount: "100g" },
      { item: "Pietruszka (korzeń)", amount: "50g" }
    ],
    recipe: "Warzywa upiecz w słupkach. Stek grilluj po 3 min z każdej strony. Odstaw na 5 min przed podaniem."
  },
  {
    name: "Kotlety siekane z kurczaka z papryką i kukurydzą",
    calories: 495, protein: 34, fats: 14, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "130g" },
      { item: "Kukurydza konserwowa", amount: "30g" },
      { item: "Papryka czerwona", amount: "50g" },
      { item: "Kasza gryczana (sucha)", amount: "60g" }
    ],
    recipe: "Mięso i paprykę posiekaj, wymieszaj z kukurydzą i jajkiem. Smaż małe placuszki na suchej patelni."
  },
  {
    name: "Wrapy z szarpanym indykiem i awokado",
    calories: 550, protein: 36, fats: 20, carbs: 54,
    type: "lunch",
    ingredients: [
      { item: "Tortilla pełnoziarnista", amount: "1 szt" },
      { item: "Pierś z indyka", amount: "120g" },
      { item: "Awokado", amount: "1/2 szt" },
      { item: "Pomidor", amount: "1 szt" }
    ],
    recipe: "Indyka upiecz w całości i 'poszarp' widelcem. Awokado rozgnieć na pastę. Zawiń z warzywami."
  },
  {
    name: "Kurczak w miodzie i sezamie z fasolką szparagową",
    calories: 485, protein: 33, fats: 14, carbs: 55,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "150g" },
      { item: "Miód", amount: "1 łyżka" },
      { item: "Sos sojowy", amount: "1 łyżka" },
      { item: "Fasolka szparagowa", amount: "200g" },
      { item: "Ryż brązowy (suchy)", amount: "40g" }
    ],
    recipe: "Kurczaka podsmaż w glazurze z miodu i sosu sojowego. Podawaj z ugotowaną fasolką i ryżem."
  }
];

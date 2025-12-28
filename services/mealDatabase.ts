
import { Meal } from "../types";

export const MEAL_DATABASE: Meal[] = [
  // --- KANAPKI I ŚNIADANIA NA ZIMNO (breakfast, snack1, dinner) ---
  {
    name: "Kanapki z szynką, serem i ogórkiem kiszonym",
    calories: 360, protein: 18, fats: 12, carbs: 45,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni pełnoziarnisty", amount: "2 kromki" },
      { item: "Masło", amount: "1 łyżeczka" },
      { item: "Szynka drobiowa", amount: "2 plastry" },
      { item: "Ser żółty gouda", amount: "1 plaster" },
      { item: "Ogórek kiszony", amount: "1 szt" }
    ],
    recipe: "Chleb posmaruj masłem. Ułóż szynkę, ser i pokrojonego w plastry ogórka."
  },
  {
    name: "Kanapki z wędzonym łososiem i twarożkiem",
    calories: 380, protein: 22, fats: 14, carbs: 40,
    type: "breakfast",
    ingredients: [
      { item: "Chleb grahams", amount: "2 kromki" },
      { item: "Twarożek kanapkowy lekki", amount: "2 łyżki" },
      { item: "Łosoś wędzony", amount: "50g" },
      { item: "Koper świeży", amount: "odrobina" },
      { item: "Sok z cytryny", amount: "kilka kropel" }
    ],
    recipe: "Chleb posmaruj twarożkiem, połóż łososia, skrop cytryną i posyp koperkiem."
  },
  {
    name: "Grzanki z awokado i jajkiem sadzonym",
    calories: 420, protein: 16, fats: 22, carbs: 38,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Awokado", amount: "1/2 szt" },
      { item: "Jajko", amount: "1 szt" },
      { item: "Oliwa z oliwek", amount: "1 łyżeczka" },
      { item: "Płatki chili", amount: "szczypta" }
    ],
    recipe: "Awokado rozgnieć na chlebie. Na patelni przygotuj jajko sadzone na oliwie i połóż na wierzch."
  },
  {
    name: "Kanapki z mozzarellą i pomidorem (Caprese)",
    calories: 390, protein: 18, fats: 16, carbs: 44,
    type: "breakfast",
    ingredients: [
      { item: "Bułka grahamka", amount: "1 szt" },
      { item: "Mozzarella light", amount: "1/2 kulki" },
      { item: "Pomidor", amount: "1/2 szt" },
      { item: "Pesto bazyliowe", amount: "1 łyżeczka" },
      { item: "Świeża bazylia", amount: "kilka liści" }
    ],
    recipe: "Bułkę przekrój, posmaruj pesto. Ułóż plastry sera i pomidora, udekoruj bazylią."
  },
  {
    name: "Kanapki z pastą z makreli i cebulką",
    calories: 410, protein: 20, fats: 18, carbs: 42,
    type: "breakfast",
    ingredients: [
      { item: "Chleb pełnoziarnisty", amount: "2 kromki" },
      { item: "Makrela wędzona", amount: "60g" },
      { item: "Twaróg chudy", amount: "30g" },
      { item: "Cebula biała", amount: "1/4 szt" },
      { item: "Koncentrat pomidorowy", amount: "1 łyżeczka" }
    ],
    recipe: "Makrelę wymieszaj z twarogiem, posiekaną cebulą i koncentratem. Nałóż na pieczywo."
  },
  {
    name: "Kanapki z serem camembert i żurawiną",
    calories: 405, protein: 15, fats: 17, carbs: 48,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Ser Camembert", amount: "40g" },
      { item: "Żurawina do mięs/serów", amount: "2 łyżeczki" },
      { item: "Orzechy włoskie", amount: "2 szt" },
      { item: "Rukola", amount: "garść" }
    ],
    recipe: "Na chlebie ułóż rukolę, plastry sera, dodaj żurawinę i pokruszone orzechy."
  },
  {
    name: "Kanapki z hummusem i suszonymi pomidorami",
    calories: 375, protein: 12, fats: 15, carbs: 46,
    type: "breakfast",
    ingredients: [
      { item: "Chleb wieloziarnisty", amount: "2 kromki" },
      { item: "Hummus", amount: "3 łyżki" },
      { item: "Suszone pomidory", amount: "3 szt" },
      { item: "Kiełki", amount: "garść" }
    ],
    recipe: "Chleb posmaruj hummusem. Połóż suszone pomidory i posyp kiełkami."
  },
  {
    name: "Kanapki z domową pastą jajeczną",
    calories: 390, protein: 16, fats: 18, carbs: 42,
    type: "breakfast",
    ingredients: [
      { item: "Chleb grahams", amount: "2 kromki" },
      { item: "Jajko ugotowane", amount: "1 szt" },
      { item: "Majonez lekki", amount: "1 łyżeczka" },
      { item: "Szczypiorek", amount: "1 łyżka" }
    ],
    recipe: "Jajko rozgnieć, wymieszaj z majonezem i szczypiorkiem. Nałóż na pieczywo."
  },

  // --- OBIADY (lunch) ---
  {
    name: "Spaghetti Bolognese z chudym indykiem",
    calories: 540, protein: 32, fats: 14, carbs: 65,
    type: "lunch",
    ingredients: [
      { item: "Makaron spaghetti pełnoziarnisty", amount: "70g" },
      { item: "Mięso mielone z indyka", amount: "120g" },
      { item: "Passata pomidorowa", amount: "150ml" },
      { item: "Cebula i czosnek", amount: "1 szt" },
      { item: "Parmezan", amount: "1 łyżka" }
    ],
    recipe: "Mięso podsmaż z cebulą i czosnkiem. Dodaj passatę i duś 10 min. Podawaj z ugotowanym makaronem i parmezanem."
  },
  {
    name: "Leczo warzywne z chudą kiełbasą i kaszą",
    calories: 490, protein: 25, fats: 18, carbs: 55,
    type: "lunch",
    ingredients: [
      { item: "Cukinia", amount: "1/2 szt" },
      { item: "Papryka kolorowa", amount: "1 szt" },
      { item: "Kiełbasa drobiowa chuda", amount: "80g" },
      { item: "Kasza pęczak", amount: "50g" },
      { item: "Przecier pomidorowy", amount: "2 łyżki" }
    ],
    recipe: "Warzywa i kiełbasę pokrój, duś w garnku z przecierem i przyprawami. Podawaj z ugotowaną kaszą."
  },
  {
    name: "Gulasz wołowy z kaszą gryczaną i ogórkiem",
    calories: 560, protein: 38, fats: 16, carbs: 60,
    type: "lunch",
    ingredients: [
      { item: "Chuda wołowina", amount: "130g" },
      { item: "Kasza gryczana", amount: "50g" },
      { item: "Ogórek kiszony", amount: "2 szt" },
      { item: "Marchewka", amount: "1 szt" }
    ],
    recipe: "Wołowinę duś z marchewką do miękkości. Podawaj z ugotowaną kaszą i ogórkiem kiszonym."
  },
  {
    name: "Kurczak po chińsku z warzywami i ryżem",
    calories: 520, protein: 34, fats: 10, carbs: 70,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "120g" },
      { item: "Mieszanka chińska warzyw", amount: "200g" },
      { item: "Ryż basmati", amount: "60g" },
      { item: "Sos sojowy", amount: "2 łyżki" },
      { item: "Imbir świeży", amount: "kawałek" }
    ],
    recipe: "Kurczaka i warzywa smaż krótko na dużym ogniu z imbirem i sosem sojowym. Podawaj z ryżem."
  },
  {
    name: "Wietnamska sałatka Bun Cha z kurczakiem",
    calories: 480, protein: 30, fats: 12, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Makaron ryżowy", amount: "50g" },
      { item: "Grillowana pierś z kurczaka", amount: "120g" },
      { item: "Marchewka i ogórek", amount: "1 szt" },
      { item: "Orzeszki ziemne", amount: "1 łyżeczka" },
      { item: "Sos rybny i limonka", amount: "do smaku" }
    ],
    recipe: "Makaron namocz, kurczaka grilluj. Wymieszaj z warzywami, orzeszkami i sosem na bazie limonki."
  },
  {
    name: "Fit Burger Wołowy z frytkami z batatów",
    calories: 580, protein: 38, fats: 20, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Bułka pełnoziarnista", amount: "1 szt" },
      { item: "Wołowina mielona chuda", amount: "150g" },
      { item: "Bataty", amount: "150g" },
      { item: "Sałata i pomidor", amount: "do smaku" }
    ],
    recipe: "Burger grilluj, bataty upiecz jako frytki. Złóż z warzywami w bułce."
  },
  {
    name: "Fit Pizza z szynką i rukolą",
    calories: 540, protein: 32, fats: 16, carbs: 68,
    type: "lunch",
    ingredients: [
      { item: "Spód pełnoziarnisty", amount: "1/2 szt" },
      { item: "Mozzarella light", amount: "50g" },
      { item: "Szynka drobiowa", amount: "3 plastry" },
      { item: "Rukola", amount: "garść" }
    ],
    recipe: "Spód posmaruj pomidorami, dodaj ser i szynkę. Piecz 10 min. Posyp rukolą."
  },
  {
    name: "Kotlety mielone z indyka, ziemniaki i mizeria",
    calories: 510, protein: 35, fats: 15, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Ziemniaki", amount: "200g" },
      { item: "Mielone z indyka (pieczone)", amount: "120g" },
      { item: "Ogórek świeży", amount: "1 szt" },
      { item: "Jogurt naturalny", amount: "2 łyżki" }
    ],
    recipe: "Kotlety upiecz w piekarniku. Ziemniaki ugotuj. Ogórka pokrój i wymieszaj z jogurtem."
  },
  {
    name: "Schab pieczony w ziołach z ziemniakami",
    calories: 530, protein: 36, fats: 14, carbs: 60,
    type: "lunch",
    ingredients: [
      { item: "Schab pieczony", amount: "130g" },
      { item: "Ziemniaki", amount: "200g" },
      { item: "Buraczki ugotowane", amount: "100g" }
    ],
    recipe: "Schab upiecz z majerankiem. Podawaj z ugotowanymi ziemniakami i buraczkami."
  },
  {
    name: "Stir-fry z kurczakiem i orzechami nerkowca",
    calories: 550, protein: 35, fats: 18, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Ryż jaśminowy", amount: "50g" },
      { item: "Kurczak", amount: "120g" },
      { item: "Brokuł", amount: "1/2 szt" },
      { item: "Orzechy nerkowca", amount: "15g" }
    ],
    recipe: "Kurczaka i brokuły smaż szybko na patelni. Na koniec dodaj orzechy i sos sojowy. Podawaj z ryżem."
  },

  // --- PODWIECZORKI I PRZEKĄSKI (snack2) ---
  {
    name: "Skyr z borówkami i migdałami",
    calories: 230, protein: 22, fats: 6, carbs: 24,
    type: "snack2",
    ingredients: [
      { item: "Skyr naturalny", amount: "150g" },
      { item: "Borówki", amount: "garść" },
      { item: "Migdały", amount: "10 szt" }
    ],
    recipe: "Owoce i posiekane migdały dodaj do jogurtu."
  },
  {
    name: "Sałatka owocowa z orzechami",
    calories: 210, protein: 4, fats: 8, carbs: 32,
    type: "snack2",
    ingredients: [
      { item: "Jabłko", amount: "1/2 szt" },
      { item: "Pomarańcza", amount: "1/2 szt" },
      { item: "Orzechy włoskie", amount: "3 szt" }
    ],
    recipe: "Owoce pokrój w kostkę, wymieszaj i posyp orzechami."
  },
  {
    name: "Serek wiejski z rzodkiewką",
    calories: 190, protein: 18, fats: 6, carbs: 12,
    type: "snack2",
    ingredients: [
      { item: "Serek wiejski lekki", amount: "150g" },
      { item: "Rzodkiewka", amount: "3 szt" },
      { item: "Szczypiorek", amount: "1 łyżka" }
    ],
    recipe: "Wymieszaj składniki w miseczce."
  },
  {
    name: "Smoothie truskawkowo-bananowe",
    calories: 220, protein: 8, fats: 3, carbs: 38,
    type: "snack2",
    ingredients: [
      { item: "Maślanka", amount: "200ml" },
      { item: "Truskawki", amount: "100g" },
      { item: "Banan", amount: "1/2 szt" }
    ],
    recipe: "Zblenduj wszystkie składniki."
  },
  {
    name: "Banan z masłem orzechowym",
    calories: 260, protein: 6, fats: 12, carbs: 34,
    type: "snack2",
    ingredients: [
      { item: "Banan", amount: "1 szt" },
      { item: "Masło orzechowe 100%", amount: "1 łyżka" }
    ],
    recipe: "Banana pokrój w plastry i posmaruj masłem orzechowym."
  },
  {
    name: "Marchewki w słupkach z hummusem",
    calories: 180, protein: 6, fats: 10, carbs: 18,
    type: "snack2",
    ingredients: [
      { item: "Marchewka", amount: "2 szt" },
      { item: "Hummus", amount: "2 łyżki" }
    ],
    recipe: "Marchewkę pokrój w słupki i maczaj w hummusie."
  },
  {
    name: "Pudding chia z malinami",
    calories: 220, protein: 8, fats: 10, carbs: 28,
    type: "snack2",
    ingredients: [
      { item: "Nasiona chia", amount: "2 łyżki" },
      { item: "Napój migdałowy", amount: "150ml" },
      { item: "Maliny", amount: "garść" }
    ],
    recipe: "Chia zalej napojem, odstaw na noc. Podawaj z malinami."
  },
  {
    name: "Kefir z otrębami i cynamonem",
    calories: 160, protein: 9, fats: 4, carbs: 22,
    type: "snack2",
    ingredients: [
      { item: "Kefir", amount: "250ml" },
      { item: "Otręby owsiane", amount: "2 łyżki" },
      { item: "Cynamon", amount: "szczypta" }
    ],
    recipe: "Wymieszaj otręby z kefirem i posyp cynamonem."
  },
  {
    name: "Wafle ryżowe z twarożkiem",
    calories: 195, protein: 12, fats: 3, carbs: 30,
    type: "snack2",
    ingredients: [
      { item: "Wafle ryżowe", amount: "2 szt" },
      { item: "Twaróg chudy", amount: "50g" },
      { item: "Dżem bez cukru", amount: "2 łyżeczki" }
    ],
    recipe: "Wafle posmaruj twarożkiem i dodaj dżem."
  },
  {
    name: "Garść orzechów nerkowca",
    calories: 245, protein: 5, fats: 16, carbs: 22,
    type: "snack2",
    ingredients: [
      { item: "Orzechy nerkowca", amount: "20g" },
      { item: "Morele suszone", amount: "3 szt" }
    ],
    recipe: "Szybka przekąska w trasie."
  }
];

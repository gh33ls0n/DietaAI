
import { Meal } from "../types";

export const MEAL_DATABASE: Meal[] = [
  // --- OBECNE POSIŁKI (NIE KASOWAĆ!) ---
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
    name: "Szakszuka z pomidorami i cebulką",
    calories: 320, protein: 18, fats: 20, carbs: 15,
    type: "breakfast",
    ingredients: [
      { item: "Jajko (rozmiar L)", amount: "2 szt" },
      { item: "Pomidor", amount: "200g" },
      { item: "Cebula biała", amount: "30g" },
      { item: "Oliwa z oliwek", amount: "1 łyżeczka" },
      { item: "Czosnek", amount: "1 ząbek" }
    ],
    recipe: "Na patelni zeszklij cebulę i czosnek. Dodaj pokrojone pomidory i smaż aż zmiękną. Wbij jajka, przykryj patelnię i czekaj, aż białka się zetną, a żółtka pozostaną płynne."
  },
  {
    name: "Fit Placuszki z jabłkiem i cynamonem",
    calories: 380, protein: 15, fats: 10, carbs: 55,
    type: "breakfast",
    ingredients: [
      { item: "Jabłko", amount: "150g" },
      { item: "Jajko (rozmiar L)", amount: "1 szt" },
      { item: "Skyr naturalny", amount: "50g" },
      { item: "Mąka pełnoziarnista", amount: "3 łyżki" },
      { item: "Cynamon", amount: "szczypta" }
    ],
    recipe: "Jabłko zetrzyj na tarce o grubych oczkach. Wymieszaj z jajkiem, skyrem i mąką. Smaż małe placuszki na suchej patelni teflonowej do zrumienienia."
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
    name: "Pasta jajeczna ze szczypiorkiem",
    calories: 340, protein: 19, fats: 22, carbs: 14,
    type: "breakfast",
    ingredients: [
      { item: "Jajko (rozmiar L)", amount: "2 szt" },
      { item: "Jogurt naturalny", amount: "1 łyżka" },
      { item: "Szczypiorek", amount: "2 łyżki" },
      { item: "Musztarda", amount: "1 łyżeczka" }
    ],
    recipe: "Jajka ugotuj na twardo, posiekaj drobno lub rozgnieć widelcem. Wymieszaj z jogurtem, musztardą i posiekanym szczypiorkiem. Podawaj z pieczywem żytnim."
  },
  {
    name: "Grzanki z awokado i jajkiem sadzonym",
    calories: 420, protein: 16, fats: 22, carbs: 38,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Awokado", amount: "1/2 szt" },
      { item: "Jajko", amount: "1 szt" },
      { item: "Oliwa z oliwek", amount: "1 łyżeczka" }
    ],
    recipe: "Awokado rozgnieć na chlebie. Na patelni przygotuj jajko sadzone i połóż na wierzch."
  },
  {
    name: "Sałatka z tuńczykiem i jajkiem",
    calories: 310, protein: 28, fats: 12, carbs: 18,
    type: "dinner",
    ingredients: [
      { item: "Tuńczyk (puszka)", amount: "100g" },
      { item: "Jajko (rozmiar L)", amount: "1 szt" },
      { item: "Kukurydza konserwowa", amount: "2 łyżki" },
      { item: "Ogórek kiszony", amount: "2 szt" },
      { item: "Mix sałat", amount: "garść" }
    ],
    recipe: "Jajko ugotuj na twardo i pokrój w ćwiartki. Tuńczyka odsącz, ogórki pokrój w kostkę. Składniki wymieszaj z sałatą, dopraw pieprzem i opcjonalnie odrobiną jogurtu."
  },
  {
    name: "Pulpety z indyka w sosie koperkowym",
    calories: 520, protein: 36, fats: 14, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Pierś z indyka", amount: "150g" },
      { item: "Koper świeży", amount: "1/2 pęczka" },
      { item: "Ziemniaki", amount: "200g" },
      { item: "Mąka pełnoziarnista", amount: "1 łyżka" },
      { item: "Jogurt naturalny", amount: "2 łyżki" }
    ],
    recipe: "Mięso zmiel, uformuj pulpety i gotuj w bulionie warzywnym. Wyjmij mięso, do wywaru dodaj posiekany koper i jogurt wymieszany z mąką. Zagotuj. Podawaj z ziemniakami."
  },
  {
    name: "Kurczak w sosie szpinakowym z makaronem",
    calories: 540, protein: 38, fats: 16, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "120g" },
      { item: "Szpinak świeży", amount: "100g" },
      { item: "Makaron pełnoziarnisty", amount: "70g" },
      { item: "Czosnek", amount: "1 ząbek" },
      { item: "Twarożek kanapkowy lekki", amount: "30g" }
    ],
    recipe: "Kurczaka pokrój w kostkę i podsmaż na oliwie z czosnkiem. Dodaj szpinak i duś aż zwiędnie. Dodaj twarożek dla kremowej konsystencji. Wymieszaj z ugotowanym makaronem."
  },
  {
    name: "Schab pieczony z rozmarynem i warzywami",
    calories: 490, protein: 35, fats: 15, carbs: 52,
    type: "lunch",
    ingredients: [
      { item: "Schab bez kości", amount: "130g" },
      { item: "Marchew", amount: "100g" },
      { item: "Ziemniaki", amount: "150g" },
      { item: "Oliwa z oliwek", amount: "1 łyżka" }
    ],
    recipe: "Mięso natrzyj rozmarynem i czosnkiem. Warzywa pokrój w słupki. Wszystko umieść w naczyniu żaroodpornym, skrop oliwą i piecz ok. 40 minut w 180 stopniach."
  },
  {
    name: "Pieczona dorada z cytryną i pomidorkami",
    calories: 460, protein: 32, fats: 18, carbs: 42,
    type: "lunch",
    ingredients: [
      { item: "Dorada (świeża)", amount: "150g" },
      { item: "Pomidorki koktajlowe", amount: "100g" },
      { item: "Ziemniaki", amount: "150g" },
      { item: "Cytryna", amount: "3 plastry" }
    ],
    recipe: "Rybę oczyść, do środka włóż cytrynę. Ułóż w formie z ziemniakami i pomidorkami. Piecz w 200 stopniach przez 20-25 minut."
  },
  {
    name: "Leczo z cukinii i indyka",
    calories: 480, protein: 30, fats: 12, carbs: 55,
    type: "lunch",
    ingredients: [
      { item: "Pierś z indyka", amount: "120g" },
      { item: "Cukinia", amount: "200g" },
      { item: "Papryka czerwona", amount: "100g" },
      { item: "Passata pomidorowa", amount: "150ml" },
      { item: "Kasza gryczana (sucha)", amount: "50g" }
    ],
    recipe: "Mięso i warzywa pokrój w kostkę. Podsmaż mięso, dodaj paprykę i cukinię. Zalej passatą i duś do miękkości. Podawaj z ugotowaną kaszą."
  },
  {
    name: "Spaghetti Bolognese z indykiem",
    calories: 540, protein: 32, fats: 14, carbs: 65,
    type: "lunch",
    ingredients: [
      { item: "Makaron spaghetti pełnoziarnisty", amount: "70g" },
      { item: "Mięso mielone z indyka", amount: "120g" },
      { item: "Passata pomidorowa", amount: "150ml" }
    ],
    recipe: "Mięso podsmaż, dodaj passatę. Duś 10 min. Wymieszaj z ugotowanym makaronem."
  },
  {
    name: "Kotlety mielone z indyka z purée ziemniaczanym",
    calories: 515, protein: 34, fats: 15, carbs: 56,
    type: "lunch",
    ingredients: [
      { item: "Pierś z indyka", amount: "120g" },
      { item: "Ziemniaki", amount: "200g" },
      { item: "Buraczki tarte", amount: "100g" }
    ],
    recipe: "Mięso zmiel z cebulą, uformuj kotlety i upiecz w piekarniku. Ziemniaki ugnieć na purée. Podawaj z buraczkami."
  },
  {
    name: "Skyr z borówkami i migdałami",
    calories: 230, protein: 22, fats: 6, carbs: 24,
    type: "snack2",
    ingredients: [
      { item: "Skyr naturalny", amount: "150g" },
      { item: "Borówki", amount: "garść" },
      { item: "Migdały", amount: "10 szt" }
    ],
    recipe: "Składniki wymieszaj w miseczce."
  },
  {
    name: "Budyń jaglany z malinami",
    calories: 240, protein: 8, fats: 5, carbs: 42,
    type: "snack2",
    ingredients: [
      { item: "Kasza jaglana", amount: "40g" },
      { item: "Mleko 2%", amount: "100ml" },
      { item: "Maliny", amount: "50g" },
      { item: "Banan", amount: "1/2 szt" }
    ],
    recipe: "Kaszę ugotuj na miękko. Zblenduj z mlekiem i bananem na gładki krem. Podawaj z malinami."
  },
  {
    name: "Serek wiejski z rzodkiewką i szczypiorkiem",
    calories: 190, protein: 18, fats: 6, carbs: 12,
    type: "snack2",
    ingredients: [
      { item: "Serek wiejski lekki", amount: "150g" },
      { item: "Rzodkiewka", amount: "3 szt" },
      { item: "Szczypiorek", amount: "1 łyżka" }
    ],
    recipe: "Wymieszaj składniki w miseczce."
  },

  // --- NOWE POSIŁKI (DODANE) ---
  {
    name: "Fit Kluski leniwe z jogurtem i cynamonem",
    calories: 410, protein: 25, fats: 8, carbs: 55,
    type: "breakfast",
    ingredients: [
      { item: "Twaróg chudy", amount: "200g" },
      { item: "Jajko (rozmiar L)", amount: "1 szt" },
      { item: "Mąka pełnoziarnista", amount: "4 łyżki" },
      { item: "Jogurt naturalny", amount: "2 łyżki" },
      { item: "Cynamon", amount: "szczypta" }
    ],
    recipe: "Twaróg rozgnieć, wymieszaj z jajkiem i mąką na jednolitą masę. Uformuj wałeczki, pokrój na ukos. Gotuj w osolonej wodzie 1-2 min od wypłynięcia. Podawaj z jogurtem i cynamonem."
  },
  {
    name: "Ryba po grecku w wersji fit",
    calories: 440, protein: 32, fats: 10, carbs: 48,
    type: "lunch",
    ingredients: [
      { item: "Dorsz świeży", amount: "150g" },
      { item: "Marchew", amount: "100g" },
      { item: "Pietruszka (korzeń)", amount: "50g" },
      { item: "Seler (korzeń)", amount: "50g" },
      { item: "Passata pomidorowa", amount: "100ml" }
    ],
    recipe: "Warzywa zetrzyj na tarce i podduś z wodą i przyprawami. Dodaj passatę. Rybę upiecz w piekarniku w folii. Przykryj rybę gotową pierzynką warzywną."
  },
  {
    name: "Gołąbki bez zawijania z indykiem",
    calories: 490, protein: 34, fats: 12, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z indyka", amount: "120g" },
      { item: "Kapusta pekińska", amount: "150g" },
      { item: "Ryż brązowy (suchy)", amount: "50g" },
      { item: "Passata pomidorowa", amount: "100ml" }
    ],
    recipe: "Ryż ugotuj. Kapustę posiekaj i sparz. Wymieszaj mięso, ryż i kapustę. Uformuj owalne kotlety. Piecz w naczyniu żaroodpornym zalane passatą przez 40 min w 180 stopniach."
  },
  {
    name: "Gulasz z indyka z kolorową papryką",
    calories: 510, protein: 35, fats: 14, carbs: 60,
    type: "lunch",
    ingredients: [
      { item: "Pierś z indyka", amount: "150g" },
      { item: "Papryka czerwona", amount: "100g" },
      { item: "Cebula biała", amount: "50g" },
      { item: "Kasza gryczana (sucha)", amount: "60g" },
      { item: "Oliwa z oliwek", amount: "1 łyżeczka" }
    ],
    recipe: "Indyka pokrój w kostkę, podsmaż na oliwie. Dodaj cebulę i paprykę. Podlej wodą i duś do miękkości. Podawaj z ugotowaną kaszą gryczaną."
  },
  {
    name: "Zapiekanka makaronowa z brokułem i kurczakiem",
    calories: 530, protein: 38, fats: 15, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "120g" },
      { item: "Makaron pełnoziarnisty", amount: "70g" },
      { item: "Brokuły", amount: "150g" },
      { item: "Jogurt naturalny", amount: "3 łyżki" },
      { item: "Czosnek", amount: "1 ząbek" }
    ],
    recipe: "Makaron i brokuł ugotuj al dente. Kurczaka podsmaż. Wszystko wymieszaj z sosem z jogurtu i czosnku. Zapiekaj 15 min w 180 stopniach."
  },
  {
    name: "Sałatka jarzynowa fit z sosem jogurtowym",
    calories: 280, protein: 12, fats: 8, carbs: 38,
    type: "dinner",
    ingredients: [
      { item: "Marchew", amount: "100g" },
      { item: "Pietruszka (korzeń)", amount: "50g" },
      { item: "Ziemniaki", amount: "100g" },
      { item: "Groszek konserwowy", amount: "2 łyżki" },
      { item: "Jogurt naturalny", amount: "2 łyżki" },
      { item: "Musztarda", amount: "1 łyżeczka" }
    ],
    recipe: "Ugotowane warzywa pokrój w kostkę. Wymieszaj z groszkiem, jogurtem i musztardą. Dopraw solą i pieprzem."
  }
];

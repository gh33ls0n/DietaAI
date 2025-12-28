
import { Meal } from "../types";

export const MEAL_DATABASE: Meal[] = [
  // --- KANAPKI RESPO - RYBNE ---
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
    recipe: "Tuńczyka wymieszaj z kukurydzą i jogurtem. Dopraw pieprzem i nałóż na chleb."
  },
  {
    name: "Kanapka z wędzonym pstrągiem i chrzanem",
    calories: 330, protein: 25, fats: 9, carbs: 38,
    type: "dinner",
    ingredients: [
      { item: "Chleb graham", amount: "2 kromki" },
      { item: "Pstrąg wędzony", amount: "60g" },
      { item: "Chrzan", amount: "1 łyżeczka" },
      { item: "Ogórek", amount: "1/2 szt" }
    ],
    recipe: "Pieczywo posmaruj cienko chrzanem, połóż pstrąga i plastry ogórka."
  },
  {
    name: "Pasta z makreli wędzonej z twarogiem",
    calories: 390, protein: 32, fats: 18, carbs: 34,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Makrela wędzona", amount: "50g" },
      { item: "Twaróg chudy", amount: "50g" },
      { item: "Szczypiorek", amount: "1 łyżka" }
    ],
    recipe: "Makrelę oddziel od ości, wymieszaj z twarogiem i szczypiorkiem. Podawaj na chlebie."
  },
  {
    name: "Kanapka z łososiem wędzonym i serkiem ricotta",
    calories: 360, protein: 24, fats: 14, carbs: 36,
    type: "breakfast",
    ingredients: [
      { item: "Bułka grahamka", amount: "1 szt" },
      { item: "Ser Ricotta", amount: "2 łyżki" },
      { item: "Łosoś wędzony", amount: "40g" },
      { item: "Rukola", amount: "garść" }
    ],
    recipe: "Bułkę posmaruj ricottą, połóż rukolę i plastry łososia."
  },

  // --- KANAPKI RESPO - WEGETARIAŃSKIE I PASTY ---
  {
    name: "Kanapka z pastą z białej fasoli i suszonymi pomidorami",
    calories: 385, protein: 18, fats: 12, carbs: 54,
    type: "dinner",
    ingredients: [
      { item: "Chleb żytni pełnoziarnisty", amount: "2 kromki" },
      { item: "Fasola biała (puszka)", amount: "100g" },
      { item: "Pomidory suszone", amount: "3 szt" },
      { item: "Czosnek", amount: "1/2 ząbka" }
    ],
    recipe: "Fasolę zblenduj z suszonymi pomidorami i czosnkiem na gładką pastę."
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
    recipe: "Chleb posmaruj hummusem, połóż plastry rzodkiewki i kiełki."
  },
  {
    name: "Kanapka Caprese z zielonym pesto i mozzarellą",
    calories: 410, protein: 21, fats: 19, carbs: 42,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Ser Mozzarella Light", amount: "60g" },
      { item: "Pomidor", amount: "1 szt" },
      { item: "Pesto zielone", amount: "1 łyżeczka" }
    ],
    recipe: "Pieczywo posmaruj pesto, ułóż mozzarellę i pomidora."
  },
  {
    name: "Guacamole z jajkiem sadzonym na grzankach",
    calories: 430, protein: 18, fats: 25, carbs: 38,
    type: "breakfast",
    ingredients: [
      { item: "Chleb graham", amount: "2 kromki" },
      { item: "Awokado", amount: "1/2 szt" },
      { item: "Jajko (rozmiar L)", amount: "1 szt" }
    ],
    recipe: "Awokado rozgnieć z cytryną, posmaruj chleb. Na wierzch połóż jajko sadzone."
  },
  {
    name: "Kanapka z twarożkiem, rzodkiewką i szczypiorkiem",
    calories: 310, protein: 26, fats: 6, carbs: 40,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Twaróg chudy", amount: "120g" },
      { item: "Jogurt naturalny", amount: "2 łyżki" },
      { item: "Rzodkiewka", amount: "3 szt" }
    ],
    recipe: "Twaróg wymieszaj z jogurtem i warzywami. Nałóż na chleb."
  },
  {
    name: "Kanapka z grillowaną cukinią i fetą",
    calories: 350, protein: 16, fats: 15, carbs: 44,
    type: "dinner",
    ingredients: [
      { item: "Chleb graham", amount: "2 kromki" },
      { item: "Cukinia", amount: "100g" },
      { item: "Ser Feta Light", amount: "40g" }
    ],
    recipe: "Cukinię zgrilluj. Chleb obłóż cukinią i pokruszoną fetą."
  },

  // --- KANAPKI RESPO - MIĘSNE ---
  {
    name: "Kanapka z indykiem, miodową musztardą i sałatą",
    calories: 340, protein: 24, fats: 8, carbs: 46,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Szynka drobiowa", amount: "60g" },
      { item: "Musztarda", amount: "1 łyżeczka" },
      { item: "Miód", amount: "1/2 łyżeczki" }
    ],
    recipe: "Wymieszaj musztardę z miodem, posmaruj chleb. Ułóż wędlinę i sałatę."
  },
  {
    name: "Kanapka z pieczonym schabem i ogórkiem kiszonym",
    calories: 360, protein: 28, fats: 10, carbs: 42,
    type: "dinner",
    ingredients: [
      { item: "Chleb graham", amount: "2 kromki" },
      { item: "Schab bez kości", amount: "60g" },
      { item: "Ogórek kiszony", amount: "2 szt" }
    ],
    recipe: "Pieczony schab pokrój w cienkie plastry. Podawaj na chlebie z ogórkiem."
  },
  {
    name: "Kanapka z kurczakiem, majonezem light i kukurydzą",
    calories: 390, protein: 28, fats: 12, carbs: 45,
    type: "breakfast",
    ingredients: [
      { item: "Bułka grahamka", amount: "1 szt" },
      { item: "Pierś z kurczaka", amount: "60g" },
      { item: "Majonez Light", amount: "1 łyżeczka" },
      { item: "Kukurydza konserwowa", amount: "1 łyżka" }
    ],
    recipe: "Kurczaka upiecz i pokrój. Wymieszaj z majonezem i kukurydzą. Włóż do bułki."
  },
  {
    name: "Kanapka z polędwicą, serem i papryką",
    calories: 380, protein: 25, fats: 14, carbs: 42,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Polędwica sopocka", amount: "40g" },
      { item: "Ser żółty gouda", amount: "1 plaster" },
      { item: "Papryka czerwona", amount: "1/2 szt" }
    ],
    recipe: "Klasyczna kanapka z wędliną, serem i dużą ilością chrupiącej papryki."
  },

  // --- KANAPKI NA SŁODKO ---
  {
    name: "Kanapka z masłem orzechowym, bananem i cynamonem",
    calories: 420, protein: 12, fats: 18, carbs: 58,
    type: "breakfast",
    ingredients: [
      { item: "Chleb graham", amount: "2 kromki" },
      { item: "Masło orzechowe", amount: "1.5 łyżki" },
      { item: "Banan", amount: "1/2 szt" }
    ],
    recipe: "Chleb posmaruj masłem orzechowym, ułóż plastry banana i posyp cynamonem."
  },
  {
    name: "Kanapka z twarożkiem i dżemem niskosłodzonym",
    calories: 320, protein: 22, fats: 4, carbs: 52,
    type: "snack1",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Twaróg chudy", amount: "100g" },
      { item: "Dżem niskosłodzony", amount: "2 łyżeczki" }
    ],
    recipe: "Twaróg rozgnieć z odrobiną wody/jogurtu, posmaruj chleb i dodaj dżem."
  },
  {
    name: "Kanapka z ricottą, miodem i orzechami",
    calories: 395, protein: 12, fats: 22, carbs: 42,
    type: "breakfast",
    ingredients: [
      { item: "Chleb graham", amount: "2 kromki" },
      { item: "Ser Ricotta", amount: "2 łyżki" },
      { item: "Orzechy włoskie", amount: "20g" },
      { item: "Miód", amount: "1 łyżeczka" }
    ],
    recipe: "Ricottę nałóż na chleb, posyp posiekanymi orzechami i polej miodem."
  },

  // --- OBIADY KLASYCZNE (Ania Gotuje / Kwestia Smaku) ---
  {
    name: "Pulpety z indyka w sosie koperkowym",
    calories: 520, protein: 36, fats: 14, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Pierś z indyka", amount: "150g" },
      { item: "Ziemniaki", amount: "200g" },
      { item: "Koper świeży", amount: "1/2 pęczka" },
      { item: "Jogurt naturalny", amount: "2 łyżki" }
    ],
    recipe: "Uformuj pulpety, gotuj w wywarze. Sos zrób na bazie jogurtu i kopru. Podawaj z ziemniakami."
  },
  {
    name: "Ryba po grecku w wersji lekkiej",
    calories: 440, protein: 32, fats: 10, carbs: 48,
    type: "lunch",
    ingredients: [
      { item: "Dorsz świeży", amount: "150g" },
      { item: "Marchew", amount: "100g" },
      { item: "Pietruszka (korzeń)", amount: "50g" },
      { item: "Passata pomidorowa", amount: "100ml" }
    ],
    recipe: "Rybę upiecz. Warzywa zetrzyj i podduś z passatą. Przykryj rybę warzywami."
  },
  {
    name: "Gołąbki bez zawijania z indykiem",
    calories: 490, protein: 34, fats: 12, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z indyka", amount: "120g" },
      { item: "Kapusta pekińska", amount: "150g" },
      { item: "Ryż brązowy (suchy)", amount: "50g" }
    ],
    recipe: "Wymieszaj mięso, ugotowany ryż i posiekaną kapustę. Piecz w sosie pomidorowym."
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
    recipe: "Mięso i paprykę duś do miękkości. Podawaj z ugotowaną kaszą."
  },
  {
    name: "Schab pieczony z rozmarynem i warzywami",
    calories: 490, protein: 35, fats: 15, carbs: 52,
    type: "lunch",
    ingredients: [
      { item: "Schab bez kości", amount: "130g" },
      { item: "Ziemniaki", amount: "150g" },
      { item: "Marchew", amount: "100g" }
    ],
    recipe: "Upiecz schab z ziemniakami w naczyniu żaroodpornym."
  },
  {
    name: "Kotlety mielone z indyka z purée i buraczkami",
    calories: 515, protein: 34, fats: 15, carbs: 56,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z indyka", amount: "120g" },
      { item: "Ziemniaki", amount: "200g" },
      { item: "Burak gotowany", amount: "100g" }
    ],
    recipe: "Mielone upiecz w piekarniku. Podawaj z purée ziemniaczanym i buraczkami."
  },

  // --- OBIADY FIT-FAST ---
  {
    name: "Burger Wołowy Fit z batatami",
    calories: 580, protein: 38, fats: 18, carbs: 65,
    type: "lunch",
    ingredients: [
      { item: "Wołowina mielona chuda", amount: "150g" },
      { item: "Bułka grahamka", amount: "1 szt" },
      { item: "Bataty", amount: "150g" }
    ],
    recipe: "Mięso grilluj. Bataty upiecz (25 min, 200st). Złóż burgera z dużą ilością warzyw."
  },
  {
    name: "Pizza Fit na cienkim cieście pełnoziarnistym",
    calories: 590, protein: 35, fats: 16, carbs: 75,
    type: "lunch",
    ingredients: [
      { item: "Mąka pełnoziarnista", amount: "80g" },
      { item: "Ser Mozzarella Light", amount: "60g" },
      { item: "Passata pomidorowa", amount: "50ml" },
      { item: "Szynka drobiowa", amount: "3 plastry" }
    ],
    recipe: "Zagnieć ciasto (mąka + woda + drożdże/proszek). Piecz z dodatkami 10 min w 220st."
  },

  // --- PODWIECZORKI (snack2) ---
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
      { item: "Płatki owsiane", amount: "40g" },
      { item: "Jogurt naturalny", amount: "100g" },
      { item: "Truskawki", amount: "50g" }
    ],
    recipe: "Płatki zalej wrzątkiem, po napęcznieniu wymieszaj z jogurtem i owocami."
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
  {
    name: "Bananowe placuszki (2 składniki)",
    calories: 260, protein: 12, fats: 10, carbs: 32,
    type: "snack2",
    ingredients: [
      { item: "Banan", amount: "1 szt" },
      { item: "Jajko (rozmiar L)", amount: "1 szt" }
    ],
    recipe: "Rozgnieć banana, wymieszaj z jajkiem. Smaż małe placuszki na suchej patelni."
  },
  {
    name: "Marchewka w słupkach z hummusem",
    calories: 210, protein: 7, fats: 11, carbs: 22,
    type: "snack2",
    ingredients: [
      { item: "Marchew", amount: "150g" },
      { item: "Hummus", amount: "3 łyżki" }
    ],
    recipe: "Pokrój marchewkę, podawaj z hummusem."
  },
  {
    name: "Garść orzechów włoskich i jabłko",
    calories: 250, protein: 4, fats: 18, carbs: 22,
    type: "snack2",
    ingredients: [
      { item: "Orzechy włoskie", amount: "30g" },
      { item: "Jabłko", amount: "1 szt" }
    ],
    recipe: "Chrup jabłko zagryzając orzechami."
  }
];

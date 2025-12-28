
import { Meal } from "../types";

export const MEAL_DATABASE: Meal[] = [
  // --- KANAPKI I ŚNIADANIA (breakfast, snack1, dinner) ---
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
    recipe: "Na patelni zeszklij cebulę i czosnek. Dodaj pomidory, smaż aż zmiękną, wbij jajka i duś pod przykryciem."
  },
  {
    name: "Fit Placuszki z jabłkiem i cynamonem",
    calories: 380, protein: 15, fats: 10, carbs: 55,
    type: "breakfast",
    ingredients: [
      { item: "Jabłko", amount: "150g" },
      { item: "Jajko (rozmiar L)", amount: "1 szt" },
      { item: "Skyr naturalny", amount: "50g" },
      { item: "Mąka pełnoziarnista", amount: "3 łyżki" }
    ],
    recipe: "Jabłko zetrzyj, wymieszaj z jajkiem, skyrem i mąką. Smaż na suchej patelni."
  },
  {
    name: "Pasta jajeczna ze szczypiorkiem",
    calories: 340, protein: 19, fats: 22, carbs: 14,
    type: "breakfast",
    ingredients: [
      { item: "Jajko (rozmiar L)", amount: "2 szt" },
      { item: "Jogurt naturalny", amount: "1 łyżka" },
      { item: "Szczypiorek", amount: "2 łyżki" }
    ],
    recipe: "Jajka ugotuj, posiekaj i wymieszaj z jogurtem oraz szczypiorkiem. Podawaj z chlebem żytnim."
  },
  {
    name: "Grzanki z awokado i jajkiem sadzonym",
    calories: 420, protein: 16, fats: 22, carbs: 38,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Awokado", amount: "1/2 szt" },
      { item: "Jajko", amount: "1 szt" }
    ],
    recipe: "Awokado rozgnieć na chlebie, połóż usmażone jajko."
  },
  {
    name: "Fit Kluski leniwe z jogurtem",
    calories: 410, protein: 25, fats: 8, carbs: 55,
    type: "breakfast",
    ingredients: [
      { item: "Twaróg chudy", amount: "200g" },
      { item: "Jajko (rozmiar L)", amount: "1 szt" },
      { item: "Mąka pełnoziarnista", amount: "4 łyżki" }
    ],
    recipe: "Zagnieć twaróg z jajkiem i mąką. Gotuj 2 min od wypłynięcia."
  },

  // --- NOWOŚCI RESPO (Śniadania / Kolacje) ---
  {
    name: "Kanapka z hummusem i pieczoną papryką",
    calories: 390, protein: 14, fats: 16, carbs: 48,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni pełnoziarnisty", amount: "2 kromki" },
      { item: "Hummus", amount: "3 łyżki" },
      { item: "Papryka czerwona", amount: "100g" },
      { item: "Rukola", amount: "garść" }
    ],
    recipe: "Paprykę upiecz w piekarniku (można użyć też świeżej). Chleb posmaruj hummusem, połóż rukolę i paprykę."
  },
  {
    name: "Kanapka Caprese Fit",
    calories: 370, protein: 22, fats: 14, carbs: 42,
    type: "dinner",
    ingredients: [
      { item: "Chleb graham", amount: "2 kromki" },
      { item: "Ser Mozzarella Light", amount: "60g" },
      { item: "Pomidor", amount: "1 szt" },
      { item: "Bazylia świeża", amount: "kilka liści" }
    ],
    recipe: "Chleb obłóż plastrami mozzarelli i pomidora. Posyp świeżą bazylią."
  },
  {
    name: "Kanapka z wędzonym pstrągiem i ogórkiem",
    calories: 350, protein: 26, fats: 10, carbs: 38,
    type: "dinner",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Pstrąg wędzony", amount: "60g" },
      { item: "Ogórek", amount: "1/2 szt" },
      { item: "Szczypiorek", amount: "1 łyżka" }
    ],
    recipe: "Rybę rozdrobnij widelcem, ułóż na pieczywie z plastrami ogórka i szczypiorkiem."
  },
  {
    name: "Kanapka na słodko z masłem orzechowym i bananem",
    calories: 410, protein: 12, fats: 18, carbs: 54,
    type: "breakfast",
    ingredients: [
      { item: "Chleb graham", amount: "2 kromki" },
      { item: "Masło orzechowe", amount: "1.5 łyżki" },
      { item: "Banan", amount: "1/2 szt" }
    ],
    recipe: "Pieczywo posmaruj masłem orzechowym, ułóż plastry banana."
  },
  {
    name: "Kanapka z jajkiem sadzonym i szpinakiem",
    calories: 380, protein: 18, fats: 16, carbs: 40,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Jajko (rozmiar L)", amount: "1 szt" },
      { item: "Szpinak świeży", amount: "garść" },
      { item: "Oliwa z oliwek", amount: "1 łyżeczka" }
    ],
    recipe: "Szpinak podduś na oliwie z czosnkiem. Jajko usmaż sadzone. Nałóż szpinak i jajko na chleb."
  },
  {
    name: "Twarożek z rzodkiewką i szczypiorkiem (Respo)",
    calories: 320, protein: 24, fats: 8, carbs: 36,
    type: "dinner",
    ingredients: [
      { item: "Twaróg chudy", amount: "150g" },
      { item: "Jogurt naturalny", amount: "2 łyżki" },
      { item: "Rzodkiewka", amount: "4 szt" },
      { item: "Szczypiorek", amount: "2 łyżki" },
      { item: "Chleb graham", amount: "1 kromka" }
    ],
    recipe: "Twaróg wymieszaj z jogurtem, posiekaną rzodkiewką i szczypiorkiem. Zjedz z pieczywem."
  },

  // --- OBIADY (lunch) ---
  {
    name: "Burger Wołowy Fit z batatami",
    calories: 580, protein: 38, fats: 18, carbs: 65,
    type: "lunch",
    ingredients: [
      { item: "Wołowina mielona chuda", amount: "150g" },
      { item: "Bułka do burgera pełnoziarnista", amount: "1 szt" },
      { item: "Bataty", amount: "150g" },
      { item: "Sałata lodowa", amount: "2 liście" }
    ],
    recipe: "Mięso grilluj bez tłuszczu. Bataty upiecz w 200st. Złóż burgera z warzywami i ketchupem bez cukru."
  },
  {
    name: "Pizza Fit na cienkim cieście",
    calories: 590, protein: 35, fats: 16, carbs: 75,
    type: "lunch",
    ingredients: [
      { item: "Mąka pełnoziarnista", amount: "80g" },
      { item: "Ser Mozzarella Light", amount: "60g" },
      { item: "Passata pomidorowa", amount: "50ml" },
      { item: "Szynka drobiowa", amount: "3 plastry" }
    ],
    recipe: "Zrób ciasto z mąki i wody. Rozwałkuj cienko, nałóż passatę, ser i szynkę. Piecz 10 min w 220st."
  },
  {
    name: "Pulpety z indyka w sosie koperkowym",
    calories: 520, protein: 36, fats: 14, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Pierś z indyka", amount: "150g" },
      { item: "Ziemniaki", amount: "200g" },
      { item: "Koper świeży", amount: "1/2 pęczka" }
    ],
    recipe: "Uformuj pulpety, gotuj w wywarze. Dodaj jogurt i koper do sosu. Podawaj z ziemniakami."
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
    recipe: "Wymieszaj mięso, ryż i posiekaną kapustę. Uformuj kotlety i piecz w sosie pomidorowym."
  },
  {
    name: "Gulasz z indyka z papryką",
    calories: 510, protein: 35, fats: 14, carbs: 60,
    type: "lunch",
    ingredients: [
      { item: "Pierś z indyka", amount: "150g" },
      { item: "Papryka czerwona", amount: "100g" },
      { item: "Kasza gryczana (sucha)", amount: "60g" }
    ],
    recipe: "Indyka i paprykę podduś na łyżeczce oliwy. Podawaj z ugotowaną kaszą."
  },
  {
    name: "Zapiekanka z brokułem i kurczakiem",
    calories: 530, protein: 38, fats: 15, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "120g" },
      { item: "Makaron pełnoziarnisty", amount: "70g" },
      { item: "Brokuły", amount: "150g" }
    ],
    recipe: "Makaron i brokuł ugotuj. Wymieszaj z kurczakiem i jogurtem. Zapiekaj 15 min."
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
    recipe: "Mięso podsmaż z czosnkiem, dodaj passatę. Wymieszaj z makaronem."
  },
  {
    name: "Kotlety mielone z indyka z purée",
    calories: 515, protein: 34, fats: 15, carbs: 56,
    type: "lunch",
    ingredients: [
      { item: "Pierś z indyka", amount: "120g" },
      { item: "Ziemniaki", amount: "200g" },
      { item: "Buraczki tarte", amount: "100g" }
    ],
    recipe: "Uformuj kotlety i upiecz. Podawaj z purée ziemniaczanym i buraczkami."
  },
  {
    name: "Pieczona dorada z cytryną",
    calories: 460, protein: 32, fats: 18, carbs: 42,
    type: "lunch",
    ingredients: [
      { item: "Dorada (świeża)", amount: "150g" },
      { item: "Ziemniaki", amount: "150g" },
      { item: "Pomidorki koktajlowe", amount: "100g" }
    ],
    recipe: "Rybę upiecz z cytryną i ziołami. Podawaj z ziemniakami."
  },
  {
    name: "Schab pieczony z rozmarynem",
    calories: 490, protein: 35, fats: 15, carbs: 52,
    type: "lunch",
    ingredients: [
      { item: "Schab bez kości", amount: "130g" },
      { item: "Ziemniaki", amount: "150g" },
      { item: "Marchew", amount: "100g" }
    ],
    recipe: "Upiecz schab z warzywami w naczyniu żaroodpornym."
  },

  // --- PODWIECZORKI (snack2 - wszystkie 7 opcji) ---
  {
    name: "Skyr z borówkami i migdałami",
    calories: 230, protein: 22, fats: 6, carbs: 24,
    type: "snack2",
    ingredients: [
      { item: "Skyr naturalny", amount: "150g" },
      { item: "Borówki", amount: "garść" },
      { item: "Migdały", amount: "10 szt" }
    ],
    recipe: "Wymieszaj składniki w miseczce."
  },
  {
    name: "Budyń jaglany z malinami",
    calories: 240, protein: 8, fats: 5, carbs: 42,
    type: "snack2",
    ingredients: [
      { item: "Kasza jaglana", amount: "40g" },
      { item: "Mleko 2%", amount: "100ml" },
      { item: "Maliny", amount: "50g" }
    ],
    recipe: "Kaszę ugotuj, zblenduj z mlekiem i owocami."
  },
  {
    name: "Serek wiejski z rzodkiewką",
    calories: 190, protein: 18, fats: 6, carbs: 12,
    type: "snack2",
    ingredients: [
      { item: "Serek wiejski lekki", amount: "150g" },
      { item: "Rzodkiewka", amount: "3 szt" }
    ],
    recipe: "Wymieszaj rzodkiewkę z serkiem."
  },
  {
    name: "Bananowe placuszki (2 składniki)",
    calories: 260, protein: 12, fats: 10, carbs: 32,
    type: "snack2",
    ingredients: [
      { item: "Banan", amount: "1 szt" },
      { item: "Jajko (rozmiar L)", amount: "1 szt" }
    ],
    recipe: "Rozgnieć banana, wymieszaj z jajkiem, smaż na suchej patelni."
  },
  {
    name: "Marchewka w słupkach z hummusem",
    calories: 210, protein: 7, fats: 11, carbs: 22,
    type: "snack2",
    ingredients: [
      { item: "Marchew", amount: "150g" },
      { item: "Hummus", amount: "3 łyżki" }
    ],
    recipe: "Marchewkę pokrój, maczaj w hummusie."
  },
  {
    name: "Koktajl truskawkowy z owsem",
    calories: 220, protein: 10, fats: 4, carbs: 38,
    type: "snack2",
    ingredients: [
      { item: "Truskawki", amount: "100g" },
      { item: "Jogurt naturalny", amount: "150g" },
      { item: "Płatki owsiane", amount: "2 łyżki" }
    ],
    recipe: "Zblenduj wszystkie składniki."
  },
  {
    name: "Garść orzechów i jabłko",
    calories: 250, protein: 4, fats: 18, carbs: 22,
    type: "snack2",
    ingredients: [
      { item: "Orzechy włoskie", amount: "30g" },
      { item: "Jabłko", amount: "1 szt" }
    ],
    recipe: "Szybka i zdrowa przekąska."
  },

  // --- KOLACJE (dinner / extra) ---
  {
    name: "Sałatka z tuńczykiem i jajkiem",
    calories: 310, protein: 28, fats: 12, carbs: 18,
    type: "dinner",
    ingredients: [
      { item: "Tuńczyk (puszka)", amount: "100g" },
      { item: "Jajko (rozmiar L)", amount: "1 szt" },
      { item: "Mix sałat", amount: "garść" }
    ],
    recipe: "Wymieszaj składniki, dopraw sokiem z cytryny."
  },
  {
    name: "Sałatka jarzynowa fit",
    calories: 280, protein: 12, fats: 8, carbs: 38,
    type: "dinner",
    ingredients: [
      { item: "Marchew", amount: "100g" },
      { item: "Ziemniaki", amount: "100g" },
      { item: "Jogurt naturalny", amount: "2 łyżki" }
    ],
    recipe: "Warzywa ugotuj, pokrój w kostkę i wymieszaj z jogurtem."
  }
];


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
      { item: "Oliwa z oliwek", amount: "1 łyżeczka" }
    ],
    recipe: "Zeszklij cebulę, dodaj pomidory, smaż aż zmiękną. Wbij jajka i duś pod przykryciem."
  },
  {
    name: "Fit Placuszki z jabłkiem i cynamonem",
    calories: 380, protein: 15, fats: 10, carbs: 55,
    type: "breakfast",
    ingredients: [
      { item: "Jabłko", amount: "150g" },
      { item: "Jajko", amount: "1 szt" },
      { item: "Skyr naturalny", amount: "50g" },
      { item: "Mąka pełnoziarnista", amount: "3 łyżki" }
    ],
    recipe: "Jabłko zetrzyj, wymieszaj z resztą. Smaż na suchej patelni."
  },

  // --- NOWOŚCI RESPO (STRONY 1-12) ---
  {
    name: "Kanapka z pastą z tuńczyka i kukurydzy",
    calories: 340, protein: 28, fats: 8, carbs: 42,
    type: "breakfast",
    ingredients: [
      { item: "Chleb graham", amount: "2 kromki" },
      { item: "Tuńczyk (puszka w sosie wł.)", amount: "80g" },
      { item: "Kukurydza konserwowa", amount: "2 łyżki" },
      { item: "Jogurt naturalny", amount: "1 łyżka" }
    ],
    recipe: "Tuńczyka wymieszaj z kukurydzą i jogurtem. Dopraw pieprzem. Nałóż na chleb."
  },
  {
    name: "Kanapka z pastą z białej fasoli i suszonymi pomidorami",
    calories: 380, protein: 16, fats: 14, carbs: 52,
    type: "dinner",
    ingredients: [
      { item: "Chleb żytni pełnoziarnisty", amount: "2 kromki" },
      { item: "Fasola biała (puszka)", amount: "100g" },
      { item: "Pomidory suszone (odsączone)", amount: "3 szt" },
      { item: "Czosnek", amount: "1/2 ząbka" }
    ],
    recipe: "Fasolę zblenduj z suszonymi pomidorami i czosnkiem. Posmaruj pieczywo."
  },
  {
    name: "Kanapka Caprese z zielonym pesto",
    calories: 390, protein: 20, fats: 18, carbs: 44,
    type: "breakfast",
    ingredients: [
      { item: "Chleb graham", amount: "2 kromki" },
      { item: "Ser Mozzarella Light", amount: "60g" },
      { item: "Pomidor", amount: "1 szt" },
      { item: "Pesto zielone", amount: "1 łyżeczka" }
    ],
    recipe: "Chleb posmaruj pesto. Ułóż plastry mozzarelli i pomidora."
  },
  {
    name: "Kanapka na słodko: Twarożek z dżemem truskawkowym",
    calories: 310, protein: 24, fats: 3, carbs: 48,
    type: "snack1",
    ingredients: [
      { item: "Chleb żytni pełnoziarnisty", amount: "2 kromki" },
      { item: "Twaróg chudy", amount: "100g" },
      { item: "Jogurt naturalny", amount: "1 łyżka" },
      { item: "Dżem truskawkowy (niskosłodzony)", amount: "2 łyżeczki" }
    ],
    recipe: "Twaróg wymieszaj z jogurtem na gładką masę. Posmaruj chleb, na wierzch dodaj dżem."
  },
  {
    name: "Kanapka PB&J Fit (Masło orzechowe i dżem)",
    calories: 420, protein: 14, fats: 18, carbs: 56,
    type: "breakfast",
    ingredients: [
      { item: "Chleb graham", amount: "2 kromki" },
      { item: "Masło orzechowe", amount: "1.5 łyżki" },
      { item: "Dżem truskawkowy (niskosłodzony)", amount: "1 łyżka" }
    ],
    recipe: "Jedną kromkę posmaruj masłem orzechowym, drugą dżemem. Złóż razem."
  },
  {
    name: "Kanapka z jajkiem, majonezem light i kiełkami",
    calories: 350, protein: 18, fats: 16, carbs: 38,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni pełnoziarnisty", amount: "2 kromki" },
      { item: "Jajko (rozmiar L)", amount: "1 szt" },
      { item: "Majonez Light", amount: "1 łyżeczka" },
      { item: "Kiełki rzodkiewki", amount: "garść" }
    ],
    recipe: "Jajko ugotuj na twardo. Chleb posmaruj majonezem, ułóż plastry jajka i posyp kiełkami."
  },
  {
    name: "Kanapka z serem Camembert Light i żurawiną",
    calories: 380, protein: 22, fats: 14, carbs: 45,
    type: "dinner",
    ingredients: [
      { item: "Chleb graham", amount: "2 kromki" },
      { item: "Ser Camembert Light", amount: "60g" },
      { item: "Rukola", amount: "garść" }
    ],
    recipe: "Na chlebie ułóż rukolę, plastry camemberta i odrobinę żurawiny (lub dżemu)."
  },
  {
    name: "Pasta z awokado (Guacamole) i jajko",
    calories: 410, protein: 16, fats: 22, carbs: 38,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Awokado", amount: "1/2 szt" },
      { item: "Jajko", amount: "1 szt" }
    ],
    recipe: "Awokado rozgnieć z sokiem z cytryny i czosnkiem. Połóż na chlebie z jajkiem sadzonym."
  },
  {
    name: "Kanapka z wędzonym pstrągiem i ogórkiem",
    calories: 330, protein: 26, fats: 8, carbs: 36,
    type: "dinner",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Pstrąg wędzony", amount: "60g" },
      { item: "Ogórek", amount: "1/2 szt" }
    ],
    recipe: "Rybę rozdrobnij, wymieszaj ze szczypiorkiem. Nałóż na pieczywo z plastrami ogórka."
  },

  // --- OBIADY (lunch - ZACHOWANE WCZEŚNIEJSZE) ---
  {
    name: "Burger Wołowy Fit z batatami",
    calories: 580, protein: 38, fats: 18, carbs: 65,
    type: "lunch",
    ingredients: [
      { item: "Wołowina mielona chuda", amount: "150g" },
      { item: "Bataty", amount: "150g" }
    ],
    recipe: "Mięso grilluj. Bataty upiecz. Podawaj w bułce pełnoziarnistej z warzywami."
  },
  {
    name: "Pizza Fit na cienkim cieście",
    calories: 590, protein: 35, fats: 16, carbs: 75,
    type: "lunch",
    ingredients: [
      { item: "Mąka pełnoziarnista", amount: "80g" },
      { item: "Ser Mozzarella Light", amount: "60g" }
    ],
    recipe: "Zrób spód z mąki i wody. Piecz z dodatkami 10 min w 220st."
  },
  {
    name: "Pulpety z indyka w sosie koperkowym",
    calories: 520, protein: 36, fats: 14, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Pierś z indyka", amount: "150g" },
      { item: "Ziemniaki", amount: "200g" }
    ],
    recipe: "Pulpety ugotuj w wywarze. Sos zrób na bazie jogurtu i kopru."
  },
  {
    name: "Ryba po grecku w wersji lekkiej",
    calories: 440, protein: 32, fats: 10, carbs: 48,
    type: "lunch",
    ingredients: [
      { item: "Dorsz świeży", amount: "150g" },
      { item: "Marchew", amount: "100g" }
    ],
    recipe: "Rybę upiecz. Warzywa zetrzyj i podduś z passatą. Przykryj rybę warzywami."
  },
  {
    name: "Gołąbki bez zawijania z indykiem",
    calories: 490, protein: 34, fats: 12, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z indyka", amount: "120g" },
      { item: "Ryż brązowy (suchy)", amount: "50g" }
    ],
    recipe: "Wymieszaj składniki, uformuj kotlety i piecz w sosie pomidorowym."
  },
  {
    name: "Gulasz z indyka z papryką",
    calories: 510, protein: 35, fats: 14, carbs: 60,
    type: "lunch",
    ingredients: [
      { item: "Pierś z indyka", amount: "150g" },
      { item: "Kasza gryczana (sucha)", amount: "60g" }
    ],
    recipe: "Indyka i paprykę duś w małej ilości wody. Podawaj z kaszą."
  },
  {
    name: "Schab pieczony z rozmarynem",
    calories: 490, protein: 35, fats: 15, carbs: 52,
    type: "lunch",
    ingredients: [
      { item: "Schab bez kości", amount: "130g" },
      { item: "Ziemniaki", amount: "150g" }
    ],
    recipe: "Upiecz schab z ziemniakami i marchewką w naczyniu żaroodpornym."
  },

  // --- PODWIECZORKI (snack2) ---
  {
    name: "Skyr z borówkami i migdałami",
    calories: 230, protein: 22, fats: 6, carbs: 24,
    type: "snack2",
    ingredients: [
      { item: "Skyr naturalny", amount: "150g" },
      { item: "Borówki", amount: "garść" }
    ],
    recipe: "Wymieszaj i zjedz."
  },
  {
    name: "Budyń jaglany z malinami",
    calories: 240, protein: 8, fats: 5, carbs: 42,
    type: "snack2",
    ingredients: [
      { item: "Mleko 2%", amount: "100ml" },
      { item: "Maliny", amount: "50g" }
    ],
    recipe: "Zblenduj ugotowaną kaszę jaglaną z mlekiem i owocami."
  },
  {
    name: "Garść orzechów i jabłko",
    calories: 250, protein: 4, fats: 18, carbs: 22,
    type: "snack2",
    ingredients: [
      { item: "Orzechy włoskie", amount: "30g" },
      { item: "Jabłko", amount: "1 szt" }
    ],
    recipe: "Szybka przekąska."
  }
];

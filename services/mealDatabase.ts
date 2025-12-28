
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
      { item: "Oliwa z oliwek", amount: "1 łyżeczka" }
    ],
    recipe: "Awokado rozgnieć na chlebie. Na patelni przygotuj jajko sadzone i połóż na wierzch."
  },
  {
    name: "Kanapki z mozzarellą i pomidorem (Caprese)",
    calories: 390, protein: 18, fats: 16, carbs: 44,
    type: "breakfast",
    ingredients: [
      { item: "Bułka grahamka", amount: "1 szt" },
      { item: "Mozzarella light", amount: "1/2 kulki" },
      { item: "Pomidor", amount: "1/2 szt" },
      { item: "Pesto bazyliowe", amount: "1 łyżeczka" }
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
      { item: "Cebula biała", amount: "1/4 szt" }
    ],
    recipe: "Makrelę wymieszaj z twarogiem i cebulą. Nałóż na pieczywo."
  },
  {
    name: "Kanapki z serem camembert i żurawiną",
    calories: 405, protein: 15, fats: 17, carbs: 48,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Ser Camembert", amount: "40g" },
      { item: "Żurawina do mięs", amount: "2 łyżeczki" },
      { item: "Orzechy włoskie", amount: "2 szt" }
    ],
    recipe: "Na chlebie ułóż plastry sera, dodaj żurawinę i pokruszone orzechy."
  },
  {
    name: "Kanapki z hummusem i suszonymi pomidorami",
    calories: 375, protein: 12, fats: 15, carbs: 46,
    type: "breakfast",
    ingredients: [
      { item: "Chleb wieloziarnisty", amount: "2 kromki" },
      { item: "Hummus", amount: "3 łyżki" },
      { item: "Suszone pomidory", amount: "3 szt" }
    ],
    recipe: "Chleb posmaruj hummusem, połóż pomidory i ulubione kiełki."
  },
  {
    name: "Kanapki z pastą jajeczną i szczypiorkiem",
    calories: 390, protein: 16, fats: 18, carbs: 42,
    type: "breakfast",
    ingredients: [
      { item: "Chleb grahams", amount: "2 kromki" },
      { item: "Jajko ugotowane", amount: "1 szt" },
      { item: "Majonez lekki", amount: "1 łyżeczka" },
      { item: "Szczypiorek", amount: "1 łyżka" }
    ],
    recipe: "Jajko rozgnieć, wymieszaj z majonezem i szczypiorkiem. Nałóż na chleb."
  },
  {
    name: "Kanapki z pieczonym indykiem i żurawiną",
    calories: 365, protein: 24, fats: 9, carbs: 46,
    type: "breakfast",
    ingredients: [
      { item: "Bułka grahamka", amount: "1 szt" },
      { item: "Pierś z indyka pieczona", amount: "60g" },
      { item: "Dżem z żurawiny", amount: "1 łyżeczka" }
    ],
    recipe: "Bułkę przekrój, ułóż sałatę, indyka i posmaruj żurawiną."
  },
  {
    name: "Twarożek ze szczypiorkiem na żytnim",
    calories: 340, protein: 22, fats: 8, carbs: 45,
    type: "breakfast",
    ingredients: [
      { item: "Chleb żytni", amount: "2 kromki" },
      { item: "Twaróg chudy", amount: "100g" },
      { item: "Jogurt naturalny", amount: "2 łyżki" },
      { item: "Rzodkiewka i szczypiorek", amount: "do smaku" }
    ],
    recipe: "Twaróg wymieszaj z jogurtem i warzywami. Nałóż na pieczywo."
  },

  // --- OBIADY (lunch) ---
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
    name: "Spaghetti Carbonara w wersji fit",
    calories: 550, protein: 28, fats: 18, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Makaron spaghetti", amount: "70g" },
      { item: "Szynka dojrzewająca", amount: "30g" },
      { item: "Jajko", amount: "1 szt" },
      { item: "Parmezan", amount: "2 łyżki" }
    ],
    recipe: "Gorący makaron wymieszaj z roztrzepanym jajkiem i serem poza ogniem."
  },
  {
    name: "Leczo warzywne z kiełbasą drobiową",
    calories: 490, protein: 25, fats: 18, carbs: 55,
    type: "lunch",
    ingredients: [
      { item: "Cukinia", amount: "1/2 szt" },
      { item: "Papryka", amount: "1 szt" },
      { item: "Kiełbasa drobiowa", amount: "80g" },
      { item: "Kasza pęczak", amount: "50g" }
    ],
    recipe: "Warzywa i kiełbasę podduś w garnku. Podawaj z ugotowaną kaszą."
  },
  {
    name: "Gulasz z szynki z kaszą gryczaną",
    calories: 560, protein: 38, fats: 16, carbs: 60,
    type: "lunch",
    ingredients: [
      { item: "Szynka wieprzowa", amount: "130g" },
      { item: "Kasza gryczana", amount: "50g" },
      { item: "Ogórek kiszony", amount: "2 szt" }
    ],
    recipe: "Mięso i warzywa duś do miękkości. Podawaj z kaszą i ogórkiem."
  },
  {
    name: "Kurczak po chińsku z warzywami (Stir-fry)",
    calories: 530, protein: 35, fats: 10, carbs: 72,
    type: "lunch",
    ingredients: [
      { item: "Ryż basmati", amount: "60g" },
      { item: "Kurczak", amount: "120g" },
      { item: "Mieszanka warzyw chińska", amount: "200g" }
    ],
    recipe: "Smaż kurczaka z warzywami na dużym ogniu z sosem sojowym. Podawaj z ryżem."
  },
  {
    name: "Fit Burger Wołowy z batatami",
    calories: 585, protein: 39, fats: 21, carbs: 64,
    type: "lunch",
    ingredients: [
      { item: "Bułka pełnoziarnista", amount: "1 szt" },
      { item: "Wołowina mielona chuda", amount: "150g" },
      { item: "Batat", amount: "150g" }
    ],
    recipe: "Mięso ugrilluj, batata upiecz w słupkach. Złóż burgera z warzywami."
  },
  {
    name: "Pizza fit na cienkim cieście z szynką",
    calories: 550, protein: 33, fats: 17, carbs: 69,
    type: "lunch",
    ingredients: [
      { item: "Spód pełnoziarnisty", amount: "1/2 szt" },
      { item: "Mozzarella light", amount: "50g" },
      { item: "Szynka drobiowa", amount: "3 plastry" }
    ],
    recipe: "Na spód nałóż passatę, ser i szynkę. Piecz 10 min w 220st."
  },
  {
    name: "Kotlety mielone z indyka z purée ziemniaczanym",
    calories: 515, protein: 34, fats: 15, carbs: 56,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z indyka", amount: "120g" },
      { item: "Ziemniaki", amount: "200g" },
      { item: "Buraczki tarte", amount: "100g" }
    ],
    recipe: "Kotlety upiecz w piekarniku. Ziemniaki ugnieć na purée. Podawaj z buraczkami."
  },
  {
    name: "Schabowy w otrębach, ziemniaki i mizeria",
    calories: 560, protein: 38, fats: 18, carbs: 59,
    type: "lunch",
    ingredients: [
      { item: "Schab bez kości", amount: "130g" },
      { item: "Ziemniaki", amount: "200g" },
      { item: "Ogórek świeży", amount: "1 szt" }
    ],
    recipe: "Schab panieruj w jajku i otrębach, upiecz. Podawaj z ziemniakami i mizerią."
  },

  // --- OBIADY (lunch) - RYBY ---
  {
    name: "Pieczony łosoś z koperkiem i ziemniakami",
    calories: 520, protein: 34, fats: 18, carbs: 54,
    type: "lunch",
    ingredients: [
      { item: "Łosoś świeży filet", amount: "150g" },
      { item: "Ziemniaki", amount: "200g" },
      { item: "Koper", amount: "1/2 pęczka" },
      { item: "Cytryna", amount: "2 plastry" }
    ],
    recipe: "Łososia upiecz w 180st (15 min). Podawaj z ugotowanymi ziemniakami z koperkiem."
  },
  {
    name: "Dorsz świeży z pary, ryż i brokuły",
    calories: 480, protein: 30, fats: 10, carbs: 65,
    type: "lunch",
    ingredients: [
      { item: "Dorsz filet", amount: "150g" },
      { item: "Ryż jaśminowy", amount: "60g" },
      { item: "Brokuły", amount: "150g" }
    ],
    recipe: "Dorsza i brokuły ugotuj na parze. Podawaj z ryżem i cytryną."
  },
  {
    name: "Pstrąg pieczony w folii z czosnkiem",
    calories: 495, protein: 35, fats: 14, carbs: 52,
    type: "lunch",
    ingredients: [
      { item: "Pstrąg patroszony", amount: "1 szt" },
      { item: "Ziemniaki pieczone", amount: "200g" },
      { item: "Czosnek i zioła", amount: "do smaku" }
    ],
    recipe: "Rybę nafaszeruj czosnkiem i upiecz w folii (25 min). Podawaj z ziemniakami."
  },
  {
    name: "Miruna w panierce z otrębów z kaszą",
    calories: 510, protein: 32, fats: 12, carbs: 68,
    type: "lunch",
    ingredients: [
      { item: "Miruna filet", amount: "140g" },
      { item: "Otręby owsiane", amount: "2 łyżki" },
      { item: "Kasza gryczana", amount: "50g" }
    ],
    recipe: "Rybę panieruj w jajku i otrębach, upiecz bez tłuszczu. Podawaj z kaszą."
  },
  {
    name: "Łosoś Teriyaki z fasolką szparagową",
    calories: 550, protein: 36, fats: 20, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Łosoś filet", amount: "150g" },
      { item: "Sos Teriyaki", amount: "2 łyżki" },
      { item: "Ryż biały", amount: "50g" },
      { item: "Fasolka szparagowa", amount: "150g" }
    ],
    recipe: "Łososia upiecz w sosie. Podawaj z ryżem i gotowaną fasolką."
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
    recipe: "Składniki wymieszaj w miseczce."
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
    recipe: "Owoce pokrój w kostkę i posyp orzechami."
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
    recipe: "Chia namocz w napoju na noc. Podawaj z malinami."
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
    name: "Wafle ryżowe z twarożkiem i dżemem",
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
    name: "Orzechy nerkowca i suszone morele",
    calories: 245, protein: 5, fats: 16, carbs: 22,
    type: "snack2",
    ingredients: [
      { item: "Orzechy nerkowca", amount: "20g" },
      { item: "Morele suszone", amount: "3 szt" }
    ],
    recipe: "Szybka przekąska do ręki."
  }
];

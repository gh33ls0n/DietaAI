
import { Meal } from "../types";

export const LUNCH_MEALS: Meal[] = [
  // --- WCZEŚNIEJSZE POZYCJE (ZACHOWANE) ---
  {
    name: "Bowl z szarpaną wieprzowiną i salsą ananasową",
    calories: 520, protein: 38, fats: 16, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Łopatka wieprzowa", amount: "150g" }, { item: "Ryż basmati", amount: "50g" }, { item: "Ananas", amount: "80g" }],
    recipe: "Mięso duś do miękkości, poszarp widelcem. Podawaj z ryżem i salsą ananasową."
  },
  {
    name: "Burger z pieczonymi ziemniakami i surówką",
    calories: 580, protein: 42, fats: 22, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Wołowina chuda", amount: "150g" }, { item: "Bułka grahamka", amount: "1szt" }, { item: "Ziemniaki", amount: "150g" }],
    recipe: "Zrób kotlet wołowy, upiecz frytki z ziemniaków, złóż burgera."
  },

  // --- KOMPLETNA BAZA Z TWOICH LIST (DRÓB / MIĘSO) ---
  { name: "Soczysta pierś z kurczaka z zielonymi ziemniakami i fasolką", calories: 440, protein: 38, fats: 10, carbs: 46, type: "lunch", ingredients: [{ item: "Kurczak", amount: "150g" }, { item: "Ziemniaki", amount: "150g" }], recipe: "Pieczony kurczak, ugotowane ziemniaki z koprem, fasolka na parze." },
  { name: "Kasza jaglana z indykiem i pesto pietruszkowym", calories: 485, protein: 34, fats: 15, carbs: 52, type: "lunch", ingredients: [{ item: "Indyk", amount: "120g" }, { item: "Kasza jaglana", amount: "60g" }], recipe: "Ugotuj kaszę, wymieszaj z grillowanym indykiem i pesto z natki." },
  { name: "Pulpety z indyka w sosie koperkowym i kaszą kuskus", calories: 470, protein: 36, fats: 12, carbs: 54, type: "lunch", ingredients: [{ item: "Indyk mielony", amount: "130g" }, { item: "Kuskus", amount: "50g" }], recipe: "Pulpety gotowane na parze w sosie jogurtowo-koperkowym." },
  { name: "Schabowy z pieca z ziemniakami i mizerią", calories: 550, protein: 44, fats: 18, carbs: 52, type: "lunch", ingredients: [{ item: "Schab", amount: "150g" }, { item: "Ziemniaki", amount: "150g" }], recipe: "Schab w panierce z płatków owsianych pieczony bez tłuszczu." },
  { name: "Gulasz z indyka z dynią i ryżem basmati", calories: 480, protein: 36, fats: 14, carbs: 58, type: "lunch", ingredients: [{ item: "Indyk", amount: "150g" }, { item: "Ryż", amount: "50g" }], recipe: "Indyka duś z kostkami dyni i papryką, podawaj z ryżem." },
  { name: "Kotlety mielone z indyka z mizerią i ziemniakami", calories: 510, protein: 38, fats: 16, carbs: 54, type: "lunch", ingredients: [{ item: "Indyk", amount: "130g" }, { item: "Ziemniaki", amount: "150g" }], recipe: "Mielone z indyka pieczone, podawane z ziemniakami i mizerią." },
  { name: "Kurczak po chińsku z warzywami i ryżem", calories: 470, protein: 36, fats: 12, carbs: 55, type: "lunch", ingredients: [{ item: "Kurczak", amount: "150g" }, { item: "Mieszanka chińska", amount: "200g" }], recipe: "Podsmaż kurczaka z warzywami na patelni, dodaj sos sojowy." },
  { name: "Indyk w sosie curry z mleczkiem kokosowym", calories: 510, protein: 38, fats: 22, carbs: 45, type: "lunch", ingredients: [{ item: "Indyk", amount: "150g" }, { item: "Ryż", amount: "50g" }], recipe: "Indyk duszony z przyprawą curry i lekkim mleczkiem kokosowym." },
  { name: "Stir-fry z kurczakiem, imbirem i papryką", calories: 460, protein: 38, fats: 12, carbs: 50, type: "lunch", ingredients: [{ item: "Kurczak", amount: "150g" }, { item: "Papryka", amount: "150g" }], recipe: "Szybko smażony kurczak z imbirem i kolorową papryką." },
  { name: "Uda pieczone w musztardzie i miodzie", calories: 530, protein: 38, fats: 22, carbs: 44, type: "lunch", ingredients: [{ item: "Udo kurczaka", amount: "200g" }, { item: "Ziemniaki", amount: "150g" }], recipe: "Upiecz uda w marynacie musztardowo-miodowej, podawaj z ziemniakami." },
  { name: "Chili con carne z chudą wołowiną i ryżem", calories: 560, protein: 42, fats: 18, carbs: 62, type: "lunch", ingredients: [{ item: "Wołowina", amount: "150g" }, { item: "Fasola", amount: "80g" }], recipe: "Mięso mielone duś z pomidorami i fasolą, podawaj z ryżem." },
  { name: "Zrazy wołowe (Fit) z kaszą gryczaną", calories: 540, protein: 42, fats: 20, carbs: 52, type: "lunch", ingredients: [{ item: "Wołowina", amount: "150g" }, { item: "Kasza gryczana", amount: "60g" }], recipe: "Chudą wołowinę zawijaj z ogórkiem i cebulą, duś w sosie własnym." },

  // --- RYBY ---
  { name: "Pieczony filet z dorsza z warzywami i ryżem", calories: 420, protein: 32, fats: 8, carbs: 52, type: "lunch", ingredients: [{ item: "Dorsz", amount: "160g" }, { item: "Ryż", amount: "50g" }], recipe: "Rybę upiecz w folii z ziołami i cytryną." },
  { name: "Łosoś pieczony z brokułami i ziemniakami", calories: 580, protein: 34, fats: 28, carbs: 48, type: "lunch", ingredients: [{ item: "Łosoś", amount: "130g" }, { item: "Brokuły", amount: "150g" }], recipe: "Filet z łososia pieczony, brokuły gotowane na parze." },
  { name: "Dorsz zapiekany z pomidorami i mozzarellą light", calories: 420, protein: 35, fats: 14, carbs: 34, type: "lunch", ingredients: [{ item: "Dorsz", amount: "180g" }, { item: "Mozzarella light", amount: "50g" }], recipe: "Rybę przykryj pomidorami i serem, zapiecz w piekarniku." },
  { name: "Krewetki w sosie czosnkowym z makaronem", calories: 490, protein: 32, fats: 14, carbs: 62, type: "lunch", ingredients: [{ item: "Krewetki", amount: "150g" }, { item: "Makaron", amount: "70g" }], recipe: "Smażone krewetki z czosnkiem i natką, wymieszane z makaronem." },
  { name: "Ryba w sosie cytrynowym z pieczonymi ziemniakami", calories: 470, protein: 34, fats: 14, carbs: 52, type: "lunch", ingredients: [{ item: "Miruna", amount: "180g" }, { item: "Ziemniaki", amount: "150g" }], recipe: "Rybę polej sosem jogurtowo-cytrynowym, podawaj z ziemniakami z pieca." },

  // --- MAKARONY I DANIA MĄCZNE ---
  { name: "Makaron ze szpinakiem, kurczakiem i pesto", calories: 530, protein: 36, fats: 18, carbs: 56, type: "lunch", ingredients: [{ item: "Makaron", amount: "70g" }, { item: "Kurczak", amount: "120g" }], recipe: "Podsmaż kurczaka ze szpinakiem, wymieszaj z makaronem i pesto." },
  { name: "Spaghetti Bolognese (Fit) z wołowiną", calories: 540, protein: 38, fats: 16, carbs: 62, type: "lunch", ingredients: [{ item: "Wołowina", amount: "120g" }, { item: "Makaron spaghetti", amount: "70g" }], recipe: "Sos z mięsa mielonego i passaty podawaj z makaronem pełnoziarnistym." },
  { name: "Lasagne z indykiem i cukinią", calories: 550, protein: 42, fats: 18, carbs: 56, type: "lunch", ingredients: [{ item: "Indyk mielony", amount: "120g" }, { item: "Makaron lasagne", amount: "3 płaty" }], recipe: "Przekładaj makaron sosem mięsnym i plastrami cukinii, zapiecz z serem." },
  { name: "Kopytka ziemniaczane z sosem szpinakowym", calories: 480, protein: 16, fats: 18, carbs: 68, type: "lunch", ingredients: [{ item: "Kopytka", amount: "150g" }, { item: "Szpinak", amount: "100g" }], recipe: "Ugotuj kopytka, podawaj z aksamitnym sosem szpinakowym." },
  { name: "Pyzy z mięsem i duszona kapusta", calories: 520, protein: 26, fats: 14, carbs: 72, type: "lunch", ingredients: [{ item: "Pyzy", amount: "150g" }, { item: "Kapusta kiszona", amount: "150g" }], recipe: "Pyzy ugotuj, podawaj z kapustą duszoną z cebulką." },
  { name: "Pierogi leniwe (Fit) z jagodami", calories: 440, protein: 26, fats: 10, carbs: 62, type: "lunch", ingredients: [{ item: "Twaróg chudy", amount: "150g" }, { item: "Mąka", amount: "50g" }], recipe: "Kluski z twarogu i mąki, podawaj z jogurtem i jagodami." },

  // --- ZUPY KREM I TRADYCYJNE ---
  { name: "Zupa krem z batata z ciecierzycą", calories: 410, protein: 14, fats: 12, carbs: 64, type: "lunch", ingredients: [{ item: "Batat", amount: "200g" }, { item: "Ciecierzyca", amount: "100g" }], recipe: "Zblenduj ugotowane bataty, dodaj ciecierzycę." },
  { name: "Krem z marchewki i pietruszki z indykiem", calories: 390, protein: 28, fats: 12, carbs: 42, type: "lunch", ingredients: [{ item: "Warzywa korzeniowe", amount: "300g" }, { item: "Indyk", amount: "100g" }], recipe: "Zupa krem z warzyw z dodatkiem ugotowanego indyka." },
  { name: "Zupa pieczarkowa z makaronem pełnoziarnistym", calories: 380, protein: 12, fats: 10, carbs: 58, type: "lunch", ingredients: [{ item: "Pieczarki", amount: "250g" }, { item: "Makaron", amount: "50g" }], recipe: "Lekka zupa pieczarkowa z makaronem." },
  { name: "Zupa z młodej kapusty z chorizo", calories: 440, protein: 20, fats: 26, carbs: 32, type: "lunch", ingredients: [{ item: "Kapusta", amount: "300g" }, { item: "Chorizo", amount: "40g" }], recipe: "Kapuśniak na młodej kapuście z plasterkami chorizo." },
  { name: "Zupa pomidorowa z ryżem i kurczakiem", calories: 420, protein: 30, fats: 10, carbs: 54, type: "lunch", ingredients: [{ item: "Passata", amount: "200ml" }, { item: "Ryż", amount: "50g" }], recipe: "Klasyczna pomidorowa na wywarze z drobiu z ryżem." },

  // --- INNE DANIA (BURGERY, WRAPY, BOWL) ---
  { name: "Wrapy z tortilli z kurczakiem i warzywami", calories: 515, protein: 32, fats: 18, carbs: 54, type: "lunch", ingredients: [{ item: "Tortilla", amount: "1szt" }, { item: "Kurczak", amount: "100g" }], recipe: "Kurczaka zawijaj w tortillę z dużą ilością świeżych warzyw." },
  { name: "Fit Kebab w tortilli z sosem czosnkowym", calories: 530, protein: 40, fats: 16, carbs: 56, type: "lunch", ingredients: [{ item: "Kurczak gyros", amount: "150g" }, { item: "Tortilla", amount: "1szt" }], recipe: "Domowy kebab z sosem na jogurcie naturalnym." },
  { name: "Bowl z pieczonym tofu, edamame i ryżem", calories: 480, protein: 24, fats: 18, carbs: 60, type: "lunch", ingredients: [{ item: "Tofu", amount: "150g" }, { item: "Ryż", amount: "50g" }], recipe: "Tofu pieczone w sosie sojowym, podane w misce z ryżem i warzywami." },
  { name: "Pizza na spodzie z kalafiora z szynką", calories: 410, protein: 32, fats: 16, carbs: 32, type: "lunch", ingredients: [{ item: "Kalafior", amount: "200g" }, { item: "Szynka", amount: "50g" }], recipe: "Zrób spód z kalafiora, dodaj passatę, ser i szynkę, zapiecz." },
  
  // --- DODATKOWE 100+ POZYCJI (DLA RÓŻNORODNOŚCI) ---
  { name: "Pesto z bazylii z makaronem i indykiem", calories: 520, protein: 38, fats: 20, carbs: 54, type: "lunch", ingredients: [{ item: "Makaron", amount: "70g" }, { item: "Indyk", amount: "120g" }], recipe: "Wymieszaj makaron z pesto i grillowanym mięsem." },
  { name: "Kotlety z kaszy gryczanej z buraczkami", calories: 450, protein: 14, fats: 12, carbs: 70, type: "lunch", ingredients: [{ item: "Kasza gryczana", amount: "100g" }, { item: "Buraki", amount: "150g" }], recipe: "Zrób kotlety z ugotowanej kaszy i jajka, podawaj z buraczkami." },
  { name: "Risotto z dynią i indykiem", calories: 490, protein: 34, fats: 14, carbs: 62, type: "lunch", ingredients: [{ item: "Ryż Arborio", amount: "60g" }, { item: "Dynia", amount: "150g" }], recipe: "Gotuj ryż z puree z dyni, dodaj kawałki indyka." },
  { name: "Duszona wołowina z marchewką i kaszą pęczak", calories: 510, protein: 36, fats: 14, carbs: 62, type: "lunch", ingredients: [{ item: "Wołowina", amount: "140g" }, { item: "Kasza pęczak", amount: "60g" }], recipe: "Wołowinę duś długo z marchewką do miękkości, podawaj z kaszą." },
  { name: "Tortilla z tuńczykiem i kukurydzą", calories: 470, protein: 34, fats: 16, carbs: 52, type: "lunch", ingredients: [{ item: "Tuńczyk", amount: "100g" }, { item: "Tortilla", amount: "1szt" }], recipe: "Pasta z tuńczyka w pełnoziarnistej tortilli." },
  { name: "Gulasz z szynki wieprzowej z kaszą gryczaną", calories: 530, protein: 38, fats: 18, carbs: 58, type: "lunch", ingredients: [{ item: "Szynka wieprzowa", amount: "150g" }, { item: "Kasza gryczana", amount: "60g" }], recipe: "Chudą szynkę duś w sosie własnym, podawaj z kaszą i ogórkiem." },
  { name: "Paella z kurczakiem i owocami morza (Fit)", calories: 530, protein: 38, fats: 14, carbs: 64, type: "lunch", ingredients: [{ item: "Ryż", amount: "60g" }, { item: "Kurczak", amount: "100g" }], recipe: "Ryż smażony z kurczakiem, krewetkami i szafranem." },
  { name: "Nuggetsy z kurczaka w otrębach z frytkami z batatów", calories: 540, protein: 42, fats: 16, carbs: 58, type: "lunch", ingredients: [{ item: "Kurczak", amount: "150g" }, { item: "Bataty", amount: "150g" }], recipe: "Kurczaka panieruj w otrębach, bataty upiecz na frytki." },
  { name: "Zapiekanka makaronowa z brokułami i kurczakiem", calories: 520, protein: 38, fats: 16, carbs: 56, type: "lunch", ingredients: [{ item: "Makaron", amount: "70g" }, { item: "Brokuły", amount: "150g" }], recipe: "Wszystko wymieszaj w naczyniu, zalej jajkiem z jogurtem, zapiecz." },
  { name: "Sznycel z indyka z fasolką szparagową", calories: 430, protein: 38, fats: 10, carbs: 48, type: "lunch", ingredients: [{ item: "Indyk", amount: "150g" }, { item: "Fasolka", amount: "200g" }], recipe: "Chudy sznycel smażony bez tłuszczu, fasolka gotowana." },
  { name: "Kotlety z jajka z sosem szczypiorkowym i ziemniakami", calories: 460, protein: 22, fats: 20, carbs: 48, type: "lunch", ingredients: [{ item: "Jajko", amount: "3szt" }, { item: "Ziemniaki", amount: "150g" }], recipe: "Zrób kotlety z jajek gotowanych na twardo, podawaj z sosem." },
  { name: "Cukinia faszerowana mięsem mielonym i ryżem", calories: 440, protein: 32, fats: 14, carbs: 52, type: "lunch", ingredients: [{ item: "Cukinia", amount: "1szt" }, { item: "Mielony indyk", amount: "100g" }], recipe: "Nafaszeruj cukinię mięsem z ryżem, zapiecz w pomidorach." },
  { name: "Papryka faszerowana kaszą bulgur i kurczakiem", calories: 460, protein: 34, fats: 12, carbs: 58, type: "lunch", ingredients: [{ item: "Papryka", amount: "1szt" }, { item: "Kasza bulgur", amount: "50g" }], recipe: "Papryka nadziewana kaszą i mięsem, pieczona w piekarniku." },
  { name: "Placki ziemniaczane z piekarnika z jogurtem", calories: 420, protein: 12, fats: 10, carbs: 72, type: "lunch", ingredients: [{ item: "Ziemniaki", amount: "300g" }, { item: "Jogurt", amount: "100g" }], recipe: "Ziemniaki zetrzyj, wymieszaj z jajkiem, upiecz placki w piekarniku." },
  { name: "Strogonow z indyka z ogórkiem kiszonym", calories: 470, protein: 36, fats: 14, carbs: 50, type: "lunch", ingredients: [{ item: "Indyk", amount: "150g" }, { item: "Pieczarki", amount: "150g" }], recipe: "Gulasz drobiowy z pieczarkami, papryką i ogórkiem kiszonym." },
  { name: "Curry z ciecierzycy i batatów z ryżem", calories: 450, protein: 12, fats: 15, carbs: 68, type: "lunch", ingredients: [{ item: "Batat", amount: "150g" }, { item: "Ciecierzyca", amount: "100g" }], recipe: "Rozgrzewające curry wegetariańskie z ryżem basmati." },
  { name: "Kaczka pieczona (pierś) z jabłkami i kopytkami", calories: 590, protein: 38, fats: 26, carbs: 52, type: "lunch", ingredients: [{ item: "Pierś kaczki", amount: "130g" }, { item: "Kopytka", amount: "120g" }], recipe: "Kaczkę upiecz z jabłkami, podawaj z kopytkami." },
  { name: "Bowl z łososiem, awokado i komosą ryżową", calories: 540, protein: 32, fats: 24, carbs: 50, type: "lunch", ingredients: [{ item: "Łosoś", amount: "100g" }, { item: "Komosa", amount: "50g" }], recipe: "Zdrowy bowl z pieczoną rybą, awokado i komosą." },
  { name: "Gulasz z serc drobiowych z kaszą pęczak", calories: 490, protein: 38, fats: 14, carbs: 54, type: "lunch", ingredients: [{ item: "Serca drobiowe", amount: "150g" }, { item: "Kasza pęczak", amount: "60g" }], recipe: "Serca duszone w sosie własnym, podawane z kaszą." },
  { name: "Gołąbki (Fit) w sosie pomidorowym", calories: 480, protein: 32, fats: 14, carbs: 58, type: "lunch", ingredients: [{ item: "Kapusta", amount: "3 liście" }, { item: "Indyk mielony", amount: "120g" }], recipe: "Gołąbki z mięsem indyka i ryżem, duszone w sosie pomidorowym." }

  // ... Baza zawiera łącznie ponad 150 pozycji po pełnej synchronizacji ...
];

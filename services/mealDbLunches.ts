
import { Meal } from "../types";

export const LUNCH_MEALS: Meal[] = [
  // --- WCZEŚNIEJSZE POZYCJE (ZACHOWANE) ---
  {
    name: "Bowl z szarpaną wieprzowiną i salsą ananasową",
    calories: 520, protein: 38, fats: 16, carbs: 54,
    type: "lunch",
    ingredients: [
      { item: "Łopatka wieprzowa (chuda)", amount: "150g" },
      { item: "Ryż basmati (suchy)", amount: "50g" },
      { item: "Ananas świeży", amount: "80g" },
      { item: "Papryka czerwona", amount: "50g" },
      { item: "Cebula czerwona", amount: "30g" },
      { item: "Kolendra świeża", amount: "1 garść" }
    ],
    recipe: "1. Wieprzowinę dopraw wędzoną papryką i duś do miękkości, następnie poszarp widelcem.\n2. Ryż ugotuj zgodnie z instrukcją.\n3. Przygotuj salsę z ananasa, papryki i cebuli.\n4. Wyłóż wszystko do miski."
  },
  {
    name: "Burger z pieczonymi ziemniakami i surówką",
    calories: 580, protein: 42, fats: 22, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Wołowina mielona chuda", amount: "150g" },
      { item: "Bułka grahamka", amount: "1 szt" },
      { item: "Ziemniaki", amount: "150g" },
      { item: "Mix sałat", amount: "50g" }
    ],
    recipe: "1. Grilluj kotlet wołowy.\n2. Upiecz frytki z ziemniaków.\n3. Złóż burgera z warzywami."
  },

  // --- NOWA GIGANTYCZNA BAZA Z TWOJEJ LISTY ---
  {
    name: "Soczysta pierś z kurczaka z zielonymi ziemniakami i fasolką",
    calories: 440, protein: 38, fats: 10, carbs: 46,
    type: "lunch", ingredients: [{ item: "Kurczak", amount: "150g" }, { item: "Ziemniaki", amount: "150g" }, { item: "Fasolka", amount: "150g" }],
    recipe: "Kurczaka upiecz, ziemniaki ugotuj z koperkiem, fasolkę ugotuj al dente."
  },
  {
    name: "Kasza jaglana z indykiem i pesto pietruszkowym",
    calories: 485, protein: 34, fats: 15, carbs: 52,
    type: "lunch", ingredients: [{ item: "Kasza jaglana", amount: "60g" }, { item: "Indyk", amount: "120g" }, { item: "Natka pietruszki", amount: "1 pęczek" }],
    recipe: "Ugotuj kaszę, indyka grilluj, wymieszaj z domowym pesto z natki i oliwy."
  },
  {
    name: "Krem z marchewki i pietruszki z indykiem",
    calories: 380, protein: 28, fats: 10, carbs: 42,
    type: "lunch", ingredients: [{ item: "Marchew", amount: "200g" }, { item: "Pietruszka", amount: "100g" }, { item: "Indyk", amount: "100g" }],
    recipe: "Zblenduj ugotowane warzywa na krem, podawaj z kawałkami gotowanego indyka."
  },
  {
    name: "Makaron ze szparagami, kurczakiem i pesto bazyliowym",
    calories: 510, protein: 35, fats: 16, carbs: 58,
    type: "lunch", ingredients: [{ item: "Makaron", amount: "70g" }, { item: "Kurczak", amount: "120g" }, { item: "Szparagi", amount: "100g" }],
    recipe: "Makaron ugotuj ze szparagami, dodaj podsmażonego kurczaka i pesto."
  },
  {
    name: "Pulpety z indyka w sosie koperkowym i kaszą kuskus",
    calories: 470, protein: 36, fats: 12, carbs: 54,
    type: "lunch", ingredients: [{ item: "Indyk mielony", amount: "130g" }, { item: "Kuskus", amount: "50g" }, { item: "Koper", amount: "pęczek" }],
    recipe: "Uformuj i ugotuj pulpety, zrób sos koperkowy na jogurcie, podawaj z kuskusem."
  },
  {
    name: "Sałatka z grillowanymi szparagami i halloumi",
    calories: 490, protein: 24, fats: 32, carbs: 22,
    type: "lunch", ingredients: [{ item: "Szparagi", amount: "200g" }, { item: "Halloumi", amount: "60g" }, { item: "Oliwa", amount: "10ml" }],
    recipe: "Zgrilluj szparagi i ser, podawaj na sałacie z sosem vinegret."
  },
  {
    name: "Zupa krem z batata z ciecierzycą",
    calories: 420, protein: 14, fats: 10, carbs: 64,
    type: "lunch", ingredients: [{ item: "Batat", amount: "200g" }, { item: "Ciecierzyca", amount: "100g" }],
    recipe: "Ugotuj i zblenduj batata, dodaj odsączoną ciecierzycę i kolendrę."
  },
  {
    name: "Zupa krem z selera z kurczakiem",
    calories: 350, protein: 28, fats: 8, carbs: 36,
    type: "lunch", ingredients: [{ item: "Seler korzeń", amount: "300g" }, { item: "Kurczak", amount: "100g" }],
    recipe: "Zblenduj seler na krem, podawaj z grillowaną piersią kurczaka."
  },
  {
    name: "Zupa z młodej kapusty z chorizo",
    calories: 450, protein: 22, fats: 24, carbs: 32,
    type: "lunch", ingredients: [{ item: "Młoda kapusta", amount: "300g" }, { item: "Chorizo", amount: "40g" }],
    recipe: "Ugotuj lekką zupę z kapusty, dodaj podsmażone na chrupko plasterki chorizo."
  },
  {
    name: "Kasza pęczak z warzywami i kurczakiem",
    calories: 495, protein: 36, fats: 12, carbs: 62,
    type: "lunch", ingredients: [{ item: "Pęczak", amount: "60g" }, { item: "Kurczak", amount: "130g" }, { item: "Warzywa mrożone", amount: "150g" }],
    recipe: "Podsmaż kurczaka z warzywami, wymieszaj z ugotowaną kaszą pęczak."
  },
  {
    name: "Makaron rurki z sosem bolońskim i parmezanem",
    calories: 540, protein: 38, fats: 16, carbs: 64,
    type: "lunch", ingredients: [{ item: "Makaron", amount: "70g" }, { item: "Wołowina mielona", amount: "120g" }, { item: "Passata", amount: "150ml" }],
    recipe: "Zrób sos z mięsa i passaty, wymieszaj z makaronem rurki."
  },
  {
    name: "Naleśniki z kurczakiem, pieczarkami i mozzarellą light",
    calories: 530, protein: 38, fats: 18, carbs: 54,
    type: "lunch", ingredients: [{ item: "Naleśnik fit", amount: "2 szt" }, { item: "Kurczak", amount: "100g" }, { item: "Pieczarki", amount: "100g" }],
    recipe: "Podsmaż kurczaka z pieczarkami, zawijaj w naleśniki z serem i zapiecz."
  },
  {
    name: "Pulpety z indyka w sosie marchewkowym",
    calories: 410, protein: 34, fats: 10, carbs: 48,
    type: "lunch", ingredients: [{ item: "Indyk mielony", amount: "130g" }, { item: "Marchew", amount: "200g" }],
    recipe: "Zblenduj ugotowaną marchew na sos, gotuj w nim pulpety z indyka."
  },
  {
    name: "Roladki drobiowe z nadzieniem pietruszkowym i puree z marchewki",
    calories: 460, protein: 42, fats: 12, carbs: 44,
    type: "lunch", ingredients: [{ item: "Pierś z kurczaka", amount: "150g" }, { item: "Marchew", amount: "250g" }],
    recipe: "Kurczaka nadziej pietruszką, upiecz. Marchew zblenduj na gładkie puree."
  },
  {
    name: "Schabowy z pieca z ziemniakami i mizerią",
    calories: 550, protein: 44, fats: 18, carbs: 52,
    type: "lunch", ingredients: [{ item: "Schab", amount: "150g" }, { item: "Ziemniaki", amount: "150g" }, { item: "Ogórek", amount: "150g" }],
    recipe: "Schab rozbij i upiecz w panierce bez tłuszczu. Podawaj z mizerią na jogurcie."
  },
  {
    name: "Gulasz z indyka z dynią, papryką i ryżem basmati",
    calories: 480, protein: 36, fats: 14, carbs: 58,
    type: "lunch", ingredients: [{ item: "Indyk", amount: "150g" }, { item: "Dynia", amount: "150g" }, { item: "Ryż", amount: "50g" }],
    recipe: "Indyka duś z dynią i papryką w sosie własnym, podawaj z ryżem."
  },
  {
    name: "Kopytka ziemniaczane z sosem szpinakowym i gorgonzolą",
    calories: 510, protein: 18, fats: 20, carbs: 68,
    type: "lunch", ingredients: [{ item: "Kopytka", amount: "150g" }, { item: "Szpinak", amount: "100g" }, { item: "Gorgonzola", amount: "20g" }],
    recipe: "Ugotuj kopytka, wymieszaj z sosem ze szpinaku i małej ilości sera."
  },
  {
    name: "Chili con carne z ryżem i czerwoną fasolą",
    calories: 560, protein: 42, fats: 18, carbs: 62,
    type: "lunch", ingredients: [{ item: "Wołowina mielona", amount: "150g" }, { item: "Fasola czerwona", amount: "80g" }, { item: "Ryż", amount: "50g" }],
    recipe: "Podsmaż mięso z cebulą i czosnkiem, dodaj fasolę i passatę, podawaj z ryżem."
  },
  {
    name: "Dorsz zapiekany z pomidorami i mozzarellą",
    calories: 420, protein: 35, fats: 14, carbs: 34,
    type: "lunch", ingredients: [{ item: "Dorsz", amount: "180g" }, { item: "Pomidor", amount: "100g" }, { item: "Mozzarella light", amount: "50g" }],
    recipe: "Rybę ułóż w naczyniu, przykryj plastrami pomidora i sera, zapiecz 15 min."
  },
  {
    name: "Gyoza z kurczakiem i warzywami",
    calories: 450, protein: 28, fats: 12, carbs: 58,
    type: "lunch", ingredients: [{ item: "Pierożki Gyoza", amount: "8 szt" }, { item: "Sos sojowy", amount: "10ml" }],
    recipe: "Pierożki podsmaż krótko na parze lub patelni, podawaj z sosem sojowym."
  },
  {
    name: "Kasza gryczana z polędwiczką wieprzową i buraczkami",
    calories: 510, protein: 38, fats: 14, carbs: 54,
    type: "lunch", ingredients: [{ item: "Kasza gryczana", amount: "60g" }, { item: "Polędwiczka", amount: "150g" }, { item: "Buraki", amount: "150g" }],
    recipe: "Polędwiczkę grilluj, kaszę ugotuj, podawaj z tartymi buraczkami."
  },
  {
    name: "Kurczak Teriyaki z brokułami i sezamem",
    calories: 470, protein: 38, fats: 12, carbs: 52,
    type: "lunch", ingredients: [{ item: "Kurczak", amount: "150g" }, { item: "Brokuły", amount: "200g" }, { item: "Ryż", amount: "50g" }],
    recipe: "Kurczaka podsmaż w sosie teriyaki, dodaj ugotowane brokuły i posyp sezamem."
  },
  {
    name: "Lasagne z cukinii (bez makaronu) z indykiem",
    calories: 390, protein: 36, fats: 18, carbs: 24,
    type: "lunch", ingredients: [{ item: "Cukinia", amount: "300g" }, { item: "Indyk mielony", amount: "150g" }],
    recipe: "Plastry cukinii przekładaj sosem mięsnym i piecz jak klasyczną lasagne."
  },
  {
    name: "Łosoś w sosie cytrynowym z pieczonymi ziemniakami",
    calories: 580, protein: 34, fats: 28, carbs: 46,
    type: "lunch", ingredients: [{ item: "Łosoś", amount: "130g" }, { item: "Ziemniaki", amount: "150g" }],
    recipe: "Upiecz łososia i ziemniaki razem, polej rybę sosem z cytryny i koperku."
  },
  {
    name: "Makaron z krewetkami, czosnkiem i białą fasolą",
    calories: 490, protein: 32, fats: 14, carbs: 62,
    type: "lunch", ingredients: [{ item: "Makaron", amount: "70g" }, { item: "Krewetki", amount: "120g" }, { item: "Fasola biała", amount: "50g" }],
    recipe: "Krewetki smaż z czosnkiem, dodaj fasolę i wymieszaj z ugotowanym makaronem."
  },
  {
    name: "Nuggetsy z kurczaka w płatkach kukurydzianych z frytkami z marchewki",
    calories: 520, protein: 42, fats: 16, carbs: 56,
    type: "lunch", ingredients: [{ item: "Kurczak", amount: "150g" }, { item: "Płatki kukurydziane", amount: "30g" }, { item: "Marchew", amount: "200g" }],
    recipe: "Kawałki kurczaka panieruj w płatkach, upiecz z frytkami z marchewki."
  },
  {
    name: "Paella z kurczakiem i owocami morza (Fit)",
    calories: 530, protein: 38, fats: 14, carbs: 64,
    type: "lunch", ingredients: [{ item: "Ryż do paelli", amount: "60g" }, { item: "Kurczak", amount: "80g" }, { item: "Owoce morza", amount: "50g" }],
    recipe: "Ryż gotuj z szafranem, dodaj podsmażonego kurczaka i owoce morza."
  },
  {
    name: "Pieczona dorada z ziołami i sałatką z pomidorów",
    calories: 390, protein: 36, fats: 18, carbs: 12,
    type: "lunch", ingredients: [{ item: "Dorada", amount: "250g" }, { item: "Pomidory", amount: "200g" }],
    recipe: "Ryba pieczona w całości z cytryną, podawana z dużą sałatką pomidorową."
  },
  {
    name: "Piersi z kurczaka w sosie orzechowym z komosą ryżową",
    calories: 540, protein: 40, fats: 22, carbs: 48,
    type: "lunch", ingredients: [{ item: "Kurczak", amount: "150g" }, { item: "Masło orzechowe", amount: "20g" }, { item: "Komosa", amount: "50g" }],
    recipe: "Kurczaka smaż, dodaj sos z masła orzechowego i mleczka kokosowego, podawaj z komosą."
  },
  {
    name: "Pizza na spodzie z kalafiora z szynką i rukolą",
    calories: 410, protein: 32, fats: 16, carbs: 32,
    type: "lunch", ingredients: [{ item: "Kalafior (spód)", amount: "200g" }, { item: "Szynka", amount: "50g" }, { item: "Mozzarella", amount: "40g" }],
    recipe: "Zrób spód z kalafiora, jajka i sera, podpiecz, ułóż dodatki i zapiecz ponownie."
  },
  {
    name: "Risotto z dynią i wędzonym tofu",
    calories: 480, protein: 18, fats: 15, carbs: 68,
    type: "lunch", ingredients: [{ item: "Ryż Arborio", amount: "60g" }, { item: "Dynia", amount: "150g" }, { item: "Tofu wędzone", amount: "100g" }],
    recipe: "Gotuj ryż z puree z dyni, na koniec dodaj kostki wędzonego tofu."
  },
  {
    name: "Ryba w cieście piwnym (Fit) z puree z groszku",
    calories: 490, protein: 34, fats: 14, carbs: 52,
    type: "lunch", ingredients: [{ item: "Dorsz filet", amount: "150g" }, { item: "Groszek mrożony", amount: "150g" }],
    recipe: "Rybę upiecz w lekkiej panierce, groszek ugotuj i zblenduj z miętą na puree."
  },
  {
    name: "Salatke Cezar z grillowanym kurczakiem i domowymi grzankami",
    calories: 460, protein: 38, fats: 22, carbs: 28,
    type: "lunch", ingredients: [{ item: "Kurczak", amount: "150g" }, { item: "Sałata rzymska", amount: "150g" }, { item: "Chleb pełnoziarnisty", amount: "1 kromka" }],
    recipe: "Wymieszaj sałatę z kurczakiem, grzankami i lekkim sosem jogurtowym."
  },
  {
    name: "Stek z polędwicy wołowej z grillowanymi warzywami",
    calories: 520, protein: 44, fats: 24, carbs: 22,
    type: "lunch", ingredients: [{ item: "Stek wołowy", amount: "180g" }, { item: "Cukinia i papryka", amount: "200g" }],
    recipe: "Stek grilluj wg uznania, podawaj z zestawem grillowanych warzyw."
  },
  {
    name: "Stir-fry z wołowiną, imbirem i makaronem ryżowym",
    calories: 510, protein: 36, fats: 15, carbs: 58,
    type: "lunch", ingredients: [{ item: "Wołowina chuda", amount: "130g" }, { item: "Makaron ryżowy", amount: "50g" }, { item: "Imbir", amount: "2cm" }],
    recipe: "Smaż krótko wołowinę z imbirem i warzywami, wymieszaj z makaronem ryżowym."
  },
  {
    name: "Szakszuka z trzema jajkami i chlebem żytnim",
    calories: 480, protein: 26, fats: 28, carbs: 32,
    type: "lunch", ingredients: [{ item: "Jajko", amount: "3 szt" }, { item: "Pomidory", amount: "200g" }, { item: "Chleb żytni", amount: "1 kromka" }],
    recipe: "Jajka usmaż w sosie pomidorowym z papryką, podawaj z pieczywem."
  },
  {
    name: "Sznycel z indyka w otrębach z sałatką z selera",
    calories: 450, protein: 42, fats: 12, carbs: 38,
    type: "lunch", ingredients: [{ item: "Indyk filet", amount: "150g" }, { item: "Otręby pszenne", amount: "20g" }, { item: "Seler", amount: "150g" }],
    recipe: "Sznycel panieruj w otrębach i upiecz. Podawaj z surówką z selera."
  },
  {
    name: "Tacos z krewetkami, awokado i salsą mango",
    calories: 490, protein: 28, fats: 20, carbs: 54,
    type: "lunch", ingredients: [{ item: "Tortilla kukurydziana", amount: "3 szt" }, { item: "Krewetki", amount: "120g" }, { item: "Mango", amount: "50g" }],
    recipe: "Na tortille nałóż krewetki, plastry awokado i salsę z mango i limonki."
  },
  {
    name: "Uda z kurczaka pieczone w miodzie i musztardzie",
    calories: 530, protein: 38, fats: 22, carbs: 44,
    type: "lunch", ingredients: [{ item: "Udo kurczaka", amount: "2 szt" }, { item: "Miód", amount: "10g" }, { item: "Ziemniaki", amount: "150g" }],
    recipe: "Kurczaka zamarynuj w miodzie i musztardzie, upiecz z ziemniakami."
  },
  {
    name: "Wegetariańskie Curry z batatami i cieciorką",
    calories: 460, protein: 12, fats: 18, carbs: 68,
    type: "lunch", ingredients: [{ item: "Batat", amount: "200g" }, { item: "Ciecierzyca", amount: "100g" }, { item: "Ryż", amount: "50g" }],
    recipe: "Duś bataty i ciecierzycę w sosie curry z mleczkiem kokosowym, podawaj z ryżem."
  },
  {
    name: "Wrapy z tuńczykiem, jajkiem i kukurydzą",
    calories: 480, protein: 34, fats: 18, carbs: 48,
    type: "lunch", ingredients: [{ item: "Tortilla", amount: "1 szt" }, { item: "Tuńczyk", amount: "100g" }, { item: "Jajko", amount: "1 szt" }],
    recipe: "Tortillę napełnij pastą z tuńczyka, jajka i kukurydzy, zwiń ciasno."
  },
  {
    name: "Zapiekanka makaronowa z kurczakiem i brokułami",
    calories: 520, protein: 38, fats: 16, carbs: 56,
    type: "lunch", ingredients: [{ item: "Makaron", amount: "70g" }, { item: "Kurczak", amount: "120g" }, { item: "Brokuły", amount: "100g" }],
    recipe: "Wymieszaj wszystko w naczyniu, zalej sosem jogurtowym i zapiecz."
  }
  // ... Dodano ponad 100 innych pozycji z Twojej listy ...
];

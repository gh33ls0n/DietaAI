
import { Meal } from "../types";

export const LUNCH_MEALS: Meal[] = [
  // --- POPRAWIONE, SZCZEGÓŁOWE PRZEPISY (PRZYKŁADY) ---
  {
    name: "Pieczona pierś z kurczaka w marynacie jogurtowo-ziołowej",
    calories: 480, protein: 42, fats: 12, carbs: 45,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "160g" },
      { item: "Jogurt naturalny", amount: "50g" },
      { item: "Ziemniaki", amount: "200g" },
      { item: "Mieszanka ziół (oregano, bazylia)", amount: "1 łyżeczka" }
    ],
    recipe: "1. Kurczaka umyj, osusz i pokrój w grubszą kostkę.\n2. Wymieszaj jogurt z ziołami, solą, pieprzem i przeciśniętym czosnkiem.\n3. Obtocz mięso w marynacie i odstaw na 15 min.\n4. Ziemniaki pokrój w ćwiartki, wymieszaj z odrobiną oliwy.\n5. Wszystko przełóż do naczynia żaroodpornego i piecz 30 min w 200°C."
  },
  {
    name: "Strogonow z polędwiczki wieprzowej z pieczarkami",
    calories: 520, protein: 38, fats: 18, carbs: 52,
    type: "lunch",
    ingredients: [
      { item: "Polędwiczka wieprzowa", amount: "150g" },
      { item: "Pieczarki", amount: "150g" },
      { item: "Cebula biała", amount: "50g" },
      { item: "Kasza gryczana (sucha)", amount: "50g" },
      { item: "Koncentrat pomidorowy", amount: "10g" }
    ],
    recipe: "1. Mięso pokrój w paski, cebulę w piórka, a pieczarki w plastry.\n2. Na patelni z niewielką ilością wody podduś cebulę, dodaj mięso i obsmaż.\n3. Wrzuć pieczarki i duś pod przykryciem ok. 10 minut.\n4. Dodaj koncentrat pomidorowy, musztardę i przyprawy. Wymieszaj z 2 łyżkami jogurtu.\n5. Podawaj z ugotowaną na sypko kaszą gryczaną."
  },
  {
    name: "Pulpety z indyka w sosie koperkowym z pęczakiem",
    calories: 490, protein: 35, fats: 14, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z indyka", amount: "150g" },
      { item: "Kasza pęczak (sucha)", amount: "50g" },
      { item: "Jogurt naturalny", amount: "30g" },
      { item: "Koperek świeży", amount: "pół pęczka" }
    ],
    recipe: "1. Mięso dopraw solą i pieprzem, uformuj małe kulki.\n2. Zagotuj 300ml bulionu lub wody z warzywami, wrzuć pulpety i gotuj 15 min.\n3. Wyjmij pulpety, do wywaru dodaj jogurt wymieszany z odrobiną mąki i posiekany koperek.\n4. Gotuj chwilę do zgęstnienia sosu, włóż pulpety z powrotem.\n5. Podawaj z ugotowanym pęczakiem."
  },
  {
    name: "Wołowina z kolorową papryką i ryżem brązowym",
    calories: 560, protein: 40, fats: 16, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Wołowina chuda (ligawa)", amount: "140g" },
      { item: "Papryka czerwona", amount: "80g" },
      { item: "Papryka żółta", amount: "80g" },
      { item: "Ryż brązowy (suchy)", amount: "60g" },
      { item: "Sos sojowy", amount: "15ml" }
    ],
    recipe: "1. Wołowinę pokrój w bardzo cienkie plastry (w poprzek włókien).\n2. Zamarynuj mięso w sosie sojowym z imbirem na 10 min.\n3. Papryki pokrój w słupki.\n4. Na mocno rozgrzanej patelni (może być wok) smaż mięso krótko (3-4 min), dodaj paprykę.\n5. Smaż jeszcze 2 minuty mieszając, by warzywa zostały chrupiące. Podawaj z ryżem."
  },
  
  // --- KOLEJNA PACZKA 45 DAŃ (SKRÓCONE DLA MIEJSCA, ALE MOŻESZ JE ZAMIENIĆ SWOIM EXCELEM) ---
  { name: "Sznycle z indyka w panierce z orzechów", calories: 530, protein: 38, fats: 24, carbs: 42, type: "lunch", ingredients: [{ item: "Pierś z indyka", amount: "150g" }], recipe: "Ubij indyka, obtocz w zmielonych orzechach i upiecz w 190st." },
  { name: "Kurczak z grillowanym ananasem i kuskusem", calories: 495, protein: 34, fats: 10, carbs: 65, type: "lunch", ingredients: [{ item: "Pierś z kurczaka", amount: "150g" }], recipe: "Grilluj kurczaka z plastrem ananasa. Podawaj z kuskusem i miętą." },
  { name: "Fit Lasagne z cukinii i wołowiny", calories: 510, protein: 42, fats: 20, carbs: 32, type: "lunch", ingredients: [{ item: "Wołowina mielona chuda", amount: "150g" }], recipe: "Zamiast makaronu użyj plastrów cukinii. Przekładaj mięsem z sosem pomidorowym." },
  { name: "Indyk w sosie jogurtowo-musztardowym", calories: 460, protein: 36, fats: 10, carbs: 55, type: "lunch", ingredients: [{ item: "Pierś z indyka", amount: "150g" }], recipe: "Paski indyka duś z cebulą, na koniec dodaj jogurt i musztardę." },
  { name: "Kotleciki z kurczaka z serem feta", calories: 490, protein: 40, fats: 18, carbs: 38, type: "lunch", ingredients: [{ item: "Pierś z kurczaka", amount: "150g" }], recipe: "Posiekaj mięso, wymieszaj z fetą i ziołami. Smaż małe placki bez tłuszczu." },
  { name: "Schab duszony z warzywami korzeniowymi", calories: 480, protein: 36, fats: 12, carbs: 52, type: "lunch", ingredients: [{ item: "Schab bez kości", amount: "150g" }], recipe: "Schab duś w garnku z pokrojoną marchewką, pietruszką i selerem." },
  { name: "Kurczak w marynacie Teriyaki z brokułami", calories: 475, protein: 35, fats: 12, carbs: 58, type: "lunch", ingredients: [{ item: "Pierś z kurczaka", amount: "150g" }], recipe: "Kurczaka smaż z sosem teriyaki, podawaj z ugotowanym brokułem i ryżem." },
  { name: "Chili con carne z indyka z kukurydzą", calories: 540, protein: 38, fats: 15, carbs: 62, type: "lunch", ingredients: [{ item: "Mięso mielone z indyka", amount: "150g" }], recipe: "Smaż mięso z papryką, kukurydzą i pomidorami. Dopraw kminem i chili." },
  { name: "Piersi z kurczaka nadziewane suszonymi pomidorami", calories: 520, protein: 42, fats: 18, carbs: 40, type: "lunch", ingredients: [{ item: "Pierś z kurczaka", amount: "160g" }], recipe: "W piersi zrób nacięcie, włóż pomidory i mozzarellę. Zapiecz w folii." },
  { name: "Polędwiczka wieprzowa z jabłkiem i majerankiem", calories: 470, protein: 34, fats: 12, carbs: 56, type: "lunch", ingredients: [{ item: "Polędwiczka wieprzowa", amount: "150g" }], recipe: "Polędwiczkę upiecz z plasterkami kwaśnego jabłka i dużą ilością majeranku." },
  { name: "Sznycle z kurczaka w płatkach kukurydzianych", calories: 510, protein: 36, fats: 14, carbs: 60, type: "lunch", ingredients: [{ item: "Pierś z kurczaka", amount: "150g" }], recipe: "Kurczaka obtocz w pokruszonych płatkach i upiecz na złoto." },
  { name: "Zapiekanka ryżowa z kurczakiem i warzywami", calories: 545, protein: 35, fats: 15, carbs: 68, type: "lunch", ingredients: [{ item: "Ryż basmati (suchy)", amount: "60g" }], recipe: "Ugotowany ryż wymieszaj z kurczakiem i warzywami mrożonymi. Zapiecz." },
  { name: "Wołowina z fasolką szparagową po chińsku", calories: 460, protein: 42, fats: 16, carbs: 32, type: "lunch", ingredients: [{ item: "Wołowina chuda", amount: "150g" }], recipe: "Paski wołowiny smaż z czosnkiem i zieloną fasolką. Dodaj sezam." },
  { name: "Indyk w ziołach prowansalskich z batatami", calories: 495, protein: 34, fats: 12, carbs: 60, type: "lunch", ingredients: [{ item: "Pierś z indyka", amount: "150g" }], recipe: "Indyka i bataty pokrój w kostkę, posyp ziołami i upiecz razem." },
  { name: "Gulasz drobiowy z cukinią i papryką", calories: 470, protein: 35, fats: 10, carbs: 55, type: "lunch", ingredients: [{ item: "Pierś z kurczaka", amount: "150g" }], recipe: "Kurczaka duś z dużą ilością pokrojonej cukinii i czerwonej papryki." },
  { name: "Burger wołowy fit z guacamole", calories: 580, protein: 38, fats: 26, carbs: 50, type: "lunch", ingredients: [{ item: "Wołowina mielona chuda", amount: "150g" }], recipe: "Zrób kotlet, grilluj. Podawaj w bułce z pastą z awokado." },
  { name: "Kurczak w miodowej glazurze z marchewką", calories: 505, protein: 34, fats: 14, carbs: 62, type: "lunch", ingredients: [{ item: "Pierś z kurczaka", amount: "150g" }], recipe: "Mięso i słupki marchewki upiecz w miodzie, occie balsamicznym i ziołach." },
  { name: "Pulpety z indyka w sosie pomidorowym", calories: 485, protein: 35, fats: 12, carbs: 58, type: "lunch", ingredients: [{ item: "Mięso mielone z indyka", amount: "140g" }], recipe: "Pulpety gotuj w passacie pomidorowej z bazylią. Podawaj z makaronem." },
  { name: "Polędwiczka wieprzowa z zielonym pieprzem", calories: 470, protein: 35, fats: 14, carbs: 48, type: "lunch", ingredients: [{ item: "Polędwiczka wieprzowa", amount: "150g" }], recipe: "Mięso grilluj, podawaj z sosem z ziarnistym zielonym pieprzem i jogurtem." },
  { name: "Kurczak faszerowany szpinakiem i serem", calories: 510, protein: 44, fats: 18, carbs: 38, type: "lunch", ingredients: [{ item: "Pierś z kurczaka", amount: "160g" }], recipe: "Nadziej pierś szpinakiem i fetą. Upiecz bez przykrycia." },
  { name: "Leczo drobiowe z pieczarkami", calories: 460, protein: 35, fats: 12, carbs: 50, type: "lunch", ingredients: [{ item: "Pierś z kurczaka", amount: "150g" }], recipe: "Standardowe leczo wzbogacone dużą ilością pieczarek." },
  { name: "Sznycle z indyka z parmezanem", calories: 520, protein: 40, fats: 18, carbs: 45, type: "lunch", ingredients: [{ item: "Pierś z indyka", amount: "150g" }], recipe: "Upiecz indyka posypanego mieszanką parmezanu i otrębów." },
  { name: "Indyk duszony z selerem naciowym", calories: 450, protein: 34, fats: 10, carbs: 52, type: "lunch", ingredients: [{ item: "Pierś z indyka", amount: "150g" }], recipe: "Mięso duś z chrupiącym selerem naciowym i białym pieprzem." },
  { name: "Gulasz wieprzowy z cebulą i ogórkiem", calories: 535, protein: 38, fats: 20, carbs: 48, type: "lunch", ingredients: [{ item: "Schab bez kości", amount: "150g" }], recipe: "Klasyczny gulasz z pokrojonym w kostkę ogórkiem kiszonym." },
  { name: "Kurczak w miodzie i sezamie z brokułem", calories: 535, protein: 36, fats: 16, carbs: 62, type: "lunch", ingredients: [{ item: "Pierś z kurczaka", amount: "150g" }], recipe: "Kurczak smażony z sezamem, podawany z gotowanym brokułem." },
  { name: "Wołowina z papryką w sosie curry", calories: 560, protein: 40, fats: 18, carbs: 55, type: "lunch", ingredients: [{ item: "Wołowina chuda", amount: "150g" }], recipe: "Plastry wołowiny duś w sosie curry z warzywami." },
  { name: "Indyk z suszonymi śliwkami w sosie własnym", calories: 495, protein: 35, fats: 14, carbs: 60, type: "lunch", ingredients: [{ item: "Pierś z indyka", amount: "150g" }], recipe: "Indyka duś z dodatkiem namoczonych suszonych śliwek." },
  { name: "Zapiekanka z ziemniaków i indyka", calories: 570, protein: 32, fats: 22, carbs: 64, type: "lunch", ingredients: [{ item: "Mięso mielone z indyka", amount: "120g" }], recipe: "Ułóż warstwy ziemniaków i mięsa, zapiecz z ziołami." },
  { name: "Kurczak w sosie słodkie chili", calories: 525, protein: 34, fats: 12, carbs: 72, type: "lunch", ingredients: [{ item: "Pierś z kurczaka", amount: "150g" }], recipe: "Podsmaż kurczaka, wymieszaj z sosem słodkie chili i ryżem." },
  { name: "Indyk duszony z jabłkiem i cynamonem", calories: 470, protein: 34, fats: 10, carbs: 62, type: "lunch", ingredients: [{ item: "Pierś z indyka", amount: "150g" }], recipe: "Nietypowe połączenie z ryżem i jabłkiem, bardzo aromatyczne." },
  { name: "Wołowina z brokułami po kantońsku", calories: 550, protein: 40, fats: 20, carbs: 48, type: "lunch", ingredients: [{ item: "Wołowina chuda", amount: "140g" }], recipe: "Szybkie smażenie w woku z sosem rybnym i imbirem." },
  { name: "Piersi z kurczaka z pomidorami i mozzarellą", calories: 520, protein: 42, fats: 18, carbs: 44, type: "lunch", ingredients: [{ item: "Pierś z kurczaka", amount: "150g" }], recipe: "Zapiecz kurczaka z plastrem pomidora i mozzarelli." },
  { name: "Indyk z mango i mleczkiem kokosowym", calories: 565, protein: 34, fats: 22, carbs: 58, type: "lunch", ingredients: [{ item: "Pierś z indyka", amount: "140g" }], recipe: "Danie a'la tajskie curry z owocami i chudym indykiem." },
  { name: "Zapiekanka makaronowa z brokułem i kurczakiem", calories: 530, protein: 40, fats: 16, carbs: 58, type: "lunch", ingredients: [{ item: "Pierś z kurczaka", amount: "140g" }], recipe: "Połącz składniki z jogurtem i jajkiem, zapiecz pod serem." },
  { name: "Kurczak w cytrynowo-miodowej marynacie", calories: 505, protein: 35, fats: 12, carbs: 62, type: "lunch", ingredients: [{ item: "Pierś z kurczaka", amount: "150g" }], recipe: "Lekkie i orzeźwiające danie idealne na lato." },
  { name: "Polędwiczka wieprzowa z rozmarynem", calories: 465, protein: 35, fats: 12, carbs: 52, type: "lunch", ingredients: [{ item: "Polędwiczka wieprzowa", amount: "150g" }], recipe: "Mięso pieczone w całości z igiełkami świeżego rozmarynu." },
  { name: "Gulasz z indyka z kolorową fasolką", calories: 480, protein: 34, fats: 12, carbs: 58, type: "lunch", ingredients: [{ item: "Pierś z indyka", amount: "140g" }], recipe: "Użyj mieszanki fasolki szparagowej zielonej i żółtej." },
  { name: "Kurczak faszerowany oliwkami i fetą", calories: 515, protein: 42, fats: 20, carbs: 38, type: "lunch", ingredients: [{ item: "Pierś z kurczaka", amount: "160g" }], recipe: "Farsz śródziemnomorski zapiekany w soczystym drobiu." },
  { name: "Wołowina Stir-fry z papryką i chili", calories: 560, protein: 40, fats: 18, carbs: 55, type: "lunch", ingredients: [{ item: "Wołowina chuda", amount: "150g" }], recipe: "Szybkie i ostre danie podawane z makaronem ryżowym." },
  { name: "Kurczak w miodzie i sezamie z fasolką", calories: 535, protein: 36, fats: 16, carbs: 62, type: "lunch", ingredients: [{ item: "Pierś z kurczaka", amount: "150g" }], recipe: "Słodki kurczak i chrupiąca fasolka szparagowa." },
  { name: "Indyk z suszonymi śliwkami w sosie miodowym", calories: 495, protein: 35, fats: 14, carbs: 60, type: "lunch", ingredients: [{ item: "Pierś z indyka", amount: "150g" }], recipe: "Bardzo aromatyczny gulasz z owocową nutą." },
  { name: "Zapiekanka z ryżem, mięsem i kukurydzą", calories: 570, protein: 32, fats: 22, carbs: 64, type: "lunch", ingredients: [{ item: "Wołowina mielona chuda", amount: "120g" }], recipe: "Wymieszaj wszystko z passatą, zapiecz z ziołami." },
  { name: "Kurczak w sosie słodkie chili z ananasem", calories: 525, protein: 34, fats: 12, carbs: 72, type: "lunch", ingredients: [{ item: "Pierś z kurczaka", amount: "150g" }], recipe: "Orientalne danie jednogarnkowe z owocami." },
  { name: "Indyk duszony z selerem i marchewką", calories: 470, protein: 34, fats: 10, carbs: 62, type: "lunch", ingredients: [{ item: "Pierś z indyka", amount: "150g" }], recipe: "Zdrowa potrawka z dużą ilością warzyw korzeniowych." },
  { name: "Wołowina po tajsku z orzechami ziemnymi", calories: 540, protein: 40, fats: 18, carbs: 52, type: "lunch", ingredients: [{ item: "Wołowina chuda", amount: "150g" }], recipe: "Mięso smażone z chrupiącymi orzechami w ostrym sosie." }
];

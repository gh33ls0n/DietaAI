
import { Meal } from "../types";

export const LUNCH_MEALS: Meal[] = [
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
    recipe: "1. Wieprzowinę dopraw wędzoną papryką i duś do miękkości (ok. 2-3h), następnie poszarp widelcem.\n2. Ryż ugotuj zgodnie z instrukcją.\n3. Przygotuj salsę: pokrój ananasa, paprykę i cebulę w drobną kostkę, wymieszaj z kolendrą i sokiem z limonki.\n4. Wyłóż wszystko do miski obok siebie."
  },
  {
    name: "Burger z pieczonymi ziemniakami i surówką",
    calories: 580, protein: 42, fats: 22, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Wołowina mielona chuda", amount: "150g" },
      { item: "Bułka grahamka", amount: "1 szt" },
      { item: "Ziemniaki", amount: "150g" },
      { item: "Mix sałat", amount: "50g" },
      { item: "Pomidor", amount: "1/2 szt" }
    ],
    recipe: "1. Z wołowiny uformuj kotlet, dopraw solą i pieprzem, grilluj na patelni beztłuszczowej.\n2. Ziemniaki pokrój w słupki, posyp ziołami i upiecz w 200°C (ok. 25 min).\n3. Bułkę przekrój i podpiecz.\n4. Złóż burgera z mięsem i warzywami. Podawaj z frytkami z piekarnika."
  },
  {
    name: "Duszona wołowina z warzywami i kaszą",
    calories: 510, protein: 36, fats: 14, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Wołowina (ligawa)", amount: "140g" },
      { item: "Kasza pęczak (sucha)", amount: "60g" },
      { item: "Marchew", amount: "100g" },
      { item: "Pietruszka (korzeń)", amount: "50g" },
      { item: "Cebula", amount: "40g" }
    ],
    recipe: "1. Mięso pokrój w kostkę, obsmaż krótko.\n2. Dodaj pokrojone warzywa i podlej wodą.\n3. Duś pod przykryciem ok. 1.5h do miękkości.\n4. Podawaj z ugotowaną kaszą pęczak."
  },
  {
    name: "Gulasz węgierski z dynią",
    calories: 490, protein: 35, fats: 15, carbs: 48,
    type: "lunch",
    ingredients: [
      { item: "Schab bez kości", amount: "150g" },
      { item: "Dynia surowa", amount: "200g" },
      { item: "Papryka czerwona", amount: "100g" },
      { item: "Koncentrat pomidorowy", amount: "20g" }
    ],
    recipe: "1. Mięso i dynię pokrój w kostkę.\n2. Podduś mięso z cebulą, dodaj paprykę i dynię.\n3. Dodaj koncentrat i przyprawy (dużo papryki słodkiej i ostrej).\n4. Gotuj do miękkości składników."
  },
  {
    name: "Gulasz wołowy z pieczarkami",
    calories: 530, protein: 44, fats: 18, carbs: 42,
    type: "lunch",
    ingredients: [
      { item: "Wołowina chuda", amount: "150g" },
      { item: "Pieczarki", amount: "200g" },
      { item: "Cebula", amount: "50g" },
      { item: "Kasza gryczana (sucha)", amount: "50g" }
    ],
    recipe: "1. Wołowinę duś z cebulą do miękkości.\n2. W połowie czasu dodaj pokrojone w plastry pieczarki.\n3. Dopraw liściem laurowym i zielem angielskim.\n4. Podawaj z kaszą gryczaną."
  },
  {
    name: "Jednogarnkowe pęczotto z mieloną wieprzowiną i burakiem",
    calories: 550, protein: 32, fats: 18, carbs: 64,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z szynki", amount: "120g" },
      { item: "Kasza pęczak (sucha)", amount: "60g" },
      { item: "Buraki ugotowane", amount: "150g" },
      { item: "Bulion warzywny", amount: "300ml" }
    ],
    recipe: "1. Podsmaż mięso z cebulą w garnku.\n2. Wsyp suchą kaszę, chwilę smaż razem.\n3. Podlewaj bulionem porcjami, aż kasza wchłonie płyn.\n4. Na koniec dodaj starte buraki i wymieszaj. Podawaj z kleksem jogurtu."
  },
  {
    name: "Kaczka z sosem pomarańczowym, ryżem i kapustą",
    calories: 620, protein: 38, fats: 28, carbs: 55,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kaczki bez skóry", amount: "150g" },
      { item: "Pomarańcza", amount: "1 szt" },
      { item: "Ryż basmati (suchy)", amount: "50g" },
      { item: "Modra kapusta", amount: "150g" }
    ],
    recipe: "1. Kaczkę natrzyj majerankiem, upiecz w piekarniku.\n2. Z soku z pomarańczy i odrobiny miodu zredukuj sos na patelni.\n3. Kapustę poszatkuj i podduś z jabłkiem.\n4. Podawaj z ugotowanym ryżem."
  },
  {
    name: "Karmelizowany kurczak w czosnkowo imbirowym bulionie z ryżem",
    calories: 480, protein: 36, fats: 10, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "150g" },
      { item: "Imbir świeży", amount: "2 cm" },
      { item: "Czosnek", amount: "2 ząbki" },
      { item: "Miód", amount: "10g" },
      { item: "Ryż basmati (suchy)", amount: "60g" }
    ],
    recipe: "1. Kurczaka pokrój w kostkę, obsmaż z czosnkiem i imbirem.\n2. Dodaj miód i sos sojowy, karmelizuj chwilę.\n3. Podlej 100ml bulionu i gotuj 5 min.\n4. Podawaj z ryżem ugotowanym na sypko."
  },
  {
    name: "Komosa z sosem wołowym z dynią",
    calories: 510, protein: 34, fats: 16, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Wołowina mielona chuda", amount: "120g" },
      { item: "Komosa ryżowa (sucha)", amount: "60g" },
      { item: "Dynia surowa", amount: "150g" },
      { item: "Passata pomidorowa", amount: "100ml" }
    ],
    recipe: "1. Komosę ugotuj.\n2. Mięso podsmaż, dodaj dynię w kostkę.\n3. Zalej passatą i duś do miękkości dyni.\n4. Wymieszaj sos z komosą."
  },
  {
    name: "Kotleciki siekane z przepisu tysiągotuje",
    calories: 495, protein: 42, fats: 18, carbs: 32,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "180g" },
      { item: "Jajko", amount: "1 szt" },
      { item: "Ser Mozzarella Light", amount: "30g" },
      { item: "Papryka czerwona", amount: "50g" }
    ],
    recipe: "1. Kurczaka i paprykę posiekaj w bardzo drobną kostkę.\n2. Wymieszaj z jajkiem, startym serem i przyprawami.\n3. Nakładaj łyżką na patelnię formując placuszki.\n4. Smaż beztłuszczowo na złoty kolor."
  },
  {
    name: "Makaron z oczkami (sos pomidorowy z klopsikami)",
    calories: 540, protein: 35, fats: 15, carbs: 65,
    type: "lunch",
    ingredients: [
      { item: "Makaron pełnoziarnisty", amount: "70g" },
      { item: "Mięso mielone z indyka", amount: "120g" },
      { item: "Passata pomidorowa", amount: "150ml" },
      { item: "Oliwki czarne", amount: "4 szt" }
    ],
    recipe: "1. Z mięsa uformuj małe kuleczki, ugotuj w sosie pomidorowym.\n2. Makaron ugotuj al dente.\n3. Na wierzchu każdego klopsika połóż plasterek oliwki (jako 'oczko').\n4. Podawaj z dużą ilością bazylii."
  },
  {
    name: "Mini pizze pełnoziarniste",
    calories: 560, protein: 34, fats: 20, carbs: 60,
    type: "lunch",
    ingredients: [
      { item: "Mąka pełnoziarnista", amount: "80g" },
      { item: "Ser Mozzarella Light", amount: "60g" },
      { item: "Szynka drobiowa", amount: "40g" },
      { item: "Pieczarki", amount: "50g" }
    ],
    recipe: "1. Z mąki, wody i drożdży zrób ciasto, uformuj 2-3 mini placki.\n2. Posmaruj passatą, ułóż dodatki.\n3. Piecz w 220°C przez ok. 10-12 minut.\n4. Podawaj z rukolą."
  },
  {
    name: "Naleśniki z hummusem i kurczakiem",
    calories: 515, protein: 38, fats: 16, carbs: 54,
    type: "lunch",
    ingredients: [
      { item: "Mąka pszenna", amount: "50g" },
      { item: "Mleko 2%", amount: "100ml" },
      { item: "Hummus", amount: "40g" },
      { item: "Pierś z kurczaka", amount: "100g" }
    ],
    recipe: "1. Usmaż 2 cienkie naleśniki.\n2. Kurczaka upiecz w ziołach i pokrój w paski.\n3. Naleśniki posmaruj hummusem, ułóż kurczaka i świeży szpinak.\n4. Zwiń w rulon lub trójkąty."
  },
  {
    name: "Fit bigos",
    calories: 420, protein: 32, fats: 15, carbs: 38,
    type: "lunch",
    ingredients: [
      { item: "Kapusta kiszona", amount: "250g" },
      { item: "Schab bez kości", amount: "100g" },
      { item: "Grzyby suszone", amount: "10g" },
      { item: "Przecier pomidorowy", amount: "20g" }
    ],
    recipe: "1. Kapustę wypłucz i gotuj z grzybami.\n2. Mięso pokrój w kostkę i podsmaż beztłuszczowo.\n3. Połącz mięso z kapustą, dodaj koncentrat i śliwkę suszoną.\n4. Gotuj długo na małym ogniu."
  },
  {
    name: "Owsianka a'la Snickers",
    calories: 450, protein: 18, fats: 18, carbs: 54,
    type: "snack2",
    ingredients: [
      { item: "Płatki owsiane", amount: "50g" },
      { item: "Masło orzechowe", amount: "20g" },
      { item: "Kakao", amount: "5g" },
      { item: "Mleko 2%", amount: "150ml" },
      { item: "Daktyle", amount: "2 szt" }
    ],
    recipe: "1. Płatki gotuj na mleku z kakao.\n2. Dodaj posiekane daktyle.\n3. Na wierzch nałóż masło orzechowe i opcjonalnie szczyptę soli."
  },
  {
    name: "Pinsa z burratą",
    calories: 590, protein: 28, fats: 26, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Spód do pinsy/pizzy fit", amount: "1 szt" },
      { item: "Ser Burrata", amount: "100g" },
      { item: "Pomidorki koktajlowe", amount: "100g" },
      { item: "Rukola", amount: "1 garść" }
    ],
    recipe: "1. Spód podpiecz w piekarniku na chrupiąco.\n2. Wyjmij, ułóż na środku burratę, rozetnij ją.\n3. Dookoła ułóż pomidorki i rukolę.\n4. Skrop oliwą i kremem balsamicznym."
  },
  {
    name: "Polędwica wołowa z sosem balsamicznym",
    calories: 480, protein: 44, fats: 16, carbs: 38,
    type: "lunch",
    ingredients: [
      { item: "Stek z polędwicy wołowej", amount: "160g" },
      { item: "Ocet balsamiczny", amount: "30ml" },
      { item: "Szparagi/Brokuł", amount: "150g" },
      { item: "Ziemniaki pieczone", amount: "100g" }
    ],
    recipe: "1. Stek grilluj wg preferencji.\n2. Z octu i łyżeczki miodu zrób redukcję na patelni.\n3. Warzywa ugotuj al dente.\n4. Polej mięso sosem."
  },
  {
    name: "Ryż z mieszanką meksykańską i mięsem mielonym",
    calories: 525, protein: 35, fats: 14, carbs: 64,
    type: "lunch",
    ingredients: [
      { item: "Ryż basmati (suchy)", amount: "60g" },
      { item: "Wołowina mielona chuda", amount: "120g" },
      { item: "Mieszanka meksykańska mrożona", amount: "150g" }
    ],
    recipe: "1. Ryż ugotuj.\n2. Mięso smaż z cebulą, dodaj mieszankę warzywną.\n3. Podlej odrobiną wody i duś 10 min.\n4. Wymieszaj z ryżem i dopraw kminem rzymskim."
  },
  {
    name: "Sałatka z batatem i indykiem",
    calories: 470, protein: 34, fats: 12, carbs: 56,
    type: "lunch",
    ingredients: [
      { item: "Bataty", amount: "150g" },
      { item: "Pierś z indyka", amount: "120g" },
      { item: "Szpinak świeży", amount: "50g" },
      { item: "Ser Feta Light", amount: "30g" }
    ],
    recipe: "1. Bataty i indyka pokrój w kostkę, upiecz razem z ziołami.\n2. Połącz ze szpinakiem.\n3. Posyp pokruszoną fetą.\n4. Skrop sosem miodowo-musztardowym."
  },
  {
    name: "Schab pieczony z morelami",
    calories: 495, protein: 38, fats: 14, carbs: 54,
    type: "lunch",
    ingredients: [
      { item: "Schab bez kości", amount: "150g" },
      { item: "Morele suszone", amount: "30g" },
      { item: "Kasza pęczak (sucha)", amount: "50g" },
      { item: "Marchewka tarta", amount: "100g" }
    ],
    recipe: "1. W schabie zrób nacięcie, włóż morele.\n2. Piecz w rękawie przez ok. 50 min.\n3. Podawaj z kaszą i surówką z marchewki."
  },
  {
    name: "Tost z awokado i mozzarellą",
    calories: 430, protein: 18, fats: 24, carbs: 36,
    type: "breakfast",
    ingredients: [
      { item: "Chleb pełnoziarnisty", amount: "2 kromki" },
      { item: "Awokado", amount: "1/2 szt" },
      { item: "Ser Mozzarella Light", amount: "50g" }
    ],
    recipe: "1. Chleb opiecz w tosterze.\n2. Rozgnieć awokado, nałóż na tosty.\n3. Na wierzchu ułóż plastry mozzarelli i opcjonalnie płatki chili."
  },
  {
    name: "Wołowina po burgundzku",
    calories: 560, protein: 42, fats: 18, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Wołowina chuda", amount: "150g" },
      { item: "Cebula perłowa", amount: "50g" },
      { item: "Marchew", amount: "80g" },
      { item: "Ziemniaki gotowane", amount: "150g" }
    ],
    recipe: "1. Wołowinę duś długo z warzywami i odrobiną bulionu (tradycyjnie z winem, tu wersja fit).\n2. Sos zagęść zblendowaną częścią warzyw.\n3. Podawaj z ziemniakami z koperkiem."
  },
  {
    name: "Zupa meksykańska z dynią i kukurydzą",
    calories: 380, protein: 25, fats: 10, carbs: 45,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "100g" },
      { item: "Dynia surowa", amount: "150g" },
      { item: "Kukurydza konserwowa", amount: "50g" },
      { item: "Fasola czerwona", amount: "50g" }
    ],
    recipe: "1. Kurczaka i dynię pokrój w kostkę, ugotuj w bulionie.\n2. Pod koniec dodaj kukurydzę i fasolę.\n3. Dopraw wędzoną papryką i kminem rzymskim.\n4. Możesz podawać z łyżką jogurtu."
  },
  {
    name: "Zupa z pierożkami gyoza",
    calories: 410, protein: 28, fats: 12, carbs: 48,
    type: "lunch",
    ingredients: [
      { item: "Pierożki Gyoza (z kurczakiem)", amount: "6 szt" },
      { item: "Bulion warzywny", amount: "400ml" },
      { item: "Bok choy / Szpinak", amount: "50g" },
      { item: "Imbir świeży", amount: "1 cm" }
    ],
    recipe: "1. Do bulionu dodaj imbir i sos sojowy, zagotuj.\n2. Wrzuć pierożki gyoza i gotuj wg instrukcji na opakowaniu.\n3. Na koniec dodaj liście bok choy lub szpinaku na 1 minutę.\n4. Posyp szczypiorkiem."
  },
  {
    name: "Butter chicken (Fit)",
    calories: 530, protein: 38, fats: 18, carbs: 52,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "150g" },
      { item: "Przecier pomidorowy", amount: "100ml" },
      { item: "Jogurt naturalny", amount: "50g" },
      { item: "Ryż basmati (suchy)", amount: "50g" }
    ],
    recipe: "1. Kurczaka zamarynuj w garam masala i jogurcie.\n2. Podsmaż, dodaj przecier i duś.\n3. Na koniec dodaj odrobinę masła klarowanego (opcjonalnie) dla smaku.\n4. Podawaj z ryżem."
  },
  {
    name: "Curry warzywne z ziemniakami, groszkiem i szpinakiem",
    calories: 440, protein: 12, fats: 14, carbs: 65,
    type: "lunch",
    ingredients: [
      { item: "Ziemniaki", amount: "200g" },
      { item: "Groszek mrożony", amount: "100g" },
      { item: "Szpinak świeży", amount: "100g" },
      { item: "Mleczko kokosowe Light", amount: "100ml" }
    ],
    recipe: "1. Ziemniaki pokrój w kostkę, ugotuj w sosie curry z mleczkiem kokosowym.\n2. Gdy ziemniaki zmiękną, dodaj groszek.\n3. Na sam koniec wrzuć szpinak i poczekaj aż zwiędnie.\n4. Podawaj z sokiem z limonki."
  },
  {
    name: "Grochówka z mięsem",
    calories: 480, protein: 35, fats: 15, carbs: 55,
    type: "lunch",
    ingredients: [
      { item: "Groch łuskany (suchy)", amount: "60g" },
      { item: "Schab bez kości", amount: "100g" },
      { item: "Ziemniaki", amount: "100g" },
      { item: "Majeranek", amount: "2 łyżki" }
    ],
    recipe: "1. Groch ugotuj do miękkości.\n2. Dodaj ziemniaki i podsmażone chude mięso.\n3. Dopraw dużą ilością majeranku i czosnku.\n4. Gotuj do uzyskania gęstej konsystencji."
  },
  {
    name: "Kremowa polenta z sosem pieczarkowym i kurczakiem",
    calories: 510, protein: 36, fats: 14, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Kasza kukurydziana", amount: "50g" },
      { item: "Pierś z kurczaka", amount: "130g" },
      { item: "Pieczarki", amount: "150g" },
      { item: "Jogurt naturalny", amount: "30g" }
    ],
    recipe: "1. Kaszę kukurydzianą ugotuj na gęsto.\n2. Kurczaka i pieczarki podsmaż, dodaj jogurt i zioła tworząc sos.\n3. Polentę wyłóż na talerz, na wierzch nałóż sos z kurczakiem."
  },
  {
    name: "Kurczak Kung Pao",
    calories: 540, protein: 38, fats: 20, carbs: 52,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "150g" },
      { item: "Orzechy ziemne", amount: "20g" },
      { item: "Papryka zielona", amount: "100g" },
      { item: "Ryż basmati (suchy)", amount: "50g" }
    ],
    recipe: "1. Kurczaka smaż w woku z orzechami i papryką.\n2. Dodaj sos: sos sojowy, ocet ryżowy, odrobina miodu i chili.\n3. Smaż krótko, by warzywa były chrupiące.\n4. Podawaj z ryżem."
  },
  {
    name: "Kurczak na parze z ryżem i dynią",
    calories: 460, protein: 35, fats: 8, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "150g" },
      { item: "Dynia surowa", amount: "150g" },
      { item: "Ryż basmati (suchy)", amount: "60g" }
    ],
    recipe: "1. Kurczaka i dynię ugotuj na parze z ziołami.\n2. Ryż ugotuj tradycyjnie.\n3. Podawaj z sosem jogurtowo-ziołowym."
  },
  {
    name: "Kurczak z puree z kalafiora",
    calories: 420, protein: 40, fats: 12, carbs: 36,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "160g" },
      { item: "Kalafior", amount: "300g" },
      { item: "Ziemniaki", amount: "50g" }
    ],
    recipe: "1. Kurczaka upiecz w ulubionych przyprawach.\n2. Kalafiora i ziemniaki ugotuj, zblenduj na gładkie puree z dodatkiem gałki muszkatołowej.\n3. Podawaj z surówką z ogórka kiszonego."
  },
  {
    name: "Makaron z kurczakiem w sosie śmietanowo-ziołowym",
    calories: 550, protein: 38, fats: 16, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Makaron pełnoziarnisty", amount: "70g" },
      { item: "Pierś z kurczaka", amount: "130g" },
      { item: "Jogurt naturalny", amount: "50g" },
      { item: "Suszone zioła", amount: "1 łyżka" }
    ],
    recipe: "1. Makaron ugotuj.\n2. Kurczaka podsmaż, wymieszaj z jogurtem i ziołami prowansalskimi.\n3. Połącz składniki na patelni.\n4. Posyp parmezanem (opcjonalnie)."
  },
  {
    name: "Makaron z sosem kurkowym",
    calories: 490, protein: 28, fats: 15, carbs: 60,
    type: "lunch",
    ingredients: [
      { item: "Makaron pełnoziarnisty", amount: "70g" },
      { item: "Kurki świeże/mrożone", amount: "150g" },
      { item: "Cebula", amount: "40g" },
      { item: "Jogurt naturalny", amount: "50g" }
    ],
    recipe: "1. Cebulę posiekaj, podsmaż z kurkami.\n2. Dodaj jogurt i dużo koperku.\n3. Wymieszaj z ugotowanym makaronem.\n4. Możesz dodać grillowanego kurczaka dla większej ilości białka."
  },
  {
    name: "Pieczone udka kurczaka, młoda kapusta i ziemniaki",
    calories: 580, protein: 42, fats: 24, carbs: 48,
    type: "lunch",
    ingredients: [
      { item: "Podudzie z kurczaka bez skóry", amount: "200g" },
      { item: "Młoda kapusta", amount: "200g" },
      { item: "Ziemniaki", amount: "150g" }
    ],
    recipe: "1. Udka upiecz w przyprawie do drobiu.\n2. Kapustę poszatkuj i podduś z koperkiem.\n3. Ziemniaki ugotuj z koperkiem.\n4. Klasyczny, niedzielny obiad w wersji fit."
  },
  {
    name: "Pierś z kurczaka z ryżem i mrożonką meksykańską",
    calories: 490, protein: 36, fats: 10, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Pierś z kurczaka", amount: "150g" },
      { item: "Ryż basmati (suchy)", amount: "60g" },
      { item: "Mieszanka meksykańska", amount: "150g" }
    ],
    recipe: "1. Kurczaka podsmaż w kostkę.\n2. Dodaj mrożonkę, podduś pod przykryciem.\n3. Wymieszaj z ugotowanym ryżem.\n4. Dopraw chili i kolendrą."
  },
  {
    name: "Potrawka z mielonym indykiem, batatami i cukinią",
    calories: 485, protein: 32, fats: 15, carbs: 54,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z indyka", amount: "130g" },
      { item: "Bataty", amount: "150g" },
      { item: "Cukinia", amount: "150g" }
    ],
    recipe: "1. Indyka podsmaż w garnku.\n2. Dodaj bataty w kostkę i cukinię w półplastry.\n3. Podlej 100ml wody i duś do miękkości warzyw.\n4. Dopraw tymiankiem i czosnkiem."
  },
  {
    name: "Risotto z kurkami, kurczakiem i parmezanem",
    calories: 540, protein: 38, fats: 18, carbs: 56,
    type: "lunch",
    ingredients: [
      { item: "Ryż do risotto (Arborio)", amount: "60g" },
      { item: "Kurczak", amount: "100g" },
      { item: "Kurki", amount: "100g" },
      { item: "Bulion warzywny", amount: "300ml" }
    ],
    recipe: "1. Ryż smaż z kurczakiem i kurkami.\n2. Podlewaj bulionem porcjami, ciągle mieszając.\n3. Gdy ryż będzie kremowy, zdejmij z ognia.\n4. Posyp odrobiną parmezanu."
  },
  {
    name: "Sałatka z kaszy jaglanej z kurczakiem",
    calories: 460, protein: 34, fats: 12, carbs: 54,
    type: "lunch",
    ingredients: [
      { item: "Kasza jaglana (sucha)", amount: "50g" },
      { item: "Pierś z kurczaka", amount: "120g" },
      { item: "Pomidorki koktajlowe", amount: "100g" },
      { item: "Ogórek świeży", amount: "80g" }
    ],
    recipe: "1. Kaszę ugotuj i ostudź.\n2. Kurczaka grilluj w ziołach.\n3. Warzywa pokrój, wymieszaj wszystko razem.\n4. Dodaj sos na bazie jogurtu i czosnku."
  },
  {
    name: "Schab w sosie paprykowym z ryżem",
    calories: 510, protein: 36, fats: 14, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Schab bez kości", amount: "150g" },
      { item: "Papryka czerwona", amount: "150g" },
      { item: "Ryż basmati (suchy)", amount: "50g" }
    ],
    recipe: "1. Schab pokrój w paski, podsmaż.\n2. Paprykę upiecz, zdejmij skórę i zblenduj na gładki sos z przyprawami.\n3. Połącz mięso z sosem.\n4. Podawaj z ryżem."
  }
];

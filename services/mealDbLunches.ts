
import { Meal } from "../types";

export const LUNCH_MEALS: Meal[] = [
  {
    name: "Bowl z szarpaną wieprzowiną i salsą ananasową",
    calories: 680, protein: 42, fats: 24, carbs: 75,
    type: "lunch",
    ingredients: [{ item: "Ryż", amount: "150g" }, { item: "Łopatka wieprzowa", amount: "500g" }, { item: "Cebula", amount: "80g" }, { item: "Czosnek", amount: "12g" }, { item: "Bulion warzywny", amount: "300g" }, { item: "Ocet jabłkowy", amount: "15g" }, { item: "Sos sojowy", amount: "10g" }, { item: "Ananas świeży", amount: "200g" }, { item: "Papryka zielona", amount: "85g" }],
    recipe: "1. Mięso pokroić, posolić, popieprzyć. 2. Cebulę i czosnek posiekać. 3. Obsmażyć mięso na oliwie. 4. Podsmażyć cebulę z czosnkiem i przyprawami. 5. Dodać mięso, bulion, ocet i sos sojowy. 6. Dusić pod przykryciem 3-4 godziny do miękkości. 7. Szarpać mięso widelcem. 8. Salsę przygotować z ananasa, cebuli, papryki i limonki. 9. Podać z ryżem."
  },
  {
    name: "Burger z pieczonymi ziemniakami i surówką",
    calories: 590, protein: 38, fats: 22, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Indyk mielony", amount: "150g" }, { item: "Ziemniaki", amount: "140g" }, { item: "Cebula czerwona", amount: "80g" }, { item: "Jogurt naturalny", amount: "40g" }, { item: "Majonez light", amount: "20g" }, { item: "Miks sałat", amount: "50g" }],
    recipe: "1. Ziemniaki pokroić w słupki, piec 25-30 min w 200°C. 2. Mięso wymieszać z posiekaną cebulą, czosnkiem i przyprawą gyros. 3. Formować burgera, smażyć 4-5 min z każdej strony. 4. Surówkę przygotować z marchwi, sałaty, jogurtu i majonezu. 5. Podać razem."
  },
  {
    name: "Duszona wołowina z warzywami i kaszą",
    calories: 620, protein: 45, fats: 18, carbs: 68,
    type: "lunch",
    ingredients: [{ item: "Polędwica wołowa", amount: "500g" }, { item: "Marchew", amount: "240g" }, { item: "Cebula", amount: "160g" }, { item: "Bulion warzywny", amount: "750g" }, { item: "Kasza", amount: "100g" }, { item: "Koncentrat pomidorowy", amount: "25g" }],
    recipe: "1. Kaszę ugotować. 2. Mięso w kostkę przyprawić, obsmażyć. 3. Podsmażyć cebulę i marchew. 4. Dodać mięso, koncentrat i bulion. 5. Dusić 15-30 min do miękkości. 6. Podawać z natką pietruszki."
  },
  {
    name: "Gulasz węgierski z dynią",
    calories: 540, protein: 36, fats: 14, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Polędwica wołowa", amount: "300g" }, { item: "Dynia", amount: "200g" }, { item: "Marchewka", amount: "120g" }, { item: "Papryka czerwona", amount: "85g" }, { item: "Bulion warzywny", amount: "500g" }, { item: "Chleb żytni", amount: "120g" }],
    recipe: "1. Mięso i warzywa pokroić. 2. Mięso obsmażyć 2-3 min. 3. Smażyć cebulę, czosnek, marchew i paprykę 4-5 min. 4. Dodać mięso, koncentrat i bulion. 5. Dusić 20-25 min. 6. Dodać dynię, dusić 10-15 min. 7. Podać z chlebem."
  },
  {
    name: "Gulasz wołowy z pieczarkami",
    calories: 580, protein: 42, fats: 16, carbs: 66,
    type: "lunch",
    ingredients: [{ item: "Polędwica wołowa", amount: "400g" }, { item: "Pieczarki", amount: "160g" }, { item: "Kasza pęczak", amount: "100g" }, { item: "Marchew", amount: "160g" }, { item: "Bulion", amount: "500g" }],
    recipe: "1. Mięso w mące obsmażyć. 2. Smażyć cebulę i czosnek. 3. Dodać mięso i przyprawy. 4. Wlać bulion, dusić 30-40 min. 5. Pieczarki podsmażyć osobno i dodać do gulaszu. 6. Marchew ugotować osobno. 7. Podawać z kaszą."
  },
  {
    name: "Jednogarnkowe pęczotto z mieloną wieprzowiną i burakiem",
    calories: 610, protein: 32, fats: 28, carbs: 60,
    type: "lunch",
    ingredients: [{ item: "Kasza pęczak", amount: "150g" }, { item: "Buraki ugotowane", amount: "300g" }, { item: "Mielona wieprzowina", amount: "250g" }, { item: "Pestki dyni", amount: "20g" }, { item: "Bulion", amount: "700g" }],
    recipe: "1. Część buraków w kostkę, reszta na puree. 2. Cebulę i czosnek zeszklić. 3. Smażyć kaszę 2 min. 4. Dolewać bulion partiami przez 15 min. 5. Dodać puree z buraków i resztę bulionu, gotować do miękkości. 6. Mięso usmażyć osobno na brązowo. 7. Podać kaszę z mięsem, burakami w kostce i pestkami."
  },
  {
    name: "Kaczka z sosem pomarańczowym, ryżem i kapustą",
    calories: 720, protein: 44, fats: 38, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Pierś kaczki", amount: "400g" }, { item: "Ryż", amount: "100g" }, { item: "Pomarańcza", amount: "480g" }, { item: "Miód", amount: "24g" }, { item: "Czerwona kapusta", amount: "200g" }],
    recipe: "1. Ryż ugotować. 2. Skórę kaczki naciąć, smażyć 4 min od skóry, 1 min od mięsa. Piec 15 min w 200°C. 3. Sos: sok z pomarańczy, rodzynki, miód, przyprawy zredukować na patelni. 4. Kapustę posiekać, dusić z sokiem pomarańczowym i cynamonem. 5. Podawać plastry kaczki z sosem, ryżem i kapustą."
  },
  {
    name: "Karmelizowany kurczak w bulionie z ryżem",
    calories: 560, protein: 38, fats: 16, carbs: 64,
    type: "lunch",
    ingredients: [{ item: "Udka kurczaka b/s b/k", amount: "300g" }, { item: "Ryż jaśminowy", amount: "150g" }, { item: "Sos sojowy", amount: "40g" }, { item: "Cukier", amount: "20g" }, { item: "Bulion", amount: "200g" }],
    recipe: "1. Ryż ugotować. 2. Marynata: sos sojowy, cukier, imbir, czosnek. 3. Kurczaka smażyć 3 min na stronę. 4. Wlać marynatę i bulion, dusić 10-12 min pod przykryciem do zgęstnienia sosu. 5. Posypać szczypiorkiem."
  },
  {
    name: "Komosa z sosem wołowym z dynią",
    calories: 480, protein: 34, fats: 14, carbs: 55,
    type: "lunch",
    ingredients: [{ item: "Komosa ryżowa", amount: "50g" }, { item: "Polędwica wołowa", amount: "150g" }, { item: "Dynia", amount: "150g" }, { item: "Passata", amount: "150g" }, { item: "Bulion", amount: "125g" }],
    recipe: "1. Komosę ugotować. 2. Cebulę i czosnek zeszklić. 3. Mięso smażyć 4-5 min. 4. Dodać dynię, paprykę i oregano. 5. Wlać passatę i bulion, dusić 10-12 min pod przykryciem. 6. Posypać natką."
  },
  {
    name: "Kotleciki siekane z sałatką i ziemniakami",
    calories: 590, protein: 46, fats: 20, carbs: 60,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "500g" }, { item: "Ziemniaki", amount: "560g" }, { item: "Mozzarella", amount: "60g" }, { item: "Jaja", amount: "112g" }, { item: "Miks sałat", amount: "100g" }],
    recipe: "1. Ziemniaki piec 20-30 min w 190°C. 2. Mięso w kostkę wymieszać z tartą marchwią, papryką, mąką, jajkami i serem. 3. Piec kotleciki 25 min. 4. Sałatkę przygotować z warzyw, oliwy i cytryny. 5. Podać wszystko razem."
  },
  {
    name: "Makaron z oczami",
    calories: 440, protein: 26, fats: 14, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Makaron spaghetti", amount: "70g" }, { item: "Indyk mielony", amount: "100g" }, { item: "Passata", amount: "250g" }, { item: "Mozzarella mini", amount: "35g" }, { item: "Oliwki czarne", amount: "15g" }],
    recipe: "1. Makaron ugotować. 2. Cebulę i czosnek zeszklić, dodać mięso, smażyć 5-6 min. 3. Wlać passatę, dusić 5 min. 4. Wymieszać makaron z sosem. 5. Na wierzchu ułożyć mozzarellę z oliwkami jako 'oczy'."
  },
  {
    name: "Mini pizze pełnoziarniste",
    calories: 550, protein: 30, fats: 16, carbs: 70,
    type: "lunch",
    ingredients: [{ item: "Mąka pełnoziarnista", amount: "300g" }, { item: "Drożdże", amount: "15g" }, { item: "Pomidory puszka", amount: "400g" }, { item: "Kurczak", amount: "50g" }, { item: "Pieczarki", amount: "100g" }],
    recipe: "1. Zrobić ciasto drożdżowe, odstawić na 30 min. 2. Kurczaka i warzywa przygotować. 3. Sos pomidorowy z bazylią i czosnkiem gotować 7 min. 4. Formować 4 małe pizze, piec 6-8 min w 220°C."
  },
  {
    name: "Naleśniki z hummusem i kurczakiem",
    calories: 610, protein: 40, fats: 22, carbs: 64,
    type: "lunch",
    ingredients: [{ item: "Hummus", amount: "100g" }, { item: "Pierś kurczaka", amount: "200g" }, { item: "Mąka pełnoziarnista", amount: "150g" }, { item: "Jajka", amount: "112g" }, { item: "Mleko", amount: "200g" }],
    recipe: "1. Usmażyć naleśniki. 2. Kurczaka w paski grillować 6-7 min z przyprawami. 3. Warzywa posiekać w kostkę z sokiem z cytryny i oliwą. 4. Naleśniki smarować hummusem, kłaść salsę i kurczaka, zawijać."
  },
  {
    name: "Fit bigos ze schabem i frankfurterkami",
    calories: 520, protein: 38, fats: 24, carbs: 40,
    type: "lunch",
    ingredients: [{ item: "Schab wieprzowy", amount: "125g" }, { item: "Frankfurterki", amount: "170g" }, { item: "Kapusta kiszona", amount: "700g" }, { item: "Pieczarki", amount: "160g" }, { item: "Chleb żytni", amount: "120g" }],
    recipe: "1. Schab i cebulę podsmażyć, zalać wodą, gotować do miękkości. 2. Dodać kapustę kiszoną, dusić. 3. Frankfurterki i pieczarki podsmażyć osobno i dodać do garnka. 4. Podać z chlebem."
  },
  {
    name: "Owsianka a’la Snickers",
    calories: 490, protein: 18, fats: 18, carbs: 68,
    type: "lunch",
    ingredients: [{ item: "Płatki owsiane", amount: "100g" }, { item: "Banan", amount: "120g" }, { item: "Mleko 1.5%", amount: "400g" }, { item: "Masło orzechowe", amount: "20g" }, { item: "Czekolada gorzka", amount: "12g" }],
    recipe: "1. Płatki gotować z mlekiem. 2. Dodać czekoladę i masło orzechowe, wymieszać. 3. Przełożyć do miski, dodać banany i orzechy."
  },
  {
    name: "Pinsa z burratą i szynką Serrano",
    calories: 640, protein: 32, fats: 32, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Pinsa", amount: "220g" }, { item: "Sos pomidorowy", amount: "200g" }, { item: "Szynka Serrano", amount: "100g" }, { item: "Burrata", amount: "120g" }, { item: "Mozzarella", amount: "120g" }],
    recipe: "1. Pinsę smarować sosem, kłaść mozzarellę i cebulę. 2. Piecz 10-12 min w 220°C. 3. Na gorącą położyć szynkę i burratę."
  },
  {
    name: "Polędwica wołowa z sosem balsamicznym i puree",
    calories: 510, protein: 40, fats: 18, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Polędwica wołowa", amount: "150g" }, { item: "Ziemniaki", amount: "210g" }, { item: "Brokuł", amount: "150g" }, { item: "Ocet balsamiczny", amount: "30g" }, { item: "Miód", amount: "12g" }],
    recipe: "1. Zrobić puree z ziemniaków i masła. 2. Brokuł gotować 6-7 min. 3. Mięso smażyć 2-4 min na stronę. 4. Sos: ocet i miód zredukować na patelni do syropu. 5. Polać mięso sosem."
  },
  {
    name: "Ryż z mieszanką meksykańską i mięsem",
    calories: 530, protein: 34, fats: 12, carbs: 70,
    type: "lunch",
    ingredients: [{ item: "Ryż jaśminowy", amount: "100g" }, { item: "Mięso mielone", amount: "200g" }, { item: "Mieszanka meksykańska", amount: "200g" }, { item: "Pomidory puszka", amount: "200g" }],
    recipe: "1. Mięso usmażyć na oliwie. 2. Dodać cebulę, czosnek i przyprawy. 3. Wsypać ryż, smażyć 2 min. 4. Wlać pomidory i bulion, gotować 10 min. 5. Dodać warzywa mrożone, gotować 5-7 min."
  },
  {
    name: "Sałatka z batatem i indykiem",
    calories: 560, protein: 36, fats: 22, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Batat", amount: "400g" }, { item: "Pierś indyka", amount: "150g" }, { item: "Miks sałat", amount: "100g" }, { item: "Migdały", amount: "30g" }, { item: "Musztarda", amount: "15g" }],
    recipe: "1. Bataty piecz 20-25 min w 200°C. 2. Indyka smażyć 5-7 min w kostce. 3. Zrobić sos z musztardy, syropu, cytryny i oliwy. 4. Wszystko wymieszać, sypać migdałami."
  },
  {
    name: "Schab pieczony z morelami i jabłkiem",
    calories: 580, protein: 42, fats: 14, carbs: 72,
    type: "lunch",
    ingredients: [{ item: "Schab wieprzowy", amount: "360g" }, { item: "Kopytka", amount: "250g" }, { item: "Morele suszone", amount: "42g" }, { item: "Jabłko", amount: "150g" }, { item: "Marchewka", amount: "160g" }],
    recipe: "1. Mięso smarować musztardą i przyprawami, piec 30 min pod przykryciem. 2. Dodać morele i jabłka, piec 30 min bez przykrycia. 3. Marchew piec obok. 4. Podać z kopytkami."
  },
  {
    name: "Tost z awokado i mozzarellą",
    calories: 420, protein: 16, fats: 26, carbs: 32,
    type: "lunch",
    ingredients: [{ item: "Chleb żytni", amount: "60g" }, { item: "Mozzarella", amount: "60g" }, { item: "Awokado", amount: "70g" }, { item: "Pomidor", amount: "80g" }],
    recipe: "1. Chleb obłożyć serem, pomidorem i awokado. 2. Przykryć drugą kromką. 3. Smażyć na patelni pod przykryciem 3 min na stronę do roztopienia sera."
  },
  {
    name: "Wołowina po burgundzku",
    calories: 640, protein: 38, fats: 28, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Polędwica wołowa", amount: "150g" }, { item: "Boczek parzony", amount: "30g" }, { item: "Ziemniaki", amount: "210g" }, { item: "Wino czerwone wytrawne", amount: "75g" }, { item: "Bulion", amount: "250g" }],
    recipe: "1. Zrobić puree z ziemniaków. 2. Smażyć boczek z cebulą, potem dodać wołowinę. 3. Dodać marchew i pieczarki, wlać wino i odparować. 4. Wlać bulion, dusić 15 min pod przykryciem. 5. Posypać natką."
  },
  {
    name: "Zupa meksykańska z dynią i kukurydzą",
    calories: 520, protein: 30, fats: 20, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Indyk mielony", amount: "150g" }, { item: "Dynia", amount: "200g" }, { item: "Kukurydza", amount: "120g" }, { item: "Fasola czerwona", amount: "120g" }, { item: "Nachosy", amount: "60g" }],
    recipe: "1. Smażyć cebulę, czosnek, dynię i paprykę. 2. Zalać bulionem, gotować 12 min, zblendować na krem. 3. Mięso usmażyć osobno. 4. Dodać mięso, kukurydzę i fasolę do zupy, podgrzać 5 min. 5. Podać z nachosami."
  },
  {
    name: "Zupa z pierożkami gyoza",
    calories: 470, protein: 22, fats: 12, carbs: 70,
    type: "lunch",
    ingredients: [{ item: "Makaron ryżowy", amount: "100g" }, { item: "Pierożki gyoza", amount: "230g" }, { item: "Pak choi", amount: "100g" }, { item: "Bulion warzywny", amount: "500g" }],
    recipe: "1. Makaron przygotować wg instrukcji. 2. Do wrzącego bulionu dodać imbir, sos sojowy i olej sezamowy. 3. Gotować pierożki 5-7 min. 4. Pod koniec dodać pak choi na 1 min. 5. Zalać makaron zupą."
  },
  {
    name: "Butter chicken z ryżem",
    calories: 690, protein: 44, fats: 32, carbs: 60,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "300g" }, { item: "Ryż jaśminowy", amount: "60g" }, { item: "Jogurt", amount: "100g" }, { item: "Passata", amount: "200g" }, { item: "Śmietanka 12%", amount: "108g" }, { item: "Masło", amount: "30g" }],
    recipe: "1. Kurczaka marynować w jogurcie i przyprawach (min 1h). 2. Smażyć cebulę na maśle, dodać passatę i przyprawy. 3. Kurczaka smażyć osobno i dodać do sosu. 4. Wlać śmietankę, dusić 5 min. 5. Podać z ryżem."
  },
  {
    name: "Curry z kurczakiem i ziemniakami",
    calories: 630, protein: 40, fats: 28, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "400g" }, { item: "Ziemniaki", amount: "490g" }, { item: "Mleczko kokosowe", amount: "400g" }, { item: "Pomidory puszka", amount: "400g" }, { item: "Pasta curry", amount: "20g" }],
    recipe: "1. Mięso obsmażyć i odłożyć. 2. Ziemniaki i fasolkę gotować w bulionie i mleczku 20 min. 3. Dodać mięso, szpinak i groszek, gotować 5 min. 4. Posypać kolendrą."
  },
  {
    name: "Grochówka z kurczakiem",
    calories: 550, protein: 42, fats: 14, carbs: 68,
    type: "lunch",
    ingredients: [{ item: "Groch", amount: "200g" }, { item: "Pierś kurczaka", amount: "400g" }, { item: "Ziemniaki", amount: "280g" }, { item: "Cebula", amount: "80g" }, { item: "Bulion", amount: "1000ml" }],
    recipe: "1. Groch gotować 45 min. 2. Warzywa i mięso w kostkę smażyć na oleju 5 min. 3. Połączyć z grochem, gotować 20 min. 4. Dodać majeranek pod koniec."
  },
  {
    name: "Kremowa polenta z kurczakiem i pieczarkami",
    calories: 495, protein: 32, fats: 18, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Kasza kukurydziana", amount: "60g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Pieczarki", amount: "150g" }, { item: "Bulion", amount: "125g" }],
    recipe: "1. Ugotować polentę. 2. Kurczaka usmażyć, odłożyć. 3. Pieczarki smażyć 7 min, zalać bulionem do zgęstnienia. 4. Połączyć z mięsem. 5. Podawać na polencie."
  },
  {
    name: "Kurczak Kung Pao",
    calories: 580, protein: 38, fats: 26, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "175g" }, { item: "Ryż basmati", amount: "80g" }, { item: "Orzechy nerkowca", amount: "20g" }, { item: "Papryka czerwona", amount: "85g" }, { item: "Cukinia", amount: "100g" }],
    recipe: "1. Kurczaka marynować w sosie sojowym. 2. Smażyć mięso, odłożyć. 3. Smażyć warzywa 2 min. 4. Dodać mięso, nerkowce i sos ze skrobią, smażyć do zgęstnienia. 5. Podawać z ryżem."
  },
  {
    name: "Kurczak na parze z puree z dyni",
    calories: 450, protein: 34, fats: 10, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "200g" }, { item: "Ryż biały", amount: "80g" }, { item: "Dynia", amount: "150g" }, { item: "Masło", amount: "5g" }],
    recipe: "1. Kurczaka parować 20 min w ziołach. 2. Dynię ugotować w małej wodzie 15 min, rozgnieść z masłem. 3. Podawać z ryżem i natką."
  },
  {
    name: "Kurczak z puree z kalafiora",
    calories: 430, protein: 32, fats: 12, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "150g" }, { item: "Kalafior", amount: "200g" }, { item: "Ziemniaki", amount: "140g" }, { item: "Masło", amount: "10g" }],
    recipe: "1. Kurczaka parować 20 min. 2. Kalafior i ziemniaki gotować 15 min, zblendować z masłem i jogurtem. 3. Przyprawić gałką muszkatołową."
  },
  {
    name: "Makaron z kurczakiem i cukinią w śmietance",
    calories: 570, protein: 38, fats: 18, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Makaron", amount: "150g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Cukinia", amount: "200g" }, { item: "Śmietanka 12%", amount: "144g" }],
    recipe: "1. Makaron ugotować. 2. Kurczaka smażyć na złoto. 3. Dodać cukinię i cebulę, smażyć 5 min. 4. Wlać śmietankę, zioła i dusić 3 min. 5. Wymieszać."
  },
  {
    name: "Makaron z sosem kurkowym i kurczakiem",
    calories: 540, protein: 36, fats: 20, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Makaron", amount: "50g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Kurki", amount: "100g" }, { item: "Śmietana 18%", amount: "75g" }],
    recipe: "1. Mięso smażyć 5 min. 2. Dodać kurki, smażyć 6 min. 3. Wlać śmietanę z mąką, gotować 3 min. 4. Wymieszać z ugotowanym makaronem."
  },
  {
    name: "Pieczone udka z kurczaka z młodą kapustą",
    calories: 620, protein: 42, fats: 34, carbs: 40,
    type: "lunch",
    ingredients: [{ item: "Udka kurczaka b/s", amount: "320g" }, { item: "Ziemniaki", amount: "490g" }, { item: "Młoda kapusta", amount: "500g" }, { item: "Oliwa", amount: "20g" }],
    recipe: "1. Mięso marynować w oliwie i papryce, piec 45 min w 200°C. 2. Ziemniaki ugotować. 3. Kapustę dusić z cebulą i koperkiem 20 min. 4. Podawać razem."
  },
  {
    name: "Kurczak z ryżem i mrożonką meksykańską",
    calories: 490, protein: 32, fats: 10, carbs: 68,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "150g" }, { item: "Ryż basmati", amount: "70g" }, { item: "Mieszanka meksykańska", amount: "200g" }, { item: "Passata", amount: "150g" }],
    recipe: "1. Ryż ugotować. 2. Kurczaka smażyć z cebulą. 3. Dodać mrożonkę, smażyć 6 min. 4. Wlać passatę, dusić 6 min. 5. Posypać natką."
  },
  {
    name: "Potrawka z mielonym indykiem i batatami",
    calories: 510, protein: 28, fats: 18, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Indyk mielony", amount: "150g" }, { item: "Batat", amount: "200g" }, { item: "Cukinia", amount: "100g" }, { item: "Passata", amount: "375g" }],
    recipe: "1. Mięso smażyć do sypkości 7 min. 2. Dodać bataty i cukinię w kostkę. 3. Wlać passatę, dusić 20 min pod przykryciem."
  },
  {
    name: "Risotto z kurkami i indykiem",
    calories: 550, protein: 36, fats: 22, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Ryż arborio", amount: "60g" }, { item: "Pierś indyka", amount: "150g" }, { item: "Kurki", amount: "100g" }, { item: "Parmezan", amount: "20g" }],
    recipe: "1. Mięso i kurki smażyć osobno. 2. Ryż szklić 2 min, dolewać bulion partiami przez 20 min. 3. Dodać ser, mięso i grzyby, wymieszać."
  },
  {
    name: "Sałatka z kaszy jaglanej i kurczaka",
    calories: 480, protein: 34, fats: 14, carbs: 56,
    type: "lunch",
    ingredients: [{ item: "Kasza jaglana", amount: "70g" }, { item: "Pierś kurczaka", amount: "125g" }, { item: "Jogurt naturalny", amount: "80g" }, { item: "Kukurydza", amount: "120g" }],
    recipe: "1. Kaszę ugotować. 2. Kurczaka parować 20 min, pokroić w kostkę. 3. Wymieszać z warzywami, jogurtem i majonezem."
  },
  {
    name: "Schab w sosie paprykowym z ryżem",
    calories: 610, protein: 44, fats: 18, carbs: 70,
    type: "lunch",
    ingredients: [{ item: "Ryż basmati", amount: "100g" }, { item: "Schab wieprzowy", amount: "300g" }, { item: "Papryka czerwona", amount: "170g" }, { item: "Cukinia", amount: "200g" }],
    recipe: "1. Paprykę upiec i obrać, zblendować z pomidorami na sos. 2. Mięso smażyć z cukinią. 3. Zalać sosem, dusić 20 min. 4. Podać z ryżem."
  },
  {
    name: "Pierś kurczaka z fasolką szparagową i puree",
    calories: 440, protein: 36, fats: 12, carbs: 50,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "150g" }, { item: "Ziemniaki", amount: "210g" }, { item: "Fasolka szparagowa", amount: "200g" }, { item: "Masło", amount: "10g" }],
    recipe: "1. Ziemniaki i fasolkę ugotować. 2. Mięso usmażyć na złoto. 3. Zrobić zasmażkę z bułki tartej na maśle, polań fasolkę."
  },
  {
    name: "Bigos z młodej kapusty z kurczakiem",
    calories: 480, protein: 32, fats: 16, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Młoda kapusta", amount: "700g" }, { item: "Kurczak mielony", amount: "200g" }, { item: "Koncentrat", amount: "50g" }, { item: "Chleb żytni", amount: "120g" }],
    recipe: "1. Kapustę i cebulę dusić. 2. Dodać mięso, smażyć 10 min. 3. Dodać wodę i dusić 20 min. 4. Dodać koncentrat i koperek."
  },
  {
    name: "Wołowa zupa gulaszowa z warzywami",
    calories: 460, protein: 38, fats: 14, carbs: 42,
    type: "lunch",
    ingredients: [{ item: "Polędwica wołowa", amount: "150g" }, { item: "Ziemniaki", amount: "140g" }, { item: "Marchewka", amount: "80g" }, { item: "Bulion", amount: "500g" }],
    recipe: "1. Mięso gotować 30 min w bulionie. 2. Dodać warzywa, gotować 20 min. 3. Dodać koncentrat, gotować 10 min."
  },
  {
    name: "Wrapy z kurczakiem i czosnkiem",
    calories: 490, protein: 34, fats: 15, carbs: 55,
    type: "lunch",
    ingredients: [{ item: "Tortilla", amount: "60g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Papryka", amount: "85g" }, { item: "Jogurt", amount: "60g" }],
    recipe: "1. Kurczaka w przyprawach usmażyć. 2. Zrobić sos z jogurtu i czosnku. 3. Tortillę podgrzać, zawinąć mięso z warzywami i sosem."
  },
  {
    name: "Zupa krem z kukurydzy i kurczaka",
    calories: 410, protein: 28, fats: 12, carbs: 50,
    type: "lunch",
    ingredients: [{ item: "Kukurydza", amount: "240g" }, { item: "Ziemniaki", amount: "210g" }, { item: "Pierś kurczaka", amount: "200g" }, { item: "Bulion", amount: "500g" }],
    recipe: "1. Kurczaka usmażyć. 2. Warzywa gotować w bulionie 15 min. 3. Część zblendować, połączyć z mięsem i resztą zupy."
  },
  {
    name: "Hot dogi w cieście francuskim",
    calories: 670, protein: 32, fats: 40, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Ciasto francuskie", amount: "275g" }, { item: "Frankfurterki", amount: "336g" }, { item: "Mozzarella", amount: "75g" }],
    recipe: "1. Ciasto smarować ketchupem, sypać serem. 2. Zawijać kiełbaski, piec 15-20 min w 200°C."
  },
  {
    name: "Indyk z botwinką i pęczakiem",
    calories: 520, protein: 38, fats: 12, carbs: 64,
    type: "lunch",
    ingredients: [{ item: "Kasza pęczak", amount: "150g" }, { item: "Botwina", amount: "300g" }, { item: "Pierś indyka", amount: "300g" }, { item: "Bulion", amount: "1000g" }],
    recipe: "1. Robić pęczotto dolewając bulion do kaszy i mięsa partiami. 2. Na koniec dodać botwinę i słonecznik."
  },
  {
    name: "Jednogarnkowy indyk z warzywami",
    calories: 490, protein: 40, fats: 10, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Pierś indyka", amount: "500g" }, { item: "Marchew", amount: "160g" }, { item: "Kasza", amount: "150g" }, { item: "Młoda kapusta", amount: "200g" }],
    recipe: "1. Mięso smażyć, dodać warzywa i kaszę. 2. Zalać bulionem, gotować 25 min pod przykryciem."
  },
  {
    name: "Kasza jaglana z indykiem i pesto pietruszkowym",
    calories: 485, protein: 34, fats: 22, carbs: 44,
    type: "lunch",
    ingredients: [{ item: "Kasza jaglana", amount: "50g" }, { item: "Pierś indyka", amount: "150g" }, { item: "Bakłażan", amount: "200g" }, { item: "Pesto", amount: "40g" }],
    recipe: "1. Kaszę ugotować. 2. Mięso i bakłażana upiec 25 min. 3. Kaszę wymieszać z pesto, podać z pieczonymi składnikami."
  },
  {
    name: "Kasza jaglana z puree z kalafiora i indykiem",
    calories: 460, protein: 38, fats: 14, carbs: 42,
    type: "lunch",
    ingredients: [{ item: "Kasza jaglana", amount: "60g" }, { item: "Pierś indyka", amount: "200g" }, { item: "Kalafior", amount: "200g" }],
    recipe: "1. Indyka parować 20 min. 2. Kalafiora ugotować, zblendować z oliwą i przyprawami na puree."
  },
  {
    name: "Krem marchewkowy z indykiem",
    calories: 380, protein: 26, fats: 10, carbs: 42,
    type: "lunch",
    ingredients: [{ item: "Marchew", amount: "480g" }, { item: "Ziemniaki", amount: "210g" }, { item: "Pierś indyka", amount: "200g" }],
    recipe: "1. Warzywa gotować 20 min, zblendować. 2. Mięso ugotować osobno, pokroić, dodać do kremu."
  },
  {
    name: "Lekkostrawny kurczak w pomidorach",
    calories: 410, protein: 34, fats: 10, carbs: 44,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "200g" }, { item: "Passata", amount: "200g" }, { item: "Włoszczyzna", amount: "130g" }],
    recipe: "1. Mięso i warzywa dusić w bulionie i passacie 20 min. 2. Podawać z pszennym pieczywem."
  },
  {
    name: "Makaron ze szparagami i pesto bazyliowym",
    calories: 550, protein: 32, fats: 24, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "200g" }, { item: "Makaron", amount: "175g" }, { item: "Szparagi", amount: "210g" }, { item: "Pesto", amount: "60g" }],
    recipe: "1. Smażyć kurczaka. 2. Szparagi gotować 3 min. 3. Mieszaj makaron z pesto, wodą z gotowania, mięsem i szparagami."
  },
  {
    name: "Naleśniki z pastą warzywną i indykiem",
    calories: 490, protein: 30, fats: 16, carbs: 56,
    type: "lunch",
    ingredients: [{ item: "Naleśniki", amount: "130g" }, { item: "Pierś indyka", amount: "150g" }, { item: "Papryka", amount: "170g" }],
    recipe: "1. Z upieczonych warzyw zrobić pastę. 2. Indyka parować 15 min. 3. Smarować naleśniki pastą, kłaść mięso i ser, zawijać."
  },
  {
    name: "Pulpety z indyka na parze z sosem z cukinii",
    calories: 520, protein: 38, fats: 18, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Indyk mielony", amount: "500g" }, { item: "Makaron", amount: "200g" }, { item: "Cukinia", amount: "200g" }],
    recipe: "1. Robić pulpety, parować 20 min. 2. Cukinię dusić w bulionie, zblendować na sos."
  },
  {
    name: "Pulpety z indyka w sosie koperkowym",
    calories: 540, protein: 40, fats: 22, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Kuskus", amount: "150g" }, { item: "Indyk mielony", amount: "500g" }, { item: "Groszek", amount: "150g" }],
    recipe: "1. Smażyć pulpety. 2. Robić sos koperkowy ze śmietanką 12%. 3. Podawać z kuskusem."
  },
  {
    name: "Puree z dyni i batatów z kurczakiem",
    calories: 470, protein: 32, fats: 14, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "300g" }, { item: "Batat", amount: "200g" }, { item: "Dynia", amount: "200g" }],
    recipe: "1. Warzywa ugotować, zblendować. 2. Mięso parować. 3. Podać na puree ze szpinakiem."
  },
  {
    name: "Sałatka z grillowanymi szparagami",
    calories: 430, protein: 26, fats: 24, carbs: 32,
    type: "lunch",
    ingredients: [{ item: "Szparagi", amount: "150g" }, { item: "Mozzarella", amount: "60g" }, { item: "Szynka parmeńska", amount: "45g" }],
    recipe: "1. Szparagi grillować. 2. Łączyć z szynką, serem i dressingiem z pesto."
  },
  {
    name: "Sałatka z indykiem i marchewką",
    calories: 450, protein: 34, fats: 12, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Pierś indyka", amount: "200g" }, { item: "Brokuł", amount: "200g" }, { item: "Marchewka", amount: "160g" }],
    recipe: "1. Ugotowane składniki pokroić w kostkę. 2. Wymieszać z jogurtem i ziołami."
  },
  {
    name: "Tortilla z gotowanym kurczakiem i puree z dyni",
    calories: 510, protein: 32, fats: 14, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Tortilla", amount: "120g" }, { item: "Pierś kurczaka", amount: "200g" }, { item: "Dynia", amount: "200g" }],
    recipe: "1. Kurczaka ugotować w bulionie. 2. Zrobić puree z dyni. 3. Zawinąć z sałatą."
  },
  {
    name: "Tortilla z kurczakiem i botwinką",
    calories: 530, protein: 36, fats: 18, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Tortilla", amount: "120g" }, { item: "Pierś kurczaka", amount: "200g" }, { item: "Botwinka", amount: "150g" }],
    recipe: "1. Smażyć kurczaka. 2. Botwinkę dusić z cebulą. 3. Zawinąć z rzodkiewką i ogórkiem."
  },
  {
    name: "Zupa krem z brokułem i kurczakiem",
    calories: 420, protein: 34, fats: 14, carbs: 38,
    type: "lunch",
    ingredients: [{ item: "Brokuł", amount: "350g" }, { item: "Ziemniaki", amount: "210g" }, { item: "Pierś kurczaka", amount: "200g" }],
    recipe: "1. Gotować warzywa i mięso. 2. Zblendować warzywa na krem. 3. Dodać kawałki mięsa."
  },
  {
    name: "Zupa krem z selera z kurczakiem",
    calories: 440, protein: 30, fats: 12, carbs: 50,
    type: "lunch",
    ingredients: [{ item: "Seler naciowy", amount: "315g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Jogurt grecki", amount: "100g" }],
    recipe: "1. Kurczaka usmażyć. 2. Seler dusić w bulionie, zblendować. 3. Podać z grzankami."
  },
  {
    name: "Zupa szpinakowa z kurczakiem",
    calories: 460, protein: 32, fats: 16, carbs: 44,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "200g" }, { item: "Szpinak", amount: "100g" }, { item: "Mleczko kokosowe", amount: "200g" }],
    recipe: "1. Mięso i marchew gotować w bulionie. 2. Wlać mleczko, dodać szpinak na 2 min."
  },
  {
    name: "Zupa z młodej kapusty z chorizo",
    calories: 540, protein: 26, fats: 32, carbs: 40,
    type: "lunch",
    ingredients: [{ item: "Kapusta biała", amount: "200g" }, { item: "Chorizo", amount: "70g" }, { item: "Bulion", amount: "500g" }],
    recipe: "1. Smażyć chorizo i warzywa. 2. Zalać bulionem i pomidorami, gotować 15 min."
  },
  {
    name: "Burrito z indykiem i mozzarellą",
    calories: 610, protein: 42, fats: 16, carbs: 72,
    type: "lunch",
    ingredients: [{ item: "Indyk mielony", amount: "300g" }, { item: "Ryż", amount: "100g" }, { item: "Tortilla", amount: "120g" }, { item: "Passata", amount: "350g" }],
    recipe: "1. Mięso dusić z ryżem i passatą. 2. Zawijać w tortillę z serem, zapiekać."
  },
  {
    name: "Kanapka w stylu Big Mac",
    calories: 680, protein: 48, fats: 34, carbs: 45,
    type: "lunch",
    ingredients: [{ item: "Bułki", amount: "140g" }, { item: "Wołowina mielona", amount: "300g" }, { item: "Kapusta pekińska", amount: "100g" }],
    recipe: "1. Zrobić 4 cienkie kotlety wołowe. 2. Złożyć piętrową bułkę z sosem i warzywami."
  },
  {
    name: "Klopsiki na parze z kuskusem",
    calories: 495, protein: 38, fats: 14, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Indyk mielony", amount: "175g" }, { item: "Kuskus", amount: "60g" }, { item: "Cukinia", amount: "100g" }],
    recipe: "1. Formować klopsiki z tartą marchwią. 2. Gotować na parze z warzywami 20 min."
  },
  {
    name: "Kurczak teriyaki z warzywami",
    calories: 540, protein: 40, fats: 16, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Komosa ryżowa", amount: "100g" }, { item: "Pierś kurczaka", amount: "200g" }, { item: "Brokuł", amount: "100g" }],
    recipe: "1. Mięso marynować w teriyaki, smażyć 7 min. 2. Smażyć warzywa 4 min. 3. Podać na komosie."
  },
  {
    name: "Lekka sałatka ziemniaczana",
    calories: 420, protein: 32, fats: 12, carbs: 46,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "150g" }, { item: "Ziemniaki", amount: "140g" }, { item: "Ogórek", amount: "75g" }],
    recipe: "1. Ziemniaki ugotować w plastrach. 2. Mięso grillować. 3. Mieszaj z sosem jogurtowym."
  },
  {
    name: "Lekkostrawna zupa jarzynowa",
    calories: 390, protein: 30, fats: 10, carbs: 44,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "150g" }, { item: "Marchewka", amount: "160g" }, { item: "Ziemniaki", amount: "210g" }],
    recipe: "1. Gotować wszystko w bulionie 30 min. 2. Dodać cukinię na koniec. 3. Posypać natką."
  },
  {
    name: "Makaron z kurczakiem i cukinią",
    calories: 550, protein: 42, fats: 14, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Makaron", amount: "150g" }, { item: "Pierś kurczaka", amount: "300g" }, { item: "Cukinia", amount: "200g" }],
    recipe: "1. Mięso i warzywa piec 20 min w 200°C. 2. Mieszaj z makaronem i sosem jogurtowym."
  },
  {
    name: "Naleśniki z cukinią i indykiem",
    calories: 480, protein: 32, fats: 14, carbs: 56,
    type: "lunch",
    ingredients: [{ item: "Naleśniki", amount: "130g" }, { item: "Pierś indyka", amount: "150g" }, { item: "Szpinak", amount: "50g" }],
    recipe: "1. Farsz dusić z mlekiem i mąką do zgęstnienia. 2. Nadziewać naleśniki."
  },
  {
    name: "Pieczone udka z rozmarynem",
    calories: 590, protein: 40, fats: 32, carbs: 36,
    type: "lunch",
    ingredients: [{ item: "Udko kurczaka", amount: "200g" }, { item: "Ziemniaki", amount: "210g" }, { item: "Marchewka", amount: "160g" }],
    recipe: "1. Piec w rękawie 60 min w 190°C z przyprawami i odrobiną wody."
  },
  {
    name: "Pulpeciki z indyka w sosie marchewkowym",
    calories: 470, protein: 36, fats: 14, carbs: 50,
    type: "lunch",
    ingredients: [{ item: "Kasza jaglana", amount: "100g" }, { item: "Indyk mielony", amount: "400g" }, { item: "Marchew", amount: "160g" }],
    recipe: "1. Pulpety gotować 15 min. 2. Z ugotowanej marchwi zrobić sos. 3. Podawać na kaszy."
  },
  {
    name: "Risotto z indykiem i natką",
    calories: 520, protein: 38, fats: 12, carbs: 64,
    type: "lunch",
    ingredients: [{ item: "Ryż arborio", amount: "150g" }, { item: "Pierś indyka", amount: "250g" }, { item: "Bulion", amount: "700g" }],
    recipe: "1. Ryż gotować dolewając bulion. 2. Pod koniec dodać upieczone mięso i startą cukinię."
  },
  {
    name: "Roladki drobiowe z puree",
    calories: 530, protein: 44, fats: 20, carbs: 42,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "200g" }, { item: "Ziemniaki", amount: "210g" }, { item: "Ogórek", amount: "150g" }],
    recipe: "1. Roladki z nadzieniem pietruszkowym piec 25 min. 2. Podać z puree i mizerią."
  },
  {
    name: "Sałatka makaronowa z kurczakiem",
    calories: 510, protein: 36, fats: 18, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Makaron", amount: "200g" }, { item: "Pierś kurczaka", amount: "300g" }, { item: "Suszone pomidory", amount: "40g" }],
    recipe: "1. Pieczony kurczak, ugotowany makaron, rukola, oliwki. 2. Dressing z oliwy i ziół."
  },
  {
    name: "Sałatka z kurczakiem i batatem",
    calories: 550, protein: 34, fats: 24, carbs: 50,
    type: "lunch",
    ingredients: [{ item: "Batat", amount: "200g" }, { item: "Pierś kurczaka", amount: "200g" }, { item: "Słonecznik", amount: "20g" }],
    recipe: "1. Pieczone bataty, smażony kurczak, sałata, ogórek. 2. Sos musztardowo-miodowy."
  },
  {
    name: "Sałatka z kurczakiem i pomarańczami",
    calories: 480, protein: 32, fats: 20, carbs: 44,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "200g" }, { item: "Pomarańcza", amount: "240g" }, { item: "Migdały", amount: "30g" }],
    recipe: "1. Kurczak smażony 7 min. 2. Mieszaj z sałatą, pomarańczą i sosem z soku pomarańczowego."
  },
  {
    name: "Sushi bowl z krewetkami",
    calories: 490, protein: 34, fats: 12, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Ryż", amount: "150g" }, { item: "Krewetki", amount: "250g" }, { item: "Nori", amount: "5g" }],
    recipe: "1. Ryż z octem i erytrolem. 2. Smażone krewetki, ogórek, marchew, paski nori."
  },
  {
    name: "Szare kluski z twarogiem",
    calories: 680, protein: 32, fats: 28, carbs: 74,
    type: "lunch",
    ingredients: [{ item: "Ziemniaki", amount: "1000g" }, { item: "Twaróg", amount: "150g" }, { item: "Boczek", amount: "60g" }],
    recipe: "1. Kluski z tartych ziemniaków i mąki gotować 3 min. 2. Podać z twarogiem i skwarkami."
  },
  {
    name: "Tortilla w stylu McWrapa",
    calories: 560, protein: 38, fats: 22, carbs: 50,
    type: "lunch",
    ingredients: [{ item: "Tortilla", amount: "120g" }, { item: "Pierś kurczaka", amount: "300g" }, { item: "Mozzarella", amount: "60g" }],
    recipe: "1. Smażony kurczak, sałata, papryka, sos jogurtowo-czosnkowy. 2. Podpiecz na patelni."
  },
  {
    name: "Zupa krem marchewkowa z ryżem",
    calories: 410, protein: 28, fats: 12, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Marchew", amount: "320g" }, { item: "Ryż", amount: "40g" }, { item: "Pierś kurczaka", amount: "150g" }],
    recipe: "1. Gotować warzywa i ryż 20 min. 2. Zblendować na krem. 3. Dodać kawałki mięsa."
  },
  {
    name: "Zupa z pieczonej papryki",
    calories: 430, protein: 30, fats: 14, carbs: 46,
    type: "lunch",
    ingredients: [{ item: "Papryka", amount: "340g" }, { item: "Pierś kurczaka", amount: "200g" }, { item: "Chleb pszenny", amount: "60g" }],
    recipe: "1. Paprykę upiec i obrać. 2. Gotować z ziemniakami 15 min, zblendować. 3. Podać z kurczakiem i grzankami."
  },
  {
    name: "Fit Kebab w tortilli",
    calories: 610, protein: 42, fats: 20, carbs: 64,
    type: "lunch",
    ingredients: [{ item: "Tortilla", amount: "180g" }, { item: "Pierś kurczaka", amount: "250g" }, { item: "Jogurt", amount: "150g" }],
    recipe: "1. Mięso w przyprawie kebab smażyć. 2. Zawijać z kapustą, cebulą i sosem czosnkowym."
  },
  {
    name: "Gulasz z indyka z dynią i ryżem",
    calories: 530, protein: 36, fats: 12, carbs: 68,
    type: "lunch",
    ingredients: [{ item: "Dynia", amount: "300g" }, { item: "Pierś indyka", amount: "200g" }, { item: "Ryż basmati", amount: "100g" }],
    recipe: "1. Mięso podsmażyć. 2. Dodać dynię i paprykę. 3. Wlać pomidory, dusić 15-20 min."
  },
  {
    name: "Harira z wołowiną",
    calories: 510, protein: 34, fats: 14, carbs: 60,
    type: "lunch",
    ingredients: [{ item: "Makaron", amount: "50g" }, { item: "Ciecierzyca", amount: "120g" }, { item: "Polędwica wołowa", amount: "125g" }],
    recipe: "1. Smażyć mięso z warzywami. 2. Gotować w bulionie z pomidorami do miękkości. 3. Dodać ciecierzycę na koniec."
  },
  {
    name: "Zupa grzybowa z kurczakiem",
    calories: 440, protein: 30, fats: 18, carbs: 40,
    type: "lunch",
    ingredients: [{ item: "Grzyby", amount: "200g" }, { item: "Pierś kurczaka", amount: "200g" }, { item: "Śmietana 18%", amount: "100g" }],
    recipe: "1. Smażyć grzyby i mięso. 2. Gotować w bulionie 15 min. 3. Hartować śmietanę, podawać z chlebem."
  },
  {
    name: "Makaron szpinakowy z gorgonzolą",
    calories: 620, protein: 38, fats: 30, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Makaron", amount: "100g" }, { item: "Szpinak", amount: "75g" }, { item: "Ser Gorgonzola", amount: "50g" }],
    recipe: "1. Smażyć kurczaka. 2. Dodać szpinak i bulion. 3. Na koniec ser i śmietankę, wymieszać z makaronem."
  },
  {
    name: "Noodle z indykiem i sezamem",
    calories: 580, protein: 34, fats: 24, carbs: 60,
    type: "lunch",
    ingredients: [{ item: "Makaron udon", amount: "500g" }, { item: "Indyk mielony", amount: "300g" }, { item: "Sezam", amount: "10g" }],
    recipe: "1. Mięso smażyć do brązowości. 2. Smażyć warzywa w słupki. 3. Połączyć wszystko z noodle i sosem sojowym."
  },
  {
    name: "Pieczone udka z jabłkami",
    calories: 610, protein: 42, fats: 34, carbs: 44,
    type: "lunch",
    ingredients: [{ item: "Udka kurczaka", amount: "500g" }, { item: "Ryż", amount: "100g" }, { item: "Jabłko", amount: "150g" }, { item: "Żurawina", amount: "100g" }],
    recipe: "1. Mięso piec 30 min. 2. Dodać jabłka i żurawinę, piec kolejne 30 min. 3. Podać z ryżem i brukselką."
  },
  {
    name: "Pieczony batat z kurczakiem",
    calories: 520, protein: 30, fats: 18, carbs: 56,
    type: "lunch",
    ingredients: [{ item: "Batat", amount: "200g" }, { item: "Kurczak mielony", amount: "150g" }, { item: "Mozzarella", amount: "60g" }],
    recipe: "1. Batat piec 40 min. 2. Nadziać usmażonym mięsem i serem, zapiekać 7 min."
  },
  {
    name: "Pieczony indyk z Panko",
    calories: 540, protein: 44, fats: 18, carbs: 42,
    type: "lunch",
    ingredients: [{ item: "Indyk mielony", amount: "250g" }, { item: "Panierka Panko", amount: "40g" }, { item: "Pesto", amount: "20g" }],
    recipe: "1. Mięso rozwałkować, nadziać serem i szpinakiem. 2. Posypać Panko, piec w airfryer 15 min."
  },
  {
    name: "Pulpety drobiowe z suszonymi pomidorami",
    calories: 560, protein: 38, fats: 20, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Kasza jaglana", amount: "200g" }, { item: "Kurczak mielony", amount: "500g" }, { item: "Suszone pomidory", amount: "120g" }],
    recipe: "1. Robić pulpety z płatkami owsianymi. 2. Piec 30 min w sosie pomidorowym."
  },
  {
    name: "Pulpety w sosie z czerwonych warzyw",
    calories: 490, protein: 34, fats: 14, carbs: 56,
    type: "lunch",
    ingredients: [{ item: "Kasza jaglana", amount: "100g" }, { item: "Indyk mielony", amount: "175g" }, { item: "Papryka", amount: "170g" }],
    recipe: "1. Pulpety smażyć. 2. Sos: papryka, marchew, cebula, pomidory puszka. 3. Dusić razem 10 min."
  },
  {
    name: "Ryżowa sałatka z kurczakiem",
    calories: 460, protein: 32, fats: 12, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Ryż biały", amount: "100g" }, { item: "Pierś kurczaka", amount: "200g" }, { item: "Ogórek", amount: "150g" }],
    recipe: "1. Ryż ugotować. 2. Kurczaka gotować 15 min. 3. Wymieszać z sosem jogurtowym."
  },
  {
    name: "Sałatka ryżowa z ogórkiem konserwowym",
    calories: 490, protein: 34, fats: 16, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Ryż", amount: "100g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Ogórki konserwowe", amount: "100g" }],
    recipe: "1. Składniki w kostkę połączyć z majonezem i jogurtem."
  },
  {
    name: "Sałatka z burakiem i stekiem",
    calories: 520, protein: 38, fats: 26, carbs: 32,
    type: "lunch",
    ingredients: [{ item: "Rostbef wołowy", amount: "150g" }, { item: "Burak", amount: "100g" }, { item: "Komosa", amount: "50g" }],
    recipe: "1. Stek grillować. 2. Buraka i dynię upiec. 3. Dressing miodowo-musztardowy."
  },
  {
    name: "Sałatka z chrupiącymi nuggetsami",
    calories: 580, protein: 40, fats: 22, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Pierś indyka", amount: "150g" }, { item: "Płatki kukurydziane", amount: "24g" }, { item: "Parmezan", amount: "30g" }],
    recipe: "1. Mięso panierować w płatkach, smażyć. 2. Podać z miksem sałat i serem."
  },
  {
    name: "Sałatka z kurczakiem i makaronem ryżowym",
    calories: 470, protein: 32, fats: 12, carbs: 56,
    type: "lunch",
    ingredients: [{ item: "Makaron ryżowy", amount: "100g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Marchewka", amount: "80g" }],
    recipe: "1. Makaron i kurczak grillowany. 2. Dressing z limonki i imbiru."
  },
  {
    name: "Sałatka z wątróbką i gruszką",
    calories: 510, protein: 36, fats: 20, carbs: 46,
    type: "lunch",
    ingredients: [{ item: "Wątróbka drobiowa", amount: "150g" }, { item: "Gruszka", amount: "130g" }, { item: "Chleb żytni", amount: "120g" }],
    recipe: "1. Wątróbkę smażyć krótko. 2. Gruszkę podsmażyć. 3. Sos miodowo-musztardowy."
  },
  {
    name: "Sałatka z wołowiną i kaszą jaglaną",
    calories: 540, protein: 42, fats: 24, carbs: 40,
    type: "lunch",
    ingredients: [{ item: "Polędwica wołowa", amount: "200g" }, { item: "Kasza jaglana", amount: "100g" }, { item: "Pomidorki", amount: "160g" }],
    recipe: "1. Stek w plastry smażyć. 2. Kaszę ugotować. 3. Sos syrop klonowy + musztarda."
  },
  {
    name: "Sałatka ziemniaczana z indykiem",
    calories: 495, protein: 34, fats: 18, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Ziemniaki", amount: "350g" }, { item: "Pierś indyka", amount: "200g" }, { item: "Jabłko", amount: "150g" }],
    recipe: "1. Ziemniaki, indyk i marchewka ugotowane w kostkę. 2. Sos jogurtowo-koperkowy."
  },
  {
    name: "Zupa pho z wołowiną",
    calories: 430, protein: 32, fats: 12, carbs: 50,
    type: "lunch",
    ingredients: [{ item: "Makaron ryżowy", amount: "50g" }, { item: "Rostbef wołowy", amount: "150g" }, { item: "Bulion", amount: "375g" }],
    recipe: "1. Mięso w cienkie plastry smażyć krótko. 2. Gotować w bulionie z cynamonem i imbirem."
  },
  {
    name: "Bakłażan i wołowina w miso",
    calories: 560, protein: 38, fats: 26, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Wołowina mielona", amount: "250g" }, { item: "Bakłażan", amount: "200g" }, { item: "Pasta miso", amount: "30g" }],
    recipe: "1. Mięso smażyć 7 min. 2. Dodać bakłażana i sos z miso. 3. Podać z ryżem."
  },
  {
    name: "Bowl BBQ z kurczakiem i batatem",
    calories: 590, protein: 36, fats: 20, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Bataty", amount: "200g" }, { item: "Pierś kurczaka", amount: "175g" }, { item: "Sos BBQ", amount: "30g" }],
    recipe: "1. Mięso i bataty piec 30 min. 2. Podać z fasolą, papryką i sosem BBQ."
  },
  {
    name: "Chili con carne klasyczne",
    calories: 620, protein: 44, fats: 24, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Wołowina mielona", amount: "400g" }, { item: "Fasola czerwona", amount: "240g" }, { item: "Ryż", amount: "100g" }],
    recipe: "1. Mięso smażyć z cebulą. 2. Dodać pomidory i fasolę, dusić 20 min. 3. Podawać z ryżem."
  },
  {
    name: "Kanapka ze stekiem wołowym",
    calories: 480, protein: 34, fats: 20, carbs: 36,
    type: "lunch",
    ingredients: [{ item: "Chleb żytni", amount: "90g" }, { item: "Polędwica wołowa", amount: "125g" }, { item: "Ogórek kiszony", amount: "150g" }],
    recipe: "1. Stek smażyć 5 min na stronę. 2. Podać na chlebie z sosem miodowo-musztardowym."
  },
  {
    name: "Kapusta pieczona z mięsem",
    calories: 510, protein: 32, fats: 24, carbs: 38,
    type: "lunch",
    ingredients: [{ item: "Kapusta", amount: "500g" }, { item: "Indyk mielony", amount: "300g" }, { item: "Passata", amount: "700g" }],
    recipe: "1. Kapustę w plastrach podsmażyć. 2. Zapiekać z sosem mięsnym 1h w 175°C."
  },
  {
    name: "Karkówka w sosie grzybowym",
    calories: 580, protein: 34, fats: 32, carbs: 38,
    type: "lunch",
    ingredients: [{ item: "Karkówka", amount: "125g" }, { item: "Ziemniaki", amount: "210g" }, { item: "Grzyby leśne", amount: "100g" }],
    recipe: "1. Mięso dusić z grzybami i bulionem 10-20 min. 2. Podać z puree ziemniaczanym."
  },
  {
    name: "Kotlet wołowy z kaszą i buraczkami",
    calories: 595, protein: 40, fats: 22, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Wołowina mielona", amount: "200g" }, { item: "Kasza gryczana", amount: "100g" }, { item: "Buraki", amount: "200g" }],
    recipe: "1. Formować kotlety z namoczoną bułką. 2. Smażyć 5 min na stronę. 3. Podać z kaszą."
  },
  {
    name: "Kotlety mielone z indyka z surówką",
    calories: 540, protein: 38, fats: 18, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Indyk mielony", amount: "200g" }, { item: "Kasza jaglana", amount: "100g" }, { item: "Ogórki kiszone", amount: "150g" }],
    recipe: "1. Kotlety z indyka i sezamu smażyć. 2. Surówka: marchew, ogórek, natka, cytryna."
  },
  {
    name: "Kurczak z jabłkami i puree z dyni",
    calories: 490, protein: 34, fats: 16, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "150g" }, { item: "Kuskus", amount: "50g" }, { item: "Puree dynia", amount: "150g" }],
    recipe: "1. Kurczaka smażyć z jabłkiem. 2. Podać na puree z dyni z kaszą kuskus."
  },
  {
    name: "Makaron chow mein z wołowiną",
    calories: 610, protein: 42, fats: 24, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Makaron chow mein", amount: "100g" }, { item: "Wołowina", amount: "200g" }, { item: "Pieczarki", amount: "100g" }],
    recipe: "1. Mięso smażyć. 2. Smażyć pieczarki, paprykę, pora. 3. Wymieszać z makaronem i sosem."
  },
  {
    name: "Meksykańska sałatka z indykiem",
    calories: 480, protein: 36, fats: 16, carbs: 42,
    type: "lunch",
    ingredients: [{ item: "Indyk mielony", amount: "150g" }, { item: "Fasola czerwona", amount: "50g" }, { item: "Kukurydza", amount: "50g" }],
    recipe: "1. Mięso smażyć 10 min. 2. Łączyć z warzywami i dressingiem musztardowym."
  },
  {
    name: "Pad Thai z kurczakiem",
    calories: 650, protein: 42, fats: 26, carbs: 64,
    type: "lunch",
    ingredients: [{ item: "Makaron ryżowy", amount: "100g" }, { item: "Pierś kurczaka", amount: "200g" }, { item: "Jajka", amount: "112g" }],
    recipe: "1. Smażyć kurczaka i warzywa. 2. Dodać jajko i sos (rybny, limonka, tamaryndowiec). 3. Wymieszać z makaronem."
  },
  {
    name: "Polędwiczka wieprzowa z kaszą pęczak",
    calories: 520, protein: 36, fats: 14, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Pęczak", amount: "50g" }, { item: "Polędwiczka wieprzowa", amount: "150g" }, { item: "Pieczarki", amount: "100g" }],
    recipe: "1. Mięso dusić w sosie pieczarkowym. 2. Podać z kaszą i surówką z buraków."
  },
  {
    name: "Sałatka orkiszowa z jabłkiem",
    calories: 540, protein: 34, fats: 22, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Kasza orkiszowa", amount: "100g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Orzechy włoskie", amount: "30g" }],
    recipe: "1. Kaszę i kurczaka połączyć z jabłkiem, szpinakiem i orzechami."
  },
  {
    name: "Sałatka z wołowiną i granatem",
    calories: 490, protein: 32, fats: 24, carbs: 34,
    type: "lunch",
    ingredients: [{ item: "Rostbef wołowy", amount: "150g" }, { item: "Granat", amount: "45g" }, { item: "Szpinak", amount: "75g" }],
    recipe: "1. Grillowaną wołowinę kłaść na szpinaku z ziarnami granatu i orzechami."
  },
  {
    name: "Sałatka z polędwicą wołową i limonką",
    calories: 460, protein: 38, fats: 20, carbs: 28,
    type: "lunch",
    ingredients: [{ item: "Polędwica wołowa", amount: "200g" }, { item: "Szpinak", amount: "100g" }, { item: "Sezam", amount: "5g" }],
    recipe: "1. Mięso smażyć 3 min na stronę. 2. Sos: limonka, sos rybny, czosnek, sezam."
  },
  {
    name: "Sałatka z polędwiczkami indyka i awokado",
    calories: 510, protein: 36, fats: 24, carbs: 36,
    type: "lunch",
    ingredients: [{ item: "Pierś indyka", amount: "150g" }, { item: "Awokado", amount: "70g" }, { item: "Szpinak", amount: "50g" }],
    recipe: "1. Smażyć indyka 15 min. 2. Dressing miodowo-musztardowy, podać z chlebem."
  },
  {
    name: "Sałatka z rukoli z polędwicą",
    calories: 470, protein: 38, fats: 18, carbs: 34,
    type: "lunch",
    ingredients: [{ item: "Polędwica wołowa", amount: "200g" }, { item: "Rukola", amount: "100g" }, { item: "Pomarańcza", amount: "240g" }],
    recipe: "1. Mięso dusić 30 min. 2. Podać z grzankami, orzechami i sosem balsamicznym."
  },
  {
    name: "Stir-fry z indykiem i szpinakiem",
    calories: 460, protein: 34, fats: 14, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Ryż", amount: "50g" }, { item: "Indyk mielony", amount: "150g" }, { item: "Szpinak", amount: "25g" }],
    recipe: "1. Mięso smażyć z fasolką szparagową. 2. Dodać szpinak na koniec, podać z ryżem."
  },
  {
    name: "Zupa z jarmużem i ziemniakami",
    calories: 420, protein: 28, fats: 16, carbs: 42,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "150g" }, { item: "Ziemniaki", amount: "210g" }, { item: "Jarmuż", amount: "50g" }],
    recipe: "1. Gotować warzywa i mięso w bulionie. 2. Hartować śmietanką 12%, dodać jarmuż."
  },
  {
    name: "Bowl z kurczakiem na parze",
    calories: 490, protein: 32, fats: 12, carbs: 60,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "150g" }, { item: "Kasza jęczmienna", amount: "50g" }, { item: "Burak", amount: "100g" }, { item: "Dynia", amount: "100g" }],
    recipe: "1. Warzywa upiec, kurczaka parować 20 min. 2. Dressing cytrynowy z natką."
  },
  {
    name: "Risotto z dynią i kurczakiem",
    calories: 540, protein: 36, fats: 14, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Ryż arborio", amount: "200g" }, { item: "Dynia", amount: "200g" }, { item: "Pierś kurczaka", amount: "200g" }],
    recipe: "1. Kurczaka parować. 2. Ryż szklić, dolewać bulion partiami z duszona dynią."
  },
  {
    name: "Grander Burger Fit",
    calories: 680, protein: 44, fats: 28, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Grahamka", amount: "70g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Boczek", amount: "15g" }, { item: "Mozzarella", amount: "30g" }],
    recipe: "1. Kurczaka w płatkach kukurydzianych upiec. 2. Boczek smażyć na chrupko. 3. Sos BBQ-jogurt."
  },
  {
    name: "Hot Wings jak z KFC",
    calories: 520, protein: 34, fats: 26, carbs: 32,
    type: "lunch",
    ingredients: [{ item: "Skrzydełka", amount: "200g" }, { item: "Płatki kukurydziane", amount: "20g" }, { item: "Jajko", amount: "56g" }],
    recipe: "1. Panierować skrzydełka w płatkach, piec 40 min w 200°C."
  },
  {
    name: "Indyk w sosie koperkowym z marchewką",
    calories: 460, protein: 34, fats: 12, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Ziemniaki", amount: "350g" }, { item: "Pierś indyka", amount: "200g" }, { item: "Marchew", amount: "160g" }],
    recipe: "1. Mięso dusić w bulionie 20 min. 2. Zagęścić mąką, dodać jogurt i koperek."
  },
  {
    name: "Kopytka z gulaszem warzywnym",
    calories: 580, protein: 32, fats: 16, carbs: 74,
    type: "lunch",
    ingredients: [{ item: "Kopytka", amount: "500g" }, { item: "Pierś kurczaka", amount: "250g" }, { item: "Cukinia", amount: "200g" }],
    recipe: "1. Mięso i warzywa dusić w wodzie do miękkości. 2. Podać z kopytkami."
  },
  {
    name: "Krem z brokuła z grzankami",
    calories: 420, protein: 28, fats: 14, carbs: 40,
    type: "lunch",
    ingredients: [{ item: "Brokuł", amount: "250g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Chleb żytni", amount: "30g" }],
    recipe: "1. Warzywa gotować, zblendować. 2. Mięso ugotować osobno. 3. Podać z grzankami."
  },
  {
    name: "Krupnik z kaszą jaglaną",
    calories: 440, protein: 32, fats: 12, carbs: 50,
    type: "lunch",
    ingredients: [{ item: "Kasza jaglana", amount: "100g" }, { item: "Pierś kurczaka", amount: "300g" }, { item: "Włoszczyzna", amount: "360g" }],
    recipe: "1. Gotować warzywa i kaszę 25 min. 2. Dodać mięso szarpane i koper."
  },
  {
    name: "Krupnik z kaszą perłową",
    calories: 450, protein: 30, fats: 14, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Udko kurczaka", amount: "200g" }, { item: "Kasza jęczmienna", amount: "100g" }, { item: "Ziemniaki", amount: "140g" }],
    recipe: "1. Gotować mięso 30 min. 2. Dodać warzywa i kaszę, gotować 25 min."
  },
  {
    name: "Lasagne klasyczna fit",
    calories: 680, protein: 46, fats: 28, carbs: 60,
    type: "lunch",
    ingredients: [{ item: "Makaron lasagne", amount: "136g" }, { item: "Kurczak mielony", amount: "250g" }, { item: "Mozzarella", amount: "120g" }],
    recipe: "1. Robić sos mięsny i beszamel. 2. Układać warstwy, piec 45 min w 180°C."
  },
  {
    name: "Makaron w sosie dyniowym",
    calories: 520, protein: 28, fats: 16, carbs: 64,
    type: "lunch",
    ingredients: [{ item: "Makaron penne", amount: "60g" }, { item: "Indyk mielony", amount: "125g" }, { item: "Dynia", amount: "150g" }],
    recipe: "1. Dynię dusić, zblendować na sos. 2. Łączyć z mięsem i makaronem."
  },
  {
    name: "Makaron z lekkim pesto i kurczakiem",
    calories: 540, protein: 36, fats: 20, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Makaron penne", amount: "70g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Pesto", amount: "30g" }],
    recipe: "1. Kurczaka parować. 2. Cukinię smażyć. 3. Wszystko wymieszać z pesto."
  },
  {
    name: "Makaron z sosem grzybowym i parmezanem",
    calories: 510, protein: 34, fats: 18, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Makaron", amount: "50g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Grzyby", amount: "100g" }],
    recipe: "1. Smażyć kurczaka z grzybami. 2. Hartować jogurt, dodać ser i makaron."
  },
  {
    name: "Qurrito z kurczakiem i BBQ",
    calories: 630, protein: 38, fats: 26, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Tortilla", amount: "60g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Mozzarella", amount: "45g" }, { item: "Sos BBQ", amount: "15g" }],
    recipe: "1. Kurczaka w płatkach upiec. 2. Tortillę smarować sosem, kłaść mięso i ser, zapiekać."
  },
  {
    name: "Risotto z grzybami leśnymi",
    calories: 540, protein: 32, fats: 20, carbs: 56,
    type: "lunch",
    ingredients: [{ item: "Ryż arborio", amount: "80g" }, { item: "Grzyby", amount: "150g" }, { item: "Parmezan", amount: "50g" }],
    recipe: "1. Ryż gotować w bulionie. 2. Dodać smażone grzyby i mięso na koniec z serem."
  },
  {
    name: "Sałatka hawajska z ananasem",
    calories: 490, protein: 34, fats: 14, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Szynka z indyka", amount: "200g" }, { item: "Ananas", amount: "200g" }, { item: "Kukurydza", amount: "120g" }],
    recipe: "1. Składniki w kostkę wymieszać z sosem jogurtowo-musztardowym."
  },
  {
    name: "Sałatka z komosy i mango",
    calories: 460, protein: 30, fats: 16, carbs: 50,
    type: "lunch",
    ingredients: [{ item: "Komosa", amount: "50g" }, { item: "Mango", amount: "100g" }, { item: "Pierś kurczaka", amount: "150g" }],
    recipe: "1. Kurczaka parować. 2. Mango i ogórek w kostkę. 3. Sos cytrynowy z natką."
  },
  {
    name: "Szaszłyki z kiełbasy i warzyw",
    calories: 520, protein: 28, fats: 28, carbs: 42,
    type: "lunch",
    ingredients: [{ item: "Frankfurterki", amount: "210g" }, { item: "Papryka", amount: "170g" }, { item: "Chleb żytni", amount: "90g" }],
    recipe: "1. Nabijać kiełbasę i warzywa na patyki, grillować 15 min."
  },
  {
    name: "Białe chilli z kurczakiem",
    calories: 530, protein: 38, fats: 18, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "200g" }, { item: "Fasola biała", amount: "100g" }, { item: "Kukurydza", amount: "120g" }],
    recipe: "1. Smażyć mięso z cebulą i chilli. 2. Gotować w bulionie z fasolą 15 min. 3. Dodać śmietanę 18%."
  },
  {
    name: "Burgery wołowe Wagyu",
    calories: 690, protein: 48, fats: 34, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Wołowina mielona", amount: "200g" }, { item: "Grahamka", amount: "140g" }, { item: "Awokado", amount: "140g" }, { item: "Pastrami", amount: "30g" }],
    recipe: "1. Smażyć burgery. 2. Bułkę smarować serkiem, kłaść mięso, awokado i pastrami."
  },
  {
    name: "Faszerowana pierś z kurczaka",
    calories: 550, protein: 42, fats: 24, carbs: 40,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "175g" }, { item: "Ser żółty", amount: "30g" }, { item: "Cukinia", amount: "200g" }],
    recipe: "1. Mięso nadziać serem i papryką, grillować 20 min."
  },
  {
    name: "Hawajska sałatka z kurczakiem",
    calories: 510, protein: 36, fats: 14, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Makaron pełnoziarnisty", amount: "100g" }, { item: "Pierś kurczaka", amount: "200g" }, { item: "Ananas", amount: "150g" }],
    recipe: "1. Kurczaka smażyć w przyprawie gyros. 2. Połączyć z makaronem i warzywami."
  },
  {
    name: "Krewetki z kukurydzą i ryżem",
    calories: 540, protein: 40, fats: 16, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Ryż", amount: "100g" }, { item: "Krewetki", amount: "400g" }, { item: "Kolba kukurydzy", amount: "180g" }],
    recipe: "1. Zrobić pastę z cebuli, papryki i miso. 2. Ryż piec z pastą 25 min. 3. Krewetki smażyć krótko."
  },
  {
    name: "Kurczak z kurkami i kopytkami",
    calories: 590, protein: 42, fats: 22, carbs: 56,
    type: "lunch",
    ingredients: [{ item: "Kopytka", amount: "250g" }, { item: "Pierś kurczaka", amount: "200g" }, { item: "Kurki", amount: "150g" }],
    recipe: "1. Smażyć mięso, odłożyć. 2. Smażyć kurki, zalać bulionem i śmietaną. 3. Podawać z kopytkami."
  },
  {
    name: "Lunchbox z chrupiącymi gnocchi",
    calories: 530, protein: 34, fats: 18, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Gnocchi", amount: "225g" }, { item: "Pierś kurczaka", amount: "200g" }, { item: "Ogórek", amount: "150g" }],
    recipe: "1. Mięso i gnocchi piec 15 min w 200°C. 2. Podać z sosem jogurtowym i warzywami."
  },
  {
    name: "Makaron azjatycki z wołowiną i kapustą",
    calories: 570, protein: 38, fats: 24, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Makaron Chow Mein", amount: "70g" }, { item: "Polędwica wołowa", amount: "125g" }, { item: "Kapusta biała", amount: "100g" }],
    recipe: "1. Mięso smażyć, dodać warzywa. 2. Wlać sos miodowo-sojowy, połączyć z makaronem."
  },
  {
    name: "Młode ziemniaki z kotletem drobiowym",
    calories: 520, protein: 36, fats: 18, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Ziemniaki", amount: "350g" }, { item: "Pierś kurczaka", amount: "200g" }, { item: "Ogórki małosolne", amount: "100g" }],
    recipe: "1. Ziemniaki ugotować. 2. Mięso panierować w bułce, smażyć."
  },
  {
    name: "Pinsa z szynką i rukolą",
    calories: 590, protein: 34, fats: 24, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Pinsa", amount: "220g" }, { item: "Mozzarella", amount: "125g" }, { item: "Pomidory koktajlowe", amount: "160g" }],
    recipe: "1. Pinsę zapiec z mozzarellą żółtą. 2. Na wierzch kłaść mozzarellę białą i szynkę."
  },
  {
    name: "Pinsa z szynką i suszonymi pomidorami",
    calories: 610, protein: 36, fats: 26, carbs: 60,
    type: "lunch",
    ingredients: [{ item: "Pinsa", amount: "220g" }, { item: "Suszone pomidory", amount: "40g" }, { item: "Grana Padano", amount: "10g" }],
    recipe: "1. Zapiec pinsę, obłożyć rukolą i dodatkami."
  },
  {
    name: "Sałatka gyros z czerwoną kapustą",
    calories: 540, protein: 38, fats: 22, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "200g" }, { item: "Kapusta czerwona", amount: "200g" }, { item: "Chleb żytni", amount: "120g" }],
    recipe: "1. Kurczaka smażyć w gyrosie. 2. Mieszaj z warzywami, podawaj z grzankami."
  },
  {
    name: "Stek z ziemniakami i ogórkiem małosolnym",
    calories: 590, protein: 44, fats: 26, carbs: 46,
    type: "lunch",
    ingredients: [{ item: "Ziemniaki", amount: "560g" }, { item: "Polędwica wołowa", amount: "300g" }, { item: "Ogórki małosolne", amount: "200g" }],
    recipe: "1. Stek smażyć do ulubionego stopnia. 2. Podawać z gotowanymi ziemniakami."
  },
  {
    name: "Steki wołowe z masłem ziołowym",
    calories: 630, protein: 46, fats: 32, carbs: 40,
    type: "lunch",
    ingredients: [{ item: "Polędwica wołowa", amount: "400g" }, { item: "Ziemniaki", amount: "490g" }, { item: "Masło", amount: "50g" }],
    recipe: "1. Ziemniaki piec 20 min. 2. Steki grillować 4 min na stronę. 3. Podać z masłem czosnkowym."
  },
  {
    name: "Steki z karkówki z mizerią",
    calories: 650, protein: 40, fats: 38, carbs: 42,
    type: "lunch",
    ingredients: [{ item: "Karkówka", amount: "500g" }, { item: "Ziemniaki", amount: "700g" }, { item: "Ogórek", amount: "450g" }],
    recipe: "1. Mięso piec 1.5h w 190°C. 2. Podać z ziemniakami i mizerią."
  },
  {
    name: "Surf and Turf w papilotach",
    calories: 580, protein: 44, fats: 18, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Polędwica wołowa", amount: "250g" }, { item: "Krewetki tygrysie", amount: "250g" }, { item: "Ryż", amount: "200g" }],
    recipe: "1. Mięso i krewetki piec w folii 12-15 min. 2. Podać z ryżem i kukurydzą."
  },
  {
    name: "Szynka w sosie chrzanowym",
    calories: 520, protein: 38, fats: 20, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Szynka wieprzowa", amount: "150g" }, { item: "Ziemniaki", amount: "140g" }, { item: "Fasolka", amount: "150g" }],
    recipe: "1. Mięso dusić 40-50 min w bulionie z chrzanem. 2. Podać z puree i fasolką."
  },
  {
    name: "Tortilla z jajkiem i szynką",
    calories: 460, protein: 26, fats: 22, carbs: 38,
    type: "lunch",
    ingredients: [{ item: "Tortilla", amount: "120g" }, { item: "Jajka", amount: "112g" }, { item: "Szynka kurczak", amount: "20g" }],
    recipe: "1. Masę jajeczną wylać na tortillę na patelni, przykryć drugą, zapiec."
  },
  {
    name: "Zrazy wołowe z ogórkiem",
    calories: 610, protein: 44, fats: 28, carbs: 46,
    type: "lunch",
    ingredients: [{ item: "Wołowina", amount: "500g" }, { item: "Ogórek kiszony", amount: "100g" }, { item: "Ziemniaki", amount: "560g" }],
    recipe: "1. Roladki z mięsa dusić 2h w bulionie. 2. Podawać z ziemniakami."
  },
  {
    name: "Zupa tajska Tom Yum z kurczakiem",
    calories: 490, protein: 34, fats: 22, carbs: 40,
    type: "lunch",
    ingredients: [{ item: "Makaron ryżowy", amount: "100g" }, { item: "Pierś kurczaka", amount: "250g" }, { item: "Mleczko kokosowe", amount: "200g" }],
    recipe: "1. Smażyć mięso i grzyby. 2. Gotować w bulionie z pastą Tom Yum 15 min."
  },
  {
    name: "Burgery z grilla z cheddarem",
    calories: 590, protein: 36, fats: 28, carbs: 46,
    type: "lunch",
    ingredients: [{ item: "Grahamka", amount: "70g" }, { item: "Kurczak mielony", amount: "125g" }, { item: "Cheddar", amount: "15g" }],
    recipe: "1. Smażyć burgera 10 min. 2. Podawać w bułce z sosem miodowo-musztardowym."
  },
  {
    name: "Delikatny kurczak z mizerią",
    calories: 460, protein: 32, fats: 18, carbs: 42,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "125g" }, { item: "Ziemniaki", amount: "140g" }, { item: "Ogórek", amount: "150g" }],
    recipe: "1. Mięso i ziemniaki piec w rękawie 30 min. 2. Podać z mizerią."
  },
  {
    name: "Pulpeciki w sosie marchewkowym z kopytkami",
    calories: 510, protein: 32, fats: 14, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Indyk mielony", amount: "125g" }, { item: "Kopytka", amount: "100g" }, { item: "Marchewka", amount: "160g" }],
    recipe: "1. Pulpety gotować 20 min. 2. Zblendować marchew na sos, podać z kopytkami."
  },
  {
    name: "Kebab z grilla w tortilli",
    calories: 495, protein: 34, fats: 16, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Tortilla", amount: "60g" }, { item: "Pierś kurczaka", amount: "125g" }, { item: "Sos BBQ", amount: "20g" }],
    recipe: "1. Mięso grillować 15 min. 2. Zawinąć w tortillę z warzywami i ketchupem."
  },
  {
    name: "Krem z białych szparagów",
    calories: 410, protein: 28, fats: 14, carbs: 42,
    type: "lunch",
    ingredients: [{ item: "Szparagi białe", amount: "500g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Ziemniaki", amount: "140g" }],
    recipe: "1. Gotować warzywa w bulionie, zblendować. 2. Dodać smażonego kurczaka."
  },
  {
    name: "Makaron z pesto pietruszkowym",
    calories: 480, protein: 34, fats: 14, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Makaron", amount: "50g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Pesto pietruszkowe", amount: "40g" }],
    recipe: "1. Mięso smażyć 15 min. 2. Wymieszać makaron z pesto i kurczakiem."
  },
  {
    name: "Pęczak z fetą i szpinakiem",
    calories: 560, protein: 36, fats: 24, carbs: 50,
    type: "lunch",
    ingredients: [{ item: "Pęczak", amount: "100g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Feta", amount: "50g" }],
    recipe: "1. Smażyć kurczaka z czosnkiem. 2. Łączyć z kaszą, szpinakiem i fetą."
  },
  {
    name: "Pieczone pulpeciki z mizerią",
    calories: 520, protein: 38, fats: 20, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Indyk mielony", amount: "200g" }, { item: "Ziemniaki", amount: "280g" }, { item: "Ogórek", amount: "150g" }],
    recipe: "1. Pulpety piec 25 min. 2. Podać z tłuczonymi ziemniakami i mizerią."
  },
  {
    name: "Indyk w sosie koperkowym z surówką",
    calories: 490, protein: 34, fats: 12, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Pierś indyka", amount: "125g" }, { item: "Kuskus", amount: "50g" }, { item: "Marchew", amount: "80g" }],
    recipe: "1. Mięso piec 20 min w sosie koperkowym. 2. Podać z kuskusem i surówką."
  },
  {
    name: "Pizza na spodzie z tortilli z gruszką",
    calories: 460, protein: 22, fats: 24, carbs: 42,
    type: "lunch",
    ingredients: [{ item: "Tortilla", amount: "60g" }, { item: "Ser pleśniowy", amount: "30g" }, { item: "Gruszka", amount: "65g" }],
    recipe: "1. Tortillę z serem i gruszką zapiekać do rozpuszczenia sera."
  },
  {
    name: "Pizza z salami i papryką",
    calories: 620, protein: 34, fats: 32, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Salami", amount: "120g" }, { item: "Papryka", amount: "85g" }, { item: "Parmezan", amount: "40g" }],
    recipe: "1. Ciasto smarować passatą, obłożyć dodatkami i piec."
  },
  {
    name: "Placek po węgiersku z jogurtem",
    calories: 650, protein: 38, fats: 24, carbs: 70,
    type: "lunch",
    ingredients: [{ item: "Placki ziemniaczane", amount: "300g" }, { item: "Mięso wieprzowe", amount: "150g" }, { item: "Papryka", amount: "170g" }],
    recipe: "1. Mięso dusić z warzywami 40 min. 2. Podać na plackach z jogurtem."
  },
  {
    name: "Lunch z mango i kurczakiem",
    calories: 490, protein: 30, fats: 14, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "100g" }, { item: "Mango", amount: "70g" }, { item: "Kasza jęczmienna", amount: "30g" }],
    recipe: "1. Mięso smażyć. 2. Sos: oliwa + sok z pomarańczy. 3. Łączyć z kaszą i mango."
  },
  {
    name: "Szaszłyki z kiełbasą roślinną",
    calories: 450, protein: 24, fats: 18, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Kiełbaski roślinne", amount: "90g" }, { item: "Papryka", amount: "175g" }, { item: "Chleb żytni", amount: "60g" }],
    recipe: "1. Grillować szaszłyki 15 min, podać z chlebem."
  },
  {
    name: "Wątróbka z cebulką i jabłkiem",
    calories: 520, protein: 36, fats: 24, carbs: 42,
    type: "lunch",
    ingredients: [{ item: "Wątróbka kurczak", amount: "150g" }, { item: "Cebula", amount: "80g" }, { item: "Jabłko", amount: "150g" }],
    recipe: "1. Smażyć wątróbkę z cebulą 7 min, dodać jabłka na 5 min."
  },
  {
    name: "Zupa czosnkowa z grzankami",
    calories: 440, protein: 28, fats: 14, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Czosnek", amount: "60g" }, { item: "Pierś kurczaka", amount: "125g" }, { item: "Chleb żytni", amount: "30g" }],
    recipe: "1. Czosnek piec 30 min. 2. Zupę z ziemniakami blendować z czosnkiem i mlekiem."
  },
  {
    name: "Zupa koperkowa z klopsikami z indyka",
    calories: 470, protein: 32, fats: 20, carbs: 40,
    type: "lunch",
    ingredients: [{ item: "Indyk mielony", amount: "125g" }, { item: "Koperek", amount: "28g" }, { item: "Chleb pszenny", amount: "30g" }],
    recipe: "1. Pulpety dusić w bulionie koperkowym ze śmietaną 18%."
  },
  {
    name: "Zupa krem z batatów i pomidorów",
    calories: 410, protein: 26, fats: 12, carbs: 50,
    type: "lunch",
    ingredients: [{ item: "Pomidory puszka", amount: "400g" }, { item: "Batat", amount: "200g" }, { item: "Pierś kurczaka", amount: "150g" }],
    recipe: "1. Gotować wszystko 25 min, wyłowić mięso, zblendować resztę."
  },
  {
    name: "Zupa z fasolki szparagowej",
    calories: 390, protein: 30, fats: 14, carbs: 36,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "125g" }, { item: "Fasolka szparagowa", amount: "150g" }, { item: "Ziemniaki", amount: "140g" }],
    recipe: "1. Gotować warzywa i mięso. 2. Zabielić jogurtem greckim i koperkiem."
  },
  {
    name: "Żurek z białą kiełbasą",
    calories: 650, protein: 38, fats: 38, carbs: 42,
    type: "lunch",
    ingredients: [{ item: "Zakwas", amount: "300g" }, { item: "Biała kiełbasa", amount: "200g" }, { item: "Jajka", amount: "168g" }],
    recipe: "1. Gotować bulion z kiełbasą, dodać zakwas i majeranek. 2. Podać z jajkiem."
  },
  {
    name: "Aromatyczny kurczak z kukurydzą",
    calories: 480, protein: 36, fats: 12, carbs: 56,
    type: "lunch",
    ingredients: [{ item: "Kasza jaglana", amount: "50g" }, { item: "Pierś kurczaka", amount: "125g" }, { item: "Kukurydza", amount: "50g" }],
    recipe: "1. Kurczaka piec 25 min. 2. Podawać z kaszą, warzywami i mozzarellą."
  },
  {
    name: "Gulasz wołowy z marchewką",
    calories: 590, protein: 44, fats: 20, carbs: 56,
    type: "lunch",
    ingredients: [{ item: "Wołowina", amount: "400g" }, { item: "Marchew", amount: "160g" }, { item: "Ziemniaki", amount: "420g" }],
    recipe: "1. Mięso dusić 1.5h w bulionie. 2. Dodać ziemniaki i marchew na 30 min."
  },
  {
    name: "Jednogarnkowe danie z ryżem i pesto",
    calories: 520, protein: 30, fats: 18, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "100g" }, { item: "Ryż basmati", amount: "70g" }, { item: "Fasolka", amount: "100g" }],
    recipe: "1. Ryż gotować z mięsem 15 min. 2. Dodać warzywa i pesto, gotować 5 min."
  },
  {
    name: "Jednogarnkowa wołowina z batatami",
    calories: 610, protein: 42, fats: 22, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Wołowina mielona", amount: "400g" }, { item: "Batat", amount: "400g" }, { item: "Pomidory puszka", amount: "400g" }],
    recipe: "1. Mięso i warzywa dusić 25 min w pomidorach pod przykryciem."
  },
  {
    name: "Kapuśniak z młodej kapusty",
    calories: 450, protein: 34, fats: 14, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Młoda kapusta", amount: "400g" }, { item: "Ziemniaki", amount: "350g" }, { item: "Pierś kurczaka", amount: "200g" }],
    recipe: "1. Gotować warzywa 20 min w bulionie, dodać wcześniej usmażone mięso."
  },
  {
    name: "Klopsiki z puree selerowym",
    calories: 480, protein: 36, fats: 14, carbs: 50,
    type: "lunch",
    ingredients: [{ item: "Kurczak mielony", amount: "150g" }, { item: "Seler", amount: "100g" }, { item: "Buraki", amount: "200g" }],
    recipe: "1. Pulpety gotować w bulionie. 2. Seler i ziemniaki ugnieść na puree z masłem."
  },
  {
    name: "Kurczak na parze z brokułem i ryżem",
    calories: 440, protein: 34, fats: 10, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "200g" }, { item: "Brokuł", amount: "200g" }, { item: "Ryż", amount: "150g" }],
    recipe: "1. Mięso i warzywa parować ok. 20 min, podać z ryżem i oliwą."
  },
  {
    name: "Kurczak pieczony z kolorowymi warzywami",
    calories: 490, protein: 36, fats: 14, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "150g" }, { item: "Ziemniaki", amount: "140g" }, { item: "Marchewka", amount: "160g" }],
    recipe: "1. Piec wszystko w rękawie 30 min w 180°C z ziołami."
  },
  {
    name: "Lekkostrawne Spaghetti Bolognese",
    calories: 520, protein: 34, fats: 16, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Spaghetti", amount: "80g" }, { item: "Indyk mielony", amount: "200g" }, { item: "Passata", amount: "350g" }],
    recipe: "1. Sos z tartych warzyw i mięsa gotować 20 min, wymieszać z makaronem."
  },
  {
    name: "Makaron ryżowy z wołowiną i szpinakiem",
    calories: 490, protein: 32, fats: 18, carbs: 50,
    type: "lunch",
    ingredients: [{ item: "Makaron ryżowy", amount: "50g" }, { item: "Wołowina mielona", amount: "100g" }, { item: "Szpinak", amount: "50g" }],
    recipe: "1. Smażyć mięso z papryką 5 min, zalać bulionem i dusić 10 min. 2. Połączyć z makaronem."
  },
  {
    name: "Pieczony indyk z warzywami i puree",
    calories: 460, protein: 32, fats: 14, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Pierś indyka", amount: "150g" }, { item: "Marchewka", amount: "200g" }, { item: "Ziemniaki", amount: "140g" }],
    recipe: "1. Indyk z warzywami pieczony w rękawie 40 min w bulionie. 2. Podać z puree."
  },
  {
    name: "Pieczony kurczak z puree z batata",
    calories: 480, protein: 34, fats: 16, carbs: 50,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "125g" }, { item: "Batat", amount: "200g" }, { item: "Jabłko", amount: "75g" }],
    recipe: "1. Mięso piec 25 min. 2. Bataty gotować, zblendować z masłem i jogurtem."
  },
  {
    name: "Sałatka Tex-Mex z kurczakiem",
    calories: 550, protein: 36, fats: 28, carbs: 38,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "200g" }, { item: "Awokado", amount: "140g" }, { item: "Fasola czerwona", amount: "120g" }],
    recipe: "1. Smażony kurczak, fasola, kukurydza, awokado, papryka i limonka."
  },
  {
    name: "Sałatka ziemniaczana z karkówką",
    calories: 580, protein: 34, fats: 34, carbs: 34,
    type: "lunch",
    ingredients: [{ item: "Ziemniaki", amount: "140g" }, { item: "Karkówka", amount: "100g" }, { item: "Jogurt", amount: "80g" }],
    recipe: "1. Pieczone ziemniaki, grillowana karkówka, miks sałat i sos miodowo-cytrynowy."
  },
  {
    name: "Smażony ryż z kurczakiem i kiełkami",
    calories: 510, protein: 36, fats: 12, carbs: 64,
    type: "lunch",
    ingredients: [{ item: "Ryż", amount: "100g" }, { item: "Pierś kurczaka", amount: "200g" }, { item: "Kiełki soi", amount: "45g" }],
    recipe: "1. Smażyć imbir, czosnek i mięso 5 min. 2. Dodać warzywa, ryż i sos sojowy, smażyć 2 min."
  },
  {
    name: "Zapiekanka z cukinią i ryżem",
    calories: 540, protein: 34, fats: 26, carbs: 42,
    type: "lunch",
    ingredients: [{ item: "Cukinia", amount: "400g" }, { item: "Wieprzowina mielona", amount: "300g" }, { item: "Ryż", amount: "50g" }],
    recipe: "1. Mięso dusić w pomidorach. 2. Układać warstwami z cukinią i ryżem, piec 30 min."
  },
  {
    name: "Zielone pulpeciki z jarmużem",
    calories: 470, protein: 34, fats: 14, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Indyk mielony", amount: "125g" }, { item: "Jarmuż", amount: "30g" }, { item: "Ryż biały", amount: "50g" }],
    recipe: "1. Pulpety z jarmużem parować 8 min. 2. Podać z ryżem i surówką z marchwi."
  },
  {
    name: "Ziołowy indyk na parze",
    calories: 430, protein: 32, fats: 10, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Pierś indyka", amount: "150g" }, { item: "Batat", amount: "200g" }, { item: "Marchewka", amount: "160g" }],
    recipe: "1. Warzywa upiec, indyka parować. 2. Posypać natką pietruszki."
  },
  {
    name: "Zupa dyniowa z pulpecikami",
    calories: 410, protein: 26, fats: 14, carbs: 44,
    type: "lunch",
    ingredients: [{ item: "Dynia", amount: "500g" }, { item: "Indyk mielony", amount: "200g" }, { item: "Jogurt grecki", amount: "60g" }],
    recipe: "1. Pulpety gotować w bulionie. 2. Dynię upiec, zblendować z bulionem i olejem na krem."
  },
  {
    name: "Zupa z mlekiem kokosowym i kurczakiem",
    calories: 460, protein: 28, fats: 22, carbs: 38,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "100g" }, { item: "Makaron Chow Mein", amount: "60g" }, { item: "Mleczko kokosowe", amount: "100g" }],
    recipe: "1. Gotować warzywa i mięso w bulionie 20 min. 2. Dodać mleczko i szpinak."
  },
  {
    name: "Bowl z szarpanym kurczakiem BBQ",
    calories: 520, protein: 36, fats: 18, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "200g" }, { item: "Awokado", amount: "70g" }, { item: "Fasola czerwona", amount: "120g" }],
    recipe: "1. Mięso piec w sosie BBQ, poszarpać widelcem. 2. Podać z kukurydzą i awokado."
  },
  {
    name: "Burger Bowl z ryżem",
    calories: 540, protein: 42, fats: 18, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Ryż basmati", amount: "100g" }, { item: "Kurczak mielony", amount: "200g" }, { item: "Ogórek konserwowy", amount: "100g" }],
    recipe: "1. Smażone mięso z ryżem, warzywami i sosem majonezowo-ketchupowym."
  },
  {
    name: "Chrupiący kurczak z ziemniakami",
    calories: 590, protein: 44, fats: 22, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Ziemniaki", amount: "350g" }, { item: "Pierś kurczaka", amount: "200g" }, { item: "Płatki kukurydziane", amount: "24g" }],
    recipe: "1. Ziemniaki piec 30 min. 2. Kurczaka w płatkach piec kolejne 20 min."
  },
  {
    name: "Chrupiący kurczak w sosie teriyaki",
    calories: 530, protein: 36, fats: 14, carbs: 64,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "150g" }, { item: "Ryż basmati", amount: "50g" }, { item: "Brokuł", amount: "150g" }],
    recipe: "1. Mięso piec w sosie teriyaki 25 min. 2. Podać z ryżem i brokułem."
  },
  {
    name: "Frytki z batata z kurczakiem",
    calories: 560, protein: 34, fats: 18, carbs: 65,
    type: "lunch",
    ingredients: [{ item: "Batat", amount: "200g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Miks sałat", amount: "25g" }],
    recipe: "1. Bataty w słupkach i kurczaka piec 30 min w 200°C."
  },
  {
    name: "Frytki z batatów z sałatką",
    calories: 510, protein: 30, fats: 16, carbs: 60,
    type: "lunch",
    ingredients: [{ item: "Batat", amount: "200g" }, { item: "Pierś kurczaka", amount: "125g" }, { item: "Brokuł", amount: "150g" }],
    recipe: "1. Mięso i bataty upiec. 2. Dressing czosnkowy, podać z sałatką szpinakową."
  },
  {
    name: "Kasza jaglana z pieczonym kurczakiem",
    calories: 550, protein: 42, fats: 18, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Kasza jaglana", amount: "100g" }, { item: "Pierś kurczaka", amount: "200g" }, { item: "Cukinia", amount: "200g" }],
    recipe: "1. Kaszę gotować w bulionie. 2. Mięso i warzywa piec 20 min."
  },
  {
    name: "Krupnik z koperkiem i oliwą",
    calories: 420, protein: 28, fats: 12, carbs: 50,
    type: "lunch",
    ingredients: [{ item: "Kasza jęczmienna", amount: "60g" }, { item: "Pierś kurczaka", amount: "125g" }, { item: "Seler naciowy", amount: "90g" }],
    recipe: "1. Gotować warzywa i kaszę 20 min, dodać mięso i przyprawy."
  },
  {
    name: "Kurczak Gochujang z ryżem",
    calories: 520, protein: 34, fats: 16, carbs: 60,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "125g" }, { item: "Ryż basmati", amount: "60g" }, { item: "Pasta Gochujang", amount: "5g" }],
    recipe: "1. Mięso smażyć 15 min. 2. Sos zredukować ze skrobią, podać z marynowanym ogórkiem."
  },
  {
    name: "Kurczak Sriracha Mayo",
    calories: 540, protein: 36, fats: 22, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "150g" }, { item: "Ryż basmati", amount: "50g" }, { item: "Majonez", amount: "15g" }],
    recipe: "1. Mięso smażyć 15 min, posmarować sosem sriracha-mayo i podpiec."
  },
  {
    name: "Kurczak w kremowym sosie pesto z parmezanem",
    calories: 610, protein: 42, fats: 32, carbs: 38,
    type: "lunch",
    ingredients: [{ item: "Makaron", amount: "100g" }, { item: "Pierś kurczaka", amount: "200g" }, { item: "Pesto zielone", amount: "30g" }, { item: "Parmezan", amount: "15g" }],
    recipe: "1. Smażyć kurczaka, dodać pomidorki i pesto. 2. Wlać śmietankę i szpinak, połączyć z makaronem."
  },
  {
    name: "Makaron z sosem z pieczonej papryki",
    calories: 520, protein: 34, fats: 16, carbs: 60,
    type: "lunch",
    ingredients: [{ item: "Spaghetti pełnoziarniste", amount: "200g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Papryka czerwona", amount: "510g" }],
    recipe: "1. Papryki upiec, obrać, zblendować z mlekiem i suszonymi pomidorami na sos."
  },
  {
    name: "Makaron z boczkiem i wędzonym twarogiem",
    calories: 650, protein: 32, fats: 36, carbs: 50,
    type: "lunch",
    ingredients: [{ item: "Makaron", amount: "100g" }, { item: "Boczek", amount: "90g" }, { item: "Twaróg wędzony", amount: "150g" }],
    recipe: "1. Boczek smażyć na chrupko, dodać cebulę. 2. Wymieszać z makaronem i pokruszonym serem."
  },
  {
    name: "Makaron z indykiem i serem Grana Padano",
    calories: 580, protein: 40, fats: 18, carbs: 64,
    type: "lunch",
    ingredients: [{ item: "Makaron", amount: "100g" }, { item: "Indyk mielony", amount: "200g" }, { item: "Grana Padano", amount: "25g" }],
    recipe: "1. Sos mięsny z pomidorów puszka dusić do zgęstnienia z papryką i cukinią."
  },
  {
    name: "Pinsa z cukinią i burratą",
    calories: 630, protein: 28, fats: 36, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Pinsa", amount: "230g" }, { item: "Burrata", amount: "120g" }, { item: "Cukinia", amount: "200g" }],
    recipe: "1. Pinsę zapiec z cukinią 5 min. 2. Dodać szynkę parmeńską i burratę."
  },
  {
    name: "Pizza na spodzie Piadina z pieczarkami",
    calories: 590, protein: 32, fats: 28, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Piadina", amount: "120g" }, { item: "Pieczarki", amount: "60g" }, { item: "Szynka indyk", amount: "60g" }],
    recipe: "1. Piadinę piec 8 min z serem, cebulą i szynką."
  },
  {
    name: "Risotto z marchewką i selerem",
    calories: 510, protein: 38, fats: 12, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Ryż arborio", amount: "100g" }, { item: "Pierś kurczaka", amount: "200g" }, { item: "Włoszczyzna", amount: "300g" }],
    recipe: "1. Smażyć ryż i warzywa. 2. Gotować dolewając bulion przez 18 min."
  },
  {
    name: "Sałatka z klopsikami i miętą",
    calories: 490, protein: 34, fats: 16, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Kurczak mielony", amount: "125g" }, { item: "Kuskus", amount: "60g" }, { item: "Jogurt", amount: "60g" }],
    recipe: "1. Klopsiki smażyć. 2. Sos jogurt-mięta-cytryna. 3. Podać z kuskusem i rukolą."
  },
  {
    name: "Tortilla z kurczakiem i fetą",
    calories: 550, protein: 42, fats: 20, carbs: 50,
    type: "lunch",
    ingredients: [{ item: "Tortilla", amount: "180g" }, { item: "Feta", amount: "100g" }, { item: "Pierś kurczaka", amount: "200g" }],
    recipe: "1. Kurczak smażony. 2. Sos jogurt-czosnek-koper. 3. Zawijać z warzywami i serem."
  },
  {
    name: "Zapiekanka ziemniaczana z bakłażanem",
    calories: 640, protein: 36, fats: 32, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Ziemniaki", amount: "560g" }, { item: "Kurczak mielony", amount: "300g" }, { item: "Mozzarella", amount: "120g" }],
    recipe: "1. Ziemniaki podgotować. 2. Piec z sosem mięsnym i bakłażanem 25 min + 10 min z serem."
  },
  {
    name: "Chowder z kukurydzy z kurczakiem",
    calories: 490, protein: 34, fats: 16, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Ziemniaki", amount: "420g" }, { item: "Kurczak", amount: "200g" }, { item: "Kukurydza", amount: "240g" }],
    recipe: "1. Mięso smażyć. 2. Gotować ziemniaki w bulionie. 3. Zagęścić mlekiem z mąką, dodać ser cheddar."
  },
  {
    name: "Fasola po bretońsku z polędwicą",
    calories: 530, protein: 32, fats: 14, carbs: 68,
    type: "lunch",
    ingredients: [{ item: "Fasola biała", amount: "120g" }, { item: "Polędwica wieprzowa", amount: "100g" }, { item: "Chleb żytni", amount: "60g" }],
    recipe: "1. Mięso smażyć w kostkę. 2. Dusić z warzywami, fasolą i pomidorami."
  },
  {
    name: "Gulasz wołowy z kaszą pęczak",
    calories: 560, protein: 38, fats: 14, carbs: 70,
    type: "lunch",
    ingredients: [{ item: "Rostbef", amount: "125g" }, { item: "Kasza pęczak", amount: "40g" }, { item: "Papryka", amount: "170g" }],
    recipe: "1. Mięso w mące smażyć. 2. Dusić z warzywami i koncentratem 25 min."
  },
  {
    name: "Gyros Bowl z frytkami",
    calories: 595, protein: 38, fats: 22, carbs: 61,
    type: "lunch",
    ingredients: [{ item: "Frytki", amount: "100g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Miks sałat", amount: "100g" }],
    recipe: "1. Mięso i frytki piec 20 min w 200°C. 2. Sos jogurt-tymianek-czosnek."
  },
  {
    name: "Indyk po seczuańsku",
    calories: 650, protein: 44, fats: 18, carbs: 78,
    type: "lunch",
    ingredients: [{ item: "Ryż", amount: "200g" }, { item: "Pierś indyka", amount: "300g" }, { item: "Seler naciowy", amount: "90g" }],
    recipe: "1. Ryż ugotować. 2. Smażyć indyka w paski 6 min. 3. Dodać warzywa, sos sojowy i koncentrat."
  },
  {
    name: "Jednogarnkowy kurczak z ryżem",
    calories: 480, protein: 34, fats: 12, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "200g" }, { item: "Ryż", amount: "50g" }, { item: "Batat", amount: "200g" }],
    recipe: "1. Warzywa i mięso dusić w bulionie z ryżem do miękkości."
  },
  {
    name: "Kurczak w sosie śliwkowym",
    calories: 550, protein: 38, fats: 14, carbs: 68,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "200g" }, { item: "Powidła", amount: "45g" }, { item: "Kopytka", amount: "250g" }],
    recipe: "1. Piec kurczaka w sosie z powideł i soi. 2. Podać z kopytkami i marchwią."
  },
  {
    name: "Kurczak w sosie szpinakowym z masłem",
    calories: 510, protein: 32, fats: 26, carbs: 36,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "125g" }, { item: "Szpinak", amount: "75g" }, { item: "Makaron", amount: "50g" }],
    recipe: "1. Mięso smażyć, dodać szpinak i śmietanę. 2. Dusić 10 min, dodać masło na koniec."
  },
  {
    name: "Makaron ze schabem i brukselką",
    calories: 620, protein: 44, fats: 18, carbs: 70,
    type: "lunch",
    ingredients: [{ item: "Makaron", amount: "100g" }, { item: "Schab wieprzowy", amount: "200g" }, { item: "Brukselka", amount: "200g" }],
    recipe: "1. Smażyć schab, dodać brukselki i śmietankę. 2. Gotować 30 min."
  },
  {
    name: "Makaron z zielonym sosem z awokado",
    calories: 580, protein: 36, fats: 28, carbs: 46,
    type: "lunch",
    ingredients: [{ item: "Spaghetti", amount: "100g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Awokado", amount: "70g" }],
    recipe: "1. Sos: awokado, serek, cytryna i woda z makaronu zblendowane."
  },
  {
    name: "Marchwianka z pulpecikami",
    calories: 410, protein: 28, fats: 12, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Marchewka", amount: "240g" }, { item: "Ryż biały", amount: "40g" }, { item: "Kurczak mielony", amount: "125g" }],
    recipe: "1. Zupę z ryżem i marchwią zblendować. 2. Podać z ugotowanymi pulpetami."
  },
  {
    name: "Pieczona pierś z kurczaka z kaszą",
    calories: 490, protein: 36, fats: 14, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Kasza jaglana", amount: "50g" }, { item: "Pierś kurczaka", amount: "125g" }, { item: "Cukinia", amount: "200g" }],
    recipe: "1. Mięso i warzywa piec 25 min w marynacie cytrynowo-ziołowej."
  },
  {
    name: "Pieczone pulpety w kremowym sosie",
    calories: 630, protein: 42, fats: 26, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Kurczak mielony", amount: "400g" }, { item: "Makaron orzo", amount: "200g" }, { item: "Śmietanka 12%", amount: "72g" }],
    recipe: "1. Pulpety piec 30 min. 2. Orzo gotować w bulionie ze szpinakiem i śmietanką."
  },
  {
    name: "Kurczak zapiekany z mozzarellą",
    calories: 520, protein: 40, fats: 22, carbs: 40,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "150g" }, { item: "Mozzarella", amount: "60g" }, { item: "Passata", amount: "350g" }],
    recipe: "1. Mięso podsmażyć, piec w sosie pomidorowym 15 min + 5 min z serem."
  },
  {
    name: "Tradycyjna potrawka z kurczaka",
    calories: 460, protein: 34, fats: 12, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Udko kurczaka", amount: "150g" }, { item: "Ziemniaki", amount: "210g" }, { item: "Włoszczyzna", amount: "230g" }],
    recipe: "1. Gotować wszystko 30 min. 2. Mięso rozdrobnić, podać z tłuczonymi ziemniakami."
  },
  {
    name: "Wieprzowina w sosie paprykowym",
    calories: 590, protein: 42, fats: 18, carbs: 64,
    type: "lunch",
    ingredients: [{ item: "Schab wieprzowy", amount: "175g" }, { item: "Ziemniaki", amount: "140g" }, { item: "Papryka", amount: "85g" }],
    recipe: "1. Sos: duszona papryka zblendowana z passatą i bulionem. 2. Mięso dusić w sosie."
  },
  {
    name: "Zapiekanka z fasolką szparagową",
    calories: 580, protein: 44, fats: 20, carbs: 56,
    type: "lunch",
    ingredients: [{ item: "Makaron penne", amount: "100g" }, { item: "Pierś kurczaka", amount: "200g" }, { item: "Fasolka", amount: "200g" }],
    recipe: "1. Sos: bulion, mleko, mąka, koper. 2. Zapiekać z makaronem, mięsem i serem 15 min."
  },
  {
    name: "Zapiekanka z ryżu i indyka",
    calories: 620, protein: 40, fats: 18, carbs: 74,
    type: "lunch",
    ingredients: [{ item: "Ryż basmati", amount: "150g" }, { item: "Indyk mielony", amount: "200g" }, { item: "Parmezan", amount: "50g" }],
    recipe: "1. Sos pomidorowy z mięsem dusić 8 min. 2. Zapiekać warstwami z ryżem i serem 30 min."
  },
  {
    name: "Zapiekany bakłażan z indykiem",
    calories: 490, protein: 34, fats: 22, carbs: 38,
    type: "lunch",
    ingredients: [{ item: "Bakłażan", amount: "200g" }, { item: "Indyk mielony", amount: "150g" }, { item: "Mozzarella", amount: "60g" }],
    recipe: "1. Plastry bakłażana upiec. 2. Nałożyć sos mięsny i ser, zapiekać ponownie."
  },
  {
    name: "Zupa zacierkowa z kurczakiem",
    calories: 440, protein: 32, fats: 12, carbs: 51,
    type: "lunch",
    ingredients: [{ item: "Mąka pszenna", amount: "60g" }, { item: "Jajko", amount: "56g" }, { item: "Pierś kurczaka", amount: "125g" }],
    recipe: "1. Zrobić domowe zacierki. 2. Gotować w bulionie z mięsem i warzywami 15 min."
  },
  {
    name: "Aromatyczny kurczak parowany z puree",
    calories: 420, protein: 34, fats: 14, carbs: 39,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "100g" }, { item: "Ziemniaki", amount: "210g" }, { item: "Burak", amount: "100g" }],
    recipe: "1. Mięso parować 20 min. 2. Ziemniaki ubić na puree z masłem."
  },
  {
    name: "Burrito Bowl z awokado",
    calories: 590, protein: 36, fats: 28, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Ryż basmati", amount: "60g" }, { item: "Indyk mielony", amount: "125g" }, { item: "Awokado", amount: "70g" }],
    recipe: "1. Ryż ugotować. 2. Mięso usmażyć w gyrosie. 3. Podać z kukurydzą, fasolą i pomidorkami."
  },
  {
    name: "Krem marchewkowy z parowanym kurczakiem",
    calories: 410, protein: 28, fats: 12, carbs: 47,
    type: "lunch",
    ingredients: [{ item: "Marchewka", amount: "320g" }, { item: "Pierś kurczaka", amount: "125g" }, { item: "Bulion", amount: "250g" }],
    recipe: "1. Zupę zblendować. 2. Mięso parować osobno, podać w zupie z kleksem jogurtu."
  },
  {
    name: "Gołąbki bez zawijania z ziemniakami",
    calories: 650, protein: 44, fats: 28, carbs: 56,
    type: "lunch",
    ingredients: [{ item: "Kapusta", amount: "150g" }, { item: "Indyk mielony", amount: "500g" }, { item: "Ziemniaki", amount: "420g" }],
    recipe: "1. Klopsiki z ryżem i kapustą dusić w sosie pomidorowym 20 min."
  },
  {
    name: "Grillowana pierś kurczaka z sałatką",
    calories: 440, protein: 36, fats: 16, carbs: 38,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "200g" }, { item: "Chleb żytni", amount: "120g" }, { item: "Pomidor", amount: "160g" }],
    recipe: "1. Mięso marynować w occie balsamicznym, grillować. 2. Podać z dużą sałatką."
  },
  {
    name: "Karkówka z grilla z szaszłykami",
    calories: 620, protein: 34, fats: 38, carbs: 35,
    type: "lunch",
    ingredients: [{ item: "Karkówka", amount: "200g" }, { item: "Pieczarki", amount: "100g" }, { item: "Chleb żytni", amount: "120g" }],
    recipe: "1. Mięso marynować w musztardzie i ketchupie. 2. Grillować z szaszłykami warzywnymi."
  },
  {
    name: "Kurczak parowany z kapustą zasmażaną",
    calories: 530, protein: 38, fats: 22, carbs: 45,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "100g" }, { item: "Ziemniaki", amount: "280g" }, { item: "Kapusta", amount: "300g" }],
    recipe: "1. Mięso parować. 2. Kapustę dusić, zagęścić zasmażką z mąki pełnoziarnistej."
  },
  {
    name: "Kurczak na parze z mizerią",
    calories: 490, protein: 32, fats: 14, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "100g" }, { item: "Ziemniaki", amount: "350g" }, { item: "Ogórek", amount: "150g" }],
    recipe: "1. Parować kurczaka i ziemniaki. 2. Podać z mizerią na jogurcie."
  },
  {
    name: "Zupa gulaszowa z indyka",
    calories: 420, protein: 30, fats: 14, carbs: 44,
    type: "lunch",
    ingredients: [{ item: "Pierś indyka", amount: "125g" }, { item: "Papryka", amount: "170g" }, { item: "Chleb pszenny", amount: "60g" }],
    recipe: "1. Paprykę upiec i obrać. 2. Gotować z indykiem i koncentratem. 3. Zabielić jogurtem."
  },
  {
    name: "Makaron Primavera z kurczakiem",
    calories: 560, protein: 38, fats: 18, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Makaron", amount: "100g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Cukinia", amount: "200g" }],
    recipe: "1. Mięso smażyć. 2. Dodać cukinię w paski i pomidorki. 3. Sypać parmezanem."
  },
  {
    name: "Makaron z kurczakiem po włosku",
    calories: 520, protein: 34, fats: 16, carbs: 60,
    type: "lunch",
    ingredients: [{ item: "Makaron", amount: "400g" }, { item: "Pierś kurczaka", amount: "400g" }, { item: "Mrożonka warzyw", amount: "450g" }],
    recipe: "1. Kurczaka smażyć. 2. Dodać mrożonkę i pomidory puszka. 3. Połączyć z makaronem."
  },
  {
    name: "Meksykańska zupa z fasolą i wołowiną",
    calories: 510, protein: 32, fats: 14, carbs: 64,
    type: "lunch",
    ingredients: [{ item: "Wołowina mielona", amount: "200g" }, { item: "Fasola", amount: "240g" }, { item: "Passata", amount: "500g" }],
    recipe: "1. Smażyć mięso i warzywa. 2. Dodać kukurydzę, fasolę i passatę, dusić do smaku."
  },
  {
    name: "Pieczone nuggetsy z sosem BBQ",
    calories: 610, protein: 44, fats: 22, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "500g" }, { item: "Płatki kukurydziane", amount: "100g" }, { item: "Majonez", amount: "100g" }],
    recipe: "1. Mięso w płatkach piec 20 min w 220°C. 2. Sos: BBQ + miód."
  },
  {
    name: "Pulpeciki w sosie pomidorowym z masłem",
    calories: 490, protein: 34, fats: 18, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Kurczak mielony", amount: "150g" }, { item: "Ziemniaki", amount: "140g" }, { item: "Passata", amount: "350g" }],
    recipe: "1. Pulpety piec 25 min. 2. Podać z puree i sosem z tartych warzyw korzeniowych."
  },
  {
    name: "Sałatka z grillowanym kurczakiem i jogurtem",
    calories: 420, protein: 36, fats: 12, carbs: 42,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "150g" }, { item: "Jogurt", amount: "150g" }, { item: "Miód", amount: "12g" }],
    recipe: "1. Mięso grillować w marynacie gyros. 2. Podać z warzywami i sosem ziołowym."
  },
  {
    name: "Pieczona wieprzowina z bagietką",
    calories: 640, protein: 40, fats: 32, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Schab", amount: "300g" }, { item: "Bagietka", amount: "140g" }, { item: "Miód", amount: "12g" }],
    recipe: "1. Schab piec ok. 1h w 190°C. 2. Podać z sałatką i sosem miodowo-musztardowym."
  },
  {
    name: "Tortilla z burgerem i frytkami",
    calories: 680, protein: 38, fats: 34, carbs: 56,
    type: "lunch",
    ingredients: [{ item: "Tortilla", amount: "120g" }, { item: "Frytki", amount: "140g" }, { item: "Kurczak mielony", amount: "200g" }],
    recipe: "1. Frytki piec. 2. Burger usmażyć. 3. Wszystko zawinąć w tortillę z sosem jogurtowym."
  },
  {
    name: "Warzywny gulasz wołowy z pieczywem",
    calories: 460, protein: 32, fats: 18, carbs: 42,
    type: "lunch",
    ingredients: [{ item: "Polędwica wołowa", amount: "125g" }, { item: "Marchewka", amount: "160g" }, { item: "Chleb pszenny", amount: "60g" }],
    recipe: "1. Mięso i marchew dusić w bulionie do miękkości, zagęścić skrobią."
  },
  {
    name: "Drobiowa zapiekanka z brokułem",
    calories: 590, protein: 42, fats: 26, carbs: 46,
    type: "lunch",
    ingredients: [{ item: "Makaron", amount: "300g" }, { item: "Brokuł", amount: "400g" }, { item: "Pierś kurczaka", amount: "200g" }],
    recipe: "1. Ugotowane składniki zapiekać z jogurtem i serem Grana Padano 15 min."
  },
  {
    name: "Zielony krem z cukinii z kurczakiem",
    calories: 395, protein: 32, fats: 14, carbs: 36,
    type: "lunch",
    ingredients: [{ item: "Cukinia", amount: "600g" }, { item: "Pierś kurczaka", amount: "125g" }, { item: "Mleko", amount: "125ml" }],
    recipe: "1. Gotować warzywa i mięso. 2. Zblendować warzywa z mlekiem i oliwą, podać z kurczakiem."
  },
  {
    name: "Burrito z fasolą i kukurydzą",
    calories: 640, protein: 40, fats: 18, carbs: 78,
    type: "lunch",
    ingredients: [{ item: "Tortilla", amount: "180g" }, { item: "Ryż", amount: "100g" }, { item: "Indyk mielony", amount: "300g" }],
    recipe: "1. Sos mięsny z fasolą i kukurydzą dusić. 2. Mieszać z ryżem, zawijać w tortillę."
  },
  {
    name: "Kurczak z porem i zieloną fasolką",
    calories: 510, protein: 38, fats: 16, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "300g" }, { item: "Por", amount: "140g" }, { item: "Ziemniaki", amount: "490g" }],
    recipe: "1. Ziemniaki piec. 2. Kurczaka dusić na porze w naczyniu 25 min."
  },
  {
    name: "Gnocchi z indykiem i groszkiem",
    calories: 580, protein: 34, fats: 18, carbs: 70,
    type: "lunch",
    ingredients: [{ item: "Pierś indyka", amount: "200g" }, { item: "Gnocchi", amount: "250g" }, { item: "Groszek", amount: "240g" }],
    recipe: "1. Indyka piec 40 min. 2. Gnocchi gotować, połączyć z duszonym groszkiem i serem."
  },
  {
    name: "Pieczony kurczak z surówką z jabłka",
    calories: 520, protein: 36, fats: 14, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "300g" }, { item: "Ziemniaki", amount: "420g" }, { item: "Jabłko", amount: "150g" }],
    recipe: "1. Ziemniaki i kurczaka piec w 180°C. 2. Podawać z tartą marchwią i jabłkiem."
  },
  {
    name: "Gulasz z indyka z pęczakiem",
    calories: 540, protein: 38, fats: 14, carbs: 66,
    type: "lunch",
    ingredients: [{ item: "Pierś indyka", amount: "300g" }, { item: "Kasza pęczak", amount: "100g" }, { item: "Cukinia", amount: "200g" }],
    recipe: "1. Mięso i warzywa dusić w pomidorach. 2. Połączyć z ugotowaną kaszą i jogurtem."
  },
  {
    name: "Kotlety mielone z mizerią i koperkiem",
    calories: 610, protein: 42, fats: 32, carbs: 38,
    type: "lunch",
    ingredients: [{ item: "Wieprzowina mielona", amount: "500g" }, { item: "Ziemniaki", amount: "490g" }, { item: "Ogórek", amount: "300g" }],
    recipe: "1. Klasyczne mielone z bułką i cebulą smażyć. 2. Podać z ziemniakami i mizerią."
  },
  {
    name: "Makaron Fusilli z indykiem i szpinakiem",
    calories: 560, protein: 40, fats: 18, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Makaron", amount: "150g" }, { item: "Pierś indyka", amount: "300g" }, { item: "Szpinak", amount: "75g" }],
    recipe: "1. Mięso smażyć 8 min. 2. Dodać szpinak i suszone pomidory, wymieszać z makaronem."
  },
  {
    name: "Makaron Fusilli ze szpinakiem i indykiem",
    calories: 520, protein: 38, fats: 14, carbs: 60,
    type: "lunch",
    ingredients: [{ item: "Makaron", amount: "100g" }, { item: "Pierś indyka", amount: "200g" }, { item: "Szpinak", amount: "100g" }],
    recipe: "1. Smażyć indyka 8 min. 2. Dodać szpinak i pomidorki, wymieszać z serem Grana Padano."
  },
  {
    name: "Naleśniki meksykańskie z kurczakiem",
    calories: 590, protein: 38, fats: 20, carbs: 64,
    type: "lunch",
    ingredients: [{ item: "Naleśniki", amount: "540g" }, { item: "Kurczak mielony", amount: "400g" }, { item: "Papryka", amount: "170g" }],
    recipe: "1. Farsz mięsno-warzywny dusić w pomidorach 8 min. 2. Zawijać w naleśniki."
  },
  {
    name: "Wołowina po azjatycku z ryżem",
    calories: 580, protein: 40, fats: 22, carbs: 56,
    type: "lunch",
    ingredients: [{ item: "Rostbef", amount: "400g" }, { item: "Ryż basmati", amount: "200g" }, { item: "Brokuł", amount: "200g" }],
    recipe: "1. Wołowinę smażyć krótko w sosie sojowym. 2. Warzywa dusić 7 min, podać z ryżem."
  },
  {
    name: "Sałatka z makaronem i kurczakiem BBQ",
    calories: 510, protein: 34, fats: 16, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Makaron", amount: "400g" }, { item: "Pierś kurczaka", amount: "400g" }, { item: "Masło orzechowe", amount: "30g" }],
    recipe: "1. Kurczaka usmażyć. 2. Sos: masło orzechowe, soja, miód, cytryna. 3. Wymieszać z makaronem."
  },
  {
    name: "Stek wołowy z kaszą pęczak",
    calories: 540, protein: 42, fats: 20, carbs: 48,
    type: "lunch",
    ingredients: [{ item: "Rostbef", amount: "200g" }, { item: "Pęczak", amount: "100g" }, { item: "Ogórek", amount: "150g" }],
    recipe: "1. Stek grillować 3 min na stronę. 2. Podać z kaszą i sosem miodowo-musztardowym."
  },
  {
    name: "Zupa gołąbkowa z ryżem",
    calories: 480, protein: 32, fats: 16, carbs: 52,
    type: "lunch",
    ingredients: [{ item: "Indyk mielony", amount: "400g" }, { item: "Ryż", amount: "200g" }, { item: "Kapusta włoska", amount: "495g" }],
    recipe: "1. Smażyć warzywa i mięso. 2. Zalać bulionem i passatą, gotować 30 min. 3. Podać z ryżem."
  },
  {
    name: "Lasagne w papryce",
    calories: 510, protein: 36, fats: 26, carbs: 32,
    type: "lunch",
    ingredients: [{ item: "Papryka", amount: "510g" }, { item: "Wołowina mielona", amount: "400g" }, { item: "Ricotta", amount: "240g" }],
    recipe: "1. Papryki upiec 20 min. 2. Nadziać sosem mięsnym, ricottą i makaronem lasagne, zapiekać."
  },
  {
    name: "Grillowany stek z tuńczyka",
    calories: 460, protein: 34, fats: 18, carbs: 40,
    type: "lunch",
    ingredients: [{ item: "Stek z tuńczyka", amount: "100g" }, { item: "Ziemniaki", amount: "140g" }, { item: "Pomidor", amount: "160g" }],
    recipe: "1. Tuńczyka grillować 2 min na stronę. 2. Podać z pieczonymi ziemniakami i roszponką."
  },
  {
    name: "Kaszotto z burakiem i indykiem",
    calories: 490, protein: 32, fats: 14, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Pęczak", amount: "50g" }, { item: "Pierś indyka", amount: "150g" }, { item: "Botwinka", amount: "100g" }],
    recipe: "1. Kaszę i mięso dusić w bulionie. 2. Dodać buraczki i liście botwiny pod koniec."
  },
  {
    name: "Białkowe babeczki z mięsem",
    calories: 530, protein: 44, fats: 28, carbs: 26,
    type: "lunch",
    ingredients: [{ item: "Brokuł", amount: "900g" }, { item: "Wołowina mielona", amount: "400g" }, { item: "Parmezan", amount: "150g" }],
    recipe: "1. Z masy brokułowej piec koszyczki 30 min. 2. Nadziewać sosem mięsnym i ricottą, zapiec."
  },
  {
    name: "Schab w sosie z porem i marchewką",
    calories: 520, protein: 38, fats: 16, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Ziemniaki", amount: "280g" }, { item: "Schab", amount: "200g" }, { item: "Por", amount: "280g" }],
    recipe: "1. Smażyć pora i marchew 5 min. 2. Dodać mięso i bulion, dusić 30 min. 3. Zagęścić skrobią."
  }
];


import { Meal } from "../types";

export const LUNCH_MEALS: Meal[] = [
  {
    name: "Bowl z szarpaną wieprzowiną i salsą ananasową",
    calories: 680, protein: 42, fats: 24, carbs: 75,
    type: "lunch",
    ingredients: [{ item: "Ryż", amount: "150g" }, { item: "Łopatka wieprzowa", amount: "500g" }, { item: "Cebula", amount: "1 szt" }, { item: "Czosnek", amount: "2 ząbki" }, { item: "Bulion warzywny", amount: "300ml" }, { item: "Ocet jabłkowy", amount: "1 łyżka" }, { item: "Sos sojowy", amount: "1 łyżka" }, { item: "Ananas świeży", amount: "2 plastry" }, { item: "Papryka zielona", amount: "1 szt" }],
    recipe: "1. Mięso pokroić, doprawić solą, pieprzem i papryką. 2. Cebulę i czosnek posiekać i zeszklić na oliwie. 3. Obsmażyć mięso z każdej strony na złoty kolor. 4. Dodać bulion, ocet i sos sojowy. 5. Dusić pod przykryciem ok. 2-3 godziny, aż mięso będzie się rozpadać pod widelcem. 6. Poszarpać mięso dwoma widelcami. 7. Przygotować salsę: pokroić ananasa i paprykę w drobną kostkę. 8. Podać mięso na ryżu z dodatkiem salsy."
  },
  {
    name: "Burger z indyka z pieczonymi ziemniakami",
    calories: 590, protein: 38, fats: 22, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Indyk mielony", amount: "150g" }, { item: "Ziemniaki", amount: "3 szt" }, { item: "Cebula czerwona", amount: "1/2 szt" }, { item: "Jogurt naturalny", amount: "2 łyżki" }, { item: "Majonez light", amount: "1 łyżeczka" }, { item: "Miks sałat", amount: "1 garść" }],
    recipe: "1. Ziemniaki pokroić w słupki (frytki), skropić oliwą i piec 30 min w 200°C. 2. Mięso wymieszać z drobno posiekaną cebulą i przyprawą do drobiu. 3. Uformować burgera i usmażyć na patelni grillowej (ok. 5 min z każdej strony). 4. Przygotować sos: jogurt wymieszać z majonezem i czosnkiem. 5. Burgera podać obok frytek z ziemniaków i dużej porcji sałaty z sosem."
  },
  {
    name: "Duszona wołowina z warzywami i kaszą gryczaną",
    calories: 620, protein: 45, fats: 18, carbs: 68,
    type: "lunch",
    ingredients: [{ item: "Polędwica wołowa", amount: "150g" }, { item: "Marchew", amount: "2 szt" }, { item: "Cebula", amount: "1 szt" }, { item: "Bulion warzywny", amount: "250ml" }, { item: "Kasza gryczana", amount: "60g" }, { item: "Koncentrat pomidorowy", amount: "1 łyżka" }],
    recipe: "1. Kaszę ugotować według instrukcji na opakowaniu. 2. Mięso pokroić w kostkę, oprószyć mąką i podsmażyć na oliwie. 3. Dodać pokrojoną marchew i cebulę, smażyć chwilę razem. 4. Zalać bulionem, dodać koncentrat i dusić pod przykryciem ok. 40 min do miękkości mięsa. 5. Podawać z kaszą i natką pietruszki."
  },
  {
    name: "Gulasz węgierski z dynią i chlebem żytnim",
    calories: 540, protein: 36, fats: 14, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Polędwica wołowa", amount: "150g" }, { item: "Dynia", amount: "200g" }, { item: "Marchewka", amount: "2 szt" }, { item: "Papryka czerwona", amount: "1 szt" }, { item: "Bulion warzywny", amount: "400ml" }, { item: "Chleb żytni", amount: "4 kromki" }],
    recipe: "1. Mięso pokroić w kostkę i obsmażyć. 2. Dodać posiekaną cebulę, paprykę i marchewkę. 3. Zalać bulionem i dusić 30 min. 4. Dodać dynię pokrojoną w kostkę i gotować jeszcze 15 min, aż warzywa będą miękkie. 5. Doprawić wędzoną papryką i majerankiem. 6. Zjeść z kromkami chleba."
  },
  {
    name: "Kotleciki siekane z kurczaka z sałatką",
    calories: 590, protein: 46, fats: 20, carbs: 60,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "150g" }, { item: "Ziemniaki", amount: "4 szt" }, { item: "Mozzarella", amount: "30g" }, { item: "Jajka", amount: "1 szt" }, { item: "Miks sałat", amount: "2 garście" }],
    recipe: "1. Ziemniaki ugotować lub upiec w cząstkach. 2. Kurczaka i mozzarellę pokroić w bardzo drobną kostkę. 3. Wymieszać mięso z jajkiem, odrobiną mąki i posiekaną papryką. 4. Formować małe placuszki i smażyć na niewielkiej ilości tłuszczu na złoty kolor. 5. Podać z ziemniakami i świeżą sałatą."
  },
  {
    name: "Naleśniki pełnoziarniste z hummusem i kurczakiem",
    calories: 610, protein: 40, fats: 22, carbs: 64,
    type: "lunch",
    ingredients: [{ item: "Hummus", amount: "3 łyżki" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Mąka pełnoziarnista", amount: "80g" }, { item: "Jajka", amount: "1 szt" }, { item: "Mleko 1.5%", amount: "150ml" }],
    recipe: "1. Z mąki, jajka i mleka usmażyć 2-3 cienkie naleśniki. 2. Kurczaka pokroić w paski, doprawić i zgrillować na patelni. 3. Naleśniki posmarować hummusem, ułożyć kurczaka i ulubione warzywa (np. ogórek, rzodkiewka). 4. Zawinąć w rulony i krótko podgrzać na patelni."
  },
  {
    name: "Fit bigos z drobiem i chlebem żytnim",
    calories: 520, protein: 38, fats: 24, carbs: 40,
    type: "lunch",
    ingredients: [{ item: "Schab wieprzowy", amount: "100g" }, { item: "Szynka drobiowa", amount: "3 plastry" }, { item: "Kapusta kiszona", amount: "300g" }, { item: "Pieczarki", amount: "100g" }, { item: "Chleb żytni", amount: "3 kromki" }],
    recipe: "1. Kapustę kiszoną przepłukać (jeśli bardzo kwaśna) i ugotować do miękkości z liściem laurowym. 2. Mięso i szynkę pokroić w kostkę, podsmażyć z cebulą i pieczarkami. 3. Wszystko połączyć w jednym garnku, dodać koncentrat pomidorowy i dusić min. 30 minut. 4. Doprawić pieprzem i jałowcem. Podawać z pieczywem."
  },
  {
    name: "Zapiekany batat z kurczakiem i serem",
    calories: 520, protein: 30, fats: 18, carbs: 56,
    type: "lunch",
    ingredients: [{ item: "Batat", amount: "1 duży" }, { item: "Mięso mielone z indyka", amount: "150g" }, { item: "Mozzarella", amount: "30g" }, { item: "Pomidor", amount: "1 szt" }],
    recipe: "1. Batata przekroić wzdłuż, nakłuć widelcem i piec 40 min w 200°C do miękkości. 2. W międzyczasie podsmażyć mięso mielone z pomidorem i bazylią. 3. Wydrążyć lekko środek upieczonego batata, wymieszać go z farszem mięsnym i nałożyć z powrotem. 4. Posypać serem i zapiekać jeszcze 10 min, aż ser się rozpuści."
  },
  {
    name: "Kurczak teriyaki z brokułem i komosą",
    calories: 540, protein: 40, fats: 16, carbs: 58,
    type: "lunch",
    ingredients: [{ item: "Komosa ryżowa", amount: "60g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Brokuł", amount: "1/2 szt" }, { item: "Sos sojowy", amount: "2 łyżki" }, { item: "Miód", amount: "1 łyżeczka" }],
    recipe: "1. Komosę ugotować. 2. Kurczaka pokroić w kostkę i zamarynować w sosie sojowym z miodem i imbirem. 3. Usmażyć kurczaka, pod koniec dodać różyczki brokuła i dusić z odrobiną wody pod przykryciem przez 5-7 minut. 4. Podać na komosie, posypać sezamem."
  },
  {
    name: "Drobiowe spaghetti Bolognese (Light)",
    calories: 520, protein: 34, fats: 16, carbs: 62,
    type: "lunch",
    ingredients: [{ item: "Spaghetti", amount: "80g" }, { item: "Mięso mielone z indyka", amount: "150g" }, { item: "Passata pomidorowa", amount: "250ml" }, { item: "Marchewka", amount: "1 szt" }],
    recipe: "1. Makaron ugotować al dente. 2. Mięso mielone podsmażyć bez tłuszczu lub na kropli oliwy. 3. Dodać startą na małych oczkach marchewkę i dusić chwilę. 4. Wlać passatę, dodać zioła prowansalskie i czosnek, gotować sos ok. 15 min do zgęstnienia. 5. Wymieszać z makaronem."
  },
  {
    name: "Pieczona ryba z frytkami z batatów",
    calories: 510, protein: 30, fats: 16, carbs: 60,
    type: "lunch",
    ingredients: [{ item: "Łosoś świeży", amount: "120g" }, { item: "Batat", amount: "1 szt" }, { item: "Brokuł", amount: "1/2 szt" }, { item: "Sok z cytryny", amount: "1 łyżka" }],
    recipe: "1. Batata pokroić w słupki i upiec (200°C, 25-30 min). 2. Rybę skropić cytryną, oprószyć ziołami i upiec obok batatów (ok. 15-18 min). 3. Brokuła ugotować na parze. 4. Podać wszystko z lekkim sosem jogurtowym."
  },
  {
    name: "Tortilla z chrupiącym kurczakiem i fetą",
    calories: 550, protein: 42, fats: 20, carbs: 50,
    type: "lunch",
    ingredients: [{ item: "Tortilla", amount: "1 szt" }, { item: "Ser Feta Light", amount: "40g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Pomidor", amount: "1 szt" }, { item: "Jogurt naturalny", amount: "1 łyżka" }],
    recipe: "1. Kurczaka pokroić w kostkę, przyprawić gyros i szybko usmażyć. 2. Tortillę lekko podgrzać na suchej patelni. 3. Posmarować jogurtem, ułożyć kurczaka, pokrojonego pomidora i pokruszoną fetę. 4. Zawinąć ciasno i opiec jeszcze chwilę z obu stron na patelni."
  },
  {
    name: "Lekka zupa jarzynowa z kurczakiem",
    calories: 390, protein: 30, fats: 10, carbs: 44,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "125g" }, { item: "Marchewka", amount: "2 szt" }, { item: "Ziemniaki", amount: "2 szt" }, { item: "Fasolka szparagowa", amount: "100g" }],
    recipe: "1. Warzywa pokroić w kostkę i zalać bulionem lub wodą. 2. Gotować ok. 15 min. 3. Dodać kurczaka pokrojonego w drobną kostkę i gotować jeszcze 10 min. 4. Pod koniec dodać koperek i opcjonalnie łyżkę jogurtu greckiego."
  },
  {
    name: "Smażony ryż z kurczakiem i warzywami",
    calories: 510, protein: 36, fats: 12, carbs: 64,
    type: "lunch",
    ingredients: [{ item: "Ryż basmati (suchy)", amount: "70g" }, { item: "Pierś kurczaka", amount: "150g" }, { item: "Mieszanka meksykańska", amount: "150g" }, { item: "Sos sojowy", amount: "2 łyżki" }],
    recipe: "1. Ryż ugotować i wystudzić. 2. Kurczaka pokroić i usmażyć na oliwie z imbirem. 3. Dodać warzywa (mrożone lub świeże) i smażyć 5 min. 4. Dodać ryż i sos sojowy, smażyć wszystko razem na dużym ogniu przez 2-3 minuty, ciągle mieszając."
  },
  {
    name: "Gulasz z indyka z dynią i ryżem",
    calories: 530, protein: 36, fats: 12, carbs: 68,
    type: "lunch",
    ingredients: [{ item: "Dynia", amount: "200g" }, { item: "Pierś indyka", amount: "150g" }, { item: "Ryż basmati (suchy)", amount: "70g" }, { item: "Pomidory puszka", amount: "200ml" }],
    recipe: "1. Indyka pokroić w kostkę i podsmażyć z cebulą. 2. Dodać dynię i smażyć 3 min. 3. Zalać pomidorami, doprawić curry i dusić 15 min pod przykryciem. 4. Podać z ugotowanym osobno ryżem."
  },
  {
    name: "Zapiekanka z ryżu, indyka i parmezanu",
    calories: 620, protein: 40, fats: 18, carbs: 74,
    type: "lunch",
    ingredients: [{ item: "Ryż basmati (suchy)", amount: "80g" }, { item: "Mięso mielone z indyka", amount: "150g" }, { item: "Parmezan", amount: "20g" }, { item: "Cukinia", amount: "1/2 szt" }],
    recipe: "1. Ryż podgotować 5 min mniej niż w instrukcji. 2. Mięso usmażyć z cukinią. 3. Wymieszać ryż z farszem i przełożyć do naczynia żaroodpornego. 4. Posypać parmezanem i zapiekać 20 min w 180°C."
  },
  {
    name: "Naleśniki meksykańskie z mięsem i papryką",
    calories: 590, protein: 38, fats: 20, carbs: 64,
    type: "lunch",
    ingredients: [{ item: "Mąka pszenna", amount: "80g" }, { item: "Jajka", amount: "1 szt" }, { item: "Wołowina mielona", amount: "120g" }, { item: "Papryka", amount: "1 szt" }, { item: "Kukurydza", amount: "2 łyżki" }],
    recipe: "1. Usmażyć 2-3 naleśniki. 2. Mięso wołowe usmażyć z cebulą i pokrojoną papryką. 3. Dodać kukurydzę i łyżkę przecieru pomidorowego. 4. Nałożyć farsz na naleśniki, zwinąć i zapiec pod przykryciem w piekarniku przez 10 min."
  },
  {
    name: "Risotto z grzybami leśnymi i indykiem",
    calories: 540, protein: 32, fats: 20, carbs: 56,
    type: "lunch",
    ingredients: [{ item: "Ryż arborio", amount: "70g" }, { item: "Pieczarki lub podgrzybki", amount: "150g" }, { item: "Pierś indyka", amount: "120g" }, { item: "Bulion warzywny", amount: "500ml" }],
    recipe: "1. Indyka i grzyby podsmażyć na maśle/oliwie. 2. Dodać ryż i smażyć, aż stanie się szklisty. 3. Dolewać bulion po jednej chochli, czekając aż ryż wchłonie płyn. 4. Czynność powtarzać ok. 18-20 min, aż ryż będzie miękki i kremowy."
  },
  {
    name: "Schab w sosie porowo-marchewkowym",
    calories: 520, protein: 38, fats: 16, carbs: 54,
    type: "lunch",
    ingredients: [{ item: "Ziemniaki", amount: "3 szt" }, { item: "Schab bez kości", amount: "150g" }, { item: "Por", amount: "1/2 szt" }, { item: "Marchew", amount: "1 szt" }],
    recipe: "1. Schab rozbić delikatnie, przyprawić i krótko obsmażyć. 2. Pora pokroić w plastry, marchew zetrzeć na tarce. 3. Warzywa dusić z mięsem i odrobiną wody/bulionu przez 20 min. 4. Podawać z ziemniakami z koperkiem."
  },
  {
    name: "Kurczak na parze z ziołami i puree",
    calories: 420, protein: 34, fats: 14, carbs: 39,
    type: "lunch",
    ingredients: [{ item: "Pierś kurczaka", amount: "150g" }, { item: "Ziemniaki", amount: "3 szt" }, { item: "Burak gotowany", amount: "1 szt" }, { item: "Masło", amount: "1 łyżeczka" }],
    recipe: "1. Kurczaka doprawić ziołami i parować ok. 20 min. 2. Ziemniaki ugotować i ubić na puree z dodatkiem masła. 3. Buraka zetrzeć na tarce i doprawić sokiem z cytryny. 4. Podawać wszystko razem."
  }
];

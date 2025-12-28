
import { Meal } from "../types";

export const LUNCH_MEALS: Meal[] = [
  {
    name: "Bowl z szarpaną wieprzowiną i salsą ananasową",
    calories: 780, protein: 45, fats: 32, carbs: 78,
    type: "lunch",
    ingredients: [
      { item: "Ryż", amount: "150g" },
      { item: "Łopatka wieprzowa", amount: "500g" },
      { item: "Cebula", amount: "80g" },
      { item: "Czosnek", amount: "12g" },
      { item: "Bulion warzywny", amount: "300g" },
      { item: "Ocet jabłkowy", amount: "15g" },
      { item: "Sos sojowy", amount: "10g" },
      { item: "Papryka słodka", amount: "3g" },
      { item: "Papryka wędzona", amount: "3g" },
      { item: "Kumin", amount: "2.5g" },
      { item: "Pieprz", amount: "0.25g" },
      { item: "Oliwa z oliwek", amount: "15g" },
      { item: "Ananas świeży", amount: "200g" },
      { item: "Cebula czerwona", amount: "40g" },
      { item: "Papryka zielona", amount: "85g" },
      { item: "Sok z limonki", amount: "12g" },
      { item: "Kolendra", amount: "4g" }
    ],
    recipe: "1. Mięso kroimy na duże kawałki (około 4-5 cm). Solimy i pieprzymy je ze wszystkich stron.\n2. Cebulę kroimy w piórka, a czosnek obieramy i siekamy w plasterki.\n3. W dużym garnku lub rondlu z grubym dnem rozgrzewamy oliwę na dużej mocy palnika. Partiami obsmażamy kawałki mięsa ze wszystkich stron na brązowy kolor (około 4 minuty na każdą stronę), aby zamknąć pory. Obsmażone mięso odkładamy na talerz\n4. Zmniejszamy moc palnika do średniej. Na tym samym tłuszczu (jeśli jest go mało, dodajemy odrobinę oliwy) podsmażamy pokrojoną cebulę przez około 7-10 minut, aż zmięknie i zacznie się karmelizować.\n5. Dodajemy do cebuli czosnek i wszystkie przyprawy (papryka, kumin, pieprz). Smażymy przez 1 minutę, aż przyprawy uwolnią swój aromat.\n6. Wkładamy z powrotem obsmażone mięso. Wlewamy bulion, ocet jabłkowy i sos sojowy. Płyn powinien zakrywać mięso przynajmniej do połowy wysokości (w razie potrzeby dolewamy wody). Doprowadzamy do wrzenia na dużej mocy palnika.\n7. Zmniejszamy moc palnika do bardzo małej, przykrywamy garnek pokrywką i dusimy przez 3 do 4 godzin. Mięso jest gotowe, gdy jest tak miękkie, że łatwo rozpada się pod widelcem. Dusimy pod przykryciem.\n8. Wyjmujemy mięso z garnka i przekładamy na deskę. Sos, który pozostał w garnku, redukujemy na średniej mocy palnika bez przykrycia, aż zgęstnieje i nabierze intensywnego smaku (około 10 minut).\n9. Mięso szarpiemy na włókna za pomocą dwóch widelców. Poszarpane mięso wkładamy z powrotem do zredukowanego sosu i dokładnie mieszamy.\n10. Ryż gotujemy według instrukcji na opakowaniu.\n11. Salsa ananasowa: Ananasa, czerwoną cebulę i paprykę zieloną kroimy w drobną kostkę (o boku około 0,5 cm).\n12. Wszystkie pokrojone składniki przekładamy do miski. Dodajemy posiekaną kolendrę i wyciskamy sok z limonki.\n13. Delikatnie mieszamy. Salsa najlepiej smakuje przygotowana na świeżo i nie powinna zbyt długo leżakować, aby zachować świeżość składników.\n14. Wieprzowinę podajemy z ryżem i salsą. Całość posypujemy posiekaną kolendrą."
  },
  {
    name: "Burger z pieczonymi ziemniakami i surówką",
    calories: 590, protein: 42, fats: 22, carbs: 55,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z indyka", amount: "150g" },
      { item: "Cebula czerwona", amount: "80g" },
      { item: "Czosnek świeży", amount: "6g" },
      { item: "Przyprawa gyros", amount: "5g" },
      { item: "Oliwa", amount: "10g" },
      { item: "Ziemniaki", amount: "140g" },
      { item: "Miks sałat", amount: "50g" },
      { item: "Marchewka", amount: "80g" },
      { item: "Jogurt naturalny", amount: "40g" },
      { item: "Majonez light", amount: "20g" }
    ],
    recipe: "1. Piekarnik rozgrzewamy do 200°C (góra-dół) lub 180°C termoobieg.\n2. Ziemniaki obieramy i kroimy w słupki o grubości około 1 cm. Układamy je równomiernie na blasze wyłożonej papierem do pieczenia, skrapiamy oliwą (połowa), posypujemy solą, pieprzem, papryką i tymiankiem według własnego uznania. Pieczemy przez około 25–30 minut.\n3. Cebulę kroimy w drobną kostkę, czosnek siekamy bardzo drobno. Mięso mielone przekładamy do miski, dodajemy cebulę, czosnek i przyprawę gyros. Formujemy burgera.\n4. Na patelni rozgrzewamy resztę oliwy. Smażymy burgera przez około 4–5 minut z dwóch stron.\n5. Marchewkę ścieramy na tarce. Miks sałat dokładnie płuczemy.\n6. W miseczce łączymy jogurt naturalny i majonez, dodajemy czosnek, sól i pieprz. Mieszamy z sałatą i marchewką.\n7. Na talerzu układamy burgera, obok kładziemy pieczone ziemniaki i surówkę."
  },
  {
    name: "Duszona wołowina z warzywami i kaszą",
    calories: 640, protein: 52, fats: 18, carbs: 68,
    type: "lunch",
    ingredients: [
      { item: "Polędwica wołowa", amount: "500g" },
      { item: "Cebula", amount: "160g" },
      { item: "Marchew", amount: "240g" },
      { item: "Olej", amount: "20g" },
      { item: "Bulion warzywny", amount: "750g" },
      { item: "Koncentrat pomidorowy", amount: "25g" },
      { item: "Kasza", amount: "100g" },
      { item: "Natka pietruszki", amount: "20g" }
    ],
    recipe: "1. Kaszę gotujemy według instrukcji na opakowaniu.\n2. Mięso kroimy w kostkę 3-4 cm. Przyprawiamy solą i pieprzem.\n3. Cebulę i marchew kroimy w kostkę.\n4. W garnku rozgrzewamy olej, obsmażamy wołowinę na brązowo. Przekładamy na talerz.\n5. W tym samym garnku podsmażamy cebulę przez 5 minut.\n6. Dodajemy marchew, paprykę, ziele angielskie i liście laurowe. Smażymy 3 minuty.\n7. Wkładamy mięso, dodajemy koncentrat. Zalewamy bulionem.\n8. Dusimy pod przykryciem 15-30 minut, aż mięso będzie bardzo miękkie.\n9. Podajemy na kaszy, posypane natką."
  },
  {
    name: "Gulasz węgierski z dynią",
    calories: 510, protein: 38, fats: 14, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Polędwica wołowa", amount: "300g" },
      { item: "Cebula", amount: "80g" },
      { item: "Marchewka", amount: "120g" },
      { item: "Papryka czerwona", amount: "85g" },
      { item: "Dynia", amount: "200g" },
      { item: "Koncentrat pomidorowy", amount: "25g" },
      { item: "Bulion warzywny", amount: "500g" },
      { item: "Oliwa", amount: "10g" },
      { item: "Chleb żytni razowy", amount: "120g" }
    ],
    recipe: "1. Kroimy wołowinę w kostkę 2 cm, cebulę w kostkę, marchew w plastry, paprykę w kostkę.\n2. Dynię obieramy i kroimy w kostkę 2 cm.\n3. Na dużej oliwie w garnku obsmażamy wołowinę 2-3 minuty. Odkładamy.\n4. Smażymy cebulę i czosnek. Dodajemy marchew i paprykę, smażymy 4-5 minut.\n5. Wkładamy mięso, dodajemy koncentrat i przyprawy.\n6. Wlewamy bulion. Dusimy 20-25 minut.\n7. Dodajemy dynię i dusimy jeszcze 10-15 minut.\n8. Podajemy z pieczywem."
  },
  {
    name: "Gulasz wołowy z pieczarkami",
    calories: 550, protein: 44, fats: 16, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Polędwica wołowa", amount: "400g" },
      { item: "Pieczarki", amount: "160g" },
      { item: "Cebula", amount: "80g" },
      { item: "Mąka pszenna", amount: "24g" },
      { item: "Koncentrat pomidorowy", amount: "30g" },
      { item: "Olej", amount: "20g" },
      { item: "Kasza pęczak", amount: "100g" },
      { item: "Marchew", amount: "160g" }
    ],
    recipe: "1. Mięso kroimy w kostkę i obtaczamy w mące.\n2. Obsmażamy wołowinę na połowie oleju na złoto. Odkładamy.\n3. Smażymy cebulę i czosnek w tym samym garnku.\n4. Dodajemy mięso, przyprawy i koncentrat. Smażymy 2 minuty.\n5. Wlewamy bulion. Dusimy pod przykryciem 30-40 minut.\n6. Pieczarki podsmażamy osobno na reszcie oleju i dodajemy do gulaszu.\n7. Marchew gotujemy w całości do miękkości.\n8. Kaszę gotujemy wg instrukcji. Podajemy gulasz z kaszą i marchwią."
  },
  {
    name: "Jednogarnkowe pęczotto z mieloną wieprzowiną i burakiem",
    calories: 620, protein: 34, fats: 28, carbs: 64,
    type: "lunch",
    ingredients: [
      { item: "Kasza jęczmienna pęczak", amount: "150g" },
      { item: "Buraki ugotowane", amount: "300g" },
      { item: "Bulion warzywny", amount: "700g" },
      { item: "Oliwa z oliwek", amount: "20g" },
      { item: "Cebula", amount: "40g" },
      { item: "Mielone mięso wieprzowe", amount: "250g" },
      { item: "Pestki dyni", amount: "20g" }
    ],
    recipe: "1. Połowę buraków kroimy w kostkę, połowę blendujemy na puree.\n2. Cebulę i czosnek smażymy na oliwie przez 5-7 minut.\n3. Wsypujemy suchą kaszę, smażymy 2 minuty.\n4. Stopniowo dolewamy bulion (po 1/4), mieszając, aż kasza wchłonie płyn.\n5. Dodajemy puree z buraków i resztę bulionu. Gotujemy 20-25 minut.\n6. Na osobnej patelni smażymy mięso mielone przez 8-10 minut na oliwie.\n7. Pęczotto nakładamy na talerz, na wierzch kładziemy kawałki buraka i usmażone mięso. Posypujemy pestkami dyni."
  },
  {
    name: "Kaczka z sosem pomarańczowym, ryżem i kapustą",
    calories: 720, protein: 48, fats: 34, carbs: 56,
    type: "lunch",
    ingredients: [
      { item: "Ryż", amount: "100g" },
      { item: "Pierś kaczki", amount: "400g" },
      { item: "Olej rzepakowy", amount: "20g" },
      { item: "Pomarańcza", amount: "480g" },
      { item: "Miód", amount: "24g" },
      { item: "Rodzynki", amount: "15g" },
      { item: "Czerwona kapusta", amount: "200g" },
      { item: "Sok pomarańczowy", amount: "100g" }
    ],
    recipe: "1. Ryż gotujemy wg instrukcji.\n2. Skórę kaczki nacinamy. Smażymy 4 min od strony skóry i 1 min od mięsa. Pieczemy 15-18 min w 200st.\n3. Sos: Na patelnię po kaczce dodajemy sok i skórkę z pomarańczy, rodzynki, miód i przyprawy korzenne. Redukujemy.\n4. Kapustę podsmażamy na oleju z sokiem pomarańczowym i cynamonem do miękkości.\n5. Kaczkę kroimy w plastry, polewamy sosem. Podajemy z ryżem i kapustą."
  },
  {
    name: "Karmelizowany kurczak w bulionie z ryżem",
    calories: 580, protein: 36, fats: 18, carbs: 68,
    type: "lunch",
    ingredients: [
      { item: "Udka z kurczaka (bez skóry i kości)", amount: "300g" },
      { item: "Ryż jaśminowy", amount: "150g" },
      { item: "Sos sojowy", amount: "40g" },
      { item: "Cukier", amount: "20g" },
      { item: "Bulion", amount: "200g" },
      { item: "Oliwa z oliwek", amount: "10g" }
    ],
    recipe: "1. Ryż gotujemy wg instrukcji.\n2. Marynata: mieszamy sos sojowy, cukier, imbir i czosnek.\n3. Kurczaka smażymy na oliwie 3 minuty z każdej strony.\n4. Wlewamy marynatę i bulion. Dusimy 10-12 minut pod przykryciem, aż sos zgęstnieje i oblepi mięso.\n5. Podajemy z ryżem i szczypiorkiem."
  },
  {
    name: "Komosa z sosem wołowym z dynią",
    calories: 490, protein: 32, fats: 15, carbs: 54,
    type: "lunch",
    ingredients: [
      { item: "Komosa ryżowa", amount: "50g" },
      { item: "Polędwica wołowa", amount: "150g" },
      { item: "Dynia", amount: "150g" },
      { item: "Cebula", amount: "80g" },
      { item: "Passata pomidorowa", amount: "150g" },
      { item: "Oliwa", amount: "10g" }
    ],
    recipe: "1. Komosę gotujemy wg instrukcji.\n2. Cebulę smażymy na oliwie. Dodajemy mięso i smażymy 4-5 minut.\n3. Dodajemy dynię i smażymy 3 minuty.\n4. Wlewamy passatę i bulion. Dusimy 10-12 minut, aż dynia zmięknie.\n5. Podajemy z komosą i natką."
  },
  {
    name: "Kotleciki siekane z sałatką i ziemniakami",
    calories: 610, protein: 48, fats: 22, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Pierś kurczaka", amount: "500g" },
      { item: "Marchewka", amount: "80g" },
      { item: "Kukurydza", amount: "60g" },
      { item: "Papryka czerwona", amount: "85g" },
      { item: "Jaja kurze", amount: "112g" },
      { item: "Mozzarella", amount: "60g" },
      { item: "Ziemniaki", amount: "560g" },
      { item: "Miks sałat", amount: "100g" }
    ],
    recipe: "1. Ziemniaki gotujemy 10 min, potem pieczemy z rozmarynem i oliwą 20-30 min w 190st.\n2. Mięso kroimy w kostkę. Mieszamy ze startą marchwią, papryką, kukurydzą, mąką, jajkami i serem.\n3. Formujemy kotleciki i pieczemy na blaszce 25 minut.\n4. Robimy sałatkę z miksu sałat, pomidorków, ogórka i cebuli z oliwą.\n5. Podajemy wszystko razem."
  },
  {
    name: "Makaron z oczami (Halloween Fit)",
    calories: 420, protein: 28, fats: 14, carbs: 46,
    type: "lunch",
    ingredients: [
      { item: "Makaron spaghetti", amount: "70g" },
      { item: "Passata pomidorowa", amount: "250g" },
      { item: "Mięso mielone z indyka", amount: "100g" },
      { item: "Mozzarella mini", amount: "35g" },
      { item: "Oliwki czarne", amount: "15g" },
      { item: "Oliwa", amount: "5g" }
    ],
    recipe: "1. Gotujemy makaron. Cebulę i czosnek smażymy na oliwie.\n2. Dodajemy mięso, smażymy 5-6 minut.\n3. Wlewamy passatę, dusimy 5 minut.\n4. Mieszamy makaron z sosem.\n5. Na wierzchu kładziemy kulki mozzarelli z plastrem oliwki w środku (jako oczy)."
  },
  {
    name: "Mini pizze pełnoziarniste",
    calories: 580, protein: 32, fats: 18, carbs: 72,
    type: "lunch",
    ingredients: [
      { item: "Mąka pszenna pełnoziarnista", amount: "300g" },
      { item: "Drożdże świeże", amount: "15g" },
      { item: "Oliwa z oliwek", amount: "25g" },
      { item: "Pomidory z puszki", amount: "400g" },
      { item: "Pierś kurczaka", amount: "50g" },
      { item: "Pieczarki", amount: "100g" },
      { item: "Szpinak", amount: "50g" }
    ],
    recipe: "1. Robimy zaczyn z drożdży, wody i cukru. Wyrabiamy ciasto z mąką, odstawiamy na 30 min.\n2. Kurczaka podsmażamy. Sos: gotujemy pomidory z czosnkiem i bazylią 7 min.\n3. Ciasto dzielimy na 4, wałkujemy krążki 15cm.\n4. Smarujemy sosem, układamy dodatki.\n5. Pieczemy 6-8 minut w 220st."
  },
  {
    name: "Naleśniki z hummusem i kurczakiem",
    calories: 650, protein: 42, fats: 24, carbs: 68,
    type: "lunch",
    ingredients: [
      { item: "Hummus", amount: "100g" },
      { item: "Pierś kurczaka", amount: "200g" },
      { item: "Papryka czerwona", amount: "170g" },
      { item: "Ogórek", amount: "150g" },
      { item: "Pomidory", amount: "320g" },
      { item: "Mąka pełnoziarnista", amount: "150g" },
      { item: "Mleko 1.5%", amount: "200g" },
      { item: "Jaja kurze", amount: "112g" }
    ],
    recipe: "1. Ciasto: miksujemy mąkę, jaja, mleko, wodę. Smażymy naleśniki.\n2. Kurczaka w paskach przyprawiamy kuminem i papryką, grillujemy 7 min.\n3. Warzywa kroimy w drobną kostkę (salsa).\n4. Naleśniki smarujemy hummusem, kładziemy salsę i kurczaka. Zawijamy."
  },
  {
    name: "Fit bigos ze schabem i chlebem razowym",
    calories: 540, protein: 38, fats: 16, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Schab wieprzowy", amount: "125g" },
      { item: "Frankfurterki", amount: "170g" },
      { item: "Kapusta kiszona", amount: "700g" },
      { item: "Pieczarki", amount: "160g" },
      { item: "Chleb żytni razowy", amount: "120g" },
      { item: "Olej", amount: "10g" }
    ],
    recipe: "1. Schab i cebulę smażymy na oleju. Zalewamy wodą, dodajemy przyprawy, gotujemy do miękkości.\n2. Dodajemy kapustę kiszoną (odciśniętą). Dusimy.\n3. Frankfurterki i pieczarki smażymy osobno, dodajemy do kapusty.\n4. Podajemy z pieczywem."
  },
  {
    name: "Owsianka a’la Snickers",
    calories: 520, protein: 18, fats: 20, carbs: 72,
    type: "lunch",
    ingredients: [
      { item: "Płatki owsiane", amount: "100g" },
      { item: "Mleko 1.5%", amount: "400g" },
      { item: "Czekolada gorzka", amount: "12g" },
      { item: "Masło orzechowe", amount: "20g" },
      { item: "Banan", amount: "120g" },
      { item: "Orzechy prażone", amount: "15g" }
    ],
    recipe: "1. Gotujemy płatki z mlekiem.\n2. Dodajemy czekoladę i masło orzechowe, mieszamy.\n3. Przekładamy do miski, dekorujemy bananem i orzechami."
  },
  {
    name: "Pinsa z burratą i szynką Serrano",
    calories: 680, protein: 32, fats: 34, carbs: 64,
    type: "lunch",
    ingredients: [
      { item: "Pinsa", amount: "220g" },
      { item: "Sos pomidorowy", amount: "200g" },
      { item: "Mozzarella", amount: "120g" },
      { item: "Szynka dojrzewająca Serrano", amount: "100g" },
      { item: "Burrata", amount: "120g" }
    ],
    recipe: "1. Pinsę smarujemy sosem, nakładamy mozzarellę i cebulę.\n2. Pieczemy 10-12 min w 220st.\n3. Na gorącą pinsę kładziemy plastry szynki i kawałki burraty."
  },
  {
    name: "Polędwica wołowa z sosem balsamicznym i puree",
    calories: 460, protein: 34, fats: 16, carbs: 48,
    type: "lunch",
    ingredients: [
      { item: "Polędwica wołowa", amount: "150g" },
      { item: "Ziemniaki", amount: "210g" },
      { item: "Masło", amount: "10g" },
      { item: "Brokuł", amount: "150g" },
      { item: "Ocet balsamiczny", amount: "30g" },
      { item: "Miód", amount: "12g" }
    ],
    recipe: "1. Robimy puree z ziemniaków, masła i mleka.\n2. Brokuł gotujemy 6-7 min.\n3. Wołowinę smażymy 2-3 min z każdej strony. Odstawiamy na 5 min.\n4. Na patelnię wlewamy ocet i miód, redukujemy do syropu.\n5. Mięso polewamy sosem, podajemy z puree i brokułem."
  },
  {
    name: "Ryż z mieszanką meksykańską i mięsem mielonym",
    calories: 520, protein: 32, fats: 14, carbs: 68,
    type: "lunch",
    ingredients: [
      { item: "Ryż jaśminowy", amount: "100g" },
      { item: "Mięso mielone", amount: "200g" },
      { item: "Mieszanka meksykańska", amount: "200g" },
      { item: "Pomidory z puszki", amount: "200g" },
      { item: "Oliwa z oliwek", amount: "5g" }
    ],
    recipe: "1. Smażymy mięso mielone na oliwie do brązowości.\n2. Dodajemy cebulę, czosnek i przyprawy meksykańskie.\n3. Wsypujemy suchy ryż, smażymy 2 minuty.\n4. Dodajemy pomidory i bulion. Gotujemy 10 min.\n5. Dodajemy mrożone warzywa, gotujemy jeszcze 5-7 min.\n6. Odstawiamy na 5 min przed podaniem."
  },
  {
    name: "Sałatka z batatem i indykiem",
    calories: 580, protein: 34, fats: 22, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Batat", amount: "400g" },
      { item: "Pierś indyka", amount: "150g" },
      { item: "Miks sałat", amount: "100g" },
      { item: "Migdały", amount: "30g" },
      { item: "Syrop klonowy", amount: "15g" },
      { item: "Musztarda", amount: "15g" },
      { item: "Oliwa", amount: "40g" }
    ],
    recipe: "1. Bataty pieczemy w kostce 20-25 min w 200st z oliwą.\n2. Indyka w kostce smażymy 5-7 min.\n3. Robimy sos: musztarda, syrop klonowy, ocet, oliwa.\n4. Mieszamy sałaty, warzywa, ostudzone bataty i indyka. Posypujemy migdałami."
  },
  {
    name: "Schab pieczony z morelami i jabłkiem",
    calories: 610, protein: 42, fats: 18, carbs: 70,
    type: "lunch",
    ingredients: [
      { item: "Schab wieprzowy", amount: "360g" },
      { item: "Morele suszone", amount: "42g" },
      { item: "Jabłko", amount: "150g" },
      { item: "Kopytka", amount: "250g" },
      { item: "Marchewka", amount: "160g" },
      { item: "Musztarda", amount: "25g" }
    ],
    recipe: "1. Schab smarujemy musztardą i majerankiem. Pieczemy 30 min pod przykryciem w 180st.\n2. Dodajemy pokrojone morele i jabłka. Pieczemy kolejne 30 min bez przykrycia.\n3. Marchew pieczemy obok mięsa.\n4. Podajemy z kopytkami."
  },
  {
    name: "Tost z awokado i mozzarellą",
    calories: 450, protein: 18, fats: 24, carbs: 42,
    type: "lunch",
    ingredients: [
      { item: "Chleb żytni", amount: "60g" },
      { item: "Mozzarella", amount: "60g" },
      { item: "Awokado", amount: "70g" },
      { item: "Pomidor", amount: "80g" }
    ],
    recipe: "1. Na kromce układamy mozzarellę, pomidora i awokado. Przykrywamy drugą kromką.\n2. Smażymy na suchej patelni pod przykryciem 3 min.\n3. Obracamy i smażymy 3 min bez przykrycia."
  },
  {
    name: "Wołowina po burgundzku z puree",
    calories: 620, protein: 40, fats: 24, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Polędwica wołowa", amount: "150g" },
      { item: "Boczek parzony", amount: "30g" },
      { item: "Ziemniaki", amount: "210g" },
      { item: "Wino czerwone wytrawne", amount: "75g" },
      { item: "Pieczarki", amount: "100g" },
      { item: "Masło", amount: "5g" }
    ],
    recipe: "1. Robimy puree ziemniaczane.\n2. Smażymy boczek i cebulę. Dodajemy wołowinę w kostce, smażymy 4-5 min.\n3. Dodajemy marchew i pieczarki. Wlewamy wino, odparowujemy.\n4. Wlewamy bulion i dusimy 15 min.\n5. Podajemy gulasz na puree, posypany natką."
  },
  {
    name: "Zupa meksykańska z dynią i nachosami",
    calories: 540, protein: 28, fats: 22, carbs: 56,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z indyka", amount: "150g" },
      { item: "Dynia", amount: "200g" },
      { item: "Fasola czerwona", amount: "120g" },
      { item: "Kukurydza", amount: "120g" },
      { item: "Nachosy naturalne", amount: "60g" },
      { item: "Bulion warzywny", amount: "500g" }
    ],
    recipe: "1. Smażymy cebulę i czosnek. Dodajemy dynię i paprykę, smażymy 3 min.\n2. Zalewamy bulionem, gotujemy 12 min. Blendujemy na krem.\n3. Osobno smażymy mięso mielone beztłuszczowo.\n4. Do kremu dodajemy mięso, fasolę i kukurydzę. Gotujemy 10 min.\n5. Podajemy z nachosami i kolendrą."
  },
  {
    name: "Zupa z pierożkami gyoza",
    calories: 480, protein: 22, fats: 14, carbs: 68,
    type: "lunch",
    ingredients: [
      { item: "Makaron ryżowy", amount: "100g" },
      { item: "Pierożki gyoza z kurczakiem", amount: "230g" },
      { item: "Kapusta pak choi", amount: "100g" },
      { item: "Bulion warzywny", amount: "500g" },
      { item: "Olej sezamowy", amount: "5g" }
    ],
    recipe: "1. Gotujemy makaron.\n2. Do wrzącego bulionu dodajemy imbir, sos sojowy i olej sezamowy.\n3. Wrzucamy pierożki gyoza, gotujemy 5-7 min.\n4. Pod koniec dodajemy pak choi na 2 minuty.\n5. Podajemy pierożki z makaronem zalane bulionem."
  },
  {
    name: "Butter chicken z ryżem jaśminowym",
    calories: 680, protein: 42, fats: 28, carbs: 65,
    type: "lunch",
    ingredients: [
      { item: "Pierś kurczaka", amount: "300g" },
      { item: "Jogurt naturalny", amount: "100g" },
      { item: "Passata pomidorowa", amount: "200g" },
      { item: "Śmietanka 12%", amount: "108g" },
      { item: "Ryż jaśminowy", amount: "60g" },
      { item: "Masło", amount: "30g" },
      { item: "Przyprawa Garam Masala", amount: "5g" }
    ],
    recipe: "1. Kurczaka marynujemy w jogurcie i przyprawach (min. 1h).\n2. Smażymy cebulę na maśle. Dodajemy passatę i garam masalę. Dusimy 10 min.\n3. Osobno smażymy kurczaka. Dodajemy go do sosu.\n4. Wlewamy śmietankę i dodajemy resztę masła. Gotujemy 5 min.\n5. Podajemy z ryżem."
  },
  {
    name: "Curry warzywne z ziemniakami i kurczakiem",
    calories: 610, protein: 44, fats: 26, carbs: 54,
    type: "lunch",
    ingredients: [
      { item: "Pierś kurczaka", amount: "400g" },
      { item: "Ziemniaki", amount: "490g" },
      { item: "Mleczko kokosowe", amount: "400g" },
      { item: "Pomidory z puszki", amount: "400g" },
      { item: "Szpinak", amount: "100g" },
      { item: "Groszek mrożony", amount: "100g" },
      { item: "Pasta curry", amount: "20g" }
    ],
    recipe: "1. Kurczaka smażymy na złoto, odkładamy.\n2. Smażymy cebulę, czosnek, imbir i pastę curry.\n3. Dodajemy ziemniaki i fasolkę. Zalewamy pomidorami i mleczkiem.\n4. Gotujemy 20 min do miękkości ziemniaków.\n5. Dodajemy mięso, groszek i szpinak. Gotujemy 3-5 min.\n6. Podajemy z kolendrą."
  },
  {
    name: "Grochówka z mięsem drobiowym",
    calories: 550, protein: 42, fats: 12, carbs: 72,
    type: "lunch",
    ingredients: [
      { item: "Groch", amount: "200g" },
      { item: "Pierś kurczaka", amount: "400g" },
      { item: "Ziemniaki", amount: "280g" },
      { item: "Włoszczyzna", amount: "300g" },
      { item: "Olej rzepakowy", amount: "10g" }
    ],
    recipe: "1. Groch gotujemy 45 min do miękkości.\n2. Osobno smażymy cebulę i warzywa w kostce przez 5 min.\n3. Dodajemy kurczaka i przyprawy. Smażymy kolejne 5 min.\n4. Łączymy warzywa z ugotowanym grochem. Zalewamy wodą, gotujemy 20 min.\n5. Doprawiamy majerankiem."
  },
  {
    name: "Kremowa polenta z sosem pieczarkowym i kurczakiem",
    calories: 490, protein: 32, fats: 14, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Kasza kukurydziana", amount: "60g" },
      { item: "Pierś kurczaka", amount: "150g" },
      { item: "Pieczarki", amount: "150g" },
      { item: "Bulion warzywny", amount: "125g" },
      { item: "Oliwa", amount: "5g" }
    ],
    recipe: "1. Gotujemy polentę (kaszę kukurydzianą).\n2. Kurczaka w paskach smażymy 5-6 min na oliwie. Odkładamy.\n3. Smażymy pieczarki 7 min. Wlewamy bulion, gotujemy 3 min do zgęstnienia.\n4. Łączymy mięso z sosem.\n5. Wykładamy na polentę, posypujemy natką."
  },
  {
    name: "Kurczak Kung Pao z orzechami nerkowca",
    calories: 590, protein: 38, fats: 24, carbs: 56,
    type: "lunch",
    ingredients: [
      { item: "Ryż basmati", amount: "80g" },
      { item: "Pierś kurczaka", amount: "175g" },
      { item: "Orzechy nerkowca", amount: "20g" },
      { item: "Papryka czerwona", amount: "85g" },
      { item: "Cukinia", amount: "100g" },
      { item: "Olej sezamowy", amount: "10g" },
      { item: "Skrobia ziemniaczana", amount: "15g" }
    ],
    recipe: "1. Kurczaka marynujemy w sosie sojowym 10 min.\n2. Sos: mieszamy sos sojowy, ocet ryżowy, olej sezamowy, imbir, czosnek, chilli i skrobię z wodą.\n3. Smażymy kurczaka na dużym ogniu, odkładamy.\n4. Smażymy paprykę i cukinię 2 min. Dodajemy orzechy.\n5. Wkładamy mięso, wlewamy sos. Smażymy 2 min do zgęstnienia.\n6. Podajemy z ryżem."
  },
  {
    name: "Kurczak na parze z dynią i ryżem",
    calories: 460, protein: 34, fats: 8, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Ryż biały", amount: "80g" },
      { item: "Pierś kurczaka", amount: "200g" },
      { item: "Dynia", amount: "150g" },
      { item: "Masło", amount: "5g" }
    ],
    recipe: "1. Kurczaka gotujemy na parze 15-20 min z ziołami.\n2. Dynię gotujemy w małej ilości wody 10-15 min, blendujemy na puree z masłem.\n3. Ryż gotujemy wg instrukcji.\n4. Podajemy z natką pietruszki."
  },
  {
    name: "Kurczak z puree z kalafiora i ziemniaków",
    calories: 430, protein: 34, fats: 14, carbs: 42,
    type: "lunch",
    ingredients: [
      { item: "Pierś kurczaka", amount: "150g" },
      { item: "Kalafior", amount: "200g" },
      { item: "Ziemniaki", amount: "140g" },
      { item: "Masło", amount: "10g" },
      { item: "Jogurt naturalny", amount: "20g" }
    ],
    recipe: "1. Kurczaka gotujemy na parze 15-20 min w ziołach.\n2. Ziemniaki i kalafior gotujemy razem 15 min do miękkości.\n3. Odcedzamy, blendujemy z masłem, jogurtem i gałką muszkatołową.\n4. Kurczaka kroimy, podajemy na puree z natką."
  },
  {
    name: "Makaron z kurczakiem w sosie śmietanowo-ziołowym",
    calories: 580, protein: 42, fats: 18, carbs: 64,
    type: "lunch",
    ingredients: [
      { item: "Makaron pełnoziarnisty", amount: "150g" },
      { item: "Pierś kurczaka", amount: "150g" },
      { item: "Cukinia", amount: "200g" },
      { item: "Śmietanka 12%", amount: "144g" },
      { item: "Oliwa", amount: "10g" }
    ],
    recipe: "1. Gotujemy makaron al dente.\n2. Kurczaka smażymy na oliwie na złoto.\n3. Dodajemy cebulę i cukinię w półplasterkach. Smażymy 5 min.\n4. Wlewamy śmietankę, przyprawiamy ziołami. Gotujemy 3 min do zgęstnienia.\n5. Mieszamy makaron z sosem, posypujemy natką."
  },
  {
    name: "Makaron z kurczakiem i kurkami",
    calories: 520, protein: 38, fats: 16, carbs: 54,
    type: "lunch",
    ingredients: [
      { item: "Makaron pełnoziarnisty", amount: "50g" },
      { item: "Pierś kurczaka", amount: "150g" },
      { item: "Kurki", amount: "100g" },
      { item: "Śmietana 18%", amount: "75g" },
      { item: "Mąka pszenna", amount: "6g" }
    ],
    recipe: "1. Gotujemy makaron. Kurki czyścimy.\n2. Mięso smażymy na oliwie 5 min. Dodajemy kurki, smażymy kolejne 6 min.\n3. Wlewamy śmietanę z mąką (rozrobioną w wodzie). Gotujemy 3 min.\n4. Mieszamy z makaronem, podajemy z natką."
  },
  {
    name: "Pieczone udka z kurczaka i młoda kapusta",
    calories: 630, protein: 44, fats: 32, carbs: 42,
    type: "lunch",
    ingredients: [
      { item: "Udka z kurczaka bez skóry", amount: "320g" },
      { item: "Ziemniaki", amount: "490g" },
      { item: "Młoda kapusta", amount: "500g" },
      { item: "Oliwa z oliwek", amount: "20g" },
      { item: "Koperek", amount: "4g" }
    ],
    recipe: "1. Udka marynujemy w oliwie i papryce. Pieczemy 45 min w 200st.\n2. Ziemniaki gotujemy 20 min.\n3. Kapustę szatkujemy, dusimy z cebulą i wodą 20 min. Dodajemy koperek.\n4. Podajemy udka z ziemniakami i kapustą."
  },
  {
    name: "Pierś kurczaka z ryżem i mrożonką meksykańską",
    calories: 480, protein: 32, fats: 10, carbs: 64,
    type: "lunch",
    ingredients: [
      { item: "Pierś kurczaka", amount: "150g" },
      { item: "Ryż basmati", amount: "70g" },
      { item: "Mieszanka meksykańska", amount: "200g" },
      { item: "Passata pomidorowa", amount: "150g" },
      { item: "Oliwa", amount: "5g" }
    ],
    recipe: "1. Gotujemy ryż. Kurczaka smażymy z cebulą na oliwie.\n2. Dodajemy mrożone warzywa, smażymy 6 min.\n3. Wlewamy passatę i przyprawy (oregano, chilli). Dusimy 6 min.\n4. Podajemy z ryżem i natką."
  },
  {
    name: "Potrawka z mielonym indykiem i batatami",
    calories: 520, protein: 30, fats: 18, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z indyka", amount: "150g" },
      { item: "Batat", amount: "200g" },
      { item: "Cukinia", amount: "100g" },
      { item: "Passata pomidorowa", amount: "375g" },
      { item: "Oliwa", amount: "10g" }
    ],
    recipe: "1. Mięso smażymy na sucho 7 min do sypkości.\n2. Dodajemy batata w kostce, smażymy 5 min.\n3. Dodajemy cukinię, smażymy 4 min.\n4. Wlewamy passatę. Dusimy pod przykryciem 20 min do miękkości batata.\n5. Na koniec dodajemy oliwę i zioła prowansalskie."
  },
  {
    name: "Risotto z kurkami i parmezanem",
    calories: 560, protein: 38, fats: 22, carbs: 54,
    type: "lunch",
    ingredients: [
      { item: "Ryż arborio", amount: "60g" },
      { item: "Pierś kurczaka", amount: "150g" },
      { item: "Kurki", amount: "100g" },
      { item: "Parmezan", amount: "20g" },
      { item: "Bulion warzywny", amount: "500g" },
      { item: "Oliwa", amount: "10g" }
    ],
    recipe: "1. Kurczaka smażymy na oliwie, odkładamy. Kurki smażymy 5 min, odkładamy.\n2. Ryż szklimy na patelni 2 min. Stopniowo dolewamy gorący bulion, mieszając.\n3. Po 20 min, gdy ryż będzie kremowy, dodajemy ser.\n4. Na wierzch kładziemy mięso i kurki."
  },
  {
    name: "Sałatka z kaszy jaglanej z kurczakiem na parze",
    calories: 470, protein: 34, fats: 12, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Kasza jaglana", amount: "70g" },
      { item: "Pierś kurczaka", amount: "125g" },
      { item: "Papryka czerwona", amount: "85g" },
      { item: "Ogórek świeży", amount: "150g" },
      { item: "Jogurt naturalny", amount: "80g" }
    ],
    recipe: "1. Kaszę gotujemy i studzimy.\n2. Kurczaka gotujemy na parze 20 min, kroimy w kostkę.\n3. Warzywa kroimy w kostkę. Mieszamy z kaszą i kurczakiem.\n4. Dodajemy sos z jogurtu i majonezu. Przyprawiamy."
  },
  {
    name: "Schab w sosie paprykowym z ryżem",
    calories: 620, protein: 44, fats: 18, carbs: 72,
    type: "lunch",
    ingredients: [
      { item: "Ryż basmati", amount: "100g" },
      { item: "Schab wieprzowy", amount: "300g" },
      { item: "Papryka czerwona", amount: "170g" },
      { item: "Cukinia", amount: "200g" },
      { item: "Pomidory z puszki", amount: "200g" }
    ],
    recipe: "1. Paprykę pieczemy 20 min w 200st, obieramy ze skórki i blendujemy z pomidorami.\n2. Mięso w kostce smażymy na oliwie na złoto. Dodajemy cukinię.\n3. Wlewamy sos paprykowy. Dusimy pod przykryciem 20 min.\n4. Podajemy z ugotowanym ryżem."
  },
  {
    name: "Soczysta pierś z kurczaka z fasolką szparagową",
    calories: 410, protein: 34, fats: 14, carbs: 38,
    type: "lunch",
    ingredients: [
      { item: "Ziemniaki", amount: "210g" },
      { item: "Fasolka szparagowa", amount: "200g" },
      { item: "Pierś kurczaka", amount: "150g" },
      { item: "Bułka tarta", amount: "15g" },
      { item: "Masło", amount: "10g" }
    ],
    recipe: "1. Gotujemy ziemniaki i fasolkę (fasolkę dodajemy w połowie gotowania).\n2. Kurczaka smażymy na złoto 7 min z każdej strony.\n3. Robimy zasmażkę: prażymy bułkę tartą na maśle.\n4. Fasolkę polewamy zasmażką. Podajemy z mięsem i koperkiem."
  },
  {
    name: "Potrawka z młodej kapusty a’la bigos",
    calories: 490, protein: 32, fats: 18, carbs: 54,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z kurczaka", amount: "200g" },
      { item: "Młoda kapusta", amount: "700g" },
      { item: "Koncentrat pomidorowy", amount: "50g" },
      { item: "Chleb żytni razowy", amount: "120g" },
      { item: "Olej", amount: "20g" }
    ],
    recipe: "1. Kapustę szatkujemy. Cebulę smażymy na oleju.\n2. Dodajemy mięso mielone, smażymy 10 min.\n3. Dodajemy kapustę i wodę (do połowy). Dusimy 20 min.\n4. Dodajemy koncentrat i koperek. Gotujemy 5 min.\n5. Podajemy z chlebem żytnim."
  },
  {
    name: "Wołowa zupa gulaszowa",
    calories: 460, protein: 36, fats: 18, carbs: 42,
    type: "lunch",
    ingredients: [
      { item: "Polędwica wołowa", amount: "150g" },
      { item: "Marchewka", amount: "80g" },
      { item: "Seler naciowy", amount: "45g" },
      { item: "Ziemniaki", amount: "140g" },
      { item: "Koncentrat pomidorowy", amount: "25g" },
      { item: "Bulion warzywny", amount: "500g" }
    ],
    recipe: "1. Wołowinę w kostce gotujemy w bulionie 30 min.\n2. Dodajemy warzywa w kostce. Gotujemy kolejne 20 min.\n3. Dodajemy koncentrat, przyprawy. Gotujemy 10 min.\n4. Na koniec dodajemy oliwę i natkę pietruszki."
  },
  {
    name: "Wrapy z kurczakiem i sosem czosnkowym",
    calories: 480, protein: 36, fats: 14, carbs: 52,
    type: "lunch",
    ingredients: [
      { item: "Tortilla pełnoziarnista", amount: "60g" },
      { item: "Pierś kurczaka", amount: "150g" },
      { item: "Papryka czerwona", amount: "85g" },
      { item: "Szpinak", amount: "25g" },
      { item: "Jogurt naturalny", amount: "60g" },
      { item: "Czosnek", amount: "6g" }
    ],
    recipe: "1. Kurczaka w paskach smażymy na oliwie 6 min.\n2. Sos: jogurt + czosnek + koperek.\n3. Tortillę podgrzewamy. Nakładamy sos, szpinak, mięso i paprykę. Zawijamy."
  },
  {
    name: "Zupa krem z kukurydzy z kurczakiem",
    calories: 495, protein: 32, fats: 16, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Kukurydza konserwowa", amount: "240g" },
      { item: "Ziemniaki", amount: "210g" },
      { item: "Pierś kurczaka", amount: "200g" },
      { item: "Bulion", amount: "500g" },
      { item: "Oliwa", amount: "20g" }
    ],
    recipe: "1. Kurczaka w kostce smażymy na oliwie.\n2. Dodajemy ziemniaki i kukurydzę. Zalewamy bulionem.\n3. Gotujemy 15 min do miękkości ziemniaków.\n4. Część zupy bez mięsa blendujemy na krem i łączymy z resztą.\n5. Posypujemy szczypiorkiem."
  },
  {
    name: "Hot dogi w cieście francuskim (Fit)",
    calories: 680, protein: 34, fats: 42, carbs: 45,
    type: "lunch",
    ingredients: [
      { item: "Ciasto francuskie", amount: "275g" },
      { item: "Frankfurterki wieprzowe", amount: "336g" },
      { item: "Mozzarella", amount: "75g" },
      { item: "Sezam", amount: "15g" }
    ],
    recipe: "1. Ciasto smarujemy ketchupem i musztardą, posypujemy serem.\n2. Układamy frankfurterki, zawijamy w rulon.\n3. Kroimy na mniejsze kawałki. Smarujemy jajkiem, sypiemy sezamem.\n4. Pieczemy 15-20 min w 200st do złocistości."
  },
  {
    name: "Indyk z młodą botwinką i kaszą pęczak",
    calories: 540, protein: 42, fats: 14, carbs: 64,
    type: "lunch",
    ingredients: [
      { item: "Kasza pęczak", amount: "150g" },
      { item: "Botwina", amount: "300g" },
      { item: "Pierś indyka", amount: "300g" },
      { item: "Bulion", amount: "1000g" },
      { item: "Słonecznik (ziarna)", amount: "20g" }
    ],
    recipe: "1. Słonecznik prażymy.\n2. Botwinkę kroimy: buraczki w kostkę, łodygi i liście osobno.\n3. Smażymy cebulę i indyka w kostce 7 min. Dodajemy buraczki.\n4. Wsypujemy kaszę, smażymy 2 min. Dolewamy bulion po chochli (jak risotto).\n5. Gotujemy 30 min. Pod koniec dodajemy liście botwiny.\n6. Skrapiamy cytryną, sypiemy słonecznikiem."
  },
  {
    name: "Jednogarnkowe danie z indyka i warzyw",
    calories: 510, protein: 38, fats: 12, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Pierś indyka", amount: "500g" },
      { item: "Marchew", amount: "160g" },
      { item: "Młoda kapusta", amount: "200g" },
      { item: "Kasza jęczmienna", amount: "150g" },
      { item: "Groszek", amount: "100g" }
    ],
    recipe: "1. Cebulę smażymy w garnku. Dodajemy indyka w kostce, smażymy 8 min.\n2. Dodajemy marchew i kaszę. Zalewamy gorącym bulionem.\n3. Gotujemy pod przykryciem 25 min.\n4. Dodajemy kapustę i groszek. Gotujemy jeszcze 10 min.\n5. Podajemy z natką pietruszki."
  },
  {
    name: "Kasza jaglana z indykiem i pesto",
    calories: 490, protein: 34, fats: 20, carbs: 48,
    type: "lunch",
    ingredients: [
      { item: "Kasza jaglana", amount: "50g" },
      { item: "Pierś indyka", amount: "150g" },
      { item: "Bakłażan", amount: "200g" },
      { item: "Pesto pietruszkowe", amount: "40g" }
    ],
    recipe: "1. Kaszę gotujemy. Bakłażana pieczemy z indykiem w plastrach (25 min, 200st).\n2. Gorącą kaszę mieszamy z pesto.\n3. Podajemy indyka na kaszy z pieczonym bakłażanem."
  },
  {
    name: "Kasza jaglana z indykiem i puree z kalafiora",
    calories: 440, protein: 36, fats: 14, carbs: 44,
    type: "lunch",
    ingredients: [
      { item: "Kasza jaglana", amount: "60g" },
      { item: "Pierś indyka", amount: "200g" },
      { item: "Kalafior", amount: "200g" },
      { item: "Oliwa", amount: "10g" }
    ],
    recipe: "1. Indyka gotujemy na parze 20 min. Kaszę gotujemy wg instrukcji.\n2. Kalafiora gotujemy do miękkości (12 min). Blendujemy z oliwą i kurkumą.\n3. Podajemy plastry indyka z kaszą i puree."
  },
  {
    name: "Krem z marchewki i pietruszki z indykiem",
    calories: 390, protein: 28, fats: 12, carbs: 45,
    type: "lunch",
    ingredients: [
      { item: "Marchew", amount: "480g" },
      { item: "Pietruszka", amount: "300g" },
      { item: "Ziemniaki", amount: "210g" },
      { item: "Pierś indyka", amount: "200g" },
      { item: "Mleko", amount: "100g" }
    ],
    recipe: "1. Warzywa gotujemy w wodzie 20 min. Blendujemy na krem z mlekiem.\n2. Mięso gotujemy osobno 18 min, kroimy w plastry.\n3. Do kremu dodajemy oliwę. Podajemy z kawałkami indyka i natką."
  },
  {
    name: "Kurczak w sosie pomidorowym z grzankami",
    calories: 420, protein: 32, fats: 12, carbs: 48,
    type: "lunch",
    ingredients: [
      { item: "Pierś kurczaka", amount: "200g" },
      { item: "Passata pomidorowa", amount: "200g" },
      { item: "Chleb pszenny", amount: "60g" },
      { item: "Oliwa", amount: "5g" }
    ],
    recipe: "1. Mięso i warzywa (marchew, pietruszka) smażymy na sucho 8 min.\n2. Zalewamy passatą i bulionem. Dusimy pod przykryciem 20 min.\n3. Pieczywo opiekamy na grzanki.\n4. Podajemy kurczaka w sosie z chrupiącym chlebem."
  },
  {
    name: "Makaron ze szparagami i kurczakiem",
    calories: 540, protein: 38, fats: 22, carbs: 52,
    type: "lunch",
    ingredients: [
      { item: "Pierś kurczaka", amount: "200g" },
      { item: "Makaron pełnoziarnisty", amount: "175g" },
      { item: "Szparagi zielone", amount: "210g" },
      { item: "Zielone pesto", amount: "60g" }
    ],
    recipe: "1. Kurczaka smażymy 8 min. Gotujemy makaron.\n2. Szparagi gotujemy 3 min we wrzątku.\n3. Mieszamy makaron z pesto i wodą z gotowania.\n4. Dodajemy mięso i szparagi. Podgrzewamy chwilę razem."
  },
  {
    name: "Naleśniki z indykiem i pastą warzywną",
    calories: 510, protein: 32, fats: 18, carbs: 54,
    type: "lunch",
    ingredients: [
      { item: "Naleśniki", amount: "130g" },
      { item: "Pierś indyka", amount: "150g" },
      { item: "Papryka czerwona", amount: "170g" },
      { item: "Mozzarella", amount: "60g" }
    ],
    recipe: "1. Warzywa (marchew, papryka) pieczemy 30 min, blendujemy na pastę z oliwą.\n2. Indyka gotujemy na parze 15 min, kroimy w kostkę.\n3. Naleśniki smarujemy pastą, kładziemy mięso i ser. Zawijamy.\n4. Podsmażamy krótko na suchej patelni."
  },
  {
    name: "Pulpety z indyka z sosem z cukinii",
    calories: 540, protein: 36, fats: 18, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Makaron spaghetti", amount: "200g" },
      { item: "Mięso mielone z indyka", amount: "500g" },
      { item: "Cukinia", amount: "200g" },
      { item: "Jaja kurze", amount: "56g" }
    ],
    recipe: "1. Robimy pulpety z indyka i jajka. Gotujemy na parze 20 min.\n2. Cukinię dusimy w bulionie 6 min, blendujemy na sos z oliwą.\n3. Makaron podajemy z pulpetami polanymi sosem z cukinii."
  },
  {
    name: "Pulpety w sosie koperkowym z kuskusem",
    calories: 580, protein: 38, fats: 22, carbs: 64,
    type: "lunch",
    ingredients: [
      { item: "Kuskus", amount: "150g" },
      { item: "Mięso mielone z indyka", amount: "500g" },
      { item: "Śmietanka 12%", amount: "150g" },
      { item: "Koperek", amount: "16g" },
      { item: "Groszek zielony", amount: "150g" }
    ],
    recipe: "1. Robimy pulpety z indyka i koperku. Obsmażamy na patelni.\n2. Robimy sos: bulion + mąka + marchewka. Gotujemy 7 min.\n3. Dodajemy pulpety i groszek. Dusimy 15 min.\n4. Wlewamy śmietankę i resztę koperku. Podajemy z kuskusem."
  },
  {
    name: "Puree z dyni i batatów z kurczakiem",
    calories: 490, protein: 32, fats: 14, carbs: 56,
    type: "lunch",
    ingredients: [
      { item: "Pierś kurczaka", amount: "300g" },
      { item: "Batat", amount: "200g" },
      { item: "Dynia", amount: "200g" },
      { item: "Szpinak", amount: "75g" }
    ],
    recipe: "1. Bataty i dynię gotujemy 20 min, blendujemy na puree.\n2. Szpinak dusimy 4 min z wodą.\n3. Kurczaka gotujemy na parze 20 min.\n4. Na talerzu układamy puree, kurczaka i szpinak. Polewamy oliwą."
  },
  {
    name: "Sałatka z grillowanymi szparagami i szynką",
    calories: 420, protein: 28, fats: 24, carbs: 22,
    type: "lunch",
    ingredients: [
      { item: "Szparagi zielone", amount: "150g" },
      { item: "Mozzarella", amount: "60g" },
      { item: "Szynka parmeńska", amount: "45g" },
      { item: "Chleb żytni razowy", amount: "30g" },
      { item: "Pesto zielone", amount: "15g" }
    ],
    recipe: "1. Szparagi grillujemy 5 min na oliwie.\n2. Na talerzu układamy szpinak, szparagi, mozzarellę i szynkę.\n3. Polewamy pesto rozrobionym z wodą.\n4. Podajemy z grzanką żytnią."
  },
  {
    name: "Sałatka z indykiem, brokułem i marchewką",
    calories: 480, protein: 36, fats: 14, carbs: 46,
    type: "lunch",
    ingredients: [
      { item: "Pierś indyka", amount: "200g" },
      { item: "Brokuł", amount: "200g" },
      { item: "Marchew", amount: "160g" },
      { item: "Jogurt naturalny", amount: "100g" },
      { item: "Chleb", amount: "60g" }
    ],
    recipe: "1. Indyka i marchew gotujemy w bulionie (marchew 7 min, indyk 20 min).\n2. Brokuł gotujemy osobno 5 min.\n3. Wszystko kroimy w kostkę, mieszamy z sosem jogurtowo-ziołowym.\n4. Podajemy z grzankami z chleba."
  },
  {
    name: "Tortilla z puree z dyni i kurczakiem",
    calories: 520, protein: 34, fats: 12, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Tortilla pszenna", amount: "120g" },
      { item: "Pierś kurczaka", amount: "200g" },
      { item: "Dynia", amount: "200g" },
      { item: "Sałata lodowa", amount: "50g" }
    ],
    recipe: "1. Kurczaka gotujemy w bulionie 12 min. Dynię gotujemy do miękkości i blendujemy na puree z oliwą.\n2. Tortillę podgrzewamy.\n3. Smarujemy puree z dyni, kładziemy kurczaka i sałatę. Składamy na pół."
  },
  {
    name: "Tortilla z kurczakiem i botwinką",
    calories: 540, protein: 38, fats: 16, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Tortilla pełnoziarnista", amount: "120g" },
      { item: "Botwinka", amount: "150g" },
      { item: "Pierś kurczaka", amount: "200g" },
      { item: "Rukola", amount: "100g" }
    ],
    recipe: "1. Kurczaka w paski smażymy na oliwie. Botwinkę z cebulą podsmażamy do miękkości.\n2. Na tortilli układamy rukolę, mięso, botwinkę i warzywa.\n3. Dodajemy jogurt naturalny i zawijamy."
  },
  {
    name: "Zupa krem z brokułem i kurczakiem",
    calories: 410, protein: 32, fats: 14, carbs: 36,
    type: "lunch",
    ingredients: [
      { item: "Brokuł", amount: "350g" },
      { item: "Ziemniaki", amount: "210g" },
      { item: "Pierś kurczaka", amount: "200g" },
      { item: "Jogurt naturalny", amount: "100g" }
    ],
    recipe: "1. Gotujemy ziemniaki, brokuł i mięso w bulionie 20 min.\n2. Mięso wyjmujemy, zupę blendujemy na krem z oliwą i cytryną.\n3. Mięso kroimy, dodajemy do zupy.\n4. Podajemy z kleksem jogurtu i natką."
  },
  {
    name: "Zupa krem z selera z kurczakiem i grzankami",
    calories: 450, protein: 28, fats: 12, carbs: 52,
    type: "lunch",
    ingredients: [
      { item: "Seler naciowy", amount: "315g" },
      { item: "Pierś kurczaka", amount: "150g" },
      { item: "Jogurt grecki", amount: "100g" },
      { item: "Chleb żytni razowy", amount: "60g" }
    ],
    recipe: "1. Kurczaka w kostce smażymy na oliwie. Seler dusimy z cebulą i bulionem 15 min.\n2. Zupę blendujemy na krem, mieszamy z jogurtem greckim.\n3. Pieczywo opiekamy na grzanki.\n4. Podajemy krem z kurczakiem i grzankami."
  },
  {
    name: "Zupa szpinakowa z mleczkiem kokosowym i orzo",
    calories: 490, protein: 24, fats: 18, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Szpinak", amount: "100g" },
      { item: "Pierś kurczaka", amount: "200g" },
      { item: "Mleczko kokosowe", amount: "200g" },
      { item: "Makaron orzo", amount: "100g" }
    ],
    recipe: "1. Gotujemy makaron. Kurczaka i marchew gotujemy w bulionie 15 min.\n2. Wlewamy mleczko kokosowe, dodajemy szpinak. Gotujemy 3 min.\n3. Podajemy z makaronem."
  },
  {
    name: "Zupa z młodej kapusty z chorizo",
    calories: 520, protein: 22, fats: 34, carbs: 42,
    type: "lunch",
    ingredients: [
      { item: "Młoda kapusta", amount: "200g" },
      { item: "Chorizo", amount: "70g" },
      { item: "Pomidory z puszki", amount: "200g" },
      { item: "Chleb żytni razowy", amount: "60g" }
    ],
    recipe: "1. Smażymy chorizo z kapustą i cebulą przez 5 min.\n2. Zalewamy bulionem i pomidorami. Gotujemy 15 min.\n3. Podajemy z chlebem i kolendrą."
  },
  {
    name: "Burrito z indykiem i ryżem",
    calories: 610, protein: 38, fats: 16, carbs: 74,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z indyka", amount: "300g" },
      { item: "Ryż basmati", amount: "100g" },
      { item: "Tortilla pełnoziarnista", amount: "120g" },
      { item: "Passata pomidorowa", amount: "350g" },
      { item: "Mozzarella light", amount: "60g" }
    ],
    recipe: "1. Smażymy mięso z papryką i czosnkiem. Dodajemy ryż, passatę i wodę.\n2. Gotujemy 15-20 min, aż ryż wchłonie płyn.\n3. Na tortille nakładamy farsz i ser, zawijamy.\n4. Zapiekamy na patelni lub w piecu do zrumienienia."
  },
  {
    name: "Kanapka w stylu Big Mac (Fit)",
    calories: 680, protein: 44, fats: 32, carbs: 48,
    type: "lunch",
    ingredients: [
      { item: "Bułki grahamki", amount: "140g" },
      { item: "Mięso mielone wołowe", amount: "300g" },
      { item: "Kapusta pekińska", amount: "100g" },
      { item: "Mozzarella", amount: "30g" },
      { item: "Ogórek kiszony", amount: "100g" }
    ],
    recipe: "1. Robimy sos: jogurt + majonez + posiekany ogórek i cebula.\n2. Formujemy 4 cienkie kotlety wołowe, smażymy 3 min z każdej strony.\n3. Bułki podgrzewamy. Składamy: bułka, sos, mięso, kapusta, ser, pomidor."
  },
  {
    name: "Klopsiki na parze z kuskusem i warzywami",
    calories: 490, protein: 36, fats: 12, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z indyka", amount: "175g" },
      { item: "Kuskus", amount: "60g" },
      { item: "Cukinia", amount: "100g" },
      { item: "Marchewka", amount: "160g" }
    ],
    recipe: "1. Mięso mieszamy z tartą marchwią i ziołami. Formujemy kulki.\n2. Gotujemy klopsiki i plasterki warzyw na parze przez 20 min.\n3. Podajemy z kuskusem, skropione oliwą."
  },
  {
    name: "Kurczak teriyaki z komosą i brokułem",
    calories: 510, protein: 36, fats: 14, carbs: 54,
    type: "lunch",
    ingredients: [
      { item: "Komosa ryżowa", amount: "100g" },
      { item: "Pierś kurczaka", amount: "200g" },
      { item: "Brokuł", amount: "100g" },
      { item: "Miód", amount: "12g" },
      { item: "Sos sojowy", amount: "10g" }
    ],
    recipe: "1. Kurczaka marynujemy w miodzie i sosie sojowym.\n2. Smażymy mięso 7 min. Dodajemy brokuły i paprykę, smażymy 4 min.\n3. Podajemy na ugotowanej komosie z sezamem."
  },
  {
    name: "Sałatka ziemniaczana z kurczakiem",
    calories: 440, protein: 32, fats: 12, carbs: 48,
    type: "lunch",
    ingredients: [
      { item: "Ziemniaki", amount: "140g" },
      { item: "Pierś kurczaka", amount: "150g" },
      { item: "Ogórek świeży", amount: "75g" },
      { item: "Pomidor", amount: "80g" },
      { item: "Oliwa", amount: "10g" }
    ],
    recipe: "1. Ziemniaki gotujemy w talarkach. Kurczaka grillujemy i kroimy w plastry.\n2. Mieszamy ziemniaki, mięso, sałatę i warzywa.\n3. Polewamy sosem z oliwy, cytryny i koperku."
  },
  {
    name: "Lekkostrawna zupa jarzynowa z kurczakiem",
    calories: 420, protein: 34, fats: 10, carbs: 48,
    type: "lunch",
    ingredients: [
      { item: "Pierś kurczaka", amount: "150g" },
      { item: "Ziemniaki", amount: "210g" },
      { item: "Cukinia", amount: "100g" },
      { item: "Włoszczyzna", amount: "360g" }
    ],
    recipe: "1. Warzywa i kurczaka w kostce gotujemy w bulionie 20 min.\n2. Dodajemy cukinię i zioła, gotujemy 10 min.\n3. Wyłączamy palnik, dodajemy oliwę i natkę."
  },
  {
    name: "Makaron z kurczakiem, cukinią i sosem jogurtowym",
    calories: 560, protein: 44, fats: 14, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Makaron", amount: "150g" },
      { item: "Pierś kurczaka", amount: "300g" },
      { item: "Cukinia", amount: "200g" },
      { item: "Jogurt naturalny", amount: "100g" }
    ],
    recipe: "1. Kurczaka i warzywa pieczemy 20 min w 200st.\n2. Mieszamy makaron z jogurtem i ziołami.\n3. Łączymy z pieczonymi składnikami."
  },
  {
    name: "Naleśniki z indykiem i sosem mlecznym",
    calories: 490, protein: 32, fats: 12, carbs: 64,
    type: "lunch",
    ingredients: [
      { item: "Naleśniki lekkostrawne", amount: "130g" },
      { item: "Pierś indyka", amount: "150g" },
      { item: "Szpinak", amount: "50g" },
      { item: "Mleko", amount: "125g" }
    ],
    recipe: "1. Indyka dusimy 8 min. Dodajemy startą marchew i cukinię, dusimy 5 min.\n2. Wlewamy mleko z mąką, gotujemy do zgęstnienia.\n3. Nadziewamy naleśniki farszem."
  },
  {
    name: "Pieczone udka z rozmarynem i marchewką",
    calories: 580, protein: 38, fats: 28, carbs: 44,
    type: "lunch",
    ingredients: [
      { item: "Udko z kurczaka", amount: "200g" },
      { item: "Ziemniaki", amount: "210g" },
      { item: "Marchewka", amount: "160g" },
      { item: "Oliwa", amount: "10g" }
    ],
    recipe: "1. Mięso i warzywa w kostce przyprawiamy rozmarynem i tymiankiem.\n2. Pieczemy w rękawie z wodą 60 min w 190st.\n3. Podajemy skropione oliwą."
  },
  {
    name: "Pulpeciki z indyka w sosie marchewkowym",
    calories: 460, protein: 34, fats: 14, carbs: 52,
    type: "lunch",
    ingredients: [
      { item: "Kasza jaglana", amount: "100g" },
      { item: "Mięso mielone z indyka", amount: "400g" },
      { item: "Marchew", amount: "160g" },
      { item: "Bulion warzywny", amount: "500g" }
    ],
    recipe: "1. Robimy pulpety, gotujemy w bulionie 15 min.\n2. Marchew gotujemy do miękkości, blendujemy z wodą na sos.\n3. Łączymy pulpety z sosem, podajemy na kaszy."
  },
  {
    name: "Risotto z indykiem i cukinią",
    calories: 520, protein: 34, fats: 12, carbs: 68,
    type: "lunch",
    ingredients: [
      { item: "Ryż arborio", amount: "150g" },
      { item: "Pierś indyka", amount: "250g" },
      { item: "Cukinia", amount: "200g" },
      { item: "Bulion warzywny", amount: "700g" }
    ],
    recipe: "1. Indyka gotujemy w bulionie, kroimy w kostkę.\n2. Ryż gotujemy w tym samym bulionie (dolewając po trochu).\n3. Po 10 min dodajemy startą cukinię i marchew.\n4. Łączymy z mięsem i natką."
  },
  {
    name: "Roladki drobiowe z mizerią i puree",
    calories: 530, protein: 42, fats: 22, carbs: 45,
    type: "lunch",
    ingredients: [
      { item: "Pierś kurczaka", amount: "200g" },
      { item: "Pietruszka", amount: "100g" },
      { item: "Ziemniaki", amount: "210g" },
      { item: "Ogórek", amount: "150g" }
    ],
    recipe: "1. Mięso rozbijamy, zawijamy w nie tartą pietruszkę. Pieczemy 25 min w 180st.\n2. Robimy puree z ziemniaków i mizerię z jogurtem.\n3. Podajemy wszystko razem."
  },
  {
    name: "Sałatka z kurczakiem i pieczonym batatem",
    calories: 590, protein: 36, fats: 26, carbs: 54,
    type: "lunch",
    ingredients: [
      { item: "Batat", amount: "200g" },
      { item: "Pierś kurczaka", amount: "200g" },
      { item: "Słonecznik", amount: "20g" },
      { item: "Musztarda", amount: "20g" }
    ],
    recipe: "1. Bataty pieczemy 25 min. Kurczaka smażymy 10 min.\n2. Robimy sos musztardowo-miodowy.\n3. Mieszamy z sałatą i ogórkiem. Sypiemy prażonym słonecznikiem."
  },
  {
    name: "Sushi bowl z krewetkami",
    calories: 480, protein: 30, fats: 12, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Ryż", amount: "150g" },
      { item: "Krewetki", amount: "250g" },
      { item: "Ogórek", amount: "150g" },
      { item: "Nori", amount: "5g" },
      { item: "Sezam", amount: "5g" }
    ],
    recipe: "1. Ryż mieszamy z octem ryżowym i erytrolem.\n2. Krewetki smażymy 3 min na oleju.\n3. Układamy w misce ryż, krewetki, ogórek i paski nori.\n4. Polewamy sosem sojowym."
  },
  {
    name: "Szare kluski z twarogiem i boczkiem",
    calories: 720, protein: 38, fats: 26, carbs: 88,
    type: "lunch",
    ingredients: [
      { item: "Ziemniaki", amount: "1000g" },
      { item: "Mąka pszenna", amount: "160g" },
      { item: "Twaróg półtłusty", amount: "150g" },
      { item: "Boczek", amount: "60g" }
    ],
    recipe: "1. Ziemniaki ścieramy, odciskamy wodę. Mieszamy z mąką i jajkiem.\n2. Gotujemy kluski we wrzątku 3-4 min od wypłynięcia.\n3. Boczek smażymy na skwarki.\n4. Podajemy kluski z twarogiem i boczkiem."
  },
  {
    name: "Tortilla w stylu McWrapa (Fit)",
    calories: 590, protein: 44, fats: 22, carbs: 54,
    type: "lunch",
    ingredients: [
      { item: "Tortilla pełnoziarnista", amount: "120g" },
      { item: "Pierś kurczaka", amount: "300g" },
      { item: "Sałata lodowa", amount: "100g" },
      { item: "Mozzarella light", amount: "60g" }
    ],
    recipe: "1. Kurczaka w paski smażymy 4 min z każdej strony.\n2. Robimy sos jogurtowo-czosnkowy.\n3. Na tortilli układamy sałatę, paprykę, mięso i ser.\n4. Zawijamy i podpiekamy na patelni."
  },
  {
    name: "Zupa krem z pieczonej papryki i kurczaka",
    calories: 460, protein: 34, fats: 14, carbs: 52,
    type: "lunch",
    ingredients: [
      { item: "Papryka czerwona", amount: "340g" },
      { item: "Ziemniaki", amount: "70g" },
      { item: "Pierś kurczaka", amount: "200g" },
      { item: "Chleb pszenny", amount: "60g" }
    ],
    recipe: "1. Paprykę pieczemy 30 min, obieramy ze skórki.\n2. Gotujemy ziemniaki i kurczaka w bulionie 15 min.\n3. Dodajemy paprykę, blendujemy na krem bez mięsa.\n4. Podajemy z kawałkami kurczaka i grzankami."
  },
  {
    name: "Fit Kebab w tortilli",
    calories: 640, protein: 48, fats: 18, carbs: 66,
    type: "lunch",
    ingredients: [
      { item: "Tortilla pełnoziarnista", amount: "180g" },
      { item: "Pierś kurczaka", amount: "250g" },
      { item: "Jogurt naturalny", amount: "150g" },
      { item: "Kapusta czerwona", amount: "50g" }
    ],
    recipe: "1. Mięso marynujemy w przyprawie kebab i sosie sojowym (1h).\n2. Smażymy mięso z cebulą. Tortillę smarujemy sosem czosnkowym.\n3. Nakładamy warzywa i mięso. Zawijamy, podpiekamy na patelni."
  },
  {
    name: "Harira z wołowiną i ciecierzycą",
    calories: 520, protein: 34, fats: 12, carbs: 64,
    type: "lunch",
    ingredients: [
      { item: "Makaron pełnoziarnisty", amount: "50g" },
      { item: "Ciecierzyca", amount: "120g" },
      { item: "Polędwica wołowa", amount: "125g" },
      { item: "Pomidory z puszki", amount: "200g" }
    ],
    recipe: "1. Smażymy wołowinę z cebulą, imbirem i cynamonem.\n2. Dodajemy pomidory i bulion. Gotujemy do miękkości mięsa.\n3. Dodajemy ciecierzycę na 10 min przed końcem.\n4. Podajemy z makaronem i kolendrą."
  },
  {
    name: "Zupa grzybowa z tymiankiem",
    calories: 430, protein: 32, fats: 18, carbs: 38,
    type: "lunch",
    ingredients: [
      { item: "Grzyby świeże", amount: "200g" },
      { item: "Pierś kurczaka", amount: "200g" },
      { item: "Śmietana 18%", amount: "100g" },
      { item: "Chleb żytni razowy", amount: "120g" }
    ],
    recipe: "1. Smażymy kurczaka, odkładamy. Smażymy grzyby z cebulą 7 min.\n2. Zalewamy bulionem, gotujemy 15 min. Dodajemy tymianek.\n3. Hartujemy śmietanę i wlewamy do zupy. Dodajemy mięso.\n4. Podajemy z pieczywem."
  },
  {
    name: "Makaron w sosie szpinakowym z gorgonzolą",
    calories: 610, protein: 38, fats: 26, carbs: 54,
    type: "lunch",
    ingredients: [
      { item: "Makaron pełnoziarnisty", amount: "100g" },
      { item: "Pierś kurczaka", amount: "200g" },
      { item: "Szpinak", amount: "75g" },
      { item: "Ser Gorgonzola", amount: "50g" }
    ],
    recipe: "1. Kurczaka smażymy 15 min. Wlewamy bulion, dodajemy szpinak.\n2. Gdy szpinak zwiędnie, wlewamy śmietankę.\n3. Wyłączamy ogień, wrzucamy gorgonzolę, mieszamy do rozpuszczenia.\n4. Łączymy z makaronem."
  },
  {
    name: "Noodle z mielonym mięsem drobiowym",
    calories: 580, protein: 34, fats: 22, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Makaron udon", amount: "500g" },
      { item: "Mięso mielone z indyka", amount: "300g" },
      { item: "Szpinak", amount: "100g" },
      { item: "Sos sojowy", amount: "20g" }
    ],
    recipe: "1. Mięso smażymy na złoto. Odkładamy.\n2. Smażymy warzywa (marchew, papryka) 4 min. Dodajemy szpinak.\n3. Wkładamy mięso, noodle i sos sojowy. Mieszamy.\n4. Podajemy z sezamem."
  },
  {
    name: "Pieczony batat z kurczakiem i mozzarellą",
    calories: 520, protein: 32, fats: 18, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Bataty", amount: "200g" },
      { item: "Mięso mielone z kurczaka", amount: "150g" },
      { item: "Mozzarella", amount: "60g" },
      { item: "Oliwa", amount: "10g" }
    ],
    recipe: "1. Batata pieczemy 40 min w 200st. Mięso mielone smażymy 10 min.\n2. Batata nacinamy, w środek wkładamy mięso i posypujemy serem.\n3. Zapiekamy jeszcze 7 min do rozpuszczenia sera."
  },
  {
    name: "Pieczony indyk z Panko i pesto",
    calories: 610, protein: 44, fats: 28, carbs: 42,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z indyka", amount: "250g" },
      { item: "Panierka Panko", amount: "40g" },
      { item: "Pesto zielone", amount: "20g" },
      { item: "Szpinak", amount: "25g" }
    ],
    recipe: "1. Mięso rozwałkowujemy na placku papieru. Smarujemy pesto, kładziemy ser i szpinak.\n2. Składamy na pół, posypujemy Panko.\n3. Pieczemy w airfryerze 15 min w 200st.\n4. Podajemy z pomidorkami koktajlowymi."
  },
  {
    name: "Wołowina po burgundzku",
    calories: 640, protein: 42, fats: 26, carbs: 58,
    type: "lunch",
    ingredients: [
      { item: "Polędwica wołowa", amount: "150g" },
      { item: "Boczek parzony", amount: "30g" },
      { item: "Wino czerwone wytrawne", amount: "75g" },
      { item: "Ziemniaki", amount: "210g" }
    ],
    recipe: "1. Robimy puree ziemniaczane. Smażymy boczek z cebulą.\n2. Dodajemy wołowinę, smażymy 5 min. Dodajemy marchew i pieczarki.\n3. Wlewamy wino i bulion, dusimy 15 min.\n4. Podajemy gulasz na puree z natką."
  },
  {
    name: "Qurrito z kurczakiem i boczkiem",
    calories: 620, protein: 38, fats: 28, carbs: 52,
    type: "lunch",
    ingredients: [
      { item: "Tortilla pełnoziarnista", amount: "60g" },
      { item: "Pierś kurczaka", amount: "150g" },
      { item: "Boczek", amount: "15g" },
      { item: "Mozzarella", amount: "45g" },
      { item: "Płatki kukurydziane", amount: "20g" }
    ],
    recipe: "1. Kurczaka panierujemy w jajku i płatkach, pieczemy 20 min.\n2. Tortillę smarujemy sosem BBQ i ketchupem.\n3. Kładziemy mięso, boczek, ser i pomidora. Składamy na pół.\n4. Zapiekamy na patelni do rozpuszczenia sera."
  },
  {
    name: "Szwedzkie klopsiki jak z IKEA",
    calories: 670, protein: 38, fats: 32, carbs: 62,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone wieprzowe", amount: "200g" },
      { item: "Ziemniaki", amount: "210g" },
      { item: "Groszek mrożony", amount: "150g" },
      { item: "Sos żurawinowy", amount: "45g" },
      { item: "Śmietana 18%", amount: "50g" }
    ],
    recipe: "1. Robimy klopsiki, smażymy na złoto. Ziemniaki tłuczemy na puree.\n2. Sos: masło + mąka + bulion + śmietana + sos sojowy. Gotujemy 5 min.\n3. Klopsiki podajemy z puree, groszkiem i sosem żurawinowym."
  },
  {
    name: "Zupa koperkowa z klopsikami",
    calories: 460, protein: 28, fats: 18, carbs: 42,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z indyka", amount: "125g" },
      { item: "Koperek", amount: "28g" },
      { item: "Marchewka", amount: "80g" },
      { item: "Śmietana 18%", amount: "50g" },
      { item: "Chleb pszenny", amount: "30g" }
    ],
    recipe: "1. Robimy klopsiki, podsmażamy bez tłuszczu. Gotujemy marchew w bulionie.\n2. Śmietanę mieszamy z koperkiem i dodajemy do zupy.\n3. Wrzucamy klopsiki, gotujemy 8 min.\n4. Podajemy z chlebem."
  }
];

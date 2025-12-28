
import { Meal } from "../types";

export const MEAL_DATABASE: Meal[] = [
  // --- KANAPKI (Śniadania, II Śniadania, Kolacje) ---
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
    name: "Kanapki z domową pastą jajeczną",
    calories: 390, protein: 16, fats: 18, carbs: 42,
    type: "breakfast",
    ingredients: [
      { item: "Chleb grahams", amount: "2 kromki" },
      { item: "Jajko ugotowane", amount: "1 szt" },
      { item: "Majonez lekki", amount: "1 łyżeczka" },
      { item: "Szczypiorek", amount: "1 łyżka" },
      { item: "Rzodkiewka", amount: "3 szt" }
    ],
    recipe: "Jajko rozgnieć widelcem, wymieszaj z majonezem i szczypiorkiem. Nałóż na pieczywo, dodaj rzodkiewkę."
  },

  // --- OBIADY (LUNCH) ---
  {
    name: "Schab pieczony w majeranku z ziemniakami",
    calories: 540, protein: 35, fats: 18, carbs: 55,
    type: "lunch",
    ingredients: [
      { item: "Schab bez kości", amount: "130g" },
      { item: "Ziemniaki", amount: "200g" },
      { item: "Ogórek kiszony", amount: "2 szt" },
      { item: "Cebula", amount: "1/2 szt" }
    ],
    recipe: "Schab natrzyj czosnkiem i majerankiem, upiecz w rękawie. Ziemniaki ugotuj, podawaj z plastrami schabu i ogórkiem."
  },
  {
    name: "Pulpety z indyka w sosie koperkowym",
    calories: 510, protein: 32, fats: 15, carbs: 60,
    type: "lunch",
    ingredients: [
      { item: "Mięso mielone z indyka", amount: "120g" },
      { item: "Ryż basmati", amount: "50g" },
      { item: "Koper świeży", amount: "1/2 pęczka" },
      { item: "Jogurt naturalny", amount: "2 łyżki" }
    ],
    recipe: "Z mięsa uformuj kulki, gotuj w bulionie. Dodaj jogurt wymieszany z koperkiem. Podawaj z ryżem."
  },

  // --- PODWIECZORKI (SNACK 2) - ROZBUDOWANA BAZA ---
  {
    name: "Skyr naturalny z borówkami i orzechami",
    calories: 220, protein: 20, fats: 8, carbs: 18,
    type: "snack2",
    ingredients: [
      { item: "Skyr naturalny", amount: "150g" },
      { item: "Borówki amerykańskie", amount: "garść" },
      { item: "Orzechy nerkowca", amount: "5 szt" }
    ],
    recipe: "Skyr wymieszaj z owocami i posiekanymi orzechami."
  },
  {
    name: "Banan z masłem orzechowym",
    calories: 250, protein: 6, fats: 12, carbs: 32,
    type: "snack2",
    ingredients: [
      { item: "Banan", amount: "1 szt" },
      { item: "Masło orzechowe 100%", amount: "1 łyżka" }
    ],
    recipe: "Banana pokrój w plastry i smaruj masłem orzechowym."
  },
  {
    name: "Smoothie truskawkowo-bananowe na kefirze",
    calories: 210, protein: 9, fats: 4, carbs: 35,
    type: "snack2",
    ingredients: [
      { item: "Kefir", amount: "200ml" },
      { item: "Truskawki (mrożone lub świeże)", amount: "100g" },
      { item: "Banan", amount: "1/2 szt" }
    ],
    recipe: "Wszystkie składniki zblenduj na gładką masę."
  },
  {
    name: "Wafle ryżowe z twarogiem i miodem",
    calories: 190, protein: 12, fats: 3, carbs: 28,
    type: "snack2",
    ingredients: [
      { item: "Wafle ryżowe", amount: "2 szt" },
      { item: "Twaróg chudy", amount: "50g" },
      { item: "Miód", amount: "1 łyżeczka" }
    ],
    recipe: "Wafle posmaruj twarogiem i polej odrobiną miodu."
  },
  {
    name: "Serek wiejski ze szczypiorkiem i rzodkiewką",
    calories: 180, protein: 18, fats: 6, carbs: 8,
    type: "snack2",
    ingredients: [
      { item: "Serek wiejski lekki", amount: "150g" },
      { item: "Rzodkiewka", amount: "3 szt" },
      { item: "Szczypiorek", amount: "1 łyżka" }
    ],
    recipe: "Rzodkiewkę pokrój w kostkę, wymieszaj z serkiem i szczypiorkiem."
  },
  {
    name: "Garść migdałów i suszone morele",
    calories: 230, protein: 6, fats: 14, carbs: 22,
    type: "snack2",
    ingredients: [
      { item: "Migdały", amount: "15 szt" },
      { item: "Morele suszone", amount: "3 szt" }
    ],
    recipe: "Idealna przekąska do pracy lub w trasę."
  },
  {
    name: "Koktajl czekoladowy z awokado (fit)",
    calories: 280, protein: 8, fats: 16, carbs: 24,
    type: "snack2",
    ingredients: [
      { item: "Mleko migdałowe lub krowie", amount: "200ml" },
      { item: "Awokado", amount: "1/4 szt" },
      { item: "Kakao naturalne", amount: "1 łyżeczka" },
      { item: "Erytrytol", amount: "1 łyżka" }
    ],
    recipe: "Zblenduj awokado z mlekiem i kakao. Dosłódź erytrytolem."
  },
  {
    name: "Kawałki jabłka z cynamonem i jogurtem",
    calories: 160, protein: 5, fats: 2, carbs: 30,
    type: "snack2",
    ingredients: [
      { item: "Jabłko", amount: "1 duża szt" },
      { item: "Cynamon", amount: "szczypta" },
      { item: "Jogurt naturalny", amount: "3 łyżki" }
    ],
    recipe: "Jabłko pokrój, posyp cynamonem i maczaj w jogurcie."
  },
  {
    name: "Sałatka owocowa z chia",
    calories: 195, protein: 3, fats: 4, carbs: 36,
    type: "snack2",
    ingredients: [
      { item: "Pomarańcza", amount: "1/2 szt" },
      { item: "Kiwi", amount: "1 szt" },
      { item: "Nasiona chia", amount: "1 łyżeczka" }
    ],
    recipe: "Owoce pokrój w kostkę i posyp nasionami chia."
  },
  {
    name: "Marchewki w słupkach z hummusem klasycznym",
    calories: 220, protein: 7, fats: 12, carbs: 20,
    type: "snack2",
    ingredients: [
      { item: "Marchewka", amount: "2 szt" },
      { item: "Hummus klasyczny", amount: "3 łyżki" }
    ],
    recipe: "Marchewkę pokrój w słupki. Maczaj w hummusie."
  },
  {
    name: "Pudding z nasion bazylii na mleku kokosowym",
    calories: 210, protein: 4, fats: 14, carbs: 16,
    type: "snack2",
    ingredients: [
      { item: "Mleczko kokosowe (light)", amount: "150ml" },
      { item: "Nasiona bazylii lub chia", amount: "1 łyżka" },
      { item: "Maliny", amount: "garść" }
    ],
    recipe: "Nasiona namocz w mleczku (min. 2h). Podawaj z malinami."
  },
  {
    name: "Serek homogenizowany naturalny z orzechami",
    calories: 240, protein: 14, fats: 12, carbs: 18,
    type: "snack2",
    ingredients: [
      { item: "Serek homogenizowany", amount: "150g" },
      { item: "Orzechy włoskie", amount: "4 szt" }
    ],
    recipe: "Wymieszaj serek z posiekanymi orzechami."
  }
];

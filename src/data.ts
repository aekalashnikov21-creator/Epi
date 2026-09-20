/* ============================================================
   EPILATE-ME · Маркетинг-стратегия 2026–2027
   Сеть из 6 филиалов · Москва
   Бюджет: 910 000 ₽/мес · 8 каналов
   1 761 лид/мес (59/день) → 1 057 продаж (CR лид→клиент 60%)
   ROMI считается по марже: (маржа − бюджет) / бюджет
   ============================================================ */

export const fmt = (n: number, digits = 0): string =>
  new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: digits,
    minimumFractionDigits: 0,
  }).format(n);

/* ---------- филиалы ---------- */
export const branches = [
  { metro: "Новокузнецкая", address: "Большой Овчинниковский переулок, 24, стр. 1" },
  { metro: "Коммунарка", address: "НАО, посёлок Коммунарка, улица Липовый Парк, 5, корп. 1" },
  { metro: "Курская", address: "Яковоапостольский переулок, 9, стр. 3" },
  { metro: "Хамовники", address: "улица Льва Толстого, 23, корп. 1" },
  { metro: "Маяковская", address: "улица Юлиуса Фучика, 11/13" },
  { metro: "Зиларт", address: "ул. Родченко, дом 2" },
];

/* ---------- ключевые показатели плана ---------- */
export const planNumbers = {
  budget: 910000,
  budgetBranch: 151667,
  leadsMonth: 1761,
  leadsDayNetwork: 59,
  leadsDayBranch: 9.8,
  salesMonth: 1057,
  salesDayNetwork: 35,
  salesDayBranch: 5.9,
  conv: 60,
  cpl: 517,
  cac: 861,
  revenueMonth: 4809350,
  marginMonth: 3222793,
  romi1mo: 254,
  romiLtv: 3617,
  ltvMargin: 32000,
  breakevenCac: 32000,
  safety: 37,
  marginRate: 67,
  check: 4550,
  marginPerSale: 3049,
  upsale: 1490,
  courseProcedures: "8–10",
  cplLimit: 1278,
  cacLimit: 2187,
};

/* ---------- обложка ---------- */
export const coverStats = [
  { label: "Бюджет · целевой месяц", value: 910000, prefix: "", suffix: " ₽/мес", note: "8 каналов · 6 филиалов" },
  { label: "Лидов в день · сеть", value: 59, prefix: "", suffix: "", note: "1 761 в месяц · ~9.8 на филиал" },
  { label: "Продаж в день", value: 35, prefix: "", suffix: "", note: "1 057 в месяц · CR лид→клиент 60%" },
  { label: "ROMI 1-го месяца (маржа)", value: 254, prefix: "+", suffix: "%", note: "по LTV +3 617% · LTV-маржа 32 000 ₽" },
];

export const goals = [
  {
    horizon: "Целевой месяц",
    points: ["59 лидов в день на сеть", "35 продаж в день (CR 60%)", "ROMI (маржа) +254%"],
  },
  {
    horizon: "Юнит-экономика",
    points: ["LTV-маржа клиента 32 000 ₽", "CAC 861 ₽ · запас прочности ×37", "Органика ≥ 4% к 12 мес"],
  },
];

export const fileStructure: { sheet: string; content: string; tab: number }[] = [
  { sheet: "Дашборд", content: "Целевые показатели и KPI с красными линиями", tab: 1 },
  { sheet: "Юнит-экономика", content: "Экономика одного клиента, LTV, CAC, безубыточность", tab: 2 },
  { sheet: "Медиаплан", content: "8 каналов: бюджет, клики, CPL, продажи, ROMI", tab: 3 },
  { sheet: "Воронка", content: "Лиды → продажи → процедуры (1-й мес и LTV)", tab: 4 },
  { sheet: "Roadmap", content: "Фазы 0–3 с бюджетами и KPI выхода", tab: 5 },
  { sheet: "Контрольные точки", content: "Даты срезов и управленческие решения", tab: 6 },
  { sheet: "Риски", content: "Рабочие риски стратегии и ответы на них", tab: 7 },
  { sheet: "Детали каналов", content: "Действия и ожидаемый результат по каналам", tab: 8 },
];

/* ---------- дашборд ---------- */
export const dashboardGoals = [
  { label: "Лидов в день · сеть", value: "59", note: "1 761 в месяц · ~9.8 на филиал" },
  { label: "Продаж в день · сеть", value: "35", note: "1 057 в месяц · CR 60%" },
  { label: "CPL (лид)", value: "≤ 600 ₽", note: "план 517 ₽" },
  { label: "CAC (продажа)", value: "≤ 1 000 ₽", note: "план 861 ₽ · запас ×37" },
  { label: "Органика к 12 мес", value: "≥ 4%", note: "Google Maps" },
];

export const kpiControl = [
  { metric: "CPL (лид)", target: "≤ 600 ₽", red: "> 1 278 ₽", freq: "еженедельно" },
  { metric: "CAC (продажа)", target: "≤ 1 000 ₽", red: "> 2 187 ₽", freq: "еженедельно" },
  { metric: "Лидов / день · сеть", target: "≥ 59", red: "< 40", freq: "еженедельно" },
  { metric: "CV клик → лид", target: "≥ 10%", red: "< 6%", freq: "еженедельно" },
  { metric: "CR лид → клиент", target: "≥ 60%", red: "< 45%", freq: "еженедельно" },
  { metric: "Retention (2-я процедура)", target: "≥ 70%", red: "< 55%", freq: "ежемесячно" },
  { metric: "LTV / CAC", target: "≥ 10", red: "< 5", freq: "ежемесячно" },
  { metric: "NPS", target: "≥ 50", red: "< 30", freq: "ежемесячно" },
];

/* ---------- юнит-экономика ---------- */
export const unitEconomics = [
  { param: "Средний чек первички", value: "4 550 ₽", comment: "прайс" },
  { param: "Маржинальность", value: "67% → 3 049 ₽", comment: "маржа с первички" },
  { param: "Средний курс", value: "8–10 процедур", comment: "ниша" },
  { param: "Допродажа (косметология)", value: "+1 490 ₽", comment: "средняя на клиента" },
  { param: "LTV клиента (маржа · 12 мес)", value: "32 000 ₽", comment: "курс + допродажа" },
  { param: "Конверсия лид → клиент", value: "60%", comment: "в фактический приход" },
  { param: "Безубыточный CAC", value: "32 000 ₽", comment: "= LTV-маржа клиента" },
  { param: "CPL / CAC план", value: "517 ₽ / 861 ₽", comment: "910 000 / 1 761 · 910 000 / 1 057" },
  { param: "Допустимые пределы", value: "CPL 1 278 ₽ · CAC 2 187 ₽", comment: "стоп-факторы масштабирования" },
];

/* ---------- медиаплан ---------- */
export type MediaChannel = {
  name: string;
  budget: number;
  clicks: number | null;
  cpc: number | null;
  cv: string;
  leads: number | null;
  cpl: number | null;
  sales: number;
  salesLabel?: string;
  revenue: number;
  romi: number | null;
  organic?: boolean;
};

export const mediaChannels: MediaChannel[] = [
  { name: "Яндекс Карты", budget: 130000, clicks: 3960, cpc: 33, cv: "11,4%", leads: 450, cpl: 289, sales: 270, revenue: 1228500, romi: 533 },
  { name: "Google Maps · органика", budget: 0, clicks: 260, cpc: 0, cv: "—", leads: 38, cpl: 0, sales: 23, revenue: 104650, romi: null, organic: true },
  { name: "2ГИС", budget: 90000, clicks: 723, cpc: 124, cv: "27%", leads: 197, cpl: 457, sales: 118, revenue: 536900, romi: 300 },
  { name: "Яндекс Директ", budget: 400000, clicks: 3333, cpc: 120, cv: "12%", leads: 400, cpl: 1000, sales: 240, revenue: 1092000, romi: 83 },
  { name: "Авито", budget: 60000, clicks: 4000, cpc: 15, cv: "6%", leads: 240, cpl: 250, sales: 144, revenue: 655200, romi: 632 },
  { name: "Таргет СМС", budget: 100000, clicks: 50000, cpc: 2, cv: "0,4%", leads: 200, cpl: 500, sales: 120, revenue: 546000, romi: 266 },
  { name: "Яндекс Медицина", budget: 50000, clicks: 1167, cpc: 43, cv: "12%", leads: 140, cpl: 357, sales: 84, revenue: 382200, romi: 412 },
  { name: "Парсинг номеров конкурентов", budget: 80000, clicks: 800, cpc: 100, cv: "12%", leads: 96, cpl: 833, sales: 58, revenue: 263900, romi: 121 },
];

export const mediaTotal: MediaChannel = {
  name: "ИТОГО", budget: 910000, clicks: null, cpc: null, cv: "—", leads: 1761, cpl: 517, sales: 1057, revenue: 4809350, romi: 254,
};

export const channelColors = ["#B0844F", "#6E5334", "#D9BE97", "#A17E52", "#6F7F58", "#8A6A42", "#C4B49C", "#E0CFB2"];

/* ---------- примечания к медиаплану ---------- */
export const channelNotes = [
  "Яндекс Карты: лиды = кнопка-действие + клики по телефону (факт 13,5 мес).",
  "Google Maps: звонки + переходы (факт 30 дней).",
  "Таргет СМС: 2 ₽/отправка, CV 0,4% консервативно.",
  "Все каналы внутри пределов: max CPL 1 000 ₽ ≤ 1 278 ₽, max CAC 1 667 ₽ ≤ 2 187 ₽.",
  "ROMI считать по марже: (маржа − бюджет) / бюджет; маржа = продажи × 3 049 ₽.",
];

/* ---------- воронка ---------- */
export const funnelStages = [
  { stage: "Лиды", value: 1761, conv: null as string | null, note: "все каналы · CPL 517 ₽", width: 100 },
  { stage: "Продажи · новые клиенты", value: 1057, conv: "60%", note: "CAC 861 ₽", width: 72 },
  { stage: "Процедуры · 1-й месяц", value: 1586, conv: "×1.5", note: "выручка 4 809 350 ₽", width: 50 },
  { stage: "Процедуры · LTV 12 мес", value: 9513, conv: "×9", note: "LTV-маржа когорты 33 824 000 ₽", width: 32 },
];

export const cohortEconomics = [
  { label: "Маржа 1-го месяца", formula: "1 057 × 1.5 × 3 049", value: 3222793, suffix: " ₽" },
  { label: "ROMI 1-го месяца (маржа)", formula: "(3 222 793 − 910 000) / 910 000", value: 254, suffix: "%", prefix: "+" },
  { label: "LTV-маржа когорты · 12 мес", formula: "1 057 × 32 000", value: 33824000, suffix: " ₽" },
  { label: "ROMI по LTV", formula: "(33 824 000 − 910 000) / 910 000", value: 3617, suffix: "%", prefix: "+" },
];

/* ---------- roadmap ---------- */
export const phases = [
  {
    phase: "Фаза 0", period: "недели 1–2", budget: "~150 000 ₽",
    actions: [
      "Коллтрекинг + UTM-разметка + цели Метрики",
      "Лендинги под кластеры ядра",
      "Верификация 6 филиалов: Яндекс Карты, Google Maps, 2ГИС",
      "Скрипты админов на CR 60%",
    ],
    kpi: "Аналитика собирается · 6/6 филиалов верифицированы · посадочные страницы и формы",
  },
  {
    phase: "Фаза 1", period: "месяц 1", budget: "400 000 ₽/мес",
    actions: [
      "Яндекс Директ: горячие + зоны + аппараты",
      "Яндекс Карты + 2ГИС",
      "Авито: 3 объявления",
      "Тест парсинга номеров конкурентов",
    ],
    kpi: "Лидов/день ≥ 35 · CPL ≤ 700 ₽",
  },
  {
    phase: "Фаза 2", period: "месяцы 2–3", budget: "700 000 ₽/мес",
    actions: [
      "+ Таргет СМС: гео + интересы «красота»",
      "+ Яндекс Медицина",
      "Ретаргетинг «Не дошли» по базе",
      "Реферальная программа",
    ],
    kpi: "Лидов/день ≥ 45 · CPL ≤ 600 ₽ · CR ≥ 55%",
  },
  {
    phase: "Фаза 3", period: "месяцы 4–6", budget: "910 000 ₽/мес",
    actions: [
      "Масштаб Директа до 400 тыс и СМС до 100 тыс",
      "Оптимизация CPL/CAC по каналам",
      "Membership «Клуб гладкой кожи»",
    ],
    kpi: "59 лидов/день · 35 продаж/день · ROMI ≥ +254%",
  },
];

/* ---------- контрольные точки ---------- */
export const checkpoints = [
  { point: "Неделя 2", check: "Лендинги и карты", kpi: "Посадочные и формы · 6/6 филиалов на Картах, Google, 2ГИС", decision: "Запуск платного трафика" },
  { point: "Конец месяца 1", check: "Срез Фазы 1", kpi: "Лидов/день ≥ 35 · CPL ≤ 700 · CV клик→лид ≥ 10%", decision: "Масштаб в Фазу 2" },
  { point: "Конец месяца 3", check: "Срез Фазы 2", kpi: "Лидов/день ≥ 45 · CPL ≤ 600 · CR ≥ 55%", decision: "Переход в Фазу 3" },
  { point: "Конец месяца 6", check: "Срез Фазы 3", kpi: "59 лидов/день · CAC ≤ 1 000 · ROMI ≥ +254%", decision: "Годовой план, 7-й филиал" },
  { point: "Конец месяца 12", check: "Годовой срез", kpi: "59+ лидов/день · выручка/филиал ≥ 800 тыс · NPS ≥ 50", decision: "Масштабирование / франшиза" },
];

/* ---------- риски ---------- */
export const risks = [
  { risk: "CR лид → клиент ниже 60%", prob: "Высокая", impact: "Высокое", mitigation: "Скрипты админов, напоминания за 24 ч, предоплата-бронь слотов, еженедельный контроль доходимости" },
  { risk: "Не хватает ёмкости для открутки бюджета", prob: "Средняя", impact: "Высокое", mitigation: "Расширение семантики и гео, мужская и косметология, перераспределение в ёмкие каналы" },
  { risk: "Сезонность: спад май–июль", prob: "Высокая", impact: "Среднее", mitigation: "Pivot на M22, RSL и косметологию; акции Summer Ready; предоплата курсов" },
  { risk: "Рост цены трафика", prob: "Высокая", impact: "Среднее", mitigation: "Диверсификация 8 каналов, органика и карты, работа с LTV; стоп при CPL > 1 278 / CAC > 2 187" },
];

/* ---------- детали каналов ---------- */
export const channelDetails = [
  { channel: "Яндекс Карты", actions: "Приоритетное размещение, отзывы (SMS после процедуры), фото, кнопка записи", result: "450 лидов/мес · CPL 289 ₽" },
  { channel: "Google Maps · органика", actions: "Заполненные профили, отзывы, фото, категории — без бюджета", result: "38 лидов/мес · 0 ₽" },
  { channel: "2ГИС", actions: "Размещение, отзывы, кнопка записи, акции", result: "197 лидов/мес · CPL 457 ₽" },
  { channel: "Яндекс Директ", actions: "Горячий поиск, зоны, аппараты (Candela/Deka), ретаргетинг", result: "400 лидов/мес · CPL 1 000 ₽" },
  { channel: "Авито", actions: "3 объявления: «от 990 ₽», «александрит Candela», «мужская»; CV 6% консервативно", result: "240 лидов/мес · CPL 250 ₽" },
  { channel: "Таргет СМС", actions: "Гео + интересы «красота», 2 ₽/отправка, оффер первички", result: "200 лидов/мес · CPL 500 ₽" },
  { channel: "Яндекс Медицина", actions: "Профили клиник, карточки врачей, отзывы, акции", result: "140 лидов/мес · CPL 357 ₽" },
  { channel: "Парсинг номеров конкурентов", actions: "Обзвон/WhatsApp по базе номеров конкурентов, welcome-оффер", result: "96 лидов/мес · CPL 833 ₽" },
];

/* ---------- приложение: минус-слова ---------- */
export const negativeGroups = [
  {
    group: "Конкуренты",
    words: ["мисс лазер", "miss laser", "лазер лав", "laserlove", "эпил тайм", "эпил сити", "novolazer", "fancyvita", "амория", "beverly", "nsee", "one by one beauty", "queens", "everglow", "lalalaser", "beauty mix"],
  },
  {
    group: "Инфо-мусор",
    words: ["отзывы", "как", "почему", "можно ли", "фаза цикла", "навсегда", "вред", "риски", "противопоказания", "в домашних условиях", "своими руками", "видео", "форум", "принцип действия"],
  },
  {
    group: "B2B / кадры",
    words: ["франшиза", "открыть", "стоимость открытия", "курсы", "школа", "обучение", "работа", "вакансия", "зарплата"],
  },
  {
    group: "Не наши услуги",
    words: ["воск", "шугаринг", "фотоэпилятор", "купить", "аппарат", "крем", "нитью", "электроэпиляция (в отдельную кампанию)"],
  },
];

export const doNotNegate = ["candela", "deka", "moveo", "александрит", "диод", "цена", "москва", "записаться"];

/* ---------- тикер ---------- */
export const tickerItems = [
  "1 761 лидов в месяц",
  "59 лидов в день на сеть",
  "~9.8 лидов в день на филиал",
  "CR лид → клиент 60%",
  "35 продаж в день",
  "Бюджет — 910 000 ₽/мес",
  "CPL — 517 ₽",
  "CAC — 861 ₽",
  "Запас прочности — ×37",
  "ROMI (маржа) — +254%",
  "Выручка — 4 809 350 ₽/мес",
  "6 филиалов · Москва",
];

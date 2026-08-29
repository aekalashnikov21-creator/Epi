/* ============================================================
   EPILATE-ME · Маркетинг-стратегия 2026–2027
   Сеть из 6 филиалов · Москва
   Медиаплан: 1 100 000 ₽/мес · 14 каналов
   2 681 лид/мес → 1 072 продажи (конверсия в приход 40%)
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
  budget: 1100000,
  budgetBranch: 183300,
  leadsMonth: 2681,
  leadsDayNetwork: 89,
  leadsDayBranch: 15,
  salesMonth: 1072,
  salesDayNetwork: 36,
  salesDayBranch: 6,
  conv: 40,
  cpl: 410,
  cac: 1026,
  revenueMonth: 3752000,
  romi1mo: 241,
  romiLtv: 1459,
  ltvMargin: 16000,
  safety: 15.6,
  rev1moBranch: 625300,
  ltvMarginBranch: 2858700,
  margin1mo: 3376800,
  romiMargin1mo: 207,
};

/* ---------- обложка ---------- */
export const coverStats = [
  { label: "Бюджет", value: 1100000, prefix: "", suffix: " ₽/мес", note: "14 каналов · 6 филиалов" },
  { label: "Лидов в день · сеть", value: 89, prefix: "", suffix: "", note: "~15 на филиал · 2 681 в месяц" },
  { label: "Продаж в день", value: 36, prefix: "", suffix: "", note: "конверсия в приход 40%" },
  { label: "ROMI (1-й месяц)", value: 241, prefix: "+", suffix: "%", note: "по LTV +1 459% · LTV-маржа 16 000 ₽" },
];

export const goals = [
  {
    horizon: "Цель · 6 месяцев",
    points: ["70 лидов в день на сеть", "28 продаж в день", "ROMI (1-й месяц) ≥ +200%"],
  },
  {
    horizon: "Цель · 12 месяцев",
    points: ["89 лидов в день · 2 681 в месяц", "36 продаж в день · 1 072 в месяц", "Органика ≥ 20%"],
  },
];

export const fileStructure: { sheet: string; content: string; tab: number }[] = [
  { sheet: "Дашборд", content: "Целевые показатели и KPI с красными линиями", tab: 1 },
  { sheet: "Юнит-экономика", content: "Экономика одного клиента, LTV, безубыточность", tab: 2 },
  { sheet: "Медиаплан", content: "14 каналов: бюджет, клики, CPL, продажи, ROMI", tab: 3 },
  { sheet: "Воронка", content: "Клики → лиды → продажи → процедуры", tab: 4 },
  { sheet: "ROMI", content: "ROMI по каналам + сценарии (база / пессимист)", tab: 5 },
  { sheet: "Roadmap", content: "Фазы 0–3 с бюджетами и KPI выхода", tab: 6 },
  { sheet: "Контрольные точки", content: "Даты срезов и управленческие решения", tab: 7 },
  { sheet: "Риски", content: "Риски и митигация", tab: 8 },
  { sheet: "Детали каналов", content: "Действия и ожидаемый результат по каналам", tab: 9 },
  { sheet: "Приложение", content: "Минус-слова по группам для Поиска", tab: 10 },
];

/* ---------- дашборд ---------- */
export const horizons = [
  { metric: "Лидов / день · сеть", now: "~45", m3: "60", m6: "75", m12: "89" },
  { metric: "Лидов / день · 1 филиал", now: "~7", m3: "10", m6: "12", m12: "15" },
  { metric: "Продаж / день · сеть", now: "~18", m3: "24", m6: "30", m12: "36" },
  { metric: "Лидов / месяц · сеть", now: "~1 350", m3: "1 800", m6: "2 250", m12: "2 681" },
  { metric: "CPL (лид), ₽", now: "410", m3: "≤ 450", m6: "≤ 430", m12: "≤ 400" },
  { metric: "Выручка / мес на филиал, ₽", now: "~300 000", m3: "420 000", m6: "520 000", m12: "625 000+" },
  { metric: "Доля органики", now: "~8%", m3: "12%", m6: "15%", m12: "20%" },
  { metric: "LTV клиента, ₽", now: "16 000", m3: "25 000", m6: "35 000", m12: "45 000" },
  { metric: "ROMI (1-й месяц)", now: "+150%", m3: "+180%", m6: "+210%", m12: "+241%" },
];

export const growth = [
  { label: "Сейчас", value: "~45", h: 50.5 },
  { label: "3 мес", value: "60", h: 67.5 },
  { label: "6 мес", value: "75", h: 84.5 },
  { label: "12 мес", value: "89", h: 100 },
];

export const kpiControl = [
  { metric: "CPL (лид)", target: "≤ 500 ₽", red: "> 800 ₽", freq: "еженедельно" },
  { metric: "CAC (продажа)", target: "≤ 1 200 ₽", red: "> 2 000 ₽", freq: "еженедельно" },
  { metric: "Лидов / день · сеть", target: "≥ 89", red: "< 60", freq: "еженедельно" },
  { metric: "CV клик → лид", target: "≥ 10%", red: "< 6%", freq: "еженедельно" },
  { metric: "CR лид → приход", target: "≥ 40%", red: "< 30%", freq: "еженедельно" },
  { metric: "Retention (2-я процедура)", target: "≥ 70%", red: "< 55%", freq: "ежемесячно" },
  { metric: "LTV / CAC", target: "≥ 10", red: "< 5", freq: "ежемесячно" },
  { metric: "NPS", target: "≥ 50", red: "< 30", freq: "ежемесячно" },
];

/* ---------- юнит-экономика ---------- */
export const unitEconomics = [
  { param: "Средний чек 1 процедуры", value: "3 500 ₽", comment: "прайс" },
  { param: "Маржа с процедуры", value: "60% → 2 100 ₽", comment: "расходники + ФОТ + аренда" },
  { param: "Средний курс", value: "7 процедур", comment: "ниша" },
  { param: "Выручка с клиента за курс", value: "24 500 ₽", comment: "7 × 3 500" },
  { param: "Маржа с клиента за курс", value: "14 700 ₽", comment: "7 × 2 100" },
  { param: "Допродажа косметологии", value: "+1 440 ₽", comment: "30% клиентов × 8 000 × 60%" },
  { param: "LTV-маржа за 12 мес", value: "~16 000 ₽", comment: "14 700 + 1 440" },
  { param: "Предельный (безубыточный) CAC", value: "16 000 ₽", comment: "= LTV-маржа" },
  { param: "CPL (стоимость лида)", value: "410 ₽", comment: "1 100 000 / 2 681" },
  { param: "CAC (стоимость продажи)", value: "~1 030 ₽", comment: "1 100 000 / 1 072 · запас ×15.6" },
  { param: "CR лид → первичный клиент", value: "40%", comment: "конверсия в фактический приход" },
];

/* ---------- медиаплан ---------- */
export type MediaChannel = {
  name: string;
  budget: number;
  clicks: number;
  cpc: number;
  cv: string;
  leads: number;
  cpl: number;
  sales: number;
  revenue: number;
  romi: number;
  organic?: boolean;
};

export const mediaChannels: MediaChannel[] = [
  { name: "Яндекс Карты", budget: 130000, clicks: 3960, cpc: 33, cv: "17.3%", leads: 687, cpl: 189, sales: 275, revenue: 962500, romi: 640 },
  { name: "2ГИС", budget: 90000, clicks: 723, cpc: 124, cv: "27%", leads: 197, cpl: 457, sales: 79, revenue: 276500, romi: 207 },
  { name: "Google Maps · органика", budget: 0, clicks: 260, cpc: 0, cv: "—", leads: 38, cpl: 0, sales: 15, revenue: 52500, romi: 0, organic: true },
  { name: "Яндекс Директ", budget: 340000, clicks: 2833, cpc: 120, cv: "12%", leads: 340, cpl: 1000, sales: 136, revenue: 476000, romi: 40 },
  { name: "ВКонтакте", budget: 90000, clicks: 2571, cpc: 35, cv: "5%", leads: 129, cpl: 698, sales: 52, revenue: 182000, romi: 102 },
  { name: "Instagram / SMM", budget: 100000, clicks: 2500, cpc: 40, cv: "5%", leads: 125, cpl: 800, sales: 50, revenue: 175000, romi: 75 },
  { name: "Telegram", budget: 30000, clicks: 1000, cpc: 30, cv: "5%", leads: 50, cpl: 600, sales: 20, revenue: 70000, romi: 133 },
  { name: "Авито", budget: 40000, clicks: 2667, cpc: 15, cv: "12%", leads: 320, cpl: 125, sales: 128, revenue: 448000, romi: 1020 },
  { name: "SEO / контент", budget: 60000, clicks: 1500, cpc: 40, cv: "12%", leads: 180, cpl: 333, sales: 72, revenue: 252000, romi: 320 },
  { name: "ПроДокторов", budget: 60000, clicks: 750, cpc: 80, cv: "12%", leads: 90, cpl: 667, sales: 36, revenue: 126000, romi: 110 },
  { name: "Яндекс Медицина", budget: 50000, clicks: 1667, cpc: 30, cv: "12%", leads: 200, cpl: 250, sales: 80, revenue: 280000, romi: 460 },
  { name: "Блогеры", budget: 80000, clicks: 4000, cpc: 20, cv: "5%", leads: 200, cpl: 400, sales: 80, revenue: 280000, romi: 250 },
  { name: "MAX", budget: 10000, clicks: 500, cpc: 20, cv: "5%", leads: 25, cpl: 400, sales: 10, revenue: 35000, romi: 250 },
  { name: "Партнёрки банков", budget: 20000, clicks: 2000, cpc: 10, cv: "5%", leads: 100, cpl: 200, sales: 40, revenue: 140000, romi: 600 },
];

export const mediaTotal: MediaChannel = {
  name: "ИТОГО", budget: 1100000, clicks: 24931, cpc: 44, cv: "10.8%", leads: 2681, cpl: 410, sales: 1072, revenue: 3752000, romi: 241,
};

export const channelColors = ["#B0844F", "#6E5334", "#D9BE97", "#A17E52", "#6F7F58", "#8A6A42", "#C4B49C", "#E0CFB2", "#5E6E4E", "#8C7B62", "#B7A98C", "#77684E", "#D8CBB4", "#9C8B6E"];

/* ---------- воронка ---------- */
export const funnelStages = [
  { stage: "Клики", value: 24931, conv: null as string | null, note: "все каналы · CPC средний 44 ₽", width: 100 },
  { stage: "Лиды", value: 2681, conv: "10.8%", note: "CPL 410 ₽", width: 60 },
  { stage: "Продажи (первичные клиенты)", value: 1072, conv: "40%", note: "CAC 1 026 ₽", width: 42 },
  { stage: "Процедуры · 1-й месяц", value: 1608, conv: "×1.5", note: "выручка 5 628 000 ₽", width: 29 },
  { stage: "Процедуры · LTV 12 мес", value: 7504, conv: "×7", note: "LTV-выручка когорты 26.3 млн ₽", width: 18 },
];

export const cohortEconomics = [
  { label: "Маржа 1-го месяца", formula: "1 072 × 1.5 × 2 100", value: 3376800, suffix: " ₽" },
  { label: "ROMI 1-го месяца (маржа)", formula: "(3 376 800 − 1 100 000) / 1 100 000", value: 207, suffix: "%", prefix: "+" },
  { label: "LTV-маржа когорты · 12 мес", formula: "1 072 × 16 000", value: 17152000, suffix: " ₽" },
  { label: "ROMI по LTV", formula: "(17 152 000 − 1 100 000) / 1 100 000", value: 1459, suffix: "%", prefix: "+" },
];

/* ---------- ROMI ---------- */
export const scenarios = [
  { id: "base", name: "База", desc: "план · CR 40%", budget: 1100000, sales: 1072, check: 3500, romi: "+241%" },
  { id: "pess", name: "Пессимист", desc: "CR 32% · чек 3 000", budget: 1100000, sales: 858, check: 3000, romi: "+134%" },
  { id: "be", name: "Безубыточность", desc: "порог окупаемости", budget: 0, sales: 0, check: 0, romi: "0%" },
];

/* ---------- roadmap ---------- */
export const phases = [
  {
    phase: "Фаза 0", period: "недели 1–2", budget: "~150 000 ₽",
    actions: [
      "Коллтрекинг + UTM-разметка + цели Метрики",
      "Лендинги под кластеры ядра (губы, M22, мужская, зоны)",
      "Верификация 6 филиалов: Яндекс Карты, Google Maps, 2ГИС",
      "Скрипты админов на доведение лида до прихода (40%)",
    ],
    kpi: "Аналитика собирается · 6/6 филиалов верифицированы · страницы live",
  },
  {
    phase: "Фаза 1", period: "месяц 1", budget: "400 000 ₽/мес",
    actions: [
      "Яндекс Директ: горячие + зоны + аппараты (Candela/Deka)",
      "Приоритетное размещение на Картах (3 филиала) + 2ГИС",
      "Авито: 3 объявления",
      "Ретаргетинг «Не дошли» по базе",
    ],
    kpi: "Лидов/день ≥ 45 · CPL ≤ 500 ₽",
  },
  {
    phase: "Фаза 2", period: "месяцы 2–3", budget: "700 000 ₽/мес",
    actions: [
      "+ ВКонтакте: лид-формы, сторис",
      "+ Instagram / SMM и Telegram-клуб",
      "+ SEO / контент, ПроДокторов, Яндекс Медицина",
      "Реферальная программа «Приведи подругу»",
      "Автоматизация записи в YCLIENTS",
    ],
    kpi: "Лидов/день ≥ 65 · органика ≥ 12% · retention ≥ 65%",
  },
  {
    phase: "Фаза 3", period: "месяцы 4–6", budget: "1 100 000 ₽/мес",
    actions: [
      "+ Блогеры: микро-инфлюенсеры, бартер + интеграции",
      "+ MAX: канал бренда, промо-посты",
      "+ Партнёрки банков: кэшбэк, рассрочки, ко-промо",
      "Membership «Клуб гладкой кожи» 2 900 ₽/мес",
    ],
    kpi: "Лидов/день 89 · ROMI (1-й мес) ≥ +241% · 1 072 продажи/мес",
  },
];

/* ---------- контрольные точки ---------- */
export const checkpoints = [
  { point: "Неделя 2", check: "Лендинги и карты", kpi: "Страницы live · 6/6 филиалов на Яндекс Картах, Google и 2ГИС", decision: "Запуск платного трафика" },
  { point: "Конец месяца 1", check: "Срез Фазы 1", kpi: "Лидов/день ≥ 45 · CPL ≤ 500 · CV клик→лид ≥ 10%", decision: "Масштаб в Фазу 2" },
  { point: "Конец месяца 3", check: "Срез Фазы 2", kpi: "Лидов/день ≥ 65 · органика ≥ 12% · retention ≥ 65%", decision: "Переход в Фазу 3" },
  { point: "Конец месяца 6", check: "Срез Фазы 3", kpi: "Лидов/день 89 · ROMI (1-й мес) ≥ +241%", decision: "Годовой план, 7-й филиал" },
  { point: "Конец месяца 12", check: "Годовой срез", kpi: "Лидов/день 89+ · выручка/филиал ≥ 625 000 · NPS ≥ 50", decision: "Масштабирование / франшиза" },
];

/* ---------- риски ---------- */
export const risks = [
  { risk: "Рост CPC в Директе", prob: "Высокая", impact: "Среднее", mitigation: "Доля Директа — 31% бюджета; диверсификация на карты, Авито, органику; работа с LTV" },
  { risk: "CR лид → приход ниже 40%", prob: "Высокая", impact: "Высокое", mitigation: "Скрипты админов, напоминания за 24 ч, предоплата-бронь слотов, контроль доходимости" },
  { risk: "Ужесточение модерации мед. услуг", prob: "Высокая", impact: "Высокое", mitigation: "Лицензии всех филиалов в объявлениях; без обещаний «навсегда»; юрист на креативах" },
  { risk: "Сезонность: спад май–июль", prob: "Высокая", impact: "Среднее", mitigation: "Pivot на M22, RSL и косметологию; акции «Summer Ready»" },
  { risk: "Зависимость от геосервисов (Карты, 2ГИС)", prob: "Средняя", impact: "Среднее", mitigation: "Google Maps-органика, SEO, своя база (Telegram-клуб), партнёрки банков" },
  { risk: "Агрессия конкурентов", prob: "Средняя", impact: "Среднее", mitigation: "Бренд-защита в Директе, отзывы на картах, УТП (Candela + Deka Moveo)" },
];

/* ---------- детали каналов ---------- */
export const channelDetails = [
  { channel: "Яндекс Карты", actions: "Приоритетное размещение, сбор отзывов (SMS после процедуры), фото, кнопка записи", result: "687 лидов/мес · CPL 189 ₽" },
  { channel: "2ГИС", actions: "Размещение, отзывы, кнопка записи, акции", result: "197 лидов/мес · CPL 457 ₽" },
  { channel: "Google Maps · органика", actions: "Заполненные профили, отзывы, фото, категории — без бюджета", result: "38 лидов/мес · 0 ₽" },
  { channel: "Яндекс Директ", actions: "Горячий поиск, зоны (бикини, ноги, подмышки, лицо), аппараты, ретаргетинг", result: "340 лидов/мес · CPL 1 000 ₽" },
  { channel: "ВКонтакте", actions: "Лид-формы + сторис (оффер → преимущества → CTA), парсинг групп шугаринга", result: "129 лидов/мес" },
  { channel: "Instagram / SMM", actions: "Reels 3/нед, сторис ежедневно, highlights, коллабы с блогерами", result: "125 лидов/мес" },
  { channel: "Telegram", actions: "Канал-клуб, горящие слоты, реферальная механика", result: "50 лидов/мес" },
  { channel: "Авито", actions: "3 объявления: «от 990 ₽», «александрит Candela», «мужская»", result: "320 лидов/мес · CPL 125 ₽" },
  { channel: "SEO / контент", actions: "10 статей/мес, лендинги под недостающие кластеры ядра", result: "180 лидов/мес" },
  { channel: "ПроДокторов", actions: "Премиум-размещение, карточки врачей, отзывы", result: "90 лидов/мес" },
  { channel: "Яндекс Медицина", actions: "Профили клиник, карточки врачей, отзывы, акции", result: "200 лидов/мес · CPL 250 ₽" },
  { channel: "Блогеры", actions: "Микро-инфлюенсеры, бартер + платные интеграции", result: "200 лидов/мес · CPL 400 ₽" },
  { channel: "MAX", actions: "Канал бренда, промо-посты, горящие окна", result: "25 лидов/мес" },
  { channel: "Партнёрки банков", actions: "Кэшбэк-офферы, рассрочки на курс, ко-промо", result: "100 лидов/мес · CPL 200 ₽" },
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
  "2 681 лид в месяц",
  "89 лидов в день на сеть",
  "~15 лидов на филиал",
  "конверсия в приход 40%",
  "36 продаж в день",
  "Бюджет — 1 100 000 ₽/мес",
  "CPL — 410 ₽",
  "CAC — 1 026 ₽",
  "ROMI (1-й месяц) — +241%",
  "Выручка — 3 752 000 ₽/мес",
  "6 филиалов · Москва",
];

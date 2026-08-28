/* ============================================================
   EPILATE-ME · Маркетинг-стратегия 2026–2027
   Данные: Директ (август 2026) + семантическое ядро
   ============================================================ */

export const fmt = (n: number, digits = 0): string =>
  new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: digits,
    minimumFractionDigits: 0,
  }).format(n);

/* ---------- обложка ---------- */
export const coverStats = [
  { label: "Бюджет · Фаза 3", value: 281000, prefix: "", suffix: " ₽/мес", note: "целевой месяц, 8 каналов" },
  { label: "Средний CAC (план)", value: 2097, prefix: "", suffix: " ₽", note: "безубыточность 16 000 ₽ · запас ×7.6" },
  { label: "ROMI по LTV", value: 663, prefix: "+", suffix: "%", note: "LTV-маржа 16 000 ₽ / клиент" },
  { label: "Органика к 12 мес", value: 35, prefix: "", suffix: "%", note: "сейчас ~5% · SMM + SEO + карты" },
];

export const goals = [
  {
    horizon: "Цель · 6 месяцев",
    points: ["6–8 заявок в день", "ROMI(LTV) +600%", "Органика 25% заявок"],
  },
  {
    horizon: "Цель · 12 месяцев",
    points: ["12 заявок в день", "Выручка 400 000+ ₽/мес на филиал", "Органика 35%"],
  },
];

export const keyDecisions = [
  "Отключить РСЯ — look-alike дал 0 конверсий при сливе 922 ₽/мес",
  "Фокус на Поиске и Картах — самые горячие и дешёвые заявки",
  "Мужской сегмент — отдельная кампания и посадочная",
  "Membership «Клуб гладкой кожи» + реферальная программа",
  "Органический SMM: Reels, Telegram-клуб, горящие слоты",
  "Закрыть дыры в посадочных: 5 новых лендингов под кластеры ядра",
];

export const fileStructure: { sheet: string; content: string; tab: number }[] = [
  { sheet: "Дашборд", content: "Цели по горизонтам + KPI с красными линиями", tab: 1 },
  { sheet: "Юнит-экономика", content: "Экономика одного клиента, LTV, безубыточность", tab: 2 },
  { sheet: "Медиаплан", content: "8 каналов: бюджеты, клики, CPA, CAC, ROMI", tab: 3 },
  { sheet: "Воронка", content: "Показы → клики → заявки → клиенты → процедуры", tab: 4 },
  { sheet: "ROMI", content: "ROMI по каналам + сценарии (база / пессимист)", tab: 5 },
  { sheet: "Roadmap", content: "Фазы 0–3 с бюджетами и KPI выхода", tab: 6 },
  { sheet: "Контрольные точки", content: "Даты срезов и управленческие решения", tab: 7 },
  { sheet: "Риски", content: "Риски и митигация", tab: 8 },
  { sheet: "Детали каналов", content: "Действия и ожидаемый результат по каналам", tab: 9 },
  { sheet: "Приложение", content: "Минус-слова по группам для Поиска", tab: 10 },
];

/* ---------- дашборд ---------- */
export const horizons = [
  { metric: "Заявок / день", now: "1.5", m3: "4.0", m6: "6–8", m12: "12" },
  { metric: "Заявок / месяц", now: "45", m3: "120", m6: "180–240", m12: "360" },
  { metric: "CPA (макро), ₽", now: "520–600", m3: "≤ 800", m6: "≤ 900", m12: "≤ 1 000" },
  { metric: "Выручка / мес на филиал, ₽", now: "~80 000", m3: "150 000", m6: "250 000", m12: "400 000+" },
  { metric: "Доля органики", now: "~5%", m3: "15%", m6: "25%", m12: "35%" },
  { metric: "Retention (2-я процедура)", now: "~50%", m3: "65%", m6: "75%", m12: "85%" },
  { metric: "LTV клиента, ₽", now: "16 000", m3: "25 000", m6: "35 000", m12: "45 000" },
  { metric: "ROMI (LTV)", now: "~+400%", m3: "+600%", m6: "+800%", m12: "+1 000%" },
];

export const growth = [
  { label: "Сейчас", value: "1.5", h: 12.5 },
  { label: "3 мес", value: "4", h: 33.3 },
  { label: "6 мес", value: "6–8", h: 58.3 },
  { label: "12 мес", value: "12", h: 100 },
];

export const kpiControl = [
  { metric: "CPA (макро)", target: "≤ 2 000 ₽", red: "> 3 500 ₽", freq: "еженедельно" },
  { metric: "CR сайта", target: "≥ 12%", red: "< 8%", freq: "еженедельно" },
  { metric: "Доходимость до процедуры", target: "≥ 60%", red: "< 45%", freq: "еженедельно" },
  { metric: "Retention (2-я процедура)", target: "≥ 70%", red: "< 55%", freq: "ежемесячно" },
  { metric: "LTV / CAC", target: "≥ 5", red: "< 3", freq: "ежемесячно" },
  { metric: "NPS", target: "≥ 50", red: "< 30", freq: "ежемесячно" },
  { metric: "Загрузка оборудования", target: "75–85%", red: "< 50% или > 95%", freq: "ежемесячно" },
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
  { param: "Фактический CAC (план)", value: "~2 100 ₽", comment: "запас прочности ×7.6" },
  { param: "CR заявка → клиент", value: "50%", comment: "скрипты админов" },
];

/* ---------- медиаплан ---------- */
export type MediaChannel = {
  name: string;
  budget: number;
  impressions: number;
  ctr: string;
  clicks: number;
  cpc: number;
  cr: string;
  leads: number;
  cpa: number;
  clients: number;
  cac: number;
  romi: number;
};

export const mediaChannels: MediaChannel[] = [
  { name: "Яндекс Директ · Поиск", budget: 90000, impressions: 75000, ctr: "1.0%", clicks: 750, cpc: 120, cr: "20%", leads: 150, cpa: 600, clients: 75, cac: 1200, romi: 1233 },
  { name: "Яндекс Карты · 3 филиала", budget: 36000, impressions: 60000, ctr: "0.8%", clicks: 480, cpc: 75, cr: "5.5%", leads: 26, cpa: 1385, clients: 13, cac: 2769, romi: 478 },
  { name: "2ГИС · 2 филиала", budget: 20000, impressions: 30000, ctr: "0.7%", clicks: 210, cpc: 95, cr: "5%", leads: 11, cpa: 1818, clients: 6, cac: 3333, romi: 380 },
  { name: "ВКонтакте · таргет + органика", budget: 45000, impressions: 150000, ctr: "0.8%", clicks: 1200, cpc: 38, cr: "2.5%", leads: 30, cpa: 1500, clients: 15, cac: 3000, romi: 433 },
  { name: "Авито", budget: 15000, impressions: 40000, ctr: "1.5%", clicks: 600, cpc: 25, cr: "2.5%", leads: 15, cpa: 1000, clients: 8, cac: 1875, romi: 753 },
  { name: "ПроДокторов", budget: 35000, impressions: 20000, ctr: "1.0%", clicks: 200, cpc: 175, cr: "8%", leads: 16, cpa: 2188, clients: 8, cac: 4375, romi: 266 },
  { name: "SEO / контент / видео", budget: 20000, impressions: 15000, ctr: "2.0%", clicks: 300, cpc: 67, cr: "4%", leads: 12, cpa: 1667, clients: 6, cac: 3333, romi: 380 },
  { name: "Микро-блогеры", budget: 20000, impressions: 100000, ctr: "0.3%", clicks: 300, cpc: 67, cr: "2%", leads: 6, cpa: 3333, clients: 3, cac: 6667, romi: 140 },
];

export const mediaTotal: MediaChannel = {
  name: "ИТОГО", budget: 281000, impressions: 490000, ctr: "0.82%", clicks: 4040, cpc: 69.6, cr: "6.6%", leads: 266, cpa: 1056, clients: 134, cac: 2097, romi: 663,
};

export const channelColors = ["#D4AF37", "#2A5178", "#EBD488", "#7FA0C2", "#3F7D5C", "#B08F26", "#5580AB", "#A8BFD8"];

/* ---------- воронка ---------- */
export const funnelStages = [
  { stage: "Показы", value: 490000, conv: null as string | null, note: "все каналы", width: 100 },
  { stage: "Клики", value: 4040, conv: "0.82%", note: "CPC средний 69.6 ₽", width: 62 },
  { stage: "Заявки", value: 266, conv: "6.6%", note: "CPA 1 056 ₽", width: 45 },
  { stage: "Клиенты", value: 134, conv: "50%", note: "CAC 2 097 ₽", width: 32 },
  { stage: "Процедуры · 1-й месяц", value: 201, conv: "×1.5", note: "выручка 469 000 ₽", width: 24 },
  { stage: "Процедуры · LTV 12 мес", value: 938, conv: "×7", note: "LTV-выручка когорты 3.28 млн ₽", width: 17 },
];

export const cohortEconomics = [
  { label: "Маржа 1-го месяца", formula: "134 × 1.5 × 2 100", value: 422100, suffix: " ₽" },
  { label: "ROMI 1-го месяца", formula: "(422 100 − 281 000) / 281 000", value: 50, suffix: "%", prefix: "+" },
  { label: "LTV-маржа когорты · 12 мес", formula: "134 × 16 000", value: 2144000, suffix: " ₽" },
  { label: "ROMI по LTV", formula: "(2 144 000 − 281 000) / 281 000", value: 663, suffix: "%", prefix: "+" },
];

/* ---------- ROMI ---------- */
export const scenarios = [
  { id: "base", name: "База", desc: "план Фазы 3", budget: 281000, clients: 134, ltv: 16000, romi: "+663%" },
  { id: "pess", name: "Пессимист", desc: "CR 40% · LTV 12 000", budget: 281000, clients: 106, ltv: 12000, romi: "+353%" },
  { id: "be", name: "Безубыточность", desc: "предельный CAC", budget: 0, clients: 0, ltv: 16000, romi: "0%" },
];

/* ---------- roadmap ---------- */
export const phases = [
  {
    phase: "Фаза 0", period: "недели 1–2", budget: "~50 000 ₽",
    actions: [
      "Отключить РСЯ look-alike (0 конверсий, слив 922 ₽/мес)",
      "Коллтрекинг + UTM-разметка + цели Метрики",
      "5 лендингов: губы, M22, мужская электроэпиляция, средняя треть, Красногорск",
      "Верификация 9 филиалов на Яндекс Картах",
      "Скрипты админов на обработку заявок",
    ],
    kpi: "Расход РСЯ = 0 · аналитика собирается · страницы live",
  },
  {
    phase: "Фаза 1", period: "месяц 1", budget: "150 000 ₽/мес",
    actions: [
      "Масштаб Директа ×3: горячие + зоны + мужская кампания",
      "Приоритетное размещение на Картах (3 филиала)",
      "Запуск 2ГИС (2 филиала)",
      "Ретаргетинг «Не купили» +50%",
      "Look-alike по клиентской базе +20%",
    ],
    kpi: "Заявок/день ≥ 3.5 · CPA ≤ 800 ₽",
  },
  {
    phase: "Фаза 2", period: "месяцы 2–3", budget: "225 000 ₽/мес",
    actions: [
      "+ ВКонтакте: лид-формы, сторис",
      "+ Авито: 3 объявления",
      "SMM: Instagram / VK / Telegram",
      "Реферальная программа «Приведи подругу»",
      "Автоматизация записи в YCLIENTS",
    ],
    kpi: "Заявок/день ≥ 5 · органика ≥ 15% · retention ≥ 65%",
  },
  {
    phase: "Фаза 3", period: "месяцы 4–6", budget: "281 000 ₽/мес",
    actions: [
      "+ ПроДокторов: премиум-размещение",
      "+ Микро-блогеры",
      "SEO-контент: 10 статей/мес",
      "Membership «Клуб гладкой кожи» 2 900 ₽/мес",
      "Corporate wellness для офисов",
    ],
    kpi: "Заявок/день 6–8 · ROMI(LTV) ≥ +600% · LTV ≥ 35 000 ₽",
  },
];

/* ---------- контрольные точки ---------- */
export const checkpoints = [
  { point: "Неделя 1", check: "РСЯ отключена, аналитика", kpi: "Расход РСЯ = 0 · цели пишутся", decision: "Переход к Фазе 1" },
  { point: "Неделя 2", check: "Лендинги и Карты", kpi: "5 страниц live · 9/9 филиалов верифицированы", decision: "Запуск платного трафика" },
  { point: "Конец месяца 1", check: "Срез Фазы 1", kpi: "Заявок/день ≥ 3.5 · CPA ≤ 800 · CR сайта ≥ 12%", decision: "Масштаб в Фазу 2" },
  { point: "Конец месяца 3", check: "Срез Фазы 2", kpi: "Заявок/день ≥ 5 · органика ≥ 15% · retention ≥ 65%", decision: "Переход в Фазу 3" },
  { point: "Конец месяца 6", check: "Срез Фазы 3", kpi: "Заявок/день 6–8 · ROMI(LTV) ≥ +600%", decision: "Годовой план, 10-й филиал" },
  { point: "Конец месяца 12", check: "Годовой срез", kpi: "Заявок/день 12 · выручка/филиал ≥ 400К · NPS ≥ 50", decision: "Масштабирование / франшиза" },
];

/* ---------- риски ---------- */
export const risks = [
  { risk: "Рост CPC в Директе", prob: "Высокая", impact: "Среднее", mitigation: "Диверсификация каналов (органика до 35%), работа с LTV и retention" },
  { risk: "Ужесточение модерации мед. услуг", prob: "Высокая", impact: "Высокое", mitigation: "Лицензии всех филиалов в объявлениях; без обещаний «навсегда»; юрист на креативах" },
  { risk: "Сезонность: спад май–июль", prob: "Высокая", impact: "Среднее", mitigation: "Pivot на M22, RSL и косметологию; акции «Summer Ready»" },
  { risk: "Кассовый разрыв при масштабировании", prob: "Средняя", impact: "Высокое", mitigation: "Предоплата курсов, membership, абонементы «6 по цене 5»" },
  { risk: "Уход ключевого специалиста", prob: "Средняя", impact: "Высокое", mitigation: "KPI + бонусы, документирование процессов и регламентов" },
  { risk: "Агрессия конкурентов", prob: "Средняя", impact: "Среднее", mitigation: "Бренд-защита в Директе, отзывы на Картах, УТП (Candela + Deka Moveo)" },
];

/* ---------- детали каналов ---------- */
export const channelDetails = [
  { channel: "Яндекс Директ", actions: "Горячий поиск в кавычках ×3; мужская кампания; зоны (бикини, ноги, подмышки, лицо); аппараты (Candela/Deka); ретаргетинг", result: "150 заявок/мес · CPA 600 ₽" },
  { channel: "Карты / 2ГИС", actions: "Приоритетное размещение, сбор отзывов (SMS после процедуры), фото, кнопка записи", result: "50 + 18 заявок/мес" },
  { channel: "ВКонтакте", actions: "Лид-формы + сторис (оффер → преимущества → CTA), парсинг групп шугаринга", result: "30 заявок/мес" },
  { channel: "Instagram · органика", actions: "Reels 3/нед, сторис ежедневно, highlights, коллабы с микро-блогерами", result: "35 заявок/мес" },
  { channel: "Telegram", actions: "Канал-клуб, горящие слоты, реферальная механика", result: "18 заявок/мес" },
  { channel: "SEO / Дзен", actions: "10 статей/мес, лендинги под недостающие кластеры ядра", result: "30 заявок/мес" },
  { channel: "Авито", actions: "3 объявления: «от 990 ₽», «александрит Candela», «мужская»", result: "15–18 заявок/мес" },
  { channel: "ПроДокторов", actions: "Премиум-размещение, карточки врачей, отзывы", result: "16 заявок/мес" },
  { channel: "Membership", actions: "«Клуб гладкой кожи» 2 900 ₽/мес: 1 процедура + скидка 20%", result: "50 членов к 6 мес · стабильный cash flow" },
  { channel: "Referral", actions: "«Приведи подругу — скидка 30%», 3 подруги = процедура бесплатно", result: "+10–15% заявок" },
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
  "Средний CAC — 2 097 ₽",
  "Безубыточный CAC — 16 000 ₽",
  "Запас прочности ×7.6",
  "266 заявок → 134 клиента в месяц",
  "Бюджет — 281 000 ₽/мес",
  "ROMI по LTV — +663%",
  "LTV клиента — до 45 000 ₽",
  "Органика → 35% к 12 мес",
  "9 филиалов · Москва",
  "NPS ≥ 50",
];

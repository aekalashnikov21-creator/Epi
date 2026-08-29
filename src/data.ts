/* ============================================================
   EPILATE-ME · Маркетинг-стратегия 2026–2027
   Сеть из 6 филиалов · Москва
   План: 120 лидов/день на сеть · конверсия в приход 40%
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
  budget: 3800000,
  budgetBranch: 633000,
  leadsDayNetwork: 120,
  leadsDayBranch: 20,
  clientsDayNetwork: 48,
  clientsDayBranch: 8,
  leadsMonth: 3600,
  clientsMonth: 1440,
  conv: 40,
  cpa: 1056,
  cac: 2639,
  romi: 506,
  romi1mo: 19,
  ltvMargin: 16000,
  safety: 6.1,
  rev1moBranch: 1260000,
  ltvMarginBranch: 3840000,
};

/* ---------- обложка ---------- */
export const coverStats = [
  { label: "Бюджет", value: 3800000, prefix: "", suffix: " ₽/мес", note: "8 каналов · 6 филиалов" },
  { label: "Лидов в день · сеть", value: 120, prefix: "", suffix: "", note: "по 20 на филиал" },
  { label: "Первичных клиентов · день", value: 48, prefix: "", suffix: "", note: "конверсия в приход 40%" },
  { label: "ROMI по LTV", value: 506, prefix: "+", suffix: "%", note: "LTV-маржа 16 000 ₽ / клиент" },
];

export const goals = [
  {
    horizon: "Цель · 6 месяцев",
    points: ["90 лидов в день на сеть", "36 первичных клиентов в день", "ROMI(LTV) +400%"],
  },
  {
    horizon: "Цель · 12 месяцев",
    points: ["120 лидов в день на сеть", "48 первичных клиентов в день", "Органика 35%"],
  },
];

export const fileStructure: { sheet: string; content: string; tab: number }[] = [
  { sheet: "Дашборд", content: "Целевые показатели и KPI с красными линиями", tab: 1 },
  { sheet: "Юнит-экономика", content: "Экономика одного клиента, LTV, безубыточность", tab: 2 },
  { sheet: "Медиаплан", content: "8 каналов: бюджеты, клики, CPA, CAC, ROMI", tab: 3 },
  { sheet: "Воронка", content: "Показы → клики → лиды → первичные клиенты → процедуры", tab: 4 },
  { sheet: "ROMI", content: "ROMI по каналам + сценарии (база / пессимист)", tab: 5 },
  { sheet: "Roadmap", content: "Фазы 0–3 с бюджетами и KPI выхода", tab: 6 },
  { sheet: "Контрольные точки", content: "Даты срезов и управленческие решения", tab: 7 },
  { sheet: "Риски", content: "Риски и митигация", tab: 8 },
  { sheet: "Детали каналов", content: "Действия и ожидаемый результат по каналам", tab: 9 },
  { sheet: "Приложение", content: "Минус-слова по группам для Поиска", tab: 10 },
];

/* ---------- дашборд ---------- */
export const horizons = [
  { metric: "Лидов / день · сеть", now: "~40", m3: "60", m6: "90", m12: "120" },
  { metric: "Лидов / день · 1 филиал", now: "~7", m3: "10", m6: "15", m12: "20" },
  { metric: "Первичных клиентов / день · сеть", now: "~16", m3: "24", m6: "36", m12: "48" },
  { metric: "Лидов / месяц · сеть", now: "~1 200", m3: "1 800", m6: "2 700", m12: "3 600" },
  { metric: "CR лид → приход", now: "~35%", m3: "38%", m6: "40%", m12: "40%" },
  { metric: "CPA (макро), ₽", now: "1 056", m3: "≤ 1 000", m6: "≤ 950", m12: "≤ 900" },
  { metric: "Выручка / мес на филиал, ₽", now: "~150 000", m3: "500 000", m6: "850 000", m12: "1 260 000+" },
  { metric: "Доля органики", now: "~5%", m3: "15%", m6: "25%", m12: "35%" },
  { metric: "LTV клиента, ₽", now: "16 000", m3: "25 000", m6: "35 000", m12: "45 000" },
  { metric: "ROMI (LTV)", now: "+400%", m3: "+450%", m6: "+400%", m12: "+500%" },
];

export const growth = [
  { label: "Сейчас", value: "~40", h: 33.3 },
  { label: "3 мес", value: "60", h: 50 },
  { label: "6 мес", value: "90", h: 75 },
  { label: "12 мес", value: "120", h: 100 },
];

export const kpiControl = [
  { metric: "CR лид → приход", target: "≥ 40%", red: "< 30%", freq: "еженедельно" },
  { metric: "CPA (макро)", target: "≤ 1 200 ₽", red: "> 2 000 ₽", freq: "еженедельно" },
  { metric: "Лидов / день · сеть", target: "≥ 120", red: "< 80", freq: "еженедельно" },
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
  { param: "Фактический CAC (план)", value: "~2 640 ₽", comment: "запас прочности ×6" },
  { param: "CR лид → первичный клиент", value: "40%", comment: "конверсия в фактический приход" },
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
  { name: "Яндекс Директ · Поиск", budget: 1216000, impressions: 1013000, ctr: "1.0%", clicks: 10150, cpc: 120, cr: "20%", leads: 2030, cpa: 600, clients: 812, cac: 1498, romi: 969 },
  { name: "Яндекс Карты · 3 филиала", budget: 487000, impressions: 812000, ctr: "0.8%", clicks: 6493, cpc: 75, cr: "5.4%", leads: 352, cpa: 1384, clients: 141, cac: 3454, romi: 363 },
  { name: "2ГИС · 2 филиала", budget: 270000, impressions: 408000, ctr: "0.7%", clicks: 2853, cpc: 95, cr: "5.2%", leads: 149, cpa: 1812, clients: 60, cac: 4500, romi: 255 },
  { name: "ВКонтакте · таргет + органика", budget: 609000, impressions: 2003000, ctr: "0.8%", clicks: 16026, cpc: 38, cr: "2.5%", leads: 406, cpa: 1500, clients: 162, cac: 3759, romi: 326 },
  { name: "Авито", budget: 203000, impressions: 541000, ctr: "1.5%", clicks: 8120, cpc: 25, cr: "2.5%", leads: 203, cpa: 1000, clients: 81, cac: 2506, romi: 538 },
  { name: "ПроДокторов", budget: 474000, impressions: 271000, ctr: "1.0%", clicks: 2709, cpc: 175, cr: "8%", leads: 216, cpa: 2194, clients: 86, cac: 5512, romi: 190 },
  { name: "SEO / контент / видео", budget: 270000, impressions: 202000, ctr: "2.0%", clicks: 4045, cpc: 67, cr: "4%", leads: 162, cpa: 1667, clients: 65, cac: 4154, romi: 284 },
  { name: "Микро-блогеры", budget: 271000, impressions: 1348000, ctr: "0.3%", clicks: 4045, cpc: 67, cr: "2%", leads: 82, cpa: 3305, clients: 33, cac: 8212, romi: 95 },
];

export const mediaTotal: MediaChannel = {
  name: "ИТОГО", budget: 3800000, impressions: 6598000, ctr: "0.82%", clicks: 54441, cpc: 69.8, cr: "6.6%", leads: 3600, cpa: 1056, clients: 1440, cac: 2639, romi: 506,
};

export const channelColors = ["#D4AF37", "#2A5178", "#EBD488", "#7FA0C2", "#3F7D5C", "#B08F26", "#5580AB", "#A8BFD8"];

/* ---------- воронка ---------- */
export const funnelStages = [
  { stage: "Показы", value: 6598000, conv: null as string | null, note: "все каналы", width: 100 },
  { stage: "Клики", value: 54441, conv: "0.82%", note: "CPC средний 69.8 ₽", width: 62 },
  { stage: "Лиды", value: 3600, conv: "6.6%", note: "CPA 1 056 ₽", width: 45 },
  { stage: "Первичные клиенты", value: 1440, conv: "40%", note: "CAC 2 639 ₽", width: 32 },
  { stage: "Процедуры · 1-й месяц", value: 2160, conv: "×1.5", note: "выручка 7 560 000 ₽", width: 24 },
  { stage: "Процедуры · LTV 12 мес", value: 10080, conv: "×7", note: "LTV-выручка когорты 35.3 млн ₽", width: 17 },
];

export const cohortEconomics = [
  { label: "Маржа 1-го месяца", formula: "1 440 × 1.5 × 2 100", value: 4536000, suffix: " ₽" },
  { label: "ROMI 1-го месяца", formula: "(4 536 000 − 3 800 000) / 3 800 000", value: 19, suffix: "%", prefix: "+" },
  { label: "LTV-маржа когорты · 12 мес", formula: "1 440 × 16 000", value: 23040000, suffix: " ₽" },
  { label: "ROMI по LTV", formula: "(23 040 000 − 3 800 000) / 3 800 000", value: 506, suffix: "%", prefix: "+" },
];

/* ---------- ROMI ---------- */
export const scenarios = [
  { id: "base", name: "База", desc: "план · CR 40%", budget: 3800000, clients: 1440, ltv: 16000, romi: "+506%" },
  { id: "pess", name: "Пессимист", desc: "CR 32% · LTV 12 000", budget: 3800000, clients: 1152, ltv: 12000, romi: "+264%" },
  { id: "be", name: "Безубыточность", desc: "предельный CAC", budget: 0, clients: 0, ltv: 16000, romi: "0%" },
];

/* ---------- roadmap ---------- */
export const phases = [
  {
    phase: "Фаза 0", period: "недели 1–2", budget: "~600 000 ₽",
    actions: [
      "Коллтрекинг + UTM-разметка + цели Метрики",
      "Лендинги под кластеры ядра (губы, M22, мужская, зоны)",
      "Верификация 6 филиалов на Яндекс Картах",
      "Скрипты админов на доведение лида до прихода (40%)",
    ],
    kpi: "Аналитика собирается · 6/6 филиалов верифицированы · страницы live",
  },
  {
    phase: "Фаза 1", period: "месяц 1", budget: "2 000 000 ₽/мес",
    actions: [
      "Масштаб Директа: горячие + зоны + мужская кампания",
      "Приоритетное размещение на Картах (3 филиала)",
      "Запуск 2ГИС (2 филиала)",
      "Ретаргетинг «Не дошли» + look-alike по базе",
    ],
    kpi: "Лидов/день ≥ 60 · CPA ≤ 1 050 ₽",
  },
  {
    phase: "Фаза 2", period: "месяцы 2–3", budget: "3 000 000 ₽/мес",
    actions: [
      "+ ВКонтакте: лид-формы, сторис",
      "+ Авито: 3 объявления",
      "SMM: Instagram / VK / Telegram",
      "Реферальная программа «Приведи подругу»",
      "Автоматизация записи в YCLIENTS",
    ],
    kpi: "Лидов/день ≥ 90 · органика ≥ 15% · retention ≥ 65%",
  },
  {
    phase: "Фаза 3", period: "месяцы 4–6", budget: "3 800 000 ₽/мес",
    actions: [
      "+ ПроДокторов: премиум-размещение",
      "+ Микро-блогеры",
      "SEO-контент: 10 статей/мес",
      "Membership «Клуб гладкой кожи» 2 900 ₽/мес",
      "Corporate wellness для офисов",
    ],
    kpi: "Лидов/день 120 · ROMI(LTV) ≥ +500% · LTV ≥ 35 000",
  },
];

/* ---------- контрольные точки ---------- */
export const checkpoints = [
  { point: "Неделя 2", check: "Лендинги и Карты", kpi: "Страницы live · 6/6 филиалов верифицированы · цели пишутся", decision: "Запуск платного трафика" },
  { point: "Конец месяца 1", check: "Срез Фазы 1", kpi: "Лидов/день ≥ 60 · CPA ≤ 1 050 · CR лид→приход ≥ 35%", decision: "Масштаб в Фазу 2" },
  { point: "Конец месяца 3", check: "Срез Фазы 2", kpi: "Лидов/день ≥ 90 · органика ≥ 15% · retention ≥ 65%", decision: "Переход в Фазу 3" },
  { point: "Конец месяца 6", check: "Срез Фазы 3", kpi: "Лидов/день 120 · ROMI(LTV) ≥ +500%", decision: "Годовой план, 7-й филиал" },
  { point: "Конец месяца 12", check: "Годовой срез", kpi: "Лидов/день 120+ · выручка/филиал ≥ 1.26 млн · NPS ≥ 50", decision: "Масштабирование / франшиза" },
];

/* ---------- риски ---------- */
export const risks = [
  { risk: "Рост CPC в Директе", prob: "Высокая", impact: "Среднее", mitigation: "Диверсификация каналов (органика до 35%), работа с LTV и retention" },
  { risk: "Ужесточение модерации мед. услуг", prob: "Высокая", impact: "Высокое", mitigation: "Лицензии всех филиалов в объявлениях; без обещаний «навсегда»; юрист на креативах" },
  { risk: "CR лид → приход ниже 40%", prob: "Высокая", impact: "Высокое", mitigation: "Скрипты админов, напоминания за 24 ч, предоплата-бронь slots, контроль доходимости" },
  { risk: "Сезонность: спад май–июль", prob: "Высокая", impact: "Среднее", mitigation: "Pivot на M22, RSL и косметологию; акции «Summer Ready»" },
  { risk: "Кассовый разрыв при масштабировании", prob: "Средняя", impact: "Высокое", mitigation: "Предоплата курсов, membership, абонементы «6 по цене 5»" },
  { risk: "Агрессия конкурентов", prob: "Средняя", impact: "Среднее", mitigation: "Бренд-защита в Директе, отзывы на Картах, УТП (Candela + Deka Moveo)" },
];

/* ---------- детали каналов ---------- */
export const channelDetails = [
  { channel: "Яндекс Директ", actions: "Горячий поиск в кавычках; мужская кампания; зоны (бикини, ноги, подмышки, лицо); аппараты (Candela/Deka); ретаргетинг", result: "2 030 лидов/мес · CPA 600 ₽" },
  { channel: "Карты / 2ГИС", actions: "Приоритетное размещение, сбор отзывов (SMS после процедуры), фото, кнопка записи", result: "501 лид/мес" },
  { channel: "ВКонтакте", actions: "Лид-формы + сторис (оффер → преимущества → CTA), парсинг групп шугаринга", result: "406 лидов/мес" },
  { channel: "Instagram · органика", actions: "Reels 3/нед, сторис ежедневно, highlights, коллабы с микро-блогерами", result: "органика растёт с 4 мес" },
  { channel: "Telegram", actions: "Канал-клуб, горящие слоты, реферальная механика", result: "часть органики 35%" },
  { channel: "SEO / Дзен", actions: "10 статей/мес, лендинги под недостающие кластеры ядра", result: "162 лида/мес" },
  { channel: "Авито", actions: "3 объявления: «от 990 ₽», «александрит Candela», «мужская»", result: "203 лида/мес" },
  { channel: "ПроДокторов", actions: "Премиум-размещение, карточки врачей, отзывы", result: "216 лидов/мес" },
  { channel: "Membership", actions: "«Клуб гладкой кожи» 2 900 ₽/мес: 1 процедура + скидка 20%", result: "стабильный cash flow" },
  { channel: "Referral", actions: "«Приведи подругу — скидка 30%», 3 подруги = процедура бесплатно", result: "+10–15% лидов" },
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
  "120 лидов в день на сеть",
  "по 20 лидов на филиал",
  "конверсия в приход 40%",
  "48 первичных клиентов в день",
  "3 600 лидов в месяц",
  "Бюджет — 3 800 000 ₽/мес",
  "Средний CAC — 2 639 ₽",
  "ROMI по LTV — +506%",
  "LTV клиента — до 45 000 ₽",
  "6 филиалов · Москва",
];

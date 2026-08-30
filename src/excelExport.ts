import ExcelJS from "exceljs";
import {
  branches,
  channelDetails,
  checkpoints,
  cohortEconomics,
  doNotNegate,
  fileStructure,
  funnelStages,
  goals,
  horizons,
  kpiControl,
  mediaChannels,
  mediaTotal,
  negativeGroups,
  phases,
  risks,
  scenarios,
  tickerItems,
  unitEconomics,
  fmt,
} from "./data";

/* ---------- фирменная палитра (как на сайте) ---------- */
const TITLE_BG = "FF4A3826"; // тёмный кофе — плашка заголовка
const HEAD_BG = "FF6E5334"; // глубокая бронза — шапки таблиц
const ZEBRA_BG = "FFF4EDE1"; // тёплый зебра-фон строк
const LIGHT_BG = "FFF8F2E8"; // бумага
const PAPER_TX = "FFFDFBF7"; // светлый текст
const INK_TX = "FF1E2430"; // основной тёмный текст
const MUTED_TX = "FF8C7B62"; // вторичный текст
const BRONZE_TX = "FF8A6A42"; // акцентный текст
const RED_TX = "FF8C2F24";
const GREEN_TX = "FF244E38";
const BORDER = "FFDCCDB4";

const thin = { style: "thin" as const, color: { argb: BORDER } };
const bord = { top: thin, bottom: thin, left: thin, right: thin };
const F_BODY = "Calibri";

type Cell = string | number;

function colWidths(ws: ExcelJS.Worksheet, widths: number[]) {
  widths.forEach((w, i) => {
    ws.getColumn(i + 1).width = w;
  });
}

/* Заголовок листа: тёмная плашка + подзаголовок */
function title(ws: ExcelJS.Worksheet, text: string, sub?: string): number {
  ws.views = [{ showGridLines: false }];
  ws.mergeCells("A1:L1");
  const c = ws.getCell("A1");
  c.value = text;
  c.font = { name: F_BODY, size: 18, bold: true, color: { argb: PAPER_TX } };
  c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: TITLE_BG } };
  c.alignment = { horizontal: "left", vertical: "middle" };
  ws.getRow(1).height = 34;
  if (sub) {
    ws.mergeCells("A2:L2");
    const s = ws.getCell("A2");
    s.value = sub;
    s.font = { name: F_BODY, size: 11, italic: true, color: { argb: MUTED_TX } };
    s.alignment = { vertical: "middle", wrapText: true };
    ws.getRow(2).height = 26;
  }
  return 4;
}

/* Блок: необязательный заголовок секции + таблица с шапкой */
function block(
  ws: ExcelJS.Worksheet,
  row: number,
  head: string | null,
  headers: string[],
  rows: Cell[][],
  widths: number[],
  opts: { note?: string; totalLast?: boolean; zebra?: boolean; alignRight?: number[] } = {}
): number {
  if (head) {
    const h = ws.getCell(row, 1);
    h.value = head;
    h.font = { name: F_BODY, size: 13, bold: true, color: { argb: BRONZE_TX } };
    row += 1;
  }
  colWidths(ws, widths);
  headers.forEach((txt, i) => {
    const cell = ws.getCell(row, i + 1);
    cell.value = txt;
    cell.font = { name: F_BODY, size: 10.5, bold: true, color: { argb: PAPER_TX } };
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: HEAD_BG } };
    cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
    cell.border = bord;
  });
  ws.getRow(row).height = 24;
  row += 1;

  const last = rows.length - 1;
  rows.forEach((r, ri) => {
    const isTotal = opts.totalLast && ri === last;
    r.forEach((v, ci) => {
      const cell = ws.getCell(row, ci + 1);
      cell.value = v;
      cell.border = bord;
      cell.alignment = {
        horizontal: opts.alignRight?.includes(ci) ? "right" : "left",
        vertical: "top",
        wrapText: true,
      };
      if (isTotal) {
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: HEAD_BG } };
        cell.font = { name: F_BODY, size: 10.5, bold: true, color: { argb: PAPER_TX } };
      } else {
        if (opts.zebra && ri % 2 === 1) {
          cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: ZEBRA_BG } };
        }
        cell.font = {
          name: F_BODY,
          size: 10.5,
          bold: ci === 0,
          color: { argb: ci === 0 ? INK_TX : "FF3D3428" },
        };
      }
    });
    row += 1;
  });

  if (opts.note) {
    row += 1;
    const n = ws.getCell(row, 1);
    n.value = opts.note;
    n.font = { name: F_BODY, size: 10, italic: true, color: { argb: MUTED_TX } };
    n.alignment = { wrapText: true };
    row += 1;
  }
  return row + 2;
}

/* ================= СБОРКА КНИГИ ================= */
export async function downloadExcel(): Promise<void> {
  const wb = new ExcelJS.Workbook();
  wb.creator = "Epilate-Me";
  wb.lastModifiedBy = "Epilate-Me";
  wb.modified = new Date();

  /* ---------- 1. ОБЛОЖКА ---------- */
  let ws = wb.addWorksheet("1. Обложка");
  let r = title(
    ws,
    "МАРКЕТИНГ-СТРАТЕГИЯ EPILATE-ME 2026–2027",
    "Сеть клиник лазерной эпиляции и косметологии · Москва, 6 филиалов · план: 84 лида в день на сеть, конверсия в приход 40%"
  );
  r = block(
    ws, r, "СТРАТЕГИЯ В ЦИФРАХ",
    ["Параметр", "Значение"],
    [
      ["Медиабюджет", "1 100 000 ₽/мес · 14 каналов"],
      ["Лидов в день · сеть", "84 (по 14 на филиал)"],
      ["Продаж в день · сеть", "34 (по 5.6 на филиал, конверсия в приход 40%)"],
      ["Лидов / продаж в месяц", "2 521 / 1 008"],
      ["Выручка 1-го месяца", "3 528 000 ₽"],
      ["ROMI 1-го месяца", "+221% (по LTV-марже когорты +1 366%)"],
      ["LTV-маржа когорты · 12 мес", "16 128 000 ₽ · 1 008 × 16 000"],
      ["CPL / media-CAC", "436 ₽ / 1 091 ₽ · безубыточный CAC 16 000 ₽ (запас ×14.7)"],
    ],
    [34, 96],
    { zebra: true }
  );
  r = block(
    ws, r, "ЦЕЛИ ПО ГОРИЗОНТАМ",
    ["Горизонт", "Цели"],
    goals.map((g) => [g.horizon, g.points.join(" · ")]),
    [26, 104],
    { zebra: true }
  );
  r = block(
    ws, r, "СЕТЬ · 6 ФИЛИАЛОВ В МОСКВЕ",
    ["Метро / район", "Адрес"],
    branches.map((b) => [b.metro, `Москва, ${b.address}`]),
    [22, 108],
    { zebra: true }
  );
  r = block(
    ws, r, "СТРУКТУРА ФАЙЛА",
    ["Лист", "Содержание"],
    fileStructure.map((f) => [f.sheet, f.content]),
    [26, 104],
    { zebra: true }
  );

  /* ---------- 2. ДАШБОРД ---------- */
  ws = wb.addWorksheet("2. Дашборд");
  r = title(ws, "ДАШБОРД", "Целевые показатели и KPI");
  r = block(
    ws, r, "ЦЕЛИ ПО ГОРИЗОНТАМ",
    ["Метрика", "Сейчас", "3 мес", "6 мес", "12 мес"],
    horizons.map((h) => [h.metric, h.now, h.m3, h.m6, h.m12]),
    [34, 16, 14, 14, 16],
    { zebra: true, alignRight: [1, 2, 3, 4] }
  );
  r = block(
    ws, r, "KPI-КОНТРОЛЬ (КРАСНЫЕ ЛИНИИ)",
    ["Метрика", "Цель", "Красная линия", "Частота"],
    kpiControl.map((k) => [k.metric, k.target, k.red, k.freq]),
    [34, 18, 22, 16],
    { zebra: true }
  );

  /* ---------- 3. ЮНИТ-ЭКОНОМИКА ---------- */
  ws = wb.addWorksheet("3. Юнит-экономика");
  r = title(ws, "ЮНИТ-ЭКОНОМИКА ОДНОГО КЛИЕНТА", "База для всех расчётов ROMI и CAC");
  r = block(
    ws, r, null,
    ["Параметр", "Значение", "Комментарий / формула"],
    unitEconomics.map((u) => [u.param, u.value, u.comment]),
    [36, 22, 72],
    { zebra: true }
  );
  /* ---------- 4. МЕДИАПЛАН ---------- */
  ws = wb.addWorksheet("4. Медиаплан");
  r = title(
    ws,
    "МЕДИАПЛАН (ЦЕЛЕВОЙ МЕСЯЦ)",
    "1 100 000 ₽/мес → 2 521 лид → 1 008 продаж (конверсия в приход 40%) · ROMI = (выручка − бюджет) / бюджет"
  );
  r = block(
    ws, r, null,
    ["Канал", "Бюджет, ₽", "Клики", "CPC, ₽", "CV клик→лид", "Лиды", "CPL, ₽", "Продажи (40%)", "Выручка, ₽", "ROMI"],
    [
      ...mediaChannels.map((c) => [
        c.name, c.budget, c.clicks, c.cpc, c.cv, c.leads,
        c.organic ? 0 : c.cpl, c.sales, c.revenue, c.organic ? "органика" : `+${fmt(c.romi)}%`,
      ] as Cell[]),
      [
        mediaTotal.name, mediaTotal.budget, mediaTotal.clicks, mediaTotal.cpc, mediaTotal.cv,
        mediaTotal.leads, mediaTotal.cpl, mediaTotal.sales, mediaTotal.revenue, `+${fmt(mediaTotal.romi)}%`,
      ] as Cell[],
    ],
    [28, 13, 10, 9, 12, 9, 9, 14, 13, 11],
    { totalLast: true, zebra: true, alignRight: [1, 2, 3, 4, 5, 6, 7, 8, 9], note: "Авито посчитан консервативно: фактическая конверсия клик→лид ~6% (вдвое ниже паспортной). Google Maps (органика) работает без бюджета — 38 лидов в месяц даёт заполненный профиль с отзывами. Лучшие CPL: Яндекс Карты 189 ₽, партнёрки банков и Яндекс Медицина 250 ₽." }
  );

  /* ---------- 5. ВОРОНКА ---------- */
  ws = wb.addWorksheet("5. Воронка");
  r = title(ws, "ПОЛНАЯ МАРКЕТИНГОВАЯ ВОРОНКА", "Целевой месяц · путь от клика до LTV-маржи когорты");
  r = block(
    ws, r, null,
    ["Этап воронки", "Значение", "Конверсия", "Комментарий"],
    funnelStages.map((s) => [s.stage, s.value, s.conv ?? "100%", s.note]),
    [30, 16, 20, 54],
    { zebra: true, alignRight: [1] }
  );
  r = block(
    ws, r, "ЭКОНОМИКА КОГОРТЫ · 1 072 ПЕРВИЧНЫХ КЛИЕНТА",
    ["Показатель", "Расчёт", "Значение"],
    cohortEconomics.map((c) => [
      c.label,
      c.formula,
      `${"prefix" in c ? c.prefix : ""}${fmt(c.value)}${c.suffix}`,
    ]),
    [34, 42, 24],
    { zebra: true }
  );
  r = block(
    ws, r, "ЭКОНОМИКА ОДНОГО ФИЛИАЛА · В МЕСЯЦ",
    ["Показатель", "Значение", "Расчёт"],
    [
      ["Лидов в день", "14", "420 в месяц"],
      ["Первичных клиентов", "168", "5.6/день · конверсия 40%"],
      ["Выручка 1-го месяца", "588 000 ₽", "168 × 3 500"],
      ["LTV-маржа · 12 мес", "2 688 000 ₽", "168 × 16 000"],
    ],
    [34, 20, 46],
    {
      zebra: true,
      note: "Бюджет на филиал — ~183 000 ₽/мес (1 100 000 ₽ на сеть из 6 филиалов). Умножьте на 6 — получите 84 лида и 34 продажи в день на всю сеть.",
    }
  );

  /* ---------- 6. ROMI ---------- */
  ws = wb.addWorksheet("6. ROMI");
  r = title(ws, "ROMI: РАСЧЁТЫ И СЦЕНАРИИ", "ROMI = (выручка − бюджет) / бюджет · выручка = продажи × 3 500 ₽");
  r = block(
    ws, r, "ROMI ПО КАНАЛАМ (ПО УБЫВАНИЮ)",
    ["Канал", "Бюджет, ₽", "Продажи", "Выручка, ₽", "ROMI"],
    [...mediaChannels]
      .sort((a, b) => (b.organic ? -1 : b.romi) - (a.organic ? -1 : a.romi))
      .map((c) => [c.name, c.budget, c.sales, c.revenue, c.organic ? "органика · 0 ₽" : `+${fmt(c.romi)}%`]),
    [30, 14, 11, 14, 16],
    { zebra: true, alignRight: [1, 2, 3, 4] }
  );
  r = block(
    ws, r, "СЦЕНАРИИ",
    ["Сценарий", "Бюджет", "Продажи", "Средний чек", "Выручка", "ROMI"],
    scenarios.map((s) =>
      s.id === "be"
        ? ["Безубыточность", "1 100 000", "314 (CR 12.5%)", "3 500 ₽", "1 099 000 ₽", "≈ 0% · media-CAC 1 091 ₽ (запас ×14.7) · плановые 40% дают запас ×3.2"]
        : [s.name, fmt(s.budget), fmt(s.sales), `${fmt(s.check)} ₽`, `${fmt(s.sales * s.check)} ₽`, s.romi]
    ),
    [22, 13, 16, 12, 14, 62],
    { zebra: true }
  );

  /* ---------- 7. ROADMAP ---------- */
  ws = wb.addWorksheet("7. Roadmap");
  r = title(ws, "ДОРОЖНАЯ КАРТА ВНЕДРЕНИЯ", "4 фазы на 12 месяцев: от настройки аналитики до 1 100 000 ₽/мес и 89 лидов в день");
  r = block(
    ws, r, null,
    ["Фаза / период", "Действия", "Бюджет", "KPI выхода из фазы"],
    phases.map((p) => [`${p.phase} · ${p.period}`, p.actions.join("; "), p.budget, p.kpi]),
    [22, 78, 18, 42],
    { zebra: true }
  );

  /* ---------- 8. КОНТРОЛЬНЫЕ ТОЧКИ ---------- */
  ws = wb.addWorksheet("8. Контрольные точки");
  r = title(ws, "ТАБЛИЦА КОНТРОЛЬНЫХ ТОЧЕК", "Срезы и решения: каждая точка отвечает «идём дальше, масштабируем или чиним»");
  r = block(
    ws, r, null,
    ["Точка", "Что проверяем", "KPI", "Решение"],
    checkpoints.map((c) => [c.point, c.check, c.kpi, c.decision]),
    [20, 24, 52, 34],
    { zebra: true }
  );

  /* ---------- 9. РИСКИ ---------- */
  ws = wb.addWorksheet("9. Риски");
  r = title(ws, "РИСКИ И МИТИГАЦИЯ");
  r = block(
    ws, r, null,
    ["Риск", "Вероятность", "Влияние", "Митигация"],
    risks.map((x) => [x.risk, x.prob, x.impact, x.mitigation]),
    [36, 14, 12, 78],
    { zebra: true }
  );

  /* ---------- 10. ДЕТАЛИ КАНАЛОВ ---------- */
  ws = wb.addWorksheet("10. Детали каналов");
  r = title(ws, "ДЕТАЛИЗАЦИЯ ПО КАНАЛАМ", "Действия и ожидаемый результат каждого канала");
  r = block(
    ws, r, null,
    ["Канал", "Ключевые действия", "Ожидаемый результат"],
    channelDetails.map((c) => [c.channel, c.actions, c.result]),
    [22, 82, 36],
    { zebra: true }
  );

  /* ---------- 11. МИНУС-СЛОВА ---------- */
  ws = wb.addWorksheet("11. Минус-слова");
  r = title(ws, "ПРИЛОЖЕНИЕ: МИНУС-СЛОВА ПО ГРУППАМ", "Для кампании «Поиск» на уровне аккаунта");
  r = block(
    ws, r, null,
    ["Группа", "Минус-слова"],
    negativeGroups.map((g) => [g.group, g.words.join(", ")]),
    [22, 118],
    { zebra: true, note: `Не минусовать: ${doNotNegate.join(", ")}. «Электроэпиляцию» выносим в отдельную кампанию с собственной посадочной.` }
  );
  r = block(
    ws, r, "ПАМЯТКА ПО ПЛАНУ",
    ["Тезис", "Цифра"],
    tickerItems.map((t) => {
      const [a, b] = t.includes(" — ") ? t.split(" — ") : [t, ""];
      return [a, b];
    }),
    [40, 90],
    { zebra: true }
  );

  /* ---------- ЦВЕТОВЫЕ АКЦЕНТЫ: красные линии и цели в дашборде ---------- */
  const dash = wb.getWorksheet("2. Дашборд");
  if (dash) {
    dash.eachRow((row, rn) => {
      row.eachCell((cell) => {
        const v = String(cell.value ?? "");
        if (v.startsWith("<") || v.startsWith(">")) {
          cell.font = { ...cell.font, bold: true, color: { argb: RED_TX } };
        } else if (v.startsWith("≥") || v.startsWith("≤") || /^75–85%$/.test(v)) {
          cell.font = { ...cell.font, bold: true, color: { argb: GREEN_TX } };
        }
      });
      void rn;
    });
  }

  /* ---------- СОХРАНЕНИЕ ---------- */
  const buf = await wb.xlsx.writeBuffer();
  const blob = new Blob([buf], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Epilate-Me_Стратегия_2026-2027.xlsx";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

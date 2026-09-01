/* ============================================================
   Чистый генератор книги Excel (без DOM, без импортов).
   Используется и в браузере (кнопка «Скачать .xlsx»),
   и на этапе сборки (встраивание готового файла в HTML).
   Все цифры — строго из data.ts (planNumbers и др.).
   ============================================================ */

/* ---------- фирменная палитра (как на сайте) ---------- */
const TITLE_BG = "FF4A3826"; // тёмный кофе — плашка заголовка
const HEAD_BG = "FF6E5334"; // глубокая бронза — шапки таблиц
const ZEBRA_BG = "FFF4EDE1"; // тёплый зебра-фон строк
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

function colWidths(ws: any, widths: number[]) {
  widths.forEach((w, i) => {
    ws.getColumn(i + 1).width = w;
  });
}

/* Заголовок листа: тёмная плашка + подзаголовок */
function title(ws: any, text: string, sub?: string): number {
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
  ws: any,
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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function buildStrategyWorkbook(ExcelJS: any, d: any): any {
  const fmt: (n: number, digits?: number) => string = d.fmt;
  const p = d.planNumbers;

  const wb = new ExcelJS.Workbook();
  wb.creator = "Epilate-Me";
  wb.lastModifiedBy = "Epilate-Me";
  wb.modified = new Date();

  /* ---------- 1. ОБЛОЖКА ---------- */
  let ws = wb.addWorksheet("1. Обложка");
  let r = title(
    ws,
    "МАРКЕТИНГ-СТРАТЕГИЯ EPILATE-ME 2026–2027",
    `Сеть клиник лазерной эпиляции и косметологии · Москва, ${d.branches.length} филиалов · план: ${p.leadsDayNetwork} лида в день на сеть, конверсия лид→клиент ${p.conv}%`
  );
  r = block(
    ws, r, "СТРАТЕГИЯ В ЦИФРАХ",
    ["Параметр", "Значение"],
    [
      ["Бюджет · целевой месяц", `${fmt(p.budget)} ₽/мес · привлечение ${fmt(p.budgetAcquisition)} + CRM ${fmt(p.budgetCrm)}`],
      ["Лидов в день · сеть", `${p.leadsDayNetwork} (по ${p.leadsDayBranch} на филиал)`],
      ["Продаж в день · сеть", `${p.salesDayNetwork} (${fmt(p.salesNew)} новых + ${fmt(p.salesRepeat)} повторных · CR лид→клиент ${p.conv}%)`],
      ["Лидов / продаж в месяц", `${fmt(p.leadsMonth)} / ${fmt(p.salesMonth)}`],
      ["Выручка 1-го месяца", `${fmt(p.revenueMonth)} ₽`],
      ["Маржа 1-го месяца", `${fmt(p.marginMonth)} ₽ (${p.marginRate}%)`],
      ["ROMI 1-го месяца (маржа)", `+${fmt(p.romi1mo)}% (по LTV +${fmt(p.romiLtv)}%)`],
      ["LTV-маржа когорты · 12 мес", `${fmt(p.salesNew * p.ltvMargin)} ₽ · ${fmt(p.salesNew)} × ${fmt(p.ltvMargin)}`],
      ["CPL / CAC", `${fmt(p.cpl)} ₽ / ${fmt(p.cac)} ₽ · безубыточный CAC ${fmt(p.breakevenCac)} ₽ (запас ×${p.safety})`],
    ],
    [34, 96],
    { zebra: true }
  );
  r = block(
    ws, r, "ЦЕЛИ И ЮНИТ-ЭКОНОМИКА",
    ["Горизонт", "Цели"],
    d.goals.map((g: any) => [g.horizon, g.points.join(" · ")]),
    [26, 104],
    { zebra: true }
  );
  r = block(
    ws, r, "СЕТЬ · 6 ФИЛИАЛОВ В МОСКВЕ",
    ["Метро / район", "Адрес"],
    d.branches.map((b: any) => [b.metro, `Москва, ${b.address}`]),
    [22, 108],
    { zebra: true }
  );
  r = block(
    ws, r, "СТРУКТУРА ФАЙЛА",
    ["Лист", "Содержание"],
    d.fileStructure.map((f: any) => [f.sheet, f.content]),
    [26, 104],
    { zebra: true }
  );

  /* ---------- 2. ДАШБОРД ---------- */
  ws = wb.addWorksheet("2. Дашборд");
  r = title(ws, "ДАШБОРД", "Целевые показатели и KPI с красными линиями");
  r = block(
    ws, r, "ЦЕЛЕВЫЕ ПОКАЗАТЕЛИ",
    ["Метрика", "Цель", "Комментарий"],
    d.dashboardGoals.map((g: any) => [g.label, g.value, g.note]),
    [30, 18, 60],
    { zebra: true }
  );
  r = block(
    ws, r, "KPI-КОНТРОЛЬ (КРАСНЫЕ ЛИНИИ)",
    ["Метрика", "Цель", "Красная линия", "Частота"],
    d.kpiControl.map((k: any) => [k.metric, k.target, k.red, k.freq]),
    [34, 18, 22, 16],
    { zebra: true }
  );

  /* ---------- 3. ЮНИТ-ЭКОНОМИКА ---------- */
  ws = wb.addWorksheet("3. Юнит-экономика");
  r = title(ws, "ЮНИТ-ЭКОНОМИКА ОДНОГО КЛИЕНТА", "База для всех расчётов ROMI и CAC · ROMI считается по марже");
  r = block(
    ws, r, null,
    ["Параметр", "Значение", "Комментарий / формула"],
    d.unitEconomics.map((u: any) => [u.param, u.value, u.comment]),
    [36, 22, 72],
    { zebra: true }
  );

  /* ---------- 4. МЕДИАПЛАН ---------- */
  ws = wb.addWorksheet("4. Медиаплан");
  r = title(
    ws,
    "МЕДИАПЛАН (ЦЕЛЕВОЙ МЕСЯЦ)",
    `${fmt(p.budget)} ₽/мес → ${fmt(p.leadsMonth)} лидов → ${fmt(p.salesMonth)} продаж (${fmt(p.salesNew)} новых + ${fmt(p.salesRepeat)} повторных) · ROMI по марже = (маржа − бюджет) / бюджет`
  );
  r = block(
    ws, r, null,
    ["Канал", "Бюджет, ₽", "Клики", "CPC, ₽", "CV клик→лид", "Лиды", "CPL, ₽", "Продажи (60%)", "Выручка, ₽", "ROMI (маржа)"],
    [
      ...d.mediaChannels.map((c: any) => [
        c.name,
        c.budget,
        c.clicks ?? "—",
        c.cpc ?? "—",
        c.cv,
        c.leads ?? "—",
        c.cpl ?? "—",
        c.salesLabel ?? c.sales,
        c.revenue,
        c.organic ? "органика" : `+${fmt(c.romi)}%`,
      ] as Cell[]),
      [
        d.mediaTotal.name,
        d.mediaTotal.budget,
        d.mediaTotal.clicks ?? "—",
        d.mediaTotal.cpc ?? "—",
        d.mediaTotal.cv,
        d.mediaTotal.leads ?? "—",
        d.mediaTotal.cpl ?? "—",
        d.mediaTotal.sales,
        d.mediaTotal.revenue,
        `+${fmt(d.mediaTotal.romi)}%`,
      ] as Cell[],
    ],
    [28, 13, 10, 9, 12, 9, 9, 16, 13, 13],
    {
      totalLast: true,
      zebra: true,
      alignRight: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      note: d.channelNotes.join(" "),
    }
  );

  /* ---------- 5. ВОРОНКА ---------- */
  ws = wb.addWorksheet("5. Воронка");
  r = title(ws, "ПОЛНАЯ МАРКЕТИНГОВАЯ ВОРОНКА", "Целевой месяц · путь от лида до LTV-маржи когорты");
  r = block(
    ws, r, null,
    ["Этап воронки", "Значение", "Конверсия", "Комментарий"],
    d.funnelStages.map((s: any) => [s.stage, s.value, s.conv ?? "—", s.note]),
    [30, 16, 20, 54],
    { zebra: true, alignRight: [1] }
  );
  r = block(
    ws, r, `ЭКОНОМИКА КОГОРТЫ · ${fmt(p.salesNew)} НОВЫХ КЛИЕНТОВ`,
    ["Показатель", "Расчёт", "Значение"],
    d.cohortEconomics.map((c: any) => [
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
      ["Лидов в день", String(p.leadsDayBranch), `≈ ${fmt(Math.round(p.leadsMonth / d.branches.length))} в месяц`],
      ["Продаж в день", "6,3", `≈ ${fmt(Math.round(p.salesMonth / d.branches.length))} в месяц · CR ${p.conv}%`],
      ["Выручка 1-го месяца", `≈ ${fmt(Math.round(p.revenueMonth / d.branches.length))} ₽`, `${fmt(p.revenueMonth)} / ${d.branches.length}`],
      ["Бюджет на филиал", `${fmt(p.budgetBranch)} ₽/мес`, `${fmt(p.budget)} / ${d.branches.length}`],
    ],
    [34, 22, 44],
    {
      zebra: true,
      note: `Умножьте на ${d.branches.length} — получите ${p.leadsDayNetwork} лида и ${p.salesDayNetwork} продаж в день на всю сеть.`,
    }
  );

  /* ---------- 6. ROADMAP ---------- */
  ws = wb.addWorksheet("6. Roadmap");
  r = title(ws, "ДОРОЖНАЯ КАРТА ВНЕДРЕНИЯ", `4 фазы на 12 месяцев: от настройки аналитики до ${fmt(p.budget)} ₽/мес и ${p.leadsDayNetwork} лидов в день`);
  r = block(
    ws, r, null,
    ["Фаза / период", "Действия", "Бюджет", "KPI выхода из фазы"],
    d.phases.map((ph: any) => [`${ph.phase} · ${ph.period}`, ph.actions.join("; "), ph.budget, ph.kpi]),
    [22, 78, 18, 42],
    { zebra: true }
  );

  /* ---------- 7. КОНТРОЛЬНЫЕ ТОЧКИ ---------- */
  ws = wb.addWorksheet("7. Контрольные точки");
  r = title(ws, "ТАБЛИЦА КОНТРОЛЬНЫХ ТОЧЕК", "Срезы и решения: каждая точка отвечает «идём дальше, масштабируем или чиним»");
  r = block(
    ws, r, null,
    ["Точка", "Что проверяем", "KPI", "Решение"],
    d.checkpoints.map((c: any) => [c.point, c.check, c.kpi, c.decision]),
    [20, 24, 52, 34],
    { zebra: true }
  );

  /* ---------- 8. РИСКИ ---------- */
  ws = wb.addWorksheet("8. Риски");
  r = title(ws, "РИСКИ");
  r = block(
    ws, r, null,
    ["Риск", "Вероятность", "Влияние", "Что делаем"],
    d.risks.map((x: any) => [x.risk, x.prob, x.impact, x.mitigation]),
    [36, 14, 12, 78],
    { zebra: true }
  );

  /* ---------- 9. ДЕТАЛИ КАНАЛОВ ---------- */
  ws = wb.addWorksheet("9. Детали каналов");
  r = title(ws, "ДЕТАЛИЗАЦИЯ ПО КАНАЛАМ", "Действия и ожидаемый результат каждого канала");
  r = block(
    ws, r, null,
    ["Канал", "Ключевые действия", "Ожидаемый результат"],
    d.channelDetails.map((c: any) => [c.channel, c.actions, c.result]),
    [22, 82, 36],
    { zebra: true }
  );
  r = block(
    ws, r, "ПАМЯТКА ПО ПЛАНУ",
    ["Тезис", "Цифра"],
    d.tickerItems.map((t: string) => {
      const [a, b] = t.includes(" — ") ? t.split(" — ") : [t, ""];
      return [a, b];
    }),
    [40, 90],
    { zebra: true }
  );

  /* ---------- ЦВЕТОВЫЕ АКЦЕНТЫ: красные линии и цели в дашборде ---------- */
  const dash = wb.getWorksheet("2. Дашборд");
  if (dash) {
    dash.eachRow((row: any) => {
      row.eachCell((cell: any) => {
        const v = String(cell.value ?? "");
        if (v.startsWith("<") || v.startsWith(">")) {
          cell.font = { ...cell.font, bold: true, color: { argb: RED_TX } };
        } else if (v.startsWith("≥") || v.startsWith("≤")) {
          cell.font = { ...cell.font, bold: true, color: { argb: GREEN_TX } };
        }
      });
    });
  }

  return wb;
}

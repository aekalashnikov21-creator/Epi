import { useState } from "react";
import { TrendingUp, ShieldCheck } from "lucide-react";
import {
  unitEconomics,
  mediaChannels,
  mediaTotal,
  channelColors,
  funnelStages,
  cohortEconomics,
  scenarios,
  fmt,
} from "../data";
import { Reveal, SectionHead, ScrollHint, useCountUp, useMounted, Th, Td } from "../lib/ui";

/* ================= ЛИСТ 3 · ЮНИТ-ЭКОНОМИКА ================= */
export function SheetEconomics() {
  const mounted = useMounted(300);
  const safety = useCountUp(14.7);
  const coursePct = (14700 / 16000) * 100;
  const crossPct = (1440 / 16000) * 100;
  const cacPct = (1091 / 16000) * 100;

  return (
    <section>
      <SectionHead
        no="03"
        title="Юнит-экономика одного клиента"
        sub="База для всех расчётов ROMI и CAC: средний курс 7 процедур, маржа 60%, предельный CAC равен LTV-марже"
      />

      <div className="grid gap-4 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="h-full border border-ink-800/10 bg-white p-6">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-500">
              Сборка LTV-маржи · 12 месяцев
            </p>
            <div className="mt-5 space-y-4">
              {[
                { k: "Маржа с 1 процедуры", v: "2 100 ₽", f: "чек 3 500 ₽ × 60%" },
                { k: "Маржа за курс 7 процедур", v: "14 700 ₽", f: "7 × 2 100" },
                { k: "Допродажа косметологии", v: "+1 440 ₽", f: "30% клиентов × 8 000 × 60%" },
              ].map((r, i) => (
                <div key={r.k} className="flex items-baseline justify-between gap-4 border-b border-ink-100 pb-3">
                  <div>
                    <p className="text-[14px] font-semibold text-ink-900">{r.k}</p>
                    <p className="text-[12px] text-ink-500 tabular-nums">{r.f}</p>
                  </div>
                  <Reveal delay={i * 120}>
                    <p className="font-display text-[17px] font-bold text-ink-900 tabular-nums">{r.v}</p>
                  </Reveal>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="flex h-9 w-full overflow-hidden rounded-[3px] bg-ink-100/70">
                <div
                  className="flex items-center justify-end bg-gold-500 pr-2"
                  style={{ width: mounted ? `${coursePct}%` : "0%", transition: "width 1.2s cubic-bezier(.22,.61,.36,1) .15s" }}
                >
                  <span className="whitespace-nowrap text-[11px] font-bold text-ink-950">14 700</span>
                </div>
                <div
                  className="flex items-center justify-end bg-gold-300 pr-1.5"
                  style={{ width: mounted ? `${crossPct}%` : "0%", transition: "width 1.2s cubic-bezier(.22,.61,.36,1) .5s" }}
                >
                  <span className="hidden whitespace-nowrap text-[10px] font-bold text-ink-900 sm:inline">+1 440</span>
                </div>
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <p className="text-[12px] text-ink-500">курс + косметология</p>
                <p className="font-display text-[16px] font-bold text-gold-700 tabular-nums">LTV-маржа ≈ 16 000 ₽</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-2" delay={140}>
          <div className="flex h-full flex-col border border-ink-800 bg-ink-900 p-6 text-paper-100">
            <p className="flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-gold-400">
              <ShieldCheck size={15} />
              Запас прочности media-CAC
            </p>
            <p className="mt-4 font-display text-[52px] leading-none font-bold text-paper-50">
              ×{fmt(safety, 1)}
            </p>
            <p className="mt-1 text-[13px] text-paper-100/70">между плановым и предельным CAC</p>

            <div className="mt-7">
              <div className="relative h-3 w-full rounded-[3px] bg-paper-100/12">
                <div
                  className="grad-moss absolute inset-y-0 left-0 rounded-[3px]"
                  style={{ width: mounted ? `${cacPct}%` : "0%", transition: "width 1.3s cubic-bezier(.22,.61,.36,1) .3s" }}
                />
                <div className="absolute -top-1.5 -bottom-1.5 w-[2px] bg-gold-400" style={{ left: `${cacPct}%` }} />
              </div>
              <div className="mt-2.5 flex items-start justify-between text-[11.5px] leading-tight">
                <span className="text-moss-500 font-semibold">план ~1 091 ₽</span>
                <span className="text-right text-paper-100/65">
                  безубыточность
                  <br />
                  <b className="text-paper-50 tabular-nums">16 000 ₽</b>
                </span>
              </div>
            </div>

            <ul className="mt-7 space-y-2.5 border-t border-paper-100/10 pt-5 text-[13px] text-paper-100/80">
              <li className="flex gap-2.5"><span className="mt-[7px] h-1 w-1 rotate-45 bg-gold-500" />Media-CAC = медиабюджет ÷ продажи: 1 100 000 / 1 008</li>
              <li className="flex gap-2.5"><span className="mt-[7px] h-1 w-1 rotate-45 bg-gold-500" />CR лид → фактический приход — 40% (скрипты админов)</li>
              <li className="flex gap-2.5"><span className="mt-[7px] h-1 w-1 rotate-45 bg-gold-500" />Предельный CAC = LTV-маржа клиента</li>
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={100} className="mt-4">
        <div className="overflow-x-auto border border-ink-800/10 bg-white p-2 md:p-3">
          <table className="w-full min-w-[620px] border-collapse">
            <thead>
              <tr>
                <Th>Параметр</Th>
                <Th align="right">Значение</Th>
                <Th>Комментарий / формула</Th>
              </tr>
            </thead>
            <tbody>
              {unitEconomics.map((u, i) => (
                <tr key={u.param} className={`transition-colors hover:bg-gold-100/40 ${i % 2 ? "bg-paper-200/60" : "bg-white"}`}>
                  <Td bold>{u.param}</Td>
                  <Td align="right" bold className="whitespace-nowrap text-gold-700">{u.value}</Td>
                  <Td className="text-ink-600">{u.comment}</Td>
                </tr>
              ))}
            </tbody>
          </table>
          <ScrollHint />
        </div>
      </Reveal>

    </section>
  );
}

/* ================= ЛИСТ 4 · МЕДИАПЛАН ================= */
export function SheetMedia() {
  const romiTone = (r: number) =>
    r >= 600 ? "font-extrabold text-gold-600" : r >= 300 ? "font-bold text-ink-800" : "font-semibold text-ink-500";

  return (
    <section>
      <SectionHead
        no="04"
        title="Медиаплан"
        sub="Целевой месяц · 1 100 000 ₽/мес → 2 521 лид → 1 008 продаж (конверсия в приход 40%) · ROMI = (выручка − бюджет) / бюджет"
      />

      <Reveal>
        <div className="border border-ink-800/10 bg-white p-6">
          <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-500">
            Распределение бюджета по каналам
          </p>
          <div className="mt-4 flex h-6 w-full overflow-hidden rounded-[3px] bg-ink-100/70">
            {mediaChannels.filter((c) => c.budget > 0).map((c, i) => (
              <div
                key={c.name}
                title={`${c.name} — ${fmt(c.budget)} ₽`}
                className="h-full transition-opacity hover:opacity-75"
                style={{ width: `${(c.budget / mediaTotal.budget) * 100}%`, backgroundColor: channelColors[i] }}
              />
            ))}
          </div>
          <div className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mediaChannels.map((c, i) => (
              <div key={c.name} className="flex items-center gap-2.5 text-[12.5px]">
                <span className="h-2.5 w-2.5 shrink-0 rounded-[2px]" style={{ backgroundColor: c.organic ? "transparent" : channelColors[i], border: c.organic ? "1px dashed #8A6A42" : "none" }} />
                <span className="truncate font-semibold text-ink-800">{c.name}</span>
                <span className="ml-auto whitespace-nowrap text-ink-500 tabular-nums">
                  {c.organic ? "0 ₽ · органика" : `${fmt(c.budget)} ₽ · ${((c.budget / mediaTotal.budget) * 100).toFixed(0)}%`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={120} className="mt-4">
        <div className="overflow-x-auto border border-ink-800/10 bg-white p-2 md:p-3">
          <table className="w-full min-w-[980px] border-collapse">
            <thead>
              <tr>
                <Th>Канал</Th>
                <Th align="right">Бюджет, ₽</Th>
                <Th align="right">Клики</Th>
                <Th align="right">CPC, ₽</Th>
                <Th align="right">CV клик→лид</Th>
                <Th align="right">Лиды</Th>
                <Th align="right">CPL, ₽</Th>
                <Th align="right">Продажи (40%)</Th>
                <Th align="right">Выручка, ₽</Th>
                <Th align="right">ROMI</Th>
              </tr>
            </thead>
            <tbody>
              {mediaChannels.map((c, i) => (
                <tr key={c.name} className={`transition-colors hover:bg-gold-100/40 ${i % 2 ? "bg-paper-200/60" : "bg-white"}`}>
                  <Td bold>{c.name}</Td>
                  <Td align="right">{fmt(c.budget)}</Td>
                  <Td align="right">{fmt(c.clicks)}</Td>
                  <Td align="right">{fmt(c.cpc)}</Td>
                  <Td align="right">{c.cv}</Td>
                  <Td align="right" bold>{fmt(c.leads)}</Td>
                  <Td align="right">{c.organic ? "0" : fmt(c.cpl)}</Td>
                  <Td align="right" bold>{fmt(c.sales)}</Td>
                  <Td align="right">{fmt(c.revenue)}</Td>
                  <Td align="right" className={c.organic ? "italic text-ink-500" : romiTone(c.romi)}>
                    {c.organic ? "органика" : `+${fmt(c.romi)}%`}
                  </Td>
                </tr>
              ))}
              <tr className="bg-ink-800">
                <Td bold className="border-ink-700 bg-ink-800 text-paper-50">ИТОГО</Td>
                <Td align="right" bold className="border-ink-700 bg-ink-800 text-paper-50">{fmt(mediaTotal.budget)}</Td>
                <Td align="right" className="border-ink-700 bg-ink-800 text-paper-100">{fmt(mediaTotal.clicks)}</Td>
                <Td align="right" className="border-ink-700 bg-ink-800 text-paper-100">{mediaTotal.cpc}</Td>
                <Td align="right" className="border-ink-700 bg-ink-800 text-paper-100">{mediaTotal.cv}</Td>
                <Td align="right" bold className="border-ink-700 bg-ink-800 text-paper-50">{fmt(mediaTotal.leads)}</Td>
                <Td align="right" className="border-ink-700 bg-ink-800 text-paper-100">{mediaTotal.cpl}</Td>
                <Td align="right" bold className="border-ink-700 bg-ink-800 text-paper-50">{fmt(mediaTotal.sales)}</Td>
                <Td align="right" bold className="border-ink-700 bg-ink-800 text-paper-50">{fmt(mediaTotal.revenue)}</Td>
                <Td align="right" bold className="border-ink-700 bg-gold-500 text-ink-950">+{fmt(mediaTotal.romi)}%</Td>
              </tr>
            </tbody>
          </table>
          <ScrollHint text="10 метрик по 14 каналам — прокрутите таблицу вправо" />
        </div>
      </Reveal>

      <Reveal delay={180}>
        <p className="mt-4 flex items-start gap-2.5 text-[13px] leading-relaxed text-ink-600">
          <TrendingUp size={16} className="mt-0.5 shrink-0 text-gold-600" />
          <span>
            ROMI каналов = (выручка − медиабюджет) / медиабюджет; выручка = продажи × 3 500 ₽. Google Maps работает без
            бюджета — 38 лидов в месяц даёт заполненный профиль с отзывами. Авито посчитан консервативно (факт CV ~6%,
            вдвое ниже паспортной). Лучшие CPL: Яндекс Карты 189 ₽, партнёрки банков и Яндекс Медицина 250 ₽, Авито 250 ₽.
          </span>
        </p>
      </Reveal>
    </section>
  );
}

/* ================= ЛИСТ 5 · ВОРОНКА ================= */
export function SheetFunnel() {
  const mounted = useMounted(200);
  return (
    <section>
      <SectionHead
        no="05"
        title="Полная маркетинговая воронка"
        sub="Целевой месяц · путь от лида до LTV-процедур когорты из 1 008 первичных клиентов"
      />

      <Reveal>
        <div className="border border-ink-800/10 bg-white p-6 md:p-8">
          {funnelStages.map((s, i) => (
            <div key={s.stage} className="py-2.5 first:pt-0 last:pb-0">
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-[13.5px] font-bold text-ink-900 md:text-[14.5px]">
                  {s.stage}
                  <span className="ml-2 hidden font-normal text-ink-500 lg:inline">{s.note}</span>
                </p>
                {s.conv && (
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-[3px] border border-ink-300/60 bg-paper-200 px-2 py-0.5 text-[11px] font-bold text-ink-600 tabular-nums">
                    <svg width="9" height="9" viewBox="0 0 10 10" aria-hidden>
                      <path d="M5 0v8M1.5 5L5 8.5 8.5 5" stroke="currentColor" strokeWidth="1.4" fill="none" />
                    </svg>
                    {s.conv}
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-[11.5px] text-ink-500 lg:hidden">{s.note}</p>
              <div className="mt-1.5 flex items-center gap-3">
                <div className="h-8 min-w-0 flex-1 overflow-hidden rounded-[3px] bg-ink-100/60 md:h-9">
                  <div
                    className="grad-ink relative h-full rounded-[3px]"
                    style={{
                      width: mounted ? `${s.width}%` : "0%",
                      transition: `width 1.15s cubic-bezier(.22,.61,.36,1) ${i * 130}ms`,
                    }}
                  >
                    <span className="absolute inset-y-0 left-0 w-[3px] bg-gold-500" />
                  </div>
                </div>
                <p className="w-[70px] shrink-0 text-right font-display text-[14px] font-bold text-ink-900 tabular-nums md:w-24 md:text-[16px]">
                  {fmt(s.value)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={120} className="mt-12">
        <p className="mb-4 flex items-center gap-2 font-display text-[12px] font-semibold tracking-[0.22em] text-ink-500 uppercase">
          <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
          Экономика когорты · 1 008 первичных клиентов
        </p>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cohortEconomics.map((c, i) => (
          <CohortCard key={c.label} c={c} delay={i * 90} dark={i === 3} />
        ))}
      </div>

      <Reveal delay={160} className="mt-12">
        <p className="mb-4 flex items-center gap-2 font-display text-[12px] font-semibold tracking-[0.22em] text-ink-500 uppercase">
          <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
          Экономика одного филиала · в месяц
        </p>
      </Reveal>
      <Reveal delay={200}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "Лидов в день", v: "14", f: "420 в месяц" },
            { k: "Первичных клиентов", v: "168", f: "5.6/день · конверсия 40%" },
            { k: "Выручка 1-го месяца", v: "588 000 ₽", f: "168 × 3 500" },
            { k: "LTV-маржа · 12 мес", v: "2 688 000 ₽", f: "168 × 16 000" },
          ].map((x) => (
            <div key={x.k} className="row-hover border border-ink-800/10 bg-white p-5">
              <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-ink-500">{x.k}</p>
              <p className="mt-2.5 font-display text-[21px] leading-none font-bold text-ink-900 tabular-nums">{x.v}</p>
              <p className="mt-2.5 text-[12px] tabular-nums text-ink-500">{x.f}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[12.5px] leading-relaxed text-ink-600">
          Бюджет на филиал — ~183 000 ₽/мес (1 100 000 ₽ на сеть из 6 филиалов). ROMI 1-го месяца +221%, по LTV +1 366%.
          Умножьте на 6 — и получите целевые 84 лида и 34 продажи в день на всю сеть.
        </p>
      </Reveal>
    </section>
  );
}

function CohortCard({
  c,
  delay,
  dark,
}: {
  c: (typeof cohortEconomics)[number];
  delay: number;
  dark?: boolean;
}) {
  const v = useCountUp(c.value);
  const prefix = "prefix" in c ? c.prefix : "";
  return (
    <Reveal delay={delay}>
      <div
        className={`h-full border p-5 ${
          dark
            ? "border-ink-800 bg-ink-900 text-paper-100 transition-colors hover:border-gold-500/50"
            : "row-hover border-ink-800/10 bg-white"
        }`}
      >
        <p className={`text-[11.5px] font-bold uppercase tracking-[0.12em] ${dark ? "text-gold-400" : "text-ink-500"}`}>
          {c.label}
        </p>
        <p className={`mt-2.5 font-display text-[22px] leading-none font-bold tabular-nums ${dark ? "text-gold-400" : "text-ink-900"}`}>
          {prefix}
          {fmt(v)}
          {c.suffix}
        </p>
        <p className={`mt-2.5 text-[12px] tabular-nums ${dark ? "text-paper-100/60" : "text-ink-500"}`}>{c.formula}</p>
      </div>
    </Reveal>
  );
}

/* ================= ЛИСТ 6 · ROMI ================= */
export function SheetRomi() {
  const [sc, setSc] = useState("base");
  const sorted = [...mediaChannels].sort((a, b) => b.romi - a.romi);
  const max = sorted[0].romi;
  const active = scenarios.find((s) => s.id === sc)!;

  return (
    <section>
      <SectionHead
        no="06"
        title="ROMI: расчёты и сценарии"
        sub="Media-ROMI = (выручка − медиабюджет) / медиабюджет · выручка = продажи × 3 500 ₽ · каналы отсортированы по возврату"
      />

      <Reveal>
        <div className="border border-ink-800/10 bg-white p-6 md:p-8">
          {sorted.map((c, i) => (
            <div
              key={c.name}
              className="group grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1.5 py-2.5 md:grid-cols-[230px_1fr_110px] md:gap-y-1"
            >
              <p className="truncate text-[13px] font-bold text-ink-800 transition-colors group-hover:text-gold-700 md:text-[13.5px]">
                {c.name}
              </p>
              <p className={`text-right font-display text-[13px] font-bold tabular-nums md:order-3 md:text-[14px] ${c.organic ? "italic text-moss-600" : "text-ink-900"}`}>
                {c.organic ? "органика · 0 ₽" : `+${fmt(c.romi)}%`}
              </p>
              <div className="col-span-2 h-6 w-full overflow-hidden rounded-[3px] bg-ink-100/60 md:order-2 md:col-span-1 md:h-7">
                <div
                  className="h-full rounded-[3px]"
                  style={{
                    width: c.organic ? "100%" : `${(c.romi / max) * 100}%`,
                    backgroundColor: c.organic ? "rgba(111,127,88,0.35)" : `rgba(176,132,79,${0.28 + 0.72 * (c.romi / max)})`,
                    backgroundImage: c.organic ? "repeating-linear-gradient(45deg, rgba(111,127,88,0.5) 0 6px, rgba(111,127,88,0.2) 6px 12px)" : "none",
                    transition: `width 1.15s cubic-bezier(.22,.61,.36,1) ${i * 70}ms`,
                  }}
                />
              </div>
            </div>
          ))}
          <p className="mt-4 border-t border-ink-100 pt-4 text-[12.5px] leading-relaxed text-ink-500">
            Лидеры возврата — Яндекс Карты (+640%), Авито и Яндекс Медицина (по +460%). Директ даёт объём (340 лидов),
            но наименьший ROMI (+40%) — кандидат на оптимизацию ставок. Google Maps приносит 38 лидов при нулевом бюджете.
          </p>
        </div>
      </Reveal>

      <Reveal delay={140} className="mt-12">
        <p className="mb-4 flex items-center gap-2 font-display text-[12px] font-semibold tracking-[0.22em] text-ink-500 uppercase">
          <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
          Сценарии
        </p>
      </Reveal>
      <div className="flex flex-wrap gap-2">
        {scenarios.map((s) => (
          <button
            key={s.id}
            onClick={() => setSc(s.id)}
            className={`press rounded-[3px] border px-4 py-2 text-[13px] font-bold transition-all duration-200 ${
              sc === s.id
                ? "border-ink-800 bg-ink-800 text-paper-50 shadow-md"
                : "border-ink-300/70 bg-white text-ink-700 hover:border-gold-500 hover:text-gold-700"
            }`}
          >
            {s.name}
            <span className={`ml-2 text-[11px] font-medium ${sc === s.id ? "text-gold-400" : "text-ink-400"}`}>
              {s.desc}
            </span>
          </button>
        ))}
      </div>

      <Reveal delay={100} className="mt-4">
        {active.id === "be" ? (
          <div className="grid items-center gap-6 border border-ink-800 bg-ink-900 p-6 text-paper-100 md:grid-cols-[auto_1fr] md:p-8">
            <div className="text-center md:text-left">
              <p className="font-display text-[54px] leading-none font-bold text-gold-400 tabular-nums">×14.7</p>
              <p className="mt-2 text-[11px] tracking-[0.14em] text-paper-100/50 uppercase">запас по media-CAC</p>
            </div>
            <div>
              <p className="font-display text-[13px] font-semibold tracking-[0.18em] text-paper-50 uppercase">
                Точка безубыточности
              </p>
              <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-paper-100/80">
                При медиабюджете <b className="text-paper-50">1 100 000 ₽</b> план окупается при{" "}
                <b className="text-paper-50">314 продажах</b> (конверсия в приход <b className="text-gold-400">12.5%</b>) —
                плановые 40% дают запас ×3.2. По стоимости клиента: media-CAC <b className="text-gold-400">1 091 ₽</b>{" "}
                против безубыточных <b className="text-paper-50">16 000 ₽</b> (×14.7).
                План выдержит и перегрев аукциона, и падение конверсии, и сезонность.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 border border-ink-800/10 bg-white p-6 sm:grid-cols-2 md:p-8 lg:grid-cols-5">
            {[
              { k: "Бюджет / мес", v: `${fmt(active.budget)} ₽` },
              { k: "Продажи / мес", v: fmt(active.sales) },
              { k: "Средний чек", v: `${fmt(active.check)} ₽` },
              { k: "Выручка / мес", v: `${fmt(active.sales * active.check)} ₽` },
              { k: "ROMI", v: active.romi, gold: true },
            ].map((x) => (
              <div key={x.k} className="border-l-2 border-gold-500 pl-4">
                <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-ink-500">{x.k}</p>
                <p className={`mt-1.5 font-display text-[22px] font-bold tabular-nums ${"gold" in x && x.gold ? "text-gold-600" : "text-ink-900"}`}>
                  {x.v}
                </p>
              </div>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}

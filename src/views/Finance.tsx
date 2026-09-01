import { TrendingUp, ShieldCheck, Info } from "lucide-react";
import {
  unitEconomics,
  mediaChannels,
  mediaTotal,
  channelColors,
  channelNotes,
  funnelStages,
  cohortEconomics,
  fmt,
} from "../data";
import { Reveal, SectionHead, ScrollHint, useCountUp, useMounted, Th, Td } from "../lib/ui";

const dash = (v: number | null): string => (v === null ? "—" : fmt(v));

/* ================= ЛИСТ 3 · ЮНИТ-ЭКОНОМИКА ================= */
export function SheetEconomics() {
  const mounted = useMounted(300);
  const safety = useCountUp(33);
  const coursePct = ((32000 - 1490) / 32000) * 100;
  const crossPct = (1490 / 32000) * 100;
  const cacPct = (963 / 32000) * 100;

  return (
    <section>
      <SectionHead
        no="03"
        title="Юнит-экономика одного клиента"
        sub="База для всех расчётов: чек 4 550 ₽, маржинальность 67%, курс 8–10 процедур, LTV-маржа 32 000 ₽"
      />

      <div className="grid gap-4 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="h-full border border-ink-800/10 bg-white p-6">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-500">
              Сборка LTV-маржи · 12 месяцев
            </p>
            <div className="mt-5 space-y-4">
              {[
                { k: "Маржа с первички", v: "3 049 ₽", f: "чек 4 550 ₽ × 67%" },
                { k: "Средний курс", v: "8–10 процедур", f: "ниша лазерной эпиляции" },
                { k: "Допродажа (косметология)", v: "+1 490 ₽", f: "средняя на клиента" },
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
                  <span className="whitespace-nowrap text-[11px] font-bold text-ink-950">курс · 30 510</span>
                </div>
                <div
                  className="flex items-center justify-end bg-gold-300 pr-1.5"
                  style={{ width: mounted ? `${crossPct}%` : "0%", transition: "width 1.2s cubic-bezier(.22,.61,.36,1) .5s" }}
                >
                  <span className="hidden whitespace-nowrap text-[10px] font-bold text-ink-900 sm:inline">+1 490</span>
                </div>
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <p className="text-[12px] text-ink-500">курс + допродажа</p>
                <p className="font-display text-[16px] font-bold text-gold-700 tabular-nums">LTV-маржа = 32 000 ₽</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-2" delay={140}>
          <div className="flex h-full flex-col border border-ink-800 bg-ink-900 p-6 text-paper-100">
            <p className="flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-gold-400">
              <ShieldCheck size={15} />
              Запас прочности CAC
            </p>
            <p className="mt-4 font-display text-[52px] leading-none font-bold text-paper-50">
              ×{fmt(safety)}
            </p>
            <p className="mt-1 text-[13px] text-paper-100/70">между плановым и безубыточным CAC</p>

            <div className="mt-7">
              <div className="relative h-3 w-full rounded-[3px] bg-paper-100/12">
                <div
                  className="grad-moss absolute inset-y-0 left-0 rounded-[3px]"
                  style={{ width: mounted ? `${cacPct}%` : "0%", transition: "width 1.3s cubic-bezier(.22,.61,.36,1) .3s" }}
                />
                <div className="absolute -top-1.5 -bottom-1.5 w-[2px] bg-gold-400" style={{ left: `${cacPct}%` }} />
              </div>
              <div className="mt-2.5 flex items-start justify-between text-[11.5px] leading-tight">
                <span className="text-moss-500 font-semibold">план 963 ₽</span>
                <span className="text-right text-paper-100/65">
                  безубыточность
                  <br />
                  <b className="text-paper-50 tabular-nums">32 000 ₽</b>
                </span>
              </div>
            </div>

            <ul className="mt-7 space-y-2.5 border-t border-paper-100/10 pt-5 text-[13px] text-paper-100/80">
              <li className="flex gap-2.5"><span className="mt-[7px] h-1 w-1 rotate-45 bg-gold-500" />CAC = привлечение ÷ новые продажи: 930 000 / 966</li>
              <li className="flex gap-2.5"><span className="mt-[7px] h-1 w-1 rotate-45 bg-gold-500" />Конверсия лид → клиент — 60% (скрипты админов)</li>
              <li className="flex gap-2.5"><span className="mt-[7px] h-1 w-1 rotate-45 bg-gold-500" />Безубыточный CAC = LTV-маржа клиента</li>
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
    r >= 400 ? "font-extrabold text-gold-600" : r >= 200 ? "font-bold text-ink-800" : "font-semibold text-ink-500";

  return (
    <section>
      <SectionHead
        no="04"
        title="Медиаплан"
        sub="Целевой месяц · 1 080 000 ₽/мес (привлечение 930 000 + CRM 150 000) → 1 610 лид → 1 141 продажа · ROMI по марже"
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
                style={{ width: `${(c.budget / mediaTotal.budget) * 100}%`, backgroundColor: channelColors[i % channelColors.length] }}
              />
            ))}
          </div>
          <div className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mediaChannels.map((c, i) => (
              <div key={c.name} className="flex items-center gap-2.5 text-[12.5px]">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-[2px]"
                  style={c.organic ? { backgroundColor: "transparent", border: "1px dashed #8A6A42" } : { backgroundColor: channelColors[i % channelColors.length] }}
                />
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
          <table className="w-full min-w-[1020px] border-collapse">
            <thead>
              <tr>
                <Th>Канал</Th>
                <Th align="right">Бюджет, ₽</Th>
                <Th align="right">Клики</Th>
                <Th align="right">CPC, ₽</Th>
                <Th align="right">CV клик→лид</Th>
                <Th align="right">Лиды</Th>
                <Th align="right">CPL, ₽</Th>
                <Th align="right">Продажи (60%)</Th>
                <Th align="right">Выручка, ₽</Th>
                <Th align="right">ROMI (маржа)</Th>
              </tr>
            </thead>
            <tbody>
              {mediaChannels.map((c, i) => (
                <tr key={c.name} className={`transition-colors hover:bg-gold-100/40 ${i % 2 ? "bg-paper-200/60" : "bg-white"}`}>
                  <Td bold>{c.name}</Td>
                  <Td align="right">{fmt(c.budget)}</Td>
                  <Td align="right">{dash(c.clicks)}</Td>
                  <Td align="right">{dash(c.cpc)}</Td>
                  <Td align="right">{c.cv}</Td>
                  <Td align="right" bold>{dash(c.leads)}</Td>
                  <Td align="right">{c.organic ? "0" : dash(c.cpl)}</Td>
                  <Td align="right" bold>{c.salesLabel ?? fmt(c.sales)}</Td>
                  <Td align="right">{fmt(c.revenue)}</Td>
                  <Td align="right" className={c.organic ? "italic text-ink-500" : romiTone(c.romi ?? 0)}>
                    {c.organic ? "органика" : `+${fmt(c.romi ?? 0)}%`}
                  </Td>
                </tr>
              ))}
              <tr className="bg-ink-800">
                <Td bold className="border-ink-700 bg-ink-800 text-paper-50">{mediaTotal.name}</Td>
                <Td align="right" bold className="border-ink-700 bg-ink-800 text-paper-50">{fmt(mediaTotal.budget)}</Td>
                <Td align="right" className="border-ink-700 bg-ink-800 text-paper-100">{dash(mediaTotal.clicks)}</Td>
                <Td align="right" className="border-ink-700 bg-ink-800 text-paper-100">{dash(mediaTotal.cpc)}</Td>
                <Td align="right" className="border-ink-700 bg-ink-800 text-paper-100">{mediaTotal.cv}</Td>
                <Td align="right" bold className="border-ink-700 bg-ink-800 text-paper-50">{dash(mediaTotal.leads)}</Td>
                <Td align="right" className="border-ink-700 bg-ink-800 text-paper-100">{fmt(mediaTotal.cpl ?? 0)}</Td>
                <Td align="right" bold className="border-ink-700 bg-ink-800 text-paper-50">{fmt(mediaTotal.sales)}</Td>
                <Td align="right" bold className="border-ink-700 bg-ink-800 text-paper-50">{fmt(mediaTotal.revenue)}</Td>
                <Td align="right" bold className="border-ink-700 bg-gold-500 text-ink-950">+{fmt(mediaTotal.romi ?? 0)}%</Td>
              </tr>
            </tbody>
          </table>
          <ScrollHint text="10 метрик по 11 строкам — прокрутите таблицу вправо" />
        </div>
      </Reveal>

      <Reveal delay={180}>
        <div className="mt-4 space-y-2 border border-gold-500/30 bg-gold-100/40 p-5">
          {channelNotes.map((n, i) => (
            <p key={i} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink-700">
              <Info size={15} className="mt-0.5 shrink-0 text-gold-600" />
              {n}
            </p>
          ))}
        </div>
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
        sub="Целевой месяц · 1 610 лид → 966 новых клиентов (60%) → процедуры 1-го месяца и LTV"
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
          Экономика когорты · 966 новых клиентов
        </p>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cohortEconomics.map((c, i) => (
          <CohortCard key={c.label} c={c} delay={i * 90} dark={i === 3} />
        ))}
      </div>
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

import { ArrowRight, FileSpreadsheet, MapPin } from "lucide-react";
import {
  coverStats,
  goals,
  branches,
  fileStructure,
  dashboardGoals,
  mediaChannels,
  mediaTotal,
  channelColors,
  kpiControl,
  fmt,
} from "../data";
import { Reveal, SectionHead, Pill, ScrollHint, useCountUp, useMounted, Th, Td } from "../lib/ui";

/* ================= ЛИСТ 1 · ОБЛОЖКА ================= */
export function SheetCover({ go }: { go: (tab: number) => void }) {
  return (
    <section>
      <SectionHead
        no="01"
        title="Стратегия в цифрах"
        sub="Epilate-Me · Москва, 6 филиалов · план: 54 лида в день на сеть, конверсия лид → клиент 60%"
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {coverStats.map((s, i) => (
          <StatBlock key={s.label} s={s} delay={i * 90} />
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-5">
        <Reveal className="lg:col-span-2" delay={120}>
          <div className="flex h-full flex-col gap-6 border border-ink-800/10 bg-white p-6">
            {goals.map((g) => (
              <div key={g.horizon}>
                <p className="flex items-center gap-2 font-display text-[12px] font-semibold tracking-[0.22em] text-gold-600 uppercase">
                  <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
                  {g.horizon}
                </p>
                <ul className="mt-3 space-y-2">
                  {g.points.map((p) => (
                    <li key={p} className="flex items-baseline gap-2.5 text-[15px] font-medium text-ink-900">
                      <span className="h-px w-4 shrink-0 translate-y-[-3px] bg-gold-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="lg:col-span-3" delay={200}>
          <div className="flex h-full flex-col border border-ink-800/10 bg-ink-900 p-6 text-paper-100">
            <p className="font-display text-[12px] font-semibold tracking-[0.22em] text-gold-400 uppercase">
              Сеть · 6 филиалов в Москве
            </p>
            <ol className="mt-4 grid flex-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {branches.map((b, i) => (
                <li key={b.metro} className="flex gap-3.5 border-b border-paper-100/10 pb-3.5">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center">
                    <MapPin size={15} className="text-gold-500" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[12.5px] font-bold tracking-[0.06em] text-gold-300">
                      {b.metro}
                    </span>
                    <span className="mt-0.5 block text-[12.5px] leading-snug text-paper-100/75">
                      Москва, {b.address}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-paper-100/10 pt-4 text-center">
              <div>
                <p className="font-display text-[18px] font-bold text-gold-400 tabular-nums">14</p>
                <p className="mt-0.5 text-[10.5px] leading-tight text-paper-100/55">лидов/день на филиал</p>
              </div>
              <div>
                <p className="font-display text-[18px] font-bold text-gold-400 tabular-nums">5.6</p>
                <p className="mt-0.5 text-[10.5px] leading-tight text-paper-100/55">продаж/день</p>
              </div>
              <div>
                <p className="font-display text-[18px] font-bold text-gold-400 tabular-nums">40%</p>
                <p className="mt-0.5 text-[10.5px] leading-tight text-paper-100/55">конверсия в приход</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-12">
        <p className="mb-4 flex items-center gap-2 font-display text-[12px] font-semibold tracking-[0.22em] text-ink-500 uppercase">
          <FileSpreadsheet size={15} className="text-gold-600" />
          Структура стратегии — переход по разделам
        </p>
      </Reveal>
      <div className="overflow-hidden border border-ink-800/10 bg-white">
        {fileStructure.map((f, i) => (
          <Reveal key={f.sheet} delay={i * 45}>
            <button
              onClick={() => go(f.tab)}
              className="press group grid w-full grid-cols-[44px_1fr_auto] items-center gap-x-4 gap-y-1 border-b border-ink-100 px-4 py-3.5 text-left transition-colors last:border-b-0 hover:bg-gold-100/40 active:bg-gold-100/60 md:grid-cols-[56px_240px_1fr_auto] md:gap-x-4 md:gap-y-0 md:px-6"
            >
              <span className="font-display text-[13px] font-bold text-ink-300 tabular-nums transition-colors group-hover:text-gold-600">
                {String(f.tab + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="block text-[14.5px] font-bold text-ink-900">{f.sheet}</span>
                <span className="mt-0.5 block text-[12px] leading-snug text-ink-500 md:hidden">{f.content}</span>
              </span>
              <span className="hidden text-[13px] text-ink-600 md:block">{f.content}</span>
              <ArrowRight
                size={17}
                className="text-ink-300 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-gold-600"
              />
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function StatBlock({ s, delay }: { s: (typeof coverStats)[number]; delay: number }) {
  const v = useCountUp(s.value);
  return (
    <Reveal delay={delay}>
      <div className="row-hover h-full border border-ink-800/10 bg-white p-5">
        <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-500">{s.label}</p>
        <p className="mt-2.5 font-display text-[24px] leading-none font-bold text-ink-900 md:text-[27px]">
          {s.prefix}
          {fmt(v)}
          <span className="text-[15px] font-semibold text-gold-600">{s.suffix}</span>
        </p>
        <p className="mt-2.5 text-[12.5px] leading-snug text-ink-600">{s.note}</p>
      </div>
    </Reveal>
  );
}

/* ================= ЛИСТ 2 · ДАШБОРД ================= */
export function SheetDashboard() {
  const mounted = useMounted(250);
  return (
    <section>
      <SectionHead
        no="02"
        title="Дашборд"
        sub="Целевые показатели и KPI"
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <div className="flex h-full flex-col border border-ink-800/10 bg-white p-6">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-500">
              Целевые показатели · месяц
            </p>
            <div className="mt-4 grid flex-1 gap-3 sm:grid-cols-2">
              {dashboardGoals.map((g, i) => (
                <div
                  key={g.label}
                  className="row-hover flex flex-col justify-between border border-ink-100 bg-paper-100/50 p-4"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-500">{g.label}</p>
                  <p className="mt-2 font-display text-[22px] leading-none font-bold text-ink-900 tabular-nums md:text-[24px]">
                    {g.value}
                  </p>
                  <p className="mt-2 text-[11.5px] text-ink-500">{g.note}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-1" delay={120}>
          <div className="flex h-full flex-col border border-ink-800/10 bg-white p-6">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-500">
              Бюджет по каналам · 1 080 000 ₽
            </p>
            <div className="mt-5 flex-1 space-y-3">
              {mediaChannels.map((c, i) => {
                const pct = (c.budget / mediaTotal.budget) * 100;
                return (
                  <div key={c.name}>
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="truncate text-[11.5px] font-semibold text-ink-700">{c.name}</p>
                      <p className="whitespace-nowrap text-[11px] font-bold text-ink-500 tabular-nums">
                        {c.budget > 0 ? `${fmt(c.budget)}` : "органика"}
                      </p>
                    </div>
                    <div className="mt-1 h-2 w-full overflow-hidden rounded-[2px] bg-ink-100/60">
                      <div
                        className="h-full rounded-[2px]"
                        style={{
                          width: mounted ? `${Math.max(pct, c.organic ? 2 : 0)}%` : "0%",
                          backgroundColor: c.organic ? "transparent" : channelColors[i % channelColors.length],
                          border: c.organic ? "1px dashed #8A6A42" : "none",
                          transition: `width 1.1s cubic-bezier(.22,.61,.36,1) ${i * 70}ms`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={80} className="mt-12">
        <p className="mb-4 flex items-center gap-2 font-display text-[12px] font-semibold tracking-[0.22em] text-ink-500 uppercase">
          <span className="h-1.5 w-1.5 rotate-45 bg-flame-500" />
          KPI-контроль · красные линии
        </p>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {kpiControl.map((k, i) => (
          <Reveal key={k.metric} delay={i * 70}>
            <div className="row-hover h-full border border-ink-800/10 bg-white p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="text-[14px] font-bold text-ink-900">{k.metric}</p>
                <Pill tone="slate">{k.freq}</Pill>
              </div>
              <div className="mt-3.5 flex flex-wrap items-center gap-2">
                <Pill tone="green">цель {k.target}</Pill>
                <Pill tone="red">стоп {k.red}</Pill>
              </div>
            </div>
          </Reveal>
        ))}
        <Reveal delay={500}>
          <div className="flex h-full flex-col justify-center border border-ink-800 bg-ink-900 p-5">
            <p className="font-display text-[12px] font-semibold tracking-[0.18em] text-gold-400 uppercase">
              Правило среза
            </p>
            <p className="mt-2 text-[13.5px] leading-relaxed text-paper-100/85">
              Метрика ниже красной линии — стоп и разбор канала в течение 48 часов: креативы, ставки,
              посадочная, скрипты админов.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

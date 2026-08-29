import { ArrowRight, FileSpreadsheet } from "lucide-react";
import {
  coverStats,
  goals,
  keyDecisions,
  fileStructure,
  horizons,
  growth,
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
        sub="Сеть клиник лазерной эпиляции и косметологии Epilate-Me · Москва, 9 филиалов · план подготовлен на основе данных Директа (август 2026) и семантического ядра"
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
          <div className="h-full border border-ink-800/10 bg-ink-900 p-6 text-paper-100">
            <p className="font-display text-[12px] font-semibold tracking-[0.22em] text-gold-400 uppercase">
              Ключевые решения
            </p>
            <ol className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {keyDecisions.map((d, i) => (
                <li key={d} className="flex gap-3.5 border-b border-paper-100/10 pb-4">
                  <span className="font-display text-[13px] font-bold text-gold-500 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] leading-snug text-paper-100/90">{d}</span>
                </li>
              ))}
            </ol>
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
        title="Дашборд собственника"
        sub="Целевые показатели по горизонтам планирования и красные линии KPI, за которыми начинается немедленный разбор"
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <Reveal className="lg:col-span-1">
          <div className="flex h-full flex-col border border-ink-800/10 bg-white p-6">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-500">
              Траектория · заявок / день
            </p>
            <div className="mt-6 flex flex-1 items-end justify-between gap-3 px-1" style={{ minHeight: 190 }}>
              {growth.map((g, i) => (
                <div key={g.label} className="flex flex-1 flex-col items-center gap-2">
                  <span
                    className={`font-display text-[13px] font-bold tabular-nums ${
                      i === growth.length - 1 ? "text-gold-600" : "text-ink-700"
                    }`}
                  >
                    {g.value}
                  </span>
                  <div className="flex h-[150px] w-full max-w-[46px] items-end overflow-hidden rounded-[3px] bg-ink-100/70">
                    <div
                      className={`w-full rounded-[3px] ${
                        i === growth.length - 1 ? "grad-gold-v" : "grad-ink-v"
                      }`}
                      style={{
                        height: mounted ? `${g.h}%` : "0%",
                        transition: `height 1.1s cubic-bezier(.22,.61,.36,1) ${i * 140}ms`,
                      }}
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-ink-500">{g.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-2" delay={120}>
          <div className="h-full overflow-x-auto border border-ink-800/10 bg-white p-2 md:p-3">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr>
                  <Th>Метрика</Th>
                  <Th align="right">Сейчас · авг 2026</Th>
                  <Th align="right">3 мес</Th>
                  <Th align="right">6 мес</Th>
                  <Th align="right">12 мес</Th>
                </tr>
              </thead>
              <tbody>
                {horizons.map((h, i) => (
                  <tr
                    key={h.metric}
                    className={`transition-colors hover:bg-gold-100/40 ${i % 2 ? "bg-paper-200/60" : "bg-white"}`}
                  >
                    <Td bold>{h.metric}</Td>
                    <Td align="right" className="text-ink-500">{h.now}</Td>
                    <Td align="right">{h.m3}</Td>
                    <Td align="right">{h.m6}</Td>
                    <Td align="right" bold className="bg-gold-100/50 text-gold-700">{h.m12}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
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

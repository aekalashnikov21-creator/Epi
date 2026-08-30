import { ArrowRight, Flag, ShieldAlert } from "lucide-react";
import { phases, checkpoints, risks } from "../data";
import { Reveal, SectionHead, Pill } from "../lib/ui";

/* ================= ЛИСТ 6 · ROADMAP ================= */
export function SheetRoadmap() {
  return (
    <section>
      <SectionHead
        no="06"
        title="Дорожная карта внедрения"
        sub="4 фазы на 12 месяцев: от настройки аналитики и верификации 6 филиалов до 1 100 000 ₽/мес и 84 лидов в день"
      />

      <div className="relative">
        <span className="grad-timeline absolute top-3 bottom-3 left-[8px] w-px" aria-hidden />
        <div className="space-y-6">
          {phases.map((p, i) => (
            <Reveal key={p.phase} delay={i * 110}>
              <div className="relative grid gap-4 md:grid-cols-[52px_1fr]">
                <span className="relative z-10 mt-1.5 grid h-[17px] w-[17px] place-items-center">
                  <span className="h-[13px] w-[13px] rotate-45 border-2 border-gold-500 bg-paper-100" />
                </span>
                <div className="row-hover border border-ink-800/10 bg-white p-6">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <p className="font-display text-[17px] font-bold text-ink-900">{p.phase}</p>
                    <Pill tone="slate">{p.period}</Pill>
                    <Pill tone="gold">{p.budget}</Pill>
                  </div>
                  <ul className="mt-4 grid gap-x-8 gap-y-2 md:grid-cols-2">
                    {p.actions.map((a) => (
                      <li key={a} className="flex items-baseline gap-2.5 text-[13.5px] leading-snug text-ink-700">
                        <span className="h-[5px] w-[5px] shrink-0 translate-y-[-1px] rotate-45 bg-gold-500" />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap items-center gap-3 border border-gold-500/40 bg-gold-100/50 px-4 py-3">
                    <Flag size={14} className="shrink-0 text-gold-600" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold-700">
                      KPI выхода из фазы
                    </span>
                    <span className="text-[13px] font-semibold text-ink-900 tabular-nums">{p.kpi}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= ЛИСТ 7 · КОНТРОЛЬНЫЕ ТОЧКИ ================= */
export function SheetControl() {
  return (
    <section>
      <SectionHead
        no="07"
        title="Таблица контрольных точек"
        sub="Срезы и управленческие решения: каждая точка отвечает на вопрос «идём дальше, масштабируем или чиним»"
      />

      <div className="space-y-3">
        {checkpoints.map((c, i) => (
          <Reveal key={c.point} delay={i * 80}>
            <div className="row-hover grid gap-4 border border-ink-800/10 bg-white p-5 md:grid-cols-[200px_1fr_320px] md:items-center">
              <div>
                <p className="font-display text-[14px] font-bold text-ink-900">{c.point}</p>
                <p className="mt-1 text-[12.5px] text-ink-500">{c.check}</p>
              </div>
              <p className="text-[13.5px] font-medium text-ink-700 tabular-nums">{c.kpi}</p>
              <div className="flex items-center gap-3 border-l-2 border-gold-500 bg-ink-900 px-4 py-3">
                <ArrowRight size={15} className="shrink-0 text-gold-400" />
                <p className="text-[13px] font-bold text-paper-50">{c.decision}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ================= ЛИСТ 8 · РИСКИ ================= */
export function SheetRisks() {
  return (
    <section>
      <SectionHead
        no="08"
        title="Риски"
        sub="Четыре рабочих риска стратегии — у каждого есть заранее подготовленный ответ"
      />

      <div className="grid gap-4 md:grid-cols-2">
        {risks.map((r, i) => (
          <Reveal key={r.risk} delay={i * 80}>
            <div className="row-hover flex h-full flex-col border border-ink-800/10 bg-white p-6">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <p className="flex items-start gap-2.5 text-[15px] font-bold text-ink-900">
                  <ShieldAlert size={17} className="mt-0.5 shrink-0 text-flame-500" />
                  {r.risk}
                </p>
                <div className="flex gap-2">
                  <Pill tone={r.prob === "Высокая" ? "red" : "gold"}>P: {r.prob.toLowerCase()}</Pill>
                  <Pill tone={r.impact === "Высокое" ? "red" : "slate"}>I: {r.impact.toLowerCase()}</Pill>
                </div>
              </div>
              <div className="mt-4 border-t border-ink-100 pt-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-600">Что делаем</p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-700">{r.mitigation}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

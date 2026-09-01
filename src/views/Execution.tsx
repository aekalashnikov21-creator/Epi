import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Minus, Plus } from "lucide-react";
import { channelDetails, negativeGroups, doNotNegate } from "../data";
import { Reveal, SectionHead } from "../lib/ui";

/* ================= ЛИСТ 10 · ДЕТАЛИ КАНАЛОВ ================= */
export function SheetChannels() {
  return (
    <section>
      <SectionHead
        no="10"
        title="Детализация по каналам"
        sub="Конкретные действия и ожидаемый результат каждого канала к месяцу 6"
      />

      <div className="border-t border-ink-800/15">
        {channelDetails.map((c, i) => (
          <Reveal key={c.channel} delay={i * 55}>
            <div className="row-hover group grid gap-x-6 gap-y-2.5 border-b border-ink-100 px-2 py-5 md:grid-cols-[220px_1fr_280px] md:items-center md:px-3">
              <p className="flex items-baseline gap-3">
                <span className="font-display text-[12px] font-bold text-ink-300 tabular-nums transition-colors group-hover:text-gold-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[13.5px] font-bold text-ink-900">{c.channel}</span>
              </p>
              <p className="text-[13.5px] leading-relaxed text-ink-700">{c.actions}</p>
              <div className="flex items-center gap-2 border border-gold-500/40 bg-gold-100/50 px-3.5 py-2.5">
                <ArrowUpRight size={14} className="shrink-0 text-gold-600" />
                <p className="text-[12.5px] font-bold text-gold-700 tabular-nums">{c.result}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ================= ЛИСТ 11 · ПРИЛОЖЕНИЕ ================= */
export function SheetAppendix() {
  const [copied, setCopied] = useState<number | null>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const copy = async (i: number, words: string[]) => {
    const text = words.join(", ");
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        /* среда без clipboard API */
      }
    }
    setCopied(i);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(null), 1700);
  };

  return (
    <section>
      <SectionHead
        no="11"
        title="Приложение: минус-слова по группам"
        sub="Для кампании «Поиск» на уровне аккаунта · копируйте группу целиком одним нажатием"
      />

      <div className="grid gap-4 md:grid-cols-2">
        {negativeGroups.map((g, i) => (
          <Reveal key={g.group} delay={i * 90}>
            <div className="flex h-full flex-col border border-ink-800/10 bg-white p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="font-display text-[14px] font-bold text-ink-900">{g.group}</p>
                <button
                  onClick={() => copy(i, g.words)}
                  className={`press inline-flex items-center gap-1.5 rounded-[3px] border px-3 py-1.5 text-[12px] font-bold transition-all duration-200 ${
                    copied === i
                      ? "border-moss-500 bg-moss-500 text-paper-50"
                      : "border-ink-300/70 bg-paper-100 text-ink-700 hover:border-gold-500 hover:bg-gold-100/60 hover:text-gold-700"
                  }`}
                >
                  {copied === i ? <Check size={13} /> : <Copy size={13} />}
                  {copied === i ? "Скопировано" : "Копировать"}
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.words.map((w) => (
                  <span
                    key={w}
                    className="inline-flex items-center gap-1 rounded-[3px] border border-flame-500/25 bg-flame-100/50 px-2 py-1 text-[12px] text-ink-800 transition-colors hover:border-flame-500/60"
                  >
                    <Minus size={11} className="shrink-0 text-flame-600" strokeWidth={3} />
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={140} className="mt-4">
        <div className="border border-ink-800 bg-ink-900 p-6">
          <p className="flex items-center gap-2 font-display text-[12px] font-semibold tracking-[0.22em] text-gold-400 uppercase">
            <Plus size={14} />
            Не минусовать — целевые операторы запросов
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {doNotNegate.map((w) => (
              <span
                key={w}
                className="inline-flex items-center gap-1 rounded-[3px] border border-gold-500/40 bg-gold-500/10 px-2 py-1 text-[12px] font-semibold text-gold-300"
              >
                <Plus size={11} className="text-gold-400" strokeWidth={3} />
                {w}
              </span>
            ))}
          </div>
          <p className="mt-4 text-[12.5px] text-paper-100/60">
            «Электроэпиляцию» не минусуем — выносим в отдельную кампанию с собственной посадочной.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

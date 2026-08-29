import { useEffect, useRef, useState, type ReactNode } from "react";

/* ---------- hooks ---------- */
export function useMounted(delay = 80): boolean {
  const [m, setM] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setM(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return m;
}

export function useCountUp(target: number, duration = 1200): number {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const e = 1 - Math.pow(1 - p, 3);
      setV(target * e);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return v;
}

/* ---------- reveal on scroll ---------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("rv-in");
      return;
    }
    let io: IntersectionObserver | null = null;
    const show = () => {
      el.classList.add("rv-in");
      io?.disconnect();
    };
    io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) show();
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
    io.observe(el);
    // страховка: если среда не шлёт события IO — показываем принудительно
    const t = window.setTimeout(show, 1600);
    return () => {
      io?.disconnect();
      window.clearTimeout(t);
    };
  }, []);
  return (
    <div ref={ref} className={`rv ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------- animated horizontal bar ---------- */
export function GrowBar({
  pct,
  delay = 0,
  color = "bg-gold-500",
  track = "bg-ink-100/80",
  h = "h-2",
}: {
  pct: number;
  delay?: number;
  color?: string;
  track?: string;
  h?: string;
}) {
  const [w, setW] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setW(pct), 90 + delay);
    return () => clearTimeout(t);
  }, [pct, delay]);
  return (
    <div className={`w-full ${h} ${track} overflow-hidden rounded-[2px]`}>
      <div
        className={`h-full ${color} rounded-[2px]`}
        style={{ width: `${w}%`, transition: "width 1.15s cubic-bezier(.22,.61,.36,1)" }}
      />
    </div>
  );
}

/* ---------- section heading ---------- */
export function SectionHead({
  no,
  title,
  sub,
}: {
  no: string;
  title: string;
  sub?: string;
}) {
  return (
    <Reveal className="mb-10 md:mb-12">
      <div className="flex items-center gap-4">
        <span className="font-display text-[13px] font-semibold tracking-[0.35em] text-gold-600">
          {no}
        </span>
        <span className="h-px flex-1 bg-ink-800/15" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
      </div>
      <h2 className="mt-4 font-display text-[22px] font-bold leading-tight text-ink-900 md:text-[34px]">
        {title}
      </h2>
      {sub && <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-600">{sub}</p>}
    </Reveal>
  );
}

/* ---------- mobile scroll hint for wide tables ---------- */
export function ScrollHint({ text = "Таблица шире экрана — прокрутите вправо" }: { text?: string }) {
  return (
    <p className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-ink-500 md:hidden">
      <svg width="13" height="13" viewBox="0 0 13 13" aria-hidden>
        <path
          d="M2 6.5h8M7 3l3.5 3.5L7 10"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {text}
    </p>
  );
}

/* ---------- pills ---------- */
export function Pill({
  tone,
  children,
  className = "",
}: {
  tone: "gold" | "red" | "green" | "slate";
  children: ReactNode;
  className?: string;
}) {
  const tones: Record<string, string> = {
    gold: "bg-gold-100 text-gold-700 border-gold-500/40",
    red: "bg-flame-100 text-flame-700 border-flame-500/35",
    green: "bg-moss-100 text-moss-700 border-moss-500/35",
    slate: "bg-ink-100/70 text-ink-700 border-ink-300/60",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[3px] border px-2 py-0.5 text-[12px] font-semibold tabular-nums ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

/* ---------- data table ---------- */
export function Th({ children, align = "left" }: { children: ReactNode; align?: "left" | "right" }) {
  return (
    <th
      className={`whitespace-nowrap border border-ink-700/60 bg-ink-800 px-3 py-2.5 text-[11.5px] font-bold uppercase tracking-wider text-paper-100 ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      {children}
    </th>
  );
}

export function Td({
  children,
  align = "left",
  bold = false,
  className = "",
}: {
  children: ReactNode;
  align?: "left" | "right";
  bold?: boolean;
  className?: string;
}) {
  return (
    <td
      className={`border border-ink-100 px-3 py-2.5 text-[13px] leading-snug tabular-nums ${
        align === "right" ? "text-right" : "text-left"
      } ${bold ? "font-bold text-ink-900" : "text-ink-800"} ${className}`}
    >
      {children}
    </td>
  );
}

/* ---------- logo mark ---------- */
export function LogoMark({ size = 38 }: { size?: number }) {
  return (
    <span
      className="grid shrink-0 place-items-center rounded-[8px] bg-ink-800 ring-1 ring-gold-500/50"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 24 24" width={size * 0.62} height={size * 0.62} aria-hidden>
        <path d="M12 3l2 7 7 2-7 2-2 7-2-7-7-2 7-2z" fill="#D4AF37" />
      </svg>
    </span>
  );
}

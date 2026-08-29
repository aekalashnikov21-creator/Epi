import { Component, useState, type ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Filter,
  Flag,
  Gauge,
  Layers,
  LayoutGrid,
  MapPin,
  Megaphone,
  Percent,
  Route,
  Wallet,
} from "lucide-react";
import { tickerItems, fmt } from "./data";
import { LogoMark, useCountUp, useMounted } from "./lib/ui";
import { SheetCover, SheetDashboard } from "./views/Overview";
import { SheetEconomics, SheetMedia, SheetFunnel, SheetRomi } from "./views/Finance";
import { SheetRoadmap, SheetControl, SheetRisks } from "./views/Plan";
import { SheetChannels, SheetAppendix } from "./views/Execution";

const tabs = [
  { num: "01", label: "Обложка", icon: LayoutGrid },
  { num: "02", label: "Дашборд", icon: Gauge },
  { num: "03", label: "Юнит-экономика", icon: Wallet },
  { num: "04", label: "Медиаплан", icon: Megaphone },
  { num: "05", label: "Воронка", icon: Filter },
  { num: "06", label: "ROMI", icon: Percent },
  { num: "07", label: "Roadmap", icon: Route },
  { num: "08", label: "Точки", icon: Flag },
  { num: "09", label: "Риски", icon: AlertTriangle },
  { num: "10", label: "Каналы", icon: Layers },
  { num: "11", label: "Приложение", icon: BookOpen },
];

const CAC_PLAN_PCT = (2097 / 16000) * 100;

function DeckStat({
  label,
  value,
  prefix = "",
  suffix = "",
}: {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const v = useCountUp(value, 1400);
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-paper-100/50 md:text-[10.5px] md:tracking-[0.18em]">{label}</p>
      <p className="mt-1.5 font-display text-[17px] leading-tight font-bold text-paper-50 tabular-nums sm:text-[21px] md:text-[23px]">
        {prefix}
        {fmt(v)}
        <span className="text-[12px] font-semibold text-gold-400 md:text-[13px]">{suffix}</span>
      </p>
    </div>
  );
}

function Header() {
  const mounted = useMounted(450);
  return (
    <header className="relative overflow-hidden bg-ink-950 text-paper-100">
      <div className="bg-blueprint absolute inset-0" aria-hidden />
      <div className="deck-glow absolute inset-0" aria-hidden />
      <div className="beam" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center justify-between gap-4 border-b border-paper-100/10 py-5">
          <div className="flex items-center gap-3">
            <LogoMark size={40} />
            <div>
              <p className="font-display text-[15px] leading-none font-bold tracking-[0.08em] text-paper-50">
                EPILATE-ME
              </p>
              <p className="mt-1 text-[10px] font-bold tracking-[0.32em] text-gold-400 uppercase">
                Стратегия 2026–2027
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="flex items-center gap-1.5 border border-paper-100/15 bg-paper-100/5 px-3 py-1.5 text-[11.5px] font-semibold text-paper-100/80">
              <MapPin size={12} className="text-gold-400" />
              9 филиалов · Москва
            </span>
            <span className="border border-paper-100/15 bg-paper-100/5 px-3 py-1.5 text-[11.5px] font-semibold text-paper-100/80">
              Директ · авг 2026
            </span>
          </div>
        </div>

        <div className="grid gap-10 py-10 md:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.26em] text-gold-400 uppercase">
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-gold-500 text-gold-500" />
              Действующий план · лазерная эпиляция и косметология
            </p>
            <h1 className="mt-5 font-display text-[30px] leading-[1.06] font-bold md:text-[44px] xl:text-[48px]">
              <span className="text-paper-100/55 tabular-nums">1.5</span>
              <ArrowRight size={30} className="mx-2 inline-block -translate-y-1 text-gold-500 md:mx-3 md:-translate-y-2" />
              <span className="text-gold-400 tabular-nums">12</span>
              <span className="mt-1 block text-paper-50">заявок в день за 12 месяцев</span>
            </h1>
            <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-paper-100/70">
              Фазовый разгон бюджета до 281 000 ₽/мес по 8 каналам, ставка на горячий Поиск, гео-Карты
              и органику. Без РСЯ-слива, с закрытыми дырами в посадочных и экономикой, посчитанной до процедуры.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Фокус: Поиск + Карты", "Мужской сегмент", "Membership 2 900 ₽/мес", "Органика до 35%"].map((c) => (
                <span
                  key={c}
                  className="flex items-center gap-2 border border-paper-100/15 bg-paper-100/5 px-3 py-1.5 text-[12px] font-semibold text-paper-100/85 transition-colors hover:border-gold-500/60 hover:text-gold-300"
                >
                  <span className="h-1 w-1 rotate-45 bg-gold-500" />
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-paper-100/12 bg-ink-900/75 p-6 md:p-7">
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              <DeckStat label="Бюджет · Фаза 3" value={281000} suffix=" ₽/мес" />
              <DeckStat label="Заявки в месяц" value={266} />
              <DeckStat label="Клиенты в месяц" value={134} />
              <DeckStat label="ROMI по LTV" value={663} prefix="+" suffix="%" />
            </div>
            <div className="mt-7 border-t border-paper-100/10 pt-5">
              <div className="flex items-baseline justify-between">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-paper-100/50">
                  Запас прочности CAC
                </p>
                <p className="font-display text-[19px] font-bold text-gold-400 tabular-nums">×7.6</p>
              </div>
              <div className="relative mt-3 h-2 w-full rounded-[2px] bg-paper-100/10">
                <div
                  className="grad-moss absolute inset-y-0 left-0 rounded-[2px]"
                  style={{ width: mounted ? `${CAC_PLAN_PCT}%` : "0%", transition: "width 1.4s cubic-bezier(.22,.61,.36,1)" }}
                />
                <span
                  className="absolute -top-1 -bottom-1 w-[2px] bg-gold-400"
                  style={{ left: `${CAC_PLAN_PCT}%` }}
                />
              </div>
              <div className="mt-2 flex justify-between text-[11px] text-paper-100/55 tabular-nums">
                <span className="font-semibold text-moss-500">план 2 097 ₽</span>
                <span>
                  безубыточность <b className="text-paper-50">16 000 ₽</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[3px] bg-gold-500" />
    </header>
  );
}

function Ticker() {
  const seq = (key: string) => (
    <div key={key} className="flex items-center">
      {tickerItems.map((t) => (
        <span key={t} className="flex items-center text-[11.5px] font-bold tracking-[0.14em] uppercase">
          {t}
          <svg width="8" height="8" viewBox="0 0 8 8" className="mx-5 shrink-0" aria-hidden>
            <rect x="2" y="2" width="4" height="4" transform="rotate(45 4 4)" fill="currentColor" />
          </svg>
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden border-y border-gold-600/40 bg-gold-500 text-ink-950">
      <div className="ticker-track py-2">
        {seq("a")}
        {seq("b")}
      </div>
    </div>
  );
}

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="grid min-h-screen place-items-center bg-paper-100 p-6 text-ink-900">
          <div className="max-w-md border border-flame-500/40 bg-white p-8">
            <p className="font-display text-[14px] font-bold text-flame-600 uppercase tracking-[0.18em]">
              Ошибка отрисовки
            </p>
            <p className="mt-3 text-[13.5px] leading-relaxed text-ink-700">
              Страница стратегии не смогла отобразиться. Попробуйте обновить браузер.
            </p>
            <p className="mt-3 break-words text-[11.5px] text-ink-500 tabular-nums">
              {String(this.state.error)}
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [tab, setTab] = useState(0);

  const go = (i: number) => {
    setTab(i);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ErrorBoundary>
    <div className="min-h-screen">
      <Header />
      <Ticker />

      <div className="sticky top-0 z-40 border-b border-ink-800/15 bg-paper-200/95 shadow-[0_8px_24px_-18px_rgba(16,35,58,0.4)] backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <nav className="no-scrollbar flex gap-1 overflow-x-auto pt-2" aria-label="Листы стратегии">
            {tabs.map((t, i) => {
              const Icon = t.icon;
              const active = tab === i;
              return (
                <button
                  key={t.num}
                  onClick={() => go(i)}
                  className={`sheet-tab flex shrink-0 items-center gap-2 px-3.5 pb-2.5 pt-2 text-[12.5px] font-bold whitespace-nowrap transition-colors duration-200 md:px-4 ${
                    active
                      ? "bg-gold-500 text-ink-950"
                      : "text-ink-600 hover:bg-white/70 hover:text-ink-900"
                  }`}
                >
                  <Icon size={13} className={active ? "text-ink-900" : "text-ink-400"} />
                  {t.label}
                  <span className={`text-[10px] tabular-nums ${active ? "text-ink-900/60" : "text-ink-400"}`}>
                    {t.num}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      <main className="relative">
        <div className="bg-papergrid pointer-events-none absolute inset-0" aria-hidden />
        <div key={tab} className="relative mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          {tab === 0 && <SheetCover go={go} />}
          {tab === 1 && <SheetDashboard />}
          {tab === 2 && <SheetEconomics />}
          {tab === 3 && <SheetMedia />}
          {tab === 4 && <SheetFunnel />}
          {tab === 5 && <SheetRomi />}
          {tab === 6 && <SheetRoadmap />}
          {tab === 7 && <SheetControl />}
          {tab === 8 && <SheetRisks />}
          {tab === 9 && <SheetChannels />}
          {tab === 10 && <SheetAppendix />}
        </div>
      </main>

      <footer className="relative border-t-4 border-gold-500 bg-ink-950 text-paper-100">
        <div className="bg-blueprint absolute inset-0" aria-hidden />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-start gap-3.5">
            <LogoMark size={38} />
            <div>
              <p className="font-display text-[13px] font-bold tracking-[0.08em] text-paper-50">EPILATE-ME</p>
              <p className="mt-1.5 max-w-md text-[12px] leading-relaxed text-paper-100/50">
                Маркетинг-стратегия 2026–2027 · сеть клиник лазерной эпиляции и косметологии · Москва, 9 филиалов ·
                подготовлено на основе данных Директа (август 2026) и семантического ядра
              </p>
            </div>
          </div>
          <div className="md:text-right">
            <p className="flex flex-wrap items-center gap-2 font-display text-[12.5px] font-bold text-gold-400 tabular-nums">
              281 000 ₽ <ArrowRight size={13} /> 266 заявок <ArrowRight size={13} /> 134 клиента{" "}
              <ArrowRight size={13} /> ROMI +663%
            </p>
            <p className="mt-2 text-[11px] text-paper-100/40">
              Epilate-Me_Стратегия_2026-2027.xlsx · интерактивная версия
            </p>
          </div>
        </div>
      </footer>
    </div>
    </ErrorBoundary>
  );
}

import { Component, useState, type ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Download,
  FileSpreadsheet,
  Filter,
  Flag,
  Gauge,
  Layers,
  LayoutGrid,
  Loader2,
  MapPin,
  Megaphone,
  Route,
  Wallet,
} from "lucide-react";
import { tickerItems, fmt } from "./data";
import { downloadExcel } from "./excelExport";
import { LogoMark, useCountUp, useMounted } from "./lib/ui";
import { SheetCover, SheetDashboard } from "./views/Overview";
import { SheetEconomics, SheetMedia, SheetFunnel } from "./views/Finance";
import { SheetRoadmap, SheetControl, SheetRisks } from "./views/Plan";
import { SheetChannels } from "./views/Execution";

const tabs = [
  { num: "01", label: "Обложка", icon: LayoutGrid },
  { num: "02", label: "Дашборд", icon: Gauge },
  { num: "03", label: "Юнит-экономика", icon: Wallet },
  { num: "04", label: "Медиаплан", icon: Megaphone },
  { num: "05", label: "Воронка", icon: Filter },
  { num: "06", label: "Roadmap", icon: Route },
  { num: "07", label: "Точки", icon: Flag },
  { num: "08", label: "Риски", icon: AlertTriangle },
  { num: "09", label: "Каналы", icon: Layers },
];

const CAC_PLAN_PCT = (1091 / 16000) * 100;

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
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-500 md:text-[10.5px] md:tracking-[0.18em]">{label}</p>
      <p className="mt-1.5 font-display text-[17px] leading-tight font-bold text-ink-900 tabular-nums sm:text-[21px] md:text-[23px]">
        {prefix}
        {fmt(v)}
        <span className="text-[12px] font-semibold text-gold-600 md:text-[13px]">{suffix}</span>
      </p>
    </div>
  );
}

function Header({ tab }: { tab: number }) {
  const mounted = useMounted(450);
  const [exporting, setExporting] = useState(false);
  const onExport = async () => {
    if (exporting) return;
    setExporting(true);
    try {
      await downloadExcel();
    } catch (e) {
      console.error(e);
      window.alert("Не удалось сформировать Excel-файл: " + String(e));
    } finally {
      setExporting(false);
    }
  };
  return (
    <header className="hero-bg relative overflow-hidden text-paper-100">
      <div className="bg-blueprint absolute inset-0" aria-hidden />
      <div className="deck-glow absolute inset-0" aria-hidden />
      <div className="beam" aria-hidden />
      {/* фирменные тонкие белые дуги */}
      <svg
        className="pointer-events-none absolute top-0 right-0 h-full w-[58%] opacity-35"
        viewBox="0 0 600 600"
        fill="none"
        preserveAspectRatio="xMaxYMid slice"
        aria-hidden
      >
        <path d="M0 190 C 200 140, 400 240, 600 170" stroke="#fff" strokeWidth="1" />
        <path d="M0 300 C 220 250, 420 340, 600 280" stroke="#fff" strokeWidth="1" />
        <path d="M0 410 C 200 370, 420 450, 600 395" stroke="#fff" strokeWidth="1" />
        <circle cx="470" cy="150" r="130" stroke="#fff" strokeWidth="1" opacity="0.7" />
        <circle cx="520" cy="420" r="80" stroke="#fff" strokeWidth="1" opacity="0.5" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-3 border-b border-paper-100/10 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="flex items-center gap-3">
            <LogoMark size={40} />
            <div>
              <p className="font-display text-[15px] leading-none font-bold tracking-[0.08em] text-paper-50">
                EPILATE-ME
              </p>
              <p className="mt-1 text-[10px] font-bold tracking-[0.32em] text-paper-50/85 uppercase">
                Стратегия 2026–2027
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:justify-end">
            <span className="flex items-center gap-1.5 border border-paper-100/15 bg-paper-100/5 px-3 py-1.5 text-[11.5px] font-semibold text-paper-100/80">
              <MapPin size={12} className="text-gold-400" />
              6 филиалов · Москва
            </span>
            <button
              onClick={onExport}
              disabled={exporting}
              className="press inline-flex items-center gap-2 rounded-full bg-paper-50 px-5 py-2 text-[12.5px] font-bold text-ink-900 shadow-[0_12px_26px_-14px_rgba(36,27,18,0.8)] transition-colors hover:bg-gold-100 disabled:cursor-wait disabled:opacity-75"
              title="Сформировать книгу Excel со всеми 9 листами и фирменным оформлением"
            >
              {exporting ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />}
              {exporting ? "Формируем файл…" : "Скачать .xlsx"}
            </button>
          </div>
        </div>

        <div className="grid gap-10 py-10 md:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.26em] text-paper-50/85 uppercase">
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-paper-50 text-paper-50" />
              Лазерная эпиляция и косметология
            </p>
            <h1 className="mt-5 font-display text-[32px] leading-[1.12] font-medium md:text-[52px] md:font-normal xl:text-[60px]">
              <span className="tabular-nums">84</span> лида в день
              <span className="mt-1 block text-paper-50/90">на всю сеть из 6 филиалов</span>
            </h1>
            <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-paper-100/70">
              6 филиалов × ~14 лидов в день. При конверсии в фактический приход 40% это 34 продажи
              ежедневно — 2 521 лид и 1 008 продаж в месяц при медиабюджете 1 100 000 ₽.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Лидеры CPL: Карты 189 ₽, банки 250 ₽", "Авито считаем консервативно (CV 6%)", "Google Maps — 38 лидов за 0 ₽", "Директ даёт объём — ROMI под контроль"].map((c) => (
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

          <div className="border border-white/50 bg-paper-50/95 p-6 shadow-[0_24px_60px_-35px_rgba(36,27,18,0.55)] md:p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-500">
                Ключевые параметры плана
              </p>
              {/* фирменное кольцо пагинации */}
              <span
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-500 font-display text-[11.5px] font-semibold text-ink-900 tabular-nums"
                title={`Раздел ${tab + 1} из 9`}
              >
                {`${String(tab + 1).padStart(2, "0")}/09`}
              </span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-6">
              <DeckStat label="Медиабюджет" value={1100000} suffix=" ₽/мес" />
              <DeckStat label="Лиды в месяц" value={2521} />
              <DeckStat label="Продажи в месяц" value={1008} />
              <DeckStat label="ROMI (1-й месяц)" value={221} prefix="+" suffix="%" />
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-ink-500 tabular-nums">
              ROMI по LTV-марже когорты <b className="text-gold-700">+1 366%</b> · media-CAC 1 091 ₽ · CPL 436 ₽
            </p>
            <div className="mt-7 border-t border-ink-100 pt-5">
              <div className="flex items-baseline justify-between">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-500">
                  Запас прочности media-CAC
                </p>
                <p className="font-display text-[19px] font-bold text-gold-600 tabular-nums">×14.7</p>
              </div>
              <div className="relative mt-3 h-2 w-full rounded-[2px] bg-paper-200">
                <div
                  className="grad-moss absolute inset-y-0 left-0 rounded-[2px]"
                  style={{ width: mounted ? `${CAC_PLAN_PCT}%` : "0%", transition: "width 1.4s cubic-bezier(.22,.61,.36,1)" }}
                />
                <span
                  className="absolute -top-1 -bottom-1 w-[2px] bg-gold-500"
                  style={{ left: `${CAC_PLAN_PCT}%` }}
                />
              </div>
              <div className="mt-2 flex justify-between text-[11px] text-ink-500 tabular-nums">
                <span className="font-semibold text-moss-600">план 1 091 ₽</span>
                <span>
                  безубыточность <b className="text-ink-900">16 000 ₽</b>
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
      <Header tab={tab} />
      <Ticker />

      <div className="sticky top-0 z-40 border-b border-ink-800/15 bg-paper-200/95 shadow-[0_8px_24px_-18px_rgba(110,83,52,0.45)] backdrop-blur-sm">
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <nav className="no-scrollbar flex items-center gap-2 overflow-x-auto py-2.5" aria-label="Листы стратегии">
            {tabs.map((t, i) => {
              const Icon = t.icon;
              const active = tab === i;
              return (
                <button
                  key={t.num}
                  onClick={() => go(i)}
                  className={`press inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-1.5 text-[12.5px] font-bold whitespace-nowrap transition-colors duration-200 md:px-4 ${
                    active
                      ? "border-ink-900 bg-ink-900 text-paper-50 shadow-[0_10px_22px_-12px_rgba(36,27,18,0.9)]"
                      : "border-ink-800/25 bg-transparent text-ink-700 hover:border-gold-500 hover:bg-white/70 hover:text-ink-900"
                  }`}
                >
                  <Icon size={13} className={active ? "text-gold-400" : "text-ink-400"} />
                  {t.label}
                  <span
                    className={`hidden text-[10px] tabular-nums min-[420px]:inline ${
                      active ? "text-gold-400" : "text-ink-400"
                    }`}
                  >
                    {t.num}
                  </span>
                </button>
              );
            })}
          </nav>
          {/* подсказка: справа есть ещё вкладки */}
          <span className="grad-fade-l pointer-events-none absolute inset-y-0 right-0 hidden w-10 max-[900px]:block" aria-hidden />
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
              {tab === 5 && <SheetRoadmap />}
              {tab === 6 && <SheetControl />}
              {tab === 7 && <SheetRisks />}
              {tab === 8 && <SheetChannels />}        </div>
      </main>

      <footer className="relative border-t-4 border-gold-500 bg-ink-950 text-paper-100">
        <div className="bg-blueprint absolute inset-0" aria-hidden />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-start gap-3.5">
            <LogoMark size={38} />
            <div>
              <p className="font-display text-[13px] font-bold tracking-[0.08em] text-paper-50">EPILATE-ME</p>
              <p className="mt-1.5 max-w-md text-[12px] leading-relaxed text-paper-100/50">
                Маркетинг-стратегия 2026–2027 · сеть клиник лазерной эпиляции и косметологии · Москва, 6 филиалов ·
                план: 84 лида в день на сеть, конверсия в приход 40%
              </p>
            </div>
          </div>
          <div className="md:text-right">
            <p className="flex flex-wrap items-center gap-2 font-display text-[12.5px] font-bold text-gold-400 tabular-nums">
              2 521 лид <ArrowRight size={13} /> 1 008 продаж <ArrowRight size={13} /> ROMI +221%
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-[11px] text-paper-100/40 md:justify-end">
              <FileSpreadsheet size={12} className="text-gold-500/70" />
              Epilate-Me_Стратегия_2026-2027.xlsx · кнопка «Скачать .xlsx» — в шапке
            </p>
          </div>
        </div>
      </footer>
    </div>
    </ErrorBoundary>
  );
}

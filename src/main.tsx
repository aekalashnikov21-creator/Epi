import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

declare global {
  interface Window {
    __EM_BOOTED?: boolean;
  }
}

function showBanner(err: unknown) {
  const fb = document.getElementById("em-fallback");
  if (!fb || fb.getAttribute("data-banner")) return;
  fb.setAttribute("data-banner", "1");
  const b = document.createElement("div");
  b.style.cssText =
    "margin:0 0 16px;padding:12px 16px;border:1px solid #c64b3c;background:#f7e2de;color:#8c2f24;font-size:13px;line-height:1.5;";
  b.textContent =
    "Интерактивная версия не запустилась (" +
    String(err instanceof Error ? err.message : err) +
    ") — ниже показана полная статическая версия стратегии.";
  fb.insertBefore(b, fb.firstChild);
}

function mount() {
  const el = document.getElementById("root");
  if (!el) return;
  try {
    ReactDOM.createRoot(el).render(<App />);
    // начальный рендер прошёл — убираем статическую версию
    document.getElementById("em-fallback")?.remove();
    window.__EM_BOOTED = true;
  } catch (err) {
    console.error(err);
    showBanner(err);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}

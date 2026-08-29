import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function showFatal(message: string): void {
  const rootEl = document.getElementById("root");
  if (!rootEl) return;
  // не затираем успешно отрисованное приложение
  if (rootEl.querySelector("[data-app-mounted]")) return;
  rootEl.innerHTML =
    '<div style="max-width:640px;margin:10vh auto;padding:32px;font-family:\'Segoe UI\',system-ui,sans-serif;color:#10233a;border:1px solid #c64b3c;background:#ffffff">' +
    '<p style="margin:0 0 10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#a93b2e;font-size:13px">Не удалось запустить страницу</p>' +
    '<p style="margin:0 0 12px;line-height:1.6;font-size:14px">Интерактивная стратегия Epilate-Me не смогла отрисоваться в этой среде. Обновите страницу или откройте файл в современном браузере (Chrome / Edge / Firefox).</p>' +
    '<p style="margin:0;line-height:1.5;font-size:12px;color:#666666;word-break:break-word">' +
    escapeHtml(message) +
    "</p>" +
    "</div>";
}

const bootErrors: string[] = [];

window.addEventListener("error", (e: ErrorEvent) => {
  const msg = (e.message || String(e.error || "неизвестная ошибка")) + " @ " + (e.filename || "?") + ":" + (e.lineno || "?");
  bootErrors.push(msg);
  showFatal(msg);
});

window.addEventListener("unhandledrejection", (e: PromiseRejectionEvent) => {
  const msg = String(e.reason);
  bootErrors.push(msg);
  showFatal(msg);
});

function bootstrap(): void {
  try {
    const rootEl = document.getElementById("root");
    if (!rootEl) {
      throw new Error("В документе не найден контейнер #root");
    }
    const root = ReactDOM.createRoot(rootEl);
    root.render(
      <div data-app-mounted>
        <App />
      </div>
    );
  } catch (err) {
    showFatal(String(err));
  }
}

// Скрипт собирается как классический (не модуль) и может исполняться в <head>
// до разбора <body> — поэтому ждём готовности DOM.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap);
} else {
  bootstrap();
}

// страховка: если через несколько секунд приложение так и не появилось
window.setTimeout(() => {
  const rootEl = document.getElementById("root");
  if (!rootEl) return;
  if (!rootEl.querySelector("[data-app-mounted]") && rootEl.children.length === 0) {
    showFatal(
      bootErrors.length
        ? bootErrors.join("; ")
        : "Скрипт приложения не был исполнен (среда предпросмотра может блокировать скрипты)."
    );
  }
}, 4500);

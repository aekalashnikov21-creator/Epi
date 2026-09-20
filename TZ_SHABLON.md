# 📋 ТЗ-ШАБЛОН: «Файл должен открываться везде» (извлечено из проекта Epilate-Me)

> **Как использовать:** скопируйте блок «ГОТОВОЕ ТЗ» ниже и вставьте в начало промта
> для нового проекта. Это набор проверенных технических требований, которые решают
> проблему «пустой экран при предпросмотре / скачивании / на мобильном».

---

## 🎯 ГОТОВОЕ ТЗ (копируйте это)

```
Собери веб-приложение на React + Vite + Tailwind CSS v4 со следующими
ОБЯЗАТЕЛЬНЫМИ техническими требованиями по дистрибуции и совместимости:

1. ЕДИНЫЙ ФАЙЛ: подключи vite-plugin-singlefile, чтобы вся сборка
   (HTML + CSS + JS) инлайнилась в один dist/index.html без внешних
   ссылок на /assets/*. Итог должен открываться двойным кликом с диска.

2. РАБОТА С ДИСКА (file://): собери бандл в формате IIFE (build.rollupOptions
   output.format = "iife") и убери атрибут type="module" из <script>
   (модульные скрипты блокируются браузером по протоколу file://).

3. МОНТИРОВАНИЕ ПОСЛЕ DOM: в main.tsx вешай ReactDOM.createRoot().render()
   на событие DOMContentLoaded, т.к. классический скрипт в <head> исполняется
   до разбора <body>.

4. ВЕРСИЯ БЕЗ JAVASCRIPT: вставь в index.html полноценную статическую версию
   контента (все разделы + рабочие вкладки на чистом CSS: скрытые
   radio-кнопки + псевдокласс :checked — работают во всех браузерах iOS/Android
   без единой строки JS). React подменяет её при успешном запуске.
   Это спасает, когда мобильные просмотрщики файлов блокируют JS.

5. КРОССБРАУЗЕРНОСТЬ (Chrome / Яндекс / Safari, iOS / Android):
   - НЕ используй Tailwind-градиенты с интерполяцией in oklab (ломает
     Safari < 16.2) — замени на классы с обычными hex-градиентами;
   - добавь .browserslistrc (last 2 Chrome/Safari/iOS versions, Safari >= 15)
     для автопрефиксов (-webkit-backdrop-filter и т.д.);
   - color-mix() только внутри @supports с hex-фолбэками.

6. НЕБЛОКИРУЮЩИЕ ШРИФТЫ: подключай Google Fonts через
   media="print" onload="this.media='all'" + дубль в <noscript>.

7. НАДЁЖНЫЙ SCROLL-REVEAL: если используешь IntersectionObserver для
   появления блоков, добавь принудительный показ через setTimeout (~1.5 c)
   и проверку доступности IO — иначе в iframe-превью контент остаётся скрытым.

8. ВИДИМЫЕ ОШИБКИ (никаких белых экранов):
   - React ErrorBoundary;
   - window.onerror / window.addEventListener("error") в <head>;
   - try/catch вокруг монтирования;
   - <noscript>-баннер;
   - баннер над статической версией, если интерактив не запустился.

9. МОБИЛЬНАЯ АДАПТАЦИЯ (320–1440px):
   - touch-action: manipulation; -webkit-tap-highlight-color: transparent;
   - скрытый скроллбар + горизонтальная прокрутка для широких таблиц
     с подсказкой «прокрутите вправо»;
   - не прячь функционал через hidden-классы на мобильном —
     переноси контент, а не обрезай;
   - viewport-fit=cover (iPhone с чёлкой);
   - поддержка prefers-reduced-motion;
   - тактильный отклик :active на кнопках и вкладках.

10. ДИЗАЙН: пара «акцидентный display-шрифт + читаемый body-шрифт» (обе с
    кириллицей), слоистый фоновый слой (сетка/свечение), микро-взаимодействия
    (hover/press, счётчики, плавные бары), сильный контраст размеров и весов.
    Не делать: центрированную «hero-тройку», ряд из 3–4 одинаковых карточек,
    градиентные заголовки, сплошной glassmorphism.
```

---

## 🔍 ПОЧЕМУ ЭТО НУЖНО (краткая диагностика, чтобы вы понимали логику)

| Симптом | Причина | Решение (пункт ТЗ) |
|---|---|---|
| Пустой экран при предпросмотре | Ссылки `/assets/*` отдают 404 | **1** (singlefile) |
| «Не удалось запустить» при скачивании | `type="module"` блокируется по `file://` | **2** (IIFE) |
| Белый экран, ошибки не видно | Скрипт в `<head>` бежит раньше `<body>` | **3** (DOMContentLoaded) |
| На мобильном «частичный функционал», вкладки не ходят | Просмотрщик режет JS, а запасная версия была без вкладок | **4** (CSS-вкладки) |
| Пропали бары/градиенты в Safari | Интерполяция цвета `in oklab` | **5** (hex-градиенты) |
| Долго белая страница при загрузке | Блокирующий `<link>` на шрифты | **6** |
| Контент не появляется в превью | IntersectionObserver не сработал в iframe | **7** |
| Ничего не понятно при сбое | Белый экран без сообщения | **8** |

---

## 🛠 КЛЮЧЕВЫЕ ФРАГМЕНТЫ (для справки)

### vite.config.js
```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteSingleFile(),
    {
      // убираем type="module" — бандл уже IIFE, а модули блокируются по file://
      name: "strip-module-type",
      enforce: "post",
      transformIndexHtml(html) {
        return html.replace(/<script type="module" crossorigin>/g, "<script>");
      },
    },
  ],
  build: { rollupOptions: { output: { format: "iife" } } },
});
```

### main.tsx — монтирование после DOM
```tsx
function mount() {
  const el = document.getElementById("root");
  if (!el) return;
  try {
    ReactDOM.createRoot(el).render(<App />);
    document.getElementById("em-fallback")?.remove(); // убираем статическую версию
  } catch (err) {
    showBanner(err); // статическая версия остаётся + баннер с причиной
  }
}
document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", mount)
  : mount();
```

### CSS-вкладки без JS (радио + :checked)
```html
<!-- скрытые переключатели в начале body -->
<input type="radio" name="sheet" id="tab-1" checked class="sr-tab">
<input type="radio" name="sheet" id="tab-2" class="sr-tab">
<!-- ... -->

<label for="tab-1" class="tab">Раздел 1</label>
<label for="tab-2" class="tab">Раздел 2</label>

<section class="pane" id="pane-1">…</section>
<section class="pane" id="pane-2">…</section>
```
```css
.sr-tab { position: absolute; opacity: 0; pointer-events: none; }
.pane { display: none; }
#tab-1:checked ~ .panes #pane-1 { display: block; }
#tab-1:checked ~ .tabs label[for="tab-1"] { /* активный стиль */ }
```

### Надёжный scroll-reveal
```ts
useEffect(() => {
  const el = ref.current;
  if (!el) return;
  if (typeof IntersectionObserver === "undefined") { el.classList.add("in"); return; }
  const io = new IntersectionObserver(([e]) => {
    if (e?.isIntersecting) { el.classList.add("in"); io.disconnect(); }
  }, { threshold: 0.08 });
  io.observe(el);
  const t = setTimeout(() => el.classList.add("in"), 1500); // страховка для iframe
  return () => { io.disconnect(); clearTimeout(t); };
}, []);
```

---

## ✅ ЧЕК-ЛИСТ ПЕРЕД СДАЧЕЙ

- [ ] `dist/index.html` — один файл, нет ссылок на `/assets/*`
- [ ] `<script>` без `type="module"`
- [ ] Открыть файл двойным кликом с диска → работает
- [ ] Отключить JS в браузере → видна статическая версия, вкладки ходят
- [ ] Открыть на телефоне (Chrome / Safari) → все разделы, всё переключается
- [ ] Safari на Mac → градиенты и бары на месте
- [ ] Узкий экран 320px → ничего не обрезано, таблицы скроллятся
- [ ] Специально сломать скрипт → виден баннер с причиной, а не белый экран

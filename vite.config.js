import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// Собираем IIFE (классический скрипт), а Vite всё равно помечает его
// type="module". Модульные скрипты браузеры блокируют по протоколу file://,
// поэтому после инлайна убираем type="module" и crossorigin — бандл уже
// обёрнут в IIFE и не содержит import/export, значит безопасен как классический.
const stripModuleType = () => ({
  name: "strip-module-type",
  enforce: "post",
  transformIndexHtml: {
    order: "post",
    handler(html) {
      return html.replace(/<script\b([^>]*)>/g, (match, attrs) => {
        const cleaned = attrs
          .replace(/\s*type="module"/, "")
          .replace(/\s*crossorigin(?:="[^"]*")?/, "");
        return "<script" + cleaned + ">";
      });
    },
  },
});

export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile(), stripModuleType()],
  base: "./",
  build: {
    target: "es2018",
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: "iife",
        name: "EpilateMeApp",
        inlineDynamicImports: true,
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
});

/* ============================================================
   Vite-плагин: на этапе сборки генерирует брендовую книгу Excel
   (через тот же генератор, что и кнопка на сайте) и встраивает
   её base64-кодом прямо в HTML. Благодаря этому кнопка
   «Скачать Excel (.xlsx)» работает даже там, где JavaScript
   полностью заблокирован (чистая HTML-ссылка с data:URI).
   ============================================================ */
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const PLACEHOLDER = "__EM_STRATEGY_XLSX__";

async function importTs(relPath) {
  const esbuild = require("esbuild");
  const result = await esbuild.transform(readFileSync(resolve(root, relPath), "utf8"), {
    loader: "ts",
    format: "esm",
    target: "es2020",
  });
  const dataUrl =
    "data:text/javascript;base64," + Buffer.from(result.code, "utf8").toString("base64");
  return import(dataUrl);
}

export default function inlineStrategyXlsx() {
  return {
    name: "inline-strategy-xlsx",
    enforce: "post",
    async generateBundle(_options, bundle) {
      const htmlAsset = bundle["index.html"];
      if (!htmlAsset || typeof htmlAsset.source !== "string") return;
      if (!htmlAsset.source.includes(PLACEHOLDER)) return;

      let base64 = "";
      try {
        const data = await importTs("src/data.ts");
        const builder = await importTs("src/excelWorkbook.ts");
        const ExcelJS = require("exceljs");
        const wb = builder.buildStrategyWorkbook(ExcelJS, data);
        const buf = await wb.xlsx.writeBuffer();
        base64 = Buffer.from(buf).toString("base64");
        console.log(
          `[inline-strategy-xlsx] книга Excel встроена в HTML (${(base64.length / 1024).toFixed(0)} КБ base64)`
        );
      } catch (e) {
        console.warn("[inline-strategy-xlsx] не удалось встроить Excel:", e);
      }

      htmlAsset.source = htmlAsset.source.split(PLACEHOLDER).join(base64);
    },
  };
}

import ExcelJS from "exceljs";
import * as data from "./data";
import { buildStrategyWorkbook } from "./excelWorkbook";

/* Скачивание брендовой книги Excel прямо из браузера (кнопка «Скачать .xlsx») */
export async function downloadExcel(): Promise<void> {
  const wb = buildStrategyWorkbook(ExcelJS, data);
  const buf = await wb.xlsx.writeBuffer();
  const blob = new Blob([buf], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Epilate-Me_Стратегия_2026-2027.xlsx";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

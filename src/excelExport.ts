import ExcelJS from "exceljs";
import * as data from "./data";
import { buildStrategyWorkbook } from "./excelWorkbook";

const FILE_NAME = "Epilate-Me_Стратегия_2026-2027.xlsx";
const MIME = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

/* Скачивание через Blob + программный клик — самый надёжный способ */
function triggerDownload(buf: ArrayBuffer | Uint8Array): void {
  const blob = new Blob([buf as BlobPart], { type: MIME });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = FILE_NAME;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 4000);
}

/* Запасной способ — data-URI (если Blob по какой-то причине не сработал) */
function triggerDownloadDataUri(buf: ArrayBuffer | Uint8Array): void {
  const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  const a = document.createElement("a");
  a.href = "data:" + MIME + ";base64," + btoa(bin);
  a.download = FILE_NAME;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/* Скачивание брендовой книги Excel прямо из браузера (кнопка «Скачать .xlsx») */
export async function downloadExcel(): Promise<void> {
  try {
    const wb = buildStrategyWorkbook(ExcelJS, data);
    const buffer = await wb.xlsx.writeBuffer();
    
    // Создаём blob
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    
    // Создаём ссылку для скачивания
    const link = document.createElement('a');
    const url = window.URL.createObjectURL(blob);
    
    link.href = url;
    link.download = 'Epilate-Me_Стратегия_2026-2027.xlsx';
    link.style.display = 'none';
    
    // Добавляем в DOM, кликаем и удаляем
    document.body.appendChild(link);
    link.click();
    
    // Очищаем
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }, 100);
  } catch (error) {
    console.error('Ошибка при создании Excel файла:', error);
    alert('Не удалось создать Excel файл. Попробуйте обновить страницу.');
  }
}

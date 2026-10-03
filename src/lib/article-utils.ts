import type { Locale } from "@/i18n";

/** Stable anchor id for an article heading, e.g. "Berapa jam tidur?" → "berapa-jam-tidur". */
export function headingId(heading: string) {
  return heading
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "en" ? "en-MY" : "ms-MY", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kuala_Lumpur" }).format(new Date(`${date}T00:00:00+08:00`));
}

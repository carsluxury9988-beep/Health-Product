import { en } from "@/i18n/en";
import { ms } from "@/i18n/ms";

export type Locale = "ms" | "en";

export function getMessages(locale: Locale) {
  return locale === "en" ? en : ms;
}

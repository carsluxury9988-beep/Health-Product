import { en } from "@/i18n/en";

export default function EnglishLoadingPage() {
  return <main id="main-content" className="page-hero container" aria-live="polite">{en.errors.loading}</main>;
}

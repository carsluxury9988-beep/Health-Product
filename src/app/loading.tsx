import { ms } from "@/i18n/ms";

export default function LoadingPage() {
  return <main id="main-content" className="page-hero container" aria-live="polite">{ms.errors.loading}</main>;
}

import Link from "next/link";
import { ms } from "@/i18n/ms";

export default function NotFoundPage() {
  return (
    <main id="main-content" className="page-hero container">
      <h1>{ms.errors.notFoundTitle}</h1>
      <p>{ms.errors.notFoundBody}</p>
      <Link className="button button-dark" href="/">{ms.errors.home}</Link>
    </main>
  );
}

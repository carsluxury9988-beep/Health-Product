import Link from "next/link";
import { en } from "@/i18n/en";

export default function EnglishNotFoundPage() {
  return (
    <main id="main-content" className="page-hero container">
      <h1>{en.errors.notFoundTitle}</h1>
      <p>{en.errors.notFoundBody}</p>
      <Link className="button button-dark" href="/en">{en.errors.home}</Link>
    </main>
  );
}

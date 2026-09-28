"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getMessages } from "@/i18n";

export function RouteError({ reset }: { reset?: () => void }) {
  const pathname = usePathname() ?? "/";
  const locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ms";
  const t = getMessages(locale);
  return (
    <main id="main-content" className="page-hero container">
      <h1>{t.errors.errorTitle}</h1>
      <p>{t.errors.errorBody}</p>
      {reset && <button className="button button-dark" type="button" onClick={reset}>{t.errors.retry}</button>}
      <Link className="text-link" href={locale === "en" ? "/en" : "/"}>{t.errors.home}</Link>
    </main>
  );
}

"use client";

import Link from "next/link";
import { getMessages, type Locale } from "@/i18n";
import { routePath } from "@/i18n/routes";

export function RouteError({ locale, reset }: { locale: Locale; reset?: () => void }) {
  const t = getMessages(locale);
  return (
    <main id="main-content" className="page-header container status-page">
      <h1>{t.errors.errorTitle}</h1>
      <p className="page-lead">{t.errors.errorBody}</p>
      <div className="cta-row">
        {reset && <button className="btn btn-primary" type="button" onClick={reset}>{t.errors.retry}</button>}
        <Link className="btn btn-ghost" href={routePath("home", locale)}>{t.errors.backHome}</Link>
      </div>
    </main>
  );
}

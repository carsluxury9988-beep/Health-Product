"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";
import Link from "next/link";
import { getMessages, type Locale } from "@/i18n";
import { routePath } from "@/i18n/routes";

type Consent = "accepted" | "rejected" | null;

function subscribeConsent(callback: () => void) {
  window.addEventListener("analytics-consent-change", callback);
  return () => window.removeEventListener("analytics-consent-change", callback);
}

function readConsent(): Consent {
  const saved = document.cookie
    .split("; ")
    .find((part) => part.startsWith("analytics-consent="))
    ?.split("=")[1];
  return saved === "accepted" || saved === "rejected" ? saved : null;
}

function subscribeHydration() {
  return () => {};
}

export function ConsentBanner({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const consent = useSyncExternalStore(subscribeConsent, readConsent, () => null);
  const ready = useSyncExternalStore(subscribeHydration, () => true, () => false);
  const hasAnalytics = Boolean(process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_META_PIXEL_ID);

  function choose(value: Exclude<Consent, null>) {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `analytics-consent=${value}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
    window.dispatchEvent(new Event("analytics-consent-change"));
  }

  return (
    <>
      {ready && hasAnalytics && consent === null && (
        <aside className="consent-banner" aria-label={t.consent.label}>
          <div>
            <strong>{t.consent.title}</strong>
            <p>{t.consent.description} <Link href={routePath("privacy", locale)}>{t.consent.details}</Link></p>
          </div>
          <div className="consent-actions">
            <button className="btn btn-ghost btn-sm" type="button" onClick={() => choose("rejected")}>{t.consent.decline}</button>
            <button className="btn btn-primary btn-sm" type="button" onClick={() => choose("accepted")}>{t.consent.accept}</button>
          </div>
        </aside>
      )}
      {ready && consent === "accepted" && hasAnalytics && process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { anonymize_ip: true });
          `}</Script>
        </>
      )}
      {ready && consent === "accepted" && process.env.NEXT_PUBLIC_META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
          (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}</Script>
      )}
    </>
  );
}

import type { ReactNode } from "react";
import { getMessages, type Locale } from "@/i18n";
import { sans } from "@/lib/fonts";
import { AnnouncementBar } from "@/components/announcement-bar";
import { ConsentBanner } from "@/components/consent-banner";
import { GoogleAnalytics } from "@/components/google-analytics";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export function SiteDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = getMessages(locale);
  return (
    <html lang={t.htmlLang} className={sans.variable}>
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <a className="skip-link" href="#main-content">{t.common.skip}</a>
        <AnnouncementBar locale={locale} />
        <SiteHeader locale={locale} />
        {children}
        <SiteFooter locale={locale} />
        <WhatsAppFloat locale={locale} />
        <ConsentBanner locale={locale} />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { getMessages, type Locale } from "@/i18n";
import { routePath, staticRoutes } from "@/i18n/routes";
import { pageMetadata } from "@/lib/seo";
import { enquiryUrl } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { WhatsAppIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function aboutMetadata(locale: Locale): Metadata {
  const t = getMessages(locale);
  return pageMetadata({ locale, paths: staticRoutes.about, title: t.seo.about.title, description: t.seo.about.description });
}

export function AboutPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <main id="main-content">
      <Breadcrumbs locale={locale} items={[{ label: t.nav.about }]} />
      <PageHeader title={t.aboutPage.title} lead={t.aboutPage.lead} />
      <section className="section-tight">
        <div className="container narrow prose">
          {t.aboutPage.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          <div className="cta-row">
            <WhatsAppLink href={enquiryUrl(locale)} source="about" className="btn btn-wa"><WhatsAppIcon size={18} /> {t.common.whatsappChat}</WhatsAppLink>
            <Link href={routePath("products", locale)} className="btn btn-ghost">{t.common.viewProducts}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

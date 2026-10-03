import type { Metadata } from "next";
import { getMessages, type Locale } from "@/i18n";
import { staticRoutes } from "@/i18n/routes";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { enquiryUrl } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqList } from "@/components/faq-list";
import { WhatsAppIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function faqMetadata(locale: Locale): Metadata {
  const t = getMessages(locale);
  return pageMetadata({ locale, paths: staticRoutes.faq, title: t.seo.faq.title, description: t.seo.faq.description });
}

export function FaqPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const all = t.faqPage.groups.flatMap((group) => group.items);
  return (
    <main id="main-content">
      <Breadcrumbs locale={locale} items={[{ label: t.nav.faq }]} />
      <PageHeader title={t.faqPage.title} lead={t.faqPage.lead} />
      <section className="section-tight">
        <div className="container narrow">
          {t.faqPage.groups.map((group) => (
            <div className="faq-group" key={group.heading}>
              <h2 className="h-section">{group.heading}</h2>
              <FaqList items={group.items} />
            </div>
          ))}
          <div className="note-card">
            <p>{t.home.ctaTitle}</p>
            <WhatsAppLink href={enquiryUrl(locale)} source="faq" className="btn btn-wa"><WhatsAppIcon size={18} /> {t.common.whatsappAsk}</WhatsAppLink>
          </div>
        </div>
      </section>
      <JsonLd data={faqSchema(all)} />
    </main>
  );
}

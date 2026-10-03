import type { Metadata } from "next";
import { store } from "@/config/store";
import { getMessages, type Locale } from "@/i18n";
import { staticRoutes } from "@/i18n/routes";
import { pageMetadata } from "@/lib/seo";
import { enquiryUrl } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { MailIcon, WhatsAppIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function contactMetadata(locale: Locale): Metadata {
  const t = getMessages(locale);
  return pageMetadata({ locale, paths: staticRoutes.contact, title: t.seo.contact.title, description: t.seo.contact.description });
}

export function ContactPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const c = t.contactPage;
  // TODO(owner): business identity (legal name, SSM, address) shows here once set in src/config/store.ts.
  const identity = [store.legalBusinessName, store.ssmRegistrationNumber && `SSM: ${store.ssmRegistrationNumber}`, store.address].filter(Boolean);
  return (
    <main id="main-content">
      <Breadcrumbs locale={locale} items={[{ label: t.nav.contact }]} />
      <PageHeader title={c.title} lead={c.lead} />
      <section className="section-tight">
        <div className="container contact-grid">
          <div className="contact-cards">
            <div className="contact-card">
              <span className="feature-icon feature-icon-wa"><WhatsAppIcon size={24} /></span>
              <h2>{c.whatsappTitle}</h2>
              <p>{c.whatsappBody}</p>
              <WhatsAppLink href={enquiryUrl(locale)} source="contact_card" className="btn btn-wa">{store.whatsappDisplay}</WhatsAppLink>
            </div>
            <div className="contact-card">
              <span className="feature-icon"><MailIcon /></span>
              <h2>{c.emailTitle}</h2>
              <p>{c.emailBody}</p>
              <a className="btn btn-ghost" href={`mailto:${store.contactEmail}`}>{store.contactEmail}</a>
            </div>
            {identity.length > 0 && (
              <div className="contact-card">
                <h2>{c.businessTitle}</h2>
                {identity.map((line) => <p key={String(line)}>{line}</p>)}
              </div>
            )}
          </div>
          <ContactForm locale={locale} />
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import { store } from "@/config/store";
import { getMessages, type Locale } from "@/i18n";
import { staticRoutes } from "@/i18n/routes";
import { pageMetadata } from "@/lib/seo";
import { enquiryUrl } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { JsonLd } from "@/components/json-ld";
import { returnPolicyPageSchema } from "@/lib/schema";

export type PolicyKey = "shipping" | "returns" | "terms" | "privacy";

export function policyMetadata(key: PolicyKey, locale: Locale): Metadata {
  const t = getMessages(locale);
  return pageMetadata({ locale, paths: staticRoutes[key], title: t.seo[key].title, description: t.seo[key].description });
}

export function PolicyPage({ policy, locale }: { policy: PolicyKey; locale: Locale }) {
  const t = getMessages(locale);
  const content = t.policies[policy];
  return (
    <main id="main-content">
      {policy === "returns" && <JsonLd data={returnPolicyPageSchema(locale)} />}
      <Breadcrumbs locale={locale} items={[{ label: content.title }]} />
      <PageHeader title={content.title} lead={content.lead}>
        <p className="muted small">{t.common.updated}</p>
      </PageHeader>
      <section className="section-tight">
        <div className="container narrow prose">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <section>
            <h2>{t.footer.contact}</h2>
            <p>
              {t.common.whatsapp}: <WhatsAppLink href={enquiryUrl(locale)} source={`policy_${policy}`}>{store.whatsappDisplay}</WhatsAppLink>
              <br />
              {t.common.email}: <a href={`mailto:${store.contactEmail}`}>{store.contactEmail}</a>
              {store.legalBusinessName && <><br />{store.legalBusinessName}{store.ssmRegistrationNumber ? ` (SSM: ${store.ssmRegistrationNumber})` : ""}</>}
              {store.address && <><br />{store.address}</>}
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

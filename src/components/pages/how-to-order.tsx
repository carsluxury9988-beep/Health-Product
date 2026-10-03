import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/config/products";
import { store } from "@/config/store";
import { getMessages, type Locale } from "@/i18n";
import { routePath, staticRoutes } from "@/i18n/routes";
import { pageMetadata } from "@/lib/seo";
import { enquiryUrl } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CheckIcon, FormIcon, WhatsAppIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { ProductGrid } from "@/components/product-card";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function howToOrderMetadata(locale: Locale): Metadata {
  const t = getMessages(locale);
  return pageMetadata({ locale, paths: staticRoutes.howToOrder, title: t.seo.howToOrder.title, description: t.seo.howToOrder.description });
}

export function HowToOrderPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const h = t.howToOrder;
  return (
    <main id="main-content">
      <Breadcrumbs locale={locale} items={[{ label: t.nav.howToOrder }]} />
      <PageHeader title={h.title} lead={h.lead} />

      <section className="section-tight">
        <div className="container">
          <h2 className="h-section">{h.optionsTitle}</h2>
          <div className="option-grid">
            <div className="option-card option-card-primary">
              <span className="feature-icon"><WhatsAppIcon size={22} /></span>
              <h3>{h.options[0].title}</h3>
              <p>{h.options[0].body}</p>
              <WhatsAppLink href={enquiryUrl(locale)} source="how_to_order" className="btn btn-wa"><WhatsAppIcon size={18} /> {t.common.whatsappOrder}</WhatsAppLink>
            </div>
            <div className="option-card">
              <span className="feature-icon"><FormIcon /></span>
              <h3>{h.options[1].title}</h3>
              <p>{h.options[1].body}</p>
              <Link href={routePath("order", locale)} className="btn btn-primary">{t.common.orderForm}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <h2 className="h-section">{h.afterTitle}</h2>
          <ol className="steps steps-cards">
            {h.after.map((step, index) => (
              <li key={step.title}>
                <span className="step-num">{index + 1}</span>
                <div><h3>{step.title}</h3><p>{step.body}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-tight">
        <div className="container narrow">
          <div className="detail-card">
            <h2>{h.tipsTitle}</h2>
            <ul className="check-list">
              {h.tips.map((tip) => <li key={tip}><CheckIcon size={18} /> {tip}</li>)}
            </ul>
            <p className="muted">{h.noWhatsapp} <a href={`mailto:${store.contactEmail}`}>{store.contactEmail}</a></p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head"><h2>{t.home.productsTitle}</h2></div>
          <ProductGrid items={products} locale={locale} />
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import { products } from "@/config/products";
import { getMessages, type Locale } from "@/i18n";
import { staticRoutes } from "@/i18n/routes";
import { itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { enquiryUrl } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { WhatsAppIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { ProductGrid } from "@/components/product-card";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function productsMetadata(locale: Locale): Metadata {
  const t = getMessages(locale);
  return pageMetadata({ locale, paths: staticRoutes.products, title: t.seo.products.title, description: t.seo.products.description });
}

export function ProductsPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <main id="main-content">
      <Breadcrumbs locale={locale} items={[{ label: t.nav.products }]} />
      <PageHeader title={t.productsPage.title} lead={t.productsPage.lead} />
      <section className="section-tight">
        <div className="container">
          <ProductGrid items={products} locale={locale} headingLevel="h2" priorityCount={4} />
          <div className="note-card">
            <p>{t.productsPage.note}</p>
            <WhatsAppLink href={enquiryUrl(locale)} source="products_note" className="btn btn-wa"><WhatsAppIcon size={18} /> {t.common.whatsappAsk}</WhatsAppLink>
          </div>
        </div>
      </section>
      <JsonLd data={itemListSchema([...products], locale)} />
    </main>
  );
}

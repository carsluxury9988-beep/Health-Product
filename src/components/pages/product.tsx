import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/config/products";
import { getMessages, type Locale } from "@/i18n";
import { productPath, routePath } from "@/i18n/routes";
import { productSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { formatRinggit, labelRequestUrl } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowRightIcon, CashIcon, ShieldIcon, TruckIcon, WhatsAppIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { ProductGrid } from "@/components/product-card";
import { ProductOrderPanel } from "@/components/product-order-panel";
import { ProductViewTracker } from "@/components/product-view-tracker";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function productStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function productMetadata(slug: string, locale: Locale): Metadata {
  const product = getProduct(slug);
  if (!product) return {};
  const t = getMessages(locale);
  return pageMetadata({
    locale,
    paths: { ms: productPath(product.slug, "ms"), en: productPath(product.slug, "en") },
    title: t.seo.product.title.replace("{name}", product.name),
    description: t.seo.product.description.replace("{name}", product.name),
    image: product.ogImage[locale],
    imageAlt: product.name,
  });
}

export function ProductPage({ slug, locale }: { slug: string; locale: Locale }) {
  const product = getProduct(slug);
  if (!product) notFound();
  const t = getMessages(locale);
  const p = t.productPage;
  const factIcons = [CashIcon, TruckIcon, ShieldIcon];

  return (
    <main id="main-content">
      <Breadcrumbs locale={locale} items={[{ label: t.nav.products, href: routePath("products", locale) }, { label: product.name }]} />
      <section className="section-tight">
        <div className="container pdp-grid">
          <div className="pdp-media">
            <Image src={product.packImage} alt={`${product.name} — ${locale === "en" ? "pack" : "bungkusan"}`} width={600} height={1080} priority sizes="(max-width: 900px) 70vw, 420px" />
          </div>
          <div className="pdp-info">
            <p className="eyebrow">{p.eyebrow}</p>
            <h1>{product.name}</h1>
            <p className="pdp-price"><strong>{formatRinggit(product.price)}</strong> <span>/ {t.common.perUnit}</span></p>
            <ul className="pdp-facts">
              {p.facts.map((fact, index) => {
                const Icon = factIcons[index];
                return <li key={fact.label}><Icon size={20} /><span><strong>{fact.label}:</strong> {fact.value}</span></li>;
              })}
            </ul>
            <ProductOrderPanel product={{ name: product.name, price: product.price, slug: product.slug }} locale={locale} />
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container pdp-details">
          <div className="detail-card">
            <h2>{p.aboutTitle}</h2>
            <p>{product.summary[locale]}</p>
          </div>
          <div className="detail-card">
            <h2>{p.labelTitle}</h2>
            <p>{p.labelBody}</p>
            {product.malNumber && <p><strong>MAL:</strong> {product.malNumber}</p>}
            <WhatsAppLink href={labelRequestUrl(product.name, locale)} source="label_request" product={product.name} className="btn btn-ghost">
              <WhatsAppIcon size={18} /> {p.labelCta}
            </WhatsAppLink>
          </div>
          <div className="detail-card">
            <h2>{p.safetyTitle}</h2>
            <p>{t.common.labelAdvice}</p>
          </div>
          <div className="detail-card">
            <h2>{p.deliveryTitle}</h2>
            <p>{p.deliveryBody}</p>
            <Link href={routePath("shipping", locale)} className="text-link">{t.nav.shipping} <ArrowRightIcon size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head section-head-left"><h2>{p.relatedTitle}</h2></div>
          <ProductGrid items={products.filter((item) => item.id !== product.id)} locale={locale} />
        </div>
      </section>

      <ProductViewTracker productId={product.id} productName={product.name} price={product.price} />
      <JsonLd data={productSchema(product, locale)} />
    </main>
  );
}

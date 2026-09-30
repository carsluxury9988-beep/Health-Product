import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductArtwork } from "@/components/product-artwork";
import { products, getProduct } from "@/config/products";
import { store } from "@/config/store";
import { formatPrice } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";
import { ProductViewTracker } from "@/components/product-view-tracker";
import { TrackedOrderLink } from "@/components/tracked-order-link";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return pageMetadata(product.seoTitle, product.seoDescription, `/en/products/${product.slug}`, "en", product.keywords);
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    ...(product.images.length ? { image: product.images } : {}),
    offers: {
      "@type": "Offer",
      priceCurrency: product.currency,
      price: product.price,
      ...(store.siteUrl ? { url: new URL(`/en/products/${product.slug}`, store.siteUrl).toString() } : {}),
    },
  };

  return (
    <main id="main-content">
      <Breadcrumbs locale="en" items={[{ label: "Products", href: "/en/products" }, { label: product.name }]} />
      <section className="product-detail container">
        <div className="product-detail-art"><ProductArtwork name={product.name} images={product.images} locale="en" preload /></div>
        <div className="product-detail-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Product details</p>
          <h1>{product.name}</h1>
          <p className="product-detail-price">{formatPrice(product.price)} <span>MYR</span></p>
          <p className="product-detail-description">{product.description}</p>
          <p className="availability-note"><span className="status-dot" /> Availability will be confirmed with your order request.</p>
          <div className="product-detail-facts">
            <div><span>Delivery</span><strong>{store.deliveryLabel}</strong></div>
            <div><span>Payment</span><strong>{store.codAvailable ? `${store.codLabel} available` : "Contact for payment details"}</strong></div>
            <div><span>Product information</span><strong>To be confirmed from packaging</strong></div>
          </div>
          {store.codAvailable ? (
            <TrackedOrderLink className="button button-dark product-order-button" href={`/en/order?product=${product.slug}`} productId={product.id} productName={product.name} price={product.price}>
              Order {product.name} <span aria-hidden="true">↗</span>
            </TrackedOrderLink>
          ) : (
            <Link className="button button-dark product-order-button" href="/en/contact">Ask about {product.name} <span aria-hidden="true">↗</span></Link>
          )}
          <p className="product-cod-note">{store.codAvailable ? store.codAvailabilityNote : `${store.codLabel} is not currently available. Contact our team to ask about options.`}</p>
        </div>
      </section>

      <section className="section product-information-section">
        <div className="container product-information-grid">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> Product information</p>
            <h2>Clear details,<br /><em>when confirmed.</em></h2>
          </div>
          <div className="information-list">
            <article><h3>Product overview</h3><p>{product.description}</p></article>
            <article><h3>Benefits</h3><p>Official product information will be updated from the packaging. We do not publish unverified benefits or claims.</p></article>
            <article><h3>Ingredients & usage</h3><p>Ingredients and usage instructions have not been supplied. Please follow the manufacturer's label instructions when available.</p></article>
            <article><h3>Safety information</h3><p>Warnings and manufacturer details are not yet available. Please read the official packaging and seek advice from a qualified healthcare professional if you have a health question.</p></article>
          </div>
        </div>
      </section>

      <section className="section product-faq-section">
        <div className="container product-faq-layout">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> Before you order</p>
            <h2>Good to<br /><em>know.</em></h2>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary><span>What is the price of {product.name}?</span><span className="faq-plus" aria-hidden="true" /></summary>
              <p>{formatPrice(product.price)}. Delivery: {store.deliveryFee === 0 ? "FREE" : formatPrice(store.deliveryFee)}. {store.deliveryLabel}.</p>
            </details>
            <details className="faq-item">
              <summary><span>Where can I find ingredients and usage information?</span><span className="faq-plus" aria-hidden="true" /></summary>
              <p>Product information will be updated from the official product packaging. Please follow the manufacturer's label instructions when available.</p>
            </details>
            <details className="faq-item">
              <summary><span>Can I pay by Cash on Delivery?</span><span className="faq-plus" aria-hidden="true" /></summary>
              <p>{store.codAvailable ? store.codAvailabilityNote : `${store.codLabel} is not currently available. Contact our team to ask about options.`}</p>
            </details>
            <details className="faq-item">
              <summary><span>How long will delivery take?</span><span className="faq-plus" aria-hidden="true" /></summary>
              <p>{store.deliveryTimingNote}</p>
            </details>
          </div>
        </div>
      </section>

      <section className="related-products section container">
        <div className="section-heading-row">
          <div><p className="eyebrow"><span className="eyebrow-line" /> Explore more</p><h2>More from<br /><em>the collection.</em></h2></div>
          <Link className="text-link" href="/en/products">See all products <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="related-link-grid">
          {products.filter((item) => item.id !== product.id).map((item) => (
            <Link className="related-link" href={`/en/products/${item.slug}`} key={item.id}>
              <span>{item.name}</span><span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema).replace(/</g, "\\u003c") }} />
      <ProductViewTracker productId={product.id} productName={product.name} price={product.price} />
    </main>
  );
}

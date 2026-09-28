import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductGrid } from "@/components/product-grid";
import { pageMetadata } from "@/lib/metadata";
import { store } from "@/config/store";
import { products } from "@/config/products";
import { formatPrice } from "@/lib/format";
import { en } from "@/i18n/en";

export const metadata: Metadata = pageMetadata(
  "Men's Wellness Products",
  `Browse four products from our current catalogue. Each is ${formatPrice(products[0].price)}, with ${store.deliveryLabel} and ${store.codAvailable ? `${store.codLabel} available` : "payment details confirmed by our team"}.`,
  "/en/products",
);

export default function ProductsPage() {
  return (
    <main id="main-content">
      <Breadcrumbs locale="en" items={[{ label: "Products" }]} />
      <section className="page-hero container">
        <p className="eyebrow"><span className="eyebrow-line" /> The collection</p>
        <h1>Find your own<br /><em>way to wellness.</em></h1>
        <p>Four names from our current product catalogue. Clear pricing, free delivery across Malaysia, and product information that will be updated from official packaging.</p>
        <span className="page-hero-aside">{formatPrice(products[0].price)} each <i>·</i> {store.deliveryLabel} <i>·</i> {store.codAvailable ? `${store.codLabel} available` : "Payment details confirmed by our team"}</span>
      </section>
      <section className="section container products-page-grid">
        <ProductGrid locale="en" />
        <p className="catalogue-note"><span aria-hidden="true">i</span> {en.products.catalogueNote}</p>
      </section>
    </main>
  );
}

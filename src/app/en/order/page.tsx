import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { OrderForm } from "@/components/order-form";
import { products, getProduct } from "@/config/products";
import { pageMetadata } from "@/lib/metadata";
import { store } from "@/config/store";
import { formatPrice } from "@/lib/format";

export const metadata: Metadata = pageMetadata(
  "Order Men's Wellness Products",
  `Send a simple order request. Choose a product at ${formatPrice(products[0].price)}, add your delivery details and request ${store.codAvailable ? store.codLabel : "payment details from our team"}.`,
  "/en/order",
);

export default async function OrderPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const params = await searchParams;
  const initialProduct = getProduct(params.product ?? "")?.slug ?? products[0].slug;

  return (
    <main id="main-content">
      <Breadcrumbs locale="en" items={[{ label: "Order" }]} />
      <section className="order-page container">
        <div className="order-intro">
          <p className="eyebrow"><span className="eyebrow-line" /> A few simple details</p>
          <h1>Start your<br /><em>order request.</em></h1>
          <p>Tell us what you would like and where to deliver it. Our team will confirm availability, COD for your destination and delivery details before dispatch.</p>
          <div className="order-reassurance">
            <div><span className="reassurance-icon">01</span><p><strong>Clear price</strong><br />{formatPrice(products[0].price)} per product</p></div>
            <div><span className="reassurance-icon">02</span><p><strong>{store.deliveryLabel}</strong><br />Delivery details confirmed</p></div>
            {store.codAvailable && <div><span className="reassurance-icon">03</span><p><strong>Pay on delivery</strong><br />COD availability confirmed</p></div>}
          </div>
        </div>
        <OrderForm initialProduct={initialProduct} locale="en" />
      </section>
    </main>
  );
}

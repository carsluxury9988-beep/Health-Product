import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PolicyDraftNote } from "@/components/policy-draft-note";
import { pageMetadata } from "@/lib/metadata";
import { store } from "@/config/store";
import { formatPrice } from "@/lib/format";

export const metadata: Metadata = pageMetadata(
  "Shipping Information | Malaysia-wide Free Delivery",
  `${store.deliveryLabel}. Find out what is confirmed and what our team will verify before dispatch.`,
  "/en/shipping",
);

export default function ShippingPage() {
  return (
    <main id="main-content">
      <Breadcrumbs locale="en" items={[{ label: "Shipping" }]} />
      <section className="page-hero container policy-hero">
        <p className="eyebrow"><span className="eyebrow-line" /> Getting it to you</p>
        <h1>{store.deliveryFee === 0 ? <>Across Malaysia.<br /><em>Delivery is on us.</em></> : <>Delivery details,<br /><em>made clear.</em></>}</h1>
        <p>{store.deliveryCoverage} Delivery: {store.deliveryFee === 0 ? "FREE" : formatPrice(store.deliveryFee)}. There is no additional delivery charge beyond the amount stated at checkout.</p>
      </section>
      <section className="section container policy-content">
        <PolicyDraftNote />
        <article className="policy-block">
          <h2>Delivery timing</h2>
          <p>{store.deliveryTimingNote} We do not publish a delivery estimate until it has been confirmed for your location.</p>
        </article>
        <article className="policy-block">
          <h2>Cash on Delivery</h2>
          <p>{store.codAvailable ? store.codAvailabilityNote : "Cash on Delivery is not currently available."} Do not treat submission of the online form as confirmation that COD service is available for your location.</p>
        </article>
        <article className="policy-block">
          <h2>Placing an order request</h2>
          <p>After you submit your details, our team will contact you to confirm product availability, the delivery address and payment arrangements. A request is not a dispatch notice.</p>
        </article>
        <article className="policy-block">
          <h2>Delivery areas</h2>
          <p>Our stated delivery coverage is Malaysia-wide, including West Malaysia, Sabah and Sarawak. Courier service and COD availability should be verified for the exact destination before dispatch.</p>
        </article>
        <p className="policy-contact">Questions about delivery? <a href="/en/contact">Contact our team</a>.</p>
      </section>
    </main>
  );
}

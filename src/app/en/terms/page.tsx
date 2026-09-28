import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PolicyDraftNote } from "@/components/policy-draft-note";
import { store } from "@/config/store";
import { pageMetadata } from "@/lib/metadata";
import { products } from "@/config/products";
import { formatPrice } from "@/lib/format";

export const metadata: Metadata = pageMetadata(
  "Terms & Conditions",
  "Draft terms for product information, order requests, pricing and delivery. Owner and legal review required before publication.",
  "/en/terms",
);

export default function TermsPage() {
  return (
    <main id="main-content">
      <Breadcrumbs locale="en" items={[{ label: "Terms & conditions" }]} />
      <section className="page-hero container policy-hero">
        <p className="eyebrow"><span className="eyebrow-line" /> The important details</p>
        <h1>Clear terms.<br /><em>No surprises.</em></h1>
        <p>A draft overview of this website and its order-request process. It is not a substitute for owner and legal review.</p>
      </section>
      <section className="section container policy-content">
        <PolicyDraftNote />
        <article className="policy-block">
          <h2>Order requests</h2>
          <p>Submitting the order form sends a request to the business. It does not confirm stock, acceptance, dispatch or destination-specific COD service. The business will contact you to confirm the details before dispatch.</p>
        </article>
        <article className="policy-block">
          <h2>Prices and delivery</h2>
          <p>The current catalogue lists each product at {formatPrice(products[0].price)} and states {store.deliveryLabel.toLowerCase()}. Delivery: {store.deliveryFee === 0 ? "FREE" : formatPrice(store.deliveryFee)}. The owner must confirm how prices and availability will be maintained before launch.</p>
        </article>
        <article className="policy-block">
          <h2>Product information</h2>
          <p>Ingredients, benefits, directions, warnings, manufacturer and regulatory details are not published unless confirmed from official product packaging or other appropriate documentation. Read the manufacturer&apos;s official label and follow its instructions. Website content is not medical advice.</p>
        </article>
        <article className="policy-block">
          <h2>Website use</h2>
          <p>Please submit accurate contact and delivery information and use the website lawfully. These draft terms do not establish a complete limitation-of-liability, governing-law or dispute process; those provisions require owner and legal review.</p>
        </article>
        <article className="policy-block">
          <h2>Contact</h2>
          <p>Questions about an order or these draft terms can be sent to <a href={`mailto:${store.contactEmail}`}>{store.contactEmail}</a>.</p>
        </article>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PolicyDraftNote } from "@/components/policy-draft-note";
import { store } from "@/config/store";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Refunds & Returns",
  "Refund and return terms have not been confirmed by the business owner. Review this draft notice before placing an order.",
  "/en/refund-policy",
);

export default function RefundPolicyPage() {
  return (
    <main id="main-content">
      <Breadcrumbs locale="en" items={[{ label: "Refunds & returns" }]} />
      <section className="page-hero container policy-hero">
        <p className="eyebrow"><span className="eyebrow-line" /> Refunds & returns</p>
        <h1>A policy still<br /><em>to be confirmed.</em></h1>
        <p>The business has not supplied a confirmed return, refund, exchange or cancellation policy. We will not invent one.</p>
      </section>
      <section className="section container policy-content">
        <PolicyDraftNote />
        <article className="policy-block">
          <h2>Before placing an order</h2>
          <p>Please contact our team at <a href={`mailto:${store.contactEmail}`}>{store.contactEmail}</a> to ask about a specific order before submitting a request. The team must provide the applicable policy directly until the business owner confirms and publishes a written policy here.</p>
        </article>
        <article className="policy-block">
          <h2>Owner action required</h2>
          <p>The business owner must define the eligibility, time limits, process, customer costs, condition of goods, treatment of damaged or incorrect items, cancellation rules and applicable consumer-law requirements before this page is used as a final policy.</p>
        </article>
      </section>
    </main>
  );
}

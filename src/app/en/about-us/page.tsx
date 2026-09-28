import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
import { store } from "@/config/store";

export const metadata: Metadata = pageMetadata(
  "About Us | Men's Wellness with Care",
  "Learn about our approach to men's wellness: clear information, convenient ordering, customer care and delivery across Malaysia.",
  "/en/about-us",
);

const principles = [
  ["01", "Clear information", "Product details should come from official packaging, not guesswork. Where we do not yet have verified information, we say so."],
  ["02", "A respectful experience", "Wellness is personal. Our tone is considerate, our information is straightforward, and every customer can make their own choice."],
  ["03", "Convenience for Malaysia", `${store.deliveryLabel} and ${store.codAvailable ? `${store.codLabel} availability` : "payment details confirmed by our team"} make it easier to place an order request from wherever you are.`],
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <Breadcrumbs locale="en" items={[{ label: "About us" }]} />
      <section className="page-hero about-hero container">
        <p className="eyebrow"><span className="eyebrow-line" /> Our approach</p>
        <h1>Wellness deserves<br /><em>a little more care.</em></h1>
        <p>We believe men&apos;s wellness should be approached with confidence, privacy and care. Our focus is simple: convenient online ordering, clear information and thoughtful service for customers across Malaysia.</p>
        <p className="about-no-story">No grand origin story. Just a commitment to serve customers respectfully and make the essentials easier to understand.</p>
      </section>
      <section className="relationship-section about-statement">
        <div className="container relationship-inner">
          <div className="relationship-mark" aria-hidden="true"><span className="relationship-circle circle-one" /><span className="relationship-circle circle-two" /><span className="relationship-spark">✳</span></div>
          <div className="relationship-copy">
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> A simple belief</p>
            <h2>Take care of yourself.<br /><em>Stay connected.</em></h2>
            <p>Your relationship with yourself matters, and so do the people close to you. We want the experience of exploring men&apos;s wellness to feel calm, considerate and free from pressure.</p>
          </div>
        </div>
      </section>
      <section className="section container principles-section">
        <div className="section-heading-row">
          <div><p className="eyebrow"><span className="eyebrow-line" /> What matters to us</p><h2>A thoughtful<br /><em>way to serve.</em></h2></div>
          <p className="section-intro">Our mission is to make men&apos;s wellness products easier to explore and order, while treating product facts and customer details with care.</p>
        </div>
        <div className="assurance-grid">
          {principles.map(([number, title, body]) => <article className="assurance-card" key={number}><span className="assurance-number">{number}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>
      <section className="simple-cta container">
        <div><p className="eyebrow"><span className="eyebrow-line" /> Here when you need us</p><h2>Questions are<br /><em>always welcome.</em></h2></div>
        <Link className="button button-dark" href="/en/contact">Contact our team <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}

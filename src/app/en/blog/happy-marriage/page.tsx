import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
import { store } from "@/config/store";

export const metadata: Metadata = pageMetadata(
  "Happy Marriage and Men's Wellness in Malaysia | Self-Care",
  "A long guide to married life, confidence, and men's self-care in Malaysia without medical claims. How to order Magnum Pump, Ultrahot, Horsemen or Hammer of Thor by email.",
  "/en/blog/happy-marriage",
  "en",
  [
    "happy marriage Malaysia",
    "men's wellness Malaysia",
    "husband and wife relationship",
    "men's self-care",
    "confidence in marriage",
    "buy men's wellness online Malaysia",
  ],
);

export default function HappyMarriageArticle() {
  return (
    <main id="main-content">
      <Breadcrumbs locale="en" items={[{ label: "Journal", href: "/en/blog" }, { label: "Happy marriage" }]} />
      <article className="section container blog-list">
        <header className="page-hero blog-hero">
          <p className="eyebrow"><span className="eyebrow-line" /> Relationships and self-care</p>
          <h1>A calmer marriage starts<br /><em>with presence, not a slogan.</em></h1>
          <p>Written for couples in Malaysia who care about men's wellness, confidence and a quieter home. Lifestyle reading only. Not medical advice.</p>
        </header>
        <figure className="blog-hero-photo">
          <Image
            src="/blog/couple-sunset.webp"
            alt="A married couple sitting together on the beach at sunset"
            width={1600}
            height={1000}
            priority
          />
          <figcaption>Time together is usually quieter than advertising suggests.</figcaption>
        </figure>
        <section className="blog-article"><div className="blog-article-content">
          <h2>Why this page exists</h2>
          <p>Most couples are not looking for a lecture. They want a home that feels kinder at the end of a long day. This article is for that quieter hope: a husband who wants to show up, a wife who wants to feel met, and a marriage that still has room to breathe.</p>
          <p>Lebih Yakin sells a small men's wellness catalogue &mdash; Magnum Pump, Ultrahot, Horsemen and Hammer of Thor. We write about married life because that is the world our customers live in. It is not a clinic, and it is not a promise that any product can repair a relationship.</p>
        </div></section>
        <section className="blog-article"><div className="blog-article-content">
          <h2>What a happy marriage usually looks like</h2>
          <p>Most lasting marriages in Malaysia are not dramatic. They are built from ordinary evenings: coming home, asking how the day went, keeping a promise, lowering your voice. Confidence in a husband is often the feeling that he is still in the room, not that he has bought a miracle.</p>
          <p>Women and men both carry tiredness. If work leaves you with a tight head or a short temper, the kind thing is rest or a doctor, not an advert. Self-care is sleep, food, movement, and speaking before resentment grows.</p>
        </div></section>
        <section className="blog-article"><div className="blog-article-content">
          <h2>Men's wellness without shame</h2>
          <p>Looking after yourself can include a wellness product. It cannot include a guarantee. Read the pack. Do not treat a shop page as a prescription. If something in your health worries you, see a qualified professional in Kuala Lumpur or wherever you live.</p>
          <p>The useful shop facts are simple. Each product is RM159. Delivery across Malaysia is free. Cash on Delivery is offered after we confirm the destination. Orders open an email to {store.contactEmail}.</p>
        </div></section>
        <section className="blog-article"><div className="blog-article-content">
          <h2>Talking with your spouse</h2>
          <p>Hard conversations go better when they are specific and kind. Say what you need. Listen without scoring points. Do not use a product as a substitute for an apology or for time together.</p>
          <p>Privacy matters. Order if you want to order. Do not turn the house into a test. A successful married life is closer to patience than to performance.</p>
        </div></section>
        <section className="blog-article"><div className="blog-article-content">
          <h2>How to order from this site</h2>
          <p>Open the product page, choose the item, fill the form, send the email. We work from {store.address}. We will confirm the address before a courier is booked.</p>
          <p>This article is general information. It does not diagnose illness and it does not claim results for any product in the catalogue.</p>
        </div></section>
        <p><Link className="text-link" href="/en/products">See the men's wellness collection <span aria-hidden="true">↗</span></Link></p>
      </article>
    </main>
  );
}

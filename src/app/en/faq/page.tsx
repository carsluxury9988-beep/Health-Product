import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
import { store } from "@/config/store";
import { products } from "@/config/products";
import { formatPrice } from "@/lib/format";

export const metadata: Metadata = pageMetadata(
  "Frequently Asked Questions",
  `Answers about product pricing, ${store.deliveryLabel.toLowerCase()}, ${store.codLabel}, ordering and customer information.`,
  "/en/faq",
);

const questions = [
  {
    question: "What products do you sell?",
    answer: "The current catalogue lists Magnum Pump, Ultrahot, Horsemen and Hammer of Thor. Product ingredients, benefits, usage instructions and other details will be updated from official packaging.",
  },
  {
    question: "How much does each product cost?",
    answer: `Each of the four listed products is ${formatPrice(products[0].price)}. Delivery: ${store.deliveryFee === 0 ? "FREE" : formatPrice(store.deliveryFee)}.`,
  },
  {
    question: "Is delivery free?",
    answer: `${store.deliveryLabel}.`,
  },
  {
    question: "Do you deliver throughout Malaysia?",
    answer: `${store.deliveryCoverage} Our team will confirm service and delivery details for your address.`,
  },
  {
    question: "Is Cash on Delivery available?",
    answer: store.codAvailable ? store.codAvailabilityNote : "Cash on Delivery is not currently available. Contact our team to ask about other options.",
  },
  {
    question: "How do I place an order?",
    answer: "Choose a product, select a quantity from 1 to 10, enter your contact and delivery details, and submit the order request. We will follow up to confirm availability and delivery arrangements.",
  },
  {
    question: "How will my order be confirmed?",
    answer: "Submitting the online form sends an order request to our team. It is not a dispatch confirmation. We will contact you using the details you provide to confirm stock and delivery information.",
  },
  {
    question: "How long does delivery take?",
    answer: store.deliveryTimingNote,
  },
  {
    question: "Can I order more than one product?",
    answer: "Yes. You can choose a quantity of up to 10 units of one product in a single request. For a mixed-product request, please contact our team.",
  },
  {
    question: "How is my information handled?",
    answer: `Your details are used to process the request and contact you about it. Read our Privacy Policy or email ${store.contactEmail} with a privacy question. The policy is a draft pending owner review.`,
  },
  {
    question: "What if I have a question about a product?",
    answer: `Please contact ${store.contactEmail}. Ingredients, directions, warnings and product-specific benefits have not yet been confirmed from the official packaging.`,
  },
];

export default function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main id="main-content">
      <Breadcrumbs locale="en" items={[{ label: "FAQ" }]} />
      <section className="page-hero faq-hero container">
        <p className="eyebrow"><span className="eyebrow-line" /> The helpful bits</p>
        <h1>Good questions<br /><em>deserve clear answers.</em></h1>
        <p>Find the essentials about products, ordering, delivery and getting in touch.</p>
      </section>
      <section className="section container faq-layout">
        <nav className="faq-side-nav" aria-label="On this page">
          <span className="eyebrow">Jump to</span>
          <a href="#faq-0">Products & pricing</a>
          <a href="#faq-2">Delivery & payment</a>
          <a href="#faq-5">Orders & support</a>
        </nav>
        <div className="faq-list">
          {questions.map((item, index) => (
            <details className="faq-item" key={item.question} id={`faq-${index}`}>
              <summary><span>{item.question}</span><span className="faq-plus" aria-hidden="true" /></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="faq-contact container">
        <p>Still have a question?</p>
        <Link className="text-link" href="/en/contact">Talk to our team <span aria-hidden="true">↗</span></Link>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </main>
  );
}

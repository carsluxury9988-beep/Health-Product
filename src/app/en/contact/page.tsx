import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { store } from "@/config/store";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Contact Our Team in Kuala Lumpur",
  "Email producth006@gmail.com or write to 1, Jalan Metro Prima, Taman Kepong, 52100 Kuala Lumpur. Questions about Magnum Pump, Ultrahot, Horsemen and Hammer of Thor.",
  "/en/contact",
);

export default function ContactPage() {
  const whatsappDigits = store.whatsappNumber?.replace(/\D/g, "") ?? "";

  return (
    <main id="main-content">
      <Breadcrumbs locale="en" items={[{ label: "Contact" }]} />
      <section className="contact-page container">
        <div className="contact-intro">
          <p className="eyebrow"><span className="eyebrow-line" /> Here to help</p>
          <h1>We're here<br /><em>to help.</em></h1>
          <p>Have a question about an order or one of our products? Contact our team and we'll be happy to help.</p>
          <div className="contact-details">
            <span className="eyebrow">Email</span>
            <a href={`mailto:${store.contactEmail}`}>{store.contactEmail}</a>
            {store.address && <>
              <span className="eyebrow contact-availability">Address</span>
              <p>{store.address}</p>
            </>}
            {store.phone && <>
              <span className="eyebrow contact-availability">Phone</span>
              <a href={`tel:${store.phone.replace(/[^\d+]/g, "")}`}>{store.phone}</a>
            </>}
            {whatsappDigits && <>
              <span className="eyebrow contact-availability">WhatsApp</span>
              <a href={`https://wa.me/${whatsappDigits}`} target="_blank" rel="noopener noreferrer">Message our team</a>
            </>}
            <span className="eyebrow contact-availability">For product information</span>
            <p>Ingredients, usage instructions and other product details will be updated from the official packaging when available.</p>
          </div>
          <Link className="text-link" href="/en/faq">You may find your answer in our FAQ <span aria-hidden="true">↗</span></Link>
        </div>
        <ContactForm locale="en" />
      </section>
    </main>
  );
}

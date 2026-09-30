"use client";

import { useState } from "react";
import Link from "next/link";
import { products, getProduct } from "@/config/products";
import { store } from "@/config/store";
import { openShopEmail } from "@/lib/mailto";
import { trackEvent } from "@/lib/analytics";
import { getMessages, type Locale } from "@/i18n";

export function ContactForm({ locale = "en" }: { locale?: Locale }) {
  const t = getMessages(locale);
  const privacyPath = locale === "en" ? "/en/privacy-policy" : "/polisi-privasi";
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    if (String(form.get("website") ?? "").trim()) return;

    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const productSlug = String(form.get("product") ?? "");
    const message = String(form.get("message") ?? "").trim();
    const product = getProduct(productSlug);

    if (name.length < 2 || !email.includes("@") || message.length < 10) {
      setError(t.contact.errors.fallback);
      return;
    }
    if (form.get("privacyConsent") !== "on") {
      setError(t.contact.errors.consent);
      return;
    }

    const subject = locale === "ms"
      ? `Pertanyaan dari ${name}${product ? ` — ${product.name}` : ""}`
      : `Enquiry from ${name}${product ? ` — ${product.name}` : ""}`;
    const body = [
      locale === "ms" ? "Pertanyaan dari lebihyakin.my" : "Enquiry from lebihyakin.my",
      "",
      `${locale === "ms" ? "Nama" : "Name"}: ${name}`,
      `Email: ${email}`,
      phone ? `${locale === "ms" ? "Telefon" : "Phone"}: ${phone}` : "",
      product ? `${locale === "ms" ? "Produk" : "Product"}: ${product.name}` : "",
      "",
      message,
    ].filter(Boolean).join("\n");

    openShopEmail(subject, body);
    trackEvent("contact_submit");
    setSent(true);
    formElement.reset();
  }

  if (sent) {
    return (
      <div className="form-card form-success" role="status">
        <span className="success-mark" aria-hidden="true">✓</span>
        <h2>{t.contact.sentTitle}</h2>
        <p>{locale === "ms" ? `E-mel anda dibuka kepada ${store.contactEmail}. Hantar mesej itu dari peti masuk anda.` : `Your email app opened to ${store.contactEmail}. Send the message from your inbox.`}</p>
        <button className="text-link" type="button" onClick={() => setSent(false)}>{t.contact.another}</button>
      </div>
    );
  }

  return (
    <form className="form-card contact-form" onSubmit={handleSubmit}>
      <label htmlFor="contact-name">{t.contact.name} <span className="required-mark">*</span></label>
      <input id="contact-name" name="name" autoComplete="name" minLength={2} maxLength={100} required />
      <label htmlFor="contact-email">{t.contact.email} <span className="required-mark">*</span></label>
      <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required />
      <label htmlFor="contact-phone">{t.contact.phone} <span className="field-optional">{t.common.optional}</span></label>
      <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder={t.order.phonePlaceholder} pattern="(?:\+?60|0)1[\d\s()-]{8,14}" title={t.order.phoneHint} />
      <label htmlFor="contact-product">{t.contact.product} <span className="field-optional">{t.common.optional}</span></label>
      <select id="contact-product" name="product" defaultValue="">
        <option value="">{t.contact.productOptional}</option>
        {products.map((product) => <option key={product.id} value={product.slug}>{product.name}</option>)}
      </select>
      <label htmlFor="contact-message">{t.contact.message} <span className="required-mark">*</span></label>
      <textarea id="contact-message" name="message" rows={6} minLength={10} maxLength={2000} required />
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="contact-website">{locale === "ms" ? "Biarkan ruangan ini kosong" : "Leave this field empty"}</label>
        <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="check-row">
        <input type="checkbox" name="privacyConsent" required />
        <span>{t.contact.consent} <Link href={privacyPath}>{t.common.privacy}</Link>.</span>
      </label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-dark form-submit" type="submit">
        {t.contact.submit} <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">{t.contact.preferEmail} <a href={`mailto:${store.contactEmail}`}>{store.contactEmail}</a>.</p>
    </form>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/config/products";
import { store } from "@/config/store";
import { trackEvent } from "@/lib/analytics";
import { getMessages, type Locale } from "@/i18n";

export function ContactForm({ locale = "en" }: { locale?: Locale }) {
  const t = getMessages(locale);
  const privacyPath = locale === "en" ? "/en/privacy-policy" : "/polisi-privasi";
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitting(true);
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const message = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      product: form.get("product"),
      message: form.get("message"),
      privacyConsent: form.get("privacyConsent") === "on",
      website: form.get("website"),
      locale,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Site-Locale": locale },
        body: JSON.stringify(message),
      });
      const result = (await response.json()) as { message?: string; error?: string };
      if (!response.ok) {
        setError(result.error ?? t.contact.errors.fallback);
        return;
      }
      trackEvent("contact_submit");
      setSent(true);
      formElement.reset();
    } catch {
      setError(t.contact.errors.network);
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="form-card form-success" role="status">
        <span className="success-mark" aria-hidden="true">✓</span>
        <h2>{t.contact.sentTitle}</h2>
        <p>{t.contact.sentBody}</p>
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
      <button className="button button-dark form-submit" type="submit" disabled={submitting}>
        {submitting ? t.contact.submitting : t.contact.submit} <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">{t.contact.preferEmail} <a href={`mailto:${store.contactEmail}`}>{store.contactEmail}</a>.</p>
    </form>
  );
}

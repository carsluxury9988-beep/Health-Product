"use client";

import { useState, type FormEvent } from "react";
import { getMessages, type Locale } from "@/i18n";
import { analytics } from "@/lib/analytics";
import { contactMessage, whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

export function ContactForm({ locale }: { locale: Locale }) {
  const t = getMessages(locale).contactPage;
  const [error, setError] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (name.length < 2) return setError(t.errors.name);
    if (message.length < 5) return setError(t.errors.message);
    setError(null);
    analytics.contactSubmit();
    window.open(whatsappUrl(contactMessage(name.slice(0, 100), message.slice(0, 1500), locale)), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate>
      <h2>{t.formTitle}</h2>
      <div className="field">
        <label htmlFor="contact-name">{t.formName}</label>
        <input id="contact-name" name="name" autoComplete="name" required maxLength={100} />
      </div>
      <div className="field">
        <label htmlFor="contact-message">{t.formMessage}</label>
        <textarea id="contact-message" name="message" rows={4} required maxLength={1500} />
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button type="submit" className="btn btn-wa btn-lg btn-block"><WhatsAppIcon /> {t.formSubmit}</button>
      <p className="form-note">{t.formHint}</p>
    </form>
  );
}

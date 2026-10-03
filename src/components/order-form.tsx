"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { getProduct, products } from "@/config/products";
import { malaysianStates, malaysianStatesMs } from "@/config/store";
import { getMessages, type Locale } from "@/i18n";
import { routePath } from "@/i18n/routes";
import { trackEvent } from "@/lib/analytics";
import { parseOrderInput } from "@/lib/forms";
import { formatRinggit, formOrderMessage, MAX_QUANTITY, whatsappUrl } from "@/lib/whatsapp";
import { CheckIcon, WhatsAppIcon } from "@/components/icons";

export function OrderForm({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const f = t.orderPage;
  const searchParams = useSearchParams();
  const initialSlug = getProduct(searchParams?.get("product") ?? "")?.slug ?? products[0].slug;
  const [productSlug, setProductSlug] = useState(initialSlug);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [sentUrl, setSentUrl] = useState<string | null>(null);
  const product = getProduct(productSlug) ?? products[0];
  const stateLabels = locale === "ms" ? malaysianStatesMs : malaysianStates;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const parsed = parseOrderInput({
      productSlug,
      quantity,
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      address: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      notes: data.get("notes"),
      website: data.get("website"),
      codConfirmed: data.get("cod") === "on",
      privacyConsent: data.get("consent") === "on",
    }, locale);
    if ("error" in parsed || !parsed.value) {
      setError(parsed.error ?? f.errors.invalid);
      return;
    }
    const order = parsed.value;
    const url = whatsappUrl(formOrderMessage({
      productName: order.product.name,
      unitPrice: order.product.price,
      quantity: order.quantity,
      name: order.name,
      phone: order.phone,
      email: order.email,
      address: order.address,
      city: order.city,
      state: order.stateLabel,
      notes: order.notes,
    }, locale));
    setError(null);
    setSentUrl(url);
    trackEvent("order_form_submit", { item_name: order.product.name, quantity: order.quantity, value: order.product.price * order.quantity, currency: "MYR" });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (sentUrl) {
    return (
      <div className="form-card form-success" role="status">
        <span className="success-icon"><CheckIcon size={28} /></span>
        <h2>{f.sentTitle}</h2>
        <p>{f.sentBody}</p>
        <a className="btn btn-wa btn-lg" href={sentUrl} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> {f.sentRetry}</a>
        <button type="button" className="btn btn-ghost" onClick={() => setSentUrl(null)}>{f.sentEdit}</button>
      </div>
    );
  }

  return (
    <form className="form-card order-form" onSubmit={onSubmit} noValidate>
      <fieldset>
        <legend>{f.sections[0]}</legend>
        <div className="field">
          <label htmlFor="product">{f.product}</label>
          <select id="product" name="product" value={productSlug} onChange={(e) => setProductSlug(e.target.value)}>
            {products.map((item) => <option key={item.slug} value={item.slug}>{item.name} — {formatRinggit(item.price)}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="quantity">{f.quantity}</label>
          <select id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
            {Array.from({ length: MAX_QUANTITY }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
      </fieldset>

      <fieldset>
        <legend>{f.sections[1]}</legend>
        <div className="field">
          <label htmlFor="name">{f.name}</label>
          <input id="name" name="name" autoComplete="name" required maxLength={100} />
        </div>
        <div className="field-row">
          <div className="field">
            <label htmlFor="phone">{f.phone}</label>
            <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder={f.phonePlaceholder} required maxLength={30} />
          </div>
          <div className="field">
            <label htmlFor="email">{f.email}</label>
            <input id="email" name="email" type="email" autoComplete="email" maxLength={254} />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>{f.sections[2]}</legend>
        <div className="field">
          <label htmlFor="address">{f.address}</label>
          <textarea id="address" name="address" rows={3} autoComplete="street-address" placeholder={f.addressPlaceholder} required maxLength={500} />
        </div>
        <div className="field-row">
          <div className="field">
            <label htmlFor="city">{f.city}</label>
            <input id="city" name="city" autoComplete="address-level2" required maxLength={80} />
          </div>
          <div className="field">
            <label htmlFor="state">{f.state}</label>
            <select id="state" name="state" defaultValue="" required>
              <option value="" disabled>{f.selectState}</option>
              {malaysianStates.map((state, index) => <option key={state} value={state}>{stateLabels[index]}</option>)}
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="notes">{f.notes}</label>
          <textarea id="notes" name="notes" rows={2} maxLength={500} />
        </div>
        <div className="hp" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </fieldset>

      <fieldset>
        <legend>{f.sections[3]}</legend>
        <dl className="summary">
          <div><dt>{product.name} × {quantity}</dt><dd>{formatRinggit(product.price * quantity)}</dd></div>
          <div><dt>{f.delivery}</dt><dd>{f.free}</dd></div>
          <div><dt>{f.payment}</dt><dd>{t.common.codShort}</dd></div>
          <div className="summary-total"><dt>{t.common.total}</dt><dd>{formatRinggit(product.price * quantity)}</dd></div>
        </dl>
        <label className="check">
          <input type="checkbox" name="cod" required />
          <span>{f.codConsent}</span>
        </label>
        <label className="check">
          <input type="checkbox" name="consent" required />
          <span>{f.privacyConsent} <Link href={routePath("privacy", locale)}>{f.privacyLink}</Link></span>
        </label>
      </fieldset>

      {error && <p className="form-error" role="alert">{error}</p>}
      <button type="submit" className="btn btn-wa btn-lg btn-block"><WhatsAppIcon /> {f.submit}</button>
      <p className="form-note">{f.privacyNote}</p>
    </form>
  );
}

"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { products, getProduct } from "@/config/products";
import { malaysianStates, malaysianStatesMs, store } from "@/config/store";
import { formatPrice } from "@/lib/format";
import { trackEvent } from "@/lib/analytics";
import { useOrderConfirmation } from "@/components/order-confirmation-provider";
import { getMessages, type Locale } from "@/i18n";

export function OrderForm({ initialProduct, locale = "ms" }: { initialProduct: string; locale?: Locale }) {
  const router = useRouter();
  const { setSummary } = useOrderConfirmation();
  const t = getMessages(locale);
  const contactPath = locale === "en" ? "/en/contact" : "/hubungi-kami";
  const privacyPath = locale === "en" ? "/en/privacy-policy" : "/polisi-privasi";
  const [productSlug, setProductSlug] = useState(getProduct(initialProduct)?.slug ?? products[0].slug);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const selectedProduct = getProduct(productSlug) ?? products[0];
  const total = selectedProduct.price * quantity + store.deliveryFee;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    const form = new FormData(event.currentTarget);
    const stateValue = String(form.get("state") ?? "");
    const order = {
      productSlug,
      quantity,
      name: form.get("name"),
      phone: form.get("phone"),
      email: form.get("email"),
      address: form.get("address"),
      city: form.get("city"),
      state: stateValue,
      notes: form.get("notes"),
      codConfirmed: store.codAvailable && form.get("codConfirmed") === "on",
      privacyConsent: form.get("privacyConsent") === "on",
      website: form.get("website"),
      locale,
    };

    trackEvent("begin_checkout", {
      item_name: selectedProduct.name,
      value: total,
      currency: "MYR",
      quantity,
    });

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Site-Locale": locale },
        body: JSON.stringify(order),
      });
      const result = (await response.json()) as
        | { reference: string; total: number; unitPrice: number; deliveryFee: number; stateLabel: string }
        | { error: string };

      if (!response.ok || "error" in result) {
        setError("error" in result ? result.error : t.order.errors.send);
        return;
      }

      const value = {
        reference: result.reference,
        productName: selectedProduct.name,
        quantity,
        unitPrice: result.unitPrice,
        deliveryFee: result.deliveryFee,
        name: String(order.name),
        phone: String(order.phone),
        email: String(order.email ?? ""),
        address: String(order.address),
        city: String(order.city),
        state: String(order.state),
        stateLabel: result.stateLabel,
        notes: String(order.notes ?? ""),
      };
      setSummary(value);
      trackEvent("order_submit", { item_name: selectedProduct.name, value: result.total, currency: "MYR", quantity });
      router.push(locale === "en" ? "/en/order/confirmation" : "/pesanan/pengesahan");
    } catch {
      setError(t.order.errors.network);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="form-card order-form" onSubmit={handleSubmit}>
      <div className="form-section">
        <p className="form-section-kicker">01 <span>{t.order.formSections[0]}</span></p>
        <label htmlFor="product">{t.order.product}</label>
        <select id="product" name="product" value={productSlug} onChange={(event) => setProductSlug(event.target.value)}>
          {products.map((product) => <option key={product.id} value={product.slug}>{product.name} — {formatPrice(product.price)}</option>)}
        </select>
        <label htmlFor="quantity">{t.order.quantity}</label>
        <select id="quantity" name="quantity" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))}>
          {Array.from({ length: 10 }, (_, index) => index + 1).map((number) => <option key={number} value={number}>{number}</option>)}
        </select>
      </div>
      <div className="form-section">
        <p className="form-section-kicker">02 <span>{t.order.formSections[1]}</span></p>
        <label htmlFor="name">{t.order.name} <span className="required-mark">*</span></label>
        <input id="name" name="name" autoComplete="name" minLength={2} maxLength={100} required />
        <label htmlFor="phone">{t.order.phone} <span className="required-mark">*</span></label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder={t.order.phonePlaceholder} pattern="(?:\+?60|0)1[\d\s()-]{8,14}" title={t.order.phoneHint} required />
        <label htmlFor="email">{t.order.email} <span className="field-optional">{t.common.optional}</span></label>
        <input id="email" name="email" type="email" autoComplete="email" maxLength={254} />
      </div>
      <div className="form-section">
        <p className="form-section-kicker">03 <span>{t.order.formSections[2]}</span></p>
        <label htmlFor="address">{t.order.address} <span className="required-mark">*</span></label>
        <textarea id="address" name="address" rows={4} minLength={10} maxLength={500} autoComplete="street-address" placeholder={t.order.addressPlaceholder} required />
        <label htmlFor="city">{t.order.city} <span className="required-mark">*</span></label>
        <input id="city" name="city" autoComplete="address-level2" minLength={2} maxLength={80} required />
        <label htmlFor="state">{t.order.state} <span className="required-mark">*</span></label>
        <select id="state" name="state" autoComplete="address-level1" defaultValue="" required>
          <option value="" disabled>{t.order.select}</option>
          {malaysianStates.map((state, index) => <option key={state} value={state}>{locale === "ms" ? malaysianStatesMs[index] : state}</option>)}
        </select>
        <label htmlFor="notes">{t.order.notes} <span className="field-optional">{t.common.optional}</span></label>
        <textarea id="notes" name="notes" rows={2} maxLength={500} />
      </div>
      <div className="form-section">
        <p className="form-section-kicker">04 <span>{t.order.formSections[3]}</span></p>
        {store.codAvailable ? (
          <label className="check-row">
            <input type="checkbox" name="codConfirmed" required />
            <span>{t.common.codConfirmation}</span>
          </label>
        ) : (
          <p className="form-error" role="status">{t.common.cod} {locale === "ms" ? "tidak tersedia buat masa ini." : "is not available at this time."} <Link href={contactPath}>{t.nav.contact}</Link></p>
        )}
        <label className="check-row">
          <input type="checkbox" name="privacyConsent" required />
          <span>{t.order.privacyConsent} <Link href={privacyPath}>{t.common.privacy}</Link>.</span>
        </label>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="order-website">{locale === "ms" ? "Biarkan ruangan ini kosong" : "Leave this field empty"}</label>
        <input id="order-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="order-total">
        <span><strong>{t.order.price}: {formatPrice(selectedProduct.price)}</strong> × {quantity}<br /><small>{t.order.delivery}: {store.deliveryFee === 0 ? t.order.free : formatPrice(store.deliveryFee)} · {store.codAvailable ? t.common.cod : t.nav.contact}</small></span>
        <span className="order-total-price">{formatPrice(total)}</span>
      </div>
      <p className="form-note">{t.order.requestInfo}</p>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-dark form-submit" type="submit" disabled={submitting || !store.codAvailable}>
        {submitting ? t.order.submitting : store.codAvailable ? `${t.order.submit} · ${formatPrice(total)}` : t.nav.contact}
        <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}

import { getProduct } from "@/config/products";
import { malaysianStates, malaysianStatesMs, store } from "@/config/store";
import { getMessages, type Locale } from "@/i18n";
import { MAX_QUANTITY } from "@/lib/whatsapp";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const malaysiaMobilePattern = /^(?:\+?60|0)1\d{8,9}$/;

function safeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Validates the on-site order form before it is turned into a WhatsApp message.
 * Runs in the browser; nothing is sent to or stored on the server.
 */
export function parseOrderInput(value: unknown, locale: Locale = "en") {
  const t = getMessages(locale).orderPage.errors;
  if (!value || typeof value !== "object") return { error: t.invalid };
  const body = value as Record<string, unknown>;
  const productSlug = safeText(body.productSlug);
  const product = getProduct(productSlug);
  const quantity = Number(body.quantity);
  const name = safeText(body.name);
  const phone = safeText(body.phone).replace(/[\s()-]/g, "");
  const email = safeText(body.email).toLowerCase();
  const address = safeText(body.address);
  const city = safeText(body.city);
  const state = safeText(body.state);
  const notes = safeText(body.notes);

  if (safeText(body.website)) return { error: t.invalid };
  if (productSlug.length > 80 || name.length > 100 || phone.length > 30 || email.length > 254 || address.length > 500 || city.length > 80 || state.length > 40 || notes.length > 500) {
    return { error: t.length };
  }
  if (!product) return { error: t.product };
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > MAX_QUANTITY) return { error: t.quantity };
  if (name.length < 2) return { error: t.name };
  if (!malaysiaMobilePattern.test(phone)) return { error: t.phone };
  if (email && !emailPattern.test(email)) return { error: t.email };
  if (address.length < 5 || city.length < 2) return { error: t.address };
  const stateIndex = malaysianStates.indexOf(state as (typeof malaysianStates)[number]);
  if (stateIndex < 0) return { error: t.state };
  if (!store.codAvailable || body.codConfirmed !== true) return { error: t.cod };
  if (body.privacyConsent !== true) return { error: t.consent };

  return {
    value: {
      product,
      quantity,
      name,
      phone,
      email,
      address,
      city,
      state,
      stateLabel: locale === "ms" ? malaysianStatesMs[stateIndex] : state,
      notes,
    },
  };
}

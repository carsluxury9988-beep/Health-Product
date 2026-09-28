import { products } from "@/config/products";
import { safeText } from "@/lib/format";
import { malaysianStates, malaysianStatesMs, store } from "@/config/store";
import { getMessages, type Locale } from "@/i18n";

export type OrderInput = {
  productSlug: string;
  quantity: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  notes: string;
  codConfirmed: boolean;
  privacyConsent: boolean;
  website: string;
};

export type ContactInput = {
  name: string;
  email: string;
  phone: string;
  product: string;
  message: string;
  privacyConsent: boolean;
  website: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const malaysiaMobilePattern = /^(?:\+?60|0)1\d{8,9}$/;

export function parseOrderInput(value: unknown, locale: Locale = "en") {
  const t = getMessages(locale).order.errors;
  if (!value || typeof value !== "object") return { error: t.invalid };
  const body = value as Record<string, unknown>;
  const productSlug = safeText(body.productSlug);
  const product = products.find((item) => item.slug === productSlug);
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
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
    return { error: t.quantity };
  }
  if (name.length < 2) return { error: t.name };
  if (!malaysiaMobilePattern.test(phone)) {
    return { error: t.phone };
  }
  if (email && (email.length > 254 || !emailPattern.test(email))) {
    return { error: t.email };
  }
  if (address.length < 5) return { error: t.address };
  if (city.length < 2) return { error: t.address };
  if (!malaysianStates.includes(state as (typeof malaysianStates)[number])) {
    return { error: t.state };
  }
  if (!store.codAvailable) return { error: t.cod };
  if (body.codConfirmed !== true) {
    return { error: t.cod };
  }
  if (body.privacyConsent !== true) {
    return { error: t.consent };
  }

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
      stateLabel: locale === "ms"
        ? malaysianStatesMs[malaysianStates.indexOf(state as (typeof malaysianStates)[number])]
        : state,
      notes,
    },
  };
}

export function parseContactInput(value: unknown, locale: Locale = "en") {
  const t = getMessages(locale).contact.errors;
  if (!value || typeof value !== "object") return { error: t.read };
  const body = value as Record<string, unknown>;
  const name = safeText(body.name);
  const email = safeText(body.email).toLowerCase();
  const phone = safeText(body.phone).replace(/[\s()-]/g, "");
  const product = safeText(body.product);
  const message = safeText(body.message);

  if (safeText(body.website)) return { error: t.read };
  if (name.length > 100 || email.length > 254 || phone.length > 30 || product.length > 80 || message.length > 2000) {
    return { error: t.length };
  }
  if (name.length < 2) return { error: t.name };
  if (!emailPattern.test(email)) return { error: t.email };
  if (phone && !malaysiaMobilePattern.test(phone)) {
    return { error: t.phone };
  }
  if (product && !products.some((item) => item.slug === product)) {
    return { error: t.product };
  }
  if (message.length < 10) return { error: t.message };
  if (body.privacyConsent !== true) {
    return { error: t.consent };
  }

  return { value: { name, email, phone, product, message } };
}

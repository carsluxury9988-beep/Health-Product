"use client";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

type Details = Record<string, string | number>;

function consented() {
  return typeof window !== "undefined" && document.cookie.includes("analytics-consent=accepted");
}

function send(gaEvent: string, gaParams: Record<string, unknown>, metaEvent?: { name: string; standard: boolean; params?: Details }) {
  if (!consented()) return;
  window.gtag?.("event", gaEvent, gaParams);
  if (metaEvent) window.fbq?.(metaEvent.standard ? "track" : "trackCustom", metaEvent.name, metaEvent.params ?? {});
}

/**
 * Analytics events (only sent after the visitor accepts optional analytics).
 * GA4 recommended events are used where they exist so they can be marked as key events:
 * - view_item: product page view
 * - generate_lead: product WhatsApp "Order" click or order-form submission (the site's conversions)
 * Meta Pixel standard events: ViewContent, Lead, Contact.
 */
export const analytics = {
  viewItem(item: { id: string; name: string; price: number }) {
    send(
      "view_item",
      { currency: "MYR", value: item.price, items: [{ item_id: item.id, item_name: item.name, price: item.price, quantity: 1 }] },
      { name: "ViewContent", standard: true, params: { content_ids: [item.id], content_type: "product", content_name: item.name, value: item.price, currency: "MYR" } },
    );
  },
  whatsappClick(source: string, product?: { name: string; value: number }) {
    if (product) {
      send(
        "generate_lead",
        { method: "whatsapp", lead_source: source, item_name: product.name, value: product.value, currency: "MYR" },
        { name: "Lead", standard: true, params: { content_name: product.name, value: product.value, currency: "MYR" } },
      );
      return;
    }
    send("whatsapp_click", { lead_source: source }, { name: "Contact", standard: true });
  },
  orderFormSubmit(order: { name: string; quantity: number; value: number }) {
    send(
      "generate_lead",
      { method: "order_form", lead_source: "order_form", item_name: order.name, quantity: order.quantity, value: order.value, currency: "MYR" },
      { name: "Lead", standard: true, params: { content_name: order.name, value: order.value, currency: "MYR" } },
    );
  },
  contactSubmit() {
    send("contact_submit", { method: "whatsapp" }, { name: "Contact", standard: true });
  },
};

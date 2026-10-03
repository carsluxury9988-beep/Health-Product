"use client";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export type CommerceEvent = "product_view" | "whatsapp_click" | "order_form_submit" | "contact_submit";

export function trackEvent(name: CommerceEvent, details: Record<string, string | number> = {}) {
  if (typeof window === "undefined" || !document.cookie.includes("analytics-consent=accepted")) return;
  window.gtag?.("event", name, details);
  window.fbq?.("trackCustom", name, details);
}

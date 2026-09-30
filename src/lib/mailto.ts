import { store } from "@/config/store";

export function shopMailto(subject: string, body: string) {
  const params = new URLSearchParams({
    subject,
    body,
  });
  return `mailto:${store.contactEmail}?${params.toString()}`;
}

export function openShopEmail(subject: string, body: string) {
  window.location.href = shopMailto(subject, body);
}

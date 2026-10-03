# Lebih Yakin — lebihyakin.my

Next.js (App Router) storefront for a small Malaysian men's health catalogue: Magnum Pump, Ultrahot, Horsemen and Hammer of Thor, RM159 each, free delivery, cash on delivery (COD). Bahasa Melayu is served at `/`, English at `/en`.

## Ordering flow

There is no checkout, payment or server-side order storage. Ordering happens on WhatsApp (`+60 19-402 2352`, `wa.me/60194022352`):

- Every product "Pesan / Order" button opens WhatsApp with a prefilled message (BM on BM pages, EN on `/en`) containing the product name, RM159 unit price, quantity, total and prompts for name, address and phone. See `src/lib/whatsapp.ts`.
- The order form (`/pesanan`, `/en/order`) validates in the browser (`src/lib/forms.ts`) and then opens WhatsApp with the complete order. Nothing is sent to or stored on the server.
- A floating WhatsApp button is shown site-wide.

A server-side order inbox would need an email/SMTP provider or a database; neither is configured, so the earlier `/api/order` and `/api/contact` email routes were removed.

## Run locally

Requires Node.js 20.9+.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Checks: `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`.

## Structure

- `src/config/store.ts` — brand, WhatsApp, email, and owner-supplied identity fields (legal name, SSM number, address). Identity fields are `null` until confirmed and are hidden while `null`.
- `src/config/products.ts` — product records and image paths. `malNumber` stays `null` until the official registration number is supplied.
- `src/i18n/ms.ts`, `src/i18n/en.ts` — all copy, including policies, FAQ and SEO titles/descriptions.
- `src/i18n/routes.ts` — the single BM↔EN route map used for hreflang, the language switch and the sitemap.
- `src/content/articles.ts` — blog articles (both languages, with sources).
- `src/app/(ms)` and `src/app/(en)/en` — two root layouts so `<html lang>` is `ms-MY` or `en-MY`. Route files are thin wrappers around `src/components/pages/*`.
- `src/lib/seo.ts`, `src/lib/schema.ts` — metadata (canonical, hreflang, Open Graph) and JSON-LD (OnlineStore, WebSite, Product/Offer, BreadcrumbList, FAQPage, Article).
- `public/products/*-pack.webp` — background-removed, upscaled cut-outs of the supplied pack photos; `*-square.jpg` for structured data; `public/og/*` share images.

## Analytics

Optional GA4 (`NEXT_PUBLIC_GA_ID`) and Meta Pixel (`NEXT_PUBLIC_META_PIXEL_ID`) load only after the visitor accepts the consent banner. Events (`src/lib/analytics.ts`):

| Action | GA4 event | Meta event |
| --- | --- | --- |
| Product page view | `view_item` | `ViewContent` |
| Product WhatsApp "Order" click (card or product page) | `generate_lead` (`method: whatsapp`, value in MYR) | `Lead` |
| Order form sent to WhatsApp | `generate_lead` (`method: order_form`) | `Lead` |
| Other WhatsApp clicks (header, floating button, label request) | `whatsapp_click` | `Contact` |
| Contact form sent to WhatsApp | `contact_submit` | `Contact` |

In GA4, mark `generate_lead` as a key event (Admin → Events). A click is an intent to order; the actual order is confirmed on WhatsApp.

## Content rules

- No medical, therapeutic or sexual-performance claims (Medicines (Advertisement and Sale) Act 1956). Tests fail if certain phrases appear in the dictionaries or product data.
- No reviews, ratings, certification logos, MAL/SSM numbers, addresses or company names unless real and supplied by the owner.
- Do not promise delivery times, couriers, discreet packaging or refund windows until confirmed (`store.discreetPackagingConfirmed`, `store.courierNames`).
- Hammer of Thor: keep the existing listing only; no extra SEO pages or keyword content.

## Owner TODO

- Registered business / company name, SSM registration number, trading address (`src/config/store.ts`).
- MAL registration number for each product, plus label details (`src/config/products.ts`).
- Real product photography and genuine customer reviews (a reviews section is intentionally omitted).
- Courier name(s), typical delivery times and packaging details, if they should be advertised.

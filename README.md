# Health Product

A responsive Next.js storefront for a Malaysian men's wellness catalogue. Product facts are limited to the supplied names and RM159 price; unprovided formulation, packaging and regulatory details remain unpublished.

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. Bahasa Melayu is the default language; the English site is under `/en/`. Set `NEXT_PUBLIC_SITE_URL` to the real public origin in `.env.local` when one is available. Until then canonical URLs and sitemap entries are intentionally omitted rather than pointed at a made-up domain.

Available checks:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Configuration

Store identity, email address, free-delivery/COD wording, optional business details, state list and the four product records are centralized in:

- `src/config/store.ts`
- `src/config/products.ts`
- `src/i18n/ms.ts` and `src/i18n/en.ts`

Do not add product ingredients, benefits, instructions, warnings, stock status, certification or registration data until verified against the official packaging or appropriate records. The owner has confirmed that the supplied couple/lifestyle photograph and product images are their own and may be used commercially. The homepage uses the supplied couple image, and the product cards use the corresponding supplied catalogue images for Magnum Pump, Ultrahot, Horsemen and Hammer of Thor. Keep these images; do not substitute stock/competitor imagery, generate packaging, or alter actual product labels.

The Malay and English translations are maintained separately in `src/i18n/`; customer-facing shared interface strings should come from the locale dictionaries rather than being duplicated in shared components. Root routes are Malay and their matching English routes live below `/en/`. The product and hero components use Next.js image optimization and locale-aware alternative text.

Copy `.env.example` to `.env.local` and configure:

Order notifications are sent server-side to `producth006@gmail.com`. No SMTP credentials are supplied with this project. To enable order and contact email delivery, obtain these values from your SMTP provider and add them to `.env.local` (or the deployment host's server-only environment):

```dotenv
EMAIL_HOST=
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=
EMAIL_PASSWORD=
EMAIL_FROM=
ORDER_NOTIFICATION_EMAIL=producth006@gmail.com
```

Fill in `EMAIL_HOST`, `EMAIL_USER`, and `EMAIL_PASSWORD` with the provider's SMTP server and credentials; set `EMAIL_PORT` and `EMAIL_SECURE` to the provider's required port/TLS mode; use a sender address authorized by that provider for `EMAIL_FROM`. Keep all SMTP values private and never prefix them with `NEXT_PUBLIC_`. The order endpoint always delivers orders to `producth006@gmail.com`; `ORDER_NOTIFICATION_EMAIL` configures the recipient for contact-form messages.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Real HTTPS site origin; enables canonical/Open Graph URLs and absolute sitemap links |
| `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_SECURE` | SMTP server and TLS settings for form notifications |
| `EMAIL_USER`, `EMAIL_PASSWORD` | SMTP credentials (server-side; never expose with a `NEXT_PUBLIC_` prefix) |
| `EMAIL_FROM` | Verified sender address |
| `ORDER_NOTIFICATION_EMAIL` | Contact-form notification inbox; the example sets this to `producth006@gmail.com` |
| `NEXT_PUBLIC_GA_ID` | Optional GA4 measurement ID; loaded only after analytics consent |
| `NEXT_PUBLIC_META_PIXEL_ID` | Optional Meta Pixel ID; loaded only after analytics consent |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Reserved for Search Console verification; no tag is emitted until configured |

Order and contact requests are validated on the server, then sent as plain-text email. Order emails include the customer and delivery details, product, quantity, price, delivery/payment method, total and notes. There is no database or durable order ledger. Without complete SMTP settings, APIs return an explicit `503` and the site tells customers to contact the team instead. A successful response means the email notification was accepted by SMTP, not that stock, dispatch or destination-specific COD has been confirmed.

## Security and operations

- API forms accept same-origin JSON only, validate and length-limit input, enforce a honeypot and use per-process rate limits.
- The rate limiter is in-memory and best-effort; configure a shared durable rate limiter before using multiple instances at meaningful public scale.
- Store and SMTP secrets remain server-only. No payment-card data is collected.
- Analytics scripts are optional and only loaded after an explicit opt-in stored in a first-party cookie.
- The consented `add_to_cart` event records the product order-link click-through (the site uses a direct-to-order flow and has no persistent cart).
- The supplied catalogue product images and couple/lifestyle image are included in `public/products/` and `public/home-couple.webp`. The owner has confirmed commercial usage rights.

## Deployment

Deploy as a Node.js Next.js application (for example, on Vercel or another host supporting the Next.js App Router and Node runtime). Before accepting real orders:

1. Add the production domain as `NEXT_PUBLIC_SITE_URL` and configure all SMTP values in the host's server-side environment.
2. Test a real order notification and contact message in a controlled environment; verify sender reputation, email delivery and team follow-up.
3. Have the owner confirm product label information, product availability, Malaysia-wide courier coverage, destination-specific COD, privacy/data-retention details, legal business identity, and final refund/terms policies.
4. Review applicable Malaysian advertising, consumer-protection, privacy and product-registration requirements with a qualified adviser before publishing health-related claims.

The privacy, terms, shipping and refund/return pages are explicitly marked as drafts. This site is not production-ready for public order acceptance until the owner confirms those details and completes the operational checks above.

## Research and content

Competitor observations and limitations are in [`docs/competitor-analysis.md`](docs/competitor-analysis.md); the qualitative, source-linked keyword map is in [`docs/seo-strategy.md`](docs/seo-strategy.md). Items requiring owner confirmation are tracked in [`docs/content-inventory.md`](docs/content-inventory.md).

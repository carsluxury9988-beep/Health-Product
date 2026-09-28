# Owner confirmation inventory

**Status:** Required before public launch. The website intentionally leaves these items unknown or displays draft notices.

**Image rights confirmed:** The owner confirms the supplied couple/lifestyle image and product images are their own and approved for commercial use. Existing supplied images remain in use; they are not an owner-confirmation or launch blocker. Do not replace them with stock or competitor imagery, generate product packaging, or alter actual product labels.

## Verification references

- [NPRA Malaysia](https://www.npra.gov.my/index.php/en/) — official site links to product registration and QUEST3+. No product-specific registration check was possible because product identifiers and packaging were not supplied.
- [Department of Personal Data Protection: Personal Data Protection Act 2010 (Act 709)](https://www.pdp.gov.my/ppdpv1/artikel/akta-pdp-2010/) — reference for qualified review of the final privacy policy; this draft is not a legal opinion.

## Brand, business and contact

- [ ] Confirm whether “Health Product” is the public trading/brand name; supply the legal business name and registration details for the footer, policies and any Organization schema.
- [ ] Supply an approved logo and brand assets.
- [ ] Confirm the contact email `producth006@gmail.com` is monitored and authorized for customer/order data.
- [ ] Supply a customer-support phone number, WhatsApp number (if offered), business address and support hours, if these should be published.
- [ ] Supply approved social-media URLs or confirm that none should be linked.
- [ ] Confirm the real website domain for `NEXT_PUBLIC_SITE_URL`.

## Each product

For Magnum Pump, Ultrahot, Horsemen and Hammer of Thor separately:

- [ ] Exact product identity, manufacturer, responsible seller/importer, country of manufacture and SKU (if any).
- [ ] Official label text: ingredients, serving/dosage, directions, age restrictions, warnings, contraindications and storage.
- [ ] Verified product category and factual description/benefits that are legally permissible to advertise in Malaysia.
- [ ] Applicable NPRA/KKM registration or notification status and evidence/reference, if one exists; independent verification before displaying any number or logo.
- [ ] Halal status/certificate only if documented and permission to use the mark is confirmed.
- [ ] Actual availability/stock status and process for keeping it current.
- [ ] Confirm RM159 is the current tax-inclusive consumer price for every product.
- [ ] Confirm packaging, warranty and after-sales support details; do not advertise discretion until packaging practices are verified.

## Fulfilment and payment

- [ ] Written confirmation of free delivery coverage for West Malaysia, Sabah, Sarawak, Labuan and any exclusions/surcharges.
- [ ] Courier/provider coverage, dispatch cut-off, handling times and evidence-based delivery estimates (none are currently shown).
- [ ] Exact states/postcodes where COD is available, any courier limitations and the process for confirming destination eligibility.
- [ ] Order-acceptance/stock confirmation workflow, who follows up, and expected customer response channel.
- [ ] Confirm whether quantity limit 10 per request is operationally appropriate.

## Legal, privacy and customer policy

- [ ] Owner/legal review and final approval of Terms, Privacy Policy, Shipping and Refund/Return policies.
- [ ] Refund, exchange, cancellation and damaged/incorrect-delivery process; eligibility, deadlines, costs and consumer-law requirements.
- [ ] Data controller identity, data locations, hosting and SMTP providers, access controls, retention/deletion periods, privacy request procedure and applicable cross-border disclosures.
- [ ] Confirm consent wording, lawful purposes and whether marketing communications will ever be sent (currently none are sent).
- [ ] Confirm any cookie/analytics requirements and opt-in behavior for the target deployment.
- [ ] Review health-product advertising, consumer-protection, privacy and product-registration requirements with a qualified Malaysian adviser before making health-related claims.

## Technical operations and research

- [ ] Configure and verify SMTP: `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_SECURE`, `EMAIL_USER`, `EMAIL_PASSWORD`, `EMAIL_FROM` and `ORDER_NOTIFICATION_EMAIL`.
- [ ] Test order/contact notifications end-to-end and assign an owner for monitoring and follow-up.
- [ ] Use a shared, durable rate-limiting service for multi-instance production deployments; current limits are process-local.
- [ ] Optional verified GA4/Meta IDs and Search Console verification token; do not add IDs before consent and privacy settings are approved.
- [ ] Re-run dated competitor, product-availability and keyword research from a Malaysian browser; current accessible fetches did not verify competitors' prices or COD conditions and no search volumes were available.

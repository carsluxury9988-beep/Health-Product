# Pre-launch content, SEO, UX and conversion audit

**Audit date:** 29 September 2026  
**Scope:** Rendered production build on the local preview, source-controlled copy and metadata, route structure, supplied product imagery and the documented Malaysian keyword research. No application code or copy was changed for this audit.

## Audit method and coverage

- Opened and visually inspected the desktop homepage, mobile homepage, mobile Magnum Pump detail page and mobile order page. Visually inspected the supplied image files for all four products.
- Loaded all 32 BM and English customer-facing routes in a headless Edge browser at 390 px mobile, 768 px tablet and 1440 px desktop widths. Checked document width, image loading, missing image alternatives, rendered headings and key layout elements.
- Fetched page HTML for all 30 indexable BM and English routes and inspected title, description, canonical, hreflang, Open Graph tags, robots, heading counts, breadcrumbs and JSON-LD. The two order-confirmation routes are deliberately not indexable.
- Checked the sitemap and robots responses in the current local environment. `NEXT_PUBLIC_SITE_URL` is not set in this preview environment; the current sitemap therefore has no entries. A configured public-domain deployment was not available to test.
- Reviewed form labels, loading/error/success strings and order confirmation implementation. Did not submit a valid order/contact form through SMTP, to avoid sending a real notification; delivery, SMTP configuration and the live confirmation journey remain unverified.
- Compared keyword opportunities against [`seo-strategy.md`](seo-strategy.md). The documented autocomplete observations are qualitative only; no volumes or competitor prices/COD terms were independently verified.

**Measured strengths:** All 32 routes returned successfully. No document-level horizontal overflow, broken images or images lacking an `alt` attribute were detected at the three viewport widths. The homepage has a clear hero, supplied lifestyle image, RM159 price, free-delivery/COD bar and product CTA. Product pages have a visible image, title, price, delivery/payment facts and order CTA. The palette and serif/sans-serif hierarchy create a calm, premium impression. The supplied images remain the owner-confirmed commercial assets; they should not be substituted or have their labels altered.

## CRITICAL

No critical rendering or route outage was reproduced in the tested local build. The **HIGH** findings below are nevertheless launch gates: in particular, do not publish product packaging claims or accept real customer data/orders until the relevant owner, operational and qualified compliance checks are complete.

## HIGH

### 1. Product packaging visibly carries unverified health/virility wording

**Page:** Homepage/product cards and all four product detail pages; the words are part of the supplied product images, not added page copy.  
**Problem:** Visible packaging text includes “MALE ENHANCEMENT FORMULA” on Magnum Pump; “MAN VIRILITY ENHANCEMENT HERBAL SUPPLEMENT” on Ultrahot and Horsemen; and “Men’s Health” / “TRIBULUS TERRESTRIS” on Hammer of Thor.  
**Why it matters:** The imagery itself communicates health or sexual-performance-related positioning. The website does not establish whether these are accurate, legally usable claims, whether the product is in the stated category, or whether any required Malaysian product status applies. This audit makes no determination about legality or efficacy.  
**Recommended solution:** Have the owner provide the complete, current label and supporting product/regulatory records and have a qualified Malaysian adviser review the exact on-pack claims and their online display before launch or promotion. Keep the images and labels as supplied; do not modify them or create replacement packaging. Until reviewed, do not add efficacy, ingredient, dosage, certification or registration claims to page copy.

### 2. Nationwide free delivery and COD are presented as settled offers

**Page:** Global utility bar/footer, homepage trust strip, product detail pages, FAQ, shipping page and order form.  
**Problem:** The site repeatedly says free delivery is available “ke seluruh Malaysia” and “COD tersedia”; the order flow accepts COD requests. The same copy says the courier/destination is subject to confirmation.  
**Why it matters:** Nationwide coverage, any East Malaysia/Labuan exclusions or surcharges, courier service and exact COD eligibility are operational facts that the owner-confirmation inventory still marks for confirmation. Prominent, unconditional summaries can be read as an offer even when later copy qualifies it.  
**Recommended solution:** Obtain written delivery and COD coverage, exclusions, fees and destination rules from the owner/courier. Ensure the prominent trust messages, policy pages and order confirmation all state the approved terms consistently. Do not accept orders for destinations the operation cannot fulfil.

### 3. Owner/legal and customer policies are explicitly drafts

**Page:** `/polisi-privasi`, `/terma-syarat`, `/polisi-pemulangan`, `/penghantaran` and their `/en/` equivalents; order/contact consent text.  
**Problem:** Each policy page identifies itself as a draft pending owner review. Refunds, cancellations and exchanges are not defined; data-controller identity, providers, retention/deletion and privacy request procedures are not confirmed. The form also says details are used “only” to process the request/follow up, while email and service-provider retention practices are not yet established.  
**Why it matters:** Customers are asked to submit addresses, phone numbers and order/contact details while the applicable policies and actual data lifecycle remain provisional. A draft disclaimer is transparent but is not a substitute for approved customer terms or privacy information.  
**Recommended solution:** Obtain the business identity and actual data/fulfilment practices; have the owner and a qualified Malaysian adviser approve the final privacy, terms, shipping and return/refund policies and consent wording before accepting real submissions. Align any “only used” representation with actual access, provider processing and retention.

### 4. No public origin is configured; live sitemap is empty

**Page:** All indexable routes, `/sitemap.xml`, `/robots.txt`.  
**Problem:** In the audited environment, `NEXT_PUBLIC_SITE_URL` is unset. Rendered canonicals and `ms-MY`/`en-MY` alternates are relative paths (for example `/produk` and `/en/products`), and the generated sitemap contains no page entries. Absolute Open Graph page URLs are omitted for the same reason.  
**Why it matters:** Search engines need the real public host to identify canonical URLs and to use fully qualified reciprocal language alternates; an empty sitemap cannot help discover the 30 intended indexable routes. The local result is expected until a real domain is configured, but it is not a valid final launch SEO state.  
**Recommended solution:** Set the approved HTTPS production origin as `NEXT_PUBLIC_SITE_URL` in the build/runtime environment, rebuild, and verify every canonical/alternate uses that host, all intended BM/English routes are in the live sitemap, and robots references that sitemap. Do not point it at a placeholder domain.

### 5. English pages contain Malay and initially declare the wrong document language

**Page:** `/en` and `/en/blog`; English metadata on `/en`.  
**Problem:** The English homepage visibly includes “Kesihatan lelaki, dengan penuh hormat.” in its hero-bottom content. The English blog ends with a Malay paragraph (“Kesihatan lelaki bermula… Ambil masa anda.”), even though it is explicitly marked `lang="ms"`. In raw server-rendered HTML, English routes inherit the root `<html lang="ms-MY">`; a client effect changes it to `en-MY` only after hydration. The `/en` title also receives a Malay “Kesihatan Lelaki” suffix.  
**Why it matters:** English is not a complete English-only customer experience, and server-rendered markup, assistive technology and crawlers can initially receive the wrong document language. The mixed-language title is inconsistent with the English route and confirmed brand identity is still pending.  
**Recommended solution:** Review every English route and shared shell for stray BM text and select a server-rendered locale architecture that outputs `lang="en-MY"` on English HTML from the initial response. Give the English homepage consistent English metadata/title branding. Keep only intentional product/packaging brand text unchanged.

### 6. Live order/contact delivery has not been demonstrated

**Page:** `/pesanan`, `/en/order`, `/hubungi-kami`, `/en/contact`.  
**Problem:** The forms depend on server-side SMTP email. The code intentionally fails closed with an explicit unavailable/send-error response when notification delivery is not configured or fails; this audit did not verify a real notification or team follow-up.  
**Why it matters:** A successful customer journey depends on order/contact requests reaching a monitored inbox. A passing build or client-side confirmation is not evidence that the business receives or processes a real request.  
**Recommended solution:** Configure production SMTP and a monitored recipient without exposing credentials, then test one controlled order and contact submission in staging. Confirm delivery, reply handling, failure messaging and the person responsible for follow-up before public order acceptance.

## MEDIUM

### 1. Mobile order reassurance and persistent order bar compete with the checkout

**Page:** `/pesanan`, `/en/order`, contact/confirmation routes on mobile.  
**Problem:** The global fixed mobile bar remains visible on the order/confirmation flow and repeats the order CTA while the customer is already completing or has just completed that flow. At 390 px the order reassurance uses two columns; its “Penghantaran percuma / Ke seluruh Malaysia” block is cramped next to an icon. The fixed bar can visually compete with or cover form content near the bottom of the viewport.  
**Why it matters:** Checkout is the point where the customer needs focus on address, privacy consent, COD and the submit button; redundant fixed actions can obscure or distract from these controls.  
**Recommended solution:** Review the sticky bar on the order, confirmation and contact routes at narrow widths; keep it from covering fields/actions and consider a context-appropriate state or suppressing it during checkout/confirmation. Stack or otherwise give the longer reassurance copy adequate room on mobile.

### 2. Address placeholder duplicates dedicated fields

**Page:** `/pesanan`, `/en/order`.  
**Problem:** The address placeholder asks for “street, town and postcode” while Town/City and Postcode are separate required fields below.  
**Why it matters:** Customers may enter city/postcode twice or be uncertain what belongs in the address textarea; this creates avoidable address errors and exposes additional personal-data handling.  
**Recommended solution:** Make the address placeholder describe only house/unit and street (and any genuinely required address lines); keep city, state and postcode instructions in their own labeled controls.

### 3. Product cards and detail pages have almost no verified descriptive information

**Page:** `/produk`, all product pages and English equivalents.  
**Problem:** Each card and detail page repeats a generic “information will be updated from official packaging” placeholder. Pages do not show pack size/quantity, exact category, manufacturer or any verified product-specific overview. Stock status is also unknown.  
**Why it matters:** Visitors can see the product and RM159 price but cannot tell what quantity is included, what category it belongs to or what distinguishes the four items. Avoiding fabricated benefits is correct, but the current placeholders weaken informed purchase and conversion.  
**Recommended solution:** Ask the owner for the exact current labels and factual catalogue details (listed under owner information below). Publish only independently supported, legally reviewable details; retain a clear “not supplied/unknown” statement where evidence remains unavailable.

### 4. Malaysian product structured data is missing

**Page:** All four BM product-detail routes.  
**Problem:** English product pages emit `Product` and `Offer` JSON-LD, but the corresponding BM pages emit breadcrumbs only. The product data is otherwise available to render the same limited facts.  
**Why it matters:** Structured product information is inconsistent between reciprocal language pages and reduces the completeness of the BM product SEO implementation. Product image paths also need an absolute production origin for structured data consumers.  
**Recommended solution:** When implementation is next permitted, emit equivalent, accurate `Product`/`Offer` structured data for BM pages, validate both language versions with the real production origin, and include only confirmed name, price, currency and image/offer URLs—no stock, ingredients, ratings or claims that are not verified.

### 5. Open Graph/social previews omit images

**Page:** All routes with Open Graph metadata.  
**Problem:** Title and description tags are rendered, but no route has `og:image`. The site already has an owner-approved lifestyle image and individual product images.  
**Why it matters:** Shared links may show a generic or blank preview image, reducing recognition and click-through; product links cannot use their relevant image.  
**Recommended solution:** After brand/domain approval, add suitable existing supplied assets as Open Graph images (homepage lifestyle image and corresponding product image on product pages), with appropriate dimensions and absolute production URLs. Do not introduce stock or competitor artwork.

### 6. Some BM SEO titles repeat the site name

**Page:** `/hubungi-kami`, `/polisi-privasi`, `/terma-syarat`, `/polisi-pemulangan`, `/pesanan`.  
**Problem:** These titles already include “Kesihatan Lelaki” and then inherit the same title suffix, producing repetitions such as “Hubungi Kami | Kesihatan Lelaki | Kesihatan Lelaki”. The `/en` home title ends with Malay “Kesihatan Lelaki”.  
**Why it matters:** Repetitive titles look unfinished in search results and waste limited title space.  
**Recommended solution:** Once the owner confirms the actual public brand name, use a consistent title template and remove duplicate brand text from individual page titles. Keep each title and description in the page’s language.

### 7. Brand/business identity is not confirmed

**Page:** Global header/footer, metadata, contact and policy pages.  
**Problem:** The header displays “Kesihatan Lelaki”, while English metadata and policy text use “Health Product”; the legal business name, trading name and registration details remain pending.  
**Why it matters:** These appear as customer-facing business identities, but it is not confirmed that either is the actual public trading name. Contact is limited to an email address.  
**Recommended solution:** Confirm the public trading name, legal entity, customer support contact channels and any details legally required on the site. Use the approved identity consistently before publishing policies or organization markup.

### 8. Product information/category SEO is necessarily incomplete

**Page:** BM and English home, products and product-detail routes.  
**Problem:** Current copy naturally covers “kesihatan/kesejahteraan lelaki”, product names, RM159 and delivery. The BM product titles do not include Malaysia; the English pages do not naturally cover all strategy candidates such as “men’s vitality”. The site does not use “suplemen lelaki”, “tenaga lelaki” or “stamina lelaki” as site-authored keywords.  
**Why it matters:** Some documented qualitative keyword candidates are not represented, but the product category and any energy/stamina/virility implications are not verified. The keyword research reports no search-volume evidence for these terms.  
**Recommended solution:** Do not insert the missing phrases merely for coverage. Have the owner verify the product category and have claims reviewed before deciding whether terms such as “supplement”, “vitality”, “energy” or “stamina” accurately and lawfully describe the products. Use Search Console/verified research after launch; do not claim search volume based on autocomplete.

## LOW

### 1. Small utility and footer typography

**Page:** Global header utility strip, product-card notes, footer and some eyebrow labels.  
**Problem:** Several secondary labels are 8–11 px, with uppercase letter-spacing; the 8 px utility line is particularly small on a phone.  
**Why it matters:** The key notices remain present, but small text is harder to read for many users and on narrow/low-resolution screens.  
**Recommended solution:** Consider increasing the smallest customer-facing type and verify text/background contrast and zoom/reflow against an agreed accessibility target.

### 2. BM/English switcher spacing and selected state

**Page:** Global navigation.  
**Problem:** Rendered as “BM|English” without the requested visual spacing around the divider. Current-page links use `aria-current`, but the selected language is not strongly distinguished visually.  
**Why it matters:** Slightly reduces scanability and makes the required language choice less clear.  
**Recommended solution:** Present “BM | English” with adequate spacing and ensure both keyboard and visual selected states are perceivable.

### 3. Redundant currency code beside RM price

**Page:** BM product detail pages.  
**Problem:** A price such as “RM159 MYR” displays both the familiar Malaysian ringgit symbol and ISO code.  
**Why it matters:** The extra code is technically accurate but may look repetitive beside the already clear RM price.  
**Recommended solution:** Confirm the intended customer presentation and use a single consistent price format unless an explicit currency code is required.

### 4. English route base URL normalization

**Page:** `/en/`.  
**Problem:** Next.js redirects the trailing-slash form `/en/` to `/en` (308). The canonical and alternate for the English homepage use `/en`.  
**Why it matters:** This is a normal slash normalization and the route works, but the public URL convention should remain consistent with links and documentation.  
**Recommended solution:** Keep the slashless `/en` canonical consistently, or deliberately configure and test a trailing-slash convention across all routes; avoid mixed canonicals.

## BM language audit

The default root rendered as Malay across the tested customer routes. Navigation, home hero, product details, order/contact forms, policies, FAQ, footer and system-state copy are principally Malay. The language switcher’s “English”, product/trademark names, RM/MYR, COD and English text printed on supplied product packaging are exceptions with an identifiable language/product purpose, not hidden translation fallbacks.

BM terminology is generally consistent: “Produk”, “Pesanan”, “Penghantaran”, “Hubungi Kami”, “Tentang Kami” and “Soalan Lazim” are used in their respective routes. “Kesejahteraan lelaki” is the core editorial category, with “kesihatan lelaki” appearing in metadata and supporting copy. Review wording and capitalization for a final Malaysian copy edit, especially title case (“Ringkasan Pesanan”, “Hantar Pesanan”) versus sentence case in surrounding labels. The privacy/terms language is clearly provisional.

No BM-facing site copy asserts ingredients, dosage, benefits, certifications or registration. The product photos themselves do show English label claims; see HIGH finding 1. English acronyms in forms/technical/privacy copy (COD, SMTP, ID) are retained as abbreviations.

## English audit

Most English routes use natural professional English and have English titles/descriptions, navigation, form labels and policy notices. Two visible Malay passages remain on English pages, and server-rendered English pages initially have the Malay root document language; see HIGH finding 5. The English blog includes a deliberately marked Malay `lang="ms"` sentence; decide whether this localized closing note is intentional for an English-only experience.

## SEO audit

**Observed across the 30 indexable routes:** one H1 per route; title and description metadata; canonical; paired `ms-MY`/`en-MY` alternates; Open Graph title and description; no missing image `alt` attributes. Content pages include breadcrumb JSON-LD; FAQ pages include `FAQPage` JSON-LD; English product details include `Product` and `Offer` JSON-LD. The confirmation routes are `noindex` and not intended for the sitemap.

**Issues:** canonical and hreflang values are relative and the live sitemap is empty until a real `NEXT_PUBLIC_SITE_URL` is set; there are no Open Graph images; Malay product pages lack the Product/Offer schema present on English counterparts; selected titles repeat the brand. No deployed domain was available to verify absolute production URLs. Organization/WebSite markup is appropriately withheld pending confirmed business identity.

## Product page audit

| Product | Displayed price | Supplied product image | Key visible on-pack wording requiring review |
|---|---:|---|---|
| Magnum Pump | RM159 | Yes | “MALE ENHANCEMENT FORMULA” |
| Ultrahot | RM159 | Yes | “MAN VIRILITY ENHANCEMENT HERBAL SUPPLEMENT” |
| Horsemen | RM159 | Yes | “MAN VIRILITY ENHANCEMENT HERBAL SUPPLEMENT” |
| Hammer of Thor | RM159 | Yes | “Men’s Health”; “TRIBULUS TERRESTRIS” |

Each page shows its product name, RM159 price, delivery/COD facts, order CTA, related products and FAQ. Product descriptions deliberately state that verified details are not yet available. The supplied product images are small source rasters (approximately 206–280 × 347–351 px); displayed label detail is consequently limited at larger sizes. The couple image is 1440 × 1080 px and appears clear in the homepage hero.

**Still missing or requiring verification for each product:** exact product/category identity; complete current label; ingredients and quantities; dosage/serving and directions; contraindications, warnings, age restrictions and storage; manufacturer, importer/responsible seller and country of origin; pack count/net quantity and SKU; applicable registration/notification status and supporting record; any halal/certification evidence; lawful, evidence-backed product description; current stock/availability; price currency/tax treatment and package/warranty/after-sales details. Do not fill these gaps by inference from a partial front-label image.

## Conversion and trust audit

Within a few seconds on desktop, a visitor can see the men’s wellness category, the supplied lifestyle image, RM159, free delivery, COD, nationwide wording and product/order CTAs. The intended route from homepage → product card/detail → preselected order form → session-only confirmation is linked. Contact email and privacy/shipping/terms/refund links are available in the footer. No fake scarcity, testimonials, discount or review claims were found.

The main conversion weakness is verified product information: all four products currently have substantially the same placeholder explanation. The order flow is explicitly a request rather than an accepted/fulfilled order, but labels such as “Hantar Pesanan” / “Pesanan Berjaya” can be read as a confirmed purchase despite explanatory request language nearby. The order confirmation is held in browser session state rather than a durable order record; a reload/new session will not preserve it. Clarify the request/acceptance distinction and test the SMTP/follow-up journey before launch.

Trust claims needing owner confirmation include the public brand/legal seller identity, RM159 current/tax treatment, nationwide free delivery and exclusions, COD coverage by destination/courier, product stock/identity and label claims, return/refund/cancellation policy, privacy/data-retention statements, actual SMTP receipt/follow-up and support contact details.

## Mobile and accessibility audit

At 390 px, 768 px and 1440 px, all 32 checked routes had a document width equal to the viewport, no broken images and no `<img>` without an `alt` attribute. Responsive product cards stack on mobile; order/contact forms use full-width controls; navigation has a mobile menu; a skip link and visible keyboard-focus styling are present. The form fields use visible labels and required indications.

The mobile homepage retains its primary product CTA and sticky order bar. The order reassurance two-column layout and persistent CTA on checkout/confirmation need the focused review noted under MEDIUM findings. This was a browser/layout inspection, not a formal assistive-technology, keyboard-only, contrast-ratio or WCAG conformance certification.

## Performance audit

- Next.js `Image` is used for the couple and product imagery. The homepage hero image is prioritized; product art has responsive `sizes` and fixed-height parent containers, and non-prioritized product images use Next’s default lazy-loading behavior.
- Supplied WebP assets are modest in transfer size: homepage image ~76 KB; each product image ~7–10 KB. Product source dimensions are low (approximately 200 × 350 px), which limits label/detail sharpness; no missing or broken image was observed.
- No remote web font is configured; Georgia/Arial system stacks avoid font downloads and font-swap layout shifts.
- The application has a small direct dependency set (Next.js, React and Nodemailer). Analytics scripts are consent-gated. Layout containers reserve image space, reducing image-driven layout-shift risk.
- No Lighthouse/PageSpeed/Core Web Vitals field or lab measurement was available in this audit. LCP/INP/CLS performance is therefore **not measured**; validate on the real deployment and representative mobile connections before making a performance claim.

## Compliance/content claims to review

| Page / surface | Current claim visible to customer | Why it needs verification |
|---|---|---|
| Magnum Pump image on home/product page | On-pack “MALE ENHANCEMENT FORMULA” | Health/sexual-performance-related representation embedded in the image; verify full label, evidence, product category and permissible use with the owner and qualified Malaysian adviser. |
| Ultrahot and Horsemen images on home/product pages | On-pack “MAN VIRILITY ENHANCEMENT HERBAL SUPPLEMENT” | Explicit virility/sexual-performance and supplement-category language; verify the exact claim and applicable product status before promotion. |
| Hammer of Thor image on home/product page | On-pack “Men’s Health”; “TRIBULUS TERRESTRIS” | Health/category and ingredient wording is part of the product image. The page currently says ingredients have not been supplied; confirm whether the complete label supports the visible text and what may be stated beyond the image. |
| All pages with global delivery/COD strip | Free delivery throughout Malaysia; COD available | Operational offer/coverage not yet owner-confirmed for all destinations, couriers, exclusions or charges. |
| Homepage/product listing/FAQ/shipping | RM159 per product / no delivery fee | Price appears in the supplied catalogue; confirm that RM159 remains the current consumer price, its tax treatment and the zero-fee offer. |
| Order form/privacy/confirmation copy | Customer details are used only for processing/follow-up; request is treated as a successful submission after notification | Confirm actual inbox/provider processing, access/retention/deletion and distinguish a successfully submitted request from order acceptance, stock confirmation or dispatch. |

No additional product efficacy claims were found in the authored product-page descriptions; those pages state that unverified benefits and instructions are not provided. The table flags packaging text that is visible to customers and does not assert that any claim is true or legally permitted.

## A. MUST FIX BEFORE LAUNCH

- Resolve HIGH findings 1–3: review the on-pack claims and product status; confirm nationwide delivery/COD terms; finalize owner/legal-approved customer, privacy and return policies.
- Set the real production `NEXT_PUBLIC_SITE_URL`; rebuild and verify absolute canonical/hreflang pairs plus non-empty sitemap and robots sitemap reference.
- Remove accidental BM copy from English pages and serve `lang="en-MY"` in initial English HTML, not only after client hydration.
- Configure SMTP and verify controlled order/contact delivery, monitored follow-up and failure handling before accepting customer requests.
- Confirm customer-facing business identity and all delivery/payment/price statements before publishing as firm offers.

## B. SHOULD FIX BEFORE LAUNCH

- Review checkout mobile sticky-bar behavior, order reassurance wrapping and the duplicate city/postcode address instructions.
- Add owner-verified product facts and pack quantity where available; otherwise retain transparent “not confirmed” copy without implying benefits.
- Add consistent `Product`/`Offer` structured data for BM products and approved Open Graph images; verify absolute image URLs after domain setup.
- Correct duplicate BM title suffixes and the mixed-language `/en` title after brand confirmation.
- Align order CTA/success phrasing with an order **request** rather than a confirmed/accepted order, if the owner approves a wording change.
- Have a Malaysian copy editor review BM grammar/terminology/capitalization and confirm language/brand labels.

## C. NICE TO HAVE

- Improve smallest utility/footer text and verify WCAG contrast, zoom, keyboard and screen-reader behavior with formal checks.
- Improve source resolution of supplied product imagery only if the owner can supply higher-resolution versions of the same authentic images; preserve the product label unchanged.
- Once category wording is substantiated, selectively evaluate unrepresented research terms such as “suplemen lelaki” / “men’s health supplement Malaysia”. Do not target “tenaga lelaki”, “stamina lelaki” or efficacy-adjacent phrases without evidence and compliance review.
- Capture post-deployment Core Web Vitals and Search Console query data; the existing keyword study provides no verified volumes.

## D. INFORMATION REQUIRED FROM OWNER

- Confirm public trading name, legal business identity/registration, approved English/BM brand treatment and any contact phone/address/support hours.
- For each of the four products, provide complete current packaging/label and supporting records for ingredients, quantity, instructions, warnings, product category, manufacturer/importer, regulatory status and any certification. Confirm whether visible on-pack claims may be used online/advertising.
- Confirm current RM159 price and tax treatment, stock/availability, exact fulfilment coverage and exclusions, COD postcodes/couriers, shipping fees/timing, and the order acceptance/follow-up process.
- Approve final Privacy, Terms, Shipping and Refund/Return/Cancellation policies; identify data controller, host/SMTP/analytics providers, retention/deletion/access and privacy-request handling.
- Supply the production HTTPS domain and verified SMTP credentials/recipient through the appropriate secret store; name the inbox owner responsible for submissions.
- Confirm that existing supplied images are the approved versions for web use and whether higher-resolution copies of those same images are available. Commercial usage rights are already owner-confirmed and are **not** a blocker; do not replace them with stock/competitor imagery or alter product labels.

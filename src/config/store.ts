/**
 * Store identity and operating facts.
 *
 * Only facts confirmed by the owner are shown publicly. Anything left as `null` is hidden
 * from visitors and from structured data until it is filled in.
 *
 * TODO(owner): provide the registered business/company name, the SSM registration number and
 * the trading address. These are expected disclosures for online sellers in Malaysia
 * (Consumer Protection (Electronic Trade Transactions) Regulations 2024 and SSM rules).
 * Once set here they appear automatically in the footer, contact page, policies and the
 * OnlineStore schema.
 */
export const store = {
  brandName: "Lebih Yakin",
  legalBusinessName: null as string | null,
  ssmRegistrationNumber: null as string | null,
  address: null as string | null,
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://lebihyakin.my"),
  contactEmail: "producth006@gmail.com",
  whatsappNumber: "60194022352",
  whatsappDisplay: "+60 19-402 2352",
  logoPath: "/brand/logo.png",
  priceCurrency: "MYR",
  deliveryFee: 0,
  /**
   * Stated delivery estimate in calendar days, shown on the Delivery & COD page, FAQ,
   * product pages and How to order, and used in Product structured data (shippingDetails).
   * handling = order confirmed → parcel handed to the courier; transit = courier delivery.
   * If you change these numbers, update the visible text in src/i18n/ms.ts and en.ts too (a test checks this).
   */
  /**
   * Return window in days from delivery, for unopened and unused items (stated on the returns
   * page and FAQ, and used in MerchantReturnPolicy structured data). A test checks the text matches.
   */
  returnWindowDays: 7,
  deliveryEstimateDays: { handling: { min: 1, max: 3 }, transit: { min: 2, max: 7 } },
  codAvailable: true,
  // TODO(owner): confirm before advertising these. They stay hidden while false/null.
  discreetPackagingConfirmed: false,
  courierNames: null as readonly string[] | null,
  socialLinks: {
    instagram: null as string | null,
    facebook: null as string | null,
    tiktok: null as string | null,
  },
} as const;

export const malaysianStates = [
  "Johor",
  "Kedah",
  "Kelantan",
  "Kuala Lumpur",
  "Labuan",
  "Melaka",
  "Negeri Sembilan",
  "Pahang",
  "Penang",
  "Perak",
  "Perlis",
  "Putrajaya",
  "Sabah",
  "Sarawak",
  "Selangor",
  "Terengganu",
] as const;

export const malaysianStatesMs = [
  "Johor",
  "Kedah",
  "Kelantan",
  "Kuala Lumpur",
  "Labuan",
  "Melaka",
  "Negeri Sembilan",
  "Pahang",
  "Pulau Pinang",
  "Perak",
  "Perlis",
  "Putrajaya",
  "Sabah",
  "Sarawak",
  "Selangor",
  "Terengganu",
] as const;

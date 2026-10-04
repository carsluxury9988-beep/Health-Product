import { articlePath, type Article } from "@/content/articles";
import { getTopic } from "@/content/topics";
import type { Product } from "@/config/products";
import { store } from "@/config/store";
import { getMessages, type Locale } from "@/i18n";
import { productPath, staticRoutes } from "@/i18n/routes";
import { absoluteUrl } from "@/lib/seo";

export const organizationId = () => `${store.siteUrl}/#organization`;
export const websiteId = () => `${store.siteUrl}/#website`;
export const returnPolicyId = (locale: Locale) => `${absoluteUrl(staticRoutes.returns[locale])}#return-policy`;

/**
 * Return policy, matching the visible returns page: unopened and unused items can be returned
 * within store.returnWindowDays days of delivery. The site does not state a return method or
 * who pays return shipping, so returnMethod and returnFees are deliberately omitted.
 */
export function returnPolicySchema(locale: Locale) {
  return {
    "@type": "MerchantReturnPolicy",
    "@id": returnPolicyId(locale),
    name: getMessages(locale).policies.returns.title,
    applicableCountry: "MY",
    returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
    merchantReturnDays: store.returnWindowDays,
    itemCondition: "https://schema.org/NewCondition",
    merchantReturnLink: absoluteUrl(staticRoutes.returns[locale]),
  };
}

/** JSON-LD for the returns page: the policy node that product offers reference by @id. */
export function returnPolicyPageSchema(locale: Locale) {
  return { "@context": "https://schema.org", ...returnPolicySchema(locale) };
}

/** Last day of next calendar year (rolls forward on every deploy). */
export function priceValidUntil(now = new Date()) {
  return `${now.getFullYear() + 1}-12-31`;
}

export function organizationSchema(locale: Locale) {
  const t = getMessages(locale);
  const sameAs = Object.values(store.socialLinks).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    "@id": organizationId(),
    name: store.brandName,
    url: absoluteUrl(staticRoutes.home[locale]),
    logo: { "@type": "ImageObject", url: absoluteUrl(store.logoPath), width: 512, height: 512 },
    description: t.footer.about,
    email: store.contactEmail,
    areaServed: { "@type": "Country", name: "Malaysia" },
    currenciesAccepted: "MYR",
    hasMerchantReturnPolicy: returnPolicySchema(locale),
    paymentAccepted: "Cash",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: `+${store.whatsappNumber}`,
      email: store.contactEmail,
      areaServed: "MY",
      availableLanguage: ["ms", "en"],
    },
    ...(store.legalBusinessName ? { legalName: store.legalBusinessName } : {}),
    ...(store.address ? { address: { "@type": "PostalAddress", streetAddress: store.address, addressCountry: "MY" } } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId(),
    name: store.brandName,
    url: absoluteUrl("/"),
    inLanguage: getMessages(locale).htmlLang,
    publisher: { "@id": organizationId() },
  };
}

export function productSchema(product: Product, locale: Locale) {
  const delivery = store.deliveryEstimateDays;
  const url = absoluteUrl(productPath(product.slug, locale));
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    sku: product.id,
    brand: { "@type": "Brand", name: product.brand },
    description: product.summary[locale],
    image: [absoluteUrl(product.squareImage), absoluteUrl(product.packImage)],
    url,
    offers: {
      "@type": "Offer",
      url,
      price: product.price.toFixed(2),
      priceCurrency: product.currency,
      priceValidUntil: priceValidUntil(),
      availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": organizationId() },
      hasMerchantReturnPolicy: returnPolicySchema(locale),
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: { "@type": "MonetaryAmount", value: store.deliveryFee, currency: product.currency },
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "MY" },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: { "@type": "QuantitativeValue", minValue: delivery.handling.min, maxValue: delivery.handling.max, unitCode: "DAY" },
          transitTime: { "@type": "QuantitativeValue", minValue: delivery.transit.min, maxValue: delivery.transit.max, unitCode: "DAY" },
        },
      },
    },
  };
}

export function itemListSchema(items: Product[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(productPath(product.slug, locale)),
      name: product.name,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };
}

export function articleSchema(article: Article, locale: Locale) {
  const content = article[locale];
  const url = absoluteUrl(articlePath(article, locale));
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.title,
    description: content.description,
    articleSection: getTopic(article.topic)[locale].label,
    inLanguage: getMessages(locale).htmlLang,
    image: [absoluteUrl(article.image.src)],
    datePublished: article.published,
    dateModified: article.updated,
    mainEntityOfPage: url,
    url,
    author: { "@id": organizationId(), "@type": "Organization", name: store.brandName },
    publisher: { "@id": organizationId() },
    ...(content.sources?.length ? { citation: content.sources.map((source) => source.url) } : {}),
  };
}

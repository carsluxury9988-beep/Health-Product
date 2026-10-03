import { articlePath, type Article } from "@/content/articles";
import type { Product } from "@/config/products";
import { store } from "@/config/store";
import { getMessages, type Locale } from "@/i18n";
import { productPath, staticRoutes } from "@/i18n/routes";
import { absoluteUrl } from "@/lib/seo";

export const organizationId = () => `${store.siteUrl}/#organization`;
export const websiteId = () => `${store.siteUrl}/#website`;

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
  const url = absoluteUrl(productPath(product.slug, locale));
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    sku: product.id,
    description: product.summary[locale],
    image: [absoluteUrl(product.squareImage), absoluteUrl(product.packImage)],
    url,
    offers: {
      "@type": "Offer",
      url,
      price: product.price.toFixed(2),
      priceCurrency: product.currency,
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": organizationId() },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: { "@type": "MonetaryAmount", value: 0, currency: product.currency },
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "MY" },
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

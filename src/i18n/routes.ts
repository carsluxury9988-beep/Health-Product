import { articles } from "@/content/articles";
import { questionIndexPaths, topicPath, topics } from "@/content/topics";
import { products } from "@/config/products";
import type { Locale } from "@/i18n";

/** Every public page as a BM/EN pair. Used for hreflang, the language switch and the sitemap. */
export const staticRoutes = {
  home: { ms: "/", en: "/en" },
  products: { ms: "/produk", en: "/en/products" },
  howToOrder: { ms: "/cara-pesan", en: "/en/how-to-order" },
  order: { ms: "/pesanan", en: "/en/order" },
  faq: { ms: "/soalan-lazim", en: "/en/faq" },
  shipping: { ms: "/penghantaran", en: "/en/shipping" },
  returns: { ms: "/polisi-pemulangan", en: "/en/refund-policy" },
  terms: { ms: "/terma-syarat", en: "/en/terms" },
  privacy: { ms: "/polisi-privasi", en: "/en/privacy-policy" },
  about: { ms: "/tentang-kami", en: "/en/about-us" },
  contact: { ms: "/hubungi-kami", en: "/en/contact" },
  blog: { ms: "/blog", en: "/en/blog" },
  blogQuestions: questionIndexPaths,
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof staticRoutes;

export function routePath(key: RouteKey, locale: Locale) {
  return staticRoutes[key][locale];
}

export function productPath(slug: string, locale: Locale) {
  return locale === "en" ? `/en/products/${slug}` : `/produk/${slug}`;
}

export function allRoutePairs(): Record<Locale, string>[] {
  return [
    ...Object.values(staticRoutes),
    ...products.map((product) => ({ ms: productPath(product.slug, "ms"), en: productPath(product.slug, "en") })),
    ...topics.map((topic) => ({ ms: topicPath(topic, "ms"), en: topicPath(topic, "en") })),
    ...articles.map((article) => ({ ms: `/blog/${article.ms.slug}`, en: `/en/blog/${article.en.slug}` })),
  ];
}

export function localeOfPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ms";
}

/** Returns the equivalent page in the target language, or that language's home page. */
export function localizedPath(pathname: string, target: Locale) {
  const path = pathname.replace(/\/$/, "") || "/";
  const pair = allRoutePairs().find((item) => item.ms === path || item.en === path);
  if (pair) return pair[target];
  if (localeOfPath(path) === target) return path;
  return staticRoutes.home[target];
}

/** Last meaningful content change for static pages (sitemap lastmod). Update when page content changes. */
export const SITE_CONTENT_UPDATED = "2026-10-03";

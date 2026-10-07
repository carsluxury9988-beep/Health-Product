import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { topicPath, topics } from "@/content/topics";
import { products } from "@/config/products";
import { productPath, PRODUCTS_UPDATED, ROUTE_UPDATED, SITE_CONTENT_UPDATED, staticRoutes, type RouteKey } from "@/i18n/routes";
import { absoluteUrl } from "@/lib/seo";

type Entry = MetadataRoute.Sitemap[number];

function pairEntries(pair: { ms: string; en: string }, lastModified: string, priority: number, changeFrequency: Entry["changeFrequency"]): Entry[] {
  const languages = { "ms-MY": absoluteUrl(pair.ms), "en-MY": absoluteUrl(pair.en), "x-default": absoluteUrl(pair.ms) };
  return [pair.ms, pair.en].map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages },
  }));
}

const priorities: Partial<Record<RouteKey, number>> = { home: 1, products: 0.9, howToOrder: 0.8, faq: 0.7, shipping: 0.7, blog: 0.6, blogQuestions: 0.5, order: 0.6 };

export default function sitemap(): MetadataRoute.Sitemap {
  const newest = articles.reduce((latest, article) => (article.updated > latest ? article.updated : latest), SITE_CONTENT_UPDATED);
  const staticEntries = (Object.keys(staticRoutes) as RouteKey[]).flatMap((key) =>
    pairEntries(staticRoutes[key], key === "blog" || key === "blogQuestions" ? newest : ROUTE_UPDATED[key] ?? SITE_CONTENT_UPDATED, priorities[key] ?? 0.4, key === "home" || key === "products" ? "weekly" : "monthly"),
  );
  const productEntries = products.flatMap((product) =>
    pairEntries({ ms: productPath(product.slug, "ms"), en: productPath(product.slug, "en") }, PRODUCTS_UPDATED, 0.8, "monthly"),
  );
  const articleEntries = articles.flatMap((article) =>
    pairEntries({ ms: `/blog/${article.ms.slug}`, en: `/en/blog/${article.en.slug}` }, article.updated, 0.6, "monthly"),
  );
  const topicEntries = topics.flatMap((topic) => pairEntries({ ms: topicPath(topic, "ms"), en: topicPath(topic, "en") }, newest, 0.6, "weekly"));
  return [...staticEntries, ...topicEntries, ...productEntries, ...articleEntries];
}

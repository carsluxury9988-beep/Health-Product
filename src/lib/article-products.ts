import { products, type Product, type ProductId } from "@/config/products";
import type { Article } from "@/content/articles";
import type { TopicKey } from "@/content/topics";
import type { Locale } from "@/i18n";

/** Blog topics that show the small "Produk Kami" box at the end of an article. Owner-approved: buying + relationships only. */
export const PRODUCT_BOX_TOPICS: readonly TopicKey[] = ["buying", "relationships"];

/** Products that may appear in the box. Hammer of Thor is deliberately never promoted from blog content. */
export const PRODUCT_BOX_IDS: readonly ProductId[] = ["magnum-pump", "ultrahot", "horsemen"];

const PAIRS: readonly [number, number][] = [[0, 1], [1, 2], [0, 2]];

function hash(text: string) {
  let h = 0;
  for (const ch of text) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h;
}

/** Two products for this article (stable per article, varies between articles), or [] when the box must not show. */
export function articleProducts(article: Pick<Article, "key" | "topic">): Product[] {
  if (!PRODUCT_BOX_TOPICS.includes(article.topic)) return [];
  const pool = PRODUCT_BOX_IDS
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p && p.inStock && p.id !== "hammer-of-thor"));
  if (pool.length < 2) return pool;
  const [a, b] = PAIRS[hash(article.key) % PAIRS.length];
  return [pool[a % pool.length], pool[b % pool.length]];
}

export const productBoxCopy: Record<Locale, { heading: string; note: string; perks: string; view: string; order: string }> = {
  ms: {
    heading: "Produk Kami",
    note: "Produk kedai Lebih Yakin.",
    perks: "COD · Penghantaran percuma",
    view: "Lihat produk",
    order: "WhatsApp",
  },
  en: {
    heading: "Our Products",
    note: "Products sold by the Lebih Yakin shop.",
    perks: "COD · Free delivery",
    view: "View product",
    order: "WhatsApp",
  },
};

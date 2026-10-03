import type { Article, ArticleContent } from "@/content/articles";
import type { TopicKey } from "@/content/topics";
import { plainText } from "@/lib/text";

export const QA_PUBLISHED = "2026-10-03";

type Draft = Omit<ArticleContent, "readMinutes"> & { readMinutes?: number };

function words(content: Draft) {
  const text = [content.lead, ...content.blocks.flatMap((b) => [...b.paragraphs, ...(b.list ?? []), ...(b.after ?? [])]), ...(content.qa ?? []).flatMap((q) => [q.q, q.a]), content.doctorNote ?? ""].join(" ");
  return plainText(text).split(/\s+/).filter(Boolean).length;
}

function finish(content: Draft): ArticleContent {
  return { ...content, readMinutes: content.readMinutes ?? Math.max(3, Math.round(words(content) / 200)) };
}

/** Builds a Q&A article with the shared image, share image and dates. */
export function qaArticle(key: string, topic: TopicKey, ms: Draft, en: Draft, dates: { published?: string; updated?: string } = {}): Article {
  return {
    key,
    topic,
    published: dates.published ?? QA_PUBLISHED,
    updated: dates.updated ?? dates.published ?? QA_PUBLISHED,
    image: { src: `/blog/qa/${key}.webp`, width: 1200, height: 630 },
    ogImage: `/og/blog-${key}.jpg`,
    ms: finish(ms),
    en: finish(en),
  };
}

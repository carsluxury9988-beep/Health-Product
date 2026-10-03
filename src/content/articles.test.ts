import assert from "node:assert/strict";
import test from "node:test";
import { articles, type ArticleContent } from "@/content/articles";
import { topics } from "@/content/topics";
import { allRoutePairs } from "@/i18n/routes";
import { linkTargets, plainText } from "@/lib/text";

const qaArticles = articles.filter((article) => article.image.src.startsWith("/blog/qa/"));
const locales = ["ms", "en"] as const;

function allText(content: ArticleContent) {
  return [
    content.title,
    content.seoTitle,
    content.description,
    content.lead,
    ...content.blocks.flatMap((block) => [block.heading, ...block.paragraphs, ...(block.list ?? []), ...(block.after ?? [])]),
    ...(content.qa ?? []).flatMap((item) => [item.q, item.a]),
    content.doctorNote ?? "",
    content.disclaimer,
  ];
}

test("article keys and slugs are unique", () => {
  assert.equal(new Set(articles.map((a) => a.key)).size, articles.length);
  const slugs = articles.flatMap((a) => [a.ms.slug, a.en.slug]);
  assert.equal(new Set(slugs).size, slugs.length);
  for (const slug of slugs) assert.match(slug, /^[a-z0-9]+(-[a-z0-9]+)*$/);
});

test("every article belongs to a known topic and every topic has articles", () => {
  const keys = new Set(topics.map((t) => t.key));
  for (const article of articles) assert.ok(keys.has(article.topic), article.key);
  for (const topic of topics) assert.ok(articles.some((a) => a.topic === topic.key), topic.key);
});

test("Q&A articles have a question H1, question H2s, FAQ items and sources", () => {
  assert.ok(qaArticles.length >= 15, `expected at least 15 Q&A articles, got ${qaArticles.length}`);
  for (const article of qaArticles) {
    for (const locale of locales) {
      const c = article[locale];
      const id = `${article.key}/${locale}`;
      assert.ok(c.title.endsWith("?"), `${id}: H1 should be a question`);
      for (const block of c.blocks) assert.ok(block.heading.endsWith("?"), `${id}: H2 "${block.heading}" should be a question`);
      assert.ok((c.qa?.length ?? 0) >= 3, `${id}: needs at least 3 FAQ items`);
      assert.ok((c.sources?.length ?? 0) >= 1, `${id}: needs sources`);
      assert.ok(c.lead.length >= 150, `${id}: lead should directly answer the question`);
      for (const source of c.sources ?? []) assert.match(source.url, /^https:\/\//, `${id}: ${source.url}`);
    }
    assert.equal(article.ms.blocks.length, article.en.blocks.length, `${article.key}: BM/EN sections differ`);
    assert.equal(article.ms.qa?.length, article.en.qa?.length, `${article.key}: BM/EN FAQ counts differ`);
  }
});

test("health and ingredient articles include a see-a-doctor note and do not link to products", () => {
  for (const article of articles.filter((a) => a.topic === "mens-health" || a.topic === "ingredients")) {
    for (const locale of locales) {
      const c = article[locale];
      if (qaArticles.includes(article)) assert.ok(c.doctorNote, `${article.key}/${locale}: missing doctorNote`);
      for (const target of allText(c).flatMap(linkTargets)) {
        assert.ok(!/^\/(en\/)?(produk|products)(\/|$)/.test(target), `${article.key}/${locale}: product link ${target}`);
      }
    }
  }
});

test("articles contain no banned selling phrases and no Hammer of Thor mention", () => {
  const banned = [/ubat kuat/i, /mati pucuk/i, /tenaga batin/i, /tahan lama/i, /besarkan zakar/i, /hammer of thor/i, /hammer-of-thor/i, /lorem ipsum/i, /\bTODO\b/];
  for (const article of articles) {
    for (const locale of locales) {
      const text = allText(article[locale]).join("\n");
      for (const pattern of banned) assert.ok(!pattern.test(text), `${article.key}/${locale} matches ${pattern}`);
    }
  }
});

test("internal links resolve to real pages in the same language; FAQ answers have no links", () => {
  const paths = new Set(allRoutePairs().flatMap((pair) => [pair.ms, pair.en]));
  for (const article of articles) {
    for (const locale of locales) {
      const c = article[locale];
      for (const target of allText(c).flatMap(linkTargets)) {
        if (/^https:\/\//.test(target)) continue;
        const path = target.split("#")[0];
        assert.ok(paths.has(path), `${article.key}/${locale}: unknown link ${target}`);
        const isEn = path === "/en" || path.startsWith("/en/");
        assert.equal(isEn, locale === "en", `${article.key}/${locale}: link ${target} is in the wrong language`);
        assert.notEqual(path, `/${locale === "en" ? "en/blog/" : "blog/"}${c.slug}`, `${article.key}/${locale}: links to itself`);
      }
      for (const item of c.qa ?? []) assert.deepEqual(linkTargets(item.a), [], `${article.key}/${locale}: FAQ answer has a link`);
    }
  }
});

test("meta titles and descriptions fit search result limits", () => {
  for (const article of articles) {
    for (const locale of locales) {
      const c = article[locale];
      const id = `${article.key}/${locale}`;
      assert.ok(`${c.seoTitle} | Lebih Yakin`.length <= 60, `${id}: title too long (${c.seoTitle.length})`);
      const description = plainText(c.description);
      assert.ok(description.length >= 70 && description.length <= 200, `${id}: description length ${description.length}`);
    }
  }
});

test("Q&A articles have share images and dates", () => {
  for (const article of qaArticles) {
    assert.ok(article.ogImage?.startsWith("/og/blog-"), article.key);
    assert.match(article.updated, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(article.updated >= article.published);
  }
});

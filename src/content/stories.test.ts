import { test } from "node:test";
import assert from "node:assert/strict";
import { articles } from "@/content/articles";
import { storyArticles } from "@/content/stories";

const stories = articles.filter((a) => a.topic === "stories");
const text = (c: (typeof stories)[number]["ms"]) =>
  [c.title, c.lead, c.description, ...c.blocks.flatMap((b) => [b.heading, ...b.paragraphs, ...(b.list ?? []), ...(b.after ?? [])]), c.disclaimer].join("\n");

test("stories: registered, labelled as fiction and kept out of the Q&A pattern", () => {
  assert.equal(stories.length, storyArticles.length);
  assert.ok(stories.length >= 1);
  for (const a of stories) {
    assert.ok(a.image.src.startsWith("/blog/stories/"), a.key);
    assert.ok(a.ogImage?.startsWith("/og/story-"), a.key);
    assert.ok(a.ms.lead.startsWith("Kisah rekaan"), `${a.key} ms lead must say Kisah rekaan`);
    assert.ok(a.ms.disclaimer.startsWith("Kisah rekaan"), a.key);
    assert.match(a.en.lead, /^Fiction/, a.key);
    assert.match(a.en.disclaimer, /^Fiction/, a.key);
    assert.ok(a.updated >= a.published, a.key);
  }
});

test("stories: no product links or product talk, sourced tips at the end", () => {
  for (const a of stories) {
    for (const c of [a.ms, a.en]) {
      const body = text(c);
      assert.doesNotMatch(body, /\]\((\/en)?\/(produk|products|pesan|order)/i, `${a.key}: no product/order links`);
      assert.doesNotMatch(body, /RM\s?\d|harga|price|kapsul|capsule|lebihyakin/i, `${a.key}: no product talk`);
      assert.match(c.blocks.at(-1)!.heading, /^(Tips untuk|Tips for)/, `${a.key}: last block is tips`);
      assert.ok((c.sources?.length ?? 0) >= 1 && c.sources!.every((s) => s.url.startsWith("https://")), a.key);
      const words = body.split(/\s+/).length;
      assert.ok(words >= 800 && words <= 1600, `${a.key}: ${words} words`);
      assert.equal(c.qa, undefined, `${a.key}: stories carry no FAQ`);
    }
  }
});

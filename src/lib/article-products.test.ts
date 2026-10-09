import { test } from "node:test";
import assert from "node:assert/strict";
import { articles } from "@/content/articles";
import { articleProducts, PRODUCT_BOX_IDS, PRODUCT_BOX_TOPICS, productBoxCopy } from "@/lib/article-products";

test("product box: only buying and relationships topics", () => {
  assert.deepEqual([...PRODUCT_BOX_TOPICS].sort(), ["buying", "relationships"]);
  for (const a of articles) {
    const items = articleProducts(a);
    if (a.topic === "buying" || a.topic === "relationships") assert.equal(items.length, 2, a.key);
    else assert.equal(items.length, 0, `${a.key} (${a.topic}) must not show the product box`);
  }
  for (const topic of ["mens-health", "ingredients", "stories"] as const) {
    assert.deepEqual(articleProducts({ key: "any", topic }), [], topic);
  }
});

test("product box: never Hammer of Thor, two different allowed products, RM159", () => {
  assert.ok(!PRODUCT_BOX_IDS.some((id) => /hammer/i.test(id)));
  const seen = new Set<string>();
  for (const a of articles) {
    const items = articleProducts(a);
    if (items.length === 2) assert.notEqual(items[0].id, items[1].id, a.key);
    for (const p of items) {
      assert.ok(["magnum-pump", "ultrahot", "horsemen"].includes(p.id), `${a.key}: ${p.id}`);
      assert.doesNotMatch(`${p.id} ${p.name} ${p.slug}`, /hammer|thor/i);
      assert.equal(p.price, 159);
      seen.add(p.id);
    }
  }
  assert.equal(seen.size, 3, "rotation should use all three products across articles");
  assert.doesNotMatch(JSON.stringify(productBoxCopy), /hammer|thor|ubat kuat|mati pucuk|tenaga batin|tahan lama|besarkan zakar/i);
});

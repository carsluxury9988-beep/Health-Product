import assert from "node:assert/strict";
import test from "node:test";
import { products } from "@/config/products";
import { store } from "@/config/store";
import { articles } from "@/content/articles";
import { en } from "@/i18n/en";
import { ms } from "@/i18n/ms";
import { allRoutePairs, localizedPath } from "@/i18n/routes";
import { parseOrderInput } from "@/lib/forms";
import { formOrderMessage, productOrderMessage, productOrderUrl } from "@/lib/whatsapp";

const validOrder = {
  productSlug: "horsemen",
  quantity: 2,
  name: "Aina Rahman",
  phone: "012 345 6789",
  email: "",
  address: "12 Jalan Merdeka, 43000 Kajang",
  city: "Kajang",
  state: "Penang",
  notes: "",
  codConfirmed: true,
  privacyConsent: true,
  website: "",
};

test("valid order resolves against catalogue pricing", () => {
  const parsed = parseOrderInput(validOrder);
  if (!("value" in parsed) || !parsed.value) assert.fail("Expected a valid order.");
  assert.equal(parsed.value.product.name, "Horsemen");
  assert.equal(parsed.value.product.price * parsed.value.quantity, 318);
  assert.equal(parsed.value.phone, "0123456789");
  const malay = parseOrderInput(validOrder, "ms");
  if (!("value" in malay) || !malay.value) assert.fail("Expected a valid Malay order.");
  assert.equal(malay.value.stateLabel, "Pulau Pinang");
});

test("invalid orders are rejected with localized errors", () => {
  assert.ok("error" in parseOrderInput({ ...validOrder, quantity: 11 }));
  assert.ok("error" in parseOrderInput({ ...validOrder, phone: "123456" }));
  assert.ok("error" in parseOrderInput({ ...validOrder, state: "Singapore" }));
  assert.ok("error" in parseOrderInput({ ...validOrder, city: "" }));
  assert.ok("error" in parseOrderInput({ ...validOrder, website: "https://spam.invalid" }));
  assert.ok("error" in parseOrderInput({ ...validOrder, privacyConsent: false }));
  assert.deepEqual(parseOrderInput({ ...validOrder, productSlug: "unlisted" }, "ms"), { error: ms.orderPage.errors.product });
  assert.deepEqual(parseOrderInput({ ...validOrder, productSlug: "unlisted" }, "en"), { error: en.orderPage.errors.product });
});

test("every product is RM159 and the WhatsApp order link targets the store number", () => {
  for (const product of products) {
    assert.equal(product.price, 159);
    const url = new URL(productOrderUrl(product, 1, "ms"));
    assert.equal(url.origin + url.pathname, `https://wa.me/${store.whatsappNumber}`);
    const text = url.searchParams.get("text") ?? "";
    assert.ok(text.includes(product.name));
    assert.ok(text.includes("RM159"));
  }
  assert.equal(store.whatsappNumber, "60194022352");
});

test("prefilled messages contain product, price, quantity and prompts in each language", () => {
  const msText = productOrderMessage(products[0], 3, "ms");
  for (const expected of ["Magnum Pump", "RM159 seunit", "Kuantiti: 3", "RM477", "Nama:", "Alamat penuh:", "No. telefon:"]) {
    assert.ok(msText.includes(expected), `BM message should include ${expected}`);
  }
  const enText = productOrderMessage(products[0], 2, "en");
  for (const expected of ["Magnum Pump", "RM159 per unit", "Quantity: 2", "RM318", "Name:", "Full address:", "Phone number:"]) {
    assert.ok(enText.includes(expected), `EN message should include ${expected}`);
  }
  assert.ok(productOrderMessage(products[0], 99, "en").includes("Quantity: 10"));
});

test("form order message includes the customer details", () => {
  const text = formOrderMessage({ productName: "Ultrahot", unitPrice: 159, quantity: 2, name: "Aina", phone: "0123456789", email: "", address: "12 Jalan Merdeka", city: "Kajang", state: "Selangor", notes: "Call first" }, "ms");
  for (const expected of ["Ultrahot", "Kuantiti: 2", "RM318", "Nama: Aina", "No. telefon: 0123456789", "12 Jalan Merdeka, Kajang, Selangor", "Catatan: Call first"]) {
    assert.ok(text.includes(expected), `Form message should include ${expected}`);
  }
  assert.ok(!text.includes("E-mel"));
});

test("Malay and English routes are reciprocal, including products and articles", () => {
  const pairs = allRoutePairs();
  assert.ok(pairs.length >= 12 + products.length + articles.length);
  for (const pair of pairs) {
    assert.equal(localizedPath(pair.ms, "en"), pair.en);
    assert.equal(localizedPath(pair.en, "ms"), pair.ms);
  }
  assert.equal(localizedPath("/cara-pesan", "en"), "/en/how-to-order");
  assert.equal(localizedPath("/blog/hubungan-bahagia", "en"), "/en/blog/happy-marriage");
  assert.equal(localizedPath("/unknown", "en"), "/en");
});

test("SEO titles stay within 60 characters including the brand suffix", () => {
  const suffix = ` | ${store.brandName}`;
  for (const dict of [ms, en]) {
    for (const [key, value] of Object.entries(dict.seo)) {
      const titles = key === "product" ? products.map((p) => value.title.replace("{name}", p.name)) : [value.title];
      for (const title of titles) {
        const full = key === "home" ? title : `${title}${suffix}`;
        assert.ok(full.length <= 60, `${dict.locale} ${key} title too long (${full.length}): ${full}`);
      }
    }
  }
  for (const article of articles) {
    for (const content of [article.ms, article.en]) {
      assert.ok(`${content.seoTitle}${suffix}`.length <= 60, `Article title too long: ${content.seoTitle}`);
    }
  }
});

test("sales copy avoids prohibited claim phrases", () => {
  const banned = ["ubat kuat", "mati pucuk", "tenaga batin", "tahan lama", "besarkan zakar", "zakar", "draf", "draft"];
  const salesCopy = JSON.stringify({ ms, en, products }).toLowerCase();
  for (const phrase of banned) assert.ok(!salesCopy.includes(phrase), `Found banned phrase: ${phrase}`);
});

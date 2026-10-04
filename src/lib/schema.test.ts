import assert from "node:assert/strict";
import test from "node:test";
import { products } from "@/config/products";
import { store } from "@/config/store";
import { en } from "@/i18n/en";
import { ms } from "@/i18n/ms";
import { organizationSchema, priceValidUntil, productSchema, returnPolicyId, returnPolicySchema } from "@/lib/schema";

const locales = ["ms", "en"] as const;
const d = store.deliveryEstimateDays;
const range = (min: number, max: number) => `${min}–${max}`;

test("Product JSON-LD has the merchant-listing fields on every product page", () => {
  for (const product of products) {
    for (const locale of locales) {
      const schema = productSchema(product, locale);
      const offer = schema.offers;
      const id = `${product.slug}/${locale}`;
      assert.deepEqual(schema.brand, { "@type": "Brand", name: product.brand }, id);
      assert.equal(schema.sku, product.id, id);
      assert.ok(!("gtin" in schema) && !("gtin13" in schema) && !("mpn" in schema), `${id}: no invented identifiers`);
      assert.ok(!("review" in schema) && !("aggregateRating" in schema), `${id}: no reviews or ratings without genuine reviews`);
      assert.equal(offer.availability, "https://schema.org/InStock", id);
      assert.equal(offer.price, "159.00", id);
      assert.equal(offer.priceCurrency, "MYR", id);
      assert.equal(offer.itemCondition, "https://schema.org/NewCondition", id);
      assert.equal(offer.url, schema.url, id);
      assert.match(offer.priceValidUntil, /^\d{4}-12-31$/, id);
      assert.ok(offer.priceValidUntil > new Date().toISOString().slice(0, 10), `${id}: priceValidUntil must be in the future`);
      assert.deepEqual(offer.hasMerchantReturnPolicy, { "@id": returnPolicyId(locale) }, id);
      const ship = offer.shippingDetails;
      assert.deepEqual(ship.shippingRate, { "@type": "MonetaryAmount", value: store.deliveryFee, currency: "MYR" }, id);
      assert.equal(ship.shippingDestination.addressCountry, "MY", id);
      assert.deepEqual([ship.deliveryTime.handlingTime.minValue, ship.deliveryTime.handlingTime.maxValue], [d.handling.min, d.handling.max], id);
      assert.deepEqual([ship.deliveryTime.transitTime.minValue, ship.deliveryTime.transitTime.maxValue], [d.transit.min, d.transit.max], id);
      assert.equal(ship.deliveryTime.handlingTime.unitCode, "DAY");
    }
  }
});

test("return policy is defined once per language and referenced by the store", () => {
  for (const locale of locales) {
    const policy = returnPolicySchema(locale);
    assert.equal(policy.applicableCountry, "MY");
    assert.ok(policy.merchantReturnLink.endsWith(locale === "en" ? "/en/refund-policy" : "/polisi-pemulangan"));
    assert.ok(!("returnPolicyCategory" in policy) && !("merchantReturnDays" in policy), "no return window is stated on the visible policy");
    assert.deepEqual((organizationSchema(locale) as Record<string, unknown>).hasMerchantReturnPolicy, policy);
  }
});

test("visible delivery text matches the delivery estimate used in structured data", () => {
  const total = range(d.handling.min + d.transit.min, d.handling.max + d.transit.max);
  for (const t of [ms, en]) {
    const policyText = t.policies.shipping.sections.flatMap((s) => s.paragraphs).join(" ");
    assert.ok(policyText.includes(range(d.handling.min, d.handling.max)), `${t.locale}: handling range`);
    assert.ok(policyText.includes(range(d.transit.min, d.transit.max)), `${t.locale}: transit range`);
    assert.ok(policyText.includes(total), `${t.locale}: total range`);
    assert.ok(t.productPage.deliveryBody.includes(total), `${t.locale}: product page`);
    const faq = t.faqPage.groups.flatMap((g) => g.items).map((i) => i.a).join(" ");
    assert.ok(faq.includes(total), `${t.locale}: FAQ`);
  }
});

test("priceValidUntil rolls to the end of next year", () => {
  assert.equal(priceValidUntil(new Date("2026-10-04")), "2027-12-31");
});

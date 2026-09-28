import assert from "node:assert/strict";
import test from "node:test";
import { parseContactInput, parseOrderInput } from "@/lib/forms";
import { formatOrderNotification, orderNotificationEmail } from "@/lib/email";
import { localizedPath } from "@/i18n/routes";

const validOrder = {
  productSlug: "horsemen",
  quantity: 2,
  name: "Aina Rahman",
  phone: "012 345 6789",
  email: "",
  address: "12 Jalan Merdeka, 43000 Kajang",
  city: "Kajang",
  state: "Selangor",
  stateLabel: "Selangor",
  notes: "",
  codConfirmed: true,
  privacyConsent: true,
  website: "",
};

test("valid order is resolved against server product pricing", () => {
  const parsed = parseOrderInput(validOrder);
  if (!("value" in parsed) || !parsed.value) assert.fail("Expected a valid order.");
  assert.equal(parsed.value.product.name, "Horsemen");
  assert.equal(parsed.value.quantity, 2);
  assert.equal(parsed.value.product.price * parsed.value.quantity, 318);
  assert.equal(parsed.value.phone, "0123456789");
  assert.equal("postcode" in parsed.value, false);
  const parsedMalay = parseOrderInput(validOrder, "ms");
  if (!("value" in parsedMalay) || !parsedMalay.value) assert.fail("Expected a valid Malay order.");
  assert.equal(parsedMalay.value.stateLabel, "Selangor");
});

test("order quantities above the server limit are rejected", () => {
  const parsed = parseOrderInput({ ...validOrder, quantity: 11 });
  assert.ok("error" in parsed);
  assert.ok("error" in parseOrderInput({ ...validOrder, name: "A".repeat(101) }));
});

test("unknown products, invalid phone numbers and states are rejected", () => {
  assert.ok("error" in parseOrderInput({ ...validOrder, productSlug: "unlisted" }));
  assert.ok("error" in parseOrderInput({ ...validOrder, phone: "123456" }));
  assert.ok("error" in parseOrderInput({ ...validOrder, state: "Singapore" }));
  assert.ok("error" in parseOrderInput({ ...validOrder, city: "" }));
});

test("order notification includes all order details and targets the fixed inbox", () => {
  const message = formatOrderNotification({
    reference: "ORDER123",
    name: "Aina Rahman",
    phone: "0123456789",
    email: "aina@example.com",
    address: "12 Jalan Merdeka",
    city: "Kajang",
    state: "Selangor",
    productName: "Magnum Pump",
    quantity: 2,
    unitPrice: 159,
    deliveryFee: 0,
    total: 318,
    notes: "Call on arrival",
  });

  assert.equal(orderNotificationEmail, "producth006@gmail.com");
  for (const expected of [
    "Customer name: Aina Rahman",
    "Phone number: 0123456789",
    "Email address: aina@example.com",
    "Full delivery address: 12 Jalan Merdeka",
    "City: Kajang",
    "State: Selangor",
    "Product name: Magnum Pump",
    "Quantity: 2",
    "Unit price: RM159",
    "Delivery: FREE",
    "Payment method: Cash on Delivery",
    "Total order amount: RM318",
    "Customer notes: Call on arrival",
    "Order request reference: ORDER123",
  ]) {
    assert.ok(message.includes(expected), `Expected order email to include: ${expected}`);
  }
});

test("order and contact errors follow the selected locale", () => {
  const malayOrder = parseOrderInput({ ...validOrder, productSlug: "unlisted" }, "ms");
  const englishOrder = parseOrderInput({ ...validOrder, productSlug: "unlisted" }, "en");
  assert.deepEqual(malayOrder, { error: "Sila pilih produk yang disenaraikan." });
  assert.deepEqual(englishOrder, { error: "Please choose a listed product." });
  const malayContact = parseContactInput({ name: "x" }, "ms");
  assert.deepEqual(malayContact, { error: "Masukkan nama anda." });
});

test("Malay and English route links are reciprocal", () => {
  const pairs = [
    ["/", "/en"],
    ["/produk", "/en/products"],
    ["/produk/magnum-pump", "/en/products/magnum-pump"],
    ["/tentang-kami", "/en/about-us"],
    ["/hubungi-kami", "/en/contact"],
    ["/pesanan", "/en/order"],
    ["/pesanan/pengesahan", "/en/order/confirmation"],
    ["/soalan-lazim", "/en/faq"],
    ["/penghantaran", "/en/shipping"],
    ["/polisi-privasi", "/en/privacy-policy"],
    ["/terma-syarat", "/en/terms"],
    ["/polisi-pemulangan", "/en/refund-policy"],
    ["/blog", "/en/blog"],
  ];
  for (const [malayPath, englishPath] of pairs) {
    assert.equal(localizedPath(malayPath, "en"), englishPath);
    assert.equal(localizedPath(englishPath, "ms"), malayPath);
  }
});

test("honeypot submissions and missing consent are rejected", () => {
  assert.ok("error" in parseOrderInput({ ...validOrder, website: "https://spam.invalid" }));
  assert.ok("error" in parseOrderInput({ ...validOrder, privacyConsent: false }));
});

test("contact message requires valid email, sufficient detail and consent", () => {
  const base = {
    name: "Aina Rahman",
    email: "aina@example.com",
    phone: "",
    product: "",
    message: "Could you share more about this product?",
    privacyConsent: true,
    website: "",
  };
  const parsed = parseContactInput(base);
  if (!("value" in parsed) || !parsed.value) assert.fail("Expected a valid contact message.");
  assert.equal(parsed.value.email, base.email);
  assert.ok("error" in parseContactInput({ ...base, email: "not-an-email" }));
  assert.ok("error" in parseContactInput({ ...base, message: "Short" }));
  assert.ok("error" in parseContactInput({ ...base, privacyConsent: false }));
  assert.ok("error" in parseContactInput({ ...base, message: "A".repeat(2001) }));
});

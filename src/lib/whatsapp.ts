import type { Product } from "@/config/products";
import { store } from "@/config/store";
import type { Locale } from "@/i18n";

export const MAX_QUANTITY = 10;

export function whatsappUrl(message: string) {
  return `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function formatRinggit(amount: number) {
  return `RM${amount.toLocaleString("en-MY")}`;
}

function clampQuantity(quantity: number) {
  if (!Number.isFinite(quantity)) return 1;
  return Math.min(MAX_QUANTITY, Math.max(1, Math.round(quantity)));
}

/** Prefilled order message used by every product "Order" button. */
export function productOrderMessage(product: Pick<Product, "name" | "price">, quantity: number, locale: Locale) {
  const qty = clampQuantity(quantity);
  const total = formatRinggit(product.price * qty);
  if (locale === "en") {
    return [
      "Hi Lebih Yakin, I would like to order:",
      `• Product: ${product.name}`,
      `• Price: ${formatRinggit(product.price)} per unit`,
      `• Quantity: ${qty}`,
      `• Total: ${total} (free delivery, cash on delivery)`,
      "",
      "My details:",
      "Name: ",
      "Full address: ",
      "Phone number: ",
    ].join("\n");
  }
  return [
    "Hai Lebih Yakin, saya nak pesan:",
    `• Produk: ${product.name}`,
    `• Harga: ${formatRinggit(product.price)} seunit`,
    `• Kuantiti: ${qty}`,
    `• Jumlah: ${total} (penghantaran percuma, bayar COD)`,
    "",
    "Butiran saya:",
    "Nama: ",
    "Alamat penuh: ",
    "No. telefon: ",
  ].join("\n");
}

export function productOrderUrl(product: Pick<Product, "name" | "price">, quantity: number, locale: Locale) {
  return whatsappUrl(productOrderMessage(product, quantity, locale));
}

/** General enquiry (header, floating button, contact page). */
export function enquiryMessage(locale: Locale, topic?: string) {
  if (locale === "en") {
    return topic ? `Hi Lebih Yakin, I have a question about ${topic}.` : "Hi Lebih Yakin, I would like to ask about your products.";
  }
  return topic ? `Hai Lebih Yakin, saya ada soalan tentang ${topic}.` : "Hai Lebih Yakin, saya nak tanya tentang produk.";
}

export function enquiryUrl(locale: Locale, topic?: string) {
  return whatsappUrl(enquiryMessage(locale, topic));
}

export function labelRequestUrl(productName: string, locale: Locale) {
  return whatsappUrl(locale === "en"
    ? `Hi Lebih Yakin, could you share full label photos (ingredients and directions) for ${productName}?`
    : `Hai Lebih Yakin, boleh kongsi gambar label penuh (ramuan dan cara guna) untuk ${productName}?`);
}

export type OrderDetails = {
  productName: string;
  unitPrice: number;
  quantity: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  notes: string;
};

/** Complete order message composed from the on-site order form. */
export function formOrderMessage(order: OrderDetails, locale: Locale) {
  const total = formatRinggit(order.unitPrice * order.quantity);
  const en = locale === "en";
  const lines = [
    en ? "Hi Lebih Yakin, I would like to order:" : "Hai Lebih Yakin, saya nak pesan:",
    `• ${en ? "Product" : "Produk"}: ${order.productName}`,
    `• ${en ? "Price" : "Harga"}: ${formatRinggit(order.unitPrice)} ${en ? "per unit" : "seunit"}`,
    `• ${en ? "Quantity" : "Kuantiti"}: ${order.quantity}`,
    `• ${en ? "Total" : "Jumlah"}: ${total} (${en ? "free delivery, cash on delivery" : "penghantaran percuma, bayar COD"})`,
    "",
    en ? "My details:" : "Butiran saya:",
    `${en ? "Name" : "Nama"}: ${order.name}`,
    `${en ? "Phone number" : "No. telefon"}: ${order.phone}`,
    `${en ? "Full address" : "Alamat penuh"}: ${order.address}, ${order.city}, ${order.state}`,
  ];
  if (order.email) lines.push(`${en ? "Email" : "E-mel"}: ${order.email}`);
  if (order.notes) lines.push(`${en ? "Notes" : "Catatan"}: ${order.notes}`);
  return lines.join("\n");
}

export function contactMessage(name: string, message: string, locale: Locale) {
  return locale === "en"
    ? `Hi Lebih Yakin, my name is ${name}.\n\n${message}`
    : `Hai Lebih Yakin, saya ${name}.\n\n${message}`;
}


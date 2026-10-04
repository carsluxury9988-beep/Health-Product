import type { Locale } from "@/i18n";

export type ProductId = "magnum-pump" | "ultrahot" | "horsemen" | "hammer-of-thor";

export type Product = {
  id: ProductId;
  slug: string;
  name: string;
  price: number;
  currency: "MYR";
  /** Transparent cut-out of the supplied pack photo (used on cards and product pages). */
  packImage: string;
  /** Square pack image on a light background (used for structured data). */
  squareImage: string;
  ogImage: Record<Locale, string>;
  /** Brand name as printed on the pack. */
  brand: string;
  /** Set to false when an item is out of stock (structured data shows OutOfStock). */
  inStock: boolean;
  summary: Record<Locale, string>;
  /**
   * Label facts. Kept empty until the owner supplies the official label / MAL number.
   * TODO(owner): add MAL registration number, pack size and ingredients exactly as printed.
   */
  malNumber: string | null;
  packSize: Record<Locale, string> | null;
};

const PRICE = 159;

function product(id: ProductId, name: string, packSize: Product["packSize"] = null): Product {
  return {
    id,
    slug: id,
    name,
    price: PRICE,
    currency: "MYR",
    packImage: `/products/${id}-pack.webp`,
    squareImage: `/products/${id}-square.jpg`,
    ogImage: { ms: `/og/${id}-ms.png`, en: `/og/${id}-en.png` },
    brand: name,
    inStock: true,
    summary: {
      ms: `${name} ialah salah satu daripada empat produk kesihatan lelaki dalam katalog Lebih Yakin. Harga RM159 seunit, penghantaran percuma ke seluruh Malaysia dan bayaran tunai semasa terima (COD).`,
      en: `${name} is one of the four men's health products in the Lebih Yakin catalogue. RM159 per unit, free delivery across Malaysia and cash on delivery (COD).`,
    },
    malNumber: null,
    packSize,
  };
}

export const products: readonly Product[] = [
  product("magnum-pump", "Magnum Pump"),
  product("ultrahot", "Ultrahot"),
  product("horsemen", "Horsemen"),
  // Listing kept as-is. Do not add extra SEO pages or keyword content for this product.
  product("hammer-of-thor", "Hammer of Thor"),
];

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug);
}

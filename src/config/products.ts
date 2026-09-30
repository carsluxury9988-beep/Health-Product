import { store } from "@/config/store";
import { formatPrice } from "@/lib/format";

export type ProductId = "magnum-pump" | "ultrahot" | "horsemen" | "hammer-of-thor";

export type Product = {
  id: ProductId;
  slug: string;
  name: string;
  price: number;
  currency: "MYR";
  images: readonly string[];
  shortDescription: string;
  description: string;
  benefits: readonly string[] | null;
  ingredients: readonly string[] | null;
  usage: string | null;
  warnings: string | null;
  category: string | null;
  availability: "unknown";
  sku: string | null;
  seoTitle: string;
  seoTitleMs: string;
  seoDescription: string;
  seoDescriptionMs: string;
  keywords: readonly string[];
};

const packagingPlaceholder =
  "Product information will be updated from the official product packaging.";
const cataloguePrice = 159;

const sharedMarketKeywords = [
  "produk kesihatan lelaki Malaysia",
  "suplemen kesihatan lelaki",
  "beli online Malaysia",
  "penghantaran percuma Malaysia",
  "COD Malaysia",
  "RM159",
] as const;

function productKeywords(name: string) {
  return [
    `${name} Malaysia`,
    `beli ${name} Malaysia`,
    `${name} harga`,
    `${name} RM159`,
    `${name} COD`,
    `${name} penghantaran percuma`,
    `${name} online Malaysia`,
    ...sharedMarketKeywords,
  ];
}

function buildProduct(id: ProductId, name: string, image: string): Product {
  return {
    id,
    slug: id,
    name,
    price: cataloguePrice,
    currency: "MYR",
    images: [image],
    shortDescription: packagingPlaceholder,
    description: packagingPlaceholder,
    benefits: null,
    ingredients: null,
    usage: null,
    warnings: null,
    category: "Men's wellness",
    availability: "unknown",
    sku: null,
    seoTitle: `${name} Malaysia | Buy Online RM159 COD`,
    seoTitleMs: `${name} Malaysia | Beli Online RM159 COD`,
    seoDescription: `Buy ${name} in Malaysia for ${formatPrice(cataloguePrice)}. ${store.deliveryLabel} and Cash on Delivery. Official label details will be added from the packaging.`,
    seoDescriptionMs: `Beli ${name} di Malaysia pada harga ${formatPrice(cataloguePrice)}. ${store.deliveryLabel} dan pilihan COD. Maklumat rasmi akan dikemas kini daripada bungkusan.`,
    keywords: productKeywords(name),
  };
}

export const products: readonly Product[] = [
  buildProduct("magnum-pump", "Magnum Pump", "/products/magnum-pump.webp"),
  buildProduct("ultrahot", "Ultrahot", "/products/ultrahot.webp"),
  buildProduct("horsemen", "Horsemen", "/products/horsemen.webp"),
  buildProduct("hammer-of-thor", "Hammer of Thor", "/products/hammer-of-thor.webp"),
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

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
  seoDescription: string;
  keywords: readonly string[];
};

const packagingPlaceholder =
  "Product information will be updated from the official product packaging.";
const cataloguePrice = 159;
const seoDescription = (name: string, price: number) =>
  `View ${name} at ${formatPrice(price)}. Official product details will be added from the packaging. ${store.deliveryLabel}.`;
const productKeywords = (name: string) => [name, `${name} ${formatPrice(cataloguePrice)}`];

export const products: readonly Product[] = [
  {
    id: "magnum-pump",
    slug: "magnum-pump",
    name: "Magnum Pump",
    price: cataloguePrice,
    currency: "MYR",
    images: ["/products/magnum-pump.webp"],
    shortDescription: packagingPlaceholder,
    description: packagingPlaceholder,
    benefits: null,
    ingredients: null,
    usage: null,
    warnings: null,
    category: null,
    availability: "unknown",
    sku: null,
    seoTitle: "Magnum Pump | Men's Wellness Malaysia",
    seoDescription: seoDescription("Magnum Pump", cataloguePrice),
    keywords: ["Magnum Pump Malaysia", ...productKeywords("Magnum Pump")],
  },
  {
    id: "ultrahot",
    slug: "ultrahot",
    name: "Ultrahot",
    price: cataloguePrice,
    currency: "MYR",
    images: ["/products/ultrahot.webp"],
    shortDescription: packagingPlaceholder,
    description: packagingPlaceholder,
    benefits: null,
    ingredients: null,
    usage: null,
    warnings: null,
    category: null,
    availability: "unknown",
    sku: null,
    seoTitle: "Ultrahot | Men's Wellness Malaysia",
    seoDescription: seoDescription("Ultrahot", cataloguePrice),
    keywords: ["Ultrahot Malaysia", ...productKeywords("Ultrahot")],
  },
  {
    id: "horsemen",
    slug: "horsemen",
    name: "Horsemen",
    price: cataloguePrice,
    currency: "MYR",
    images: ["/products/horsemen.webp"],
    shortDescription: packagingPlaceholder,
    description: packagingPlaceholder,
    benefits: null,
    ingredients: null,
    usage: null,
    warnings: null,
    category: null,
    availability: "unknown",
    sku: null,
    seoTitle: "Horsemen | Men's Wellness Malaysia",
    seoDescription: seoDescription("Horsemen", cataloguePrice),
    keywords: ["Horsemen Malaysia", ...productKeywords("Horsemen")],
  },
  {
    id: "hammer-of-thor",
    slug: "hammer-of-thor",
    name: "Hammer of Thor",
    price: cataloguePrice,
    currency: "MYR",
    images: ["/products/hammer-of-thor.webp"],
    shortDescription: packagingPlaceholder,
    description: packagingPlaceholder,
    benefits: null,
    ingredients: null,
    usage: null,
    warnings: null,
    category: null,
    availability: "unknown",
    sku: null,
    seoTitle: "Hammer of Thor | Men's Wellness Malaysia",
    seoDescription: seoDescription("Hammer of Thor", cataloguePrice),
    keywords: ["Hammer of Thor Malaysia", ...productKeywords("Hammer of Thor")],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
import { store } from "@/config/store";
import { formatPrice } from "@/lib/format";

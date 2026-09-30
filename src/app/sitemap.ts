import type { MetadataRoute } from "next";
import { products } from "@/config/products";
import { store } from "@/config/store";

const staticPaths = [
  "/",
  "/produk",
  "/tentang-kami",
  "/hubungi-kami",
  "/pesanan",
  "/soalan-lazim",
  "/penghantaran",
  "/polisi-privasi",
  "/terma-syarat",
  "/polisi-pemulangan",
  "/blog",
  "/blog/hubungan-bahagia",
];
const englishPaths: Record<string, string> = {
  "/": "/en",
  "/produk": "/en/products",
  "/tentang-kami": "/en/about-us",
  "/hubungi-kami": "/en/contact",
  "/pesanan": "/en/order",
  "/soalan-lazim": "/en/faq",
  "/penghantaran": "/en/shipping",
  "/polisi-privasi": "/en/privacy-policy",
  "/terma-syarat": "/en/terms",
  "/polisi-pemulangan": "/en/refund-policy",
  "/blog": "/en/blog",
  "/blog/hubungan-bahagia": "/en/blog/happy-marriage",
};

export default function sitemap(): MetadataRoute.Sitemap {
  if (!store.siteUrl) return [];

  const entries = staticPaths.flatMap((path) => {
    const englishPath = englishPaths[path];
    const languages = {
      "ms-MY": new URL(path, store.siteUrl).toString(),
      "en-MY": new URL(englishPath, store.siteUrl).toString(),
      "x-default": new URL(path, store.siteUrl).toString(),
    };
    return [
      {
      url: new URL(path, store.siteUrl).toString(),
      changeFrequency: path === "/" || path === "/produk" ? "weekly" as const : "monthly" as const,
      priority: path === "/" ? 1 : path === "/produk" ? 0.9 : path.includes("blog") ? 0.7 : 0.6,
      alternates: { languages },
      },
      {
        url: new URL(englishPath, store.siteUrl).toString(),
        changeFrequency: path === "/" || path === "/produk" ? "weekly" as const : "monthly" as const,
        priority: path === "/" ? 1 : path === "/produk" ? 0.9 : path.includes("blog") ? 0.7 : 0.6,
        alternates: { languages },
      },
    ];
  });
  const productEntries = products.flatMap((product) => {
    const msPath = `/produk/${product.slug}`;
    const enPath = `/en/products/${product.slug}`;
    const languages = {
      "ms-MY": new URL(msPath, store.siteUrl).toString(),
      "en-MY": new URL(enPath, store.siteUrl).toString(),
      "x-default": new URL(msPath, store.siteUrl).toString(),
    };
    return [msPath, enPath].map((path) => ({
      url: new URL(path, store.siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: { languages },
    }));
  });
  return [...entries, ...productEntries];
}

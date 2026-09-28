import type { Locale } from "@/i18n";

const msToEn: Record<string, string> = {
  "/": "/en",
  "/produk": "/en/products",
  "/tentang-kami": "/en/about-us",
  "/hubungi-kami": "/en/contact",
  "/pesanan": "/en/order",
  "/pesanan/pengesahan": "/en/order/confirmation",
  "/soalan-lazim": "/en/faq",
  "/penghantaran": "/en/shipping",
  "/polisi-privasi": "/en/privacy-policy",
  "/terma-syarat": "/en/terms",
  "/polisi-pemulangan": "/en/refund-policy",
  "/blog": "/en/blog",
};

const enToMs = Object.fromEntries(Object.entries(msToEn).map(([msPath, enPath]) => [enPath, msPath]));

function equivalentPath(pathname: string, sourceLocale: Locale) {
  const productPattern = sourceLocale === "ms" ? /^\/produk\/([^/]+)$/ : /^\/en\/products\/([^/]+)$/;
  const product = pathname.match(productPattern);
  if (product) return sourceLocale === "ms" ? `/en/products/${product[1]}` : `/produk/${product[1]}`;
  const confirmation = pathname.match(sourceLocale === "ms" ? /^\/pesanan\/pengesahan\/([^/]+)$/ : /^\/en\/order\/confirmation\/([^/]+)$/);
  if (confirmation) return sourceLocale === "ms" ? `/en/order/confirmation/${confirmation[1]}` : `/pesanan/pengesahan/${confirmation[1]}`;
  return sourceLocale === "ms" ? msToEn[pathname] : enToMs[pathname];
}

export function localizedPath(pathname: string, target: Locale) {
  const path = pathname.replace(/\/$/, "") || "/";
  if (target === "en" && (path === "/en" || path.startsWith("/en/"))) return path;
  if (target === "ms" && !path.startsWith("/en") && path !== "/en") return path;
  const sourceLocale: Locale = path.startsWith("/en") ? "en" : "ms";
  if ((sourceLocale === "en" && target === "ms" && path === "/en") || (sourceLocale === "ms" && target === "en" && path === "/")) {
    return target === "en" ? "/en" : "/";
  }
  return equivalentPath(path, sourceLocale) ?? (target === "en" ? "/en" : "/");
}

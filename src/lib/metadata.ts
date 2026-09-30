import type { Metadata } from "next";
import { store } from "@/config/store";
import { localizedPath } from "@/i18n/routes";
import type { Locale } from "@/i18n";

export const malaysiaMarketKeywords = [
  "produk kesihatan lelaki Malaysia",
  "suplemen kesihatan lelaki",
  "kesihatan lelaki Malaysia",
  "produk kesejahteraan lelaki",
  "beli produk lelaki online Malaysia",
  "penghantaran percuma seluruh Malaysia",
  "COD Malaysia",
  "bayaran tunai semasa penghantaran",
  "men's wellness Malaysia",
  "men's health supplement Malaysia",
  "men's vitality Malaysia",
  "Magnum Pump Malaysia",
  "Ultrahot Malaysia",
  "Horsemen Malaysia",
  "Hammer of Thor Malaysia",
] as const;

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  locale?: Locale,
  keywords?: readonly string[],
): Metadata {
  const pageLocale = locale ?? (path === "/en" || path.startsWith("/en/") ? "en" : "ms");
  const metadata: Metadata = {
    title,
    description,
    keywords: [...(keywords ?? malaysiaMarketKeywords)],
  };

  const canonicalPath = path === "/" || path === "/en" ? path : path.replace(/\/$/, "");
  const languages = {
    "ms-MY": localizedPath(canonicalPath, "ms"),
    "en-MY": localizedPath(canonicalPath, "en"),
    "x-default": localizedPath(canonicalPath, "ms"),
  };
  const canonical = store.siteUrl
    ? new URL(canonicalPath, store.siteUrl).toString()
    : canonicalPath;
  return {
    ...metadata,
    alternates: {
      canonical,
      languages: Object.fromEntries(
        Object.entries(languages).map(([language, alternatePath]) => [
          language,
          store.siteUrl ? new URL(alternatePath, store.siteUrl).toString() : alternatePath,
        ]),
      ),
    },
    openGraph: {
      title,
      description,
      ...(store.siteUrl ? { url: canonical } : {}),
      siteName: store.brandName,
      locale: pageLocale === "en" ? "en_MY" : "ms_MY",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

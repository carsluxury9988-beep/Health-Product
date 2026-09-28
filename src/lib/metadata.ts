import type { Metadata } from "next";
import { store } from "@/config/store";
import { localizedPath } from "@/i18n/routes";
import type { Locale } from "@/i18n";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  locale?: Locale,
): Metadata {
  const pageLocale = locale ?? (path === "/en" || path.startsWith("/en/") ? "en" : "ms");
  const metadata: Metadata = { title, description };

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

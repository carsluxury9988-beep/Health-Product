import type { Metadata } from "next";
import { store } from "@/config/store";
import { getMessages, type Locale } from "@/i18n";

export function absoluteUrl(path: string) {
  return new URL(path, `${store.siteUrl}/`).toString();
}

type PageMetaInput = {
  locale: Locale;
  paths: Record<Locale, string>;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  /** Use the title as-is (no "| Lebih Yakin" suffix). */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function pageMetadata({ locale, paths, title, description, image, imageAlt, absoluteTitle, type = "website", publishedTime, modifiedTime }: PageMetaInput): Metadata {
  const t = getMessages(locale);
  const ogImage = image ?? `/og/home-${locale}.png`;
  const fullTitle = absoluteTitle ? title : `${title} | ${store.brandName}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: paths[locale],
      languages: { "ms-MY": paths.ms, "en-MY": paths.en, "x-default": paths.ms },
    },
    openGraph: {
      type,
      siteName: store.brandName,
      locale: t.ogLocale,
      alternateLocale: locale === "en" ? "ms_MY" : "en_MY",
      url: paths[locale],
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: imageAlt ?? fullTitle }],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [ogImage] },
  };
}

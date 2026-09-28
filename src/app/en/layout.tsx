import type { Metadata } from "next";
import type { ReactNode } from "react";
import { store } from "@/config/store";
import { LocaleDocument } from "@/components/locale-document";

export const metadata: Metadata = {
  title: {
    default: `Men's Wellness in Malaysia | ${store.brandName}`,
    template: `%s | ${store.brandName}`,
  },
  description:
    "Explore men's wellness products at RM159 each, with free delivery across Malaysia and Cash on Delivery available.",
  alternates: {
    languages: store.siteUrl
      ? {
          "ms-MY": new URL("/", store.siteUrl).toString(),
          "en-MY": new URL("/en", store.siteUrl).toString(),
          "x-default": new URL("/", store.siteUrl).toString(),
        }
      : { "ms-MY": "/", "en-MY": "/en", "x-default": "/" },
  },
  openGraph: {
    title: `Men's Wellness in Malaysia | ${store.brandName}`,
    description: "Explore men's wellness products at RM159 each, with free delivery across Malaysia.",
    ...(store.siteUrl ? { url: new URL("/en", store.siteUrl).toString() } : {}),
    siteName: store.brandName,
    locale: "en_MY",
    type: "website",
  },
};

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <><LocaleDocument locale="en-MY" />{children}</>;
}

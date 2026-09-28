import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { store } from "@/config/store";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileOrderBar } from "@/components/mobile-order-bar";
import { OrderConfirmationProvider } from "@/components/order-confirmation-provider";
import { ConsentBanner } from "@/components/consent-banner";
import { products } from "@/config/products";
import { formatPrice } from "@/lib/format";
import { ms } from "@/i18n/ms";
import { LocalizedSkipLink } from "@/components/localized-skip-link";

export const metadata: Metadata = {
  ...(store.siteUrl ? { metadataBase: new URL(store.siteUrl) } : {}),
  title: {
    default: `Kesihatan & Kesejahteraan Lelaki Malaysia | ${store.brandName}`,
    template: `%s | ${store.displayBrandNameMs}`,
  },
  description:
    `Terokai produk kesejahteraan lelaki pada harga ${formatPrice(products[0].price)} setiap produk, dengan ${ms.common.delivery.toLowerCase()} dan pilihan COD.`,
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : {},
  alternates: {
    ...(store.siteUrl ? { canonical: new URL("/", store.siteUrl).toString() } : {}),
    languages: store.siteUrl
      ? {
          "ms-MY": new URL("/", store.siteUrl).toString(),
          "en-MY": new URL("/en", store.siteUrl).toString(),
          "x-default": new URL("/", store.siteUrl).toString(),
        }
      : { "ms-MY": "/", "en-MY": "/en", "x-default": "/" },
  },
  openGraph: {
    title: `Kesihatan & Kesejahteraan Lelaki Malaysia | ${store.brandName}`,
    description: ms.seo.homeDescription,
    ...(store.siteUrl ? { url: store.siteUrl } : {}),
    siteName: store.brandName,
    locale: "ms_MY",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ms-MY">
      <body>
        <OrderConfirmationProvider>
          <LocalizedSkipLink />
          <SiteHeader />
          {children}
          <SiteFooter />
          <MobileOrderBar />
        </OrderConfirmationProvider>
        <ConsentBanner />
      </body>
    </html>
  );
}

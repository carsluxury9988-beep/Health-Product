import type { Metadata, Viewport } from "next";
import { store } from "@/config/store";

export const baseMetadata: Metadata = {
  metadataBase: new URL(store.siteUrl),
  title: { default: store.brandName, template: `%s | ${store.brandName}` },
  applicationName: store.brandName,
  formatDetection: { telephone: false },
  robots: { index: true, follow: true },
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } } : {}),
};

export const baseViewport: Viewport = {
  themeColor: "#0B3B30",
  width: "device-width",
  initialScale: 1,
};

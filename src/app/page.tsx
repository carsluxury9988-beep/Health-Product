import type { Metadata } from "next";
import { MsHomePage } from "@/components/ms-pages";
import { store } from "@/config/store";
import { ms } from "@/i18n/ms";
import { msPageMetadata } from "@/lib/ms-page-metadata";

export const metadata: Metadata = msPageMetadata(
  `Kesihatan & Kesejahteraan Lelaki Malaysia | ${store.displayBrandNameMs}`,
  ms.seo.homeDescription,
  "/",
);

export default function HomePage() {
  return <MsHomePage />;
}

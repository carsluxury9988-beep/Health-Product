import type { Metadata } from "next";
import { MsProductsPage } from "@/components/ms-pages";
import { ms } from "@/i18n/ms";
import { msPageMetadata } from "@/lib/ms-page-metadata";

export const metadata: Metadata = msPageMetadata(ms.seo.productsTitle, ms.seo.productsDescription, "/produk");

export default function ProductsPage() {
  return <MsProductsPage />;
}

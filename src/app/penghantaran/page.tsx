import type { Metadata } from "next";
import { MsShippingPage } from "@/components/ms-pages";
import { msPageMetadata } from "@/lib/ms-page-metadata";

export const metadata: Metadata = msPageMetadata(
  "Maklumat Penghantaran | Seluruh Malaysia",
  "Maklumat penghantaran percuma ke seluruh Malaysia serta pengesahan COD dan tempoh penghantaran mengikut destinasi.",
  "/penghantaran",
);

export default function ShippingPage() {
  return <MsShippingPage />;
}

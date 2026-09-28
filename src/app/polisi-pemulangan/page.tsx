import type { Metadata } from "next";
import { MsPolicyPage } from "@/components/ms-pages";
import { msPageMetadata } from "@/lib/ms-page-metadata";

export const metadata: Metadata = msPageMetadata(
  "Polisi Pemulangan & Bayaran Balik | Kesihatan Lelaki",
  "Polisi pemulangan, bayaran balik, pertukaran dan pembatalan masih menunggu pengesahan pemilik perniagaan.",
  "/polisi-pemulangan",
);

export default function RefundPage() {
  return <MsPolicyPage type="refunds" />;
}

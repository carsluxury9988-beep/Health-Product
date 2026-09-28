import type { Metadata } from "next";
import { MsPolicyPage } from "@/components/ms-pages";
import { msPageMetadata } from "@/lib/ms-page-metadata";

export const metadata: Metadata = msPageMetadata(
  "Terma & Syarat | Kesihatan Lelaki",
  "Draf terma maklumat produk, permintaan pesanan, harga dan penghantaran. Semakan pemilik dan undang-undang diperlukan.",
  "/terma-syarat",
);

export default function TermsPage() {
  return <MsPolicyPage type="terms" />;
}

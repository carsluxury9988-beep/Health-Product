import type { Metadata } from "next";
import { MsFaqPage } from "@/components/ms-pages";
import { msPageMetadata } from "@/lib/ms-page-metadata";

export const metadata: Metadata = msPageMetadata(
  "Soalan Lazim | Produk, Pesanan & Penghantaran",
  "Jawapan tentang produk kesejahteraan lelaki, harga, penghantaran percuma, COD dan cara membuat permintaan pesanan.",
  "/soalan-lazim",
);

export default function FaqPage() {
  return <MsFaqPage />;
}

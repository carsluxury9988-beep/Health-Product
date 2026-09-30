import type { Metadata } from "next";
import { MsHomePage } from "@/components/ms-pages";
import { msPageMetadata } from "@/lib/ms-page-metadata";

export const metadata: Metadata = msPageMetadata(
  "Produk Kesihatan Lelaki Malaysia | RM159 COD Penghantaran Percuma",
  "Beli produk kesihatan lelaki di Malaysia: Magnum Pump, Ultrahot, Horsemen dan Hammer of Thor pada RM159. Penghantaran percuma ke seluruh Malaysia dan pilihan COD. Pesan terus melalui borang e-mel.",
  "/",
);

export default function HomePage() {
  return <MsHomePage />;
}

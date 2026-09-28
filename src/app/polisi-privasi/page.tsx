import type { Metadata } from "next";
import { MsPolicyPage } from "@/components/ms-pages";
import { msPageMetadata } from "@/lib/ms-page-metadata";

export const metadata: Metadata = msPageMetadata(
  "Polisi Privasi | Kesihatan Lelaki",
  "Draf tentang maklumat yang dikumpulkan oleh borang pesanan dan hubungan serta cara penggunaannya. Menunggu semakan pemilik.",
  "/polisi-privasi",
);

export default function PrivacyPage() {
  return <MsPolicyPage type="privacy" />;
}

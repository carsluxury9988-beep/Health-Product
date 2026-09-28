import type { Metadata } from "next";
import { MsAboutPage } from "@/components/ms-pages";
import { msPageMetadata } from "@/lib/ms-page-metadata";

export const metadata: Metadata = msPageMetadata(
  "Tentang Kami | Kesejahteraan Lelaki Malaysia",
  "Ketahui pendekatan kami terhadap maklumat yang jelas, pesanan mudah dan khidmat pelanggan di seluruh Malaysia.",
  "/tentang-kami",
);

export default function AboutPage() {
  return <MsAboutPage />;
}

import type { Metadata } from "next";
import { MsBlogPage } from "@/components/ms-pages";
import { msPageMetadata } from "@/lib/ms-page-metadata";

export const metadata: Metadata = msPageMetadata(
  "Blog Kesejahteraan Lelaki | Penjagaan Diri & Hubungan",
  "Bacaan umum tentang penjagaan diri, hubungan dan pilihan bermaklumat. Bukan nasihat perubatan atau dakwaan khusus produk.",
  "/blog",
);

export default function BlogPage() {
  return <MsBlogPage />;
}

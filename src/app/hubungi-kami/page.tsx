import type { Metadata } from "next";
import { MsContactPage } from "@/components/ms-pages";
import { msPageMetadata } from "@/lib/ms-page-metadata";

export const metadata: Metadata = msPageMetadata(
  "Hubungi Kami | Kesihatan Lelaki",
  "Hubungi pasukan kami tentang pesanan atau produk. Gunakan borang pertanyaan khidmat pelanggan.",
  "/hubungi-kami",
);

export default function ContactPage() {
  return <MsContactPage />;
}

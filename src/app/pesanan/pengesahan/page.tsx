import type { Metadata } from "next";
import { MsConfirmationPage } from "@/components/ms-pages";
import { msPageMetadata } from "@/lib/ms-page-metadata";

export const metadata: Metadata = {
  ...msPageMetadata("Pengesahan Permintaan Pesanan", "Butiran permintaan pesanan dan langkah seterusnya.", "/pesanan/pengesahan"),
  robots: { index: false, follow: false },
};

export default function ConfirmationPage() {
  return <MsConfirmationPage />;
}

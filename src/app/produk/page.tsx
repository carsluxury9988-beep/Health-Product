import type { Metadata } from "next";
import { MsProductsPage } from "@/components/ms-pages";
import { msPageMetadata } from "@/lib/ms-page-metadata";

export const metadata: Metadata = msPageMetadata(
  "Produk Kesihatan Lelaki Malaysia | Magnum Pump Ultrahot Horsemen Hammer of Thor",
  "Lihat Magnum Pump, Ultrahot, Horsemen dan Hammer of Thor. Setiap produk RM159 dengan penghantaran percuma ke seluruh Malaysia dan COD. Beli online di Lebih Yakin.",
  "/produk",
);

export default function ProductsPage() {
  return <MsProductsPage />;
}

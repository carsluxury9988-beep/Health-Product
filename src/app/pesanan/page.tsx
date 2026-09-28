import type { Metadata } from "next";
import { MsOrderPage } from "@/components/ms-pages";
import { products, getProduct } from "@/config/products";
import { msPageMetadata } from "@/lib/ms-page-metadata";

export const metadata: Metadata = msPageMetadata(
  "Buat Permintaan Pesanan | Kesihatan Lelaki",
  "Pilih produk pada harga RM159, masukkan butiran penghantaran dan hantar permintaan pesanan. Pasukan kami akan mengesahkan butiran.",
  "/pesanan",
);

export default async function OrderPage({ searchParams }: { searchParams: Promise<{ produk?: string }> }) {
  const params = await searchParams;
  const initialProduct = getProduct(params.produk ?? "")?.slug ?? products[0].slug;
  return <MsOrderPage initialProduct={initialProduct} />;
}

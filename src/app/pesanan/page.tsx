import type { Metadata } from "next";
import { MsOrderPage } from "@/components/ms-pages";
import { products, getProduct } from "@/config/products";
import { msPageMetadata } from "@/lib/ms-page-metadata";

export const metadata: Metadata = msPageMetadata(
  "Pesan Produk Kesihatan Lelaki Malaysia | Beli Online COD",
  "Isi borang pesanan mudah untuk Magnum Pump, Ultrahot, Horsemen atau Hammer of Thor. RM159, penghantaran percuma ke seluruh Malaysia, COD. Pesanan dihantar ke e-mel kedai.",
  "/pesanan",
);

export default async function OrderPage({ searchParams }: { searchParams: Promise<{ produk?: string }> }) {
  const params = await searchParams;
  const initialProduct = getProduct(params.produk ?? "")?.slug ?? products[0].slug;
  return <MsOrderPage initialProduct={initialProduct} />;
}

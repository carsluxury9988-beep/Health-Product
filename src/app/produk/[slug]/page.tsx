import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MsProductPage } from "@/components/ms-pages";
import { products, getProduct } from "@/config/products";
import { formatPrice } from "@/lib/format";
import { ms } from "@/i18n/ms";
import { msPageMetadata } from "@/lib/ms-page-metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return msPageMetadata(
    `${product.name} | Produk Kesejahteraan Lelaki`,
    `${product.name} pada harga ${formatPrice(product.price)}. ${ms.common.delivery}. Maklumat produk berdasarkan bungkusan rasmi yang disahkan.`,
    `/produk/${product.slug}`,
  );
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  if (!getProduct(slug)) notFound();
  return <MsProductPage slug={slug} />;
}

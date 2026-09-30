import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MsProductPage } from "@/components/ms-pages";
import { products, getProduct } from "@/config/products";
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
    product.seoTitleMs,
    product.seoDescriptionMs,
    `/produk/${product.slug}`,
    product.keywords,
  );
}

export default async function ProductPage({ params }: Props): Promise<ReturnType<typeof MsProductPage>> {
  const { slug } = await params;
  if (!getProduct(slug)) notFound();
  return <MsProductPage slug={slug} />;
}

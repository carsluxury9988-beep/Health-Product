import { ProductPage, productMetadata, productStaticParams } from "@/components/pages/product";

export const dynamicParams = false;

export function generateStaticParams() {
  return productStaticParams();
}

export async function generateMetadata({ params }: PageProps<"/produk/[slug]">) {
  const { slug } = await params;
  return productMetadata(slug, "ms");
}

export default async function Page({ params }: PageProps<"/produk/[slug]">) {
  const { slug } = await params;
  return <ProductPage slug={slug} locale="ms" />;
}

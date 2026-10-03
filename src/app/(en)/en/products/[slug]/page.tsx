import { ProductPage, productMetadata, productStaticParams } from "@/components/pages/product";

export const dynamicParams = false;

export function generateStaticParams() {
  return productStaticParams();
}

export async function generateMetadata({ params }: PageProps<"/en/products/[slug]">) {
  const { slug } = await params;
  return productMetadata(slug, "en");
}

export default async function Page({ params }: PageProps<"/en/products/[slug]">) {
  const { slug } = await params;
  return <ProductPage slug={slug} locale="en" />;
}

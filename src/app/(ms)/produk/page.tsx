import { ProductsPage, productsMetadata } from "@/components/pages/products";

export const metadata = productsMetadata("ms");

export default function Page() {
  return <ProductsPage locale="ms" />;
}

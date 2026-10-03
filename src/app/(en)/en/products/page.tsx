import { ProductsPage, productsMetadata } from "@/components/pages/products";

export const metadata = productsMetadata("en");

export default function Page() {
  return <ProductsPage locale="en" />;
}

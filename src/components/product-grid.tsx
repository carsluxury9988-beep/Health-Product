import { products } from "@/config/products";
import { ProductCard } from "@/components/product-card";
import type { Locale } from "@/i18n";

export function ProductGrid({ locale = "ms" }: { locale?: Locale }) {
  return (
    <div className="product-grid">
      {products.map((product) => <ProductCard key={product.id} product={product} locale={locale} />)}
    </div>
  );
}

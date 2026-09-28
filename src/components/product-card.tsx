import Link from "next/link";
import type { Product } from "@/config/products";
import { formatPrice } from "@/lib/format";
import { ProductArtwork } from "@/components/product-artwork";
import { TrackedOrderLink } from "@/components/tracked-order-link";
import { getMessages, type Locale } from "@/i18n";

export function ProductCard({ product, locale = "ms" }: { product: Product; locale?: Locale }) {
  const t = getMessages(locale);
  const productBase = locale === "en" ? "/en/products" : "/produk";
  const orderPath = locale === "en" ? "/en/order" : "/pesanan";
  return (
    <article className="product-card">
      <Link className="product-card-image-link" href={`${productBase}/${product.slug}`} aria-label={`${t.nav.view}: ${product.name}`}>
        <ProductArtwork name={product.name} images={product.images} locale={locale} sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1000px) 50vw, 25vw" />
        <span className="product-index">{product.id.slice(0, 2).toUpperCase()}</span>
      </Link>
      <div className="product-card-copy">
        <div className="product-card-heading">
          <h3><Link href={`${productBase}/${product.slug}`}>{product.name}</Link></h3>
          <span className="price">{formatPrice(product.price)}</span>
        </div>
        <p>{t.home.productDescriptions[product.id] ?? t.common.packaging}</p>
        <div className="product-card-actions">
          <TrackedOrderLink className="button button-dark card-order-button" href={`${orderPath}?${locale === "en" ? "product" : "produk"}=${product.slug}`} productId={product.id} productName={product.name} price={product.price}>{t.nav.order} <span aria-hidden="true">↗</span></TrackedOrderLink>
          <Link className="text-link card-details-link" href={`${productBase}/${product.slug}`}>{t.nav.view} <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </article>
  );
}

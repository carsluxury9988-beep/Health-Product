import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/config/products";
import { getMessages, type Locale } from "@/i18n";
import { productPath } from "@/i18n/routes";
import { formatRinggit, productOrderUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function ProductCard({ product, locale, priority = false, headingLevel = "h3" }: { product: Product; locale: Locale; priority?: boolean; headingLevel?: "h2" | "h3" }) {
  const t = getMessages(locale);
  const href = productPath(product.slug, locale);
  const Heading = headingLevel;
  return (
    <article className="product-card">
      <Link href={href} className="product-card-media" tabIndex={-1} aria-hidden="true">
        <Image src={product.packImage} alt="" width={420} height={760} sizes="(max-width: 640px) 42vw, (max-width: 1024px) 30vw, 240px" priority={priority} />
      </Link>
      <div className="product-card-body">
        <Heading className="product-card-title"><Link href={href}>{product.name}</Link></Heading>
        <p className="product-card-price">
          <strong>{formatRinggit(product.price)}</strong> <span>/ {t.common.perUnit}</span>
        </p>
        <ul className="chips" aria-label={`${t.common.freeDelivery}, ${t.common.codShort}`}>
          <li>{t.common.freeShort}</li>
          <li>{t.common.codShort}</li>
        </ul>
        <div className="product-card-actions">
          <WhatsAppLink href={productOrderUrl(product, 1, locale)} source="product_card" product={product.name} className="btn btn-wa btn-block" ariaLabel={`${t.productCard.order} ${product.name} — WhatsApp`}>
            <WhatsAppIcon size={18} /> {t.productCard.order}
          </WhatsAppLink>
          <Link href={href} className="btn btn-ghost btn-block">{t.productCard.details}<span className="sr-only"> — {product.name}</span></Link>
        </div>
      </div>
    </article>
  );
}

export function ProductGrid({ items, locale, headingLevel = "h3", priorityCount = 0 }: { items: readonly Product[]; locale: Locale; headingLevel?: "h2" | "h3"; priorityCount?: number }) {
  return (
    <div className="product-grid">
      {items.map((product, index) => (
        <ProductCard key={product.id} product={product} locale={locale} headingLevel={headingLevel} priority={index < priorityCount} />
      ))}
    </div>
  );
}

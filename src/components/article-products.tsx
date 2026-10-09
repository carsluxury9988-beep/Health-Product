import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/content/articles";
import type { Locale } from "@/i18n";
import { productPath } from "@/i18n/routes";
import { articleProducts, productBoxCopy } from "@/lib/article-products";
import { formatRinggit, productOrderUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";
import { WhatsAppLink } from "@/components/whatsapp-link";

/** Small shop box at the end of buying/relationships articles. Renders nothing for other topics. */
export function ArticleProducts({ article, locale }: { article: Article; locale: Locale }) {
  const items = articleProducts(article);
  if (items.length === 0) return null;
  const copy = productBoxCopy[locale];
  return (
    <aside className="container narrow article-products" aria-labelledby="article-products-heading" data-article-products>
      <div className="article-products-head">
        <h2 id="article-products-heading">{copy.heading}</h2>
        <p>{copy.note}</p>
      </div>
      <ul className="article-products-list">
        {items.map((product) => {
          const href = productPath(product.slug, locale);
          return (
            <li key={product.id} className="article-product">
              <Link href={href} className="article-product-media" tabIndex={-1} aria-hidden="true">
                <Image src={product.packImage} alt="" width={420} height={760} sizes="64px" />
              </Link>
              <div className="article-product-body">
                <h3><Link href={href}>{product.name}</Link></h3>
                <p className="article-product-price"><strong>{formatRinggit(product.price)}</strong></p>
                <p className="article-product-perks">{copy.perks}</p>
                <div className="article-product-actions">
                  <Link href={href} className="btn btn-ghost btn-sm">{copy.view}<span className="sr-only"> — {product.name}</span></Link>
                  <WhatsAppLink href={productOrderUrl(product, 1, locale)} source="article_products" product={product.name} value={product.price} className="btn btn-wa btn-sm" ariaLabel={`${copy.order} — ${product.name}`}>
                    <WhatsAppIcon size={16} /> {copy.order}
                  </WhatsAppLink>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

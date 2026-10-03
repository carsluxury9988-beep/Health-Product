import Link from "next/link";
import { products } from "@/config/products";
import { getMessages, type Locale } from "@/i18n";
import { routePath } from "@/i18n/routes";
import { ProductGrid } from "@/components/product-card";

export function NotFoundContent({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <main id="main-content" className="section">
      <div className="container status-page">
        <p className="eyebrow">404</p>
        <h1>{t.errors.notFoundTitle}</h1>
        <p className="page-lead">{t.errors.notFoundBody}</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href={routePath("home", locale)}>{t.errors.backHome}</Link>
          <Link className="btn btn-ghost" href={routePath("products", locale)}>{t.common.viewProducts}</Link>
        </div>
      </div>
      <div className="container section-tight">
        <ProductGrid items={products} locale={locale} />
      </div>
    </main>
  );
}

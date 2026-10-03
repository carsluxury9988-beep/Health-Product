import type { Metadata } from "next";
import { Suspense } from "react";
import { getMessages, type Locale } from "@/i18n";
import { staticRoutes } from "@/i18n/routes";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { OrderForm } from "@/components/order-form";
import { PageHeader } from "@/components/page-header";

export function orderMetadata(locale: Locale): Metadata {
  const t = getMessages(locale);
  return pageMetadata({ locale, paths: staticRoutes.order, title: t.seo.order.title, description: t.seo.order.description });
}

export function OrderPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <main id="main-content">
      <Breadcrumbs locale={locale} items={[{ label: t.nav.order }]} />
      <PageHeader title={t.orderPage.title} lead={t.orderPage.lead} />
      <section className="section-tight">
        <div className="container narrow">
          <Suspense fallback={<div className="form-card" aria-busy="true" />}>
            <OrderForm locale={locale} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}

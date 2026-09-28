"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useOrderConfirmation } from "@/components/order-confirmation-provider";
import { formatPrice } from "@/lib/format";
import { getMessages, type Locale } from "@/i18n";

export function OrderConfirmation({ locale = "en" }: { locale?: Locale }) {
  const { summary, clearSummary } = useOrderConfirmation();
  const t = getMessages(locale);

  useEffect(() => () => clearSummary(), [clearSummary]);

  if (!summary) {
    return (
      <section className="confirmation-empty container">
        <p className="eyebrow"><span className="eyebrow-line" /> {t.order.receivedTitle}</p>
        <h1>{locale === "ms" ? <>Halaman ini tersedia<br /><em>selepas permintaan pesanan.</em></> : <>This page is available<br /><em>after an order request.</em></>}</h1>
        <p>{t.order.emptyBody}</p>
        <Link className="button button-dark" href={locale === "en" ? "/en/order" : "/pesanan"}>{t.order.start} <span aria-hidden="true">↗</span></Link>
      </section>
    );
  }

  const total = summary.unitPrice * summary.quantity + summary.deliveryFee;

  return (
    <section className="confirmation-layout container">
      <div className="confirmation-heading">
        <span className="success-mark" aria-hidden="true">✓</span>
        <p className="eyebrow"><span className="eyebrow-line" /> {t.order.receivedTitle}</p>
        <h1>{locale === "ms" ? <>Terima kasih,<br /><em>{summary.name.split(" ")[0]}.</em></> : <>Thank you,<br /><em>{summary.name.split(" ")[0]}.</em></>}</h1>
        <p>{t.order.confirmationBody}</p>
        <span className="order-reference">{t.order.reference} {summary.reference}</span>
      </div>
      <div className="confirmation-card">
        <h2>{t.order.summary}</h2>
        <dl>
          <div><dt>{t.order.product}</dt><dd>{summary.productName}</dd></div>
          <div><dt>{t.order.quantity}</dt><dd>{summary.quantity}</dd></div>
          <div><dt>{t.order.price}</dt><dd>{formatPrice(summary.unitPrice)}</dd></div>
          <div><dt>{t.order.delivery}</dt><dd>{summary.deliveryFee === 0 ? t.order.free : formatPrice(summary.deliveryFee)}</dd></div>
          <div><dt>{t.order.payment}</dt><dd>{t.order.payment}</dd></div>
          <div className="summary-total"><dt>{t.order.total}</dt><dd>{formatPrice(total)}</dd></div>
        </dl>
        <h3>{t.order.deliveryDetails}</h3>
        <address>
          {summary.name}<br />
          {summary.phone}<br />
          {summary.email && <>{summary.email}<br /></>}
          {summary.address}<br />
          {summary.city}, {summary.stateLabel}
          {summary.notes && <><br />{summary.notes}</>}
        </address>
      </div>
      <div className="confirmation-next">
        <p>{t.order.next}</p>
        <Link className="text-link" href={locale === "en" ? "/en/products" : "/produk"}>{t.nav.continue} <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}

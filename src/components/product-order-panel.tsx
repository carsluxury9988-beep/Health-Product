"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/config/products";
import { getMessages, type Locale } from "@/i18n";
import { routePath } from "@/i18n/routes";
import { formatRinggit, MAX_QUANTITY, productOrderUrl } from "@/lib/whatsapp";
import { MinusIcon, PlusIcon, WhatsAppIcon } from "@/components/icons";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function ProductOrderPanel({ product, locale }: { product: Pick<Product, "name" | "price" | "slug">; locale: Locale }) {
  const t = getMessages(locale);
  const [quantity, setQuantity] = useState(1);
  const total = product.price * quantity;

  return (
    <div className="order-panel">
      <div className="order-panel-row">
        <span className="order-panel-label" id="qty-label">{t.common.quantity}</span>
        <div className="stepper" role="group" aria-labelledby="qty-label">
          <button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))} disabled={quantity <= 1} aria-label={t.common.decrease}><MinusIcon size={18} /></button>
          <output aria-live="polite">{quantity}</output>
          <button type="button" onClick={() => setQuantity((q) => Math.min(MAX_QUANTITY, q + 1))} disabled={quantity >= MAX_QUANTITY} aria-label={t.common.increase}><PlusIcon size={18} /></button>
        </div>
      </div>
      <div className="order-panel-row order-panel-total">
        <span>{t.common.total}</span>
        <strong>{formatRinggit(total)}</strong>
      </div>
      <WhatsAppLink href={productOrderUrl(product, quantity, locale)} source="product_page" product={product.name} className="btn btn-wa btn-lg btn-block">
        <WhatsAppIcon /> {t.common.whatsappOrder}
      </WhatsAppLink>
      <p className="order-panel-hint">{t.productPage.orderHint}</p>
      <Link href={`${routePath("order", locale)}?product=${product.slug}`} className="text-link">{t.common.orderForm}</Link>
    </div>
  );
}

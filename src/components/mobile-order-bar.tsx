"use client";

import Link from "next/link";
import { formatPrice } from "@/lib/format";
import { products } from "@/config/products";
import { store } from "@/config/store";
import { getMessages, type Locale } from "@/i18n";
import { usePathname } from "next/navigation";

export function MobileOrderBar() {
  const pathname = usePathname() ?? "/";
  const locale: Locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ms";
  const t = getMessages(locale);
  return (
    <div className="mobile-order-bar">
      <div>
        <span>{t.common.deliveryShort}</span>
        <strong>{store.codAvailable ? `${t.nav.order} · ${formatPrice(products[0].price)}` : t.nav.contact}</strong>
      </div>
      <Link className="button button-dark" href={store.codAvailable ? (locale === "en" ? "/en/order" : "/pesanan") : (locale === "en" ? "/en/contact" : "/hubungi-kami")}>
        {store.codAvailable ? t.nav.order : t.nav.contact} <span aria-hidden="true">↗</span>
      </Link>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { store } from "@/config/store";
import { getMessages, type Locale } from "@/i18n";
import { localizedPath } from "@/i18n/routes";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const locale: Locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ms";
  const t = getMessages(locale);
  const navigation = [
    { href: locale === "en" ? "/en" : "/", label: t.nav.home },
    { href: locale === "en" ? "/en/products" : "/produk", label: t.nav.products },
    { href: locale === "en" ? "/en/about-us" : "/tentang-kami", label: t.nav.about },
    { href: locale === "en" ? "/en/faq" : "/soalan-lazim", label: t.nav.faq },
    { href: locale === "en" ? "/en/contact" : "/hubungi-kami", label: t.nav.contact },
  ];

  return (
    <header className="site-header">
      <div className="utility-bar">
        <span>{t.common.delivery}</span>
        {store.codAvailable && <>
          <span className="utility-divider" aria-hidden="true">·</span>
          <span>{t.common.codShort}</span>
        </>}
      </div>
      <div className="header-inner">
        <Link
          className="wordmark"
          href={locale === "en" ? "/en" : "/"}
          aria-label={locale === "ms" ? `${store.displayBrandNameMs}, laman utama` : `${store.brandName}, home`}
          onClick={() => setMenuOpen(false)}
        >
          {store.logoPath ? <Image className="wordmark-image" src={store.logoPath} width={36} height={36} alt="" /> : <span className="wordmark-mark" aria-hidden="true">H</span>}
          <span>{t.brand}</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">{menuOpen ? t.nav.menuClose : t.nav.menuOpen}</span>
          <span className={menuOpen ? "menu-lines is-open" : "menu-lines"} aria-hidden="true" />
        </button>
        <nav
          id="main-navigation"
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label={t.nav.mainNavigation}
        >
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="button button-small button-dark nav-order" href={store.codAvailable ? (locale === "en" ? "/en/order" : "/pesanan") : (locale === "en" ? "/en/contact" : "/hubungi-kami")} onClick={() => setMenuOpen(false)}>
            {store.codAvailable ? t.nav.order : t.nav.contact}
            <span aria-hidden="true">↗</span>
          </Link>
          <div className="language-switcher" aria-label={locale === "ms" ? "Pilihan bahasa" : "Language selection"}>
            <Link href={localizedPath(pathname, "ms")} lang="ms-MY" aria-current={locale === "ms" ? "page" : undefined}>BM</Link>
            <span aria-hidden="true">|</span>
            <Link href={localizedPath(pathname, "en")} lang="en-MY" aria-current={locale === "en" ? "page" : undefined}>English</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

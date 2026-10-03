"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getMessages, type Locale } from "@/i18n";
import { localizedPath, routePath, type RouteKey } from "@/i18n/routes";
import { enquiryUrl } from "@/lib/whatsapp";
import { BrandMark } from "@/components/brand-mark";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/icons";
import { WhatsAppLink } from "@/components/whatsapp-link";

const navKeys: RouteKey[] = ["products", "howToOrder", "faq", "blog", "contact"];

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const pathname = usePathname() ?? routePath("home", locale);
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const labels: Record<string, string> = {
    products: t.nav.products,
    howToOrder: t.nav.howToOrder,
    faq: t.nav.faq,
    blog: t.nav.blog,
    contact: t.nav.contact,
  };

  const isActive = (key: RouteKey) => {
    const href = routePath(key, locale);
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href={routePath("home", locale)} className="brand" aria-label={`${t.brand} — ${t.common.home}`}>
          <BrandMark />
          <span className="brand-name">{t.brand}</span>
        </Link>

        <nav className={`main-nav${open ? " is-open" : ""}`} id="main-nav" aria-label={t.common.mainNavigation}>
          <ul>
            {navKeys.map((key) => (
              <li key={key}>
                <Link href={routePath(key, locale)} aria-current={isActive(key) ? "page" : undefined}>{labels[key]}</Link>
              </li>
            ))}
          </ul>
          <WhatsAppLink href={enquiryUrl(locale)} source="mobile_menu" className="btn btn-wa btn-block nav-wa">
            <WhatsAppIcon /> {t.common.whatsappChat}
          </WhatsAppLink>
        </nav>

        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label={t.common.language}>
            <Link href={localizedPath(pathname, "ms")} hrefLang="ms-MY" lang="ms-MY" aria-current={locale === "ms" ? "true" : undefined}>BM</Link>
            <Link href={localizedPath(pathname, "en")} hrefLang="en-MY" lang="en-MY" aria-current={locale === "en" ? "true" : undefined}>EN</Link>
          </div>
          <WhatsAppLink href={enquiryUrl(locale)} source="header" className="btn btn-wa btn-sm header-wa">
            <WhatsAppIcon size={18} /> <span>{t.common.whatsapp}</span>
          </WhatsAppLink>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? t.common.menuClose : t.common.menuOpen}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}

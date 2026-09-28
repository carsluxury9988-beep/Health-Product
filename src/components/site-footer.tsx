"use client";

import Link from "next/link";
import Image from "next/image";
import { store } from "@/config/store";
import { getMessages, type Locale } from "@/i18n";
import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname() ?? "/";
  const locale: Locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ms";
  const t = getMessages(locale);
  const prefix = locale === "en" ? "/en" : "";
  const links = [
    { href: locale === "en" ? "/en/products" : "/produk", label: t.nav.products },
    { href: locale === "en" ? "/en/about-us" : "/tentang-kami", label: t.nav.about },
    { href: locale === "en" ? "/en/contact" : "/hubungi-kami", label: t.nav.contact },
    { href: locale === "en" ? "/en/faq" : "/soalan-lazim", label: t.nav.faq },
    { href: `${prefix}${locale === "en" ? "/shipping" : "/penghantaran"}`, label: t.nav.shipping },
    { href: `${prefix}${locale === "en" ? "/privacy-policy" : "/polisi-privasi"}`, label: t.nav.privacy },
    { href: `${prefix}${locale === "en" ? "/terms" : "/terma-syarat"}`, label: t.nav.terms },
    { href: `${prefix}${locale === "en" ? "/refund-policy" : "/polisi-pemulangan"}`, label: t.nav.refunds },
    { href: `${prefix}/blog`, label: t.nav.blog },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-top container">
        <div className="footer-intro">
          <Link href={locale === "en" ? "/en" : "/"} className="wordmark footer-wordmark">
            {store.logoPath ? <Image className="wordmark-image" src={store.logoPath} width={36} height={36} alt="" /> : <span className="wordmark-mark" aria-hidden="true">H</span>}
            <span>{t.brand}</span>
          </Link>
          <p>{t.footer.tone}</p>
          <a className="footer-email" href={`mailto:${store.contactEmail}`}>{store.contactEmail}</a>
          {store.address && <p>{store.address}</p>}
        </div>
        <div className="footer-links">
          <p className="eyebrow">{t.footer.explore}</p>
          <div className="footer-link-grid">
            {links.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </div>
        </div>
        <div className="footer-service">
          <p className="eyebrow">{t.footer.pace}</p>
          <p>{t.footer.delivery}</p>
          {store.codAvailable && <p>{t.common.codAvailability}</p>}
          <Link className="text-link" href={locale === "en" ? "/en/contact" : "/hubungi-kami"}>{t.nav.support} <span aria-hidden="true">↗</span></Link>
          <div className="footer-socials">
            {Object.entries(store.socialLinks).map(([network, url]) => url ? (
              <a href={url} key={network} target="_blank" rel="noopener noreferrer">{network}</a>
            ) : null)}
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} {t.brand}. {t.footer.copyright}</span>
        <span lang={locale === "en" ? "en" : "ms"}>{t.footer.lang}</span>
      </div>
    </footer>
  );
}

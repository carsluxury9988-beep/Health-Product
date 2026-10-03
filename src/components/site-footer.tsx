import Link from "next/link";
import { products } from "@/config/products";
import { store } from "@/config/store";
import { getMessages, type Locale } from "@/i18n";
import { productPath, routePath } from "@/i18n/routes";
import { enquiryUrl } from "@/lib/whatsapp";
import { BrandMark } from "@/components/brand-mark";
import { MailIcon, WhatsAppIcon } from "@/components/icons";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const year = 2026;
  // TODO(owner): legal name, SSM number and address appear here automatically once set in src/config/store.ts.
  const identity = [store.legalBusinessName, store.ssmRegistrationNumber && `SSM: ${store.ssmRegistrationNumber}`, store.address].filter(Boolean);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href={routePath("home", locale)} className="brand brand-light">
            <BrandMark />
            <span className="brand-name">{t.brand}</span>
          </Link>
          <p>{t.footer.about}</p>
          <WhatsAppLink href={enquiryUrl(locale)} source="footer" className="btn btn-wa btn-sm">
            <WhatsAppIcon size={18} /> {store.whatsappDisplay}
          </WhatsAppLink>
        </div>
        <div>
          <h2 className="footer-title">{t.footer.shop}</h2>
          <ul className="footer-links">
            {products.map((product) => (
              <li key={product.id}><Link href={productPath(product.slug, locale)}>{product.name}</Link></li>
            ))}
            <li><Link href={routePath("products", locale)}>{t.common.allProducts}</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-title">{t.footer.help}</h2>
          <ul className="footer-links">
            <li><Link href={routePath("howToOrder", locale)}>{t.nav.howToOrder}</Link></li>
            <li><Link href={routePath("order", locale)}>{t.nav.order}</Link></li>
            <li><Link href={routePath("shipping", locale)}>{t.nav.shipping}</Link></li>
            <li><Link href={routePath("faq", locale)}>{t.nav.faq}</Link></li>
            <li><Link href={routePath("blog", locale)}>{t.nav.blog}</Link></li>
            <li><Link href={routePath("about", locale)}>{t.nav.about}</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-title">{t.footer.policies}</h2>
          <ul className="footer-links">
            <li><Link href={routePath("terms", locale)}>{t.nav.terms}</Link></li>
            <li><Link href={routePath("returns", locale)}>{t.nav.returns}</Link></li>
            <li><Link href={routePath("privacy", locale)}>{t.nav.privacy}</Link></li>
          </ul>
          <h2 className="footer-title footer-title-gap">{t.footer.contact}</h2>
          <ul className="footer-links footer-contact">
            <li><WhatsAppIcon size={16} /> <WhatsAppLink href={enquiryUrl(locale)} source="footer_text">{store.whatsappDisplay}</WhatsAppLink></li>
            <li><MailIcon size={16} /> <a href={`mailto:${store.contactEmail}`}>{store.contactEmail}</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {year} {t.brand}. {t.footer.rights}{identity.length ? ` ${identity.join(" · ")}` : ""}</p>
        <p>{t.common.notMedical}</p>
      </div>
    </footer>
  );
}

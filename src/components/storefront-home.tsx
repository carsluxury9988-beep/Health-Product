import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/product-grid";
import { HeroArtwork } from "@/components/hero-artwork";
import { store } from "@/config/store";
import { products } from "@/config/products";
import { getMessages, type Locale } from "@/i18n";
import { formatPrice } from "@/lib/format";

export function StorefrontHome({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const paths = locale === "en"
    ? { products: "/en/products", order: "/en/order", about: "/en/about-us", contact: "/en/contact", faq: "/en/faq" }
    : { products: "/produk", order: "/pesanan", about: "/tentang-kami", contact: "/hubungi-kami", faq: "/soalan-lazim" };
  const catalogueLine = locale === "ms"
    ? "Magnum Pump, Ultrahot, Horsemen dan Hammer of Thor — RM159, COD, hantar percuma ke seluruh Malaysia."
    : "Magnum Pump, Ultrahot, Horsemen and Hammer of Thor — RM159, COD, free delivery across Malaysia.";

  return (
    <main id="main-content">
      <section className="hero-section">
        <div className="hero-copy container">
          <p className="eyebrow"><span className="eyebrow-line" /> {t.home.eyebrow}</p>
          <h1>{t.home.heroTitleLine1}<br /><em>{t.home.heroTitleLine2}</em></h1>
          <p className="hero-description">{catalogueLine}</p>
          <p className="hero-description">{t.home.description}</p>
          <div className="hero-actions">
            <Link className="button button-dark" href={paths.products}>{t.home.primaryCta} <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href={paths.order}>{t.home.secondaryCta} <span aria-hidden="true">→</span></Link>
          </div>
          <div className="hero-note"><span className="note-mark" aria-hidden="true">✳</span><span>{formatPrice(products[0].price)} <i>·</i> {t.common.deliveryShort} <i>·</i> {t.common.codShort}</span></div>
        </div>
        <HeroArtwork locale={locale} />
        <div className="hero-bottom container">
          <span>{t.home.bottomLeft}</span>
          <span className="hero-bottom-right">{t.home.bottomRight}</span>
        </div>
      </section>

      <section className="trust-strip" aria-label={t.home.trustLabel}>
        <div className="container trust-strip-inner">
          {t.home.trust.map((item, index) => <span key={item}><b>0{index + 1}</b> {item}</span>)}
        </div>
      </section>

      <section className="section collection-section home-collection">
        <div className="container">
          <div className="section-heading-row">
            <div><p className="eyebrow"><span className="eyebrow-line" /> {t.home.collectionEyebrow}</p><h2>{t.home.collectionTitleLine1}<br /><em>{t.home.collectionTitleLine2}</em></h2></div>
            <div className="section-intro"><p>{t.home.collectionDescription}</p><Link className="text-link" href={paths.products}>{t.nav.seeAll} <span aria-hidden="true">↗</span></Link></div>
          </div>
          <ProductGrid locale={locale} />
          <p className="catalogue-note"><span aria-hidden="true">i</span> {t.home.imageNotice}</p>
        </div>
      </section>

      <section className="section home-benefits">
        <div className="container">
          <div className="section-heading-row service-heading">
            <div><p className="eyebrow"><span className="eyebrow-line" /> {t.home.whyEyebrow}</p><h2>{t.home.whyTitleLine1}<br /><em>{t.home.whyTitleLine2}</em></h2></div>
            <p className="section-intro">{t.home.whyIntro}</p>
          </div>
          <div className="assurance-grid home-assurance-grid">
            {t.home.whyPoints.map(([number, title, text]) => <article className="assurance-card" key={number}><span className="assurance-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="relationship-section home-relationship">
        <div className="container relationship-inner">
          {store.heroImagePath ? (
            <div className="home-relationship-photo">
              <Image
                src={store.heroImagePath}
                alt={t.home.relationshipImageAlt}
                fill
                sizes="(max-width: 760px) calc(100vw - 40px), 35vw"
              />
            </div>
          ) : (
            <div className="relationship-mark" aria-hidden="true"><span className="relationship-circle circle-one" /><span className="relationship-circle circle-two" /><span className="relationship-spark">✳</span></div>
          )}
          <div className="relationship-copy">
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> {t.home.relationshipEyebrow}</p>
            <h2>{t.home.relationshipTitleLine1}<br /><em>{t.home.relationshipTitleLine2}</em></h2>
            <p>{t.home.relationshipBody}</p>
            <Link className="button button-light" href={paths.products}>{t.home.relationshipCta} <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section home-order-process">
        <div className="container">
          <div className="section-heading-row">
            <div><p className="eyebrow"><span className="eyebrow-line" /> {t.home.processEyebrow}</p><h2>{t.home.processTitleLine1}<br /><em>{t.home.processTitleLine2}</em></h2></div>
            <p className="section-intro">{t.home.processIntro}</p>
          </div>
          <div className="home-process-grid">
            {t.home.processSteps.map(([number, title, body]) => <article className="home-process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section home-faq">
        <div className="container home-faq-inner">
          <div className="home-faq-heading">
            <p className="eyebrow"><span className="eyebrow-line" /> {t.home.faqEyebrow}</p>
            <h2>{t.home.faqTitleLine1}<br /><em>{t.home.faqTitleLine2}</em></h2>
            <Link className="text-link" href={paths.faq}>{t.home.faqCta} <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="faq-list">
            {t.home.previewFaqs.map(([question, answer]) => <details className="faq-item" key={question}><summary><span>{question}</span><span className="faq-plus" aria-hidden="true" /></summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="closing-cta home-contact-cta">
        <div className="container closing-cta-inner">
          <div>
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> {t.home.contactEyebrow}</p>
            <h2>{t.home.contactTitleLine1}<br /><em>{t.home.contactTitleLine2}</em></h2>
            <p className="home-contact-email">{t.home.contactBody} <a href={`mailto:${store.contactEmail}`}>{store.contactEmail}</a></p>
          </div>
          <div className="home-contact-actions">
            <Link className="button button-light" href={paths.contact}>{t.home.contactCta} <span aria-hidden="true">↗</span></Link>
            <a className="text-link home-email-link" href={`mailto:${store.contactEmail}`}>{t.home.emailCta} <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </main>
  );
}

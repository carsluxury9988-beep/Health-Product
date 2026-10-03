import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { products } from "@/config/products";
import { sortedArticles } from "@/content/articles";
import { getMessages, type Locale } from "@/i18n";
import { routePath, staticRoutes } from "@/i18n/routes";
import { organizationSchema, websiteSchema, itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { enquiryUrl, productOrderMessage } from "@/lib/whatsapp";
import { ArticleCard } from "@/components/article-card";
import { FaqList } from "@/components/faq-list";
import { ArrowRightIcon, CheckIcon, featureIcons, WhatsAppIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { ProductGrid } from "@/components/product-card";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function homeMetadata(locale: Locale): Metadata {
  const t = getMessages(locale);
  return pageMetadata({ locale, paths: staticRoutes.home, title: t.seo.home.title, description: t.seo.home.description, absoluteTitle: true, image: `/og/home-${locale}.png` });
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const h = t.home;
  const faqPreview = t.faqPage.groups.flatMap((group) => group.items).filter((_, index) => [0, 4, 5, 6, 8, 10].includes(index));
  const sample = productOrderMessage(products[0], 1, locale).split("\n");

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">{h.eyebrow}</p>
            <h1>{h.title}</h1>
            <p className="hero-lead">{h.lead}</p>
            <div className="cta-row">
              <WhatsAppLink href={enquiryUrl(locale)} source="hero" className="btn btn-wa btn-lg">
                <WhatsAppIcon /> {t.common.whatsappOrder}
              </WhatsAppLink>
              <Link href="#produk" className="btn btn-outline-light btn-lg">{t.common.viewProducts} <ArrowRightIcon size={18} /></Link>
            </div>
            <ul className="hero-trust">
              {h.trust.map((item) => (
                <li key={item}><CheckIcon size={18} /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="hero-media">
            <div className="hero-price" aria-hidden="true">
              <span>RM</span>159<small>/{t.common.perUnit}</small>
            </div>
            <Image src="/home/packs-lineup.webp" alt={h.heroImageAlt} width={1400} height={860} priority sizes="(max-width: 900px) 92vw, 560px" />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section" id="produk" aria-labelledby="products-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{h.productsEyebrow}</p>
            <h2 id="products-title">{h.productsTitle}</h2>
            <p>{h.productsLead}</p>
          </div>
          <ProductGrid items={products} locale={locale} />
        </div>
      </section>

      {/* Why */}
      <section className="section section-muted" aria-labelledby="why-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{h.whyEyebrow}</p>
            <h2 id="why-title">{h.whyTitle}</h2>
          </div>
          <div className="feature-grid">
            {h.why.map((item) => {
              const Icon = featureIcons[item.icon as keyof typeof featureIcons];
              return (
                <div className="feature" key={item.title}>
                  <span className="feature-icon"><Icon /></span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to order */}
      <section className="section" aria-labelledby="steps-title">
        <div className="container steps-grid">
          <div>
            <div className="section-head section-head-left">
              <p className="eyebrow">{h.stepsEyebrow}</p>
              <h2 id="steps-title">{h.stepsTitle}</h2>
            </div>
            <ol className="steps">
              {h.steps.map((step, index) => (
                <li key={step.title}>
                  <span className="step-num">{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link href={routePath("howToOrder", locale)} className="text-link">{t.nav.howToOrder} <ArrowRightIcon size={16} /></Link>
          </div>
          <figure className="chat-mock" aria-label={h.chatPreviewLabel}>
            <div className="chat-top">
              <span className="chat-avatar">LY</span>
              <div>
                <strong>{t.brand}</strong>
                <small>WhatsApp</small>
              </div>
            </div>
            <div className="chat-body">
              <div className="bubble bubble-out">
                {sample.map((line, index) => line ? <span key={index}>{line}</span> : <br key={index} />)}
              </div>
            </div>
            <figcaption>{h.chatPreviewLabel}</figcaption>
          </figure>
        </div>
      </section>

      {/* Delivery & COD */}
      <section className="section section-dark" aria-labelledby="delivery-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow eyebrow-light">{h.deliveryEyebrow}</p>
            <h2 id="delivery-title">{h.deliveryTitle}</h2>
          </div>
          <div className="delivery-grid">
            {h.delivery.map((item) => (
              <div className="delivery-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
          <p className="center"><Link href={routePath("shipping", locale)} className="text-link text-link-light">{h.deliveryLink} <ArrowRightIcon size={16} /></Link></p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" aria-labelledby="faq-title">
        <div className="container narrow">
          <div className="section-head">
            <p className="eyebrow">{h.faqEyebrow}</p>
            <h2 id="faq-title">{h.faqTitle}</h2>
          </div>
          <FaqList items={faqPreview} />
          <p className="center"><Link href={routePath("faq", locale)} className="text-link">{h.faqLink} <ArrowRightIcon size={16} /></Link></p>
        </div>
      </section>

      {/* Blog */}
      <section className="section section-muted" aria-labelledby="blog-title">
        <div className="container">
          <div className="section-head section-head-row">
            <div>
              <p className="eyebrow">{h.blogEyebrow}</p>
              <h2 id="blog-title">{h.blogTitle}</h2>
            </div>
            <Link href={routePath("blog", locale)} className="text-link">{h.blogLink} <ArrowRightIcon size={16} /></Link>
          </div>
          <div className="article-grid">
            {sortedArticles().slice(0, 3).map((article) => <ArticleCard key={article.key} article={article} locale={locale} />)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-band">
        <div className="container cta-band-inner">
          <div>
            <h2>{h.ctaTitle}</h2>
            <p>{h.ctaBody}</p>
          </div>
          <div className="cta-row">
            <WhatsAppLink href={enquiryUrl(locale)} source="final_cta" className="btn btn-wa btn-lg"><WhatsAppIcon /> {t.common.whatsappChat}</WhatsAppLink>
            <Link href={routePath("products", locale)} className="btn btn-outline-light btn-lg">{t.common.viewProducts}</Link>
          </div>
        </div>
      </section>

      {/* TODO(owner): add a customer reviews section only once real, verifiable reviews exist. */}
      <JsonLd data={[organizationSchema(locale), websiteSchema(locale), itemListSchema([...products], locale)]} />
    </main>
  );
}

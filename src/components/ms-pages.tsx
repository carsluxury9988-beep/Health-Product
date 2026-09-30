import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductGrid } from "@/components/product-grid";
import { ProductArtwork } from "@/components/product-artwork";
import { ContactForm } from "@/components/contact-form";
import { OrderForm } from "@/components/order-form";
import { OrderConfirmation } from "@/components/order-confirmation";
import { PolicyDraftNote } from "@/components/policy-draft-note";
import { StorefrontHome } from "@/components/storefront-home";
import { products, getProduct } from "@/config/products";
import { store } from "@/config/store";
import { ms } from "@/i18n/ms";
import { formatPrice } from "@/lib/format";

export function MsHomePage() {
  return <StorefrontHome locale="ms" />;
}

export function MsProductsPage() {
  return (
    <main id="main-content"><Breadcrumbs items={[{ label: "Produk" }]} />
      <section className="page-hero container"><p className="eyebrow"><span className="eyebrow-line" /> {ms.products.eyebrow}</p><h1>Produk kesihatan lelaki<br /><em>di Malaysia.</em></h1><p>Beli Magnum Pump, Ultrahot, Horsemen dan Hammer of Thor secara online. Setiap produk RM159, penghantaran percuma dan COD.</p><span className="page-hero-aside">{formatPrice(products[0].price)} setiap produk <i>·</i> {ms.common.delivery} <i>·</i> {ms.common.codShort}</span></section>
      <section className="section container products-page-grid"><ProductGrid locale="ms" /><p className="catalogue-note"><span aria-hidden="true">i</span> {ms.products.catalogueNote}</p></section>
    </main>
  );
}

export function MsProductPage({ slug }: { slug: string }) {
  const product = getProduct(slug);
  if (!product) return null;
  const related = products.filter((item) => item.id !== product.id);
  const paragraphs = product.descriptionMs.split("\n\n");
  return (
    <main id="main-content"><Breadcrumbs items={[{ label: "Produk", href: "/produk" }, { label: product.name }]} />
      <section className="product-detail container">
        <div className="product-detail-art"><ProductArtwork name={product.name} images={product.images} locale="ms" preload /></div>
        <div className="product-detail-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> {ms.product.eyebrow}</p><h1>{product.name} Malaysia</h1><p className="product-detail-price">{formatPrice(product.price)} <span>{ms.product.label}</span></p>
          {paragraphs.map((paragraph) => <p className="product-detail-description" key={paragraph}>{paragraph}</p>)}
          <p className="availability-note"><span className="status-dot" /> {ms.common.stockUnknown}</p>
          <div className="product-detail-facts"><div><span>{ms.product.delivery}</span><strong>{ms.common.delivery}</strong></div><div><span>{ms.product.payment}</span><strong>{ms.common.codShort}</strong></div><div><span>{ms.product.info}</span><strong>{ms.product.official}</strong></div></div>
          <Link className="button button-dark product-order-button" href={`/pesanan?produk=${product.slug}`}>{ms.product.order} {product.name} <span aria-hidden="true">↗</span></Link>
          <p className="product-cod-note">{ms.product.codNote}</p>
        </div>
      </section>
      <section className="section product-information-section"><div className="container product-information-grid">
        <div><p className="eyebrow"><span className="eyebrow-line" /> {ms.product.sectionEyebrow}</p><h2>Cara beli {product.name}<br /><em>di Malaysia.</em></h2></div>
        <div className="information-list"><article><h3>{ms.product.overview}</h3><p>{paragraphs[0]}</p></article><article><h3>{ms.product.benefits}</h3><p>{ms.product.benefitsText}</p></article><article><h3>{ms.product.ingredients}</h3><p>{ms.product.ingredientsText}</p></article><article><h3>{ms.product.safety}</h3><p>{ms.product.safetyText}</p></article></div>
      </div></section>
      <section className="section product-faq-section"><div className="container product-faq-layout"><div><p className="eyebrow"><span className="eyebrow-line" /> {ms.product.faqEyebrow}</p><h2>Perkara yang<br /><em>wajar diketahui.</em></h2></div>
        <div className="faq-list"><details className="faq-item"><summary><span>{ms.product.priceQuestion.replace("{name}", product.name)}</span><span className="faq-plus" aria-hidden="true" /></summary><p>{formatPrice(product.price)}. {ms.common.delivery}.</p></details>
          <details className="faq-item"><summary><span>{ms.product.ingredientsQuestion}</span><span className="faq-plus" aria-hidden="true" /></summary><p>{ms.product.ingredientsText}</p></details>
          <details className="faq-item"><summary><span>{ms.product.codQuestion}</span><span className="faq-plus" aria-hidden="true" /></summary><p>{ms.common.codAvailability}</p></details>
          <details className="faq-item"><summary><span>{ms.product.timingQuestion}</span><span className="faq-plus" aria-hidden="true" /></summary><p>{ms.common.deliveryTiming}</p></details></div>
      </div></section>
      <section className="related-products section container"><div className="section-heading-row"><div><p className="eyebrow"><span className="eyebrow-line" /> {ms.product.relatedEyebrow}</p><h2>Produk lain<br /><em>dalam koleksi.</em></h2></div><Link className="text-link" href="/produk">{ms.product.related} <span aria-hidden="true">↗</span></Link></div>
        <div className="related-link-grid">{related.map((item) => <Link className="related-link" href={`/produk/${item.slug}`} key={item.id}><span>{item.name}</span><span aria-hidden="true">↗</span></Link>)}</div>
      </section>
    </main>
  );
}

export function MsAboutPage() {
  return <main id="main-content"><Breadcrumbs items={[{ label: "Tentang Kami" }]} />
    <section className="page-hero about-hero container"><p className="eyebrow"><span className="eyebrow-line" /> {ms.about.eyebrow}</p><h1>Kesejahteraan wajar<br /><em>diberi perhatian.</em></h1><p>{ms.about.intro}</p><p className="about-no-story">{ms.about.honest}</p></section>
    <section className="relationship-section about-statement"><div className="container relationship-inner"><div className="relationship-mark" aria-hidden="true"><span className="relationship-circle circle-one" /><span className="relationship-circle circle-two" /><span className="relationship-spark">✳</span></div><div className="relationship-copy"><p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> {ms.about.statementEyebrow}</p><h2>Jaga diri anda.<br /><em>Kekal berhubung.</em></h2><p>{ms.about.statementBody}</p></div></div></section>
    <section className="section container principles-section"><div className="section-heading-row"><div><p className="eyebrow"><span className="eyebrow-line" /> {ms.about.valuesEyebrow}</p><h2>Layanan yang<br /><em>penuh perhatian.</em></h2></div><p className="section-intro">{ms.about.mission}</p></div><div className="assurance-grid">{ms.about.values.map(([number,title,body])=><article className="assurance-card" key={number}><span className="assurance-number">{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="simple-cta container"><div><p className="eyebrow"><span className="eyebrow-line" /> {ms.common.customerCare}</p><h2>Ada pertanyaan?<br /><em>Kami sedia membantu.</em></h2></div><Link className="button button-dark" href="/hubungi-kami">{ms.nav.contactTeam} <span aria-hidden="true">↗</span></Link></section>
  </main>;
}

export function MsContactPage() {
  return <main id="main-content"><Breadcrumbs items={[{ label: "Hubungi Kami" }]} /><section className="contact-page container"><div className="contact-intro"><p className="eyebrow"><span className="eyebrow-line" /> {ms.contact.eyebrow}</p><h1>Kami sedia<br /><em>membantu anda.</em></h1><p>{ms.contact.intro}</p><div className="contact-details"><span className="eyebrow">{ms.common.email}</span><a href={`mailto:${store.contactEmail}`}>{store.contactEmail}</a><span className="eyebrow contact-availability">{ms.product.info}</span><p>{ms.contact.productInfo}</p></div><Link className="text-link" href="/soalan-lazim">{ms.nav.faqShortcut} <span aria-hidden="true">↗</span></Link></div><ContactForm locale="ms" /></section></main>;
}

export function MsOrderPage({ initialProduct }: { initialProduct: string }) {
  return <main id="main-content"><Breadcrumbs items={[{ label: "Pesanan" }]} /><section className="order-page container"><div className="order-intro"><p className="eyebrow"><span className="eyebrow-line" /> {ms.order.eyebrow}</p><h1>Mulakan permintaan<br /><em>pesanan anda.</em></h1><p>{ms.order.intro}</p><div className="order-reassurance">{ms.order.steps.map(([number,title,body])=><div key={number}><span className="reassurance-icon">{number}</span><p><strong>{title}</strong><br />{body}</p></div>)}</div></div><OrderForm initialProduct={initialProduct} locale="ms" /></section></main>;
}

export function MsConfirmationPage() {
  return <main id="main-content"><Breadcrumbs items={[{ label: "Pesanan", href: "/pesanan" }, { label: "Pengesahan" }]} /><OrderConfirmation locale="ms" /></main>;
}

export function MsFaqPage() {
  const groups = [ms.faq.products, ms.faq.deliverySection, ms.faq.orders];
  const targetFor = (index: number) => index < 2 ? "faq-0" : index < 5 ? "faq-2" : "faq-5";
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: ms.faq.questions.map(([question,answer])=>({ "@type":"Question", name:question, acceptedAnswer:{"@type":"Answer",text:answer} })) };
  return <main id="main-content"><Breadcrumbs items={[{ label: "Soalan Lazim" }]} /><section className="page-hero faq-hero container"><p className="eyebrow"><span className="eyebrow-line" /> {ms.faq.eyebrow}</p><h1>Soalan yang baik<br /><em>wajar dijawab dengan jelas.</em></h1><p>{ms.faq.intro}</p></section><section className="section container faq-layout"><nav className="faq-side-nav" aria-label="Pada halaman ini"><span className="eyebrow">{ms.faq.jump}</span>{groups.map((label,index)=><a href={`#${targetFor([0,2,5][index])}`} key={label}>{label}</a>)}</nav><div className="faq-list">{ms.faq.questions.map(([question,answer],index)=><details className="faq-item" id={`faq-${index}`} key={question}><summary><span>{question}</span><span className="faq-plus" aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section><section className="faq-contact container"><p>{ms.faq.contact}</p><Link className="text-link" href="/hubungi-kami">{ms.nav.contactTeam} <span aria-hidden="true">↗</span></Link></section><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}} /></main>;
}

export function MsShippingPage() {
  return <main id="main-content"><Breadcrumbs items={[{label:"Penghantaran"}]} /><section className="page-hero container policy-hero"><p className="eyebrow"><span className="eyebrow-line" /> {ms.shipping.eyebrow}</p><h1>Ke seluruh Malaysia.<br /><em>Penghantaran percuma.</em></h1><p>{ms.shipping.intro}</p></section><section className="section container policy-content"><PolicyDraftNote locale="ms" />{ms.shipping.sections.map(([title,body])=><article className="policy-block" key={title}><h2>{title}</h2><p>{body}</p></article>)}<p className="policy-contact">Ada soalan tentang penghantaran? <Link href="/hubungi-kami">{ms.nav.contactTeam}</Link>.</p></section></main>;
}

export function MsPolicyPage({ type }: { type: "privacy" | "terms" | "refunds" }) {
  const content = ms[type];
  const titles = { privacy: "Polisi Privasi", terms: "Terma & Syarat", refunds: "Polisi Pemulangan" };
  const intro = type === "privacy" ? ms.privacy.intro : type === "terms" ? ms.terms.intro : ms.refunds.intro;
  return <main id="main-content"><Breadcrumbs items={[{label:titles[type]}]} /><section className="page-hero container policy-hero"><p className="eyebrow"><span className="eyebrow-line" /> {content.eyebrow}</p><h1>{type==="privacy"?<>Privasi dengan<br /><em>penjelasan yang jelas.</em></>:type==="terms"?<>Terma yang jelas.<br /><em>Tanpa kejutan.</em></>:<>Polisi masih<br /><em>menunggu pengesahan.</em></>}</h1><p>{intro}</p></section><section className="section container policy-content"><PolicyDraftNote locale="ms" />{type==="privacy" && <p className="policy-updated">{ms.privacy.updated}</p>}{content.sections.map(([title,body])=><article className="policy-block" key={title}><h2>{title}</h2><p>{body}</p></article>)}{type==="refunds" && <p className="policy-contact">Untuk pertanyaan, e-mel <a href={`mailto:${store.contactEmail}`}>{store.contactEmail}</a>.</p>}</section></main>;
}

export function MsBlogPage() {
  return <main id="main-content"><Breadcrumbs items={[{label:"Blog"}]} /><section className="page-hero blog-hero container"><p className="eyebrow"><span className="eyebrow-line" /> {ms.blog.eyebrow}</p><h1>Cara pesan produk<br /><em>kesihatan lelaki.</em></h1><p>{ms.blog.intro}</p></section><section className="section container blog-list">{ms.blog.articles.map((article,index)=><article className="blog-article" id={`artikel-${index+1}`} key={article.title}><div className="blog-article-aside"><span>0{index+1}</span><span>{article.category}</span></div><div className="blog-article-content"><p className="eyebrow">{article.category}</p><h2>{article.title}</h2><p className="blog-intro">{article.intro}</p>{article.paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}<p className="blog-disclaimer">{ms.blog.disclaimer}</p></div></article>)}<article className="blog-article" id="cara-pesan"><div className="blog-article-aside"><span>04</span><span>Pesanan COD</span></div><div className="blog-article-content"><p className="eyebrow">Pesanan COD</p><h2>Cara pesan produk kesihatan lelaki di Malaysia (COD)</h2><p className="blog-intro">Tiga langkah: pilih Magnum Pump, Ultrahot, Horsemen atau Hammer of Thor, isi alamat, kemudian hantar e-mel ke producth006@gmail.com.</p><p>Harga setiap produk ialah RM159. Penghantaran percuma ke seluruh Malaysia. Bayaran secara COD selepas kami sahkan destinasi.</p><p>Buka halaman Pesan Sekarang, lengkapkan borang, dan peti e-mel anda akan dibuka dengan butiran pesanan. Tekan hantar. Ini bukan nasihat perubatan.</p><p className="blog-disclaimer">{ms.blog.disclaimer}</p></div></article><aside className="blog-local-note"><p className="eyebrow"><span className="eyebrow-line" /> Untuk komuniti Malaysia</p><p>{ms.blog.localNote}</p></aside></section></main>;
}

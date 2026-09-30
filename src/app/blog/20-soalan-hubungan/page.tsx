import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { msPageMetadata } from "@/lib/ms-page-metadata";
import { relationshipFaq } from "@/content/relationship-faq";

export const metadata: Metadata = msPageMetadata(
  "20 Soalan Hubungan Suami Isteri di Malaysia | Perkahwinan Bahagia",
  "Dua puluh soalan tentang hubungan sihat, kedekatan, kecergasan, keyakinan lelaki dan cara pesan dengan privasi. Jawapan terperinci, bukan nasihat perubatan.",
  "/blog/20-soalan-hubungan",
  [
    "hubungan suami isteri",
    "perkahwinan bahagia",
    "apa itu hubungan yang sihat",
    "kesihatan lelaki Malaysia",
    "penjagaan diri lelaki",
  ],
);

export default function RelationshipQuestionsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: relationshipFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main id="main-content">
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "20 soalan hubungan" }]} />
      <article className="section container blog-list">
        <header className="page-hero blog-hero">
          <p className="eyebrow"><span className="eyebrow-line" /> Soal jawab rumah tangga</p>
          <h1>Dua puluh soalan<br /><em>tentang hubungan yang lebih tenang.</em></h1>
          <p>Klik soalan untuk membaca jawapan. Ini bacaan gaya hidup untuk suami dan isteri di Malaysia, bukan nasihat doktor.</p>
        </header>
        <figure className="blog-hero-photo" style={{ position: "relative", width: "100%", maxWidth: 920, aspectRatio: "16 / 10", margin: "0 auto 2rem" }}>
          <Image src="/home-couple.webp" alt="Pasangan duduk bersama semasa senja" fill sizes="(max-width: 920px) 100vw, 920px" priority style={{ objectFit: "cover" }} />
        </figure>
        <div className="faq-list">
          {relationshipFaq.map((item, index) => (
            <details className="faq-item" key={item.question} id={`soalan-${index + 1}`}>
              <summary><span>{index + 1}. {item.question}</span><span className="faq-plus" aria-hidden="true" /></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
        <p className="blog-disclaimer">Jawapan ini untuk maklumat umum. Kami tidak mendakwa rawatan atau cara perubatan.</p>
        <p><Link className="text-link" href="/blog/hubungan-bahagia">Baca artikel perkahwinan bahagia <span aria-hidden="true">↗</span></Link></p>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </main>
  );
}

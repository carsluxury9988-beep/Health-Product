import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
import { relationshipFaq } from "@/content/relationship-faq";

export const metadata: Metadata = pageMetadata(
  "20 Questions About a Calmer Marriage in Malaysia",
  "Twenty detailed answers on healthy relationships, closeness, fitness, confidence and private ordering. Lifestyle reading, not medical advice.",
  "/en/blog/20-relationship-questions",
  "en",
  ["healthy relationship", "what brings partners closer", "does fitness matter in a relationship", "happy marriage Malaysia"],
);

export default function RelationshipQuestionsEnPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: relationshipFaq.map((item) => ({
      "@type": "Question",
      name: item.questionEn,
      acceptedAnswer: { "@type": "Answer", text: item.answerEn },
    })),
  };

  return (
    <main id="main-content">
      <Breadcrumbs locale="en" items={[{ label: "Journal", href: "/en/blog" }, { label: "20 relationship questions" }]} />
      <article className="section container blog-list">
        <header className="page-hero blog-hero">
          <p className="eyebrow"><span className="eyebrow-line" /> Marriage questions</p>
          <h1>Twenty questions<br /><em>for a calmer relationship.</em></h1>
          <p>Open a question to read the full answer. Written for couples in Malaysia. Not medical advice.</p>
        </header>
        <figure className="blog-hero-photo" style={{ width: "100%", maxWidth: 920, margin: "0 auto 2rem" }}>
          <img
            src="/blog/couple-sunset.jpg"
            alt="A married couple sitting on the beach at sunset"
            width={1600}
            height={1000}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </figure>
        <div className="faq-list">
          {relationshipFaq.map((item, index) => (
            <details className="faq-item" key={item.questionEn} id={`question-${index + 1}`}>
              <summary><span>{index + 1}. {item.questionEn}</span><span className="faq-plus" aria-hidden="true" /></summary>
              <p>{item.answerEn}</p>
            </details>
          ))}
        </div>
        <p className="blog-disclaimer">These answers are general information. They are not treatment claims.</p>
        <p><Link className="text-link" href="/en/blog/happy-marriage">Read the longer marriage article <span aria-hidden="true">↗</span></Link></p>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </main>
  );
}

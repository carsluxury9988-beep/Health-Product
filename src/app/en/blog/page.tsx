import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Men's Wellness Journal",
  "Thoughtful, non-medical reading on men's self-care, everyday routines and confidence in relationships.",
  "/en/blog",
);

const articles = [
  {
    id: "self-care-without-pressure",
    number: "01",
    category: "A gentler routine",
    title: "Men's self-care, without the pressure",
    intro: "Self-care does not need to be a grand plan. It can begin with noticing what helps you feel more present in your own day.",
    paragraphs: [
      "The phrase “self-care” can sound like another item on a busy list. A more useful starting point is to make it personal: what gives you a moment to pause, what helps you feel comfortable in your own routine, and what kind of support would make everyday decisions easier?",
      "For one person, that may mean protecting a little time away from screens. For another, it might be a walk, a conversation, or asking a trusted professional a question they have been putting off. None of these needs to look the same for everyone.",
      "When you explore a wellness product, give yourself room to check the official label, understand the information that is available and ask questions before deciding. Confidence comes from having the space to make an informed choice—not from pressure to buy.",
    ],
  },
  {
    id: "confidence-and-connection",
    number: "02",
    category: "Relationships & wellbeing",
    title: "Confidence and connection in a long-term relationship",
    intro: "Good conversations start with curiosity and care—not a promise that a product can change how a relationship feels.",
    paragraphs: [
      "Long-term relationships have their own rhythms. Staying connected can involve small, ordinary moments: listening without rushing to solve a problem, making time to check in, and speaking honestly about what each person needs.",
      "Confidence is personal, too. It is not a test to pass or a result someone else can guarantee. Taking care of yourself can be one part of feeling more at ease, while openness and respect remain at the centre of the relationship.",
      "If a change in wellbeing is worrying you, a qualified healthcare professional is a better source of individual advice than a product page. Make choices at your own pace and avoid claims that promise a particular relationship or health outcome.",
    ],
  },
  {
    id: "choosing-with-clear-information",
    number: "03",
    category: "Making an informed choice",
    title: "A simple checklist for choosing a wellness product",
    intro: "Clear facts make it easier to decide whether a product is right for you. Here are practical questions to ask before placing an order.",
    paragraphs: [
      "Start with the official packaging. Check the product name, manufacturer, ingredients, directions and warnings. If any of that information is missing or unclear, ask the seller for the manufacturer’s label rather than relying on an advertisement.",
      "Look for a registration or certification only when it can be verified against an authoritative source. A logo or claim on a marketing page is not a substitute for checking the relevant official record. Do not assume that products with similar names have the same formulation or status.",
      "Consider how you will get support if you have a question. Know the actual price, delivery charge, payment method and the seller’s written return policy before you submit an order. If you need personal health advice, consult a qualified professional.",
    ],
  },
];

export default function BlogPage() {
  return (
    <main id="main-content">
      <Breadcrumbs locale="en" items={[{ label: "Wellness journal" }]} />
      <section className="page-hero blog-hero container">
        <p className="eyebrow"><span className="eyebrow-line" /> The wellness journal</p>
        <h1>A little room<br /><em>to think well.</em></h1>
        <p>Considered reading on self-care, relationships and making informed choices. This is general lifestyle information, not medical advice.</p>
      </section>
      <section className="section container blog-list">
        {articles.map((article) => (
          <article className="blog-article" id={article.id} key={article.id}>
            <div className="blog-article-aside"><span>{article.number}</span><span>{article.category}</span></div>
            <div className="blog-article-content">
              <p className="eyebrow">{article.category}</p>
              <h2>{article.title}</h2>
              <p className="blog-intro">{article.intro}</p>
              {article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <p className="blog-disclaimer">This article is for general information only and does not provide medical advice or product-specific claims.</p>
            </div>
          </article>
        ))}
        <aside className="blog-local-note">
          <p className="eyebrow"><span className="eyebrow-line" /> For our Malaysian community</p>
          <p>Kesihatan lelaki bermula dengan maklumat yang jelas dan pilihan yang dibuat mengikut keselesaan anda. <span lang="ms">Ambil masa anda.</span></p>
        </aside>
      </section>
    </main>
  );
}

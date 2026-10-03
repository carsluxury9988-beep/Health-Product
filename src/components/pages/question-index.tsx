import type { Metadata } from "next";
import Link from "next/link";
import { articlePath, articlesByTopic } from "@/content/articles";
import { blogUi, questionIndexPaths, topicPath, topics } from "@/content/topics";
import { getMessages, type Locale } from "@/i18n";
import { routePath } from "@/i18n/routes";
import { headingId } from "@/lib/article-utils";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";

export function questionIndexMetadata(locale: Locale): Metadata {
  const ui = blogUi[locale];
  return pageMetadata({ locale, paths: questionIndexPaths, title: ui.indexSeoTitle, description: ui.indexDescription, image: "/og/blog-hub.jpg" });
}

/** Question-style headings only: the H2 sub-questions that end with "?". */
function subQuestions(headings: string[]) {
  return headings.filter((heading) => heading.trim().endsWith("?"));
}

export function QuestionIndexPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const ui = blogUi[locale];
  const qaPrefix = locale === "en" ? "question" : "soalan";
  return (
    <main id="main-content">
      <Breadcrumbs locale={locale} items={[{ label: t.nav.blog, href: routePath("blog", locale) }, { label: ui.indexTitle }]} />
      <PageHeader title={ui.indexTitle} lead={ui.indexLead} />
      <section className="section-tight">
        <div className="container narrow">
          <nav aria-label={ui.browse} className="topic-nav">
            <ul>
              {topics.map((topic) => (
                <li key={topic.key}><a href={`#${topic[locale].slug}`} className="topic-pill"><span>{topic[locale].label}</span></a></li>
              ))}
            </ul>
          </nav>
          {topics.map((topic) => (
            <section key={topic.key} id={topic[locale].slug} className="question-index-topic">
              <h2><Link href={topicPath(topic, locale)}>{topic[locale].title}</Link></h2>
              {articlesByTopic(topic.key).map((article) => {
                const content = article[locale];
                const href = articlePath(article, locale);
                const subs = subQuestions(content.blocks.map((block) => block.heading));
                return (
                  <div key={article.key} className="question-index-article">
                    <h3><Link href={href}>{content.title}</Link></h3>
                    {(subs.length > 0 || (content.qa?.length ?? 0) > 0) && (
                      <ul className="question-list">
                        {subs.map((heading) => <li key={heading}><Link href={`${href}#${headingId(heading)}`}>{heading}</Link></li>)}
                        {content.qa?.map((item, index) => <li key={item.q}><Link href={`${href}#${qaPrefix}-${index + 1}`}>{item.q}</Link></li>)}
                      </ul>
                    )}
                  </div>
                );
              })}
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}

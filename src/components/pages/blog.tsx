import type { Metadata } from "next";
import Link from "next/link";
import { articlePath, articlesByTopic } from "@/content/articles";
import { blogUi, questionIndexPaths, topicPath, topics } from "@/content/topics";
import { getMessages, type Locale } from "@/i18n";
import { staticRoutes } from "@/i18n/routes";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { ArticleCard } from "@/components/article-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowRightIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";

export function blogMetadata(locale: Locale): Metadata {
  const t = getMessages(locale);
  return pageMetadata({ locale, paths: staticRoutes.blog, title: t.seo.blog.title, description: t.seo.blog.description, image: "/og/blog-hub.jpg" });
}

export function BlogPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const ui = blogUi[locale];
  const groups = topics.map((topic) => ({ topic, items: articlesByTopic(topic.key) }));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: ui.hubTitle,
    url: absoluteUrl(staticRoutes.blog[locale]),
    inLanguage: t.htmlLang,
    hasPart: groups.map(({ topic }) => ({ "@type": "CollectionPage", name: topic[locale].title, url: absoluteUrl(topicPath(topic, locale)) })),
  };
  return (
    <main id="main-content">
      <Breadcrumbs locale={locale} items={[{ label: t.nav.blog }]} />
      <PageHeader title={ui.hubTitle} lead={ui.hubLead} />
      <section className="section-tight">
        <div className="container">
          <nav aria-label={ui.browse} className="topic-nav">
            <ul>
              {groups.map(({ topic, items }) => (
                <li key={topic.key}>
                  <Link href={topicPath(topic, locale)} className="topic-pill">
                    <span>{topic[locale].label}</span>
                    <small>{ui.articlesCount(items.length)}</small>
                  </Link>
                </li>
              ))}
              <li><Link href={questionIndexPaths[locale]} className="topic-pill topic-pill-alt"><span>{ui.indexTitle}</span><small>A–Z</small></Link></li>
            </ul>
          </nav>
        </div>
      </section>
      {groups.map(({ topic, items }) => (
        <section key={topic.key} className="section-tight topic-section" aria-labelledby={`topik-${topic.key}`}>
          <div className="container">
            <div className="section-head section-head-row">
              <div>
                <h2 id={`topik-${topic.key}`}>{topic[locale].title}</h2>
                <p>{topic[locale].lead}</p>
              </div>
              <Link href={topicPath(topic, locale)} className="text-link">{ui.seeAll} ({items.length}) <ArrowRightIcon size={16} /></Link>
            </div>
            <div className="article-grid">
              {items.slice(0, 3).map((article) => <ArticleCard key={article.key} article={article} locale={locale} />)}
            </div>
            {items.length > 3 && (
              <ul className="question-list question-list-compact">
                {items.slice(3).map((article) => (
                  <li key={article.key}><Link href={articlePath(article, locale)}>{article[locale].title}</Link></li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
      <JsonLd data={jsonLd} />
    </main>
  );
}

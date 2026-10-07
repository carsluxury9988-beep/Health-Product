import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articlePath, articlesByTopic } from "@/content/articles";
import { blogUi, questionIndexPaths, topicBySlug, topicPath, topics } from "@/content/topics";
import { getMessages, type Locale } from "@/i18n";
import { routePath } from "@/i18n/routes";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { ArticleCard } from "@/components/article-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowRightIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";

export function topicStaticParams(locale: Locale) {
  return topics.map((topic) => ({ topic: topic[locale].slug }));
}

export function topicMetadata(slug: string, locale: Locale): Metadata {
  const topic = topicBySlug(slug, locale);
  if (!topic) return {};
  return pageMetadata({
    locale,
    paths: { ms: topicPath(topic, "ms"), en: topicPath(topic, "en") },
    title: topic[locale].seoTitle,
    description: topic[locale].description,
    image: topic.ogImage,
  });
}

export function BlogTopicPage({ slug, locale }: { slug: string; locale: Locale }) {
  const topic = topicBySlug(slug, locale);
  if (!topic) notFound();
  const t = getMessages(locale);
  const ui = blogUi[locale];
  const items = articlesByTopic(topic.key);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: topic[locale].title,
    description: topic[locale].description,
    url: absoluteUrl(topicPath(topic, locale)),
    inLanguage: t.htmlLang,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((article, index) => ({ "@type": "ListItem", position: index + 1, url: absoluteUrl(articlePath(article, locale)), name: article[locale].title })),
    },
  };
  return (
    <main id="main-content">
      <Breadcrumbs locale={locale} items={[{ label: t.nav.blog, href: routePath("blog", locale) }, { label: topic[locale].label }]} />
      <PageHeader title={topic[locale].title} lead={topic[locale].lead} />
      <section className="section-tight">
        <div className="container">
          <nav aria-label={ui.browse} className="topic-nav">
            <ul>
              {topics.map((item) => (
                <li key={item.key}>
                  <Link href={topicPath(item, locale)} className="topic-pill" aria-current={item.key === topic.key ? "page" : undefined}><span>{item[locale].label}</span></Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="article-grid">
            {items.map((article) => <ArticleCard key={article.key} article={article} locale={locale} />)}
          </div>
          {topic[locale].intro && (
            <div className="topic-intro prose">
              {topic[locale].intro?.map((paragraph) => <p key={paragraph.slice(0, 32)}>{paragraph}</p>)}
            </div>
          )}
          <p className="topic-index-link"><Link href={questionIndexPaths[locale]} className="text-link">{ui.indexCta} <ArrowRightIcon size={16} /></Link></p>
        </div>
      </section>
      <JsonLd data={jsonLd} />
    </main>
  );
}

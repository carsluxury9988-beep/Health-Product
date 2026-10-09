import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articlePath, articles, getArticle, sortedArticles, type Article } from "@/content/articles";
import { blogUi, getTopic, questionIndexPaths, topicPath } from "@/content/topics";
import { getMessages, type Locale } from "@/i18n";
import { routePath } from "@/i18n/routes";
import { articleSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { headingId, formatDate } from "@/lib/article-utils";
import { RichText, plainText } from "@/lib/rich-text";
import { ArticleCard } from "@/components/article-card";
import { ArticleProducts } from "@/components/article-products";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqList } from "@/components/faq-list";
import { ArrowRightIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";

export function articleStaticParams(locale: Locale) {
  return articles.map((article) => ({ slug: article[locale].slug }));
}

export function articleMetadata(slug: string, locale: Locale): Metadata {
  const article = getArticle(slug, locale);
  if (!article) return {};
  const content = article[locale];
  return pageMetadata({
    locale,
    paths: { ms: articlePath(article, "ms"), en: articlePath(article, "en") },
    title: content.seoTitle,
    description: content.description,
    type: "article",
    publishedTime: article.published,
    modifiedTime: article.updated,
    image: article.ogImage,
    imageAlt: content.imageAlt,
  });
}

/** Same topic first, then the newest articles from other topics. */
function relatedArticles(article: Article) {
  const others = sortedArticles().filter((item) => item.key !== article.key);
  return [...others.filter((item) => item.topic === article.topic), ...others.filter((item) => item.topic !== article.topic)].slice(0, 3);
}

export function ArticlePage({ slug, locale }: { slug: string; locale: Locale }) {
  const article = getArticle(slug, locale);
  if (!article) notFound();
  const t = getMessages(locale);
  const ui = blogUi[locale];
  const content = article[locale];
  const topic = getTopic(article.topic);
  const related = relatedArticles(article);
  const qaPrefix = locale === "en" ? "question" : "soalan";

  return (
    <main id="main-content">
      <Breadcrumbs
        locale={locale}
        items={[
          { label: t.nav.blog, href: routePath("blog", locale) },
          { label: topic[locale].label, href: topicPath(topic, locale) },
          { label: content.title },
        ]}
      />
      <article className="article">
        <header className="container narrow article-header">
          <p className="eyebrow"><Link href={topicPath(topic, locale)}>{topic[locale].label}</Link></p>
          <h1>{content.title}</h1>
          <p className="page-lead"><RichText text={content.lead} /></p>
          <p className="article-meta">
            {ui.lastUpdated}: <time dateTime={article.updated}>{formatDate(article.updated, locale)}</time>
            {article.updated !== article.published && <> · {t.common.published} <time dateTime={article.published}>{formatDate(article.published, locale)}</time></>}
            {" · "}{content.readMinutes} {t.common.minutes}
          </p>
        </header>
        <figure className="container article-figure">
          <Image src={article.image.src} alt={content.imageAlt} width={article.image.width} height={article.image.height} priority sizes="(max-width: 900px) 100vw, 860px" />
        </figure>
        <div className="container narrow prose">
          {content.blocks.map((block) => (
            <section key={block.heading} id={headingId(block.heading)}>
              <h2>{block.heading}</h2>
              {block.paragraphs.map((paragraph) => <p key={paragraph}><RichText text={paragraph} /></p>)}
              {block.list && <ul>{block.list.map((item) => <li key={item}><RichText text={item} /></li>)}</ul>}
              {block.after?.map((paragraph) => <p key={paragraph}><RichText text={paragraph} /></p>)}
            </section>
          ))}
          {content.doctorNote && (
            <aside className="doctor-note" aria-label={ui.seeDoctor}>
              <h2>{ui.seeDoctor}</h2>
              <p><RichText text={content.doctorNote} /></p>
            </aside>
          )}
          {content.qa && content.qa.length > 0 && (
            <section id={locale === "en" ? "faq" : "soalan-lazim"}>
              {content.blocks.length > 0 && <h2>{ui.faqHeading}</h2>}
              <FaqList items={content.qa} idPrefix={qaPrefix} />
            </section>
          )}
          {content.sources && content.sources.length > 0 && (
            <section className="sources">
              <h2>{t.common.sources}</h2>
              <ol>
                {content.sources.map((source) => (
                  <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a>{source.checked && <> ({locale === "en" ? "checked" : "disemak"} {formatDate(source.checked, locale)})</>}</li>
                ))}
              </ol>
            </section>
          )}
          <p className="disclaimer">{content.disclaimer}</p>
          <p className="article-index-link"><Link href={questionIndexPaths[locale]} className="text-link">{ui.indexCta} <ArrowRightIcon size={16} /></Link></p>
        </div>
        <ArticleProducts article={article} locale={locale} />
      </article>
      {related.length > 0 && (
        <section className="section section-muted">
          <div className="container">
            <div className="section-head section-head-row">
              <h2>{ui.relatedHeading}</h2>
              <Link href={routePath("blog", locale)} className="text-link">{t.home.blogLink} <ArrowRightIcon size={16} /></Link>
            </div>
            <div className="article-grid">
              {related.map((item) => <ArticleCard key={item.key} article={item} locale={locale} />)}
            </div>
          </div>
        </section>
      )}
      <JsonLd data={articleSchema(article, locale)} />
      {content.qa && content.qa.length > 0 && <JsonLd data={faqSchema(content.qa.map((item) => ({ q: plainText(item.q), a: plainText(item.a) })))} />}
    </main>
  );
}

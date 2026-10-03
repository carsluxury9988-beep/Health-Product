import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articlePath, articles, getArticle, sortedArticles } from "@/content/articles";
import { getMessages, type Locale } from "@/i18n";
import { routePath } from "@/i18n/routes";
import { articleSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { ArticleCard } from "@/components/article-card";
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
  });
}

function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "en" ? "en-MY" : "ms-MY", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kuala_Lumpur" }).format(new Date(`${date}T00:00:00+08:00`));
}

export function ArticlePage({ slug, locale }: { slug: string; locale: Locale }) {
  const article = getArticle(slug, locale);
  if (!article) notFound();
  const t = getMessages(locale);
  const content = article[locale];
  const related = sortedArticles().filter((item) => item.key !== article.key).slice(0, 3);

  return (
    <main id="main-content">
      <Breadcrumbs locale={locale} items={[{ label: t.nav.blog, href: routePath("blog", locale) }, { label: content.title }]} />
      <article className="article">
        <header className="container narrow article-header">
          <p className="eyebrow">{content.category}</p>
          <h1>{content.title}</h1>
          <p className="page-lead">{content.lead}</p>
          <p className="article-meta">
            {t.common.published} <time dateTime={article.published}>{formatDate(article.published, locale)}</time>
            {article.updated !== article.published && <> · {t.common.updated.split(":")[0]}: <time dateTime={article.updated}>{formatDate(article.updated, locale)}</time></>}
            {" · "}{content.readMinutes} {t.common.minutes}
          </p>
        </header>
        <figure className="container article-figure">
          <Image src={article.image.src} alt={content.imageAlt} width={article.image.width} height={article.image.height} priority sizes="(max-width: 900px) 100vw, 860px" />
        </figure>
        <div className="container narrow prose">
          {content.blocks.map((block) => (
            <section key={block.heading}>
              <h2>{block.heading}</h2>
              {block.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {block.list && <ul>{block.list.map((item) => <li key={item}>{item}</li>)}</ul>}
            </section>
          ))}
          {content.qa && <FaqList items={content.qa} idPrefix={locale === "en" ? "question" : "soalan"} />}
          {content.sources && content.sources.length > 0 && (
            <section className="sources">
              <h2>{t.common.sources}</h2>
              <ol>
                {content.sources.map((source) => (
                  <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></li>
                ))}
              </ol>
            </section>
          )}
          <p className="disclaimer">{content.disclaimer}</p>
        </div>
      </article>
      {related.length > 0 && (
        <section className="section section-muted">
          <div className="container">
            <div className="section-head section-head-row">
              <h2>{t.home.blogTitle}</h2>
              <Link href={routePath("blog", locale)} className="text-link">{t.home.blogLink} <ArrowRightIcon size={16} /></Link>
            </div>
            <div className="article-grid">
              {related.map((item) => <ArticleCard key={item.key} article={item} locale={locale} />)}
            </div>
          </div>
        </section>
      )}
      <JsonLd data={articleSchema(article, locale)} />
    </main>
  );
}

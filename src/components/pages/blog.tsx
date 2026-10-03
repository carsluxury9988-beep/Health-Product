import type { Metadata } from "next";
import { sortedArticles } from "@/content/articles";
import { getMessages, type Locale } from "@/i18n";
import { staticRoutes } from "@/i18n/routes";
import { pageMetadata } from "@/lib/seo";
import { ArticleCard } from "@/components/article-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";

export function blogMetadata(locale: Locale): Metadata {
  const t = getMessages(locale);
  return pageMetadata({ locale, paths: staticRoutes.blog, title: t.seo.blog.title, description: t.seo.blog.description });
}

export function BlogPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <main id="main-content">
      <Breadcrumbs locale={locale} items={[{ label: t.nav.blog }]} />
      <PageHeader title={t.blogPage.title} lead={t.blogPage.lead} />
      <section className="section-tight">
        <div className="container article-grid">
          {sortedArticles().map((article) => <ArticleCard key={article.key} article={article} locale={locale} />)}
        </div>
      </section>
    </main>
  );
}

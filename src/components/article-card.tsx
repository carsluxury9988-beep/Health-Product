import Image from "next/image";
import Link from "next/link";
import { articlePath, type Article } from "@/content/articles";
import { getMessages, type Locale } from "@/i18n";

export function ArticleCard({ article, locale }: { article: Article; locale: Locale }) {
  const t = getMessages(locale);
  const content = article[locale];
  const href = articlePath(article, locale);
  return (
    <article className="article-card">
      <Link href={href} className="article-card-media" tabIndex={-1} aria-hidden="true">
        <Image src={article.image.src} alt="" width={article.image.width} height={article.image.height} sizes="(max-width: 700px) 92vw, 380px" />
      </Link>
      <div className="article-card-body">
        <p className="article-meta">{content.category} · {content.readMinutes} {t.common.minutes}</p>
        <h3><Link href={href}>{content.title}</Link></h3>
        <p>{content.description}</p>
      </div>
    </article>
  );
}

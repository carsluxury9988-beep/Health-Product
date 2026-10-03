import Link from "next/link";
import { getMessages, type Locale } from "@/i18n";
import { staticRoutes } from "@/i18n/routes";
import { JsonLd } from "@/components/json-ld";
import { absoluteUrl } from "@/lib/seo";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumbs({ items, locale }: { items: BreadcrumbItem[]; locale: Locale }) {
  const t = getMessages(locale);
  const list = [{ label: t.common.home, href: staticRoutes.home[locale] }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };

  return (
    <>
      <nav className="breadcrumbs container" aria-label={t.common.breadcrumb}>
        <ol>
          {list.map((item, index) => (
            <li key={`${item.label}-${index}`}>
              {index < list.length - 1 && item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={jsonLd} />
    </>
  );
}

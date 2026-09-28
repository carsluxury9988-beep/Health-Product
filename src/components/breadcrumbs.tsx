import Link from "next/link";
import { store } from "@/config/store";
import { getMessages, type Locale } from "@/i18n";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumbs({ items, locale = "ms" }: { items: BreadcrumbItem[]; locale?: Locale }) {
  const t = getMessages(locale);
  const list = [{ label: t.nav.home, href: locale === "en" ? "/en" : "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href && store.siteUrl ? { item: new URL(item.href, store.siteUrl).toString() } : {}),
    })),
  };

  return (
    <>
      <nav className="breadcrumbs container" aria-label={locale === "ms" ? "Jejak navigasi" : "Breadcrumb"}>
        <ol>
          {list.map((item, index) => (
            <li key={`${item.label}-${index}`}>
              {index < list.length - 1 && item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
            </li>
          ))}
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}

import { ArticlePage, articleMetadata, articleStaticParams } from "@/components/pages/article";

export const dynamicParams = false;

export function generateStaticParams() {
  return articleStaticParams("ms");
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  return articleMetadata(slug, "ms");
}

export default async function Page({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  return <ArticlePage slug={slug} locale="ms" />;
}

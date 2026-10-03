import { ArticlePage, articleMetadata, articleStaticParams } from "@/components/pages/article";

export const dynamicParams = false;

export function generateStaticParams() {
  return articleStaticParams("en");
}

export async function generateMetadata({ params }: PageProps<"/en/blog/[slug]">) {
  const { slug } = await params;
  return articleMetadata(slug, "en");
}

export default async function Page({ params }: PageProps<"/en/blog/[slug]">) {
  const { slug } = await params;
  return <ArticlePage slug={slug} locale="en" />;
}

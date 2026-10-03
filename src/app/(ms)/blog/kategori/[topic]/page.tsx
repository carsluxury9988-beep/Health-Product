import { BlogTopicPage, topicMetadata, topicStaticParams } from "@/components/pages/blog-topic";

export const dynamicParams = false;

export function generateStaticParams() {
  return topicStaticParams("ms");
}

export async function generateMetadata({ params }: PageProps<"/blog/kategori/[topic]">) {
  const { topic } = await params;
  return topicMetadata(topic, "ms");
}

export default async function Page({ params }: PageProps<"/blog/kategori/[topic]">) {
  const { topic } = await params;
  return <BlogTopicPage slug={topic} locale="ms" />;
}

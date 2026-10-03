import { BlogTopicPage, topicMetadata, topicStaticParams } from "@/components/pages/blog-topic";

export const dynamicParams = false;

export function generateStaticParams() {
  return topicStaticParams("en");
}

export async function generateMetadata({ params }: PageProps<"/en/blog/category/[topic]">) {
  const { topic } = await params;
  return topicMetadata(topic, "en");
}

export default async function Page({ params }: PageProps<"/en/blog/category/[topic]">) {
  const { topic } = await params;
  return <BlogTopicPage slug={topic} locale="en" />;
}

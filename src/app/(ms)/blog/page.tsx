import { BlogPage, blogMetadata } from "@/components/pages/blog";

export const metadata = blogMetadata("ms");

export default function Page() {
  return <BlogPage locale="ms" />;
}

import { BlogPage, blogMetadata } from "@/components/pages/blog";

export const metadata = blogMetadata("en");

export default function Page() {
  return <BlogPage locale="en" />;
}

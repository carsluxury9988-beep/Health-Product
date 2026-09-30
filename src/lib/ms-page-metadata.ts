import { pageMetadata } from "@/lib/metadata";

export function msPageMetadata(
  title: string,
  description: string,
  path: string,
  keywords?: readonly string[],
) {
  return pageMetadata(title, description, path, "ms", keywords);
}

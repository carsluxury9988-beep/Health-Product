import { pageMetadata } from "@/lib/metadata";

export function msPageMetadata(title: string, description: string, path: string) {
  return pageMetadata(title, description, path, "ms");
}

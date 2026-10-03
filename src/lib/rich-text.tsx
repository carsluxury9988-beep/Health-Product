import Link from "next/link";
import type { ReactNode } from "react";

import { INLINE_LINK } from "@/lib/text";

export { plainText, linkTargets } from "@/lib/text";

/** Renders `[label](href)` as links: internal paths use next/link, external URLs open in a new tab. */
export function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(INLINE_LINK)) {
    const [whole, label, href] = match;
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    parts.push(
      href.startsWith("/") ? (
        <Link key={index} href={href}>{label}</Link>
      ) : (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
      ),
    );
    last = index + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

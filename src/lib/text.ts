/** Inline link syntax used in article text: `[label](href)`. */
export const INLINE_LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Plain text with `[label](href)` links reduced to their label (for meta tags and JSON-LD). */
export function plainText(text: string) {
  return text.replace(INLINE_LINK, "$1");
}

/** All link targets in a string. */
export function linkTargets(text: string) {
  return [...text.matchAll(INLINE_LINK)].map((match) => match[2]);
}

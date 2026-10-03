"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  /** Where the click happened, for optional analytics. */
  source: string;
  product?: string;
  ariaLabel?: string;
};

export function WhatsAppLink({ href, children, className, source, product, ariaLabel }: Props) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={() => trackEvent("whatsapp_click", { source, ...(product ? { item_name: product } : {}) })}
    >
      {children}
    </a>
  );
}

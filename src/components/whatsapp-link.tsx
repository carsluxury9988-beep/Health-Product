"use client";

import type { ReactNode } from "react";
import { analytics } from "@/lib/analytics";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  /** Where the click happened, for optional analytics. */
  source: string;
  product?: string;
  /** Order value in RM for product order links (used for conversion value). */
  value?: number;
  ariaLabel?: string;
};

export function WhatsAppLink({ href, children, className, source, product, value, ariaLabel }: Props) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={() => analytics.whatsappClick(source, product && value !== undefined ? { name: product, value } : undefined)}
    >
      {children}
    </a>
  );
}

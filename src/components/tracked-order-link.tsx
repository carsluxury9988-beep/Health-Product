"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type Props = {
  href: string;
  productId: string;
  productName: string;
  price: number;
  className?: string;
  children: ReactNode;
};

export function TrackedOrderLink({ href, productId, productName, price, className, children }: Props) {
  return (
    <Link
      className={className}
      href={href}
      onClick={() => trackEvent("add_to_cart", {
        item_id: productId,
        item_name: productName,
        price,
        quantity: 1,
        currency: "MYR",
      })}
    >
      {children}
    </Link>
  );
}

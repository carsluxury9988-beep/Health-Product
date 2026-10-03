"use client";

import { useEffect } from "react";
import { analytics } from "@/lib/analytics";

export function ProductViewTracker({ productId, productName, price }: { productId: string; productName: string; price: number }) {
  useEffect(() => {
    analytics.viewItem({ id: productId, name: productName, price });
  }, [productId, productName, price]);

  return null;
}

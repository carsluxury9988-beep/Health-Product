"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function ProductViewTracker({ productId, productName, price }: { productId: string; productName: string; price: number }) {
  useEffect(() => {
    trackEvent("product_view", { item_id: productId, item_name: productName, value: price, currency: "MYR" });
  }, [productId, productName, price]);

  return null;
}

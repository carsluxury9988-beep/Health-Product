"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type OrderSummary = {
  reference: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  deliveryFee: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  stateLabel: string;
  notes: string;
};

type ConfirmationContextValue = {
  summary: OrderSummary | null;
  setSummary: (summary: OrderSummary) => void;
  clearSummary: () => void;
};

const ConfirmationContext = createContext<ConfirmationContextValue | null>(null);

export function OrderConfirmationProvider({ children }: { children: ReactNode }) {
  const [summary, setCurrentSummary] = useState<OrderSummary | null>(null);
  const value = useMemo(
    () => ({
      summary,
      setSummary: setCurrentSummary,
      clearSummary: () => setCurrentSummary(null),
    }),
    [summary],
  );

  return <ConfirmationContext.Provider value={value}>{children}</ConfirmationContext.Provider>;
}

export function useOrderConfirmation() {
  const value = useContext(ConfirmationContext);
  if (!value) throw new Error("Order confirmation must be used inside its provider.");
  return value;
}

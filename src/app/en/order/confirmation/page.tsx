import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { OrderConfirmation } from "@/components/order-confirmation";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata(
    "Order Request Confirmation",
    "Your order request details and next steps.",
    "/en/order/confirmation",
  ),
  robots: { index: false, follow: false },
};

export default function OrderConfirmationPage() {
  return (
    <main id="main-content">
      <Breadcrumbs locale="en" items={[{ label: "Order", href: "/en/order" }, { label: "Confirmation" }]} />
      <OrderConfirmation locale="en" />
    </main>
  );
}

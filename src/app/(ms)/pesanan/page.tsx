import { OrderPage, orderMetadata } from "@/components/pages/order";

export const metadata = orderMetadata("ms");

export default function Page() {
  return <OrderPage locale="ms" />;
}

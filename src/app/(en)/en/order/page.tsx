import { OrderPage, orderMetadata } from "@/components/pages/order";

export const metadata = orderMetadata("en");

export default function Page() {
  return <OrderPage locale="en" />;
}

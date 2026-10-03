import { HowToOrderPage, howToOrderMetadata } from "@/components/pages/how-to-order";

export const metadata = howToOrderMetadata("en");

export default function Page() {
  return <HowToOrderPage locale="en" />;
}

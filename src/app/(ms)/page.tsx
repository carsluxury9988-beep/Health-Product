import { HomePage, homeMetadata } from "@/components/pages/home";

export const metadata = homeMetadata("ms");

export default function Page() {
  return <HomePage locale="ms" />;
}

import { PolicyPage, policyMetadata } from "@/components/pages/policy";

export const metadata = policyMetadata("returns", "en");

export default function Page() {
  return <PolicyPage policy="returns" locale="en" />;
}

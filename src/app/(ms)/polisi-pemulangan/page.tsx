import { PolicyPage, policyMetadata } from "@/components/pages/policy";

export const metadata = policyMetadata("returns", "ms");

export default function Page() {
  return <PolicyPage policy="returns" locale="ms" />;
}

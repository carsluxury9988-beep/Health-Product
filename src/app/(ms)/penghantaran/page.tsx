import { PolicyPage, policyMetadata } from "@/components/pages/policy";

export const metadata = policyMetadata("shipping", "ms");

export default function Page() {
  return <PolicyPage policy="shipping" locale="ms" />;
}

import { PolicyPage, policyMetadata } from "@/components/pages/policy";

export const metadata = policyMetadata("terms", "ms");

export default function Page() {
  return <PolicyPage policy="terms" locale="ms" />;
}

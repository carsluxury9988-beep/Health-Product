import { PolicyPage, policyMetadata } from "@/components/pages/policy";

export const metadata = policyMetadata("privacy", "ms");

export default function Page() {
  return <PolicyPage policy="privacy" locale="ms" />;
}

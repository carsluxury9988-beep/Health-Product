import { PolicyPage, policyMetadata } from "@/components/pages/policy";

export const metadata = policyMetadata("privacy", "en");

export default function Page() {
  return <PolicyPage policy="privacy" locale="en" />;
}

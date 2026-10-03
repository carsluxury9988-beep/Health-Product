import type { ReactNode } from "react";
import "@/app/globals.css";
import { SiteDocument } from "@/components/site-document";
import { baseMetadata, baseViewport } from "@/lib/layout-metadata";

export const metadata = baseMetadata;
export const viewport = baseViewport;

export default function MalayLayout({ children }: { children: ReactNode }) {
  return <SiteDocument locale="ms">{children}</SiteDocument>;
}

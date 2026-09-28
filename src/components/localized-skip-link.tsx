"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getMessages } from "@/i18n";

export function LocalizedSkipLink() {
  const pathname = usePathname() ?? "/";
  const locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ms";
  const t = getMessages(locale);
  return <Link className="skip-link" href="#main-content">{t.nav.skip}</Link>;
}

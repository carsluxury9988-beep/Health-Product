"use client";

import { useEffect } from "react";

export function LocaleDocument({ locale }: { locale: "ms-MY" | "en-MY" }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}

import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { sans } from "@/lib/fonts";
import { GoogleAnalytics } from "@/components/google-analytics";

export const metadata: Metadata = {
  title: "Halaman tidak ditemui | Lebih Yakin",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="ms-MY" className={sans.variable}>
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <main id="main-content" className="section">
          <div className="container status-page">
            <p className="eyebrow">404</p>
            <h1>Halaman tidak ditemui</h1>
            <p className="page-lead" lang="en-MY">Page not found.</p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/">Laman utama</Link>
              <Link className="btn btn-ghost" href="/en">English home</Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

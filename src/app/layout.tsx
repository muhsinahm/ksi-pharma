import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Toaster } from "@/components/ui/sonner";
import { SITE_NAME, SITE_URL, organizationJsonLd, seo } from "@/lib/seo";

// Self-hosted variable fonts (latin subset); next/font preloads them and avoids layout shift.
const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-inter",
});
const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin.woff2",
  weight: "300 700",
  display: "swap",
  variable: "--font-space-grotesk",
});

const defaults = seo({
  title: "Trusted Online Pharmacy in Pakistan",
  description:
    "Order authentic medicines, vitamins, and healthcare essentials online from KS International, a trusted pharmacy in Lahore with delivery across Pakistan.",
  path: "/",
});

// Site-wide defaults. No canonical here: each page sets its own, and 404s must not inherit one.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...defaults,
  alternates: undefined,
  authors: [{ name: SITE_NAME }],
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <JsonLd data={organizationJsonLd()} />
        <div className="flex min-h-screen flex-col bg-background">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}

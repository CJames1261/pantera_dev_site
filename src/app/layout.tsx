import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const SITE_URL = "https://www.agenticaiutah.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pantera Claw | AI & Data Consulting",
    template: "%s | Pantera Claw",
  },
  description:
    "Salt Lake City AI and data consulting. Analytics, dashboards, AI automation, and data infrastructure for growing businesses.",
  authors: [{ name: "Pantera Claw" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Pantera Claw",
    locale: "en_US",
    url: SITE_URL,
    title: "Pantera Claw | AI & Data Consulting",
    description:
      "Salt Lake City data and AI consulting for small and mid-size businesses. Analytics, custom dashboards, AI workflow automation, and data infrastructure.",
    images: [
      {
        url: "/Pantera_Claw_hero.webp",
        alt: "Pantera Claw — AI and data consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pantera Claw | AI & Data Consulting",
    description:
      "Salt Lake City data and AI consulting for small and mid-size businesses. Analytics, dashboards, AI automation, and data infrastructure.",
    images: ["/Pantera_Claw_hero.webp"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/Pantera_Claw_hero.webp", type: "image/webp" }],
    apple: [{ url: "/Pantera_Claw_hero.webp" }],
  },
  other: {
    "geo.region": "US-UT",
    "geo.placename": "Salt Lake City, Utah",
    "google-site-verification": "485ePLmmCK7L3oTn3v1I3Mdmbff22nzYKVR4a8DuhEo",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090B",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload LCP hero image so the browser fetches it before JS executes */}
        <link
          rel="preload"
          as="image"
          href="/Pantera_Claw_hero.webp"
          type="image/webp"
          fetchPriority="high"
        />

        {/* Fonts (non-render-blocking) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: "#000" }}>
        <ScrollToTop />
        <SkipLink />
        <Navbar />
        <main id="main-content" className="relative z-10 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

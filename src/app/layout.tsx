import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const SITE_URL = "https://www.agenticaiutah.com";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

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
        width: 480,
        height: 480,
        alt: "Pantera Claw — AI and data consulting logo",
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/Pantera_Claw_hero.webp", type: "image/webp" },
    ],
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Pantera Claw",
  alternateName: "Pantera Claw AI & Data Consulting",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/Pantera_Claw_hero.webp`,
    width: 480,
    height: 480,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+18018980911",
    email: "info@panteraclaw.com",
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: ["en"],
  },
  sameAs: ["https://github.com/CJames1261"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Preload LCP hero image so the browser fetches it before JS executes */}
        <link
          rel="preload"
          as="image"
          href="/Pantera_Claw_hero.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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

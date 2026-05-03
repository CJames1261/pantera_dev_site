import type { Metadata } from "next";
import ContactView from "./ContactView";

const SITE_URL = "https://www.agenticaiutah.com";

export const metadata: Metadata = {
  title: { absolute: "Contact | Pantera Claw — Start a Data & AI Conversation" },
  description:
    "Tell us about your data project. We start with a free 30-minute call. Salt Lake City based, serving clients nationwide. info@panteraclaw.com · +1 (801) 898-0911.",
  alternates: { canonical: "/contact" },
};

const contactBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumb) }}
      />
      <ContactView />
    </>
  );
}

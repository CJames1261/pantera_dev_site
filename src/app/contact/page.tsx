import type { Metadata } from "next";
import ContactView from "./ContactView";

const SITE_URL = "https://www.agenticaiutah.com";

export const metadata: Metadata = {
  title: { absolute: "Contact Pantera Claw | Start a Data & AI Conversation" },
  description:
    "Book a free 30-minute consultation with Pantera Claw. Salt Lake City based; Utah and nationwide remote engagements welcome.",
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

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#page`,
  url: `${SITE_URL}/contact`,
  name: "Contact Pantera Claw",
  description:
    "Get in touch with Pantera Claw. Free consultation meeting for AI and data consulting projects. Salt Lake City based, serving clients nationwide.",
  inLanguage: "en-US",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  mainEntity: {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Pantera Claw",
    url: SITE_URL,
    telephone: "+18018980911",
    email: "info@panteraclaw.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Salt Lake City",
      addressRegion: "UT",
      addressCountry: "US",
    },
    openingHours: "Mo-Fr 09:00-17:00",
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumb) }}
      />
      <ContactView />
    </>
  );
}

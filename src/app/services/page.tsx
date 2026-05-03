import type { Metadata } from "next";
import ServicesView from "./ServicesView";
import { servicePillsMeta } from "./data";

const SITE_URL = "https://www.agenticaiutah.com";

export const metadata: Metadata = {
  title: { absolute: "Services | Pantera Claw — Data Consulting, AI Automation, Dashboards" },
  description:
    "Our services: business web development, database management, custom dashboards, AI workflow automation, business analytics, data strategy, BI solutions, and machine learning consulting.",
  alternates: { canonical: "/services" },
};

const servicesJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pantera Claw Consulting Services",
    itemListElement: servicePillsMeta.map((pill, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: pill.title,
        description: pill.description,
        url: `${SITE_URL}/services#${pill.id}`,
        provider: {
          "@type": "Organization",
          name: "Pantera Claw",
          url: SITE_URL,
        },
        areaServed: [
          { "@type": "State", name: "Utah" },
          { "@type": "Country", name: "United States" },
        ],
      },
    })),
  },
];

export default function ServicesPage() {
  return (
    <>
      {servicesJsonLd.map((schema, i) => (
        <script
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ServicesView />
    </>
  );
}

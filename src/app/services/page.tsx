import type { Metadata } from "next";
import ServicesView from "./ServicesView";
import { servicePillsMeta } from "./data";

const SITE_URL = "https://www.agenticaiutah.com";

export const metadata: Metadata = {
  title: { absolute: "AI & Data Consulting Services in Salt Lake City | Pantera Claw" },
  description:
    "AI consulting, custom dashboards, data pipelines, and analytics for SLC and Utah businesses. Five disciplines, one accountable partner.",
  alternates: { canonical: "/services" },
};

const servicesFaq = [
  {
    q: "How long does a typical AI or data consulting engagement take?",
    a: "Most engagements run 4–12 weeks. A focused data audit or dashboard build is usually 2–4 weeks. A full data pipeline plus analytics layer typically lands at 8–12 weeks. We share a fixed scope and timeline before any commitment, and we publish weekly progress notes so you always know where the project stands.",
  },
  {
    q: "Do you work with small businesses, or only enterprise clients?",
    a: "Small and mid-size businesses are our primary focus. We bring enterprise-grade AI, data, and analytics tools to companies that historically could not afford them. Most of our clients are between 10 and 200 employees, often with no dedicated data team yet.",
  },
  {
    q: "What is the difference between BI consulting and AI consulting?",
    a: "Business intelligence consulting focuses on dashboards, reporting, and explaining what already happened in your data. AI consulting layers on predictive models, automation, and agentic workflows that make decisions or take actions. Most clients need both; we deliver them as one integrated solution.",
  },
  {
    q: "Do you offer ongoing support after the project ends?",
    a: "Yes. Every engagement ends with a 30-day stabilization window included at no additional cost. After that, we offer monthly retainers for monitoring, model retraining, dashboard updates, and continued development. You own all the code and data we build.",
  },
  {
    q: "Can we start with a small pilot before committing to a full project?",
    a: "Yes. We strongly recommend it. Most clients begin with a paid 1–2 week discovery sprint that produces a working prototype, a fixed-scope plan, and a budget for the full engagement. There is no obligation to continue past the pilot.",
  },
];

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
        "@id": `${SITE_URL}/services#${pill.id}`,
        name: pill.title,
        description: pill.description,
        serviceType: pill.title,
        url: `${SITE_URL}/services#${pill.id}`,
        provider: { "@id": `${SITE_URL}/#localbusiness` },
        areaServed: [
          { "@type": "State", name: "Utah" },
          { "@type": "Country", name: "United States" },
        ],
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            description:
              "Project-based pricing scoped per engagement. Final cost depends on scope, depth of discovery and research, technical complexity, and engagement length. Fixed price shared in writing after a free consultation meeting and a brief discovery phase, before any commitment.",
          },
        },
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: servicesFaq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
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

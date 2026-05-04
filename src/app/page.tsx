import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesBento from "@/components/sections/ServicesBento";
import FeaturePipelines from "@/components/sections/FeaturePipelines";
import FeatureDashboards from "@/components/sections/FeatureDashboards";
import FeatureAI from "@/components/sections/FeatureAI";
import FeatureAnalytics from "@/components/sections/FeatureAnalytics";
import CTASection from "@/components/sections/CTASection";
import HomeFAQ from "@/components/sections/HomeFAQ";

const SITE_URL = "https://www.agenticaiutah.com";

export const metadata: Metadata = {
  title: { absolute: "Pantera Claw | AI & Data Consulting for Growing Businesses" },
  description:
    "Salt Lake City AI and data consulting. Custom dashboards, AI workflows, data pipelines, and analytics for small and mid-size businesses.",
  alternates: { canonical: "/" },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#localbusiness`,
  additionalType: "https://www.wikidata.org/wiki/Q1662773",
  name: "Pantera Claw",
  alternateName: "Pantera Claw AI & Data Consulting",
  slogan: "We build the data systems that power your decisions.",
  description:
    "AI and data consulting firm that helps businesses add analytics, custom dashboards, and AI capabilities to their operations. We turn your raw data into insights that drive real business decisions.",
  url: SITE_URL,
  image: `${SITE_URL}/Pantera_Claw_hero.webp`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/Pantera_Claw_icon.webp`,
    width: 192,
    height: 192,
  },
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
  telephone: "+18018980911",
  email: "info@panteraclaw.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Salt Lake City",
    addressRegion: "UT",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.76080,
    longitude: -111.89100,
  },
  areaServed: [
    { "@type": "State", name: "Utah" },
    { "@type": "Country", name: "United States" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Data & AI Consulting Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Analytics Consulting", description: "Custom analytics solutions that help businesses make data driven decisions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Dashboard Development", description: "Interactive dashboards built to visualize your key performance indicators" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Workflow Automation", description: "Agentic AI systems that automate repetitive business processes" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Database Management", description: "Scalable database architecture and data pipeline engineering" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data Strategy Consulting", description: "Strategic roadmaps for becoming a data driven organization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Intelligence Solutions", description: "End to end BI platforms for reporting and operational insights" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Machine Learning Consulting", description: "Custom ML models for prediction, segmentation, and classification" } },
    ],
  },
  knowsAbout: [
    "Business Analytics", "Artificial Intelligence", "Data Engineering",
    "Machine Learning", "ETL Pipelines", "LangGraph", "Agentic AI",
    "Custom Dashboards", "Causal Inference", "Predictive Analytics",
    "Data Visualization", "Data Governance", "Data Management",
    "Data Quality", "Data Strategy", "Business Intelligence",
    "Supply Chain Analytics",
  ],
  priceRange: "$$",
  openingHours: "Mo-Fr 09:00-17:00",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: ["https://github.com/CJames1261"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Pantera Claw",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
};

const homeFaqs = [
  {
    q: "What does Pantera Claw do?",
    a: "Pantera Claw is a Salt Lake City AI and data consulting firm. We build production-grade data pipelines, interactive dashboards, agentic AI workflows, machine-learning systems, modern websites and web applications, and SEO and AI-search optimization for small and mid-size businesses. Most engagements run 4–12 weeks and ship as production-ready code with documentation and a 30-day stabilization window.",
  },
  {
    q: "Where is Pantera Claw based?",
    a: "We are based in Salt Lake City, Utah. We work in person with Utah clients across the Wasatch Front (Salt Lake, Provo, Ogden) and remote with clients across the United States. Most build work happens remotely so we can move fast; in-person discovery and go-live checkpoints are part of how we work locally.",
  },
  {
    q: "What size companies do you work with?",
    a: "We focus on small and mid-size businesses, typically 10 to 200 employees. Many of our clients are operationalizing data and AI for the first time and don't yet have a dedicated data team. We are intentionally not an enterprise-only firm.",
  },
  {
    q: "How do projects typically start?",
    a: "Every engagement starts with a free consultation meeting where we walk through your data, your daily workflows, and the decisions you spend the most time on. From there we share a fixed scope, timeline, and price before any commitment. The first paid step is usually a 1–2 week discovery sprint that produces a working prototype and a written plan.",
  },
];

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <Hero />
      <ServicesBento />
      <FeaturePipelines />
      <FeatureDashboards />
      <FeatureAI />
      <FeatureAnalytics />
      <HomeFAQ faqs={homeFaqs} />
      <CTASection />
    </>
  );
}

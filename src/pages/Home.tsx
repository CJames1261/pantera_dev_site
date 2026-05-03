import Seo from "../components/Seo";
import Hero from "../components/sections/Hero";
import ServicesBento from "../components/sections/ServicesBento";
import FeaturePipelines from "../components/sections/FeaturePipelines";
import FeatureDashboards from "../components/sections/FeatureDashboards";
import FeatureAI from "../components/sections/FeatureAI";
import FeatureAnalytics from "../components/sections/FeatureAnalytics";
import CTASection from "../components/sections/CTASection";

const SITE_URL = "https://www.agenticaiutah.com";

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Pantera Claw",
  description:
    "AI and data consulting firm that helps businesses add analytics, custom dashboards, and AI capabilities to their operations. We turn your raw data into insights that drive real business decisions.",
  url: SITE_URL,
  telephone: "+1-801-898-0911",
  email: "info@panteraclaw.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Salt Lake City",
    addressRegion: "UT",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7608,
    longitude: -111.891,
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
  sameAs: [
    "https://github.com/CJames1261",
  ],
};

export default function Home() {
  return (
    <>
      <Seo
        title="Pantera Claw | AI & Data Consulting for Growing Businesses"
        description="Salt Lake City AI and data consulting. Custom dashboards, AI workflows, data pipelines, and analytics for small and mid-size businesses."
        path="/"
        jsonLd={professionalServiceSchema}
      />
      <Hero />
      <ServicesBento />
      <FeaturePipelines />
      <FeatureDashboards />
      <FeatureAI />
      <FeatureAnalytics />
      <CTASection />
    </>
  );
}

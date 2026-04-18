import Seo from "../components/Seo";
import Hero from "../components/sections/Hero";
import ServicesBento from "../components/sections/ServicesBento";
import FeaturePipelines from "../components/sections/FeaturePipelines";
import FeatureDashboards from "../components/sections/FeatureDashboards";
import FeatureAI from "../components/sections/FeatureAI";
import FeatureAnalytics from "../components/sections/FeatureAnalytics";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Seo
        title="Pantera Claw | AI & Data Consulting for Growing Businesses"
        description="Pantera Claw is a Salt Lake City AI and data consulting firm. We build custom dashboards, AI workflows, data pipelines, and analytics systems for small and mid-size businesses."
        path="/"
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

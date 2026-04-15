import Hero from "../components/sections/Hero";
import ServicesBento from "../components/sections/ServicesBento";
import FeaturePipelines from "../components/sections/FeaturePipelines";
import FeatureDashboards from "../components/sections/FeatureDashboards";
import FeatureAI from "../components/sections/FeatureAI";
import FeatureAnalytics from "../components/sections/FeatureAnalytics";
import StatsStrip from "../components/sections/StatsStrip";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesBento />
      <FeaturePipelines />
      <FeatureDashboards />
      <FeatureAI />
      <FeatureAnalytics />
      <StatsStrip />
      <CTASection />
    </>
  );
}

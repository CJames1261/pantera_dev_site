import { CheckCircle } from "@phosphor-icons/react/ssr";
import ScrollReveal from "../ScrollReveal";

export default function FeatureAnalytics() {
  return (
    <section className="relative z-10 py-12">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div>
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-yellow-400" />
                <span className="text-sm uppercase tracking-widest text-yellow-400">
                  Advanced Analytics & ML
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h2
                className="font-display font-bold tracking-tighter text-text-primary mb-6"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                Predictive models that reveal what&apos;s truly driving your business
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-[520px]">
                Reporting tells you what happened. Our machine learning and
                causal inference tells you why, and what will happen next. We
                build models that turn historical data into forward-looking
                strategy.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div className="flex flex-col gap-3">
                {[
                  "Custom AI and machine learning models fine-tuned to your industry and data",
                  "Causal inference that isolates what truly moves the needle",
                  "Forecasts and recommendations your team can act on immediately",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-accent flex-shrink-0" weight="fill" />
                    <span className="text-text-secondary text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Predictive Visual */}
          <ScrollReveal>
            <div
              className="p-2 rounded-[2rem] border border-border"
              style={{
                backgroundColor: "rgba(19, 19, 22, 0.4)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                className="rounded-[calc(2rem-0.5rem)] bg-surface overflow-hidden aspect-square"
                style={{ boxShadow: "var(--shadow-inner-highlight)" }}
              >
                <img
                  src="/sections/advanced_analytics_viz.webp"
                  alt="A clean line chart with a solid history curve transitioning into a glowing yellow dotted forecast line, with floating bubbles for revenue, customer, and risk indicators above the forecast zone, and a magnifying glass examining the historical curve."
                  width={1200}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

import { ChartBar } from "@phosphor-icons/react/ssr";
import ScrollReveal from "../ScrollReveal";

export default function FeatureDashboards() {
  return (
    <section className="relative z-10 py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Copy (zig-zag: text left this time) */}
          <div>
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-yellow-400" />
                <span className="text-sm uppercase tracking-widest text-yellow-400">
                  Dashboards & BI
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h2
                className="font-display font-bold tracking-tighter text-text-primary mb-6"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                Dashboards your team will actually use
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-[520px]">
                We build interactive reporting platforms in Tableau, Power BI,
                and custom React applications. Real-time KPIs, drill-down
                exploration, and embedded analytics your stakeholders trust.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div className="flex flex-col gap-3">
                {[
                  "Executive-ready reporting",
                  "Self-serve exploration layers",
                  "Real-time streaming dashboards",
                  "Embedded analytics for your product",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <ChartBar size={18} className="text-accent flex-shrink-0" weight="fill" />
                    <span className="text-text-secondary text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Dashboard Visual */}
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
                  src="/sections/dashboard_viz.webp"
                  alt="A clean tablet-style business dashboard showing a large revenue figure with an upward arrow, a trending line chart, and three KPI tiles, surrounded by a coffee cup, clipboard with a checkmark, and a calm smiling face icon to suggest stress-free clarity."
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

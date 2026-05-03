import { CheckCircle } from "@phosphor-icons/react/ssr";
import ScrollReveal from "../ScrollReveal";

export default function FeaturePipelines() {
  return (
    <section className="relative z-10 py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual — right on desktop, below text on mobile. */}
          <ScrollReveal className="order-2">
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
                  src="/sections/data_pipeline_viz.png"
                  alt="Scattered raw spreadsheets, sticky notes, and tangled wires flowing through a glowing yellow funnel into clean dashboard cards: Sales Growth chart, Revenue plus 28 percent, Data Quality all good, Clear answers and confident decisions."
                  width={1200}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Copy — left on desktop */}
          <div className="lg:order-1">
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-yellow-400" />
                <span className="text-sm uppercase tracking-widest text-yellow-400">
                  End-to-End Solutions
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h2
                className="font-display font-bold tracking-tighter text-text-primary mb-6"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                We own the entire pipeline, from raw data to business intelligence
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-[520px]">
                Most vendors hand you one piece of the puzzle. We build the whole
                thing: ingesting your scattered data, cleaning and modeling it,
                storing it in a scalable database, and delivering it through
                dashboards your team actually uses.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div className="flex flex-col gap-3">
                {[
                  "No handoffs, no gaps. One team owns the full stack.",
                  "Raw files to production-ready database in days, not months",
                  "Dashboards that update automatically as new data arrives",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-accent flex-shrink-0" weight="fill" />
                    <span className="text-text-secondary text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

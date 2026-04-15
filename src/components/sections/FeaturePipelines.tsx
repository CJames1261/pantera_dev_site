import {
  ArrowRight,
  CheckCircle,
  FileText,
  Funnel,
  Database,
  ChartBar,
} from "@phosphor-icons/react";
import ScrollReveal from "../ScrollReveal";
import { useInView } from "../../hooks/useInView";

const ease = "cubic-bezier(0.32, 0.72, 0, 1)";

const pipelineStages = [
  {
    icon: FileText,
    label: "Ingest",
    subtitle: "Raw sources",
    color: "#3B82F6",
    items: ["CSVs & APIs", "SaaS exports", "Event streams"],
  },
  {
    icon: Funnel,
    label: "Clean & Model",
    subtitle: "Transform",
    color: "#F59E0B",
    items: ["Deduplication", "Schema mapping", "Business logic"],
  },
  {
    icon: Database,
    label: "Store",
    subtitle: "Warehouse",
    color: "#10B981",
    items: ["Scalable DB", "Version controlled", "Automated loads"],
  },
  {
    icon: ChartBar,
    label: "Deliver",
    subtitle: "Dashboards",
    color: "#E11D48",
    items: ["Live KPIs", "Self-serve BI", "Scheduled reports"],
  },
];

export default function FeaturePipelines() {
  const [stagesRef, stagesInView] = useInView();

  return (
    <section className="relative z-10 py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual — right on desktop */}
          <ScrollReveal className="lg:order-2">
            <div
              className="p-2 rounded-[2rem] border border-border"
              style={{
                backgroundColor: "rgba(19, 19, 22, 0.4)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                className="rounded-[calc(2rem-0.5rem)] bg-surface p-6 lg:p-8"
                style={{ boxShadow: "var(--shadow-inner-highlight)" }}
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
                    End-to-end pipeline
                  </span>
                </div>

                {/* Pipeline flow */}
                <div ref={stagesRef} className="flex flex-col gap-2">
                  {pipelineStages.map((stage, i) => (
                    <div key={stage.label}>
                      <div
                        className="flex items-start gap-4 rounded-xl bg-surface-light border border-border p-4"
                        style={{
                          opacity: stagesInView ? 1 : 0,
                          transform: stagesInView ? "translateX(0)" : "translateX(-20px)",
                          transition: `opacity 0.5s ${ease} ${i * 0.12}s, transform 0.5s ${ease} ${i * 0.12}s`,
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${stage.color}15` }}
                        >
                          <stage.icon
                            size={20}
                            weight="duotone"
                            style={{ color: stage.color }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-display font-semibold text-sm text-text-primary">
                              {stage.label}
                            </span>
                            <span className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider">
                              {stage.subtitle}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {stage.items.map((item) => (
                              <span
                                key={item}
                                className="font-mono text-[11px] text-text-tertiary bg-surface rounded-md px-2 py-0.5 border border-border"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Connector arrow */}
                      {i < pipelineStages.length - 1 && (
                        <div className="flex justify-center py-1">
                          <div
                            style={{
                              opacity: stagesInView ? 1 : 0,
                              transition: `opacity 0.4s ${ease} ${i * 0.12 + 0.3}s`,
                            }}
                          >
                            <ArrowRight
                              size={14}
                              className="text-text-tertiary rotate-90"
                              weight="bold"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Copy — left on desktop */}
          <div className="lg:order-1">
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-accent/20 bg-accent/5 mb-6">
                <span className="font-mono text-xs text-accent tracking-wide uppercase">
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

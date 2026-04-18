import ScrollReveal from "../ScrollReveal";
import { useInView } from "../../hooks/useInView";

const ease = "cubic-bezier(0.32, 0.72, 0, 1)";

const capabilities = [
  {
    label: "Web development",
    detail: "Fast, accessible sites your team can own",
  },
  {
    label: "Database engineering",
    detail: "Clean schemas, reliable backups, sane access",
  },
  {
    label: "Custom dashboards",
    detail: "Operational and executive, tied to live data",
  },
  {
    label: "AI workflow automation",
    detail: "Agentic systems with guardrails and rollback",
  },
  {
    label: "Analytics consulting",
    detail: "Causal, predictive, and diagnostic work",
  },
  {
    label: "Data strategy",
    detail: "12-month roadmaps your board will actually read",
  },
  {
    label: "Business intelligence",
    detail: "Governed semantic layer, self-serve access",
  },
  {
    label: "Machine learning",
    detail: "Production models with monitoring, not demos",
  },
];

export default function StatsStrip() {
  const [gridRef, gridInView] = useInView();

  return (
    <section className="relative z-10 py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div
            className="p-1.5 rounded-[2rem] border border-border"
            style={{
              backgroundColor: "rgba(19, 19, 22, 0.4)",
            }}
          >
            <div
              className="rounded-[calc(2rem-0.375rem)] bg-surface px-6 py-10 lg:px-12 lg:py-14"
              style={{ boxShadow: "var(--shadow-inner-highlight)" }}
            >
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-mono text-[11px] text-accent uppercase tracking-[0.22em]">
                  What we do
                </span>
                <span className="h-px flex-1 bg-border" aria-hidden />
              </div>
              <div
                ref={gridRef}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
              >
                {capabilities.map((cap, i) => (
                  <div
                    key={cap.label}
                    className="border-t border-border pt-5"
                    style={{
                      opacity: gridInView ? 1 : 0,
                      transform: gridInView ? "translateY(0)" : "translateY(20px)",
                      transition: `opacity 0.6s ${ease} ${i * 0.06}s, transform 0.6s ${ease} ${i * 0.06}s`,
                    }}
                  >
                    <div className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider mb-2">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="font-display font-semibold text-text-primary text-base lg:text-lg tracking-tight mb-2">
                      {cap.label}
                    </div>
                    <div className="text-text-secondary text-sm leading-relaxed">
                      {cap.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

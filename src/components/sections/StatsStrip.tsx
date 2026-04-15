import ScrollReveal from "../ScrollReveal";
import { useInView } from "../../hooks/useInView";

const ease = "cubic-bezier(0.32, 0.72, 0, 1)";

const stats = [
  { value: "0", label: "Websites developed" },
  { value: "0", label: "Databases created" },
  { value: "0", label: "Dashboards" },
  { value: "0", label: "Advanced AI/ML systems deployed" },
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
              <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="text-center"
                    style={{
                      opacity: gridInView ? 1 : 0,
                      transform: gridInView ? "translateY(0)" : "translateY(20px)",
                      transition: `opacity 0.6s ${ease} ${i * 0.1}s, transform 0.6s ${ease} ${i * 0.1}s`,
                    }}
                  >
                    <div className="font-display font-bold text-3xl lg:text-4xl text-accent tracking-tight mb-2">
                      {stat.value}
                    </div>
                    <div className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
                      {stat.label}
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

"use client";

import { ChartBar, TrendUp, ArrowUpRight } from "@phosphor-icons/react/ssr";
import ScrollReveal from "../ScrollReveal";
import { useInView } from "../../hooks/useInView";

const ease = "cubic-bezier(0.32, 0.72, 0, 1)";

const kpis = [
  { label: "Monthly Revenue", value: "$2.34M", change: "+12.3%", up: true },
  { label: "Active Users", value: "48,291", change: "+8.7%", up: true },
  { label: "Churn Rate", value: "2.1%", change: "-0.4%", up: false },
];

const chartBars = [38, 52, 44, 67, 58, 73, 61, 82, 70, 88, 76, 92];

export default function FeatureDashboards() {
  const [barsRef, barsInView] = useInView();

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
                className="rounded-[calc(2rem-0.5rem)] bg-surface p-6 lg:p-8"
                style={{ boxShadow: "var(--shadow-inner-highlight)" }}
              >
                {/* KPI cards */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {kpis.map((kpi) => (
                    <div
                      key={kpi.label}
                      className="bg-surface-light rounded-xl p-3"
                    >
                      <div className="font-mono text-[11px] text-text-tertiary uppercase tracking-wide mb-2">
                        {kpi.label}
                      </div>
                      <div className="font-display font-bold text-text-primary text-lg">
                        {kpi.value}
                      </div>
                      <div
                        className={`font-mono text-xs mt-1 flex items-center gap-1 ${
                          kpi.up ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        <TrendUp
                          size={12}
                          weight="bold"
                          style={{
                            transform: kpi.up ? "none" : "rotate(180deg)",
                          }}
                        />
                        {kpi.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart visual */}
                <div className="bg-surface-light rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-text-tertiary uppercase tracking-wide">
                      Revenue Trend (12mo)
                    </span>
                    <ArrowUpRight size={14} className="text-accent" />
                  </div>
                  <div ref={barsRef} className="flex items-end gap-1.5 h-32">
                    {chartBars.map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        style={{
                          backgroundColor:
                            i === chartBars.length - 1
                              ? "var(--color-accent)"
                              : "rgba(250, 204, 21, 0.25)",
                          height: barsInView ? `${height}%` : "0",
                          transition: `height 0.6s ${ease} ${i * 0.05}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

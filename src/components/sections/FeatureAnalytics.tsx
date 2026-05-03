"use client";

import { CheckCircle } from "@phosphor-icons/react/ssr";
import ScrollReveal from "../ScrollReveal";
import { useInView } from "../../hooks/useInView";

const ease = "cubic-bezier(0.32, 0.72, 0, 1)";

const modelMetrics = [
  { label: "Accuracy", value: "98.2%" },
  { label: "Precision", value: "97.8%" },
  { label: "Recall", value: "98.5%" },
  { label: "F1 Score", value: "98.1%" },
];

const predictiveFeatures = [
  { name: "Days since last purchase", importance: 88 },
  { name: "Support ticket frequency", importance: 74 },
  { name: "Monthly spend trend", importance: 61 },
  { name: "Login frequency", importance: 45 },
];

export default function FeatureAnalytics() {
  const [metricsRef, metricsInView] = useInView();
  const [barsRef, barsInView] = useInView();

  return (
    <section className="relative z-10 py-16 lg:py-24">
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
                Predictive models that reveal what's truly driving your business
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

          {/* Right — Model Performance Dashboard */}
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
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
                    Model Performance Dashboard
                  </span>
                </div>

                {/* Model name + status */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="font-display font-semibold text-text-primary text-base">
                      Customer Churn Prediction
                    </h3>
                    <span className="font-mono text-xs text-text-tertiary">
                      ML Model v2.1
                    </span>
                  </div>
                  <span className="font-mono text-xs text-green-400 bg-green-400/10 px-2.5 py-1 rounded-full">
                    LIVE
                  </span>
                </div>

                {/* Metrics grid */}
                <div ref={metricsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {modelMetrics.map((m, i) => (
                    <div
                      key={m.label}
                      className="bg-surface-light rounded-xl p-3 text-center"
                      style={{
                        opacity: metricsInView ? 1 : 0,
                        transform: metricsInView ? "translateY(0)" : "translateY(12px)",
                        transition: `opacity 0.5s ${ease} ${i * 0.08}s, transform 0.5s ${ease} ${i * 0.08}s`,
                      }}
                    >
                      <div className="font-mono text-[11px] text-text-tertiary uppercase tracking-wide mb-1.5">
                        {m.label}
                      </div>
                      <div className="font-mono text-xl font-bold text-accent">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Top Predictive Features */}
                <div ref={barsRef} className="pt-5 border-t border-border">
                  <span className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
                    Top Predictive Features
                  </span>
                  <div className="flex flex-col gap-3 mt-4">
                    {predictiveFeatures.map((f, i) => (
                      <div key={f.name} className="flex items-center gap-3">
                        <span className="font-display text-sm text-text-secondary w-44 flex-shrink-0 truncate">
                          {f.name}
                        </span>
                        <div className="flex-1 h-5 bg-surface-light rounded-md overflow-hidden">
                          <div
                            className="h-full rounded-md"
                            style={{
                              background:
                                "linear-gradient(90deg, rgba(250, 204, 21, 0.4), rgba(250, 204, 21, 0.7))",
                              width: barsInView ? `${f.importance}%` : "0",
                              transition: `width 0.7s ${ease} ${i * 0.1}s`,
                            }}
                          />
                        </div>
                        <span className="font-mono text-xs text-text-secondary w-9 text-right flex-shrink-0">
                          {f.importance}%
                        </span>
                      </div>
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

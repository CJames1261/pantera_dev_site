import { motion } from "framer-motion";
import { ChartLineUp, CheckCircle } from "@phosphor-icons/react";
import ScrollReveal from "../ScrollReveal";

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
  return (
    <section className="relative z-10 py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div>
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-accent/20 bg-accent/5 mb-6">
                <ChartLineUp size={14} className="text-accent" weight="fill" />
                <span className="font-mono text-xs text-accent tracking-wide uppercase">
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
                  "98%+ accuracy ML models trained on your actual business data",
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
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {modelMetrics.map((m, i) => (
                    <motion.div
                      key={m.label}
                      className="bg-surface-light rounded-xl p-3 text-center"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.08,
                        ease: [0.32, 0.72, 0, 1],
                      }}
                    >
                      <div className="font-mono text-[11px] text-text-tertiary uppercase tracking-wide mb-1.5">
                        {m.label}
                      </div>
                      <div className="font-mono text-xl font-bold text-accent">
                        {m.value}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Top Predictive Features */}
                <div className="pt-5 border-t border-border">
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
                          <motion.div
                            className="h-full rounded-md"
                            style={{
                              background:
                                "linear-gradient(90deg, rgba(245, 158, 11, 0.4), rgba(245, 158, 11, 0.7))",
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${f.importance}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.7,
                              delay: i * 0.1,
                              ease: [0.32, 0.72, 0, 1],
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

import { CheckCircle } from "@phosphor-icons/react";
import ScrollReveal from "../ScrollReveal";
import { useInView } from "../../hooks/useInView";

const ease = "cubic-bezier(0.32, 0.72, 0, 1)";

const codeLines = [
  { indent: 0, tokens: [{ text: "from", color: "#C084FC" }, { text: " pantera ", color: "#F4F4F5" }, { text: "import", color: "#C084FC" }, { text: " Agent", color: "#60A5FA" }] },
  { indent: 0, tokens: [{ text: "from", color: "#C084FC" }, { text: " pantera.tools ", color: "#F4F4F5" }, { text: "import", color: "#C084FC" }, { text: " sql_query, summarize", color: "#60A5FA" }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ text: "agent", color: "#F4F4F5" }, { text: " = ", color: "#A1A1AA" }, { text: "Agent", color: "#60A5FA" }, { text: "(", color: "#A1A1AA" }] },
  { indent: 1, tokens: [{ text: "model", color: "#FACC15" }, { text: "=", color: "#A1A1AA" }, { text: '"claude-sonnet-4-20250514"', color: "#4ADE80" }] },
  { indent: 1, tokens: [{ text: "tools", color: "#FACC15" }, { text: "=[sql_query, summarize],", color: "#A1A1AA" }] },
  { indent: 1, tokens: [{ text: "memory", color: "#FACC15" }, { text: "=", color: "#A1A1AA" }, { text: "True", color: "#C084FC" }] },
  { indent: 0, tokens: [{ text: ")", color: "#A1A1AA" }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ text: "result", color: "#F4F4F5" }, { text: " = ", color: "#A1A1AA" }, { text: "agent", color: "#F4F4F5" }, { text: ".run(", color: "#A1A1AA" }] },
  { indent: 1, tokens: [{ text: '"Analyze Q1 churn and suggest retention plays"', color: "#4ADE80" }] },
  { indent: 0, tokens: [{ text: ")", color: "#A1A1AA" }] },
];

export default function FeatureAI() {
  const [codeRef, codeInView] = useInView();

  return (
    <section className="relative z-10 py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Code Terminal Visual — right on desktop, below text on mobile. */}
          <ScrollReveal className="order-2">
            <div
              className="p-2 rounded-[2rem] border border-border"
              style={{
                backgroundColor: "rgba(19, 19, 22, 0.4)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                className="rounded-[calc(2rem-0.5rem)] bg-[#0D0D10] overflow-hidden"
                style={{ boxShadow: "var(--shadow-inner-highlight)" }}
              >
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-3 font-mono text-xs text-text-tertiary">
                    agent.py
                  </span>
                </div>
                {/* Code block */}
                <div ref={codeRef} className="p-5 lg:p-6 overflow-x-auto">
                  <pre className="m-0">
                    <code className="font-mono text-sm leading-6">
                      {codeLines.map((line, i) => (
                        <div
                          key={i}
                          style={{
                            paddingLeft: `${line.indent * 1.5}rem`,
                            opacity: codeInView ? 1 : 0,
                            transform: codeInView ? "translateX(0)" : "translateX(-10px)",
                            transition: `opacity 0.4s ${ease} ${i * 0.06}s, transform 0.4s ${ease} ${i * 0.06}s`,
                          }}
                          className="min-h-[1.5rem]"
                        >
                          {line.tokens.map((token, j) => (
                            <span key={j} style={{ color: token.color }}>
                              {token.text}
                            </span>
                          ))}
                        </div>
                      ))}
                      <span className="inline-block w-2 h-4 bg-accent ml-0.5 mt-1 animate-cursor-blink" />
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Copy — left on desktop */}
          <div className="lg:order-1">
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-yellow-400" />
                <span className="text-sm uppercase tracking-widest text-yellow-400">
                  AI & Agents
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h2
                className="font-display font-bold tracking-tighter text-text-primary mb-6"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                AI that works in production, not just demos
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-[520px]">
                We build agentic AI systems, RAG pipelines, and fine-tuned
                models that integrate with your existing data stack. From
                concept to deployed inference endpoint.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div className="flex flex-col gap-3">
                {[
                  "Agentic workflows with tool-use",
                  "RAG pipelines over internal docs",
                  "Fine-tuned models for your domain",
                  "ML-Ops with automated retraining",
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

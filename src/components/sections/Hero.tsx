import { ArrowUpRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import logo from "../../assets/Pantera_Claw.webp";
import ScrollReveal from "../ScrollReveal";

const logoSmall = "/Pantera_Claw_hero.webp";

export default function Hero() {
  return (
    <section className="relative z-10 min-h-[100dvh] flex items-center">
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8 lg:px-16 py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div>
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-accent/20 bg-accent/5 mb-8">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs text-accent tracking-wide uppercase">
                  Data & AI Consulting
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1
                className="font-display font-bold tracking-tighter leading-[1.05] text-text-primary mb-6"
                style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
              >
                We build the data systems
                <span className="text-accent"> that power </span>
                your decisions
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-text-secondary text-lg leading-relaxed max-w-[540px] mb-10">
                Production-grade pipelines, real-time dashboards, and agentic AI
                for growth-stage companies ready to treat their data as
                infrastructure, not an afterthought.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-canvas font-semibold text-base pl-7 pr-2 py-2 rounded-full no-underline transition-all duration-700"
                  style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                >
                  Start a project
                  <span className="w-9 h-9 rounded-full bg-canvas/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px"
                    style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                  >
                    <ArrowUpRight size={16} weight="bold" className="text-canvas" />
                  </span>
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 border border-border-light hover:border-text-tertiary text-text-secondary hover:text-text-primary font-medium text-base px-7 py-3 rounded-full no-underline transition-all duration-500"
                  style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                >
                  Explore services
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Logo Card (Double-Bezel Architecture) */}
          <div className="relative flex items-center justify-center">
            {/* Outer Shell */}
            <div
              className="p-2 rounded-[2rem] border border-border-light w-full max-w-[480px] mx-auto animate-hero-card"
              style={{
                backgroundColor: "rgba(19, 19, 22, 0.6)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* Inner Core */}
              <div
                className="rounded-[calc(2rem-0.5rem)] bg-surface flex items-center justify-center relative overflow-hidden"
                style={{
                  boxShadow: "var(--shadow-inner-highlight)",
                }}
              >
                {/* Ambient glow behind logo */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.3), transparent 70%)",
                  }}
                />
                <img
                  src={logoSmall}
                  srcSet={`${logoSmall} 480w, ${logo} 1024w`}
                  sizes="(max-width: 768px) 362px, 480px"
                  alt="Pantera Claw"
                  className="relative z-10 w-full aspect-square object-cover"
                  fetchPriority="high"
                />
              </div>
            </div>

            {/* Floating accent detail */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full animate-hero-float"
              style={{
                background:
                  "radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

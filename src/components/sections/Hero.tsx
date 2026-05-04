import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

const logo = "/Pantera_Claw.webp";
const logoSmall = "/Pantera_Claw_hero.webp";

export default function Hero() {
  return (
    <section className="relative z-10 min-h-[100dvh] flex items-center">
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8 lg:px-16 py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div>
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-6 bg-yellow-400" />
                <span className="text-sm uppercase tracking-widest text-yellow-400">
                  AI & Data Consulting · Salt Lake City
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
              <p className="text-text-secondary text-lg leading-relaxed max-w-[540px] mb-4">
                <strong className="text-text-primary font-medium">Pantera Claw is a Salt Lake City AI and data consulting firm.</strong>{" "}
                We build production-grade pipelines, real-time dashboards, and
                agentic AI systems for growing businesses ready to treat their
                data as infrastructure, not an afterthought. See how our{" "}
                <Link
                  href="/ai-consulting-salt-lake-city"
                  className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors duration-300"
                >
                  AI consulting in Salt Lake City
                </Link>
                {" "}engagements work.
              </p>
              <p className="text-text-tertiary text-base leading-relaxed max-w-[540px] mb-10">
                Most clients see meaningful payback within their first year.
                We start with a free consultation meeting to map where AI
                actually fits in your business before recommending a single tool.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-between sm:justify-center gap-2 bg-accent hover:bg-accent-hover text-canvas font-semibold text-base pl-7 pr-2 py-2.5 sm:py-2 rounded-full no-underline transition-all duration-700"
                  style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                >
                  Start a project
                  <span
                    className="w-9 h-9 rounded-full bg-canvas/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px"
                    style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                  >
                    <ArrowUpRight size={16} weight="bold" className="text-canvas" />
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-between sm:justify-center gap-2 bg-accent hover:bg-accent-hover text-canvas font-semibold text-base pl-7 pr-2 py-2.5 sm:py-2 rounded-full no-underline transition-all duration-700"
                  style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                >
                  Explore services
                  <span
                    className="w-9 h-9 rounded-full bg-canvas/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px"
                    style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                  >
                    <ArrowUpRight size={16} weight="bold" className="text-canvas" />
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Logo Card (Double-Bezel Architecture). Hidden on mobile to
              put CTAs above the fold; returns at md: breakpoint and up. */}
          <div className="relative hidden md:flex items-center justify-center">
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
                      "radial-gradient(circle at 50% 50%, rgba(250, 204, 21, 0.3), transparent 70%)",
                  }}
                />
                <img
                  src={logoSmall}
                  srcSet={`${logoSmall} 480w, ${logo} 1024w`}
                  sizes="(max-width: 768px) 362px, 480px"
                  alt="Pantera Claw — black panther logomark on dark background"
                  width={480}
                  height={480}
                  className="relative z-10 w-full aspect-square object-cover"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

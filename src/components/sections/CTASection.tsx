import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

export default function CTASection() {
  return (
    <section className="relative z-10 py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div
            className="rounded-[28px] border border-white/10 bg-[#111214]/90 relative overflow-hidden px-6 py-16 lg:px-16 lg:py-24 text-center transition-all duration-300 hover:border-yellow-400/40"
            style={{ boxShadow: "0 18px 50px rgba(0,0,0,0.45)" }}
          >
            {/* Ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(250, 204, 21, 0.08) 0%, transparent 60%)",
              }}
            />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-base font-medium text-white bg-white/15 border border-white/25 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" aria-hidden />
                Ready to start?
              </span>
              <h2
                className="font-display font-bold tracking-tighter text-text-primary mb-6 max-w-[640px] mx-auto"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                Your data should be your competitive advantage
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed max-w-[500px] mx-auto mb-10">
                Let&apos;s talk about what production-grade data infrastructure
                looks like for your company.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-canvas font-semibold text-base pl-8 pr-2 py-2.5 rounded-full no-underline transition-all duration-700"
                style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
              >
                Book a discovery call
                <span className="w-9 h-9 rounded-full bg-canvas/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px"
                  style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                >
                  <ArrowUpRight size={16} weight="bold" className="text-canvas" />
                </span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

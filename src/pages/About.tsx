import {
  Target,
  Handshake,
  Lightning,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import logo from "../assets/Pantera_Claw.webp";

const values = [
  {
    icon: Target,
    title: "Precision over volume",
    description:
      "We take fewer clients and go deeper. Every engagement gets senior engineers, not junior rotations.",
  },
  {
    icon: Handshake,
    title: "Ownership mentality",
    description:
      "We build systems as if we'll maintain them ourselves. Because good architecture means your team can own it after we leave.",
  },
  {
    icon: Lightning,
    title: "Velocity with discipline",
    description:
      "Fast iteration, production-grade standards. We ship weekly, not quarterly, with testing and observability from day one.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency by default",
    description:
      "You see the code, the architecture decisions, and the tradeoffs. No black boxes, no vendor lock-in to our team.",
  },
];

const howWeHelp = [
  "Audit your existing data stack and identify bottlenecks",
  "Design and build production-grade data pipelines",
  "Create dashboards and analytics your team trusts",
  "Deploy AI and ML models that run reliably in production",
  "Train your team to own and extend what we build",
  "Provide ongoing advisory as your data needs evolve",
];

export default function About() {
  return (
    <main className="relative z-10 pt-32 lg:pt-40 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <ScrollReveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-border-light bg-surface mb-6">
                <span className="font-mono text-xs text-text-secondary tracking-wide uppercase">
                  About Pantera Claw
                </span>
              </div>
              <h1
                className="font-display font-bold tracking-tighter text-text-primary mb-6"
                style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
              >
                We turn messy data into systems your company can grow on
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed max-w-[540px]">
                Pantera Claw is a data infrastructure, analytics, and AI consulting
                firm based in Salt Lake City, Utah. We work with growth-stage
                companies that have outgrown spreadsheets and scripts but
                aren't ready to build a 20-person data org.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right">
            <div
              className="p-2 rounded-[2rem] border border-border"
              style={{
                backgroundColor: "rgba(19, 19, 22, 0.4)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                className="rounded-[calc(2rem-0.5rem)] bg-surface flex items-center justify-center relative overflow-hidden"
                style={{ boxShadow: "var(--shadow-inner-highlight)" }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.3), transparent 70%)",
                  }}
                />
                <img
                  src={logo}
                  alt="Pantera Claw"
                  className="relative z-10 w-full aspect-square object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Mission */}
        <ScrollReveal>
          <div className="mb-24">
            <div
              className="p-1.5 rounded-[2rem] border border-border"
              style={{ backgroundColor: "rgba(19, 19, 22, 0.4)" }}
            >
              <div
                className="rounded-[calc(2rem-0.375rem)] bg-surface px-6 py-12 lg:px-16 lg:py-16 text-center"
                style={{ boxShadow: "var(--shadow-inner-highlight)" }}
              >
                <h2
                  className="font-display font-bold tracking-tighter text-text-primary mb-6 max-w-[640px] mx-auto"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                >
                  Data should accelerate your business, not slow it down
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed max-w-[580px] mx-auto">
                  Too many companies treat data as an IT cost center instead of a
                  strategic asset. We exist to change that. Every pipeline,
                  dashboard, and model we build is designed to make your team
                  faster, your decisions sharper, and your growth more predictable.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Values Grid */}
        <div className="mb-24">
          <ScrollReveal>
            <div className="mb-12">
              <h2
                className="font-display font-bold tracking-tighter text-text-primary mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
              >
                What drives us
              </h2>
              <p className="text-text-secondary text-lg max-w-[480px]">
                Four principles that shape every engagement, every line of code,
                every recommendation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div
                  className="p-1.5 rounded-[2rem] border border-border hover:border-border-light transition-all duration-700 h-full"
                  style={{
                    backgroundColor: "rgba(19, 19, 22, 0.4)",
                    transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                  }}
                >
                  <div
                    className="rounded-[calc(2rem-0.375rem)] bg-surface p-8 h-full"
                    style={{ boxShadow: "var(--shadow-inner-highlight)" }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                      <value.icon size={24} className="text-accent" weight="duotone" />
                    </div>
                    <h3 className="font-display font-bold text-text-primary text-lg mb-3">
                      {value.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* How We Help */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          <ScrollReveal>
            <div>
              <h2
                className="font-display font-bold tracking-tighter text-text-primary mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
              >
                How we work with you
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed max-w-[480px]">
                Every engagement starts with understanding where you are,
                where you need to be, and the fastest responsible path between
                those two points.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col gap-4">
              {howWeHelp.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border"
                >
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" weight="fill" />
                  <span className="text-text-secondary text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center">
            <h2
              className="font-display font-bold tracking-tighter text-text-primary mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Ready to talk?
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-[460px] mx-auto">
              We start every relationship with a free 30-minute assessment.
              No pitch decks, just an honest conversation about your data.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-canvas font-semibold text-base pl-8 pr-2 py-2.5 rounded-full no-underline transition-all duration-700"
              style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
            >
              Schedule a call
              <span className="w-9 h-9 rounded-full bg-canvas/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px"
                style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
              >
                <ArrowUpRight size={16} weight="bold" className="text-canvas" />
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}

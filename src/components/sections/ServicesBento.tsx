import { Link } from "react-router-dom";
import {
  Globe,
  Database,
  ChartBar,
  ChartLineUp,
  Brain,
  Lightbulb,
  ArrowUpRight,
} from "@phosphor-icons/react";
import ScrollReveal from "../ScrollReveal";

const servicesRow1 = [
  {
    icon: Globe,
    title: "Business Web Development",
    description:
      "Custom-built websites and web applications tailored to your business. Fast, responsive, and designed to convert visitors into clients.",
    color: "#3B82F6",
    hash: "web",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Scalable, secure database architecture. From schema design to migration, optimization, and ongoing administration across SQL and NoSQL systems.",
    color: "#10B981",
    hash: "database",
  },
  {
    icon: ChartBar,
    title: "Dashboards & Visualizations",
    description:
      "Interactive dashboards and data visualizations your team will actually use. Real-time KPIs, drill-down exploration, and embedded analytics.",
    color: "#F59E0B",
    hash: "dashboards",
  },
];

const servicesRow2 = [
  {
    icon: ChartLineUp,
    title: "Advanced Analytics",
    description:
      "Predictive modeling, statistical analysis, and machine learning applied to your business data. From churn prediction to demand forecasting.",
    color: "#E11D48",
    span: "lg:col-span-3",
    hash: "analytics",
  },
  {
    icon: Brain,
    title: "Agentic Workflow Design",
    description:
      "AI-powered autonomous workflows that handle complex, multi-step processes. Tool-use agents, RAG pipelines, and intelligent automation.",
    color: "#8B5CF6",
    span: "lg:col-span-2",
    hash: "ai",
  },
];

export default function ServicesBento() {
  return (
    <section className="relative z-10 py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-accent/20 bg-accent/5 mb-6">
              <Lightbulb size={14} className="text-accent" weight="fill" />
              <span className="font-mono text-xs text-accent tracking-wide uppercase">
                What we do
              </span>
            </div>
            <h2
              className="font-display font-bold tracking-tighter text-text-primary mb-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Full-stack data expertise
            </h2>
            <p className="text-text-secondary text-lg max-w-[560px] leading-relaxed">
              Five disciplines, one unified team. We cover every layer from
              web presence to autonomous AI workflows.
            </p>
          </div>
        </ScrollReveal>

        {/* Row 1 — 3 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {servicesRow1.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div
                className="group p-1.5 rounded-[2rem] border border-border hover:border-border-light transition-all duration-700 h-full"
                style={{
                  backgroundColor: "rgba(19, 19, 22, 0.4)",
                  transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                }}
              >
                <div
                  className="rounded-[calc(2rem-0.375rem)] bg-surface p-8 h-full flex flex-col"
                  style={{ boxShadow: "var(--shadow-inner-highlight)" }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon size={24} weight="duotone" style={{ color: service.color }} />
                  </div>
                  <h3 className="font-display font-semibold text-text-primary text-lg mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <Link
                    to={`/services#${service.hash}`}
                    className="mt-auto inline-flex items-center gap-1.5 text-accent font-semibold text-sm no-underline hover:gap-2.5 transition-all duration-500 group/link"
                    style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                  >
                    Explore {service.title}
                    <ArrowUpRight size={14} weight="bold" className="text-accent" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Row 2 — 60/40 split */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {servicesRow2.map((service, i) => (
            <ScrollReveal
              key={service.title}
              delay={0.3 + i * 0.1}
              className={service.span}
            >
              <div
                className="group p-1.5 rounded-[2rem] border border-border hover:border-border-light transition-all duration-700 h-full"
                style={{
                  backgroundColor: "rgba(19, 19, 22, 0.4)",
                  transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                }}
              >
                <div
                  className="rounded-[calc(2rem-0.375rem)] bg-surface p-8 h-full flex flex-col"
                  style={{ boxShadow: "var(--shadow-inner-highlight)" }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon size={24} weight="duotone" style={{ color: service.color }} />
                  </div>
                  <h3 className="font-display font-semibold text-text-primary text-lg mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <Link
                    to={`/services#${service.hash}`}
                    className="mt-auto inline-flex items-center gap-1.5 text-accent font-semibold text-sm no-underline hover:gap-2.5 transition-all duration-500 group/link"
                    style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                  >
                    Explore {service.title}
                    <ArrowUpRight size={14} weight="bold" className="text-accent" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

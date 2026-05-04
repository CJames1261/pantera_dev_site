import Link from "next/link";
import {
  Globe,
  Database,
  ChartBar,
  ChartLineUp,
  Brain,
  ArrowUpRight,
  ChatCircleDots,
} from "@phosphor-icons/react/ssr";
import ScrollReveal from "../ScrollReveal";

const services = [
  {
    icon: Globe,
    title: "Business Web Development",
    description:
      "Custom-built websites and web applications tailored to your business. Fast, responsive, and designed to convert visitors into clients.",
    color: "#3B82F6",
    hash: "web",
    span: "",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Scalable, secure database architecture. From schema design to migration, optimization, and ongoing administration across SQL and NoSQL systems.",
    color: "#10B981",
    hash: "database",
    span: "",
  },
  {
    icon: ChartBar,
    title: "Dashboards & Visualizations",
    description:
      "Interactive dashboards and data visualizations your team will actually use. Real-time KPIs, drill-down exploration, and embedded analytics.",
    color: "#FACC15",
    hash: "dashboards",
    span: "",
  },
  {
    icon: ChartLineUp,
    title: "Advanced Analytics",
    description:
      "Predictive modeling, statistical analysis, and machine learning applied to your business data. From churn prediction to demand forecasting.",
    color: "#E11D48",
    hash: "analytics",
    span: "",
  },
  {
    icon: Brain,
    title: "Agentic Workflow Design",
    description:
      "AI-powered autonomous workflows that handle complex, multi-step processes. Tool-use agents, RAG pipelines, and intelligent automation.",
    color: "#8B5CF6",
    hash: "ai",
    span: "sm:col-span-2",
  },
];

export default function ServicesBento() {
  return (
    <section className="relative z-10 py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-yellow-400" />
              <span className="text-sm uppercase tracking-widest text-yellow-400">
                What we do
              </span>
            </div>
            <h2
              className="font-display font-bold tracking-tighter text-text-primary mb-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              AI Consulting, Data Analytics & Business Intelligence Solutions
            </h2>
            <p className="text-text-secondary text-lg max-w-[560px] leading-relaxed">
              We provide web development, data analytics, and AI services for
              growing businesses — delivered through five integrated disciplines.
            </p>
          </div>
        </ScrollReveal>

        {/* Conversation block (left) + Service cards (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Discovery / consulting conversation block */}
          <ScrollReveal className="lg:col-span-5">
            <div
              className="p-1.5 rounded-[2rem] border border-border h-full"
              style={{
                backgroundColor: "rgba(19, 19, 22, 0.4)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                className="rounded-[calc(2rem-0.375rem)] bg-surface overflow-hidden h-full flex flex-col"
                style={{ boxShadow: "var(--shadow-inner-highlight)" }}
              >
                {/* Image (top of vertical card) */}
                <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-square overflow-hidden flex-shrink-0">
                  <img
                    src="/sections/ai_strategy_meeting.webp"
                    alt="Two business owners sitting across a table with a laptop between them, friendly conversation atmosphere with floating AI and dashboard concept icons above the laptop, illustrating a discovery conversation about where AI fits in the business."
                    width={1200}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Copy */}
                <div className="p-6 sm:p-8 md:p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <ChatCircleDots size={16} weight="fill" className="text-accent" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                      Start with a conversation
                    </span>
                  </div>
                  <h3
                    className="font-display font-bold text-text-primary tracking-tight mb-4"
                    style={{ fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)" }}
                  >
                    AI is not always the answer. We sit down with you to figure out where it actually is.
                  </h3>
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-4">
                    Before we recommend a single tool, we spend a free
                    consultation meeting walking through your business — your
                    data, your daily workflows, the decisions you spend the
                    most time on. Then we tell you honestly whether AI,
                    analytics, a dashboard, or something simpler is the right
                    next move. No pitch deck, no pressure.
                  </p>
                  <p className="text-text-tertiary text-xs md:text-sm leading-relaxed mb-6">
                    You leave with a clear picture of which of the services on
                    the right apply to you, a rough budget range, and a written
                    summary you can keep whether or not you work with us.
                  </p>
                  <div className="mt-auto">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-canvas font-semibold text-sm pl-5 pr-2 py-2 rounded-full no-underline transition-all duration-700"
                      style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                    >
                      Book a free consultation
                      <span
                        className="w-7 h-7 rounded-full bg-canvas/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px"
                        style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                      >
                        <ArrowUpRight size={12} weight="bold" className="text-canvas" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Service cards grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              {services.map((service, i) => (
                <ScrollReveal
                  key={service.title}
                  delay={0.1 + i * 0.08}
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
                      className="rounded-[calc(2rem-0.375rem)] bg-surface p-5 sm:p-6 md:p-7 h-full flex flex-col"
                      style={{ boxShadow: "var(--shadow-inner-highlight)" }}
                    >
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4"
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
                        href={`/services#${service.hash}`}
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
        </div>
      </div>
    </section>
  );
}

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
import {
  Globe as LucideGlobe,
  Database as LucideDatabase,
  Brain as LucideBrain,
  BarChart3,
  TrendingUp,
  ArrowRight as LucideArrowRight,
  ShieldCheck,
} from "lucide-react";
import ScrollReveal from "../ScrollReveal";

// Mobile-only service data: outcome-focused copy + bolder color palette.
// Kept separate from the `services` array so the desktop styling stays untouched.
const mobileServices = [
  {
    title: "Business Web Development",
    description: "High-converting, SEO-optimized websites built to grow your business.",
    icon: LucideGlobe,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-white/10",
    hash: "web",
  },
  {
    title: "Database Management",
    description: "Secure, scalable, and efficient database solutions.",
    icon: LucideDatabase,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-white/10",
    hash: "database",
  },
  {
    title: "Dashboards & Visualizations",
    description: "Interactive dashboards that turn data into clear insights.",
    icon: BarChart3,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-white/10",
    hash: "dashboards",
  },
  {
    title: "Advanced Analytics",
    description: "Uncover trends, predict outcomes, and drive smarter decisions.",
    icon: TrendingUp,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-white/10",
    hash: "analytics",
  },
  {
    title: "Agentic Workflow Design",
    description: "Automate processes and build intelligent AI-powered workflows.",
    icon: LucideBrain,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-white/10",
    hash: "ai",
  },
];

const services = [
  {
    icon: Globe,
    title: "Business Web Development",
    description:
      "Custom-built websites and web applications tailored to your business. Fast, responsive, and designed to convert visitors into clients.",
    mobileDescription:
      "High-converting, SEO-optimized websites built to grow your business.",
    color: "#3B82F6",
    hash: "web",
    span: "",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Scalable, secure database architecture. From schema design to migration, optimization, and ongoing administration across SQL and NoSQL systems.",
    mobileDescription:
      "Secure, scalable, and efficient database solutions.",
    color: "#10B981",
    hash: "database",
    span: "",
  },
  {
    icon: ChartBar,
    title: "Dashboards & Visualizations",
    description:
      "Interactive dashboards and data visualizations your team will actually use. Real-time KPIs, drill-down exploration, and embedded analytics.",
    mobileDescription:
      "Interactive dashboards that turn data into clear insights.",
    color: "#FACC15",
    hash: "dashboards",
    span: "",
  },
  {
    icon: ChartLineUp,
    title: "Advanced Analytics",
    description:
      "Predictive modeling, statistical analysis, and machine learning applied to your business data. From churn prediction to demand forecasting.",
    mobileDescription:
      "Uncover trends, predict outcomes, and drive smarter decisions.",
    color: "#E11D48",
    hash: "analytics",
    span: "",
  },
  {
    icon: Brain,
    title: "Agentic Workflow Design",
    description:
      "AI-powered autonomous workflows that handle complex, multi-step processes. Tool-use agents, RAG pipelines, and intelligent automation.",
    mobileDescription:
      "Automate processes and build intelligent AI-powered workflows.",
    color: "#8B5CF6",
    hash: "ai",
    span: "sm:col-span-2",
  },
];

export default function ServicesBento() {
  return (
    <section className="relative z-10 py-12 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Section header (sm+ only). On mobile, the new bold "Services that
            drive results" header inside the cards column takes over. */}
        <ScrollReveal>
          <div className="hidden sm:block mb-12">
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

        {/* MOBILE-ONLY top header — sits above the conversation block on
            mobile so the user reads the bold "Services That Drive Results"
            promise first, before the discovery conversation framing. */}
        <ScrollReveal>
          <div className="sm:hidden mb-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-yellow-400">
              What We Do
            </p>
            <div className="mb-5 h-[3px] w-12 rounded-full bg-yellow-400" />
            <h2 className="font-display text-[34px] font-black leading-[1] tracking-[-0.035em] text-text-primary">
              AI Consulting, Data Analytics &amp; Business Intelligence Solutions
            </h2>
            <p className="mt-5 text-base leading-7 text-text-secondary">
              We provide web development, data analytics, and AI services for
              growing businesses — delivered through five integrated
              disciplines.
            </p>
          </div>
        </ScrollReveal>

        {/* Conversation block (left) + Service cards (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4">
          {/* Discovery / consulting conversation block */}
          <ScrollReveal className="lg:col-span-5">
            <div
              className="group/conv rounded-[28px] border border-white/10 bg-[#111214]/90 overflow-hidden h-full shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-[#151515]"
            >
              <div className="overflow-hidden h-full flex flex-col">
                {/* Icon + title row — same pattern as a service card's
                    icon block + title. */}
                <div className="flex items-center gap-4 px-5 pt-5 sm:px-8 sm:pt-6 md:px-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-yellow-400/10 flex-shrink-0">
                    <ChatCircleDots size={22} weight="duotone" className="text-yellow-400" />
                  </div>
                  <h3 className="font-display text-[20px] font-extrabold tracking-[-0.02em] leading-tight text-yellow-400">
                    Let&rsquo;s start with a conversation
                  </h3>
                </div>

                {/* Image */}
                <div className="mt-5 aspect-[4/3] sm:aspect-[16/10] lg:aspect-square overflow-hidden flex-shrink-0 mx-5 sm:mx-8 md:mx-10 rounded-2xl">
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
                <div className="p-5 sm:p-8 md:p-10 flex flex-col flex-1">
                  {/* Framing headline — sits below the eyebrow title to anchor the section. */}
                  <h4 className="font-display text-[22px] sm:text-[24px] font-extrabold tracking-[-0.02em] leading-tight text-text-primary mb-5">
                    AI is not always the answer. We sit down with you to figure
                    out where it actually is.
                  </h4>

                  <p className="text-text-secondary text-[16px] leading-6 mb-4">
                    Before we recommend a single tool, we spend a free
                    consultation meeting walking through your business — your
                    data, your daily workflows, the decisions you spend the
                    most time on. Then we tell you honestly whether AI,
                    analytics, a dashboard, or something simpler is the right
                    next move. No pitch deck, no pressure.
                  </p>
                  <p className="text-text-tertiary text-[14px] leading-6 mb-6">
                    You leave with a clear picture of which of the services on
                    the right apply to you, a rough budget range, and a written
                    summary you can keep whether or not you work with us.{" "}
                    <Link
                      href="/ai-consulting-salt-lake-city"
                      className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors duration-300"
                    >
                      Based in Salt Lake City
                    </Link>
                    {" "}— happy to meet on-site if you are local.
                  </p>
                  <div className="mt-auto">
                    <Link
                      href="/contact"
                      className="group/booking inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-canvas font-semibold text-sm pl-5 pr-2 py-2 rounded-full no-underline transition-all duration-300"
                    >
                      Book a free consultation
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-canvas text-yellow-400 transition-transform duration-300 group-hover/booking:translate-x-1"
                      >
                        <LucideArrowRight className="h-5 w-5" strokeWidth={2.7} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Service cards grid */}
          <div className="lg:col-span-7 h-full">
            {/* MOBILE (<sm): "SERVICES" eyebrow + 5 separate cards + bottom CTA. */}
            <div className="sm:hidden">
              <ScrollReveal>
                <div className="mb-6 flex items-center gap-3">
                  <div className="w-1 h-6 bg-yellow-400" />
                  <span className="text-sm uppercase tracking-widest text-yellow-400">
                    Services
                  </span>
                </div>
              </ScrollReveal>

              <div className="space-y-4">
                {mobileServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.title}
                      href={`/services#${service.hash}`}
                      className={`group/card relative block w-full overflow-hidden rounded-[28px] border ${service.border} bg-[#111214]/90 p-5 text-left no-underline transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-[#151515] active:scale-[0.98]`}
                      style={{ boxShadow: "0 18px 50px rgba(0,0,0,0.45)" }}
                    >
                      <div className="relative flex items-center gap-5">
                        {/* Icon block */}
                        <div
                          className={`flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[22px] border ${service.border} ${service.bg}`}
                        >
                          <Icon
                            className={`h-10 w-10 ${service.color}`}
                            strokeWidth={2.2}
                          />
                        </div>

                        {/* Text */}
                        <div className="min-w-0 flex-1 pr-2">
                          <h3 className="mb-2 font-display text-[20px] font-extrabold leading-tight tracking-[-0.02em] text-text-primary">
                            {service.title}
                          </h3>

                          <p className="text-[16px] leading-6 text-text-secondary">
                            {service.description}
                          </p>
                        </div>

                        {/* Arrow */}
                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black transition-transform duration-300 group-hover/card:translate-x-1"
                          style={{ boxShadow: "0 0 30px rgba(250,204,21,0.25)" }}
                          aria-hidden="true"
                        >
                          <LucideArrowRight className="h-6 w-6" strokeWidth={2.7} />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Bottom CTA strip → /contact */}
              <Link
                href="/contact"
                className="group/cta mt-8 flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-left no-underline transition hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                    <ShieldCheck className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm text-text-tertiary">
                      Tailored solutions. Real results.
                    </p>
                    <p className="text-base font-semibold text-yellow-400">
                      Let&rsquo;s build something impactful.
                    </p>
                  </div>
                </div>
                <LucideArrowRight className="h-6 w-6 text-yellow-400 transition group-hover/cta:translate-x-1" />
              </Link>
            </div>

            {/* DESKTOP (sm+) — original 2-col grid + featured-span structure
                preserved; each card uses the new pill visual treatment
                (rounded shell, single layer, yellow circular arrow, matching
                typography, lift-on-hover). Long descriptions and Phosphor
                icons retained from the original design. */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-4 h-full">
              {services.map((service, i) => (
                <ScrollReveal
                  key={service.title}
                  delay={0.1 + i * 0.08}
                  className={service.span}
                >
                  <Link
                    href={`/services#${service.hash}`}
                    className="group/card relative block w-full h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#111214]/90 p-6 text-left no-underline transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-[#151515]"
                    style={{ boxShadow: "0 18px 50px rgba(0,0,0,0.45)" }}
                  >
                    <div className="flex flex-col h-full">
                      {/* Icon block */}
                      <div
                        className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[22px] border border-white/10 mb-5"
                        style={{ backgroundColor: `${service.color}15` }}
                      >
                        <service.icon
                          size={36}
                          weight="duotone"
                          style={{ color: service.color }}
                        />
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-[20px] font-extrabold leading-tight tracking-[-0.02em] text-text-primary mb-3">
                        {service.title}
                      </h3>

                      {/* Long-form description */}
                      <p className="text-text-secondary text-[16px] leading-6 mb-6">
                        {service.description}
                      </p>

                      {/* Label + yellow circular arrow pinned bottom-right */}
                      <div className="mt-auto self-end flex items-center gap-3">
                        <span className="font-display text-sm font-semibold tracking-tight text-yellow-400 transition-colors duration-300">
                          Explore {service.title}
                        </span>
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-black transition-transform duration-300 group-hover/card:translate-x-1"
                          style={{ boxShadow: "0 0 30px rgba(250,204,21,0.25)" }}
                          aria-hidden="true"
                        >
                          <LucideArrowRight className="h-6 w-6" strokeWidth={2.7} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

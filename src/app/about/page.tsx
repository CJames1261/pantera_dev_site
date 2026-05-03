import type { Metadata } from "next";
import Link from "next/link";
import {
  Lightning,
  Target,
  ShieldCheck,
  Cpu,
  Globe,
  Database,
  DeviceMobile,
  Brain,
  ArrowUpRight,
} from "@phosphor-icons/react/ssr";
import ScrollReveal from "@/components/ScrollReveal";

const SITE_URL = "https://www.agenticaiutah.com";
const logo = "/Pantera_Claw_hero.webp";
const logoLarge = "/Pantera_Claw.webp";

export const metadata: Metadata = {
  title: { absolute: "About Pantera Claw | Our story, standard, and mission" },
  description:
    "Pantera Claw brings enterprise-grade AI, data infrastructure, and digital solutions to small and mid-size businesses. Precise, adaptive, and built to last.",
  alternates: { canonical: "/about" },
};

const aboutBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
  ],
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about#page`,
  url: `${SITE_URL}/about`,
  name: "About Pantera Claw",
  description:
    "Pantera Claw is a Salt Lake City AI and data consulting firm. Learn about our story, our standard, and our mission to bring enterprise-grade technology to small and mid-size businesses.",
  inLanguage: "en-US",
  mainEntity: { "@id": `${SITE_URL}/#business` },
};

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Fast, modern, SEO-optimized websites and web applications built with React and the latest frameworks. Your digital storefront should work as hard as you do, converting visitors into clients around the clock.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Your data is your most valuable asset, and we make sure you can actually use it. We design, optimize, and manage databases on PostgreSQL, Databricks, and Snowflake so your systems are fast, reliable, and scalable.",
  },
  {
    icon: DeviceMobile,
    title: "App Development",
    description:
      "From internal tools to customer-facing applications, we build software that solves real business problems. Clean interfaces, reliable performance, and built to scale with your growth.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "AI isn't the future. It's right now. We integrate autonomous agents, machine learning models, and intelligent workflows directly into your existing business operations so you can do more with less.",
  },
];

const standard = [
  {
    icon: Lightning,
    title: "Agility",
    description:
      "We move fast, adapt faster, and deliver without dragging our feet.",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "Every solution is purpose-built for your specific problem. No bloat, no fluff.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "We build systems that hold up under pressure: tested, scalable, and battle-ready.",
  },
  {
    icon: Cpu,
    title: "Innovation",
    description:
      "We ship with the tools top teams are using right now, so our clients stay ahead of the curve.",
  },
];

export default function About() {
  return (
    <div className="relative z-10 pt-32 lg:pt-40 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumb) }}
      />
      <div>
        {/* Why the Panther */}
        <section className="pb-12 lg:pb-16">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="inline-block border border-yellow-400 px-4 py-1.5 text-sm uppercase tracking-wide text-yellow-400 mb-7">
                  Our Story
                </span>
                <h1
                  className="font-display font-bold tracking-tighter text-text-primary text-balance"
                  style={{ fontSize: "clamp(2.5rem, 5.5vw, 3.75rem)", lineHeight: "1.05" }}
                >
                  Why the Panther?
                </h1>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ScrollReveal className="order-2 md:order-1">
                <div
                  className="p-2 rounded-[2rem] border border-border"
                  style={{
                    backgroundColor: "rgba(19, 19, 22, 0.4)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div
                    className="rounded-[calc(2rem-0.5rem)] bg-surface relative overflow-hidden"
                    style={{ boxShadow: "var(--shadow-inner-highlight)" }}
                  >
                    <img
                      src={logo}
                      srcSet={`${logo} 480w, ${logoLarge} 1024w`}
                      sizes="(max-width: 768px) 90vw, 480px"
                      alt="Pantera Claw logo"
                      width={480}
                      height={480}
                      className="relative z-10 w-full aspect-square object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15} direction="right" className="order-1 md:order-2">
                <div>
                  <p className="text-text-secondary text-lg leading-relaxed mb-4">
                    In nature, the panther is the apex predator of adaptability,
                    thriving in jungles, mountains, and urban landscapes alike.
                    In business, that translates to one thing:{" "}
                    <span className="text-accent">
                      the ability to evolve faster than the competition.
                    </span>
                  </p>
                  <p className="text-text-secondary text-lg leading-relaxed mb-4">
                    At Pantera Claw, we combine that predatory precision with
                    the tools top teams are shipping today. The claw represents
                    our ability to cut through complexity: outdated systems,
                    inefficient workflows, missed opportunities. We replace them
                    with solutions that are fast, sharp, and built to last.
                  </p>
                  <p className="text-text-primary text-lg leading-relaxed font-medium">
                    We don&apos;t just build software. We help businesses hunt
                    smarter.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* The Pantera Claw Standard */}
        <section className="py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h2
                  className="font-display font-bold tracking-tighter text-text-primary mb-3"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)" }}
                >
                  The Pantera Claw standard.
                </h2>
                <p className="text-text-secondary text-lg">
                  Four principles that drive everything we build.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div
                className="rounded-[1.75rem] overflow-hidden border border-border"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px">
                  {standard.map((item) => (
                    <div
                      key={item.title}
                      className="bg-canvas p-6 sm:p-8 text-center flex flex-col items-center"
                    >
                      <div
                        className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-canvas/80 border border-border-light mb-5"
                        style={{ boxShadow: "var(--shadow-inner-highlight)" }}
                      >
                        <item.icon size={24} className="text-accent" weight="duotone" />
                      </div>
                      <h3 className="font-display font-bold text-text-primary text-xl tracking-tight mb-3">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Mission + How We Help */}
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ScrollReveal>
              <div className="max-w-5xl mx-auto text-center mb-14 lg:mb-16">
                <span className="inline-block border border-yellow-400 px-4 py-1.5 text-sm uppercase tracking-wide text-yellow-400 mb-8">
                  Our Mission
                </span>
                <h2
                  className="font-display font-bold tracking-tighter text-text-primary leading-[1.05] mb-8"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
                >
                  Help businesses win.
                </h2>
                <p className="text-text-secondary text-xl leading-relaxed mb-6">
                  Enterprise-grade technology has historically been out of reach
                  for small and mid-size businesses: too expensive, too complex,
                  too slow to deploy.
                </p>
                <p className="text-accent text-xl leading-relaxed font-medium mb-6">
                  Pantera Claw exists to change that.
                </p>
                <p className="text-text-secondary text-xl leading-relaxed">
                  We bring the same caliber of AI systems, data infrastructure,
                  and digital solutions used by the world&apos;s largest organizations,
                  and we make them accessible, affordable, and actionable for
                  businesses ready to grow.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="text-center mb-10">
                <div>
                  <span className="inline-block border border-yellow-400 px-4 py-1.5 text-sm uppercase tracking-wide text-yellow-400">
                    Here&apos;s how
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <ScrollReveal key={service.title} delay={i * 0.08}>
                  <div
                    className="group p-1.5 rounded-[1.75rem] border border-border hover:border-accent/40 transition-all duration-700 h-full"
                    style={{
                      backgroundColor: "rgba(19, 19, 22, 0.4)",
                      transitionTimingFunction:
                        "cubic-bezier(0.32, 0.72, 0, 1)",
                    }}
                  >
                    <div
                      className="rounded-[calc(1.75rem-0.375rem)] bg-surface p-8 h-full"
                      style={{ boxShadow: "var(--shadow-inner-highlight)" }}
                    >
                      <div className="flex items-center mb-5">
                        <div className="w-12 h-12 rounded-xl bg-canvas/80 border border-border-light flex items-center justify-center mr-4 transition-transform duration-700 group-hover:scale-105"
                          style={{
                            transitionTimingFunction:
                              "cubic-bezier(0.32, 0.72, 0, 1)",
                          }}
                        >
                          <service.icon
                            size={22}
                            className="text-accent"
                            weight="duotone"
                          />
                        </div>
                        <h3 className="font-display font-bold text-text-primary text-xl tracking-tight">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-text-secondary leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <ScrollReveal>
              <h2
                className="font-display font-bold tracking-tighter text-text-primary mb-4"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)" }}
              >
                Ready to work with us?
              </h2>
              <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Let&apos;s talk about where your business is headed and how we can
                help you get there faster.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-canvas font-semibold text-base pl-8 pr-2 py-2.5 rounded-full no-underline transition-all duration-700"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                }}
              >
                Schedule a free consultation
                <span
                  className="w-9 h-9 rounded-full bg-canvas/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                  }}
                >
                  <ArrowUpRight size={16} weight="bold" className="text-canvas" />
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </div>
  );
}

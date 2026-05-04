import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle,
  MapPin,
  EnvelopeSimple,
  Phone,
  Clock,
} from "@phosphor-icons/react/ssr";
import ScrollReveal from "@/components/ScrollReveal";

const SITE_URL = "https://www.agenticaiutah.com";
const PAGE_PATH = "/ai-consulting-salt-lake-city";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: { absolute: "AI Consulting in Salt Lake City, Utah | Pantera Claw" },
  description:
    "Salt Lake City AI consulting for Utah businesses. Agentic AI, RAG pipelines, and ML systems. Free consultation meeting. SLC, Provo, Ogden + nationwide remote.",
  alternates: { canonical: PAGE_PATH },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI Consulting in Salt Lake City",
      item: PAGE_URL,
    },
  ],
};

const localServicePageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "AI Consulting in Salt Lake City",
  serviceType: "AI Consulting",
  description:
    "Agentic AI, RAG pipelines, NLP-to-SQL agents, and machine-learning systems for businesses headquartered in or operating across Utah.",
  url: PAGE_URL,
  areaServed: [
    {
      "@type": "City",
      name: "Salt Lake City",
      sameAs: "https://en.wikipedia.org/wiki/Salt_Lake_City",
    },
    {
      "@type": "City",
      name: "Provo",
      sameAs: "https://en.wikipedia.org/wiki/Provo,_Utah",
    },
    {
      "@type": "City",
      name: "Ogden",
      sameAs: "https://en.wikipedia.org/wiki/Ogden,_Utah",
    },
    {
      "@type": "State",
      name: "Utah",
      sameAs: "https://en.wikipedia.org/wiki/Utah",
    },
  ],
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses in Utah",
  },
};

const localBusinessOnPage = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Pantera Claw",
  url: SITE_URL,
  telephone: "+18018980911",
  email: "info@panteraclaw.com",
  image: `${SITE_URL}/Pantera_Claw_hero.webp`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/Pantera_Claw_icon.webp`,
    width: 192,
    height: 192,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Salt Lake City",
    addressRegion: "UT",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.76080,
    longitude: -111.89100,
  },
  areaServed: [
    { "@type": "State", name: "Utah" },
    { "@type": "Country", name: "United States" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does AI consulting cost in Salt Lake City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing for an AI consulting engagement depends on the scope of the project, the depth of discovery and research required, the technical complexity of the build, and how long the engagement runs. Every project is different. We share a fixed scope and a fixed price in writing after a free consultation meeting and a brief discovery phase, well before any commitment. You will know exactly what you are paying and what you are getting before signing anything.",
      },
    },
    {
      "@type": "Question",
      name: "Do you only work with Utah-based businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We are headquartered in Salt Lake City and work in person with Utah clients across Salt Lake County, Utah County, and Davis County. The majority of our engagements are remote, and we serve clients across the United States.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve in Utah?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both sides of Utah's economy. On the local small business side: real estate brokerages, powder coating shops, trade services (HVAC, plumbing, electrical, roofing), construction and contracting, auto repair, restaurants, gyms, and professional services like law, accounting, and marketing agencies. On the tech and data-intensive side: Silicon Slopes SaaS companies, healthcare networks and clinics, e-commerce and DTC brands, fintech, and logistics teams. The common thread is small or mid-size businesses (typically 10–200 employees) with a workflow that takes too much manual time.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an AI project typically take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most engagements run 4–12 weeks. A focused proof of concept is 2–4 weeks. A production agentic AI system with monitoring, evaluation harnesses, and handover is usually 8–12 weeks. We share a written timeline and milestones up front.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work on-site in Salt Lake City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. For Utah-based clients we can do on-site discovery sessions, on-site stakeholder interviews, and on-site go-live support. Most ongoing build work happens remotely so we can move fast, but in-person checkpoints are part of how we work locally.",
      },
    },
  ],
};

const offerings = [
  {
    title: "Business Web Development",
    body: "Marketing sites, internal portals, and AI-powered web apps in React, Next.js, and TypeScript. Production hosting on Vercel, accessibility baked in, and a handover guide so your team can keep updating the site without us.",
    bullets: [
      "Websites that load fast on mobile and turn visitors into leads",
      "Built so search engines and AI tools can rank and cite your business",
      "Your team can update content without calling a developer",
    ],
  },
  {
    title: "Database Architecture & Optimization",
    body: "Schema design, ETL pipeline architecture, query tuning, and zero-downtime migration across Snowflake, Databricks, BigQuery, PostgreSQL, and Oracle. Built to scale from day one.",
    bullets: [
      "Reports that finish in seconds instead of timing out at month end",
      "One source of truth across your CRM, accounting, and email tools",
      "Automated backups, monitoring, and a runbook your team can follow",
    ],
  },
  {
    title: "Dashboard & Visualization Engineering",
    body: "Interactive reporting in Tableau, Power BI, R Shiny, and custom React. Real-time KPIs, drill-down exploration, anomaly detection, and embedded analytics your stakeholders actually trust.",
    bullets: [
      "One screen for revenue, costs, and profitability across the business",
      "Drill-downs that show what is actually driving the number, not just the trend",
      "Alerts when a KPI moves outside its normal range",
    ],
  },
  {
    title: "Agentic AI & Workflow Design",
    body: "Multi-agent systems built with LangGraph and LangChain that automate multi-step processes, route decisions, and integrate with your existing tools. Production-ready with monitoring, evaluation, and prompt-injection protection.",
    bullets: [
      "Lead qualification, follow-up, and routing that runs while you sleep",
      "Documents, contracts, and emails summarized and tagged automatically",
      "Customer inquiries triaged so your team only sees the ones that need them",
    ],
  },
  {
    title: "Advanced Analytics & Machine Learning",
    body: "Predictive models, customer segmentation, causal inference, and deep learning. Deployed with monitoring, drift detection, and automated retraining.",
    bullets: [
      "Spot customers likely to churn before they leave",
      "Forecast demand and inventory so you stop running out or over-buying",
      "Score leads, fraud, or risk automatically using your historical data",
    ],
  },
  {
    title: "SEO & AI Search Optimization",
    body: "Technical SEO, structured data, content architecture, and AI-search readiness for AI Overviews, ChatGPT search, and Perplexity. Built so both Google and the new wave of AI engines understand and cite your business.",
    bullets: [
      "Rank higher on Google for the phrases your customers actually search",
      "Built so ChatGPT, Perplexity, and Google AI Overviews can find and cite your content",
      "Structured data so search engines understand exactly what you offer",
    ],
  },
];

const localBusinessFocus = [
  "Real estate brokerages and property managers automating tenant communication, lead routing, and listing intake",
  "Powder coating shops automating quotes, job scheduling, and customer follow-up",
  "Trade services (HVAC, plumbing, electrical, roofing) automating dispatch, follow-up, and inspection reports",
  "Construction and contracting firms automating bid prep, permit tracking, and subcontractor coordination",
  "Auto repair and body shops automating estimates, parts ordering, and customer follow-up",
  "Restaurants, gyms, and local hospitality automating reservations, inventory, and review response",
  "Professional services (law, accounting, marketing agencies) automating client intake, billing, and document workflows",
];

const techFocus = [
  "Silicon Slopes SaaS and tech companies adding AI features to existing products",
  "Healthcare networks and clinics operationalizing claims, scheduling, and clinical data",
  "E-commerce and DTC brands using AI for forecasting, personalization, and customer support",
  "Fintech firms automating risk scoring, fraud detection, and compliance reporting",
  "Logistics and supply-chain teams automating routing, inventory, and exception handling",
  "Data-heavy operations teams building reporting platforms, dashboards, and ML pipelines",
];

export default function AIConsultingSaltLakeCity() {
  return (
    <main className="relative z-10 pt-32 lg:pt-40 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessOnPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localServicePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div className="mb-12 max-w-[820px]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-yellow-400" />
              <span className="text-sm uppercase tracking-widest text-yellow-400">
                Salt Lake City · Utah · Remote nationwide
              </span>
            </div>
            <h1
              className="font-display font-bold tracking-tighter text-text-primary mb-5 leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              AI Consulting in Salt Lake City, Utah
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed max-w-[640px]">
              Pantera Claw is a Salt Lake City based AI and data consultancy.
              We build agentic AI workflows, RAG pipelines, NLP-to-SQL agents,
              and machine-learning systems for Utah businesses ready to
              operationalize their data. Most engagements are remote, with
              in-person discovery and go-live checkpoints for clients along
              the Wasatch Front.
            </p>

            {/* NAP block - above the fold */}
            <div
              className="mt-8 p-1.5 rounded-2xl border border-border inline-block w-full max-w-[640px]"
              style={{ backgroundColor: "rgba(19, 19, 22, 0.4)" }}
            >
              <div
                className="rounded-[calc(1rem-0.375rem)] bg-surface p-5 grid grid-cols-1 sm:grid-cols-3 gap-4"
                style={{ boxShadow: "var(--shadow-inner-highlight)" }}
              >
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" weight="duotone" />
                  <div>
                    <div className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider mb-0.5">
                      Location
                    </div>
                    <span className="text-text-primary text-sm">
                      Salt Lake City, Utah
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-accent flex-shrink-0 mt-0.5" weight="duotone" />
                  <div>
                    <div className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider mb-0.5">
                      Phone
                    </div>
                    <a
                      href="tel:+18018980911"
                      className="text-text-primary text-sm hover:text-accent transition-colors no-underline"
                    >
                      +1 (801) 898-0911
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-accent flex-shrink-0 mt-0.5" weight="duotone" />
                  <div>
                    <div className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider mb-0.5">
                      Hours
                    </div>
                    <span className="text-text-primary text-sm">
                      Mon–Fri 9–5 MT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <section className="mb-16 max-w-[820px]">
            <h2
              className="font-display font-bold text-text-primary mb-4 tracking-tight"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              What we build for Utah businesses
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              Five capabilities that plug into each other. Most engagements
              start with a one-week discovery sprint to map your data and pick
              the highest-leverage problem first.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {offerings.map(({ title, body, bullets }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border p-5 flex flex-col"
                  style={{
                    backgroundColor: "rgba(19, 19, 22, 0.4)",
                    boxShadow: "var(--shadow-inner-highlight)",
                  }}
                >
                  <h3 className="font-display font-semibold text-text-primary text-base mb-2 tracking-tight">
                    {title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {body}
                  </p>
                  <ul className="flex flex-col gap-2 list-none p-0 m-0 mt-auto pt-3 border-t border-border">
                    {bullets.map((line) => (
                      <li key={line} className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          weight="fill"
                          className="text-accent flex-shrink-0 mt-0.5"
                        />
                        <span className="text-text-secondary text-xs leading-relaxed">
                          {line}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm no-underline hover:gap-2.5 transition-all duration-500"
                style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
              >
                Full service breakdown
                <ArrowUpRight size={14} weight="bold" />
              </Link>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <section className="mb-16">
            <h2
              className="font-display font-bold text-text-primary mb-4 tracking-tight"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              Industries we serve in Utah
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-[820px]">
              Utah&apos;s economy is unusually broad: Silicon Slopes SaaS and
              fintech alongside a deep base of trade, manufacturing, real
              estate, and professional services. The common thread we look
              for is a workflow that takes too much time. Automation pays
              back fastest there.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <div
                className="rounded-2xl border border-border-light p-6"
                style={{
                  backgroundColor: "rgba(19, 19, 22, 0.55)",
                  boxShadow: "var(--shadow-inner-highlight)",
                }}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-3">
                  Local trades & small business
                </div>
                <h3 className="font-display font-semibold text-text-primary text-lg mb-4 tracking-tight">
                  Where automation removes the most manual time
                </h3>
                <ul className="flex flex-col gap-3 list-none p-0 m-0">
                  {localBusinessFocus.map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        weight="fill"
                        className="text-accent flex-shrink-0 mt-0.5"
                      />
                      <span className="text-text-secondary text-sm leading-relaxed">
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-2xl border border-border-light p-6"
                style={{
                  backgroundColor: "rgba(19, 19, 22, 0.55)",
                  boxShadow: "var(--shadow-inner-highlight)",
                }}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-3">
                  Tech-heavy & data-intensive
                </div>
                <h3 className="font-display font-semibold text-text-primary text-lg mb-4 tracking-tight">
                  Where AI and analytics unlock product and operations
                </h3>
                <ul className="flex flex-col gap-3 list-none p-0 m-0">
                  {techFocus.map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        weight="fill"
                        className="text-accent flex-shrink-0 mt-0.5"
                      />
                      <span className="text-text-secondary text-sm leading-relaxed">
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <section className="mb-16 max-w-[820px]" aria-labelledby="local-faq">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-3">
              Frequently asked
            </div>
            <h2
              id="local-faq"
              className="font-display font-bold text-text-primary mb-6 tracking-tight"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              AI consulting in Utah, common questions
            </h2>
            <div className="flex flex-col gap-6">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name}>
                  <h3 className="font-display font-semibold text-text-primary text-base mb-2 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-[640px]">
                    {item.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <section
            className="p-2 rounded-[2rem] border border-border max-w-[820px]"
            style={{
              backgroundColor: "rgba(19, 19, 22, 0.4)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div
              className="rounded-[calc(2rem-0.5rem)] bg-surface p-8 lg:p-12 text-center"
              style={{ boxShadow: "var(--shadow-inner-highlight)" }}
            >
              <h2
                className="font-display font-bold tracking-tighter text-text-primary mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
              >
                Ready to talk?
              </h2>
              <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-[480px] mx-auto">
                Free consultation meeting. Salt Lake City based, replies within one
                business day. Tell us what you&apos;re working on.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-canvas font-semibold text-base pl-7 pr-2 py-2 rounded-full no-underline transition-all duration-700"
                  style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                >
                  Start a conversation
                  <span
                    className="w-9 h-9 rounded-full bg-canvas/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px"
                    style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                  >
                    <ArrowUpRight size={16} weight="bold" className="text-canvas" />
                  </span>
                </Link>
                <a
                  href="mailto:info@panteraclaw.com"
                  className="inline-flex items-center gap-2 bg-surface-light border border-border hover:border-border-light text-text-primary font-medium text-sm px-5 py-2 rounded-full no-underline transition-colors duration-300"
                >
                  <EnvelopeSimple size={14} weight="bold" />
                  Email us
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}

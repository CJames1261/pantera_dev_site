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
    "Salt Lake City AI consulting firm building agentic AI workflows, RAG pipelines, and machine-learning systems for Utah businesses. Free consultation meeting. Serving SLC, Provo, Ogden, and remote nationwide.",
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
    { "@type": "City", name: "Salt Lake City" },
    { "@type": "City", name: "Provo" },
    { "@type": "City", name: "Ogden" },
    { "@type": "State", name: "Utah" },
  ],
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses in Utah",
  },
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
        text: "A typical engagement at Pantera Claw runs $8,000–$60,000 depending on scope. Discovery sprints (1–2 weeks, fixed scope) start around $4,000. Full agentic AI builds with monitoring and handover usually land between $25,000 and $60,000. We share a fixed price before any commitment.",
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
        text: "We have shipped projects for healthcare, fintech, e-commerce, logistics, and Silicon Slopes SaaS companies. The common thread is small or mid-size businesses (typically 10–200 employees) operationalizing data and AI for the first time.",
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
    title: "Agentic AI workflows",
    body: "Multi-agent systems built with LangGraph and LangChain that automate multi-step processes, route decisions, and integrate with your existing tools. Production-ready with monitoring, evaluation, and prompt-injection protection.",
  },
  {
    title: "RAG pipelines and NLP-to-SQL",
    body: "Retrieval-augmented generation over your internal docs, plus natural-language-to-SQL agents that let non-technical staff query your databases. Vector storage in Pinecone or ChromaDB.",
  },
  {
    title: "Predictive analytics and ML",
    body: "Churn, demand, revenue, risk-scoring, and segmentation models. Causal inference where correlation alone is not enough. Deep learning for signal and image domains. Deployed with drift detection and automated retraining.",
  },
  {
    title: "Data infrastructure to support AI",
    body: "Snowflake, Databricks, BigQuery, PostgreSQL. ETL and ELT pipelines in dbt and Airflow. Schema design and migrations built to scale alongside the AI systems they support.",
  },
];

const utahFocus = [
  "Healthcare networks operationalizing claims, scheduling, and clinical data",
  "Silicon Slopes SaaS companies adding AI features to existing products",
  "Fintech firms automating risk scoring, fraud detection, and compliance reporting",
  "E-commerce and DTC brands using AI for forecasting, personalization, and customer support",
  "Logistics and supply-chain teams automating routing, inventory, and exception handling",
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
              {offerings.map(({ title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border p-5"
                  style={{
                    backgroundColor: "rgba(19, 19, 22, 0.4)",
                    boxShadow: "var(--shadow-inner-highlight)",
                  }}
                >
                  <h3 className="font-display font-semibold text-text-primary text-base mb-2 tracking-tight">
                    {title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {body}
                  </p>
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
          <section className="mb-16 max-w-[820px]">
            <h2
              className="font-display font-bold text-text-primary mb-4 tracking-tight"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              Industries we serve in Utah
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-5">
              Utah&apos;s economy is dense across healthcare, financial services,
              SaaS along the Silicon Slopes corridor, e-commerce, and
              logistics. We have shipped engagements across each of these.
            </p>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {utahFocus.map((line) => (
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

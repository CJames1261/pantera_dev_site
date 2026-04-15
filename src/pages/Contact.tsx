import { useState, type FormEvent } from "react";
import {
  EnvelopeSimple,
  Phone,
  MapPin,
  ArrowUpRight,
  Database,
  ChartBar,
  Brain,
  CloudArrowUp,
} from "@phosphor-icons/react";
import ScrollReveal from "../components/ScrollReveal";

const serviceAreas = [
  {
    icon: Database,
    title: "Data Pipelines",
    description: "ETL/ELT, Airflow, dbt, Spark",
    color: "#3B82F6",
  },
  {
    icon: ChartBar,
    title: "Analytics & BI",
    description: "Dashboards, reporting, self-serve",
    color: "#10B981",
  },
  {
    icon: Brain,
    title: "AI & ML",
    description: "Agents, RAG, model deployment",
    color: "#F59E0B",
  },
  {
    icon: CloudArrowUp,
    title: "Cloud Architecture",
    description: "AWS, GCP, Azure platform design",
    color: "#8B5CF6",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for reaching out. We'll be in touch within 24 hours.");
  };

  return (
    <main className="relative z-10 pt-32 lg:pt-40 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Page Header */}
        <ScrollReveal>
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-border-light bg-surface mb-6">
              <span className="font-mono text-xs text-text-secondary tracking-wide uppercase">
                Contact
              </span>
            </div>
            <h1
              className="font-display font-bold tracking-tighter text-text-primary mb-4 max-w-[600px]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
            >
              Let's figure out what your data needs
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed max-w-[520px]">
              Whether you need a full data platform or help with a single pipeline,
              we start with a free 30-minute conversation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left — Form (takes 3 cols) */}
          <ScrollReveal className="lg:col-span-3">
            <div
              className="p-1.5 rounded-[2rem] border border-border"
              style={{
                backgroundColor: "rgba(19, 19, 22, 0.4)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                className="rounded-[calc(2rem-0.375rem)] bg-surface p-6 lg:p-10"
                style={{ boxShadow: "var(--shadow-inner-highlight)" }}
              >
                <h2 className="font-display font-bold text-text-primary text-xl mb-8">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="font-display text-sm font-medium text-text-secondary">
                        Full name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-text-primary text-sm font-display placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-display text-sm font-medium text-text-secondary">
                        Work email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-text-primary text-sm font-display placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface transition-all duration-300"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-display text-sm font-medium text-text-secondary">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-text-primary text-sm font-display placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-display text-sm font-medium text-text-secondary">
                      Tell us about your project
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-text-primary text-sm font-display placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface transition-all duration-300 resize-none"
                      placeholder="What are you working on? What challenges are you facing with your data?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-canvas font-semibold text-base pl-8 pr-2 py-2.5 rounded-full border-none cursor-pointer transition-all duration-700 w-full sm:w-auto self-start"
                    style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                  >
                    Send message
                    <span className="w-9 h-9 rounded-full bg-canvas/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px"
                      style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                    >
                      <ArrowUpRight size={16} weight="bold" className="text-canvas" />
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Contact Info (takes 2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <ScrollReveal delay={0.1}>
              <div
                className="p-1.5 rounded-[2rem] border border-border"
                style={{ backgroundColor: "rgba(19, 19, 22, 0.4)" }}
              >
                <div
                  className="rounded-[calc(2rem-0.375rem)] bg-surface p-6 lg:p-8"
                  style={{ boxShadow: "var(--shadow-inner-highlight)" }}
                >
                  <h3 className="font-display font-bold text-text-primary text-lg mb-6">
                    Get in touch directly
                  </h3>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <EnvelopeSimple size={18} className="text-accent" />
                      </div>
                      <div>
                        <div className="font-mono text-[11px] text-text-tertiary uppercase tracking-wider mb-0.5">
                          Email
                        </div>
                        <a
                          href="mailto:hello@panteraclaw.com"
                          className="text-text-primary text-sm hover:text-accent transition-colors duration-300 no-underline"
                        >
                          hello@panteraclaw.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Phone size={18} className="text-accent" />
                      </div>
                      <div>
                        <div className="font-mono text-[11px] text-text-tertiary uppercase tracking-wider mb-0.5">
                          Phone
                        </div>
                        <a
                          href="tel:+18015559247"
                          className="text-text-primary text-sm hover:text-accent transition-colors duration-300 no-underline"
                        >
                          +1 (801) 555-9247
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <MapPin size={18} className="text-accent" />
                      </div>
                      <div>
                        <div className="font-mono text-[11px] text-text-tertiary uppercase tracking-wider mb-0.5">
                          Location
                        </div>
                        <span className="text-text-primary text-sm">
                          Salt Lake City, Utah
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Service Area Cards */}
            <ScrollReveal delay={0.2}>
              <div
                className="p-1.5 rounded-[2rem] border border-border"
                style={{ backgroundColor: "rgba(19, 19, 22, 0.4)" }}
              >
                <div
                  className="rounded-[calc(2rem-0.375rem)] bg-surface p-6 lg:p-8"
                  style={{ boxShadow: "var(--shadow-inner-highlight)" }}
                >
                  <h3 className="font-display font-bold text-text-primary text-lg mb-5">
                    What we help with
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceAreas.map((area) => (
                      <div
                        key={area.title}
                        className="flex items-center gap-3 p-3 rounded-xl bg-surface-light border border-border"
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${area.color}15` }}
                        >
                          <area.icon
                            size={18}
                            weight="duotone"
                            style={{ color: area.color }}
                          />
                        </div>
                        <div>
                          <div className="font-display text-sm font-semibold text-text-primary">
                            {area.title}
                          </div>
                          <div className="font-mono text-[10px] text-text-tertiary">
                            {area.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}

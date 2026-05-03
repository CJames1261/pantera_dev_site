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
  CheckCircle,
  WarningCircle,
  CircleNotch,
} from "@phosphor-icons/react";
import ScrollReveal from "../components/ScrollReveal";
import Seo from "../components/Seo";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Please enter your name.";
  if (!data.email.trim()) errors.email = "Please enter your work email.";
  else if (!EMAIL_RE.test(data.email.trim()))
    errors.email = "That email address doesn't look right.";
  if (!data.message.trim()) errors.message = "Tell us a bit about your project.";
  else if (data.message.trim().length < 20)
    errors.message = "A few more details would help us prepare for the call.";
  return errors;
}

/**
 * Submits the contact form. If VITE_CONTACT_ENDPOINT is set (e.g. a Formspree
 * or Resend webhook URL), we POST there. Otherwise we build a mailto: link
 * so users can still reach info@panteraclaw.com via their email client.
 */
async function submitForm(data: FormState): Promise<void> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

  if (endpoint) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Submission failed with status ${res.status}`);
    return;
  }

  // Fallback: open the user's mail client with a prefilled message.
  const subject = `Project inquiry from ${data.name}`;
  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.company ? `Company: ${data.company}` : null,
    "",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");
  const href = `mailto:info@panteraclaw.com?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
}

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
    color: "#FACC15",
  },
  {
    icon: CloudArrowUp,
    title: "Cloud Architecture",
    description: "AWS, GCP, Azure platform design",
    color: "#8B5CF6",
  },
];

const SITE_URL = "https://www.agenticaiutah.com";

const contactBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
  ],
};

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const update = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const v = validate(formData);
    if (Object.keys(v).length > 0) {
      setErrors(v);
      // Focus the first field with an error
      const firstKey = Object.keys(v)[0] as keyof FormState;
      const el = document.querySelector<HTMLElement>(`[name="${firstKey}"]`);
      el?.focus();
      return;
    }

    setStatus("submitting");
    setErrorMessage("");
    try {
      await submitForm(formData);
      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <main className="relative z-10 pt-32 lg:pt-40 pb-24">
      <Seo
        title="Contact | Pantera Claw — Start a Data & AI Conversation"
        description="Tell us about your data project. We start with a free 30-minute call. Salt Lake City based, serving clients nationwide. info@panteraclaw.com · +1 (801) 898-0911."
        path="/contact"
        jsonLd={contactBreadcrumb}
      />
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Page Header */}
        <ScrollReveal>
          <div className="mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-base font-medium text-white bg-white/15 border border-white/25 mb-6">
              Contact
            </span>
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

                {status === "success" ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className="flex flex-col items-start gap-5 py-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
                      <CheckCircle size={28} weight="duotone" className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-text-primary text-xl tracking-tight mb-2">
                        Thanks, your message is on its way.
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed max-w-[48ch]">
                        If your email client didn't open automatically, write to{" "}
                        <a
                          href="mailto:info@panteraclaw.com"
                          className="text-accent hover:text-accent-hover underline underline-offset-2"
                        >
                          info@panteraclaw.com
                        </a>{" "}
                        directly. We'll reply within one business day.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-2 inline-flex items-center gap-2 bg-surface-light border border-border hover:border-border-light text-text-primary font-medium text-sm px-5 py-2 rounded-full transition-colors duration-300"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="contact-name"
                          className="font-display text-sm font-medium text-text-secondary"
                        >
                          Full name
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={formData.name}
                          onChange={update("name")}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "contact-name-error" : undefined}
                          className={`w-full bg-surface-light border rounded-xl px-4 py-3 text-text-primary text-base font-display placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface transition-all duration-300 ${
                            errors.name
                              ? "border-red-500/60 focus:ring-red-400"
                              : "border-border focus:ring-accent"
                          }`}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p
                            id="contact-name-error"
                            className="text-xs text-red-400 font-mono"
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="contact-email"
                          className="font-display text-sm font-medium text-text-secondary"
                        >
                          Work email
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={update("email")}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "contact-email-error" : undefined}
                          className={`w-full bg-surface-light border rounded-xl px-4 py-3 text-text-primary text-base font-display placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface transition-all duration-300 ${
                            errors.email
                              ? "border-red-500/60 focus:ring-red-400"
                              : "border-border focus:ring-accent"
                          }`}
                          placeholder="you@company.com"
                        />
                        {errors.email && (
                          <p
                            id="contact-email-error"
                            className="text-xs text-red-400 font-mono"
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="contact-company"
                        className="font-display text-sm font-medium text-text-secondary"
                      >
                        Company{" "}
                        <span className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider">
                          Optional
                        </span>
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={update("company")}
                        className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-text-primary text-base font-display placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="contact-message"
                        className="font-display text-sm font-medium text-text-secondary"
                      >
                        Tell us about your project
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={update("message")}
                        aria-invalid={!!errors.message}
                        aria-describedby={
                          errors.message ? "contact-message-error" : undefined
                        }
                        className={`w-full bg-surface-light border rounded-xl px-4 py-3 text-text-primary text-base font-display placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface transition-all duration-300 resize-none ${
                          errors.message
                            ? "border-red-500/60 focus:ring-red-400"
                            : "border-border focus:ring-accent"
                        }`}
                        placeholder="What are you working on? What challenges are you facing with your data?"
                      />
                      {errors.message && (
                        <p
                          id="contact-message-error"
                          className="text-xs text-red-400 font-mono"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {status === "error" && (
                      <div
                        role="alert"
                        className="flex items-start gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-sm"
                      >
                        <WarningCircle
                          size={18}
                          weight="duotone"
                          className="text-red-400 flex-shrink-0 mt-0.5"
                        />
                        <div>
                          <p className="text-text-primary font-medium">
                            We couldn't send that.
                          </p>
                          <p className="text-text-secondary text-xs mt-1">
                            {errorMessage || "Please try again, or email us directly at info@panteraclaw.com."}
                          </p>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-canvas font-semibold text-base pl-8 pr-2 py-2.5 rounded-full border-none cursor-pointer transition-all duration-700 w-full sm:w-auto self-start disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{
                        transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                      }}
                    >
                      {status === "submitting" ? "Sending..." : "Send message"}
                      <span
                        className="w-9 h-9 rounded-full bg-canvas/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px"
                        style={{
                          transitionTimingFunction:
                            "cubic-bezier(0.32, 0.72, 0, 1)",
                        }}
                      >
                        {status === "submitting" ? (
                          <CircleNotch
                            size={16}
                            weight="bold"
                            className="text-canvas animate-spin"
                          />
                        ) : (
                          <ArrowUpRight
                            size={16}
                            weight="bold"
                            className="text-canvas"
                          />
                        )}
                      </span>
                    </button>
                  </form>
                )}
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
                          href="mailto:info@panteraclaw.com"
                          className="text-text-primary text-sm hover:text-accent transition-colors duration-300 no-underline"
                        >
                          info@panteraclaw.com
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
                          href="tel:+18018980911"
                          className="text-text-primary text-sm hover:text-accent transition-colors duration-300 no-underline"
                        >
                          +1 (801) 898-0911
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

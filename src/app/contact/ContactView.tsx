"use client";

import { useState, type FormEvent } from "react";
import {
  EnvelopeSimple,
  Phone,
  MapPin,
  ArrowRight,
  Globe,
  Database,
  ChartBar,
  ChartLineUp,
  Brain,
  CheckCircle,
  WarningCircle,
  CircleNotch,
} from "@phosphor-icons/react/ssr";
import ScrollReveal from "@/components/ScrollReveal";

type FormState = {
  name: string;
  email: string;
  company: string;
  inquiry: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inquiryOptions = [
  { value: "web", label: "Business Web Development" },
  { value: "database", label: "Database Management" },
  { value: "dashboards", label: "Dashboards & Visualizations" },
  { value: "analytics", label: "Advanced Analytics" },
  { value: "ai", label: "Agentic Workflow Design" },
  { value: "general", label: "General Inquiry" },
];

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

async function submitForm(data: FormState): Promise<void> {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

  if (endpoint) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Submission failed with status ${res.status}`);
    return;
  }

  const inquiryLabel =
    inquiryOptions.find((o) => o.value === data.inquiry)?.label ?? data.inquiry;
  const subject = `Project inquiry from ${data.name}`;
  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.company ? `Company: ${data.company}` : null,
    `Inquiry: ${inquiryLabel}`,
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

const capabilities = [
  {
    icon: Globe,
    title: "Business Web Development",
    body: "Custom-built websites and web applications tailored to your business. Fast, responsive, and designed to convert visitors into clients.",
  },
  {
    icon: Database,
    title: "Database Management",
    body: "Scalable, secure database architecture. From schema design to migration, optimization, and ongoing administration across SQL and NoSQL systems.",
  },
  {
    icon: ChartBar,
    title: "Dashboards & Visualizations",
    body: "Interactive dashboards and data visualizations your team will actually use. Real-time KPIs, drill-down exploration, and embedded analytics.",
  },
  {
    icon: ChartLineUp,
    title: "Advanced Analytics",
    body: "Predictive modeling, statistical analysis, and machine learning applied to your business data. From churn prediction to demand forecasting.",
  },
  {
    icon: Brain,
    title: "Agentic Workflow Design",
    body: "AI-powered autonomous workflows that handle complex, multi-step processes. Tool-use agents, RAG pipelines, and intelligent automation.",
  },
];

const sequence = [
  {
    step: "01",
    title: "Discovery",
    body: "Deep-dive audit of existing stacks. We identify the 'Claw' points—where friction is slowing your predator instincts.",
  },
  {
    step: "02",
    title: "Strategy",
    body: "Architectural blueprinting. We map out the intelligence deployment and performance benchmarks for the mission.",
  },
  {
    step: "03",
    title: "Execution",
    body: "Precision deployment. Our team integrates the solution into your workflow with zero downtime and immediate impact.",
  },
];

const inputClass =
  "w-full bg-[#050505] border border-white/10 rounded-none p-4 text-white placeholder:text-zinc-600 focus:border-white/40 focus:ring-0 transition-all outline-none";
const labelClass =
  "font-mono text-[10px] uppercase text-zinc-500 tracking-widest block";

export default function ContactView() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    inquiry: inquiryOptions[0].value,
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const update =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const v = validate(formData);
    if (Object.keys(v).length > 0) {
      setErrors(v);
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
      setFormData({
        name: "",
        email: "",
        company: "",
        inquiry: inquiryOptions[0].value,
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="pt-32 max-w-[1280px] mx-auto px-8 mb-24">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-6 bg-yellow-400" />
            <span className="text-sm uppercase tracking-widest text-yellow-400">
              Contact
            </span>
          </div>
          <h1 className="font-display font-black uppercase tracking-tighter text-white max-w-3xl text-4xl md:text-6xl leading-[1.05]">
            Initiate High-Fidelity Engagement.
          </h1>
        </ScrollReveal>
      </section>

      {/* Contact Grid */}
      <section className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
        {/* Form */}
        <ScrollReveal className="lg:col-span-7">
          <div
            className="bg-[#111214]/90 border border-white/10 p-10 shadow-2xl rounded-lg"
            style={{ boxShadow: "0 18px 50px rgba(0,0,0,0.45)" }}
          >
            <h2 className="font-display text-2xl font-bold text-white mb-8">
              Briefing Details
            </h2>

            {status === "success" ? (
              <div
                role="status"
                aria-live="polite"
                className="mb-6 p-4 border border-accent/40 bg-accent/10 rounded-lg"
              >
                <p className="font-display text-lg text-white mb-1">
                  Protocol transmitted.
                </p>
                <p className="text-sm text-zinc-400">
                  We&apos;ve received your briefing. Expect a response from our
                  operations team within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 inline-flex items-center gap-2 bg-transparent border border-white/20 hover:border-white/40 text-white font-mono text-[11px] uppercase tracking-widest px-5 py-3 transition-colors duration-300"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className={labelClass}>
                      Full Name
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
                      placeholder="John Doe"
                      className={`${inputClass} ${errors.name ? "border-red-500/60" : ""}`}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="text-xs text-red-400 font-mono">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className={labelClass}>
                      Corporate Email
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
                      placeholder="j.doe@enterprise.ai"
                      className={`${inputClass} ${errors.email ? "border-red-500/60" : ""}`}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="text-xs text-red-400 font-mono">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-company" className={labelClass}>
                    Company
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={update("company")}
                    placeholder="Pantera Industries Inc."
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-inquiry" className={labelClass}>
                    Inquiry Type
                  </label>
                  <select
                    id="contact-inquiry"
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={update("inquiry")}
                    className={`${inputClass} appearance-none text-zinc-200`}
                  >
                    {inquiryOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className={labelClass}>
                    Project Brief
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={update("message")}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    placeholder="Describe the operational challenge..."
                    className={`${inputClass} resize-vertical ${errors.message ? "border-red-500/60" : ""}`}
                  />
                  {errors.message && (
                    <p id="contact-message-error" className="text-xs text-red-400 font-mono">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 px-4 py-3 bg-red-500/10 border border-red-500/30 text-sm"
                  >
                    <WarningCircle
                      size={18}
                      weight="duotone"
                      className="text-red-400 flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-white font-medium">We couldn&apos;t send that.</p>
                      <p className="text-zinc-400 text-xs mt-1">
                        {errorMessage ||
                          "Please try again, or email us directly at info@panteraclaw.com."}
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group bg-accent text-canvas px-10 py-5 font-display font-bold uppercase tracking-wide flex items-center gap-3 hover:-translate-y-0.5 active:scale-95 hover:brightness-110 transition-all disabled:opacity-70 disabled:cursor-not-allowed border-none cursor-pointer"
                >
                  {status === "submitting" ? "Transmitting..." : "Transmit Protocol"}
                  {status === "submitting" ? (
                    <CircleNotch size={20} weight="bold" className="animate-spin" />
                  ) : (
                    <ArrowRight
                      size={20}
                      weight="bold"
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  )}
                </button>

                <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
                  Average response: under 24 hours.
                </p>
              </form>
            )}
          </div>
        </ScrollReveal>

        {/* Direct Uplink */}
        <ScrollReveal className="lg:col-span-5 space-y-12" delay={0.1}>
          <div
            className="bg-[#111214]/90 border border-white/10 p-10 shadow-2xl rounded-lg hover:border-accent/40 transition-colors"
            style={{ boxShadow: "0 18px 50px rgba(0,0,0,0.45)" }}
          >
            <h2 className="font-display text-2xl font-bold text-white mb-8">
              Direct Uplink
            </h2>
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="bg-accent/10 p-3 rounded-lg border border-accent/20 flex-shrink-0">
                  <EnvelopeSimple size={20} weight="duotone" className="text-accent" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest mb-1">
                    Signal
                  </p>
                  <a
                    href="mailto:info@panteraclaw.com"
                    className="text-white font-medium hover:text-accent transition-colors no-underline"
                  >
                    info@panteraclaw.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-accent/10 p-3 rounded-lg border border-accent/20 flex-shrink-0">
                  <Phone size={20} weight="duotone" className="text-accent" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest mb-1">
                    Secure Line
                  </p>
                  <a
                    href="tel:+18018980911"
                    className="text-white font-medium hover:text-accent transition-colors no-underline"
                  >
                    +1 (801) 898-0911
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-accent/10 p-3 rounded-lg border border-accent/20 flex-shrink-0">
                  <MapPin size={20} weight="duotone" className="text-accent" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest mb-1">
                    Base of Operations
                  </p>
                  <address className="not-italic text-white font-medium">
                    Salt Lake City, UT
                    <br />
                    <span className="text-zinc-500 text-sm font-normal">
                      Serving clients nationwide
                    </span>
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Aerial Salt Lake City */}
          <div className="aspect-video w-full border border-white/10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuIbry7ajCBgUbuEwtM_jcbxCcBH0Iyi-IjkL8Vucl3h_xoM3ruqET_rHuTY09Ele-KGFiT_zlRYtUBz5OnwZikGh8D6XPs_j-oAAPv2WopOhvkYutzyNEbRbjdTBF7F1x7CB-ixuqsALqv0HH0MZaHgsttNB6SEFjQS30LMe8_ZXgf7zaIFMGcPATO8c4Z5_mKCnerup6pcwQwp1PGH_CERTAeUak8cSvm8Rd14PwFluGi3vPMMvjFyGjL4ViqH38EMEbRaDFzyM"
              alt="Aerial night view of Salt Lake City's downtown grid against the Wasatch mountains."
              loading="lazy"
              decoding="async"
              width={1280}
              height={720}
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Capabilities — 5 services */}
      <section className="max-w-[1280px] mx-auto px-8 mb-32">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1 h-6 bg-yellow-400" />
            <span className="text-sm uppercase tracking-widest text-yellow-400">
              Core Capabilities
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="bg-[#111214]/90 border border-white/10 p-8 hover:border-accent/40 transition-all"
              >
                <c.icon
                  size={32}
                  weight="duotone"
                  className="text-accent mb-4"
                  aria-hidden
                />
                <h3 className="text-white font-bold mb-2">{c.title}</h3>
                <p className="text-zinc-500 text-sm">{c.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Engagement Sequence */}
      <section className="bg-[#0a0a0c] py-32">
        <div className="max-w-[1280px] mx-auto px-8">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-16">
              <div className="w-1 h-4 bg-accent" aria-hidden />
              <span className="font-mono text-[11px] tracking-widest text-accent uppercase">
                Engagement Sequence
              </span>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 relative list-none p-0 m-0">
              {sequence.map((s, i) => (
                <li
                  key={s.step}
                  className={`p-12 hover:bg-white/[0.02] transition-colors relative group ${
                    i < sequence.length - 1
                      ? "border-b md:border-b-0 md:border-r border-white/10"
                      : ""
                  }`}
                >
                  <span className="font-mono text-5xl opacity-10 absolute top-4 right-8 select-none text-white">
                    {s.step}
                  </span>
                  <div className="bg-accent w-8 h-1 mb-10" aria-hidden />
                  <h3 className="font-display text-2xl font-bold text-white mb-4">
                    {s.title}
                  </h3>
                  <p className="text-zinc-400">{s.body}</p>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Database,
  ChartBar,
  Robot,
  Brain,
  ArrowUpRight,
  CaretDown,
  CheckCircle,
  Lightning,
  MagnifyingGlass,
  Devices,
  PaintBrush,
  Gear,
  ShieldCheck,
  TreeStructure,
  Cpu,
  ChartLineUp,
  CloudArrowUp,
} from "@phosphor-icons/react/ssr";
import ScrollReveal from "@/components/ScrollReveal";

interface ServicePill {
  id: string;
  icon: React.ElementType;
  color: string;
  title: string;
  subtitle: string;
  description: string;
  content: React.ReactNode;
}

function WebDevContent() {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl bg-surface-light border border-border p-6">
          <div className="flex items-center gap-2 mb-3">
            <Lightning size={14} weight="fill" className="text-accent" />
            <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-widest">
              Key Differentiator
            </span>
          </div>
          <h4 className="font-display font-bold text-text-primary text-base mb-2">
            Performance-First Architecture
          </h4>
          <p className="text-text-secondary text-sm leading-relaxed">
            Every site we build scores 90+ on Google Lighthouse out of the box.
            Faster load times mean higher search rankings and lower bounce rates.
            Speed isn&apos;t an afterthought; it&apos;s the foundation.
          </p>
        </div>
        <div className="rounded-xl bg-surface-light border border-border p-6">
          <div className="flex items-center gap-2 mb-3">
            <MagnifyingGlass size={14} weight="fill" className="text-accent" />
            <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-widest">
              Key Differentiator
            </span>
          </div>
          <h4 className="font-display font-bold text-text-primary text-base mb-2">
            SEO &amp; AI-Search Optimized
          </h4>
          <p className="text-text-secondary text-sm leading-relaxed">
            Built for both Google and the new wave of AI search engines.
            Structured data, semantic HTML, and content architecture designed so
            both humans and LLMs understand exactly what you offer.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-display font-bold text-text-primary text-xl mb-2">
          What We Build
        </h3>
        <p className="text-text-secondary text-sm mb-6">
          Websites and web apps designed to grow your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: Globe,
              title: "Business & Consulting Websites",
              tagline: "Convert visitors into clients",
              items: [
                "Landing pages optimized for lead generation",
                "Service showcase with strategic CTA placement",
                "Case study & portfolio sections",
                "Contact forms & scheduling integration",
              ],
            },
            {
              icon: Cpu,
              title: "Web Applications",
              tagline: "Interactive tools your team & customers use daily",
              items: [
                "Internal dashboards & admin panels",
                "Client portals & self-service tools",
                "Data-driven apps with API integrations",
                "AI-powered features & chatbot interfaces",
              ],
            },
            {
              icon: Devices,
              title: "Responsive & Mobile-First",
              tagline: "Perfect on every screen size",
              items: [
                "Mobile-first design methodology",
                "Tablet & desktop breakpoint optimization",
                "Touch-friendly interactions & navigation",
                "Progressive Web App (PWA) capabilities",
              ],
            },
            {
              icon: PaintBrush,
              title: "Design & Branding",
              tagline: "Look as good as you perform",
              items: [
                "Custom UI/UX design aligned to your brand",
                "Figma-to-code design implementation",
                "Micro-animations & modern interactions",
                "Dark mode & accessibility (WCAG) compliance",
              ],
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-xl bg-surface-light border border-border p-6"
            >
              <card.icon size={20} weight="duotone" className="text-[#38BDF8] mb-3" />
              <h4 className="font-display font-semibold text-text-primary text-sm mb-1">
                {card.title}
              </h4>
              <p className="text-text-tertiary text-xs italic mb-3">{card.tagline}</p>
              <ul className="flex flex-col gap-2 list-none p-0 m-0">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle
                      size={14}
                      weight="fill"
                      className="text-[#38BDF8] mt-0.5 flex-shrink-0"
                    />
                    <span className="text-text-secondary text-xs">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-widest">
          Technology Stack
        </span>
        <div className="flex flex-wrap gap-2 mt-3">
          {[
            "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js",
            "Supabase", "PostgreSQL", "Vercel", "Figma", "HTML5 / CSS3",
            "REST APIs", "GraphQL", "Git", "CI/CD",
          ].map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-text-secondary bg-surface-light border border-border rounded-lg px-3 py-1.5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-surface-light border border-border p-5">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck size={14} weight="fill" className="text-accent" />
          <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-widest">
            Built With What We Sell
          </span>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed">
          This very website, PanteraClaw.com, is built with React, TypeScript,
          and Tailwind CSS, demonstrating the same modern tech stack, responsive
          design, and SEO-optimized architecture we deliver to every client. What
          you&apos;re browsing right now is our proof of work.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
        <div className="flex-1">
          <h4 className="font-display font-bold text-text-primary text-base mb-1">
            Need a website that actually converts?
          </h4>
          <p className="text-text-secondary text-sm">
            Whether it&apos;s a consulting site, a web app, or a complete redesign,
            let&apos;s build something that works as hard as you do.
          </p>
        </div>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-canvas font-semibold text-sm pl-6 pr-1.5 py-2 rounded-full no-underline transition-all duration-700 flex-shrink-0"
          style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
        >
          Discuss Your Web Project
          <span className="w-7 h-7 rounded-full bg-canvas/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px"
            style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
          >
            <ArrowUpRight size={14} weight="bold" className="text-canvas" />
          </span>
        </Link>
      </div>
    </div>
  );
}

function DatabaseContent() {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl bg-surface-light border border-border p-6">
          <div className="flex items-center gap-2 mb-3">
            <Lightning size={14} weight="fill" className="text-accent" />
            <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-widest">Key Differentiator</span>
          </div>
          <h4 className="font-display font-bold text-text-primary text-base mb-2">Terabyte-Scale Performance</h4>
          <p className="text-text-secondary text-sm leading-relaxed">
            We&apos;ve optimized PySpark ETL pipelines handling terabyte-scale data for DoD compliance. Our schemas don&apos;t buckle under growth -- they&apos;re designed for it from day one.
          </p>
        </div>
        <div className="rounded-xl bg-surface-light border border-border p-6">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck size={14} weight="fill" className="text-accent" />
            <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-widest">Key Differentiator</span>
          </div>
          <h4 className="font-display font-bold text-text-primary text-base mb-2">Cross-Platform Expertise</h4>
          <p className="text-text-secondary text-sm leading-relaxed">
            Databricks, PostgreSQL, Snowflake, Oracle: we&apos;re fluent in all of them. Whether you&apos;re migrating between platforms or optimizing your current stack, we&apos;ve built production workloads on each.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-display font-bold text-text-primary text-xl mb-2">What We Build</h3>
        <p className="text-text-secondary text-sm mb-6">Database systems engineered for scale, security, and speed.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: Database, title: "Data Modeling & Schema Design", tagline: "Structures that scale with your business", items: ["Normalized & denormalized schema design", "Star and snowflake warehouse models", "Schema versioning and migration", "Cross-system data contracts"] },
            { icon: TreeStructure, title: "ETL/ELT Pipeline Architecture", tagline: "Reliable data movement at any scale", items: ["Batch and streaming ingestion", "Incremental loading strategies", "Data quality checks and validation", "Orchestration with Airflow and dbt"] },
            { icon: Lightning, title: "Query Optimization & Indexing", tagline: "Sub-second responses on billion-row tables", items: ["Execution plan analysis", "Index strategy and partitioning", "Materialized views and caching", "Cost-based optimizer tuning"] },
            { icon: CloudArrowUp, title: "Migration & Platform Design", tagline: "Move fast without breaking data", items: ["Zero-downtime migration planning", "On-prem to cloud transitions", "Multi-cloud data strategies", "Backup, recovery, and access control"] },
          ].map((card) => (
            <div key={card.title} className="rounded-xl bg-surface-light border border-border p-6">
              <card.icon size={20} weight="duotone" className="text-[#3B82F6] mb-3" />
              <h4 className="font-display font-semibold text-text-primary text-sm mb-1">{card.title}</h4>
              <p className="text-text-tertiary text-xs italic mb-3">{card.tagline}</p>
              <ul className="flex flex-col gap-2 list-none p-0 m-0">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle size={14} weight="fill" className="text-[#3B82F6] mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary text-xs">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-widest">Technology Stack</span>
        <div className="flex flex-wrap gap-2 mt-3">
          {["Databricks", "PostgreSQL", "Snowflake", "Oracle", "PySpark", "dbt", "Airflow", "SQL", "Python", "Terraform"].map((tech) => (
            <span key={tech} className="font-mono text-xs text-text-secondary bg-surface-light border border-border rounded-lg px-3 py-1.5">{tech}</span>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-surface-light border border-border p-5">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck size={14} weight="fill" className="text-accent" />
          <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-widest">Proof of Work</span>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed">
          Optimized PySpark ETL pipelines in Databricks for DoD compliance, handling terabyte-scale data processing with measurable latency reductions.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
        <div className="flex-1">
          <h4 className="font-display font-bold text-text-primary text-base mb-1">Need a database that scales?</h4>
          <p className="text-text-secondary text-sm">From schema design to migration, we build data infrastructure that grows with you.</p>
        </div>
        <Link href="/contact" className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-canvas font-semibold text-sm pl-6 pr-1.5 py-2 rounded-full no-underline transition-all duration-700 flex-shrink-0" style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}>
          Discuss Your Database Project
          <span className="w-7 h-7 rounded-full bg-canvas/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px" style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}><ArrowUpRight size={14} weight="bold" className="text-canvas" /></span>
        </Link>
      </div>
    </div>
  );
}

function DashboardContent() {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl bg-surface-light border border-border p-6">
          <div className="flex items-center gap-2 mb-3">
            <Lightning size={14} weight="fill" className="text-accent" />
            <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-widest">Key Differentiator</span>
          </div>
          <h4 className="font-display font-bold text-text-primary text-base mb-2">AI-Powered Cost Prediction</h4>
          <p className="text-text-secondary text-sm leading-relaxed">
            Our dashboards don&apos;t just show what happened -- they predict what will happen next. ML-powered forecasting views give your leadership real decision-making leverage.
          </p>
        </div>
        <div className="rounded-xl bg-surface-light border border-border p-6">
          <div className="flex items-center gap-2 mb-3">
            <ChartLineUp size={14} weight="fill" className="text-accent" />
            <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-widest">Key Differentiator</span>
          </div>
          <h4 className="font-display font-bold text-text-primary text-base mb-2">Causal Analysis Visualizations</h4>
          <p className="text-text-secondary text-sm leading-relaxed">
            Beyond correlation. Our R Shiny and custom-built dashboards surface the root causes driving your KPIs, not just the trends.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-display font-bold text-text-primary text-xl mb-2">What We Build</h3>
        <p className="text-text-secondary text-sm mb-6">Dashboards that drive decisions, not just display data.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: ChartBar, title: "Executive Dashboards", tagline: "KPIs your leadership actually reads", items: ["Real-time metric monitoring", "Drill-down exploration layers", "Automated alerting and anomaly detection", "Scheduled report generation"] },
            { icon: ChartLineUp, title: "Predictive & Forecasting Views", tagline: "See what's coming, not just what happened", items: ["Cost prediction models", "Demand and revenue forecasting", "Trend analysis with confidence intervals", "Scenario modeling and what-if tools"] },
            { icon: Cpu, title: "Embedded Analytics", tagline: "Analytics inside your product", items: ["Customer-facing data portals", "White-label reporting for clients", "API-driven chart components", "Interactive data exploration"] },
            { icon: TreeStructure, title: "ETL Integration & Wiring", tagline: "The pipeline behind the dashboard", items: ["Automated data refresh pipelines", "Multi-source data blending", "Data quality monitoring", "Change data capture (CDC)"] },
          ].map((card) => (
            <div key={card.title} className="rounded-xl bg-surface-light border border-border p-6">
              <card.icon size={20} weight="duotone" className="text-[#10B981] mb-3" />
              <h4 className="font-display font-semibold text-text-primary text-sm mb-1">{card.title}</h4>
              <p className="text-text-tertiary text-xs italic mb-3">{card.tagline}</p>
              <ul className="flex flex-col gap-2 list-none p-0 m-0">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle size={14} weight="fill" className="text-[#10B981] mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary text-xs">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-widest">Technology Stack</span>
        <div className="flex flex-wrap gap-2 mt-3">
          {["Tableau", "Power BI", "R Shiny", "D3.js", "Recharts", "Python", "SQL", "React", "Plotly", "Streamlit"].map((tech) => (
            <span key={tech} className="font-mono text-xs text-text-secondary bg-surface-light border border-border rounded-lg px-3 py-1.5">{tech}</span>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-surface-light border border-border p-5">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck size={14} weight="fill" className="text-accent" />
          <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-widest">Proof of Work</span>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed">
          Built cost prediction dashboards for Air Force leadership and causal analysis dashboards in R Shiny for retention KPI drivers with measurable policy impact.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
        <div className="flex-1">
          <h4 className="font-display font-bold text-text-primary text-base mb-1">Need dashboards your team will trust?</h4>
          <p className="text-text-secondary text-sm">From executive reporting to embedded analytics, we build visualizations that drive action.</p>
        </div>
        <Link href="/contact" className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-canvas font-semibold text-sm pl-6 pr-1.5 py-2 rounded-full no-underline transition-all duration-700 flex-shrink-0" style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}>
          Discuss Your Dashboard Project
          <span className="w-7 h-7 rounded-full bg-canvas/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px" style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}><ArrowUpRight size={14} weight="bold" className="text-canvas" /></span>
        </Link>
      </div>
    </div>
  );
}

function AIContent() {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl bg-surface-light border border-border p-6">
          <div className="flex items-center gap-2 mb-3">
            <Lightning size={14} weight="fill" className="text-accent" />
            <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-widest">Key Differentiator</span>
          </div>
          <h4 className="font-display font-bold text-text-primary text-base mb-2">Natural Language to SQL</h4>
          <p className="text-text-secondary text-sm leading-relaxed">
            Our NLP-to-SQL agents let non-technical stakeholders query databases in plain English. No SQL knowledge required -- the agent writes, validates, and executes the query.
          </p>
        </div>
        <div className="rounded-xl bg-surface-light border border-border p-6">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck size={14} weight="fill" className="text-accent" />
            <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-widest">Key Differentiator</span>
          </div>
          <h4 className="font-display font-bold text-text-primary text-base mb-2">Air-Gapped Deployments</h4>
          <p className="text-text-secondary text-sm leading-relaxed">
            We deploy LLMs on local infrastructure for classified and sensitive environments. Full inference capability with zero data leaving your network.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-display font-bold text-text-primary text-xl mb-2">What We Build</h3>
        <p className="text-text-secondary text-sm mb-6">Multi-agent systems that route, decide, and execute autonomously.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: Robot, title: "Autonomous Agent Orchestration", tagline: "AI systems that think and act", items: ["Multi-agent task routing and delegation", "Tool-use agents with external API access", "Human-in-the-loop checkpoints", "Memory and context persistence"] },
            { icon: Database, title: "RAG Pipelines", tagline: "Your data, your AI's knowledge", items: ["Document ingestion and chunking", "Vector database integration", "Hybrid search (semantic + keyword)", "Source attribution and citation"] },
            { icon: Cpu, title: "Local LLM Deployment", tagline: "On-prem AI for sensitive environments", items: ["Air-gapped inference servers", "Model quantization and optimization", "GPU cluster configuration", "Secure API gateway setup"] },
            { icon: Gear, title: "Guardrails & Evaluation", tagline: "AI you can trust in production", items: ["Output validation and filtering", "Automated evaluation frameworks", "Prompt injection protection", "Performance monitoring and logging"] },
          ].map((card) => (
            <div key={card.title} className="rounded-xl bg-surface-light border border-border p-6">
              <card.icon size={20} weight="duotone" className="text-[#A78BFA] mb-3" />
              <h4 className="font-display font-semibold text-text-primary text-sm mb-1">{card.title}</h4>
              <p className="text-text-tertiary text-xs italic mb-3">{card.tagline}</p>
              <ul className="flex flex-col gap-2 list-none p-0 m-0">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle size={14} weight="fill" className="text-[#A78BFA] mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary text-xs">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-widest">Technology Stack</span>
        <div className="flex flex-wrap gap-2 mt-3">
          {["LangGraph", "LangChain", "CrewAI", "Ollama", "Python", "FastAPI", "CUDA", "Docker", "Pinecone", "ChromaDB"].map((tech) => (
            <span key={tech} className="font-mono text-xs text-text-secondary bg-surface-light border border-border rounded-lg px-3 py-1.5">{tech}</span>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-surface-light border border-border p-5">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck size={14} weight="fill" className="text-accent" />
          <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-widest">Proof of Work</span>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed">
          Deployed LLM-integrated systems within Air Force environments using LangChain and LangGraph, including NLP-to-SQL agents and secure local inference servers.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
        <div className="flex-1">
          <h4 className="font-display font-bold text-text-primary text-base mb-1">Ready to deploy AI that actually works?</h4>
          <p className="text-text-secondary text-sm">From RAG pipelines to autonomous agents, we build AI systems for production.</p>
        </div>
        <Link href="/contact" className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-canvas font-semibold text-sm pl-6 pr-1.5 py-2 rounded-full no-underline transition-all duration-700 flex-shrink-0" style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}>
          Discuss Your AI Project
          <span className="w-7 h-7 rounded-full bg-canvas/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px" style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}><ArrowUpRight size={14} weight="bold" className="text-canvas" /></span>
        </Link>
      </div>
    </div>
  );
}

function AnalyticsContent() {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl bg-surface-light border border-border p-6">
          <div className="flex items-center gap-2 mb-3">
            <Lightning size={14} weight="fill" className="text-accent" />
            <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-widest">Key Differentiator</span>
          </div>
          <h4 className="font-display font-bold text-text-primary text-base mb-2">Built for Production</h4>
          <p className="text-text-secondary text-sm leading-relaxed">
            Our deep learning models are designed to hold up once they leave the notebook. From drone sound classification to lane detection, we build models that perform in the real world, not just on test sets.
          </p>
        </div>
        <div className="rounded-xl bg-surface-light border border-border p-6">
          <div className="flex items-center gap-2 mb-3">
            <Brain size={14} weight="fill" className="text-accent" />
            <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-widest">Key Differentiator</span>
          </div>
          <h4 className="font-display font-bold text-text-primary text-base mb-2">Causal Policy Analysis</h4>
          <p className="text-text-secondary text-sm leading-relaxed">
            Beyond prediction. Our causal inference models isolate what actually drives outcomes, enabling policy decisions backed by statistical rigor, not gut feeling.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-display font-bold text-text-primary text-xl mb-2">What We Build</h3>
        <p className="text-text-secondary text-sm mb-6">Models that ship to production, not just notebooks that impress in demos.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: ChartLineUp, title: "Prediction & Forecasting", tagline: "Know what's coming before it arrives", items: ["Classification and regression models", "Time-series forecasting", "Demand and revenue prediction", "Risk scoring and anomaly detection"] },
            { icon: Brain, title: "Causal Inference", tagline: "Understand why, not just what", items: ["Policy impact analysis", "A/B test design and interpretation", "Uplift modeling", "Counterfactual estimation"] },
            { icon: Cpu, title: "Deep Learning", tagline: "Neural networks for complex problems", items: ["CNN for image and signal processing", "RNN and transformers for sequences", "Transfer learning and fine-tuning", "Custom architecture design"] },
            { icon: Gear, title: "MLOps & Deployment", tagline: "Models that stay accurate over time", items: ["Automated training pipelines", "Drift detection and monitoring", "Model versioning and rollback", "A/B testing in production"] },
          ].map((card) => (
            <div key={card.title} className="rounded-xl bg-surface-light border border-border p-6">
              <card.icon size={20} weight="duotone" className="text-[#FB7185] mb-3" />
              <h4 className="font-display font-semibold text-text-primary text-sm mb-1">{card.title}</h4>
              <p className="text-text-tertiary text-xs italic mb-3">{card.tagline}</p>
              <ul className="flex flex-col gap-2 list-none p-0 m-0">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle size={14} weight="fill" className="text-[#FB7185] mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary text-xs">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-widest">Technology Stack</span>
        <div className="flex flex-wrap gap-2 mt-3">
          {["TensorFlow", "PyTorch", "scikit-learn", "MLflow", "Python", "R", "DoWhy", "CUDA", "XGBoost", "Pandas"].map((tech) => (
            <span key={tech} className="font-mono text-xs text-text-secondary bg-surface-light border border-border rounded-lg px-3 py-1.5">{tech}</span>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-surface-light border border-border p-5">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck size={14} weight="fill" className="text-accent" />
          <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-widest">Proof of Work</span>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed">
          Production deep learning across drone signal classification and computer vision lane detection, plus Air Force policy causal inference that quantified multi-million dollar cost trade-offs.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
        <div className="flex-1">
          <h4 className="font-display font-bold text-text-primary text-base mb-1">Need models that perform in production?</h4>
          <p className="text-text-secondary text-sm">From prediction to causal analysis, we build ML that drives real business outcomes.</p>
        </div>
        <Link href="/contact" className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-canvas font-semibold text-sm pl-6 pr-1.5 py-2 rounded-full no-underline transition-all duration-700 flex-shrink-0" style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}>
          Discuss Your ML Project
          <span className="w-7 h-7 rounded-full bg-canvas/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px" style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}><ArrowUpRight size={14} weight="bold" className="text-canvas" /></span>
        </Link>
      </div>
    </div>
  );
}

const servicePills: ServicePill[] = [
  {
    id: "web",
    icon: Globe,
    color: "#38BDF8",
    title: "Business Web Development",
    subtitle: "High-converting websites and web apps built with the same technology powering Silicon Valley",
    description:
      "Your website is your hardest-working salesperson. It should look the part. We design and build fast, responsive, SEO-optimized websites and web applications using modern frameworks like React and Next.js, tailored for businesses that want to convert visitors into customers.",
    content: <WebDevContent />,
  },
  {
    id: "database",
    icon: Database,
    color: "#3B82F6",
    title: "Database Architecture & Optimization",
    subtitle: "Schema design that won't buckle under growth",
    description:
      "We design, build, and optimize databases across Databricks, PostgreSQL, Snowflake, and Oracle. From data modeling and ETL pipelines to query performance tuning and migration -- built for terabyte-scale workloads.",
    content: <DatabaseContent />,
  },
  {
    id: "dashboards",
    icon: ChartBar,
    color: "#10B981",
    title: "Dashboard & Visualization Engineering",
    subtitle: "AI-powered cost prediction. Causal analysis visualizations.",
    description:
      "Interactive reporting surfaces in Tableau, Power BI, and R Shiny. We build dashboards that drive strategic decisions, detect anomalies in real time, and surface root causes -- not just pretty charts.",
    content: <DashboardContent />,
  },
  {
    id: "ai",
    icon: Robot,
    color: "#A78BFA",
    title: "Agentic AI & Workflow Design",
    subtitle: "Natural language to SQL. Air-gapped deployments.",
    description:
      "Multi-agent systems that route, decide, and execute. From RAG pipelines and NLP-to-SQL agents to fully autonomous orchestrators with guardrails, evaluation, and human-in-the-loop oversight.",
    content: <AIContent />,
  },
  {
    id: "analytics",
    icon: Brain,
    color: "#FB7185",
    title: "Advanced Analytics & Machine Learning",
    subtitle: "Causal inference. Production deep learning across signal and image domains.",
    description:
      "Predictive models, customer segmentation, causal inference, and deep learning -- deployed with monitoring, drift detection, and automated retraining. Models that ship to production, not just notebooks.",
    content: <AnalyticsContent />,
  },
];

export default function ServicesView() {
  const [openId, setOpenId] = useState<string | null>(null);
  const pillRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const hash = typeof window !== "undefined"
      ? window.location.hash.replace("#", "")
      : "";
    if (hash && servicePills.some((p) => p.id === hash)) {
      setOpenId(hash);
      setTimeout(() => {
        pillRefs.current[hash]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, []);

  return (
    <>
      <section className="relative z-10 pt-36 pb-12 md:pt-44 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <ScrollReveal>
            <div className="max-w-[680px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-yellow-400" />
                <span className="text-sm uppercase tracking-widest text-yellow-400">
                  Our capabilities
                </span>
              </div>
              <h1
                className="font-display font-bold tracking-tighter text-text-primary mb-5"
                style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
              >
                From AI agents
                <br />
                to predictive dashboards
              </h1>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-[540px]">
                Five disciplines that plug into each other: data pipelines,
                dashboards, AI agents, forecasting, and strategy. Every
                engagement draws on the full toolkit.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative z-10 pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col gap-4">
            {servicePills.map((pill, i) => {
              const isOpen = openId === pill.id;
              const IconComp = pill.icon;

              return (
                <ScrollReveal key={pill.id} delay={i * 0.06}>
                  <div
                    ref={(el) => { pillRefs.current[pill.id] = el; }}
                    className="p-1.5 rounded-[2rem] border transition-all duration-700"
                    style={{
                      backgroundColor: "rgba(19, 19, 22, 0.4)",
                      borderColor: isOpen
                        ? `${pill.color}40`
                        : "rgba(255, 255, 255, 0.07)",
                      transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                    }}
                  >
                    <div
                      className="rounded-[calc(2rem-0.375rem)] bg-surface overflow-hidden"
                      style={{ boxShadow: "var(--shadow-inner-highlight)" }}
                    >
                      <button
                        onClick={() => setOpenId(isOpen ? null : pill.id)}
                        className="w-full text-left px-6 py-6 lg:px-10 lg:py-8 flex items-start gap-5 cursor-pointer border-none bg-transparent group"
                      >
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-500"
                          style={{
                            backgroundColor: `${pill.color}15`,
                            transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                          }}
                        >
                          <IconComp
                            size={24}
                            weight="duotone"
                            style={{ color: pill.color }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h2 className="font-display font-bold text-text-primary text-xl lg:text-2xl tracking-tight mb-1">
                            {pill.title}
                          </h2>
                          <p className="text-text-tertiary text-sm italic mb-2">
                            {pill.subtitle}
                          </p>
                          <p className="text-text-secondary text-sm leading-relaxed max-w-[640px]">
                            {pill.description}
                          </p>
                        </div>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.32, 0.72, 0, 1],
                          }}
                          className="flex-shrink-0 mt-2"
                        >
                          <CaretDown
                            size={20}
                            weight="bold"
                            className="text-text-tertiary"
                          />
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              height: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
                              opacity: { duration: 0.3, delay: 0.1 },
                            }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-8 lg:px-10 lg:pb-10 pt-2 border-t border-border">
                              {pill.content}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mt-16">
              <div
                className="p-2 rounded-[2rem] border border-border"
                style={{
                  backgroundColor: "rgba(19, 19, 22, 0.4)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div
                  className="rounded-[calc(2rem-0.5rem)] bg-surface relative overflow-hidden px-6 py-14 lg:px-16 lg:py-16 text-center"
                  style={{ boxShadow: "var(--shadow-inner-highlight)" }}
                >
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 0%, rgba(250, 204, 21, 0.08) 0%, transparent 60%)",
                    }}
                  />
                  <div className="relative z-10 max-w-[580px] mx-auto">
                    <h2
                      className="font-display font-bold tracking-tighter text-text-primary mb-5"
                      style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
                    >
                      Not sure which service fits?
                    </h2>
                    <p className="text-text-secondary text-base leading-relaxed mb-8">
                      Describe the problem. We will map it to the right
                      combination of skills and give you a clear scope before any
                      commitment.
                    </p>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-canvas font-semibold text-base pl-8 pr-2 py-2.5 rounded-full no-underline transition-all duration-700"
                      style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                    >
                      Talk to us
                      <span
                        className="w-9 h-9 rounded-full bg-canvas/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105"
                        style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                      >
                        <ArrowUpRight size={16} weight="bold" className="text-canvas" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

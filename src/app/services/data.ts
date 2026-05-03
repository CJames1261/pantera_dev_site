export type ServicePillMeta = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
};

export const servicePillsMeta: ServicePillMeta[] = [
  {
    id: "web",
    title: "Business Web Development",
    subtitle: "High-converting websites and web apps built with the same technology powering Silicon Valley",
    description:
      "Your website is your hardest-working salesperson. It should look the part. We design and build fast, responsive, SEO-optimized websites and web applications using modern frameworks like React and Next.js, tailored for businesses that want to convert visitors into customers.",
  },
  {
    id: "database",
    title: "Database Architecture & Optimization",
    subtitle: "Schema design that won't buckle under growth",
    description:
      "We design, build, and optimize databases across Databricks, PostgreSQL, Snowflake, and Oracle. From data modeling and ETL pipelines to query performance tuning and migration -- built for terabyte-scale workloads.",
  },
  {
    id: "dashboards",
    title: "Dashboard & Visualization Engineering",
    subtitle: "AI-powered cost prediction. Causal analysis visualizations.",
    description:
      "Interactive reporting surfaces in Tableau, Power BI, and R Shiny. We build dashboards that drive strategic decisions, detect anomalies in real time, and surface root causes -- not just pretty charts.",
  },
  {
    id: "ai",
    title: "Agentic AI & Workflow Design",
    subtitle: "Natural language to SQL. Air-gapped deployments.",
    description:
      "Multi-agent systems that route, decide, and execute. From RAG pipelines and NLP-to-SQL agents to fully autonomous orchestrators with guardrails, evaluation, and human-in-the-loop oversight.",
  },
  {
    id: "analytics",
    title: "Advanced Analytics & Machine Learning",
    subtitle: "Causal inference. Production deep learning across signal and image domains.",
    description:
      "Predictive models, customer segmentation, causal inference, and deep learning -- deployed with monitoring, drift detection, and automated retraining. Models that ship to production, not just notebooks.",
  },
];

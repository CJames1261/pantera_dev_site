export type ServicePillMeta = {
  id: string;
  title: string;
  subtitle: string;
  /** Long-form service description (target ~150 words). Drives both the
   *  visible pill body and the JSON-LD Service description. */
  description: string;
};

export const servicePillsMeta: ServicePillMeta[] = [
  {
    id: "web",
    title: "Business Web Development",
    subtitle: "High-converting websites and web apps built with the same technology powering Silicon Valley",
    description:
      "Your website is your hardest-working salesperson, so it should look the part. We design and build fast, responsive, SEO-optimized websites and web applications using modern frameworks like React, Next.js, and TypeScript, deployed on Vercel for global edge performance. Engagements typically run 4 to 10 weeks: a discovery sprint to map your conversion goals, two to four design and build sprints, then a content and SEO finalization pass. We deliver working code (not slide decks), production hosting, and a handover guide so your team can update the site without us. Common projects include marketing sites for B2B services firms, internal portals and admin dashboards for operations teams, AI-powered chat or search interfaces wired into your data, and complete redesigns for businesses outgrowing a templated builder.",
  },
  {
    id: "database",
    title: "Database Architecture & Optimization",
    subtitle: "Schema design that won't buckle under growth",
    description:
      "We design, build, and optimize databases across Databricks, PostgreSQL, Snowflake, BigQuery, and Oracle. From data modeling and ETL pipeline architecture to query performance tuning and zero-downtime migration, every project is built to scale from day one. Typical engagements run 6 to 12 weeks and ship as a production-ready warehouse with documented schema, automated dbt or Airflow pipelines, monitoring dashboards, and a runbook your engineers can extend. We work most often on three problem shapes: clean-up projects (migrating off a legacy database that buckles under analytical load), greenfield builds (companies operationalizing data for the first time), and performance triage (existing warehouses returning slow queries). We have shipped pipelines for compliance-heavy environments, so security-sensitive workloads are familiar territory.",
  },
  {
    id: "dashboards",
    title: "Dashboard & Visualization Engineering",
    subtitle: "Predictive views and causal-analysis visualizations.",
    description:
      "We build interactive reporting platforms in Tableau, Power BI, R Shiny, and custom React applications. Real-time KPI monitoring, drill-down exploration, anomaly detection, and embedded analytics that your stakeholders actually trust. Engagements typically run 3 to 8 weeks per dashboard surface, with a discovery phase to identify the decisions the dashboard needs to drive, a build phase, and a calibration phase against real users. We deliver the live dashboards, the underlying data wiring (refresh pipelines, materialized views, change-data-capture where needed), and a maintenance guide. Three common shapes: executive dashboards aimed at leadership teams, operational dashboards used hourly by ops teams, and embedded analytics shipped inside SaaS products. ML-powered forecasting views and causal-analysis dashboards that surface KPI drivers (not just trends) are areas we have repeated experience in.",
  },
  {
    id: "ai",
    title: "Agentic AI & Workflow Design",
    subtitle: "Natural language to SQL. Air-gapped deployments.",
    description:
      "We build multi-agent systems that route, decide, and execute autonomously, plus the supporting infrastructure that keeps them safe in production. Tools include LangGraph and LangChain for orchestration, vector databases like Pinecone or ChromaDB for retrieval, and Ollama for air-gapped local inference. Engagements run 4 to 12 weeks: a one-week feasibility sprint that benchmarks performance on your data before scope is set, then iterative build and evaluation sprints with human-in-the-loop checkpoints. We ship working agents, evaluation harnesses with automated test suites, monitoring and prompt-injection protection, and runbooks for retraining and prompt updates. Common project shapes are NLP-to-SQL agents that let non-technical staff query databases in plain English, RAG pipelines over internal docs, and fully autonomous orchestrators replacing repetitive multi-step workflows. Air-gapped deployments inside classified on-premises environments are part of our background.",
  },
  {
    id: "analytics",
    title: "Advanced Analytics & Machine Learning",
    subtitle: "Causal inference. Production deep learning across signal and image domains.",
    description:
      "Predictive models, customer segmentation, causal inference, and deep learning, deployed with monitoring, drift detection, and automated retraining. We use TensorFlow, PyTorch, scikit-learn, MLflow for experiment tracking, and DoWhy for causal inference. Engagements run 6 to 14 weeks: a feasibility study that explores what is achievable on your actual data, a build phase, and a deployment phase that wires the model into your business workflow with monitoring. We deliver the trained model, a serving endpoint, an evaluation framework, drift alerts, and a retraining schedule. Three common project shapes: prediction and forecasting (churn, demand, revenue, risk scoring), causal inference for policy and pricing decisions where correlation alone is not enough, and deep learning for signal and image domains where rule-based approaches fall short.",
  },
];

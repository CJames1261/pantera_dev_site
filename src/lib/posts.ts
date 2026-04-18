export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image?: string
  /**
   * Full article body status. When `ready: false`, the detail page renders
   * a "being prepared" layout instead of article body. This keeps the site
   * honest while the writing is in progress.
   */
  ready: boolean
}

export const featuredPost: BlogPost = {
  slug: "dbt-performance",
  title: "Why your dbt project is slower than it should be",
  excerpt:
    "Most dbt performance problems come down to three things: materialization strategy, incremental model design, and warehouse-specific query optimization. Here's how we cut build times by 73% for a mid-stage fintech.",
  date: "April 6, 2026",
  readTime: "8 min",
  category: "Engineering",
  image: "https://picsum.photos/seed/dbt-perf/800/500",
  ready: false,
}

export const posts: BlogPost[] = [
  {
    slug: "agentic-ai-without-hallucination",
    title: "Building agentic AI that doesn't hallucinate your data",
    excerpt:
      "Retrieval-augmented generation is only as good as your retrieval layer. We break down the architecture that achieves 97.8% factual accuracy on internal knowledge bases.",
    date: "March 18, 2026",
    readTime: "12 min",
    category: "AI & ML",
    ready: false,
  },
  {
    slug: "cost-of-bad-data",
    title: "The real cost of bad data: a $1.4M case study",
    excerpt:
      "A growth-stage e-commerce company discovered that 23% of their revenue reporting was wrong. Here's how it happened and what we built to fix it.",
    date: "February 24, 2026",
    readTime: "6 min",
    category: "Strategy",
    ready: false,
  },
  {
    slug: "snowflake-bigquery-databricks",
    title: "Snowflake vs. BigQuery vs. Databricks: an honest comparison",
    excerpt:
      "We've deployed production workloads on all three. No vendor bias, just real performance data from actual client engagements across 14 different use cases.",
    date: "February 3, 2026",
    readTime: "15 min",
    category: "Engineering",
    ready: false,
  },
  {
    slug: "hiring-first-data-engineer",
    title: "How to hire your first data engineer",
    excerpt:
      "The interview process most companies use selects for the wrong skills. Here's the framework we recommend to Series A and Series B startups building their data team.",
    date: "January 14, 2026",
    readTime: "7 min",
    category: "Strategy",
    ready: false,
  },
  {
    slug: "real-time-dashboards",
    title: "Real-time dashboards: when you actually need them",
    excerpt:
      "Most companies don't need real-time data. Here's how to determine if you do, and the architecture patterns that make streaming dashboards reliable instead of fragile.",
    date: "December 18, 2025",
    readTime: "9 min",
    category: "Analytics",
    ready: false,
  },
]

export const allPosts: BlogPost[] = [featuredPost, ...posts]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug)
}

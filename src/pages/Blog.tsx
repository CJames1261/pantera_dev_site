import { ArrowUpRight, CalendarBlank, Clock, Tag } from "@phosphor-icons/react";
import ScrollReveal from "../components/ScrollReveal";

const featuredPost = {
  title: "Why your dbt project is slower than it should be",
  excerpt:
    "Most dbt performance problems come down to three things: materialization strategy, incremental model design, and warehouse-specific query optimization. Here's how we cut build times by 73% for a mid-stage fintech.",
  date: "2026-03-28",
  readTime: "8 min",
  category: "Engineering",
  image: "https://picsum.photos/seed/dbt-perf/800/500",
};

const posts = [
  {
    title: "Building agentic AI that doesn't hallucinate your data",
    excerpt:
      "Retrieval-augmented generation is only as good as your retrieval layer. We break down the architecture that achieves 97.8% factual accuracy on internal knowledge bases.",
    date: "2026-03-14",
    readTime: "12 min",
    category: "AI & ML",
  },
  {
    title: "The real cost of bad data: a $1.4M case study",
    excerpt:
      "A growth-stage e-commerce company discovered that 23% of their revenue reporting was wrong. Here's how it happened and what we built to fix it.",
    date: "2026-02-22",
    readTime: "6 min",
    category: "Strategy",
  },
  {
    title: "Snowflake vs. BigQuery vs. Databricks: an honest comparison",
    excerpt:
      "We've deployed production workloads on all three. No vendor bias, just real performance data from actual client engagements across 14 different use cases.",
    date: "2026-02-08",
    readTime: "15 min",
    category: "Engineering",
  },
  {
    title: "How to hire your first data engineer",
    excerpt:
      "The interview process most companies use selects for the wrong skills. Here's the framework we recommend to Series A and Series B startups building their data team.",
    date: "2026-01-19",
    readTime: "7 min",
    category: "Strategy",
  },
  {
    title: "Real-time dashboards: when you actually need them",
    excerpt:
      "Most companies don't need real-time data. Here's how to determine if you do, and the architecture patterns that make streaming dashboards reliable instead of fragile.",
    date: "2026-01-05",
    readTime: "9 min",
    category: "Analytics",
  },
];

export default function Blog() {
  return (
    <main className="relative z-10 pt-32 lg:pt-40 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Page Header */}
        <ScrollReveal>
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-border-light bg-surface mb-6">
              <span className="font-mono text-xs text-text-secondary tracking-wide uppercase">
                Blog
              </span>
            </div>
            <h1
              className="font-display font-bold tracking-tighter text-text-primary mb-4 max-w-[600px]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
            >
              Thinking, shipped
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed max-w-[520px]">
              Technical deep-dives, case studies, and honest takes on data
              infrastructure from the engineers who build it.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Post */}
        <ScrollReveal>
          <div
            className="p-1.5 rounded-[2rem] border border-border hover:border-border-light transition-all duration-700 mb-8 group cursor-pointer"
            style={{
              backgroundColor: "rgba(19, 19, 22, 0.4)",
              transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
            }}
          >
            <div
              className="rounded-[calc(2rem-0.375rem)] bg-surface overflow-hidden"
              style={{ boxShadow: "var(--shadow-inner-highlight)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                  />
                </div>
                <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="font-mono text-xs text-text-tertiary flex items-center gap-1.5">
                      <Tag size={12} weight="bold" />
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-text-primary text-2xl lg:text-3xl tracking-tight mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-text-secondary text-base leading-relaxed mb-6 max-w-[520px]">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-text-tertiary flex items-center gap-1.5">
                      <CalendarBlank size={12} />
                      {featuredPost.date}
                    </span>
                    <span className="font-mono text-xs text-text-tertiary flex items-center gap-1.5">
                      <Clock size={12} />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Post Grid — 2 column asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.08}>
              <div
                className="p-1.5 rounded-[2rem] border border-border hover:border-border-light transition-all duration-700 h-full group cursor-pointer"
                style={{
                  backgroundColor: "rgba(19, 19, 22, 0.4)",
                  transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                }}
              >
                <div
                  className="rounded-[calc(2rem-0.375rem)] bg-surface p-6 lg:p-8 h-full flex flex-col"
                  style={{ boxShadow: "var(--shadow-inner-highlight)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-accent/80 bg-accent/10 px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="font-mono text-xs text-text-tertiary flex items-center gap-1.5">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-text-primary text-lg tracking-tight mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <span className="font-mono text-xs text-text-tertiary">
                      {post.date}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-text-tertiary group-hover:text-accent transition-colors duration-300"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarBlank, Clock, Tag } from "@phosphor-icons/react/ssr";
import ScrollReveal from "@/components/ScrollReveal";
import { featuredPost, posts, allPosts } from "@/lib/posts";

const SITE_URL = "https://www.agenticaiutah.com";

export const metadata: Metadata = {
  title: { absolute: "Pantera Claw Blog | Data Engineering, AI & Analytics" },
  description:
    "Practical guides on AI, data analytics, and business intelligence written for small and mid-size business owners and the engineers who support them. Salt Lake City based, weekly cadence.",
  alternates: { canonical: "/blog" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
  ],
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Pantera Claw Blog",
  url: `${SITE_URL}/blog`,
  description:
    "Technical deep-dives, case studies, and honest takes on data infrastructure, analytics, and AI.",
  publisher: {
    "@type": "Organization",
    name: "Pantera Claw",
    url: SITE_URL,
  },
  blogPost: allPosts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `${SITE_URL}/blog/${p.slug}`,
    datePublished: p.isoDate,
    dateModified: p.isoDate,
    author: { "@type": "Organization", name: p.author ?? "Pantera Claw" },
    articleSection: p.category,
    description: p.excerpt,
  })),
};

export default function Blog() {
  return (
    <div className="relative z-10 pt-32 lg:pt-40 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-yellow-400" />
              <span className="text-sm uppercase tracking-widest text-yellow-400">
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

        {!featuredPost && (
          <ScrollReveal>
            <div
              className="p-1.5 rounded-[2rem] border border-border"
              style={{ backgroundColor: "rgba(19, 19, 22, 0.4)" }}
            >
              <div
                className="rounded-[calc(2rem-0.375rem)] bg-surface p-10 lg:p-16 text-center"
                style={{ boxShadow: "var(--shadow-inner-highlight)" }}
              >
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-4 justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  New posts publish Mondays
                </div>
                <h2 className="font-display font-bold text-text-primary text-2xl tracking-tight mb-3">
                  The next post lands soon.
                </h2>
                <p className="text-text-secondary text-base leading-relaxed max-w-[52ch] mx-auto">
                  We publish fresh writing every Monday on practical AI,
                  analytics, and how real businesses are using data to win.
                </p>
              </div>
            </div>
          </ScrollReveal>
        )}

        {featuredPost && (
        <ScrollReveal>
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="block mb-8 no-underline rounded-[2rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-canvas"
          >
            <div
              className="p-1.5 rounded-[2rem] border border-border hover:border-border-light transition-all duration-700 group"
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
                  <div className="hidden sm:block lg:col-span-2 aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.imageAlt ?? featuredPost.title}
                      width={1200}
                      height={750}
                      loading="lazy"
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
                    <h2 className="font-display font-bold text-text-primary text-2xl lg:text-3xl tracking-tight mb-4 leading-tight group-hover:text-accent transition-colors duration-500">
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
          </Link>
        </ScrollReveal>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="block h-full no-underline rounded-[2rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-canvas"
              >
                <div
                  className="p-1.5 rounded-[2rem] border border-border hover:border-border-light transition-all duration-700 h-full group"
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
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

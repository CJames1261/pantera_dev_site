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
  "@id": `${SITE_URL}/blog#blog`,
  name: "Pantera Claw Blog",
  url: `${SITE_URL}/blog`,
  description:
    "Technical deep-dives, case studies, and honest takes on data infrastructure, analytics, and AI.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  blogPost: allPosts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `${SITE_URL}/blog/${p.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${p.slug}`,
    },
    datePublished: p.isoDate,
    dateModified: p.isoDate,
    author: {
      "@type": "Person",
      name: p.author ?? "Chris James",
      url: `${SITE_URL}/about`,
    },
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
            <p className="text-text-secondary text-lg leading-relaxed max-w-[640px] mb-3">
              Practical writing on AI, data analytics, and business
              intelligence for owners and operators of small and mid-size
              businesses. Every post answers a question we actually get asked
              on discovery calls — what AI costs, when an agent beats a
              spreadsheet, how to brief AI tools so the output sounds like you.
            </p>
            <p className="text-text-tertiary text-sm leading-relaxed max-w-[640px]">
              {allPosts.length} posts published so far. New writing lands
              roughly every Monday, drafted on real client problems and
              edited by humans before publishing.
            </p>
          </div>
        </ScrollReveal>

        {!featuredPost && (
          <ScrollReveal>
            <div
              className="rounded-[28px] border border-white/10 bg-[#111214]/90 p-10 lg:p-16 text-center transition-all duration-300 hover:border-yellow-400/40"
              style={{ boxShadow: "0 18px 50px rgba(0,0,0,0.45)" }}
            >
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-yellow-400 mb-4 justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                New posts publish Mondays
              </div>
              <h2 className="font-display text-[20px] font-extrabold leading-tight tracking-[-0.02em] text-text-primary mb-3">
                The next post lands soon.
              </h2>
              <p className="text-text-secondary text-[16px] leading-6 max-w-[52ch] mx-auto">
                We publish fresh writing every Monday on practical AI,
                analytics, and how real businesses are using data to win.
              </p>
            </div>
          </ScrollReveal>
        )}

        {featuredPost && (
        <ScrollReveal>
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group/card block mb-8 no-underline rounded-[28px] border border-white/10 bg-[#111214]/90 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-[#151515] focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-4 focus-visible:ring-offset-canvas"
            style={{ boxShadow: "0 18px 50px rgba(0,0,0,0.45)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              <div className="hidden sm:block lg:col-span-2 aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.imageAlt ?? featuredPost.title}
                  width={1200}
                  height={750}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
              </div>
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-xs text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="font-mono text-xs text-text-tertiary flex items-center gap-1.5">
                    <Tag size={12} weight="bold" />
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="font-display text-[24px] lg:text-[28px] font-extrabold tracking-[-0.02em] leading-tight text-text-primary mb-4 group-hover/card:text-yellow-400 transition-colors duration-300">
                  {featuredPost.title}
                </h2>
                <p className="text-text-secondary text-[16px] leading-6 mb-6 max-w-[520px]">
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
          </Link>
        </ScrollReveal>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-fr gap-6">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group/card flex h-full flex-col no-underline rounded-[28px] border border-white/10 bg-[#111214]/90 p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-[#151515] focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-4 focus-visible:ring-offset-canvas"
                style={{ boxShadow: "0 18px 50px rgba(0,0,0,0.45)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="font-mono text-xs text-text-tertiary flex items-center gap-1.5">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-display text-[20px] font-extrabold tracking-[-0.02em] leading-tight text-text-primary mb-3 group-hover/card:text-yellow-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-text-secondary text-[16px] leading-6 mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <span className="font-mono text-xs text-text-tertiary">
                    {post.date}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 text-black transition-transform duration-300 group-hover/card:translate-x-1" aria-hidden="true">
                    <ArrowUpRight size={16} weight="bold" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

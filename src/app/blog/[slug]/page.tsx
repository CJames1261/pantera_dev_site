import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  ArrowLeft,
  CalendarBlank,
  Clock,
  Tag,
  EnvelopeSimple,
} from "@phosphor-icons/react/ssr";
import ScrollReveal from "@/components/ScrollReveal";
import { getPostBySlug, allPosts, type BlogPost } from "@/lib/posts";

const SITE_URL = "https://www.agenticaiutah.com";

const POST_FAQS: Record<string, { q: string; a: string }[]> = {
  "ai-agents-vs-spreadsheets-choosing-the-right-tool-for-your-business": [
    {
      q: "When should I use an AI agent instead of a spreadsheet?",
      a: "Use an AI agent when the workflow involves multiple steps, decisions based on natural language, or pulling data from several systems. Use a spreadsheet when the calculation is well-defined, the data is structured, and the result is read by humans rather than triggered automatically.",
    },
    {
      q: "How much does it cost to replace a spreadsheet with an AI agent?",
      a: "A simple agent that automates a recurring spreadsheet task typically runs $300-1,500 per month in API and infrastructure costs, plus 20-60 hours of one-time engineering. Compare that against the labor hours the spreadsheet currently consumes weekly.",
    },
    {
      q: "Can AI agents make spreadsheets obsolete?",
      a: "No. Spreadsheets remain the right tool for ad-hoc analysis, financial modeling with version control, and any workflow where a human needs to see the entire calculation. AI agents replace the repetitive tasks built around spreadsheets, not the spreadsheets themselves.",
    },
  ],
  "using-ai-to-write-your-marketing-copy-without-sounding-like-a-robot": [
    {
      q: "How can I tell if marketing copy was written by AI?",
      a: "Common tells: parallel sentence structures, hedging phrases like 'in today's landscape,' generic adjectives ('robust,' 'comprehensive'), and an absence of specific examples or numbers. Add concrete details, named clients, and unusual phrasings during human review to break the AI cadence.",
    },
    {
      q: "What is the best AI tool for writing marketing copy?",
      a: "There is no single best tool. Claude tends to handle longer-form content with brand voice constraints well; ChatGPT is faster for short-form social posts; specialized tools like Copy.ai or Jasper add brand-voice memory features. Pick based on the length of content and how much voice consistency you need.",
    },
    {
      q: "Should I disclose that I used AI to write marketing copy?",
      a: "Disclosure is rarely required for marketing copy that has been edited by a human. Most platforms (Google, LinkedIn) only require disclosure for synthetic media or for fully unedited AI output. When in doubt, treat the copy as a draft - the final voice and accuracy are yours.",
    },
  ],
  "what-a-realistic-ai-budget-looks-like-for-a-ten-person-company": [
    {
      q: "How much should a 10-person company spend on AI per month?",
      a: "A reasonable starting range is $500-3,000 per month covering AI tool subscriptions (Claude, ChatGPT, niche tools), API usage for any custom integrations, and a small reserve for experiments. Larger budgets only make sense once you have a specific workflow paying back the spend.",
    },
    {
      q: "What are the main AI cost buckets for a small business?",
      a: "Three buckets: tool subscriptions (per-seat SaaS like Claude Pro, ChatGPT Team, Microsoft Copilot), API consumption (pay-per-token costs for any custom apps or agents), and consulting or integration work (one-time projects to wire AI into existing systems).",
    },
    {
      q: "Is it cheaper to build custom AI or buy off-the-shelf tools?",
      a: "Buying off-the-shelf tools is almost always cheaper for the first year. Custom builds become cost-effective when (a) the workflow is specific to your industry and no SaaS exists, or (b) per-seat licensing gets expensive past 50-100 users. Start with off-the-shelf, build custom only after the use case is proven.",
    },
  ],
};

function countWords(html: string): number {
  return html
    .replace(/<[^>]+>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: { absolute: "Page not found | Pantera Claw" } };
  }
  const url = `${SITE_URL}/blog/${post.slug}`;
  const absoluteImage = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `${SITE_URL}${post.image}`
    : `${SITE_URL}/Pantera_Claw_hero.webp`;

  return {
    title: { absolute: `${post.title} | Pantera Claw Blog` },
    description: post.excerpt.slice(0, 160),
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt.slice(0, 160),
      url,
      images: [{ url: absoluteImage }],
      publishedTime: post.isoDate,
      modifiedTime: post.isoDate,
      authors: [post.author ?? "Pantera Claw"],
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt.slice(0, 160),
      images: [absoluteImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const nextPost: BlogPost | undefined =
    currentIndex >= 0 && currentIndex < allPosts.length - 1
      ? allPosts[currentIndex + 1]
      : undefined;

  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const author = post.author ?? "Chris James";
  const absoluteImage = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `${SITE_URL}${post.image}`
    : `${SITE_URL}/Pantera_Claw_hero.webp`;

  const wordCount = post.bodyHtml ? countWords(post.bodyHtml) : undefined;
  const faqs = POST_FAQS[post.slug];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteImage,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    ...(wordCount ? { wordCount } : {}),
    keywords: [post.category, "AI consulting", "data consulting", "Pantera Claw"].join(", "),
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: author,
      url: `${SITE_URL}/about`,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    articleSection: post.category,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };

  const faqSchema = faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      }
    : null;

  return (
    <div className="relative z-10 pt-32 lg:pt-40 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <article className="max-w-[820px] mx-auto px-4 md:px-8">
        <ScrollReveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent text-sm font-mono mb-8 no-underline transition-colors duration-300"
          >
            <ArrowLeft size={14} weight="bold" />
            All posts
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-accent bg-accent/10 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Tag size={12} weight="bold" />
              {post.category}
            </span>
            <span className="font-mono text-xs text-text-tertiary flex items-center gap-1.5">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>

          <h1
            className="font-display font-bold tracking-tighter text-text-primary leading-[1.08] mb-5"
            style={{ fontSize: "clamp(1.875rem, 4.5vw, 3rem)" }}
          >
            {post.title}
          </h1>

          <div className="flex items-center gap-2 text-text-tertiary font-mono text-sm mb-10">
            <CalendarBlank size={14} />
            {post.date}
          </div>

          <p className="text-text-primary text-xl lg:text-2xl leading-relaxed font-light tracking-tight mb-12 max-w-[64ch]">
            {post.excerpt}
          </p>

          {post.image && (
            <div
              className="p-1.5 rounded-[2rem] border border-border mb-12"
              style={{ backgroundColor: "rgba(19, 19, 22, 0.4)" }}
            >
              <div
                className="rounded-[calc(2rem-0.375rem)] overflow-hidden aspect-[16/9]"
                style={{ boxShadow: "var(--shadow-inner-highlight)" }}
              >
                <img
                  src={post.image}
                  alt={post.imageAlt ?? post.title}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          )}
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          {post.ready ? (
            post.bodyHtml ? (
              <div
                className="blog-body max-w-none text-text-secondary text-base lg:text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
              />
            ) : null
          ) : (
            <div
              className="p-1.5 rounded-[2rem] border border-border"
              style={{ backgroundColor: "rgba(19, 19, 22, 0.4)" }}
            >
              <div
                className="rounded-[calc(2rem-0.375rem)] bg-surface p-8 lg:p-12"
                style={{ boxShadow: "var(--shadow-inner-highlight)" }}
              >
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Article in progress
                </div>
                <h2 className="font-display font-bold text-text-primary text-2xl mb-4 tracking-tight">
                  The full write-up is being prepared.
                </h2>
                <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-[58ch]">
                  We publish these carefully and test every claim against real
                  client engagements before it ships. If you want the detail now,
                  we&apos;re happy to walk you through the specifics on a call, or
                  email us the question directly.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-canvas font-semibold text-sm pl-5 pr-2 py-2 rounded-full transition-all duration-700 no-underline"
                    style={{
                      transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                    }}
                  >
                    Ask us about this
                    <span
                      className="w-7 h-7 rounded-full bg-canvas/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px"
                      style={{
                        transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                      }}
                    >
                      <ArrowUpRight size={12} weight="bold" className="text-canvas" />
                    </span>
                  </Link>
                  <a
                    href={`mailto:info@panteraclaw.com?subject=${encodeURIComponent(
                      `Question about: ${post.title}`,
                    )}`}
                    className="inline-flex items-center gap-2 bg-surface border border-border hover:border-border-light text-text-primary font-medium text-sm px-5 py-2 rounded-full transition-colors duration-300 no-underline"
                  >
                    <EnvelopeSimple size={14} weight="bold" />
                    Email us
                  </a>
                </div>
              </div>
            </div>
          )}
        </ScrollReveal>

        {faqs && (
          <ScrollReveal delay={0.12}>
            <section className="mt-16 pt-10 border-t border-border" aria-labelledby="post-faq">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-3">
                Frequently asked
              </div>
              <h2
                id="post-faq"
                className="font-display font-bold text-text-primary text-2xl lg:text-3xl tracking-tight mb-8"
              >
                Quick answers
              </h2>
              <div className="flex flex-col gap-6">
                {faqs.map(({ q, a }) => (
                  <div key={q}>
                    <h3 className="font-display font-semibold text-text-primary text-lg mb-2 leading-snug">
                      {q}
                    </h3>
                    <p className="text-text-secondary text-base leading-relaxed max-w-[64ch]">
                      {a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {nextPost && (
          <ScrollReveal delay={0.15}>
            <div className="mt-20 pt-10 border-t border-border">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-tertiary mb-4">
                Next read
              </div>
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex items-start justify-between gap-6 no-underline"
              >
                <div>
                  <h3 className="font-display font-bold text-text-primary text-xl lg:text-2xl tracking-tight leading-tight group-hover:text-accent transition-colors duration-300">
                    {nextPost.title}
                  </h3>
                  <p className="text-text-secondary text-sm mt-2 max-w-[58ch]">
                    {nextPost.excerpt}
                  </p>
                </div>
                <span
                  className="shrink-0 mt-1 w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary group-hover:border-accent/40 group-hover:text-accent transition-all duration-500"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                  }}
                >
                  <ArrowUpRight size={16} weight="bold" />
                </span>
              </Link>
            </div>
          </ScrollReveal>
        )}
      </article>
    </div>
  );
}

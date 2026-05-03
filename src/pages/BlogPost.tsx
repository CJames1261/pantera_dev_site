import { Link, useParams } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowLeft,
  CalendarBlank,
  Clock,
  Tag,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import ScrollReveal from "../components/ScrollReveal";
import Seo from "../components/Seo";
import NotFound from "./NotFound";
import { getPostBySlug, allPosts, type BlogPost } from "../lib/posts";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const nextPost: BlogPost | undefined =
    currentIndex >= 0 && currentIndex < allPosts.length - 1
      ? allPosts[currentIndex + 1]
      : undefined;

  const SITE_URL = "https://www.agenticaiutah.com";
  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const author = post.author ?? "Pantera Claw";
  const absoluteImage = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `${SITE_URL}${post.image}`
    : `${SITE_URL}/Pantera_Claw_hero.webp`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteImage,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    author: {
      "@type": "Organization",
      name: author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Pantera Claw",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.svg`,
      },
    },
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

  return (
    <main className="relative z-10 pt-32 lg:pt-40 pb-24">
      <Seo
        title={`${post.title} | Pantera Claw Blog`}
        description={post.excerpt.slice(0, 160)}
        path={`/blog/${post.slug}`}
        type="article"
        ogImage={post.image}
        articleMeta={{
          publishedTime: post.isoDate,
          modifiedTime: post.isoDate,
          author,
          section: post.category,
        }}
        jsonLd={[articleSchema, breadcrumbSchema]}
      />
      <article className="max-w-[820px] mx-auto px-4 md:px-8">
        <ScrollReveal>
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent text-sm font-mono mb-8 no-underline transition-colors duration-300"
          >
            <ArrowLeft size={14} weight="bold" />
            All posts
          </Link>

          {/* Category pill */}
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

          {/* Title */}
          <h1
            className="font-display font-bold tracking-tighter text-text-primary leading-[1.08] mb-5"
            style={{ fontSize: "clamp(1.875rem, 4.5vw, 3rem)" }}
          >
            {post.title}
          </h1>

          {/* Date */}
          <div className="flex items-center gap-2 text-text-tertiary font-mono text-sm mb-10">
            <CalendarBlank size={14} />
            {post.date}
          </div>

          {/* Excerpt block */}
          <p className="text-text-primary text-xl lg:text-2xl leading-relaxed font-light tracking-tight mb-12 max-w-[64ch]">
            {post.excerpt}
          </p>

          {/* Featured image if present */}
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

        {/* Article body — "being prepared" state when ready === false */}
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
                  we're happy to walk you through the specifics on a call, or
                  email us the question directly.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact"
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

        {/* Next post pager */}
        {nextPost && (
          <ScrollReveal delay={0.15}>
            <div className="mt-20 pt-10 border-t border-border">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-tertiary mb-4">
                Next read
              </div>
              <Link
                to={`/blog/${nextPost.slug}`}
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
    </main>
  );
}

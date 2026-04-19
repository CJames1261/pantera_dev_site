export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  /** Human-readable date shown in the UI, e.g. "April 6, 2026". */
  date: string
  /** ISO 8601 date for schemas, sitemap, and OG article meta. */
  isoDate: string
  readTime: string
  category: string
  image?: string
  /** Plain-language description for image alt text. */
  imageAlt?: string
  author?: string
  /** Full article body as HTML. Generated posts include this; manual stubs may omit it. */
  bodyHtml?: string
  /**
   * When false, the detail page renders a "being prepared" layout instead of article body.
   * Generated posts always set this to true.
   */
  ready: boolean
}

const DEFAULT_AUTHOR = "Pantera Claw"

type GeneratedPost = Omit<BlogPost, "author" | "ready"> & {
  author?: string
  ready?: boolean
}

const modules = import.meta.glob<{ default: GeneratedPost }>(
  "../content/posts/*.json",
  { eager: true }
)

const generated: BlogPost[] = Object.values(modules).map((m) => ({
  author: DEFAULT_AUTHOR,
  ready: true,
  ...m.default,
}))

export const allPosts: BlogPost[] = generated.sort((a, b) =>
  b.isoDate.localeCompare(a.isoDate)
)

export const featuredPost: BlogPost | undefined = allPosts[0]
export const posts: BlogPost[] = allPosts.slice(1)

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug)
}

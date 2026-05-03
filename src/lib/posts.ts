import fs from "node:fs"
import path from "node:path"

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

const POSTS_DIR = path.join(process.cwd(), "src", "content", "posts")

function loadAll(): BlogPost[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".json"))
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8")
    const data = JSON.parse(raw) as Partial<BlogPost>
    return {
      author: DEFAULT_AUTHOR,
      ready: true,
      ...data,
    } as BlogPost
  })
  return posts.sort((a, b) => b.isoDate.localeCompare(a.isoDate))
}

export const allPosts: BlogPost[] = loadAll()
export const featuredPost: BlogPost | undefined = allPosts[0]
export const posts: BlogPost[] = allPosts.slice(1)

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug)
}

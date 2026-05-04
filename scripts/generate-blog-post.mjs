#!/usr/bin/env node
// Weekly blog post generator. Picks an unused topic from blog-agent.config.json,
// calls the Anthropic API to write the post, and drops a JSON file into
// src/content/posts/ where it's auto-discovered by src/lib/posts.ts.

import { readFile, writeFile, readdir, mkdir } from "node:fs/promises"
import { existsSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = join(__dirname, "..")
const configPath = join(repoRoot, "blog-agent.config.json")
const contentDir = join(repoRoot, "src", "content", "posts")

const API_KEY = process.env.ANTHROPIC_API_KEY
if (!API_KEY) {
  console.error("ANTHROPIC_API_KEY is not set.")
  process.exit(1)
}

const config = JSON.parse(await readFile(configPath, "utf8"))
const model = config.model || "claude-sonnet-4-6"

if (!existsSync(contentDir)) await mkdir(contentDir, { recursive: true })

const existingFiles = await readdir(contentDir)
const existingSlugs = new Set(
  existingFiles.filter((f) => f.endsWith(".json")).map((f) => f.replace(/\.json$/, ""))
)

// Trim a hyphen-delimited slug to a maximum length without cutting a word in
// half. We split on the existing dashes and rebuild while we have budget.
function smartTrimSlug(slug, max) {
  if (slug.length <= max) return slug
  const parts = slug.split("-")
  const out = []
  let len = 0
  for (const part of parts) {
    const next = len === 0 ? part.length : len + 1 + part.length
    if (next > max) break
    out.push(part)
    len = next
  }
  // Fallback: if a single first word already blows the budget, hard-cut it
  // rather than emit an empty slug.
  return out.length > 0 ? out.join("-") : slug.slice(0, max)
}

function slugify(text) {
  const raw = text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
  return smartTrimSlug(raw, 100)
}

// Map post categories to existing self-hosted section illustrations so we
// never ship a third-party placeholder URL. Authors can replace these with
// per-post artwork later by editing the JSON.
const CATEGORY_HERO_IMAGE = {
  "Strategy": "/sections/ai_strategy_meeting.webp",
  "AI & ML": "/sections/agentic_viz.webp",
  "Analytics": "/sections/advanced_analytics_viz.webp",
  "Engineering": "/sections/data_pipeline_viz.webp",
  "Marketing": "/sections/dashboard_viz.webp",
}

function pickHeroImage(category) {
  return CATEGORY_HERO_IMAGE[category] ?? "/Pantera_Claw_hero.webp"
}

// Load already-used topics so we rotate through the pool.
const usedTopics = new Set()
for (const f of existingFiles) {
  if (!f.endsWith(".json")) continue
  try {
    const data = JSON.parse(await readFile(join(contentDir, f), "utf8"))
    if (data.sourceTopic) usedTopics.add(data.sourceTopic)
  } catch {
    // ignore malformed files
  }
}

const available = config.topicPool.filter((t) => !usedTopics.has(t))
const pool = available.length > 0 ? available : config.topicPool
const topic = pool[Math.floor(Math.random() * pool.length)]

console.log(`Chosen topic: ${topic}`)

const targetKeywords = config.seoKeywords?.target?.join(", ") || ""
const recommendedKeywords = config.seoKeywords?.recommended?.join(", ") || ""

const citations = config.style.citations
const citationsRule = citations?.required
  ? `\nCITATIONS (MANDATORY):\n- ${citations.instructions}\n- Approved domains (use ONLY these for external citations):\n${citations.approvedDomains.map((d) => `  * ${d}`).join("\n")}\n- Minimum citations per post: ${citations.minimum || 1}.\n- The internal CTA link to ${config.style.ctaLink} does NOT count as a citation.`
  : ""

const systemPrompt = `You are a senior content writer for Pantera Claw, a data and AI consulting firm. You write for ${config.targetAudiences.join(", ")}.

${config.audienceVoice || ""}

Tone: ${config.style.tone}.
Length: between ${config.style.minWords} and ${config.style.maxWords} words.

CRITICAL FORMATTING RULES:
- ${config.style.formatting.noDashesNote}
- ${config.style.formatting.headings}
- ${config.style.formatting.lists}
- Do NOT include the article title as an h1; the page renders the title separately.
- Never use em dashes (—) or en dashes (–) either. Only commas, semicolons, periods, or rewrites.

SEO GUIDANCE:
- Priority keywords to weave in where natural: ${targetKeywords}.
- Supporting keywords: ${recommendedKeywords}.
- Use 3 to 5 total; never force them.
${citationsRule}
CTA:
- End the post with a short closing section that naturally invites the reader to ${config.style.ctaText} via the link ${config.style.ctaLink}. Render it as <p><a href="${config.style.ctaLink}">${config.style.ctaText}</a></p> at the end.

You return the post by calling the publish_blog_post tool. Do not respond with prose.`

const userPrompt = `Write this week's blog post.

Topic: "${topic}"

Call the publish_blog_post tool with the finished article. Use clean HTML
in the bodyHtml field with <h2>, <h3>, <p>, <ul>, <ol>, <li>, <strong>,
<blockquote>, and <a>. Never include <h1> in the body — the page renders
the title separately. Stay within the target word count.`

// Tool-use forces the model to return structured JSON validated by the
// API itself. This avoids the JSON.parse failures we used to see when
// the model embedded raw double-quoted HTML attributes inside a string.
const blogTool = {
  name: "publish_blog_post",
  description:
    "Publish the finished weekly blog post. The runtime stores each field on disk and renders the post on the blog.",
  input_schema: {
    type: "object",
    additionalProperties: false,
    required: ["title", "excerpt", "category", "readTime", "imageAlt", "bodyHtml"],
    properties: {
      title: {
        type: "string",
        description: "Compelling article title, under 90 characters, no dashes.",
      },
      excerpt: {
        type: "string",
        description:
          "One to two sentences, under 220 characters, no dashes. Summarizes the post for the blog index card.",
      },
      category: {
        type: "string",
        enum: ["Strategy", "AI & ML", "Analytics", "Engineering", "Marketing"],
      },
      readTime: {
        type: "string",
        description: "Reading time label like '7 min'.",
      },
      imageAlt: {
        type: "string",
        description: "One short sentence describing a suitable hero image.",
      },
      bodyHtml: {
        type: "string",
        description:
          "Full article as clean HTML. Allowed tags: h2, h3, p, ul, ol, li, strong, blockquote, a. No h1. No dashes anywhere.",
      },
    },
  },
}

console.log(`Calling Anthropic API (${model})...`)

const response = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
    "anthropic-version": "2023-06-01",
  },
  body: JSON.stringify({
    model,
    max_tokens: 4096,
    system: systemPrompt,
    messages: [{ role: "user", content: userPrompt }],
    tools: [blogTool],
    tool_choice: { type: "tool", name: "publish_blog_post" },
  }),
})

if (!response.ok) {
  console.error(`Anthropic API error: ${response.status} ${response.statusText}`)
  console.error(await response.text())
  process.exit(1)
}

const apiResult = await response.json()

// With forced tool_use, the structured JSON arrives pre-parsed in the
// tool_use block's `input` field, so we never have to JSON.parse a string.
const toolUseBlock = apiResult.content?.find((b) => b.type === "tool_use")
let parsed = toolUseBlock?.input

if (!parsed) {
  // Fallback: some older model behaviors may still emit a raw text JSON
  // block. Try to recover so we don't lose the run.
  const textBlock = apiResult.content?.find((b) => b.type === "text")
  const rawText = textBlock?.text
  if (!rawText) {
    console.error("No tool_use or text content in API response:")
    console.error(JSON.stringify(apiResult, null, 2))
    process.exit(1)
  }
  const cleaned = rawText
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
  try {
    parsed = JSON.parse(cleaned)
  } catch (err) {
    console.error("Failed to parse model fallback text as JSON:")
    console.error(cleaned)
    throw err
  }
}

// Strip any dashes that slipped past the prompt rules.
function stripDashes(str) {
  return str.replace(/[\u2010-\u2015\u2212]/g, ",").replace(/\s-\s/g, ", ").replace(/(\w)-(\w)/g, "$1 $2")
}

parsed.title = stripDashes(parsed.title)
parsed.excerpt = stripDashes(parsed.excerpt)
parsed.bodyHtml = stripDashes(parsed.bodyHtml)

const now = new Date()
const isoDate = now.toISOString().slice(0, 10)
const humanDate = now.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
})

let slug = slugify(parsed.title)
let uniqueSlug = slug
let counter = 2
while (existingSlugs.has(uniqueSlug)) {
  uniqueSlug = `${slug}-${counter++}`
}

const post = {
  slug: uniqueSlug,
  title: parsed.title,
  excerpt: parsed.excerpt,
  date: humanDate,
  isoDate,
  readTime: parsed.readTime,
  category: parsed.category,
  image: pickHeroImage(parsed.category),
  imageAlt: parsed.imageAlt,
  author: config.author,
  bodyHtml: parsed.bodyHtml,
  ready: true,
  sourceTopic: topic,
  generatedAt: now.toISOString(),
  model,
}

const outPath = join(contentDir, `${uniqueSlug}.json`)
await writeFile(outPath, JSON.stringify(post, null, 2) + "\n", "utf8")

// Surface external citations so a human can spot-check them.
const externalLinks = [...post.bodyHtml.matchAll(/<a\s+[^>]*href="(https?:\/\/[^"]+)"/gi)]
  .map((m) => m[1])
  .filter((href) => !href.startsWith("https://www.agenticaiutah.com") && href !== config.style.ctaLink)

const minCitations = config.style.citations?.minimum ?? 0
if (config.style.citations?.required && externalLinks.length < minCitations) {
  console.warn(
    `⚠ Citation rule not satisfied: found ${externalLinks.length} external link(s), expected at least ${minCitations}.`,
  )
} else if (externalLinks.length > 0) {
  console.log(`  Citations (${externalLinks.length}):`)
  externalLinks.forEach((url) => console.log(`    - ${url}`))
}

console.log(`✓ Wrote ${outPath}`)
console.log(`  Title: ${post.title}`)
console.log(`  Slug:  ${post.slug}`)

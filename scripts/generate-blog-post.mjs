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

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80)
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

You will respond with a single JSON object and nothing else. No markdown fences, no prose around it.`

const userPrompt = `Write this week's blog post.

Topic: "${topic}"

Return a JSON object with exactly these fields:
{
  "title": "string, compelling, under 90 chars, no dashes",
  "excerpt": "string, 1 to 2 sentences, under 220 chars, no dashes, summarizes the post for the blog index card",
  "category": "one of: Strategy, AI & ML, Analytics, Engineering, Marketing",
  "readTime": "string like '7 min'",
  "imageAlt": "string, one short sentence describing a suitable hero image",
  "bodyHtml": "string, the full article as clean HTML using <h2>, <h3>, <p>, <ul>, <ol>, <li>, <strong>, <blockquote>, <a>. No <h1>. No dashes anywhere. Must be within the target word count."
}

Do not include any text outside the JSON object.`

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
  }),
})

if (!response.ok) {
  console.error(`Anthropic API error: ${response.status} ${response.statusText}`)
  console.error(await response.text())
  process.exit(1)
}

const apiResult = await response.json()
const rawText = apiResult.content?.[0]?.text
if (!rawText) {
  console.error("No content in API response:", JSON.stringify(apiResult, null, 2))
  process.exit(1)
}

// Strip accidental code fences if the model wrapped the JSON.
const cleaned = rawText
  .trim()
  .replace(/^```(?:json)?\s*/i, "")
  .replace(/\s*```$/i, "")

let parsed
try {
  parsed = JSON.parse(cleaned)
} catch (err) {
  console.error("Failed to parse model output as JSON:")
  console.error(cleaned)
  throw err
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
  image: `https://picsum.photos/seed/${uniqueSlug}/1200/675`,
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

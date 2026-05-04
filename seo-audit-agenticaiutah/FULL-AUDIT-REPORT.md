# Full SEO Audit — agenticaiutah.com

**Audited:** 2026-05-04
**Site:** https://www.agenticaiutah.com (Pantera Claw — AI & Data Consulting)
**Pages crawled:** 11 / 11 (100% of sitemap)
**Stack:** Next.js on Vercel (prerendered)

---

## Executive Summary

| Metric | Score |
|---|---|
| **Overall SEO Health Score** | **84 / 100** |
| Business type | Local Service / Hybrid Agency (Salt Lake City + nationwide remote) |
| Industry | AI & Data Consulting |
| Schema coverage | Excellent (Org, ProfessionalService, Service, FAQ, Blog, Breadcrumb, Article) |
| AI search readiness | Strong (llms.txt + llms-full.txt present, all major AI crawlers explicitly allowed) |

### Category Scores

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 92 | 20.2 |
| Content Quality | 23% | 78 | 17.9 |
| On-Page SEO | 20% | 75 | 15.0 |
| Schema / Structured Data | 10% | 95 | 9.5 |
| Performance (CWV, lab) | 10% | 88 | 8.8 |
| AI Search Readiness | 10% | 92 | 9.2 |
| Images | 5% | 70 | 3.5 |
| **Total** | 100% | — | **84.1** |

### Top 5 Critical Issues

1. **Blog hero images are picsum.photos placeholders** — every blog post (`/blog/*`) uses `https://picsum.photos/seed/<slug>/1200/675` as both the visible hero AND the `BlogPosting.image` JSON-LD value. Random lorem-ipsum images destroy E-E-A-T, fail to ground AI citations, and break entirely if picsum goes down.
2. **H1 whitespace bug on home + services** — H1 renders as `"We build the data systemsthat poweryour decisions"` (home) and `"From AI agentsto predictive dashboards"` (services). Words are concatenated with no space — likely a flex/grid `<span>` rendering bug. The most important on-page element is broken.
3. **Truncated URL slug for the newest blog post** — `/blog/local-seo-in-the-ai-era-getting-found-when-customers-ask-chatgpt-for-recommendat` cuts off mid-word at `recommendat`. Looks like an ~80-char truncation in the slug generator.
4. **Truncated meta description on the same post** — `…Here's how to make sure your business show` (cut at "show", 159 chars). Suggests the same string-length cap is being hit.
5. **Inconsistent blog index heading hierarchy** — `/blog` uses an `<h2>` for the most recent post and `<h3>` for the other three. Should be parallel (all `<h2>` for article cards).

### Top 5 Quick Wins

1. Replace picsum placeholders with self-hosted WebP hero images per post (also update `BlogPosting.image` schema URLs).
2. Patch the H1 spacing bug on the home and services pages (likely insert a space inside the styled inline element, or use `text-balance` correctly).
3. Lift the slug max-length and meta-description max-length in the blog generator so titles ending in long words aren't sliced.
4. Add real `Person` author schema with bio, photo, and `sameAs` social links — current author "Pantera Claw" Person is mismatched (organization name on a Person type).
5. Expand `Organization.sameAs` beyond a single GitHub link — add LinkedIn, X/Twitter, Facebook, and a Google Business Profile URL when GBP is claimed.

---

## Technical SEO — Score 92/100

### Strengths
- **HTTPS + HSTS preload**: `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` ✓
- **CSP defined**: `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com; …` ✓
- **Security headers complete**: `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()` ✓
- **robots.txt**: explicit `Allow: /` for every major AI crawler (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, Bingbot, DuckDuckBot, CCBot) ✓
- **307 → 200 redirect** from apex `agenticaiutah.com` to `www.agenticaiutah.com` (clean single hop, no chain)
- **Canonicals correct on every page** ✓
- **`X-Nextjs-Prerender: 1`** — pages are SSR/SSG, fully visible to non-JS crawlers ✓
- **Vercel edge cache hits** observed (`X-Vercel-Cache: HIT`)

### Issues
| Severity | Issue |
|---|---|
| Low | CSP allows `'unsafe-inline'` and `'unsafe-eval'` for scripts — common with Next.js but should be tightened with nonces if/when Strict CSP is targeted. |
| Low | `Vary` header is unusually long (`rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch`) — fine for Next.js App Router but could fragment CDN cache. |
| Info | No IndexNow ping configured (Bing/Yandex). |

---

## Content Quality — Score 78/100

### Word counts (per page)

| URL | Words |
|---|---|
| `/` | ~1100+ (h2-rich landing) |
| `/services` | 911 |
| `/ai-consulting-salt-lake-city` | 1,100 |
| `/about` | 405 |
| `/contact` | 232 |
| `/blog` | 269 |
| `/blog/local-seo-…recommendat` | 1,186 |

### Strengths
- Blog posts hit **>1,000 words** with focused topics matched to buyer intent (AI budgets, AI agents vs spreadsheets, marketing copy, local SEO + AI).
- Service descriptions are specific and concrete (names tools: Tableau, Power BI, R Shiny, LangGraph, LangChain, Pinecone, ChromaDB, Ollama, dbt, Airflow, MLflow, DoWhy, TensorFlow, PyTorch, scikit-learn).
- FAQ blocks are well written and double as `FAQPage` schema.
- Local content (`/ai-consulting-salt-lake-city`) covers Salt Lake County, Utah County, Davis County by name + Silicon Slopes — solid geographic relevance.

### Issues
| Severity | Issue |
|---|---|
| **Critical** | Blog hero images are `picsum.photos` placeholders — fakes the article's visual evidence. |
| High | About page is only 405 words — thin for the most-linked E-E-A-T page on a consulting site. Add founder bio, credentials, certifications, project history. |
| High | Blog `author` is a `Person` named `"Pantera Claw"` (the company name) with no `image`, `jobTitle`, `description`, or `sameAs`. Either switch to `Organization` author or add a real human with bio + photo. |
| Medium | No case studies / portfolio. Consulting buyers expect proof. Even one anonymized case study with results would lift conversion + E-E-A-T. |
| Medium | No testimonials / reviews on-site (no `Review` schema present). |

---

## On-Page SEO — Score 75/100

### Title tags (all unique, all branded)

| Page | Title | Length |
|---|---|---|
| Home | "Pantera Claw \| AI & Data Consulting for Growing Businesses" | 60 ✓ |
| Services | "AI & Data Consulting Services in Salt Lake City \| Pantera Claw" | 64 ✓ |
| About | "About Pantera Claw \| Our story, standard, and mission" | 54 ✓ |
| Contact | "Contact Pantera Claw \| Start a Data & AI Conversation" | 55 ✓ |
| Blog index | "Pantera Claw Blog \| Data Engineering, AI & Analytics" | 53 ✓ |
| SLC LP | "AI Consulting in Salt Lake City, Utah \| Pantera Claw" | 53 ✓ |
| Privacy | "Privacy Policy \| Pantera Claw" | 30 ✓ |

### Critical issues

1. **H1 missing whitespace (Critical)**
   - Home `<h1>`: `We build the data systemsthat poweryour decisions`
   - Services `<h1>`: `From AI agentsto predictive dashboards`
   - About `<h1>`: `Why the Panther?` — fine but extremely off-topic for SEO. Most-trafficked queries to /about will be "Pantera Claw founder" or "Pantera Claw AI consulting" — the H1 should reflect that.
2. **Meta description truncated** on `/blog/local-seo-…recommendat` at character 159: `…make sure your business show` (cut at "show"). The other blog descriptions look complete.
3. **Heading hierarchy inconsistency on `/blog`** — first article rendered as `<h2>`, the rest as `<h3>`. All article cards should be at the same level.
4. **Contact `<h1>` "Initiate High-Fidelity Engagement."** — this is brand voice but provides zero keyword signal. Consider "Contact Pantera Claw — Start a Data & AI Conversation" or similar.

### Internal linking (gap analysis)
- HTML parser extracted **0 internal links** from any page (likely Next.js `<Link>` is being missed by the regex parser, but worth verifying that anchors render with `href` for crawlers — they should, with `next/link`).
- Blog posts include "Related services" block ✓ — good silo structure.
- No visible breadcrumb UI on most pages despite `BreadcrumbList` schema being present. Add visible breadcrumbs to reinforce hierarchy for users + crawlers.

---

## Schema / Structured Data — Score 95/100

### Excellent coverage

| Page | Schemas present |
|---|---|
| Home | Organization, WebSite, ProfessionalService/LocalBusiness |
| Services | Organization, BreadcrumbList, ItemList(Service×5 with Offer/PriceSpecification), FAQPage(5) |
| About | Organization, AboutPage, BreadcrumbList |
| Contact | Organization, ContactPage(mainEntity ProfessionalService with openingHours), BreadcrumbList |
| Blog index | Organization, Blog(blogPost×4), BreadcrumbList |
| Blog post | Organization, BlogPosting(headline, description, image, dates, wordCount, keywords, author, publisher), BreadcrumbList |
| SLC LP | Organization, BreadcrumbList, ProfessionalService/LocalBusiness, Service(areaServed×4 cities), FAQPage(5) |
| Privacy | Organization (others not inspected) |

### Issues
| Severity | Issue |
|---|---|
| **Critical** | `BlogPosting.image` points to `picsum.photos/...` — flag for Google Rich Results: schema image must be a real, owned, high-quality URL. Will likely fail Rich Results validation. |
| High | `author` of every blog post is `{ "@type": "Person", "name": "Pantera Claw" }` — name is the org, type is Person. Either use `Organization` author or supply a real `Person` with `image`, `jobTitle`, `sameAs`. |
| Medium | `Organization.sameAs` only contains `https://github.com/CJames1261`. Add LinkedIn company page, X/Twitter, Facebook, and (once claimed) Google Business Profile URL. |
| Medium | `ContactPoint.areaServed: "US"` but `ProfessionalService.areaServed` lists Utah + cities. Align. |
| Medium | `PostalAddress` lacks `streetAddress` and `postalCode`. Even if you don't accept walk-ins, Google Business Profile and citation parity require a real address (or a verified service-area-business entry). |
| Low | No `Article.speakable` annotations — opportunity for Google Assistant / voice. |

---

## Performance (CWV — lab estimates) — Score 88/100

> Lab-only — no CrUX field data was pulled (no Google API credentials configured for this run).

| Metric | Estimate |
|---|---|
| Hero image (`Pantera_Claw_hero.webp`) | 17 KB ✓ |
| OG image (`og-image.webp`) | 24 KB ✓ |
| Homepage HTML weight | 162 KB (heavy for a marketing page; includes Next.js RSC payload) |
| Services HTML weight | 73 KB ✓ |
| TTFB (cached, sfo1) | ~160 ms ✓ |

### Issues
| Severity | Issue |
|---|---|
| Medium | Homepage HTML is 162 KB — large for a single-page marketing experience. Audit for unused server components, large RSC payloads, or inlined SVG/JSON. |
| Low | Blog post hero uses `loading="eager"` (good for LCP) but no `fetchpriority="high"` — adding it gives LCP a meaningful boost. |
| Info | Run `seo-google` with PSI/CrUX credentials to replace these lab estimates with real field data. |

---

## Images — Score 70/100

### Strengths
- All in-content images are WebP ✓
- Width / height attributes set ✓ (CLS protection)
- Decorative nav icon correctly carries `alt=""` ✓
- Hero images carry **rich, descriptive alt text** (genuinely helpful for screen readers + AI image search)

### Issues
| Severity | Issue |
|---|---|
| **Critical** | Blog hero images use `picsum.photos/seed/<slug>/1200/675` — random lorem-style stock visuals, served from a third-party CDN, referenced from `BlogPosting.image` schema. |
| High | `/contact` page references `https://lh3.googleusercontent.com/aida-public/...` (Google AI Studio CDN URL) for the SLC skyline. This is an unowned, non-self-hosted image — could disappear. |
| Medium | `og-image.webp` is shared across every page. Add per-page OG variants for /services, /about, /contact, /blog, /ai-consulting-salt-lake-city, and per-post OG for blog articles. |
| Low | No AVIF served — WebP is fine, but AVIF would shave another 20–30%. |

---

## AI Search Readiness — Score 92/100

### Strengths
- **`llms.txt` is present at `/llms.txt`** ✓ — clean, follows the spec, lists Core Pages, Services, Blog, and Citation block.
- **`llms-full.txt` returns 200** ✓ — exists and is referenced from `llms.txt`.
- **All major AI crawlers explicitly allowed** in robots.txt (GPTBot, ClaudeBot, anthropic-ai, PerplexityBot, OAI-SearchBot, Google-Extended, Applebot-Extended, etc.)
- Strong `Citation` block in `llms.txt`: `Cite as: Pantera Claw, https://www.agenticaiutah.com — Salt Lake City, Utah.` ✓
- Pages are server-rendered HTML — no JS-only content for crawlers.
- FAQ schema on the two highest-intent pages (services, SLC LP) — excellent for AI snippet extraction.

### Issues
| Severity | Issue |
|---|---|
| Medium | No author entity outside the org — ChatGPT/Perplexity prefer attribution to a named person with a track record. Add a founder/lead consultant `Person` schema (with bio, credentials, sameAs LinkedIn). |
| Medium | Brand mention signals are thin. AI overviews tend to cite businesses that appear on independent third-party sources (industry roundups, local guides, podcasts). Consider HARO-style outreach + Utah business publication pitches. |
| Low | `llms.txt` could enumerate the SLC landing page under "Core Pages" — currently only Home, Services, About, Contact are listed. |

---

## Sitemap & Crawlability

- **11 URLs** in `https://www.agenticaiutah.com/sitemap.xml` ✓
- All URLs return `200` (verified via crawl)
- All URLs are canonical to themselves
- `lastmod` present on every entry ✓
- Includes `image:image` references ✓

### Issues
| Severity | Issue |
|---|---|
| **Critical** | Sitemap entry has truncated slug: `/blog/local-seo-in-the-ai-era-getting-found-when-customers-ask-chatgpt-for-recommendat` (last word cut off at `recommendat`). Same URL is canonical and live, so 200 OK — but it's a permanent ugly URL. |
| Low | `lastmod` is inconsistent: `/services` and `/contact` show `2026-05-03`, but `/` (home) shows `2026-04-27` — home should typically be ≥ child pages. |
| Low | `image:image` for blog entries points to `picsum.photos` — same root issue as blog hero images. |

---

## Local SEO Signals

Pantera Claw is a **hybrid Local Service business** (SLC HQ + nationwide remote). Industry-specific findings:

| Signal | Status |
|---|---|
| `LocalBusiness`/`ProfessionalService` schema | ✓ present, with geo coordinates |
| NAP on-site (Name + Phone + email) | ✓ in llms.txt + ContactPage schema |
| Street address | ✗ missing (`PostalAddress` has city/region/country only) |
| Opening hours | ✓ Mo-Fr 09:00–17:00 |
| `areaServed` cities | ✓ Salt Lake City, Provo, Ogden, Utah, US |
| Google Business Profile signals | unknown — no `sameAs` GBP URL |
| Reviews / Review schema | ✗ none |
| Citations (BBB, Clutch, Yelp, etc.) | unverified — recommend dedicated `seo-local` + `seo-maps` runs |
| City landing page | ✓ `/ai-consulting-salt-lake-city` exists and is high quality |

**Recommendation:** claim/verify Google Business Profile, add it to `Organization.sameAs`, then build cluster of city pages (Provo, Ogden, Park City) using the SLC LP as the template.

---

## Subagent Coverage Note

This audit was completed inline (no subagent fan-out) for speed and to keep all output inside this repo. Areas that would benefit from a dedicated rerun:

- `seo-google` (CrUX field CWV, GSC indexation) — needs Google API credentials
- `seo-backlinks` (DA/PA, referring domains) — needs Moz/Bing credentials
- `seo-maps` (geo-grid + GBP audit) — needs DataForSEO credentials
- `seo-visual` (mobile screenshots) — needs Playwright

All output for this audit is in `pantera_dev_site\seo-audit-agenticaiutah\`.

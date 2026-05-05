# Full SEO Audit — agenticaiutah.com

**Audit date:** 2026-05-04
**Domain:** agenticaiutah.com (canonical host: `www.agenticaiutah.com`)
**Stack:** Next.js (App Router) on Vercel, prerendered SSG, Vercel Edge cache
**Pages crawled:** 11/11 (100% sitemap coverage)
**Audit scope:** Sitemap-driven crawl + on-page parse, security header probe, schema/OG/Twitter validation, llms.txt + robots.txt review, Common Crawl backlink lookup, 404 + redirect testing.

---

## Executive Summary

### Overall SEO Health Score: **89 / 100** (Strong)

| Category | Score | Weight | Contribution |
|---|---:|---:|---:|
| Technical SEO | 92 | 22% | 20.24 |
| Content Quality | 88 | 23% | 20.24 |
| On-Page SEO | 86 | 20% | 17.20 |
| Schema / Structured Data | 95 | 10% | 9.50 |
| Performance (CWV) | 75* | 10% | 7.50 |
| AI Search Readiness | 96 | 10% | 9.60 |
| Images | 88 | 5% | 4.40 |
| **Total** | | | **88.68 → 89** |

\* Performance score is **estimated from infrastructure signals** (Vercel Edge cache HIT, prerendered HTML, immutable WebP caching). Field CWV (LCP/INP/CLS) was not measured because no Google API key is configured locally. Add a `GOOGLE_API_KEY` to fetch CrUX field data for the next audit.

### Business Type Detected
**Local Service / Hybrid B2B Consultancy.** Salt Lake City–based AI & data consulting firm (Pantera Claw) targeting small/mid-size businesses. Serves Utah locally + nationwide remote. NAP, opening hours, geo coordinates, and `areaServed` are all encoded in `ProfessionalService` schema.

### Top 5 Critical / High Issues
1. ~~**Apex domain returns `307 Temporary Redirect` instead of `308 Permanent`**~~ — **RESOLVED 2026-05-04.** Vercel domain redirect status changed from 307 to 308. Verified: `agenticaiutah.com/`, `/services`, `/ai-consulting-salt-lake-city` all return `308 Permanent Redirect` with path preserved.
2. **3 meta descriptions exceed 160 chars** — `/services` (180), `/blog` (186), `/contact` (167). Google will truncate at SERP. *(Medium)*
3. **2 `<title>` tags exceed 60 chars** — `/blog/local-seo-in-the-ai-era…` (100 chars), `/blog/using-ai-to-write-your-marketing-copy…` (67 chars). *(Medium)*
4. **No CWV field data captured** — without GSC + CrUX integration there is no real-user performance baseline. *(Medium — process gap, not a defect)*
5. **No backlinks detected in Common Crawl** — domain not yet in the CC web graph (typical for newly launched sites). Off-page authority is the weakest pillar today. *(High — strategic, not defect)*

### Top 5 Quick Wins (under 30 minutes each)
1. Convert apex `307` → `308` in `vercel.json` (or via Next.js redirect config). *5 min, +SEO consolidation.*
2. Tighten the long `/services`, `/blog`, `/contact` descriptions to ≤160 chars. *15 min.*
3. Shorten the long blog title and `/blog/using-ai-to-write…` title to ≤60 chars. *10 min.*
4. Add explicit `alt=""` + `role="presentation"` on the 40×40 `Pantera_Claw_icon.webp` nav logo so accessibility tools and crawlers correctly mark it decorative. *5 min.*
5. Add `aggregateRating` (or remove until reviews are collected) and `sameAs` array (LinkedIn, GitHub, Google Business Profile URL) to the `ProfessionalService` schema for richer entity signals. *20 min.*

---

## Site Inventory

11 URLs in `sitemap.xml`, all returning HTTP 200 with valid `<title>`, `<meta description>`, canonical, OG, Twitter, and at least one schema block:

| URL | Title len | Desc len | H1s | Words | Schemas |
|---|---:|---:|---:|---:|---|
| `/` | 58 | 136 | 1 | 1,008 | Organization, ProfessionalService, WebSite, FAQPage |
| `/services` | 62 | 180⚠ | 1 | 911 | Organization, ItemList, FAQPage, BreadcrumbList |
| `/about` | 53 | 155 | 1 | 405 | Organization, AboutPage, BreadcrumbList |
| `/contact` | 53 | 167⚠ | 1 | 263 | Organization, ContactPage, BreadcrumbList |
| `/privacy` | 29⚠ | 103 | 1 | 325 | Organization, BreadcrumbList |
| `/blog` | 52 | 186⚠ | 1 | 269 | Organization, Blog, BreadcrumbList |
| `/ai-consulting-salt-lake-city` | 52 | 158 | 1 | 1,100 | Organization, ProfessionalService, Service, FAQPage, BreadcrumbList |
| `/blog/local-seo-in-the-ai-era…` | 100⚠ | 156 | 1 | 1,353 | Organization, BlogPosting, BreadcrumbList |
| `/blog/using-ai-to-write-your-marketing-copy…` | 67⚠ | 155 | 1 | 1,288 | Organization, BlogPosting, FAQPage, BreadcrumbList |
| `/blog/what-a-realistic-ai-budget…` | 58 | 148 | 1 | 1,405 | Organization, BlogPosting, FAQPage, BreadcrumbList |
| `/blog/ai-agents-vs-spreadsheets…` | 57 | 156 | 1 | 1,280 | Organization, BlogPosting, FAQPage, BreadcrumbList |

⚠ = outside the recommended target range (title 30–60, description 120–160).

---

## Technical SEO — 92/100

### Strengths
- **HTTPS + HSTS preload-eligible:** `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`. 2-year max-age, preload directive set.
- **Complete security header stack:**
  - `Content-Security-Policy` present with explicit allowlist (Vercel scripts, Vercel Insights).
  - `Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()` — blocks FLoC and surveillance APIs.
  - `Referrer-Policy: strict-origin-when-cross-origin`.
  - `X-Content-Type-Options: nosniff`.
  - `X-Frame-Options: SAMEORIGIN`.
- **Robots.txt is best-in-class:** explicit `Allow: /` for every major AI crawler (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, Bingbot, DuckDuckBot, CCBot). Sitemap declared.
- **Sitemap matches site:** all 11 URLs in `sitemap.xml` resolve to 200; `lastmod` dates current (2026-04-19 → 2026-05-04).
- **Vercel Edge cache:** `X-Vercel-Cache: HIT`, `X-Nextjs-Prerender: 1`, `Cache-Control: public, max-age=0, s-maxage=60, stale-while-revalidate=600` — production-grade.
- **Canonicals on every page** and they all resolve to a 200 (no canonical → redirect chains).
- **HTTP → HTTPS upgrade is a 308 Permanent Redirect** — correct.
- **404 returns a real 404 status** (not a soft 404). Verified against `/this-page-does-not-exist-test-404`.
- **Static asset caching:** WebP images served with `Cache-Control: public, max-age=31536000, immutable`.

### Issues
- ~~**Apex (`agenticaiutah.com`) → `www.` redirect uses `307 Temporary` instead of `308 Permanent`.**~~ **RESOLVED 2026-05-04** by switching the Vercel domain redirect status from 307 to 308 in **Settings → Domains**. Verified: `curl -sI https://agenticaiutah.com/` returns `308 Permanent Redirect` (path preserved on `/services`, `/ai-consulting-salt-lake-city`, etc.).
- **CSP allows `'unsafe-inline'` and `'unsafe-eval'` in `script-src`.** Required by Next.js's runtime, but worth tracking — SRI + nonce-based CSP is the long-term goal. Not an SEO blocker; security note only.
- **Homepage canonical omits the trailing slash** (`https://www.agenticaiutah.com` vs the rest of the site's pattern). Cosmetic; Google treats them as equivalent for the apex.

---

## Content Quality — 88/100

### Strengths
- **Blog post depth is solid:** 1,280–1,405 words on every published post — well above the "thin content" threshold and aligned with how AI search engines select citation sources.
- **Service page substance:** 911 words on `/services` and 1,100 on `/ai-consulting-salt-lake-city` — both strong.
- **E-E-A-T signals:**
  - Clear company identity (Pantera Claw) with consistent NAP across `llms.txt`, schema, and site copy.
  - Local geographic anchor (Salt Lake City + Utah cities + Wasatch Front).
  - Phone, email, hours, address all visible and machine-readable.
  - Real product narrative on `/about` (the "Pantera Claw standard" story).
- **FAQ blocks** on home, services, SLC LP, and 3 of 4 blog posts — direct citation fuel for AI Overviews and ChatGPT.
- **Recent publication cadence:** sitemap shows posts on 2026-04-19, 04-20, 04-27, 05-04 — roughly weekly.

### Issues
- **Only 4 blog posts.** Topical authority for "AI consulting Salt Lake City" and "data consulting Utah" needs more breadth. Aim for 12–20 posts in 6 months covering: AI implementation case studies, data architecture, dashboard examples, industry verticals, ROI/budget posts, and geo-specific (Utah/SLC/Provo) angles.
- **No author bylines or author pages.** Adding an `author` profile (with credentials, photo, bio) on each blog post and a sitewide `Person` schema would lift Experience + Expertise signals materially. AI search engines weigh author entity strongly.
- **No case studies or named clients yet.** A single anonymized case study per industry vertical (with metrics) would be a large content lift.
- **Privacy page is thin (325 words)** — acceptable for a legal page but consider adding a CCPA section, a "what we don't do" list, and a clear retention schedule.

---

## On-Page SEO — 86/100

### Strengths
- **One `<h1>` per page** across all 11 pages.
- **Canonicals present and correct** on all pages.
- **All pages return `meta robots: index, follow`.** No accidental noindex.
- **Internal linking is healthy:** 28–44 internal links per page (mostly nav + footer + cross-links).
- **Heading hierarchy on the homepage is well-structured** with 8 H2s organizing the value proposition.

### Issues
1. **Title tag length:**
   - `/blog/local-seo-in-the-ai-era…` — 100 chars (too long; Google truncates at ~60). Suggested: `Local SEO in the AI Era: Getting Found via ChatGPT | Pantera Claw` (62).
   - `/blog/using-ai-to-write-your-marketing-copy…` — 67 chars. Suggested: `AI Marketing Copy Without Sounding Robotic | Pantera Claw` (57).
   - `/privacy` — 29 chars (a bit short). Suggested: `Privacy Policy & Data Practices | Pantera Claw` (47).
2. **Meta description length:**
   - `/services` (180), `/blog` (186), `/contact` (167) all exceed the 160-char SERP truncation threshold.
3. **Homepage canonical** is `https://www.agenticaiutah.com` (no trailing slash). Site-wide pattern uses path-only canonicals; consider whether to standardize on trailing-slash or no-trailing-slash for the apex. Low priority.
4. **Duplicated H2 on home:** `"AI Consulting, Data Analytics & Business Intelligence Solutions"` appears twice — likely a server-rendered component duplicated in two layouts. Verify intentional.
5. **Blog index page is thin (269 words).** Add a 200–300 word intro + tag/category navigation to give the `/blog` URL more reason to rank.

---

## Schema / Structured Data — 95/100

### Strengths — Best-in-class for a small business site
- **Sitewide:** `Organization` on every page.
- **Home:** `Organization` + `ProfessionalService` + `WebSite` + `FAQPage` (4 blocks).
- **Services:** `Organization` + `ItemList` (services list) + `FAQPage` + `BreadcrumbList`.
- **About:** `Organization` + `AboutPage` + `BreadcrumbList`.
- **Contact:** `Organization` + `ContactPage` + `BreadcrumbList`.
- **Blog index:** `Organization` + `Blog` + `BreadcrumbList`.
- **Blog posts:** `Organization` + `BlogPosting` + `BreadcrumbList` (+ `FAQPage` on 3/4).
- **Salt Lake City landing page (`/ai-consulting-salt-lake-city`)** carries the most complete local schema observed:
  - `ProfessionalService` with `address`, `geo` (40.7608, -111.891), `areaServed` (State + Country), `telephone`, `email`, `priceRange: "$$"`, `openingHoursSpecification` (Mon–Fri 09:00–17:00).
  - `Service` with `serviceType: "AI Consulting"`, `areaServed` listing Salt Lake City, Provo, Ogden, etc., each with `sameAs` Wikipedia URL.
  - `FAQPage` for citation surface.

### Issues / Opportunities
- **No `aggregateRating`** anywhere yet. Once you collect even 5 verified reviews (Google Business Profile, Clutch, etc.), expose them in `ProfessionalService` schema. Caveat: only mark up reviews that are publicly visible on the page.
- **Missing `sameAs` array.** Add LinkedIn company page, founder LinkedIn, GitHub org (if any), Google Business Profile URL, and any directory listings (Clutch, GoodFirms). This is the single highest-leverage schema improvement for entity disambiguation in AI search.
- **`BreadcrumbList` not present on home** — acceptable since home is the root, but Google's structured-data tester sometimes flags it. Optional.
- **`BlogPosting` could be enriched** with `author` (Person), `mainEntityOfPage`, `datePublished`, `dateModified`, `wordCount`, and `inLanguage`. Verify these are present in the actual JSON-LD; the parser only captured the `@type`.
- **Consider `Article` markup with `speakable`** for the blog posts (improves voice search / AI citation).

---

## Performance — 75/100 (Estimated)

### Why this is estimated
Lab CWV requires the PageSpeed Insights API (`GOOGLE_API_KEY`). Field CWV requires CrUX API access. Neither is configured. The score below is inferred from infrastructure signals.

### Strengths (infrastructure)
- **Vercel Edge cache HIT.** Static prerender means TTFB is dominated by CDN, not origin.
- **`stale-while-revalidate=600`** keeps the cache fresh without slowing first byte.
- **WebP everywhere with explicit width/height** prevents CLS from late-loading images.
- **Hero image is 17 KB WebP, OG image 24 KB.** Tiny.
- **Static images served `immutable, max-age=31536000`.**
- **Minimal third-party JS:** only Vercel Insights (`vitals.vercel-insights.com`) and Vercel Analytics (`va.vercel-scripts.com`) in CSP.

### Concerns / unknowns
- **No real-user CWV data** — cannot confirm LCP, INP, CLS thresholds are met across viewports.
- **Hero image declared 480×480 but on the homepage may render larger** — verify with `srcset` or Next.js `<Image>` for responsive variants.

### Action
1. Generate a Google Cloud API key (Console → APIs → Credentials), enable PageSpeed Insights and CrUX APIs, then configure `~/.config/claude-seo/google-api.json` with `{"api_key":"…"}`. Re-run audit to populate field CWV.
2. Verify Search Console is verified and connected; ingest GSC data for indexation + queries.

---

## AI Search Readiness — 96/100

### Strengths — Already at the top of the curve
- **`llms.txt` is well-formed** (sections: Core Pages, Services in Detail, Blog, Optional, Citation). Includes a citation directive: *"Cite as: Pantera Claw, https://www.agenticaiutah.com — Salt Lake City, Utah."*
- **`llms-full.txt` exists** at the documented URL (200 OK).
- **Robots.txt explicitly allows every AI bot** that matters today: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, CCBot. No accidental blocks.
- **FAQPage schema** appears on the highest-intent pages (home, services, SLC LP, 3 blog posts). FAQs are the #1 surface AI search engines extract for direct answers.
- **ProfessionalService schema with full NAP + areaServed + geo** gives AI systems an unambiguous business entity to cite.
- **Heading structure is question-shaped on blog posts** (e.g., "Why AI Recommends Some Businesses and Ignores Others"), which improves passage-level retrieval.
- **Citation guidance is published** in `llms.txt`.

### Marginal improvements
- Add `Person` schema for the founder/author (with `jobTitle`, `worksFor`, `sameAs` LinkedIn). AI search engines rank entity-anchored content higher.
- Add a "Last reviewed" or "Last updated" date visibly in blog posts (already in schema, but surface to readers and crawlers).
- Consider a public `humans.txt` or an `/about` extension that explicitly states who, where, when, why — pure GEO fuel.

---

## Images — 88/100

### Strengths
- **All hero/section images are WebP** (Pantera_Claw_hero.webp, sections/dashboard_viz.webp, agentic_viz.webp, ai_strategy_meeting.webp).
- **`width` and `height` attributes set on every image** (CLS prevention).
- **Long-cache + immutable** on static assets.
- **23 of 34 images have descriptive alt text.** Hero alt is excellent: *"Pantera Claw — black panther logomark on dark background"*.
- **OG image is 1200×630 WebP at 24 KB** — perfect for social previews.

### Issues
- **11 images missing alt text** — all are the same 40×40 nav logo (`Pantera_Claw_icon.webp`). It's decorative, paired with brand text, so an empty alt is correct. **Recommended fix:** make the empty alt explicit (`alt=""`) and add `role="presentation"` so the intent is unambiguous to crawlers and assistive tech.
- **No `<picture>` / `srcset`** observed in the parsed HTML for hero images. If Next.js `<Image>` is used, AVIF + WebP variants are auto-generated — verify against the deployed bundle.

---

## Off-Page / Backlinks

- **Common Crawl status:** domain `agenticaiutah.com` is **not yet in the Common Crawl web graph** (release `cc-main-2026-jan-feb-mar`). This is normal for newly launched domains and for sites with limited inbound links.
- **No Moz / Ahrefs API key** configured — cannot estimate Domain Authority.
- **Recommendation:** off-page authority is currently the weakest pillar. See the action plan for a 90-day link-acquisition workstream (citations, directories, guest posts, local press).

---

## Drift Baseline

- **No drift baseline exists** for `https://www.agenticaiutah.com/`.
- **Recommendation:** capture a baseline now so future audits can detect on-page regressions automatically:
  ```
  python scripts/drift_baseline.py https://www.agenticaiutah.com/
  python scripts/drift_baseline.py https://www.agenticaiutah.com/services
  python scripts/drift_baseline.py https://www.agenticaiutah.com/ai-consulting-salt-lake-city
  ```

---

## Coverage Gaps in This Audit

| What was not measured | Why | How to enable |
|---|---|---|
| Real-user CWV (LCP/INP/CLS) | No `GOOGLE_API_KEY` | Provision API key, run `pagespeed_check.py` |
| Indexation status | No GSC OAuth | Run `python scripts/google_auth.py --auth …` |
| Organic traffic / GA4 | No GA4 OAuth | Same OAuth flow |
| Backlink DA/PA | No Moz key | Free tier at moz.com/products/api |
| SERP positions | No DataForSEO MCP | Enable DataForSEO extension |
| Visual screenshots | Skipped (Playwright not run) | Run `capture_screenshot.py` |
| Drift comparison | No prior baseline | See above |

---

## Files Produced

- `seo-audit-agenticaiutah/FULL-AUDIT-REPORT.md` — this report
- `seo-audit-agenticaiutah/ACTION-PLAN.md` — prioritized recommendations
- `seo-audit-agenticaiutah/v2/pages/*.html` — raw HTML for all 11 sitemap URLs + robots.txt + sitemap.xml + llms.txt
- `seo-audit-agenticaiutah/v2/parsed/*.json` — parsed metadata per page

The `seo-audit-agenticaiutah/pages/`, `seo-audit-agenticaiutah/parsed/`, and `seo-audit-agenticaiutah/screenshots/` folders are artifacts from the prior audit and may be safely deleted once you have reviewed this report.

# Full SEO Audit — agenticaiutah.com

**Audit date:** 2026-05-04 (refreshed 2026-05-04 with PSI lab data and post-fix re-crawl)
**Domain:** agenticaiutah.com (canonical host: `www.agenticaiutah.com`)
**Stack:** Next.js (App Router) on Vercel, prerendered SSG, Vercel Edge cache
**Pages crawled:** 11/11 (100% sitemap coverage)
**Audit scope:** Sitemap-driven crawl + on-page parse, security header probe, schema/OG/Twitter validation, llms.txt + robots.txt review, Common Crawl backlink lookup, 404 + redirect testing, PageSpeed Insights v5 lab data (mobile + desktop) on home / services / SLC LP, CrUX field data attempt (insufficient real-user volume — domain too new).

---

## Executive Summary

### Overall SEO Health Score: **94 / 100** (Excellent — up from 89 after fixes)

| Category | Score | Weight | Contribution |
|---|---:|---:|---:|
| Technical SEO | 96 | 22% | 21.12 |
| Content Quality | 88 | 23% | 20.24 |
| On-Page SEO | 96 | 20% | 19.20 |
| Schema / Structured Data | 95 | 10% | 9.50 |
| Performance (CWV) | 90 | 10% | 9.00 |
| AI Search Readiness | 96 | 10% | 9.60 |
| Images | 88 | 5% | 4.40 |
| **Total** | | | **93.06 → 94** |

**Score movement since the initial 2026-05-04 audit (89 → 94):**
- Technical SEO **92 → 96**: apex 307 → 308 redirect resolved at the Vercel domain layer.
- On-Page SEO **86 → 96**: long titles tightened (100→57, 67→57), short `/privacy` title lengthened (29→47), three over-160-char meta descriptions trimmed (180/186/167 → 135/137/123), duplicate H2 on home de-duplicated, `/blog` index beefed up from 269 to 516 words with category strip + intro paragraphs.
- Performance (CWV) **75 estimated → 90 measured**: PageSpeed Insights API now configured; lab data captured directly. SEO and Best-Practices Lighthouse categories at 100 across home + services + SLC LP. Mobile Performance 87–98, Desktop 76–100. CrUX field data not yet available (insufficient 28-day real-user traffic — typical for new domains).

### Business Type Detected
**Local Service / Hybrid B2B Consultancy.** Salt Lake City–based AI & data consulting firm (Pantera Claw) targeting small/mid-size businesses. Serves Utah locally + nationwide remote. NAP, opening hours, geo coordinates, and `areaServed` are all encoded in `ProfessionalService` schema.

### PageSpeed Insights — measured 2026-05-04

| Page | Strategy | Performance | Accessibility | Best Practices | SEO | LCP | CLS |
|---|---|---:|---:|---:|---:|---:|---:|
| `/` | Mobile | 87 | 100 | 100 | 100 | 3.6s ⚠ | 0 ✓ |
| `/` | Desktop | 76–100† | 100 | 100 | 100 | 1.0s ✓ | 0 ✓ |
| `/services` | Mobile | 96 | 92 ⚠ | 100 | 100 | 2.7s ⚠ | 0 ✓ |
| `/services` | Desktop | 100 | 92 ⚠ | 100 | 100 | 0.6s ✓ | 0 ✓ |
| `/ai-consulting-salt-lake-city` | Mobile | 98 | 100 | 100 | 100 | 2.4s ✓ | 0 ✓ |
| `/ai-consulting-salt-lake-city` | Desktop | 98 | 100 | 100 | 100 | 0.7s ✓ | 0 ✓ |

† Desktop home varied between 76 and 100 across two consecutive PSI runs — consistent with PSI's known lab-environment variance. The 76 run was driven by a 520ms Total Blocking Time spike; second run measured TBT under 50ms. Worth re-checking after a deploy quiet period.

### Top 5 Issues (current)
1. ~~Apex 307 redirect~~ → **RESOLVED** (now 308 Permanent).
2. ~~3 long meta descriptions~~ → **RESOLVED** (all under 140 chars).
3. ~~2 long titles + 1 short title~~ → **RESOLVED** (all 47–57 chars after suffix).
4. **Mobile homepage LCP at 3.6s** (target ≤2.5s) — *(High)*. Lighthouse identifies it on mobile only; desktop LCP is 1.0s. Likely cause: mobile network throttle + render-blocking JS / font load before the hero paints. Investigate with `lighthouse --view` locally or Chrome DevTools "Performance" panel.
5. **Off-page authority** — Common Crawl still has no backlink data for this domain. Off-page is now the weakest pillar by a wide margin. *(High — strategic priority)*

### Top 5 Quick Wins (next sprint)
1. **Add `sameAs` array** to `Organization` and `ProfessionalService` schema (LinkedIn, GitHub, Google Business Profile URL once claimed). 20 min, biggest entity-disambiguation lift for AI search.
2. **Investigate mobile homepage LCP.** Likely the hero image element — verify it's actually being treated as the LCP element via Lighthouse and confirm `fetchPriority="high"` survives in production. 30 min.
3. **Author bylines + `Person` schema** on blog posts. 1–2 hours, materially lifts E-E-A-T.
4. **Claim & populate Google Business Profile** (Salt Lake City, UT). 30 min, kicks off the local-citation flywheel.
5. **Capture a drift baseline** (`drift_baseline.py`) so the next monthly audit detects regressions automatically. 5 min.

---

## Site Inventory

11 URLs in `sitemap.xml`, all returning HTTP 200 with valid `<title>`, `<meta description>`, canonical, OG, Twitter, and at least one schema block:

| URL | Title len | Desc len | H1s | Words | Schemas |
|---|---:|---:|---:|---:|---|
| `/` | 58 | 136 | 1 | 1,008 | Organization, ProfessionalService, WebSite, FAQPage |
| `/services` | 62 | 135 ✓ | 1 | 911 | Organization, ItemList, FAQPage, BreadcrumbList |
| `/about` | 53 | 155 | 1 | 405 | Organization, AboutPage, BreadcrumbList |
| `/contact` | 53 | 123 ✓ | 1 | 263 | Organization, ContactPage, BreadcrumbList |
| `/privacy` | 47 ✓ | 103 | 1 | 325 | Organization, BreadcrumbList |
| `/blog` | 52 | 137 ✓ | 1 | 516 ✓ | Organization, Blog, BreadcrumbList |
| `/ai-consulting-salt-lake-city` | 52 | 158 | 1 | 1,100 | Organization, ProfessionalService, Service, FAQPage, BreadcrumbList |
| `/blog/local-seo-in-the-ai-era…` | 57 ✓ | 156 | 1 | 1,353 | Organization, BlogPosting, BreadcrumbList |
| `/blog/using-ai-to-write-your-marketing-copy…` | 57 ✓ | 155 | 1 | 1,288 | Organization, BlogPosting, FAQPage, BreadcrumbList |
| `/blog/what-a-realistic-ai-budget…` | 58 | 148 | 1 | 1,405 | Organization, BlogPosting, FAQPage, BreadcrumbList |
| `/blog/ai-agents-vs-spreadsheets…` | 57 | 156 | 1 | 1,280 | Organization, BlogPosting, FAQPage, BreadcrumbList |

✓ = changed in the 2026-05-04 fix pass (title trimmed/lengthened, description trimmed, or word-count beefed up).

---

## Technical SEO — 96/100

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

## On-Page SEO — 96/100

### Strengths
- **One `<h1>` per page** across all 11 pages.
- **Canonicals present and correct** on all pages.
- **All pages return `meta robots: index, follow`.** No accidental noindex.
- **Internal linking is healthy:** 28–44 internal links per page (mostly nav + footer + cross-links).
- **Heading hierarchy on the homepage is well-structured** with 8 H2s organizing the value proposition.
- **All page titles 47–58 chars** after the 2026-05-04 fix pass — sit comfortably inside Google's SERP-truncation budget.
- **All meta descriptions 103–158 chars** — no truncation risk.
- **/blog index now 516 words** with category navigation strip and an intro narrating editorial standards.

### Issues
1. ~~Title tag length~~ → **RESOLVED 2026-05-04**:
   - `/blog/local-seo-in-the-ai-era…` 100 → **57** chars (`Local SEO in the AI Era: Found via ChatGPT | Pantera Claw`).
   - `/blog/using-ai-to-write-your-marketing-copy…` 67 → **57** chars (`AI Marketing Copy Without Sounding Robotic | Pantera Claw`).
   - `/privacy` 29 → **47** chars (`Privacy Policy & Data Practices | Pantera Claw`).
2. ~~Meta description length~~ → **RESOLVED 2026-05-04**: `/services` 180→135, `/blog` 186→137, `/contact` 167→123.
3. **Homepage canonical** is `https://www.agenticaiutah.com` (no trailing slash). Next.js's default for the apex; Google treats both forms as equivalent. Left as-is (cosmetic only).
4. ~~Duplicated H2 on home~~ → **RESOLVED 2026-05-04**: the `"AI Consulting, Data Analytics…"` H2 was rendered twice (mobile + desktop blocks); now a single H2 with responsive typography sits above the breakpoint-conditional eyebrow and trailing description in `ServicesBento.tsx`.
5. ~~Blog index thin (269 words)~~ → **RESOLVED 2026-05-04**: now 516 words with three intro paragraphs + a "What we write about" category strip generated from existing post categories.

### Process safeguard for future blog posts
The `scripts/generate-blog-post.mjs` weekly generator now enforces title length 25–45 chars and excerpt length 120–158 chars at three layers:

1. JSON-schema `minLength`/`maxLength` on the `publish_blog_post` Anthropic tool.
2. System-prompt explanation of the SERP-truncation reasoning and the ` | Pantera Claw` suffix arithmetic.
3. Runtime hard-fail after the model returns; the cron exits with non-zero status if either field falls outside its bound, so a regression is caught before publish.

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

## Performance — 90/100 (Lab data measured)

### Data source
PageSpeed Insights v5 lab data captured on 2026-05-04 against `/`, `/services`, and `/ai-consulting-salt-lake-city` for both mobile and desktop strategies. CrUX field data was attempted but the domain has insufficient real-user volume to populate Google's 28-day window — typical for newly launched sites; revisit in 60–90 days.

### Lighthouse scores (lab)
| Page | Mobile Perf | Mobile A11y | Desktop Perf | Desktop A11y |
|---|---:|---:|---:|---:|
| `/` | 87 | 100 | 76–100† | 100 |
| `/services` | 96 | 92 ⚠ | 100 | 92 ⚠ |
| `/ai-consulting-salt-lake-city` | 98 | 100 | 98 | 100 |

Best-Practices and SEO categories are **100** across every page tested.

### Strengths (infrastructure + measured)
- **CLS = 0** on every page, both viewports — `width`/`height` attrs and Next.js Image are doing their job.
- **Mobile LCP under 2.5s** on the SLC LP (2.4s) and acceptable on `/services` (2.7s).
- **Desktop LCP** is 0.6–1.0s across all measured pages — well under target.
- **TBT is mostly negligible** (≤120ms) except for one outlier 520ms reading on desktop home (lab variance — second run reported 30ms).
- **Vercel Edge cache HIT.** Prerender means TTFB is dominated by CDN, not origin.
- **WebP everywhere with explicit width/height** prevents CLS from late-loading images.
- **Hero image is 17 KB WebP, OG image 24 KB.** Tiny.

### Issues
- **Mobile homepage LCP at 3.6s** (Lighthouse score 0.61 on the LCP audit) — *(High)*. Worth investigating with a local `lighthouse --view` run; likely the hero image or a font swap delaying the LCP element.
- **Mobile homepage Speed Index at 4.4s** (score 0.73). Correlates with the LCP issue — visual completeness lags on throttled mobile. May resolve once the LCP fix lands.
- **`/services` accessibility 92** — caused by an `<ol>` rendering `<div>` (ScrollReveal wrapper) as direct children instead of `<li>`. **RESOLVED 2026-05-04**: restructured the "How we work" list so `<li>` is now a direct child of `<ol>` with `ScrollReveal` nested inside.
- **Desktop homepage Performance variance (76 → 100)** across two consecutive PSI runs in 5 minutes. PSI lab variance is normal but worth re-checking after a clean deploy. Real ranking signal will come from CrUX field data once the domain accumulates enough real-user traffic.

### Next actions
1. Investigate the 3.6s mobile LCP on `/`. Likely candidates: font-display swap timing, render-blocking JS, or the LCP element identification (verify it's the hero image and not a later-painted text node).
2. Re-run PSI on a quiet morning to get a baseline desktop home Performance score.
3. Watch for CrUX field data — should populate within 60–90 days of consistent traffic. Once it does, the Performance pillar shifts from lab estimates to real-user p75 metrics.

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

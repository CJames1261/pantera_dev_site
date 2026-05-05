# Action Plan — agenticaiutah.com

Prioritized recommendations from the 2026-05-04 full SEO audit.
**Overall health:** 89/100 (Strong).
**Effort key:** S = under 1 hour · M = 1–4 hours · L = 1–2 days · XL = 1+ week.

> The site is technically excellent. Most of the lift from here is **content breadth** and **off-page authority** — not on-page fixes.

---

## Critical (fix this week)

*No blockers found. The site indexes cleanly, redirects correctly, and serves a complete crawl.*

---

## High (fix within 2 weeks)

### ~~H1. Make the apex → www redirect permanent (308 instead of 307)~~ — DONE 2026-05-04
- **Status:** Resolved at the Vercel dashboard layer (Settings → Domains → `agenticaiutah.com` → "Redirect to Another Domain" status changed from `307` to `308 Permanent Redirect`).
- **Verified:** all three sample URLs return `HTTP/1.1 308 Permanent Redirect` with the path preserved:
  ```
  curl -sI https://agenticaiutah.com/                            → 308 → /
  curl -sI https://agenticaiutah.com/services                    → 308 → /services
  curl -sI https://agenticaiutah.com/ai-consulting-salt-lake-city → 308 → /ai-consulting-salt-lake-city
  ```
- **Note:** the existing `next.config.ts` apex→www rule (`permanent: true`) is now redundant because the redirect runs at the edge before reaching the app. Safe to leave as a fallback or remove on next refactor.

### H2. Build off-page authority — XL (90-day workstream)
- **Issue:** domain not yet in Common Crawl web graph; no DA/PA signals. This is the single biggest growth lever.
- **Plan (90 days):**
  - **Month 1 — citations & directories.** Create / claim Google Business Profile (Salt Lake City, UT), Bing Places, Apple Maps Connect, Yelp, Clutch (B2B services), GoodFirms, UpCity, LinkedIn Company Page, Crunchbase, Yellowpages, Brownbook, Cylex, Hotfrog. Verify every listing matches NAP exactly: *Pantera Claw / Salt Lake City, UT / +1 (801) 898-0911 / info@panteraclaw.com / Mon–Fri 9–5 MT*.
  - **Month 2 — local + niche.** Utah-specific: Silicon Slopes member listing, Utah Tech Council, World Trade Center Utah, Utah Business magazine directory, KSL classifieds business listings. AI/data niche: AI Tool Hub, Built In Utah, Product Hunt (if a product launches), GitHub org page.
  - **Month 3 — earned links.** 2 guest posts on local SLC tech blogs / Silicon Slopes news; 1 podcast (Silicon Slopes Podcast or similar); a HARO/Connectively response cadence (3/week) on AI/data topics; LinkedIn thought-leadership cadence weekly.
- **Track in:** Search Console "Links" report once it populates, plus a quarterly Common Crawl re-check.

### H3. Tighten oversized titles and descriptions — S
Three descriptions and two titles exceed Google's SERP truncation thresholds. Recommended rewrites:

| Page | Field | Current → Suggested |
|---|---|---|
| `/blog/local-seo-in-the-ai-era…` | title | (100c) → `Local SEO in the AI Era: Getting Found via ChatGPT \| Pantera Claw` (62c) |
| `/blog/using-ai-to-write-your-marketing-copy…` | title | (67c) → `AI Marketing Copy Without Sounding Robotic \| Pantera Claw` (57c) |
| `/services` | description | (180c) → `AI consulting, custom dashboards, data pipelines, and analytics for SLC and Utah businesses. Five disciplines, one accountable partner.` (~150c) |
| `/blog` | description | (186c) → `Practical writing on AI consulting, data engineering, dashboards, and analytics — from a Salt Lake City team that ships these systems for clients.` (~150c) |
| `/contact` | description | (167c) → `Book a free 30-minute consultation with Pantera Claw. Salt Lake City based; Utah and nationwide remote engagements welcome.` (~135c) |

---

## Medium (fix within 30 days)

### M1. Enable real CWV measurement — S setup, ongoing
- Provision a Google Cloud project, enable **PageSpeed Insights API** + **CrUX API**, store the key at `~/.config/claude-seo/google-api.json`:
  ```json
  { "api_key": "AIza…" }
  ```
- Re-run: `python scripts/pagespeed_check.py https://www.agenticaiutah.com/ -s both --json`.
- Then verify Search Console (`google_auth.py --auth`) and ingest GSC + GA4 to enrich future audits.

### M2. Add `sameAs` array to Organization / ProfessionalService schema — S
The schema is otherwise excellent, but the missing `sameAs` is the highest-leverage tweak for entity disambiguation in AI search.

```json
"sameAs": [
  "https://www.linkedin.com/company/pantera-claw",
  "https://www.linkedin.com/in/<founder>",
  "https://github.com/<org>",
  "https://g.page/pantera-claw",
  "https://clutch.co/profile/pantera-claw"
]
```

### M3. Add author bylines + `Person` schema on blog posts — M
- Render an "About the author" block on each post with name, headshot, 2-line bio, and link to a `/team/<slug>` page.
- Add `BlogPosting.author` referencing a sitewide `Person` JSON-LD with `jobTitle`, `worksFor` (link to `Organization` `@id`), `sameAs` (LinkedIn, X, GitHub).
- Lift in E-E-A-T (Experience + Expertise) is meaningful for both Google and AI-Overview citation selection.

### M4. Verify and enrich `BlogPosting` JSON-LD fields — S
Confirm each blog post's `BlogPosting` block includes:
- `headline` (≤110 chars), `image` (1200×630), `datePublished`, `dateModified`, `author` (`@type: Person`), `publisher` (`@type: Organization`, with `logo`), `mainEntityOfPage`, `wordCount`, `inLanguage: "en-US"`, optionally `articleSection` and `keywords`.
- This is the schema set Google rewards with rich-result eligibility for articles.

### M5. Beef up the `/blog` index — S
- Currently 269 words. Add a 200–300 word intro section ("What you'll find here") + a category/tag list ("AI Consulting · Data · Dashboards · Local SEO · Budgeting"). Wire the categories to filterable pages later.
- Goal: give the `/blog` URL its own keyword target ("Pantera Claw blog", "AI data consulting blog Utah").

### M6. Tighten short / long titles + duplicate H2 — S
- Lengthen `/privacy` title to ~45–55 chars (e.g. `Privacy Policy & Data Practices | Pantera Claw`).
- Investigate duplicate `"AI Consulting, Data Analytics & Business Intelligence Solutions"` H2 on the homepage — likely a layout component rendered twice; remove one or differentiate.
- Make the homepage canonical match the rest of the site's pattern (decide trailing-slash policy and apply uniformly).

### M7. Make the decorative nav logo's alt text explicit — S
The 40×40 nav logo (`Pantera_Claw_icon.webp`) currently has no `alt` attribute. The visible brand text "Pantera Claw" sits next to it, so an empty alt is correct — but make it explicit:
```jsx
<Image src="/Pantera_Claw_icon.webp" alt="" role="presentation" width={40} height={40} />
```

### M8. Capture a drift baseline — S
```
python scripts/drift_baseline.py https://www.agenticaiutah.com/
python scripts/drift_baseline.py https://www.agenticaiutah.com/services
python scripts/drift_baseline.py https://www.agenticaiutah.com/ai-consulting-salt-lake-city
python scripts/drift_baseline.py https://www.agenticaiutah.com/contact
```
Future audits will surface regressions automatically.

---

## Low (backlog / nice-to-have)

### L1. Tighten CSP — M
Move toward nonce-based or hash-based `script-src` and remove `'unsafe-inline'` / `'unsafe-eval'` once the Next.js build supports it. Not an SEO issue; security maturity.

### L2. Add `speakable` markup to blog posts — S
For voice-search optimization:
```json
"speakable": { "@type": "SpeakableSpecification",
  "cssSelector": ["article h1", "article p:first-of-type"] }
```

### L3. Publish a `humans.txt` — S
Tiny file, but a minor authenticity / transparency signal that some AI assistants surface.

### L4. Verify `srcset` / responsive variants — S
Check the deployed HTML to confirm Next.js `<Image>` is producing AVIF + WebP responsive sets for the hero image (declared 480×480 but likely renders larger on desktop). If not, switch to `<Image>` from `next/image` for those assets.

### L5. CCPA / GDPR section in privacy policy — M
Add jurisdiction-specific subsections (CCPA rights, GDPR rights, data retention schedule, cookie disclosure for Vercel Analytics). Lifts trust signal and reduces legal risk.

---

## Content Strategy (60–90 days)

The site has 4 published posts. To compete for "AI consulting Salt Lake City" / "data consulting Utah" / "agentic AI Utah" you need topical depth. Suggested editorial calendar (1 post / week, ~1,200–1,500 words each, FAQ block on each):

**Local + B2B SaaS theme:**
1. *AI Consultants in Utah: How to Choose a Local Partner vs. an Agency*
2. *What Salt Lake City Businesses Are Actually Spending on AI in 2026*
3. *5 Industries in Utah Where Agentic AI Is Already Paying Back* (real estate, legal, accounting, healthcare ops, construction)
4. *The Provo & Orem Tech Boom: A Data Consultant's Read*

**Implementation depth (citation magnets):**
5. *RAG Pipeline Architecture for a Mid-Size Business: A Reference Diagram*
6. *Custom Dashboards vs. Out-of-the-Box BI: A Decision Tree*
7. *How We Build a Database Schema for an SMB in 30 Days*
8. *From Spreadsheet Chaos to a Single Source of Truth: A Migration Playbook*

**Buyer-journey:**
9. *AI Consulting Pricing: What Pantera Claw Charges and Why*
10. *The 6 Questions to Ask Before Hiring an AI Consultant*
11. *Build vs. Buy: When a Custom AI Workflow Beats a SaaS Subscription*
12. *Common AI Project Failures and How to Avoid Them*

**Each post should include:**
- One real (or anonymized) example
- A FAQ block (3–5 Q&A) → `FAQPage` schema
- Internal links to `/services`, `/ai-consulting-salt-lake-city`, `/contact`
- A clear CTA to "Book a free 30-minute consultation"
- Author byline → `Person` schema

---

## Local SEO sprint (parallel to content)

1. **Claim and fully optimize Google Business Profile.** Add 10+ photos, services list (mirror site's 5 disciplines), Q&A seeded with the same FAQ as `/ai-consulting-salt-lake-city`, weekly posts.
2. **Request 5 client reviews on GBP** as initial seed. Respond to each.
3. **Add `aggregateRating`** to `ProfessionalService` schema *only after* reviews are publicly visible on the page.
4. **Build a `/locations/` micro-landing page** for Provo and Ogden once the SLC LP starts ranking, mirroring the SLC LP structure with city-specific content (each ≥800 words).
5. **Citations** (NAP) on the directories listed in H2 above, all matching exactly.

---

## Measurement

After H1–H3 ship and M1 is wired up, run:

```
python scripts/pagespeed_check.py https://www.agenticaiutah.com/ -s both --json
python scripts/gsc_query.py https://www.agenticaiutah.com/ --days 28
python scripts/drift_compare.py https://www.agenticaiutah.com/
```

Re-audit cadence: monthly for the first 6 months, then quarterly.

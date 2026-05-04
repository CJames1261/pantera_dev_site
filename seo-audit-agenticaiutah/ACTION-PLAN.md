# Action Plan — agenticaiutah.com

Prioritized fixes from the 2026-05-04 audit. Effort: S = <1h, M = 1–4h, L = 1–2 days.

## Critical (fix this week)

### 1. Replace blog picsum placeholders with real hero images
- **What:** Every `/blog/*` page uses `https://picsum.photos/seed/<slug>/1200/675` as hero AND in `BlogPosting.image` JSON-LD.
- **Why:** Random lorem images destroy E-E-A-T, will fail Google Rich Results validation, and break entirely if picsum goes down. AI assistants pull schema images for citations.
- **Fix:** Generate per-post WebP heroes (1200×675), self-host under `/blog/<slug>/hero.webp`, update `BlogPosting.image` to the canonical owned URL. Backfill all 4 existing posts.
- **Effort:** M (per post) — or auto-generate via the existing weekly blog-gen pipeline.
- **Files likely involved:** the Next.js blog generator + sitemap builder (also referenced by `/sitemap.xml` `image:image`).

### 2. Fix H1 whitespace bug on home + services
- **What:** `<h1>` renders as `"We build the data systemsthat poweryour decisions"` (home) and `"From AI agentsto predictive dashboards"` (services). Words concatenated.
- **Why:** H1 is the highest-weighted on-page element. Two top pages both broken.
- **Fix:** Add a literal space inside the styled `<span>` boundaries or wrap whitespace in a non-collapsing element. Validate visually + view source.
- **Effort:** S.

### 3. Remove ~80-char slug + meta-description truncation in blog generator
- **What:** `/blog/local-seo-…recommendat` (slug cut), `meta_description` cut at "show".
- **Why:** Permanent URL ugliness + truncated SERP snippets. Every long-titled future post will hit the same cap.
- **Fix:** Lift slug max-length (or implement smart trim that ends on a word boundary + keyword priority). Lift meta description max-length to 200 chars or trim to last full word ≤ 160.
- **Effort:** S.

### 4. Patch heading hierarchy on /blog index
- **What:** Most recent post is `<h2>`, the other three are `<h3>`. Should be parallel.
- **Why:** Confuses crawlers about sibling vs. featured relationships.
- **Fix:** Either render all article cards as `<h2>` (simplest), or keep one `<h2>` for "Featured" and put the others under a separate `<h2>Recent posts</h2>` section with `<h3>` cards.
- **Effort:** S.

### 5. Self-host the SLC skyline image on /contact
- **What:** Contact page references `https://lh3.googleusercontent.com/aida-public/AB6AXuD…` (Google AI Studio CDN).
- **Why:** Unowned URL — could 404 at any time. Recent commit "render SLC image at full color by default" confirms this is intentional UI but the asset isn't owned.
- **Fix:** Download, optimize (WebP + AVIF), self-host under `/sections/slc_skyline.webp`. Ensure license/attribution if needed.
- **Effort:** S.

## High (fix within 2 weeks)

### 6. Add real Person author schema on blog posts
- **What:** Author currently `{ "@type": "Person", "name": "Pantera Claw" }` — type/name mismatch.
- **Why:** AI engines and Google E-E-A-T weighting favor named human authors with credentials. Mismatched type may also flag in Rich Results test.
- **Fix:** Either (a) switch author to `Organization` (`@id` of the existing org), OR (b) introduce a `Person` author per post with `name`, `image`, `jobTitle`, `description`, `url`, `sameAs` (LinkedIn). Option (b) is preferred for a consulting firm — buyers want to know who's writing.
- **Effort:** M.

### 7. Expand Organization.sameAs
- **What:** Currently only `https://github.com/CJames1261`.
- **Why:** AI engines verify entity identity by cross-referencing sameAs links. More reputable platforms = more confident citations.
- **Fix:** Add (in priority order): LinkedIn company page, Google Business Profile (after claiming), X/Twitter, Facebook page, Crunchbase, Clutch.
- **Effort:** S.

### 8. Deepen the About page
- **What:** Only 405 words; no founder bio, no credentials, no proof.
- **Why:** Highest-trust page on a consulting site. Buyers compare consultants by who, not what.
- **Fix:** Add: founder bio + photo, formal credentials, years of experience, signature projects (anonymized OK), values, what makes Pantera Claw different, hiring philosophy. Aim for 800–1200 words. Add a `Person` schema for the founder.
- **Effort:** L.

### 9. Add at least one case study
- **What:** No portfolio / case studies / proof of work on the site.
- **Why:** Consulting buyers need evidence. Case studies are also ideal AI citation fodder ("Pantera Claw helped a Utah powder coating shop cut quoting time 60%…").
- **Fix:** Publish one anonymized case study with: client problem, approach, tools used, measurable outcome. Add `Article` schema.
- **Effort:** L.

### 10. Align ContactPoint.areaServed with ProfessionalService.areaServed
- **What:** `ContactPoint.areaServed = "US"`, but `ProfessionalService.areaServed` lists Utah/SLC/Provo/Ogden.
- **Why:** Inconsistent geographic signals.
- **Fix:** Make `ContactPoint.areaServed` an array matching the service-level coverage, or at minimum keep them coherent.
- **Effort:** S.

## Medium (fix within a month)

### 11. Per-page OG images
- Currently every page shares `/og-image.webp`.
- Add per-page variants for /services, /about, /contact, /ai-consulting-salt-lake-city, and per-post for blog articles. Use the existing `seo-image-gen` skill to generate.
- **Effort:** M.

### 12. Add a real PostalAddress
- `addressLocality`, `addressRegion`, `addressCountry` only — no `streetAddress`/`postalCode`. If you don't have a public office, register as a service-area business in Google Business Profile and update schema accordingly.
- **Effort:** S (schema), M (decide on real address strategy).

### 13. Improve Contact H1
- "Initiate High-Fidelity Engagement." has zero search relevance.
- Change to: "Contact Pantera Claw — Free AI & Data Consulting Conversation" or similar. Keep brand voice in the H2 ("Briefing Details" can stay).
- **Effort:** S.

### 14. Fix sitemap lastmod consistency
- Home shows `2026-04-27` while children show `2026-05-03`. Either auto-bump home on any child change, or pin home to the most recent child-page lastmod.
- **Effort:** S.

### 15. Add testimonial/Review schema once you have client permissions
- Even one or two `Review` items on the home page move the trust needle and unlock review-snippet rich results.
- **Effort:** M.

### 16. Add visible breadcrumbs UI
- Schema is present, but the visual breadcrumb component isn't visible on most pages. Adds clarity for users + crawlers.
- **Effort:** M.

### 17. Tighten CSP
- `script-src 'self' 'unsafe-inline' 'unsafe-eval'` — long-term, move to nonce-based CSP. Lower priority since this is the Next.js norm.
- **Effort:** L.

## Low (backlog)

- Add `fetchpriority="high"` to LCP hero image on blog posts.
- Add AVIF variants for hero/section images (WebP fallback).
- Add `twitter:site` handle once the X/Twitter account exists.
- Configure IndexNow ping (Bing) on publish.
- Add `Article.speakable` annotations on blog posts.
- List `/ai-consulting-salt-lake-city` under "Core Pages" in `llms.txt`.

---

## Suggested 30-day roadmap

| Week | Focus |
|---|---|
| **Week 1** | Critical fixes #1–5 (blog images, H1 spacing, slug/desc truncation, /blog hierarchy, self-host skyline) |
| **Week 2** | High fixes #6–10 (author schema, sameAs, /about deepening, case study draft, areaServed alignment) |
| **Week 3** | Per-page OG images, PostalAddress decision, Contact H1, sitemap lastmod, breadcrumbs UI |
| **Week 4** | Publish first case study, claim Google Business Profile + add to sameAs, run `seo-google` audit with PSI/CrUX credentials, run `seo-backlinks` to set baseline |

## Suggested next audit subcommands

```
/claude-seo:seo-drift baseline https://www.agenticaiutah.com   # snapshot now, compare after fixes
/claude-seo:seo-local https://www.agenticaiutah.com            # GBP + NAP + citation deep-dive
/claude-seo:seo-google                                         # if Google API creds are configured
/claude-seo:seo-backlinks https://www.agenticaiutah.com        # link profile baseline
```

All output for this audit lives in `pantera_dev_site\seo-audit-agenticaiutah\`.

import type { MetadataRoute } from "next";
import { allPosts } from "@/lib/posts";

const SITE_URL = "https://www.agenticaiutah.com";

const STATIC_LAST_UPDATED: Record<string, string> = {
  "/services": "2026-05-03",
  "/about": "2026-04-27",
  "/contact": "2026-05-03",
  "/privacy": "2026-05-03",
  "/ai-consulting-salt-lake-city": "2026-05-03",
};

// Home and /blog should never appear stale relative to their child pages.
// Home tracks the most recent change anywhere on the site; /blog tracks the
// most recent post.
const NEWEST_POST_DATE = allPosts.reduce(
  (max, p) => (p.isoDate > max ? p.isoDate : max),
  "1970-01-01",
);
const NEWEST_STATIC_DATE = Object.values(STATIC_LAST_UPDATED).reduce(
  (max, d) => (d > max ? d : max),
  "1970-01-01",
);
const SITE_LAST_UPDATED =
  NEWEST_POST_DATE > NEWEST_STATIC_DATE ? NEWEST_POST_DATE : NEWEST_STATIC_DATE;

const ROOT_LAST_UPDATED: Record<string, string> = {
  "/": SITE_LAST_UPDATED,
  "/blog": NEWEST_POST_DATE,
  ...STATIC_LAST_UPDATED,
};

const HERO_IMAGE = `${SITE_URL}/Pantera_Claw_hero.webp`;
const LOGO_FULL = `${SITE_URL}/Pantera_Claw.webp`;

const CORE_IMAGES: Record<string, string[]> = {
  "/": [HERO_IMAGE],
  "/services": [HERO_IMAGE],
  "/about": [LOGO_FULL, HERO_IMAGE],
  "/contact": [HERO_IMAGE],
  "/blog": [HERO_IMAGE],
  "/privacy": [],
  "/ai-consulting-salt-lake-city": [HERO_IMAGE],
};

export default function sitemap(): MetadataRoute.Sitemap {
  const core: MetadataRoute.Sitemap = (
    Object.keys(ROOT_LAST_UPDATED) as Array<keyof typeof ROOT_LAST_UPDATED>
  ).map((path) => {
    const images = CORE_IMAGES[path];
    return {
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      // Date-only string (YYYY-MM-DD); avoids fabricated millisecond precision.
      lastModified: ROOT_LAST_UPDATED[path],
      ...(images && images.length > 0 ? { images } : {}),
    };
  });

  const blog: MetadataRoute.Sitemap = allPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.isoDate,
    images: p.image
      ? [p.image.startsWith("http") ? p.image : `${SITE_URL}${p.image}`]
      : undefined,
  }));

  return [...core, ...blog];
}

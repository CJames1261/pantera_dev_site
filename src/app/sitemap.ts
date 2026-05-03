import type { MetadataRoute } from "next";
import { allPosts } from "@/lib/posts";

const SITE_URL = "https://www.agenticaiutah.com";

const SITE_LAST_UPDATED = "2026-04-27";
const STATIC_LAST_UPDATED: Record<string, string> = {
  "/": SITE_LAST_UPDATED,
  "/services": "2026-05-03",
  "/about": "2026-04-27",
  "/contact": "2026-05-03",
  "/blog": SITE_LAST_UPDATED,
  "/privacy": "2026-05-03",
  "/ai-consulting-salt-lake-city": "2026-05-03",
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
    Object.keys(STATIC_LAST_UPDATED) as Array<keyof typeof STATIC_LAST_UPDATED>
  ).map((path) => {
    const images = CORE_IMAGES[path];
    return {
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      lastModified: new Date(STATIC_LAST_UPDATED[path]),
      ...(images && images.length > 0 ? { images } : {}),
    };
  });

  const blog: MetadataRoute.Sitemap = allPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.isoDate),
    images: p.image
      ? [p.image.startsWith("http") ? p.image : `${SITE_URL}${p.image}`]
      : undefined,
  }));

  return [...core, ...blog];
}

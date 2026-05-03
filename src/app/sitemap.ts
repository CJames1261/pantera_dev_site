import type { MetadataRoute } from "next";
import { allPosts } from "@/lib/posts";

const SITE_URL = "https://www.agenticaiutah.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const core = ["", "/services", "/about", "/contact", "/blog"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const blog = allPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.isoDate),
  }));

  return [...core, ...blog];
}

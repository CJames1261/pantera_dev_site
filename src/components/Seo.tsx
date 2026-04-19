import { useEffect } from "react";

type Props = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article";
  noindex?: boolean;
  jsonLd?: object | object[];
  articleMeta?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
  };
};

const SITE_URL = "https://www.agenticaiutah.com";
const DEFAULT_OG_IMAGE = "/Pantera_Claw_hero.webp";

type MetaSelector = {
  selector: string;
  attrs: Record<string, string>;
};

/**
 * Sets or replaces a single <meta> or <link> tag in <head>. If a tag matching
 * the selector already exists (e.g. a static fallback in index.html), we
 * update it in place. Otherwise we create a new one marked with data-seo so
 * we can clean up on unmount or route change.
 */
function upsertHeadTag(tagName: "meta" | "link", spec: MetaSelector) {
  let el = document.head.querySelector<HTMLElement>(spec.selector);
  if (!el) {
    el = document.createElement(tagName);
    el.setAttribute("data-seo", "1");
    document.head.appendChild(el);
  }
  for (const [k, v] of Object.entries(spec.attrs)) {
    el.setAttribute(k, v);
  }
}

/**
 * Drives per-page SEO by imperatively setting <title>, <meta>, and <link>
 * tags on every route. This avoids the duplicate-tag issue React 19's
 * native metadata hoisting has with pre-existing static tags in index.html.
 */
export default function Seo({
  title,
  description,
  path,
  ogImage,
  type = "website",
  noindex = false,
  jsonLd,
  articleMeta,
}: Props) {
  useEffect(() => {
    const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
    const imagePath = ogImage ?? DEFAULT_OG_IMAGE;
    const absoluteImage = imagePath.startsWith("http")
      ? imagePath
      : `${SITE_URL}${imagePath.startsWith("/") ? imagePath : `/${imagePath}`}`;

    document.title = title;

    upsertHeadTag("meta", {
      selector: 'meta[name="robots"]',
      attrs: {
        name: "robots",
        content: noindex ? "noindex, nofollow" : "index, follow",
      },
    });

    upsertHeadTag("meta", {
      selector: 'meta[name="description"]',
      attrs: { name: "description", content: description },
    });
    upsertHeadTag("link", {
      selector: 'link[rel="canonical"]',
      attrs: { rel: "canonical", href: url },
    });

    upsertHeadTag("meta", {
      selector: 'meta[property="og:type"]',
      attrs: { property: "og:type", content: type },
    });
    upsertHeadTag("meta", {
      selector: 'meta[property="og:title"]',
      attrs: { property: "og:title", content: title },
    });
    upsertHeadTag("meta", {
      selector: 'meta[property="og:description"]',
      attrs: { property: "og:description", content: description },
    });
    upsertHeadTag("meta", {
      selector: 'meta[property="og:url"]',
      attrs: { property: "og:url", content: url },
    });
    upsertHeadTag("meta", {
      selector: 'meta[property="og:image"]',
      attrs: { property: "og:image", content: absoluteImage },
    });

    upsertHeadTag("meta", {
      selector: 'meta[name="twitter:card"]',
      attrs: { name: "twitter:card", content: "summary_large_image" },
    });
    upsertHeadTag("meta", {
      selector: 'meta[name="twitter:title"]',
      attrs: { name: "twitter:title", content: title },
    });
    upsertHeadTag("meta", {
      selector: 'meta[name="twitter:description"]',
      attrs: { name: "twitter:description", content: description },
    });
    upsertHeadTag("meta", {
      selector: 'meta[name="twitter:image"]',
      attrs: { name: "twitter:image", content: absoluteImage },
    });

    // Article-specific OG metadata
    const articleMetaSelectors = [
      'meta[property="article:published_time"]',
      'meta[property="article:modified_time"]',
      'meta[property="article:author"]',
      'meta[property="article:section"]',
    ];
    articleMetaSelectors.forEach((sel) =>
      document.head.querySelector(sel)?.remove(),
    );
    if (type === "article" && articleMeta) {
      if (articleMeta.publishedTime) {
        upsertHeadTag("meta", {
          selector: 'meta[property="article:published_time"]',
          attrs: { property: "article:published_time", content: articleMeta.publishedTime },
        });
      }
      if (articleMeta.modifiedTime) {
        upsertHeadTag("meta", {
          selector: 'meta[property="article:modified_time"]',
          attrs: { property: "article:modified_time", content: articleMeta.modifiedTime },
        });
      }
      if (articleMeta.author) {
        upsertHeadTag("meta", {
          selector: 'meta[property="article:author"]',
          attrs: { property: "article:author", content: articleMeta.author },
        });
      }
      if (articleMeta.section) {
        upsertHeadTag("meta", {
          selector: 'meta[property="article:section"]',
          attrs: { property: "article:section", content: articleMeta.section },
        });
      }
    }

    // JSON-LD: clear any previously injected per-route blocks, then add new ones
    document.head
      .querySelectorAll('script[type="application/ld+json"][data-seo="1"]')
      .forEach((el) => el.remove());
    if (jsonLd) {
      const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      blocks.forEach((block) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo", "1");
        script.text = JSON.stringify(block);
        document.head.appendChild(script);
      });
    }
  }, [title, description, path, ogImage, type, noindex, jsonLd, articleMeta]);

  return null;
}

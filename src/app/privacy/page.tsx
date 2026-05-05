import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

const SITE_URL = "https://www.agenticaiutah.com";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy & Data Practices | Pantera Claw" },
  description:
    "How Pantera Claw collects, uses, and protects information from website visitors and consulting clients.",
  alternates: { canonical: "/privacy" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${SITE_URL}/privacy` },
  ],
};

const lastUpdated = "May 3, 2026";

export default function Privacy() {
  return (
    <main className="relative z-10 pt-32 lg:pt-40 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <article className="max-w-[820px] mx-auto px-4 md:px-8 blog-body text-text-secondary text-base lg:text-lg leading-relaxed">
        <Breadcrumbs
          className="mb-6"
          items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        />
        <h1
          className="font-display font-bold tracking-tighter text-text-primary leading-[1.08] mb-4"
          style={{ fontSize: "clamp(1.875rem, 4.5vw, 3rem)" }}
        >
          Privacy Policy
        </h1>
        <p className="text-text-tertiary font-mono text-sm mb-12">
          Last updated: {lastUpdated}
        </p>

        <p>
          Pantera Claw (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates{" "}
          <a href={SITE_URL}>www.agenticaiutah.com</a>. This page explains what
          information we collect, how we use it, and the choices you have. We
          designed this site to collect as little personal data as possible.
        </p>

        <h2>Information we collect</h2>
        <p>
          When you submit our contact form we receive the name, email address,
          optional company name, and message you provide. We use this only to
          reply to your inquiry and, if it leads to a project, to onboard you as
          a client.
        </p>
        <p>
          We use Vercel to host the site, which logs IP address, user agent, and
          basic request metadata for security and performance monitoring. We do
          not run any third-party analytics or advertising trackers on this
          site.
        </p>

        <h2>How we use your information</h2>
        <ul>
          <li>To respond to questions you send through the contact form.</li>
          <li>To deliver and improve our consulting services if you become a client.</li>
          <li>To meet legal, accounting, and security obligations.</li>
        </ul>
        <p>
          We do not sell, rent, or trade your personal information.
        </p>

        <h2>Cookies</h2>
        <p>
          This site does not set marketing or analytics cookies. Vercel may set
          minimal infrastructure cookies for security and load balancing.
        </p>

        <h2>Client engagements</h2>
        <p>
          When we work on a paid engagement we typically receive access to
          client systems and data. We treat that information as confidential
          under the terms of the engagement contract. We do not use client data
          to train third-party AI models, and we do not share it outside our
          team without written permission.
        </p>

        <h2>Your rights</h2>
        <p>
          You can ask us to access, correct, or delete personal information we
          hold about you. Email{" "}
          <a href="mailto:info@panteraclaw.com">info@panteraclaw.com</a> and we
          will respond within 30 days.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy as our practices change or to reflect new
          legal requirements. The &quot;Last updated&quot; date above reflects the most
          recent revision.
        </p>

        <h2>Contact</h2>
        <p>
          Questions or concerns:{" "}
          <a href="mailto:info@panteraclaw.com">info@panteraclaw.com</a> ·{" "}
          <a href="tel:+18018980911">+1 (801) 898-0911</a> · Salt Lake City,
          Utah, USA.
        </p>
      </article>
    </main>
  );
}

import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/ssr";

export type Crumb = { label: string; href?: string };

type Props = {
  items: Crumb[];
  className?: string;
};

// Visible breadcrumb trail. The last item renders as text (current page) and
// every prior item renders as a Link. Pair this with a BreadcrumbList JSON-LD
// emitted from the page-level schema for crawlers.
export default function Breadcrumbs({ items, className = "" }: Props) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`font-mono text-[11px] uppercase tracking-[0.18em] text-text-tertiary ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-2 list-none p-0 m-0">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-accent transition-colors duration-300 no-underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? "text-text-secondary" : ""}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <CaretRight
                  size={10}
                  weight="bold"
                  aria-hidden="true"
                  className="text-text-tertiary/60"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

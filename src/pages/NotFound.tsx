import { Link } from "react-router-dom";
import { ArrowUpRight, HouseSimple } from "@phosphor-icons/react";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <main className="relative z-10 pt-32 lg:pt-40 pb-24 min-h-[70dvh]">
      <Seo
        title="Page not found | Pantera Claw"
        description="The page you're looking for doesn't exist or has moved."
        path="/404"
      />
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1fr] gap-12 lg:gap-20 items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-border-light bg-surface mb-6">
              <span className="font-mono text-xs text-text-secondary tracking-wide uppercase">
                404 · Not found
              </span>
            </div>
            <p
              className="font-mono font-bold text-accent tracking-tighter leading-none"
              style={{ fontSize: "clamp(4rem, 18vw, 12rem)" }}
            >
              404
            </p>
          </div>

          <div>
            <h1
              className="font-display font-bold tracking-tighter text-text-primary mb-5"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              That page isn't here.
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed max-w-[52ch] mb-10">
              The link may be out of date, or the page has moved. Head back to
              the home page, or tell us what you were looking for.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/"
                className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-canvas font-semibold text-sm pl-5 pr-2 py-2 rounded-full transition-all duration-700 no-underline"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                }}
              >
                <HouseSimple size={16} weight="bold" />
                Home
                <span
                  className="w-7 h-7 rounded-full bg-canvas/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                  }}
                >
                  <ArrowUpRight size={12} weight="bold" className="text-canvas" />
                </span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-surface border border-border hover:border-border-light text-text-primary font-medium text-sm px-5 py-2 rounded-full transition-colors duration-300 no-underline"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-surface border border-border hover:border-border-light text-text-primary font-medium text-sm px-5 py-2 rounded-full transition-colors duration-300 no-underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

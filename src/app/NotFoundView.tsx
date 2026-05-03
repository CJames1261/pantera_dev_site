"use client";

import Link from "next/link";
import { ArrowUpRight, HouseSimple } from "@phosphor-icons/react/ssr";

export default function NotFoundView() {
  return (
    <main className="relative z-10 pt-32 lg:pt-40 pb-24 min-h-[70dvh]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1fr] gap-12 lg:gap-20 items-end">
          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full text-base font-medium text-white bg-white/15 border border-white/25 mb-6">
              404 · Not found
            </span>
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
              That page isn&apos;t here.
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed max-w-[52ch] mb-10">
              The link may be out of date, or the page has moved. Head back to
              the home page, or tell us what you were looking for.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/"
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
                href="/services"
                className="inline-flex items-center gap-2 bg-surface border border-border hover:border-border-light text-text-primary font-medium text-sm px-5 py-2 rounded-full transition-colors duration-300 no-underline"
              >
                Services
              </Link>
              <Link
                href="/contact"
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

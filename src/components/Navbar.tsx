"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, List, X } from "@phosphor-icons/react/ssr";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0A0A0B]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50">
      <div className="flex justify-between items-center h-20 w-full px-6 md:px-8">
        <Link
          href="/"
          aria-label="Pantera Claw home"
          className="group/brand flex items-center gap-3 text-xl font-black tracking-tighter text-white uppercase font-display hover:text-accent transition-colors no-underline"
        >
          <span className="whitespace-nowrap">
            Pantera <span className="text-accent">Claw</span>
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden border border-white/15 bg-surface-light flex-shrink-0">
            <img
              src="/Pantera_Claw_icon.webp"
              alt=""
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1.5 backdrop-blur-xl"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = isActive(pathname, link.path);
            return (
              <Link
                key={link.path}
                href={link.path}
                aria-current={active ? "page" : undefined}
                className={`font-display text-sm tracking-wide transition-all duration-300 px-5 py-2 rounded-full no-underline ${
                  active
                    ? "bg-accent text-canvas font-bold"
                    : "font-medium text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden sm:inline-flex bg-accent text-canvas px-6 py-3 rounded-full font-semibold text-sm items-center gap-2 group/cta active:scale-95 hover:brightness-110 transition-all no-underline"
        >
          Get in touch
          <ArrowRight
            size={16}
            weight="bold"
            className="transition-transform group-hover/cta:translate-x-1"
          />
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2 bg-transparent border-none cursor-pointer"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>

      <div
        className={`md:hidden ${mobileOpen ? "block" : "hidden"} border-t border-white/10 bg-[#0A0A0B]/95 backdrop-blur-xl`}
      >
        <nav className="flex flex-col gap-1 px-8 py-6" aria-label="Mobile">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.path);
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`font-display text-base tracking-wide py-3 border-b border-white/5 no-underline ${
                  active ? "text-accent font-bold" : "text-zinc-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-6 bg-accent text-canvas px-6 py-3 rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2 no-underline"
          >
            Get in touch
            <ArrowRight size={16} weight="bold" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

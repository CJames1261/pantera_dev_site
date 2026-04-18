import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";
import logo from "../assets/Pantera_Claw.webp";

const ease = "cubic-bezier(0.32, 0.72, 0, 1)";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[calc(100%-2rem)]">
        <div
          className="flex items-center gap-1 rounded-full px-2 py-2 border border-border-light"
          style={{
            backgroundColor: "rgba(19, 19, 22, 0.8)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-2.5 pl-2 pr-1 no-underline">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-border-light flex-shrink-0 bg-surface-light">
              <img src={logo} alt="Pantera Claw" className="w-full h-full object-contain scale-125" />
            </div>
            <span className="font-display font-semibold text-text-primary text-sm tracking-tight hidden sm:block">
              Pantera Claw
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium no-underline transition-all duration-500 ${
                  location.pathname === link.path
                    ? "text-canvas bg-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                style={{ transitionTimingFunction: ease }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden md:flex items-center gap-2 bg-accent hover:bg-accent-hover text-canvas font-semibold text-sm pl-5 pr-1.5 py-1.5 rounded-full no-underline transition-all duration-500 group"
            style={{ transitionTimingFunction: ease }}
          >
            Get in touch
            <span className="w-7 h-7 rounded-full bg-canvas/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px"
              style={{ transitionTimingFunction: ease }}
            >
              <ArrowUpRight size={14} weight="bold" className="text-canvas" />
            </span>
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-11 h-11 rounded-full bg-surface-light flex items-center justify-center border-none cursor-pointer relative"
            aria-label="Toggle menu"
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity: mobileOpen ? 0 : 1,
                transform: mobileOpen ? "rotate(-90deg)" : "rotate(0)",
                transition: `opacity 0.3s ${ease}, transform 0.3s ${ease}`,
              }}
            >
              <List size={20} weight="bold" className="text-text-primary" />
            </div>
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "rotate(0)" : "rotate(90deg)",
                transition: `opacity 0.3s ${ease}, transform 0.3s ${ease}`,
              }}
            >
              <X size={20} weight="bold" className="text-text-primary" />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className="fixed inset-0 z-30 md:hidden flex flex-col items-center justify-center gap-6"
        style={{
          backgroundColor: "rgba(9, 9, 11, 0.95)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: `opacity 0.4s ${ease}`,
        }}
      >
        {navLinks.map((link, i) => (
          <div
            key={link.path}
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(30px)",
              transition: `opacity 0.5s ${ease} ${mobileOpen ? i * 0.08 : 0}s, transform 0.5s ${ease} ${mobileOpen ? i * 0.08 : 0}s`,
            }}
          >
            <Link
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`text-3xl font-semibold tracking-tight no-underline transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-accent"
                  : "text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          </div>
        ))}
        <div
          style={{
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? "translateY(0)" : "translateY(30px)",
            transition: `opacity 0.5s ${ease} ${mobileOpen ? navLinks.length * 0.08 : 0}s, transform 0.5s ${ease} ${mobileOpen ? navLinks.length * 0.08 : 0}s`,
          }}
        >
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center gap-2 bg-accent text-canvas font-semibold text-lg px-8 py-3 rounded-full no-underline"
          >
            Get in touch
            <ArrowUpRight size={18} weight="bold" />
          </Link>
        </div>
      </div>
    </>
  );
}

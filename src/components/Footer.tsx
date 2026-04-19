import { Link } from "react-router-dom";
import {
  EnvelopeSimple,
  Phone,
  MapPin,
  ArrowUpRight,
} from "@phosphor-icons/react";
import logo from "../assets/Pantera_Claw.webp";

const services = [
  "Data Pipelines",
  "Analytics & BI",
  "AI & Machine Learning",
  "Dashboard Development",
  "Data Strategy",
  "Cloud Architecture",
];

const company = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border mt-auto">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 py-12 sm:py-16 lg:py-20">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 no-underline mb-5">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-border-light bg-surface-light">
                <img src={logo} alt="" aria-hidden="true" className="w-full h-full object-contain scale-125" />
              </div>
              <span className="font-display font-bold text-text-primary text-lg tracking-tight">
                Pantera Claw
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-[280px]">
              Production-grade data infrastructure, analytics, and AI systems
              for growth-stage companies.
            </p>
          </div>

          {/* Services Column (hidden on mobile; duplicates main nav + service
              cards on home. Shows at sm: and up.) */}
          <div className="hidden sm:block">
            <h3 className="font-display font-semibold text-text-primary text-sm uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-300 no-underline"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column (hidden on mobile; main nav already exposes all
              these links. Shows at sm: and up.) */}
          <div className="hidden sm:block">
            <h3 className="font-display font-semibold text-text-primary text-sm uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-300 no-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display font-semibold text-text-primary text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <EnvelopeSimple size={16} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:info@panteraclaw.com"
                  className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-300 no-underline"
                >
                  info@panteraclaw.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a
                  href="tel:+18018980911"
                  className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-300 no-underline"
                >
                  +1 (801) 898-0911
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-text-secondary text-sm">
                  Salt Lake City, Utah
                </span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-accent text-sm font-semibold hover:gap-3 transition-all duration-500 no-underline"
              style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
            >
              Start a conversation
              <ArrowUpRight size={14} weight="bold" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-xs">
            © {new Date().getFullYear()} Pantera Claw. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-text-tertiary uppercase tracking-wider">
            Salt Lake City, UT · Serving clients nationwide
          </p>
        </div>
      </div>
    </footer>
  );
}

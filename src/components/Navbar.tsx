import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Stack", href: "#stack" },
    { label: "Education", href: "#education" },
  ];

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 pointer-events-none">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Floating Pill Bar */}
        <div
          className="pointer-events-auto w-full flex items-center justify-between
            px-3.5 py-2 rounded-full border border-zinc-200/90 bg-white/85
            backdrop-blur-md shadow-card transition-all duration-200 hover:border-zinc-300"
        >
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 pl-1.5 group focus:outline-none"
          >
            <div
              className="w-7 h-7 rounded-full bg-zinc-950 text-white
                flex items-center justify-center font-mono font-semibold text-xs
                group-hover:bg-accent transition-colors"
            >
              K
            </div>
            <span className="font-mono font-medium text-sm text-zinc-950 tracking-tight">
              karthik<span className="text-accent font-semibold">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-zinc-600
                  hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
                text-xs font-medium bg-zinc-950 text-white hover:bg-zinc-800
                transition-all min-h-[36px] shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2
              rounded-full text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100
              min-h-[44px] min-w-[44px]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-2 max-w-sm mx-auto">
          <div
            className="rounded-2xl border border-zinc-200 bg-white/95
              backdrop-blur-md p-4 shadow-elevated space-y-3"
          >
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-zinc-700
                    hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-zinc-100">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-1.5
                  py-2.5 rounded-xl text-xs font-semibold bg-zinc-950 text-white
                  hover:bg-zinc-800 transition-colors min-h-[44px]"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

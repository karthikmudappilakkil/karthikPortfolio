import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "01. ABOUT", href: "#about" },
    { label: "02. STACK", href: "#skills" },
    { label: "03. WORKS", href: "#projects" },
    { label: "04. RECORD", href: "#experience" },
    { label: "05. CONTACT", href: "#contact" },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full bg-paper/95 backdrop-blur-md
        border-b-[1.5px] border-ink"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-3 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div
              className="w-8 h-8 bg-posterRed text-paper border-[1.5px] border-ink
                flex items-center justify-center font-mono font-bold text-sm shadow-poster
                group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
            >
              K
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-sm text-ink tracking-tight">
                KARTHIK M P
              </span>
              <span
                className="font-mono text-[10px] text-posterRed uppercase
                  tracking-wider font-semibold"
              >
                FULL STACK & MOBILE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono font-bold text-ink/80 hover:text-posterRed
                  transition-colors tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="poster-btn-primary py-2 px-3.5 text-xs flex items-center gap-1.5"
            >
              <span>DISPATCH</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden poster-btn-secondary p-2 min-h-[44px] min-w-[44px]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-ink" />
            ) : (
              <Menu className="w-5 h-5 text-ink" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t-[1.5px] border-ink bg-paper space-y-3">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-mono font-bold text-ink
                    hover:bg-paperDark hover:text-posterRed transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t-[1.5px] border-ink/30 px-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="poster-btn-primary w-full text-xs py-2.5 flex items-center
                  justify-center gap-1.5"
              >
                <span>SEND TRANSMISSION</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { CornerCross } from "@/components/ui/PosterMarks";

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
        border-b-2 border-ink shadow-[0_2px_0_#141414]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <CornerCross className="absolute left-2 top-1/2 -translate-y-1/2 hidden xl:block" />
        <CornerCross className="absolute right-2 top-1/2 -translate-y-1/2 hidden xl:block" />

        <div className="py-2.5 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none select-none"
          >
            <div
              className="w-9 h-9 bg-posterRed text-paper border-2 border-ink
                flex items-center justify-center font-mono font-bold text-base
                shadow-[2px_2px_0_#141414] group-hover:translate-x-0.5
                group-hover:translate-y-0.5 group-hover:shadow-none transition-all"
            >
              K
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-sm text-ink tracking-tight uppercase">
                  KARTHIK M P
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-posterRed animate-ping" />
              </div>
              <span
                className="font-mono text-[10px] text-posterRed uppercase
                  tracking-widest font-bold"
              >
                FULL STACK & MOBILE // 2026
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
                  transition-colors tracking-widest relative py-1 group"
              >
                <span>{link.label}</span>
                <span
                  className="absolute bottom-0 left-0 w-0 h-[2px] bg-posterRed
                    transition-all duration-200 group-hover:w-full"
                />
              </a>
            ))}
          </nav>

          {/* Action CTA & Badge */}
          <div className="hidden md:flex items-center gap-3">
            <div
              className="hidden lg:flex items-center gap-1.5 px-2 py-1 bg-paperDark
                border border-ink/40 text-[10px] font-mono font-bold text-ink"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-posterRed animate-pulse" />
              <span>ACTIVE SYSTEM</span>
            </div>

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
          <div className="md:hidden py-4 border-t-2 border-ink bg-paper space-y-3">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-mono font-bold text-ink
                    hover:bg-paperDark hover:text-posterRed transition-colors
                    border-l-2 border-transparent hover:border-posterRed"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-2 px-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="poster-btn-primary w-full flex items-center justify-center gap-2"
              >
                <span>TRANSMIT DISPATCH</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

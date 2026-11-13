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
    <header className="sticky top-0 z-50 w-full bg-[#F8F9FA]/90 backdrop-blur-md py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="brutal-card px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div
              className="w-8 h-8 rounded-[6px] bg-charcoal text-white
                flex items-center justify-center font-mono font-bold text-sm
                group-hover:bg-accent transition-colors"
            >
              K
            </div>
            <span className="font-mono font-bold text-lg text-charcoal tracking-tight">
              karthik<span className="text-accent">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-mono font-medium text-charcoal/80
                  hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="brutal-btn brutal-btn-primary text-xs font-mono
                uppercase tracking-wider py-2 px-4 flex items-center gap-1.5"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden brutal-btn brutal-btn-secondary p-2
              min-h-[44px] min-w-[44px]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-charcoal" />
            ) : (
              <Menu className="w-5 h-5 text-charcoal" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 brutal-card p-4 space-y-3">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-[6px] text-sm font-mono
                    font-medium text-charcoal hover:bg-slatePill transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-charcoal/20">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="brutal-btn brutal-btn-primary w-full text-xs font-mono
                  uppercase tracking-wider py-2.5 flex items-center justify-center gap-1.5"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

import { ArrowUp } from "lucide-react";

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-paper py-12 border-t-[1.5px] border-ink">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className="flex flex-col md:flex-row md:items-center justify-between
            gap-6 pb-8 border-b-[1.5px] border-ink"
        >
          {/* Brand Colophon */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 bg-posterRed text-paper border-[1.5px] border-ink
                flex items-center justify-center font-mono font-bold text-lg shadow-poster"
            >
              K
            </div>
            <div>
              <div className="font-mono font-bold text-sm text-ink uppercase tracking-tight">
                KARTHIK M P // PORTFOLIO 2026
              </div>
              <div className="font-mono text-xs text-posterRed font-semibold uppercase">
                ARCHIVAL RED-ON-PAPER EDITION
              </div>
            </div>
          </div>

          {/* Direct Channels */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono font-bold">
            <a
              href="mailto:karthikmudappilakkil@gmail.com"
              className="text-ink hover:text-posterRed transition-colors"
            >
              EMAIL
            </a>
            <span className="text-ink/30">•</span>
            <a
              href="tel:+919995678189"
              className="text-ink hover:text-posterRed transition-colors"
            >
              PHONE
            </a>
            <span className="text-ink/30">•</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-posterRed transition-colors"
            >
              GITHUB
            </a>
            <span className="text-ink/30">•</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-posterRed transition-colors"
            >
              LINKEDIN
            </a>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="poster-btn-secondary p-2.5 min-h-[44px] min-w-[44px] self-start
              md:self-auto flex items-center gap-1.5"
            aria-label="Back to top"
          >
            <span className="text-xs font-mono font-bold">TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Colophon Notes */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3
            text-[11px] font-mono text-ink/70"
        >
          <div>
            © 2026 Karthik M P. All engineering blueprints & software editions documented.
          </div>
          <div className="text-posterRed font-bold">
            NO FONTS • NO IMAGES • 100% DRAWN GEOMETRY
          </div>
        </div>
      </div>
    </footer>
  );
}

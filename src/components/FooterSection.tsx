import { ArrowUp } from "lucide-react";
import { CornerCross } from "@/components/ui/PosterMarks";
import { BarcodeStrip } from "@/components/ui/PosterMarks";

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-paper py-14 border-t-2 border-ink relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <CornerCross className="absolute -top-3 left-4 hidden sm:block" />
        <CornerCross className="absolute -top-3 right-4 hidden sm:block" />

        <div
          className="flex flex-col md:flex-row md:items-center justify-between
            gap-6 pb-10 border-b-2 border-ink"
        >
          {/* Brand Colophon */}
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 bg-posterRed text-paper border-2 border-ink
                flex items-center justify-center font-mono font-bold text-xl
                shadow-[3px_3px_0_#141414] select-none"
            >
              K
            </div>
            <div>
              <div className="font-poster text-3xl text-ink uppercase tracking-wider leading-none">
                KARTHIK M P
              </div>
              <div className="font-mono text-xs text-posterRed font-bold uppercase mt-1 tracking-widest">
                ARCHIVAL RED-ON-PAPER EDITION // 2026
              </div>
            </div>
          </div>

          {/* Barcode Strip */}
          <div className="flex items-center">
            <BarcodeStrip code="KMP-2026-PORTFOLIO" />
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
              href="https://github.com/karthikmudappilakkil"
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
            <span className="text-xs font-mono font-bold">RETURN TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Colophon Notes */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3
            text-xs font-mono text-ink/70"
        >
          <div>
            © 2026 Karthik M P. All engineering blueprints & software editions documented.
          </div>
          <div className="text-posterRed font-bold tracking-wider">
            SCREEN-PRINTED AESTHETIC • ZERO WEBLIB BLOAT
          </div>
        </div>
      </div>
    </footer>
  );
}

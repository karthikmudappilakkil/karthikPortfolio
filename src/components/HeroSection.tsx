import WavingPortfolioLanding from "@/components/WavingPortfolioLanding";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-paper border-b-[1.5px] border-ink">
      {/* Centerpiece Waving Poster Landing */}
      <div className="w-full h-[85svh] sm:h-[90svh] min-h-[580px] max-h-[820px] relative">
        <WavingPortfolioLanding
          name="Karthik M P"
          year="2026"
          roles={["Full Stack Dev", "Mobile Engineer"]}
          lettersLeft={["P", "F"]}
          giantLetter="O"
          lettersRight={["RT", "LIO"]}
          title="Karthik M P — Portfolio"
          signature="KARTHIK/MP"
          greeting="Hey, I'm Karthik!"
          accent="#e5262c"
          paper="#f6f4f0"
          ink="#141414"
          height="100%"
        />
      </div>

      {/* Editorial Scroll Prompt & Interactive Hint Bar */}
      <div className="border-t-[1.5px] border-ink bg-paperDark/70 px-4 py-3">
        <div
          className="max-w-6xl mx-auto flex flex-wrap items-center justify-between
            gap-3 text-xs font-mono"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-posterRed animate-pulse" />
            <span className="text-ink font-bold uppercase tracking-wider">
              INTERACTIVE POSTER:
            </span>
            <span className="text-ink/80 hidden sm:inline">
              Hover letters to re-roll • Click character to wave • Roll corner dice
            </span>
          </div>

          <a
            href="#about"
            className="flex items-center gap-1.5 text-posterRed hover:text-ink font-bold
              transition-colors group"
          >
            <span>DECODE FULL DOSSIER</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

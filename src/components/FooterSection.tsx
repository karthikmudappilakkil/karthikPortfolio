import { Mail, Phone, ArrowUp } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504"
      />
      <path
        fillRule="evenodd"
        d="M8.839 21.521c.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703"
      />
      <path
        fillRule="evenodd"
        d="M6.726 19.939c-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466"
      />
      <path
        fillRule="evenodd"
        d="M2.247 17.13c-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032"
      />
      <path
        fillRule="evenodd"
        d="M3.846 17.554c.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338"
      />
      <path
        fillRule="evenodd"
        d="M7.392 17.048c-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688"
      />
      <path
        fillRule="evenodd"
        d="M3.866 9.409c-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026"
      />
      <path
        fillRule="evenodd"
        d="M6.714 7.785A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337"
      />
      <path
        fillRule="evenodd"
        d="M14.504 7.181c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651"
      />
      <path
        fillRule="evenodd"
        d="M17.351 8.805c.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943"
      />
      <path
        fillRule="evenodd"
        d="M13.813 16.436c.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747"
      />
      <path
        fillRule="evenodd"
        d="M14.479 21.038c0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14" />
      <path d="M24 5c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11z" />
      <path d="M6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764" />
      <path d="M8.25 4.968c-.783 1.764-1.75 1.764-1.75 1.764zm13.5 12.268h-3v-5.604" />
      <path d="M18.75 11.632c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765" />
      <path d="M14.75 7.997c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="pt-8 pb-16 scroll-mt-24">
      <SpotlightCard
        className="p-8 sm:p-12 relative overflow-hidden"
        spotlightColor="rgba(37, 99, 235, 0.08)"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full
                bg-accent/10 text-accent text-xs font-mono mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>Initiate Collaboration</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              Let's build something reliable.
            </h2>

            <p className="mt-3 text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
              Open for full-stack engineering roles, product contract work, or technical consulting.
              Reach out to discuss how I can bring velocity to your team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <a
              href="mailto:karthikmudappilakkil@gmail.com"
              className="minimal-btn-primary"
            >
              <Mail className="w-4 h-4 opacity-80" />
              <span>Email Me Directly</span>
            </a>

            <a
              href="tel:+919995678189"
              className="minimal-btn-secondary"
            >
              <Phone className="w-4 h-4 text-zinc-600" />
              <span>+91 9995678189</span>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div
          className="mt-10 pt-8 border-t border-zinc-100 flex flex-col
            sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500">
            <a
              href="mailto:karthikmudappilakkil@gmail.com"
              className="hover:text-accent transition-colors"
            >
              karthikmudappilakkil@gmail.com
            </a>
            <span className="text-zinc-300 hidden sm:inline">•</span>
            <a href="tel:+919995678189" className="hover:text-accent transition-colors">
              +91 9995678189
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-zinc-200 text-zinc-600 hover:text-zinc-950
                hover:bg-zinc-50 transition-colors min-h-[44px] min-w-[44px]
                inline-flex items-center justify-center"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-zinc-200 text-[#0077b5] hover:bg-zinc-50
                transition-colors min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-zinc-200 text-zinc-600 hover:text-zinc-950
                hover:bg-zinc-50 transition-colors min-h-[44px] min-w-[44px]
                inline-flex items-center justify-center"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          className="mt-6 pt-4 border-t border-zinc-100 flex flex-col sm:flex-row
            items-center justify-between gap-2 text-[11px] font-mono text-zinc-400"
        >
          <div>© {new Date().getFullYear()} Karthik M P. All rights reserved.</div>
          <div>Precision Minimalist Design System</div>
        </div>
      </SpotlightCard>
    </footer>
  );
}

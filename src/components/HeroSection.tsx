import {
  MapPin,
  Mail,
  Phone,
  Sparkles,
  ArrowDownRight,
  Code2,
  Cpu,
} from "lucide-react";
import { WordRotate } from "@/components/ui/word-rotate";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
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
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14"
      />
      <path d="M24 5c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11z" />
      <path
        d="M6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764"
      />
      <path
        d="M8.25 4.968c-.783 1.764-1.75 1.764-1.75 1.764zm13.5 12.268h-3v-5.604"
      />
      <path
        d="M18.75 11.632c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765"
      />
      <path
        d="M14.75 7.997c1.396-2.586 7-2.777 7 2.476v6.759z"
      />
    </svg>
  );
}

export function HeroSection() {
  const rotatingSpecialties = [
    "Full Stack & Mobile Developer",
    "React & React Native Engineer",
    "Node.js & Fastify Specialist",
    "Real-Time Systems Builder",
  ];

  return (
    <section className="py-6 sm:py-10">
      {/* 12-Column Neo-Brutalist Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
        {/* Main Hero Card: lg:col-span-8 */}
        <div className="lg:col-span-8 brutal-card p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 brutal-pill mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for New Projects & Roles</span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold
                tracking-tight text-charcoal leading-[1.15]"
            >
              Hi, I'm{" "}
              <span
                className="text-accent underline decoration-charcoal
                  decoration-wavy decoration-[2px] underline-offset-4"
              >
                Karthik M P
              </span>
              <br />
              <span
                className="text-2xl sm:text-3xl md:text-4xl font-bold
                  text-charcoal/90 mt-2 block"
              >
                <WordRotate
                  words={rotatingSpecialties}
                  duration={2600}
                  className="text-accent font-mono font-semibold"
                />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed">
              Building scalable web products, real-time systems, and mobile apps with{" "}
              <strong className="text-charcoal font-semibold">React</strong>,{" "}
              <strong className="text-charcoal font-semibold">Node.js</strong>,{" "}
              <strong className="text-charcoal font-semibold">Fastify</strong>, and{" "}
              <strong className="text-charcoal font-semibold">React Native</strong>.
            </p>
          </div>

          {/* Action CTAs & Social Links */}
          <div
            className="mt-8 pt-6 border-t-[1.5px] border-charcoal/15
              flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="brutal-btn brutal-btn-primary text-xs font-mono
                uppercase tracking-wider py-2.5 px-5 flex items-center gap-2"
            >
              <span>Explore Selected Work</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn brutal-btn-secondary text-xs font-mono
                uppercase tracking-wider py-2.5 px-4 flex items-center gap-2"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-4 h-4 text-charcoal" />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn brutal-btn-secondary text-xs font-mono
                uppercase tracking-wider py-2.5 px-4 flex items-center gap-2"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Quick Info & Focus Card: lg:col-span-4 */}
        <div className="lg:col-span-4 brutal-card p-6 flex flex-col justify-between bg-surface">
          <div>
            <div
              className="flex items-center justify-between pb-3
                border-b-[1.5px] border-charcoal/20"
            >
              <span
                className="text-xs font-mono font-bold uppercase
                  tracking-wider text-charcoal/70"
              >
                Quick Info
              </span>
              <Sparkles className="w-4 h-4 text-accent" />
            </div>

            <div className="mt-4 space-y-4">
              {/* Location */}
              <div className="flex items-start gap-3">
                <div
                  className="p-2 rounded-[6px] bg-slatePill border-[1.5px]
                    border-charcoal/40 text-charcoal shrink-0"
                >
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-charcoal/60">
                    Location
                  </div>
                  <div className="text-sm font-semibold text-charcoal">
                    Kerala, India
                  </div>
                </div>
              </div>

              {/* Current Focus */}
              <div className="flex items-start gap-3">
                <div
                  className="p-2 rounded-[6px] bg-accent-light border-[1.5px]
                    border-charcoal/40 text-accent shrink-0"
                >
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-charcoal/60">
                    Current Focus
                  </div>
                  <div className="text-sm font-semibold text-charcoal">
                    MCA Student & Full Stack Engineer
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div
                  className="p-2 rounded-[6px] bg-slatePill border-[1.5px]
                    border-charcoal/40 text-charcoal shrink-0"
                >
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-charcoal/60">
                    Email
                  </div>
                  <a
                    href="mailto:karthikmudappilakkil@gmail.com"
                    className="text-xs sm:text-sm font-mono font-medium
                      text-charcoal hover:text-accent transition-colors truncate block"
                  >
                    karthikmudappilakkil@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div
                  className="p-2 rounded-[6px] bg-slatePill border-[1.5px]
                    border-charcoal/40 text-charcoal shrink-0"
                >
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-charcoal/60">
                    Phone
                  </div>
                  <a
                    href="tel:+919995678189"
                    className="text-sm font-mono font-medium text-charcoal
                      hover:text-accent transition-colors"
                  >
                    +91 9995678189
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div
            className="mt-6 pt-4 border-t-[1.5px] border-charcoal/20
              grid grid-cols-2 gap-2 text-center"
          >
            <div className="p-2 rounded-[6px] bg-slatePill border-[1.5px] border-charcoal/30">
              <div className="text-lg font-mono font-bold text-accent">MERN & MEAN</div>
              <div className="text-[10px] font-mono text-charcoal/70 uppercase">
                Stack Mastery
              </div>
            </div>
            <div className="p-2 rounded-[6px] bg-slatePill border-[1.5px] border-charcoal/30">
              <div className="text-lg font-mono font-bold text-charcoal">Web & Mobile</div>
              <div className="text-[10px] font-mono text-charcoal/70 uppercase">
                Cross-Platform
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Banner: lg:col-span-12 */}
        <div
          className="lg:col-span-12 brutal-card p-4 bg-white flex flex-wrap
            items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-[6px] bg-charcoal text-white">
              <Cpu className="w-4 h-4" />
            </div>
            <span className="text-xs sm:text-sm font-mono font-semibold text-charcoal">
              Core Architecture Stack:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              "React.js",
              "React Native",
              "Expo",
              "Node.js",
              "Fastify",
              "MongoDB",
              "Socket.io",
            ].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono font-medium
                  bg-[#F1F5F9] text-charcoal rounded-[4px] border border-charcoal/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

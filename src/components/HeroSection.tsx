import {
  MapPin,
  Mail,
  Phone,
  ArrowDownRight,
  Code2,
  Terminal,
} from "lucide-react";
import { WordRotate } from "@/components/ui/word-rotate";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { GridPattern } from "@/components/ui/grid-pattern";

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

export function HeroSection() {
  const rotatingSpecialties = [
    "Full Stack & Mobile Developer",
    "React & React Native Engineer",
    "Node.js & Fastify Specialist",
    "Real-Time Systems Builder",
  ];

  return (
    <section className="relative pt-12 pb-16 overflow-hidden">
      {/* Background Coordinate Grid with Radial Falloff */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      >
        <GridPattern
          width={40}
          height={40}
          className="stroke-zinc-200/60 [stroke-dasharray:3_3]"
        />
      </div>

      {/* Hero Header */}
      <div className="max-w-3xl">
        {/* Availability Eyebrow Pill */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full
            border border-zinc-200 bg-white/80 backdrop-blur-sm text-xs
            font-mono text-zinc-600 mb-6 shadow-subtle"
        >
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full
                rounded-full bg-emerald-400 opacity-75"
            />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Available for New Roles & Engineering Projects</span>
        </div>

        {/* Main Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight
            text-zinc-950 leading-[1.1]"
        >
          Karthik M P
          <span className="block text-2xl sm:text-3xl md:text-4xl font-normal text-zinc-500 mt-2">
            <WordRotate
              words={rotatingSpecialties}
              duration={2600}
              className="text-accent font-medium font-sans"
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
          Building scalable web products, real-time systems, and mobile apps with{" "}
          <span className="text-zinc-900 font-medium">React</span>,{" "}
          <span className="text-zinc-900 font-medium">Node.js</span>,{" "}
          <span className="text-zinc-900 font-medium">Fastify</span>, and{" "}
          <span className="text-zinc-900 font-medium">React Native</span>.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="minimal-btn-primary group"
          >
            <span>View Selected Work</span>
            <ArrowDownRight
              className="w-4 h-4 opacity-70 group-hover:translate-y-0.5
                transition-transform"
            />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="minimal-btn-secondary"
            aria-label="GitHub profile"
          >
            <GithubIcon className="w-4 h-4 text-zinc-800" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="minimal-btn-secondary"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Bento Grid: Quick Info & Metrics (Linear Style) */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Core Architecture Overview: md:col-span-8 */}
        <SpotlightCard className="md:col-span-8 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-zinc-500" />
                <span className="text-xs font-mono font-medium uppercase text-zinc-500">
                  Primary Stack & Paradigms
                </span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400">
                Full Lifecycle Engineering
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-zinc-50/70 border border-zinc-100">
                <div className="text-[11px] font-mono text-zinc-500">Frontend</div>
                <div className="text-sm font-semibold text-zinc-900 mt-0.5">React.js</div>
                <div className="text-xs text-zinc-500">Component Architecture</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50/70 border border-zinc-100">
                <div className="text-[11px] font-mono text-zinc-500">Backend</div>
                <div className="text-sm font-semibold text-zinc-900 mt-0.5">Fastify & Node</div>
                <div className="text-xs text-zinc-500">High-Throughput APIs</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50/70 border border-zinc-100">
                <div className="text-[11px] font-mono text-zinc-500">Mobile</div>
                <div className="text-sm font-semibold text-zinc-900 mt-0.5">React Native</div>
                <div className="text-xs text-zinc-500">Expo & Flutter</div>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-zinc-100 flex flex-wrap items-center gap-1.5">
            {[
              "React",
              "React Native",
              "Fastify",
              "Node.js",
              "MongoDB",
              "Socket.io",
              "Tailwind",
            ].map((item) => (
              <span
                key={item}
                className="px-2 py-0.5 rounded-md text-xs font-mono
                  bg-zinc-100 text-zinc-700 border border-zinc-200/60"
              >
                {item}
              </span>
            ))}
          </div>
        </SpotlightCard>

        {/* Quick Info & Contact: md:col-span-4 */}
        <SpotlightCard className="md:col-span-4 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <span className="text-xs font-mono font-medium uppercase text-zinc-500">
                Quick Bio
              </span>
              <Code2 className="w-4 h-4 text-zinc-400" />
            </div>

            <div className="mt-3.5 space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-zinc-400 font-mono text-[10px] uppercase">Location</div>
                  <div className="text-zinc-800 font-medium">Kerala, India</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div
                  className="w-4 h-4 rounded-full bg-accent/10 text-accent flex
                    items-center justify-center shrink-0 mt-0.5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                <div>
                  <div className="text-zinc-400 font-mono text-[10px] uppercase">Focus</div>
                  <div className="text-zinc-800 font-medium">MCA Student & Full Stack Engineer</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="text-zinc-400 font-mono text-[10px] uppercase">Email</div>
                  <a
                    href="mailto:karthikmudappilakkil@gmail.com"
                    className="text-zinc-800 hover:text-accent font-mono truncate block"
                  >
                    karthikmudappilakkil@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-zinc-400 font-mono text-[10px] uppercase">Phone</div>
                  <a
                    href="tel:+919995678189"
                    className="text-zinc-800 hover:text-accent font-mono"
                  >
                    +91 9995678189
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-4 pt-3 border-t border-zinc-100 flex items-center
              justify-between text-[11px] font-mono text-zinc-400"
          >
            <span>IST (UTC+5:30)</span>
            <span className="flex items-center gap-1 text-emerald-600 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Online
            </span>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}

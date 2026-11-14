import { MapPin, Mail, Phone, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 border-b-[1.5px] border-ink bg-paper scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Editorial Section Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-baseline justify-between
            gap-2 pb-4 border-b-[1.5px] border-ink mb-10"
        >
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-xs font-bold bg-posterRed text-paper px-2
                py-0.5 border border-ink"
            >
              SEC. 01
            </span>
            <h2
              className="font-mono font-bold text-2xl sm:text-3xl text-ink
                tracking-tight uppercase"
            >
              ABOUT THE DEVELOPER
            </h2>
          </div>
          <span className="font-mono text-xs text-posterRed uppercase font-bold tracking-wider">
            BIO & CORE PARADIGM // 2026
          </span>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Editorial Narrative: lg:col-span-7 */}
          <div className="lg:col-span-7 space-y-6">
            <div className="poster-card p-6 sm:p-8 bg-white">
              <span
                className="inline-block font-mono text-xs font-bold text-posterRed
                  uppercase tracking-wider mb-3"
              >
                STATEMENT OF PURPOSE
              </span>
              <h3
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink
                  leading-snug"
              >
                Bridging rigorous full-stack systems with fluid cross-platform mobile experiences.
              </h3>
              <p className="mt-4 text-base text-ink/80 leading-relaxed font-normal">
                I'm <strong className="text-ink font-semibold">Karthik M P</strong>, a software
                engineer and MCA candidate based in Kerala, India. I specialize in designing and
                shipping high-throughput backend services, interactive web applications, and
                cross-platform mobile apps using React, Node.js, Fastify, and React Native.
              </p>
              <p className="mt-3 text-base text-ink/80 leading-relaxed font-normal">
                From developing enterprise-grade college ERP modules with real-time Socket.io
                collaboration at Necttos to crafting custom Shopify Liquid storefronts and emergency
                safety platforms, I prioritize scalable architectures and clean code.
              </p>

              {/* Red Ruled Divider with Dots */}
              <div className="relative my-6 py-2">
                <div className="w-full h-[2px] bg-posterRed" />
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full
                    bg-posterRed"
                />
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full
                    bg-posterRed"
                />
              </div>

              {/* Core Tenets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-paper border border-ink/40">
                  <div className="font-mono text-xs text-posterRed font-bold">01. RELIABILITY</div>
                  <div className="text-xs text-ink/80 mt-1">
                    Typed, modular API contracts and robust schemas.
                  </div>
                </div>
                <div className="p-3 bg-paper border border-ink/40">
                  <div className="font-mono text-xs text-posterRed font-bold">02. PERFORMANCE</div>
                  <div className="text-xs text-ink/80 mt-1">
                    Fastify throughput, low latency real-time websockets.
                  </div>
                </div>
                <div className="p-3 bg-paper border border-ink/40">
                  <div className="font-mono text-xs text-posterRed font-bold">03. ADAPTABILITY</div>
                  <div className="text-xs text-ink/80 mt-1">
                    Seamless navigation across web, mobile, and cloud.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dossier Card & Quick Facts: lg:col-span-5 */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="poster-card p-6 bg-paperDark border-[1.5px] border-ink">
              <div className="flex items-center justify-between pb-3 border-b-[1.5px] border-ink">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                  DEVELOPER DOSSIER
                </span>
                <span className="font-mono text-xs text-posterRed font-bold">
                  [ VERIFIED ]
                </span>
              </div>

              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-paper border border-ink text-posterRed shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-ink/60 font-semibold">
                      GEOGRAPHIC LOCATION
                    </div>
                    <div className="text-sm font-mono font-bold text-ink">
                      Kerala, India (UTC +5:30)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-paper border border-ink text-posterRed shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-ink/60 font-semibold">
                      CURRENT ACADEMIC FOCUS
                    </div>
                    <div className="text-sm font-mono font-bold text-ink">
                      MCA Candidate & Engineer
                    </div>
                    <div className="text-xs text-ink/70">
                      Christ College of Engineering
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-paper border border-ink text-posterRed shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase text-ink/60 font-semibold">
                      ELECTRONIC MAIL
                    </div>
                    <a
                      href="mailto:karthikmudappilakkil@gmail.com"
                      className="text-xs font-mono font-bold text-ink hover:text-posterRed
                        transition-colors truncate block"
                    >
                      karthikmudappilakkil@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-paper border border-ink text-posterRed shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-ink/60 font-semibold">
                      DIRECT LINE
                    </div>
                    <a
                      href="tel:+919995678189"
                      className="text-sm font-mono font-bold text-ink hover:text-posterRed
                        transition-colors"
                    >
                      +91 9995678189
                    </a>
                  </div>
                </div>
              </div>

              {/* Status Stamp */}
              <div
                className="mt-6 pt-4 border-t-[1.5px] border-ink flex items-center
                  justify-between text-xs font-mono"
              >
                <span className="flex items-center gap-1.5 font-bold text-posterRed">
                  <span className="w-2 h-2 rounded-full bg-posterRed animate-ping" />
                  OPEN FOR ENGAGEMENT
                </span>
                <span className="text-ink/60">Q1–Q4 2026</span>
              </div>
            </div>

            {/* Poster Stamp Card */}
            <div
              className="poster-card p-4 bg-posterRed text-paper border-[1.5px] border-ink
                flex items-center gap-4"
            >
              <div
                className="w-10 h-10 border-2 border-paper flex items-center justify-center
                  font-mono font-bold text-xl shrink-0"
              >
                #1
              </div>
              <div className="min-w-0">
                <div className="text-xs font-mono uppercase tracking-wider font-bold">
                  SPECIALIZED IN FULL-CYCLE SHIPMENTS
                </div>
                <div className="text-xs opacity-90 truncate">
                  Architecture → Deployment → Mobile Synchronization
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

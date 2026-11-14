import { MapPin, Mail, Phone, Award, Terminal } from "lucide-react";
import { PosterStamp } from "@/components/ui/PosterStamp";
import { CornerDice } from "@/components/ui/CornerDice";
import { CornerCross, CornerTicks } from "@/components/ui/PosterMarks";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 border-b-2 border-ink bg-paper scroll-mt-16 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <CornerCross className="absolute -top-3 left-4 hidden sm:block" />
        <CornerCross className="absolute -top-3 right-4 hidden sm:block" />

        {/* Poster Section Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-baseline justify-between
            gap-3 pb-4 border-b-2 border-ink mb-12"
        >
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-xs font-bold bg-posterRed text-paper px-2.5
                py-1 border-2 border-ink shadow-[2px_2px_0_#141414] uppercase tracking-wider"
            >
              SEC. 01
            </span>
            <h2
              className="font-poster text-4xl sm:text-6xl text-ink
                tracking-wide uppercase leading-none"
            >
              ABOUT THE DEVELOPER
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-posterRed font-bold tracking-widest uppercase">
            <span>[DOSSIER REF: KMP-2026-ENG]</span>
          </div>
        </div>

        {/* 2-Column Broadside Poster Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Statement & Philosophy: lg:col-span-7 */}
          <div className="lg:col-span-7 space-y-6">
            <div className="poster-card p-6 sm:p-8 bg-white relative">
              <CornerTicks />
              {/* Interactive Corner Dice */}
              <div className="absolute top-4 right-4 z-10">
                <CornerDice initialValue={4} size={38} />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-posterRed rounded-none" />
                <span
                  className="font-mono text-xs font-bold text-posterRed
                    uppercase tracking-widest"
                >
                  STATEMENT OF PURPOSE
                </span>
              </div>

              <h3
                className="font-poster text-3xl sm:text-5xl text-ink
                  leading-[0.95] tracking-wide uppercase"
              >
                BRIDGING HIGH-THROUGHPUT SYSTEM ARCHITECTURE WITH FLUID MOBILE
                EXPERIENCES.
              </h3>

              <p className="mt-5 text-sm sm:text-base text-ink/90 leading-relaxed font-normal">
                I am <strong className="text-ink font-bold">Karthik M P</strong>, a software
                engineer and MCA candidate based in Kerala, India. I specialize in designing and
                shipping high-throughput backend services, reactive web applications, and
                cross-platform mobile apps with React, Node.js, Fastify, and React Native.
              </p>

              <p className="mt-3 text-sm sm:text-base text-ink/90 leading-relaxed font-normal">
                From developing enterprise college ERP systems with real-time Socket.io
                collaboration at Necttos to engineering custom Shopify Liquid storefronts and
                emergency safety platforms, I prioritize robust type safety, low latency, and
                uncompromising code craftsmanship.
              </p>

              {/* Red Poster Ruled Line with Center Dot */}
              <div className="relative my-6 py-1">
                <div className="w-full h-[2px] bg-posterRed" />
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
                    w-2.5 h-2.5 bg-posterRed border border-ink rotate-45"
                />
              </div>

              {/* Core Engineering Tenets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-paper border-2 border-ink shadow-[2px_2px_0_#141414]">
                  <div className="font-mono text-xs text-posterRed font-bold tracking-wider">
                    01. RELIABILITY
                  </div>
                  <div className="text-xs text-ink/80 mt-1 leading-snug">
                    Typed API contracts, modular controllers, and resilient schemas.
                  </div>
                </div>
                <div className="p-3 bg-paper border-2 border-ink shadow-[2px_2px_0_#141414]">
                  <div className="font-mono text-xs text-posterRed font-bold tracking-wider">
                    02. SPEED
                  </div>
                  <div className="text-xs text-ink/80 mt-1 leading-snug">
                    Fastify throughput, low latency real-time WebSocket sync.
                  </div>
                </div>
                <div className="p-3 bg-paper border-2 border-ink shadow-[2px_2px_0_#141414]">
                  <div className="font-mono text-xs text-posterRed font-bold tracking-wider">
                    03. CRAFT
                  </div>
                  <div className="text-xs text-ink/80 mt-1 leading-snug">
                    Pixel-precise responsive layouts with 44px+ touch standards.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Archival Dossier & Verified Records: lg:col-span-5 */}
          <div className="lg:col-span-5 space-y-6">
            <div className="poster-card p-6 sm:p-7 bg-[#ede8e0] relative">
              <CornerTicks />

              {/* Header with Circular Stamp */}
              <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b-2 border-ink">
                <div>
                  <span
                    className="font-mono text-[10px] bg-ink text-paper px-2 py-0.5
                      font-bold tracking-widest uppercase inline-block mb-1"
                  >
                    IDENTIFICATION
                  </span>
                  <div className="font-poster text-2xl sm:text-3xl text-ink uppercase tracking-wide">
                    ENGINEER DOSSIER
                  </div>
                  <div className="text-xs font-mono text-posterRed font-bold">
                    RECORD ID: KMP-9995
                  </div>
                </div>

                <PosterStamp
                  text="KARTHIK M P • FULL STACK ENG"
                  subtext="VERIFIED"
                  year="2026"
                  size={84}
                  className="-mt-2 -mr-1"
                />
              </div>

              {/* Details List */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-start gap-3 p-2 bg-paper border border-ink/40">
                  <MapPin className="w-4 h-4 text-posterRed shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-ink/60 uppercase font-bold">LOCATION</div>
                    <div className="text-ink font-bold">Kerala, India (IST / UTC+5:30)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2 bg-paper border border-ink/40">
                  <Terminal className="w-4 h-4 text-posterRed shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-ink/60 uppercase font-bold">CURRENT STATUS</div>
                    <div className="text-ink font-bold">MCA Candidate & Full Stack Engineer</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2 bg-paper border border-ink/40">
                  <Mail className="w-4 h-4 text-posterRed shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-ink/60 uppercase font-bold">DIRECT DISPATCH</div>
                    <a
                      href="mailto:karthikmudappilakkil@gmail.com"
                      className="text-ink font-bold hover:text-posterRed underline decoration-posterRed underline-offset-2 break-all"
                    >
                      karthikmudappilakkil@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2 bg-paper border border-ink/40">
                  <Phone className="w-4 h-4 text-posterRed shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-ink/60 uppercase font-bold">VOICE / TELECOM</div>
                    <a
                      href="tel:+919995678189"
                      className="text-ink font-bold hover:text-posterRed"
                    >
                      +91 9995678189
                    </a>
                  </div>
                </div>
              </div>

              {/* Archival Note */}
              <div className="mt-5 pt-4 border-t-2 border-ink flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-1.5 text-posterRed font-bold">
                  <Award className="w-3.5 h-3.5" />
                  <span>PRODUCTION TESTED</span>
                </div>
                <span className="text-ink/60 font-bold uppercase tracking-widest">
                  REV. 2026.04
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

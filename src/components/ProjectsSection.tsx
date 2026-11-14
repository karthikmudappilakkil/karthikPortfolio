import { useState } from "react";
import { ExternalLink, ShoppingBag, Truck, ShieldAlert } from "lucide-react";
import { CornerCross, CornerTicks } from "@/components/ui/PosterMarks";
import { CornerDice } from "@/components/ui/CornerDice";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects = [
    {
      id: "minler-jewels",
      num: "EDITION 01",
      category: "ecommerce",
      title: "MINLER JEWELS",
      tagline: "Custom Shopify Silver Jewellery Storefront",
      domain: "minlerjewels.com",
      url: "https://minlerjewels.com",
      icon: ShoppingBag,
      diceVal: 1,
      description:
        "Custom-designed Shopify e-commerce storefront engineered from scratch using " +
        "Shopify Liquid for an upscale silver jewellery business, featuring responsive product " +
        "catalogs, custom variant pickers, and high-converting checkout flows.",
      highlights: [
        "Architected custom Liquid templates and modular schema settings from scratch.",
        "Engineered fluid responsive product galleries with zero mobile layout shift.",
        "Integrated custom cart drawer with frictionless checkout conversion flow.",
      ],
      tags: ["Shopify", "Shopify Liquid", "HTML5", "CSS3", "JavaScript"],
      colSpan: "lg:col-span-6",
    },
    {
      id: "aeriz-way",
      num: "EDITION 02",
      category: "business",
      title: "AERIZ WAY LOGISTICS",
      tagline: "Commercial Freight & Cargo Web Platform",
      domain: "aerizwaylogistics.com",
      url: "https://aerizwaylogistics.com",
      icon: Truck,
      diceVal: 2,
      description:
        "Responsive corporate website designed and developed to present freight forwarding, " +
        "cargo solutions, and logistics operations with high-clarity UX and conversion-focused " +
        "inquiry funnels.",
      highlights: [
        "Engineered responsive layout architectures with zero mobile layout shifts.",
        "Structured intuitive service catalogs and quick-inquiry booking channels.",
        "Optimized SEO meta structures and asset delivery pipeline for global load speeds.",
      ],
      tags: ["JavaScript", "HTML5", "CSS3", "UI/UX", "Responsive Design"],
      colSpan: "lg:col-span-6",
    },
    {
      id: "womens-safety",
      num: "EDITION 03",
      category: "academic",
      title: "WOMEN'S SAFETY & HEALTH PLATFORM",
      tagline: "Dual Web Portal & Native Android Application",
      badge: "Final Year Academic Project (Dec 2023)",
      icon: ShieldAlert,
      diceVal: 3,
      description:
        "Full-stack dual-platform solution encompassing a secure web portal and a native Android " +
        "application engineered to deliver interactive, vetted educational modules and emergency " +
        "safety mechanisms.",
      highlights: [
        "Built responsive web portal and cross-platform Android mobile application.",
        "Developed structured modules for progressive sexual health curriculum.",
        "Implemented swift emergency SOS triggers, contact alerts, and location utilities.",
      ],
      tags: ["Python", "Django", "Flutter", "Android", "REST APIs", "MySQL"],
      colSpan: "lg:col-span-12",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 border-b-2 border-ink bg-paper scroll-mt-16 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <CornerCross className="absolute -top-3 left-4 hidden sm:block" />
        <CornerCross className="absolute -top-3 right-4 hidden sm:block" />

        {/* Section Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-baseline justify-between
            gap-4 pb-4 border-b-2 border-ink mb-10"
        >
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-xs font-bold bg-posterRed text-paper px-2.5
                py-1 border-2 border-ink shadow-[2px_2px_0_#141414] uppercase tracking-wider"
            >
              SEC. 03
            </span>
            <h2
              className="font-poster text-4xl sm:text-6xl text-ink
                tracking-wide uppercase leading-none"
            >
              SELECTED WORKS
            </h2>
          </div>

          {/* Filter Index Tabs */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold">
            {[
              { id: "all", label: "ALL EDITIONS" },
              { id: "ecommerce", label: "E-COMMERCE" },
              { id: "business", label: "ENTERPRISE" },
              { id: "academic", label: "SYSTEMS" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 border-2 border-ink text-xs transition-all
                  ${
                    activeFilter === tab.id
                      ? "bg-posterRed text-paper shadow-[2px_2px_0_#141414]"
                      : "bg-paper text-ink hover:bg-paperDark"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Broadside Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.id}
                className={`${p.colSpan} poster-card bg-white p-6 sm:p-8 relative flex flex-col justify-between`}
              >
                <CornerTicks />

                <div>
                  {/* Top Bar with Number, Tag, and Corner Dice */}
                  <div className="flex items-center justify-between gap-4 pb-4 border-b-2 border-ink mb-5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold bg-ink text-paper px-2.5 py-1 uppercase tracking-wider">
                        {p.num}
                      </span>
                      {p.badge && (
                        <span className="font-mono text-[11px] font-bold text-posterRed uppercase tracking-wider border border-posterRed px-2 py-0.5">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <CornerDice initialValue={p.diceVal} size={36} />
                  </div>

                  {/* Title & Tagline */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-poster text-3xl sm:text-4xl text-ink uppercase tracking-wide leading-none">
                        {p.title}
                      </h3>
                      <div className="font-mono text-xs text-posterRed font-bold uppercase mt-1 tracking-wider">
                        // {p.tagline}
                      </div>
                    </div>

                    <div className="w-10 h-10 bg-paper border-2 border-ink shadow-[2px_2px_0_#141414] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-ink" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-ink/85 leading-relaxed font-normal mb-6">
                    {p.description}
                  </p>

                  {/* Perforated Divider */}
                  <div className="w-full border-t-2 border-dashed border-ink/40 my-4 relative">
                    <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-ink/40 font-mono text-xs">
                      ✂
                    </span>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    <div className="font-mono text-[11px] font-bold text-ink uppercase tracking-wider">
                      SPECIFICATION LOG:
                    </div>
                    {p.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-mono text-ink/85">
                        <span className="text-posterRed font-bold mt-0.5">▶</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Tags and Action Button */}
                <div className="pt-4 border-t-2 border-ink flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-mono font-bold bg-[#ede8e0]
                          border border-ink/70 text-ink"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="poster-btn-primary py-2 px-4 text-xs font-mono inline-flex items-center justify-center gap-1.5 shrink-0"
                    >
                      <span>VISIT LIVE {p.domain}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { ExternalLink, ShoppingBag, Truck, ShieldAlert } from "lucide-react";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects = [
    {
      id: "minler-jewels",
      num: "EDITION 01",
      category: "ecommerce",
      title: "Minler Jewels",
      tagline: "Custom Shopify Silver Jewellery Storefront",
      domain: "minlerjewels.com",
      url: "https://minlerjewels.com",
      icon: ShoppingBag,
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
      title: "Aeriz Way Logistics",
      tagline: "Commercial Freight & Cargo Web Platform",
      domain: "aerizwaylogistics.com",
      url: "https://aerizwaylogistics.com",
      icon: Truck,
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
      title: "Sex Education & Women's Safety App",
      tagline: "Dual Web Portal & Native Android Application",
      badge: "Final Year Academic Project (Dec 2023)",
      icon: ShieldAlert,
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
      className="py-16 sm:py-24 border-b-[1.5px] border-ink bg-paper scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-baseline justify-between
            gap-4 pb-4 border-b-[1.5px] border-ink mb-10"
        >
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-xs font-bold bg-posterRed text-paper px-2
                py-0.5 border border-ink"
            >
              SEC. 03
            </span>
            <h2
              className="font-mono font-bold text-2xl sm:text-3xl text-ink
                tracking-tight uppercase"
            >
              SELECTED WORKS
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "ALL EDITIONS" },
              { id: "ecommerce", label: "E-COMMERCE" },
              { id: "business", label: "COMMERCIAL" },
              { id: "academic", label: "ACADEMIC & MOBILE" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1 text-xs font-mono font-bold border-[1.5px]
                  border-ink transition-all ${
                    activeFilter === tab.id
                      ? "bg-posterRed text-paper shadow-poster -translate-y-0.5"
                      : "bg-paper text-ink hover:bg-paperDark"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className={`${project.colSpan} poster-card p-6 sm:p-8 bg-white
                  border-[1.5px] border-ink flex flex-col justify-between`}
              >
                <div>
                  {/* Top Meta */}
                  <div
                    className="flex flex-wrap items-center justify-between gap-2 pb-4
                      border-b-[1.5px] border-ink"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-posterRed">
                        {project.num}
                      </span>
                      <span className="text-ink/40">•</span>
                      <span className="font-mono text-xs text-ink/70 uppercase">
                        {project.category}
                      </span>
                    </div>

                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs
                          font-bold bg-paper text-ink border border-ink hover:bg-posterRed
                          hover:text-paper transition-colors"
                        aria-label={`Visit ${project.title}`}
                      >
                        <span>{project.domain}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      project.badge && (
                        <span
                          className="font-mono text-xs font-bold text-posterRed bg-posterRed/10
                            border border-posterRed/40 px-2 py-0.5"
                        >
                          {project.badge}
                        </span>
                      )
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-5 flex items-start gap-4">
                    <div className="p-3 bg-paper border border-ink text-posterRed shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3
                        className="font-mono font-bold text-xl sm:text-2xl text-ink
                          tracking-tight uppercase"
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono font-semibold text-posterRed mt-0.5">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-ink/80 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 space-y-2">
                    {project.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/85"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-posterRed shrink-0 mt-1.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="mt-6 pt-4 border-t-[1.5px] border-ink flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono font-semibold bg-paper
                        text-ink border border-ink/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

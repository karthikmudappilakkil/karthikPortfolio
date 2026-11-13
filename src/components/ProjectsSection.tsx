import { useState } from "react";
import { FolderGit2, ExternalLink, ShieldAlert, ShoppingBag, Truck } from "lucide-react";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects = [
    {
      id: "minler-jewels",
      category: "ecommerce",
      title: "Minler Jewels",
      tagline: "Custom Shopify Silver Jewellery Storefront",
      domain: "minlerjewels.com",
      url: "https://minlerjewels.com",
      icon: ShoppingBag,
      accentBorder: "border-accent",
      description:
        "Custom-designed Shopify e-commerce storefront engineered from scratch " +
        "using Shopify Liquid for an upscale silver jewellery brand, featuring " +
        "responsive product catalogs, seamless checkout flow, and custom layout logic.",
      highlights: [
        "Architected custom Liquid templates and modular schema settings.",
        "Optimized mobile browsing speed and fluid responsive product galleries.",
        "Integrated custom cart drawer and streamlined high-converting checkout.",
      ],
      tags: ["Shopify", "Shopify Liquid", "HTML5", "CSS3", "JavaScript"],
      colSpan: "lg:col-span-6",
    },
    {
      id: "aeriz-way",
      category: "business",
      title: "Aeriz Way Logistics",
      tagline: "Corporate Freight & Supply Chain Platform",
      domain: "aerizwaylogistics.com",
      url: "https://aerizwaylogistics.com",
      icon: Truck,
      accentBorder: "border-charcoal",
      description:
        "Responsive commercial web portal designed and developed to showcase " +
        "logistics operations, cargo services, freight forwarding solutions, " +
        "and lead-generation contact funnels with high-clarity UX.",
      highlights: [
        "Engineered responsive layout architectures with zero mobile layout shifts.",
        "Structured intuitive service catalog and quick-inquiry booking channels.",
        "Optimized SEO meta structures and asset delivery pipeline.",
      ],
      tags: ["JavaScript", "HTML5", "CSS3", "UI/UX", "Responsive Design"],
      colSpan: "lg:col-span-6",
    },
    {
      id: "womens-safety",
      category: "academic",
      title: "Sex Education & Women's Safety App",
      tagline: "Full-Stack Web & Android Mobile System",
      badge: "Final Year Academic Project (Dec 2023)",
      icon: ShieldAlert,
      accentBorder: "border-charcoal",
      description:
        "Comprehensive full-stack dual-platform solution encompassing a secure " +
        "web portal and a native Android application engineered to deliver " +
        "interactive, vetted educational modules and emergency safety mechanisms.",
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
    <section id="projects" className="py-12 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 brutal-pill mb-2">
            <FolderGit2 className="w-3.5 h-3.5 text-accent" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-charcoal">
            Selected Projects
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: "all", label: "All Projects" },
            { id: "ecommerce", label: "E-Commerce" },
            { id: "business", label: "Commercial" },
            { id: "academic", label: "Full-Stack Apps" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-[6px]
                border-[1.5px] border-charcoal transition-all ${
                  activeFilter === tab.id
                    ? "bg-accent text-white shadow-brutal translate-y-[-1px]"
                    : "bg-surface text-charcoal hover:bg-slatePill"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {filteredProjects.map((project) => {
          const IconComponent = project.icon;
          return (
            <div
              key={project.id}
              className={`${project.colSpan} brutal-card p-6 sm:p-8 flex flex-col
                justify-between bg-white relative group`}
            >
              <div>
                {/* Header row */}
                <div
                  className="flex flex-wrap items-center justify-between gap-2
                    pb-4 border-b-[1.5px] border-charcoal/15"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2.5 rounded-[6px] bg-slatePill border-[1.5px]
                        border-charcoal text-charcoal group-hover:bg-accent
                        group-hover:text-white transition-colors"
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-charcoal tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-charcoal/70">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px]
                        bg-slatePill hover:bg-accent hover:text-white text-xs font-mono
                        font-semibold text-charcoal border-[1.5px] border-charcoal
                        transition-colors"
                      aria-label={`Visit ${project.title}`}
                    >
                      <span>{project.domain}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    project.badge && (
                      <span
                        className="font-mono text-[11px] font-semibold text-accent
                          bg-accent-light px-2.5 py-1 rounded-[4px] border border-accent/40"
                      >
                        {project.badge}
                      </span>
                    )
                  )}
                </div>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-charcoal/80 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 space-y-2">
                  {project.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs sm:text-sm text-charcoal/85"
                    >
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div
                className="mt-6 pt-4 border-t-[1.5px] border-charcoal/15
                  flex flex-wrap gap-1.5"
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono font-medium
                      bg-slatePill text-charcoal rounded-[4px] border border-charcoal/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

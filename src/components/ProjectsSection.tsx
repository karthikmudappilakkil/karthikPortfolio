import { useState } from "react";
import { ExternalLink, ShieldAlert, ShoppingBag, Truck } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

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
      description:
        "Custom-designed Shopify e-commerce storefront engineered from scratch using " +
        "Shopify Liquid for an upscale silver jewellery business, featuring responsive " +
        "product catalogs, custom variant pickers, and high-converting checkout flows.",
      highlights: [
        "Architected custom Liquid templates and modular schema settings.",
        "Optimized mobile browsing speed and fluid responsive product galleries.",
        "Integrated custom cart drawer and streamlined checkout experience.",
      ],
      tags: ["Shopify", "Shopify Liquid", "HTML5", "CSS3", "JavaScript"],
      colSpan: "lg:col-span-6",
    },
    {
      id: "aeriz-way",
      category: "business",
      title: "Aeriz Way Logistics",
      tagline: "Freight Forwarding & Supply Chain Portal",
      domain: "aerizwaylogistics.com",
      url: "https://aerizwaylogistics.com",
      icon: Truck,
      description:
        "Responsive corporate website designed and developed to present freight " +
        "forwarding and commercial logistics services with high-clarity UX and " +
        "conversion-focused inquiry funnels.",
      highlights: [
        "Engineered responsive layout architectures with zero mobile layout shifts.",
        "Structured intuitive service catalogs and quick-inquiry booking channels.",
        "Optimized SEO meta structures and asset delivery pipeline.",
      ],
      tags: ["JavaScript", "HTML5", "CSS3", "UI/UX", "Responsive Design"],
      colSpan: "lg:col-span-6",
    },
    {
      id: "womens-safety",
      category: "academic",
      title: "Sex Education & Women's Safety App",
      tagline: "Dual Web & Android Mobile System",
      badge: "Final Year Academic Project (Dec 2023)",
      icon: ShieldAlert,
      description:
        "Full-stack website and Android application featuring interactive educational " +
        "modules and emergency safety tools to promote awareness, personal safety, and " +
        "instant emergency response.",
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
    <section id="projects" className="py-16 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <div className="text-xs font-mono font-medium text-accent uppercase tracking-wider mb-2">
            02 // Portfolio
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            Selected Projects
          </h2>
          <p className="mt-2 text-sm text-zinc-600 leading-relaxed font-normal">
            Production storefronts, commercial enterprise portals, and academic software.
          </p>
        </div>

        {/* Linear-Style Filter Pills */}
        <div
          className="flex flex-wrap items-center gap-1.5 p-1 rounded-full
            bg-zinc-100/80 border border-zinc-200/80"
        >
          {[
            { id: "all", label: "All" },
            { id: "ecommerce", label: "E-Commerce" },
            { id: "business", label: "Commercial" },
            { id: "academic", label: "Full-Stack Apps" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1 text-xs font-mono rounded-full transition-all ${
                activeFilter === tab.id
                  ? "bg-white text-zinc-950 font-semibold shadow-sm"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {filteredProjects.map((project) => {
          const IconComponent = project.icon;
          return (
            <SpotlightCard
              key={project.id}
              className={`${project.colSpan} p-6 sm:p-8 flex flex-col justify-between`}
              spotlightColor="rgba(37, 99, 235, 0.07)"
            >
              <div>
                {/* Header row */}
                <div
                  className="flex flex-wrap items-center justify-between gap-3
                    pb-4 border-b border-zinc-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-zinc-100 text-zinc-800">
                      <IconComponent className="w-5 h-5 text-zinc-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-zinc-500">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                        text-xs font-mono text-zinc-600 hover:text-accent bg-zinc-50
                        hover:bg-zinc-100 border border-zinc-200/80 transition-colors"
                      aria-label={`Visit ${project.title}`}
                    >
                      <span>{project.domain}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    project.badge && (
                      <span
                        className="font-mono text-[11px] font-medium text-accent
                          bg-accent/10 px-2.5 py-0.5 rounded-full"
                      >
                        {project.badge}
                      </span>
                    )
                  )}
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-zinc-600 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 space-y-2">
                  {project.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700"
                    >
                      <span className="text-accent font-semibold mt-0.5">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs font-mono text-zinc-600 bg-zinc-50
                      border border-zinc-200/80 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}

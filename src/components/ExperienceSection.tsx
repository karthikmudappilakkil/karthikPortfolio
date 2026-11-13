import { ExternalLink, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function ExperienceSection() {
  const experiences = {
    featured: {
      role: "Full Stack Developer",
      company: "Necttos",
      url: "https://necttos.com",
      period: "2025 – 2026",
      type: "Product Engineering",
      summary:
        "Engineered core modules for a product-based college ERP and " +
        "institutional management software (necttos.com) powering workflows.",
      achievements: [
        "Built responsive web and mobile ERP features using React.js, Node.js, " +
          "Fastify, and MongoDB.",
        "Developed high-throughput REST APIs and cross-platform mobile modules " +
          "with React Native and Expo.",
        "Implemented real-time synchronization features using Socket.io and built " +
          "collaborative PDF viewing & annotation tools.",
      ],
      stack: [
        "React.js",
        "React Native",
        "Expo",
        "Fastify",
        "Node.js",
        "MongoDB",
        "Socket.io",
      ],
    },
    secondaries: [
      {
        role: "Full Stack Development Training (MERN & MEAN)",
        company: "Luminar Technolab",
        location: "Ernakulam",
        period: "Sep 2024 – Mar 2025",
        summary:
          "Intensive hands-on training focused on full-stack web architectures, " +
          "RESTful API design, database modeling, and dynamic frontend components.",
        highlights: [
          "Built modular RESTful APIs using Express and Node.js with token authentication.",
          "Engineered dynamic frontend user interfaces with React and Angular, focusing " +
            "on performance.",
        ],
        stack: ["React", "Angular", "Node.js", "Express", "MongoDB"],
      },
      {
        role: "Software Development Internship",
        company: "Regional Technology",
        location: "Kozhikode",
        period: "Sep 2023 – Dec 2023",
        summary:
          "Collaborated in an Agile development environment to engineer full-stack " +
          "web and mobile systems.",
        highlights: [
          "Developed web backend services and mobile applications using Python Django and Flutter.",
          "Practiced structured Git version control workflows, automated branching, " +
            "and code reviews.",
        ],
        stack: ["Python", "Django", "Flutter", "Git", "Agile"],
      },
    ],
  };

  return (
    <section id="experience" className="py-16 scroll-mt-24">
      {/* Section Header */}
      <div className="max-w-2xl mb-10">
        <div className="text-xs font-mono font-medium text-accent uppercase tracking-wider mb-2">
          01 // Experience
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
          Professional Track Record
        </h2>
        <p className="mt-2 text-sm text-zinc-600 leading-relaxed font-normal">
          Building production-grade web systems, mobile applications, and scalable backend services.
        </p>
      </div>

      {/* Experience Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Featured Flagship Experience: lg:col-span-7 */}
        <SpotlightCard
          className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between"
          spotlightColor="rgba(37, 99, 235, 0.08)"
        >
          <div>
            {/* Top Meta */}
            <div
              className="flex flex-wrap items-center justify-between gap-2 pb-4
                border-b border-zinc-100"
            >
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span
                  className="font-mono text-xs font-medium uppercase tracking-wider
                    text-zinc-500"
                >
                  Featured Product Role
                </span>
              </div>
              <span
                className="font-mono text-xs text-zinc-500 bg-zinc-100 px-2.5
                  py-0.5 rounded-full"
              >
                {experiences.featured.period}
              </span>
            </div>

            {/* Role & Company Link */}
            <div className="mt-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                  {experiences.featured.role}
                </h3>
                <a
                  href={experiences.featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-sm font-semibold
                    text-accent hover:text-accent-hover transition-colors"
                >
                  <span>{experiences.featured.company}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="mt-3 text-sm text-zinc-600 leading-relaxed font-normal">
                {experiences.featured.summary}
              </p>

              {/* Bullet Points */}
              <div className="mt-5 space-y-2.5">
                {experiences.featured.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="mt-6 pt-5 border-t border-zinc-100">
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
              Technologies Used
            </div>
            <div className="flex flex-wrap gap-1.5">
              {experiences.featured.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono text-zinc-700 bg-zinc-50
                    border border-zinc-200/80 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </SpotlightCard>

        {/* Secondary Roles Stacked: lg:col-span-5 */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {experiences.secondaries.map((exp, idx) => (
            <SpotlightCard
              key={idx}
              className="p-6 flex-1 flex flex-col justify-between"
              spotlightColor="rgba(24, 24, 27, 0.04)"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                  <span className="font-mono text-xs font-medium text-zinc-500">
                    {exp.company} • {exp.location}
                  </span>
                  <span
                    className="font-mono text-[11px] text-zinc-500 bg-zinc-100
                      px-2 py-0.5 rounded-full"
                  >
                    {exp.period}
                  </span>
                </div>

                <h4 className="mt-3 text-base font-semibold text-zinc-950">
                  {exp.role}
                </h4>

                <p className="mt-2 text-xs text-zinc-600 leading-relaxed font-normal">
                  {exp.summary}
                </p>

                <div className="mt-3 space-y-2">
                  {exp.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2">
                      <span className="text-accent font-semibold text-xs mt-0.5">•</span>
                      <span className="text-xs text-zinc-600 leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 flex flex-wrap gap-1.5">
                {exp.stack.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[11px] font-mono bg-zinc-50 text-zinc-600
                      rounded border border-zinc-200/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

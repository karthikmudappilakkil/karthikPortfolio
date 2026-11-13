import { Briefcase, Calendar, ExternalLink, CheckCircle2 } from "lucide-react";

export function ExperienceSection() {
  const experiences = {
    featured: {
      role: "Full Stack Developer",
      company: "Necttos",
      url: "https://necttos.com",
      period: "2025 – 2026",
      type: "Product Engineering",
      summary:
        "Engineered key modules for a flagship product-based college ERP " +
        "and institutional management platform serving academic institutions.",
      achievements: [
        "Built responsive web and mobile ERP features using React.js, Node.js, " +
          "Fastify, and MongoDB.",
        "Developed high-throughput REST APIs and cross-platform mobile modules " +
          "using React Native and Expo.",
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
          "Intensive hands-on engineering program focused on full-stack web " +
          "architectures, RESTful API design, database modeling, and dynamic frontend components.",
        highlights: [
          "Built modular RESTful APIs using Express and Node.js with secure token authentication.",
          "Engineered dynamic frontend user interfaces with React and Angular, focusing on " +
            "performance optimization.",
        ],
        stack: ["React", "Angular", "Node.js", "Express", "MongoDB"],
      },
      {
        role: "Software Development Internship",
        company: "Regional Technology",
        location: "Kozhikode",
        period: "Sep 2023 – Dec 2023",
        summary:
          "Collaborated in an Agile development environment to engineer " +
          "full-stack web and mobile systems.",
        highlights: [
          "Developed web backend services and mobile applications using Python Django and Flutter.",
          "Practiced structured Git version control workflows, automated branching, and " +
            "team code reviews.",
        ],
        stack: ["Python", "Django", "Flutter", "Git", "Agile"],
      },
    ],
  };

  return (
    <section id="experience" className="py-12 scroll-mt-24">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 brutal-pill mb-2">
            <Briefcase className="w-3.5 h-3.5 text-accent" />
            <span>Career & Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-charcoal">
            Work Experience
          </h2>
        </div>
      </div>

      {/* Experience Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Featured Flagship Experience: lg:col-span-7 */}
        <div
          className="lg:col-span-7 brutal-card p-6 sm:p-8 flex flex-col
            justify-between relative overflow-hidden bg-white"
        >
          {/* Top Label */}
          <div
            className="flex flex-wrap items-center justify-between gap-2
              pb-4 border-b-[1.5px] border-charcoal/15"
          >
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-charcoal">
                Featured Experience
              </span>
            </div>
            <div
              className="inline-flex items-center gap-1.5 font-mono text-xs
                text-charcoal/70 bg-slatePill px-2.5 py-1 rounded-[4px] border border-charcoal/30"
            >
              <Calendar className="w-3.5 h-3.5 text-charcoal" />
              <span>{experiences.featured.period}</span>
            </div>
          </div>

          {/* Role & Company */}
          <div className="mt-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal">
                {experiences.featured.role}
              </h3>
              <a
                href={experiences.featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-sm
                  font-semibold text-accent hover:underline decoration-charcoal underline-offset-2"
              >
                <span>{experiences.featured.company}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="mt-3 text-sm sm:text-base text-charcoal/80 leading-relaxed">
              {experiences.featured.summary}
            </p>

            {/* Key Deliverables Bullet Points */}
            <div className="mt-5 space-y-3">
              {experiences.featured.achievements.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal/90 leading-snug font-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-6 pt-5 border-t-[1.5px] border-charcoal/15">
            <div className="text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-2">
              Technologies Utilized
            </div>
            <div className="flex flex-wrap gap-1.5">
              {experiences.featured.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium
                    bg-slatePill text-charcoal rounded-[4px] border border-charcoal/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Experiences: lg:col-span-5 Stacked */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {experiences.secondaries.map((exp, idx) => (
            <div
              key={idx}
              className="brutal-card p-6 flex-1 flex flex-col justify-between bg-white"
            >
              <div>
                <div
                  className="flex items-center justify-between pb-3
                    border-b-[1.5px] border-charcoal/15"
                >
                  <span
                    className="font-mono text-xs font-bold uppercase tracking-wider
                      text-charcoal/70"
                  >
                    {exp.company} • {exp.location}
                  </span>
                  <span
                    className="font-mono text-xs text-charcoal/70 bg-slatePill
                      px-2 py-0.5 rounded-[4px] border border-charcoal/30"
                  >
                    {exp.period}
                  </span>
                </div>

                <h4 className="mt-3 text-base sm:text-lg font-bold text-charcoal">
                  {exp.role}
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                  {exp.summary}
                </p>

                <div className="mt-3 space-y-2">
                  {exp.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2">
                      <span className="text-accent font-bold text-xs mt-0.5">•</span>
                      <span className="text-xs text-charcoal/80 leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="mt-4 pt-3 border-t-[1.5px] border-charcoal/15
                  flex flex-wrap gap-1.5"
              >
                {exp.stack.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[11px] font-mono bg-slatePill
                      text-charcoal rounded-[4px] border border-charcoal/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

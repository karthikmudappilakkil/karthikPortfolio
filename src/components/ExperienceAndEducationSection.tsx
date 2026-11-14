import { ExternalLink, CheckCircle2, GraduationCap, Briefcase } from "lucide-react";
import { CornerCross, CornerTicks } from "@/components/ui/PosterMarks";
import { CornerDice } from "@/components/ui/CornerDice";
import { PosterStamp } from "@/components/ui/PosterStamp";

export function ExperienceAndEducationSection() {
  const experiences = [
    {
      role: "FULL STACK DEVELOPER",
      company: "NECTTOS",
      url: "https://necttos.com",
      period: "2025 – 2026",
      status: "FEATURED PRODUCTION CASEFILE",
      location: "Product Engineering",
      summary:
        "Engineered key modules for flagship product-based college ERP and institutional " +
        "management software (necttos.com) powering administration and academics.",
      achievements: [
        "Built responsive web and mobile ERP features using React.js, Node.js, Fastify, " +
          "and MongoDB.",
        "Developed high-throughput REST APIs and cross-platform mobile modules with " +
          "React Native and Expo.",
        "Implemented real-time synchronization features using Socket.io and collaborative " +
          "PDF viewing & annotation tools.",
      ],
      stack: ["React.js", "React Native", "Expo", "Fastify", "Node.js", "MongoDB", "Socket.io"],
      featured: true,
    },
    {
      role: "FULL STACK DEVELOPMENT TRAINING (MERN & MEAN)",
      company: "LUMINAR TECHNOLAB",
      period: "SEP 2024 – MAR 2025",
      status: "SPECIALIZED IMMERSION",
      location: "Ernakulam",
      summary:
        "Intensive hands-on program focused on full-stack web architectures, RESTful API design, " +
        "database modeling, and dynamic frontend components.",
      achievements: [
        "Built modular RESTful APIs using Express and Node.js with secure " +
          "token-based authentication.",
        "Engineered dynamic frontend user interfaces with React and Angular, focusing on " +
          "performance tuning.",
      ],
      stack: ["React", "Angular", "Node.js", "Express", "MongoDB"],
      featured: false,
    },
    {
      role: "SOFTWARE DEVELOPMENT INTERNSHIP",
      company: "REGIONAL TECHNOLOGY",
      period: "SEP 2023 – DEC 2023",
      status: "INDUSTRY APPRENTICESHIP",
      location: "Kozhikode",
      summary:
        "Collaborated in an Agile development environment to engineer full-stack web " +
        "and mobile systems.",
      achievements: [
        "Developed web backend services and mobile applications using Python Django and Flutter.",
        "Practiced structured Git version control workflows, automated branching, and " +
          "code reviews.",
      ],
      stack: ["Python", "Django", "Flutter", "Git", "Agile"],
      featured: false,
    },
  ];

  const educations = [
    {
      degree: "MASTER OF COMPUTER APPLICATIONS (MCA)",
      institution: "Christ College of Engineering, Irinjalakuda",
      status: "CURRENTLY PURSUING",
      period: "PRESENT",
      note:
        "Advanced distributed computing, modern software architectures, algorithms, " +
        "and mobile frameworks.",
    },
    {
      degree: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
      institution: "Little Flower Institute of Social Sciences and Health (LISSAH), Calicut",
      status: "GRADUATED",
      period: "2021 – 2024",
      note:
        "Foundational coursework in data structures, algorithms, database systems, " +
        "and core software principles.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 sm:py-24 border-b-2 border-ink bg-paper scroll-mt-16 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <CornerCross className="absolute -top-3 left-4 hidden sm:block" />
        <CornerCross className="absolute -top-3 right-4 hidden sm:block" />

        {/* Section Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-baseline justify-between
            gap-3 pb-4 border-b-2 border-ink mb-12"
        >
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-xs font-bold bg-posterRed text-paper px-2.5
                py-1 border-2 border-ink shadow-[2px_2px_0_#141414] uppercase tracking-wider"
            >
              SEC. 04
            </span>
            <h2
              className="font-poster text-4xl sm:text-6xl text-ink
                tracking-wide uppercase leading-none"
            >
              CAREER & EDUCATION
            </h2>
          </div>
          <span className="font-mono text-xs text-posterRed uppercase font-bold tracking-widest">
            [CHRONOLOGICAL RECORD]
          </span>
        </div>

        {/* Experience Timeline Broadside */}
        <div className="space-y-8 mb-16">
          <div className="flex items-center gap-2 pb-2 border-b-2 border-ink text-sm font-mono font-bold uppercase text-ink">
            <Briefcase className="w-4 h-4 text-posterRed" />
            <span>ENGINEERING EXPERIENCE</span>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`poster-card p-6 sm:p-8 relative ${
                  exp.featured ? "bg-white border-2 border-ink" : "bg-[#ede8e0]"
                }`}
              >
                <CornerTicks />

                {/* Top Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-ink mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs font-bold bg-posterRed text-paper px-2 py-0.5 uppercase tracking-wider">
                        {exp.status}
                      </span>
                      <span className="font-mono text-xs text-ink/70 font-bold">
                        // {exp.period}
                      </span>
                    </div>
                    <h3 className="font-poster text-3xl sm:text-4xl text-ink uppercase tracking-wide leading-none">
                      {exp.role}
                    </h3>
                    <div className="font-mono text-sm text-posterRed font-bold mt-1">
                      @ {exp.company} — {exp.location}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-start sm:self-auto">
                    {exp.featured && (
                      <PosterStamp
                        text="NECTTOS ERP • VERIFIED PRODUCTION"
                        subtext="SYSTEM"
                        year="2026"
                        size={80}
                      />
                    )}
                    <CornerDice initialValue={i + 1} size={36} />
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-ink/90 leading-relaxed font-normal mb-5">
                  {exp.summary}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-6">
                  {exp.achievements.map((ach, j) => (
                    <div key={j} className="flex items-start gap-2.5 text-xs font-mono text-ink/85">
                      <CheckCircle2 className="w-4 h-4 text-posterRed shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Footer with Stack and Link */}
                <div className="pt-4 border-t-2 border-ink flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono font-bold bg-paper border border-ink/70 text-ink"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.url && (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="poster-btn-secondary py-1.5 px-3 text-xs font-mono inline-flex items-center gap-1.5 self-start sm:self-auto"
                    >
                      <span>VISIT NECTTOS.COM</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Credentials Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b-2 border-ink text-sm font-mono font-bold uppercase text-ink">
            <GraduationCap className="w-4 h-4 text-posterRed" />
            <span>ACADEMIC FOUNDATION & DEGREES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educations.map((edu, i) => (
              <div key={i} className="poster-card p-6 bg-white relative">
                <CornerTicks />
                <div className="flex items-start justify-between gap-3 pb-3 border-b-2 border-ink mb-3">
                  <div>
                    <span className="font-mono text-[10px] text-posterRed font-bold uppercase tracking-widest">
                      {edu.status} // {edu.period}
                    </span>
                    <h4 className="font-poster text-2xl sm:text-3xl text-ink uppercase tracking-wide leading-tight mt-1">
                      {edu.degree}
                    </h4>
                  </div>
                  <CornerDice initialValue={i + 4} size={32} />
                </div>
                <div className="font-mono text-xs font-bold text-ink mb-2">
                  {edu.institution}
                </div>
                <p className="text-xs font-mono text-ink/80 leading-relaxed">
                  {edu.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

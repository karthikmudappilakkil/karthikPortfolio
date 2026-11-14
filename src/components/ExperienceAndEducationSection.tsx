import { ExternalLink, CheckCircle2, GraduationCap, Briefcase } from "lucide-react";

export function ExperienceAndEducationSection() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Necttos",
      url: "https://necttos.com",
      period: "2025 – 2026",
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
    },
    {
      role: "Full Stack Development Training (MERN & MEAN)",
      company: "Luminar Technolab",
      period: "Sep 2024 – Mar 2025",
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
    },
    {
      role: "Software Development Internship",
      company: "Regional Technology",
      period: "Sep 2023 – Dec 2023",
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
    },
  ];

  const educations = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Christ College of Engineering, Irinjalakuda",
      status: "Currently Pursuing",
      period: "Present",
      note:
        "Advanced computing, distributed systems, software engineering methodologies, " +
        "and mobile frameworks.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution:
        "Little Flower Institute of Social Sciences and Health (LISSAH), " +
        "University of Calicut",
      status: "Graduated",
      period: "2021 – 2024",
      note:
        "Foundational coursework in algorithms, data structures, database management systems, " +
        "and programming principles.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 sm:py-24 border-b-[1.5px] border-ink bg-paper scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-baseline justify-between
            gap-2 pb-4 border-b-[1.5px] border-ink mb-12"
        >
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-xs font-bold bg-posterRed text-paper px-2
                py-0.5 border border-ink"
            >
              SEC. 04
            </span>
            <h2
              className="font-mono font-bold text-2xl sm:text-3xl text-ink
                tracking-tight uppercase"
            >
              CAREER & PEDAGOGY
            </h2>
          </div>
          <span className="font-mono text-xs text-posterRed uppercase font-bold tracking-wider">
            TIMELINE & ACADEMIC RECORDS
          </span>
        </div>

        {/* 2-Column Split: Experience (left) & Education (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Work Experience Timeline: lg:col-span-7 */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 pb-3 border-b-[1.5px] border-ink mb-6">
              <Briefcase className="w-4 h-4 text-posterRed" />
              <h3 className="font-mono font-bold text-sm tracking-wider uppercase text-ink">
                INDUSTRY APPOINTMENTS
              </h3>
            </div>

            <div className="space-y-6 relative">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="poster-card p-6 bg-white border-[1.5px] border-ink relative"
                >
                  {/* Top Bar */}
                  <div
                    className="flex flex-wrap items-center justify-between gap-2 pb-3
                      border-b-[1.5px] border-ink"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-posterRed">
                        #{idx + 1}
                      </span>
                      <span className="font-mono text-xs font-bold text-ink uppercase">
                        {exp.company}
                      </span>
                      {exp.location && (
                        <span className="font-mono text-[11px] text-ink/60">
                          ({exp.location})
                        </span>
                      )}
                    </div>
                    <span
                      className="font-mono text-xs font-bold text-ink bg-paper px-2 py-0.5
                        border border-ink/40"
                    >
                      {exp.period}
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-mono font-bold text-lg text-ink">
                        {exp.role}
                      </h4>
                      {exp.url && (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-xs font-bold
                            text-posterRed hover:underline"
                        >
                          <span>necttos.com</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                    <p className="mt-2 text-xs sm:text-sm text-ink/80 leading-relaxed font-normal">
                      {exp.summary}
                    </p>

                    <div className="mt-3.5 space-y-2">
                      {exp.achievements.map((item, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-ink/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-posterRed shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-ink/20 flex flex-wrap gap-1.5">
                    {exp.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono font-semibold bg-paper
                          text-ink border border-ink/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline: lg:col-span-5 */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 pb-3 border-b-[1.5px] border-ink mb-6">
              <GraduationCap className="w-4 h-4 text-posterRed" />
              <h3 className="font-mono font-bold text-sm tracking-wider uppercase text-ink">
                ACADEMIC CREDENTIALS
              </h3>
            </div>

            <div className="space-y-6">
              {educations.map((edu, idx) => (
                <div
                  key={idx}
                  className="poster-card p-6 bg-paperDark border-[1.5px] border-ink flex
                    flex-col justify-between"
                >
                  <div>
                    <div
                      className="flex items-center justify-between gap-2 pb-3
                        border-b-[1.5px] border-ink"
                    >
                      <span
                        className="font-mono text-xs font-bold text-paper bg-posterRed px-2
                          py-0.5 border border-ink"
                      >
                        {edu.status}
                      </span>
                      <span className="font-mono text-xs font-bold text-ink">
                        {edu.period}
                      </span>
                    </div>

                    <h4
                      className="mt-4 font-mono font-bold text-base sm:text-lg text-ink
                        leading-snug"
                    >
                      {edu.degree}
                    </h4>

                    <p className="mt-1 font-mono text-xs font-semibold text-posterRed">
                      {edu.institution}
                    </p>

                    <p className="mt-3 text-xs text-ink/80 leading-relaxed font-normal">
                      {edu.note}
                    </p>
                  </div>

                  <div
                    className="mt-5 pt-3 border-t-[1.5px] border-ink/40 flex items-center
                      justify-between text-[11px] font-mono text-ink/70"
                  >
                    <span>ACADEMIC VERIFICATION</span>
                    <span className="font-bold text-posterRed">AUTHENTIC</span>
                  </div>
                </div>
              ))}

              {/* Engineering Colophon Box */}
              <div className="poster-card p-5 bg-ink text-paper border-[1.5px] border-ink">
                <div
                  className="flex items-center gap-2 text-posterRed text-xs font-mono
                    font-bold uppercase tracking-wider mb-2"
                >
                  <span className="w-2 h-2 rounded-full bg-posterRed" />
                  <span>CORE ENGINEERING STANDARD</span>
                </div>
                <p className="text-xs text-paper/90 leading-relaxed font-mono">
                  "Every system written must be legible, testable, and capable of operating under
                  high production load without undocumented dependencies."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

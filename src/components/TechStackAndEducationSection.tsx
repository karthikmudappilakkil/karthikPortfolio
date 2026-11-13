import {
  Code,
  GraduationCap,
  Layers,
  Database,
  Smartphone,
  Wrench,
  CheckCircle,
} from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

export function TechStackAndEducationSection() {
  const stackCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["JavaScript", "Python", "Dart"],
    },
    {
      title: "Frontend & Mobile",
      icon: Smartphone,
      skills: [
        "React.js",
        "React Native",
        "Expo",
        "Flutter",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Angular",
      ],
    },
    {
      title: "Backend & Databases",
      icon: Database,
      skills: [
        "Node.js",
        "Express.js",
        "Fastify",
        "Django",
        "REST APIs",
        "MongoDB",
        "MySQL",
        "SQL",
      ],
    },
    {
      title: "E-Commerce & Developer Tools",
      icon: Wrench,
      skills: ["Shopify", "Shopify Liquid", "Git", "GitHub", "Socket.io"],
    },
  ];

  const marqueeBadgesRow1 = [
    "React.js",
    "React Native",
    "Expo",
    "Node.js",
    "Fastify",
    "MongoDB",
    "Socket.io",
    "JavaScript",
    "TypeScript",
  ];

  const marqueeBadgesRow2 = [
    "Python",
    "Django",
    "Flutter",
    "Tailwind CSS",
    "Shopify Liquid",
    "MySQL",
    "Angular",
    "REST APIs",
    "Git",
  ];

  const educations = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Christ College of Engineering, Irinjalakuda",
      status: "Currently Pursuing",
      period: "Present",
      note:
        "Advanced computing, distributed systems, software engineering " +
        "methodologies, and mobile frameworks.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution:
        "Little Flower Institute of Social Sciences and Health (LISSAH), " +
        "University of Calicut",
      status: "Graduated",
      period: "2021 – 2024",
      note:
        "Core foundations in algorithms, data structures, database " +
        "management systems, and programming principles.",
    },
  ];

  return (
    <section id="stack" className="py-12 scroll-mt-24">
      {/* 12-Column Split Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Technical Stack Section: lg:col-span-7 */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 brutal-pill mb-2">
              <Layers className="w-3.5 h-3.5 text-accent" />
              <span>Skill Matrix & Toolkit</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-charcoal mb-6">
              Technical Stack
            </h2>

            {/* Marquee Ticker */}
            <div className="brutal-card p-3 mb-6 bg-surface overflow-hidden">
              <Marquee speed={24} direction="left">
                {marqueeBadgesRow1.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1 font-mono
                      text-xs font-semibold bg-slatePill text-charcoal rounded-[6px]
                      border border-charcoal/40"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </span>
                ))}
              </Marquee>

              <Marquee speed={26} direction="right" className="pt-2">
                {marqueeBadgesRow2.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1 font-mono
                      text-xs font-semibold bg-slatePill text-charcoal rounded-[6px]
                      border border-charcoal/40"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-charcoal" />
                    {item}
                  </span>
                ))}
              </Marquee>
            </div>

            {/* Stack Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stackCategories.map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <div
                    key={category.title}
                    className="brutal-card p-5 bg-white flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className="flex items-center gap-2 pb-3
                          border-b-[1.5px] border-charcoal/15"
                      >
                        <div
                          className="p-1.5 rounded-[4px] bg-slatePill
                            border border-charcoal/30 text-charcoal"
                        >
                          <CategoryIcon className="w-4 h-4 text-accent" />
                        </div>
                        <h3 className="font-bold text-sm text-charcoal">
                          {category.title}
                        </h3>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs font-mono font-medium
                              bg-slatePill text-charcoal rounded-[4px] border border-charcoal/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Education Section: lg:col-span-5 */}
        <div
          id="education"
          className="lg:col-span-5 scroll-mt-24 flex flex-col justify-between"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 brutal-pill mb-2">
              <GraduationCap className="w-3.5 h-3.5 text-accent" />
              <span>Academic Foundations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-charcoal mb-6">
              Education
            </h2>

            <div className="space-y-4">
              {educations.map((edu, idx) => (
                <div
                  key={idx}
                  className="brutal-card p-6 bg-white flex flex-col justify-between relative"
                >
                  <div>
                    <div
                      className="flex items-center justify-between gap-2 pb-3
                        border-b-[1.5px] border-charcoal/15"
                    >
                      <span
                        className="font-mono text-xs font-semibold uppercase tracking-wider
                          text-accent bg-accent-light px-2.5 py-1 rounded-[4px]
                          border border-accent/40"
                      >
                        {edu.status}
                      </span>
                      <span
                        className="font-mono text-xs text-charcoal/70 bg-slatePill
                          px-2 py-0.5 rounded-[4px] border border-charcoal/30"
                      >
                        {edu.period}
                      </span>
                    </div>

                    <h3 className="mt-3 text-base sm:text-lg font-bold text-charcoal leading-snug">
                      {edu.degree}
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm font-semibold text-charcoal/80">
                      {edu.institution}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                      {edu.note}
                    </p>
                  </div>

                  <div
                    className="mt-4 pt-3 border-t-[1.5px] border-charcoal/15
                      flex items-center gap-2 text-xs font-mono text-charcoal/70"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Academic Degree</span>
                  </div>
                </div>
              ))}

              {/* Quick Philosophy Bento Snippet */}
              <div className="brutal-card p-5 bg-charcoal text-white">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-1">
                  Engineering Philosophy
                </div>
                <p className="text-sm text-slate-100 leading-relaxed font-normal">
                  "Writing clear, production-grade code that scales reliably,
                  backed by solid computer science principles and active shipping."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  Code,
  GraduationCap,
  Database,
  Smartphone,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { SpotlightCard } from "@/components/ui/spotlight-card";

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
        "Advanced software architectures, distributed cloud computing, systems design, " +
        "and mobile frameworks.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution:
        "Little Flower Institute of Social Sciences and Health (LISSAH), University of Calicut",
      status: "Graduated",
      period: "2021 – 2024",
      note:
        "Rigorous foundations in data structures, algorithms, database systems, " +
        "and object-oriented software engineering.",
    },
  ];

  return (
    <section id="stack" className="py-16 scroll-mt-24">
      {/* 12-Column Split Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Technical Stack Section: lg:col-span-7 */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-medium text-accent uppercase mb-2">
              03 // Skills & Toolkit
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mb-6">
              Technical Capabilities
            </h2>

            {/* Linear-Style Marquee Ticker */}
            <div
              className="rounded-2xl border border-zinc-200/80 bg-zinc-50/50
                p-3 mb-6 overflow-hidden"
            >
              <Marquee speed={26} direction="left">
                {marqueeBadgesRow1.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs
                      font-medium text-zinc-700 bg-white rounded-full border
                      border-zinc-200/80 shadow-subtle"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </span>
                ))}
              </Marquee>

              <Marquee speed={28} direction="right" className="pt-2">
                {marqueeBadgesRow2.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs
                      font-medium text-zinc-700 bg-white rounded-full border
                      border-zinc-200/80 shadow-subtle"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
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
                  <SpotlightCard
                    key={category.title}
                    className="p-5 flex flex-col justify-between"
                    spotlightColor="rgba(37, 99, 235, 0.05)"
                  >
                    <div>
                      <div className="flex items-center gap-2 pb-3 border-b border-zinc-100">
                        <div className="p-1.5 rounded-md bg-zinc-100 text-zinc-700">
                          <CategoryIcon className="w-4 h-4 text-accent" />
                        </div>
                        <h3 className="font-semibold text-sm text-zinc-950">
                          {category.title}
                        </h3>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-xs font-mono text-zinc-700 bg-zinc-50
                              border border-zinc-200/80 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>
        </div>

        {/* Education Section: lg:col-span-5 */}
        <div id="education" className="lg:col-span-5 scroll-mt-24 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-accent" />
              <div className="text-xs font-mono font-medium text-accent uppercase">
                04 // Education
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mb-6">
              Academic Degrees
            </h2>

            <div className="space-y-4">
              {educations.map((edu, idx) => (
                <SpotlightCard
                  key={idx}
                  className="p-6 flex flex-col justify-between"
                  spotlightColor="rgba(24, 24, 27, 0.04)"
                >
                  <div>
                    <div
                      className="flex items-center justify-between gap-2 pb-3
                        border-b border-zinc-100"
                    >
                      <span
                        className="font-mono text-[11px] font-medium text-accent
                          bg-accent/10 px-2.5 py-0.5 rounded-full"
                      >
                        {edu.status}
                      </span>
                      <span
                        className="font-mono text-xs text-zinc-500 bg-zinc-100
                          px-2.5 py-0.5 rounded-full"
                      >
                        {edu.period}
                      </span>
                    </div>

                    <h3 className="mt-3 text-base font-semibold text-zinc-950 leading-snug">
                      {edu.degree}
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm font-medium text-zinc-600">
                      {edu.institution}
                    </p>

                    <p className="mt-2.5 text-xs text-zinc-600 leading-relaxed font-normal">
                      {edu.note}
                    </p>
                  </div>

                  <div
                    className="mt-4 pt-3 border-t border-zinc-100 flex items-center
                      gap-2 text-xs font-mono text-zinc-500"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Academic Degree</span>
                  </div>
                </SpotlightCard>
              ))}

              {/* Engineering Standard Note */}
              <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50 p-5">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">
                  Engineering Standard
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  "Writing clear, production-grade code that scales reliably, backed by solid
                  computer science principles and continuous shipping."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Code, Smartphone, Database, Wrench } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

export function SkillsSection() {
  const stackCategories = [
    {
      code: "01",
      title: "LANGUAGES",
      icon: Code,
      skills: ["JavaScript", "Python", "Dart"],
      description: "Core syntax & runtime environments for web, mobile, and backend scripting.",
    },
    {
      code: "02",
      title: "FRONTEND & MOBILE",
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
      description: "Declarative cross-platform mobile apps and responsive web interfaces.",
    },
    {
      code: "03",
      title: "BACKEND & DATABASES",
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
      description: "Scalable microservices, REST endpoints, relational & document datastores.",
    },
    {
      code: "04",
      title: "ECOMMERCE & TOOLS",
      icon: Wrench,
      skills: ["Shopify", "Shopify Liquid", "Git", "GitHub", "Socket.io"],
      description: "Custom headless & Liquid themes, real-time socket events, and Git flows.",
    },
  ];

  const marqueeBadgesRow1 = [
    "REACT.JS",
    "REACT NATIVE",
    "EXPO",
    "NODE.JS",
    "FASTIFY",
    "MONGODB",
    "SOCKET.IO",
    "JAVASCRIPT",
    "PYTHON",
  ];

  const marqueeBadgesRow2 = [
    "DJANGO",
    "FLUTTER",
    "TAILWIND CSS",
    "SHOPIFY LIQUID",
    "MYSQL",
    "REST APIS",
    "ANGULAR",
    "GIT",
    "SQL",
  ];

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 border-b-[1.5px] border-ink bg-paper scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-baseline justify-between
            gap-2 pb-4 border-b-[1.5px] border-ink mb-10"
        >
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-xs font-bold bg-posterRed text-paper px-2
                py-0.5 border border-ink"
            >
              SEC. 02
            </span>
            <h2
              className="font-mono font-bold text-2xl sm:text-3xl text-ink
                tracking-tight uppercase"
            >
              SKILLS & TECHNOLOGIES
            </h2>
          </div>
          <span className="font-mono text-xs text-posterRed uppercase font-bold tracking-wider">
            RUNTIME ARCHITECTURE & TOOLKIT
          </span>
        </div>

        {/* Paper Poster Scrolling Ticker */}
        <div
          className="poster-card bg-paperDark p-3 mb-10 overflow-hidden
            border-[1.5px] border-ink"
        >
          <Marquee speed={24} direction="left">
            {marqueeBadgesRow1.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 px-3 py-1 font-mono text-xs
                  font-bold bg-paper text-ink border border-ink shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-posterRed" />
                {item}
              </span>
            ))}
          </Marquee>

          <Marquee speed={26} direction="right" className="pt-2">
            {marqueeBadgesRow2.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 px-3 py-1 font-mono text-xs
                  font-bold bg-paper text-ink border border-ink shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-ink" />
                {item}
              </span>
            ))}
          </Marquee>
        </div>

        {/* 4 Categorized Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stackCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={category.code}
                className="poster-card p-6 bg-white border-[1.5px] border-ink flex
                  flex-col justify-between group hover:border-posterRed transition-colors"
              >
                <div>
                  <div
                    className="flex items-center justify-between pb-3
                      border-b-[1.5px] border-ink"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-7 h-7 bg-paper border border-ink text-posterRed
                          flex items-center justify-center font-mono font-bold text-xs"
                      >
                        {category.code}
                      </div>
                      <h3 className="font-mono font-bold text-base text-ink tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                    <CategoryIcon
                      className="w-4 h-4 text-posterRed group-hover:rotate-12
                        transition-transform"
                    />
                  </div>

                  <p className="mt-3 text-xs text-ink/70 leading-relaxed font-normal">
                    {category.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-mono font-semibold bg-paper text-ink
                          border border-ink/60 hover:bg-posterRed hover:text-paper
                          hover:border-ink transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="mt-5 pt-3 border-t border-ink/20 flex items-center
                    justify-between text-[11px] font-mono text-ink/60"
                >
                  <span>PRODUCTION TESTED</span>
                  <span className="font-bold text-posterRed">ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

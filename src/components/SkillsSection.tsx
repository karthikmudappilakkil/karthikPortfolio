import { Code, Smartphone, Database, Wrench } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { CornerDice } from "@/components/ui/CornerDice";
import { CornerCross, CornerTicks } from "@/components/ui/PosterMarks";

export function SkillsSection() {
  const stackCategories = [
    {
      code: "01",
      title: "LANGUAGES & RUNTIMES",
      icon: Code,
      diceVal: 1,
      skills: ["JavaScript", "Python", "Dart", "TypeScript"],
      description:
        "Core syntax & execution environments across web engines, mobile devices, and server runtimes.",
    },
    {
      code: "02",
      title: "FRONTEND & MOBILE",
      icon: Smartphone,
      diceVal: 2,
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
      description:
        "Declarative cross-platform native iOS & Android applications and high-fidelity web views.",
    },
    {
      code: "03",
      title: "BACKEND & DATABASES",
      icon: Database,
      diceVal: 3,
      skills: [
        "Node.js",
        "Fastify",
        "Express.js",
        "Django",
        "REST APIs",
        "MongoDB",
        "MySQL",
        "SQL",
      ],
      description:
        "High-throughput microservices, REST endpoints, relational databases, and NoSQL stores.",
    },
    {
      code: "04",
      title: "ECOMMERCE & ECOSYSTEM",
      icon: Wrench,
      diceVal: 4,
      skills: [
        "Shopify",
        "Shopify Liquid",
        "Socket.io",
        "Git",
        "GitHub",
        "Agile / Scrum",
      ],
      description:
        "Custom Shopify themes, bidirectional WebSocket events, and collaborative Git version control.",
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
    "TYPESCRIPT",
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
    "EXPRESS.JS",
  ];

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 border-b-2 border-ink bg-paper scroll-mt-16 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <CornerCross className="absolute -top-3 left-4 hidden sm:block" />
        <CornerCross className="absolute -top-3 right-4 hidden sm:block" />

        {/* Section Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-baseline justify-between
            gap-3 pb-4 border-b-2 border-ink mb-10"
        >
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-xs font-bold bg-posterRed text-paper px-2.5
                py-1 border-2 border-ink shadow-[2px_2px_0_#141414] uppercase tracking-wider"
            >
              SEC. 02
            </span>
            <h2
              className="font-poster text-4xl sm:text-6xl text-ink
                tracking-wide uppercase leading-none"
            >
              TECHNICAL INVENTORY
            </h2>
          </div>
          <span className="font-mono text-xs text-posterRed uppercase font-bold tracking-widest">
            [VERIFIED STACK & FRAMEWORKS]
          </span>
        </div>

        {/* Dual High-Contrast Poster Marquee Strips */}
        <div className="mb-12 border-2 border-ink shadow-[4px_4px_0_#141414] overflow-hidden">
          {/* Top Strip: Red Background with Paper Letters */}
          <div className="bg-posterRed text-paper py-2.5 border-b-2 border-ink">
            <Marquee className="[--duration:24s]" pauseOnHover>
              {marqueeBadgesRow1.map((item, i) => (
                <div key={i} className="flex items-center gap-4 mx-4">
                  <span className="font-poster text-2xl tracking-widest uppercase font-bold">
                    {item}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-paper" />
                </div>
              ))}
            </Marquee>
          </div>

          {/* Bottom Strip: Paper Background with Ink Letters */}
          <div className="bg-[#ede8e0] text-ink py-2.5">
            <Marquee direction="right" className="[--duration:24s]" pauseOnHover>
              {marqueeBadgesRow2.map((item, i) => (
                <div key={i} className="flex items-center gap-4 mx-4">
                  <span className="font-poster text-2xl tracking-widest uppercase font-bold text-ink">
                    {item}
                  </span>
                  <span className="w-2 h-2 rounded-none bg-posterRed rotate-45" />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* 4 Categorized Specimen Drawer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {stackCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.code}
                className="poster-card p-6 sm:p-7 bg-white relative group"
              >
                <CornerTicks />

                {/* Card Header */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b-2 border-ink mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 bg-paper border-2 border-ink shadow-[2px_2px_0_#141414]
                        flex items-center justify-center text-ink group-hover:bg-posterRed
                        group-hover:text-paper transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-posterRed font-bold tracking-widest uppercase">
                        DRAWER // {cat.code}
                      </span>
                      <h3 className="font-poster text-2xl sm:text-3xl text-ink uppercase tracking-wide leading-none mt-0.5">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  {/* Corner interactive dice */}
                  <CornerDice initialValue={cat.diceVal} size={34} />
                </div>

                <p className="text-xs font-mono text-ink/80 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono
                        font-bold text-ink bg-paperDark border border-ink/80 shadow-[1px_1px_0_#141414]
                        hover:bg-posterRed hover:text-paper hover:border-ink transition-colors cursor-default"
                    >
                      <span className="w-1 h-1 rounded-full bg-posterRed group-hover:bg-paper" />
                      <span>{skill}</span>
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

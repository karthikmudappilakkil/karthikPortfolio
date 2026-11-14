import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceAndEducationSection } from "@/components/ExperienceAndEducationSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";

export function App() {
  return (
    <div
      className="min-h-screen bg-paper text-ink flex flex-col
        selection:bg-posterRed selection:text-paper font-sans"
    >
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceAndEducationSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;

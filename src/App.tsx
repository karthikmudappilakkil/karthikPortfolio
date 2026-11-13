import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TechStackAndEducationSection } from "@/components/TechStackAndEducationSection";
import { FooterSection } from "@/components/FooterSection";

export function App() {
  return (
    <div className="min-h-screen bg-background text-charcoal flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechStackAndEducationSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default App;


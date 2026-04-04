import { NeuralParticles } from "@/components/3d/NeuralParticles";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Focus } from "@/components/sections/Focus";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen relative">
      <NeuralParticles />
      <Hero />
      <Focus />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
      <footer className="w-full text-center py-8 text-gray-500 font-mono text-sm border-t border-white/5 bg-black/50 backdrop-blur-sm z-10 relative">
        Designed & Built by Ashik Tomy © 2026
      </footer>
    </main>
  );
}

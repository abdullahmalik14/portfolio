import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { TechStack } from "@/components/sections/tech-stack";
import { Services } from "@/components/sections/services";
import { Achievements } from "@/components/sections/achievements";
import { Resume } from "@/components/sections/resume";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <TechStack />
      <Services />
      <Achievements />
      <Resume />
      <Testimonials />
      <Contact />
    </>
  );
}

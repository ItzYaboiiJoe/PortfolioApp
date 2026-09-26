import Navbar from "@/features/navbar/Navbar";
import Hero from "@/features/hero/Hero";
import Projects from "@/features/projects/Projects";
import Skills from "@/features/skills/Skills";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="space-y-64">
        <Hero />
        <Projects />
        <Skills />
      </div>
    </>
  );
};

export default HomePage;

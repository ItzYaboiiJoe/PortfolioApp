import Navbar from "@/features/navbar/Navbar";
import Hero from "@/features/hero/Hero";
import Projects from "@/features/projects/Projects";
import Skills from "@/features/skills/Skills";
import About from "@/features/about/About";
import Contact from "@/features/contact/Contact";
import Footer from "@/features/footer/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="space-y-64">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;

import { projectsData } from "./projectsData";
import ProjectShowcase from "./ProjectShowcase";

const Projects = () => {
  return (
    <div id="projects" className="py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-16">
          <p className="mb-4 text-sm font-medium tracking-[0.25em] text-blue-300">
            SELECTED WORK
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projects I&apos;ve built.
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/60">
            A selection of applications I&apos;ve designed and developed,
            ranging from interactive experiences to full-featured platforms.
          </p>
        </div>

        <div className="space-y-32">
          {projectsData.map((project, index) => (
            <ProjectShowcase key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

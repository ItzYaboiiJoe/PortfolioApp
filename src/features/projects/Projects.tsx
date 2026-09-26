"use client";

import { projectsData } from "./projectsData";
import ProjectShowcase from "./ProjectShowcase";
import AnimatedContent from "@/components/AnimatedContent";

const Projects = () => {
  return (
    <div id="projects" className="py-24 pt-64">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-16">
          <p className="mb-4 text-sm font-medium tracking-[0.25em] text-blue-300">
            SELECTED WORK
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projects I&apos;ve built.
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
            A selection of applications I&apos;ve designed and developed,
            ranging from interactive experiences to full-featured platforms.
          </p>
        </div>

        <div className="space-y-32">
          <div className="space-y-32">
            {projectsData.map((project, index) => (
              <AnimatedContent
                key={project.id}
                distance={50}
                direction="vertical"
                reverse={false}
                duration={1}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.4}
                delay={0}
              >
                <ProjectShowcase project={project} index={index} />
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

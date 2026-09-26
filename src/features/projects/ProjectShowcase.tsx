import Image from "next/image";
import Link from "next/link";
import { Project } from "./projectsData";
import { Button } from "@/components/ui/button";

type ProjectShowcaseProps = {
  project: Project;
  index: number;
};

const ProjectShowcase = ({ project, index }: ProjectShowcaseProps) => {
  const isReversed = index % 2 !== 0;

  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        isReversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        {/* <p className="mb-3 text-sm font-medium tracking-widest text-blue-300">
          {String(index + 1).padStart(2, "0")}
        </p> */}

        <h3 className="text-3xl font-bold tracking-tight text-white">
          {project.name}
        </h3>

        <p className="mt-4 max-w-xl leading-7 text-white/70">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-8">
          {project.status === "live" && project.liveUrl ? (
            <Button
              size="lg"
              className="bg-blue-600 p-0 text-white hover:bg-blue-700"
            >
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full w-full items-center px-4"
              >
                View Live Site
              </Link>
            </Button>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              In Development
            </span>
          )}
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20 p-2">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          width={1920}
          height={1080}
          className="h-auto w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProjectShowcase;

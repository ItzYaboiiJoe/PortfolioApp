"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";
import AnimatedContent from "@/components/AnimatedContent";

const Hero = () => {
  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={1}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.5}
      delay={0}
    >
      <div className="flex py-24 pt-64 items-center">
        <div className="mx-auto w-full max-w-5xl px-6 text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.25em] text-blue-300">
            SOFTWARE DEVELOPER
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Turning ideas into
            <span className="mt-2 block text-white/90">
              software people can use.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/70">
            I build modern, responsive applications focused on clean interfaces,
            reliable functionality, and useful user experiences.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            {/* Scroll to Projects */}
            <Button
              size="lg"
              className="bg-blue-600 p-0 text-white hover:bg-blue-700"
            >
              <a
                href="#projects"
                className="flex h-full w-full items-center px-4"
              >
                View My Work
              </a>
            </Button>

            {/* Github Link */}
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/5 p-0 text-white hover:bg-white/10 hover:text-white"
            >
              <Link
                href="https://github.com/ItzYaboiiJoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full w-full items-center px-4"
              >
                <IoLogoGithub className="size-4 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default Hero;

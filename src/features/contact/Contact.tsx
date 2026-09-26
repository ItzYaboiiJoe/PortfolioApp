"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import AnimatedContent from "@/components/AnimatedContent";

const Contact = () => {
  return (
    <AnimatedContent
      distance={50}
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
      <div id="contact" className="py-24 pt-50">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium tracking-[0.25em] text-blue-300">
              CONTACT
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              I&apos;m currently open to new opportunities and would be happy to
              connect about software development roles or projects.
            </p>

            <div className="mt-8 flex gap-3">
              <Button
                size="lg"
                className="bg-blue-600 p-0 text-white hover:bg-blue-700"
              >
                <Link
                  href="mailto:josephakseoudy@gmail.com"
                  className="flex h-full w-full items-center px-4"
                >
                  <MdOutlineEmail className="mr-2 size-4" />
                  Email Me
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 p-0 text-white hover:bg-white/10 hover:text-white"
              >
                <Link
                  href="https://www.linkedin.com/in/joseph-seoudy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full w-full items-center px-4"
                >
                  <IoLogoLinkedin className="mr-2 size-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default Contact;

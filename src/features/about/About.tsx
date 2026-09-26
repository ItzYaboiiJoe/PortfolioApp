"use client";

import AnimatedContent from "@/components/AnimatedContent";

const About = () => {
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
      threshold={0.6}
      delay={0}
    >
      <div id="about" className="py-24 pt-64">
        <div className="mx-auto w-full max-w-7xl px-6">
          <p className="mb-4 text-sm font-medium tracking-[0.25em] text-blue-300">
            ABOUT ME
          </p>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="max-w-md text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Building software with purpose.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-white/70">
              <p>
                I&apos;m a software developer focused on building practical
                applications that solve real problems.
              </p>

              <p>
                My experience spans modern web development with Next.js and
                TypeScript, backend and database development with C#, .NET, SQL,
                and Supabase, as well as business process automation.
              </p>

              <p>
                I enjoy taking an idea from concept to a working product
                designing the interface, building the functionality behind it,
                integrating APIs and databases, and refining the experience
                along the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default About;

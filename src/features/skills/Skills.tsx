"use client";

import AnimatedContent from "@/components/AnimatedContent";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      "C#",
      ".NET",
      "Supabase",
      "PostgreSQL",
      "Microsoft SQL Server",
      "SQL",
      "REST APIs",
    ],
  },
  {
    title: "Automation",
    skills: ["Fortra Automate", "Microsoft Power Automate"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel", "SSMS"],
  },
];

const Skills = () => {
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
      <div id="skills" className="py-24 pt-64">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mb-16">
            <p className="mb-4 text-sm font-medium tracking-[0.25em] text-blue-300">
              TECHNOLOGIES
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tools I used to build software.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/60">
              Technologies and tools I&apos;ve worked with across frontend,
              backend, databases, and automation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-white/10 bg-black/20 p-6"
              >
                <h3 className="mb-6 text-lg font-semibold text-white">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default Skills;

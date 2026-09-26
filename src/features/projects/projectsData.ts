export type Project = {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: "live" | "development";
};

export const projectsData: Project[] = [
  {
    id: "pivotsports",
    name: "PivotSports",
    description:
      "A team management platform that brings members, events, discussions, and team administration together in one place.",
    image: "/projects/PivotSports.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "shadcn/ui",
    ],
    liveUrl: "https://pivotsports.app/",
    status: "live",
  },
  {
    id: "guess-what-pokemon",
    name: "GuessWhat - Pokémon",
    description:
      "A daily Pokémon guessing game that uses the PokéAPI to serve a new challenge each day, with a leaderboard for competing against other players.",
    image: "/projects/GuessWhatPoki.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "shadcn/ui",
    ],
    liveUrl: "https://guesswhat-pokemon.vercel.app/",
    status: "live",
  },
  {
    id: "guess-what-space",
    name: "GuessWhat - Space",
    description:
      "A daily space guessing game powered by NASA's APOD API, challenging users to identify the featured image before revealing the answer, its story, and community response results.",
    image: "/projects/GuessWhatSpace.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "shadcn/ui",
    ],
    liveUrl: "https://guesswhat-space.vercel.app/",
    status: "live",
  },
  {
    id: "stockflow",
    name: "StockFlow",
    description:
      "A business management platform designed to organize inventory, orders, customers, and purchasing in one centralized workspace.",
    image: "/projects/StockFlow.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "shadcn/ui",
    ],
    status: "development",
  },
];

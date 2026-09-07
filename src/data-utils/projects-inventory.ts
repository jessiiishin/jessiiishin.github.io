// Card thumbnails live at src/assets/project-images/<project>/card.* and must be
// imported so Vite fingerprints them and rewrites the URL for the production build.
import carbonchainImg from "../assets/project-images/carbonchain/card.png";
import chewcheckImg from "../assets/project-images/chewcheck/card.PNG";
import munchymunchyImg from "../assets/project-images/munchymunchy/card.png";

export type ProjectDate = {
  year: number;
  month: number; // 1-12
};

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  desc: string; // short blurb, shown on the card
  tech: string[]; // tech stack -> the tags shown on the card
  tags: string[]; // project type / role -> metadata, not on the card
  start: ProjectDate;
  end?: ProjectDate; // omit for single-month projects
  img?: string;
  to?: string; // internal route to navigate to
  links?: ProjectLink[];
  featured?: boolean; // surfaced in the "featured projects" section on the home page
};

// newest first
export const allProjects: Project[] = [
  {
    title: "Smart Docs",
    desc: "A premium product at Acelab Material Hub. Developed the editor interface, document element, page and binder organization, and collaboration sync layer. Extended Fabric.js with custom document elements, rich-text editing, formatting toolbars, and page and binder management.",
    tech: ["Vue", "JavaScript", "HTML/CSS", "Fabric.js", "SQL", "C#"],
    tags: ["Full-stack", "Frontend", "Team"],
    start: { year: 2026, month: 7 },
    end: { year: 2026, month: 8 },
    to: "/projects/smartdocs",
    links: [
      {
        label: "Smart Docs Info",
        url: "https://www.acelabusa.com/blog/smart-docs-is-here-finish-packages-and-schedules-in-minutes-not-hours",
      },
      { label: "Demo Video", url: "https://youtu.be/UIklsPbtw7g" },
    ],
  },
  {
    title: "Swatch Color Classification",
    desc: "A pipeline that takes in a swatch (image) and sorts it into distinct color buckets utilizing 3 step classification process: LLM swatch name analysis, algorithmic image analysis (k-means & k-sweep), and a tiebreaker LLM vision analysis.",
    tech: ["Python", "TypeScript", "Gemini"],
    tags: ["Image Analysis", "Hackathon"],
    start: { year: 2026, month: 6 },
    to: "/projects/swatchcolor",
    links: [
      { label: "GitHub", url: "https://github.com/elodiecollier/color-classification" },
    ],
  },
  {
    title: "Parafish",
    desc: "Programming producer and developer for a turn based puzzle game. As a parasite, use as few moves as possible to lay eggs and eat your way out of the fish before getting dissolved.",
    tech: ["Godot", "GDScript"],
    tags: ["Game Dev", "Team", "Project Lead"],
    start: { year: 2026, month: 2 },
    end: { year: 2026, month: 5 },
    to: "/projects/parafish",
    links: [{ label: "Itch", url: "https://brownrisdgames.itch.io/parafish" }],
  },
  {
    title: "MunchyMunchy",
    desc: "Frontend lead for a web app that generates food tours (food crawls) in cities of your choice, personalized by budget, time, and food preferences.",
    tech: ["TypeScript", "React", "HTML", "CSS", "Figma"],
    tags: ["Hackathon", "Web", "Frontend", "Team"],
    start: { year: 2026, month: 2 },
    img: munchymunchyImg,
    to: "/projects/munchymunchy",
    featured: true,
    links: [{ label: "Link", url: "https://munchymunchy.tech" }],
  },
  {
    title: "ChewCheck",
    desc: "Mobile application that identifies plants using a device camera to quickly determine whether they are safe for the user's pets. Integrates ML-based image classification, database-backed plant and food search, and saving items for future reference.",
    tech: ["TypeScript", "HTML", "React Native", "Expo", "Firebase", "Figma"],
    tags: ["Frontend Lead", "UI/UX Design", "Mobile", "Team"],
    start: { year: 2025, month: 11 },
    end: { year: 2026, month: 1 },
    img: chewcheckImg,
    to: "/projects/chewcheck",
    featured: true,
  },
  {
    title: "Mosquito Simulator",
    desc: "Developer for a short arcade style game about a mosquito trying to bite as many summer campers as possible, leading implementation of player movement and scene flows.",
    tech: ["Godot", "GDScript"],
    tags: ["Game Dev", "Team"],
    start: { year: 2025, month: 9 },
    end: { year: 2025, month: 11 },
    to: "/projects/mosquitosimulator",
    links: [
      { label: "Itch", url: "https://brownrisdgames.itch.io/mosquito-simulator" },
    ],
  },
  {
    title: "CarbonChain",
    desc: "Winner of Bloomberg's PennApps 2025 Best Sustainability Award. Blockchain platform that directly connects people and organizations funding climate projects with the projects themselves, ensuring transparency and preventing double-counting.",
    tech: ["JavaScript", "HTML", "CSS", "React.js", "Next.js", "Express"],
    tags: ["Frontend Lead", "UI/UX Design", "Team", "Hackathon"],
    start: { year: 2025, month: 9 },
    end: { year: 2025, month: 11 },
    img: carbonchainImg,
    to: "/projects/carbonchain",
    featured: true,
    links: [
      { label: "DevPost", url: "https://devpost.com/software/carbonchain-m2hxz4" },
    ],
  },
];

// The three cards shown in the "featured projects" section on the home page.
export const featuredProjects: Project[] = allProjects.filter((p) => p.featured);

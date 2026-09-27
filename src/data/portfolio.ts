export interface Project {
  name: string;
  repo: string;
  docs?: string;
  category: string;
  description: string;
  stack: string[];
  accent: string;
  size: "feature" | "wide" | "standard" | "full";
}

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export const projects: Project[] = [
  {
    name: "everything",
    repo: "https://github.com/Crazygiscool/everything",
    category: "MINECRAFT / JAVA",
    description:
      "A Minecraft plugin for just about anything: a home for server ideas, useful features, and playful experiments.",
    stack: ["Java", "Paper", "Minecraft"],
    accent: "blue",
    size: "feature",
  },
  {
    name: "G-shell",
    repo: "https://github.com/Crazygiscool/G-shell",
    category: "RUST / TERMINAL",
    description:
      "A small command-line shell built in Rust, exploring command parsing and the everyday shape of a terminal.",
    stack: ["Rust", "POSIX", "Zero-copy", "CLI"],
    accent: "amber",
    size: "standard",
  },
  {
    name: "Lumen",
    repo: "https://github.com/Crazygiscool/Lumen",
    category: "DART / JOURNALING",
    description:
      "A journaling app with a file-explorer side, for bringing notes and documents together in one quiet place.",
    stack: ["Dart", "Flutter", "Journaling", "Files"],
    accent: "amber",
    size: "standard",
  },
  {
    name: "Galactic-database",
    repo: "https://github.com/Crazygiscool/Galactic-database",
    category: "STAR WARS / WEB",
    description:
      "A frontend for exploring the Star Wars Databank and SWAPI, turning a galaxy of records into something browsable.",
    stack: ["TypeScript", "React", "SWAPI", "Star Wars"],
    accent: "coral",
    size: "wide",
  },
  {
    name: "GSETLang",
    repo: "https://github.com/Crazygiscool/GSETLang",
    docs: "https://gset.vercel.app",
    category: "GO / LANGUAGE TOOLING",
    description:
      "A generic syntax extension tool for trying out new language forms and transforming source.",
    stack: ["Go", "Lexer", "Parser", "Transpiler"],
    accent: "blue",
    size: "full",
  },
];

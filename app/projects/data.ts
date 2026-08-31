export type ProjectDetail = {
  slug: string;
  title: string;
  category: string;
  subtitle?: string;
  description: string;
  image: string;

  overview: string[];

  contribution: string[];

  technologies: string[];

  focusTitle?: string;
  focus?: string[];

  links?: {
    label: string;
    href: string;
    primary?: boolean;
  }[];

  youtubeUrl?: string;
  localVideo?: string;

  footer: string;
};

export const projects: ProjectDetail[] = [
  {
    slug: "careermatch",

    title: "CareerMatch AI",

    category: "Full Stack · AI",

    description:
      "AI-powered job matching platform that analyzes candidate profiles and job descriptions to identify relevant opportunities.",

    image: "/projects/careermatch/cover.png",

    overview: [
      "CareerMatch AI is a full-stack application designed to improve job discovery by comparing candidate information with job descriptions using artificial intelligence.",

      "The project combines a modern web frontend, an API backend, persistent storage and an AI service into a complete deployed application.",
    ],

    contribution: [
      "Designed the full-stack application architecture",
      "Implemented authentication using JWT",
      "Integrated PostgreSQL persistence",
      "Integrated Gemini for AI-powered analysis",
      "Built the responsive frontend with Next.js and Tailwind CSS",
      "Deployed the application to production",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Gemini AI",
      "JWT",
    ],

    focusTitle: "Architecture",

    focus: [
      "The application is separated into a frontend, backend API and PostgreSQL database.",

      "The frontend communicates with the FastAPI backend, which handles application logic, authentication, database operations and AI requests.",
    ],

    links: [
      {
        label: "Live Demo ↗",
        href: "https://career-match-ai-lyart.vercel.app",
        primary: true,
      },

      {
        label: "GitHub ↗",
        href: "https://github.com/Mohammed1306/CareerMatchAI",
      },
    ],

    footer: "CareerMatch AI · 2026",
  },

  {
    slug: "pokeworld",

    title: "PokeWorld",

    category: "Mobile · Multiplayer",

    subtitle: "Polytechnique Montréal · LOG3900 / PI3",

    description:
      "Cross-platform tactical multiplayer game with web and Android clients. I was primarily responsible for developing the lightweight Android client and adapting the experience for touch-based tablet gameplay.",

    image: "/projects/pokeworld/cover.png",

    overview: [
      "PokeWorld was developed as part of Polytechnique Montréal's LOG3900 integrative software engineering project.",

      "The objective was to evolve an existing tactical game into a cross-platform, multi-mode application supporting real-time multiplayer gameplay across different clients.",
    ],

    contribution: [
      "Developed features for the Android tablet client",
      "Adapted desktop interactions to touch-based controls",
      "Integrated the mobile client with the multiplayer system",
      "Worked on mobile UI and cross-platform consistency",
      "Collaborated within a larger Agile development team",
    ],

    technologies: [
      "Flutter",
      "Dart",
      "Android",
      "Real-Time Multiplayer",
      "Cross-Platform",
      "Mobile UI",
    ],

    focusTitle: "Key Challenges",

    focus: [
      "One of the main challenges was translating a desktop-oriented gameplay experience to a tablet interface while keeping the controls intuitive through touch interactions.",

      "The application also had to remain consistent with the shared multiplayer game state while users played from different client platforms.",
    ],

    links: [
      {
        label: "Live Website ↗",
        href: "https://polytechnique-montr-al.gitlab.io/log3900/26-1/equipe-110/LOG3900-110/#/",
        primary: true,
      },

      {
        label: "Download APK ↓",
        href: "https://drive.google.com/file/d/1DRKIAtwBs_lSLb0oXkWFBbJ-8i--UnV-/view",
      },
    ],

    footer: "PokeWorld · Polytechnique Montréal · LOG3900",
  },

  {
    slug: "embedded-robot",

    title: "Embedded Robot",

    category: "Embedded Systems · C++",

    subtitle: "Polytechnique Montréal · INF1900 / PI1",

    description:
      "Embedded software project centered around a C++ library used to control robotic components and integrate software directly with physical hardware.",

    image: "/projects/robot/cover.png",

    overview: [
      "This project involved developing software for an embedded robotic system, with a strong focus on communication between software components and the physical robot.",

      "The goal was to create a reusable software layer capable of controlling the robot's hardware components while keeping the code modular and maintainable.",
    ],

    contribution: [
      "Developed a C++ library for robot component control",
      "Integrated software with physical hardware components",
      "Contributed to the design of the embedded system",
      "Worked on reusable interfaces between system components",
      "Participated in system-level testing and integration",
    ],

    technologies: [
      "C++",
      "Embedded Systems",
      "Hardware Integration",
      "System Design",
    ],

    focusTitle: "Key Challenges",

    focus: [
      "A major challenge was ensuring that the software abstraction remained clean while still interacting reliably with physical components.",

      "The project required coordination between software behavior and constraints imposed by the embedded hardware.",
    ],

    footer: "Embedded Robot · C++ · Embedded Systems",
  },

  {
    slug: "liorally",

    title: "LioRally",

    category: "Simulation · Game Development",

    subtitle: "Team project · 4 developers",

    description:
      "Rally racing simulation focused on realistic vehicle behavior, spline-based track logic and AI-driven opponents.",

    image: "/projects/liorally/cover.png",

    overview: [
      "LioRally is a rally racing simulation game designed to reproduce realistic vehicle behavior and challenging race conditions.",

      "The game includes AI-controlled opponents and track logic based on spline geometry to support race calculations and vehicle positioning.",
    ],

    contribution: [
      "Implemented spline-based distance calculations",
      "Worked on track physics and race logic",
      "Contributed to collision and trajectory-related systems",
      "Integrated technical features into the user interface",
      "Collaborated within a four-person development team",
    ],

    technologies: [
      "C#",
      "Splines",
      "Physics Simulation",
      "Algorithms",
      "Artificial Intelligence",
      "Game Development",
    ],

    focusTitle: "Technical Focus",

    focus: [
      "One of my main contributions was calculating distances between game elements along the track splines rather than relying on simple straight-line distance.",

      "These calculations supported track logic, vehicle trajectories and race-related behavior while preserving the curved geometry of the track.",
    ],

    youtubeUrl: "https://www.youtube.com/watch?v=gPz2-JNdWso",

    footer: "LioRally · C# · Simulation",
  },

  {
    slug: "lightning-sword",

    title: "Lightning Sword",

    category: "3D · Visual Design",

    description:
      "A complete 3D scene created in Blender featuring a sword embedded in stone inside a cave, enhanced with animated lightning effects.",

    image: "/projects/lightning-sword/cover.png",

    overview: [
      "Lightning Sword is a 3D scene built entirely in Blender, combining modeling, texturing, lighting and animation into a single visual composition.",

      "The scene depicts a sword embedded in stone inside a cave, with animated lightning effects used to emphasize the sword and create a dramatic atmosphere.",
    ],

    contribution: [
      "Modeled the full 3D scene",
      "Created and applied textures and materials",
      "Designed the cave environment and composition",
      "Animated the lightning effects",
      "Managed lighting and final scene presentation",
    ],

    technologies: [
      "Blender",
      "3D Modeling",
      "Animation",
      "Texturing",
      "Materials",
      "Lighting",
      "Visual Effects",
    ],

    focusTitle: "Visual Focus",

    focus: [
      "The project focused on combining multiple parts of the 3D production pipeline into one coherent scene rather than treating modeling, materials and animation as isolated tasks.",

      "The lightning effect acts as both an animated element and a visual focal point directing attention toward the sword.",
    ],

    localVideo: "/projects/lightning-sword/demo.mp4",

    footer: "Lightning Sword · Blender · 3D",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
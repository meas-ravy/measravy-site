export const PHOTO_COLLAGE = [
  {
    src: "/images/avatar_4.jpg",
    alt: "Ravy Meas portrait photo 4",
    caption: "Living the dream",
    year: "2026",
    className:
      "-rotate-8 translate-y-6 -mr-14 z-10 w-32 sm:-mr-16 sm:w-52 md:w-60",
  },
  {
    src: "/images/avatar_2.jpg",
    alt: "Ravy Meas portrait photo 2",
    caption: "Always coding",
    year: "2025",
    className: "-rotate-3 -mr-14 z-20 w-36 sm:-mr-16 sm:w-56 md:w-64",
  },
  {
    src: "/images/avatar_1.jpg",
    alt: "Ravy Meas portrait photo 1",
    caption: "Building things",
    year: "2025",
    className: "rotate-3 -mr-14 z-30 w-36 sm:-mr-16 sm:w-56 md:w-64",
  },
  {
    src: "/images/avatar_3.jpg",
    alt: "Ravy Meas portrait photo 3",
    caption: "Coffee & Code",
    year: "2024",
    className: "rotate-8 translate-y-6 z-40 w-32 sm:w-52 md:w-60",
  },
] as const;

export const TIMELINE = [
  {
    dotClass: "bg-blue-500",
    title: "Focuz Solution",
    subtitle: "Software Development Engineer",
    bullets: ["working on scale Mobile App and website systems"],
    range: "2026 - Now",
  },
  {
    dotClass: "bg-amber-400",
    title: "RUPP - Royal University of Phnom Penh",
    subtitle: "B.S. Computer Science",
    bullets: ["got my degree to make my parents proud"],
    range: "2025 - 2026",
  },
  {
    dotClass: "bg-emerald-400",
    title: "Focuz Solution",
    subtitle: "Software Development Engineer Intern",
    bullets: ["worked on Focuz Solution fresh grocery experience"],
    range: "2025 - 2025",
  },
] as const;

export const PROJECTS = [
  {
    name: "Job Finder App",
    description:
      "Explore opportunities, connect with recruiters, and manage applications—all in one place.",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Flutter",
    ],
  },
  {
    name: "System Administrator",
    description:
      "Responsible for designing, deploying, configuring, and maintaining 13 core IT systems, ensuring security, availability, and performance across on-premise and cloud environments.",
    tags: ["Windows Server", "Linux", "AWS Cloud", "Docker"],
  },
  {
    name: "ML / LLM (Large Language Model) research project",
    description:
      "A research project focused on Machine Learning and Large Language Models (LLMs).",
    tags: ["Python", "NLP datasets", "PyTorch", "Gemini APIs"],
  },
] as const;

export const HOBBIES = [
  {
    title: "Moto Adventures",
    description:
      "riding across local routes and countryside with friends on days off in Cambodia",
    stat: "open roads",
    statClass: "text-orange-400",
  },
  {
    title: "Real Estate Investing",
    description: "playing monopoly but with real money",
    stat: "0 properties",
    statClass: "text-sky-400",
  },
  {
    title: "Stocks and Crypto",
    description: "buying high and selling low is my philosophy",
    stat: "",
    statClass: "text-emerald-400",
  },
  {
    title: "Mechanical Keyboards",
    description: "fun but will be the reason why im homeless",
    stat: "",
    statClass: "text-violet-400",
  },
] as const;

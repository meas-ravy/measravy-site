import { easeOut, motion } from "framer-motion";

const PAGE_VARIANTS = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeOut, staggerChildren: 0.1 },
  },
};

const SECTION_VARIANTS = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
};

const LIST_VARIANTS = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

const PHOTO_VARIANTS = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function About() {
  const photoCollage = [
    {
      src: "/images/avatar_4.jpg",
      alt: "Photo 1",
      className:
        "-rotate-8 translate-y-6 -mr-14 z-10 w-32 sm:-mr-16 sm:w-52 md:w-60",
    },
    {
      src: "/images/avatar_2.jpg",
      alt: "Photo 2",
      className: "-rotate-3 -mr-14 z-20 w-36 sm:-mr-16 sm:w-56 md:w-64",
    },
    {
      src: "/images/avatar_1.jpg",
      alt: "Photo 3",
      className: "rotate-3 -mr-14 z-30 w-36 sm:-mr-16 sm:w-56 md:w-64",
    },
    {
      src: "/images/avatar_3.jpg",
      alt: "Photo 4",
      className: "rotate-8 translate-y-6 z-40 w-32 sm:w-52 md:w-60",
    },
  ] as const;

  const timeline = [
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
    // {
    //   dotClass: "bg-rose-500",
    //   title: "Job Finder App",
    //   subtitle: "Soft",
    //   bullets: ["built reselling community and developed tools"],
    //   range: "2025 - 2026",
    // },
  ] as const;

  const projects = [
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

  const hobbies = [
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
      // stat: "~$25,000 profit",
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

  const badgeStyles: Record<string, string> = {
    TypeScript: "bg-[#3178c6] text-white",
    React: "bg-cyan-500 text-white",
    PostgreSQL: "bg-emerald-500 text-white",
    "Next.js": "bg-gray-500 text-white",
    "Node.js": "bg-green-500 text-white",
    AWS: "bg-orange-500 text-white",
    Flutter: "bg-sky-500 text-white",
    "Windows Server": "bg-blue-600 text-white",
    Linux: "bg-slate-600 text-white",
    "AWS Cloud": "bg-orange-500 text-white",
    Docker: "bg-sky-500 text-white",
    Python: "bg-indigo-600 text-white",
    "NLP datasets": "bg-violet-600 text-white",
    PyTorch: "bg-orange-600 text-white",
    "Gemini APIs": "bg-fuchsia-600 text-white",
    JavaScript: "bg-yellow-400 text-slate-900",
    Supabase: "bg-emerald-600 text-white",
    "Spotify API": "bg-green-600 text-white",
  };

  const Badge = ({ label }: { label: string }) => (
    <span
      className={[
        "inline-flex items-center whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold shadow-sm",
        badgeStyles[label] ?? "bg-zinc-700 text-white",
      ].join(" ")}
    >
      {label}
    </span>
  );

  return (
    <motion.div
      className="space-y-16"
      variants={PAGE_VARIANTS}
      initial="hidden"
      animate="show"
    >
      <motion.div className="space-y-2" variants={SECTION_VARIANTS}>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
          About
        </h1>
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
          Who I am.
        </p>
      </motion.div>

      <motion.div className="flex justify-center" variants={SECTION_VARIANTS}>
        <motion.div
          className="flex items-center justify-center"
          variants={LIST_VARIANTS}
        >
          {photoCollage.map(photo => (
            <motion.img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              variants={PHOTO_VARIANTS}
              className={[
                "aspect-4/3 h-44 rounded-2xl object-cover shadow-2xl shadow-black/35 ring-1 ring-slate-200/70 sm:h-52 md:h-56",
                "transition duration-300 hover:-translate-y-1 hover:shadow-black/45 dark:ring-white/10",
                photo.className,
              ].join(" ")}
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="grid gap-8 md:grid-cols-[160px_1fr] md:gap-12"
        variants={SECTION_VARIANTS}
      >
        <h2 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white md:pt-2">
          Timeline
        </h2>
        <div className="relative pl-10 before:content-[''] before:absolute before:left-4 before:top-0 before:bottom-0 before:w-px before:bg-slate-200/70 dark:before:bg-white/10">
          <motion.div className="space-y-8" variants={LIST_VARIANTS}>
            {timeline.map(item => (
              <motion.div
                key={item.title + item.range}
                className="group relative"
                variants={ITEM_VARIANTS}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 380, damping: 26 }}
              >
                <div className="pointer-events-none absolute -inset-y-3 -left-6 -right-4 rounded-2xl bg-slate-100/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-white/5" />
                <span
                  className={[
                    "absolute -left-6 top-2 h-3 w-3 -translate-x-1/2 rounded-full transition-transform duration-200 group-hover:scale-110",
                    "ring-4 ring-white dark:ring-black",
                    item.dotClass,
                  ].join(" ")}
                />
                <div className="relative flex flex-col gap-2 origin-top-left transition-transform duration-200 will-change-transform group-hover:scale-[1.01] sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div className="space-y-1">
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </div>
                    <div className="text-sm italic text-slate-600 dark:text-slate-400">
                      {item.subtitle}
                    </div>
                    <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                      {item.bullets.map(bullet => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400/80 dark:bg-slate-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-500">
                    {item.range}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="grid gap-8 md:grid-cols-[160px_1fr] md:gap-12"
        variants={SECTION_VARIANTS}
      >
        <h2 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white md:pt-2">
          Projects
        </h2>
        <motion.div className="space-y-10" variants={LIST_VARIANTS}>
          {projects.map(project => (
            <motion.div
              key={project.name}
              className="group relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
              variants={ITEM_VARIANTS}
              whileHover={{ y: -2, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 380, damping: 26 }}
            >
              <div className="pointer-events-none absolute -inset-x-4 -inset-y-3 rounded-2xl bg-slate-100/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-white/5" />
              <div className="space-y-1">
                <div className="font-semibold text-slate-900 dark:text-white">
                  {project.name}
                </div>
                <p className="max-w-xl text-sm text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 sm:max-w-sm sm:justify-end">
                {project.tags.map(tag => (
                  <Badge key={tag} label={tag} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="grid gap-8 md:grid-cols-[160px_1fr] md:gap-12"
        variants={SECTION_VARIANTS}
      >
        <h2 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white md:pt-2">
          Hobbies
        </h2>
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2"
          variants={LIST_VARIANTS}
        >
          {hobbies.map(hobby => (
            <motion.div
              key={hobby.title}
              className="group relative space-y-1"
              variants={ITEM_VARIANTS}
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 380, damping: 26 }}
            >
              <div className="pointer-events-none absolute -inset-x-3 -inset-y-3 rounded-2xl bg-slate-100/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-white/5" />
              <div className="font-semibold text-slate-900 dark:text-white">
                {hobby.title}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {hobby.description}
              </p>
              <div
                className={["text-sm font-semibold", hobby.statClass].join(" ")}
              >
                {hobby.stat}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

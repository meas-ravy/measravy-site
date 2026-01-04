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
      title: "Amazon",
      subtitle: "Software Development Engineer",
      bullets: ["working on large scale messaging systems"],
      range: "2024 - Now",
    },
    {
      dotClass: "bg-amber-400",
      title: "California State Polytechnic University, Pomona",
      subtitle: "B.S. Computer Science",
      bullets: ["got my degree to make my parents proud"],
      range: "2020 - 2024",
    },
    {
      dotClass: "bg-emerald-400",
      title: "Amazon",
      subtitle: "Software Development Engineer Intern",
      bullets: ["worked on amazon fresh grocery experience"],
      range: "2023 - 2023",
    },
    {
      dotClass: "bg-rose-500",
      title: "Solace Notify",
      subtitle: "Founder",
      bullets: ["built reselling community and developed tools"],
      range: "2019 - 2023",
    },
  ] as const;

  const projects = [
    {
      name: "Cypher Chat",
      description:
        "Secure client-server chat web app enabling real-time and private communication.",
      tags: ["TypeScript", "React", "Next.js", "Node.js", "Express.js", "AWS"],
    },
    {
      name: "Sole Exchange",
      description:
        "Forum that allows users to post, interact, and search about anything sneaker related.",
      tags: ["React", "JavaScript", "Node.js", "Supabase"],
    },
    {
      name: "Spotify Data Dashboard",
      description:
        "Dashboard that fetches Spotify's Top 50 songs and visualizes data in text and chart form.",
      tags: ["React", "Spotify API", "JavaScript", "Node.js"],
    },
  ] as const;

  const hobbies = [
    {
      title: "YouTube",
      description: "documenting my life as a software engineer",
      stat: "19 videos",
      statClass: "text-rose-400",
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
      stat: "~$25,000 profit",
      statClass: "text-emerald-400",
    },
    {
      title: "Mechanical Keyboards",
      description: "fun but will be the reason why im homeless",
      stat: "3 custom keyboards",
      statClass: "text-violet-400",
    },
  ] as const;

  const badgeStyles: Record<string, string> = {
    TypeScript:
      "bg-sky-500/15 text-sky-300 ring-1 ring-sky-500/25 dark:bg-sky-500/20 dark:text-sky-200 dark:ring-sky-500/30",
    React:
      "bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-500/25 dark:bg-cyan-500/20 dark:text-cyan-200 dark:ring-cyan-500/30",
    "Next.js":
      "bg-slate-500/15 text-slate-300 ring-1 ring-slate-500/25 dark:bg-white/10 dark:text-slate-200 dark:ring-white/10",
    "Node.js":
      "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25 dark:bg-emerald-500/20 dark:text-emerald-200 dark:ring-emerald-500/30",
    "Express.js":
      "bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/25 dark:bg-amber-500/20 dark:text-amber-200 dark:ring-amber-500/30",
    AWS: "bg-orange-500/15 text-orange-300 ring-1 ring-orange-500/25 dark:bg-orange-500/20 dark:text-orange-200 dark:ring-orange-500/30",
    JavaScript:
      "bg-yellow-500/15 text-yellow-300 ring-1 ring-yellow-500/25 dark:bg-yellow-500/20 dark:text-yellow-200 dark:ring-yellow-500/30",
    Supabase:
      "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25 dark:bg-emerald-500/20 dark:text-emerald-200 dark:ring-emerald-500/30",
    "Spotify API":
      "bg-green-500/15 text-green-300 ring-1 ring-green-500/25 dark:bg-green-500/20 dark:text-green-200 dark:ring-green-500/30",
  };

  const Badge = ({ label }: { label: string }) => (
    <span
      className={[
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
        badgeStyles[label] ??
          "bg-slate-100 text-slate-700 ring-1 ring-slate-200/70 dark:bg-white/10 dark:text-slate-200 dark:ring-white/10",
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
                className="relative"
                variants={ITEM_VARIANTS}
              >
                <span
                  className={[
                    "absolute -left-6 top-2 h-3 w-3 -translate-x-1/2 rounded-full",
                    "ring-4 ring-white dark:ring-black",
                    item.dotClass,
                  ].join(" ")}
                />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
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
              className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
              variants={ITEM_VARIANTS}
            >
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
              className="space-y-1"
              variants={ITEM_VARIANTS}
            >
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

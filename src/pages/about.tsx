import { Badge } from "../components/bage";
import { motion } from "framer-motion";
import { PHOTO_COLLAGE, TIMELINE, PROJECTS, HOBBIES } from "../utils/constants";
import {
  PAGE_VARIANTS,
  SECTION_VARIANTS,
  LIST_VARIANTS,
  ITEM_VARIANTS,
  PHOTO_VARIANTS,
} from "../utils/animation";

export default function About() {
  return (
    <motion.div
      className="space-y-16"
      variants={PAGE_VARIANTS}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div className="space-y-2" variants={SECTION_VARIANTS}>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
          About
        </h1>
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
          Who I am.
        </p>
      </motion.div>

      {/* Photo Collage */}
      <motion.div className="flex justify-center" variants={SECTION_VARIANTS}>
        <motion.div
          className="flex items-center justify-center"
          variants={LIST_VARIANTS}
        >
          {PHOTO_COLLAGE.map((photo, index) => (
            <motion.div
              key={photo.src}
              custom={index}
              variants={PHOTO_VARIANTS}
              whileHover={{
                scale: 1.1,
                rotate: 0,
                zIndex: 50,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className={[
                "group relative aspect-4/3 h-44 overflow-hidden rounded-2xl shadow-2xl shadow-black/35 ring-1 ring-slate-200/70 sm:h-52 md:h-56",
                "cursor-pointer dark:ring-white/10",
                photo.className,
              ].join(" ")}
            >
              {/* Image */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
              />

              {/* Minimal Professional Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"
              >
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
                  className="absolute bottom-4 left-4 right-4 text-left"
                >
                  <p className="text-base font-semibold text-white sm:text-lg">
                    {photo.caption}
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="h-px w-8 bg-white/60" />
                    <p className="text-xs font-medium text-white/90">
                      {photo.year}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        className="grid gap-8 md:grid-cols-[160px_1fr] md:gap-12"
        variants={SECTION_VARIANTS}
      >
        <h2 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white md:pt-2">
          Timeline
        </h2>
        <div className="relative pl-10 before:content-[''] before:absolute before:left-4 before:top-0 before:bottom-0 before:w-px before:bg-slate-200/70 dark:before:bg-white/10">
          <motion.div className="space-y-8" variants={LIST_VARIANTS}>
            {TIMELINE.map(item => (
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

      {/* Projects */}
      <motion.div
        className="grid gap-8 md:grid-cols-[160px_1fr] md:gap-12"
        variants={SECTION_VARIANTS}
      >
        <h2 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white md:pt-2">
          Projects
        </h2>
        <motion.div className="space-y-10" variants={LIST_VARIANTS}>
          {PROJECTS.map(project => (
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

      {/* Hobbies */}
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
          {HOBBIES.map(hobby => (
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
              {hobby.stat && (
                <div
                  className={["text-sm font-semibold", hobby.statClass].join(
                    " "
                  )}
                >
                  {hobby.stat}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

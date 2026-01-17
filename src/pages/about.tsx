import { Badge } from "../components/bage";
import { motion } from "framer-motion";
import { HOBBIES } from "../data/hobbie";
import {} from "../utils/animation";
import { TIMELINE } from "../data/time-line";
import { PROJECTS } from "../data/project";
import { useEffect, useState } from "react";
import { FadeInSection } from "../utils/fadeIn-section";
import { PhotoGallery } from "../components/photo";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="space-y-16">
      <FadeInSection>
        <motion.h1 className="text-3xl font-bold">About</motion.h1>
        <motion.p className="text-sm sm:text-base leading-relaxed mb-6">
          Who I am.
        </motion.p>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <PhotoGallery isMobile={isMobile} />
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <motion.div className="grid gap-8 md:grid-cols-[160px_1fr] md:gap-12">
          <h2 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white md:pt-2">
            Timeline
          </h2>
          <div className="relative pl-10 before:content-[''] before:absolute before:left-4 before:top-0 before:bottom-0 before:w-px before:bg-slate-200/70 dark:before:bg-white/10">
            <motion.div className="space-y-8">
              {TIMELINE.map(item => (
                <motion.div
                  key={item.title + item.range}
                  className="group relative"
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
      </FadeInSection>

      <FadeInSection delay={0.6}>
        <motion.div className="grid gap-8 md:grid-cols-[160px_1fr] md:gap-12">
          <h2 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white md:pt-2">
            Projects
          </h2>
          <motion.div className="space-y-10">
            {PROJECTS.map(project => (
              <motion.div
                key={project.name}
                className="group relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
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
      </FadeInSection>

      <FadeInSection delay={0.8}>
        <motion.div className="grid gap-8 md:grid-cols-[160px_1fr] md:gap-12">
          <h2 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white md:pt-2">
            Hobbies
          </h2>
          <motion.div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {HOBBIES.map(hobby => (
              <motion.div
                key={hobby.title}
                className="group relative space-y-1"
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
                      " ",
                    )}
                  >
                    {hobby.stat}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </FadeInSection>
    </div>
  );
}

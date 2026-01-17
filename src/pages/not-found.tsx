import { Link } from "react-router-dom";
import { easeOut, motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

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

export default function NotFound() {
  return (
    <motion.div
      className="flex min-h-[60vh] flex-col items-center justify-center space-y-8 text-center"
      variants={PAGE_VARIANTS}
      initial="hidden"
      animate="show"
    >
      <motion.div className="space-y-4" variants={SECTION_VARIANTS}>
        <div className="text-8xl font-bold text-slate-900 dark:text-white">
          404
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Page Not Found
        </h1>
        <p className="max-w-md text-lg text-slate-600 dark:text-slate-400">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-3 sm:flex-row"
        variants={SECTION_VARIANTS}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white shadow-sm ring-1 ring-slate-900 transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:ring-white dark:hover:bg-slate-100"
        >
          <Home className="h-5 w-5" />
          Go Home
        </Link>
        <button
          type="button"
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-6 py-3 font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200/70 transition hover:bg-slate-200 dark:bg-white/10 dark:text-white dark:ring-white/10 dark:hover:bg-white/15"
        >
          <ArrowLeft className="h-5 w-5" />
          Go Back
        </button>
      </motion.div>
    </motion.div>
  );
}

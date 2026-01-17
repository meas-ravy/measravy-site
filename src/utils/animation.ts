import { easeOut } from "framer-motion";

// ============================================================================
//! ANIMATION VARIANTS in about page
// ============================================================================

export const PAGE_VARIANTS = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeOut, staggerChildren: 0.1 },
  },
};

export const SECTION_VARIANTS = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
};

export const LIST_VARIANTS = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

export const PHOTO_VARIANTS = {
  hidden: (index: number) => {
    // Each photo enters from a different direction matching its rotation
    const directions = [
      { x: -100, y: -80, rotate: -45 }, // Top-left for -rotate-8 photo
      { x: -60, y: -40, rotate: -20 }, // Left for -rotate-3 photo
      { x: 60, y: -40, rotate: 20 }, // Right for rotate-3 photo
      { x: 100, y: -80, rotate: 45 }, // Top-right for rotate-8 photo
    ];
    return {
      opacity: 0,
      scale: 0.7,
      ...directions[index],
    };
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },
};

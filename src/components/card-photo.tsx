import { motion } from "framer-motion";
import { useState } from "react";
import type { PhotoCardProps } from "../interface/photo-card";

const PhotoCard = ({
  image,
  date,
  location,
  caption,
  isMobile,
}: PhotoCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsFlipped(false);
    }
  };

  return (
    <div
      className="relative h-56 w-56 cursor-pointer"
      style={{
        cursor: isMobile ? "default" : "pointer",
        perspective: "1000px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div
          className="absolute h-full w-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={image}
            alt={caption}
            className="h-full w-full rounded-lg object-cover shadow-lg transition-all duration-200"
            style={{ mixBlendMode: "multiply" }}
            draggable={false}
          />
        </div>

        {/* Back of card */}
        <div
          className="absolute flex h-full w-full flex-col justify-center rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: "#4B5563",
          }}
        >
          <div className="text-center space-y-3">
            <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
            <p className="font-medium">{location}</p>
            <p className="text-sm">{caption}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PhotoCard;

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CoverProps {
  children: React.ReactNode;
  className?: string;
}

export const Cover: React.FC<CoverProps> = ({ children, className }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group inline-flex items-center px-3 py-1 cursor-pointer transition-all duration-300 align-baseline"
    >
      <motion.span
        animate={{
          scale: hovered ? [1, 1.04, 1.02] : 1,
          opacity: hovered ? 1 : 0.85,
        }}
        transition={{ duration: 0.3 }}
        className={cn(
          "absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/30 via-indigo-500/30 to-purple-600/30 backdrop-blur-sm border border-blue-500/40",
          hovered && "border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.35)]"
        )}
      />

      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl"
          >
            {[...Array(6)].map((_, i) => (
              <motion.span
                key={i}
                initial={{
                  x: `${(i * 20) % 100}%`,
                  y: "100%",
                  scale: 0.5,
                  opacity: 0,
                }}
                animate={{
                  y: "-20%",
                  scale: [0.5, 1, 0.4],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.2 + (i % 3) * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
                className="absolute w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_8px_#60a5fa]"
              />
            ))}
          </motion.span>
        )}
      </AnimatePresence>

      <span
        className={cn(
          "relative z-10 font-extrabold bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-white transition-all",
          className
        )}
      >
        {children}
      </span>
    </span>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BackgroundBeamsProps {
  className?: string;
}

export const BackgroundBeams = React.memo<BackgroundBeamsProps>(({ className }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none opacity-40 select-none z-0",
        className
      )}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M-100 200 C 300 100, 600 500, 1100 400"
          stroke="url(#beam-gradient-1)"
          strokeWidth="2"
          strokeDasharray="16 24"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: [0, -200] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M-50 600 C 200 800, 700 300, 1050 700"
          stroke="url(#beam-gradient-2)"
          strokeWidth="2"
          strokeDasharray="14 20"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: [0, 200] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="beam-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="beam-gradient-2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
});

BackgroundBeams.displayName = "BackgroundBeams";

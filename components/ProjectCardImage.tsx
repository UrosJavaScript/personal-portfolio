"use client";

import React, { useState } from "react";
import { Code2, Globe, Smartphone, Server } from "lucide-react";

export function ProjectCardImage({
  src,
  alt,
  category,
  className = "h-44",
}: {
  src: string;
  alt: string;
  category: string;
  className?: string;
}) {
  const [error, setError] = useState(false);

  const getCategoryIcon = () => {
    switch (category) {
      case "Mobile":
        return <Smartphone className="w-7 h-7 text-purple-400" />;
      case "Backend":
        return <Server className="w-7 h-7 text-emerald-400" />;
      case "Full-Stack":
        return <Globe className="w-7 h-7 text-blue-400" />;
      default:
        return <Code2 className="w-7 h-7 text-indigo-400" />;
    }
  };

  return (
    <div
      className={`relative w-full rounded-xl overflow-hidden bg-zinc-900/90 border border-zinc-800/60 ${className}`}
    >
      {!error ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 p-4 text-center">
          <div className="p-3 rounded-2xl bg-zinc-800/60 border border-zinc-700/50 mb-2">
            {getCategoryIcon()}
          </div>
          <span className="text-xs font-semibold text-zinc-200 tracking-wide font-mono line-clamp-1">
            {alt}
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
      <span className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-zinc-900/90 border border-zinc-700/60 text-[10px] font-mono font-medium text-zinc-300">
        {category}
      </span>
    </div>
  );
}

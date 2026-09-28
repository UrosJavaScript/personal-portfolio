"use client";

import React from "react";
import { Briefcase, MapPin, CheckCircle2 } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { timelineStyles } from "@/lib/dummyStyles";
import { timelineData } from "@/lib/projects-data";

export default function ExperiencePage() {
  const formattedTimelineData = timelineData.map((item) => ({
    title: item.year,
    content: (
      <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm p-6 mb-8 hover:border-zinc-700 transition-all">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-blue-400">
            {item.type}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
            {item.location}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white">
          {item.title}
        </h3>
        <p className="text-sm font-medium text-zinc-400 mt-0.5">
          {item.company}
        </p>

        <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
          {item.description}
        </p>

        <div className="mt-5 space-y-2">
          {item.highlights.map((hl, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <span>{hl}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-800/60 flex flex-wrap gap-1.5">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-zinc-800/60 border border-zinc-700/40 text-xs font-mono text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <div className={timelineStyles.container}>
      <div className={timelineStyles.innerContainer}>
        <div className="pb-8 border-b border-zinc-800/80 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <Briefcase className="w-4 h-4" />
            Career Journey
          </div>
          <h1 className={timelineStyles.mainTitle}>Work Experience & Milestones</h1>
          <p className={timelineStyles.mainParagraph}>
            A timeline of my professional journey as a Full-Stack Web Developer, building web systems, mobile applications, and working with clients and modern tech stacks.
          </p>
        </div>

        <Timeline data={formattedTimelineData} />
      </div>
    </div>
  );
}

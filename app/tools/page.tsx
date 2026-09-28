"use client";

import React, { useState } from "react";
import { Wrench, Code2, Zap } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";
import { toolsPageStyles } from "@/lib/dummyStyles";
import { toolsData } from "@/lib/projects-data";

const categories = ["All", "Frontend", "Backend", "Mobile", "DevOps", "Design", "Tools"];

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTools = toolsData.filter(
    (t) => selectedCategory === "All" || t.category === selectedCategory
  );

  return (
    <div className={toolsPageStyles.container}>
      <div className={toolsPageStyles.innerContainer}>
        <div className="pb-8 border-b border-zinc-800/80">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <Wrench className="w-4 h-4" />
            Stack & Technologies
          </div>
          <h1 className={toolsPageStyles.title}>Tools & Capabilities</h1>
          <p className={toolsPageStyles.description}>
            The primary programming languages, modern frameworks, database management systems, and developer tools I leverage on a daily basis.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-zinc-100 text-zinc-950 shadow-md scale-105"
                    : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTools.map((tool) => (
            <CometCard key={tool.name} className="h-full">
              <div className="h-full p-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm flex items-center justify-between gap-3 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all group">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:text-blue-300 transition-all shrink-0">
                    <Code2 className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5 truncate">
                      {tool.category}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 shrink-0 font-medium">
                  {tool.badge}
                </span>
              </div>
            </CometCard>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            Engineering Workflow & Standards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-zinc-300">
            <div>
              <h4 className="font-semibold text-white mb-2">Performance & SEO</h4>
              <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm">
                Clean semantic markup, lazy loading, image optimization, Core Web Vitals compliance, and responsive layout across all device widths.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Clean Architecture</h4>
              <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm">
                Modular component composition, strongly-typed TypeScript props, custom React hooks, and predictable state management.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">API & Integration</h4>
              <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm">
                Seamless REST API communication, asynchronous data fetching, error boundary handling, and secure authentication flows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

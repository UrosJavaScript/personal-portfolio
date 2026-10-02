"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Search,
  Layers,
  X,
  CheckCircle2,
} from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";
import { ProjectCardImage } from "@/components/ProjectCardImage";
import { projectsPageStyles } from "@/lib/dummyStyles";
import { projects, Project } from "@/lib/projects-data";
import { getAssetPath } from "@/lib/path";

const GithubIcon = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const categories = ["All", "Full-Stack", "Frontend", "Mobile", "Backend"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className={projectsPageStyles.container}>
      <div className={projectsPageStyles.innerContainer}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-800/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-2">
              <Layers className="w-4 h-4" />
              Portfolio Showcase
            </div>
            <h1 className={projectsPageStyles.title}>Selected Projects</h1>
            <p className={projectsPageStyles.description}>
              Explore my collection of production applications, responsive client solutions, mobile apps, and full-stack experiments.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 font-semibold">
              {filteredProjects.length} {filteredProjects.length === 1 ? "Project" : "Projects"}
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-zinc-100 text-zinc-950 shadow-md scale-105"
                      : "bg-zinc-900/80 text-zinc-400 border border-zinc-800/80 hover:bg-zinc-800 hover:text-zinc-200"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="relative min-w-60">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <CometCard key={project.id} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => setActiveModalProject(project)}
                className="h-full rounded-2xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm p-4 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 group cursor-pointer"
              >
                <div>
                  <ProjectCardImage
                    src={getAssetPath(project.image)}
                    alt={project.title}
                    category={project.category}
                    className="h-44 mb-4"
                  />

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-zinc-800/70 border border-zinc-700/40 text-[10px] font-mono text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-zinc-800/40 text-[10px] font-mono text-zinc-500">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className="flex items-center gap-2 mt-5 pt-3.5 border-t border-zinc-800/60"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.links.visit && (
                    <a
                      href={project.links.visit}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-950 text-xs font-semibold hover:bg-white transition-all shadow"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Live</span>
                    </a>
                  )}

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800/80 text-zinc-300 text-xs font-semibold hover:bg-zinc-700 hover:text-white transition-all border border-zinc-700"
                    >
                      <GithubIcon className="w-3 h-3" />
                      <span>Code</span>
                    </a>
                  )}

                  <Link
                    href={`/projects/${project.slug}`}
                    className="ml-auto text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                  >
                    Details &rarr;
                  </Link>
                </div>
              </motion.div>
            </CometCard>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-16 text-center py-16 border border-zinc-800 rounded-2xl bg-zinc-900/30">
            <p className="text-zinc-400 text-base">
              No projects found matching "{searchQuery}" in category "{selectedCategory}".
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-zinc-800 text-zinc-200 text-xs font-semibold hover:bg-zinc-700"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <ProjectCardImage
                src={getAssetPath(activeModalProject.image)}
                alt={activeModalProject.title}
                category={activeModalProject.category}
                className="h-60 mb-6"
              />

              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 font-semibold">
                  {activeModalProject.category}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {activeModalProject.title}
              </h2>

              <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                {activeModalProject.detailedDescription || activeModalProject.description}
              </p>

              {activeModalProject.features && (
                <div className="mt-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                    Key Features & Functionality
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-3">
                {activeModalProject.links.visit && (
                  <a
                    href={activeModalProject.links.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-100 text-zinc-950 font-bold text-sm hover:bg-white transition-all shadow"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Visit Live Application</span>
                  </a>
                )}

                {activeModalProject.links.github && (
                  <a
                    href={activeModalProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 font-semibold text-sm hover:bg-zinc-800 hover:text-white transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}

                <Link
                  href={`/projects/${activeModalProject.slug}`}
                  onClick={() => setActiveModalProject(null)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 font-semibold text-sm hover:bg-blue-600/20 transition-all"
                >
                  <span>Full Case Study</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

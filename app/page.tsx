"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  FileDown,
  Code2,
  Layers,
  Cpu,
  Mail,
} from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { Cover } from "@/components/ui/cover";
import { CometCard } from "@/components/ui/comet-card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ProjectCardImage } from "@/components/ProjectCardImage";
import { homePageStyles, spotlightStyles } from "@/lib/dummyStyles";
import { projects } from "@/lib/projects-data";

const GithubIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
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

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className={homePageStyles.container}>
      <div className={homePageStyles.backgroundGrid.wrapper}>
        <div className={`h-full w-full ${homePageStyles.backgroundGrid.pattern}`} />
      </div>
      <div className={homePageStyles.gradientOverlay} />

      <Spotlight className={spotlightStyles.position} fill="white" />
      <BackgroundBeams />

      <div className={`${homePageStyles.heroSection} relative z-10 pt-4 md:pt-8`}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={homePageStyles.calloutCard.wrapper}
        >
          <div className={homePageStyles.calloutCard.innerContainer}>
            <div className={homePageStyles.calloutCard.textContainer}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <p className={homePageStyles.calloutCard.text}>
                Available for New Projects & Full-Time Roles
              </p>
            </div>
            <span className={homePageStyles.calloutCard.badge}>
              Belgrade, Serbia
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={homePageStyles.h1}
        >
          Building scalable <br />
          <Cover>web & mobile</Cover> experiences.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={homePageStyles.h2}
        >
          Hi, I'm <span className="text-white font-semibold">Uroš Kovčić</span> — Medior Full-Stack Developer specializing in{" "}
          <span className="text-blue-400">React</span>, <span className="text-indigo-400">Next.js</span>,{" "}
          <span className="text-sky-400">TypeScript</span>, and <span className="text-emerald-400">PHP</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={homePageStyles.paragraph}
        >
          Over 3+ years of engineering robust digital products, transforming complex Figma designs into responsive, high-performance web applications, and delivering reliable backend architectures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-3.5 mb-16"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-950 font-bold text-sm hover:bg-white transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900/80 text-zinc-200 border border-zinc-800 font-semibold text-sm hover:bg-zinc-800 hover:text-white transition-all active:scale-95"
          >
            <Mail className="w-4 h-4 text-zinc-400" />
            <span>Get in Touch</span>
          </Link>

          <a
            href="/Uros_Kovcic_CV_2024.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 font-semibold text-sm hover:bg-blue-600/20 transition-all"
          >
            <FileDown className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </motion.div>

        <div className="mt-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800/80">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Work
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Handcrafted Products & Client Solutions
              </h3>
            </div>
            <Link
              href="/projects"
              className="text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white inline-flex items-center gap-1 group transition-colors"
            >
              <span>View All 20 Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <CometCard key={project.id} className="h-full">
                <div className="h-full rounded-2xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md p-5 flex flex-col justify-between hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-300 group">
                  <div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <ProjectCardImage
                        src={project.image}
                        alt={project.title}
                        category={project.category}
                        className="h-48 mb-5"
                      />
                    </Link>

                    <Link href={`/projects/${project.slug}`}>
                      <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                    </Link>

                    <p className="text-zinc-400 text-sm mt-2 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-zinc-800/60 border border-zinc-700/40 text-[11px] font-mono text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-zinc-800/60">
                    <div className="flex items-center gap-2">
                      {project.links.visit && (
                        <a
                          href={project.links.visit}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-100 text-zinc-900 text-xs font-semibold hover:bg-white transition-all shadow"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live</span>
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-800/80 text-zinc-200 text-xs font-semibold hover:bg-zinc-700 transition-all border border-zinc-700"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-xs font-semibold text-zinc-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </CometCard>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 pb-12">
          <div className="p-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-sm">
            <Code2 className="w-6 h-6 text-blue-400 mb-3" />
            <h4 className="text-white font-bold text-base">Modern Frontend</h4>
            <p className="text-zinc-400 text-sm mt-1">
              React 18+, Next.js App Router, TypeScript, Tailwind CSS, component modularity.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-sm">
            <Cpu className="w-6 h-6 text-emerald-400 mb-3" />
            <h4 className="text-white font-bold text-base">Backend & APIs</h4>
            <p className="text-zinc-400 text-sm mt-1">
              Node.js, PHP, CodeIgniter, MySQL, RESTful API design and asynchronous data flows.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-sm">
            <Layers className="w-6 h-6 text-purple-400 mb-3" />
            <h4 className="text-white font-bold text-base">Mobile Development</h4>
            <p className="text-zinc-400 text-sm mt-1">
              React Native & Expo cross-platform apps published to Google Play Store.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

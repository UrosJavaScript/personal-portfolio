import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, ArrowLeft, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/projects-data";
import { ProjectCardImage } from "@/components/ProjectCardImage";
import { getAssetPath } from "@/lib/path";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
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

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-950 p-6 pt-20 md:p-12 md:pt-20 lg:p-16 lg:pt-24">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>

        <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl mb-8">
          <ProjectCardImage
            src={getAssetPath(project.image)}
            alt={project.title}
            category={project.category}
            className="w-full h-full"
          />
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8">
          {project.detailedDescription || project.description}
        </p>

        {project.features && project.features.length > 0 && (
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 mb-8">
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-4">
              Key Features
            </h3>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-800 flex items-center gap-4">
          {project.links.visit && (
            <a
              href={project.links.visit}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-950 font-bold text-sm hover:bg-white transition-all shadow"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Visit Live Website</span>
            </a>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 font-semibold text-sm hover:bg-zinc-800 hover:text-white transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

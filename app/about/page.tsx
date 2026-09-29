"use client";

import React from "react";
import Link from "next/link";
import { User, FileDown, Mail } from "lucide-react";
import { pageStyles } from "@/lib/dummyStyles";

const interests = [
  "FULL-STACK DEV",
  "REACT & NEXT.JS",
  "TYPESCRIPT",
  "PHP & CODEIGNITER",
  "MOBILE EXPO",
  "PROBLEM SOLVING",
  "CLEAN ARCHITECTURE",
];

const techStack = [
  "React 18+",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "Node.js",
  "PHP",
  "CodeIgniter",
  "MySQL",
  "React Native",
  "Redux",
  "Git / GitHub",
];

export default function AboutPage() {
  return (
    <div className={pageStyles.container}>
      <div className={pageStyles.wrapper}>
        <div className="pb-8 border-b border-zinc-800/80">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <User className="w-4 h-4" />
            About Me
          </div>
          <h1 className={pageStyles.heading}>Uroš Kovčić</h1>

          <div className={pageStyles.interestsContainer}>
            {interests.map((interest, index) => (
              <span key={interest} className={pageStyles.interestItem}>
                {interest}
                {index < interests.length - 1 && (
                  <span className={pageStyles.dotSeparator}>•</span>
                )}
              </span>
            ))}
          </div>

          <div className={pageStyles.techStackContainer}>
            {techStack.map((tech) => (
              <span key={tech} className={pageStyles.techPill}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={pageStyles.sectionsContainer}>
          <div className={pageStyles.section}>
            <h2 className={pageStyles.sectionHeading}>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block mr-2" />
              Who I Am
            </h2>
            <p className={pageStyles.sectionParagraph}>
              I am a seasoned Medior Full-Stack Web Developer with a strong three-year professional journey. I specialize in both frontend engineering and backend system integration, with a deep focus on React, Next.js, TypeScript, and modern JavaScript ecosystems.
            </p>
            <p className={pageStyles.sectionParagraph}>
              Over the course of my career, I have contributed to complex commercial projects, including the Tortilla Casa restaurant platform, the Almex corporate machinery web experience, Master Team's digital infrastructure, and healthcare mobile applications like RAZ Caregiver.
            </p>
          </div>

          <div className={pageStyles.section}>
            <h2 className={pageStyles.sectionHeading}>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block mr-2" />
              Philosophy & Approach
            </h2>
            <p className={pageStyles.sectionParagraph}>
              My unwavering dedication to perpetual learning and swift adaptability to novel challenges is what sets my work apart. I believe that writing code is not merely about producing syntax, but about creating intuitive, lightning-fast, and accessible experiences that solve real user needs.
            </p>
            <p className={pageStyles.sectionParagraph}>
              Whether architecting modular component libraries from Figma, implementing resilient REST APIs, or packaging mobile builds for Google Play, I bring a meticulous eye for detail and a passionate commitment to software excellence.
            </p>
          </div>

          <div className={pageStyles.section}>
            <h2 className={pageStyles.sectionHeading}>
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block mr-2" />
              Location & Collaboration
            </h2>
            <p className={pageStyles.sectionParagraph}>
              Based in Belgrade, Serbia, I work with both domestic and international clients, engineering teams, and startups. I am available for new full-stack contracts, frontend development roles, and collaborative projects.
            </p>
          </div>
        </div>

        <div className={pageStyles.ctaContainer}>
          <a
            href="/Uros_Kovcic_CV_2024.pdf"
            download
            className={pageStyles.ctaButtonPrimary}
          >
            <FileDown className="w-4 h-4" />
            <span>Download CV (PDF)</span>
          </a>

          <Link href="/contact" className={pageStyles.ctaButtonSecondary}>
            <Mail className={pageStyles.emailIcon} />
            <span>Get in Touch</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

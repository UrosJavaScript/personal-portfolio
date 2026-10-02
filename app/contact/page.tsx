'use client'

import React, { useState } from 'react'
import {
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Copy,
  ExternalLink,
  Clock,
  Sparkles,
  PhoneCall,
  Laptop,
} from 'lucide-react'
import { contactPageStyles } from '@/lib/dummyStyles'

const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
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
)

const LinkedinIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function ContactPage() {
  const [copied, setCopied] = useState(false)

  const email = 'kowcicuros70@gmail.com'
  const phone = '+381691217273'
  const githubUrl = 'https://github.com/UrosJavaScript'
  const linkedinUrl = 'https://www.linkedin.com/in/uros-kovcic-10286417b/'
  const whatsappUrl = `https://api.whatsapp.com/send?phone=+381691217273&text=${encodeURIComponent(
    'Hello Uros! I checked your portfolio and would like to connect.'
  )}`
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}`

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className={contactPageStyles.container}>
      <div className={contactPageStyles.innerContainer}>
        {/* Header */}
        <div className="pb-8 border-b border-zinc-800/80">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <Mail className="w-4 h-4" />
            Get In Touch
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className={contactPageStyles.title}>Let's Collaborate</h1>
              <p className={contactPageStyles.description}>
                Interested in working together, discussing a project
                opportunity, or hiring for a role? Reach out directly via email,
                WhatsApp, or professional socials.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium self-start md:self-auto shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Hire
            </div>
          </div>
        </div>

        {/* Primary Contact Cards Grid */}
        <div className={contactPageStyles.grid}>
          {/* Email Card */}
          <a href={`mailto:${email}`} className={contactPageStyles.contactCard}>
            <div className={contactPageStyles.contactIconContainer}>
              <Mail className={contactPageStyles.contactIcon} />
            </div>
            <h3 className={contactPageStyles.cardTitle}>Direct Email</h3>
            <p className={contactPageStyles.cardValue}>{email}</p>
            <div className="mt-3 flex items-center gap-2 text-xs text-zinc-500 font-medium group-hover:text-blue-400 transition-colors">
              <span>Send direct email</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </a>

          {/* WhatsApp Card */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={contactPageStyles.contactCard}
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
              <MessageCircle className={contactPageStyles.contactIcon} />
            </div>
            <h3 className={contactPageStyles.cardTitle}>WhatsApp Chat</h3>
            <p className={contactPageStyles.cardValue}>{phone}</p>
            <div className="mt-3 flex items-center gap-2 text-xs text-zinc-500 font-medium group-hover:text-emerald-400 transition-colors">
              <span>Open WhatsApp message</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </a>

          {/* Location Card */}
          <div className={contactPageStyles.contactCard}>
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
              <MapPin className={contactPageStyles.contactIcon} />
            </div>
            <h3 className={contactPageStyles.cardTitle}>Location</h3>
            <p className={contactPageStyles.cardValue}>Belgrade, Serbia</p>
            <div className="mt-3 text-xs text-zinc-500 font-medium">
              CET (UTC +1) • Remote Worldwide
            </div>
          </div>
        </div>

        {/* Action Center & Professional Links */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Connect Options */}
          <div className="p-6 sm:p-8 rounded-3xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm space-y-4">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-blue-400" />
              Direct Communication
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              For fastest response, feel free to use 1-click email compose or
              copy the address directly:
            </p>

            <div className="space-y-3">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/50 text-xs font-semibold text-zinc-200 transition-all hover:border-zinc-600"
              >
                <span className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-red-400" />
                  Compose directly in Gmail
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/50 text-xs font-semibold text-zinc-200 transition-all hover:border-zinc-600"
              >
                <span className="flex items-center gap-2.5">
                  <Copy className="w-4 h-4 text-blue-400" />
                  {copied ? 'Copied to clipboard!' : 'Copy Email Address'}
                </span>
                {copied && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                )}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-800/40 text-xs font-semibold text-emerald-300 transition-all hover:border-emerald-700/60"
              >
                <span className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  Instant WhatsApp Conversation
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-500" />
              </a>
            </div>
          </div>

          {/* Social Profiles & Availability Details */}
          <div className="p-6 sm:p-8 rounded-3xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm space-y-5">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Laptop className="w-5 h-5 text-indigo-400" />
              Profiles & Availability
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Explore my open-source repositories and connect on LinkedIn for
              work history and recommendations:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/50 text-xs font-semibold text-zinc-200 transition-all hover:border-zinc-600 group"
              >
                <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-300 group-hover:text-white">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white">GitHub</div>
                  <div className="text-[10px] text-zinc-400 font-mono">
                    @UrosJavaScript
                  </div>
                </div>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/50 text-xs font-semibold text-zinc-200 transition-all hover:border-zinc-600 group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-950/50 border border-blue-800/40 flex items-center justify-center text-blue-400 group-hover:text-blue-300">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white">LinkedIn</div>
                  <div className="text-[10px] text-zinc-400 font-mono">
                    Uros Kovcic
                  </div>
                </div>
              </a>
            </div>

            <div className="pt-4 border-t border-zinc-800/80 space-y-2">
              <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                <Clock className="w-3.5 h-3.5 text-zinc-500" />
                <span>Response Time: Usually within a few hours</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
                <span>
                  Focus: Next.js, React, TypeScript, Mobile & Full-Stack
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

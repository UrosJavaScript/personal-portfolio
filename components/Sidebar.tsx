'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  FolderGit2,
  Briefcase,
  Wrench,
  User,
  Mail,
  Menu,
  X,
  FileDown,
} from 'lucide-react'
import { getAssetPath } from '@/lib/path'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

const GithubIcon: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const WhatsAppIcon: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
)

interface NavItem {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/projects', label: 'Projects', icon: FolderGit2 },
  { href: '/experience', label: 'Experience', icon: Briefcase },
  { href: '/tools', label: 'Tools', icon: Wrench },
  { href: '/about', label: 'About', icon: User },
  { href: '/contact', label: 'Contact', icon: Mail },
]

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/UrosJavaScript',
    icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/uros-kovcic-10286417b',
    icon: LinkedinIcon,
  },
  {
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=+381691217273&text=Hello!%20Contact%20me%20:)',
    icon: WhatsAppIcon,
  },
  {
    label: 'Email',
    href: 'mailto:kowcicuros70@gmail.com',
    icon: Mail,
  },
]

export const Sidebar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Floating Docked Sidebar */}
      <aside className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-6 py-6 px-3 rounded-3xl bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/80 shadow-2xl shadow-black/80">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="relative group p-2 rounded-2xl bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/50 transition-all hover:scale-105"
          title="Uros Kovcic Portfolio"
        >
          <img
            src={getAssetPath('/faviconLogo.png')}
            alt="UK"
            className="w-8 h-8 object-contain"
          />
          <span className="sr-only">Home</span>
        </Link>

        <div className="w-6 h-px bg-zinc-800" />

        {/* Navigation Items */}
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative p-3 rounded-2xl transition-all duration-200 flex items-center justify-center ${
                  isActive
                    ? 'bg-zinc-100 text-zinc-950 shadow-lg shadow-white/10'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/70'
                }`}
              >
                <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />

                {/* Tooltip */}
                <span className="absolute left-full ml-3 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl">
                  {item.label}
                </span>

                {/* Active indicator dot */}
                {isActive && (
                  <motion.span
                    layoutId="activeDockDot"
                    className="absolute -right-1 w-1.5 h-1.5 rounded-full bg-blue-500"
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="w-6 h-px bg-zinc-800" />

        {/* Social Links */}
        <div className="flex flex-col gap-2">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 rounded-xl text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/60 transition-all"
                title={social.label}
              >
                <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span className="absolute left-full ml-3 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl">
                  {social.label}
                </span>
              </a>
            )
          })}
        </div>
      </aside>

      {/* Mobile Top Header */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-50 h-16 px-4 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <img
            src={getAssetPath('/faviconLogo.png')}
            alt="Logo"
            className="w-7 h-7 object-contain"
          />
          <span className="font-bold text-sm tracking-tight text-white flex items-center gap-1.5">
            Uroš Kovčić
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="/Uros_Kovcic_CV_2024.pdf"
            download
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium inline-flex items-center gap-1.5"
          >
            <FileDown className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">CV</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-16 z-40 p-5 bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/80 shadow-2xl flex flex-col gap-4"
          >
            <nav className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-zinc-100 text-zinc-950 font-semibold'
                        : 'bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </nav>

            <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-medium">Connect</span>
              <div className="flex items-center gap-2">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation Bar */}
      <div className="lg:hidden fixed bottom-3 inset-x-4 z-40 h-14 bg-zinc-900/90 backdrop-blur-xl border border-zinc-800/80 rounded-2xl shadow-2xl shadow-black flex items-center justify-around px-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`p-2.5 rounded-xl transition-all ${
                isActive
                  ? 'bg-zinc-100 text-zinc-950 shadow-md scale-105'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Icon className="w-4 h-4" />
            </Link>
          )
        })}
      </div>
    </>
  )
}

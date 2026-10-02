import type { Metadata } from 'next'
import './globals.css'
import { Sidebar } from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Portfolio | Uros Kovcic - Full-Stack Developer',
  description:
    'Personal developer portfolio of Uros Kovcic showcasing projects, skills, tools, experience, and contact information.',
  icons: {
    icon: '/faviconLogo.png',
  },
  openGraph: {
    title: 'Portfolio | Uros Kovcic - Full-Stack Developer',
    description:
      'Personal developer portfolio of Uros Kovcic showcasing projects, skills, tools, experience, and contact information.',
    images: ['/faviconLogo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-zinc-950 text-zinc-100 antialiased selection:bg-blue-600 selection:text-white overflow-x-hidden min-h-screen flex flex-col justify-between">
        <Sidebar />
        <main className="w-full grow lg:pl-28">{children}</main>

        <footer className="w-full py-8 px-6 lg:pl-32 border-t border-zinc-900 bg-zinc-950/80 text-center text-xs text-zinc-500 font-mono">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              © {new Date().getFullYear()} Uroš Kovčić. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-zinc-400">
              <span>Built with Next.js, TypeScript & Tailwind</span>
              <span>•</span>
              <span>Belgrade, Serbia</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

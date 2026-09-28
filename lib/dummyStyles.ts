import type { CSSProperties } from "react";

export const homePageStyles = {
  container: "relative bg-zinc-950 p-6 pt-20 md:p-12 md:pt-20 lg:p-16 lg:pt-20 overflow-hidden min-h-screen",
  backgroundGrid: {
    wrapper: "pointer-events-none absolute inset-0 z-0 [background-size:40px_40px] select-none opacity-30",
    pattern: "[background-image:linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)]"
  },
  gradientOverlay: "absolute inset-0 z-0 bg-gradient-to-b from-zinc-950/30 via-transparent to-zinc-950 pointer-events-none",
  heroSection: "w-full max-w-[900px] mx-auto",
  h1: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] font-extrabold tracking-tight mb-4 text-zinc-100",
  h2: "text-lg sm:text-xl md:text-2xl text-zinc-400 font-medium mb-6",
  calloutCard: {
    wrapper: "w-full sm:w-auto inline-flex rounded-2xl p-2.5 px-4 bg-white/[0.04] border border-white/10 backdrop-blur-md transition-all hover:bg-white/[0.07] hover:border-white/20 mb-6",
    innerContainer: "flex items-center gap-3",
    textContainer: "flex items-center gap-2.5 min-w-0",
    icon: "w-4 h-4 text-emerald-400 flex-shrink-0 animate-pulse",
    text: "text-xs sm:text-sm font-medium text-zinc-300",
    badge: "text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
  },
  paragraph: "text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-[760px]",
  link: "underline text-zinc-200 hover:text-white transition-colors underline-offset-4 decoration-zinc-600 hover:decoration-white",
  article: {
    wrapper: "rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm shadow-2xl overflow-hidden max-w-[800px] hover:border-zinc-700 transition-all",
    videoContainer: "relative w-full h-auto overflow-hidden bg-zinc-950",
    video: "w-full h-auto max-h-[400px] object-cover",
    videoStyles: {
      WebkitUserSelect: 'none',
      userSelect: 'none',
      pointerEvents: 'none'
    } as CSSProperties,
    content: "p-6",
    header: "flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2",
    headerIcon: "w-4 h-4 text-blue-400",
    title: "font-bold text-xl md:text-2xl text-zinc-100 mb-2",
    description: "text-sm sm:text-base text-zinc-400 leading-relaxed",
    linkContainer: "mt-5 flex items-center gap-4",
    link: "inline-flex items-center text-sm font-medium text-zinc-200 hover:text-white transition-colors",
    linkIcon: "w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1"
  }
};

export const spotlightStyles = {
  position: "-top-40 z-0 left-0 md:-top-20 md:left-48"
};

export const pageStyles = {
  container: "flex min-h-screen pt-20 w-full items-start justify-center bg-zinc-950 px-6 py-12 md:px-12 md:py-20 lg:px-16",
  wrapper: "w-full max-w-4xl",
  backgroundContainer: "relative",
  backgroundEffect: "absolute inset-0 rounded-2xl overflow-hidden pointer-events-none",
  content: "relative z-10",
  heading: "text-4xl font-extrabold tracking-tight text-zinc-100 md:text-5xl lg:text-6xl",
  interestsContainer: "mt-6 flex flex-wrap gap-x-3 gap-y-2 text-xs sm:text-sm font-mono tracking-wider text-zinc-400",
  interestItem: "flex items-center",
  dotSeparator: "ml-3 text-zinc-600",
  techStackContainer: "mt-8 flex flex-wrap gap-2.5",
  techPill: "rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm px-4 py-1.5 text-xs sm:text-sm font-medium text-zinc-300 transition-all hover:border-zinc-700 hover:text-white hover:bg-zinc-800/80",
  sectionsContainer: "mt-12 space-y-10",
  section: "",
  sectionHeading: "text-xl sm:text-2xl font-bold text-zinc-100 flex items-center gap-3",
  sectionParagraph: "mt-3 leading-relaxed text-zinc-400 text-base sm:text-lg",
  link: "text-zinc-200 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-white hover:decoration-zinc-400",
  ctaContainer: "mt-12 flex flex-wrap gap-4",
  ctaButtonPrimary: "inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-white hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/5",
  ctaButtonSecondary: "inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 px-6 py-3 text-sm font-semibold text-zinc-200 transition-all hover:border-zinc-700 hover:bg-zinc-800 hover:text-white active:scale-[0.98]",
  emailIcon: "h-4 w-4"
};

export const timelineStyles = {
  container: "min-h-screen bg-zinc-950 p-4 md:p-8 pt-20 lg:pt-24",
  innerContainer: "mx-auto max-w-5xl",
  mainTitle: "text-4xl font-extrabold tracking-tight text-white md:text-5xl",
  mainParagraph: "mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl",
  timelineBadge: "inline-block rounded-full bg-blue-500/10 border border-blue-500/20 px-3.5 py-1",
  timelineBadgeText: "text-xs font-semibold uppercase tracking-wider text-blue-400",
  legendContainer: "mt-6 flex flex-wrap gap-4",
  legendItem: "flex items-center gap-2",
  legendDot: "h-2 w-2 rounded-full",
  legendText: "text-xs sm:text-sm text-zinc-400",
  itemContainer: "space-y-4",
  itemFlexContainer: "flex items-start gap-3",
  iconContainer: "mt-1 rounded-xl p-2.5 shrink-0",
  contentTitle: "text-lg font-bold text-white",
  contentSubtitle: "mt-1 text-sm text-zinc-400",
  contentText: "mt-2 text-sm text-zinc-300 leading-relaxed"
};

export const projectsPageStyles = {
  container: "min-h-screen bg-zinc-950 p-6 pt-20 md:p-12 md:pt-20 lg:p-16 lg:pt-24",
  innerContainer: "mx-auto max-w-6xl",
  title: "text-4xl sm:text-5xl font-extrabold tracking-tight text-white",
  description: "mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl",
  filterContainer: "mt-8 flex flex-wrap gap-2 pb-2",
  filterButton: "px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all",
  filterButtonActive: "bg-zinc-100 text-zinc-950 font-semibold shadow-md",
  filterButtonInactive: "bg-zinc-900/60 text-zinc-400 border border-zinc-800/80 hover:bg-zinc-800 hover:text-zinc-200",
  projectsGrid: "mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  projectCard: "group relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60",
  imageContainer: "relative h-48 w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/50",
  bookmarkIcon: "w-4 h-4 text-amber-400",
  visitButton: "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-100 text-zinc-900 text-xs font-semibold hover:bg-white transition-all shadow",
  otherButton: "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-800 text-zinc-200 text-xs font-semibold hover:bg-zinc-700 transition-all border border-zinc-700"
};

export const contactPageStyles = {
  container: "min-h-screen bg-zinc-950 p-6 pt-20 md:p-12 md:pt-20 lg:p-16 lg:pt-24",
  innerContainer: "mx-auto max-w-4xl",
  title: "text-4xl sm:text-5xl font-extrabold tracking-tight text-white",
  description: "mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl",
  grid: "mt-12 grid grid-cols-1 md:grid-cols-3 gap-4",
  contactCard: "group p-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/50 backdrop-blur-sm hover:border-zinc-700 hover:bg-zinc-900/80 transition-all block",
  contactIconContainer: "w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 transition-transform",
  contactIcon: "w-6 h-6",
  cardTitle: "text-sm font-semibold text-zinc-400",
  cardValue: "text-base font-medium text-zinc-100 mt-1 truncate group-hover:text-blue-400 transition-colors"
};

export const toolsPageStyles = {
  container: "min-h-screen bg-zinc-950 p-6 pt-20 md:p-12 md:pt-20 lg:p-16 lg:pt-24",
  innerContainer: "mx-auto max-w-6xl",
  title: "text-4xl sm:text-5xl font-extrabold tracking-tight text-white",
  description: "mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl",
  grid: "mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
  card: "p-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm flex items-center gap-4 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all",
  iconWrapper: "w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center shrink-0",
  badge: "text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/50"
};

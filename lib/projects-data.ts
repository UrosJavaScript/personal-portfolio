export interface Project {
  id: string
  title: string
  description: string
  detailedDescription: string
  slug: string
  image: string
  tags: string[]
  status: 'active' | 'archived'
  category: 'Full-Stack' | 'Frontend' | 'Mobile' | 'Backend'
  featured?: boolean
  links: {
    visit?: string
    github?: string
    pypi?: string
    link?: string
    youtube?: string
    archive?: string
    howIBuilt?: string
  }
  author?: string
  authorAvatar?: string
  techStack: string[]
  features: string[]
  learningOutcomes?: string[]
}

export interface ToolItem {
  name: string
  category: string
  badge: string
  icon?: string
}

export interface TimelineItem {
  year: string
  title: string
  company: string
  location: string
  type: string
  description: string
  technologies: string[]
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 'zoom-apk',
    title: 'Expo Mobile App (ZoomCity)',
    slug: 'zoom-apk',
    category: 'Mobile',
    featured: false,
    description:
      'Cross-platform mobile application for discovering and bookmarking local spots and destinations.',
    detailedDescription:
      'Developed an Expo React Native mobile application for travelers and locals to discover city spots, bookmark favorite locations, and navigate using Google Maps APIs.',
    image: '/images/projects/zoom-apk.jpg',
    tags: ['React Native', 'Expo', 'Redux', 'Google Maps API'],
    techStack: [
      'React Native',
      'Expo',
      'JavaScript',
      'Redux Toolkit',
      'Google Places API',
    ],
    status: 'active',
    links: {
      visit:
        'https://play.google.com/store/apps/details?id=com.uroskovcicdeveloper.zoomcity',
      github:
        'https://github.com/UrosJavaScript/ExpoCli-locationApk/tree/feature/task-2',
    },
    features: [
      'Published on Google Play Store',
      'Interactive maps and geolocation',
      'Bookmarking and saved destinations in Redux state',
      'Cross-platform Android & iOS codebase',
    ],
  },
  {
    id: 'tortilla-casa',
    title: 'Tortilla Casa',
    slug: 'tortilla-casa',
    category: 'Full-Stack',
    featured: true,
    description:
      'Production food chain web application with rich interactive menu, location finder, and responsive design.',
    detailedDescription:
      'Contributed to the Tortilla Casa production web project, focusing on building high-performance frontend interfaces, smooth animation, backend API integrations, and complete multi-language responsiveness across all devices.',
    image: '/images/projects/tortilla-casa-project.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Axios', 'i18n'],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Axios',
      'REST APIs',
    ],
    status: 'active',
    links: {
      visit: 'https://tortilla-casa.com/en',
    },
    features: [
      'Interactive restaurant menu with dietary filters',
      'Location and branch locator',
      'Fluid responsiveness for mobile and desktop',
      'Multi-language localization support',
    ],
  },
  {
    id: 'raz-cg',
    title: 'RAZ Caregiver',
    slug: 'raz-cg',
    category: 'Mobile',
    featured: false,
    description:
      'Mobile healthcare assistance application designed for dementia care support.',
    detailedDescription:
      'Contributed to the development of the RAZ Caregiver mobile application aimed at supporting families and healthcare workers caring for individuals with memory loss and dementia.',
    image: '/images/projects/raz-cg.jpg',
    tags: ['React Native', 'PHP', 'CodeIgniter', 'Mobile App'],
    techStack: ['React Native', 'CodeIgniter', 'PHP', 'MySQL'],
    status: 'active',
    links: {
      visit:
        'https://play.google.com/store/apps/details?id=com.comit.caregiver&hl=en_US',
    },
    features: [
      'Accessible UI designed for patient clarity',
      'Real-time notifications and emergency alerts',
      'Backend sync with Caregiver servers',
    ],
  },
  {
    id: 'fivebuild-vrati',
    title: 'Fivebuild Vrati',
    slug: 'fivebuild-vrati',
    category: 'Frontend', // ili Web Development
    featured: false,
    description:
      'Custom web platform developed using native HTML, CSS, and JavaScript.',
    detailedDescription:
      'A custom-built web application developed for client needs to effectively showcase and present their services. Crafted entirely with vanilla HTML5, CSS3, and modern JavaScript for optimal performance, clean layout, and professional presentation.',
    image: '/images/projects/fivebuild-vrati.jpg', // Prilagodi naziv slike ako je imaš u images folderu
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Custom Design'],
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    status: 'active',
    links: {
      visit: 'https://fivebuild.bg/vrati/',
    },
    features: [
      'Custom handcrafted UI and layout',
      'Vanilla JavaScript interactivity',
      'Fully responsive design across all devices',
    ],
  },
  {
    id: 'master-team',
    title: 'Master Team Platform',
    slug: 'master-team',
    category: 'Full-Stack',
    featured: true,
    description:
      'Corporate business website built from custom Figma designs with dynamic PHP backend content management.',
    detailedDescription:
      'Developed the complete frontend architecture translating high-fidelity Figma designs into clean semantic code, and integrated PHP CodeIgniter backend logic to render dynamic business services and client portfolios.',
    image: '/images/projects/master-team-project.jpg',
    tags: ['JavaScript', 'PHP', 'CodeIgniter', 'CSS3', 'Figma'],
    techStack: ['JavaScript', 'PHP', 'CodeIgniter', 'MySQL', 'CSS3', 'HTML5'],
    status: 'active',
    links: {
      visit: 'https://www.masterteam.rs/',
    },
    features: [
      'Pixel-perfect Figma to code translation',
      'Dynamic backend CMS integrations',
      'Optimized asset loading and SEO meta tags',
      'Interactive service sliders and quote inquiry forms',
    ],
  },
  {
    id: 'almex',
    title: 'Almex Corporate Website',
    slug: 'almex',
    category: 'Full-Stack',
    featured: true,
    description:
      'Extensive agricultural machinery catalog, service booking, and company portal.',
    detailedDescription:
      'Spearheaded the frontend development and user interaction engineering for Almex, building modern product catalogs, search filtering, dynamic product listings, and service request flows.',
    image: '/images/projects/almex-project.jpg',
    tags: ['JavaScript', 'PHP', 'CodeIgniter', 'MySQL', 'Responsive UI'],
    techStack: [
      'JavaScript',
      'PHP',
      'CodeIgniter',
      'MySQL',
      'CSS3',
      'Bootstrap',
    ],
    status: 'active',
    links: {
      visit: 'https://www.almex.rs/',
    },
    features: [
      'Comprehensive machinery and equipment catalogs',
      'Faceted searching and dynamic filtering',
      'Mobile-first responsive layout',
      'Contact and dealership inquiry system',
    ],
  },
  {
    id: 'usepopcorn-movie',
    title: 'UsePopCorn App',
    slug: 'usepopcorn-movie',
    category: 'Frontend',
    featured: false,
    description:
      'Movie discovery, tracking, and personal rating platform powered by the OMDB API.',
    detailedDescription:
      'A dynamic movie application built in React utilizing custom hooks, localStorage persistence, and live OMDB API data. Users can search movies, inspect detailed plots, cast and ratings, and maintain a watched watch-list.',
    image: '/images/projects/usepopcorn-movie.jpg',
    tags: ['React', 'Custom Hooks', 'LocalStorage', 'OMDB API'],
    techStack: ['React', 'JavaScript', 'CSS3', 'OMDB API', 'Custom Hooks'],
    status: 'active',
    links: {
      visit: 'https://usepopcorn-watched.netlify.app/',
      github: 'https://github.com/UrosJavaScript/usepopcorn-movie',
    },
    features: [
      'Real-time movie search with debounce',
      'Persistent personal watched list via localStorage',
      'Custom star rating component',
      'Detailed movie metrics (runtime, IMDb score, plot)',
    ],
  },
  {
    id: 'managing-tasks',
    title: 'Managing Tasks',
    slug: 'managing-tasks',
    category: 'Frontend',
    featured: true,
    description:
      'Task management web application with authentication, task prioritization, status filtering, and editing.',
    detailedDescription:
      'A modern productivity web app designed for agile task tracking. Enables users to authenticate, create, filter, categorize, prioritize, and manage tasks through a fast and intuitive interface.',
    image: '/images/projects/managing-tasks.jpg',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Axios'],
    techStack: [
      'React',
      'Vite',
      'TypeScript',
      'Tailwind CSS',
      'Axios',
      'Context API',
    ],
    status: 'active',
    links: {
      visit: 'https://managing-tasks-app.netlify.app',
      github: 'https://github.com/UrosJavaScript/managing-tasks',
    },
    features: [
      'User authentication and personalized task boards',
      'Priority tags and deadline scheduling',
      'Fast responsive search and category filters',
      'Full CRUD operation with optimistic UI',
    ],
  },
  {
    id: 'wp-blog',
    title: 'Medical Center Blog System',
    slug: 'wp-blog',
    category: 'Backend',
    featured: false,
    description:
      'Dynamic editorial blog system with Advanced Custom Fields (ACF) and author profiles.',
    detailedDescription:
      'Created a customized dynamic medical blog platform for a Swiss healthcare clinic, featuring custom field post schemas, author attribution, categorization, and responsive reading views.',
    image: '/images/projects/blog.jpg',
    tags: ['WordPress', 'PHP', 'ACF', 'CSS3'],
    techStack: ['WordPress', 'PHP', 'ACF', 'CSS3', 'HTML5'],
    status: 'active',
    links: {
      visit: 'https://www.hernienzentrum.ch/blog/',
    },
    features: [
      'Custom post types and ACF field layouts',
      'Author biographical cards and publish dates',
      'SEO and structured readability optimization',
    ],
  },
  {
    id: 'split-bill',
    title: 'Split a Bill (Eat-N-Split)',
    slug: 'split-bill',
    category: 'Frontend',
    featured: false,
    description:
      'Intuitive shared expense calculator to split meals and debts with friends with ease.',
    detailedDescription:
      'A practical utility web application allowing groups of friends to split restaurant bills, track shared balances, and resolve who owes whom in real-time.',
    image: '/images/projects/split-bill.jpg',
    tags: ['React', 'JSX', 'CSS3', 'Reusable Components'],
    techStack: ['React', 'JavaScript', 'CSS3'],
    status: 'active',
    links: {
      visit: 'https://eat-n-split-app-web.netlify.app/',
      github: 'https://github.com/UrosJavaScript/eat-n-split',
    },
    features: [
      'Instant calculation of individual vs shared costs',
      'Friend balance tracker',
      'Clean modular component architecture',
    ],
  },
  {
    id: 'search-input',
    title: 'Autocomplete Search App',
    slug: 'search-input',
    category: 'Frontend',
    featured: false,
    description:
      'High-performance autocomplete input with asynchronous API debouncing and multi-select tags.',
    detailedDescription:
      'Built an autocomplete search input that initiates immediate API requests upon the first keystroke, returning suggestions with keyboard navigation, multi-item selection, and step-by-step submission.',
    image: '/images/projects/search-input.jpg',
    tags: ['React', 'Vite', 'MUI', 'REST API', 'React Router'],
    techStack: ['React', 'Vite', 'Material-UI', 'JavaScript'],
    status: 'active',
    links: {
      github: 'https://github.com/UrosJavaScript/search-input-api',
    },
    features: [
      'Debounced query execution',
      'Accessible keyboard arrow key navigation',
      'Multi-selection chips with quick removal',
    ],
  },
  {
    id: 'university-apk',
    title: 'University Examination Portal',
    slug: 'university-apk',
    category: 'Full-Stack',
    featured: false,
    description:
      'Exam registration and student tracking system with role-based access control and MySQL.',
    detailedDescription:
      'Comprehensive web application for universities where students register for exams, inspect queue times and evaluation statuses, while administrators manage course records, schedules, and permissions.',
    image: '/images/projects/universityApk.jpg',
    tags: ['React', 'Node.js', 'MySQL', 'Redux', 'JWT', 'Tailwind CSS'],
    techStack: [
      'React',
      'Node.js',
      'Express',
      'MySQL',
      'Redux',
      'JWT',
      'Tailwind CSS',
    ],
    status: 'active',
    links: {
      github: 'https://github.com/UrosJavaScript/university-apk',
    },
    features: [
      'Role-based authorization (Student & Admin roles)',
      'Real-time exam scheduling and verification',
      'Relational schema design with MySQL',
      'JWT session management',
    ],
  },

  {
    id: 'web3heroes',
    title: 'Web3Heroes Company Showcase',
    slug: 'web3heroes',
    category: 'Frontend',
    featured: false,
    description:
      'Corporate agency portfolio featuring high-end UI components and responsive design.',
    detailedDescription:
      'Built reusable component systems in React TypeScript with custom theme providers, internationalization (i18n), and fluid responsiveness across desktop, tablet, and mobile views.',
    image: '/images/projects/web3heroes.jpg',
    tags: ['React', 'TypeScript', 'Styled Components', 'i18n'],
    techStack: ['React', 'TypeScript', 'Styled-Components', 'i18next'],
    status: 'active',
    links: {},
    features: [
      'Reusable atomic component library',
      'Multi-language localization',
      'High-performance rendering with Styled Components',
    ],
  },

  {
    id: 'angular-app',
    title: 'Angular Mobile App',
    slug: 'angular-app',
    category: 'Mobile',
    featured: false,
    description:
      'Packaged mobile APK for Zlatibor Booking deployed to the Google Play Store.',
    detailedDescription:
      'Built and packaged a native Android application using Android SDK and Gradle, mirroring all web portal booking capabilities in an optimized mobile experience.',
    image: '/images/projects/angular-app.jpg',
    tags: ['Angular', 'Android SDK', 'Gradle', 'Google Play'],
    techStack: ['Angular', 'TypeScript', 'Android SDK', 'Gradle'],
    status: 'active',
    links: {
      visit:
        'https://play.google.com/store/apps/details?id=com.zlatiborbooking.com.zlatiborbooking&pli=1',
    },
    features: [
      'Native Android APK compiled via Gradle',
      'Available on Google Play Store',
      'Seamless mobile navigation',
    ],
  },
  {
    id: 'weather-news',
    title: 'Weather & News Dashboard',
    slug: 'weather-news',
    category: 'Frontend',
    featured: false,
    description:
      'Live news headlines aggregated by category alongside real-time city weather forecasts.',
    detailedDescription:
      'Web application that presents top news filtered by topical categories with an integrated OpenWeatherMap widget providing live temperatures, humidity, and forecasts.',
    image: '/images/projects/react-weather-news.jpg',
    tags: ['React', 'Vite', 'Tailwind CSS', 'OpenWeatherMap API'],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'OpenWeatherMap API'],
    status: 'active',
    links: {
      github: 'https://github.com/UrosJavaScript/project-react-tailwind',
    },
    features: [
      'Live weather data for any global city',
      'Filtered news feeds by topic',
      'Clean Tailwind styling and dark mode aesthetic',
    ],
  },
  {
    id: 'travel-list',
    title: 'Travel Packing Planner',
    slug: 'travel-list',
    category: 'Frontend',
    featured: false,
    description:
      'Trip packing checklist with real-time statistics, completion progress, and sorting.',
    detailedDescription:
      'A lightweight packing checklist app enabling travelers to record items, check off packed belongings, calculate completion percentages, and sort items by packed status.',
    image: '/images/projects/travel-list.jpg',
    tags: ['React', 'State Management', 'CSS3'],
    techStack: ['React', 'JavaScript', 'CSS3'],
    status: 'active',
    links: {
      github: 'https://github.com/UrosJavaScript/travel-list',
    },
    features: [
      'Interactive packing progress percentage',
      'Sort by packed status, quantity, or entry order',
      'One-click item clearance',
    ],
  },
  {
    id: 'web-shop-php',
    title: 'CodeIgniter Web Shop',
    slug: 'web-shop-php',
    category: 'Backend',
    featured: false,
    description:
      'E-commerce web store with admin dashboard, product catalog, and relational database.',
    detailedDescription:
      'Full-featured online store built on PHP CodeIgniter 3 and MySQL. Includes administrator authentication, permission management, product stock control, dynamic modals, and checkout workflows.',
    image: '/images/projects/shop.jpg',
    tags: ['PHP', 'CodeIgniter 3', 'MySQL', 'Admin Dashboard'],
    techStack: ['PHP', 'CodeIgniter', 'MySQL', 'jQuery', 'Bootstrap'],
    status: 'active',
    links: {
      github: 'https://github.com/Uros12345678/cdi3-online_shop',
    },
    features: [
      'Admin portal with user and catalog management',
      'Relational MySQL schema',
      'Interactive jQuery modals for item management',
    ],
  },
]

export const toolsData: ToolItem[] = [
  { name: 'React', category: 'Frontend', badge: 'Library' },
  { name: 'Next.js', category: 'Frontend', badge: 'Framework' },
  { name: 'TypeScript', category: 'Frontend', badge: 'Language' },
  { name: 'JavaScript', category: 'Frontend', badge: 'Language' },
  { name: 'Tailwind CSS', category: 'Frontend', badge: 'Styling' },
  { name: 'Redux Toolkit', category: 'Frontend', badge: 'State' },
  { name: 'Vite', category: 'Frontend', badge: 'Build Tool' },
  { name: 'HTML5 / CSS3', category: 'Frontend', badge: 'Core' },
  { name: 'Node.js', category: 'Backend', badge: 'Runtime' },
  { name: 'PHP', category: 'Backend', badge: 'Language' },
  { name: 'CodeIgniter', category: 'Backend', badge: 'Framework' },
  { name: 'MySQL', category: 'Backend', badge: 'Database' },
  { name: 'REST APIs', category: 'Backend', badge: 'Architecture' },
  { name: 'Axios', category: 'Backend', badge: 'Networking' },
  { name: 'React Native', category: 'Mobile', badge: 'Framework' },
  { name: 'Expo', category: 'Mobile', badge: 'Toolchain' },
  { name: 'Git & GitHub', category: 'DevOps', badge: 'VCS' },
  { name: 'VS Code & Cursor', category: 'Tools', badge: 'IDE' },
  { name: 'Postman', category: 'Tools', badge: 'Testing' },
  { name: 'Figma', category: 'Design', badge: 'UI/UX' },
]

export const timelineData: TimelineItem[] = [
  {
    year: '2023 – Present',
    title: 'Medior Full-Stack Web Developer',
    company: 'Independent & Client Projects',
    location: 'Belgrade, Serbia',
    type: 'Full-Stack & Frontend',
    description:
      'Engineering scalable web and mobile applications using React, Next.js, TypeScript, Tailwind CSS, and PHP. Led frontend implementations for client platforms like Tortilla Casa, built task management suites, and collaborated across cross-functional remote teams.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Axios',
      'PHP',
      'REST APIs',
    ],
    highlights: [
      'Built production-ready responsive web apps with thousands of monthly visitors',
      'Developed modular atomic design systems in Tailwind and TypeScript',
      'Optimized Core Web Vitals and frontend rendering performance',
    ],
  },
  {
    year: '2022 – 2023',
    title: 'Frontend & Mobile Developer',
    company: 'Client Collaborations & Startup Products',
    location: 'Belgrade, Serbia',
    type: 'Frontend & Mobile',
    description:
      'Delivered high-fidelity Figma implementations to code for Master Team, Almex, and RAZ Caregiver. Built cross-platform mobile experiences with React Native and Expo published on Google Play.',
    technologies: [
      'React Native',
      'Expo',
      'JavaScript',
      'CSS3',
      'PHP CodeIgniter',
      'Google Play SDK',
    ],
    highlights: [
      'Published live applications to Google Play Store',
      'Translated complex Figma UI/UX designs into responsive code',
      'Integrated real-time location mapping with Google Maps',
    ],
  },
  {
    year: '2021 – 2022',
    title: 'Junior Web Developer & Computer Science Foundations',
    company: 'Academic & Commercial Initiatives',
    location: 'Belgrade, Serbia',
    type: 'Full-Stack Foundations',
    description:
      'Developed university examination portal with MySQL and Node.js, e-commerce stores with CodeIgniter, and tourism reservation engines with Angular.',
    technologies: [
      'Angular',
      'JavaScript',
      'Node.js',
      'MySQL',
      'PHP',
      'Bootstrap',
    ],
    highlights: [
      'Engineered relational database models and authentication flows',
      'Built Angular booking portals and CodeIgniter online stores',
      'Mastered core asynchronous JavaScript and REST API integration',
    ],
  },
]

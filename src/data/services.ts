import {
  BrainCircuit,
  Gamepad2,
  Globe,
  Monitor,
  Settings,
  Smartphone,
  AppWindow,
  type LucideIcon,
} from 'lucide-react';

export type ServiceFeature = { title: string; text: string };
export type ServiceStep = { step: string; title: string; text: string };

export type Service = {
  slug: string;
  number: string;
  title: string;
  navTitle: string;
  cardText: string;
  icon: LucideIcon;
  heroTitle: string;
  heroText: string;
  description: string[];
  build: string[];
  features: ServiceFeature[];
  tech: string[];
  process: ServiceStep[];
  offer?: { price: string; delivery: string };
};

export const SERVICES: Service[] = [
  {
    slug: 'web-development',
    number: '01',
    title: 'Websites',
    navTitle: 'Web Development',
    cardText:
      'Modern, responsive and professional websites for businesses, brands, portfolios and organizations.',
    icon: Globe,
    heroTitle: 'MODERN WEBSITES BUILT FOR YOUR BUSINESS.',
    heroText:
      'Your website is usually the first conversation you have with a customer. We design and build fast, responsive websites that present your business clearly and professionally — from the first scroll to the final call to action.',
    description: [
      'A business website should do one job well: turn visitors into enquiries. We structure every site around that goal — clear messaging, visible contact paths (WhatsApp, call, email) and a layout that reads perfectly on any screen.',
      'From a single landing page to a full multi-page company site, every build is hand-coded, responsive by default and optimised to load fast on real Pakistani mobile networks, not just fast office Wi-Fi.',
    ],
    build: [
      'Business websites',
      'Portfolio websites',
      'Landing pages',
      'E-commerce concepts',
      'Responsive websites',
      'Custom designs',
    ],
    features: [
      {
        title: 'Responsive on every screen',
        text: 'Layouts that hold up on phones, tablets, laptops and wide desktops — no pinching, no horizontal scrolling.',
      },
      {
        title: 'Fast by default',
        text: 'Light pages, optimised images and clean code, so visitors never have to wait on your business.',
      },
      {
        title: 'SEO-friendly structure',
        text: 'Semantic markup, proper heading hierarchy and meta data so search engines read your site correctly.',
      },
      {
        title: 'Clear calls to action',
        text: 'WhatsApp, call and enquiry buttons placed exactly where customers need them.',
      },
      {
        title: 'Easy to grow',
        text: 'Start with the pages you need today and add more as your business grows.',
      },
      {
        title: 'Handover ready',
        text: 'Clean, documented code and guidance, so you are never locked in.',
      },
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'WordPress'],
    process: [
      {
        step: '01',
        title: 'Discover',
        text: 'Your business, your audience and the pages you actually need — agreed before any design work.',
      },
      {
        step: '02',
        title: 'Design',
        text: 'Structure, wireframes and a visual direction that matches your brand identity.',
      },
      {
        step: '03',
        title: 'Develop',
        text: 'A responsive build with clean code, tested across real devices and browsers.',
      },
      {
        step: '04',
        title: 'Launch',
        text: 'Deployment, final checks and handover — live in as little as 7 days.',
      },
    ],
    offer: { price: 'Rs. 15,000', delivery: '7 Days' },
  },
  {
    slug: 'web-applications',
    number: '02',
    title: 'Web Applications',
    navTitle: 'Web Applications',
    cardText:
      'Interactive web applications designed around real business requirements and user needs.',
    icon: AppWindow,
    heroTitle: 'INTERACTIVE WEB APPLICATIONS BUILT AROUND REAL REQUIREMENTS.',
    heroText:
      'A web application is software that lives in the browser — dashboards, portals, management tools and workflow systems. We build them around the way your business actually works.',
    description: [
      'Websites present information. Web applications get work done. From task managers to booking systems and internal dashboards, we focus on logic, state and user flow — the parts that make an application feel reliable every single day.',
      'Every application we build starts from a real requirement: who uses it, what they must accomplish, and what should happen to the data along the way. That clarity is what keeps development fast and the final product simple to use.',
    ],
    build: [
      'Dashboards & admin panels',
      'Booking & reservation tools',
      'Inventory & record management',
      'Forms, workflows & approvals',
      'Customer & client portals',
      'API-driven applications',
    ],
    features: [
      {
        title: 'Requirement-first planning',
        text: 'Features are mapped from real workflows, not copied from another product.',
      },
      {
        title: 'Clean state & data flow',
        text: 'Predictable behaviour under the hood, so the UI never surprises your users.',
      },
      {
        title: 'Responsive application UI',
        text: 'Full application experiences that work on a desk monitor and a phone alike.',
      },
      {
        title: 'Authentication-ready architecture',
        text: 'User roles and sessions designed in from the start, not bolted on later.',
      },
      {
        title: 'API integration',
        text: 'Third-party services, payments and data sources wired in cleanly.',
      },
      {
        title: 'Tested & refined releases',
        text: 'You test on real usage before launch; we refine until it feels right.',
      },
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git & GitHub'],
    process: [
      {
        step: '01',
        title: 'Discover',
        text: 'We map your workflow: roles, steps, data and the outcome each screen must produce.',
      },
      {
        step: '02',
        title: 'Plan',
        text: 'Feature list, screen structure and technical architecture — written down and agreed.',
      },
      {
        step: '03',
        title: 'Develop',
        text: 'Iterative builds with reviewable progress, so you see the application take shape.',
      },
      {
        step: '04',
        title: 'Launch',
        text: 'Deployment, real-usage testing and refinement after go-live.',
      },
    ],
  },
  {
    slug: 'mobile-apps',
    number: '03',
    title: 'Mobile Applications',
    navTitle: 'Mobile Apps',
    cardText: 'Modern mobile application experiences for different ideas and use cases.',
    icon: Smartphone,
    heroTitle: 'MOBILE EXPERIENCES THAT FEEL NATIVE.',
    heroText:
      'People live on their phones. We design and develop mobile application experiences — from progressive web apps to cross-platform builds — with touch-first interfaces and fast, focused screens.',
    description: [
      'A mobile app succeeds or fails on small details: thumb reach, loading speed, offline behaviour and clarity on a five-inch screen. We design for those constraints from the very first wireframe.',
      'Whether your idea needs a full store-ready app or a progressive web app that installs straight from the browser, we help you choose the lightest path that still feels premium to your users.',
    ],
    build: [
      'Progressive web apps (PWA)',
      'Cross-platform app development',
      'Mobile UI/UX design',
      'App prototypes & MVPs',
      'App landing & store pages',
      'Feature iteration for existing apps',
    ],
    features: [
      {
        title: 'Touch-first interface design',
        text: 'Controls sized and placed for thumbs, with gestures that feel natural.',
      },
      {
        title: 'Fast, focused screens',
        text: 'One clear job per screen, with minimal waiting between taps.',
      },
      {
        title: 'Offline-ready capabilities',
        text: 'PWA caching and sensible fallbacks for unstable connections.',
      },
      {
        title: 'Clean navigation patterns',
        text: 'Tab bars, stacks and sheets that users understand without a tutorial.',
      },
      {
        title: 'Cross-platform codebase',
        text: 'One maintainable codebase reaching Android and iOS audiences.',
      },
      {
        title: 'Iterative test builds',
        text: 'You install and test on real devices while we build, not only at the end.',
      },
    ],
    tech: ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'PWA APIs', 'Git & GitHub'],
    process: [
      {
        step: '01',
        title: 'Discover',
        text: 'Target platforms, devices and the core journeys your users repeat daily.',
      },
      {
        step: '02',
        title: 'Design',
        text: 'Touch-first wireframes and a screen flow that respects small displays.',
      },
      {
        step: '03',
        title: 'Develop',
        text: 'Component-by-component builds with test installs on real devices.',
      },
      {
        step: '04',
        title: 'Launch',
        text: 'Store or web deployment, then post-launch fixes and improvements.',
      },
    ],
  },
  {
    slug: 'games',
    number: '04',
    title: 'Games',
    navTitle: 'Games',
    cardText: 'Interactive game experiences built around creative concepts.',
    icon: Gamepad2,
    heroTitle: 'INTERACTIVE GAME EXPERIENCES BUILT AROUND CREATIVE CONCEPTS.',
    heroText:
      'Games are software with a sense of fun. We build browser-based game experiences — puzzles, arcade concepts, educational games and playable prototypes — with smooth loops and responsive controls.',
    description: [
      'A good game idea deserves a build that respects it: predictable rules, readable feedback and controls that feel instant on both keyboard and touch screens.',
      'We prototype quickly so you can play the core loop early, then refine difficulty, pacing and polish around what actually feels good in the hand.',
    ],
    build: [
      '2D browser games',
      'Puzzle & arcade concepts',
      'Educational & training games',
      'Playable prototypes & MVPs',
      'Game UI, menus & HUD screens',
      'Web-based multiplayer concepts',
    ],
    features: [
      {
        title: 'Smooth core gameplay loop',
        text: 'The repeat action of your game feels satisfying before anything else is added.',
      },
      {
        title: 'Keyboard & touch controls',
        text: 'One game, two control schemes — desk players and phone players both covered.',
      },
      {
        title: 'Scalable difficulty & pacing',
        text: 'Levels and challenge curves that are easy to tune after playtesting.',
      },
      {
        title: 'Lightweight web delivery',
        text: 'Playable in a browser link — no heavy downloads between you and your players.',
      },
      {
        title: 'Readable feedback & effects',
        text: 'Score, hits and state changes communicate instantly and clearly.',
      },
      {
        title: 'Sound-ready architecture',
        text: 'Audio hooks designed in, so sound can be added without rework.',
      },
    ],
    tech: ['JavaScript', 'TypeScript', 'HTML5 Canvas', 'React', 'CSS3'],
    process: [
      {
        step: '01',
        title: 'Concept',
        text: 'Mechanic, rules and win state defined on paper before code exists.',
      },
      {
        step: '02',
        title: 'Prototype',
        text: 'A playable core loop as fast as possible — feel first, graphics later.',
      },
      {
        step: '03',
        title: 'Polish',
        text: 'Controls, pacing, feedback, menus and visual identity refined.',
      },
      {
        step: '04',
        title: 'Release',
        text: 'Web deployment, playtesting sessions and fix rounds.',
      },
    ],
  },
  {
    slug: 'ai-solutions',
    number: '05',
    title: 'AI Solutions',
    navTitle: 'AI Solutions',
    cardText: 'AI-powered tools, automation and intelligent digital solutions.',
    icon: BrainCircuit,
    heroTitle: 'AI-POWERED TOOLS AND INTELLIGENT AUTOMATION.',
    heroText:
      'AI is most useful when it removes real work. We build AI-powered tools, assistants and automations that plug into your website, business workflow or product — with humans always in control.',
    description: [
      'From chat assistants that answer customer questions to generators that draft content and automation that moves data between tools, we focus on practical AI: measurable time saved, not buzzwords.',
      'Every AI feature we ship comes with a clear interface, sensible fallbacks and an honest explanation of what it can and cannot do — so your team trusts it and your customers are never misled.',
    ],
    build: [
      'AI chat assistants for business',
      'Content & copy generators',
      'Workflow automation',
      'AI website features (search, recommendations)',
      'Document & data assistants',
      'Third-party AI API integration',
    ],
    features: [
      {
        title: 'Practical use-case first',
        text: 'We automate work that is repetitive and expensive — not work that only sounds impressive.',
      },
      {
        title: 'Human-in-the-loop UI',
        text: 'People review, edit and approve AI output through a clean interface.',
      },
      {
        title: 'Reliable API integration',
        text: 'Model APIs wired in with error handling, retries and clear failure states.',
      },
      {
        title: 'Cost- and token-aware builds',
        text: 'Prompts and caching designed to keep running costs predictable.',
      },
      {
        title: 'Privacy-conscious data flow',
        text: 'Only the data the feature needs is sent — and you know exactly what that is.',
      },
      {
        title: 'Iterative prompt improvement',
        text: 'Outputs are reviewed and prompts refined over time, like any other code.',
      },
    ],
    tech: ['AI Tools', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'REST APIs'],
    process: [
      {
        step: '01',
        title: 'Discover',
        text: 'We identify the repetitive work worth automating and the output quality you expect.',
      },
      {
        step: '02',
        title: 'Design',
        text: 'Workflow, prompts and fallbacks designed before any integration begins.',
      },
      {
        step: '03',
        title: 'Integrate',
        text: 'Model APIs connected behind a clean, reviewable user interface.',
      },
      {
        step: '04',
        title: 'Improve',
        text: 'Real outputs reviewed together; prompts and flows refined over time.',
      },
    ],
  },
  {
    slug: 'software',
    number: '06',
    title: 'Desktop / Software',
    navTitle: 'Software',
    cardText: 'Custom desktop applications and software solutions.',
    icon: Monitor,
    heroTitle: 'DESKTOP APPLICATIONS AND SOFTWARE THAT FIT YOUR WORKFLOW.',
    heroText:
      'When the work happens at a desk, the software should meet it there. We build custom desktop applications and internal tools — offline-capable, fast and shaped around your exact workflow.',
    description: [
      'Plenty of businesses still run on spreadsheets, paper registers and repeated manual steps. Custom software turns those into a single fast tool your team actually enjoys using.',
      'We keep desktop builds simple and maintainable: local-first data, clear screens and exports that fit the way you already report and share your numbers.',
    ],
    build: [
      'Windows desktop utilities',
      'Internal business tools',
      'Data entry & reporting tools',
      'File & document managers',
      'Billing & POS concepts',
      'Digitising legacy workflows',
    ],
    features: [
      {
        title: 'Offline-first local data',
        text: 'Your records live on your machine and keep working when the internet does not.',
      },
      {
        title: 'Fast, focused desktop UI',
        text: 'Keyboard-friendly screens built for speed during long working hours.',
      },
      {
        title: 'Import & export built in',
        text: 'Excel, CSV and print-ready output that matches your existing reporting.',
      },
      {
        title: 'Simple installation & updates',
        text: 'Straightforward setup on each machine, with a clear update path.',
      },
      {
        title: 'Role-based access concepts',
        text: 'Separate what staff can see and change from what only owners can.',
      },
      {
        title: 'Maintainable, documented code',
        text: 'Future changes stay cheap because the codebase is clean and documented.',
      },
    ],
    tech: ['TypeScript', 'JavaScript', 'Node.js', 'Desktop runtimes (Electron-class)', 'Git & GitHub'],
    process: [
      {
        step: '01',
        title: 'Discover',
        text: 'We walk through the real workflow, step by step, including the edge cases.',
      },
      {
        step: '02',
        title: 'Plan',
        text: 'Screens, data structure and reports defined and agreed in writing.',
      },
      {
        step: '03',
        title: 'Build',
        text: 'Iterative releases your team tests on their own machines while we develop.',
      },
      {
        step: '04',
        title: 'Rollout',
        text: 'Installation, quick training notes and support after go-live.',
      },
    ],
  },
  {
    slug: 'custom-development',
    number: '07',
    title: 'Custom Development',
    navTitle: 'Custom Development',
    cardText:
      'Unique idea? We can design and develop a custom digital product around your requirements.',
    icon: Settings,
    heroTitle: 'YOUR IDEA, ENGINEERED INTO A DIGITAL PRODUCT.',
    heroText:
      "Not every idea fits a category. If what you need doesn't exist yet, we design and develop a custom digital product around your exact requirements — scoped honestly and built iteratively.",
    description: [
      'Custom development is where every FU DEVELOPERS conversation starts anyway: understand the idea, break it into real requirements, then choose the lightest technology that solves it properly.',
      'You get a development partner who tells you what is feasible, what it will cost and what order it should be built in — before a single line of code is written.',
    ],
    build: [
      'Startup MVPs',
      'Niche platforms & marketplaces',
      'Integrations between tools',
      'Automation systems',
      'Prototypes for investors',
      'Anything your idea needs',
    ],
    features: [
      {
        title: 'Honest scoping & estimates',
        text: 'A clear quote with what is included — and what is deliberately left out.',
      },
      {
        title: 'Requirement breakdown document',
        text: 'Your idea written down as features, screens and rules you can approve.',
      },
      {
        title: 'Iterative builds with previews',
        text: 'Reviewable progress at every milestone, not one big reveal at the end.',
      },
      {
        title: 'Clear, jargon-free communication',
        text: 'Progress updates in plain language, on WhatsApp or email — your choice.',
      },
      {
        title: 'Documentation & handover',
        text: 'Code, credentials and instructions handed over properly at the end.',
      },
      {
        title: 'Post-launch support plan',
        text: 'An agreed window for fixes and a plan for the next iteration.',
      },
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'AI Tools'],
    process: [
      {
        step: '01',
        title: 'Discover',
        text: 'An idea session: goals, users, constraints and what success looks like.',
      },
      {
        step: '02',
        title: 'Define',
        text: 'Written scope, milestones and a fixed quote before development starts.',
      },
      {
        step: '03',
        title: 'Build',
        text: 'Sprint by sprint, with reviewable previews you can click and test.',
      },
      {
        step: '04',
        title: 'Launch',
        text: 'Deploy, document and plan the next iteration together.',
      },
    ],
  },
];

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

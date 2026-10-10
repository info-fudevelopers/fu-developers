export type ProjectMockup = 'todo' | 'calculator' | 'weather' | 'portfolio';
export type ProjectFilter = 'all' | 'web' | 'applications' | 'other';

export type Project = {
  slug?: string;
  title: string;
  category: string;
  filter: Exclude<ProjectFilter, 'all'>;
  description: string;
  tags: string[];
  liveUrl: string;
  mockup: ProjectMockup;
  overview?: string[];
  features?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: 'todo-list',
    title: 'Todo List',
    category: 'Web Application',
    filter: 'applications',
    description:
      'A clean daily task planner with priorities, smart filters and saved state — built to keep small goals organised without noise.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
    liveUrl: 'https://amazing-moonbeam-ee7c9a.netlify.app/',
    mockup: 'todo',
    overview: [
      'Tasks — Daily Planner is a lightweight task management web application. It keeps the whole day visible on one screen: add a task, set its priority, mark it done and move on.',
      'Tasks can be filtered between All, Active and Completed, finished items can be cleared in one click, and the list is saved locally in the browser — so your plan is still there when you come back tomorrow.',
    ],
    features: [
      'Add tasks with Low / Medium / High priority',
      'Mark tasks complete — and active again',
      'Filters: All, Active, Completed',
      'Live progress: completed count and remaining tasks',
      'One-click "Clear completed"',
      'State saved in the browser (localStorage)',
      'Clean, minimal responsive interface',
    ],
  },
  {
    slug: 'calculator',
    title: 'Calculator',
    category: 'Web Application',
    filter: 'applications',
    description:
      'A sleek, fully functional calculator with smooth button feedback and instant results — pure JavaScript logic, zero dependencies.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: 'https://coruscating-rugelach-8a6a48.netlify.app/',
    mockup: 'calculator',
    overview: [
      'A production-simple calculator covering everyday arithmetic: chained operations, percentages, sign toggle, decimal input, backspace and all-clear — with immediate visual feedback on every press.',
      'The build focuses on the details that make a calculator feel trustworthy: correct operator chaining, a readable display and a keypad layout your thumb already knows.',
    ],
    features: [
      'Core operations: add, subtract, multiply, divide',
      'Percentage (%) and plus/minus (±) keys',
      'Backspace (⌫) and all-clear (AC)',
      'Chained calculations with instant results',
      'Decimal (DEC) mode indicator',
      'Responsive keypad with press animations',
    ],
  },
  {
    slug: 'weather-app',
    title: 'Weather App',
    category: 'Web Application',
    filter: 'applications',
    description:
      'A live weather application with city search and geolocation — real-time conditions and forecast in a clean, readable interface.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Fetch API', 'Geolocation'],
    liveUrl: 'https://cheerful-syrniki-1bb820.netlify.app/',
    mockup: 'weather',
    overview: [
      'The Weather App fetches live weather data for any searched city — or for your exact position using the browser geolocation API — and presents conditions, temperature and forecast in a fast, readable layout.',
      'Empty, loading and error states are handled properly, so the interface always tells you what is happening instead of showing a blank screen.',
    ],
    features: [
      'City search with live weather data',
      '"Use my current location" geolocation support',
      'Current conditions with matching weather icon',
      'Forecast overview for the coming days',
      'Clean, responsive reading layout',
      'Graceful empty, loading and error states',
    ],
  },
  {
    title: 'Personal Portfolio',
    category: 'Portfolio Website',
    filter: 'web',
    description:
      "The founder's professional portfolio — skills, selected projects and contact, presented in a modern responsive layout.",
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    liveUrl: 'https://uzairali943.netlify.app',
    mockup: 'portfolio',
  },
];

export const getProject = (slug: string): Project | undefined =>
  PROJECTS.find((p) => p.slug === slug);

export const FILTERS: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'applications', label: 'Applications' },
  { id: 'other', label: 'Other' },
];

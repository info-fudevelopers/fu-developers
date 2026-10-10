export type ProcessStep = {
  step: string;
  title: string;
  text: string;
  detail: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    text: 'Understand your idea, requirements and goals.',
    detail:
      'We discuss your idea, your audience and the must-have features — and agree on what success looks like before anything is built.',
  },
  {
    step: '02',
    title: 'Plan',
    text: 'Define features, structure and technology.',
    detail:
      'You get a clear feature list, page or screen structure and a technology choice — in writing — before design begins.',
  },
  {
    step: '03',
    title: 'Design',
    text: 'Create a clean and user-friendly digital experience.',
    detail:
      'Wireframes and visual direction come first, so the build stage stays fast, focused and surprise-free.',
  },
  {
    step: '04',
    title: 'Develop',
    text: 'Build, test and refine the product.',
    detail:
      'You see progress as it happens and can test on real devices before anything goes live.',
  },
  {
    step: '05',
    title: 'Launch',
    text: 'Deliver the final product and prepare it for real users.',
    detail:
      'Deployment, final checks and a proper handover — plus clear guidance on what to improve next.',
  },
];

export const TECHNOLOGIES: string[] = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Git',
  'GitHub',
  'WordPress',
  'AI Tools',
];

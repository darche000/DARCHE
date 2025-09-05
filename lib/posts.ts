export interface Post {
  id: string;
  title: string;
  src: string;
  width: number;
  height: number;
  tags: string[];
  date: string;
  projectId: string; // Links multiple images to the same project
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'Parametric Architecture Studio',
    src: '/images/web-design-1.jpg',
    width: 400,
    height: 300,
    tags: ['architecture', 'studio', 'parametric', 'computation'],
    date: '2024-01-15',
    projectId: 'project-1'
  },
  {
    id: '1a',
    title: 'Parametric Detail Studies',
    src: '/images/landing-page-1.jpg',
    width: 450,
    height: 320,
    tags: ['architecture', 'parametric', 'research', 'computation'],
    date: '2024-01-15',
    projectId: 'project-1'
  },
  {
    id: '1b',
    title: 'Parametric Form Exploration',
    src: '/images/mobile-app-1.jpg',
    width: 300,
    height: 500,
    tags: ['architecture', 'parametric', 'design', 'computation'],
    date: '2024-01-15',
    projectId: 'project-1'
  },
  {
    id: '2',
    title: 'Urban Design Competition',
    src: '/images/mobile-app-1.jpg',
    width: 300,
    height: 500,
    tags: ['urban', 'competition', 'design', 'architecture'],
    date: '2024-01-20',
    projectId: 'project-2'
  },
  {
    id: '3',
    title: 'Museum Architecture',
    src: '/images/brand-identity-1.jpg',
    width: 500,
    height: 350,
    tags: ['museum', 'architecture', 'cultural', 'design'],
    date: '2024-02-01',
    projectId: 'project-3'
  },
  {
    id: '4',
    title: 'School of Architecture',
    src: '/images/ecommerce-1.jpg',
    width: 450,
    height: 280,
    tags: ['school', 'architecture', 'education', 'design'],
    date: '2024-02-10',
    projectId: 'project-4'
  },
  {
    id: '5',
    title: 'Furniture Design Studio',
    src: '/images/social-media-1.jpg',
    width: 320,
    height: 320,
    tags: ['furniture', 'design', 'studio', 'product'],
    date: '2024-02-15',
    projectId: 'project-5'
  },
  {
    id: '6',
    title: 'Architectural Visualization',
    src: '/images/dashboard-1.jpg',
    width: 600,
    height: 400,
    tags: ['visualization', 'rendering', 'architecture', 'design'],
    date: '2024-02-20',
    projectId: 'project-6'
  },
  {
    id: '7',
    title: 'Urban Planning Research',
    src: '/images/print-ad-1.jpg',
    width: 400,
    height: 600,
    tags: ['urban', 'planning', 'research', 'architecture'],
    date: '2024-03-01',
    projectId: 'project-7'
  },
  {
    id: '8',
    title: 'Architectural Photography',
    src: '/images/product-photo-1.jpg',
    width: 350,
    height: 350,
    tags: ['photography', 'architecture', 'documentation', 'design'],
    date: '2024-03-05',
    projectId: 'project-8'
  },
  {
    id: '9',
    title: 'Design Process Methodology',
    src: '/images/ux-flow-1.jpg',
    width: 500,
    height: 300,
    tags: ['design', 'process', 'methodology', 'research'],
    date: '2024-03-10',
    projectId: 'project-9'
  },
  {
    id: '10',
    title: 'Typography in Architecture',
    src: '/images/typography-1.jpg',
    width: 380,
    height: 450,
    tags: ['typography', 'design', 'architecture', 'graphics'],
    date: '2024-03-15',
    projectId: 'project-10'
  },
  {
    id: '11',
    title: 'Design System Icons',
    src: '/images/icon-set-1.jpg',
    width: 300,
    height: 300,
    tags: ['design', 'system', 'icons', 'graphics'],
    date: '2024-03-20',
    projectId: 'project-11'
  },
  {
    id: '12',
    title: 'Speculative Architecture',
    src: '/images/landing-page-1.jpg',
    width: 450,
    height: 320,
    tags: ['speculative', 'architecture', 'design', 'research'],
    date: '2024-03-25',
    projectId: 'project-12'
  }
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostsByTag(tag: string): Post[] {
  return posts.filter(post => post.tags.includes(tag));
}

export function getAllTags(): string[] {
  const allTags = posts.flatMap(post => post.tags);
  return [...new Set(allTags)];
}

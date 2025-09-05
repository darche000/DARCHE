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
    title: 'Modern Web Design',
    src: '/images/web-design-1.jpg',
    width: 400,
    height: 300,
    tags: ['web', 'design'],
    date: '2024-01-15',
    projectId: 'project-1'
  },
  {
    id: '1a',
    title: 'Web Design Detail View',
    src: '/images/landing-page-1.jpg',
    width: 450,
    height: 320,
    tags: ['web', 'design'],
    date: '2024-01-15',
    projectId: 'project-1'
  },
  {
    id: '1b',
    title: 'Web Design Mobile Version',
    src: '/images/mobile-app-1.jpg',
    width: 300,
    height: 500,
    tags: ['web', 'design', 'mobile'],
    date: '2024-01-15',
    projectId: 'project-1'
  },
  {
    id: '2',
    title: 'Mobile App Interface',
    src: '/images/mobile-app-1.jpg',
    width: 300,
    height: 500,
    tags: ['mobile', 'app', 'ui'],
    date: '2024-01-20',
    projectId: 'project-2'
  },
  {
    id: '3',
    title: 'Brand Identity System',
    src: '/images/brand-identity-1.jpg',
    width: 500,
    height: 350,
    tags: ['brand', 'identity', 'logo'],
    date: '2024-02-01',
    projectId: 'project-3'
  },
  {
    id: '4',
    title: 'E-commerce Platform',
    src: '/images/ecommerce-1.jpg',
    width: 450,
    height: 280,
    tags: ['web', 'ecommerce', 'ui'],
    date: '2024-02-10',
    projectId: 'project-4'
  },
  {
    id: '5',
    title: 'Social Media Graphics',
    src: '/images/social-media-1.jpg',
    width: 320,
    height: 320,
    tags: ['social', 'graphics', 'marketing'],
    date: '2024-02-15',
    projectId: 'project-5'
  },
  {
    id: '6',
    title: 'Dashboard Design',
    src: '/images/dashboard-1.jpg',
    width: 600,
    height: 400,
    tags: ['dashboard', 'ui', 'data'],
    date: '2024-02-20',
    projectId: 'project-6'
  },
  {
    id: '7',
    title: 'Print Advertisement',
    src: '/images/print-ad-1.jpg',
    width: 400,
    height: 600,
    tags: ['print', 'advertising', 'marketing'],
    date: '2024-03-01',
    projectId: 'project-7'
  },
  {
    id: '8',
    title: 'Product Photography',
    src: '/images/product-photo-1.jpg',
    width: 350,
    height: 350,
    tags: ['photography', 'product', 'commercial'],
    date: '2024-03-05',
    projectId: 'project-8'
  },
  {
    id: '9',
    title: 'User Experience Flow',
    src: '/images/ux-flow-1.jpg',
    width: 500,
    height: 300,
    tags: ['ux', 'flow', 'wireframe'],
    date: '2024-03-10',
    projectId: 'project-9'
  },
  {
    id: '10',
    title: 'Typography Study',
    src: '/images/typography-1.jpg',
    width: 380,
    height: 450,
    tags: ['typography', 'design', 'print'],
    date: '2024-03-15',
    projectId: 'project-10'
  },
  {
    id: '11',
    title: 'Icon Set Design',
    src: '/images/icon-set-1.jpg',
    width: 300,
    height: 300,
    tags: ['icons', 'design', 'ui'],
    date: '2024-03-20',
    projectId: 'project-11'
  },
  {
    id: '12',
    title: 'Landing Page Design',
    src: '/images/landing-page-1.jpg',
    width: 450,
    height: 320,
    tags: ['web', 'landing', 'conversion'],
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

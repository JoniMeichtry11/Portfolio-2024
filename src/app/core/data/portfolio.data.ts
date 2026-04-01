import { Experience, Project } from '../models/portfolio.models';

export const EXPERIENCES: Experience[] = [
  {
    id: 'freelance-angular',
    role: 'Angular Frontend Developer',
    company: 'Freelance',
    period: 'August 2024 - Present',
    description: 'Development of enterprise web applications and e-commerce platforms focused on conversion and performance.',
    achievements: [
      'Development and implementation of 5+ web applications using Angular and Firebase.',
      'Integration of payment gateways (Mercado Pago) for e-commerce platforms.',
      'SEO and performance optimization, significantly improving Core Web Vitals.',
      'Direct communication with clients to translate technical requirements into clean and scalable solutions.'
    ],
    skills: ['Angular', 'TypeScript', 'TailwindCSS', 'Firebase', 'Mercado Pago']
  },
  {
    id: 'aicore-ssr',
    role: 'Semi Senior Frontend Developer',
    company: 'Ai Core IT Specialist',
    period: 'March 2022 - August 2024',
    description: 'Worked on high-impact enterprise projects for international clients such as Fiserv.',
    achievements: [
      'Development and maintenance of enterprise-level applications using Angular.',
      'Building scalable frontend architectures and high-complexity reusable components.',
      'Resolution of critical production bugs, dramatically improving application stability.',
      'Worked in Agile teams collaborating directly with designers and backend developers.'
    ],
    skills: ['Angular', 'TypeScript', 'RxJS', 'Agile/Scrum', 'Enterprise Architecture']
  },
  {
    id: 'digital-motus',
    role: 'Frontend Web Developer',
    company: 'Digital Motus',
    period: 'January 2022 - April 2022',
    description: 'Collaboration in the UI development of applications aimed at optimizing user usability.',
    achievements: [
      'Development of responsive interfaces using Angular and JavaScript.',
      'Improved visual consistency and usability across multiple applications.'
    ],
    skills: ['Angular', 'JavaScript', 'UI/UX']
  },
  {
    id: 'freelance-junior',
    role: 'Angular Front-End Developer',
    company: 'Freelance',
    period: 'January 2021 - January 2022',
    description: 'Development of custom web solutions for small businesses and regional entrepreneurs.',
    achievements: [
      'Complete development of modern and functional web interfaces using Angular, HTML, and CSS.'
    ],
    skills: ['Angular', 'HTML', 'CSS', 'JavaScript']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'cheddar-express',
    title: 'Cheddar Express',
    type: 'Web Application / E-commerce',
    description: 'Comprehensive application for a fast-food restaurant. Full implementation from user registration (Google Auth) to online payments integrating Mercado Pago, managing global cart state with NgRx.',
    link: 'https://cheddarexpress.web.app',
    image: 'img/cheddar.webp',
    technologies: ['Angular', 'TypeScript', 'NgRx', 'Firebase']
  },
  {
    id: 'churros',
    title: 'Churros Dos Hermanos',
    type: 'Website / Order System',
    description: 'Intuitive landing page and ordering system. Highlights include a strong focus on SEO and Core Web Vitals optimization, achieving fast load times and an immersive user experience on mobile devices.',
    link: 'https://churrosdoshermanos.com.ar',
    image: 'img/churros.webp',
    technologies: ['Angular 17+', 'SCSS', 'TailwindCSS', 'Firebase']
  },
  {
    id: 'pupkitt',
    title: 'Pupkitt Pet Care',
    type: 'Landing Page',
    description: 'Development of a veterinary landing page focused on high-conversion UX. Features a smooth interface for customers to efficiently find pet services.',
    link: 'https://pupkitt-pet-care-demo.web.app',
    image: 'img/pet-care.webp',
    technologies: ['Angular', 'TypeScript', 'TailwindCSS']
  },
  {
    id: 'dartdental',
    title: 'Dartdental UI Clone',
    type: 'UI/UX Replica',
    description: 'Replica and enhancement of a US dental site interface. Implemented with a modern design combining Angular and TailwindCSS to ensure full responsiveness.',
    link: 'https://dart-demo.web.app/',
    image: 'img/dentista.webp',
    technologies: ['Angular', 'TailwindCSS']
  },
  {
    id: 'khepri',
    title: 'Khepri Café',
    type: 'Landing Page',
    description: 'Coffee shop presentation, designed to attract customers through a clean, modern layout with a strong visual focus on products.',
    link: 'https://kephri-cafeteria-online-demo.web.app/',
    image: 'img/khepri.webp',
    technologies: ['Angular', 'TailwindCSS']
  }
];

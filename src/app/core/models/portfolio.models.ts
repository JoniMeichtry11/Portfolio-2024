export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  link: string;
  image: string;
  technologies: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
}

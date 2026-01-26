
export interface Project {
  id: number;
  name: string;
  description: string;
  responsibilities: string[];
  tools: string[];
  image: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

export type Theme = 'light' | 'dark';

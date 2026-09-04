export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveDemoUrl?: string;
  githubUrl: string;
  badgeCode?: string;
  accentColor?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface RoadmapCard {
  rootId: string;
  title: string;
  description: string;
  tags: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  image: string;
  date?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  dates: string;
  bullets: string[];
  tags: string[];
}

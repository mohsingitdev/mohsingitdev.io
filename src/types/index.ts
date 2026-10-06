export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period?: string;
  badge?: string;
  bullets: string[];
  technologies: string[];
}

export interface DomainProject {
  id: string;
  domain: string;
  title: string;
  tagline: string;
  enterpriseContext: string;
  challenge: string;
  architectureSolution: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  githubRepo?: string;
  hasInteractiveDemo?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  content: {
    sectionTitle: string;
    body: string;
    codeSnippet?: {
      language: string;
      code: string;
      caption?: string;
    };
    callout?: {
      type: 'tip' | 'architecture' | 'warning';
      text: string;
    };
  }[];
}

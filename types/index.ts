// Interface for the About page content
export interface AboutContent {
  introduction: string;
  background: string;
  education: string;
  skills: string[];
  whatDrivesMe: string;
  leftImages: string[];
  rightImages: string[];
}

// Interface for social media links
export interface SocialLinks {
  github: string;
  itch: string;
  linktree: string;
  linkedin: string;
}

// Interface for project links
export interface ProjectLink {
  type: 'github' | 'itch';
  url: string;
}

// Interface for projects
export interface Project {
  name: string;
  description: string;
  thumbnail: string;
  links: ProjectLink[];
} 
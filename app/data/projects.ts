export interface ProjectLink {
  type: 'github' | 'itch';
  url: string;
}

export interface Project {
  name: string;
  thumbnail: string;
  description: string;
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    name: "Project 1",
    thumbnail: "/thumbnails/placeholder1.jpg",
    description: "A sample project description that showcases the key features and technologies used.",
    links: [
      {
        type: "github",
        url: "https://github.com"
      }
    ]
  },
  // ... other projects
]; 
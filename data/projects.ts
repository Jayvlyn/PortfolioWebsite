export interface ProjectLink {
  type: 'github' | 'itch';
  url: string;
}

export interface Project {
  name: string;
  description: string;
  thumbnail: string;
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    "name": "Flash Crusade",
    "thumbnail": "/thumbnails/flash-crusade.jpg",
    "description": "A cutting-edge web application built with Next.js and TypeScript, featuring real-time data processing and a modern user interface.",
    "links": [
      {
        "type": "github",
        "url": "https://github.com/Jayvlyn/Flash-Crusade"
      },
      {
        "type": "itch",
        "url": "https://jayvlyn.itch.io/flash-crusade"
      }
    ]
  },
  {
    "name": "Brad to the Bone",
    "thumbnail": "/thumbnails/brad-to-the-bone.jpg",
    "description": "An innovative game developed in Unity, showcasing advanced graphics and engaging gameplay mechanics.",
    "links": [
      {
        "type": "github",
        "url": "https://github.com/Jayvlyn/Neumont-Game-Jam"
      },
      {
        "type": "itch",
        "url": "https://jayvlyn.itch.io/brad-to-the-bone"
      }
    ]
  },
  {
    "name": "asfd",
    "thumbnail": "/thumbnails/asfd.jpg",
    "description": "A cutting-edge web application built with Next.js and TypeScript, featuring real-time data processing and a modern user interface.",
    "links": [
      {
        "type": "github",
        "url": "http://localhost:3001/"
      },
      {
        "type": "itch",
        "url": "http://localhost:3001/"
      }
    ]
  },
  {
    "name": "ssss",
    "thumbnail": "/thumbnails/ssss.jpg",
    "description": "An innovative game developed in Unity, showcasing advanced graphics and engaging gameplay mechanics.",
    "links": [
      {
        "type": "github",
        "url": "http://localhost:3001/"
      },
      {
        "type": "itch",
        "url": "http://localhost:3001/"
      }
    ]
  },
  {
    "name": "asdasdasdasdasd",
    "thumbnail": "/thumbnails/asdasdasdasdasd.jpg",
    "description": "A cutting-edge web application built with Next.js and TypeScript, featuring real-time data processing and a modern user interface.",
    "links": [
      {
        "type": "github",
        "url": "http://localhost:3001/"
      },
      {
        "type": "itch",
        "url": "http://localhost:3001/"
      }
    ]
  },
  {
    "name": "asdasdasdasfdasda",
    "thumbnail": "/thumbnails/asdasdasdasfdasda.jpg",
    "description": "An innovative game developed in Unity, showcasing advanced graphics and engaging gameplay mechanics.",
    "links": [
      {
        "type": "github",
        "url": "http://localhost:3001/"
      },
      {
        "type": "itch",
        "url": "http://localhost:3001/"
      }
    ]
  },
  {
    "name": "2313212312312",
    "thumbnail": "/thumbnails/2313212312312.jpg",
    "description": "A cutting-edge web application built with Next.js and TypeScript, featuring real-time data processing and a modern user interface.",
    "links": [
      {
        "type": "github",
        "url": "http://localhost:3001/"
      },
      {
        "type": "itch",
        "url": "http://localhost:3001/"
      }
    ]
  },
  {
    "name": "Test",
    "thumbnail": "/thumbnails/test.jpg",
    "description": "A test project entry",
    "links": [
      {
        "type": "github",
        "url": "http://localhost:3001/"
      },
      {
        "type": "itch",
        "url": "http://localhost:3001/"
      }
    ]
  },
  {
    "name": "Joe test",
    "description": "MY MOM",
    "thumbnail": "/thumbnails/Joe test.jpg",
    "links": [
      {
        "type": "github",
        "url": "http://localhost:3001/"
      },
      {
        "type": "itch",
        "url": "http://localhost:3001/"
      }
    ]
  }
];
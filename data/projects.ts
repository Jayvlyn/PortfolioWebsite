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
    "thumbnail": "/thumbnails/flash-crusade.png",
    "description": "I taught myself Unity 2D as I built out the retro style top-down space shooter. I am currently working on a revamped version of this game with my newly refined skills.",
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
    "thumbnail": "/thumbnails/brad-to-the-bone.png",
    "description": "First place winner in the 2023 Neumont Summer Game Jam. Play as Brad and kick down sand castle to earn points, all while the tide slowly closes in on the beach. I mainly worked on the player controller as well as bringing the game together in the final hours of development. Built with Unity & C#.",
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
    "name": "Broken Steel",
    "description": "I taught myself Unity 3D as I built out this intricate first person character controller that allows the player to move fluidly using a two grapple system, replicating the Omnidirectional Maneuver gear seen in the Manga and Anime 'Attack on Titan.' Despite being very early in development, after a month of marketing I was able to accrue over 7,000 downloads and 735,000 views.",
    "thumbnail": "/thumbnails/broken-steel.png",
    "links": [
      {
        "type": "github",
        "url": ""
      },
      {
        "type": "itch",
        "url": "https://jayvlyn.itch.io/broken-steel"
      }
    ]
  }
];
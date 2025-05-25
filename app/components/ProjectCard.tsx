'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/app/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  rowIndex: number;
}

export default function ProjectCard({ project, index, rowIndex }: ProjectCardProps) {
  // Calculate wave offset based on row index
  const waveOffset = rowIndex * 0.2;
  
  return (
    <motion.div 
      className="bg-[#2f2f2f] rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        rotateY: [-2 + waveOffset, 2 + waveOffset]
      }}
      transition={{ 
        opacity: { delay: index * 0.1 },
        rotateY: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }
      }}
      whileHover={{ 
        scale: 1.1, 
        zIndex: 10,
        transition: { duration: 0.3 }
      }}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-[1.26]">
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="p-4">
        {/* Title and Links Row */}
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-semibold text-primary">
            {project.name}
          </h2>

          <div className="flex gap-2">
            {project.links.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Image
                  src={link.type === 'github' ? '/icons/Github_Logo.png' : '/icons/Itch_Logo.png'}
                  alt={`${link.type} link`}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Description - Hidden by default, shown on hover */}
        <motion.div
          className="text-text text-sm overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          whileHover={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          {project.description}
        </motion.div>
      </div>
    </motion.div>
  );
} 
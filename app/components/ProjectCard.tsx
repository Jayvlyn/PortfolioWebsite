'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/app/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  rowIndex: number;
  columnIndex: number;
  totalColumns: number;
}

export default function ProjectCard({ project, index, rowIndex, columnIndex, totalColumns }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-[#2f2f2f] rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1,
        layout: { duration: 0.3, ease: "easeOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      {/* Thumbnail */}
      <motion.div 
        className="relative w-full aspect-[1.26]"
        layout
      >
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 6}
        />
        
        {/* Hover overlay with links */}
        <motion.div 
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex gap-4">
            {project.links.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Image
                  src={link.type === 'github' ? '/icons/Github_Logo.png' : '/icons/Itch_Logo.png'}
                  alt={`${link.type} link`}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="p-6"
        layout
      >
        <motion.h2 
          className="text-xl font-semibold text-primary"
          layout
        >
          {project.name}
        </motion.h2>
        
        {/* Description container with fixed height transition */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="text-text text-sm mt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ 
                opacity: { duration: 0.2 },
                height: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {project.description}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
} 
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
    <div 
      className="bg-[#2f2f2f] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-[1.26]">
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 6}
        />
        
        {/* Hover overlay with links */}
        <div 
          className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
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
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-primary">
          {project.name}
        </h2>
        
        {/* Description container */}
        <div 
          className={`text-text text-sm mt-2 transition-all duration-500 ease-in-out overflow-hidden ${
            isHovered 
              ? 'max-h-[200px] opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          {project.description}
        </div>
      </div>
    </div>
  );
} 
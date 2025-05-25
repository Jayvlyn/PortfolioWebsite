'use client';

import { projects } from '@/data/projects';
import Background3D from '../components/Background3D';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsPage() {
  return (
    <>
      <Background3D />
      <div className="fixed inset-0">
        {/* Account for navbar space */}
        <div className="h-16" />
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-primary py-8 relative">
          My Work
        </h1>

        {/* Content wrapper with padding */}
        <div className="px-24 pb-16 h-[calc(100vh-8rem)]">
          {/* Dark scrollable container with shadow for depth */}
          <div className="w-[85%] h-[90%] mx-auto bg-[#222222] rounded-lg shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-sm bg-opacity-95">
            <div className="h-full overflow-y-auto">
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => {
                    // Calculate which row this card is in (0-based)
                    const rowIndex = Math.floor(index / 3);
                    return (
                      <ProjectCard
                        key={index}
                        project={project}
                        index={index}
                        rowIndex={rowIndex}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
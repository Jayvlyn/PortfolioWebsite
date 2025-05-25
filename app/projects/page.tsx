'use client';

import { projects } from '@/data/projects';
import ProjectCard from '../components/ProjectCard';
import { Project } from '@/app/data/projects';

export default function ProjectsPage() {
  // Split projects into three columns for masonry layout
  const columns: Project[][] = [[], [], []];
  projects.forEach((project, index) => {
    columns[index % 3].push(project);
  });

  return (
    <div className="fixed inset-0">
      {/* Account for navbar space */}
      <div className="h-16" />
      
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-primary py-8 relative">
        My Work
      </h1>

      {/* Content wrapper with padding */}
      <div className="w-[85%] h-[calc(100vh-16rem)] mx-auto mb-16 bg-[#222222] rounded-lg">
        <div className="h-full overflow-y-auto">
          <div className="p-8">
            {/* Masonry layout container */}
            <div className="flex gap-8">
              {columns.map((columnProjects, columnIndex) => (
                <div key={columnIndex} className="flex-1 flex flex-col gap-8">
                  {columnProjects.map((project, index) => (
                    <ProjectCard
                      key={project.name}
                      project={project}
                      index={columnIndex * columns[0].length + index}
                      columnIndex={columnIndex}
                      rowIndex={index}
                      totalColumns={3}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
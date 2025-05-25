import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { Project } from '@/types';

const PROJECTS_FILE = path.join(process.cwd(), 'data', 'projects.ts');

async function updateProjectsFile(projects: Project[]) {
  const content = `import { Project } from '@/types';

export const projects: Project[] = ${JSON.stringify(projects, null, 2)};`;
  
  await fs.writeFile(PROJECTS_FILE, content, 'utf-8');
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Handle file upload separately - you'll need to implement file handling
    const { name, github, itch, description } = data;
    
    // Read current projects
    const currentContent = await fs.readFile(PROJECTS_FILE, 'utf-8');
    const match = currentContent.match(/export const projects: Project\[] = (\[[\s\S]*\]);/);
    const currentProjects: Project[] = match ? JSON.parse(match[1]) : [];
    
    // Add new project
    const newProject: Project = {
      name,
      description,
      thumbnail: `/thumbnails/${name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
      links: [
        { type: 'github', url: github },
        ...(itch ? [{ type: 'itch' as const, url: itch }] : [])
      ]
    };
    
    currentProjects.push(newProject);
    
    // Update file
    await updateProjectsFile(currentProjects);
    
    return NextResponse.json({ success: true, project: newProject });
  } catch (error) {
    console.error('Error handling project:', error);
    return NextResponse.json({ success: false, error: 'Failed to add project' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const index = searchParams.get('index');
    
    if (!index) {
      return NextResponse.json({ success: false, error: 'No index provided' }, { status: 400 });
    }
    
    // Read current projects
    const currentContent = await fs.readFile(PROJECTS_FILE, 'utf-8');
    const match = currentContent.match(/export const projects: Project\[] = (\[[\s\S]*\]);/);
    const currentProjects: Project[] = match ? JSON.parse(match[1]) : [];
    
    // Remove project
    currentProjects.splice(parseInt(index), 1);
    
    // Update file
    await updateProjectsFile(currentProjects);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete project' }, { status: 500 });
  }
} 
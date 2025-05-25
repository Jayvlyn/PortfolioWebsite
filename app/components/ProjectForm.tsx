'use client';

import { useState } from 'react';
import { Project, ProjectLink } from '@/data/projects';

interface ProjectFormProps {
  onSubmit: (project: Project) => void;
}

// URL of the main portfolio project
const MAIN_PORTFOLIO_URL = 'http://localhost:3000';

export default function ProjectForm({ onSubmit }: ProjectFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [githubUrl, setGithubUrl] = useState('');
  const [itchUrl, setItchUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!thumbnail) return;

    try {
      setIsUploading(true);

      // First, upload the file to the main portfolio project
      const formData = new FormData();
      formData.append('file', thumbnail);
      formData.append('name', name);

      const uploadRes = await fetch(`${MAIN_PORTFOLIO_URL}/api/projects/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!uploadRes.ok) {
        throw new Error('Failed to upload thumbnail');
      }

      const links: ProjectLink[] = [];
      if (githubUrl) links.push({ type: 'github', url: githubUrl });
      if (itchUrl) links.push({ type: 'itch', url: itchUrl });

      const project: Project = {
        name,
        description,
        thumbnail: `/thumbnails/${name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
        links
      };

      onSubmit(project);
      
      // Reset form
      setName('');
      setDescription('');
      setThumbnail(null);
      setGithubUrl('');
      setItchUrl('');
    } catch (error) {
      console.error('Error submitting project:', error);
      alert('Failed to add project. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300">
          Project Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={4}
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-primary focus:ring-primary"
          placeholder="Describe your project's key features and technologies..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300">
          Thumbnail Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
          required
          className="mt-1 block w-full text-sm text-gray-300
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-primary file:text-white
            hover:file:bg-primary/90"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300">
          GitHub URL
        </label>
        <input
          type="url"
          value={githubUrl}
          onChange={(e) => setGithubUrl(e.target.value)}
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300">
          Itch.io URL
        </label>
        <input
          type="url"
          value={itchUrl}
          onChange={(e) => setItchUrl(e.target.value)}
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      <button
        type="submit"
        disabled={isUploading}
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
      >
        {isUploading ? 'Adding Project...' : 'Add Project'}
      </button>
    </form>
  );
} 
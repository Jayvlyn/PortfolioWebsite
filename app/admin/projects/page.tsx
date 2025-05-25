'use client';

import { useState, FormEvent } from 'react';
import { projects } from '@/data/projects';

export default function AdminProjectsPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    thumbnail: null as File | null,
    github: '',
    itch: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      // First, handle the file upload
      if (!formData.thumbnail) {
        throw new Error('Please select a thumbnail image');
      }

      // Create FormData for file upload
      const fileData = new FormData();
      fileData.append('file', formData.thumbnail);
      fileData.append('name', formData.name);

      // Upload the file first
      const uploadRes = await fetch(`${process.env.NEXT_PUBLIC_PORTFOLIO_URL || 'http://localhost:3000'}/api/projects/upload`, {
        method: 'POST',
        body: fileData,
      });

      if (!uploadRes.ok) {
        throw new Error('Failed to upload thumbnail');
      }

      // Then create the project
      const projectRes = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          description: formData.description,
          github: formData.github,
          itch: formData.itch || undefined,
        }),
      });

      if (!projectRes.ok) {
        throw new Error('Failed to create project');
      }

      setMessage({ type: 'success', text: 'Project added successfully!' });
      setFormData({ name: '', description: '', thumbnail: null, github: '', itch: '' });
      
      // Refresh the page to show the new project
      window.location.reload();
    } catch (error) {
      setMessage({ type: 'error', text: error instanceof Error ? error.message : 'Failed to add project' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (index: number) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const res = await fetch(`/api/projects?index=${index}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error('Failed to delete project');
      }

      setMessage({ type: 'success', text: 'Project deleted successfully!' });
      
      // Refresh the page to update the list
      window.location.reload();
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to delete project' });
    }
  };

  return (
    <main className="min-h-screen p-8 bg-[#2f2f2f] text-[#aeb1b9]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#f45353] mb-8">Project Manager</h1>
        
        {message.text && (
          <div className={`p-4 mb-4 rounded ${
            message.type === 'success' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
          }`}>
            {message.text}
          </div>
        )}
        
        {/* Add New Project Form */}
        <div className="bg-[#222222] p-6 rounded-lg mb-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-[#f45353]">Add New Project</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Project Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#aeb1b9]">
                Project Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 bg-[#2f2f2f] rounded border border-[#aeb1b9]/20 focus:border-[#f45353] focus:outline-none text-[#aeb1b9]"
                placeholder="Enter project name"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2 text-[#aeb1b9]">
                Project Description
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                className="w-full px-4 py-2 bg-[#2f2f2f] rounded border border-[#aeb1b9]/20 focus:border-[#f45353] focus:outline-none text-[#aeb1b9]"
                placeholder="Describe your project's key features and technologies..."
                required
              />
            </div>

            {/* Thumbnail Upload */}
            <div>
              <label htmlFor="thumbnail" className="block text-sm font-medium mb-2 text-[#aeb1b9]">
                Thumbnail Image
              </label>
              <input
                type="file"
                id="thumbnail"
                accept="image/*"
                onChange={(e) => setFormData(prev => ({ ...prev, thumbnail: e.target.files?.[0] || null }))}
                className="w-full px-4 py-2 bg-[#2f2f2f] rounded border border-[#aeb1b9]/20 focus:border-[#f45353] focus:outline-none text-[#aeb1b9]
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-[#f45353] file:text-white
                  hover:file:bg-[#f45353]/90"
                required
              />
            </div>

            {/* GitHub URL */}
            <div>
              <label htmlFor="github" className="block text-sm font-medium mb-2 text-[#aeb1b9]">
                GitHub URL
              </label>
              <input
                type="url"
                id="github"
                value={formData.github}
                onChange={(e) => setFormData(prev => ({ ...prev, github: e.target.value }))}
                className="w-full px-4 py-2 bg-[#2f2f2f] rounded border border-[#aeb1b9]/20 focus:border-[#f45353] focus:outline-none text-[#aeb1b9]"
                placeholder="https://github.com/yourusername/project"
                required
              />
            </div>

            {/* Itch.io URL */}
            <div>
              <label htmlFor="itch" className="block text-sm font-medium mb-2 text-[#aeb1b9]">
                Itch.io URL (Optional)
              </label>
              <input
                type="url"
                id="itch"
                value={formData.itch}
                onChange={(e) => setFormData(prev => ({ ...prev, itch: e.target.value }))}
                className="w-full px-4 py-2 bg-[#2f2f2f] rounded border border-[#aeb1b9]/20 focus:border-[#f45353] focus:outline-none text-[#aeb1b9]"
                placeholder="https://yourusername.itch.io/project"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#f45353] text-white py-3 rounded-md hover:bg-[#f45353]/90 transition-colors disabled:opacity-50 font-medium"
            >
              {isSubmitting ? 'Adding Project...' : 'Add Project'}
            </button>
          </form>
        </div>

        {/* Existing Projects List */}
        <div className="bg-[#222222] p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-[#f45353]">Existing Projects</h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="flex items-start justify-between p-4 bg-[#2f2f2f] rounded">
                <div className="flex-1 mr-4">
                  <h3 className="font-medium text-[#f45353]">{project.name}</h3>
                  <p className="text-sm text-[#aeb1b9] mt-2 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="text-sm text-[#aeb1b9]/70 mt-2">
                    {project.links.map(link => link.type).join(', ')}
                  </div>
                </div>
                <button 
                  onClick={() => handleDelete(index)}
                  className="px-3 py-1 text-sm bg-red-500/20 text-red-500 rounded hover:bg-red-500/30 transition-colors"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 
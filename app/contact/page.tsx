'use client';

import Image from 'next/image';
import { socialLinks } from '@/data/social';

export default function ContactPage() {
  return (
    <div className="fixed inset-0">
      {/* Account for navbar space */}
      <div className="h-16" />
      
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-primary py-8">
        Contact Me
      </h1>

      {/* Content */}
      <div className="w-[90%] h-[calc(100vh-12rem)] mx-auto">
        <div className="bg-[#222222] rounded-lg p-8 h-full overflow-y-auto flex items-center justify-center min-h-full">
          <div className="max-w-2xl w-full space-y-8">
            <div className="mb-4">
              <p className="text-center text-2xl md:text-3xl font-bold text-gray-300 select-all">leonardojacob257@gmail.com</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* GitHub (Top-left) */}
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-8 min-h-[140px] bg-[#333333] rounded-lg hover:bg-[#404040] transition-all transform-gpu hover:scale-125 hover:z-10 hover:shadow-lg origin-bottom-right"
              >
                <Image
                  src="/icons/Github_Logo.png"
                  alt="GitHub"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-primary">GitHub</h3>
                  <p className="text-text">View my projects and contributions</p>
                </div>
              </a>

              {/* Itch.io (Top-right) */}
              <a 
                href={socialLinks.itch}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-8 min-h-[140px] bg-[#333333] rounded-lg hover:bg-[#404040] transition-all transform-gpu hover:scale-125 hover:z-10 hover:shadow-lg origin-bottom-left"
              >
                <Image
                  src="/icons/Itch_Logo.png"
                  alt="Itch.io"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-primary">Itch.io</h3>
                  <p className="text-text">Play my games and demos</p>
                </div>
              </a>

              {/* Linktree (Bottom-left) */}
              <a 
                href={socialLinks.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-8 min-h-[140px] bg-[#333333] rounded-lg hover:bg-[#404040] transition-all transform-gpu hover:scale-125 hover:z-10 hover:shadow-lg origin-top-right"
              >
                <Image
                  src="/icons/Linktree_Logo.png"
                  alt="Linktree"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-primary">Linktree</h3>
                  <p className="text-text">Find all my social links</p>
                </div>
              </a>

              {/* LinkedIn (Bottom-right) */}
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-8 min-h-[140px] bg-[#333333] rounded-lg hover:bg-[#404040] transition-all transform-gpu hover:scale-125 hover:z-10 hover:shadow-lg origin-top-left"
              >
                <Image
                  src="/icons/Linkedin_Logo.png"
                  alt="LinkedIn"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-primary">LinkedIn</h3>
                  <p className="text-text">Connect with me professionally</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
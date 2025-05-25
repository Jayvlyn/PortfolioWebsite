'use client';

import Image from 'next/image';
import { aboutContent } from '@/data/about';

export default function AboutPage() {
  return (
    <div className="fixed inset-0">
      {/* Account for navbar space */}
      <div className="h-16" />
      
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-primary py-8">
        About Me
      </h1>

      {/* Three column layout */}
      <div className="w-[90%] h-[calc(100vh-16rem)] mx-auto flex gap-8">
        {/* Left image column */}
        <div className="w-1/4 space-y-4 overflow-y-auto">
          {aboutContent.leftImages.map((image, index) => (
            <div key={index} className="relative aspect-square w-full bg-[#222222] rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`About image ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          ))}
        </div>

        {/* Middle text column */}
        <div className="w-2/4 bg-[#222222] rounded-lg p-8 overflow-y-auto">
          <div className="space-y-6">
            <p className="text-text text-lg leading-relaxed">
              {aboutContent.introduction}
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8">My Background</h2>
            <p className="text-text text-lg leading-relaxed">
              {aboutContent.background}
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8">Skills & Expertise</h2>
            <ul className="list-disc list-inside text-text text-lg space-y-2">
              {aboutContent.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8">What Drives Me</h2>
            <p className="text-text text-lg leading-relaxed">
              {aboutContent.whatDrivesMe}
            </p>
          </div>
        </div>

        {/* Right image column */}
        <div className="w-1/4 space-y-4 overflow-y-auto">
          {aboutContent.rightImages.map((image, index) => (
            <div key={index} className="relative aspect-square w-full bg-[#222222] rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`About image ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
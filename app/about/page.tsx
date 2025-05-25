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
      <div className="w-[90%] h-[calc(100vh-12rem)] mx-auto flex gap-8">
        {/* Left image column */}
        <div className="w-1/4 space-y-4 overflow-y-auto">
          {aboutContent.leftImages.map((image, index) => (
            <div key={index} className="relative w-full bg-[#222222] rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`About image ${index + 1}`}
                width={500}
                height={750}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          ))}
        </div>

        {/* Middle column container */}
        <div className="w-2/4 flex flex-col">
          {/* Text content */}
          <div className="bg-[#222222] rounded-lg p-8 overflow-y-auto flex-1">
            <div className="space-y-6">
              <p className="text-text text-lg leading-relaxed">
                {aboutContent.introduction}
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8">My Background</h2>
              <p className="text-text text-lg leading-relaxed">
                {aboutContent.background}
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8">Skills & Expertise</h2>
              <div className="grid grid-cols-3 gap-4">
                {aboutContent.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-[#333333] p-4 rounded-lg text-center hover:bg-[#404040] transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-semibold text-primary mt-8">What Drives Me</h2>
              <p className="text-text text-lg leading-relaxed">
                {aboutContent.whatDrivesMe}
              </p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="mt-4 mb-4">
            <Image
              src="/images/banner.jpg"
              alt="Banner"
              width={1000}
              height={500}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Right image column */}
        <div className="w-1/4 space-y-4 overflow-y-auto">
          {aboutContent.rightImages.map((image, index) => (
            <div key={index} className="relative w-full bg-[#222222] rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`About image ${index + 1}`}
                width={500}
                height={750}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
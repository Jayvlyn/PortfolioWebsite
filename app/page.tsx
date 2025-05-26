"use client";
import { useEffect, useState } from 'react';

function ScrollingStack({ images, direction = 'up', className = '' }) {
  // Duplicate the images 4 times for seamless looping
  const stackImages = Array(4).fill(images).flat();
  return (
    <div className={`absolute top-0 ${direction === 'left' ? 'left-0' : 'right-0'} h-full w-32 overflow-hidden pointer-events-none ${className}`}>
      <div
        className="flex flex-col animate-scroll-stack"
        style={{
          minHeight: '200vh',
          animationDirection: direction === 'up' ? 'normal' : 'reverse',
          animationDuration: `${images.length * 2.5}s`,
        }}
      >
        {stackImages.map((img, idx) => (
          <img
            key={idx}
            src={`/thumbnails/${img}`}
            alt="thumbnail"
            className="w-32 h-auto object-contain rounded-none"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [thumbnails, setThumbnails] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/thumbnails')
      .then(res => res.json())
      .then(data => {
        // Shuffle the array for randomness
        setThumbnails(data.thumbnails.sort(() => Math.random() - 0.5));
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden" style={{ overflowY: 'hidden', height: '100vh' }}>
      {/* Left and right scrolling stacks */}
      {thumbnails.length > 0 && (
        <>
          <ScrollingStack images={thumbnails} direction="up" className="left-0" />
          <ScrollingStack images={thumbnails} direction="down" className="right-0" />
        </>
      )}
      <h1 className="text-6xl md:text-8xl font-bold mb-6 text-center relative z-10">
        <span className="text-gray-300">Hi, I'm </span>
        <span className="text-primary font-extrabold">Jacob Leonardo</span>
      </h1>
      <p className="text-2xl md:text-3xl text-gray-200 text-center max-w-2xl mb-8 relative z-10">
        I'm a passionate software and game developer. See my projects, learn about me, or get in contact!
      </p>
      <div className="mt-8 flex gap-6 relative z-10">
        <a 
          href="/projects" 
          className="px-6 py-3 bg-primary text-background rounded-full hover:bg-primary/90 transition-colors duration-300"
        >
          View Projects
        </a>
        <a 
          href="/about" 
          className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-colors duration-300"
        >
          About Me
        </a>
        <a 
          href="/contact" 
          className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-colors duration-300"
        >
          Get in Touch
        </a>
      </div>
      <style jsx global>{`
        html, body {
          overflow-y: hidden !important;
          height: 100vh;
        }
        @keyframes scroll-stack {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-stack {
          animation-name: scroll-stack;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  )
} 
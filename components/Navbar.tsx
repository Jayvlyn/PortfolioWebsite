'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed top-0 w-full z-50 group">
      {/* Background layer */}
      <div className="absolute top-0 w-full h-16 bg-surface border-b border-black/10 transition-transform duration-300 ease-out origin-top group-hover:scale-y-150" />
      
      {/* Content container */}
      <nav className="relative w-full h-16 transition-[height] duration-300 ease-out group-hover:h-24">
        <div className="max-w-5xl mx-auto px-4 h-full relative">
          {/* Portfolio button aligned left */}
          <Link
            href="/"
            className={`
              relative flex items-center justify-center
              transition-all duration-300 ease-out
              w-[140px] hover:w-[240px]
              h-16 group-hover:h-24
              text-2xl font-bold
              ${pathname === '/' ? 'text-primary' : 'text-primary hover:text-primary/80'}
            `}
          >
            {/* Hover background */}
            <div className={`
              absolute inset-0 transition-all duration-300
              ${pathname === '/' 
                ? 'bg-primary/10' 
                : 'bg-text/5 opacity-0 hover:opacity-100'
              }
            `} />
            <span className="relative z-10 whitespace-nowrap px-4 pointer-events-none transform-gpu transition-transform duration-300 group-hover:scale-110">
              Home
            </span>
            {/* Active indicator */}
            {pathname === '/' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </Link>
          {/* Resume button in the far right */}
          <a
            href="https://docs.google.com/document/d/1QcOyGSrRi7dEoi9b8I4N2N_41YFPkVcG-qje47gZBTQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 px-5 py-2 bg-primary text-background rounded-full hover:bg-primary/90 transition-colors duration-300 font-semibold text-lg shadow-lg"
          >
            <Image src="/icons/resume_icon.png" alt="Resume" width={32} height={32} className="rounded" />
            <span>Resume</span>
          </a>
          {/* Centered navigation */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-full items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`
                  relative flex items-center justify-center
                  transition-all duration-300 ease-out
                  w-[140px] hover:w-[240px]
                  h-16 group-hover:h-24
                  ${pathname === item.path
                    ? 'text-primary font-medium'
                    : 'text-text hover:text-primary'
                  }
                `}
              >
                {/* Hover background */}
                <div className={`
                  absolute inset-0 transition-all duration-300
                  ${pathname === item.path 
                    ? 'bg-primary/10' 
                    : 'bg-text/5 opacity-0 hover:opacity-100'
                  }
                `} />
                {/* Text content */}
                <span className="relative z-10 whitespace-nowrap px-4 pointer-events-none transform-gpu transition-transform duration-300 group-hover:scale-110">
                  {item.label}
                </span>
                {/* Active indicator */}
                {pathname === item.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
} 
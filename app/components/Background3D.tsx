'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function Background3D() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [0, window.innerHeight], [5, -5]), {
    stiffness: 50,
    damping: 30
  });

  const rotateY = useSpring(useTransform(mouseX, [0, window.innerWidth], [-5, 5]), {
    stiffness: 50,
    damping: 30
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#2f2f2f]">
      {/* Background Panels */}
      <motion.div
        className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1"
        style={{
          perspective: '1000px',
          rotateX,
          rotateY
        }}
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <motion.div
            key={i}
            className="bg-[#2f2f2f] rounded-lg"
            style={{
              transformOrigin: 'center',
              rotateX,
              rotateY,
              scale: 1.1
            }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          />
        ))}
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2f2f2f]/20 to-[#2f2f2f]/40" />
    </div>
  );
} 
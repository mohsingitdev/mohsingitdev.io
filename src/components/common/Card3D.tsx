import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number; // max tilt degrees (e.g. 7-10 deg for Apple subtlety)
  glareOpacity?: number; // subtle glare opacity (0 - 0.25)
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  maxRotation = 7,
  glareOpacity = 0.12
}) => {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse coordinates relative to card center [-0.5, 0.5]
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Apple spring physics configuration
  const springConfig = { stiffness: 280, damping: 22, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // 3D rotations based on normalized coordinates
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-maxRotation, maxRotation]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [maxRotation, -maxRotation]);

  // Glare position
  const glareX = useTransform(smoothX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(smoothY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 relative [perspective:1200px]"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`relative transition-shadow duration-300 ${className}`}
      >
        {children}

        {/* Dynamic Specular 3D Glare Sheen (Apple Glass Effect) */}
        {glareOpacity > 0 && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden opacity-0 transition-opacity duration-300"
            style={{
              opacity: isHovered ? glareOpacity : 0,
            }}
          >
            <motion.div
              className="absolute -inset-full w-[300%] h-[300%] pointer-events-none"
              style={{
                left: glareX,
                top: glareY,
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 65%)',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number; // max tilt degrees (e.g. 7-10 deg for Apple subtlety)
  glareOpacity?: number; // subtle glare opacity (0 - 0.3)
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  maxRotation = 8,
  glareOpacity = 0.18
}) => {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse coordinates relative to card center [-0.5, 0.5]
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Apple spring physics configuration: responsive, fluid, zero overshoot
  const springConfig = { stiffness: 260, damping: 20, mass: 0.6 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // 3D rotations based on normalized coordinates
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-maxRotation, maxRotation]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [maxRotation, -maxRotation]);

  // Glare position following cursor
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
      className="relative [perspective:1200px]"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`relative transition-all duration-300 ${className}`}
      >
        {children}

        {/* Dynamic Specular 3D Glare Sheen with Claude Terracotta Warmth */}
        {glareOpacity > 0 && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden opacity-0 transition-opacity duration-300 z-30"
            style={{
              opacity: isHovered ? glareOpacity : 0,
            }}
          >
            <motion.div
              className="absolute -inset-full w-[250%] h-[250%] pointer-events-none"
              style={{
                left: glareX,
                top: glareY,
                background: 'radial-gradient(circle at center, rgba(217, 119, 87, 0.28) 0%, rgba(255, 255, 255, 0.20) 30%, transparent 68%)',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

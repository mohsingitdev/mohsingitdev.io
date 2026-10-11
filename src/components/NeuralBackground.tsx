import React, { useEffect, useRef } from 'react';

export const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Virtual 3D camera parameters
    const fov = 480;
    let centerX = width / 2;
    let centerY = height / 2;

    // Mouse & Camera Parallax state
    let mouse = { x: -1000, y: -1000, active: false };
    let cameraAngleX = 0;
    let cameraAngleY = 0;
    let targetCameraAngleX = 0;
    let targetCameraAngleY = 0;

    // Scroll depth translation
    let lastScrollY = window.scrollY;
    let scrollDelta = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      targetCameraAngleX = ((e.clientX - centerX) / width) * 0.35;
      targetCameraAngleY = ((e.clientY - centerY) / height) * 0.35;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      targetCameraAngleX = 0;
      targetCameraAngleY = 0;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDelta += (currentScrollY - lastScrollY) * 0.4;
      lastScrollY = currentScrollY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      centerX = width / 2;
      centerY = height / 2;
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // 3D Particle Structure
    interface Particle3D {
      x: number; // -width..width
      y: number; // -height..height
      z: number; // 20..800
      vx: number;
      vy: number;
      vz: number;
      size: number;
      baseAlpha: number;
      colorType: 'terracotta' | 'amber';
    }

    let particles: Particle3D[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 16000), 75);

    const initParticles = () => {
      particles = [];
      const spreadX = width * 0.9;
      const spreadY = height * 0.9;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: (Math.random() - 0.5) * spreadX * 2,
          y: (Math.random() - 0.5) * spreadY * 2,
          z: Math.random() * 600 + 40,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          vz: (Math.random() - 0.5) * 0.25,
          size: 1.4 + Math.random() * 1.8,
          baseAlpha: 0.2 + Math.random() * 0.3,
          colorType: Math.random() > 0.35 ? 'terracotta' : 'amber',
        });
      }
    };

    initParticles();

    // 60FPS Perspective Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth camera interpolation (Apple spring feel)
      cameraAngleX += (targetCameraAngleX - cameraAngleX) * 0.05;
      cameraAngleY += (targetCameraAngleY - cameraAngleY) * 0.05;

      // Dampen scroll translation
      scrollDelta *= 0.92;

      const cosX = Math.cos(cameraAngleX);
      const sinX = Math.sin(cameraAngleX);
      const cosY = Math.cos(cameraAngleY);
      const sinY = Math.sin(cameraAngleY);

      // Projected buffer for connecting filaments
      const projected = new Array(particles.length);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Drift motion
        p.x += p.vx;
        p.y += p.vy - scrollDelta * 0.15;
        p.z += p.vz;

        // Boundary wrapping in 3D box
        const boundX = width * 0.9;
        const boundY = height * 0.9;
        if (p.x < -boundX) p.x = boundX;
        if (p.x > boundX) p.x = -boundX;
        if (p.y < -boundY) p.y = boundY;
        if (p.y > boundY) p.y = -boundY;
        if (p.z < 30) p.z = 640;
        if (p.z > 640) p.z = 30;

        // Apply camera perspective rotation
        const rotX = p.x * cosX + p.z * sinX;
        const tempZ = -p.x * sinX + p.z * cosX;
        const rotY = p.y * cosY - tempZ * sinY;
        const finalZ = p.y * sinY + tempZ * cosY;

        // Perspective scale factor
        const depth = Math.max(finalZ + fov, 60);
        const scale = fov / depth;
        const screenX = centerX + rotX * scale;
        const screenY = centerY + rotY * scale;

        projected[i] = {
          screenX,
          screenY,
          depth,
          scale,
          alpha: p.baseAlpha * Math.min(Math.max((640 - finalZ) / 500, 0.15), 1),
          size: Math.max(p.size * scale, 0.8),
          colorType: p.colorType,
        };
      }

      // 1. Draw 3D Synaptic Filaments between proximate nodes
      for (let i = 0; i < particles.length; i++) {
        const p1 = projected[i];
        if (!p1 || p1.screenX < -50 || p1.screenX > width + 50 || p1.screenY < -50 || p1.screenY > height + 50) continue;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = projected[j];
          if (!p2 || p2.screenX < -50 || p2.screenX > width + 50 || p2.screenY < -50 || p2.screenY > height + 50) continue;

          const dx = p1.screenX - p2.screenX;
          const dy = p1.screenY - p2.screenY;
          const dist2D = Math.sqrt(dx * dx + dy * dy);

          // Filament threshold
          const threshold = 125 * ((p1.scale + p2.scale) / 2);
          if (dist2D < threshold) {
            const lineAlpha = (1 - dist2D / threshold) * 0.16 * ((p1.alpha + p2.alpha) / 2);
            ctx.strokeStyle = `rgba(222, 90, 53, ${lineAlpha})`; // Terracotta accent #DE5A35
            ctx.lineWidth = Math.max(0.6 * ((p1.scale + p2.scale) / 2), 0.35);
            ctx.beginPath();
            ctx.moveTo(p1.screenX, p1.screenY);
            ctx.lineTo(p2.screenX, p2.screenY);
            ctx.stroke();
          }
        }
      }

      // 2. Render glowing 3D particle nodes with depth attenuation
      for (let i = 0; i < particles.length; i++) {
        const p = projected[i];
        if (!p || p.screenX < -20 || p.screenX > width + 20 || p.screenY < -20 || p.screenY > height + 20) continue;

        // Subtle mouse proximity glow
        let nodeAlpha = p.alpha;
        if (mouse.active) {
          const mdx = mouse.x - p.screenX;
          const mdy = mouse.y - p.screenY;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 140) {
            nodeAlpha = Math.min(nodeAlpha + (1 - mDist / 140) * 0.45, 0.95);
          }
        }

        const color = p.colorType === 'terracotta'
          ? `rgba(222, 90, 53, ${nodeAlpha})` // #DE5A35
          : `rgba(245, 158, 11, ${nodeAlpha * 0.9})`; // Warm Gold #F59E0B

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.screenX, p.screenY, p.size, 0, Math.PI * 2);
        ctx.fill();

        // High-depth specular halo for closer particles
        if (p.scale > 0.85) {
          ctx.fillStyle = p.colorType === 'terracotta'
            ? `rgba(222, 90, 53, ${nodeAlpha * 0.25})`
            : `rgba(245, 158, 11, ${nodeAlpha * 0.2})`;
          ctx.beginPath();
          ctx.arc(p.screenX, p.screenY, p.size * 2.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-65"
    />
  );
};

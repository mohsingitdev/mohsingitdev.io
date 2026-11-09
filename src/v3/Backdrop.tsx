import React, { useEffect, useRef } from 'react';

// Site-wide 3D backdrop, drawn on one canvas in three depth layers:
//   1. a perspective sheet of flowing stream lines and dots (the "ground"),
//   2. a sparse overhead ribbon layer drifting the other way,
//   3. a few nodes floating in 3D, linked when close (agents in a graph).
// Slow by design, theme-aware (reads --v3-*-rgb), pointer and scroll parallax,
// ~40 fps cap, paused when the tab is hidden, a single static frame for reduced motion.

interface Node3 { x: number; y: number; z: number; vx: number; vy: number; vz: number }

export const Backdrop: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let w = 0, h = 0, raf = 0, last = 0, timer = 0;
    let colA = '207,168,106', colB = '163,192,176', dark = true;
    let px = 0, py = 0, tx = 0, ty = 0;
    let cols = 60, rows = 24;
    const nodes: Node3[] = Array.from({ length: 12 }, (_, i) => ({
      x: -8 + ((i * 37) % 16), y: 0.8 + ((i * 13) % 22) / 10, z: 5 + ((i * 29) % 13),
      vx: (((i * 7) % 5) - 2) * 0.004, vy: (((i * 11) % 5) - 2) * 0.0016, vz: (((i * 3) % 5) - 2) * 0.004,
    }));

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      colA = cs.getPropertyValue('--v3-signal-rgb').trim() || colA;
      colB = cs.getPropertyValue('--v3-trace-rgb').trim() || colB;
      dark = document.documentElement.classList.contains('dark');
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = w < 720 ? 34 : 60; rows = w < 720 ? 16 : 24;
      draw(last);
    };

    const height = (x: number, z: number, t: number) =>
      0.55 * Math.sin(x * 0.35 + t * 0.22) * Math.cos(z * 0.28 - t * 0.16) + 0.35 * Math.sin((x * 0.6 + z * 0.4) * 0.5 + t * 0.12);

    function draw(ms: number) {
      const t = ms / 1000;
      const k = dark ? 1 : 1.35;
      const fov = h * 0.57;
      const sc = Math.min(window.scrollY, 1400);
      const horizon = h * 0.46 - sc * 0.05 + py * 14;
      const camX = px * 0.9;
      const camY = 2.2;
      const proj = (x: number, y: number, z: number): [number, number] =>
        [w / 2 + ((x - camX) * fov) / z, horizon + ((camY - y) * fov) / z];

      ctx!.clearRect(0, 0, w, h);

      // Layer 1: ground sheet, far rows first.
      for (let r = rows - 1; r >= 0; r--) {
        const zn = r / (rows - 1);
        const z = 2 + zn * 24;
        const a = (1 - zn) ** 1.4;
        ctx!.beginPath();
        for (let c = 0; c <= cols; c++) {
          const x = -13 + (26 * c) / cols;
          const [sx, sy] = proj(x, height(x, z, t), z);
          c === 0 ? ctx!.moveTo(sx, sy) : ctx!.lineTo(sx, sy);
        }
        ctx!.strokeStyle = `rgba(${colB},${0.2 * a * k})`;
        ctx!.lineWidth = 0.6 + a * 0.6;
        ctx!.stroke();
        ctx!.fillStyle = `rgba(${colA},${0.5 * a * k})`;
        for (let c = 0; c <= cols; c += 2) {
          const x = -13 + (26 * c) / cols;
          const [sx, sy] = proj(x, height(x, z, t), z);
          ctx!.beginPath(); ctx!.arc(sx, sy, 0.5 + a * 1.4, 0, 6.2832); ctx!.fill();
        }
      }

      // Layer 2: overhead ribbons, drifting the other way.
      for (let r = 0; r < 5; r++) {
        const z = 6 + r * 3.5;
        const a = 0.09 * (1 - r / 6) * k;
        ctx!.beginPath();
        for (let c = 0; c <= cols; c++) {
          const x = -13 + (26 * c) / cols;
          const y = 4.6 + 0.4 * Math.sin(x * 0.25 - t * 0.14 + r) + r * 0.18;
          const [sx, sy] = proj(x, y, z);
          c === 0 ? ctx!.moveTo(sx, sy) : ctx!.lineTo(sx, sy);
        }
        ctx!.strokeStyle = `rgba(${colA},${a})`;
        ctx!.lineWidth = 1;
        ctx!.stroke();
      }

      // Layer 3: floating nodes and links.
      const pts = nodes.map((n) => {
        if (!reduce) {
          n.x += n.vx; n.y += n.vy; n.z += n.vz;
          if (n.x < -9 || n.x > 9) n.vx *= -1;
          if (n.y < 0.6 || n.y > 3.2) n.vy *= -1;
          if (n.z < 4 || n.z > 19) n.vz *= -1;
        }
        const [sx, sy] = proj(n.x, n.y, n.z);
        return { sx, sy, n, a: 1 - (n.z - 4) / 16 };
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const p = pts[i].n, q = pts[j].n;
          const d = Math.hypot(p.x - q.x, p.y - q.y, p.z - q.z);
          if (d > 5) continue;
          ctx!.strokeStyle = `rgba(${colA},${(1 - d / 5) * 0.18 * Math.min(pts[i].a, pts[j].a) * k})`;
          ctx!.lineWidth = 0.8;
          ctx!.beginPath(); ctx!.moveTo(pts[i].sx, pts[i].sy); ctx!.lineTo(pts[j].sx, pts[j].sy); ctx!.stroke();
        }
      }
      for (const p of pts) {
        ctx!.fillStyle = `rgba(${colA},${0.1 * p.a * k})`;
        ctx!.beginPath(); ctx!.arc(p.sx, p.sy, 6 + p.a * 6, 0, 6.2832); ctx!.fill();
        ctx!.fillStyle = `rgba(${colA},${0.75 * p.a * k})`;
        ctx!.beginPath(); ctx!.arc(p.sx, p.sy, 1.2 + p.a * 1.4, 0, 6.2832); ctx!.fill();
      }
    }

    const loop = (ms: number) => {
      raf = requestAnimationFrame(loop);
      if (document.hidden || ms - last < 24) return;
      last = ms;
      px += (tx - px) * 0.04; py += (ty - py) * 0.04;
      draw(ms);
    };

    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      tx = e.clientX / w - 0.5; ty = e.clientY / h - 0.5;
    };
    const onResize = () => { window.clearTimeout(timer); timer = window.setTimeout(resize, 150); };
    const mo = new MutationObserver(() => { readColors(); if (reduce) draw(0); });

    readColors();
    resize();
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('resize', onResize);
    if (!reduce) {
      window.addEventListener('pointermove', onPointer, { passive: true });
      raf = requestAnimationFrame(loop);
    } else {
      window.addEventListener('scroll', () => draw(0), { passive: true });
    }
    return () => {
      cancelAnimationFrame(raf); window.clearTimeout(timer); mo.disconnect();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointer);
    };
  }, []);

  return (
    <div className="v3-backdrop" aria-hidden="true">
      <i />
      <i />
      <canvas ref={ref} />
    </div>
  );
};

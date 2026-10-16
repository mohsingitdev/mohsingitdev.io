import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Zap, ShieldCheck, Cpu, Activity, RefreshCw, Sparkles } from 'lucide-react';

export type ModelTarget = 'gemma' | 'laya' | 'claude' | 'openai';

interface Hero3DCanvasProps {
  activeModel: ModelTarget;
  onSelectModel: (model: ModelTarget) => void;
  pulseTrigger: number;
}

interface NodeData {
  name: string;
  label: string;
  role: string;
  position: THREE.Vector3;
  color: number;
  latency: string;
  status: string;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({
  activeModel,
  onSelectModel,
  pulseTrigger
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fps, setFps] = useState<number>(60);
  const animFrameId = useRef<number>(0);
  const isIntersecting = useRef<boolean>(true);

  // References for dynamic Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const mainGroupRef = useRef<THREE.Group | null>(null);
  const pulsesRef = useRef<Array<{ mesh: THREE.Mesh; progress: number; path: THREE.Vector3[]; speed: number }>>([]);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0
  });

  // Nodes definition (Reflecting Platform Engineering, Gemma fine-tuning, Traditional ML, and Cloud Scalability)
  const nodesRef = useRef<NodeData[]>([
    {
      name: 'ingress',
      label: 'Ingress & WAF',
      role: 'AWS & GCP VPC Gateway',
      position: new THREE.Vector3(-2.2, 1.1, 0.4),
      color: 0xd97757, // Terracotta
      latency: '< 2.4ms',
      status: '100k+ req/s Ingress'
    },
    {
      name: 'laya',
      label: 'Laya SLM Gateway',
      role: 'Deterministic Sub-40ms Fast-Path',
      position: new THREE.Vector3(0, 0, 0),
      color: 0x10b981, // Emerald
      latency: '31.2ms P99',
      status: 'Zero-Overhead Routing'
    },
    {
      name: 'gemma',
      label: 'Fine-Tuned Gemma 8B/27B',
      role: 'Hugging Face LoRA Agent Fleet',
      position: new THREE.Vector3(2.1, 1.2, -0.4),
      color: 0xf5ebe6, // Luxury Champagne
      latency: '~ 65ms P99',
      status: 'Domain-Specialized Weights'
    },
    {
      name: 'traditional_ml',
      label: 'Traditional ML & Verifier',
      role: 'XGBoost / Anomaly & Pydantic Bounds',
      position: new THREE.Vector3(1.7, -1.3, 0.5),
      color: 0x38bdf8, // Sky Blue
      latency: '< 4.8ms',
      status: 'Statistical & Schema Bounds'
    },
    {
      name: 'cloud_egress',
      label: 'AWS EKS & GCP GKE Egress',
      role: 'vLLM / Triton Autoscaling Cluster',
      position: new THREE.Vector3(-1.8, -1.2, -0.3),
      color: 0xa855f7, // Purple
      latency: '< 3.2ms',
      status: '100k+ req/s Concurrency'
    }
  ]);

  // Trigger pulse effect
  const triggerPulseEffect = useCallback(() => {
    if (!sceneRef.current || !mainGroupRef.current) return;

    const startPos = nodesRef.current[0].position; // Ingress
    const centerPos = nodesRef.current[1].position; // Laya
    
    let targetPos: THREE.Vector3;
    let pulseColor: number;

    if (activeModel === 'gemma') {
      targetPos = nodesRef.current[2].position; // Gemma 8B/27B
      pulseColor = 0xf5ebe6; // Champagne
    } else if (activeModel === 'laya') {
      targetPos = nodesRef.current[3].position; // Traditional ML / Verifier
      pulseColor = 0x10b981; // Emerald
    } else if (activeModel === 'claude') {
      targetPos = nodesRef.current[2].position;
      pulseColor = 0xd97757; // Terracotta
    } else {
      targetPos = nodesRef.current[4].position; // Cloud Egress
      pulseColor = 0x38bdf8; // Sky Blue
    }

    // Create 3 glowing energy packets
    for (let i = 0; i < 3; i++) {
      const geometry = new THREE.SphereGeometry(0.09, 12, 12);
      const material = new THREE.MeshBasicMaterial({
        color: pulseColor,
        transparent: true,
        opacity: 0.95
      });
      const mesh = new THREE.Mesh(geometry, material);
      mainGroupRef.current.add(mesh);

      pulsesRef.current.push({
        mesh,
        progress: -i * 0.18,
        path: [startPos, centerPos, targetPos],
        speed: 0.022
      });
    }
  }, [activeModel]);

  // Listen to external pulse triggers
  useEffect(() => {
    if (pulseTrigger > 0) {
      triggerPulseEffect();
    }
  }, [pulseTrigger, triggerPulseEffect]);

  // Main Three.js Scene Setup
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let width = container.clientWidth || 550;
    let height = container.clientHeight || 340;

    // Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.2);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    // Main 3D Container Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);
    mainGroupRef.current = mainGroup;

    // 1. Central Geodesic Icosahedron Lattice (Laya Neural Core)
    const icoGeometry = new THREE.IcosahedronGeometry(1.35, 1);
    const icoWireframe = new THREE.WireframeGeometry(icoGeometry);
    const icoLineMaterial = new THREE.LineBasicMaterial({
      color: 0xd97757,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });
    const icoLines = new THREE.LineSegments(icoWireframe, icoLineMaterial);
    mainGroup.add(icoLines);

    // Inner Glowing Core Sphere
    const innerCoreGeo = new THREE.SphereGeometry(0.7, 24, 24);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0x181715,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    mainGroup.add(innerCore);

    // 2. Orbital Metallic Gimbal Rings
    const ringMat1 = new THREE.LineBasicMaterial({
      color: 0xf5ebe6,
      transparent: true,
      opacity: 0.28
    });
    const ringMat2 = new THREE.LineBasicMaterial({
      color: 0xd97757,
      transparent: true,
      opacity: 0.4
    });

    const createRing = (radius: number, mat: THREE.LineBasicMaterial, rotX: number, rotY: number) => {
      const curve = new THREE.EllipseCurve(0, 0, radius, radius, 0, 2 * Math.PI, false, 0);
      const points = curve.getPoints(64);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const ring = new THREE.Line(geometry, mat);
      ring.rotation.x = rotX;
      ring.rotation.y = rotY;
      return ring;
    };

    const ring1 = createRing(2.1, ringMat1, Math.PI / 3, Math.PI / 6);
    const ring2 = createRing(2.6, ringMat2, -Math.PI / 4, Math.PI / 4);
    const ring3 = createRing(3.1, ringMat1, Math.PI / 2.2, -Math.PI / 5);
    mainGroup.add(ring1);
    mainGroup.add(ring2);
    mainGroup.add(ring3);

    // 3. Network Connection Beams Between Nodes
    const lineCoords: number[] = [];
    const nodes = nodesRef.current;
    
    const connections = [
      [0, 1], // Ingress -> Laya
      [1, 2], // Laya -> Gemma 8B/27B
      [1, 3], // Laya -> Traditional ML
      [1, 4], // Laya -> Cloud Egress (AWS/GCP)
      [0, 4], // Ingress -> Egress (Bypass circuit)
      [2, 3], // Gemma -> Verifier
      [3, 4]  // Traditional ML -> Cloud Egress
    ];

    connections.forEach(([fromIdx, toIdx]) => {
      const from = nodes[fromIdx].position;
      const to = nodes[toIdx].position;
      lineCoords.push(from.x, from.y, from.z, to.x, to.y, to.z);
    });

    const connGeometry = new THREE.BufferGeometry();
    connGeometry.setAttribute('position', new THREE.Float32BufferAttribute(lineCoords, 3));
    const connMaterial = new THREE.LineBasicMaterial({
      color: 0xd97757,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });
    const connectionLines = new THREE.LineSegments(connGeometry, connMaterial);
    mainGroup.add(connectionLines);

    // 4. Interactive Node Spheres & Glow Halos
    nodes.forEach((node) => {
      const sphereGeo = new THREE.SphereGeometry(node.name === 'laya' ? 0.22 : 0.16, 20, 20);
      const sphereMat = new THREE.MeshBasicMaterial({
        color: node.color
      });
      const mesh = new THREE.Mesh(sphereGeo, sphereMat);
      mesh.position.copy(node.position);
      mainGroup.add(mesh);

      const auraGeo = new THREE.SphereGeometry(node.name === 'laya' ? 0.38 : 0.28, 16, 16);
      const auraMat = new THREE.MeshBasicMaterial({
        color: node.color,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending
      });
      const auraMesh = new THREE.Mesh(auraGeo, auraMat);
      auraMesh.position.copy(node.position);
      mainGroup.add(auraMesh);
    });

    // 5. Orbiting Token Stream Particle Cloud (380 particles)
    const particleCount = 380;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const r = 1.2 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xf5ebe6,
      size: 0.045,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particlePoints);

    // Initial pulse
    triggerPulseEffect();

    // Mouse Parallax Event
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = nx * 0.45;
      mouseRef.current.targetY = ny * 0.35;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // IntersectionObserver to pause when scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersecting.current = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let frameCounter = 0;
    let lastTime = performance.now();

    const animate = () => {
      animFrameId.current = requestAnimationFrame(animate);

      if (!isIntersecting.current) return;

      const elapsedTime = clock.getElapsedTime();
      frameCounter++;

      if (frameCounter >= 60) {
        const now = performance.now();
        const deltaSec = (now - lastTime) / 1000;
        setFps(Math.round(frameCounter / deltaSec));
        frameCounter = 0;
        lastTime = now;
      }

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      if (mainGroup) {
        mainGroup.rotation.y = elapsedTime * 0.18 + mouseRef.current.x;
        mainGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.08 + mouseRef.current.y;
      }

      ring1.rotation.z = elapsedTime * 0.22;
      ring2.rotation.z = -elapsedTime * 0.17;
      ring3.rotation.y = elapsedTime * 0.12;

      const breath = 1 + Math.sin(elapsedTime * 2.2) * 0.04;
      icoLines.scale.set(breath, breath, breath);
      innerCore.rotation.y = -elapsedTime * 0.35;

      particlePoints.rotation.y = -elapsedTime * 0.08;
      particlePoints.rotation.z = elapsedTime * 0.04;

      // Update active energy pulses
      for (let i = pulsesRef.current.length - 1; i >= 0; i--) {
        const pulse = pulsesRef.current[i];
        pulse.progress += pulse.speed;

        if (pulse.progress < 0) {
          pulse.mesh.visible = false;
          continue;
        }

        pulse.mesh.visible = true;

        if (pulse.progress >= 1) {
          mainGroup.remove(pulse.mesh);
          pulse.mesh.geometry.dispose();
          (pulse.mesh.material as THREE.Material).dispose();
          pulsesRef.current.splice(i, 1);
          continue;
        }

        const [p0, p1, p2] = pulse.path;
        const t = pulse.progress;
        const u = 1 - t;
        const x = u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x;
        const y = u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y;
        const z = u * u * p0.z + 2 * u * t * p1.z + t * t * p2.z;
        pulse.mesh.position.set(x, y, z);

        const pulseScale = 1 + Math.sin(t * Math.PI) * 0.6;
        pulse.mesh.scale.set(pulseScale, pulseScale, pulseScale);
      }

      renderer.render(scene, camera);
    };

    animate();

    const autoPulseInterval = setInterval(() => {
      triggerPulseEffect();
    }, 4200);

    return () => {
      clearInterval(autoPulseInterval);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      cancelAnimationFrame(animFrameId.current);

      icoGeometry.dispose();
      icoWireframe.dispose();
      icoLineMaterial.dispose();
      innerCoreGeo.dispose();
      innerCoreMat.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      connGeometry.dispose();
      connMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      pulsesRef.current.forEach((p) => {
        p.mesh.geometry.dispose();
        (p.mesh.material as THREE.Material).dispose();
      });

      renderer.dispose();
    };
  }, [triggerPulseEffect]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300px] sm:h-[330px] lg:h-[350px] flex items-center justify-center select-none overflow-hidden rounded-2xl"
    >
      {/* Three.js WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-grab active:cursor-grabbing touch-none"
      />

      {/* Ambient Radial Spotlight Behind 3D Core */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,87,0.18)_0%,rgba(0,0,0,0)_72%)] pointer-events-none" />

      {/* Top Left: Live Routing Engine Telemetry */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 p-2.5 sm:p-3 rounded-2xl apple-glass border border-white/15 shadow-2xl backdrop-blur-md max-w-[210px] pointer-events-none transition-all duration-300">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-wider text-white font-semibold">
            PLATFORM ROUTING CORE
          </span>
        </div>
        <div className="text-xs font-bold text-white flex items-center justify-between">
          <span>AWS & GCP VPC</span>
          <span className="text-emerald-400 font-mono">ONLINE</span>
        </div>
        <div className="text-[10px] font-mono text-slate-400 mt-1 flex justify-between border-t border-white/10 pt-1">
          <span>P99 SLA:</span>
          <span className="text-luxury-champagne">&lt; 40ms Fast-Path</span>
        </div>
      </div>

      {/* Top Right: GPU Render Telemetry */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-2 p-1.5 px-2.5 sm:px-3 rounded-full apple-glass border border-white/15 text-[10px] sm:text-[11px] font-mono text-white/90 shadow-lg pointer-events-none">
        <Cpu className="w-3.5 h-3.5 text-terracotta animate-spin" style={{ animationDuration: '8s' }} />
        <span>vLLM / WebGL</span>
        <span className="text-white/40">•</span>
        <span className="text-emerald-400 font-semibold">{fps} FPS</span>
      </div>

      {/* Bottom Center: Interactive 3D Node Selector / Routing Simulator */}
      <div className="absolute bottom-3 left-2 right-2 sm:left-auto sm:right-auto sm:bottom-4 sm:w-auto p-1.5 sm:p-2 rounded-2xl apple-glass border border-white/20 shadow-2xl backdrop-blur-xl flex flex-wrap items-center justify-center gap-1.5">
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider px-1.5 hidden md:inline-block">
          Active Path:
        </span>

        {/* Model Buttons */}
        <button
          onClick={() => {
            onSelectModel('gemma');
            triggerPulseEffect();
          }}
          className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
            activeModel === 'gemma'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-[0_0_12px_rgba(245,158,11,0.35)]'
              : 'text-white/70 hover:text-white hover:bg-white/10 border border-transparent'
          }`}
        >
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Gemma 8B/27B</span>
        </button>

        <button
          onClick={() => {
            onSelectModel('laya');
            triggerPulseEffect();
          }}
          className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
            activeModel === 'laya'
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-[0_0_12px_rgba(16,185,129,0.35)]'
              : 'text-white/70 hover:text-white hover:bg-white/10 border border-transparent'
          }`}
        >
          <Zap className="w-3 h-3 text-emerald-400" />
          <span>Laya SLM (&lt;33ms)</span>
        </button>

        <button
          onClick={() => {
            onSelectModel('claude');
            triggerPulseEffect();
          }}
          className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
            activeModel === 'claude'
              ? 'bg-terracotta/25 text-terracotta border border-terracotta/50 shadow-[0_0_12px_rgba(217,119,87,0.35)]'
              : 'text-white/70 hover:text-white hover:bg-white/10 border border-transparent'
          }`}
        >
          <Activity className="w-3 h-3 text-terracotta" />
          <span>Claude 3.7</span>
        </button>

        <button
          onClick={() => {
            onSelectModel('openai');
            triggerPulseEffect();
          }}
          className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
            activeModel === 'openai'
              ? 'bg-sky-500/20 text-sky-300 border border-sky-500/50 shadow-[0_0_12px_rgba(56,189,248,0.35)]'
              : 'text-white/70 hover:text-white hover:bg-white/10 border border-transparent'
          }`}
        >
          <ShieldCheck className="w-3 h-3 text-sky-400" />
          <span>GPT-4o</span>
        </button>

        {/* Pulse simulator trigger button */}
        <button
          onClick={triggerPulseEffect}
          title="Fire Simulated Packet Pulse"
          className="p-1 sm:px-2.5 sm:py-1 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white/90 font-mono text-xs transition-all border border-white/15 flex items-center gap-1"
        >
          <RefreshCw className="w-3 h-3 text-luxury-gold" />
          <span className="hidden sm:inline">Pulse</span>
        </button>
      </div>
    </div>
  );
};

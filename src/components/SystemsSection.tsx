import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Network, 
  Database, 
  Zap, 
  ShieldAlert, 
  Cpu, 
  ChevronRight, 
  ArrowUpRight, 
  CheckCircle2
} from 'lucide-react';

interface Chapter {
  id: string;
  chapterNumber: string;
  title: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  enterpriseProof: string;
  description: string;
  technicalArchitecture: string[];
  icon: React.ElementType;
}

const INFRASTRUCTURE_CHAPTERS: Chapter[] = [
  {
    id: 'ch-retrieval',
    chapterNumber: 'CHAPTER 01',
    title: 'Retrieval: RRF Hybrid RAG & Exact Citations',
    subtitle: 'Zero-Hallucination Regulatory Grounding',
    metric: '100%',
    metricLabel: 'Attribution Recall',
    enterpriseProof: 'Accenture & Novartis Life Sciences',
    description: 'Fuses BM25 lexical precision with dense vector embeddings across Milvus and Qdrant. Every generated assertion is rigorously verified against source PDF bounding character offsets, eliminating regulatory citation risks.',
    technicalArchitecture: [
      'Reciprocal Rank Fusion (RRF) combining dense & lexical candidate pools',
      'Cross-encoder reranker pruning top-50 results down to top-5 verified chunks',
      'Sentence-level bounding verification ensuring 100% grounded auditability',
      'Automated semantic drift tracking with alert thresholds under 0.5%',
    ],
    icon: Database,
  },
  {
    id: 'ch-intent',
    chapterNumber: 'CHAPTER 02',
    title: 'Voice & Intent Automation: SLM Fast-Path',
    subtitle: 'Deterministic Sub-40ms Classification',
    metric: '< 34ms',
    metricLabel: 'P99 Intent Latency',
    enterpriseProof: 'Flipkart High-Concurrency Tier',
    description: 'Sub-100M SLM intent classifier bypasses monolithic frontier LLMs for 78%+ of routine user workflows. Requests resolve in under 34ms with strict Pydantic schemas before any generative model is ever touched.',
    technicalArchitecture: [
      'Fine-tuned DistilBERT / regex classification gateway at the VPC boundary',
      'Redis semantic cache resolving identical intent clusters in <12ms',
      'Asynchronous fallback routing to LangGraph multi-step reasoning agents',
      'Zero single-point-of-failure rate limit protection during flash traffic spikes',
    ],
    icon: Zap,
  },
  {
    id: 'ch-eval',
    chapterNumber: 'CHAPTER 03',
    title: 'Evaluation & Circuit Breakers: Guardrail Ingress',
    subtitle: 'Zero-Cascade Failover Schemas',
    metric: '< 0.5%',
    metricLabel: 'Hallucination Drift',
    enterpriseProof: 'Enterprise Production Standard',
    description: 'Enforces rigid JSON schema boundaries, wall-clock timeout retry budgets, and automated fallback pathways. When confidence scores drop below 0.85, requests gracefully step down to rule-based execution without user interruption.',
    technicalArchitecture: [
      'Semantic WAF boundary blocking jailbreak & prompt injection vectors',
      'Hard 800ms wall-clock circuit breakers preventing cascading API timeouts',
      'Synthetic test fixture evaluations executed automatically on every GitHub Actions PR',
      'Real-time Langfuse tracing capturing token consumption, latency, and drift',
    ],
    icon: ShieldAlert,
  },
  {
    id: 'ch-finops',
    chapterNumber: 'CHAPTER 04',
    title: 'Deployment & FinOps: In-VPC vLLM Serving',
    subtitle: '65–72% Inference Cost Optimization',
    metric: '-72%',
    metricLabel: 'Token Expense Delta',
    enterpriseProof: 'In-VPC High-Throughput Cluster',
    description: 'Containerized vLLM and Triton Inference microservices deployed directly inside client VPCs. Continuous batching and FP8/AWQ quantization yield 65–72% token cost reduction under high-concurrency surge loads.',
    technicalArchitecture: [
      'PagedAttention memory management maximizing GPU VRAM utilization',
      'NVIDIA Triton dynamic batching scaling to 100k+ req/sec throughput',
      'Isolated VPC air-gapped deployment guaranteeing proprietary data confidentiality',
      'Prometheus and Grafana GPU telemetry dashboards for active compute FinOps',
    ],
    icon: Cpu,
  },
];

const SCHEMATIC_NODES = [
  { id: 'node-ingress', label: 'Ingress Gate', tag: 'WAF & Schemas', x: 0.12, y: 0.5 },
  { id: 'node-slm', label: 'SLM Fast-Path', tag: '< 34ms P99', x: 0.38, y: 0.5 },
  { id: 'node-rag', label: 'Hybrid RAG', tag: 'BM25 + Dense', x: 0.64, y: 0.5 },
  { id: 'node-egress', label: 'Audited Egress', tag: 'Circuit Breakers', x: 0.88, y: 0.5 },
];

export const SystemsSection: React.FC = () => {
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);

    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = false;
    let pulseT = 0;

    // Handle high DPI
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 1-Canvas Rule: IntersectionObserver to strictly halt RAF when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animationFrameId) {
            renderLoop();
          }
        });
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const renderLoop = () => {
      if (!isVisible) return;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Draw connecting signal conduit
      const yMid = height / 2;
      const startX = width * 0.12;
      const endX = width * 0.88;

      // Base conduit vector
      const gradient = ctx.createLinearGradient(startX, yMid, endX, yMid);
      gradient.addColorStop(0, 'rgba(217, 119, 87, 0.3)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.4)');
      gradient.addColorStop(1, 'rgba(217, 119, 87, 0.3)');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(startX, yMid);
      ctx.lineTo(endX, yMid);
      ctx.stroke();

      // Traveling signal pulses
      pulseT += 0.008;
      if (pulseT > 1) pulseT = 0;

      for (let i = 0; i < 3; i++) {
        const offset = (pulseT + i * 0.33) % 1;
        const pulseX = startX + (endX - startX) * offset;

        // Glowing pulse head
        const pulseGlow = ctx.createRadialGradient(pulseX, yMid, 0, pulseX, yMid, 12);
        pulseGlow.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        pulseGlow.addColorStop(0.4, 'rgba(217, 119, 87, 0.7)');
        pulseGlow.addColorStop(1, 'rgba(217, 119, 87, 0)');

        ctx.fillStyle = pulseGlow;
        ctx.beginPath();
        ctx.arc(pulseX, yMid, 12, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw interactive topological nodes
      SCHEMATIC_NODES.forEach((node, idx) => {
        const nodeX = width * node.x;
        const isActive = activeChapterIndex === idx;

        // Outer glow on active node
        if (isActive) {
          ctx.beginPath();
          ctx.arc(nodeX, yMid, 22, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(217, 119, 87, 0.25)';
          ctx.fill();
        }

        // Main node circle
        ctx.beginPath();
        ctx.arc(nodeX, yMid, isActive ? 12 : 9, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? '#D97757' : '#24221E';
        ctx.strokeStyle = isActive ? '#F5EBE6' : 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = isActive ? 2.5 : 1.5;
        ctx.fill();
        ctx.stroke();

        // Node center pip
        ctx.beginPath();
        ctx.arc(nodeX, yMid, 3, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? '#FFFFFF' : '#8A857D';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [activeChapterIndex, isReducedMotion]);

  const currentChapter = INFRASTRUCTURE_CHAPTERS[activeChapterIndex];

  return (
    <section id="systems-section" ref={containerRef} className="py-20 md:py-28 bg-[#151412] relative overflow-hidden border-t border-canvas-border">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-terracotta/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-terracotta/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-canvas-border text-xs font-mono text-terracotta mb-4">
            <Network className="w-3.5 h-3.5" />
            <span>PRODUCTION AI SYSTEMS TOPOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
            Enterprise schematic &{' '}
            <span className="font-serif italic font-normal text-luxury-champagne">infrastructure chapters.</span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Every request flows through an audited, deterministic topology. Inspect the 4 core infrastructure chapters below to review the engineering constraints and real production benchmarks.
          </p>
        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE ARCHITECTURAL SCHEMATIC CANVAS / SVG          */}
        {/* ========================================================= */}
        <div className="relative rounded-2xl bg-canvas-card border border-canvas-border p-4 sm:p-6 mb-8 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                LIVE SIGNAL & TOKEN ROUTING SCHEMATIC
              </span>
            </div>
            <span className="text-[11px] font-mono text-terracotta">
              Click node to inspect chapter
            </span>
          </div>

          {/* Canvas or Static SVG Fallback for Reduced Motion */}
          <div className="relative h-28 sm:h-32 w-full flex items-center justify-center">
            {isReducedMotion ? (
              <div className="w-full flex items-center justify-between px-6 py-4">
                {SCHEMATIC_NODES.map((node, i) => (
                  <div key={node.id} className="flex flex-col items-center text-center">
                    <div className="w-8 h-8 rounded-full bg-terracotta/20 border border-terracotta flex items-center justify-center text-terracotta font-mono text-xs font-bold">
                      {i + 1}
                    </div>
                    <span className="text-xs font-bold text-white mt-1">{node.label}</span>
                    <span className="text-[10px] font-mono text-slate-400">{node.tag}</span>
                  </div>
                ))}
              </div>
            ) : (
              <canvas
                ref={canvasRef}
                className="w-full h-full cursor-pointer block"
              />
            )}
          </div>

          {/* Clickable Node Navigation Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-white/5">
            {SCHEMATIC_NODES.map((node, idx) => {
              const isSelected = activeChapterIndex === idx;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveChapterIndex(idx)}
                  className={`p-2.5 rounded-xl text-left border transition-all duration-200 ${
                    isSelected
                      ? 'bg-terracotta text-white border-terracotta shadow-[0_0_15px_rgba(217,119,87,0.4)]'
                      : 'bg-canvas-surface text-slate-400 border-white/10 hover:border-terracotta/40 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold uppercase ${isSelected ? 'text-white/90' : 'text-terracotta'}`}>
                      Stage 0{idx + 1}
                    </span>
                    <span className={`text-[10px] font-mono ${isSelected ? 'text-white' : 'text-slate-400'}`}>
                      {node.tag}
                    </span>
                  </div>
                  <div className="text-xs font-bold mt-1 truncate">
                    {node.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4 INFRASTRUCTURE CHAPTERS: DEEP DIVE ACCORDION / VIEW     */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Chapter Selector Tabs (Left 4 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {INFRASTRUCTURE_CHAPTERS.map((ch, idx) => {
              const isSelected = activeChapterIndex === idx;
              const Icon = ch.icon;

              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveChapterIndex(idx)}
                  className={`w-full p-4 sm:p-5 rounded-2xl text-left border transition-all duration-300 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-canvas-cardElevated border-terracotta/50 shadow-[0_10px_30px_rgba(0,0,0,0.8)] ring-1 ring-terracotta/30'
                      : 'bg-canvas-card border-canvas-border hover:border-white/20 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                    isSelected
                      ? 'bg-terracotta text-white border-terracotta'
                      : 'bg-canvas-surface text-slate-400 border-white/10'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold text-terracotta uppercase tracking-wider">
                        {ch.chapterNumber}
                      </span>
                      <span className={`text-xs font-mono font-bold ${isSelected ? 'text-emerald-400' : 'text-slate-400'}`}>
                        {ch.metric}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5 truncate">
                      {ch.title.split(':')[0]}
                    </div>
                    <div className="text-xs text-slate-400 truncate mt-0.5">
                      {ch.subtitle}
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 mt-3 transition-transform ${isSelected ? 'translate-x-1 text-terracotta' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Chapter Detailed Specifications (Right 7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentChapter.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-canvas-cardElevated border border-terracotta/30 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.85)] space-y-6"
              >
                {/* Header Strip with Metrics */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-terracotta font-bold block">
                      {currentChapter.chapterNumber} • {currentChapter.enterpriseProof}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-sans mt-1">
                      {currentChapter.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-1">
                      {currentChapter.subtitle}
                    </p>
                  </div>

                  <div className="sm:text-right shrink-0 p-3 sm:p-0 rounded-xl bg-canvas-card sm:bg-transparent border border-white/5 sm:border-0">
                    <div className="text-2xl sm:text-3xl font-black font-mono text-terracotta leading-none">
                      {currentChapter.metric}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase mt-1">
                      {currentChapter.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="text-slate-200 text-sm leading-relaxed">
                  {currentChapter.description}
                </p>

                {/* Technical Architecture Safeguards */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    ARCHITECTURAL SAFEGUARDS & MECHANISMS:
                  </span>
                  
                  <div className="space-y-2">
                    {currentChapter.technicalArchitecture.map((item, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-canvas-card border border-canvas-border flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300 font-mono leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Ingress */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
                  <span className="text-xs font-mono text-slate-400">
                    STATUS: Verified in production tier
                  </span>

                  <a
                    href="#selected-work"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono text-white transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-terracotta" />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

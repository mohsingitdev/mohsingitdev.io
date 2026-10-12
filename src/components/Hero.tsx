import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Terminal, ChevronRight, Activity, Zap, ShieldCheck, Layers, FileText } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
  onExploreDemos: () => void;
  onViewMatrix: () => void;
  onRequestResume?: () => void;
}

interface IntelligenceNode {
  id: string;
  tag: string;
  title: string;
  metric: string;
  metricLabel: string;
  description: string;
  latencySla: string;
  mechanism: string;
  targetId: string;
  icon: React.ElementType;
}

const INTELLIGENCE_NODES: IntelligenceNode[] = [
  {
    id: 'ingress-gate',
    tag: 'STAGE 0: INGRESS & SCHEMA GATE',
    title: 'Regex & Semantic WAF Boundary',
    metric: '12ms',
    metricLabel: 'Gateway Intercept',
    description: 'Intercepts prompt injection vectors and validates Pydantic payloads at the network edge before model invocation.',
    latencySla: '< 15ms Bound',
    mechanism: 'Vector similarity against jailbreak vectors + Pydantic schema validation.',
    targetId: 'interactive-demos',
    icon: ShieldCheck,
  },
  {
    id: 'slm-router',
    tag: 'STAGE 1: ADAPTIVE ROUTER',
    title: 'Deterministic SLM Fast-Path',
    metric: '34ms',
    metricLabel: 'P99 Latency SLA',
    description: 'Sub-100M SLM intent classifier bypasses monolithic frontier LLMs for 78% of routine enterprise workflows.',
    latencySla: '< 40ms P99 SLA',
    mechanism: 'Fine-tuned DistilBERT / regex classification with Redis semantic caching.',
    targetId: 'interactive-demos',
    icon: Zap,
  },
  {
    id: 'grounded-rag',
    tag: 'STAGE 2: RETRIEVAL & GROUNDING',
    title: 'Reciprocal Rank Fusion RAG',
    metric: '< 0.5%',
    metricLabel: 'Hallucination Drift',
    description: 'Fuses BM25 lexical precision with dense vector embeddings across 50,000+ regulatory enterprise documents.',
    latencySla: '100% Citation Recall',
    mechanism: 'RRF reranking + sentence-level citation bounding guardrails.',
    targetId: 'assessment-matrix',
    icon: Activity,
  },
  {
    id: 'egress-verification',
    tag: 'STAGE 3: VERIFIED EGRESS',
    title: 'Audited SLA Output & Circuit Breakers',
    metric: '100k+',
    metricLabel: 'Peak Req/Sec',
    description: 'Enforces strict JSON schema validation, wall-clock retry budgets, and automated fallback pathways under surge loads.',
    latencySla: 'Zero Cascade Failures',
    mechanism: 'Asynchronous message queues, Kafka event streaming, and fallback schemas.',
    targetId: 'interactive-demos',
    icon: Layers,
  },
];

export const Hero: React.FC<HeroProps> = ({ onBookCall, onExploreDemos, onViewMatrix, onRequestResume }) => {
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(1); // Default to SLM router (crown jewel)

  // Auto-cycle only if user has not manually interacted recently
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setSelectedNodeIndex((prev) => (prev + 1) % INTELLIGENCE_NODES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentNode = INTELLIGENCE_NODES[selectedNodeIndex];

  const handleNavClick = (anchorId: string) => {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-8 sm:pt-12 md:pt-14 pb-12 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-12 left-1/4 w-[550px] h-[550px] bg-terracotta/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-24 right-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Split-Card Hero Container */}
        <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-white/10 bg-canvas-card">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[660px]">
            
            {/* ========================================================= */}
            {/* LEFT PANEL: Rich Burnt Terracotta Gradient + Bold Display */}
            {/* ========================================================= */}
            <div className="lg:col-span-6 relative p-5 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between terracotta-gradient overflow-hidden z-10">
              
              {/* Giant Display Watermark Typography (Subtle Architectural Tone) */}
              <div 
                aria-hidden="true" 
                className="absolute -top-3 -left-3 select-none pointer-events-none watermark-text text-[58px] xs:text-[76px] sm:text-[110px] lg:text-[144px] tracking-tighter uppercase leading-[0.82] max-w-full overflow-hidden opacity-20"
              >
                AI<br />ENGI<br />NEER
              </div>

              {/* Top Row: Brand Monogram / Pill */}
              <div className="relative z-20 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-black/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-sm shrink-0">
                    <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="font-sans font-bold text-white tracking-wide text-xs sm:text-sm">
                    MOHSIN QURESHI
                  </span>
                </div>

                <button
                  onClick={onViewMatrix}
                  title="Jump to Enterprise Architecture Benchmark Matrix"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-mono text-white/90 shrink-0 hover:bg-black/50 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span>FORWARD DEPLOYMENT STANDARD</span>
                </button>
              </div>

              {/* Main Headline & Description (Strict Safe Column Bounds) */}
              <div className="relative z-20 my-4 sm:my-6 lg:my-8 space-y-2.5 sm:space-y-3.5 w-full max-w-full lg:max-w-[400px] xl:max-w-[430px]">
                <h1 className="text-[30px] xs:text-[34px] sm:text-[44px] lg:text-[48px] xl:text-[52px] font-extrabold text-white tracking-tight leading-[1.08] font-sans">
                  Engineering AI that survives{' '}
                  <span className="font-serif italic font-normal text-amber-200">production</span>{' '}
                  scale.
                </h1>
                
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed font-normal">
                  Hardening fragile generative prototypes into deterministic, sub-40ms enterprise systems with zero hallucination and verifiable FinOps efficiency.
                </p>
              </div>

              {/* Bottom Actions & Institutional Proof Strip (Strict Clearance from Silhouette) */}
              <div className="relative z-20 space-y-3 sm:space-y-4 pt-1 w-full max-w-full lg:max-w-[410px] xl:max-w-[440px]">
                {/* Flowing Apple-Style Glowing Capsule Action Pills */}
                <div className="space-y-2 sm:space-y-2.5 w-full">
                  {/* Primary Ingress Row */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                    <button
                      onClick={() => handleNavClick('domains')}
                      className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white text-neutral-900 font-bold text-xs sm:text-sm hover:bg-neutral-100 transition-all hero-pill-glow flex items-center justify-center gap-1.5 sm:gap-2 group hover:scale-[1.02] active:scale-[0.98] min-h-[44px]"
                    >
                      <span>Explore Case Studies</span>
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    {onRequestResume && (
                      <button
                        onClick={onRequestResume}
                        className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 apple-spring hover:scale-[1.02] active:scale-[0.98] min-h-[44px]"
                      >
                        <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-950" />
                        <span>Request CV</span>
                      </button>
                    )}
                  </div>

                  {/* Secondary Architectural Discovery Row */}
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={onExploreDemos}
                      className="px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-full bg-black/35 hover:bg-black/50 backdrop-blur-md border border-white/25 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 min-h-[38px] hover:border-white/40"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
                      <span>Run Architecture Lab</span>
                    </button>

                    <button
                      onClick={onBookCall}
                      className="px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white/90 font-mono text-xs transition-colors flex items-center justify-center gap-1.5 min-h-[38px]"
                    >
                      <span>Schedule Sync</span>
                      <ArrowUpRight className="w-3 h-3 text-white/70" />
                    </button>
                  </div>
                </div>

                {/* Institutional Proof Strip (Unobscured & High Legibility) */}
                <div className="pt-2 border-t border-white/15 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-white/80 flex items-center justify-between">
                    <span className="font-semibold">Proven Enterprise Deployments</span>
                    <button
                      onClick={() => handleNavClick('evidence-ledger')}
                      className="text-amber-200 hover:text-white transition-colors underline-offset-4 hover:underline flex items-center gap-1 normal-case font-medium text-[11px]"
                    >
                      <span>View Methodology</span>
                      <ArrowUpRight className="w-3 h-3 text-amber-200" />
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] sm:text-xs text-white/95 font-semibold">
                    <span className="px-2.5 py-1 rounded-lg bg-black/30 border border-white/15">Flipkart</span>
                    <span className="text-white/40">•</span>
                    <span className="px-2.5 py-1 rounded-lg bg-black/30 border border-white/15">Accenture</span>
                    <span className="text-white/40">•</span>
                    <span className="px-2.5 py-1 rounded-lg bg-black/30 border border-white/15">Novartis</span>
                    <span className="text-white/40">•</span>
                    <span className="px-2.5 py-1 rounded-lg bg-black/30 border border-white/15">Ericsson</span>
                  </div>
                </div>

                {/* Mobile Cutout Overlap (Curated Editorial 3D Framing) */}
                <div className="lg:hidden pt-3 pb-0 flex flex-col items-center justify-end relative z-20 pointer-events-none mt-2">
                  <div className="relative flex items-end justify-center w-full">
                    {/* Ambient Glow */}
                    <div className="absolute bottom-4 w-48 h-48 rounded-full bg-amber-400/20 blur-2xl pointer-events-none" />
                    
                    {/* Floating Tactical SLA Badges */}
                    <div className="absolute top-2 left-0 sm:left-2 z-30 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white/95 flex items-center gap-1.5 shadow-lg">
                      <Zap className="w-3 h-3 text-luxury-gold shrink-0" />
                      <span>Sub-40ms P99</span>
                    </div>

                    <div className="absolute top-8 right-0 sm:right-2 z-30 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white/95 flex items-center gap-1.5 shadow-lg">
                      <Activity className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>&lt;0.5% Hallucination</span>
                    </div>

                    <img
                      src="./images/mohsin_cutout.png"
                      alt="Mohsin Qureshi"
                      className="h-[200px] xs:h-[225px] sm:h-[275px] object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.5)] select-none relative z-20"
                    />

                    {/* Grounding Pedestal */}
                    <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-black/35 to-transparent pointer-events-none z-20" />
                  </div>
                </div>
              </div>

            </div>

            {/* ========================================================= */}
            {/* RIGHT PANEL: Enterprise AI Observatory & Interactive Core */}
            {/* ========================================================= */}
            <div className="lg:col-span-6 relative p-5 sm:p-8 lg:p-12 xl:p-14 lg:pl-20 xl:pl-24 flex flex-col justify-between bg-[#F7F4EE] dark:bg-[#1A1815] text-neutral-900 dark:text-neutral-100 z-10 transition-colors duration-300">
              
              {/* Top Observatory Status Strip (Clean, No Duplicate Nav) */}
              <div className="flex items-center justify-between gap-3 border-b border-black/10 dark:border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                    AI SYSTEM OBSERVATORY
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-canvas-card border border-canvas-border text-[11px] font-mono text-terracotta">
                  <span>Routing Topology: Live</span>
                </div>
              </div>

              {/* Right Content Statement */}
              <div className="my-4 sm:my-6 space-y-2 w-full max-w-none">
                <span className="text-[11px] font-mono text-terracotta uppercase tracking-wider font-semibold">
                  INTERACTIVE INTELLIGENCE CORE
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-snug">
                  Select an architectural node to inspect{' '}
                  <span className="font-serif italic font-normal text-terracotta">production telemetry.</span>
                </h2>
              </div>

              {/* 4-Node Interactive Selection Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pb-2">
                {INTELLIGENCE_NODES.map((node, idx) => {
                  const isSelected = selectedNodeIndex === idx;
                  const Icon = node.icon;

                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNodeIndex(idx)}
                      className={`p-2.5 rounded-xl text-left border transition-all duration-200 apple-spring ${
                        isSelected
                          ? 'bg-terracotta border-terracotta text-white shadow-apple-card scale-[1.02]'
                          : 'bg-white/80 dark:bg-canvas-card border-black/10 dark:border-white/10 text-neutral-600 dark:text-slate-400 hover:border-terracotta/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-terracotta'}`} />
                        <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-white' : 'text-terracotta'}`}>
                          {node.metric}
                        </span>
                      </div>
                      <div className={`text-[11px] font-bold mt-1.5 truncate ${isSelected ? 'text-white' : 'text-neutral-900 dark:text-white'}`}>
                        {node.title.split(' ')[0]}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Glass Inspector Panel for the Selected Node */}
              <div className="rounded-2xl bg-white/90 dark:bg-[#23201C] p-4 sm:p-6 border border-black/10 dark:border-white/10 shadow-lg relative overflow-hidden transition-colors duration-300">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentNode.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-terracotta/20 flex items-center justify-center text-terracotta shrink-0">
                          <currentNode.icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10px] font-mono font-bold tracking-wider text-terracotta uppercase block truncate">
                            {currentNode.tag}
                          </span>
                          <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white truncate sm:whitespace-normal font-sans">
                            {currentNode.title}
                          </h3>
                        </div>
                      </div>

                      {/* Highlight Metric */}
                      <div className="text-right shrink-0">
                        <div className="text-base sm:text-xl font-black font-mono text-terracotta leading-none">
                          {currentNode.metric}
                        </div>
                        <div className="text-[9px] font-mono text-neutral-500 dark:text-neutral-400 uppercase mt-0.5 whitespace-nowrap">
                          {currentNode.metricLabel}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                      {currentNode.description}
                    </p>

                    <div className="p-3 rounded-xl bg-neutral-100 dark:bg-canvas-card border border-neutral-200 dark:border-canvas-border space-y-1 text-[11px] font-mono">
                      <div className="flex items-center justify-between text-slate-400">
                        <span>ENFORCEMENT SLA:</span>
                        <span className="text-emerald-500 font-semibold">{currentNode.latencySla}</span>
                      </div>
                      <div className="text-neutral-700 dark:text-slate-300 truncate">
                        {currentNode.mechanism}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-2 border-t border-neutral-100 dark:border-neutral-800">
                      <button
                        onClick={() => handleNavClick(currentNode.targetId)}
                        className="text-xs font-bold text-neutral-900 dark:text-white hover:text-terracotta transition-colors flex items-center gap-1 group/btn"
                      >
                        <span>Test in Live Sandbox</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                      
                      <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 shrink-0">
                        Node {selectedNodeIndex + 1} of {INTELLIGENCE_NODES.length}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </div>

          {/* ========================================================= */}
          {/* CENTER 3D CUTOUT SILHOUETTE OVERLAP LAYER (DESKTOP)       */}
          {/* Overlapping both the Terracotta & Cream cards              */}
          {/* ========================================================= */}
          <div 
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden lg:flex items-end justify-center z-30"
          >
            <div className="relative w-full max-w-7xl h-full flex justify-center items-end">
              {/* Scaled cutout image positioned with editorial breathing room */}
              <img
                src="./images/mohsin_cutout.png"
                alt="Mohsin Qureshi"
                className="h-[560px] xl:h-[590px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] select-none translate-x-[32px] translate-y-[10px]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

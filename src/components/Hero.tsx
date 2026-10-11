import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Terminal, ChevronRight, Activity, Zap, ShieldAlert, Cpu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onBookCall: () => void;
  onExploreDemos: () => void;
  onViewMatrix: () => void;
}

interface SandboxSlide {
  id: string;
  tag: string;
  title: string;
  metric: string;
  metricLabel: string;
  description: string;
  targetId: string;
  icon: React.ElementType;
}

const SANDBOX_SLIDES: SandboxSlide[] = [
  {
    id: 'slm-router',
    tag: 'HIGH-CONCURRENCY ROUTING',
    title: 'Sub-40ms SLM/LLM Router',
    metric: '38ms',
    metricLabel: 'p99 Routing Latency',
    description: 'Two-tier classifier fast-pathing 80% of routine queries with sub-40ms SLAs under high peak concurrency.',
    targetId: 'interactive-demos',
    icon: Zap,
  },
  {
    id: 'grounded-rag',
    tag: 'ENTERPRISE CITATION RAG',
    title: 'Zero-Hallucination Grounded RAG',
    metric: '<0.5%',
    metricLabel: 'Hallucination Risk',
    description: 'Reciprocal Rank Fusion uniting BM25 lexical precision with dense vector recall and strict character-level PDF citations.',
    targetId: 'assessment-matrix',
    icon: Activity,
  },
  {
    id: 'streaming-guardrails',
    tag: 'NETWORK SECURITY ML',
    title: 'Real-Time Streaming Guardrails',
    metric: '100k+',
    metricLabel: 'Events / Sec Streamed',
    description: 'Real-time anomaly detection identifying prompt injection and anomalous telemetry with sub-millisecond edge latency.',
    targetId: 'interactive-demos',
    icon: ShieldAlert,
  },
  {
    id: 'edge-cv',
    tag: 'INDUSTRIAL VISION',
    title: 'Edge Computer Vision Platform',
    metric: '60 FPS',
    metricLabel: 'Edge Telemetry Rate',
    description: 'Autonomous worker safety & hazard prevention pipeline powered by PyTorch edge acceleration.',
    targetId: 'domains',
    icon: Cpu,
  },
];

export const Hero: React.FC<HeroProps> = ({ onBookCall, onExploreDemos, onViewMatrix }) => {
  const { theme, toggleTheme } = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-cycle through slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SANDBOX_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = SANDBOX_SLIDES[activeSlide];

  const handleNavClick = (anchorId: string) => {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
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
            <div className="lg:col-span-6 relative p-5 sm:p-10 lg:p-14 flex flex-col justify-between terracotta-gradient overflow-hidden z-10">
              
              {/* Giant Display Watermark Typography (Mobile calibrated to prevent horizontal overflow) */}
              <div 
                aria-hidden="true" 
                className="absolute -top-3 -left-3 select-none pointer-events-none watermark-text text-[58px] xs:text-[76px] sm:text-[110px] lg:text-[144px] tracking-tighter uppercase leading-[0.82] max-w-full overflow-hidden opacity-25"
              >
                AI<br />ARCHI<br />TECT
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

                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-mono text-white/90 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse shrink-0" />
                  <span>FORWARD DEPLOYMENT TIER</span>
                </div>
              </div>

              {/* Main Headline & Description with clearance for central cutout */}
              <div className="relative z-20 my-6 sm:my-10 lg:my-12 space-y-3 sm:space-y-4 w-full max-w-full lg:max-w-[360px] xl:max-w-[400px]">
                <h1 className="text-[32px] sm:text-[44px] lg:text-[50px] xl:text-[54px] font-extrabold text-white tracking-tight leading-[1.08] font-sans">
                  Engineering AI that survives{' '}
                  <span className="font-serif italic font-normal text-amber-200">production</span>{' '}
                  scale.
                </h1>
                
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed font-normal">
                  Helping enterprise leaders and high-growth startups turn fragile generative prototypes into deterministic, sub-40ms platforms without hallucination.
                </p>
              </div>

              {/* Bottom Actions & Enterprise Social Proof */}
              <div className="relative z-20 space-y-4 sm:space-y-5 pt-1">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto">
                  <button
                    onClick={onBookCall}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-neutral-900 font-bold text-xs sm:text-sm hover:bg-neutral-100 transition-all hero-pill-glow flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-[0.98] min-h-[44px]"
                  >
                    <span>View Work</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={onExploreDemos}
                    className="w-full sm:w-auto px-5 py-3 rounded-full bg-black/35 backdrop-blur-md border border-white/25 text-white font-semibold text-xs sm:text-sm hover:bg-black/50 transition-all flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <Sparkles className="w-4 h-4 text-luxury-gold shrink-0" />
                    <span>Live Sandboxes</span>
                  </button>
                </div>

                {/* Social Proof Avatars */}
                <div className="flex items-center gap-2.5 sm:gap-3 pt-1">
                  <div className="flex -space-x-2 shrink-0">
                    <div className="w-7 h-7 rounded-full bg-black/60 border-2 border-white/60 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">FK</div>
                    <div className="w-7 h-7 rounded-full bg-[#3B2519] border-2 border-white/60 flex items-center justify-center text-[10px] font-bold text-amber-200 shadow-sm">AC</div>
                    <div className="w-7 h-7 rounded-full bg-[#182635] border-2 border-white/60 flex items-center justify-center text-[10px] font-bold text-slate-100 shadow-sm">NV</div>
                  </div>
                  <div className="text-[11px] sm:text-xs text-white/90 font-medium">
                    Trusted across Flipkart • Accenture • Novartis
                  </div>
                </div>

                {/* Mobile Cutout Overlap (Calibrated height & grounding for mobile viewports) */}
                <div className="lg:hidden pt-4 pb-0 flex justify-center relative z-20 pointer-events-none">
                  <img
                    src="./images/mohsin_cutout.png"
                    alt="Mohsin Qureshi"
                    className="h-[190px] xs:h-[220px] sm:h-[270px] object-contain drop-shadow-[0_12px_22px_rgba(0,0,0,0.45)] select-none"
                  />
                </div>
              </div>

            </div>

            {/* ========================================================= */}
            {/* RIGHT PANEL: Elegant Off-White / Dark Obsidian Floating Card */}
            {/* ========================================================= */}
            <div className="lg:col-span-6 relative p-5 sm:p-8 lg:p-12 xl:p-14 flex flex-col justify-between bg-[#F7F4EE] dark:bg-[#1A1815] text-neutral-900 dark:text-neutral-100 z-10 transition-colors duration-300">
              
              {/* Top Navigation Links & Actions */}
              <div className="flex items-center justify-between gap-3 border-b border-black/10 dark:border-white/10 pb-4">
                <nav className="hidden md:flex items-center space-x-3.5 xl:space-x-5 text-xs xl:text-sm font-medium text-neutral-600 dark:text-neutral-400 shrink-0">
                  <button 
                    onClick={() => handleNavClick('hero')} 
                    className="text-neutral-900 dark:text-white font-bold relative pb-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-terracotta"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => handleNavClick('assessment-matrix')} 
                    className="hover:text-terracotta dark:hover:text-terracotta transition-colors"
                  >
                    Architecture
                  </button>
                  <button 
                    onClick={() => handleNavClick('interactive-demos')} 
                    className="hover:text-terracotta dark:hover:text-terracotta transition-colors"
                  >
                    Sandboxes
                  </button>
                  <button 
                    onClick={() => handleNavClick('experience')} 
                    className="hover:text-terracotta dark:hover:text-terracotta transition-colors"
                  >
                    Track Record
                  </button>
                  <button 
                    onClick={onBookCall} 
                    className="hover:text-terracotta dark:hover:text-terracotta transition-colors font-semibold text-terracotta"
                  >
                    Contact
                  </button>
                </nav>

                {/* Mobile Quick Benchmark Link & Theme Toggle */}
                <div className="flex items-center justify-between w-full md:w-auto gap-2 shrink-0">
                  <button
                    onClick={onViewMatrix}
                    className="md:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-200/80 dark:bg-neutral-800 text-[11px] font-mono text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors shadow-sm whitespace-nowrap"
                    title="Jump to Enterprise Architecture Benchmark Matrix"
                  >
                    <span className="font-bold text-terracotta">Architecture Matrix</span> ↗
                  </button>

                  <button
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    className="p-1.5 sm:p-2 rounded-full bg-neutral-200/80 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-all apple-spring hover:scale-110 active:scale-95 flex items-center justify-center shadow-sm shrink-0"
                  >
                    {theme === 'dark' ? (
                      <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
                    ) : (
                      <Moon className="w-4 h-4 text-terracotta transition-transform hover:-rotate-12" />
                    )}
                  </button>
                </div>
              </div>

              {/* Right Content Statement & Status Beacon */}
              <div className="my-5 sm:my-8 lg:my-10 space-y-2.5 sm:space-y-4 w-full max-w-none">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-terracotta uppercase">
                  <span>AVAILABLE FOR ADVISORY & CONTRACTS</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-terracotta animate-ping" />
                </div>

                <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-snug">
                  Designing Enterprise Systems{' '}
                  <span className="font-serif italic font-normal text-terracotta">that people enjoy using.</span>
                </h2>
              </div>

              {/* Bottom Right Interactive Sandbox Showcase */}
              <div className="space-y-4 pt-1">
                <div className="rounded-2xl bg-white dark:bg-[#23201C] p-4 sm:p-6 border border-black/10 dark:border-white/10 shadow-lg relative overflow-hidden group transition-colors duration-300">
                  
                  {/* Slide Content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-terracotta/20 flex items-center justify-center text-terracotta shrink-0">
                            <currentSlide.icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[10px] font-mono font-bold tracking-wider text-terracotta uppercase block truncate">
                              {currentSlide.tag}
                            </span>
                            <h4 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white truncate sm:whitespace-normal">
                              {currentSlide.title}
                            </h4>
                          </div>
                        </div>

                        {/* Highlight Metric */}
                        <div className="text-right shrink-0">
                          <div className="text-base sm:text-lg font-black font-mono text-terracotta leading-none">
                            {currentSlide.metric}
                          </div>
                          <div className="text-[9px] font-mono text-neutral-500 dark:text-neutral-400 uppercase mt-0.5 whitespace-nowrap">
                            {currentSlide.metricLabel}
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {currentSlide.description}
                      </p>

                      <div className="pt-2 flex items-center justify-between gap-2 border-t border-neutral-100 dark:border-neutral-800">
                        <button
                          onClick={() => handleNavClick(currentSlide.targetId)}
                          className="text-xs font-bold text-neutral-900 dark:text-white hover:text-terracotta transition-colors flex items-center gap-1 group/btn"
                        >
                          <span>Explore System Sandbox</span>
                          <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                        
                        <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 shrink-0">
                          {activeSlide + 1} of {SANDBOX_SLIDES.length}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                </div>

                {/* Pagination Dots (Matching Reference Carousel Dots) */}
                <div className="flex items-center justify-center gap-2 pt-1">
                  {SANDBOX_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        activeSlide === idx
                          ? 'w-7 bg-terracotta'
                          : 'w-2.5 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600'
                      }`}
                    />
                  ))}
                </div>
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
              {/* Scaled cutout image positioned directly on the dividing seam */}
              <img
                src="./images/mohsin_cutout.png"
                alt="Mohsin Qureshi"
                className="h-[610px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] select-none translate-x-[-12px] translate-y-[10px]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

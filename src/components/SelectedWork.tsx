import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  ArrowUpRight, 
  Github, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import { DOMAIN_PROJECTS } from '../data/domainProjects';

interface SelectedWorkProps {
  onBookCall?: () => void;
  onExploreDemo?: () => void;
}

const CAPABILITIES = [
  {
    id: 'cap-arch',
    title: 'AI Architecture',
    tag: 'Core Paradigm',
    icon: Layers,
    description: 'Stateful LangGraph state machines, deterministic sub-40ms SLM routing gateways, and Pydantic schema bounding.',
    points: ['LangGraph StateGraph', 'FastText/BERT Classifiers', 'Wall-Clock Timers'],
  },
  {
    id: 'cap-inference',
    title: 'Inference Deployment',
    tag: 'High Concurrency',
    icon: Cpu,
    description: 'Containerized vLLM and NVIDIA Triton server orchestration with continuous batching and FP8/AWQ quantization.',
    points: ['vLLM PagedAttention', 'NVIDIA Triton Server', 'PyTorch TensorRT'],
  },
  {
    id: 'cap-retrieval',
    title: 'Knowledge Retrieval',
    tag: 'Factual Grounding',
    icon: Database,
    description: 'Hybrid Reciprocal Rank Fusion combining BM25 exact lexical precision with dense vector embeddings across Milvus/Qdrant.',
    points: ['Reciprocal Rank Fusion', 'Cross-Encoder Rerankers', '100% Citation Grounding'],
  },
  {
    id: 'cap-llmops',
    title: 'Production LLMOps',
    tag: 'Enterprise SLA',
    icon: ShieldCheck,
    description: 'Automated CI/CD synthetic evaluation harnesses, semantic WAF jailbreak defenses, and real-time observability.',
    points: ['Langfuse & MLflow', 'GitHub Actions Evals', 'Zero-Cascade Failover'],
  },
];

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onExploreDemo }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : DOMAIN_PROJECTS.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < DOMAIN_PROJECTS.length - 1 ? prev + 1 : 0));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  const scrollToDemos = () => {
    if (onExploreDemo) {
      onExploreDemo();
    } else {
      const el = document.getElementById('interactive-demos');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="selected-work" 
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="py-20 md:py-28 bg-canvas relative overflow-hidden border-t border-canvas-border focus:outline-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] bg-terracotta/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-terracotta/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-canvas-border text-xs font-mono text-terracotta mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>SELECTED PRODUCTION SYSTEMS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
              Hardened architectures for{' '}
              <span className="font-serif italic font-normal text-luxury-champagne">tier-1 enterprise scale.</span>
            </h2>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Real systems engineered under rigorous SLA, latency, and compliance bounds across Flipkart, Accenture, Novartis, and Ericsson.
            </p>
          </div>

          {/* Desktop Stack Navigation Controls */}
          {isDesktop && (
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-mono text-slate-400">
                {activeIndex + 1} / {DOMAIN_PROJECTS.length}
              </span>
              <button
                onClick={handlePrev}
                aria-label="Previous project card"
                className="w-10 h-10 rounded-full bg-canvas-card border border-canvas-border flex items-center justify-center text-slate-300 hover:text-white hover:border-terracotta/50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next project card"
                className="w-10 h-10 rounded-full bg-canvas-card border border-canvas-border flex items-center justify-center text-slate-300 hover:text-white hover:border-terracotta/50 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* ========================================================= */}
        {/* DESKTOP FANNED CARD STACK (3D TRANSFORM & DEPTH)         */}
        {/* ========================================================= */}
        {isDesktop ? (
          <div className="relative min-h-[580px] w-full flex items-center justify-center mb-16">
            <div className="relative w-full max-w-4xl h-[540px]">
              {DOMAIN_PROJECTS.map((project, idx) => {
                // Compute relative distance from active index
                let offset = idx - activeIndex;
                if (offset < 0) offset += DOMAIN_PROJECTS.length;

                const isCurrent = offset === 0;
                const isNext = offset === 1;
                const isSecondNext = offset === 2;
                const isHidden = offset > 2;

                const zIndex = isCurrent ? 30 : isNext ? 20 : isSecondNext ? 10 : 0;
                const translateY = isCurrent ? 0 : isNext ? 18 : 36;
                const translateX = isCurrent ? 0 : isNext ? 28 : 56;
                const rotateZ = isCurrent ? 0 : isNext ? 2 : 4;
                const scale = isCurrent ? 1 : isNext ? 0.95 : 0.9;
                const opacity = isCurrent ? 1 : isNext ? 0.82 : isSecondNext ? 0.55 : 0;

                return (
                  <motion.div
                    key={project.id}
                    onClick={() => setActiveIndex(idx)}
                    animate={{
                      y: translateY,
                      x: translateX,
                      rotateZ: rotateZ,
                      scale: scale,
                      opacity: opacity,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      zIndex: zIndex,
                      pointerEvents: isHidden ? 'none' : 'auto',
                    }}
                    className={`absolute inset-0 rounded-[28px] bg-[#24221E] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] p-8 sm:p-10 flex flex-col justify-between cursor-pointer transition-colors duration-300 ${
                      isCurrent ? 'ring-1 ring-terracotta/40' : 'hover:border-white/20'
                    }`}
                  >
                    {/* Card Top: Domain & Institutional Proof */}
                    <div>
                      <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/10">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-terracotta" />
                          <span className="text-xs font-mono font-bold text-terracotta uppercase tracking-wider">
                            {project.domain}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded-full bg-black/40 border border-white/5">
                          0{idx + 1} // CASE STUDY
                        </span>
                      </div>

                      <div className="mt-5 space-y-2">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-mono text-luxury-champagne">
                          {project.enterpriseContext}
                        </p>
                      </div>

                      <p className="mt-4 text-slate-300 text-sm leading-relaxed line-clamp-3">
                        {project.architectureSolution}
                      </p>
                    </div>

                    {/* Card Middle: 4 Verified Metrics */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
                      {project.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-3 rounded-xl bg-[#1A1815] border border-white/5"
                        >
                          <div className="text-xl font-bold font-mono text-terracotta">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5 truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Card Bottom: Tech Stack & Actions */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {project.hasInteractiveDemo && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              scrollToDemos();
                            }}
                            className="px-3.5 py-2 rounded-full bg-terracotta hover:bg-terracotta-dark text-white font-mono text-xs font-bold transition-colors flex items-center gap-1.5 shadow-[0_0_15px_rgba(217,119,87,0.4)]"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Run Sandbox</span>
                          </button>
                        )}

                        <a
                          href={project.githubRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : (
          /* ========================================================= */
          /* MOBILE MODE: CLEAN VERTICAL LIST (NO FAN TRAP)           */
          /* ========================================================= */
          <div className="space-y-6 mb-16">
            {DOMAIN_PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                className="rounded-2xl bg-[#24221E] border border-white/10 shadow-xl p-6 space-y-4"
              >
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <span className="text-xs font-mono font-bold text-terracotta uppercase">
                    {project.domain}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-sans">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-luxury-champagne mt-1">
                    {project.enterpriseContext}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.architectureSolution}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2">
                  {project.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-2.5 rounded-lg bg-black/40 border border-white/5"
                    >
                      <div className="text-base font-bold font-mono text-terracotta">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stack & Links */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.hasInteractiveDemo && (
                      <button
                        onClick={scrollToDemos}
                        className="px-3 py-1.5 rounded-full bg-terracotta text-white font-mono text-xs flex items-center gap-1"
                      >
                        <span>Demo</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    )}
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/10 text-white"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================= */}
        {/* CAPABILITIES ROW: VALIDATED ENGINEERING PILLARS          */}
        {/* ========================================================= */}
        <div className="pt-8 border-t border-canvas-border">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono text-terracotta uppercase tracking-wider block">
                CORE COMPETENCIES
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans mt-1">
                Validated architectural pillars.
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400 hidden sm:block">
              Tested in production
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.id}
                  className="rounded-2xl bg-canvas-card border border-canvas-border p-5 hover:border-terracotta/40 hover:bg-canvas-cardElevated transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-canvas-surface border border-white/10 flex items-center justify-center text-terracotta">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        {cap.tag}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white font-sans">
                      {cap.title}
                    </h4>

                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 space-y-1">
                    {cap.points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300">
                        <span className="w-1 h-1 rounded-full bg-terracotta shrink-0" />
                        <span className="truncate">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

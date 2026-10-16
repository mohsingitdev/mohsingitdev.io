import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Terminal, Zap, Layers, FileText, CheckCircle2, Cloud, Sparkles } from 'lucide-react';
import { BrandOrbs } from '@designcodeio/threeui';

interface HeroProps {
  onBookCall: () => void;
  onExploreDemos: () => void;
  onViewMatrix: () => void;
  onRequestResume?: () => void;
}

type ActiveModel = 'gemma' | 'laya' | 'claude' | 'openai';

export const Hero: React.FC<HeroProps> = ({
  onBookCall,
  onViewMatrix,
  onRequestResume
}) => {
  const [activeModel, setActiveModel] = useState<ActiveModel>('gemma');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 40);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (anchorId: string) => {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const models = [
    {
      id: 'gemma' as ActiveModel,
      name: 'Gemma 8B/27B',
      badge: 'HF LoRA Fine-Tuned',
      metric: '~65ms (vLLM)',
      orbVariant: 'gemini' as const
    },
    {
      id: 'laya' as ActiveModel,
      name: 'Laya SLM Core',
      badge: 'Deterministic Router',
      metric: '<33ms Fast-Path',
      orbVariant: 'aura' as const
    },
    {
      id: 'claude' as ActiveModel,
      name: 'Claude 3.7',
      badge: 'Frontier Reasoning',
      metric: '~420ms (API)',
      orbVariant: 'claude' as const
    },
    {
      id: 'openai' as ActiveModel,
      name: 'GPT-4o',
      badge: 'Multimodal Ingress',
      metric: '~380ms (API)',
      orbVariant: 'openai' as const
    }
  ];

  return (
    <section id="hero" className="relative pt-6 sm:pt-10 md:pt-12 pb-16 md:pb-24 overflow-hidden">
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-12 left-1/4 w-[550px] h-[550px] bg-terracotta/15 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute top-24 right-1/4 w-[450px] h-[450px] bg-terracotta/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Stage: Expansive Obsidian Glass Stage with Ample Breathing Room */}
        <div className="relative rounded-[32px] sm:rounded-[40px] border border-white/10 bg-gradient-to-b from-[#181715]/95 via-[#121110]/95 to-[#0d0c0b] shadow-[0_30px_90px_rgba(0,0,0,0.85)] backdrop-blur-2xl overflow-hidden">
          
          {/* Subtle Platinum Rim & Film Grain Overlay */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-terracotta/50 to-transparent pointer-events-none" />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Grid Layout: Left Column Narrative + Right Column Full-Height Visual Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12 xl:p-14 items-center">
            
            {/* ========================================================= */}
            {/* LEFT COLUMN: SPACIOUS, RELAXED EDITORIAL TYPOGRAPHY       */}
            {/* ========================================================= */}
            <div className={`lg:col-span-6 xl:col-span-7 flex flex-col justify-between space-y-7 sm:space-y-8 transition-all duration-700 ${
              isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}>
              
              {/* Monogram Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-black/50 border border-terracotta/30 flex items-center justify-center text-white shadow-sm shrink-0">
                    <Terminal className="w-4 h-4 text-terracotta" />
                  </div>
                  <div>
                    <span className="font-sans font-bold text-white tracking-wide text-xs sm:text-sm block">
                      MOHSIN QURESHI
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-terracotta uppercase tracking-wider block font-medium">
                      AI Platform Engineer & FDE | Senior Data Scientist
                    </span>
                  </div>
                </div>

                {/* Cloud & Scalability Pill */}
                <button
                  onClick={onViewMatrix}
                  title="View Enterprise Architecture Benchmark Matrix"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-terracotta/10 border border-terracotta/30 text-[11px] font-mono text-[#F5C6B5] hover:text-white hover:border-terracotta/60 hover:bg-terracotta/20 transition-all shadow-[0_2px_12px_rgba(217,119,87,0.15)] group cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse shrink-0" />
                  <span>AWS & GCP PRODUCTION SCALE</span>
                  <ArrowUpRight className="w-3 h-3 text-terracotta group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              {/* Main Headline */}
              <div className="pt-1">
                <h1 className="text-[32px] xs:text-[38px] sm:text-[48px] lg:text-[50px] xl:text-[56px] font-extrabold text-white tracking-tight leading-[1.08] font-sans">
                  Engineering AI that survives{' '}
                  <span className="font-serif italic font-normal text-luxury-champagne bg-gradient-to-r from-luxury-champagne via-white to-terracotta bg-clip-text text-transparent">
                    production
                  </span>{' '}
                  scale.
                </h1>
              </div>

              {/* Clean, Focused Action Buttons in Claude Colour Scheme */}
              <div className="space-y-5 pt-1">
                <div className="flex flex-wrap items-center gap-3">
                  {/* Primary CTA — Claude Signature Terracotta Coral */}
                  <button
                    onClick={() => handleNavClick('selected-work')}
                    className="apple-glass-cta-terracotta px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-[0.98] min-h-[46px] shadow-[0_6px_25px_rgba(217,119,87,0.45)] cursor-pointer"
                  >
                    <span>Explore Case Studies</span>
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  {/* Request CV (Recruiter Ingress) — Claude Warm Clay Glass */}
                  {onRequestResume && (
                    <button
                      onClick={onRequestResume}
                      className="px-5 py-3.5 rounded-full bg-[#1C1715]/80 hover:bg-[#2A201A] active:bg-[#120E0D] backdrop-blur-md border border-terracotta/35 hover:border-terracotta/70 text-[#F5EDE8] hover:text-white font-semibold text-xs sm:text-sm transition-all shadow-[0_2px_15px_rgba(217,119,87,0.15)] flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-[0.98] min-h-[46px] cursor-pointer"
                    >
                      <span className="p-1 rounded-full bg-terracotta/20 border border-terracotta/40 group-hover:bg-terracotta/30 transition-colors">
                        <FileText className="w-3.5 h-3.5 text-terracotta-light group-hover:text-white" />
                      </span>
                      <span>Request CV</span>
                    </button>
                  )}

                  {/* Schedule Sync — Claude Warm Ghost Glass */}
                  <button
                    onClick={onBookCall}
                    className="px-5 py-3.5 rounded-full bg-terracotta/10 hover:bg-terracotta/20 active:bg-terracotta/25 backdrop-blur-md border border-terracotta/25 hover:border-terracotta/45 text-[#F5C6B5] hover:text-white font-mono text-xs transition-all flex items-center justify-center gap-2 min-h-[46px] hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer"
                  >
                    <span>Schedule Sync</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-terracotta/75 group-hover:text-white transition-colors" />
                  </button>
                </div>

                {/* Proven Enterprise Deployments Strip */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-white/70 flex items-center justify-between">
                    <span>Proven Enterprise Deployments</span>
                    <button
                      onClick={() => handleNavClick('how-i-deploy')}
                      className="text-terracotta hover:text-white transition-colors underline-offset-4 hover:underline flex items-center gap-1 normal-case font-medium text-[11px]"
                    >
                      <span>Methodology</span>
                      <ArrowUpRight className="w-3 h-3 text-terracotta" />
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-white/90 font-medium">
                    <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10">Flipkart</span>
                    <span className="text-white/30">•</span>
                    <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10">Accenture Strategy</span>
                    <span className="text-white/30">•</span>
                    <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10">Novartis</span>
                    <span className="text-white/30">•</span>
                    <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10">Ericsson</span>
                  </div>
                </div>
              </div>

              {/* 4 Spacious Tactical Competency Tiles */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-3 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-1.5 text-amber-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono uppercase tracking-wider">HF Fine-Tuning</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-white mt-1">Gemma 8B/27B</div>
                </div>

                <div className="p-3 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <Zap className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono uppercase tracking-wider">Fast-Path</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-white mt-1">&lt; 33ms P99</div>
                </div>

                <div className="p-3 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-1.5 text-cyan-400">
                    <Cloud className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono uppercase tracking-wider">Cloud Scale</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-white mt-1">AWS & GCP VPC</div>
                </div>

                <div className="p-3 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-1.5 text-luxury-gold">
                    <Layers className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono uppercase tracking-wider">Data Science</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-white mt-1">XGBoost & ML</div>
                </div>
              </div>

            </div>

            {/* ========================================================= */}
            {/* RIGHT COLUMN: UNIFIED, RELAXED CINEMATIC VISUAL STAGE     */}
            {/* ========================================================= */}
            <div className={`lg:col-span-6 xl:col-span-5 flex flex-col items-center transition-all duration-700 delay-150 ${
              isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}>
              
              {/* Single Full-Height Unified Stage Container */}
              <div className="relative w-full rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#141312] to-[#0a0908] shadow-2xl min-h-[540px] sm:min-h-[580px] lg:min-h-[620px] flex flex-col justify-between p-5 sm:p-6 group">
                
                {/* Background Executive Portrait (Full Height, Elegant Editorial Presence) */}
                <img
                  src="./assets/hero/higgsfield-hero-poster.webp"
                  alt="Mohsin Qureshi — AI Platform Engineer & Forward Deployment Engineer"
                  className="absolute inset-0 w-full h-full object-cover object-[72%_20%] lg:object-[80%_center] filter contrast-[1.08] brightness-[0.96] group-hover:scale-[1.02] transition-transform duration-1000"
                />

                {/* Scrim Gradient Guarantees Text & Badges Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#100f0e] via-[#100f0e]/50 via-55% to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none" />

                {/* Top Floating Telemetry Status Chips */}
                <div className="relative z-10 flex items-center justify-between gap-2 pointer-events-none">
                  <div className="p-1.5 px-3 rounded-full apple-glass border border-white/20 text-xs font-mono text-white flex items-center gap-2 shadow-lg backdrop-blur-md">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified AI Platform Lead</span>
                  </div>

                  <div className="p-1.5 px-3 rounded-full bg-black/60 border border-terracotta/40 text-xs font-mono text-terracotta font-semibold shadow-lg backdrop-blur-md">
                    100k+ Req/s
                  </div>
                </div>

                {/* Bottom Interactive 3D Multi-Model Router Deck */}
                <div className="relative z-10 space-y-3.5 pt-8">
                  
                  {/* Model Routing Header */}
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-white/80 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-terracotta" />
                      <span>Multi-Model Agent Router</span>
                    </span>
                    <span className="text-emerald-400 font-medium">AWS & GCP ONLINE</span>
                  </div>

                  {/* 4 Interactive 3D WebGL Brand Orbs Cards (Clean 2x2 Grid) */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {models.map((m) => {
                      const isSelected = activeModel === m.id;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setActiveModel(m.id)}
                          className={`p-2.5 rounded-2xl apple-glass border transition-all text-left flex items-center gap-2.5 group/btn backdrop-blur-xl ${
                            isSelected
                              ? 'border-terracotta/80 bg-white/15 shadow-[0_8px_25px_rgba(217,119,87,0.35)] scale-[1.02]'
                              : 'border-white/10 bg-black/55 hover:border-white/30 hover:bg-black/75'
                          }`}
                        >
                          {/* 3D WebGL Brand Orb */}
                          <div className="w-8 h-8 rounded-xl bg-black/70 border border-white/15 flex items-center justify-center shrink-0 overflow-hidden shadow-inner group-hover/btn:scale-105 transition-transform">
                            <div className="w-6 h-6 rounded-full overflow-hidden">
                              <BrandOrbs variant={m.orbVariant} size="small" mode="dark" speed={isSelected ? 1.5 : 0.8} />
                            </div>
                          </div>

                          {/* Model Specs */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-white tracking-tight truncate block">
                                {m.name}
                              </span>
                              {isSelected && (
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                              )}
                            </div>
                            <div className="text-[10px] text-terracotta font-mono truncate">{m.badge}</div>
                            <div className="text-[10px] font-mono text-white/60">{m.metric}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Footnote Strip: Live Production Telemetry */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/70">
                    <span>P99 Latency Bound:</span>
                    <span className="text-luxury-champagne font-semibold">&lt; 40ms SLA</span>
                    <span className="text-white/30">•</span>
                    <span className="text-emerald-400 font-semibold">&lt; 0.5% Citation Drift</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, Terminal, ShieldCheck, Zap, Activity, Layers, FileText } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
  onExploreDemos: () => void;
  onViewMatrix: () => void;
  onRequestResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCall, onExploreDemos, onViewMatrix, onRequestResume }) => {
  const [isWiped, setIsWiped] = useState(false);
  const [isContentReady, setIsContentReady] = useState(false);
  const [isDesktopVideoEligible, setIsDesktopVideoEligible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference & viewport width
    const checkEligibility = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;

      if (prefersReducedMotion || !isDesktop) {
        // Mobile & Reduced Motion: bypass wipe and video download completely
        setIsDesktopVideoEligible(false);
        setIsWiped(true);
        setIsContentReady(true);
      } else {
        setIsDesktopVideoEligible(true);
      }
    };

    checkEligibility();
    window.addEventListener('resize', checkEligibility);

    // Desktop: Trigger 900ms wipe reveal and 150ms content fade-in
    const wipeTimer = setTimeout(() => setIsWiped(true), 60);
    const contentTimer = setTimeout(() => setIsContentReady(true), 1050);

    return () => {
      window.removeEventListener('resize', checkEligibility);
      clearTimeout(wipeTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const handleNavClick = (anchorId: string) => {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-6 sm:pt-10 md:pt-12 pb-12 md:pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-12 left-1/4 w-[550px] h-[550px] bg-terracotta/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-24 right-1/4 w-[450px] h-[450px] bg-terracotta/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Higgsfield Cinematic Hero Card */}
        <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-white/10 bg-[#121110] min-h-[600px] lg:min-h-[680px] flex items-center">
          
          {/* ========================================================= */}
          {/* BACKGROUND MEDIA: HIGGSFIELD VIDEO LOOP & POSTER WEBP     */}
          {/* ========================================================= */}
          <div
            className="absolute inset-0 z-0 overflow-hidden"
            style={{
              clipPath: isWiped ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)',
              transition: isDesktopVideoEligible ? 'clip-path 900ms cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
            }}
          >
            {/* Base Cinematic Editorial Portrait (Authentic Executive Likeness) */}
            <img
              src="./assets/hero/higgsfield-hero-poster.webp"
              alt="Mohsin Qureshi — AI Architect & Forward Deployment Engineer"
              className="w-full h-full object-cover object-[75%_25%] lg:object-[85%_center] filter contrast-[1.08] brightness-[0.95]"
              loading="eager"
            />

            {/* Desktop 3D Hardware Push-in Video Loop (Tactile Obsidian Motion) */}
            {isDesktopVideoEligible && (
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover object-center mix-blend-screen opacity-35 filter contrast-[1.15]"
              >
                <source src="./assets/hero/higgsfield-hero.mp4" type="video/mp4" />
              </video>
            )}

            {/* Contrast Guarantee: Dark Scrim Gradient Ensuring AAA Typography Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 via-50% to-black/30 lg:to-transparent pointer-events-none" />
            
            {/* Top and Bottom Architectural Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent via-35% to-black/70 pointer-events-none" />

            {/* Higgsfield Tactile Grain Texture */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* ========================================================= */}
          {/* FOREGROUND CONTENT: TYPOGRAPHY, ACTION PILLS & METRICS   */}
          {/* ========================================================= */}
          <div
            className={`relative z-10 w-full p-6 sm:p-10 lg:p-14 xl:p-16 flex flex-col justify-between transition-all duration-700 ${
              isContentReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            {/* Top Bar: Monogram & Tier Pill */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-sm shrink-0">
                  <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <span className="font-sans font-bold text-white tracking-wide text-xs sm:text-sm block">
                    MOHSIN QURESHI
                  </span>
                  <span className="text-[10px] font-mono text-terracotta uppercase tracking-wider block">
                    AI Architect & Forward Deployment Engineer
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onViewMatrix}
                  title="Jump to Enterprise Architecture Benchmark Matrix"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-mono text-white/90 hover:bg-black/60 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span>FORWARD DEPLOYMENT STANDARD</span>
                </button>
              </div>
            </div>

            {/* Main Headline & Architectural Narrative */}
            <div className="max-w-full lg:max-w-[620px] xl:max-w-[660px] space-y-4 my-2 sm:my-4">
              <h1 className="text-[32px] xs:text-[38px] sm:text-[48px] lg:text-[54px] xl:text-[58px] font-extrabold text-white tracking-tight leading-[1.06] font-sans">
                Engineering AI that survives{' '}
                <span className="font-serif italic font-normal text-luxury-champagne">production</span>{' '}
                scale.
              </h1>
              
              <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
                Hardening fragile generative prototypes into deterministic, sub-40ms enterprise systems with zero hallucination and verifiable FinOps efficiency.
              </p>
            </div>

            {/* Action Pills & Primary Ingress */}
            <div className="pt-4 pb-2 space-y-4 max-w-xl">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                {/* Primary CTA */}
                <button
                  onClick={() => handleNavClick('selected-work')}
                  className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-white text-neutral-950 font-bold text-xs sm:text-sm hover:bg-neutral-100 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-[0.98] min-h-[46px]"
                >
                  <span>Explore Case Studies</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                {/* Request CV */}
                {onRequestResume && (
                  <button
                    onClick={onRequestResume}
                    className="px-4.5 py-3 sm:px-5 sm:py-3.5 rounded-full bg-black/45 hover:bg-black/65 active:bg-black/80 backdrop-blur-md border border-white/25 hover:border-white/45 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-[0.98] min-h-[46px]"
                  >
                    <span className="p-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                      <FileText className="w-3.5 h-3.5 text-white" />
                    </span>
                    <span>Request CV</span>
                  </button>
                )}

                {/* Run Interactive Labs */}
                <button
                  onClick={onExploreDemos}
                  className="px-4 py-2.5 sm:px-4.5 sm:py-3 rounded-full bg-black/35 hover:bg-black/55 backdrop-blur-md border border-white/25 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 min-h-[42px] hover:border-white/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
                  <span>Run Interactive Labs</span>
                </button>

                {/* Schedule Sync */}
                <button
                  onClick={onBookCall}
                  className="px-4 py-2.5 sm:px-4.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white/95 font-mono text-xs transition-colors flex items-center justify-center gap-2 min-h-[42px] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Schedule Sync</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/70" />
                </button>
              </div>

              {/* Proven Deployments Strip */}
              <div className="pt-3 border-t border-white/15 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-white/75 flex items-center justify-between">
                  <span className="font-semibold">Proven Enterprise Deployments</span>
                  <button
                    onClick={() => handleNavClick('how-i-deploy')}
                    className="text-terracotta hover:text-white transition-colors underline-offset-4 hover:underline flex items-center gap-1 normal-case font-medium text-[11px]"
                  >
                    <span>View Architecture Methodology</span>
                    <ArrowUpRight className="w-3 h-3 text-terracotta" />
                  </button>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] sm:text-xs text-white/95 font-semibold">
                  <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/15">Flipkart</span>
                  <span className="text-white/40">•</span>
                  <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/15">Accenture</span>
                  <span className="text-white/40">•</span>
                  <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/15">Novartis</span>
                  <span className="text-white/40">•</span>
                  <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/15">Ericsson</span>
                </div>
              </div>
            </div>

            {/* Tactical Live Metrics Strip (Bottom Right Overlay on Desktop) */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl">
              <div className="p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-1.5 text-terracotta">
                  <Zap className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono uppercase tracking-wider">Fast-Path</span>
                </div>
                <div className="text-sm font-bold font-mono text-white mt-0.5">&lt; 40ms P99</div>
              </div>

              <div className="p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono uppercase tracking-wider">Drift</span>
                </div>
                <div className="text-sm font-bold font-mono text-white mt-0.5">&lt; 0.5% Halluc.</div>
              </div>

              <div className="p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-1.5 text-luxury-gold">
                  <Layers className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono uppercase tracking-wider">Throughput</span>
                </div>
                <div className="text-sm font-bold font-mono text-white mt-0.5">100k+ Req/Sec</div>
              </div>

              <div className="p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <Activity className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono uppercase tracking-wider">SLA Bound</span>
                </div>
                <div className="text-sm font-bold font-mono text-white mt-0.5">99.98% Uptime</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

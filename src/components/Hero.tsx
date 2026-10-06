import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, ShieldCheck, BarChart3, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
  onExploreDemos: () => void;
  onViewMatrix: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCall, onExploreDemos, onViewMatrix }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Split-Card Hero Wrapper (Inspired by portfolio_design_ideas & Solt Wagner) */}
        <div className="rounded-[32px] bg-canvas-card border border-canvas-border overflow-hidden shadow-portrait-shadow grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
          
          {/* LEFT PANEL: Deep Terracotta/Amber Gradient + Giant Typographic Watermark */}
          <div className="lg:col-span-6 relative p-8 sm:p-12 lg:p-14 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#1C1310] via-[#16100E] to-[#0E0F14] border-b lg:border-b-0 lg:border-r border-canvas-border">
            
            {/* Giant Background Display Typographic Watermark */}
            <div className="absolute -top-6 -left-6 select-none pointer-events-none opacity-[0.07] font-black text-[96px] sm:text-[130px] leading-none text-white tracking-tighter uppercase font-sans">
              AI ARCHITECT
            </div>

            {/* Top Brand Pill */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-mono text-luxury-gold">
                <span className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse" />
                <span>FORWARD DEPLOYMENT ENGINEER</span>
              </div>
            </div>

            {/* Middle Main Statement */}
            <div className="relative z-10 my-8 sm:my-12 space-y-5">
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.1] font-sans">
                Engineering AI that survives{' '}
                <span className="font-serif italic font-normal text-gradient-gold">production</span>{' '}
                scale.
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
                Building a generative AI demo is easy. Scaling it in a global enterprise without hallucinating, crashing, or burning cloud budgets is hard. <strong>That is what I architect.</strong>
              </p>
            </div>

            {/* Bottom Actions & Social Proof Avatars */}
            <div className="relative z-10 space-y-6 pt-4 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onBookCall}
                  className="px-6 py-3.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-luxury-gold transition-all shadow-luxury-glow flex items-center gap-2 group"
                >
                  <span>Book Architecture Audit</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <button
                  onClick={onExploreDemos}
                  className="px-5 py-3.5 rounded-full bg-black/50 border border-white/15 text-slate-200 font-semibold text-xs sm:text-sm hover:border-luxury-gold transition-colors flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-luxury-gold" />
                  <span>Live Sandboxes</span>
                </button>
              </div>

              {/* Enterprise Trust Ribbon */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-[#1A1D24] border border-white/20 flex items-center justify-center text-[10px] font-bold text-white">FK</div>
                  <div className="w-7 h-7 rounded-full bg-[#241F1A] border border-white/20 flex items-center justify-center text-[10px] font-bold text-luxury-gold">AC</div>
                  <div className="w-7 h-7 rounded-full bg-[#181F26] border border-white/20 flex items-center justify-center text-[10px] font-bold text-slate-300">NV</div>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Proven across Flipkart • Accenture • Novartis
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: Solt Wagner Minimalist Dark Cards + Centered Studio Portrait */}
          <div className="lg:col-span-6 relative p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-canvas-subtle">
            
            {/* Top Status & Caliber Jump */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
                <span className="text-white font-medium uppercase tracking-wider text-[11px]">AVAILABLE FOR ADVISORY & CONTRACTS</span>
              </div>

              <button
                onClick={onViewMatrix}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-luxury-gold hover:text-white transition-colors"
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Laya Rating: 9.6/10</span>
              </button>
            </div>

            {/* Central Studio Portrait with Floating Badges (Reference IMG_9875.JPG) */}
            <div className="relative my-8 sm:my-10 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-canvas-border shadow-portrait-shadow group bg-black">
                
                {/* Black & White Studio Turtleneck Portrait */}
                <img
                  src="./images/mohsin_portrait.jpg"
                  alt="Mohsin Qureshi — AI Architect"
                  className="w-full aspect-[4/5] object-cover object-top filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Metadata Card */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl glass-card border border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white font-sans">Mohsin Qureshi</div>
                    <div className="text-[11px] font-mono text-luxury-gold">AI Architect & FDE</div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-slate-200 text-[10px] font-mono border border-white/10">
                    Bengaluru, India
                  </span>
                </div>

                {/* Floating Micro-Badge Top Left */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-lg glass-card border border-white/15 text-[10px] font-mono text-slate-200 shadow-md flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3 h-3 text-luxury-gold" />
                  <span>Sub-40ms Routing</span>
                </motion.div>

                {/* Floating Micro-Badge Top Right */}
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute top-3 right-3 px-2.5 py-1 rounded-lg glass-card border border-white/15 text-[10px] font-mono text-slate-200 shadow-md flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3 h-3 text-luxury-gold" />
                  <span>100% Grounded RAG</span>
                </motion.div>

              </div>
            </div>

            {/* Bottom Proof Metrics Grid (Folioblox Style) */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-canvas-border text-center">
              <div className="p-2.5 rounded-xl bg-canvas-card border border-canvas-border">
                <div className="text-xl font-bold font-mono text-luxury-gold">90%+</div>
                <div className="text-[10px] font-mono text-slate-400 mt-0.5">Clinical NER</div>
              </div>

              <div className="p-2.5 rounded-xl bg-canvas-card border border-canvas-border">
                <div className="text-xl font-bold font-mono text-white">Hours→Mins</div>
                <div className="text-[10px] font-mono text-slate-400 mt-0.5">Scientific RAG</div>
              </div>

              <div className="p-2.5 rounded-xl bg-canvas-card border border-canvas-border">
                <div className="text-xl font-bold font-mono text-luxury-gold">72%</div>
                <div className="text-[10px] font-mono text-slate-400 mt-0.5">Cloud Bill Cut</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

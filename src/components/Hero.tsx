import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Cpu, ShieldCheck, Database, BarChart3 } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
  onExploreDemos: () => void;
  onViewMatrix: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCall, onExploreDemos, onViewMatrix }) => {
  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      
      {/* Subtle ambient light aura (Warm Champagne & Indigo) */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] mesh-glow-warm pointer-events-none rounded-full blur-[140px]" />
      <div className="absolute top-40 right-10 w-[400px] h-[400px] mesh-glow-indigo pointer-events-none rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Minimalist Tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center md:justify-start"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-canvas-card border border-canvas-border text-xs text-slate-300 shadow-subtle-card">
            <span className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse" />
            <span className="font-mono text-[11px] tracking-wider uppercase text-luxury-gold font-medium">
              FORWARD DEPLOYMENT ENGINEER & AI ARCHITECT
            </span>
          </div>
        </motion.div>

        {/* Hero Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            {/* Statement Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight text-white leading-[1.08] font-sans">
              Architecting <span className="font-serif italic font-normal text-gradient-gold">intelligent</span> systems that survive{' '}
              <span className="text-gradient-titanium">production.</span>
            </h1>

            {/* Subtitle / Philosophy */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Building a fragile generative demo is easy. Scaling it in enterprise environments without hallucinating, crashing, or burning through cloud budgets is hard. <strong>That is what I engineer.</strong>
            </p>

            {/* Competency Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 font-mono text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-canvas-card border border-canvas-border text-slate-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-luxury-gold" /> Multi-Agent Routing
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-canvas-card border border-canvas-border text-slate-300 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-luxury-platinum" /> Grounded Clinical RAG
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-canvas-card border border-canvas-border text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-luxury-gold" /> SLA & Cost Defense
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onBookCall}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-luxury-gold text-black font-semibold text-sm hover:bg-white transition-all shadow-luxury-glow flex items-center justify-center gap-2 group"
              >
                <span>Book 30-Min Architecture Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onViewMatrix}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-canvas-card border border-canvas-border hover:border-luxury-gold/50 text-slate-200 font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <BarChart3 className="w-4 h-4 text-luxury-gold" />
                <span>Laya Matrix</span>
              </button>

              <button
                onClick={onExploreDemos}
                className="w-full sm:w-auto px-5 py-4 rounded-xl bg-canvas-card border border-canvas-border hover:border-white/30 text-slate-300 font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-luxury-gold" />
                <span>Live Demos</span>
              </button>
            </div>

          </motion.div>

          {/* Right Column: Editorial Portrait Showcase (Reference IMG_9875.JPG) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Halo */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-luxury-gold/20 via-white/5 to-luxury-indigo/20 blur-xl opacity-70" />

              {/* Editorial Frame */}
              <div className="relative rounded-3xl bg-canvas-card border border-canvas-border overflow-hidden shadow-portrait-shadow group">
                
                {/* Portrait Image */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-canvas-subtle">
                  <img
                    src="./images/mohsin_portrait.jpg"
                    alt="Mohsin Qureshi — AI Architect"
                    className="w-full h-full object-cover object-center filter grayscale contrast-[1.08] hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas-card via-transparent to-transparent opacity-80" />
                </div>

                {/* Floating Bottom Card Over Portrait */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-card border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-sans font-bold text-base text-white">Mohsin Qureshi</h3>
                      <div className="text-xs text-luxury-gold font-mono">Forward Deployment AI Engineer</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-luxury-gold/15 text-luxury-gold font-mono text-[10px] border border-luxury-gold/30">
                      Bengaluru, India
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[11px] font-mono text-slate-300">
                    <span className="text-slate-400">Enterprise Caliber:</span>
                    <span className="text-white font-medium">Flipkart • Accenture • Novartis</span>
                  </div>
                </div>

                {/* Floating Pill Top Left */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-xl glass-card border border-white/10 text-[11px] font-mono text-slate-200 shadow-lg flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
                  <span>Sub-40ms Intent Routing</span>
                </motion.div>

                {/* Floating Pill Right */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute top-24 right-4 px-3 py-1.5 rounded-xl glass-card border border-white/10 text-[11px] font-mono text-slate-200 shadow-lg flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-luxury-gold" />
                  <span>100% Citation Grounded</span>
                </motion.div>

              </div>

            </div>
          </motion.div>

        </div>

        {/* Quantified Metrics Ribbon */}
        <div className="mt-20 pt-10 border-t border-canvas-border grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-canvas-card border border-canvas-border space-y-1">
            <div className="font-mono text-3xl font-extrabold text-luxury-gold">90%+</div>
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">Clinical NER Precision</div>
            <div className="text-[11px] text-slate-500">TCS Healthcare & Novartis</div>
          </div>

          <div className="p-5 rounded-2xl bg-canvas-card border border-canvas-border space-y-1">
            <div className="font-mono text-3xl font-extrabold text-white">Hours → Mins</div>
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">Document Discovery</div>
            <div className="text-[11px] text-slate-500">Scientific RAG (Accenture)</div>
          </div>

          <div className="p-5 rounded-2xl bg-canvas-card border border-canvas-border space-y-1">
            <div className="font-mono text-3xl font-extrabold text-luxury-gold">72%</div>
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">Inference Cost Cut</div>
            <div className="text-[11px] text-slate-500">Multi-Agent Gateway Routing</div>
          </div>

          <div className="p-5 rounded-2xl bg-canvas-card border border-canvas-border space-y-1">
            <div className="font-mono text-3xl font-extrabold text-white">50%</div>
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">Oversight Reduction</div>
            <div className="text-[11px] text-slate-500">Industrial Edge CV Analytics</div>
          </div>
        </div>

        {/* Enterprise Logos Ribbon */}
        <div className="mt-14 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-5">
            Production & Research Engagements Across Global Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-slate-400 font-mono text-sm tracking-wider font-semibold">
            <span className="hover:text-white transition-colors">FLIPKART</span>
            <span className="text-luxury-gold/40">•</span>
            <span className="hover:text-white transition-colors">ACCENTURE</span>
            <span className="text-luxury-gold/40">•</span>
            <span className="hover:text-white transition-colors">NOVARTIS</span>
            <span className="text-luxury-gold/40">•</span>
            <span className="hover:text-white transition-colors">ERICSSON</span>
            <span className="text-luxury-gold/40">•</span>
            <span className="hover:text-white transition-colors">COMCAST</span>
            <span className="text-luxury-gold/40">•</span>
            <span className="hover:text-white transition-colors">TCS</span>
          </div>
        </div>

      </div>
    </section>
  );
};

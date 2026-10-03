import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, Database, Activity, Sparkles } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCall }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background neon ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-green/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyber-cyan/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-surface border border-cyber-border text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-cyber-green animate-ping" />
              <span className="font-mono text-cyber-green font-medium">AVAILABLE FOR ENTERPRISE ADVISORY & FDE CONTRACTS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Transitioning <span className="text-slate-400 line-through decoration-cyber-green/60">Fragile</span> AI Prototypes into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green via-cyber-cyan to-white">
                Fault-Tolerant
              </span>{' '}
              Enterprise Systems.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              Building a generative AI demo is easy; scaling it in a global enterprise without hallucinating, crashing, or burning through cloud budgets is hard. <strong>That is what I fix.</strong>
            </p>

            {/* Competency Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyber-card border border-cyber-border text-xs text-slate-300 font-mono">
                <Cpu className="w-3.5 h-3.5 text-cyber-green" /> Multi-Agent Routing
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyber-card border border-cyber-border text-xs text-slate-300 font-mono">
                <Database className="w-3.5 h-3.5 text-cyber-cyan" /> Grounded Enterprise RAG
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyber-card border border-cyber-border text-xs text-slate-300 font-mono">
                <Activity className="w-3.5 h-3.5 text-cyber-green" /> Production LLMOps & SLAs
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyber-card border border-cyber-border text-xs text-slate-300 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-cyber-purple" /> Guardrails & Cost Defense
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onBookCall}
                className="px-6 py-3.5 rounded-lg bg-cyber-green text-black font-semibold text-sm hover:bg-white transition-all shadow-neon flex items-center justify-center gap-2 group"
              >
                <span>Book 30-Min Architecture Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="#interactive-demos"
                className="px-6 py-3.5 rounded-lg bg-cyber-surface border border-cyber-border hover:border-cyber-green/50 text-slate-200 font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-cyber-green" />
                <span>Test Interactive Demos</span>
              </a>
            </div>

          </div>

          {/* Right Column: Neon Profile Card & Visual Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyber-green/40 to-cyber-cyan/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              {/* Profile Card */}
              <div className="relative rounded-2xl bg-cyber-surface border border-cyber-border p-6 shadow-2xl space-y-5">
                
                {/* Image Container with Neon Backdrop */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-cyber-card border border-cyber-border/80">
                  <img 
                    src="./images/neon_profile_pic.jpg" 
                    alt="Mohsin Qureshi - AI Architect" 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  
                  {/* Floating Caliber Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-cyber-bg/90 backdrop-blur-md border border-cyber-border text-xs flex items-center justify-between">
                    <div>
                      <div className="font-mono text-white font-bold">Mohsin Qureshi</div>
                      <div className="text-[11px] text-cyber-green">Forward Deployment AI Engineer</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-cyber-green/20 text-cyber-green font-mono text-[10px] border border-cyber-green/40">
                      Bengaluru
                    </span>
                  </div>
                </div>

                {/* Quick Credentials Summary */}
                <div className="space-y-2 pt-1 font-mono text-xs text-slate-300">
                  <div className="flex items-center justify-between border-b border-cyber-border/60 pb-1.5">
                    <span className="text-cyber-muted">Focus</span>
                    <span className="text-white">Agentic Orchestration & RAG</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-cyber-border/60 pb-1.5">
                    <span className="text-cyber-muted">Enterprise Caliber</span>
                    <span className="text-white">Flipkart • Accenture • Novartis</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-cyber-muted">Education</span>
                    <span className="text-cyber-cyan">IIT Madras • Masters' Union</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Quantified Impact Metrics Ribbon */}
        <div className="mt-16 pt-10 border-t border-cyber-border/70 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-cyber-card/60 border border-cyber-border">
            <div className="font-mono text-3xl font-extrabold text-cyber-green">90%+</div>
            <div className="text-xs text-cyber-muted mt-1 uppercase tracking-wider">Clinical NER Precision</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Healthcare NLP (TCS & Novartis)</div>
          </div>

          <div className="p-4 rounded-xl bg-cyber-card/60 border border-cyber-border">
            <div className="font-mono text-3xl font-extrabold text-cyber-cyan">Hours → Mins</div>
            <div className="text-xs text-cyber-muted mt-1 uppercase tracking-wider">Document Discovery</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Enterprise RAG (Accenture)</div>
          </div>

          <div className="p-4 rounded-xl bg-cyber-card/60 border border-cyber-border">
            <div className="font-mono text-3xl font-extrabold text-cyber-green">72%</div>
            <div className="text-xs text-cyber-muted mt-1 uppercase tracking-wider">Cloud Inference Cut</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Multi-Agent Gateway Routing</div>
          </div>

          <div className="p-4 rounded-xl bg-cyber-card/60 border border-cyber-border">
            <div className="font-mono text-3xl font-extrabold text-cyber-purple">50%</div>
            <div className="text-xs text-cyber-muted mt-1 uppercase tracking-wider">Oversight Reduction</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Edge CV Video Analytics</div>
          </div>
        </div>

        {/* Enterprise Logos Ribbon */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-cyber-muted mb-4">
            Production & Research Engagements Across Global Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-400 font-mono text-sm tracking-wider font-semibold">
            <span className="hover:text-white transition-colors">FLIPKART</span>
            <span className="text-cyber-green">•</span>
            <span className="hover:text-white transition-colors">ACCENTURE</span>
            <span className="text-cyber-green">•</span>
            <span className="hover:text-white transition-colors">NOVARTIS</span>
            <span className="text-cyber-green">•</span>
            <span className="hover:text-white transition-colors">ERICSSON</span>
            <span className="text-cyber-green">•</span>
            <span className="hover:text-white transition-colors">COMCAST</span>
            <span className="text-cyber-green">•</span>
            <span className="hover:text-white transition-colors">TCS</span>
          </div>
        </div>

      </div>
    </section>
  );
};

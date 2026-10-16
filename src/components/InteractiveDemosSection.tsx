import React, { useState } from 'react';
import { LiveRoutingSimulator } from './LiveRoutingSimulator';
import { GroundedRagExplorer } from './GroundedRagExplorer';
import { Sparkles, Cpu, Database } from 'lucide-react';

export const InteractiveDemosSection: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'routing' | 'rag'>('routing');

  return (
    <section id="interactive-demos" className="py-24 bg-transparent border-t border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas-card border border-terracotta/40 text-xs font-mono text-terracotta shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>INTERACTIVE ARCHITECTURAL EVIDENCE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight break-words">
            Live Architecture{' '}
            <span className="font-serif italic font-normal text-terracotta block sm:inline">Sandboxes</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Don't rely on generic portfolio claims. Interact directly with simulations of my multi-agent routing gateway and zero-hallucination citation verification pipeline.
          </p>
        </div>

        {/* Demo Selector Tabs (Apple Frosted Glass Capsule) */}
        <div className="flex justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="inline-flex p-1.5 rounded-2xl apple-glass border border-white/10 gap-1 overflow-x-auto max-w-full no-scrollbar touch-scroll shadow-apple-card">
            <button
              onClick={() => setActiveDemo('routing')}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all duration-300 shrink-0 whitespace-nowrap ${
                activeDemo === 'routing'
                  ? 'apple-glass-cta-terracotta shadow-luxury-glow'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Cpu className="w-4 h-4 shrink-0" />
              <span className="sm:hidden">Router Simulator</span>
              <span className="hidden sm:inline">Multi-Agent Intent Router (Flipkart Scale)</span>
            </button>
            <button
              onClick={() => setActiveDemo('rag')}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all duration-300 shrink-0 whitespace-nowrap ${
                activeDemo === 'rag'
                  ? 'apple-glass-cta-terracotta shadow-luxury-glow'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Database className="w-4 h-4 shrink-0" />
              <span className="sm:hidden">Grounded RAG</span>
              <span className="hidden sm:inline">Grounded Citation RAG (Novartis Rigor)</span>
            </button>
          </div>
        </div>

        {/* Demo Content */}
        <div>
          {activeDemo === 'routing' ? (
            <LiveRoutingSimulator />
          ) : (
            <GroundedRagExplorer />
          )}
        </div>

      </div>
    </section>
  );
};

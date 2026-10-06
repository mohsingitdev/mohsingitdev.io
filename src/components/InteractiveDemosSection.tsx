import React, { useState } from 'react';
import { LiveRoutingSimulator } from './LiveRoutingSimulator';
import { GroundedRagExplorer } from './GroundedRagExplorer';
import { Sparkles, Cpu, Database } from 'lucide-react';

export const InteractiveDemosSection: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'routing' | 'rag'>('routing');

  return (
    <section id="interactive-demos" className="py-24 bg-canvas-subtle border-t border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-canvas-border text-xs font-mono text-luxury-gold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE ARCHITECTURAL EVIDENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight">
            Live Architecture Sandboxes
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Don't rely on generic portfolio claims. Interact directly with simulations of my multi-agent routing gateway and zero-hallucination citation verification pipeline.
          </p>
        </div>

        {/* Demo Selector Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-xl bg-canvas-card border border-canvas-border gap-1">
            <button
              onClick={() => setActiveDemo('routing')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-mono font-semibold transition-all ${
                activeDemo === 'routing'
                  ? 'bg-luxury-gold text-black shadow-luxury-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Multi-Agent Intent Router (Flipkart Caliber)</span>
            </button>
            <button
              onClick={() => setActiveDemo('rag')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-mono font-semibold transition-all ${
                activeDemo === 'rag'
                  ? 'bg-luxury-gold text-black shadow-luxury-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>Grounded Citation RAG (Accenture & Novartis)</span>
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

import React, { useState } from 'react';
import { LiveRoutingSimulator } from './LiveRoutingSimulator';
import { GroundedRagExplorer } from './GroundedRagExplorer';
import { Sparkles, Cpu, Database } from 'lucide-react';

export const InteractiveDemosSection: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'routing' | 'rag'>('routing');

  return (
    <section id="interactive-demos" className="py-20 bg-cyber-bg border-t border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono text-cyber-green">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE PROOF OF CALIBER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Live Architecture Sandboxes
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Don't just take my word for it. Interact directly with production simulations of my multi-agent routing gateway and zero-hallucination citation verification pipeline.
          </p>
        </div>

        {/* Demo Selector Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-xl bg-cyber-card border border-cyber-border">
            <button
              onClick={() => setActiveDemo('routing')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-mono font-semibold transition-all ${
                activeDemo === 'routing'
                  ? 'bg-cyber-green text-black shadow-neon'
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
                  ? 'bg-cyber-cyan text-black shadow-cyan-glow'
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

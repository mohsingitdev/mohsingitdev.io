import React, { useState } from 'react';
import { DOMAIN_PROJECTS } from '../data/domainProjects';
import { Layers, ArrowUpRight, ExternalLink, Github, Sparkles } from 'lucide-react';

interface DomainMatrixProps {
  onBookCall: () => void;
  onExploreDemo: () => void;
}

export const DomainMatrix: React.FC<DomainMatrixProps> = ({ onBookCall, onExploreDemo }) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');

  const domains = ['All', 'E-Commerce & High-Concurrency Systems', 'Life Sciences & Enterprise Knowledge', 'Telecommunications & Cyber Security', 'Computer Vision & Industrial IoT'];

  const filteredProjects = selectedDomain === 'All'
    ? DOMAIN_PROJECTS
    : DOMAIN_PROJECTS.filter((p) => p.domain === selectedDomain);

  return (
    <section id="domains" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-canvas-border pb-8">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-canvas-border text-xs font-mono text-luxury-gold">
            <Layers className="w-3.5 h-3.5" />
            <span>DOMAIN-SPECIFIC PRODUCTION BLUEPRINTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight">
            Architectural Case Studies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Deliberate systems engineered under rigid real-world enterprise constraints across high-concurrency retail, regulated life sciences, and industrial telemetry.
          </p>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {domains.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDomain(d)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedDomain === d
                  ? 'bg-luxury-gold text-black font-semibold shadow-luxury-glow'
                  : 'bg-canvas-card border border-canvas-border text-slate-400 hover:text-white'
              }`}
            >
              {d === 'All' ? 'All Domains' : d.split('&')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid (Solt Wagner Numbered Layout: #01, #02, #03) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => {
          const formattedNumber = `#0${idx + 1}`;

          return (
            <div
              key={project.id}
              className="rounded-3xl bg-canvas-card border border-canvas-border hover:border-luxury-gold/50 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between space-y-7 group shadow-subtle-card relative overflow-hidden"
            >
              {/* Card Watermark Number */}
              <div className="absolute top-4 right-6 select-none pointer-events-none text-4xl sm:text-5xl font-mono font-bold text-white/[0.04]">
                {formattedNumber}
              </div>

              {/* Top metadata */}
              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-luxury-gold">
                    {formattedNumber}
                  </span>
                  <span className="text-[11px] font-mono uppercase px-3 py-0.5 rounded-full bg-canvas-surface text-slate-300 border border-canvas-border">
                    {project.domain.split('&')[0]}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-luxury-gold transition-colors font-sans pt-1">
                  {project.title}
                </h3>

                <p className="text-sm font-mono text-slate-400 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Context & Architecture */}
              <div className="space-y-3.5 text-xs text-slate-300 relative z-10">
                <div className="p-4 rounded-2xl bg-canvas-surface border border-canvas-border space-y-1">
                  <div className="font-mono text-slate-500 uppercase text-[10px]">The Enterprise Bottleneck</div>
                  <div className="leading-relaxed">{project.challenge}</div>
                </div>

                <div className="p-4 rounded-2xl bg-canvas-subtle border border-luxury-gold/20 space-y-1">
                  <div className="font-mono text-luxury-gold uppercase text-[10px]">Architectural Solution</div>
                  <div className="leading-relaxed">{project.architectureSolution}</div>
                </div>
              </div>

              {/* Quantified Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 relative z-10">
                {project.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="p-3 rounded-xl bg-canvas-surface border border-canvas-border text-center">
                    <div className="font-mono text-base font-bold text-luxury-gold">{m.value}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-canvas-border flex flex-wrap items-center justify-between gap-3 relative z-10">
                <div className="flex items-center gap-4">
                  {project.hasInteractiveDemo && (
                    <button
                      onClick={onExploreDemo}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-luxury-gold hover:underline"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Test Live Simulator</span>
                    </button>
                  )}
                  {project.githubRepo && (
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <button
                  onClick={onBookCall}
                  className="text-xs font-mono font-semibold text-slate-200 hover:text-luxury-gold flex items-center gap-1 transition-colors"
                >
                  <span>Commission System</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};

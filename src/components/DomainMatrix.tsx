import React, { useState } from 'react';
import { DOMAIN_PROJECTS } from '../data/domainProjects';
import { Layers, ArrowRight, ExternalLink, Github, Sparkles } from 'lucide-react';

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
    <section id="domains" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono text-cyber-green">
          <Layers className="w-3.5 h-3.5" />
          <span>DOMAIN-WISE ARCHITECTURAL PROOF</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Enterprise Systems by Commercial Domain
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Proven architectures engineered under rigid enterprise constraints. Filter by your industry to review concrete system blueprints, latency SLAs, and business ROI.
        </p>
      </div>

      {/* Domain Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
        {domains.map((d) => (
          <button
            key={d}
            onClick={() => setSelectedDomain(d)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              selectedDomain === d
                ? 'bg-cyber-green text-black font-bold shadow-neon'
                : 'bg-cyber-surface border border-cyber-border text-slate-400 hover:text-white hover:border-slate-600'
            }`}
          >
            {d === 'All' ? 'All Commercial Domains' : d.split('&')[0]}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl bg-cyber-surface border border-cyber-border hover:border-cyber-green/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between space-y-6 group shadow-lg"
          >
            
            {/* Top metadata */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-cyber-card text-cyber-cyan border border-cyber-border">
                  {project.domain}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  {project.enterpriseContext.split(' ')[2] || 'Enterprise'} Caliber
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyber-green transition-colors">
                {project.title}
              </h3>

              <p className="text-sm font-mono text-slate-400">
                {project.tagline}
              </p>
            </div>

            {/* Context & Architecture */}
            <div className="space-y-4 text-xs leading-relaxed text-slate-300">
              <div className="p-3.5 rounded-xl bg-cyber-card/80 border border-cyber-border space-y-1">
                <div className="font-mono text-cyber-muted uppercase text-[10px]">The Challenge</div>
                <div>{project.challenge}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-cyber-bg border border-cyber-green/20 space-y-1">
                <div className="font-mono text-cyber-green uppercase text-[10px]">Architectural Solution</div>
                <div>{project.architectureSolution}</div>
              </div>
            </div>

            {/* Quantified Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-cyber-card border border-cyber-border text-center">
                  <div className="font-mono text-base font-bold text-cyber-green">{m.value}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.map((t, idx) => (
                <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyber-surface border border-cyber-border text-slate-400">
                  {t}
                </span>
              ))}
            </div>

            {/* Card Footer Actions */}
            <div className="pt-4 border-t border-cyber-border flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {project.hasInteractiveDemo && (
                  <button
                    onClick={onExploreDemo}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyber-green hover:underline"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Run Interactive Demo</span>
                  </button>
                )}
                {project.githubRepo && (
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              <button
                onClick={onBookCall}
                className="text-xs font-mono font-semibold text-slate-300 hover:text-cyber-green flex items-center gap-1 transition-colors"
              >
                <span>Hire for this domain</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

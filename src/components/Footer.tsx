import React from 'react';
import { Terminal, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-canvas border-t border-canvas-border py-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-canvas-card border border-canvas-border flex items-center justify-center">
                <Terminal className="w-4 h-4 text-luxury-gold" />
              </div>
              <span className="font-sans text-sm tracking-tight font-bold text-white">
                Mohsin Qureshi
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Forward Deployment Engineer (FDE) & AI Architect specializing in multi-agent orchestration, grounded enterprise RAG, and production LLMOps.
            </p>
            <div className="font-mono text-[11px] text-slate-500">
              Remote • Available Worldwide for Enterprise Advisory & Engineering Contracts
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="font-mono uppercase text-white font-semibold text-xs tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 font-mono text-xs">
              <li><a href="#hero" className="hover:text-terracotta transition-colors">Overview</a></li>
              <li><a href="#assessment-matrix" className="hover:text-terracotta transition-colors">Architecture Benchmark Matrix</a></li>
              <li><a href="#philosophy" className="hover:text-terracotta transition-colors">Production Philosophy</a></li>
              <li><a href="#domains" className="hover:text-terracotta transition-colors">Domain Matrix</a></li>
              <li><a href="#interactive-demos" className="hover:text-terracotta transition-colors">Interactive Demos</a></li>
              <li><a href="#experience" className="hover:text-terracotta transition-colors">Enterprise Track Record</a></li>
              <li><a href="#blog" className="hover:text-terracotta transition-colors">Technical Blog</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <div className="font-mono uppercase text-white font-semibold text-xs tracking-wider">
              Direct Channels
            </div>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a
                  href="https://www.linkedin.com/in/mohd-mohsin-qureshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-luxury-gold" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mohsingitdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-luxury-platinum" />
                  <span>GitHub Repositories</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:mohsin.i.qureshi@hotmail.com"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-luxury-gold" />
                  <span>mohsin.i.qureshi@hotmail.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-canvas-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Mohsin Qureshi. Architected for High-Concurrency & Enterprise SLAs.
          </div>
          <div>
            Designed with Claude editorial precision & Apple-inspired motion aesthetics. Caliber 9.6/10.
          </div>
        </div>

      </div>
    </footer>
  );
};

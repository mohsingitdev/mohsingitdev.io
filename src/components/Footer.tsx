import React from 'react';
import { Terminal, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-bg border-t border-cyber-border py-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-cyber-card border border-cyber-border flex items-center justify-center">
                <Terminal className="w-4 h-4 text-cyber-green" />
              </div>
              <span className="font-mono text-sm tracking-wider font-bold text-white">
                MOHSIN QURESHI
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Forward Deployment Engineer (FDE) & AI Architect specializing in multi-agent orchestration, grounded enterprise RAG, and production LLMOps.
            </p>
            <div className="font-mono text-[11px] text-cyber-muted">
              Bengaluru, Karnataka, India • Available for Global Remote Contracts & Consulting
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="font-mono uppercase text-white font-semibold text-xs tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 font-mono text-xs">
              <li><a href="#hero" className="hover:text-cyber-green transition-colors">Overview</a></li>
              <li><a href="#philosophy" className="hover:text-cyber-green transition-colors">Production Philosophy</a></li>
              <li><a href="#domains" className="hover:text-cyber-green transition-colors">Domain Matrix</a></li>
              <li><a href="#interactive-demos" className="hover:text-cyber-green transition-colors">Interactive Demos</a></li>
              <li><a href="#experience" className="hover:text-cyber-green transition-colors">Enterprise Track Record</a></li>
              <li><a href="#blog" className="hover:text-cyber-green transition-colors">Technical Blog</a></li>
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
                  <Linkedin className="w-3.5 h-3.5 text-cyber-green" />
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
                  <Github className="w-3.5 h-3.5 text-cyber-cyan" />
                  <span>GitHub Repositories</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:mohsin.i.qureshi@hotmail.com"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyber-purple" />
                  <span>mohsin.i.qureshi@hotmail.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cyber-border/70 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-cyber-muted">
          <div>
            © {new Date().getFullYear()} Mohsin Qureshi. Architected for High-Concurrency & Enterprise SLAs.
          </div>
          <div>
            Built with React, TypeScript, Tailwind CSS & Vite. Deployed to GitHub Pages.
          </div>
        </div>

      </div>
    </footer>
  );
};

import React from 'react';
import { Terminal, Github, Linkedin, Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="bg-canvas/50 backdrop-blur-lg border-t border-canvas-border py-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-8 h-8 rounded-lg bg-canvas-card border border-canvas-border flex items-center justify-center">
                <Terminal className="w-4 h-4 text-luxury-gold" />
              </div>
              <span className="font-sans text-sm tracking-tight font-bold text-white">
                Mohsin Qureshi
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              AI Platform Engineer &amp; Forward-Deployed AI Engineer (FDE) specializing in production LLM/RAG, high-concurrency model routing, and evaluation gates.
            </p>
            <div className="font-mono text-[11px] text-slate-500">
              Remote US/UK Collaboration • Fixed-Scope Production AI Advisory
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="font-mono uppercase text-white font-semibold text-xs tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 font-mono text-xs">
              <li><button onClick={() => navigate('/')} className="hover:text-terracotta transition-colors text-left">Overview</button></li>
              <li><button onClick={() => navigate('/case-studies')} className="hover:text-terracotta transition-colors text-left">Production Case Studies</button></li>
              <li><button onClick={() => navigate('/remote-ai-engineer')} className="hover:text-terracotta transition-colors text-left">Remote AI Roles (US/UK)</button></li>
              <li><button onClick={() => navigate('/services')} className="hover:text-terracotta transition-colors text-left">Readiness Assessment &amp; Sprints</button></li>
              <li><button onClick={() => navigate('/blog')} className="hover:text-terracotta transition-colors text-left">Production Field Notes</button></li>
              <li><button onClick={() => navigate('/#assessment-matrix')} className="hover:text-terracotta transition-colors text-left">Architecture Benchmark Matrix</button></li>
              <li><button onClick={() => navigate('/#interactive-demos')} className="hover:text-terracotta transition-colors text-left">Interactive Sandboxes</button></li>
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
              <li className="pt-1 border-t border-canvas-border/50">
                <a
                  href="https://topmate.io/mohsin_qureshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-terracotta transition-colors text-slate-300 font-medium"
                >
                  <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                  <span>Mentorship & Reviews (Topmate)</span>
                  <ArrowUpRight className="w-3 h-3 text-terracotta" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-canvas-border flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left font-mono text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Mohsin Qureshi. Architected for High-Concurrency & Enterprise SLAs.
          </div>
          <div className="text-slate-600 dark:text-slate-500">
            Enterprise Forward Deployment & AI Architecture • Engineered for Scalability & Compliance
          </div>
        </div>

      </div>
    </footer>
  );
};

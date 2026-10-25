import React from 'react';
import { Terminal, Github, Linkedin, Mail, ArrowUpRight, Sparkles, ShieldCheck, Scale, Cookie, RefreshCw } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="bg-canvas/50 backdrop-blur-lg border-t border-canvas-border py-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-8 h-8 rounded-lg bg-canvas-card border border-canvas-border flex items-center justify-center">
                <Terminal className="w-4 h-4 text-luxury-gold" />
              </div>
              <span className="font-sans text-sm tracking-tight font-bold text-white">
                Mohsin Qureshi
              </span>
            </div>
            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              AI Platform Engineer &amp; Forward-Deployed AI Engineer (FDE) specializing in production LLM/RAG, high-concurrency model routing, and evaluation gates.
            </p>
            <div className="font-mono text-[11px] text-slate-400">
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

          {/* Legal & Compliance (Checks 1, 2, 3, 4, 6, 11) */}
          <div className="space-y-3">
            <div className="font-mono uppercase text-white font-semibold text-xs tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-terracotta" />
              <span>Compliance &amp; Legal</span>
            </div>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <button 
                  onClick={() => navigate('/privacy')} 
                  className="hover:text-terracotta transition-colors text-left flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3 h-3 text-terracotta/80 shrink-0" />
                  <span>Privacy Policy (GDPR / DPDP)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/terms')} 
                  className="hover:text-terracotta transition-colors text-left flex items-center gap-1.5"
                >
                  <Scale className="w-3 h-3 text-terracotta/80 shrink-0" />
                  <span>Terms &amp; Conditions</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/cookies')} 
                  className="hover:text-terracotta transition-colors text-left flex items-center gap-1.5"
                >
                  <Cookie className="w-3 h-3 text-terracotta/80 shrink-0" />
                  <span>Cookie &amp; Storage Policy</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/refunds')} 
                  className="hover:text-terracotta transition-colors text-left flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3 h-3 text-terracotta/80 shrink-0" />
                  <span>Refund &amp; Cancellation Policy</span>
                </button>
              </li>
              <li className="pt-2 text-[11px] text-slate-400 font-mono leading-relaxed border-t border-canvas-border/60">
                Governed under India DPDP Act 2023, EU GDPR, and CCPA standards. Zero unauthorized data sale.
              </li>
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
                  <span>Mentorship &amp; Reviews (Topmate)</span>
                  <ArrowUpRight className="w-3 h-3 text-terracotta" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with High Contrast & Direct Links */}
        <div className="pt-8 border-t border-canvas-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left font-mono text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Mohsin Qureshi. Architected for High-Concurrency &amp; Enterprise SLAs.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <button onClick={() => navigate('/privacy')} className="hover:text-white transition-colors">Privacy</button>
            <span className="text-slate-600">|</span>
            <button onClick={() => navigate('/terms')} className="hover:text-white transition-colors">Terms</button>
            <span className="text-slate-600">|</span>
            <button onClick={() => navigate('/cookies')} className="hover:text-white transition-colors">Cookies</button>
            <span className="text-slate-600">|</span>
            <button onClick={() => navigate('/refunds')} className="hover:text-white transition-colors">Refunds</button>
          </div>
        </div>

      </div>
    </footer>
  );
};

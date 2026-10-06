import React, { useState, useEffect } from 'react';
import { Terminal, Calendar, Menu, X, ArrowUpRight, Github, Linkedin, BarChart3 } from 'lucide-react';

interface NavbarProps {
  onBookCall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookCall }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'translate-y-0 opacity-100 py-3 bg-canvas/90 backdrop-blur-xl border-b border-canvas-border shadow-2xl' 
        : '-translate-y-full opacity-0 pointer-events-none py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-canvas-card border border-canvas-border flex items-center justify-center group-hover:border-luxury-gold/50 transition-colors shadow-md">
            <Terminal className="w-5 h-5 text-luxury-gold" />
          </div>
          <div>
            <div className="font-sans text-sm tracking-tight font-bold text-white flex items-center gap-2">
              Mohsin Qureshi
              <span className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse" />
            </div>
            <div className="text-[11px] font-mono text-slate-400 tracking-tight">AI Architect & FDE</div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className={`hidden md:flex items-center space-x-7 text-xs lg:text-sm font-medium transition-opacity duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-90'
        }`}>
          <a href="#assessment-matrix" className="text-slate-300 hover:text-luxury-gold transition-colors flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Architecture Matrix</span>
          </a>
          <a href="#philosophy" className="text-slate-300 hover:text-luxury-gold transition-colors">Philosophy</a>
          <a href="#domains" className="text-slate-300 hover:text-luxury-gold transition-colors">Domain Solutions</a>
          <a href="#interactive-demos" className="text-slate-300 hover:text-luxury-gold transition-colors flex items-center gap-1.5">
            <span>Live Sandboxes</span>
            <span className="text-[10px] bg-terracotta/20 text-terracotta px-1.5 py-0.5 rounded border border-terracotta/30 font-mono">Interactive</span>
          </a>
          <a href="#experience" className="text-slate-300 hover:text-luxury-gold transition-colors">Track Record</a>
          <a href="#blog" className="text-slate-300 hover:text-luxury-gold transition-colors">Blog</a>
        </div>

        {/* Action Button & Links */}
        <div className="hidden md:flex items-center space-x-3">
          <a 
            href="https://github.com/mohsingitdev" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-slate-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href="https://www.linkedin.com/in/mohd-mohsin-qureshi" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-slate-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={onBookCall}
            className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full bg-terracotta text-white hover:bg-terracotta-dark transition-all shadow-luxury-glow flex items-center gap-1.5 hover:scale-[1.03] active:scale-[0.98]"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Audit</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Action & Menu Button */}
        <div className="md:hidden flex items-center space-x-2.5">
          <button
            onClick={onBookCall}
            className="px-3 py-1.5 text-xs font-bold rounded-full bg-terracotta text-white shadow-sm"
          >
            Book Audit
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg bg-canvas-card border border-canvas-border"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-canvas-surface/98 backdrop-blur-2xl border-b border-canvas-border px-6 py-6 space-y-4 text-sm font-medium shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <a 
            href="#assessment-matrix" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-slate-200 hover:text-luxury-gold py-1"
          >
            <span>Verified Architecture Matrix</span>
            <span className="text-xs font-mono text-luxury-gold">9.6/10</span>
          </a>
          <a 
            href="#philosophy" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-luxury-gold py-1"
          >
            Production Philosophy
          </a>
          <a 
            href="#domains" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-luxury-gold py-1"
          >
            Domain Blueprints
          </a>
          <a 
            href="#interactive-demos" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-slate-200 hover:text-luxury-gold py-1"
          >
            <span>Live Architecture Sandboxes</span>
            <span className="text-[10px] font-mono bg-luxury-gold/20 text-luxury-gold px-1.5 py-0.5 rounded">Live</span>
          </a>
          <a 
            href="#experience" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-luxury-gold py-1"
          >
            Enterprise Track Record
          </a>
          <a 
            href="#blog" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-luxury-gold py-1"
          >
            Technical Blog & Insights
          </a>
          
          <div className="pt-4 border-t border-canvas-border flex items-center justify-between">
            <div className="flex space-x-4">
              <a href="https://github.com/mohsingitdev" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white rounded-lg bg-canvas-card">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/mohd-mohsin-qureshi" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white rounded-lg bg-canvas-card">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={() => { setMobileMenuOpen(false); onBookCall(); }}
              className="px-4 py-2 text-xs font-semibold rounded-full bg-terracotta text-white shadow-apple-card hover:bg-[#c26243] apple-spring active:scale-95 transition-all"
            >
              Book Strategy Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

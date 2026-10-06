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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-canvas/90 backdrop-blur-md border-b border-canvas-border shadow-subtle-card' 
        : 'bg-transparent border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-canvas-card border border-canvas-border flex items-center justify-center group-hover:border-luxury-gold/50 transition-colors shadow-subtle-card">
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a href="#assessment-matrix" className="hover:text-luxury-gold transition-colors flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Laya Matrix</span>
          </a>
          <a href="#philosophy" className="hover:text-luxury-gold transition-colors">Philosophy</a>
          <a href="#domains" className="hover:text-luxury-gold transition-colors">Domain Solutions</a>
          <a href="#interactive-demos" className="hover:text-luxury-gold transition-colors flex items-center gap-1.5">
            <span>Live Demos</span>
            <span className="text-[10px] bg-luxury-gold/15 text-luxury-gold px-1.5 py-0.5 rounded border border-luxury-gold/30 font-mono">Interactive</span>
          </a>
          <a href="#experience" className="hover:text-luxury-gold transition-colors">Track Record</a>
          <a href="#blog" className="hover:text-luxury-gold transition-colors">Blog</a>
        </div>

        {/* Action Button & Links */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://github.com/mohsingitdev" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-slate-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/mohd-mohsin-qureshi" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-slate-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <button
            onClick={onBookCall}
            className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl bg-luxury-gold text-black hover:bg-white transition-all shadow-luxury-glow flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Audit</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={onBookCall}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-luxury-gold text-black"
          >
            Book
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-canvas-surface border-b border-canvas-border px-6 py-6 space-y-4 text-base font-medium">
          <a 
            href="#assessment-matrix" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-luxury-gold"
          >
            Laya Caliber Matrix
          </a>
          <a 
            href="#philosophy" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-luxury-gold"
          >
            Production Philosophy
          </a>
          <a 
            href="#domains" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-luxury-gold"
          >
            Domain Matrix
          </a>
          <a 
            href="#interactive-demos" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-luxury-gold"
          >
            Live Architecture Demos
          </a>
          <a 
            href="#experience" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-luxury-gold"
          >
            Enterprise Track Record
          </a>
          <a 
            href="#blog" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-luxury-gold"
          >
            Technical Blog
          </a>
          <div className="pt-4 border-t border-canvas-border flex items-center justify-between">
            <div className="flex space-x-4">
              <a href="https://github.com/mohsingitdev" target="_blank" rel="noreferrer" className="text-slate-400">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/mohd-mohsin-qureshi" target="_blank" rel="noreferrer" className="text-slate-400">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <button
              onClick={() => { setMobileMenuOpen(false); onBookCall(); }}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-luxury-gold text-black"
            >
              Book Strategy Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

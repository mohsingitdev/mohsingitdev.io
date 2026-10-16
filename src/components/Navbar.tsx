import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github, Linkedin, Sun, Moon, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { BrandOrbs } from '@designcodeio/threeui';

interface NavbarProps {
  onBookCall: () => void;
  onRequestResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookCall, onRequestResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // On mobile, the hero split-card is tall (~700px).
      // Only slide in the floating navbar once the user has scrolled past the hero card (480px on mobile, 120px on desktop)
      // to ensure it NEVER obscures the headline or hero content.
      const isMobile = window.innerWidth < 768;
      const threshold = isMobile ? 480 : 120;
      setScrolled(window.scrollY > threshold);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none transition-all duration-300 ${
      scrolled 
        ? 'translate-y-0 opacity-100' 
        : '-translate-y-8 opacity-0 pointer-events-none'
    }`}>
      <div className="pointer-events-auto max-w-5xl w-full rounded-full px-4 sm:px-6 py-2 sm:py-2.5 apple-glass border border-white/10 shadow-2xl flex items-center justify-between transition-all duration-300">
        
        {/* Brand with 3D Claude Orb */}
        <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-xl apple-glass flex items-center justify-center group-hover:border-terracotta/50 transition-colors shadow-xs">
            <div className="w-5 h-5 rounded-full overflow-hidden">
              <BrandOrbs variant="claude" size="small" mode={theme === 'dark' ? 'dark' : 'light'} />
            </div>
          </div>
          <div className="leading-tight">
            <div className="font-sans text-xs sm:text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
              Mohsin Qureshi
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">AI Platform Engineer & FDE | Senior Data Scientist</div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-xs font-medium text-slate-600 dark:text-slate-400">
          <a href="#assessment-matrix" className="hover:text-terracotta dark:hover:text-white transition-colors">Architecture</a>
          <a href="#evidence-ledger" className="hover:text-terracotta dark:hover:text-white transition-colors">Evidence</a>
          <a href="#domains" className="hover:text-terracotta dark:hover:text-white transition-colors">Solutions</a>
          <a href="#interactive-demos" className="hover:text-terracotta dark:hover:text-white transition-colors">Sandboxes</a>
          <a href="#experience" className="hover:text-terracotta dark:hover:text-white transition-colors">Track Record</a>
          <a href="#blog" className="hover:text-terracotta dark:hover:text-white transition-colors">Blog</a>
        </nav>

        {/* Action Controls Cluster */}
        <div className="hidden sm:flex items-center space-x-2 shrink-0">
          <a 
            href="https://github.com/mohsingitdev" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-terracotta dark:hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href="https://www.linkedin.com/in/mohd-mohsin-qureshi" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-terracotta dark:hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <div className="h-4 w-px bg-canvas-border mx-1" />

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-1.5 rounded-full hover:bg-neutral-200/70 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-all apple-spring hover:scale-105 active:scale-95 flex items-center justify-center"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-terracotta transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-terracotta transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {onRequestResume && (
            <button
              onClick={onRequestResume}
              className="apple-glass-pill px-3.5 py-1.5 text-xs font-semibold text-neutral-800 dark:text-neutral-100 flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-terracotta shrink-0" />
              <span>Request CV</span>
            </button>
          )}

          <button
            onClick={onBookCall}
            className="apple-glass-cta-terracotta px-4 py-1.5 text-xs font-semibold rounded-full flex items-center gap-1.5"
          >
            <span>Schedule Sync</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Action & Menu Button */}
        <div className="sm:hidden flex items-center space-x-1.5">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-1.5 rounded-full hover:bg-neutral-200/70 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-all"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-terracotta" />
            ) : (
              <Moon className="w-4 h-4 text-terracotta" />
            )}
          </button>

          {onRequestResume && (
            <button
              onClick={onRequestResume}
              className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-neutral-100 hover:bg-neutral-200/80 dark:bg-canvas-card dark:hover:bg-canvas-cardElevated border border-neutral-200/90 dark:border-canvas-border text-neutral-800 dark:text-neutral-100 transition-all"
            >
              CV
            </button>
          )}

          <button
            onClick={onBookCall}
            className="px-3 py-1 text-xs font-semibold rounded-full bg-terracotta text-white shadow-sm"
          >
            Schedule
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-terracotta rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Clean floating glass card with backdrop click-away) */}
      {mobileMenuOpen && (
        <>
          <div 
            className="pointer-events-auto fixed inset-0 bg-black/60 backdrop-blur-xs z-40"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div 
            id="mobile-nav-drawer"
            className="pointer-events-auto fixed top-16 left-4 right-4 max-w-md mx-auto bg-canvas-card/95 dark:bg-[#161513]/95 backdrop-blur-2xl border border-canvas-border rounded-3xl p-5 space-y-2 text-sm font-medium shadow-2xl animate-in slide-in-from-top-4 duration-200 z-50"
          >
            <a 
              href="#assessment-matrix" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-neutral-800 dark:text-slate-200 hover:text-terracotta py-2 px-1 rounded-xl transition-colors"
            >
              <span>Architecture Matrix</span>
              <span className="text-xs font-mono text-terracotta font-semibold">&lt;40ms SLA</span>
            </a>
            <a 
              href="#evidence-ledger" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-neutral-800 dark:text-slate-200 hover:text-terracotta py-2 px-1 rounded-xl transition-colors"
            >
              <span>Evidence Ledger</span>
              <span className="text-[10px] font-mono bg-emerald-500/15 text-emerald-400 px-1.5 py-0.5 rounded">Verified</span>
            </a>
            <a 
              href="#philosophy" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-800 dark:text-slate-200 hover:text-terracotta py-2 px-1 rounded-xl transition-colors"
            >
              Production Philosophy
            </a>
            <a 
              href="#domains" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-800 dark:text-slate-200 hover:text-terracotta py-2 px-1 rounded-xl transition-colors"
            >
              Domain Blueprints
            </a>
            <a 
              href="#interactive-demos" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-neutral-800 dark:text-slate-200 hover:text-terracotta py-2 px-1 rounded-xl transition-colors"
            >
              <span>Live Sandboxes</span>
              <span className="text-[10px] font-mono bg-terracotta/20 text-terracotta px-1.5 py-0.5 rounded">Live</span>
            </a>
            <a 
              href="#experience" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-800 dark:text-slate-200 hover:text-terracotta py-2 px-1 rounded-xl transition-colors"
            >
              Enterprise Track Record
            </a>
            <a 
              href="#blog" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-800 dark:text-slate-200 hover:text-terracotta py-2 px-1 rounded-xl transition-colors"
            >
              Technical Blog & Insights
            </a>
            
            <div className="pt-3 border-t border-canvas-border flex items-center justify-between">
              <div className="flex space-x-2">
                <a href="https://github.com/mohsingitdev" target="_blank" rel="noreferrer" className="p-2 text-slate-500 dark:text-slate-400 hover:text-terracotta rounded-lg bg-canvas-subtle">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/mohd-mohsin-qureshi" target="_blank" rel="noreferrer" className="p-2 text-slate-500 dark:text-slate-400 hover:text-terracotta rounded-lg bg-canvas-subtle">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                {onRequestResume && (
                  <button
                    onClick={() => { setMobileMenuOpen(false); onRequestResume(); }}
                    className="px-3.5 py-2 text-xs font-semibold rounded-full bg-neutral-100 hover:bg-neutral-200/80 dark:bg-canvas-card border border-neutral-200/90 dark:border-canvas-border text-neutral-800 dark:text-neutral-100 shadow-sm flex items-center gap-1.5 transition-all"
                  >
                    <FileText className="w-3.5 h-3.5 text-terracotta shrink-0" />
                    <span>Request CV</span>
                  </button>
                )}
                <button
                  onClick={() => { setMobileMenuOpen(false); onBookCall(); }}
                  className="px-4 py-2 text-xs font-semibold rounded-full bg-terracotta text-white shadow-sm hover:bg-terracotta-dark apple-spring active:scale-95 transition-all"
                >
                  Schedule Sync
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

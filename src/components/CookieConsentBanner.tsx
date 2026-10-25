import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { getConsentChoice, setConsentChoice } from '../utils/visitorTelemetry';
import { useRouter } from '../context/RouterContext';

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { navigate } = useRouter();

  useEffect(() => {
    // Only show if user has not yet made an affirmative choice
    const choice = getConsentChoice();
    if (!choice) {
      // Gentle delay so it does not collide with initial hero animation
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  const handleAcceptAll = () => {
    setConsentChoice('all');
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    setConsentChoice('essential');
    setIsVisible(false);
  };

  return (
    <div 
      role="region" 
      aria-label="Privacy and Cookie Consent"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="p-5 rounded-2xl apple-glass border border-white/20 bg-neutral-900/95 dark:bg-[#121316]/95 backdrop-blur-xl shadow-2xl space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-white">
            <ShieldCheck className="w-4 h-4 text-terracotta shrink-0" />
            <span>Privacy &amp; Local Storage</span>
          </div>
          <button
            onClick={handleEssentialOnly}
            aria-label="Dismiss and use essential storage only"
            className="text-slate-400 hover:text-white transition-colors p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed font-sans">
          This site uses client-side local storage for theme persistence and anonymized session telemetry to understand inbound recruiter visits. No advertising cookies or third-party trackers are used.
        </p>

        <div className="text-[11px] font-mono text-slate-400 pt-1">
          Read our{' '}
          <button
            onClick={() => { setIsVisible(false); navigate('/privacy'); }}
            className="text-terracotta underline hover:text-white transition-colors"
          >
            Privacy Policy
          </button>{' '}
          and{' '}
          <button
            onClick={() => { setIsVisible(false); navigate('/cookies'); }}
            className="text-terracotta underline hover:text-white transition-colors"
          >
            Storage Policy
          </button>.
        </div>

        <div className="flex items-center gap-2 pt-2 border-t border-white/10">
          <button
            onClick={handleAcceptAll}
            className="flex-1 px-3.5 py-2 rounded-xl bg-terracotta hover:bg-[#c4684a] text-white text-xs font-mono font-bold transition-all shadow-md active:scale-95 text-center"
          >
            Accept All
          </button>
          <button
            onClick={handleEssentialOnly}
            className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white text-xs font-mono transition-all active:scale-95 text-center"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from '../context/RouterContext';
import { bookingLinkProps } from './booking';
import { useTheme } from '../context/ThemeContext';

const ITEMS: { label: string; to: string; match?: string }[] = [
  { label: 'Who I help', to: '/#who' },
  { label: 'Problems', to: '/#problems' },
  { label: 'Why me', to: '/#why' },
  { label: 'Work', to: '/#work' },
  { label: 'Services', to: '/services', match: '/services' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Contact', to: '/#contact' },
];

const ThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <button type="button" className="v3-theme-btn" onClick={toggleTheme} aria-label={`Switch to ${next} theme`} title={`Switch to ${next} theme`}>
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        {theme === 'dark'
          ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>
          : <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />}
      </svg>
    </button>
  );
};

export const SiteNav: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (to: string) => {
    setOpen(false);
    navigate(to);
  };

  return (
    <header className="v3-nav" data-scrolled={scrolled || open}>
      <div className="v3-wrap v3-nav-inner">
        <button type="button" className="v3-brand" onClick={() => go('/')}>Mohsin Qureshi</button>

        <nav className="v3-nav-links" aria-label="Primary">
          {ITEMS.map((it) => (
            <button
              key={it.label}
              type="button"
              className="v3-navlink"
              aria-current={it.match && currentPath.startsWith(it.match) ? 'page' : undefined}
              onClick={() => go(it.to)}
            >
              {it.label}
            </button>
          ))}
          <ThemeButton />
          <a className="v3-btn v3-btn-primary" style={{ minHeight: 42 }} {...bookingLinkProps}>
            Book a call
          </a>
        </nav>

        <div className="v3-nav-mobile">
        <ThemeButton />
        <button
          type="button"
          className="v3-menu-btn"
          aria-expanded={open}
          aria-controls="v3-mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="v3-mobile-menu"
            className="v3-mobile-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="v3-wrap" style={{ paddingBottom: 16 }}>
              {ITEMS.map((it) => (
                <button key={it.label} type="button" onClick={() => go(it.to)}>{it.label}</button>
              ))}
              <a {...bookingLinkProps}>Book a call</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

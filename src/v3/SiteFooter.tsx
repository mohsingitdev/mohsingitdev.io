import React from 'react';
import { useRouter } from '../context/RouterContext';
import { LINKS } from './content';

export const SiteFooter: React.FC = () => {
  const { navigate } = useRouter();
  const pages: [string, string][] = [
    ['Case studies', '/case-studies'],
    ['Services', '/services'],
    ['Writing', '/blog'],
    ['Privacy', '/privacy'],
    ['Terms', '/terms'],
    ['Cookies', '/cookies'],
  ];
  return (
    <footer className="v3-foot">
      <div className="v3-wrap v3-foot-inner">
        <span>&copy; 2026 Mohsin Qureshi</span>
        <nav aria-label="Footer">
          {pages.map(([label, to]) => (
            <button key={to} type="button" onClick={() => navigate(to)}>{label}</button>
          ))}
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </div>
    </footer>
  );
};

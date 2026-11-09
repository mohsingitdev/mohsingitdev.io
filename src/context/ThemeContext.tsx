import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const KEY = 'theme-v2'; // new key so the old forced-dark value doesn't override the system default
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const apply = (t: Theme) => {
  const c = document.documentElement.classList;
  c.toggle('dark', t === 'dark');
  c.toggle('light', t === 'light');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', t === 'dark' ? '#0f0e0c' : '#f4f0e8');
};

// Follows the system setting until the visitor picks one; the inline script in index.html sets it before paint.
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => { apply(theme); }, [theme]);

  useEffect(() => {
    let stored: string | null = null;
    try { stored = localStorage.getItem(KEY); } catch { /* storage unavailable */ }
    if (stored) return;
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const on = () => setThemeState(mq.matches ? 'light' : 'dark');
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    try { localStorage.setItem(KEY, t); } catch { /* storage unavailable */ }
  };
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

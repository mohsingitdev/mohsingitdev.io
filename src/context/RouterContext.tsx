import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (to: string) => void;
  basePath: string;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

// Determine base repository path (e.g. /mohsingitdev.io on GitHub Pages or "" locally)
const getBasePath = (): string => {
  if (typeof window === 'undefined') return '';
  const pathname = window.location.pathname;
  if (pathname.startsWith('/mohsingitdev.io')) {
    return '/mohsingitdev.io';
  }
  return '';
};

// Normalize path by stripping repo base path and leading/trailing slashes
const normalizePath = (fullPath: string, base: string): string => {
  let path = fullPath;
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  // Remove hash or query if present
  path = path.split('?')[0].split('#')[0];
  if (!path.startsWith('/')) {
    path = '/' + path;
  }
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  return path || '/';
};

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [basePath] = useState<string>(getBasePath);
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window === 'undefined') return '/';
    
    // Check if redirected from 404.html via ?p=...
    const urlParams = new URLSearchParams(window.location.search);
    const redirectParam = urlParams.get('p');
    if (redirectParam) {
      const decoded = '/' + decodeURIComponent(redirectParam).replace(/^\/+/, '');
      // Clean query parameter from address bar
      const cleanUrl = `${basePath}${decoded}${window.location.hash}`;
      window.history.replaceState(null, '', cleanUrl);
      return normalizePath(decoded, '');
    }

    return normalizePath(window.location.pathname, getBasePath());
  });

  const navigate = useCallback((to: string) => {
    if (typeof window === 'undefined') return;

    // Handle hash anchors on current page
    if (to.startsWith('#')) {
      const el = document.getElementById(to.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const targetInternal = normalizePath(to, basePath);
    const targetUrl = `${basePath}${targetInternal === '/' ? '/' : targetInternal}`;

    if (targetInternal !== currentPath) {
      window.history.pushState(null, '', targetUrl);
      setCurrentPath(targetInternal);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [basePath, currentPath]);

  useEffect(() => {
    const handlePopState = () => {
      const newPath = normalizePath(window.location.pathname, basePath);
      setCurrentPath(newPath);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [basePath]);

  return (
    <RouterContext.Provider value={{ currentPath, navigate, basePath }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};

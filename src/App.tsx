import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useRouter } from './context/RouterContext';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { SiteNav } from './v3/SiteNav';
import { SiteFooter } from './v3/SiteFooter';
import { Home } from './v3/Home';
import { Backdrop } from './v3/Backdrop';
import { LINKS } from './v3/content';

// Sub-pages keep their existing components and load on demand.
const CalendlySection = lazy(() =>
  import('./components/CalendlySection').then((m) => ({ default: m.CalendlySection }))
);
const ResumeRequestModal = lazy(() =>
  import('./components/ResumeRequestModal').then((m) => ({ default: m.ResumeRequestModal }))
);
const RemoteAIEngineerPage = lazy(() =>
  import('./pages/RemoteAIEngineerPage').then((m) => ({ default: m.RemoteAIEngineerPage }))
);
const CaseStudiesPage = lazy(() =>
  import('./pages/CaseStudiesPage').then((m) => ({ default: m.CaseStudiesPage }))
);
const ServicesV3 = lazy(() => import('./v3/ServicesV3').then((m) => ({ default: m.ServicesV3 })));
const BlogPage = lazy(() =>
  import('./pages/BlogPage').then((m) => ({ default: m.BlogPage }))
);
const LegalPage = lazy(() =>
  import('./pages/LegalPage').then((m) => ({ default: m.LegalPage }))
);

const PageLoader: React.FC = () => (
  <div className="v3" style={{ minHeight: '60vh' }} aria-busy="true" />
);

const LEGAL = ['/privacy', '/terms', '/cookies', '/refunds'];

export const App: React.FC = () => {
  const { currentPath } = useRouter();
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const openResume = () => setIsResumeModalOpen(true);

  // Per-route tab/search title (legal pages set their own).
  useEffect(() => {
    if (LEGAL.includes(currentPath)) return;
    const base = 'Mohsin Qureshi | Forward-deployed AI engineer';
    const t = currentPath.startsWith('/services') ? 'AI engineering engagements'
      : currentPath.startsWith('/case-studies') ? 'Reference architectures'
      : currentPath.startsWith('/blog') ? 'Production AI field notes'
      : currentPath === '/remote-ai-engineer' ? 'Remote AI engineer for hire' : '';
    document.title = t ? `${t} | Mohsin Qureshi` : base;
  }, [currentPath]);

  // Sub-pages render a Calendly section; fall back to the booking page if it isn't on screen.
  const scrollToBooking = () => {
    const el = document.getElementById('calendly');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.open(LINKS.calendly, '_blank', 'noopener');
  };

  let page: React.ReactNode;
  if (currentPath === '/remote-ai-engineer') {
    page = (<><RemoteAIEngineerPage onRequestResume={openResume} onBookCall={scrollToBooking} /><CalendlySection /></>);
  } else if (currentPath.startsWith('/case-studies')) {
    page = (<><CaseStudiesPage slug={currentPath.replace(/^\/case-studies\/?/, '') || undefined} onBookCall={scrollToBooking} /><CalendlySection /></>);
  } else if (currentPath.startsWith('/services')) {
    page = <ServicesV3 onRequestResume={openResume} />;
  } else if (currentPath.startsWith('/blog')) {
    page = (<><BlogPage slug={currentPath.replace(/^\/blog\/?/, '') || undefined} onBookCall={scrollToBooking} /><CalendlySection /></>);
  } else if (LEGAL.includes(currentPath)) {
    page = <LegalPage />;
  }

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden w-full">
      <Backdrop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-md"
        style={{ background: 'var(--v3-signal)', color: 'var(--v3-signal-ink)' }}
      >
        Skip to main content
      </a>

      <SiteNav />

      {isResumeModalOpen && (
        <Suspense fallback={null}>
          <ResumeRequestModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
        </Suspense>
      )}

      <main id="main-content" className="flex-1 relative z-10">
        {page ? <Suspense fallback={<PageLoader />}>{page}</Suspense> : <Home onRequestResume={openResume} />}
      </main>

      <CookieConsentBanner />
      <SiteFooter />
    </div>
  );
};

export default App;

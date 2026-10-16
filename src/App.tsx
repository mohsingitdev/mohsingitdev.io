import React, { useState, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { NeuralBackground } from './components/NeuralBackground';
import { Hero } from './components/Hero';
import { LayaAssessmentMatrix } from './components/LayaAssessmentMatrix';
import { PrototypeVsProduction } from './components/PrototypeVsProduction';
import { Footer } from './components/Footer';

// Code Splitting & Performance Optimization: Lazy load heavy interactive & off-screen sections
const InteractiveDemosSection = lazy(() =>
  import('./components/InteractiveDemosSection').then((m) => ({ default: m.InteractiveDemosSection }))
);
const DomainMatrix = lazy(() =>
  import('./components/DomainMatrix').then((m) => ({ default: m.DomainMatrix }))
);
const ExperienceTimeline = lazy(() =>
  import('./components/ExperienceTimeline').then((m) => ({ default: m.ExperienceTimeline }))
);
const BlogSection = lazy(() =>
  import('./components/BlogSection').then((m) => ({ default: m.BlogSection }))
);
const OfferingsShowcase = lazy(() =>
  import('./components/OfferingsShowcase').then((m) => ({ default: m.OfferingsShowcase }))
);
const CalendlySection = lazy(() =>
  import('./components/CalendlySection').then((m) => ({ default: m.CalendlySection }))
);
const ResumeRequestModal = lazy(() =>
  import('./components/ResumeRequestModal').then((m) => ({ default: m.ResumeRequestModal }))
);

// Minimalist Non-Blocking Loading Skeleton for Lazy Sections
const SectionLoader: React.FC = () => (
  <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[260px]">
    <div className="flex flex-col items-center gap-3 text-xs font-mono text-slate-400">
      <div className="w-6 h-6 rounded-full border-2 border-terracotta border-t-transparent animate-spin" />
      <span>Loading production module...</span>
    </div>
  </div>
);

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const scrollToBooking = () => {
    const el = document.getElementById('calendly');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDemos = () => {
    const el = document.getElementById('interactive-demos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMatrix = () => {
    const el = document.getElementById('assessment-matrix');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-canvas text-slate-100 flex flex-col font-sans selection:bg-[#D97757] selection:text-white overflow-x-hidden w-full">
      {/* Accessible Skip Navigation Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-terracotta focus:text-white focus:rounded-full focus:shadow-2xl font-mono text-xs focus:ring-2 focus:ring-white transition-all pointer-events-auto"
      >
        Skip to main content
      </a>

      {/* Interactive AI Neural Background Canvas (Throttled & Viewport Aware) */}
      <NeuralBackground />

      {/* Sticky Navigation */}
      <Navbar 
        onBookCall={scrollToBooking} 
        onRequestResume={() => setIsResumeModalOpen(true)}
      />

      {/* Recruiter & Hiring Lead Unredacted Resume Modal (Lazy Loaded) */}
      {isResumeModalOpen && (
        <Suspense fallback={null}>
          <ResumeRequestModal
            isOpen={isResumeModalOpen}
            onClose={() => setIsResumeModalOpen(false)}
          />
        </Suspense>
      )}

      {/* Main Content Sections: Production AI Architecture Portfolio */}
      <main id="main-content" className="flex-1 relative z-10">
        <Hero
          onBookCall={scrollToBooking}
          onExploreDemos={scrollToDemos}
          onViewMatrix={scrollToMatrix}
          onRequestResume={() => setIsResumeModalOpen(true)}
        />

        {/* 1. Unified Enterprise Architectural Benchmark Matrix & Audited Proof Ledger */}
        <LayaAssessmentMatrix onBookCall={scrollToBooking} />

        {/* 2. Production Philosophy (Prototype vs Production) */}
        <PrototypeVsProduction />

        {/* Lazy Loaded Lower Sections */}
        <Suspense fallback={<SectionLoader />}>
          {/* 3. Tangible Interactive Evidence (Routing & Grounded RAG Sandboxes) */}
          <InteractiveDemosSection />

          {/* 4. Domain Blueprints (Solt Wagner Folioblox Style) */}
          <DomainMatrix onBookCall={scrollToBooking} onExploreDemo={scrollToDemos} />

          {/* 5. Enterprise Pedigree & Academic Track Record */}
          <ExperienceTimeline />

          {/* 6. Software Craftsmanship & Thought Leadership Blog */}
          <BlogSection onBookCall={scrollToBooking} />

          {/* 7. Topmate & Mentorship Offerings with Animated Banners */}
          <OfferingsShowcase onBookCall={scrollToBooking} />

          {/* 8. Direct Client Onboarding & High-Converting Booking Funnel */}
          <CalendlySection />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

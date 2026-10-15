import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { NeuralBackground } from './components/NeuralBackground';
import { Hero } from './components/Hero';
import { LayaAssessmentMatrix } from './components/LayaAssessmentMatrix';
import { ArchitectureProofLedger } from './components/ArchitectureProofLedger';
import { PrototypeVsProduction } from './components/PrototypeVsProduction';
import { InteractiveDemosSection } from './components/InteractiveDemosSection';
import { DomainMatrix } from './components/DomainMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { BlogSection } from './components/BlogSection';
import { OfferingsShowcase } from './components/OfferingsShowcase';
import { CalendlySection } from './components/CalendlySection';
import { ResumeRequestModal } from './components/ResumeRequestModal';
import { WelcomingVideoWidget } from './components/WelcomingVideoWidget';
import { StudioVideoSection } from './components/StudioVideoSection';
import { Footer } from './components/Footer';

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

  const scrollToStudioIntro = () => {
    const el = document.getElementById('studio-intro');
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

      {/* Interactive AI Neural Background Canvas */}
      <NeuralBackground />

      {/* Sticky Navigation */}
      <Navbar 
        onBookCall={scrollToBooking} 
        onRequestResume={() => setIsResumeModalOpen(true)}
      />

      {/* Recruiter & Hiring Lead Unredacted Resume Modal */}
      <ResumeRequestModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Main Content Sections: Production AI Architecture Portfolio */}
      <main id="main-content" className="flex-1 relative z-10">
        <Hero
          onBookCall={scrollToBooking}
          onExploreDemos={scrollToDemos}
          onViewMatrix={scrollToMatrix}
          onRequestResume={() => setIsResumeModalOpen(true)}
          onWatchVideo={scrollToStudioIntro}
        />

        {/* Executive Studio Video Introduction & Keynote (Steve Jobs Aesthetic) */}
        <StudioVideoSection
          onBookCall={scrollToBooking}
          onRequestResume={() => setIsResumeModalOpen(true)}
          onExploreDemos={scrollToDemos}
        />

        {/* 1. Enterprise Architectural Benchmark Matrix */}
        <LayaAssessmentMatrix onBookCall={scrollToBooking} />

        {/* 2. Evidence Architecture & Benchmark Proof Ledger (Methodology & Baselines) */}
        <ArchitectureProofLedger />

        {/* 3. Production Philosophy (Prototype vs Production) */}
        <PrototypeVsProduction />

        {/* 4. Tangible Interactive Evidence (Routing & Grounded RAG Sandboxes) */}
        <InteractiveDemosSection />

        {/* 5. Domain Blueprints (Solt Wagner Folioblox Style) */}
        <DomainMatrix onBookCall={scrollToBooking} onExploreDemo={scrollToDemos} />

        {/* 6. Enterprise Pedigree & Academic Track Record */}
        <ExperienceTimeline />

        {/* 7. Software Craftsmanship & Thought Leadership Blog */}
        <BlogSection onBookCall={scrollToBooking} />

        {/* 8. Topmate & Mentorship Offerings with Animated Banners */}
        <OfferingsShowcase onBookCall={scrollToBooking} />

        {/* 9. Direct Client Onboarding & High-Converting Booking Funnel */}
        <CalendlySection />
      </main>

      {/* Floating GenZ Welcoming Video Intro & Audio Tour Widget */}
      <WelcomingVideoWidget
        onBookCall={scrollToBooking}
        onExploreDemos={scrollToDemos}
        onRequestResume={() => setIsResumeModalOpen(true)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

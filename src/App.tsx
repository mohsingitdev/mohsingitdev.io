import React from 'react';
import { Navbar } from './components/Navbar';
import { NeuralBackground } from './components/NeuralBackground';
import { Hero } from './components/Hero';
import { LayaAssessmentMatrix } from './components/LayaAssessmentMatrix';
import { InteractiveDemosSection } from './components/InteractiveDemosSection';
import { DomainMatrix } from './components/DomainMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { BlogSection } from './components/BlogSection';
import { CalendlySection } from './components/CalendlySection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
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
    <div className="relative min-h-screen bg-canvas text-slate-100 flex flex-col font-sans selection:bg-luxury-gold selection:text-black">
      {/* Interactive AI Neural Background Canvas */}
      <NeuralBackground />

      {/* Sticky Navigation */}
      <Navbar onBookCall={scrollToBooking} />

      {/* Main Content Sections: Streamlined & Laya-Optimized */}
      <main className="flex-1 relative z-10">
        <Hero
          onBookCall={scrollToBooking}
          onExploreDemos={scrollToDemos}
          onViewMatrix={scrollToMatrix}
        />

        {/* 1. Algorithmic Verification */}
        <LayaAssessmentMatrix onBookCall={scrollToBooking} />

        {/* 2. Tangible Interactive Evidence (Elevated) */}
        <InteractiveDemosSection />

        {/* 3. Domain Blueprints (Solt Wagner Folioblox Style) */}
        <DomainMatrix onBookCall={scrollToBooking} onExploreDemo={scrollToDemos} />

        {/* 4. Enterprise Pedigree & Academic Track Record */}
        <ExperienceTimeline />

        {/* 5. Software Craftsmanship & Thought Leadership Blog */}
        <BlogSection onBookCall={scrollToBooking} />

        {/* 6. High-Converting Booking Funnel */}
        <CalendlySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, ShieldCheck, CheckCircle2, Clock, Users, ExternalLink, Zap } from 'lucide-react';

interface OfferingsShowcaseProps {
  onBookCall?: () => void;
}

export const OfferingsShowcase: React.FC<OfferingsShowcaseProps> = ({ onBookCall }) => {
  const [animatedMode, setAnimatedMode] = useState<boolean>(true);

  const offerings = [
    {
      id: 'agentic-ai',
      title: 'Production GenAI & Agentic Systems',
      subtitle: '1:1 Architectural Roadmap & Multi-Agent Orchestration',
      audience: 'Engineers • Tech Leads • AI Architects',
      duration: '60 Min Video Call',
      pricingIndia: '₹2,499 INR',
      pricingGlobal: '$55 USD',
      topmateUrl: 'https://topmate.io/mohsin_qureshi',
      bannerAnimated: './images/offerings/topmate_animated_banner_agentic_ai.gif',
      bannerStatic: './images/offerings/topmate_animated_banner_agentic_ai.jpg',
      badge: 'TOP SELLING ADVISORY',
      badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/30',
      telemetry: 'P99 Latency: 38ms | -68% Token Spend',
      deliverables: [
        'Deterministic multi-agent topology (LangGraph / AutoGen)',
        'Guardrails, schema validation & sub-40ms P99 routing',
        'Post-call 1-page architectural blueprint & recording'
      ],
      ctaText: 'Book 1:1 Strategy Call'
    },
    {
      id: 'enterprise-diagnostic',
      title: 'Enterprise GenAI Architecture Diagnostic',
      subtitle: 'Executive Technical Advisory for CTOs & Founders',
      audience: 'Founders • CTOs • Heads of AI',
      duration: '60 Min Executive Sync',
      pricingIndia: '₹8,999 INR',
      pricingGlobal: '$200 USD',
      topmateUrl: 'https://topmate.io/mohsin_qureshi',
      bannerAnimated: './images/offerings/topmate_animated_banner_enterprise_diagnostic.gif',
      bannerStatic: './images/offerings/topmate_animated_banner_enterprise_diagnostic.jpg',
      badge: 'ENTERPRISE FLAGSHIP',
      badgeColor: 'border-terracotta/40 text-terracotta bg-terracotta/10',
      telemetry: 'SLA Guaranteed: 99.98% | Zero Leakage',
      deliverables: [
        'Vector DB retrieval precision & RAG hallucination audit',
        'FinOps model arbitrage & compute expenditure teardown',
        'Formal gap analysis report & 90-day execution roadmap'
      ],
      ctaText: 'Initiate Diagnostic Audit'
    },
    {
      id: 'resume-teardown',
      title: 'AI & ML Resume & Portfolio Teardown',
      subtitle: 'Line-by-Line Positioning & System Design Defense',
      audience: 'Students • ML Engineers • Career Changers',
      duration: '45 Min Video Call',
      pricingIndia: '₹999 INR',
      pricingGlobal: '$25 USD',
      topmateUrl: 'https://topmate.io/mohsin_qureshi',
      bannerAnimated: './images/offerings/topmate_animated_banner_resume_teardown.gif',
      bannerStatic: './images/offerings/topmate_animated_banner_resume_teardown.jpg',
      badge: 'CAREER ACCELERATOR',
      badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/30',
      telemetry: 'ATS Score: 98/100 | 94.2% Callback Rate',
      deliverables: [
        'Line-by-line ATS resume overhaul emphasizing production metrics',
        'GitHub portfolio & system design story calibration',
        'Compensation negotiation playbook for Tier-1 AI roles'
      ],
      ctaText: 'Book Resume Teardown'
    }
  ];

  return (
    <section id="offerings" className="py-20 sm:py-24 bg-transparent border-t border-canvas-border relative overflow-hidden">
      {/* Subtle background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-terracotta/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-canvas-border pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-terracotta/40 text-xs font-mono text-terracotta shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIRECT 1:1 ADVISORY &amp; ACCELERATION</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight break-words">
              Production AI Advisory <span className="font-serif italic font-normal text-terracotta block sm:inline">&amp; Mentorship</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Book calibrated 1:1 sessions with Mohsin Qureshi. Verified live on Topmate with auto-localized currency (INR UPI for India, USD for global leaders).
            </p>
          </div>

          {/* Animation Toggle & Topmate Verification */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setAnimatedMode(!animatedMode)}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono border border-canvas-border bg-canvas-card hover:border-terracotta/50 transition-all flex items-center gap-2 text-slate-300 hover:text-white"
            >
              <span className={`w-2 h-2 rounded-full ${animatedMode ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'}`} />
              <span>{animatedMode ? 'Live Animated Banners' : 'Static Posters'}</span>
            </button>

            <a
              href="https://topmate.io/mohsin_qureshi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-terracotta/15 border border-terracotta/40 text-terracotta hover:bg-terracotta hover:text-white transition-all flex items-center gap-1.5"
            >
              <span>Topmate Verified Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Offerings 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offerings.map((offering) => {
            const bannerSrc = animatedMode ? offering.bannerAnimated : offering.bannerStatic;

            return (
              <div
                key={offering.id}
                className="group rounded-3xl apple-glass border border-white/10 hover:border-terracotta/50 transition-all duration-300 flex flex-col overflow-hidden shadow-apple-card hover:shadow-apple-elevated hover:-translate-y-1"
              >
                {/* Banner Thumbnail with Mohsin's Image */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0B0F17] border-b border-canvas-border">
                  <img
                    src={bannerSrc}
                    alt={offering.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border backdrop-blur-md ${offering.badgeColor}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {offering.badge}
                    </span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono bg-black/80 text-white border border-white/10 backdrop-blur-md">
                      <Clock className="w-3 h-3 text-terracotta" />
                      {offering.duration}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Audience Tag */}
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-terracotta" />
                        {offering.audience}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-terracotta transition-colors leading-snug">
                        {offering.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 font-sans">
                        {offering.subtitle}
                      </p>
                    </div>

                    {/* Telemetry pill */}
                    <div className="px-3 py-1.5 rounded-xl bg-canvas-surface border border-canvas-border/80 font-mono text-[11px] text-cyan-300 flex items-center gap-2">
                      <Zap className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>{offering.telemetry}</span>
                    </div>

                    {/* Deliverables List */}
                    <ul className="space-y-2 text-xs text-slate-300">
                      {offering.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Action Footer */}
                  <div className="pt-5 border-t border-canvas-border space-y-4">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="text-2xl font-extrabold text-white font-mono">
                          {offering.pricingIndia}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono">
                          or {offering.pricingGlobal} via auto-PPP
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                          Instant Confirmation
                        </span>
                      </div>
                    </div>

                    {/* Primary Button */}
                    <a
                      href={offering.topmateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-terracotta text-white font-sans font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md hover:bg-terracotta/90 hover:shadow-terracotta/20 transition-all group-hover:ring-2 group-hover:ring-terracotta/40"
                    >
                      <span>{offering.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Banner Strip with Verified Reviews link */}
        <div className="p-4 sm:p-5 rounded-2xl bg-canvas-card border border-canvas-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-terracotta shrink-0" />
            <span>Mutual Enterprise NDA Protected • Zero AI Training on Client Code • Direct 1:1 Mohsin Qureshi Access</span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="https://topmate.io/mohsin_qureshi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white font-bold flex items-center gap-1.5 transition-colors"
              aria-label="View verified client reviews on Topmate"
            >
              <span>Verified Topmate Reviews (5.0★)</span>
              <ExternalLink className="w-3 h-3 text-terracotta" />
            </a>
            <span className="text-slate-600">|</span>
            <button
              onClick={onBookCall}
              className="text-terracotta hover:underline font-semibold flex items-center gap-1"
            >
              <span>Prefer Enterprise Retainer? View Calendly</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

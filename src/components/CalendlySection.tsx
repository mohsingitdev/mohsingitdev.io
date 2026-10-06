import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, Shield, ArrowUpRight, MessageSquare, Filter } from 'lucide-react';

export const CalendlySection: React.FC = () => {
  const [selectedTimeline, setSelectedTimeline] = useState<string>('Immediately (1-2 weeks)');
  const [selectedBudget, setSelectedBudget] = useState<string>('Enterprise Advisory ($5k - $15k/mo)');

  const timelines = ['Immediately (1-2 weeks)', 'Within 30 Days', 'Exploratory Audit'];
  const budgets = ['Enterprise Advisory ($5k - $15k/mo)', 'Full-Cycle FDE Build', 'Targeted RAG/Routing Audit'];

  return (
    <section id="calendly" className="py-24 bg-canvas-subtle border-t border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas-card border border-terracotta/40 text-xs font-mono text-terracotta shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-terracotta" />
            <span>DIRECT CLIENT ONBOARDING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight">
            Schedule an AI{' '}
            <span className="font-serif italic font-normal text-terracotta">Architecture Audit</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Book a dedicated 30-minute technical session to dissect your AI system bottlenecks, evaluate RAG citation grounding, or plan a multi-agent migration.
          </p>
        </div>

        {/* 2-Column Booking Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Qualification & What to Expect */}
          <div className="lg:col-span-5 rounded-3xl bg-canvas-card border border-canvas-border p-6 sm:p-8 space-y-6 shadow-subtle-card apple-card-hover">
            
            <div className="space-y-2 border-b border-canvas-border pb-5">
              <span className="text-xs font-mono text-terracotta uppercase tracking-wider font-semibold">
                1:1 Advisory & FDE Contract Discovery
              </span>
              <h3 className="text-xl font-bold text-white font-sans">
                30-Minute Technical Audit
              </h3>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-terracotta" /> 30 Minutes
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5 text-slate-300" /> Google Meet / Zoom
                </span>
              </div>
            </div>

            {/* Pre-Qualification Filters */}
            <div className="space-y-4 pt-1">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Filter className="w-3.5 h-3.5 text-terracotta" />
                <span>Pre-Call Project Scope:</span>
              </div>

              {/* Timeline selector */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono text-slate-400">Target Timeline:</div>
                <div className="flex flex-wrap gap-1.5">
                  {timelines.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTimeline(t)}
                      className={`px-3 py-1.5 rounded-xl text-[11px] font-mono transition-all duration-300 ${
                        selectedTimeline === t
                          ? 'bg-terracotta text-white font-semibold shadow-luxury-glow'
                          : 'bg-canvas-surface border border-canvas-border text-slate-400 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scope selector */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono text-slate-400">Engagement Scope:</div>
                <div className="flex flex-wrap gap-1.5">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      onClick={() => setSelectedBudget(b)}
                      className={`px-3 py-1.5 rounded-xl text-[11px] font-mono transition-all duration-300 ${
                        selectedBudget === b
                          ? 'bg-terracotta text-white font-semibold shadow-luxury-glow'
                          : 'bg-canvas-surface border border-canvas-border text-slate-400 hover:text-white'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Agenda List */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                What We Will Diagnose:
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-terracotta mt-0.5 flex-shrink-0" />
                  <span><strong>System Bottleneck Audit:</strong> Reviewing your inference latency, token expenditures, and rate-limit risks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-terracotta mt-0.5 flex-shrink-0" />
                  <span><strong>RAG Diagnostic:</strong> Assessing retrieval recall, chunking strategy, and hallucination guardrail coverage.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-terracotta mt-0.5 flex-shrink-0" />
                  <span><strong>Agentic Migration Roadmap:</strong> Moving from fragile single prompts to deterministic fast-path routers.</span>
                </li>
              </ul>
            </div>

            {/* Trust Assurance */}
            <div className="p-4 rounded-2xl bg-canvas-surface border border-canvas-border space-y-2 text-xs">
              <div className="flex items-center gap-2 text-terracotta font-mono font-semibold">
                <Shield className="w-4 h-4" />
                <span>Confidentiality & NDA Friendly</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                All architectural discussions, repository reviews, and business constraints shared during the consultation are strictly confidential.
              </p>
            </div>

            {/* Direct Contact Option */}
            <div className="pt-2 text-xs font-mono text-slate-400">
              Prefer direct email? Contact:{' '}
              <a
                href="mailto:mohsin.i.qureshi@hotmail.com"
                className="text-terracotta hover:underline font-medium"
              >
                mohsin.i.qureshi@hotmail.com
              </a>
            </div>

          </div>

          {/* Right Column: Calendly Embed Container */}
          <div className="lg:col-span-7 rounded-3xl bg-canvas-card border border-terracotta/30 shadow-luxury-glow overflow-hidden flex flex-col min-h-[580px] apple-card-hover">
            
            {/* Embedded Calendar Header */}
            <div className="p-4 bg-canvas-surface border-b border-canvas-border flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-terracotta animate-ping" />
                <span>LIVE CALENDAR RESERVATION</span>
              </div>
              <a
                href="https://calendly.com/mohd-mohsin-qureshi/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-terracotta hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Open in Full Tab</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Calendly iFrame */}
            <div className="relative flex-1 w-full bg-[#161513]">
              <iframe
                src="https://calendly.com/mohd-mohsin-qureshi/30min?embed_domain=mohsingitdev.github.io&embed_type=Inline&background_color=161513&text_color=ffffff&primary_color=d97757"
                width="100%"
                height="620px"
                frameBorder="0"
                title="Schedule 1:1 Architecture Audit with Mohsin Qureshi"
                className="w-full h-full min-h-[600px]"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

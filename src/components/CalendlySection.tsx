import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, Shield, ArrowUpRight, MessageSquare, Filter } from 'lucide-react';

export const CalendlySection: React.FC = () => {
  const [selectedTimeline, setSelectedTimeline] = useState<string>('Immediately (1-2 weeks)');
  const [selectedBudget, setSelectedBudget] = useState<string>('Enterprise Advisory ($5k - $15k/mo)');

  const timelines = ['Immediately (1-2 weeks)', 'Within 30 Days', 'Exploratory Audit'];
  const budgets = ['Enterprise Advisory ($5k - $15k/mo)', 'Full-Cycle FDE Build', 'Targeted RAG/Routing Audit'];

  return (
    <section id="calendly" className="py-24 bg-cyber-surface/60 border-t border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono text-cyber-green">
            <Calendar className="w-3.5 h-3.5" />
            <span>DIRECT CLIENT ONBOARDING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Schedule an AI Architecture Audit
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Book a dedicated 30-minute technical session to dissect your AI system bottlenecks, evaluate RAG citation grounding, or plan a multi-agent migration.
          </p>
        </div>

        {/* 2-Column Booking Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Qualification & What to Expect */}
          <div className="lg:col-span-5 rounded-2xl bg-cyber-card border border-cyber-border p-6 sm:p-8 space-y-6">
            
            <div className="space-y-2 border-b border-cyber-border pb-5">
              <span className="text-xs font-mono text-cyber-green uppercase tracking-wider">
                1:1 Advisory & FDE Contract Discovery
              </span>
              <h3 className="text-xl font-bold text-white">
                30-Minute Technical Audit
              </h3>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyber-cyan" /> 30 Minutes
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5 text-cyber-green" /> Google Meet / Zoom
                </span>
              </div>
            </div>

            {/* Pre-Qualification Filters */}
            <div className="space-y-4 pt-1">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Filter className="w-3.5 h-3.5 text-cyber-green" />
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
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                        selectedTimeline === t
                          ? 'bg-cyber-green text-black font-semibold shadow-neon'
                          : 'bg-cyber-surface border border-cyber-border text-slate-400 hover:text-white'
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
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                        selectedBudget === b
                          ? 'bg-cyber-cyan text-black font-semibold'
                          : 'bg-cyber-surface border border-cyber-border text-slate-400 hover:text-white'
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
                  <CheckCircle2 className="w-4 h-4 text-cyber-green mt-0.5 flex-shrink-0" />
                  <span><strong>System Bottleneck Audit:</strong> Reviewing your inference latency, token expenditures, and rate-limit risks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyber-green mt-0.5 flex-shrink-0" />
                  <span><strong>RAG Diagnostic:</strong> Assessing retrieval recall, chunking strategy, and hallucination guardrail coverage.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyber-green mt-0.5 flex-shrink-0" />
                  <span><strong>Agentic Migration Roadmap:</strong> Moving from fragile single prompts to deterministic fast-path routers.</span>
                </li>
              </ul>
            </div>

            {/* Trust Assurance */}
            <div className="p-4 rounded-xl bg-cyber-surface border border-cyber-border space-y-2 text-xs">
              <div className="flex items-center gap-2 text-cyber-cyan font-mono font-semibold">
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
                className="text-cyber-green hover:underline"
              >
                mohsin.i.qureshi@hotmail.com
              </a>
            </div>

          </div>

          {/* Right Column: Calendly Embed Container */}
          <div className="lg:col-span-7 rounded-2xl bg-cyber-card border border-cyber-green/40 shadow-neon overflow-hidden flex flex-col min-h-[580px]">
            
            {/* Embedded Calendar Header */}
            <div className="p-4 bg-cyber-surface border-b border-cyber-border flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-cyber-green animate-ping" />
                <span>LIVE CALENDAR RESERVATION</span>
              </div>
              <a
                href="https://calendly.com/mohd-mohsin-qureshi/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cyber-green hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Open in Full Tab</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Calendly iFrame */}
            <div className="relative flex-1 w-full bg-[#0E1217]">
              <iframe
                src="https://calendly.com/mohd-mohsin-qureshi/30min?embed_domain=mohsingitdev.github.io&embed_type=Inline&background_color=0f1318&text_color=ffffff&primary_color=00ff87"
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

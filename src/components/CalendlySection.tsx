import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, ArrowUpRight, MessageSquare, Filter, ChevronDown, HelpCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const CalendlySection: React.FC = () => {
  const { theme } = useTheme();
  const [selectedTimeline, setSelectedTimeline] = useState<string>('Immediately (1-2 weeks)');
  const [selectedBudget, setSelectedBudget] = useState<string>('Enterprise Advisory ($5k - $15k/mo)');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const timelines = ['Immediately (1-2 weeks)', 'Within 30 Days', 'Exploratory Audit'];
  const budgets = ['Enterprise Advisory ($5k - $15k/mo)', 'Full-Cycle FDE Build', 'Targeted RAG/Routing Audit'];

  const calendlyBg = theme === 'dark' ? '161513' : 'faf7f2';
  const calendlyText = theme === 'dark' ? 'ffffff' : '1c1917';

  const engagementSteps = [
    {
      phase: 'Phase 01',
      title: '45-Min Architectural Diagnostic',
      timing: 'Day 1 • NDA-Protected',
      description: 'In-depth audit of current latency profile, token spend, schema failure rates, and rate-limit bottlenecks.',
      deliverable: '1-Page Executive Gap Analysis & High-Leverage Architecture Spec'
    },
    {
      phase: 'Phase 02',
      title: '2-Week Production Hardening Sprint',
      timing: 'Weeks 1–2 • Forward Deployment',
      description: 'Implementation of deterministic SLM/regex fast-path gateway, schema fallback validation, and citation guardrails.',
      deliverable: 'Measurable 50%+ Latency Reduction & Sub-Cent Classification on Test Suites'
    },
    {
      phase: 'Phase 03',
      title: 'Production SLA & Handoff',
      timing: 'Week 3+ • Enterprise Handover',
      description: 'Zero-downtime deployment, CI/CD regression guardrails, live telemetry monitoring, and engineering team runbook handoff.',
      deliverable: 'Production Rollout, SLA Verification & Complete Runbook Documentation'
    }
  ];

  const faqs = [
    {
      q: 'Do we have to rewrite our existing LangChain, LlamaIndex, or agentic codebase?',
      a: 'No. Our architecture operates as a non-invasive ingress gateway and fallback layer around existing pipelines, preserving existing model investments while enforcing sub-40ms deterministic bounds, rate-limit resilience, and cost caps.'
    },
    {
      q: 'How are intellectual property and enterprise data confidentiality handled?',
      a: 'All engagements begin with an executed mutual enterprise NDA. All code, routing models, and guardrails are deployed directly inside your secure VPC, on-premise Kubernetes clusters, or air-gapped infrastructure with zero telemetry leakage.'
    },
    {
      q: 'What is the typical time-to-value for an advisory or FDE engagement?',
      a: 'Measurable latency reductions (often 40%–70%) and token expenditure drops are typically realized within the first 5 to 7 business days of the Phase 2 sprint, followed by rigorous load testing and production rollout.'
    }
  ];

  return (
    <section id="calendly" className="py-20 sm:py-24 bg-canvas-subtle border-t border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
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

        {/* 3-Step Engagement Protocol */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-canvas-border pb-3">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-terracotta" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                The 3-Step Engagement Protocol
              </span>
            </div>
            <span className="font-mono text-xs text-slate-400">
              Clear milestone accountability from initial audit to production SLA handoff
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {engagementSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-canvas-card border border-canvas-border space-y-4 hover:border-terracotta/40 transition-all duration-300 shadow-apple-card flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-terracotta px-2.5 py-0.5 rounded-full bg-terracotta/10 border border-terracotta/25">
                      {step.phase}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {step.timing}
                    </span>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-white font-sans leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-canvas-border space-y-1">
                  <span className="text-[10px] font-mono uppercase text-terracotta tracking-wider font-semibold">
                    Core Deliverable:
                  </span>
                  <div className="text-xs text-white font-mono flex items-start gap-1.5 leading-snug">
                    <ArrowRight className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Booking Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Qualification & What to Expect */}
          <div className="lg:col-span-5 rounded-3xl bg-canvas-card border border-canvas-border p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-subtle-card apple-card-hover">
            
            <div className="space-y-2 border-b border-canvas-border pb-4 sm:pb-5">
              <span className="text-[11px] sm:text-xs font-mono text-terracotta uppercase tracking-wider font-semibold">
                1:1 Advisory & FDE Contract Discovery
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
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
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Confidentiality & Mutual NDA Friendly</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                All architectural discussions, repository reviews, and business constraints shared during the consultation are strictly confidential under mutual NDA.
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
          <div className="lg:col-span-7 rounded-3xl bg-canvas-card border border-terracotta/30 shadow-luxury-glow overflow-hidden flex flex-col min-h-[520px] sm:min-h-[580px] apple-card-hover w-full">
            
            {/* Embedded Calendar Header */}
            <div className="p-3.5 sm:p-4 bg-canvas-surface border-b border-canvas-border flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-white">
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

            {/* Calendly iFrame with Dynamic Theme Sync */}
            <div className="relative flex-1 w-full bg-canvas-card dark:bg-[#161513] transition-colors duration-300">
              <iframe
                key={theme}
                src={`https://calendly.com/mohd-mohsin-qureshi/30min?embed_domain=mohsingitdev.github.io&embed_type=Inline&background_color=${calendlyBg}&text_color=${calendlyText}&primary_color=d97757`}
                width="100%"
                height="620px"
                frameBorder="0"
                title="Schedule 1:1 Architecture Audit with Mohsin Qureshi"
                className="w-full h-full min-h-[520px] sm:min-h-[600px]"
              />
            </div>

          </div>

        </div>

        {/* Enterprise FAQ Accordion */}
        <div className="space-y-6 pt-4 border-t border-canvas-border">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs text-terracotta uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ANSWERED QUESTIONS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
              Enterprise Advisory & Engagement FAQ
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-canvas-card border border-canvas-border overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-sans font-bold text-sm sm:text-base text-white hover:text-terracotta transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-terracotta shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-canvas-border/60 bg-canvas-surface/50 font-sans">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

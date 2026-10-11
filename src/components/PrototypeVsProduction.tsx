import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Zap, ArrowRight } from 'lucide-react';

export const PrototypeVsProduction: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'rag' | 'llmops'>('architecture');

  const comparisons = {
    architecture: {
      title: 'Agentic Routing & System Architecture',
      fragile: [
        'Single monolithic prompt sent to GPT-4 / Claude for every incoming query.',
        'High latency: 2,500ms to 4,000ms response times for simple customer intents.',
        'Prohibitive cloud costs: $20k+/month in repetitive simple token queries.',
        'Rate-limit crashes: Flash-sale surges trigger cascading 429 errors with no fallback.'
      ],
      production: [
        'Two-tier deterministic router: 75% of routine queries resolved via SLM/regex in <40ms.',
        'Asynchronous LangGraph agent orchestration with strict 800ms wall-clock retry budgets.',
        '70%+ cost reduction: heavy frontier LLMs invoked only when multi-step reasoning is essential.',
        'Graceful degradation: automated fallback to rule-based execution and cached synthesis.'
      ]
    },
    rag: {
      title: 'Enterprise Knowledge Retrieval (RAG)',
      fragile: [
        'Naive 500-token fixed chunking with vector cosine similarity only.',
        'Hallucinates fabricated figures, misinterprets tables, and misses exact serial numbers.',
        'Zero citation auditability: unable to prove to auditors where an answer came from.',
        'Slow re-indexing pipelines requiring full database rebuilding on updates.'
      ],
      production: [
        'Hybrid Reciprocal Rank Fusion: BM25 exact keyword match + dense embedding vectors.',
        'Cross-encoder reranking: top 50 candidates pruned to top 5 verified chunks.',
        'Sentence-level citation grounding: exact bounding character offsets linked to source PDFs.',
        'Self-correction loops: automated reflection agents verify factual fidelity before returning text.'
      ]
    },
    llmops: {
      title: 'Production LLMOps & Guardrails',
      fragile: [
        'Prompt tweaks deployed directly to production with manual sanity checks.',
        'Unstructured raw text generation causing JSON parsing crashes in downstream APIs.',
        'No per-field confidence scoring; all model outputs treated with equal trust.',
        'Zero prompt injection or jailbreak defenses at the API gateway layer.'
      ],
      production: [
        'Automated CI/CD synthetic evaluation suites running in GitHub Actions on every PR.',
        'Rigid schema enforcement via Pydantic v2 and instructor structured output validation.',
        'Per-field confidence scores: automated escalation to human-in-the-loop when below 0.85.',
        'Multi-layer defense gateway: input sanitization, semantic jailbreak detection, and toxicity filtering.'
      ]
    }
  };

  const current = comparisons[activeTab];

  return (
    <section id="philosophy" className="py-24 bg-canvas-subtle border-t border-b border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-terracotta/10 border border-terracotta/30 text-xs font-mono text-terracotta">
            <Zap className="w-3.5 h-3.5" />
            <span>THE ARCHITECTURAL DIFFERENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight">
            The Prototype-to-<span className="font-serif italic font-normal text-terracotta">Production Gap</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Why Series A/B startups and enterprise leaders bring me in when proof-of-concept GenAI fails to deliver under real-world SLA and budgetary constraints.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mt-6 sm:mt-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="inline-flex p-1.5 rounded-2xl bg-canvas-card border border-canvas-border gap-1 shadow-apple-card overflow-x-auto max-w-full no-scrollbar touch-scroll">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm transition-all duration-300 apple-spring shrink-0 whitespace-nowrap ${
                activeTab === 'architecture'
                  ? 'bg-terracotta text-white font-semibold shadow-apple-card scale-[1.02]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Agentic Routing
            </button>
            <button
              onClick={() => setActiveTab('rag')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm transition-all duration-300 apple-spring shrink-0 whitespace-nowrap ${
                activeTab === 'rag'
                  ? 'bg-terracotta text-white font-semibold shadow-apple-card scale-[1.02]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Grounded RAG
            </button>
            <button
              onClick={() => setActiveTab('llmops')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm transition-all duration-300 apple-spring shrink-0 whitespace-nowrap ${
                activeTab === 'llmops'
                  ? 'bg-terracotta text-white font-semibold shadow-apple-card scale-[1.02]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Production LLMOps
            </button>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Fragile Prototype Card */}
          <div className="rounded-2xl bg-canvas-surface border border-canvas-border p-5 sm:p-8 space-y-5 sm:space-y-6 relative overflow-hidden shadow-apple-card apple-card-hover">
            <div className="flex items-center justify-between border-b border-canvas-border/80 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-canvas-card border border-canvas-border flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <h3 className="font-sans text-sm sm:text-base font-bold text-slate-200">The Fragile AI Prototype</h3>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-mono">What breaks under production load</div>
                </div>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase px-2 sm:px-2.5 py-0.5 rounded-full bg-canvas-card text-slate-400 border border-canvas-border shrink-0">
                High Risk
              </span>
            </div>

            <ul className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm text-slate-400">
              {current.fragile.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-rose-400/80 mt-0.5 font-bold shrink-0">✕</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Production Standard Card */}
          <div className="rounded-2xl bg-canvas-surface border border-terracotta/40 p-5 sm:p-8 space-y-5 sm:space-y-6 relative overflow-hidden shadow-apple-elevated apple-card-hover">
            <div className="flex items-center justify-between border-b border-terracotta/20 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-terracotta/15 border border-terracotta/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-terracotta" />
                </div>
                <div>
                  <h3 className="font-sans text-sm sm:text-base font-bold text-terracotta">My Enterprise Standard</h3>
                  <div className="text-[11px] sm:text-xs text-slate-400 font-mono">Engineered for SLA & Compliance</div>
                </div>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase px-2 sm:px-2.5 py-0.5 rounded-full bg-terracotta/15 text-terracotta border border-terracotta/30 shrink-0">
                Battle-Tested
              </span>
            </div>

            <ul className="space-y-4 text-sm text-slate-200">
              {current.production.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-terracotta mt-1 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-canvas-card border border-canvas-border flex flex-col sm:flex-row items-center justify-between gap-4 apple-card-hover">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-terracotta flex-shrink-0" />
            <span className="text-sm text-slate-300">
              Need your current architecture audited against these enterprise standards?
            </span>
          </div>
          <a
            href="#calendly"
            className="text-xs font-mono font-semibold text-terracotta hover:text-white flex items-center gap-1.5 transition-colors whitespace-nowrap group"
          >
            <span>Request an Architecture Audit</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

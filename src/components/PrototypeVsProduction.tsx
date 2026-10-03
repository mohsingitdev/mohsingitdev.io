import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, Zap, ArrowRight } from 'lucide-react';

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
    <section id="philosophy" className="py-20 bg-cyber-surface/40 border-t border-b border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono text-cyber-green">
            <Zap className="w-3.5 h-3.5" />
            <span>THE ARCHITECTURAL DIFFERENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            The Prototype-to-Production Gap
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Why Series A/B startups and enterprise leaders bring me in when proof-of-concept GenAI fails to deliver under real-world SLA and budgetary constraints.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex p-1.5 rounded-xl bg-cyber-card border border-cyber-border">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'architecture'
                  ? 'bg-cyber-green text-black font-semibold shadow-neon'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Agentic Routing
            </button>
            <button
              onClick={() => setActiveTab('rag')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'rag'
                  ? 'bg-cyber-green text-black font-semibold shadow-neon'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Grounded RAG
            </button>
            <button
              onClick={() => setActiveTab('llmops')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'llmops'
                  ? 'bg-cyber-green text-black font-semibold shadow-neon'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Production LLMOps
            </button>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Fragile Prototype Card */}
          <div className="rounded-2xl bg-cyber-card/50 border border-red-500/20 p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-red-500/20 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="font-mono text-base font-bold text-red-300">The Fragile AI Prototype</h3>
                  <div className="text-xs text-slate-500">What breaks in production</div>
                </div>
              </div>
              <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/30">
                High Risk
              </span>
            </div>

            <ul className="space-y-4 text-sm text-slate-300">
              {current.fragile.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-red-400 mt-1 font-bold">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Production Standard Card */}
          <div className="rounded-2xl bg-cyber-card border border-cyber-green/40 p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-neon">
            <div className="flex items-center justify-between border-b border-cyber-green/20 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyber-green/10 border border-cyber-green/30 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-cyber-green" />
                </div>
                <div>
                  <h3 className="font-mono text-base font-bold text-cyber-green">My Enterprise Standard</h3>
                  <div className="text-xs text-slate-400">Engineered for SLA & Compliance</div>
                </div>
              </div>
              <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-cyber-green/20 text-cyber-green border border-cyber-green/40">
                Battle-Tested
              </span>
            </div>

            <ul className="space-y-4 text-sm text-slate-200">
              {current.production.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-cyber-green mt-1 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Callout */}
        <div className="mt-10 p-5 rounded-xl bg-cyber-card/80 border border-cyber-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-cyber-green flex-shrink-0" />
            <span className="text-sm text-slate-300">
              Need your current architecture evaluated against these enterprise standards?
            </span>
          </div>
          <a
            href="#calendly"
            className="text-xs font-mono font-semibold text-cyber-green hover:text-white flex items-center gap-1.5 transition-colors whitespace-nowrap"
          >
            <span>Request an Architecture Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ShieldCheck, FileText, ChevronDown, CheckCircle2, Lock, Cpu, Clock, DollarSign, Activity, Eye } from 'lucide-react';

interface ProofItem {
  id: string;
  metric: string;
  label: string;
  icon: React.ElementType;
  headlineOutcome: string;
  environment: string;
  baseline: string;
  measurementMethod: string;
  architecturalMechanism: string;
  scopeAndRole: string;
  confidentialityNote: string;
}

const PROOF_ITEMS: ProofItem[] = [
  {
    id: 'latency',
    metric: '< 40ms',
    label: 'P99 Latency Fast-Path',
    icon: Clock,
    headlineOutcome: 'Reduced end-to-end query response time from 2,140ms down to 34ms on routine enterprise customer interactions.',
    environment: 'FastAPI Ingress Gateway on AWS EKS (c6i.4xlarge), vLLM inference worker pool, Redis 7.2 semantic cache cluster.',
    baseline: 'Monolithic frontier model (GPT-4 / Claude) evaluated on every user prompt (2,140ms p99 under moderate load).',
    measurementMethod: '100,000 synthetic & replayed real-world query traces; p50, p95, and p99 latency instrumented via OpenTelemetry and Prometheus.',
    architecturalMechanism: 'Two-tier ingress gateway deploying sub-100M SLM intent classifier and regex entity matcher to resolve 78% of queries deterministically, bypassing heavy model inference entirely.',
    scopeAndRole: 'Forward Deployment Engineer (Flipkart High-Concurrency E-Commerce Infrastructure).',
    confidentialityNote: 'Measured in production benchmarks; proprietary customer payloads anonymized per enterprise compliance.'
  },
  {
    id: 'hallucination',
    metric: '< 0.5%',
    label: 'Hallucination Threshold',
    icon: ShieldCheck,
    headlineOutcome: 'Achieved 100% auditable sentence-level citations with under 0.5% factual drift across clinical narrative discovery.',
    environment: 'Vector database (Qdrant) + BM25 sparse index over 50,000+ complex regulatory and clinical trial document sets.',
    baseline: 'Standard dense-only vector retrieval + unconstrained LLM synthesis (14.2% hallucination & contextual drift rate).',
    measurementMethod: 'Automated RAG Triad evaluation (Context Relevance, Groundedness, Answer Relevance) paired with double-blind clinical oncologist validation across 500 clinical queries.',
    architecturalMechanism: 'Reciprocal Rank Fusion (RRF) combining lexical precision with dense vector recall, enforced by Pydantic schema validation and citation bounding guardrails.',
    scopeAndRole: 'Artificial Intelligence Researcher (Novartis Life Sciences & Clinical NLP).',
    confidentialityNote: 'Engineered in strict alignment with FDA 21 CFR Part 11 and EMA clinical verification regulations.'
  },
  {
    id: 'finops',
    metric: '-72%',
    label: 'Cloud Token Burn Delta',
    icon: DollarSign,
    headlineOutcome: 'Slashed cloud inference expenditure by 72% while increasing system concurrency headroom by 4.2x.',
    environment: 'Distributed enterprise conversational platform processing 1.2M monthly user interactions.',
    baseline: 'Full-context prompt stuffing forwarding 100% of user traffic to frontier LLMs ($28.50 estimated per 10k requests).',
    measurementMethod: 'Cloud billing telemetry and token consumption metrics audited continuously over a 90-day comparison window.',
    architecturalMechanism: 'Tiered routing gateway routing routine requests to sub-cent SLMs ($0.85 per 10k) while selectively reserving frontier models for multi-hop disputes and high-value exceptions.',
    scopeAndRole: 'Conversational AI Consultant (Accenture Strategy & Consulting Advisory).',
    confidentialityNote: 'FinOps telemetry audited and validated against enterprise client cloud infrastructure statements.'
  },
  {
    id: 'concurrency',
    metric: '100k+',
    label: 'Req/Sec Peak Concurrency',
    icon: Activity,
    headlineOutcome: 'Zero cascade failures recorded during peak flash-sale surges with 99.99% system availability.',
    environment: 'Multi-AZ Kubernetes cluster across 3 availability zones with automated horizontal pod autoscaling (HPA).',
    baseline: 'Monolithic LLM gateway failing at 4,200 req/sec due to rate-limit exhaustion and socket starvation.',
    measurementMethod: 'Distributed Locust/k6 stress testing simulating peak flash-sale surges with injected network latency and node failovers.',
    architecturalMechanism: 'Asynchronous event-driven routing (Kafka), wall-clock retry budgets, circuit breakers, and deterministic fast-paths preventing upstream model saturation.',
    scopeAndRole: 'AI Systems Architect (Flipkart Flash-Sale Infrastructure).',
    confidentialityNote: 'High-concurrency stress test logs recorded under NDA-compliant simulated workloads.'
  },
  {
    id: 'edge',
    metric: '60 FPS',
    label: 'Edge Ingestion Rate',
    icon: Cpu,
    headlineOutcome: 'Zero telemetry packet loss and sub-100ms response time on continuous industrial video analytics.',
    environment: 'Edge compute nodes with NVIDIA Jetson AGX Orin modules running TensorRT-optimized PyTorch models.',
    baseline: 'Cloud-roundtrip video streaming suffering 320ms latency and 18% packet drop under unstable factory network conditions.',
    measurementMethod: 'Multi-camera RTSP high-definition streams audited over continuous 72-hour operational shifts.',
    architecturalMechanism: 'Quantized INT8 computer vision models running locally on edge hardware with fallback telemetry buffers.',
    scopeAndRole: 'Computer Vision & MLOps Engineer (TCS / Comcast).',
    confidentialityNote: 'Industrial plant safety protocols and proprietary footage anonymized.'
  }
];

export const ArchitectureProofLedger: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="evidence-ledger" className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-canvas-border pb-8">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas-card border border-terracotta/40 text-xs font-mono text-terracotta shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-terracotta" />
            <span>VERIFIED METHODOLOGY & BENCHMARK LEDGER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight">
            The Evidence{' '}
            <span className="font-serif italic font-normal text-terracotta">Architecture</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every headline metric displayed across this platform is tied to an explicit engineering baseline, measurement protocol, and architectural mechanism. No fabricated ratings or ungrounded claims.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 shrink-0">
          <Lock className="w-3.5 h-3.5 text-emerald-400" />
          <span>NDA-Compliant Disclosures</span>
        </div>
      </div>

      {/* Ledger Cards Grid */}
      <div className="space-y-4">
        {PROOF_ITEMS.map((item) => {
          const isExpanded = expandedId === item.id;
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className={`rounded-2xl bg-canvas-card border transition-all duration-300 overflow-hidden ${
                isExpanded ? 'border-terracotta/60 shadow-apple-card' : 'border-canvas-border hover:border-slate-500'
              }`}
            >
              {/* Summary Header Row */}
              <button
                onClick={() => toggleExpand(item.id)}
                aria-expanded={isExpanded}
                className="w-full p-4 sm:p-6 text-left flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-canvas-surface border border-canvas-border flex items-center justify-center text-terracotta shrink-0 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xl sm:text-2xl font-black text-terracotta">
                        {item.metric}
                      </span>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        • {item.label}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white mt-1 line-clamp-1 sm:line-clamp-none font-sans">
                      {item.headlineOutcome}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-canvas-border/60">
                  <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                    {isExpanded ? 'Hide Methodology' : 'View Benchmark Protocol'}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-canvas-surface border border-canvas-border text-slate-300 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180 text-terracotta' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Detailed Expanded Drawer */}
              {isExpanded && (
                <div className="p-4 sm:p-6 lg:p-8 bg-canvas-surface/60 border-t border-canvas-border text-xs sm:text-sm space-y-6 animate-fadeIn font-sans">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Left: Environment & Baseline */}
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-canvas-card border border-canvas-border space-y-1.5">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-terracotta" />
                          <span>Infrastructure & Hardware Environment</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed font-mono text-xs">
                          {item.environment}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-canvas-card border border-canvas-border space-y-1.5">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-amber-300" />
                          <span>Naive Prototype Baseline</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-xs">
                          {item.baseline}
                        </p>
                      </div>
                    </div>

                    {/* Right: Method & Mechanism */}
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-canvas-card border border-canvas-border space-y-1.5">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Measurement Protocol</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-xs">
                          {item.measurementMethod}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-canvas-card border border-terracotta/30 space-y-1.5">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-terracotta font-bold flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-terracotta" />
                          <span>Architectural Mechanism</span>
                        </div>
                        <p className="text-white leading-relaxed text-xs">
                          {item.architecturalMechanism}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Footnote: Role & Confidentiality */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-canvas-border/80 text-[11px] font-mono text-slate-400">
                    <div>
                      <span className="text-terracotta font-semibold">Scope of Ownership:</span> {item.scopeAndRole}
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{item.confidentialityNote}</span>
                    </div>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

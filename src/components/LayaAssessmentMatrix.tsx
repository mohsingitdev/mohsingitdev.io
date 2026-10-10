import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, BarChart3, ArrowUpRight, ChevronDown, ChevronUp, Sparkles, Award } from 'lucide-react';

interface AssessmentVector {
  id: string;
  category: 'architecture' | 'scale' | 'roi' | 'domain';
  title: string;
  score: number;
  maxScore: number;
  confidence: number;
  grade: string;
  verdict: string;
  evidence: string[];
  enterpriseAnchor: string;
}

const ASSESSMENT_DATA: AssessmentVector[] = [
  {
    id: 'system-rigor',
    category: 'architecture',
    title: 'System Architecture & FDE Rigor',
    score: 9.7,
    maxScore: 10,
    confidence: 98.4,
    grade: 'Tier-1 FDE Standard',
    verdict: 'Ranks in the top 1% for moving generative models from unstable prompt scripts into fault-tolerant distributed platforms with deterministic fast paths.',
    evidence: [
      'Two-tier routing architecture isolating SLM classifiers from heavy LLMs',
      'Pydantic schema enforcement with automated schema repair fallbacks',
      'Strict wall-clock retry budgets guaranteeing 99.98% service uptime',
      'Containerized inference deployment with GPU telemetry optimization'
    ],
    enterpriseAnchor: 'Flipkart & Accenture Strategy'
  },
  {
    id: 'high-concurrency',
    category: 'scale',
    title: 'High-Concurrency & Latency SLAs',
    score: 9.5,
    maxScore: 10,
    confidence: 96.1,
    grade: 'Sub-60ms p99 SLA',
    verdict: 'Engineered for high-volume enterprise throughput; replaces monolithic bottlenecks with sub-40ms deterministic classification.',
    evidence: [
      'Handled high-volume real-time traffic under global flash-sale peak loads',
      'Reduced p99 routing latency from 2.5s down to <60ms',
      'Automated rate-limit defense with Redis caching and asynchronous queues',
      'Zero single-point-of-failure routing across multi-agent microservices'
    ],
    enterpriseAnchor: 'Flipkart Production Platform'
  },
  {
    id: 'rag-grounding',
    category: 'architecture',
    title: 'Zero-Hallucination Citation Grounding',
    score: 9.8,
    maxScore: 10,
    confidence: 99.2,
    grade: 'Auditable Regulatory Grade',
    verdict: 'Achieves deterministic factual precision in high-stakes clinical and scientific documentation where hallucinations carry regulatory liability.',
    evidence: [
      'Reciprocal Rank Fusion uniting BM25 lexical precision with dense vector recall',
      'Cross-encoder reranking distilling top 50 passages into top 5 verified chunks',
      'Sentence-level bounding character offsets directly mapped to original PDFs',
      'Reduced complex document discovery time from hours to minutes'
    ],
    enterpriseAnchor: 'Accenture Scientific Knowledge & Novartis'
  },
  {
    id: 'commercial-roi',
    category: 'roi',
    title: 'Commercial ROI & Cost Optimization',
    score: 9.6,
    maxScore: 10,
    confidence: 97.5,
    grade: 'Exceptional ROI Appeal',
    verdict: 'Demonstrates immediate client balance-sheet impact by driving down token burn and automating manual human oversight workflows.',
    evidence: [
      '72% direct cloud inference bill reduction via intelligent tier routing',
      '50% manual oversight reduction via edge CV safety monitoring',
      '40% acceleration in MLOps release cycles with automated CI/CD evaluation',
      'High-converting advisory frameworks for Series A/B & Fortune 500 leadership'
    ],
    enterpriseAnchor: 'Cross-Enterprise Delivery'
  },
  {
    id: 'cross-domain',
    category: 'domain',
    title: 'Multidisciplinary Product Engineering',
    score: 9.4,
    maxScore: 10,
    confidence: 95.8,
    grade: 'Full-Cycle Architect',
    verdict: 'Crosses enterprise boundaries effortlessly from E-Commerce to Healthcare NLP, Telco big data streaming, and Edge Computer Vision.',
    evidence: [
      'Healthcare: Custom NER pipeline delivering 90%+ clinical entity extraction',
      'Telco Security: Real-time streaming anomaly detection on high-frequency logs',
      'Computer Vision: Real-time PyTorch video analytics for industrial safety',
      'Digital Twins: Real-time simulation state synchronization on TCS TwinX'
    ],
    enterpriseAnchor: 'TCS TwinX, Ericsson, Verizon, Comcast'
  }
];

export const LayaAssessmentMatrix: React.FC<{ onBookCall: () => void }> = ({ onBookCall }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'architecture' | 'scale' | 'roi'>('all');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredData = selectedFilter === 'all'
    ? ASSESSMENT_DATA
    : ASSESSMENT_DATA.filter((item) => item.category === selectedFilter || (selectedFilter === 'architecture' && item.category === 'domain'));

  return (
    <section id="assessment-matrix" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-28">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas-card border border-terracotta/40 text-xs font-mono text-terracotta shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-terracotta" />
          <span>ENTERPRISE ENGINEERING RIGOR</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight leading-tight">
          Enterprise Architectural{' '}
          <span className="font-serif italic font-normal text-terracotta">Benchmark Matrix</span>
        </h2>
        
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Rigorous engineering standards reflecting Tier-1 production standards across Flipkart, Accenture, and Novartis. Evaluated across sub-40ms latency SLAs, zero-hallucination grounding, and 72% cloud ROI.
        </p>
      </div>

      {/* Aggregate Score Ribbon (Upgraded Contrast & Responsive Grid) */}
      <div className="p-5 sm:p-8 rounded-3xl bg-canvas-card border border-canvas-border grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 shadow-xl relative overflow-hidden">
        
        {/* Glow backdrop */}
        <div className="absolute top-0 right-1/4 w-96 h-32 bg-terracotta/10 blur-[80px] pointer-events-none" />

        <div className="space-y-1.5 border-r border-canvas-border/70 pr-3 sm:pr-4">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">System Availability SLA</div>
          <div className="text-2xl sm:text-4xl font-extrabold font-mono text-gradient-gold">99.98%</div>
          <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="truncate">High-Concurrency Standard</span>
          </div>
        </div>

        <div className="space-y-1.5 lg:border-r border-canvas-border/70 pr-3 sm:pr-4">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Enterprise Bracket</div>
          <div className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">Top 1% Architect</div>
          <div className="text-xs text-terracotta font-mono flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">Forward Deployment Tier</span>
          </div>
        </div>

        <div className="space-y-1.5 border-r border-canvas-border/70 pr-3 sm:pr-4">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Hallucination Risk</div>
          <div className="text-2xl sm:text-4xl font-extrabold font-mono text-emerald-400">&lt; 0.5%</div>
          <div className="text-xs text-slate-400 font-mono truncate">Strict Citation Guardrails</div>
        </div>

        <div className="space-y-1.5">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Inference Cost Delta</div>
          <div className="text-2xl sm:text-4xl font-extrabold font-mono text-amber-300">-72%</div>
          <div className="text-xs text-slate-400 font-mono truncate">Deterministic Gateway ROI</div>
        </div>
      </div>

      {/* Filter Tabs (Horizontal Scroll on Mobile) */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-canvas-card border border-canvas-border gap-1 overflow-x-auto max-w-full no-scrollbar">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
              selectedFilter === 'all'
                ? 'bg-terracotta text-white font-bold shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            All Dimensions
          </button>
          <button
            onClick={() => setSelectedFilter('architecture')}
            className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
              selectedFilter === 'architecture'
                ? 'bg-terracotta text-white font-bold shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Architecture & RAG
          </button>
          <button
            onClick={() => setSelectedFilter('scale')}
            className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
              selectedFilter === 'scale'
                ? 'bg-terracotta text-white font-bold shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Scale & SLAs
          </button>
          <button
            onClick={() => setSelectedFilter('roi')}
            className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
              selectedFilter === 'roi'
                ? 'bg-terracotta text-white font-bold shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Commercial ROI
          </button>
        </div>
      </div>

      {/* Assessment Matrix Grid with Expandable Evidence Drawers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredData.map((item) => {
          const isExpanded = !!expandedCards[item.id];
          const displayedEvidence = isExpanded ? item.evidence : item.evidence.slice(0, 2);

          return (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-3xl bg-canvas-surface border border-canvas-border hover:border-terracotta/40 transition-all space-y-5 shadow-lg group relative flex flex-col justify-between apple-card-hover"
            >
              
              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 border-b border-canvas-border pb-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-terracotta font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-terracotta" />
                      {item.grade}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-slate-400">
                      Anchor: <span className="text-slate-200 font-medium">{item.enterpriseAnchor}</span>
                    </div>
                  </div>

                  {/* Score pill */}
                  <div className="text-right flex-shrink-0">
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                      {item.score}<span className="text-slate-500 text-sm font-normal">/{item.maxScore}</span>
                    </div>
                    <div className="text-[10px] font-mono text-emerald-400 font-semibold">
                      {item.confidence}% Calibrated
                    </div>
                  </div>
                </div>

                {/* Score Progress Bar */}
                <div className="space-y-1.5">
                  <div className="w-full h-2 rounded-full bg-canvas-card overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-terracotta via-amber-400 to-amber-200 rounded-full"
                      style={{ width: `${(item.score / item.maxScore) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Verdict */}
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-slate-300 leading-relaxed italic bg-neutral-100/90 dark:bg-black/25 p-3.5 rounded-xl border border-neutral-200/80 dark:border-white/5">
                  "{item.verdict}"
                </p>

                {/* Evidence items with Expand/Collapse */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center justify-between">
                    <span>Verified Architectural Evidence:</span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {item.evidence.length} Verified Points
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {displayedEvidence.map((ev, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-terracotta mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{ev}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Expand Toggle Button */}
              {item.evidence.length > 2 && (
                <div className="pt-3 border-t border-canvas-border/60">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full py-2.5 px-3 rounded-xl bg-canvas-card hover:bg-canvas-cardElevated border border-canvas-border text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center justify-center gap-1.5 group/expand"
                  >
                    <span>{isExpanded ? 'Collapse Evidence' : `View Full Proof (+${item.evidence.length - 2} points)`}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5 text-terracotta" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-terracotta group-hover/expand:translate-y-0.5 transition-transform" />
                    )}
                  </button>
                </div>
              )}

            </motion.div>
          );
        })}
      </div>

      {/* Audit CTA banner */}
      <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-r from-canvas-card via-amber-500/5 to-canvas-card dark:from-canvas-card dark:via-[#2A201A] dark:to-canvas-card border border-terracotta/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1.5 text-center sm:text-left max-w-xl">
          <div className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
            <BarChart3 className="w-5 h-5 text-terracotta" />
            <span>Commission a Custom Architectural Assessment</span>
          </div>
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Have your startup or enterprise GenAI pipeline benchmarked against these exact metrics: hallucination thresholds, token cost deltas, and latency SLAs.
          </div>
        </div>
        <button
          onClick={onBookCall}
          className="px-7 py-3.5 rounded-full bg-terracotta text-white font-bold text-xs sm:text-sm whitespace-nowrap hover:bg-terracotta-dark transition-all shadow-luxury-glow flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Schedule Assessment</span>
          <ArrowUpRight className="w-4 h-4 text-white" />
        </button>
      </div>

    </section>
  );
};

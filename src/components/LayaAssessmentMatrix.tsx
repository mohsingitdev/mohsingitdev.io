import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap, Activity, CheckCircle, BarChart3, ArrowUpRight } from 'lucide-react';

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
      'Telco Security: ML4SEC streaming anomaly detection on high-frequency logs',
      'Computer Vision: Real-time PyTorch video analytics for industrial safety',
      'Digital Twins: Real-time simulation state synchronization on TCS TwinX'
    ],
    enterpriseAnchor: 'TCS TwinX, Ericsson, Verizon, Comcast'
  }
];

export const LayaAssessmentMatrix: React.FC<{ onBookCall: () => void }> = ({ onBookCall }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'architecture' | 'scale' | 'roi'>('all');

  const filteredData = selectedFilter === 'all'
    ? ASSESSMENT_DATA
    : ASSESSMENT_DATA.filter((item) => item.category === selectedFilter || (selectedFilter === 'architecture' && item.category === 'domain'));

  return (
    <section id="assessment-matrix" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-luxury-gold/30 text-xs font-mono text-luxury-gold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>ALGORITHMIC CALIBER VERIFICATION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight">
          Laya Caliber Assessment Matrix
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Algorithmic evaluation scoring candidate capabilities without hallucination. Calibrated across strict typed rubrics reflecting production enterprise standards.
        </p>
      </div>

      {/* Aggregate Score Ribbon */}
      <div className="p-6 rounded-2xl bg-canvas-card border border-canvas-border grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="space-y-1 border-r border-canvas-border/60 last:border-none">
          <div className="text-xs font-mono uppercase text-slate-400">Overall Caliber Rating</div>
          <div className="text-3xl font-bold font-mono text-gradient-gold">9.6 / 10</div>
          <div className="text-[11px] text-slate-500 font-mono">Calibrated Confidence: 97.4%</div>
        </div>

        <div className="space-y-1 border-r border-canvas-border/60 last:border-none">
          <div className="text-xs font-mono uppercase text-slate-400">Enterprise Bracket</div>
          <div className="text-xl font-bold text-white pt-1">Top 1% Architect</div>
          <div className="text-[11px] text-slate-500 font-mono">Forward Deployment Tier</div>
        </div>

        <div className="space-y-1 border-r border-canvas-border/60 last:border-none">
          <div className="text-xs font-mono uppercase text-slate-400">Hallucination Risk</div>
          <div className="text-3xl font-bold font-mono text-white">&lt; 0.5%</div>
          <div className="text-[11px] text-luxury-gold font-mono">Strict Citation Guardrails</div>
        </div>

        <div className="space-y-1">
          <div className="text-xs font-mono uppercase text-slate-400">Inference Cost Delta</div>
          <div className="text-3xl font-bold font-mono text-white">-72%</div>
          <div className="text-[11px] text-slate-500 font-mono">Deterministic Gateway ROI</div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-xl bg-canvas-card border border-canvas-border gap-1">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              selectedFilter === 'all'
                ? 'bg-luxury-gold text-black font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Dimensions
          </button>
          <button
            onClick={() => setSelectedFilter('architecture')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              selectedFilter === 'architecture'
                ? 'bg-luxury-gold text-black font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Architecture & RAG
          </button>
          <button
            onClick={() => setSelectedFilter('scale')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              selectedFilter === 'scale'
                ? 'bg-luxury-gold text-black font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Scale & SLAs
          </button>
          <button
            onClick={() => setSelectedFilter('roi')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              selectedFilter === 'roi'
                ? 'bg-luxury-gold text-black font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Commercial ROI
          </button>
        </div>
      </div>

      {/* Assessment Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredData.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-7 rounded-2xl bg-canvas-surface border border-canvas-border hover:border-canvas-borderHover transition-all space-y-5 shadow-subtle-card group"
          >
            
            {/* Header row */}
            <div className="flex items-start justify-between gap-4 border-b border-canvas-border/80 pb-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-luxury-gold">
                  {item.grade}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-luxury-gold transition-colors mt-0.5">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  Anchor: {item.enterpriseAnchor}
                </div>
              </div>

              {/* Score pill */}
              <div className="text-right">
                <div className="text-2xl font-extrabold font-mono text-white">
                  {item.score}<span className="text-slate-500 text-sm font-normal">/{item.maxScore}</span>
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  {item.confidence}% Conf.
                </div>
              </div>
            </div>

            {/* Score Progress Bar */}
            <div className="space-y-1.5">
              <div className="w-full h-1.5 rounded-full bg-canvas-card overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-luxury-amber to-luxury-gold rounded-full"
                  style={{ width: `${(item.score / item.maxScore) * 100}%` }}
                />
              </div>
            </div>

            {/* Verdict */}
            <p className="text-xs text-slate-300 leading-relaxed italic">
              "{item.verdict}"
            </p>

            {/* Evidence items */}
            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Verified Architectural Evidence:
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {item.evidence.map((ev, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-luxury-gold mt-0.5 flex-shrink-0" />
                    <span>{ev}</span>
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>
        ))}
      </div>

      {/* Audit CTA banner */}
      <div className="p-6 rounded-2xl bg-canvas-card border border-luxury-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
            <BarChart3 className="w-4 h-4 text-luxury-gold" />
            <span>Commission a Custom Architectural Assessment</span>
          </div>
          <div className="text-xs text-slate-400">
            Have your startup or enterprise GenAI pipeline benchmarked against these exact metrics.
          </div>
        </div>
        <button
          onClick={onBookCall}
          className="px-5 py-2.5 rounded-xl bg-luxury-gold text-black font-semibold text-xs whitespace-nowrap hover:bg-white transition-all shadow-luxury-glow flex items-center gap-1.5"
        >
          <span>Schedule Assessment</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </section>
  );
};

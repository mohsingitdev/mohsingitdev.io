import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { 
  ArrowRight, 
  Calendar, 
  Check, 
  FileCheck 
} from 'lucide-react';
import { Card3D } from '../components/common/Card3D';

interface ServicesPageProps {
  onBookCall: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onBookCall }) => {
  const { navigate } = useRouter();
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const checklistSections = [
    {
      category: '1. Architecture & Model Routing',
      items: [
        { id: 'c1', label: 'Deterministic fast-path classifier for high-frequency queries (<35ms)' },
        { id: 'c2', label: 'Strict wall-clock SLA timeouts and fallback circuits on all external LLM calls' },
        { id: 'c3', label: 'Semantic Redis caching for redundant enterprise queries' }
      ]
    },
    {
      category: '2. Retrieval & Grounding (RAG)',
      items: [
        { id: 'c4', label: 'Hybrid search (BM25 lexical + dense vectors) with Reciprocal Rank Fusion' },
        { id: 'c5', label: 'Cross-encoder reranking before generating tokens' },
        { id: 'c6', label: 'Verifiable sentence-level character offset pointers back to source PDF' }
      ]
    },
    {
      category: '3. LLMOps & Evaluation Gates',
      items: [
        { id: 'c7', label: 'Automated CI/CD pull-request evaluation gates on synthetic golden test datasets' },
        { id: 'c8', label: 'Strict Pydantic v2 schema validation with automated JSON repair' },
        { id: 'c9', label: 'Prometheus / Datadog telemetry tracking latency percentiles and hallucination drift' }
      ]
    },
    {
      category: '4. Privacy, Security & FinOps',
      items: [
        { id: 'c10', label: 'Zero PII leakage into third-party foundation model training loops' },
        { id: 'c11', label: 'Containerized vLLM / Ray Serve deployment on AWS EKS or GCP GKE' },
        { id: 'c12', label: 'Cost-per-10k queries modeled and monitored with budget alert thresholds' }
      ]
    }
  ];

  const totalItems = checklistSections.reduce((acc, sec) => acc + sec.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const scorePercent = Math.round((checkedCount / totalItems) * 100);

  return (
    <div className="pt-24 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-8">
        <button 
          onClick={() => navigate('/')} 
          className="hover:text-terracotta transition-colors"
        >
          home
        </button>
        <span>/</span>
        <span className="text-terracotta">services</span>
      </div>

      {/* Hero Header */}
      <div className="mb-14 border-b border-white/10 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-terracotta/30 bg-terracotta/10 text-terracotta text-xs font-mono mb-4">
          FIXED-SCOPE ARCHITECTURAL ADVISORY &amp; IMPLEMENTATION
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Production AI <span className="gradient-text">Engineering Services</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
          Helping founders, CTOs, and AI leaders transition complex LLM, RAG, voice, and agentic workflows from brittle prototypes into reliable, cost-controlled production operations.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onBookCall}
            className="px-6 py-3 rounded-full bg-terracotta hover:bg-[#c4684a] text-white font-medium text-sm transition-all shadow-lg shadow-terracotta/20 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Book Architecture Assessment Call
          </button>
          <a
            href="#readiness-checklist"
            className="px-6 py-3 rounded-full apple-glass border border-white/15 text-slate-200 font-medium text-sm transition-all hover:border-terracotta flex items-center gap-2"
          >
            <FileCheck className="w-4 h-4 text-terracotta" />
            Run Interactive Readiness Checklist
          </a>
        </div>
      </div>

      {/* Flagship Offering: Production AI Readiness Assessment */}
      <div className="mb-16">
        <div className="p-8 sm:p-10 rounded-2xl border border-terracotta/40 bg-gradient-to-b from-terracotta/10 to-transparent apple-glass">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono text-terracotta uppercase tracking-wider block mb-1">Flagship Advisory Engagement</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Production AI Readiness Assessment</h2>
            </div>
            <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-xs font-mono text-slate-300">
              Duration: 2-3 Weeks • Fixed Scope
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mb-8">
            A comprehensive, hands-on audit designed for engineering teams deploying customer-facing generative AI. We diagnose architecture flaws, benchmark latency and hallucination liabilities, inspect inference GPU cost overruns, and provide a battle-tested 30-day remediation roadmap.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 text-xs text-slate-300">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <strong className="text-white block mb-2 font-mono text-sm">1. Architecture &amp; Workflow Review</strong>
              <p className="text-slate-400">Analysis of monolithic vs modular LLM topologies, state persistence, fallback circuits, and prompt injection threat surfaces.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <strong className="text-white block mb-2 font-mono text-sm">2. Retrieval &amp; Evaluation Audit</strong>
              <p className="text-slate-400">Evaluating RAG precision, recall, and groundedness across golden-set regression test vectors. Benchmarking reranking pipelines.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <strong className="text-white block mb-2 font-mono text-sm">3. Latency &amp; Cost Profiling</strong>
              <p className="text-slate-400">End-to-end wall-clock latency breakdown (p50, p95, p99), token waste elimination, and model tier routing design.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <strong className="text-white block mb-2 font-mono text-sm">4. Data Privacy &amp; Operational Risk</strong>
              <p className="text-slate-400">Verification of VPC boundaries, sensitive data leakage prevention, rate limit safeguards, and audit trail logging.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <strong className="text-white block mb-2 font-mono text-sm">5. Post-Launch Ownership Plan</strong>
              <p className="text-slate-400">Defining team runbooks, incident triage workflows, human review escalation thresholds, and continuous evaluation gates.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <strong className="text-white block mb-2 font-mono text-sm">6. Prioritized 30-Day Roadmap</strong>
              <p className="text-slate-400">Executive report with concrete engineering tasks, code snippets, architecture diagrams, and immediate FinOps wins.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <div className="text-xs font-mono text-slate-400">
              Includes 3 deep-dive engineering syncs + comprehensive architectural report
            </div>
            <button
              onClick={onBookCall}
              className="px-6 py-2.5 rounded-full bg-terracotta hover:bg-[#c4684a] text-white text-xs font-mono font-medium transition-all shadow-md flex items-center gap-2"
            >
              Apply for Readiness Assessment
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Sprint Engagements */}
      <div className="mb-16">
        <h2 className="text-xl font-bold text-white mb-6">Targeted Engineering Sprints</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card3D className="p-6 apple-glass rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-terracotta mb-2">2-Week Sprint</div>
              <h3 className="text-base font-bold text-white mb-2">RAG Evaluation Sprint</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Implementation of hybrid search (BM25 + Dense RRF), cross-encoder reranking, and citation attribution to drive hallucination drift below 1%.
              </p>
            </div>
            <button
              onClick={onBookCall}
              className="text-xs font-mono text-terracotta hover:text-white flex items-center gap-1.5 transition-colors pt-4 border-t border-white/10"
            >
              Discuss RAG Sprint <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </Card3D>

          <Card3D className="p-6 apple-glass rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-terracotta mb-2">2-Week Sprint</div>
              <h3 className="text-base font-bold text-white mb-2">LLM Routing &amp; FinOps Sprint</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Deploying a deterministic fast-path intent classifier and model cascade to reduce frontier LLM API bills by 60–75% while hitting sub-40ms SLAs.
              </p>
            </div>
            <button
              onClick={onBookCall}
              className="text-xs font-mono text-terracotta hover:text-white flex items-center gap-1.5 transition-colors pt-4 border-t border-white/10"
            >
              Discuss Routing Sprint <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </Card3D>

          <Card3D className="p-6 apple-glass rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-terracotta mb-2">Ongoing / Monthly</div>
              <h3 className="text-base font-bold text-white mb-2">Fractional FDE Advisory</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Embedded technical leadership helping high-growth teams architect production AI systems, navigate client deployments, and review engineering pull requests.
              </p>
            </div>
            <button
              onClick={onBookCall}
              className="text-xs font-mono text-terracotta hover:text-white flex items-center gap-1.5 transition-colors pt-4 border-t border-white/10"
            >
              Discuss Fractional Role <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </Card3D>
        </div>
      </div>

      {/* Interactive Lead Magnet: Production AI Readiness Checklist */}
      <div id="readiness-checklist" className="p-8 sm:p-10 apple-glass rounded-2xl border border-white/10 mb-16 scroll-mt-24">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono text-terracotta uppercase mb-1">Interactive Diagnostic Tool</div>
            <h2 className="text-2xl font-bold text-white">Production AI Readiness Checklist</h2>
            <p className="text-xs text-slate-400 mt-1">Audit your AI stack against 12 critical enterprise production requirements.</p>
          </div>
          <div className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
            <div className="text-right">
              <div className="text-[10px] font-mono text-slate-400">Readiness Score</div>
              <div className="text-xl font-bold font-mono text-emerald-400">{scorePercent}%</div>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-emerald-400 flex items-center justify-center text-xs font-bold font-mono text-emerald-400">
              {checkedCount}/{totalItems}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {checklistSections.map((sec, sIdx) => (
            <div key={sIdx} className="space-y-3">
              <h3 className="text-sm font-bold text-white font-mono">{sec.category}</h3>
              <div className="space-y-2">
                {sec.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-start gap-3 ${
                      checkedItems[item.id]
                        ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200'
                        : 'border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded shrink-0 mt-0.5 flex items-center justify-center border transition-colors ${
                      checkedItems[item.id] ? 'bg-emerald-500 border-emerald-400 text-black' : 'border-slate-500'
                    }`}>
                      {checkedItems[item.id] && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-white mb-1">
              {scorePercent >= 80 
                ? 'High Production Readiness' 
                : scorePercent >= 50 
                ? 'Moderate Production Risk' 
                : 'High Latency / Reliability Vulnerabilities Detected'}
            </div>
            <p className="text-xs text-slate-400">
              {scorePercent >= 80 
                ? 'Your stack incorporates sound engineering gates. Schedule an assessment to optimize cost and edge latency.' 
                : 'Key production gates are missing. An assessment sprint will prevent costly outages and user churn.'}
            </p>
          </div>
          <button
            onClick={onBookCall}
            className="px-5 py-2.5 rounded-full bg-terracotta hover:bg-[#c4684a] text-white text-xs font-mono font-medium transition-all shrink-0"
          >
            Review Diagnostic With Mohsin
          </button>
        </div>
      </div>
    </div>
  );
};

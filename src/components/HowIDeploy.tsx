import React, { useState, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Cpu, 
  Server, 
  CheckCircle2, 
  ChevronDown, 
  Terminal, 
  ArrowRight 
} from 'lucide-react';

interface ArchitectureLayer {
  id: string;
  marker: string;
  phase: string;
  title: string;
  description: string;
  slaFocus: string;
  icon: React.ElementType;
  specs: {
    label: string;
    value: string;
    detail: string;
  }[];
  technologies: string[];
}

const DEPLOYMENT_LAYERS: ArchitectureLayer[] = [
  {
    id: 'layer-01',
    marker: '01 / FRAME',
    phase: 'Problem Framing & Feasibility',
    title: 'Metric-Driven Boundary & SLA Scoping',
    description: 'Deconstruct monolithic enterprise bottlenecks. Establish sub-40ms latency bounds, token FinOps targets, and deterministic fast-path feasibility before writing model code.',
    slaFocus: 'Sub-40ms P99 Bound & FinOps Scoping',
    icon: Compass,
    specs: [
      { label: 'Latency Budgeting', value: '< 40ms Bound', detail: 'SLM classification fast-path eliminates frontier model latency on 75%+ routine intents.' },
      { label: 'FinOps Target', value: '-72% Cloud Delta', detail: 'Caching, token-pruning, and schema routing reduce inference expenses systematically.' },
      { label: 'Feasibility Audit', value: 'Zero Hallucination', detail: 'Strict boundary isolation between generative synthesis and deterministic business logic.' },
    ],
    technologies: ['FastAPI', 'Redis Cache', 'DistilBERT', 'Pydantic v2'],
  },
  {
    id: 'layer-02',
    marker: '02 / DESIGN',
    phase: 'Agent & Tool Design',
    title: 'Stateful Orchestration & Guardrail Ingress',
    description: 'Architect LangGraph state machines, Pydantic v2 schema validators, and semantic WAF boundaries to eradicate prompt injection and invalid tool calls at the perimeter.',
    slaFocus: 'Zero-Cascade Resilience & Strict Validation',
    icon: Cpu,
    specs: [
      { label: 'State Machine', value: 'LangGraph StateGraph', detail: 'Cyclic graph orchestration with checkpoint persistence and transactional rollback.' },
      { label: 'Ingress Defense', value: 'Semantic WAF Boundary', detail: 'Vector distance checks against jailbreak vectors + rigid Pydantic v2 type enforcement.' },
      { label: 'Circuit Breaker', value: 'Wall-Clock Timers', detail: 'Hard execution timeouts with automated fallback to rule-based deterministic responses.' },
    ],
    technologies: ['LangGraph', 'Pydantic v2', 'Semantic Guardrails', 'Tenacity'],
  },
  {
    id: 'layer-03',
    marker: '03 / DEPLOY',
    phase: 'Forward Deployment',
    title: 'In-Network Hardening & High-Concurrency Serving',
    description: 'Deploy containerized vLLM and Triton Inference microservices inside client VPCs. Integrate Redis semantic caching and Kafka event streams for 100k+ req/sec scale.',
    slaFocus: '100k+ Req/Sec & In-VPC Isolation',
    icon: Server,
    specs: [
      { label: 'Engine Optimization', value: 'vLLM / Triton Server', detail: 'PagedAttention, dynamic continuous batching, and FP8/AWQ quantization on GPU clusters.' },
      { label: 'Semantic Caching', value: 'Redis Cluster', detail: 'Cosine-similarity threshold caching resolving recurring semantic queries in <12ms.' },
      { label: 'Stream Ingress', value: 'Apache Kafka', detail: 'Backpressure-governed distributed messaging pipeline with zero message loss.' },
    ],
    technologies: ['vLLM', 'NVIDIA Triton', 'Docker', 'Redis', 'Apache Kafka'],
  },
  {
    id: 'layer-04',
    marker: '04 / HANDOFF',
    phase: 'Production Handoff',
    title: 'Audited Regression Suites & Client Enablement',
    description: 'Implement automated CI/CD synthetic evaluation harnesses, wall-clock circuit breakers, and telemetry dashboards. Handoff complete architecture runbooks to internal teams.',
    slaFocus: '100% Citation Grounding & Team Ownership',
    icon: CheckCircle2,
    specs: [
      { label: 'Evaluation Harness', value: 'Automated CI/CD', detail: 'Synthetic test fixtures executed on every PR to prevent regression and semantic drift.' },
      { label: 'Telemetry Stack', value: 'Langfuse / Prometheus', detail: 'Token usage, latency distributions, and cost per request tracked in real-time dashboards.' },
      { label: 'Client Enablement', value: 'Production Runbooks', detail: 'Architecture blueprints, incident failover procedures, and hands-on team workshops.' },
    ],
    technologies: ['Langfuse', 'Prometheus', 'GitHub Actions', 'DeepEval'],
  },
];

export const HowIDeploy: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = Math.min(DEPLOYMENT_LAYERS.length - 1, index + 1);
      setActiveLayer(nextIndex);
      document.getElementById(`layer-btn-${nextIndex}`)?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = Math.max(0, index - 1);
      setActiveLayer(prevIndex);
      document.getElementById(`layer-btn-${prevIndex}`)?.focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveLayer(activeLayer === index ? -1 : index);
    }
  };

  return (
    <section id="how-i-deploy" className="py-20 md:py-28 bg-canvas relative overflow-hidden border-t border-canvas-border">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-terracotta/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-terracotta/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-canvas-border text-xs font-mono text-terracotta mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>FORWARD DEPLOYMENT ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
            How I architect and deploy{' '}
            <span className="font-serif italic font-normal text-luxury-champagne">Tier-1 AI systems.</span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            A battle-tested four-layer methodology refined across Flipkart, Accenture, and Novartis. Moving from high-stakes metric boundaries down into containerized, high-concurrency VPC execution.
          </p>
        </div>

        {/* 4 Stacked Architecture Layers with Metallic Signal Path */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 space-y-4">
          
          {/* Continuous Glowing Signal Path Vector */}
          <div 
            aria-hidden="true" 
            className="absolute left-2.5 sm:left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#D97757] via-white/30 to-[#D97757]/20 pointer-events-none"
          />

          {DEPLOYMENT_LAYERS.map((layer, index) => {
            const isExpanded = activeLayer === index;
            const Icon = layer.icon;

            return (
              <div
                key={layer.id}
                className="relative"
              >
                {/* Node Anchor on the Signal Path */}
                <div 
                  aria-hidden="true"
                  className={`absolute -left-[23px] sm:-left-[31px] top-6 w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    isExpanded 
                      ? 'border-terracotta bg-[#121110] shadow-[0_0_12px_rgba(217,119,87,0.8)] scale-110' 
                      : 'border-white/20 bg-canvas-card'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${isExpanded ? 'bg-terracotta animate-pulse' : 'bg-white/40'}`} />
                </div>

                {/* Collapsible Layer Card */}
                <div
                  id={`layer-btn-${index}`}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onClick={() => setActiveLayer(isExpanded ? -1 : index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className={`w-full text-left rounded-2xl transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-terracotta/50 ${
                    isExpanded
                      ? 'bg-canvas-cardElevated border-terracotta/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] ring-1 ring-terracotta/20'
                      : 'bg-canvas-card border-canvas-border hover:border-white/20 hover:bg-canvas-card/90'
                  }`}
                >
                  {/* Layer Header Bar */}
                  <div className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none">
                    <div className="flex items-start sm:items-center gap-4">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                        isExpanded 
                          ? 'bg-terracotta text-white border-terracotta shadow-[0_0_15px_rgba(217,119,87,0.4)]' 
                          : 'bg-canvas-surface text-slate-300 border-white/10'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-bold text-terracotta tracking-wider">
                            {layer.marker}
                          </span>
                          <span className="text-white/40 text-xs">•</span>
                          <span className="text-xs font-mono uppercase text-slate-400">
                            {layer.phase}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white font-sans mt-0.5">
                          {layer.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pl-15 sm:pl-0">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/40 border border-white/10 text-emerald-400">
                        {layer.slaFocus}
                      </span>
                      <div className={`p-1.5 rounded-lg bg-white/5 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-terracotta' : 'text-slate-400'}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Layer Deep-Dive Specifications */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden border-t border-white/10"
                      >
                        <div className="p-5 sm:p-7 pt-4 space-y-6 bg-black/20">
                          
                          <p className="text-slate-300 text-sm leading-relaxed max-w-4xl">
                            {layer.description}
                          </p>

                          {/* Tactical Specs Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {layer.specs.map((spec, i) => (
                              <div
                                key={i}
                                className="p-3.5 rounded-xl bg-canvas-card border border-canvas-border"
                              >
                                <span className="text-[10px] font-mono text-terracotta uppercase tracking-wider block">
                                  {spec.label}
                                </span>
                                <span className="text-sm font-bold font-mono text-white mt-0.5 block">
                                  {spec.value}
                                </span>
                                <p className="text-xs text-slate-400 mt-1.5 leading-normal">
                                  {spec.detail}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* Technology Stack Tags */}
                          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/5">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <span className="text-xs font-mono text-slate-400 mr-2">STACK ENFORCEMENT:</span>
                              {layer.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <a
                              href="#systems-section"
                              className="text-xs font-mono text-terracotta hover:text-white flex items-center gap-1 transition-colors"
                            >
                              <span>Inspect Topology</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Cpu, Terminal, Database, ShieldCheck, Wrench } from 'lucide-react';

export const TechRadar: React.FC = () => {
  const categories = [
    {
      icon: Cpu,
      title: 'Agentic Systems & Orchestration',
      color: 'text-luxury-gold',
      borderColor: 'border-luxury-gold/30',
      skills: ['LangGraph', 'LangChain', 'Deterministic Routing', 'Multi-Agent Consensus', 'Pydantic v2', 'Human-in-the-Loop', 'Stateful Memory']
    },
    {
      icon: Terminal,
      title: 'Inference & High-Performance Serving',
      color: 'text-white',
      borderColor: 'border-white/20',
      skills: ['vLLM', 'Triton Inference Server', 'PyTorch', 'TensorRT', 'FastAPI', 'GPU Telemetry', 'Async Concurrency']
    },
    {
      icon: Database,
      title: 'Vector Retrieval & Knowledge Engines',
      color: 'text-luxury-gold',
      borderColor: 'border-luxury-gold/30',
      skills: ['Milvus', 'Qdrant', 'ChromaDB', 'PGvector', 'Hybrid BM25', 'Cross-Encoder Reranking', 'Semantic Chunking']
    },
    {
      icon: ShieldCheck,
      title: 'LLMOps, Guardrails & Infrastructure',
      color: 'text-luxury-platinum',
      borderColor: 'border-luxury-platinum/30',
      skills: ['MLflow', 'Langfuse', 'CI/CD Synthetic Evals', 'Wall-Clock Retry Budgets', 'Docker', 'Kubernetes', 'Jailbreak Defenses']
    }
  ];

  return (
    <section className="py-24 bg-canvas-subtle border-t border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-canvas-border text-xs font-mono text-luxury-gold">
            <Wrench className="w-3.5 h-3.5" />
            <span>PRODUCTION ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight">
            Battle-Tested Tech Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            No toy tools or fragile scripts. A hardened engineering stack selected for enterprise reliability, high concurrency, and cost discipline.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-canvas-card border border-canvas-border space-y-5 hover:border-slate-600 transition-colors shadow-subtle-card"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-canvas-surface border ${cat.borderColor} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${cat.color}`} />
                  </div>
                  <h3 className="font-sans text-base font-bold text-white">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-canvas-surface border border-canvas-border font-mono text-xs text-slate-300 hover:border-luxury-gold/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

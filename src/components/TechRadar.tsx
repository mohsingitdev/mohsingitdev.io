import React from 'react';
import { Cpu, Terminal, Database, ShieldCheck, Wrench } from 'lucide-react';

export const TechRadar: React.FC = () => {
  const categories = [
    {
      icon: Cpu,
      title: 'Agentic Systems & Orchestration',
      color: 'text-cyber-green',
      borderColor: 'border-cyber-green/30',
      skills: ['LangGraph', 'LangChain', 'Deterministic Routing', 'Multi-Agent Consensus', 'Pydantic v2', 'Human-in-the-Loop', 'Stateful Memory']
    },
    {
      icon: Terminal,
      title: 'Inference & High-Performance Serving',
      color: 'text-cyber-cyan',
      borderColor: 'border-cyber-cyan/30',
      skills: ['vLLM', 'Triton Inference Server', 'PyTorch', 'TensorRT', 'FastAPI', 'GPU Telemetry', 'Async Concurrency']
    },
    {
      icon: Database,
      title: 'Vector Retrieval & Knowledge Engines',
      color: 'text-cyber-green',
      borderColor: 'border-cyber-green/30',
      skills: ['Milvus', 'Qdrant', 'ChromaDB', 'PGvector', 'Hybrid BM25', 'Cross-Encoder Reranking', 'Semantic Chunking']
    },
    {
      icon: ShieldCheck,
      title: 'LLMOps, Guardrails & Infrastructure',
      color: 'text-cyber-purple',
      borderColor: 'border-cyber-purple/30',
      skills: ['MLflow', 'Langfuse', 'CI/CD Synthetic Evals', 'Wall-Clock Retry Budgets', 'Docker', 'Kubernetes', 'Jailbreak Defenses']
    }
  ];

  return (
    <section className="py-20 bg-cyber-surface/50 border-t border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono text-cyber-green">
            <Wrench className="w-3.5 h-3.5" />
            <span>PRODUCTION ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Battle-Tested Tech Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
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
                className="p-6 rounded-2xl bg-cyber-card/80 border border-cyber-border space-y-4 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg bg-cyber-bg border ${cat.borderColor} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${cat.color}`} />
                  </div>
                  <h3 className="font-mono text-base font-bold text-white">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg bg-cyber-bg border border-cyber-border/80 font-mono text-xs text-slate-300 hover:border-cyber-green/50 transition-colors"
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

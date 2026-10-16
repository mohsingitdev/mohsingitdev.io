import React from 'react';
import { BrandOrbs } from '@designcodeio/threeui';
import { ModelTarget } from './Hero3DCanvas';
import { ArrowUpRight } from 'lucide-react';

interface Hero3DOrbsHUDProps {
  activeModel: ModelTarget;
  onSelectModel: (model: ModelTarget) => void;
}

export const Hero3DOrbsHUD: React.FC<Hero3DOrbsHUDProps> = ({
  activeModel,
  onSelectModel
}) => {
  const models = [
    {
      id: 'gemma' as ModelTarget,
      name: 'Gemma 8B / 27B',
      badge: 'HF LoRA Fine-Tuned',
      role: 'Task-Specific Agent Fleet',
      latency: '~ 65ms (vLLM)',
      orbVariant: 'gemini' as const,
      color: 'amber'
    },
    {
      id: 'laya' as ModelTarget,
      name: 'Laya SLM Core',
      badge: 'Deterministic Router',
      role: 'Sub-40ms Fast-Path & Cache',
      latency: '< 33ms (Local)',
      orbVariant: 'aura' as const,
      color: 'emerald'
    },
    {
      id: 'claude' as ModelTarget,
      name: 'Claude 3.7 Sonnet',
      badge: 'Frontier Reasoning',
      role: 'Multi-Step Orchestration',
      latency: '~ 420ms (API)',
      orbVariant: 'claude' as const,
      color: 'terracotta'
    },
    {
      id: 'openai' as ModelTarget,
      name: 'OpenAI GPT-4o',
      badge: 'Multimodal Ingress',
      role: 'Structured Schema & Vision',
      latency: '~ 380ms (API)',
      orbVariant: 'openai' as const,
      color: 'sky'
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-2.5 w-full">
      {models.map((m) => {
        const isSelected = activeModel === m.id;
        return (
          <button
            key={m.id}
            type="button"
            onClick={() => onSelectModel(m.id)}
            className={`p-2.5 sm:p-3 rounded-2xl apple-glass border transition-all text-left flex items-start gap-2.5 group relative overflow-hidden ${
              isSelected
                ? 'border-terracotta/70 bg-white/10 shadow-[0_6px_20px_rgba(217,119,87,0.3)] scale-[1.02]'
                : 'border-white/10 bg-black/45 hover:border-white/25 hover:bg-black/65'
            }`}
          >
            {/* 3D WebGL Shader Brand Orb */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black/70 border border-white/15 flex items-center justify-center shrink-0 overflow-hidden shadow-inner group-hover:scale-105 transition-transform">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden">
                <BrandOrbs variant={m.orbVariant} size="small" mode="dark" speed={isSelected ? 1.5 : 1} />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <span className="text-xs font-bold text-white tracking-tight truncate block group-hover:text-luxury-champagne transition-colors">
                  {m.name}
                </span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                )}
              </div>
              <div className="text-[10px] text-terracotta font-mono font-medium truncate">{m.badge}</div>
              <div className="text-[10px] text-white/70 truncate">{m.role}</div>
              <div className="flex items-center justify-between mt-1 text-[10px] font-mono">
                <span className="text-luxury-champagne font-semibold">{m.latency}</span>
                <span className="text-white/40 group-hover:text-white/80 transition-colors flex items-center">
                  <span>Route</span>
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </span>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

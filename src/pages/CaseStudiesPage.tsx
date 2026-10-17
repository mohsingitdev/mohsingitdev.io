import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { CASE_STUDIES } from '../data/caseStudiesData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Copy, 
  Check, 
  Github, 
  Layers, 
  Cpu 
} from 'lucide-react';
import { Card3D } from '../components/common/Card3D';

interface CaseStudiesPageProps {
  slug?: string;
  onBookCall: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ slug, onBookCall }) => {
  const { navigate } = useRouter();
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  const activeStudy = slug 
    ? CASE_STUDIES.find(c => c.slug === slug) 
    : null;

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  // If viewing a specific case study
  if (activeStudy) {
    return (
      <div className="pt-24 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-8">
          <button 
            onClick={() => navigate('/')} 
            className="hover:text-terracotta transition-colors"
          >
            home
          </button>
          <span>/</span>
          <button 
            onClick={() => navigate('/case-studies')} 
            className="hover:text-terracotta transition-colors"
          >
            case-studies
          </button>
          <span>/</span>
          <span className="text-terracotta truncate">{activeStudy.slug}</span>
        </div>

        {/* Back Link */}
        <button
          onClick={() => navigate('/case-studies')}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white mb-6 group transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          All Production Case Studies
        </button>

        {/* Header Block */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono border border-terracotta/40 bg-terracotta/10 text-terracotta">
              Production Architecture Teardown
            </span>
            <span className="text-xs font-mono text-slate-500">• {activeStudy.date}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            {activeStudy.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans mb-6">
            {activeStudy.outcome}
          </p>

          {/* Relationship Disclosure Banner */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-400 flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200 block mb-0.5">Relationship &amp; Workload Disclosure:</strong>
              {activeStudy.relationshipDisclosure}. Numbers reflect verified test conditions and empirical benchmarks.
            </div>
          </div>
        </div>

        {/* Role & Problem Context */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card3D className="p-6 apple-glass rounded-2xl border border-white/10">
            <h2 className="text-sm font-bold text-white mb-3 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-terracotta" />
              Role &amp; Ownership
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeStudy.roleAndOwnership}
            </p>
          </Card3D>

          <Card3D className="p-6 apple-glass rounded-2xl border border-white/10">
            <h2 className="text-sm font-bold text-white mb-3 font-mono flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Core Problem &amp; Constraints
            </h2>
            <ul className="space-y-2 text-xs text-slate-300">
              {activeStudy.problemAndConstraints.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card3D>
        </div>

        {/* Quantitative Benchmark Disclosures */}
        <div className="mb-14">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-terracotta" />
            Empirical Results &amp; Quantitative Disclosures
          </h2>
          <div className="overflow-x-auto rounded-xl border border-white/10 apple-glass">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-white/5 text-slate-400 border-b border-white/10">
                <tr>
                  <th className="p-3.5">Metric Tracked</th>
                  <th className="p-3.5">Previous Baseline</th>
                  <th className="p-3.5 text-emerald-400">Achieved Result</th>
                  <th className="p-3.5">Benchmark Test Conditions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {activeStudy.quantitativeResults.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02]">
                    <td className="p-3.5 font-bold text-white">{row.metric}</td>
                    <td className="p-3.5 text-slate-400 line-through">{row.baseline}</td>
                    <td className="p-3.5 text-emerald-400 font-bold">{row.achieved}</td>
                    <td className="p-3.5 text-slate-400">{row.testConditions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Architecture & Decisions */}
        <div className="mb-14 space-y-8">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-terracotta" />
            Architecture &amp; Engineering Decisions
          </h2>
          {activeStudy.architectureAndDecisions.map((arch, idx) => (
            <div key={idx} className="p-6 apple-glass rounded-2xl border border-white/10">
              <h3 className="text-base font-bold text-white mb-2">{arch.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {arch.description}
              </p>
              {arch.codeSnippet && (
                <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0d1117]">
                  <div className="px-4 py-2 bg-white/5 border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{arch.codeSnippet.caption}</span>
                    <button
                      onClick={() => handleCopy(arch.codeSnippet!.code, `code-${idx}`)}
                      className="flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                      {copiedSnippet === `code-${idx}` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 text-xs font-mono text-emerald-300/90 overflow-x-auto leading-relaxed">
                    <code>{arch.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trade-offs & Post-Testing Changes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="p-6 apple-glass rounded-2xl border border-white/10">
            <h3 className="text-sm font-bold text-white mb-3 font-mono">Failure Modes &amp; Trade-offs</h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {activeStudy.failureModesAndTradeoffs.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-terracotta font-mono">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 apple-glass rounded-2xl border border-white/10">
            <h3 className="text-sm font-bold text-white mb-3 font-mono">Changes Made After Testing</h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {activeStudy.postTestingChanges.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technology Badges & Links */}
        <div className="border-t border-white/10 pt-8 mb-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {activeStudy.technologies.map((t, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {activeStudy.githubRepo && (
              <a
                href={activeStudy.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub Repository
              </a>
            )}
            <button
              onClick={onBookCall}
              className="px-5 py-2 rounded-lg bg-terracotta hover:bg-[#c4684a] text-white text-xs font-mono font-medium transition-all shadow-md"
            >
              Discuss Architecture Audit
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Case Studies Index Page
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
        <span className="text-terracotta">case-studies</span>
      </div>

      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Production AI <span className="gradient-text">Case Studies</span>
        </h1>
        <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
          Audit-grade engineering teardowns of retrieval systems, model routing gateways, and voice AI integrations moving from prototype to reliable enterprise scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CASE_STUDIES.map((study) => (
          <Card3D key={study.slug} className="p-6 apple-glass rounded-2xl border border-white/10 flex flex-col justify-between hover:border-terracotta/40 transition-all">
            <div>
              <div className="text-[11px] font-mono text-terracotta mb-2">{study.date} • {study.technologies.slice(0, 3).join(', ')}</div>
              <h2 className="text-lg font-bold text-white mb-3 hover:text-terracotta transition-colors cursor-pointer" onClick={() => navigate(`/case-studies/${study.slug}`)}>
                {study.title}
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {study.outcome}
              </p>
            </div>

            <div className="border-t border-white/10 pt-4 flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-500">12-Point Empirical Teardown</span>
              <button
                onClick={() => navigate(`/case-studies/${study.slug}`)}
                className="text-xs font-mono font-medium text-terracotta hover:text-white flex items-center gap-1.5 transition-colors"
              >
                Read Case Study
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </Card3D>
        ))}
      </div>
    </div>
  );
};

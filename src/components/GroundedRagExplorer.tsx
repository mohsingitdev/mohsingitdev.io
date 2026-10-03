import React, { useState } from 'react';
import { Database, FileText, CheckCircle2, Search, Link2, ExternalLink, ShieldCheck } from 'lucide-react';

export const GroundedRagExplorer: React.FC = () => {
  const [selectedCitation, setSelectedCitation] = useState<number | null>(1);

  const sampleCorpus = {
    docTitle: 'Clinical Trial Investigation Report: Compound B-419 (Phase II)',
    sourceId: 'DOC-CT-2025-098-FINAL.PDF',
    pageNumber: 14,
    paragraphNumber: 3,
    excerptText:
      '...In the randomized double-blind Phase II cohort (n=450), Compound B-419 demonstrated a statistically significant 38.4% reduction in biomarker elevation (p < 0.001) compared to standard-of-care placebo at week 12, with no treatment-emergent grade 3 adverse events reported in the 50mg/day titration group...',
    boundingOffset: 'chars 1,240 - 1,485',
    similarityScore: 0.962
  };

  return (
    <div className="rounded-2xl bg-cyber-card border border-cyber-border p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-cyber-border pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-cyber-cyan" />
            <h3 className="font-mono text-lg font-bold text-white">
              Live Architecture Simulator: Citation-Grounded Enterprise RAG
            </h3>
          </div>
          <p className="text-xs text-cyber-muted mt-1">
            Explore how Mohsin's hybrid retrieval and post-generation citation verification eliminates hallucinations in scientific and regulatory corpora.
          </p>
        </div>

        <a
          href="https://github.com/mohsingitdev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-cyber-cyan hover:text-white transition-colors"
        >
          <span>View RAG Pipeline Repo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Query Bar */}
      <div className="p-4 rounded-xl bg-cyber-bg border border-cyber-border space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-cyber-muted">
          <Search className="w-3.5 h-3.5 text-cyber-cyan" />
          <span>RESEARCHER_QUERY:</span>
        </div>
        <div className="text-sm font-medium text-white pl-5 border-l-2 border-cyber-cyan">
          "What was the biomarker reduction and safety profile for Compound B-419 at week 12 in the Phase II trial?"
        </div>
      </div>

      {/* Multi-Stage Retrieval Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-lg bg-cyber-surface border border-cyber-border space-y-1">
          <div className="text-[11px] font-mono text-cyber-muted uppercase">Stage 1: Lexical Search</div>
          <div className="text-xs font-semibold text-slate-200">BM25 Token Match</div>
          <div className="text-[11px] text-slate-400">Exact match on `Compound B-419` & `Phase II`</div>
        </div>

        <div className="p-3.5 rounded-lg bg-cyber-surface border border-cyber-border space-y-1">
          <div className="text-[11px] font-mono text-cyber-muted uppercase">Stage 2: Dense Semantic</div>
          <div className="text-xs font-semibold text-slate-200">Cohere / BGE Embedding</div>
          <div className="text-[11px] text-slate-400">Cosine similarity retrieved top 50 passages</div>
        </div>

        <div className="p-3.5 rounded-lg bg-cyber-surface border border-cyber-green/40 space-y-1">
          <div className="text-[11px] font-mono text-cyber-green uppercase">Stage 3: Cross-Encoder</div>
          <div className="text-xs font-semibold text-cyber-green">Reranked Top-5 Chunks</div>
          <div className="text-[11px] text-slate-300">Confidence Score: 0.962 (Passes Threshold)</div>
        </div>
      </div>

      {/* Generated Response with Interactive Grounding Badges */}
      <div className="p-5 rounded-xl bg-cyber-surface border border-cyber-border space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-cyber-border/60 pb-2">
          <span className="flex items-center gap-1.5 text-cyber-green">
            <CheckCircle2 className="w-4 h-4" />
            GROUNDED GENERATION (100% ATTRIBUTED)
          </span>
          <span className="text-[11px] text-cyber-muted">Latency: 140ms</span>
        </div>

        <div className="text-sm leading-relaxed text-slate-200 space-y-2">
          <p>
            In the Phase II double-blind trial cohort (n=450), Compound B-419 achieved a{' '}
            <span className="bg-cyber-green/20 text-cyber-green px-1.5 py-0.5 rounded border border-cyber-green/40 font-medium">
              38.4% reduction in biomarker elevation
            </span>{' '}
            compared to placebo at week 12 (p &lt; 0.001){' '}
            <button
              onClick={() => setSelectedCitation(1)}
              className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] font-mono bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40 hover:bg-cyber-cyan hover:text-black transition-colors"
            >
              <Link2 className="w-3 h-3" />
              [Ref: Doc-098 ¶3]
            </button>
            . Additionally, safety analysis revealed{' '}
            <span className="bg-cyber-green/20 text-cyber-green px-1.5 py-0.5 rounded border border-cyber-green/40 font-medium">
              zero treatment-emergent grade 3 adverse events
            </span>{' '}
            in the 50mg/day titration group{' '}
            <button
              onClick={() => setSelectedCitation(1)}
              className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] font-mono bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40 hover:bg-cyber-cyan hover:text-black transition-colors"
            >
              <Link2 className="w-3 h-3" />
              [Ref: Doc-098 ¶3]
            </button>
            .
          </p>
        </div>
      </div>

      {/* Verified Source Document Inspector */}
      {selectedCitation && (
        <div className="p-4 rounded-xl bg-cyber-bg border border-cyber-cyan/40 space-y-3 font-mono text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-slate-400 gap-2 border-b border-cyber-border pb-2">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyber-cyan" />
              <span className="text-white font-semibold">{sampleCorpus.docTitle}</span>
            </div>
            <div className="text-[11px] text-cyber-cyan">
              Source: {sampleCorpus.sourceId} | Page {sampleCorpus.pageNumber}
            </div>
          </div>

          <div className="text-slate-300 bg-cyber-card/80 p-3.5 rounded-lg border border-cyber-border leading-relaxed text-xs">
            <span className="text-cyber-muted select-none">...</span>
            <span className="bg-cyber-cyan/15 text-slate-100 px-1 py-0.5 rounded border border-cyber-cyan/30">
              {sampleCorpus.excerptText}
            </span>
            <span className="text-cyber-muted select-none">...</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-cyber-muted pt-1">
            <span>Exact Bounding Range: {sampleCorpus.boundingOffset}</span>
            <span className="flex items-center gap-1 text-cyber-green font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Audit Assertion: Zero Hallucination Confirmed
            </span>
          </div>
        </div>
      )}

    </div>
  );
};

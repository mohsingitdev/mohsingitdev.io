import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blogPosts';
import { BlogPost } from '../types';
import { BookOpen, Clock, Calendar, ArrowRight, X, Copy, Check, Sparkles, Terminal } from 'lucide-react';

interface BlogSectionProps {
  onBookCall: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onBookCall }) => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  return (
    <section id="blog" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono text-cyber-green">
          <BookOpen className="w-3.5 h-3.5" />
          <span>TECHNICAL THOUGHT LEADERSHIP</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Production AI Architectural Notes
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Deep-dive field notes, latency optimizations, and production war stories from deploying multi-agent systems and enterprise RAG at scale.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            onClick={() => setActivePost(post)}
            className="rounded-2xl bg-cyber-surface border border-cyber-border p-6 flex flex-col justify-between space-y-6 hover:border-cyber-green/50 cursor-pointer group transition-all duration-300 shadow-md"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-cyber-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyber-green" />
                  {post.readingTime}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-cyber-green transition-colors leading-snug">
                {post.title}
              </h3>

              <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                {post.description}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-card border border-cyber-border text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-cyber-border/70 flex items-center justify-between text-xs font-mono text-cyber-green font-semibold">
                <span>Read Full Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Active Post Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-4xl rounded-2xl bg-cyber-surface border border-cyber-green/40 shadow-neon max-h-[90vh] overflow-y-auto p-6 sm:p-10 space-y-8 my-8 text-slate-200">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-cyber-border pb-5 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs font-mono text-cyber-muted">
                  <span>{activePost.date}</span>
                  <span>•</span>
                  <span className="text-cyber-green">{activePost.readingTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {activePost.title}
                </h2>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activePost.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-mono px-2.5 py-0.5 rounded bg-cyber-card border border-cyber-border text-cyber-cyan">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActivePost(null)}
                className="p-2 rounded-lg bg-cyber-card border border-cyber-border text-slate-400 hover:text-white hover:border-cyber-green transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Article Content */}
            <div className="space-y-8">
              {activePost.content.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                    <span className="text-cyber-green">#</span>
                    {sec.sectionTitle}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {sec.body}
                  </p>

                  {/* Optional Callout */}
                  {sec.callout && (
                    <div className="p-4 rounded-xl bg-cyber-card border-l-4 border-cyber-green text-xs font-mono text-slate-200 space-y-1">
                      <div className="text-cyber-green font-bold uppercase tracking-wider">
                        {sec.callout.type.toUpperCase()} NOTE
                      </div>
                      <div>{sec.callout.text}</div>
                    </div>
                  )}

                  {/* Optional Code Snippet */}
                  {sec.codeSnippet && (
                    <div className="rounded-xl bg-cyber-bg border border-cyber-border overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 bg-cyber-card border-b border-cyber-border text-xs font-mono text-slate-400">
                        <div className="flex items-center gap-2">
                          <Terminal className="w-3.5 h-3.5 text-cyber-green" />
                          <span>{sec.codeSnippet.caption || 'production-snippet.py'}</span>
                        </div>
                        <button
                          onClick={() => handleCopy(sec.codeSnippet!.code, `${idx}`)}
                          className="flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-cyber-green transition-colors"
                        >
                          {copiedCodeId === `${idx}` ? (
                            <>
                              <Check className="w-3 h-3 text-cyber-green" />
                              <span className="text-cyber-green">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed bg-[#060709]">
                        <code>{sec.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* In-Article Conversion Card */}
            <div className="p-6 rounded-xl bg-cyber-card border border-cyber-green/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyber-green" />
                  <span>Looking to implement this architecture in your company?</span>
                </div>
                <div className="text-xs text-slate-400">
                  Book a 30-minute technical audit call to review your current bottlenecks and migration path.
                </div>
              </div>
              <button
                onClick={() => { setActivePost(null); onBookCall(); }}
                className="px-5 py-2.5 rounded-lg bg-cyber-green text-black font-semibold text-xs whitespace-nowrap shadow-neon hover:bg-white transition-all"
              >
                Schedule Technical Audit
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

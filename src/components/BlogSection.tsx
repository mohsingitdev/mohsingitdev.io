import React, { useState, useEffect } from 'react';
import { BLOG_POSTS } from '../data/blogPosts';
import { BlogPost } from '../types';
import { BookOpen, Clock, Calendar, ArrowRight, X, Copy, Check, Sparkles, Terminal, Share2, Download, ExternalLink, CheckCircle2, Loader2 } from 'lucide-react';
import { Card3D } from './common/Card3D';
import { submitLeadInquiry, trackVisitorEvent } from '../utils/visitorTelemetry';

interface BlogSectionProps {
  onBookCall: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onBookCall }) => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [blueprintEmail, setBlueprintEmail] = useState('');
  const [isSubmittingBlueprint, setIsSubmittingBlueprint] = useState(false);
  const [blueprintSuccess, setBlueprintSuccess] = useState(false);

  // Check URL query params (?article=slug) or hash for deep linking from LinkedIn & X
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const articleSlug = params.get('article');
    if (articleSlug) {
      const matched = BLOG_POSTS.find(p => p.slug === articleSlug || p.id === articleSlug);
      if (matched) {
        setActivePost(matched);
        trackVisitorEvent('ARTICLE_DEEP_LINK_OPENED', { slug: matched.slug });
      }
    }
  }, []);

  useEffect(() => {
    if (!activePost) {
      setBlueprintSuccess(false);
      return;
    }
    trackVisitorEvent('ARTICLE_VIEWED', { slug: activePost.slug, title: activePost.title });
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePost(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [activePost]);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const handleCopyArticleLink = (post: BlogPost) => {
    const url = `https://mohsingitdev.github.io/mohsingitdev.io/?article=${post.slug}&utm_source=share&utm_medium=direct_copy`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
    trackVisitorEvent('ARTICLE_LINK_COPIED', { slug: post.slug });
  };

  const handleShareLinkedIn = (post: BlogPost) => {
    const url = `https://mohsingitdev.github.io/mohsingitdev.io/?article=${post.slug}&utm_source=linkedin&utm_medium=social_share`;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    trackVisitorEvent('ARTICLE_SHARED_LINKEDIN', { slug: post.slug });
  };

  const handleShareX = (post: BlogPost) => {
    const url = `https://mohsingitdev.github.io/mohsingitdev.io/?article=${post.slug}&utm_source=x&utm_medium=social_share`;
    const text = `Production AI Architecture field notes: "${post.title}" by Mohsin Qureshi`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    trackVisitorEvent('ARTICLE_SHARED_X', { slug: post.slug });
  };

  const handleBlueprintSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blueprintEmail || !activePost) return;
    setIsSubmittingBlueprint(true);
    await submitLeadInquiry({
      name: 'Technical Reader',
      email: blueprintEmail,
      organization: 'Enterprise Reader',
      inquiryType: 'blueprint_download',
      articleSlug: activePost.slug,
      notes: `Requested blueprint for ${activePost.title}`,
    });
    setIsSubmittingBlueprint(false);
    setBlueprintSuccess(true);
    setBlueprintEmail('');
  };

  return (
    <section id="blog" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas-card border border-terracotta/40 text-xs font-mono text-terracotta shadow-sm">
          <BookOpen className="w-3.5 h-3.5 text-terracotta" />
          <span>TECHNICAL THOUGHT LEADERSHIP</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight">
          Production AI{' '}
          <span className="font-serif italic font-normal text-terracotta">Architectural Notes</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Deep-dive field notes, latency optimizations, and production war stories from deploying multi-agent systems and enterprise RAG at scale.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
        {BLOG_POSTS.map((post) => (
          <Card3D
            key={post.id}
            className="h-full rounded-3xl"
            maxRotation={6}
            glareOpacity={0.12}
          >
            <article
              onClick={() => setActivePost(post)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActivePost(post);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Read architectural blueprint: ${post.title}`}
              className="rounded-3xl bg-canvas-surface border border-canvas-border p-5 sm:p-7 flex flex-col justify-between space-y-5 sm:space-y-6 hover:border-terracotta/50 cursor-pointer group transition-all duration-300 shadow-subtle-card apple-card-hover h-full focus:outline-none focus:ring-2 focus:ring-terracotta"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-terracotta">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors leading-snug font-sans">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {post.description}
                </p>
              </div>

              <div className="space-y-3.5 pt-1">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-canvas-card border border-canvas-border text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-canvas-border flex items-center justify-between text-xs font-mono text-terracotta font-semibold">
                  <span>Read Full Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          </Card3D>
        ))}
      </div>

      {/* Active Post Reader Modal */}
      {activePost && (
        <div 
          role="dialog" 
          aria-modal="true" 
          aria-labelledby="active-blog-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
        >
          <div className="relative w-full max-w-4xl rounded-2xl bg-canvas-surface border border-terracotta/40 shadow-apple-elevated max-h-[92vh] overflow-y-auto p-5 sm:p-10 space-y-6 sm:space-y-8 my-4 sm:my-8 text-slate-200 touch-scroll">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-canvas-border pb-4 sm:pb-5 gap-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-xs font-mono text-slate-400">
                  <span>{activePost.date}</span>
                  <span>•</span>
                  <span className="text-terracotta">{activePost.readingTime}</span>
                </div>
                <h2 id="active-blog-modal-title" className="text-xl sm:text-3xl font-bold text-white leading-tight font-sans">
                  {activePost.title}
                </h2>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activePost.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-mono px-2.5 py-0.5 rounded bg-canvas-card border border-canvas-border text-slate-300">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Social Distribution & Trackable Share Toolbar */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-[11px] font-mono text-slate-400 mr-1 flex items-center gap-1">
                    <Share2 className="w-3.5 h-3.5 text-terracotta" />
                    <span>Distribute:</span>
                  </span>
                  <button
                    onClick={() => handleShareLinkedIn(activePost)}
                    className="px-2.5 py-1 rounded-lg bg-[#0077b5]/15 border border-[#0077b5]/30 hover:bg-[#0077b5]/25 text-[11px] font-mono text-sky-300 transition-colors flex items-center gap-1"
                    title="Share on LinkedIn"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => handleShareX(activePost)}
                    className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/20 hover:bg-white/15 text-[11px] font-mono text-white transition-colors flex items-center gap-1"
                    title="Share on X (Twitter)"
                  >
                    <span>X.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => handleCopyArticleLink(activePost)}
                    className="px-2.5 py-1 rounded-lg bg-canvas-card border border-canvas-border hover:border-terracotta/40 text-[11px] font-mono text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                    title="Copy Trackable Deep-Link"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-terracotta" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <button
                onClick={() => setActivePost(null)}
                aria-label="Close article modal"
                className="p-2.5 min-h-[44px] min-w-[44px] rounded-xl bg-canvas-card border border-canvas-border text-slate-400 hover:text-white hover:border-terracotta transition-colors flex items-center justify-center shrink-0 focus:outline-none focus:ring-2 focus:ring-terracotta"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Article Content */}
            <div className="space-y-8">
              {activePost.content.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                    <span className="text-terracotta">#</span>
                    {sec.sectionTitle}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {sec.body}
                  </p>

                  {/* Optional Callout */}
                  {sec.callout && (
                    <div className="p-4 rounded-xl bg-canvas-card border-l-4 border-terracotta text-xs font-mono text-slate-200 space-y-1">
                      <div className="text-terracotta font-bold uppercase tracking-wider">
                        {sec.callout.type.toUpperCase()} NOTE
                      </div>
                      <div>{sec.callout.text}</div>
                    </div>
                  )}

                  {/* Optional Code Snippet */}
                  {sec.codeSnippet && (
                    <div className="rounded-xl bg-canvas-subtle border border-canvas-border overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 bg-canvas-card border-b border-canvas-border text-xs font-mono text-slate-400">
                        <div className="flex items-center gap-2">
                          <Terminal className="w-3.5 h-3.5 text-terracotta" />
                          <span>{sec.codeSnippet.caption || 'production-snippet.py'}</span>
                        </div>
                        <button
                          onClick={() => handleCopy(sec.codeSnippet!.code, `${idx}`)}
                          className="flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-terracotta transition-colors"
                        >
                          {copiedCodeId === `${idx}` ? (
                            <>
                              <Check className="w-3 h-3 text-terracotta" />
                              <span className="text-terracotta">Copied</span>
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

            {/* Lead Magnet Blueprint Capture Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0F131D] border border-amber-400/30 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-[10px] font-mono font-bold text-amber-300">
                    <Download className="w-3 h-3" />
                    <span>PRODUCTION ARCHITECTURE BLUEPRINT</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-sans">
                    Get the unredacted systems diagram & Pydantic schema files (PDF / Code)
                  </h4>
                  <p className="text-xs text-slate-400">
                    Includes the raw FastAPI router schemas, synthetic eval harness test cases, and load testing scripts.
                  </p>
                </div>
              </div>

              {blueprintSuccess ? (
                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Blueprint request received! The full engineering package is being dispatched to your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleBlueprintSubmit} className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
                  <input
                    type="email"
                    required
                    value={blueprintEmail}
                    onChange={(e) => setBlueprintEmail(e.target.value)}
                    placeholder="Enter your work email (e.g. name@company.com)"
                    className="w-full sm:flex-1 px-3.5 py-2.5 rounded-xl bg-canvas-card border border-canvas-border text-xs font-mono text-white focus:border-terracotta focus:outline-none placeholder:text-slate-500"
                  />
                  <button
                    type="submit"
                    disabled={isSubmittingBlueprint}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs font-sans flex items-center justify-center gap-1.5 shadow-md disabled:opacity-75 transition-all"
                  >
                    {isSubmittingBlueprint ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5 text-neutral-950" />
                        <span>Instant Access</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* In-Article Conversion Card */}
            <div className="p-6 rounded-2xl bg-canvas-card border border-terracotta/30 flex flex-col sm:flex-row items-center justify-between gap-4 apple-card-hover">
              <div className="space-y-1">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-terracotta" />
                  <span>Looking to implement this architecture in your company?</span>
                </div>
                <div className="text-xs text-slate-400">
                  Book a 30-minute technical audit call to review your current bottlenecks and migration path.
                </div>
              </div>
              <button
                onClick={() => { setActivePost(null); onBookCall(); }}
                className="px-5 py-2.5 rounded-full bg-terracotta text-white font-semibold text-xs whitespace-nowrap shadow-apple-card hover:bg-[#c26243] apple-spring active:scale-95 transition-all"
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

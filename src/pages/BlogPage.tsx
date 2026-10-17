import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { BLOG_POSTS } from '../data/blogPosts';
import { BlogPost } from '../types';
import { 
  Clock, 
  Calendar, 
  ArrowLeft, 
  ArrowRight, 
  Copy, 
  Check, 
  Sparkles, 
  Share2, 
  CheckCircle2, 
  Mail, 
  Loader2 
} from 'lucide-react';
import { Card3D } from '../components/common/Card3D';
import { submitLeadInquiry } from '../utils/visitorTelemetry';

interface BlogPageProps {
  slug?: string;
  onBookCall: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ slug, onBookCall }) => {
  const { navigate } = useRouter();
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const activePost = slug 
    ? BLOG_POSTS.find(p => p.slug === slug || p.id === slug) 
    : null;

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const handleCopyArticleLink = (post: BlogPost) => {
    const url = `https://mohsingitdev.github.io/mohsingitdev.io/blog/${post.slug}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setIsSubscribing(true);
    try {
      await submitLeadInquiry({
        name: 'Newsletter Subscriber',
        email: newsletterEmail,
        organization: 'Production AI Field Notes Reader',
        inquiryType: 'blueprint_download',
        notes: `Subscribed from Blog Page (Slug: ${slug || 'index'})`
      });
      setSubscribeSuccess(true);
      setNewsletterEmail('');
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubscribing(false);
    }
  };

  // Specific Article View
  if (activePost) {
    return (
      <div className="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-8">
          <button 
            onClick={() => navigate('/')} 
            className="hover:text-terracotta transition-colors"
          >
            home
          </button>
          <span>/</span>
          <button 
            onClick={() => navigate('/blog')} 
            className="hover:text-terracotta transition-colors"
          >
            blog
          </button>
          <span>/</span>
          <span className="text-terracotta truncate">{activePost.slug}</span>
        </div>

        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white mb-6 group transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          All Technical Articles
        </button>

        {/* Article Header */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-4">
            <span className="px-3 py-1 rounded-full bg-terracotta/10 border border-terracotta/30 text-terracotta">
              Production AI Field Notes
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {activePost.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {activePost.readingTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
            {activePost.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans mb-6">
            {activePost.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
            <div className="flex items-center gap-3">
              <img
                src="./images/mohsin_cutout.png"
                alt="Mohsin Qureshi"
                className="w-10 h-10 rounded-full border border-terracotta/40 object-cover bg-neutral-900"
              />
              <div>
                <div className="text-xs font-bold text-white">Mohsin Qureshi</div>
                <div className="text-[10px] font-mono text-slate-400">AI Platform Engineer &amp; FDE</div>
              </div>
            </div>

            <button
              onClick={() => handleCopyArticleLink(activePost)}
              className="px-3.5 py-1.5 rounded-lg apple-glass border border-white/10 hover:border-terracotta/40 text-xs font-mono text-slate-300 flex items-center gap-2 transition-colors"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Article</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Article Body Sections */}
        <div className="space-y-10 mb-14">
          {activePost.content.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight">
                {sec.sectionTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {sec.body}
              </p>

              {sec.callout && (
                <div className="p-4 rounded-xl border border-terracotta/30 bg-terracotta/5 text-xs sm:text-sm text-slate-200 flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                  <div>{sec.callout.text}</div>
                </div>
              )}

              {sec.codeSnippet && (
                <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0d1117] mt-4">
                  <div className="px-4 py-2 bg-white/5 border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{sec.codeSnippet.caption}</span>
                    <button
                      onClick={() => handleCopyCode(sec.codeSnippet!.code, `code-${idx}`)}
                      className="flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                      {copiedCodeId === `code-${idx}` ? (
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
                    <code>{sec.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Newsletter & Bottom CTA */}
        <div className="p-8 apple-glass rounded-2xl border border-white/10 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Subscribe to Production AI Field Notes</h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto mb-6">
            Twice-monthly engineering breakdowns on RAG evaluation, model routing, and production AI architecture. Zero marketing fluff.
          </p>

          {subscribeSuccess ? (
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-lg border border-emerald-500/30">
              <CheckCircle2 className="w-4 h-4" />
              Subscribed successfully. Welcome aboard.
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex max-w-md mx-auto gap-2">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="engineering.lead@company.com"
                required
                className="flex-1 px-4 py-2 rounded-lg apple-glass border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-terracotta font-mono"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="px-5 py-2 rounded-lg bg-terracotta hover:bg-[#c4684a] text-white text-xs font-mono font-medium transition-all shrink-0 flex items-center gap-1.5"
              >
                {isSubscribing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Mail className="w-3.5 h-3.5" />}
                Subscribe
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-4 text-xs font-mono">
            <button
              onClick={() => navigate('/case-studies')}
              className="text-terracotta hover:text-white transition-colors"
            >
              Inspect Related Case Studies →
            </button>
            <span className="text-slate-600">•</span>
            <button
              onClick={onBookCall}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Discuss a Project
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Blog Directory View
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
        <span className="text-terracotta">blog</span>
      </div>

      <div className="mb-12 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-terracotta/30 bg-terracotta/10 text-terracotta text-xs font-mono mb-3">
            TECHNICAL WRITING &amp; ARCHITECTURE NOTES
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Production AI <span className="gradient-text">Field Notes</span>
          </h1>
          <p className="text-sm text-slate-300 max-w-xl mt-3 leading-relaxed">
            First-hand engineering teardowns of multi-agent routing, evaluation gates, and enterprise deployment trade-offs.
          </p>
        </div>

        {/* Quick Newsletter Box */}
        <div className="apple-glass p-5 rounded-2xl border border-white/10 max-w-md w-full">
          <div className="text-xs font-bold text-white mb-1">Get Technical Field Notes in Your Inbox</div>
          <p className="text-[11px] text-slate-400 mb-3">Twice monthly. Strictly production code and architecture.</p>
          {subscribeSuccess ? (
            <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Subscribed
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="tech-lead@company.com"
                required
                className="flex-1 px-3 py-1.5 rounded-lg apple-glass border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-terracotta font-mono"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="px-3 py-1.5 rounded-lg bg-terracotta hover:bg-[#c4684a] text-white text-xs font-mono font-medium transition-all shrink-0"
              >
                Join
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <Card3D key={post.slug} className="p-6 apple-glass rounded-2xl border border-white/10 flex flex-col justify-between hover:border-terracotta/40 transition-all">
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-3">
                <span className="text-terracotta">{post.date}</span>
                <span>{post.readingTime}</span>
              </div>

              <h2 
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="text-base font-bold text-white mb-3 hover:text-terracotta transition-colors cursor-pointer leading-snug"
              >
                {post.title}
              </h2>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {post.description}
              </p>
            </div>

            <div className="border-t border-white/10 pt-4 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.slice(0, 2).map((t, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="text-xs font-mono font-medium text-terracotta hover:text-white flex items-center gap-1.5 transition-colors"
              >
                Read
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </Card3D>
        ))}
      </div>
    </div>
  );
};

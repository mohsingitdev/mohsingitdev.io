import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, ArrowUpRight, MessageSquare, Filter, ChevronDown, HelpCircle, ArrowRight, ShieldCheck, Zap, Globe, ExternalLink, Sparkles, Copy, Mail, Briefcase, Mic } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const CalendlySection: React.FC = () => {
  const { theme } = useTheme();
  const [selectedTimeline, setSelectedTimeline] = useState<string>('Immediately (1-2 weeks)');
  const [selectedOpportunity, setSelectedOpportunity] = useState<string>('AI Engineer Role');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'calendar' | 'directForm'>('calendar');

  // Direct Form state
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [preferredSlot, setPreferredSlot] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [isDispatched, setIsDispatched] = useState<boolean>(false);

  const [userTimezone] = useState<string>(() => {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
    } catch {
      return 'UTC';
    }
  });

  const timelines = ['Immediately (1-2 weeks)', 'Within 30 Days', 'Quarterly / Flexible'];
  const opportunities = [
    'AI Engineer Role',
    'Forward Deployment Engineer (FDE)',
    'Technical Advisory Discovery',
    'Keynote / Event Speaking Invite',
    'Casual Tech Connect'
  ];

  const calendlyBg = theme === 'dark' ? '161513' : 'faf7f2';
  const calendlyText = theme === 'dark' ? 'ffffff' : '1c1917';

  const currentCalendlyEmbedUrl = `https://calendly.com/mohsin-qureshi/15min?embed_type=Inline&background_color=${calendlyBg}&text_color=${calendlyText}&primary_color=de5a35&hide_gdpr_banner=1&a1=${encodeURIComponent(selectedOpportunity)}`;
  const directCalendlyLink = `https://calendly.com/mohsin-qureshi`;

  const openCalendlyPopup = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: `https://calendly.com/mohsin-qureshi/15min?background_color=${calendlyBg}&text_color=${calendlyText}&primary_color=de5a35&a1=${encodeURIComponent(selectedOpportunity)}`
      });
    } else {
      window.open(directCalendlyLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleDispatchForm = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:mohsin.i.qureshi@hotmail.com?subject=${encodeURIComponent(
      `[Opportunity Brief] ${selectedOpportunity} - ${clientName || 'Partner'} (${organization || 'Organization'})`
    )}&body=${encodeURIComponent(
      `Hi Mohsin,\n\nI would like to connect with you regarding an opportunity.\n\n` +
      `Contact Name: ${clientName || 'Not specified'}\n` +
      `Organization / Company: ${organization || 'Not specified'}\n` +
      `Work Email: ${clientEmail || 'Not specified'}\n` +
      `Opportunity Nature: ${selectedOpportunity}\n` +
      `Target Timeline: ${selectedTimeline}\n` +
      `Timezone: ${userTimezone}\n` +
      `Preferred Meeting Window: ${preferredSlot || 'Flexible / First Available'}\n\n` +
      `Opportunity Overview / Job Description / Event Brief:\n${notes || 'Looking forward to scheduling an introductory sync.'}\n`
    )}`;
    window.location.href = mailto;
    setIsDispatched(true);
  };

  const handleCopyDetails = () => {
    const text = `Opportunity Brief\nName: ${clientName || 'N/A'}\nOrganization: ${organization || 'N/A'}\nEmail: ${clientEmail || 'N/A'}\nNature: ${selectedOpportunity}\nTimeline: ${selectedTimeline}\nPreferred Slot: ${preferredSlot || 'Flexible'}\nNotes: ${notes || 'N/A'}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const opportunityTracks = [
    {
      phase: 'Track 01',
      title: 'Recruiter & Hiring Lead Sync',
      timing: '30 Mins • Google Meet / Zoom',
      icon: Briefcase,
      description: 'Direct alignment for AI Engineer and Forward Deployment Engineer roles with Tier-1 AI startups and enterprises.',
      deliverable: 'Mutual Fit Evaluation, Technical Defense & Compensation Calibration'
    },
    {
      phase: 'Track 02',
      title: 'Technical Advisory Discovery',
      timing: '30 Mins • NDA-Protected',
      icon: Zap,
      description: 'For CTOs and engineering directors diagnosing sub-40ms multi-agent routing bottlenecks, RAG hallucination budgets, or token FinOps burn.',
      deliverable: '1-Page Architectural Gap Analysis & High-Leverage Blueprint'
    },
    {
      phase: 'Track 03',
      title: 'Keynotes, Panels & Media',
      timing: '20 Mins • Event Alignment',
      icon: Mic,
      description: 'For conference curators, developer summits, podcast hosts, and academic symposiums seeking authoritative talks on Production AI systems.',
      deliverable: 'Session Abstract Customization & Keynote Logistics Alignment'
    }
  ];

  const faqs = [
    {
      q: 'What full-time and contractual opportunities is Mohsin currently evaluating?',
      a: 'I actively evaluate AI Engineer, Forward Deployment Engineer (FDE), and selective enterprise advisory contracts. I specialize in building deterministic low-latency multi-agent gateways, evaluation guardrails, and enterprise RAG platforms.'
    },
    {
      q: 'How can recruiters and talent partners access the official unredacted resume?',
      a: 'You can request the official CV directly via the "Request Official Resume" button in the navigation or submit the opportunity form below. Verified role briefs receive a tailored, ATS-compliant CV and relevant project dossier within 4–6 hours.'
    },
    {
      q: 'How are intellectual property and confidentiality handled for advisory conversations?',
      a: 'All technical advisory sessions operate under strict mutual confidentiality (NDA). No proprietary code or client telemetry is ever stored, analyzed outside your secure perimeter, or used for model training.'
    },
    {
      q: 'Are you open to keynote speaking, panel discussions, and podcast appearances?',
      a: 'Yes. I regularly speak on sub-40ms multi-agent routing, production guardrails, and engineering AI that survives high-concurrency enterprise workloads. Inquiries can be scheduled directly through Track 03.'
    }
  ];

  return (
    <section id="calendly" className="py-20 sm:py-24 bg-canvas-subtle border-t border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas-card border border-terracotta/40 text-xs font-mono text-terracotta shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-terracotta" />
            <span>DIRECT CONNECT & SCHEDULING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight">
            Initiate Collaboration &{' '}
            <span className="font-serif italic font-normal text-terracotta">Interviews</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Direct opportunity gateway with Mohsin Qureshi. Schedule an exploratory sync for full-time engineering roles, technical advisory, keynote invitations, or confidential inquiries.
          </p>
        </div>

        {/* 3 Opportunity Tracks */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-canvas-border pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-terracotta" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                Opportunity Ingress Tracks
              </span>
            </div>
            <span className="font-mono text-xs text-slate-400">
              Clear milestone alignment from initial introduction to technical deep-dive
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {opportunityTracks.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-canvas-card border border-canvas-border space-y-4 hover:border-terracotta/40 transition-all duration-300 shadow-apple-card flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-terracotta px-2.5 py-0.5 rounded-full bg-terracotta/10 border border-terracotta/25">
                        {step.phase}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {step.timing}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <IconComponent className="w-4 h-4 text-terracotta shrink-0" />
                      <h3 className="font-bold text-base sm:text-lg text-white font-sans leading-snug">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-canvas-border space-y-1">
                    <span className="text-[10px] font-mono uppercase text-terracotta tracking-wider font-semibold">
                      Primary Outcome:
                    </span>
                    <div className="text-xs text-white font-mono flex items-start gap-1.5 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                      <span>{step.deliverable}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2-Column Booking Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Pre-Selection Filters */}
          <div className="lg:col-span-5 rounded-3xl bg-canvas-card border border-canvas-border p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-subtle-card apple-card-hover">
            
            <div className="space-y-2 border-b border-canvas-border pb-4 sm:pb-5">
              <span className="text-[11px] sm:text-xs font-mono text-terracotta uppercase tracking-wider font-semibold">
                Direct Scheduling Gateway
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                Exploratory Technical Session
              </h3>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-terracotta" /> 15 – 60 Minutes
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5 text-slate-300" /> Google Meet / Zoom
                </span>
              </div>
            </div>

            {/* Pre-Qualification Filters */}
            <div className="space-y-4 pt-1">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Filter className="w-3.5 h-3.5 text-terracotta" />
                <span>Opportunity Nature:</span>
              </div>

              {/* Opportunity selector */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono text-slate-400">Target Role / Inquiry:</div>
                <div className="flex flex-wrap gap-1.5">
                  {opportunities.map((opp) => (
                    <button
                      key={opp}
                      onClick={() => setSelectedOpportunity(opp)}
                      className={`px-3 py-1.5 rounded-xl text-[11px] font-mono transition-all duration-300 ${
                        selectedOpportunity === opp
                          ? 'bg-terracotta text-white font-semibold shadow-luxury-glow'
                          : 'bg-canvas-surface border border-canvas-border text-slate-400 hover:text-white'
                      }`}
                    >
                      {opp}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline selector */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono text-slate-400">Target Timeline:</div>
                <div className="flex flex-wrap gap-1.5">
                  {timelines.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTimeline(t)}
                      className={`px-3 py-1.5 rounded-xl text-[11px] font-mono transition-all duration-300 ${
                        selectedTimeline === t
                          ? 'bg-terracotta text-white font-semibold shadow-luxury-glow'
                          : 'bg-canvas-surface border border-canvas-border text-slate-400 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Agenda List */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                What We Will Discuss:
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-terracotta mt-0.5 flex-shrink-0" />
                  <span><strong>Technical Defense & Alignment:</strong> In-depth walkthrough of production AI architectures, P99 latency bounds, and scaling patterns.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-terracotta mt-0.5 flex-shrink-0" />
                  <span><strong>Role & Mandate Scope:</strong> Establishing clear mutual expectations for AI Engineer deliverables, FDE deployment, or advisory roadmap.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-terracotta mt-0.5 flex-shrink-0" />
                  <span><strong>Next Steps & Logistics:</strong> Rapid progression to formal interview loops, mutual NDAs, or contract scheduling.</span>
                </li>
              </ul>
            </div>

            {/* Confidentiality Commitment */}
            <div className="pt-3 border-t border-canvas-border flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <ShieldCheck className="w-4 h-4 text-terracotta shrink-0" />
              <span>100% Mutual Confidentiality • Zero IP Leakage Guarantee</span>
            </div>

          </div>

          {/* Right Column: Calendly Embed Container & Opportunity Form */}
          <div className="lg:col-span-7 rounded-3xl bg-canvas-card border border-canvas-border overflow-hidden shadow-subtle-card flex flex-col min-h-[580px]">
            
            {/* Header Tabs: Switch between Instant Calendar & Direct Brief Form */}
            <div className="p-4 sm:p-5 border-b border-canvas-border bg-canvas-surface flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('calendar')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
                    activeTab === 'calendar'
                      ? 'bg-terracotta text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Interactive Calendar
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('directForm')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
                    activeTab === 'directForm'
                      ? 'bg-terracotta text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Direct Opportunity Form
                </button>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <Globe className="w-3 h-3 text-terracotta shrink-0" />
                <span>Timezone: <strong className="text-white">{userTimezone}</strong></span>
              </div>
            </div>

            {/* TAB 1: Calendly iFrame Embed */}
            {activeTab === 'calendar' && (
              <div className="relative flex-1 w-full bg-canvas-card dark:bg-[#161513] transition-colors duration-300 min-h-[520px] sm:min-h-[580px] flex flex-col">
                <iframe
                  key={`${theme}-${selectedOpportunity}`}
                  src={currentCalendlyEmbedUrl}
                  width="100%"
                  height="600px"
                  frameBorder="0"
                  title="Schedule session with Mohsin Qureshi"
                  className="w-full flex-1 min-h-[520px]"
                />

                {/* Direct Fallback Footer */}
                <div className="p-3 bg-canvas-surface border-t border-canvas-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
                  <span>Having trouble viewing the calendar?</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={openCalendlyPopup}
                      className="text-terracotta hover:underline font-semibold flex items-center gap-1"
                    >
                      <span>Open Popup</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                    <span className="text-slate-600">|</span>
                    <a
                      href={directCalendlyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-terracotta hover:underline font-semibold flex items-center gap-1"
                    >
                      <span>Direct Tab</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: Direct Opportunity Form */}
            {activeTab === 'directForm' && (
              <form onSubmit={handleDispatchForm} className="flex-1 p-5 sm:p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-terracotta font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>DIRECT BRIEF DISPATCH</span>
                    </div>
                    <h4 className="text-lg font-bold text-white font-sans">
                      Send Opportunity Details or Job Description
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Bypasses 3rd-party calendar cookies entirely. Dispatches your role details directly to Mohsin Qureshi with priority confirmation within 4 hours.
                    </p>
                  </div>

                  {/* Active Scope Pill */}
                  <div className="p-3 rounded-xl bg-canvas-surface border border-canvas-border flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <div className="text-slate-400">
                      Inquiry: <strong className="text-white">{selectedOpportunity}</strong>
                    </div>
                    <div className="text-slate-400">
                      Timeline: <strong className="text-terracotta">{selectedTimeline}</strong>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1.5">
                      <label htmlFor="brief-client-name" className="text-[11px] font-mono text-slate-300 uppercase cursor-pointer">Your Name & Title *</label>
                      <input
                        id="brief-client-name"
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Alex Vance, Talent Director"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-surface border border-canvas-border text-white text-xs font-mono focus:border-terracotta focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="brief-org" className="text-[11px] font-mono text-slate-300 uppercase cursor-pointer">Organization / Company *</label>
                      <input
                        id="brief-org"
                        type="text"
                        required
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="e.g. OpenAI, Stripe, Scaleup AI"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-surface border border-canvas-border text-white text-xs font-mono focus:border-terracotta focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1.5">
                      <label htmlFor="brief-email" className="text-[11px] font-mono text-slate-300 uppercase cursor-pointer">Work Email *</label>
                      <input
                        id="brief-email"
                        type="email"
                        required
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-surface border border-canvas-border text-white text-xs font-mono focus:border-terracotta focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="brief-slot" className="text-[11px] font-mono text-slate-300 uppercase cursor-pointer">Preferred Window / Timezone *</label>
                      <input
                        id="brief-slot"
                        type="text"
                        required
                        value={preferredSlot}
                        onChange={(e) => setPreferredSlot(e.target.value)}
                        placeholder={`e.g. Next Tuesday 3:00 PM (${userTimezone})`}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-surface border border-canvas-border text-white text-xs font-mono focus:border-terracotta focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="brief-notes" className="text-[11px] font-mono text-slate-300 uppercase cursor-pointer">Role Overview / Job Description Link / Event Scope</label>
                    <textarea
                      id="brief-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Paste Job Description link, team scope, compensation bracket, or keynote theme..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-surface border border-canvas-border text-white text-xs font-mono focus:border-terracotta focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-canvas-border space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleCopyDetails}
                        className="px-3 py-2 rounded-xl bg-canvas-surface border border-canvas-border text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                      >
                        <Copy className="w-3.5 h-3.5 text-terracotta" />
                        <span>{copied ? 'Copied to Clipboard!' : 'Copy Brief'}</span>
                      </button>
                      <span className="text-[11px] font-mono text-slate-500">
                        Direct to: mohsin.i.qureshi@hotmail.com
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-terracotta text-white font-bold text-xs font-sans hover:bg-terracotta/90 flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Dispatch Opportunity Brief</span>
                    </button>
                  </div>

                  {isDispatched && (
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Dispatch initiated! Your default email client has opened with your formatted brief.</span>
                    </div>
                  )}
                </div>
              </form>
            )}

          </div>

        </div>

        {/* Recruiter & Opportunity FAQ Accordion */}
        <div className="space-y-6 pt-4 border-t border-canvas-border">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs text-terracotta uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ANSWERED QUESTIONS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
              Recruiter & Opportunity FAQ
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-canvas-card border border-canvas-border overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-sans font-bold text-sm sm:text-base text-white hover:text-terracotta transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-terracotta shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-canvas-border/60 bg-canvas-surface/50 font-sans">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

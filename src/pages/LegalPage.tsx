import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { ShieldCheck, FileText, Lock, RefreshCw, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Card3D } from '../components/common/Card3D';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms' | 'cookies' | 'refunds';
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'privacy' }) => {
  const { navigate, currentPath } = useRouter();
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'cookies' | 'refunds'>(() => {
    if (currentPath.includes('terms')) return 'terms';
    if (currentPath.includes('cookies')) return 'cookies';
    if (currentPath.includes('refund')) return 'refunds';
    return initialTab;
  });

  useEffect(() => {
    if (currentPath.includes('terms')) setActiveTab('terms');
    else if (currentPath.includes('cookies')) setActiveTab('cookies');
    else if (currentPath.includes('refund')) setActiveTab('refunds');
    else if (currentPath.includes('privacy')) setActiveTab('privacy');
  }, [currentPath]);

  useEffect(() => {
    const titles: Record<string, string> = {
      privacy: 'Privacy Policy | Mohsin Qureshi AI Platform & Engineering Advisory',
      terms: 'Terms & Conditions | Mohsin Qureshi Sovereign AI Portfolio',
      cookies: 'Cookie & Local Storage Policy | Mohsin Qureshi',
      refunds: 'Refund & Cancellation Policy | Mohsin Qureshi Technical Advisory'
    };
    document.title = titles[activeTab] || 'Legal Governance & Privacy | Mohsin Qureshi';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  return (
    <div className="pt-24 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
        <button 
          onClick={() => navigate('/')} 
          className="hover:text-terracotta transition-colors"
        >
          home
        </button>
        <span>/</span>
        <span className="text-terracotta">legal</span>
        <span>/</span>
        <span className="text-slate-300 font-bold">{activeTab}</span>
      </div>

      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white mb-6 group transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
        Return to Sovereign Portfolio
      </button>

      {/* Header */}
      <div className="border-b border-white/10 pb-8 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          GOVERNANCE &amp; COMPLIANCE DISCLOSURES (2026)
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Legal &amp; Privacy <span className="gradient-text">Framework</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Transparent operational disclosures covering data collection, local storage, engagement terms, refund rights, and compliance with the India DPDP Act 2023, EU/UK GDPR, and California CCPA/CPRA.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
        <button
          onClick={() => { setActiveTab('privacy'); navigate('/privacy'); }}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
            activeTab === 'privacy'
              ? 'bg-terracotta text-white font-bold shadow-md shadow-terracotta/20'
              : 'apple-glass text-slate-300 hover:text-white hover:border-terracotta/40 border border-white/10'
          }`}
        >
          <Lock className="w-3.5 h-3.5" />
          Privacy Policy
        </button>
        <button
          onClick={() => { setActiveTab('terms'); navigate('/terms'); }}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
            activeTab === 'terms'
              ? 'bg-terracotta text-white font-bold shadow-md shadow-terracotta/20'
              : 'apple-glass text-slate-300 hover:text-white hover:border-terracotta/40 border border-white/10'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          Terms &amp; Conditions
        </button>
        <button
          onClick={() => { setActiveTab('cookies'); navigate('/cookies'); }}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
            activeTab === 'cookies'
              ? 'bg-terracotta text-white font-bold shadow-md shadow-terracotta/20'
              : 'apple-glass text-slate-300 hover:text-white hover:border-terracotta/40 border border-white/10'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          Cookie &amp; Storage Policy
        </button>
        <button
          onClick={() => { setActiveTab('refunds'); navigate('/refunds'); }}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
            activeTab === 'refunds'
              ? 'bg-terracotta text-white font-bold shadow-md shadow-terracotta/20'
              : 'apple-glass text-slate-300 hover:text-white hover:border-terracotta/40 border border-white/10'
          }`}
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Refund &amp; Cancellation
        </button>
      </div>

      {/* Content Panes */}
      <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
        
        {/* ========================================================= */}
        {/* PRIVACY POLICY                                            */}
        {/* ========================================================= */}
        {activeTab === 'privacy' && (
          <div className="space-y-8 animate-fade-in">
            <Card3D className="p-6 sm:p-8 apple-glass rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">1. Data Controller &amp; Scope</h2>
              <p className="mb-4">
                This Privacy Policy applies to the sovereign website of <strong>Mohsin Qureshi</strong> (<a href="https://mohsingitdev.github.io/mohsingitdev.io/" className="text-terracotta underline">mohsingitdev.io</a>), operating in an individual professional capacity as an AI Platform Engineer &amp; Forward-Deployed AI Engineer.
              </p>
              <p>
                Direct contact for all data privacy requests: <a href="mailto:mohsin.i.qureshi@hotmail.com" className="text-terracotta underline">mohsin.i.qureshi@hotmail.com</a>.
              </p>
            </Card3D>

            <Card3D className="p-6 sm:p-8 apple-glass rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">2. Categories of Information Collected</h2>
              <div className="space-y-4">
                <div>
                  <strong className="text-white block font-mono text-xs uppercase mb-1">A. Voluntarily Submitted Information</strong>
                  <p>
                    When you request an unredacted CV, book an architecture audit, subscribe to <em>Production AI Field Notes</em>, or submit an advisory inquiry, we collect:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-slate-300">
                    <li>Full Name</li>
                    <li>Professional Work Email Address</li>
                    <li>Organization / Company Name</li>
                    <li>Role Type &amp; Opportunity Nature</li>
                    <li>Brief project description or scope notes</li>
                  </ul>
                </div>

                <div>
                  <strong className="text-white block font-mono text-xs uppercase mb-1">B. Technical &amp; Session Telemetry</strong>
                  <p>
                    To optimize website latency and attribute inbound referral channels from technical platforms (e.g., LinkedIn, GitHub, X), we collect non-sensitive telemetry:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-slate-300">
                    <li>Referrer domain (e.g. linkedin.com)</li>
                    <li>Campaign UTM parameters (source, medium, campaign, content)</li>
                    <li>Landing URL and initial timestamp</li>
                    <li>Discrete interaction events (e.g., benchmark matrix inspected, article viewed)</li>
                  </ul>
                </div>
              </div>
            </Card3D>

            <Card3D className="p-6 sm:p-8 apple-glass rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">3. Lawful Basis &amp; Purpose of Processing</h2>
              <ul className="space-y-3">
                <li>
                  <strong className="text-white">Performance of Engagement / Pre-Contractual Steps:</strong> Delivering requested technical dossiers, evaluating role alignment, and preparing service proposals.
                </li>
                <li>
                  <strong className="text-white">Legitimate Interest:</strong> Protecting the website from bot spam, monitoring client-side latency, and preventing fraudulent submissions.
                </li>
                <li>
                  <strong className="text-white">Consent:</strong> Sending email editions of <em>Production AI Field Notes</em>. You may unsubscribe at any time via a direct reply or email request.
                </li>
              </ul>
            </Card3D>

            <Card3D className="p-6 sm:p-8 apple-glass rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">4. Third-Party Data Processors</h2>
              <p className="mb-4">
                We never sell, rent, or monetize your contact information. Third-party infrastructure partners process limited data strictly as necessary for site operations:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <strong className="text-white block mb-1">FormSubmit</strong>
                  <span className="text-slate-400">AJAX email relay securely encrypting and transmitting form submissions directly to Mohsin Qureshi.</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <strong className="text-white block mb-1">Calendly</strong>
                  <span className="text-slate-400">Scheduling interface for booking direct 20-min qualification syncs or architectural audits.</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <strong className="text-white block mb-1">GitHub Pages</strong>
                  <span className="text-slate-400">Static web hosting provider serving pre-rendered HTML and client assets over HTTPS.</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <strong className="text-white block mb-1">Topmate</strong>
                  <span className="text-slate-400">Independent checkout and booking portal for retail mentorship and portfolio teardowns.</span>
                </div>
              </div>
            </Card3D>

            <Card3D className="p-6 sm:p-8 apple-glass rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">5. User Rights (GDPR, UK DPA, India DPDP Act 2023, CCPA)</h2>
              <p className="mb-4">
                Regardless of your geographic location, you possess full sovereignty over your personal data:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-300">
                <li><strong>Right of Access:</strong> Request a copy of any personal data stored about you.</li>
                <li><strong>Right to Rectification:</strong> Correct inaccurate contact details.</li>
                <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request immediate deletion of your contact submissions and telemetry records.</li>
                <li><strong>Right to Withdraw Consent:</strong> Opt-out of analytics or newsletters at any time.</li>
              </ul>
              <p className="mt-4">
                To exercise any right, email <a href="mailto:mohsin.i.qureshi@hotmail.com?subject=Data%20Privacy%20Request" className="text-terracotta underline">mohsin.i.qureshi@hotmail.com</a> with subject &quot;Data Privacy Request&quot;. Requests are processed within 7 business days.
              </p>
            </Card3D>
          </div>
        )}

        {/* ========================================================= */}
        {/* TERMS AND CONDITIONS                                      */}
        {/* ========================================================= */}
        {activeTab === 'terms' && (
          <div className="space-y-8 animate-fade-in">
            <Card3D className="p-6 sm:p-8 apple-glass rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or navigating <a href="https://mohsingitdev.github.io/mohsingitdev.io/" className="text-terracotta underline">mohsingitdev.io</a>, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please discontinue use of this site.
              </p>
            </Card3D>

            <Card3D className="p-6 sm:p-8 apple-glass rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">2. Engineering Engagements &amp; Statements of Work</h2>
              <p className="mb-3">
                All professional engagements—including <em>Production AI Readiness Assessments</em>, <em>RAG Evaluation Sprints</em>, and <em>Forward-Deployed Engineering</em> advisory roles—are subject to independently negotiated, legally binding Statements of Work (SOW) or Master Services Agreements (MSA).
              </p>
              <p>
                The materials, pricing estimates, and timelines displayed on this website are illustrative and exploratory until formally confirmed in an executed contract.
              </p>
            </Card3D>

            <Card3D className="p-6 sm:p-8 apple-glass rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">3. Code Artifacts &amp; Demonstrations</h2>
              <p className="mb-3">
                Code snippets, interactive sandboxes (e.g. Grounded RAG Simulator, SLM Router Simulator), and architecture schematics published on this website are provided for technical demonstration and educational purposes under the standard MIT License unless explicitly stated otherwise.
              </p>
              <p>
                You may review and reference public GitHub code; however, you assume full operational responsibility for deploying any derived implementations into your own infrastructure.
              </p>
            </Card3D>

            <Card3D className="p-6 sm:p-8 apple-glass rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">4. Intellectual Property &amp; Brand Rights</h2>
              <p>
                The visual design system, custom 3D neural assets, original technical articles, and brand marks are the intellectual property of Mohsin Qureshi. Third-party brand names (e.g. Flipkart, Novartis, Ericsson, Accenture Strategy, Anthropic Claude, OpenAI, Meta Gemma) belong to their respective trademark holders and are cited solely under nominative fair use to describe verified employment, advisory history, or technological integrations.
              </p>
            </Card3D>

            <Card3D className="p-6 sm:p-8 apple-glass rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">5. Disclaimer of Warranties &amp; Limitation of Liability</h2>
              <p>
                This website is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind. Under no circumstances shall Mohsin Qureshi be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use this site, external third-party links, or code references.
              </p>
            </Card3D>
          </div>
        )}

        {/* ========================================================= */}
        {/* COOKIE & LOCAL STORAGE POLICY                            */}
        {/* ========================================================= */}
        {activeTab === 'cookies' && (
          <div className="space-y-8 animate-fade-in">
            <Card3D className="p-6 sm:p-8 apple-glass rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">1. What Storage Technologies We Use</h2>
              <p className="mb-4">
                We prioritize extreme web performance and privacy. We do not use third-party invasive advertising cookies or cross-site tracking pixels (no Facebook Pixel, no Google Ads cookies).
              </p>
              <p>
                Instead, we utilize client-side <code>localStorage</code> for two specific functional purposes:
              </p>
            </Card3D>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 apple-glass rounded-2xl border border-white/10">
                <div className="text-xs font-mono text-terracotta uppercase mb-2">Essential Storage</div>
                <h3 className="text-base font-bold text-white mb-2">Theme Preference</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Key: <code>theme</code> (&quot;dark&quot; | &quot;light&quot;). Persists your selected display theme so you do not experience visual flashes on subsequent visits.
                </p>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  Strictly Necessary
                </span>
              </div>

              <div className="p-6 apple-glass rounded-2xl border border-white/10">
                <div className="text-xs font-mono text-terracotta uppercase mb-2">Analytical Storage</div>
                <h3 className="text-base font-bold text-white mb-2">Session Telemetry</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Key: <code>mh_visitor_intel</code>. Preserves inbound referral source (e.g. LinkedIn, GitHub) and feature clicks. Enabled only with affirmative consent.
                </p>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  Consent-Governed
                </span>
              </div>
            </div>

            <Card3D className="p-6 sm:p-8 apple-glass rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">2. Third-Party Scripts &amp; Cookies</h2>
              <p className="mb-3">
                Certain interactive widgets embedded on the site may set their own functional cookies when activated by the visitor:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>
                  <strong className="text-white">Calendly Embed:</strong> When scheduling an appointment via the embedded calendar, Calendly may set session cookies required for calendar slot synchronization.
                </li>
                <li>
                  <strong className="text-white">Google Fonts:</strong> Typography stylesheets are fetched from Google servers for high-fidelity cross-browser typography.
                </li>
              </ul>
            </Card3D>

            <Card3D className="p-6 sm:p-8 apple-glass rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">3. Managing and Clearing Storage</h2>
              <p>
                You can inspect, clear, or block localStorage and cookies at any time via your browser settings (e.g., Chrome Settings &gt; Privacy and security &gt; Site settings &gt; Cookies and site data). You can also reset your choice by clicking the Cookie Banner control.
              </p>
            </Card3D>
          </div>
        )}

        {/* ========================================================= */}
        {/* REFUND & CANCELLATION POLICY                             */}
        {/* ========================================================= */}
        {activeTab === 'refunds' && (
          <div className="space-y-8 animate-fade-in">
            <Card3D className="p-6 sm:p-8 apple-glass rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">1. Enterprise Architecture &amp; Advisory Retainers</h2>
              <p className="mb-4">
                For fixed-scope advisory engagements (including the <em>Production AI Readiness Assessment</em> and <em>RAG Evaluation Sprint</em>):
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Pre-Kickoff Cancellation:</strong> If you cancel an advisory engagement in writing at least <strong>48 hours prior</strong> to the scheduled discovery kickoff session, you are entitled to a <strong>100% full refund</strong> of any advance retainer paid.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Post-Kickoff Milestones:</strong> Once the discovery audit and repository code inspection have commenced, fees are non-refundable for completed phases. Scope adjustments or credits for future engineering advisory can be arranged by mutual written agreement.
                  </div>
                </li>
              </ul>
            </Card3D>

            <Card3D className="p-6 sm:p-8 apple-glass rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">2. Retail Mentorship &amp; 1-on-1 Sessions (Topmate)</h2>
              <p className="mb-3">
                1-on-1 developer mentorship, resume teardowns, and mock interview bookings booked through <a href="https://topmate.io/mohsin_qureshi" target="_blank" rel="noopener noreferrer" className="text-terracotta underline">topmate.io/mohsin_qureshi</a> are processed directly through Topmate&apos;s billing infrastructure.
              </p>
              <p>
                Refunds, reschedules, and dispute resolutions for Topmate sessions are honored in accordance with Topmate&apos;s standard buyer protection and cancellation terms. If you need to reschedule a session, you may do so at least 12 hours before the start time using your booking link.
              </p>
            </Card3D>

            <Card3D className="p-6 sm:p-8 apple-glass rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">3. Dispute Resolution &amp; Contact</h2>
              <p>
                If you encounter any discrepancy, billing issue, or scope question, please contact Mohsin Qureshi directly at <a href="mailto:mohsin.i.qureshi@hotmail.com?subject=Billing%20Support" className="text-terracotta underline">mohsin.i.qureshi@hotmail.com</a>. We take professional reputation and client trust seriously and aim to resolve all inquiries within 24 hours.
              </p>
            </Card3D>
          </div>
        )}

      </div>
    </div>
  );
};

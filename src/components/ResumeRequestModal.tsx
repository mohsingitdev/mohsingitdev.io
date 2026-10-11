import React, { useState } from 'react';
import { X, FileText, Send, CheckCircle2, ShieldCheck, Copy, Building2, Mail, User } from 'lucide-react';

interface ResumeRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeRequestModal: React.FC<ResumeRequestModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [roleType, setRoleType] = useState('Full-Time Staff/Principal AI Role');
  const [notes, setNotes] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const roleOptions = [
    'Full-Time Staff/Principal AI Role',
    'Forward Deployment Engineer (FDE)',
    'Enterprise Advisory / Contract',
    'Keynote / Event Speaking Invite',
    'Exploratory / Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:mohsin.i.qureshi@hotmail.com?subject=${encodeURIComponent(
      `[Resume & Dossier Request] ${name || 'Recruiter'} - ${organization || 'Organization'} (${roleType})`
    )}&body=${encodeURIComponent(
      `Hi Mohsin,\n\nI would like to request your official, confidential resume and technical track record dossier.\n\n` +
      `Requester Name: ${name || 'N/A'}\n` +
      `Organization / Company: ${organization || 'N/A'}\n` +
      `Work Email: ${email || 'N/A'}\n` +
      `Target Opportunity: ${roleType}\n\n` +
      `Role Details / Job Description Notes:\n${notes || 'Interested in discussing relevant opportunities.'}\n\n` +
      `Looking forward to your response.`
    )}`;
    window.location.href = mailto;
    setIsSent(true);
  };

  const handleCopy = () => {
    const text = `Resume & Dossier Request\nName: ${name || 'N/A'}\nOrganization: ${organization || 'N/A'}\nEmail: ${email || 'N/A'}\nOpportunity: ${roleType}\nNotes: ${notes || 'N/A'}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-canvas-card border border-canvas-border shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-canvas-border flex items-center justify-between bg-canvas-surface/80">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-terracotta/15 border border-terracotta/30 flex items-center justify-center text-terracotta">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white font-sans flex items-center gap-2">
                Request Official Resume
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Direct Recruiter & Opportunity Ingress
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-canvas-card border border-canvas-border flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        {isSent ? (
          <div className="p-6 sm:p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-white font-sans">
              Dispatch Request Prepared
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
              Your default email client was opened with the pre-filled briefing. Once sent, Mohsin will reply with the official confidential CV and relevant project dossier within 4–6 hours.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopy}
                className="px-4 py-2 rounded-xl bg-canvas-surface border border-canvas-border text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5 text-terracotta" />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Request Text'}</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-terracotta text-white font-bold text-xs font-sans hover:bg-terracotta/90"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            <div className="p-3 rounded-xl bg-canvas-surface border border-canvas-border text-[11px] font-mono text-slate-300 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
              <span>
                To preserve enterprise NDA compliance, verified ATS resumes and unredacted architecture dossiers are shared directly upon verified role request.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label htmlFor="resume-name" className="text-[11px] font-mono text-slate-300 uppercase flex items-center gap-1 cursor-pointer">
                  <User className="w-3 h-3 text-terracotta" /> Your Name *
                </label>
                <input
                  id="resume-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-3 py-2 rounded-xl bg-canvas-surface border border-canvas-border text-white text-xs font-mono focus:border-terracotta focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="resume-org" className="text-[11px] font-mono text-slate-300 uppercase flex items-center gap-1 cursor-pointer">
                  <Building2 className="w-3 h-3 text-terracotta" /> Organization / Company *
                </label>
                <input
                  id="resume-org"
                  type="text"
                  required
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="e.g. Stripe, OpenAI, Series A AI Co"
                  className="w-full px-3 py-2 rounded-xl bg-canvas-surface border border-canvas-border text-white text-xs font-mono focus:border-terracotta focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="resume-email" className="text-[11px] font-mono text-slate-300 uppercase flex items-center gap-1 cursor-pointer">
                <Mail className="w-3 h-3 text-terracotta" /> Work Email *
              </label>
              <input
                id="resume-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sarah@company.com"
                className="w-full px-3 py-2 rounded-xl bg-canvas-surface border border-canvas-border text-white text-xs font-mono focus:border-terracotta focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="resume-role" className="text-[11px] font-mono text-slate-300 uppercase cursor-pointer">
                Opportunity Nature *
              </label>
              <select
                id="resume-role"
                value={roleType}
                onChange={(e) => setRoleType(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-canvas-surface border border-canvas-border text-white text-xs font-mono focus:border-terracotta focus:outline-none"
              >
                {roleOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#11141C] text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="resume-notes" className="text-[11px] font-mono text-slate-300 uppercase cursor-pointer">
                Role Brief / Key Technical Requirements (Optional)
              </label>
              <textarea
                id="resume-notes"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Paste Job Description link, team scope, or location/remote details..."
                className="w-full px-3 py-2 rounded-xl bg-canvas-surface border border-canvas-border text-white text-xs font-mono focus:border-terracotta focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between gap-3 border-t border-canvas-border">
              <span className="text-[10px] font-mono text-slate-400">
                Direct to: mohsin.i.qureshi@hotmail.com
              </span>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-terracotta text-white font-bold text-xs font-sans hover:bg-terracotta/90 flex items-center gap-1.5 shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit & Dispatch</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

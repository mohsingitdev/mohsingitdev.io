import React, { useEffect, useState } from 'react';
import { FACTS, LINKS, ENQUIRY_TOPICS } from './content';
import type { EnquiryPrefill } from './enquire';
import { bookingLinkProps } from './booking';
import { RevealHeading } from './Reveal';

const BUDGETS = ['Prefer to discuss', 'Under $5,000', '$5,000 – $25,000', '$25,000 – $75,000', '$75,000+'];
const TIMELINES = ['This month', 'This quarter', 'Next quarter', 'Exploring'];
const EMAIL = LINKS.email.replace('mailto:', '');

// Static site, so the enquiry opens the visitor's email app with everything filled in.
const Enquiry: React.FC = () => {
  const [f, setF] = useState({ name: '', email: '', company: '', offer: ENQUIRY_TOPICS[1], budget: BUDGETS[0], timeline: TIMELINES[1], message: '' });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((v) => ({ ...v, [k]: e.target.value }));

  useEffect(() => {
    const on = (e: Event) => {
      const d = (e as CustomEvent<EnquiryPrefill>).detail || {};
      setF((v) => ({ ...v, offer: d.topic && ENQUIRY_TOPICS.includes(d.topic) ? d.topic : v.offer, message: d.message ?? v.message }));
    };
    window.addEventListener('v3-enquire', on);
    return () => window.removeEventListener('v3-enquire', on);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Enquiry: ${f.offer}${f.company ? ` · ${f.company}` : ''}`;
    const body = [
      `Name: ${f.name}`, `Email: ${f.email}`, f.company ? `Company: ${f.company}` : null,
      `Interested in: ${f.offer}`, `Timeline: ${f.timeline}`, `Budget: ${f.budget}`, '', f.message,
    ].filter((x) => x !== null).join('\n');
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form id="enquiry" className="v3-glass v3-enquiry" onSubmit={submit}>
      <div className="v3-enquiry-head">
        <h3 className="v3-h3">Send an enquiry</h3>
        <span className="v3-mono v3-mute">Reply within one working day</span>
      </div>
      <div className="v3-form-grid">
        <label>Name<input required value={f.name} onChange={set('name')} autoComplete="name" /></label>
        <label>Work email<input required type="email" value={f.email} onChange={set('email')} autoComplete="email" /></label>
        <label>Company<input value={f.company} onChange={set('company')} autoComplete="organization" /></label>
        <label>Interested in
          <select value={f.offer} onChange={set('offer')}>
            {ENQUIRY_TOPICS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
        <label>Timeline
          <select value={f.timeline} onChange={set('timeline')}>{TIMELINES.map((t) => <option key={t}>{t}</option>)}</select>
        </label>
        <label>Budget range
          <select value={f.budget} onChange={set('budget')}>{BUDGETS.map((b) => <option key={b}>{b}</option>)}</select>
        </label>
        <label className="v3-span-2">What are you trying to get done?
          <textarea required rows={4} value={f.message} onChange={set('message')}
            placeholder="The workflow, what you have today, and what good looks like." />
        </label>
      </div>
      <div className="v3-cta-row">
        <button type="submit" className="v3-btn v3-btn-primary">Send enquiry</button>
        <span className="v3-small v3-mute">Opens your email app with this filled in.</span>
      </div>
    </form>
  );
};

export const Contact: React.FC<{ onRequestResume: () => void }> = ({ onRequestResume }) => (
  <section id="contact" className="v3-contact">
    <div className="v3-wrap">
      <div className="v3-contact-grid">
        <div>
          <RevealHeading>Tell me what you&rsquo;re building.</RevealHeading>
          <p className="v3-lead" style={{ marginTop: 20 }}>
            A 15-minute call is enough to tell whether I can help. If I&rsquo;m not the right fit, I&rsquo;ll say so.
          </p>
          <div className="v3-cta-row" style={{ marginTop: 28 }}>
            <a className="v3-btn v3-btn-primary v3-btn-lg" {...bookingLinkProps}>Book a 15-minute call</a>
            <a className="v3-btn v3-btn-ghost v3-btn-lg" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">Message on LinkedIn</a>
            <a className="v3-link" href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <p className="v3-small v3-mute" style={{ marginTop: 28 }}>
            Hiring for a contract or full-time role?{' '}
            <button type="button" className="v3-link" onClick={onRequestResume}>Request my CV</button>.
          </p>
        </div>
        <Enquiry />
      </div>

      <dl className="v3-facts v3-glass">
        {FACTS.map((f) => (
          <div key={f.term}><dt>{f.term}</dt><dd>{f.value}</dd></div>
        ))}
      </dl>
    </div>
  </section>
);

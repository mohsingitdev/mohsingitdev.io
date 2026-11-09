import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { enquire } from './enquire';
import { LINKS } from './content';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Stage = 'idea' | 'pilot' | 'prod' | 'gtm';
type Pain = 'trust' | 'cost' | 'speed' | 'capacity';
type When = 'now' | 'quarter' | 'explore';

const QUESTIONS = [
  {
    key: 'stage', q: 'Where is your AI work today?',
    options: [
      ['idea', 'Exploring use cases'], ['pilot', 'A pilot that won’t ship'],
      ['prod', 'Live, but costly or unreliable'], ['gtm', 'Sales or ops still manual'],
    ],
  },
  {
    key: 'pain', q: 'What is costing you most?',
    options: [
      ['trust', 'Wrong or unverifiable answers'], ['cost', 'Model and infrastructure spend'],
      ['speed', 'Time to ship'], ['capacity', 'No senior AI engineer in-house'],
    ],
  },
  {
    key: 'when', q: 'When do you need results?',
    options: [['now', 'This month'], ['quarter', 'This quarter'], ['explore', 'Still exploring']],
  },
] as const;

const BOTTLENECK: Record<Pain, string> = {
  trust: 'Grounding and evaluation. Without an evaluation set nobody can prove the system is right, so it never gets sign-off.',
  cost: 'Model selection and routing. Most traffic does not need your largest model, and nobody is measuring cost per task.',
  speed: 'Scope. Pilots stall when they try to cover several workflows at once instead of one with a clear metric.',
  capacity: 'Ownership. The work needs one senior engineer accountable from design to go-live, not a rotating team.',
};
const FIRST_STEP: Record<Stage, string> = {
  idea: 'A use-case review: rank candidates by value and feasibility, then commit to one with a measurable metric.',
  pilot: 'A production readiness audit: a ranked list of what blocks launch, with effort and impact for each fix.',
  prod: 'A cost and quality review: evaluations on live traffic, routing and caching options, and cost per task.',
  gtm: 'A workflow diagnosis: map the lead or request flow, then automate the highest-volume step with human approval.',
};
const ENGAGEMENT: Record<Stage, string> = {
  idea: 'Strategy session', pilot: 'Production readiness audit', prod: 'Production readiness audit', gtm: 'GTM and workflow automation',
};
const TIMING: Record<When, string> = {
  now: 'Urgent: include your deadline in the enquiry and I will reply with availability.',
  quarter: 'A good fit for a fixed-scope engagement starting this quarter.',
  explore: 'Start with a 15-minute call. No commitment, and you keep the notes.',
};

// Section right after the hero: a short pitch next to the 3-question diagnostic.
export const DiagnosticSection: React.FC = () => (
  <section id="diagnosis" className="v3-section v3-diag-section">
    <div className="v3-wrap v3-diag-grid">
      <div className="v3-split-head">
        <p className="v3-eyebrow v3-mono">Free diagnosis</p>
        <h2 className="v3-h2">Where does your pilot stand?</h2>
        <p className="v3-lead">
          Three questions, thirty seconds. You get the likely bottleneck between your business case and a
          production system, and the first step I would take. Send it to me if you want a second opinion.
        </p>
      </div>
      <Diagnostic />
    </div>
  </section>
);

// Three taps produce a tailored diagnosis that prefills the enquiry form.
export const Diagnostic: React.FC = () => {
  const [step, setStep] = useState(0);
  const [a, setA] = useState<{ stage?: Stage; pain?: Pain; when?: When; labels: string[] }>({ labels: [] });
  const done = step >= QUESTIONS.length;

  const pick = (key: string, value: string, label: string) => {
    setA((v) => ({ ...v, [key]: value, labels: [...v.labels.slice(0, step), label] }));
    setStep((s) => s + 1);
  };
  const reset = () => { setStep(0); setA({ labels: [] }); };

  const engagement = a.pain === 'capacity' ? 'Embedded AI engineer' : a.stage ? ENGAGEMENT[a.stage] : '';
  const send = () => {
    const msg = [
      `Diagnosis from your website: ${a.labels.join(' · ')}`,
      a.pain && `Likely bottleneck: ${BOTTLENECK[a.pain]}`,
      a.stage && `Suggested first step: ${FIRST_STEP[a.stage]}`,
      '', 'Context on our side:',
    ].filter(Boolean).join('\n');
    enquire(engagement, msg);
  };

  return (
    <div className="v3-glass v3-diag">
      <div className="v3-diag-head v3-mono">
        <span>Free AI diagnosis</span>
        <span className="v3-mute">{done ? 'Your result' : `Question ${step + 1} of ${QUESTIONS.length}`}</span>
      </div>
      <div className="v3-diag-progress" aria-hidden="true">
        {QUESTIONS.map((_, i) => <i key={i} data-on={i < step || done} />)}
      </div>

      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <p className="v3-diag-q">{QUESTIONS[step].q}</p>
            <div className="v3-diag-opts" role="group" aria-label={QUESTIONS[step].q}>
              {QUESTIONS[step].options.map(([value, label]) => (
                <button key={value} type="button" className="v3-diag-opt" onClick={() => pick(QUESTIONS[step].key, value, label)}>
                  {label}<span aria-hidden="true">→</span>
                </button>
              ))}
            </div>
            <p className="v3-diag-foot v3-mono">3 questions · 30 seconds · no email needed</p>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            className="v3-diag-result"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            aria-live="polite"
          >
            <div><span className="v3-mono">Likely bottleneck</span><p>{a.pain && BOTTLENECK[a.pain]}</p></div>
            <div><span className="v3-mono">Recommended first step</span><p>{a.stage && FIRST_STEP[a.stage]}</p></div>
            <div><span className="v3-mono">Timing</span><p>{a.when && TIMING[a.when]}</p></div>
            <div className="v3-diag-actions">
              <button type="button" className="v3-btn v3-btn-primary" onClick={send}>Send me this diagnosis</button>
              <a className="v3-btn v3-btn-ghost" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">Discuss on LinkedIn</a>
            </div>
            <button type="button" className="v3-link v3-small" onClick={reset}>Start over</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

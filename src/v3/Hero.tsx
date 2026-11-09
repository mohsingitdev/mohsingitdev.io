import React from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { bookingLinkProps } from './booking';
import { PROOF } from './content';
import { LiveReadiness } from './LiveReadiness';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const LINES: React.ReactNode[] = ['Discovery done.', <><em>Production</em> is</>, 'my job.'];

const GAP = ['Deployment', 'Guardrails', 'HLD', 'LLD', 'Evals', 'Cost control'];

const FACTS = [
  'The engineer you hire is the one who builds it',
  '5+ years in production ML and GenAI',
  'Vendor and contract-hire delivery',
  'US · UK · Canada hours overlap',
];

export const Hero: React.FC = () => {
  const reduce = !!useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 80, damping: 20 });
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [3, -3]), { stiffness: 80, damping: 20 });
  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });

  return (
    <section id="top" className="v3-hero" onPointerMove={onMove}>
      <div className="v3-wrap v3-hero-grid">
        <div className="v3-hero-copy">
          <motion.p className="v3-eyebrow v3-mono" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span className="v3-dot" aria-hidden="true" />
            Forward-deployed AI engineer · US · UK · Canada
          </motion.p>

          <h1 className="v3-h1">
            {LINES.map((line, i) => (
              <span className="v3-line-mask" key={i}>
                <motion.span initial={reduce ? false : { y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: EASE }}>
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div className="v3-hero-sub" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.65, ease: EASE }}>
            <p className="v3-lead">
              Your business team found the use case and proved the value. Getting it live is a different job:
              system design, guardrails, evals, deployment and cost control. I&rsquo;m the consultant who understands
              the business problem and the engineer who ships it to production.
            </p>

            <div className="v3-gap" aria-label="What a proven pilot usually still needs">
              <span className="v3-gap-done v3-mono">Business case ✓</span>
              <span className="v3-gap-arrow" aria-hidden="true" />
              <ul>
                {GAP.map((g, i) => (
                  <motion.li
                    key={g}
                    className="v3-mono"
                    initial={reduce ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1 + i * 0.08, ease: EASE }}
                  >
                    {g}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="v3-cta-row">
              <a className="v3-btn v3-btn-primary v3-btn-lg" {...bookingLinkProps}>Book a 15-minute call</a>
              <button type="button" className="v3-btn v3-btn-ghost v3-btn-lg" onClick={() => scrollTo('diagnosis')}>
                Diagnose your pilot
              </button>
            </div>
            <ul className="v3-hero-trust v3-mono">{FACTS.map((f) => <li key={f}>{f}</li>)}</ul>
          </motion.div>
        </div>

        <motion.div
          className="v3-hero-card"
          style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
        >
          <LiveReadiness />
        </motion.div>
      </div>

      <motion.div className="v3-wrap" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.0 }}>
        <dl className="v3-glass v3-creds" aria-label="Measured outcomes from delivered work">
          {PROOF.map((p) => <div key={p.label}><dt>{p.value}</dt><dd>{p.label}</dd></div>)}
        </dl>
        <button type="button" className="v3-scroll-cue v3-mono" onClick={() => scrollTo('diagnosis')}>
          <span>Where does your pilot stand? 3 questions</span>
          <i aria-hidden="true" />
        </button>
      </motion.div>
    </section>
  );
};

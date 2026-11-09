import React from 'react';
import { motion } from 'framer-motion';
import { PROBLEMS } from './content';
import { RevealHeading } from './Reveal';
import { enquire } from './enquire';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// The problems buyers bring, each with a market signal (sourced), my approach, and the outcome type.
export const Problems: React.FC = () => (
  <section id="problems" className="v3-section">
    <div className="v3-wrap">
      <div className="v3-split" style={{ marginBottom: 40 }}>
        <RevealHeading>The problems teams bring me in 2026</RevealHeading>
        <p className="v3-lead" style={{ alignSelf: 'end' }}>
          Most AI budgets now stall at the same five points. Each one below shows the market data, how I
          approach it, and what the outcome looked like when I delivered it.
        </p>
      </div>

      <div className="v3-problems">
        {PROBLEMS.map((p, i) => (
          <motion.article
            key={p.id}
            className="v3-glass v3-problem"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
            transition={{ duration: 0.65, delay: (i % 2) * 0.08, ease: EASE }}
          >
            <span className="v3-mono v3-problem-role">{p.role}</span>
            <h3 className="v3-problem-title">{p.title}</h3>
            <div className="v3-problem-signal">
              <b>{p.signal}</b>
              <span>
                {p.signalLabel}.{' '}
                <a href={p.source.url} target="_blank" rel="noopener noreferrer">{p.source.name}</a>
              </span>
            </div>
            <div className="v3-problem-block">
              <span className="v3-mono">My approach</span>
              <p>{p.approach}</p>
            </div>
            <div className="v3-problem-outcome" data-kind={p.outcome.kind}>
              <span className="v3-mono">{p.outcome.kind === 'Delivered' ? 'Delivered' : 'Industry benchmark'}</span>
              <p>{p.outcome.text}</p>
            </div>
            <button type="button" className="v3-link v3-small v3-problem-cta" onClick={() => enquire('Something else', `We have this problem: ${p.title.toLowerCase()}.`)}>
              This is us. Start an enquiry →
            </button>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

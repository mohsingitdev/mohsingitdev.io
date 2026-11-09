import React from 'react';
import { motion } from 'framer-motion';
import { COMPARE, PRINCIPLES, COMMITMENTS } from './content';
import { RevealHeading } from './Reveal';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Differentiator: comparison with the usual alternatives, AI-first principles, and commitments.
export const Why: React.FC = () => (
  <section id="why" className="v3-section">
    <div className="v3-wrap">
      <div className="v3-split" style={{ marginBottom: 40 }}>
        <RevealHeading>Why teams hire me instead of an agency</RevealHeading>
        <p className="v3-lead" style={{ alignSelf: 'end' }}>
          You get the senior person who scopes it, builds it and answers for it. No handoff to a junior team,
          and no slide decks in place of working software.
        </p>
      </div>

      <div className="v3-glass v3-compare" role="table" aria-label="How working with me compares">
        <div className="v3-compare-row v3-compare-head" role="row">
          <span role="columnheader" />
          {COMPARE.cols.map((c, i) => (
            <span key={c} role="columnheader" className={`v3-mono${i === 2 ? ' is-me' : ''}`}>{c}</span>
          ))}
        </div>
        {COMPARE.rows.map((r, i) => (
          <motion.div
            key={r.k}
            className="v3-compare-row"
            role="row"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -6% 0px' }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
          >
            <span role="rowheader" className="v3-compare-k">{r.k}</span>
            {r.v.map((v, j) => (
              <span key={j} role="cell" className={j === 2 ? 'is-me' : 'is-other'} data-col={COMPARE.cols[j]}>{v}</span>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="v3-principles">
        <h3 className="v3-mono v3-principles-title">How I think about AI-first work</h3>
        <ol>
          {PRINCIPLES.map((p, i) => (
            <motion.li
              key={p.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -8% 0px' }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
            >
              <span className="v3-mono">{String(i + 1).padStart(2, '0')}</span>
              <b>{p.t}</b>
              <p>{p.b}</p>
            </motion.li>
          ))}
        </ol>
      </div>

      <ul className="v3-commit">
        {COMMITMENTS.map((c) => <li key={c}>{c}</li>)}
      </ul>
    </div>
  </section>
);

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ENGAGEMENTS } from './content';
import { bookingLinkProps } from './booking';
import { RevealHeading } from './Reveal';

export const Engagements: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services-home" className="v3-section">
      <div className="v3-wrap v3-split">
        <div className="v3-split-head">
          <RevealHeading>Ways to work together</RevealHeading>
          <p className="v3-mute">
            Most engagements start with the audit. Each one ends with code, evals and runbooks your team owns.
          </p>
        </div>

        <div className="v3-eng">
          {ENGAGEMENTS.map((e, i) => {
            const isOpen = open === i;
            const panelId = `v3-eng-${i}`;
            return (
              <div className="v3-eng-row v3-glass" key={e.title}>
                <button
                  type="button"
                  className="v3-eng-btn"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="v3-eng-title">
                    {e.title}
                    <span className="v3-eng-plus" aria-hidden="true">{isOpen ? '–' : '+'}</span>
                  </span>
                  <span className="v3-eng-meta">{e.duration}</span>
                  <span className="v3-eng-sum">{e.summary}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      className="v3-eng-detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="v3-eng-detail-inner">
                        <ul>
                          {e.details.map((d) => <li key={d}>{d}</li>)}
                        </ul>
                        <a className="v3-link" {...bookingLinkProps}>
                          Talk about this
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

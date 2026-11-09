import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WORK } from './content';
import { RevealHeading } from './Reveal';

export const Work: React.FC = () => {
  const [activeId, setActiveId] = useState(WORK[0].id);
  const item = WORK.find((w) => w.id === activeId) ?? WORK[0];

  return (
    <section id="work" className="v3-section">
      <div className="v3-wrap">
        <div className="v3-split">
          <RevealHeading>Selected work</RevealHeading>
          <p className="v3-lead" style={{ alignSelf: 'end' }}>
            Client names stay confidential; outcomes are as measured on delivery. Where a public reference
            build exists, it shows the same pattern in code.
          </p>
        </div>

        <div className="v3-work">
          <div className="v3-work-list" role="tablist" aria-label="Projects">
            {WORK.map((w) => {
              const selected = w.id === activeId;
              return (
                <button
                  key={w.id}
                  type="button"
                  role="tab"
                  id={`v3-tab-${w.id}`}
                  aria-selected={selected}
                  aria-controls="v3-work-panel"
                  className="v3-work-tab"
                  onClick={() => setActiveId(w.id)}
                >
                  {selected && <motion.span layoutId="v3-work-marker" className="v3-work-marker" />}
                  <span className="v3-small">{w.sector}</span>
                  <b>{w.title}</b>
                </button>
              );
            })}
          </div>

          <div className="v3-work-panel" id="v3-work-panel" role="tabpanel" aria-labelledby={`v3-tab-${item.id}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <h3>{item.title}</h3>
                <div className="v3-mute v3-small">{item.via}</div>
                <dl>
                  <div><dt>The issue</dt><dd>{item.problem}</dd></div>
                  <div><dt>What I built</dt><dd>{item.built}</dd></div>
                  <div><dt>What I did differently</dt><dd>{item.different}</dd></div>
                </dl>
                <div className="v3-results">
                  {item.results.map((r) => (
                    <div key={r.label}><b>{r.value}</b><span>{r.label}</span></div>
                  ))}
                </div>
                <div className="v3-stack">
                  {item.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
                {item.repo && (
                  <p style={{ margin: '22px 0 0' }}>
                    <a className="v3-link" href={item.repo} target="_blank" rel="noopener noreferrer">
                      Reference build on GitHub
                    </a>
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

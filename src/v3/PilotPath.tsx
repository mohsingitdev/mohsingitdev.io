import React from 'react';
import { motion } from 'framer-motion';
import { METHOD } from './content';
import { RevealHeading } from './Reveal';

// "How I work": standard practice next to what I add at each stage.
export const PilotPath: React.FC = () => (
  <section id="method" className="v3-section">
    <div className="v3-wrap">
      <div className="v3-split" style={{ marginBottom: 40 }}>
        <RevealHeading>How I work</RevealHeading>
        <p className="v3-lead" style={{ alignSelf: 'end' }}>
          Same four stages as most AI projects. The difference is what you have in hand at the end of each one.
        </p>
      </div>

      <div className="v3-method" role="table" aria-label="Standard practice compared with my approach">
        <div className="v3-method-row v3-method-head v3-mono" role="row">
          <span role="columnheader">Stage</span>
          <span role="columnheader">Usual practice</span>
          <span role="columnheader">What you get from me</span>
        </div>
        {METHOD.map((m, i) => (
          <motion.div
            key={m.stage}
            className="v3-method-row"
            role="row"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <span role="cell" className="v3-method-stage">
              <i className="v3-mono">{String(i + 1).padStart(2, '0')}</i>{m.stage}
            </span>
            <span role="cell" className="v3-method-usual">{m.usual}</span>
            <span role="cell" className="v3-method-mine">{m.mine}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

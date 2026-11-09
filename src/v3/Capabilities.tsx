import React from 'react';
import { motion } from 'framer-motion';
import { CAPABILITIES } from './content';
import { RevealHeading } from './Reveal';

export const Capabilities: React.FC = () => (
  <section id="capabilities" className="v3-section">
    <div className="v3-wrap">
      <div className="v3-split" style={{ marginBottom: 44 }}>
        <RevealHeading>What I’m hired for</RevealHeading>
        <p className="v3-lead" style={{ alignSelf: 'end' }}>
          Four roles that overlap in practice. Most engagements need two of them at once, which is why one
          senior person often replaces a small team.
        </p>
      </div>
      <div className="v3-caps">
        {CAPABILITIES.map((c, i) => (
          <motion.article
            key={c.tag}
            className="v3-glass v3-cap"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="v3-mono v3-cap-tag">{c.tag}</span>
            <h3 className="v3-h3">{c.title}</h3>
            <p>{c.body}</p>
            <ul>
              {c.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

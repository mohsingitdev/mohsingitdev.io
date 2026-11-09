import React from 'react';
import { motion } from 'framer-motion';
import { ICPS } from './content';
import { RevealHeading } from './Reveal';
import { enquire } from './enquire';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Who the work is for: three buyer types, each with fit, outcome and typical starting engagement.
export const Icp: React.FC = () => (
  <section id="who" className="v3-section">
    <div className="v3-wrap">
      <div className="v3-split" style={{ marginBottom: 40 }}>
        <RevealHeading>Who I work with</RevealHeading>
        <p className="v3-lead" style={{ alignSelf: 'end' }}>
          Three kinds of teams, one shared problem: the business case is proven and the production system
          isn&rsquo;t built yet.
        </p>
      </div>
      <div className="v3-icps">
        {ICPS.map((c, i) => (
          <motion.article
            key={c.tag}
            className="v3-glass v3-icp"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
            transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
          >
            <span className="v3-mono v3-icp-tag">{c.tag}</span>
            <h3 className="v3-icp-title">{c.title}</h3>
            <dl>
              <div><dt className="v3-mono">Sounds like you if</dt><dd>{c.fit}</dd></div>
              <div><dt className="v3-mono">What you get</dt><dd>{c.get}</dd></div>
              <div><dt className="v3-mono">Typical start</dt><dd>{c.start}</dd></div>
            </dl>
            <button type="button" className="v3-link v3-small v3-icp-cta" onClick={() => enquire(undefined, `We are: ${c.tag}.`)}>
              That&rsquo;s us. Start an enquiry →
            </button>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

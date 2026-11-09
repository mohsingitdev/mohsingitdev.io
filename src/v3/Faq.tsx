import React from 'react';
import { FAQ } from './content';
import { RevealHeading } from './Reveal';
import { enquire } from './enquire';
import { LINKS } from './content';

// Native <details> keeps answers in the DOM for crawlers and works without JavaScript.
export const Faq: React.FC = () => (
  <section id="faq" className="v3-section" aria-labelledby="faq-title">
    <div className="v3-wrap v3-split">
      <div className="v3-split-head">
        <RevealHeading id="faq-title">Questions clients ask</RevealHeading>
        <p className="v3-mute">For startups, teams building with AI tools, and enterprise buyers. Anything else, ask directly.</p>
        <div className="v3-cta-row">
          <button type="button" className="v3-btn v3-btn-primary" onClick={() => enquire('Something else')}>Ask a question</button>
          <a className="v3-link v3-small" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">Or message on LinkedIn</a>
        </div>
      </div>
      <div className="v3-faq">
        {FAQ.map((f) => (
          <details key={f.q} className="v3-glass">
            <summary><h3 className="v3-h3">{f.q}</h3></summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

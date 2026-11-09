import React from 'react';
import { TRACK, EDUCATION } from './content';
import { RevealHeading } from './Reveal';

export const Track: React.FC = () => (
  <section id="track" className="v3-section">
    <div className="v3-wrap v3-split">
      <div className="v3-split-head">
        <RevealHeading>Track record</RevealHeading>
        <p className="v3-mute">Shipping ML and GenAI since 2021, mostly embedded with client teams in the US and Europe.</p>
      </div>
      <div>
        <div className="v3-track">
          {TRACK.map((t) => (
            <div className="v3-track-row v3-glass" key={t.org}>
              <div className="yrs">{t.years}</div>
              <div>
                <h3 className="v3-h3">{t.role}, {t.org}</h3>
                <p>{t.note}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="v3-h3" style={{ marginTop: 40 }}>Education</h3>
        <ul className="v3-edu">
          {EDUCATION.map((e) => <li key={e}>{e}</li>)}
        </ul>
      </div>
    </div>
  </section>
);

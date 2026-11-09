import React from 'react';
import { MotionConfig } from 'framer-motion';
import { Problems } from './Problems';
import { enquire } from './enquire';
import { Why } from './Why';
import { Icp } from './Icp';
import { Capabilities } from './Capabilities';
import { Engagements } from './Engagements';
import { PilotPath } from './PilotPath';
import { Faq } from './Faq';
import { Contact } from './Contact';
import { bookingLinkProps } from './booking';

// /services: the same design system as home, focused on buying.
export const ServicesV3: React.FC<{ onRequestResume: () => void }> = ({ onRequestResume }) => (
  <MotionConfig reducedMotion="user">
    <div className="v3">
      <section className="v3-page-head">
        <div className="v3-wrap">
          <p className="v3-eyebrow v3-mono">Services</p>
          <h1 className="v3-h1 v3-page-title">AI engineering engagements, <em>delivered</em> by one senior engineer.</h1>
          <p className="v3-lead">
            Strategy sessions, readiness audits, pilot-to-production builds and embedded delivery for AI products,
            agents and revenue automation. Every engagement is scoped in writing, tied to one business metric,
            and handed over to your team.
          </p>
          <div className="v3-cta-row" style={{ marginTop: 28 }}>
            <a className="v3-btn v3-btn-primary v3-btn-lg" {...bookingLinkProps}>Book a 15-minute call</a>
            <button type="button" className="v3-btn v3-btn-ghost v3-btn-lg" onClick={() => enquire()}>
              Send an enquiry
            </button>
          </div>
        </div>
      </section>
      <Icp />
      <Engagements />
      <Problems />
      <Capabilities />
      <PilotPath />
      <Why />
      <Faq />
      <Contact onRequestResume={onRequestResume} />
    </div>
  </MotionConfig>
);

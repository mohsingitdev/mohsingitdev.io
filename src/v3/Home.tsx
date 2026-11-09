import React from 'react';
import { MotionConfig } from 'framer-motion';
import { Hero } from './Hero';
import { DiagnosticSection } from './Diagnostic';
import { Icp } from './Icp';
import { Why } from './Why';
import { Capabilities } from './Capabilities';
import { ValueDemo } from './ValueDemo';
import { Work } from './Work';
import { PilotPath } from './PilotPath';
import { Problems } from './Problems';
import { Track } from './Track';
import { Writing } from './Writing';
import { Faq } from './Faq';
import { Contact } from './Contact';
import { StickyCta } from './StickyCta';

// Order follows the buyer's questions: is this my problem, why you, what is it worth, proof, how, trust, enquire.
export const Home: React.FC<{ onRequestResume: () => void }> = ({ onRequestResume }) => (
  <MotionConfig reducedMotion="user">
    <div className="v3">
      <Hero />
      <Icp />
      <DiagnosticSection />
      <Problems />
      <Why />
      <ValueDemo />
      <Work />
      <Capabilities />
      <PilotPath />
      <Track />
      <Faq />
      <Writing />
      <Contact onRequestResume={onRequestResume} />
      <StickyCta />
    </div>
  </MotionConfig>
);

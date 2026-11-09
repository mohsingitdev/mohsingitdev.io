import React from 'react';
import { motion } from 'framer-motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const inner = { hidden: { y: '105%' }, show: { y: '0%', transition: { duration: 0.8, ease: EASE } } };

/** Section headings rise out of a mask once, the same motion as the hero headline.
 *  The mask (not the clipped text) is observed, otherwise it never counts as "in view". */
export const RevealHeading: React.FC<{ children: React.ReactNode; className?: string; as?: 'h2' | 'h3'; id?: string }> = ({
  children,
  className = 'v3-h2',
  as = 'h2',
  id,
}) => {
  const Tag = as;
  return (
    <Tag className={className} id={id}>
      <motion.span
        className="v3-line-mask"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      >
        <motion.span variants={inner}>{children}</motion.span>
      </motion.span>
    </Tag>
  );
};

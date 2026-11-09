import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { bookingLinkProps } from './booking';
import { enquire } from './enquire';

// Phone-only bar that appears after the hero and hides near the contact section.
export const StickyCta: React.FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => {
      const c = document.getElementById('contact');
      const nearEnd = c ? c.getBoundingClientRect().top < window.innerHeight : false;
      setShow(window.scrollY > 700 && !nearEnd);
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="v3-sticky"
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <a className="v3-btn v3-btn-primary" {...bookingLinkProps}>Book a call</a>
          <button type="button" className="v3-btn v3-btn-ghost" onClick={() => enquire()}>
            Enquire
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

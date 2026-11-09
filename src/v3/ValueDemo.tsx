import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, animate, useReducedMotion } from 'framer-motion';
import { SCENARIOS } from './content';
import { RevealHeading } from './Reveal';
import { bookingLinkProps } from './booking';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const WEEKS_PER_MONTH = 4.33;

const fmtMoney = (n: number) =>
  n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(1)}M` : n >= 1000 ? `$${Math.round(n / 1000)}k` : `$${Math.round(n)}`;

// Counts smoothly to the new value instead of jumping.
const Tween: React.FC<{ value: number; format: (n: number) => string }> = ({ value, format }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const prev = useRef(value);
  const reduce = useReducedMotion();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) { el.textContent = format(value); prev.current = value; return; }
    const c = animate(prev.current, value, { duration: 0.6, ease: EASE, onUpdate: (v) => { el.textContent = format(v); } });
    prev.current = value;
    return () => c.stop();
  }, [value, format, reduce]);
  return <span ref={ref}>{format(value)}</span>;
};

const Field: React.FC<{ id: string; label: string; value: number; min: number; max: number; step: number; suffix?: string; prefix?: string; onChange: (n: number) => void }> = ({
  id, label, value, min, max, step, suffix, prefix, onChange,
}) => (
  <div className="v3-field">
    <label htmlFor={id}>
      <span>{label}</span>
      <output htmlFor={id}>{prefix}{value}{suffix}</output>
    </label>
    <input
      id={id} type="range" min={min} max={max} step={step} value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      style={{ ['--p' as string]: `${((value - min) / (max - min)) * 100}%` }}
    />
  </div>
);

export const ValueDemo: React.FC = () => {
  const [id, setId] = useState(SCENARIOS[0].id);
  const s = SCENARIOS.find((x) => x.id === id) ?? SCENARIOS[0];
  const [inputs, setInputs] = useState(s.defaults);

  useEffect(() => { setInputs(s.defaults); }, [s]);

  const set = (k: keyof typeof inputs) => (n: number) => setInputs((v) => ({ ...v, [k]: n }));
  const hoursMonth = inputs.people * inputs.hours * (inputs.share / 100) * WEEKS_PER_MONTH;
  const valueYear = hoursMonth * 12 * inputs.rate;

  return (
    <section id="console" className="v3-section v3-value-section" aria-labelledby="v3-value-title">
      <div className="v3-wrap">
        <div className="v3-split" style={{ marginBottom: 40 }}>
          <RevealHeading id="v3-value-title">Pick your problem. See the plan and what it’s worth.</RevealHeading>
          <p className="v3-lead" style={{ alignSelf: 'end' }}>
            Each plan is how I would actually run the engagement. The estimate uses your numbers, so you can take
            it to your budget holder.
          </p>
        </div>

        <div className="v3-glass v3-value">
          <div className="v3-tabs" role="tablist" aria-label="Problems">
            {SCENARIOS.map((x) => {
              const on = x.id === id;
              return (
                <button key={x.id} type="button" role="tab" aria-selected={on} className="v3-tab" onClick={() => setId(x.id)}>
                  {on && <motion.span layoutId="v3-tab-bg" className="v3-tab-bg" transition={{ type: 'spring', stiffness: 420, damping: 38 }} />}
                  <span className="v3-mono v3-tab-role">{x.role}</span>
                  <span className="v3-tab-label">{x.label}</span>
                </button>
              );
            })}
          </div>

          <div className="v3-value-body">
            <AnimatePresence mode="wait">
              <motion.div
                key={s.id}
                className="v3-value-plan"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <p className="v3-value-problem">{s.problem}</p>
                <ol className="v3-stages">
                  {s.stages.map((st, i) => (
                    <motion.li
                      key={st.name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45, delay: 0.08 + i * 0.08, ease: EASE }}
                    >
                      <span className="v3-mono v3-stage-n">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <h3>{st.name}</h3>
                        <p>{st.body}</p>
                      </div>
                    </motion.li>
                  ))}
                </ol>
                <div className="v3-beyond">
                  <span className="v3-mono">Beyond the usual</span>
                  <p>{s.beyond}</p>
                </div>
                {s.evidence && <p className="v3-evidence">{s.evidence}</p>}
              </motion.div>
            </AnimatePresence>

            <div className="v3-calc">
              <span className="v3-mono v3-calc-title">Estimate with your numbers</span>
              <Field id="v3-people" label={s.peopleLabel} value={inputs.people} min={1} max={100} step={1} onChange={set('people')} />
              <Field id="v3-hours" label="Hours each spends on this a week" value={inputs.hours} min={1} max={40} step={1} onChange={set('hours')} />
              <Field id="v3-rate" label="Loaded cost per hour" value={inputs.rate} min={15} max={200} step={5} prefix="$" onChange={set('rate')} />
              <Field id="v3-share" label="Share that can be automated" value={inputs.share} min={10} max={70} step={5} suffix="%" onChange={set('share')} />

              <div className="v3-calc-out" aria-live="polite">
                <div>
                  <b><Tween value={hoursMonth} format={(n) => Math.round(n).toLocaleString('en-US')} /></b>
                  <span>hours a month back to your team</span>
                </div>
                <div>
                  <b><Tween value={valueYear} format={fmtMoney} /></b>
                  <span>a year, at your cost per hour</span>
                </div>
              </div>
              <p className="v3-calc-note">
                An estimate from the inputs above, not a client result. The automation share starts conservative;
                the diagnosis week replaces it with a measured number.
              </p>
              <a className="v3-btn v3-btn-primary" {...bookingLinkProps}>Check these numbers on a call</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

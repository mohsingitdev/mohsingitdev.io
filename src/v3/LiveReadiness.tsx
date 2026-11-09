import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Hero hook: the gap between a proven business case and a production system.
// Toggle between "Pilot today" and "With FDE": readiness bars animate and a live eval chart streams.
// Figures are an illustrative profile, labelled as such in the UI.

type Mode = 'pilot' | 'prod';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const DIMS: { k: string; pilot: number; prod: number }[] = [
  { k: 'Business case', pilot: 90, prod: 92 },
  { k: 'HLD / LLD design', pilot: 25, prod: 92 },
  { k: 'Guardrails', pilot: 15, prod: 88 },
  { k: 'Evals and monitoring', pilot: 10, prod: 90 },
  { k: 'Deployment', pilot: 20, prod: 90 },
  { k: 'Cost control', pilot: 20, prod: 85 },
];

const PROFILE = {
  pilot: { pass: 0.6, noise: 0.16, p95: 4.8, cost: 0.42 },
  prod: { pass: 0.93, noise: 0.025, p95: 1.2, cost: 0.09 },
};
const N = 44;
const GATE = 0.85;
const W = 320, H = 92;

const clamp = (v: number) => Math.max(0.05, Math.min(0.995, v));
const sample = (m: Mode) => {
  const p = PROFILE[m];
  const drop = m === 'pilot' && Math.random() < 0.12 ? -0.25 : 0;
  return clamp(p.pass + (Math.random() - 0.5) * 2 * p.noise + drop);
};

export const LiveReadiness: React.FC = () => {
  const reduce = useReducedMotion();
  const [mode, setMode] = useState<Mode>('pilot');
  const [auto, setAuto] = useState(true);
  const [series, setSeries] = useState<number[]>(() => Array.from({ length: N }, () => sample('pilot')));
  const modeRef = useRef(mode);
  modeRef.current = mode;

  // Stream a new point; ease toward the new regime instead of jumping.
  useEffect(() => {
    if (reduce) { setSeries(Array.from({ length: N }, () => PROFILE[mode].pass)); return; }
    const id = window.setInterval(() => {
      setSeries((s) => {
        const target = sample(modeRef.current);
        const next = s[s.length - 1] + (target - s[s.length - 1]) * 0.55;
        return [...s.slice(1), next];
      });
    }, 650);
    return () => window.clearInterval(id);
  }, [reduce, mode]);

  // Auto-cycle until the visitor takes control.
  useEffect(() => {
    if (!auto || reduce) return;
    const id = window.setInterval(() => setMode((m) => (m === 'pilot' ? 'prod' : 'pilot')), 6500);
    return () => window.clearInterval(id);
  }, [auto, reduce]);

  const pick = (m: Mode) => { setAuto(false); setMode(m); };

  const { line, area, last, passRate } = useMemo(() => {
    const pts = series.map((v, i) => [(i / (N - 1)) * W, H - v * H] as const);
    const d = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
    const lastV = series[series.length - 1];
    const window10 = series.slice(-10);
    return {
      line: d,
      area: `${d} L${W} ${H} L0 ${H} Z`,
      last: pts[pts.length - 1],
      passRate: window10.reduce((a, b) => a + b, 0) / window10.length || lastV,
    };
  }, [series]);

  const p = PROFILE[mode];
  const jitter = (v: number, pct: number) => v * (1 + (((series[series.length - 1] * 1000) % 7) - 3) * pct);
  const belowGate = passRate < GATE;

  return (
    <div className="v3-glass v3-live">
      <div className="v3-live-head">
        <span className="v3-mono">Pilot → production</span>
        <span className="v3-live-status v3-mono" data-mode={mode}><i aria-hidden="true" />{mode === 'pilot' ? 'Blocked at launch' : 'Live in production'}</span>
      </div>

      <div className="v3-live-toggle" role="tablist" aria-label="Compare pilot and production">
        {(['pilot', 'prod'] as Mode[]).map((m) => (
          <button key={m} type="button" role="tab" aria-selected={mode === m} onClick={() => pick(m)}>
            {mode === m && <motion.span layoutId="v3-live-pill" className="v3-live-pill" transition={{ type: 'spring', stiffness: 420, damping: 36 }} />}
            <span>{m === 'pilot' ? 'Your pilot today' : 'With a forward-deployed engineer'}</span>
          </button>
        ))}
      </div>

      <ul className="v3-live-bars">
        {DIMS.map((d, i) => {
          const v = d[mode];
          const weak = v < 50;
          return (
            <li key={d.k} data-weak={weak}>
              <span className="v3-live-k">{d.k}</span>
              <span className="v3-live-track">
                <motion.span
                  className="v3-live-fill"
                  initial={false}
                  animate={{ width: `${v}%` }}
                  transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : i * 0.05, ease: EASE }}
                />
              </span>
              <span className="v3-live-v v3-mono">{v}</span>
            </li>
          );
        })}
      </ul>

      <div className="v3-live-chart">
        <div className="v3-live-chart-head">
          <span className="v3-mono">Eval pass rate · live</span>
          <b data-low={belowGate}>{Math.round(passRate * 100)}%</b>
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" role="img" aria-label={`Evaluation pass rate around ${Math.round(passRate * 100)} percent`}>
          <defs>
            <linearGradient id="v3-live-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.28" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" x2={W} y1={H - GATE * H} y2={H - GATE * H} className="v3-live-gate" />
          <text x={4} y={H - GATE * H + 10} textAnchor="start" className="v3-live-gate-label">release gate 85%</text>
          <path d={area} fill="url(#v3-live-area)" className="v3-live-area" data-mode={mode} />
          <path d={line} fill="none" className="v3-live-line" data-mode={mode} />
          <circle cx={last[0]} cy={last[1]} r="3.5" className="v3-live-dot" data-mode={mode} />
        </svg>
        <dl className="v3-live-kpis">
          <div><dt>p95 latency</dt><dd className="v3-mono">{jitter(p.p95, 0.02).toFixed(1)}s</dd></div>
          <div><dt>Cost per task</dt><dd className="v3-mono">${jitter(p.cost, 0.03).toFixed(2)}</dd></div>
          <div><dt>Guardrails</dt><dd className="v3-mono">{mode === 'pilot' ? 'none' : 'PII · policy · refusal'}</dd></div>
        </dl>
      </div>
      <p className="v3-live-note">Illustrative profile of a typical stalled pilot versus the same use case after a production engagement.</p>
    </div>
  );
};

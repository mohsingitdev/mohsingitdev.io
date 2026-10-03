import React from 'react';
import { EXPERIENCES, EDUCATION } from '../data/experience';
import { Briefcase, GraduationCap, CheckCircle2, MapPin } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono text-cyber-green">
          <Briefcase className="w-3.5 h-3.5" />
          <span>PRODUCTION PEDIGREE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Enterprise Track Record
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Proven history designing, hardening, and deploying enterprise-scale AI systems across global technology, life sciences, and consulting leaders.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-6">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="rounded-2xl bg-cyber-surface border border-cyber-border p-6 sm:p-8 space-y-6 hover:border-cyber-green/40 transition-all duration-300 shadow-md"
          >
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-cyber-border/70 pb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  {exp.badge && (
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-cyber-green/15 text-cyber-green border border-cyber-green/30">
                      {exp.badge}
                    </span>
                  )}
                </div>
                <div className="text-sm font-medium text-slate-300 mt-1">{exp.role}</div>
              </div>

              <div className="text-left sm:text-right font-mono text-xs text-cyber-muted space-y-1">
                <div>{exp.period}</div>
                <div className="flex items-center sm:justify-end gap-1 text-[11px] text-slate-400">
                  <MapPin className="w-3 h-3 text-cyber-cyan" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-2.5 text-sm text-slate-300">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyber-green mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="pt-2 flex flex-wrap gap-1.5">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-cyber-card border border-cyber-border text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education & Credentials Grid */}
      <div className="pt-10 border-t border-cyber-border/70 space-y-8">
        <div className="flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-cyber-cyan">
          <GraduationCap className="w-5 h-5 text-cyber-cyan" />
          <span>Academic Pedigree & Advanced Specializations</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-cyber-surface border border-cyber-border space-y-1.5 hover:border-cyber-cyan/40 transition-colors"
            >
              <div className="text-xs font-mono text-cyber-cyan">{edu.period}</div>
              <div className="font-semibold text-sm text-white">{edu.degree}</div>
              <div className="text-xs text-slate-400">{edu.institution}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

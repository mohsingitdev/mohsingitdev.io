import React from 'react';
import { EXPERIENCES, EDUCATION } from '../data/experience';
import { Briefcase, GraduationCap, CheckCircle2, MapPin } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas-card border border-terracotta/40 text-xs font-mono text-terracotta shadow-sm">
          <Briefcase className="w-3.5 h-3.5 text-terracotta" />
          <span>PRODUCTION PEDIGREE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight">
          Enterprise{' '}
          <span className="font-serif italic font-normal text-terracotta">Track Record</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Proven history designing, hardening, and deploying enterprise-scale AI systems across global technology, life sciences, and consulting leaders.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-6">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="rounded-3xl bg-canvas-surface border border-canvas-border p-6 sm:p-8 space-y-6 hover:border-terracotta/40 transition-all duration-300 shadow-subtle-card apple-card-hover"
          >
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-canvas-border/80 pb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-xl font-bold text-white font-sans">{exp.company}</h3>
                  {exp.badge && (
                    <span className="text-[11px] font-mono px-3 py-0.5 rounded-full bg-terracotta/15 text-terracotta border border-terracotta/30">
                      {exp.badge}
                    </span>
                  )}
                </div>
                <div className="text-sm font-medium text-slate-300 mt-1">{exp.role}</div>
              </div>

              <div className="flex items-center sm:justify-end">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-terracotta/10 text-terracotta border border-terracotta/25 shadow-sm">
                  <MapPin className="w-3 h-3" />
                  <span>{exp.location}</span>
                </span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-2.5 text-sm text-slate-300">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-terracotta mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="pt-2 flex flex-wrap gap-1.5">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-canvas-card border border-canvas-border text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education & Credentials Grid */}
      <div className="pt-10 border-t border-canvas-border space-y-8">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-terracotta">
          <GraduationCap className="w-4 h-4 text-terracotta" />
          <span>Academic Pedigree & Advanced Specializations</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-canvas-surface border border-canvas-border space-y-1.5 hover:border-terracotta/40 transition-all duration-300 shadow-apple-card apple-card-hover"
            >
              <div className="text-xs font-mono text-terracotta">{edu.period}</div>
              <div className="font-semibold text-sm text-white font-sans">{edu.degree}</div>
              <div className="text-xs text-slate-400">{edu.institution}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

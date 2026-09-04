import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Section Tag (no code prefixes) */}
        <div className="mb-3">
          <span className="text-xs font-mono tracking-widest text-[#5b7fff] uppercase font-semibold">
            Experience
          </span>
        </div>

        {/* Heading & Subtext */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 font-display">
          Industry Experience
        </h2>
        <p className="text-base sm:text-lg text-[#a8b0c8] max-w-2xl mb-14 text-justify">
          Hands-on software engineering and AI system implementation in production-oriented environments.
        </p>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/15 space-y-12">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-[#05070f] border-2 border-[#5b7fff] shadow-[0_0_12px_rgba(91,127,255,0.7)] group-hover:scale-125 transition-transform duration-200" />

              {/* Glass Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-white/[0.08]">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display flex items-center gap-2.5">
                      <Briefcase className="w-5 h-5 text-[#5b7fff]" />
                      <span>{exp.role}</span>
                    </h3>
                    <p className="text-[#5b7fff] font-mono text-sm sm:text-base font-semibold mt-1">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-[#a8b0c8] self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-[#9b6bff]" />
                    <span>{exp.dates}</span>
                  </div>
                </div>

                {/* Bullets with justified text */}
                <ul className="space-y-3.5 text-[#a8b0c8] text-sm sm:text-base mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-sm bg-[#9b6bff] mt-2 flex-shrink-0 rotate-45" />
                      <span className="text-justify">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-mono text-[#a8b0c8] bg-white/[0.03] border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

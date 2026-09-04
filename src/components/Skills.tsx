import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Code,
  Layers,
  Globe,
  Cloud,
  Cpu,
  Sparkles,
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code className="w-4 h-4 text-[#5b7fff]" />,
  'Software Development': <Layers className="w-4 h-4 text-[#5b7fff]" />,
  'Web & Backend': <Globe className="w-4 h-4 text-[#5b7fff]" />,
  'Cloud & Practices': <Cloud className="w-4 h-4 text-[#5b7fff]" />,
  'CS Fundamentals': <Cpu className="w-4 h-4 text-[#5b7fff]" />,
  'AI / ML Tools': <Sparkles className="w-4 h-4 text-[#9b6bff]" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Section Tag (no code prefixes like # or //) */}
        <div className="mb-3">
          <span className="text-xs font-mono tracking-widest text-[#5b7fff] uppercase font-semibold">
            Technical Stack
          </span>
        </div>

        {/* Heading & Subtext */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 font-display">
          Technologies I Work With
        </h2>
        <p className="text-base sm:text-lg text-[#a8b0c8] max-w-2xl mb-14 text-justify">
          Core software-development stack first, with AI/ML tooling I use alongside it.
        </p>

        {/* Categories Grid (Ordered software-engineering-first, AI/ML tools last) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isLast = idx === SKILL_CATEGORIES.length - 1;
            return (
              <div
                key={cat.title}
                className={`glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:-translate-y-1 transition-all duration-200 ${
                  isLast ? 'border-white/[0.06] bg-white/[0.02]' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/[0.08]">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
                      {categoryIcons[cat.title] || <Code className="w-4 h-4 text-[#5b7fff]" />}
                    </div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white font-display">
                        {cat.title}
                      </h3>
                      {isLast && (
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.05] text-[#a8b0c8] border border-white/10">
                          Specialization
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                          isLast
                            ? 'text-[#a8b0c8] bg-white/[0.02] border border-white/[0.08] hover:text-white hover:border-[#9b6bff]/40'
                            : 'text-[#eef1f8] bg-white/[0.035] border border-white/10 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

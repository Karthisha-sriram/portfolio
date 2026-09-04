import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Section Tag (no code prefixes) */}
        <div className="mb-3">
          <span className="text-xs font-mono tracking-widest text-[#5b7fff] uppercase font-semibold">
            Academic Background
          </span>
        </div>

        {/* Heading & Subtext */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 font-display">
          Education
        </h2>
        <p className="text-base sm:text-lg text-[#a8b0c8] max-w-2xl mb-14 text-justify">
          Rigorous academic grounding in computer science principles and artificial intelligence.
        </p>

        {/* Education Card */}
        <div className="max-w-3xl">
          <div className="glass-panel rounded-2xl p-7 sm:p-9 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5b7fff]/20 to-[#9b6bff]/20 border border-[#5b7fff]/30 flex items-center justify-center text-[#5b7fff]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      {EDUCATION_DATA.institution}
                    </h3>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-[#5b7fff] font-medium pl-0 sm:pl-13">
                  {EDUCATION_DATA.degree}
                </p>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#a8b0c8] pl-0 sm:pl-13 pt-1">
                  <Calendar className="w-4 h-4 text-[#9b6bff]" />
                  <span>{EDUCATION_DATA.period}</span>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-[#5b7fff]" />
                  <span className="text-xs font-mono uppercase text-[#a8b0c8] tracking-widest">
                    CGPA
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight bg-gradient-to-r from-white to-[#5b7fff] bg-clip-text text-transparent">
                  {EDUCATION_DATA.cgpa}
                </div>
                <span className="text-[11px] font-mono text-[#6b7390]">Scale: 10.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

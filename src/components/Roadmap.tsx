import React from 'react';
import { ROADMAP_CARDS } from '../data/portfolioData';
import { Code2, Server, BrainCircuit, GitMerge } from 'lucide-react';

const icons = [Code2, Server, BrainCircuit, GitMerge];

export const Roadmap: React.FC = () => {
  return (
    <section id="expertise" className="py-24 relative overflow-hidden">
      {/* Target anchor alias for roadmap */}
      <span id="roadmap" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Section Tag */}
        <div className="mb-3">
          <span className="text-xs font-mono tracking-widest text-[#5b7fff] uppercase font-semibold">
            Engineering Focus
          </span>
        </div>

        {/* Heading & Subtext */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 font-display">
          Core Execution Roadmap
        </h2>
        <p className="text-base sm:text-lg text-[#a8b0c8] max-w-2xl mb-14 text-justify">
          The areas I focus on when building software end to end.
        </p>

        {/* 4 CARDS WITH THE REVOLVING / ORBIT ANIMATION EFFECT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {ROADMAP_CARDS.map((card, idx) => {
            const Icon = icons[idx] || Code2;
            return (
              <div
                key={card.rootId}
                className="relative group hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                {/* Atmospheric cloud glow behind each card */}
                <div className="absolute inset-[-15%] rounded-full bg-gradient-to-tr from-[#5b7fff]/25 via-[#9b6bff]/20 to-transparent blur-2xl pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-300 -z-10" />

                {/* Orbit Ring 1: Primary revolving circular orbit */}
                <div className="absolute -inset-4 sm:-inset-5 rounded-full border border-white/20 animate-spin-slow pointer-events-none -z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#5b7fff] shadow-[0_0_12px_#5b7fff]" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#9b6bff] shadow-[0_0_10px_#9b6bff]" />
                </div>

                {/* Orbit Ring 2: Counter-revolving circular orbit */}
                <div className="absolute -inset-2.5 sm:-inset-3.5 rounded-full border border-[#5b7fff]/30 animate-spin-reverse-slow pointer-events-none -z-10 opacity-60 group-hover:opacity-90 transition-opacity">
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#ffffff]" />
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#5b7fff] shadow-[0_0_8px_#5b7fff]" />
                </div>

                {/* Orbit Ring 3: Concentric inner celestial orbit */}
                <div className="absolute -inset-1 sm:-inset-2 rounded-full border border-[#9b6bff]/25 animate-spin-ambient pointer-events-none -z-10 opacity-50 group-hover:opacity-80 transition-opacity">
                  <div className="absolute top-[15%] left-[15%] w-1.5 h-1.5 rounded-full bg-[#9b6bff] shadow-[0_0_8px_#9b6bff]" />
                </div>

                {/* Inner Card Container */}
                <div className="relative h-full w-full bg-[#0b0f1c] rounded-xl p-6 sm:p-7 flex flex-col justify-between z-10 border border-white/15 shadow-xl">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-xs text-[#5b7fff] font-bold tracking-wider">
                        {card.rootId}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#5b7fff] group-hover:text-white group-hover:border-white/30 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-display">
                      {card.title}
                    </h3>

                    <p className="text-sm text-[#a8b0c8] leading-relaxed mb-6 text-justify" style={{ textAlign: 'justify' }}>
                      {card.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono text-[#a8b0c8] bg-white/[0.03] border border-white/10"
                      >
                        {tag}
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

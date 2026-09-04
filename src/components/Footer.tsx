import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] py-12 bg-[#05070f] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <a
            href="#home"
            className="text-lg font-bold tracking-tight text-white font-display"
          >
            <span>{PERSONAL_INFO.name}</span>
            <span className="text-[#5b7fff]">.</span>
          </a>
          <p className="text-xs font-mono text-[#a8b0c8] mt-1">
            {PERSONAL_INFO.title}
          </p>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#a8b0c8] hover:text-white hover:border-[#5b7fff]/50 hover:bg-white/[0.08] transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#a8b0c8] hover:text-white hover:border-[#5b7fff]/50 hover:bg-white/[0.08] transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Email"
            className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#a8b0c8] hover:text-white hover:border-[#5b7fff]/50 hover:bg-white/[0.08] transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Back to Top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#a8b0c8] hover:text-white hover:border-[#5b7fff]/50 hover:bg-white/[0.08] transition-all cursor-pointer ml-2"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

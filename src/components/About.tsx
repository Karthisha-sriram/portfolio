import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, ABOUT_CHIPS } from '../data/portfolioData';
import { usePhoto } from '../context/PhotoContext';

export const About: React.FC = () => {
  const { photoSrc, cutoutSrc } = usePhoto();
  const [imgSrc, setImgSrc] = useState(photoSrc || cutoutSrc);

  useEffect(() => {
    setImgSrc(photoSrc || cutoutSrc);
  }, [photoSrc, cutoutSrc]);

  const handlePhotoError = () => {
    if (imgSrc === photoSrc && cutoutSrc && cutoutSrc !== photoSrc) {
      setImgSrc(cutoutSrc);
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* TEXT CONTENT */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Clean Section Tag (no code prefixes like //) */}
            <div className="mb-3">
              <span className="text-xs font-mono tracking-widest text-[#5b7fff] uppercase font-semibold">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 font-display">
              Software Engineer & AI/ML Specialist
            </h2>

            {/* Justified paragraphs */}
            <div className="space-y-4 text-[#a8b0c8] text-base sm:text-lg leading-relaxed mb-8">
              <p className="text-justify" style={{ textAlign: 'justify' }}>
                I'm a B.Tech Computer Science and Engineering graduate, with a solid foundation in
                Java, Python, SQL, Object-Oriented Programming, and Data Structures & Algorithms.
              </p>
              <p className="text-justify" style={{ textAlign: 'justify' }}>
                My work spans building full-stack applications, designing REST APIs, debugging,
                testing, and shipping data-driven features — across the stack from backend services to
                interactive frontends, with a growing specialization in AI/ML tooling along the way.
              </p>
            </div>

            {/* A row of small skill-chip tags */}
            <div className="flex flex-wrap gap-2.5">
              {ABOUT_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-xs sm:text-sm font-mono text-[#eef1f8] tracking-wide hover:border-white/30 transition-colors"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* SECOND PAGE PHOTO WITH ROUND SPINNING ORBIT / CLOUD ANIMATION (STRICTLY BEHIND PHOTO, NO STRAIGHT LINES) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-64 sm:w-72 aspect-square flex items-center justify-center">
              {/* Atmospheric background cloud glow */}
              <div className="absolute inset-[-25%] rounded-full bg-gradient-to-tr from-[#5b7fff]/30 via-[#9b6bff]/25 to-transparent blur-3xl pointer-events-none -z-10" />

              {/* Orbit Ring 1: Primary wide circular revolving orbit */}
              <div className="absolute w-[360px] h-[360px] rounded-full border border-white/20 animate-spin-slow pointer-events-none -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#5b7fff] shadow-[0_0_16px_#5b7fff]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#9b6bff] shadow-[0_0_12px_#9b6bff]" />
              </div>

              {/* Orbit Ring 2: Intermediate circular counter-revolving orbit */}
              <div className="absolute w-[320px] h-[320px] rounded-full border border-[#5b7fff]/30 animate-spin-reverse-slow pointer-events-none -z-10">
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_14px_#ffffff]" />
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#5b7fff] shadow-[0_0_10px_#5b7fff]" />
              </div>

              {/* Orbit Ring 3: Concentric inner celestial orbit */}
              <div className="absolute w-[280px] h-[280px] rounded-full border border-[#9b6bff]/25 animate-spin-ambient pointer-events-none -z-10">
                <div className="absolute top-[14%] left-[14%] w-2 h-2 rounded-full bg-[#9b6bff] shadow-[0_0_10px_#9b6bff]" />
                <div className="absolute bottom-[14%] right-[14%] w-2 h-2 rounded-full bg-[#5b7fff] shadow-[0_0_10px_#5b7fff]" />
              </div>

              {/* Photo Frame containing the original photo (strictly z-10, never covered by animations) */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 bg-[#0b0f1c] shadow-[0_20px_45px_rgba(0,0,0,0.9)] p-2 z-10">
                <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#05070f]">
                  <img
                    src={imgSrc}
                    alt={PERSONAL_INFO.name}
                    onError={handlePhotoError}
                    className="w-full h-full object-cover object-center filter brightness-[0.99] contrast-[1.02]"
                    loading="lazy"
                  />
                </div>

               <div className="absolute bottom-4 left-4 right-4 bg-emerald-500/25 backdrop-blur-md border border-emerald-400/30 rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-mono font-medium text-white tracking-wide">
                    Open to opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


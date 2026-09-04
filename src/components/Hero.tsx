import React, { useState, useEffect, useRef } from 'react';
import { ArrowDownRight, ArrowDown, Github, Linkedin, Mail, Upload } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { usePhoto } from '../context/PhotoContext';

const roles = ['Full Stack Developer', 'Software Developer', 'Backend Developer'];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const { photoSrc, cutoutSrc, uploadPhoto, hasLoadedPhoto } = usePhoto();
  const [imgSrc, setImgSrc] = useState(cutoutSrc || photoSrc);
  const [hasError, setHasError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setImgSrc(cutoutSrc || photoSrc);
    setHasError(false);
  }, [cutoutSrc, photoSrc]);

  const handlePhotoError = () => {
    if (imgSrc === cutoutSrc && photoSrc && photoSrc !== cutoutSrc) {
      setImgSrc(photoSrc);
    } else {
      setHasError(true);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await uploadPhoto(file);
    }
  };

  useEffect(() => {
    // Show one role at a time with smooth fade transition
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsFading(false);
      }, 300);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-8"
    >
      {/* ATMOSPHERIC BACKGROUND RADIAL GLOW */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[680px] h-[680px] rounded-full bg-gradient-to-tr from-[#5b7fff]/15 via-[#9b6bff]/12 to-transparent blur-[140px] transform -translate-y-10" />
      </div>

      {/* DESKTOP HERO CONTAINER: 3 ZONES (LEFT INTRO, CENTER DOMINANT PHOTO, RIGHT CTA) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center my-auto">
        {/* DESKTOP LAYOUT (lg and up): Strictly unobstructed 3-column layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-4 items-center min-h-[82vh]">
          {/* LEFT ZONE: Introductory text (completely to the left of the photo) */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col items-start text-left pr-2 z-20">
            <span className="text-xl sm:text-2xl font-light text-[#a8b0c8] mb-1 font-sans">
              Hi, my name is
            </span>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold font-display text-white tracking-tight leading-[1.08] mb-4">
              <span className="block mt-1 bg-gradient-to-r from-white via-[#eef1f8] to-[#9b6bff] bg-clip-text text-transparent">
                Karthisha
              </span>
            </h1>

            {/* Single animated role with bright indicator dot */}
            <div className="flex items-center gap-3 h-9 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5b7fff] shadow-[0_0_10px_rgba(91,127,255,0.9)] flex-shrink-0" />
              <span
                className={`text-xl sm:text-2xl font-sans text-white font-medium tracking-wide transition-opacity duration-300 ease-in-out ${
                  isFading ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {roles[roleIndex]}
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#a8b0c8] font-sans leading-relaxed max-w-sm mb-6 text-justify" style={{ textAlign: 'justify' }}>
              {PERSONAL_INFO.subtitle} • Building scalable systems, clean APIs, and intelligent data-driven applications.
            </p>

            {/* Quick Contact Links */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/15 flex items-center justify-center text-[#a8b0c8] hover:text-white transition-all duration-200"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/15 flex items-center justify-center text-[#a8b0c8] hover:text-white transition-all duration-200"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/15 flex items-center justify-center text-[#a8b0c8] hover:text-white transition-all duration-200"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* CENTER ZONE: Centered, dominant, full-height photo of Karthisha */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-end justify-center h-full relative z-10">
            <div className="relative w-full h-[88vh] max-h-[960px] flex items-end justify-center select-none">
              {/* LARGE SOFT DIFFUSED WHITE LIGHT / GLOW AROUND OUTSIDE OF CUTOUT (REMAINS STRICTLY BEHIND BODY) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-visible">
                {/* Core soft white radiance */}
                <div className="w-[360px] sm:w-[440px] lg:w-[500px] h-[640px] sm:h-[760px] lg:h-[860px] rounded-full bg-white/20 blur-[85px] transform -translate-y-8" />
                {/* Wide atmospheric diffused white glow extending around silhouette */}
                <div className="w-[480px] sm:w-[600px] lg:w-[680px] h-[740px] sm:h-[860px] lg:h-[960px] rounded-full bg-white/12 blur-[130px] transform -translate-y-10" />
                {/* Outer expansive soft halo smoothly blending into deep background */}
                <div className="w-[600px] sm:w-[750px] lg:w-[860px] h-[840px] sm:h-[980px] lg:h-[1080px] rounded-full bg-gradient-to-t from-white/8 via-white/5 to-transparent blur-[170px]" />
              </div>

              {/* Photo Image or Dropzone */}
              {!hasError ? (
                <img
                  src={imgSrc}
                  alt="Karthisha"
                  onError={handlePhotoError}
                  className="h-full w-auto max-w-full object-contain object-bottom drop-shadow-[0_0_45px_rgba(255,255,255,0.45)] drop-shadow-[0_30px_70px_rgba(0,0,0,0.95)] filter brightness-[0.99] contrast-[1.02] transition-opacity duration-300 pointer-events-none"
                  loading="eager"
                />
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="cursor-pointer group flex flex-col items-center justify-center h-[70vh] w-full max-w-md border-2 border-dashed border-white/25 rounded-3xl p-8 text-center bg-white/[0.02] hover:bg-white/[0.06] transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-display">Drop Original Photo Here</h3>
                  <p className="text-sm text-[#a8b0c8] mb-4">Click to select or drag &amp; drop your original <code className="text-white">photo.png</code></p>
                  <span className="px-4 py-2 rounded-full bg-white/10 text-xs font-mono text-white group-hover:bg-[#5b7fff] transition-colors">
                    Upload photo.png
                  </span>
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>

          {/* RIGHT ZONE: "View My Work" CTA (completely to the right of the photo) */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col items-end justify-center text-right pl-2 z-20">
            <div className="flex flex-col items-end gap-5">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3.5 px-8 py-4 rounded-full text-base font-semibold tracking-wide text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-white/40 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>View My Work</span>
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#5b7fff] flex items-center justify-center transition-colors duration-200">
                  <ArrowDownRight className="w-4 h-4 text-white stroke-[2.5]" />
                </div>
              </a>

              {/* Justified text description */}
              <p
                className="text-xs font-mono text-[#a8b0c8] max-w-[240px] leading-relaxed"
                style={{ textAlign: 'justify' }}
              >
                Explore engineering projects, AI/ML tools, and verified credentials.
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET LAYOUT (< lg): Stacked with centered photo and clean non-overlapping spacing */}
        <div className="flex lg:hidden flex-col items-center text-center py-4">
          {/* Intro Text */}
          <div className="mb-4">
            <span className="text-lg font-light text-[#a8b0c8] font-sans">
              Hi, my name is
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-white tracking-tight mt-1 mb-2">
              <span className="bg-gradient-to-r from-white via-[#eef1f8] to-[#9b6bff] bg-clip-text text-transparent">
                Karthisha
              </span>
            </h1>

            {/* Animated role */}
            <div className="flex items-center justify-center gap-2.5 h-8 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#5b7fff] shadow-[0_0_8px_rgba(91,127,255,0.9)]" />
              <span
                className={`text-lg sm:text-xl font-sans text-white font-medium tracking-wide transition-opacity duration-300 ease-in-out ${
                  isFading ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {roles[roleIndex]}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#a8b0c8] max-w-sm mx-auto mb-4 text-justify" style={{ textAlign: 'justify' }}>
              {PERSONAL_INFO.subtitle}
            </p>
          </div>

          {/* Centered Cutout Photo: Large & prominent without covering any text */}
          <div className="relative w-full max-w-sm sm:max-w-md h-[60vh] sm:h-[68vh] flex items-end justify-center my-3">
            {/* Mobile soft white halo behind cutout */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              <div className="w-[280px] sm:w-[340px] h-[460px] sm:h-[540px] rounded-full bg-white/20 blur-[65px] transform -translate-y-4" />
              <div className="w-[360px] sm:w-[440px] h-[540px] sm:h-[640px] rounded-full bg-white/10 blur-[95px] transform -translate-y-6" />
            </div>

            {!hasError ? (
              <img
                src={imgSrc}
                alt="Karthisha"
                onError={handlePhotoError}
                className="h-full w-auto max-w-full object-contain object-bottom drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)] pointer-events-none"
                loading="eager"
              />
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="cursor-pointer group flex flex-col items-center justify-center h-full w-full border border-dashed border-white/25 rounded-2xl p-6 text-center bg-white/[0.02]"
              >
                <Upload className="w-6 h-6 text-white mb-2" />
                <span className="text-xs font-mono text-white">Tap to upload photo.png</span>
              </div>
            )}
          </div>

          {/* "View My Work" CTA Below Photo */}
          <div className="mt-4 flex flex-col items-center gap-4 z-20">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 shadow-xl backdrop-blur-md transition-all duration-200"
            >
              <span>View My Work</span>
              <ArrowDownRight className="w-4 h-4 text-white stroke-[2.5]" />
            </a>

            <p
              className="text-xs font-mono text-[#a8b0c8] max-w-[260px] text-center"
              style={{ textAlign: 'justify' }}
            >
              Explore engineering projects, AI/ML tools, and verified credentials.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/15 flex items-center justify-center text-[#a8b0c8] hover:text-white"
                title="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/15 flex items-center justify-center text-[#a8b0c8] hover:text-white"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/15 flex items-center justify-center text-[#a8b0c8] hover:text-white"
                title="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MINIMAL BOTTOM SCROLL INDICATOR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex items-center justify-between text-xs font-mono text-[#6b7390] pt-2">
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-[#a8b0c8] hover:text-white transition-colors"
        >
          <span className="tracking-widest uppercase text-[11px]">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
        <div className="h-px w-24 bg-white/10 hidden sm:block" />
      </div>
    </section>
  );
};

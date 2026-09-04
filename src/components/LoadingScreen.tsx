import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 2-second climbing animation from 0% to 100%
    const totalDuration = 1900;
    const intervalTime = 25;
    const step = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              onComplete();
            }, 450);
          }, 200);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070f] px-6 transition-opacity duration-500 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-live="polite"
      aria-label="System Initializing"
    >
      {/* Ambient background glow */}
      <div className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-[#5b7fff]/15 to-[#9b6bff]/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#5b7fff] animate-ping" />
          <span className="text-[11px] font-mono tracking-widest text-[#5b7fff] uppercase font-semibold">
            INITIALIZING SYSTEM
          </span>
        </div>

        {/* Person Name and Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-2 font-display">
          SRIRAM KARTHISHA
        </h1>
        <p className="text-xs sm:text-sm font-mono tracking-wider text-[#a8b0c8] mb-8 uppercase">
          SOFTWARE DEVELOPMENT ENGINEER
        </p>

        {/* Progress Display */}
        <div className="w-full bg-white/[0.05] border border-white/10 rounded-full h-2.5 p-0.5 overflow-hidden mb-4 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#5b7fff] to-[#9b6bff] rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(91,127,255,0.8)]"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Counter and status tags */}
        <div className="w-full flex items-center justify-between text-xs font-mono text-[#6b7390]">
          <span className="tracking-widest flex items-center gap-1.5 text-[#a8b0c8]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5b7fff]" />
            LOADING MODULES...
          </span>
          <span className="text-base font-bold text-white tabular-nums">
            {Math.floor(progress)}%
          </span>
          <span className="tracking-widest text-[#a8b0c8]">STAND BY</span>
        </div>
      </div>
    </div>
  );
};

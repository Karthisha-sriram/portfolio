import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, ShieldCheck } from 'lucide-react';
import { CertificateItem } from '../types';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (certificate) {
      // Prevent background scrolling while modal is active
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [certificate, onClose]);

  if (!certificate) return null;

  // Use createPortal to mount directly on document.body, completely detaching from transformed parent scroll containers
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      className="fixed inset-0 z-[99999] overflow-y-auto bg-[#030409]/92 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Centering wrapper that allows full internal scrolling if modal height exceeds screen */}
      <div className="min-h-full w-full flex items-center justify-center p-3 sm:p-6 md:p-8">
        <div
          className="relative w-full max-w-5xl my-auto flex flex-col bg-[#0b0f1c] border border-white/20 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header bar - sticky at top */}
          <div className="sticky top-0 z-30 flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/10 bg-[#070a14]/95 backdrop-blur-md">
            <div className="flex items-center gap-3 pr-4 min-w-0">
              <ShieldCheck className="w-5 h-5 text-[#5b7fff] flex-shrink-0" />
              <div className="min-w-0">
                <h3 id="cert-modal-title" className="text-base sm:text-lg font-bold text-white font-display truncate">
                  {certificate.title}
                </h3>
                <p className="text-xs font-mono text-[#5b7fff] tracking-wide">
                  {certificate.issuer}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:px-3 sm:py-2 rounded-xl text-[#a8b0c8] hover:text-white hover:bg-white/[0.08] transition-colors flex items-center gap-1.5 text-xs font-mono"
                title="Open original file in new tab"
              >
                <span className="hidden sm:inline">Original File</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-[#a8b0c8] hover:text-white hover:bg-white/[0.08] transition-colors"
                aria-label="Close certificate lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Certificate Image View - independently scrollable container */}
          <div className="flex-1 overflow-auto max-h-[calc(90vh-80px)] p-4 sm:p-6 md:p-8 flex items-center justify-center bg-[#05070f]/90">
            <img
              src={certificate.image}
              alt={`${certificate.title} issued by ${certificate.issuer}`}
              className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-2xl border border-white/10"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

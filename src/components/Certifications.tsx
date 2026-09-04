import React, { useState } from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { CertificateItem } from '../types';
import { CertificateModal } from './CertificateModal';
import { Award, Eye } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Section Tag (no code prefixes like //) */}
        <div className="mb-3 text-center sm:text-left">
          <span className="text-xs font-mono tracking-widest text-[#5b7fff] uppercase font-semibold">
            Certifications
          </span>
        </div>

        {/* Heading & Subtext */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 font-display text-center sm:text-left">
          Verified Credentials
        </h2>
        <p className="text-base sm:text-lg text-[#a8b0c8] max-w-2xl mb-14 text-justify sm:text-left">
          Verified professional certifications across programming, networking, databases, and language proficiency.
        </p>

        {/* 6 CERTIFICATES IN A BALANCED, CENTERED GRID (NO PREVIEW IMAGES INITIALLY) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-1 transition-all duration-200 border border-white/10"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#5b7fff]">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#5b7fff] font-semibold">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-6 font-display leading-snug">
                  {cert.title}
                </h3>
              </div>

              {/* View Certificate Button (Opens original certificate image in modal/lightbox) */}
              <div className="pt-4 border-t border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 bg-white/[0.03] text-xs font-mono font-semibold tracking-wider text-[#eef1f8] hover:text-white hover:bg-white/[0.08] hover:border-[#5b7fff]/50 transition-all duration-200 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#5b7fff]" />
                  <span>View Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox overlay with full-size uncropped certificate view */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};

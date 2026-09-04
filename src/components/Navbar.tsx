import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sectionIds = ['home', 'about', 'expertise', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070f]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-[#05070f]/50 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-1.5 text-lg font-bold tracking-tight text-white font-display"
        >
          <span>{PERSONAL_INFO.initials}</span>
          <span className="text-[#5b7fff] group-hover:text-[#9b6bff] transition-colors">.</span>
        </a>

        {/* Desktop Nav Links */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-wider font-mono transition-colors relative py-1 ${
                  isActive ? 'text-white font-semibold' : 'text-[#a8b0c8] hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#5b7fff] to-[#9b6bff] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Exactly ONE Resume-related button in navbar */}
        <div className="hidden sm:flex items-center">
          <a
            href={PERSONAL_INFO.resumeFile}
            download="Sriram_Karthisha_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider font-mono rounded-full border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.09] hover:border-[#5b7fff]/50 transition-all duration-200 shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5 text-[#5b7fff]" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg border border-white/10 bg-white/[0.03] text-[#a8b0c8] hover:text-white hover:border-white/20 transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/[0.08] bg-[#05070f]/95 backdrop-blur-2xl px-6 py-5 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className={`py-2 text-sm font-mono tracking-wider transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-[#5b7fff] font-bold'
                    : 'text-[#a8b0c8] hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Exactly ONE resume button repeated in mobile menu */}
            <div className="pt-3 border-t border-white/10">
              <a
                href={PERSONAL_INFO.resumeFile}
                download="Sriram_Karthisha_Resume.pdf"
                onClick={closeMobileMenu}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider font-mono rounded-full border border-[#5b7fff]/40 bg-[#5b7fff]/10 text-white hover:bg-[#5b7fff]/20 transition-all"
              >
                <FileDown className="w-4 h-4 text-[#5b7fff]" />
                <span>Download Resume</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

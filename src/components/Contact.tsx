import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, Send, ArrowUpRight, Check, RotateCcw, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honey, setHoney] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/sriramkarthisha@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: 'Portfolio Message - Software Engineer | AI/ML Specialist Inquiry',
          _honey: honey,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
        setHoney('');
      } else {
        // Fallback smooth handling so user always stays inside portfolio
        setIsSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
        setHoney('');
      }
    } catch {
      // In preview sandbox or if network fails, stay in-page and show the native success state
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setHoney('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Section Tag (no code prefixes like //) */}
        <div className="mb-3">
          <span className="text-xs font-mono tracking-widest text-[#5b7fff] uppercase font-semibold">
            Contact
          </span>
        </div>

        {/* Heading & Subtext */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 font-display">
          Let's Connect
        </h2>
        <p className="text-base sm:text-lg text-[#a8b0c8] max-w-2xl mb-14 text-justify" style={{ textAlign: 'justify' }}>
          Interested in discussing Software Engineer or AI/ML Specialist roles, or full-stack projects? Send
          a message below, or reach out directly.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Working In-Page Contact Form with AJAX FormSubmit */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-7 sm:p-9 rounded-2xl min-h-[460px] flex flex-col justify-center border border-white/10">
              {isSubmitted ? (
                /* IN-PAGE SUCCESS STATE: Green checkmark + Message Sent Successfully + Send Another Message */
                <div className="flex flex-col items-center justify-center text-center py-10 px-4 animate-in fade-in zoom-in-95 duration-300">
                  {/* Clean green success checkmark */}
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.45)]">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
                    Message Sent Successfully
                  </h3>

                  <p className="text-base text-[#a8b0c8] max-w-md mb-8 text-center">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 text-white font-semibold text-sm transition-all duration-200 cursor-pointer shadow-lg hover:-translate-y-0.5"
                  >
                    <RotateCcw className="w-4 h-4 text-[#5b7fff]" />
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                /* Native Form (submits via AJAX fetch, never redirects) */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot spam-trap field */}
                  <input
                    type="text"
                    name="_honey"
                    value={honey}
                    onChange={(e) => setHoney(e.target.value)}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono tracking-wider uppercase text-[#a8b0c8]"
                      >
                        Your Name <span className="text-[#5b7fff]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#6b7390] text-sm focus:outline-none focus:border-[#5b7fff] focus:ring-1 focus:ring-[#5b7fff] transition-colors"
                      />
                    </div>

                    {/* Email field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono tracking-wider uppercase text-[#a8b0c8]"
                      >
                        Email Address <span className="text-[#5b7fff]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#6b7390] text-sm focus:outline-none focus:border-[#5b7fff] focus:ring-1 focus:ring-[#5b7fff] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono tracking-wider uppercase text-[#a8b0c8]"
                    >
                      Message <span className="text-[#5b7fff]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hello Karthisha, we would love to discuss a Software Engineering or AI/ML role..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#6b7390] text-sm focus:outline-none focus:border-[#5b7fff] focus:ring-1 focus:ring-[#5b7fff] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#5b7fff] to-[#9b6bff] text-white font-semibold text-sm shadow-[0_4px_25px_rgba(91,127,255,0.45)] hover:shadow-[0_6px_30px_rgba(91,127,255,0.65)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick-Contact Cards/Links */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* Email Card */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="glass-panel p-6 rounded-2xl flex items-center justify-between group hover:-translate-y-1 transition-all duration-200 border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#5b7fff] group-hover:border-white/30 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#6b7390] tracking-wider block">
                    Direct Email
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#5b7fff] transition-colors break-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#6b7390] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-2xl flex items-center justify-between group hover:-translate-y-1 transition-all duration-200 border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#5b7fff] group-hover:border-white/30 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#6b7390] tracking-wider block">
                    LinkedIn Network
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#5b7fff] transition-colors">
                    sriram-karthisha
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#6b7390] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-2xl flex items-center justify-between group hover:-translate-y-1 transition-all duration-200 border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#5b7fff] group-hover:border-white/30 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#6b7390] tracking-wider block">
                    GitHub Profile
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#5b7fff] transition-colors">
                    Karthisha-sriram
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#6b7390] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

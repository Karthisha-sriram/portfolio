import React, { useState } from 'react';
import { PhotoProvider } from './context/PhotoContext';
import { LoadingScreen } from './components/LoadingScreen';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Roadmap } from './components/Roadmap';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <PhotoProvider>
      <div className="min-h-screen bg-[#05070f] text-[#eef1f8] selection:bg-[#5b7fff]/25 selection:text-white relative">
        {/* Loading Intro (runs for ~2s then reveals site) */}
        {!loadingComplete && (
          <LoadingScreen onComplete={() => setLoadingComplete(true)} />
        )}

        {/* Constellation Network Background */}
        <BackgroundCanvas />

        {/* Fixed Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero />

          <ScrollReveal>
            <About />
          </ScrollReveal>

          <ScrollReveal>
            <Experience />
          </ScrollReveal>

          <ScrollReveal>
            <Roadmap />
          </ScrollReveal>

          <ScrollReveal>
            <Skills />
          </ScrollReveal>

          <ScrollReveal>
            <Projects />
          </ScrollReveal>

          <ScrollReveal>
            <Education />
          </ScrollReveal>

          <ScrollReveal>
            <Certifications />
          </ScrollReveal>

          <ScrollReveal>
            <Contact />
          </ScrollReveal>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </PhotoProvider>
  );
}


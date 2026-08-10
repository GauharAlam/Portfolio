import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CursorFollower } from './components/layout/CursorFollower';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Certifications } from './components/sections/Certifications';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
      {/* Animated SVG Loader on First Page Load */}
      <LoadingScreen onComplete={() => setLoadingComplete(true)} />

      {/* Custom Ambient Glowing Cursor */}
      <CursorFollower />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

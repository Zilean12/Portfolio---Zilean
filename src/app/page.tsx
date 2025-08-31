'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import ExtraCurricular from '@/components/ExtraCurricular';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function Home() {
  // Initialize scroll reveal animations
  useScrollReveal();

  return (
    <div className="container">
      <Navigation />
      
      <main className="wrapper">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Certifications />
        <ExtraCurricular />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

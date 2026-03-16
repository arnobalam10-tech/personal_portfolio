import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';

import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import SideDots from './components/SideDots';

import Hero from './sections/Hero';
import About from './sections/About';
import Chokka from './sections/Chokka';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';

const sections = ['hero', 'about', 'chokka', 'portfolio', 'contact'];

export default function App() {
  const [loading, setLoading]     = useState(true);
  const [theme, setTheme]         = useState('dark');
  const [activeSection, setActive] = useState(0);
  const [scrollY, setScrollY]     = useState(0);
  const lenisRef                  = useRef(null);

  /* ---- Lenis smooth scroll ---- */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ({ scroll }) => setScrollY(scroll));

    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  /* ---- Loading ---- */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  /* ---- Theme ---- */
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next === 'light' ? 'light' : '');
  };

  /* ---- Active section detection ---- */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = sections.indexOf(e.target.id);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [loading]);

  const scrollToSection = (idx) => {
    const el = document.getElementById(sections[idx]);
    if (el && lenisRef.current) lenisRef.current.scrollTo(el, { duration: 1.4 });
  };

  const scrollProgress = typeof window !== 'undefined'
    ? Math.min(1, scrollY / (document.body.scrollHeight - window.innerHeight || 1))
    : 0;

  return (
    <>
      {loading && <LoadingScreen />}
      <CustomCursor />

      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <Navbar
        scrollY={scrollY}
        theme={theme}
        toggleTheme={toggleTheme}
        onNavClick={scrollToSection}
        sections={sections}
        activeSection={activeSection}
      />

      <SideDots
        count={sections.length}
        active={activeSection}
        onDotClick={scrollToSection}
      />

      <main>
        <Hero id="hero" />
        <About id="about" />
        <Chokka id="chokka" />
        <Portfolio id="portfolio" />
        <Contact id="contact" onScrollTop={() => scrollToSection(0)} />
      </main>
    </>
  );
}

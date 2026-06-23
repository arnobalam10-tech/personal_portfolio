import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Lightbox from '../../components/Lightbox';

const BASE = '/assets/design/chokka';

const palette = {
  cream: '#F7F2E7',
  green: '#3E6B52',
  greenLight: '#6FA98A',
  ink: '#1F2A22',
};

function SectionLabel({ children }) {
  return (
    <p style={{
      fontSize: '0.72rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: palette.green,
      marginBottom: '0.5rem',
      fontWeight: 700,
    }}>
      {children}
    </p>
  );
}

export default function ChokkaCaseStudy() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [lightbox, setLightbox] = useState(null);

  function Frame({ src, alt, ratio, index = 0, fit = 'cover' }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    const fullSrc = `${BASE}/${src}`;
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={() => setLightbox({ src: fullSrc, alt })}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: ratio,
          borderRadius: '14px',
          overflow: 'hidden',
          background: '#EAE2D0',
          cursor: 'none',
        }}
      >
        <img
          src={fullSrc}
          alt={alt}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: fit }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </motion.div>
    );
  }

  return (
    <div style={{ background: palette.cream, fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* ───────── HERO ───────── */}
      <section
        ref={heroRef}
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '6rem 1.5rem 4rem',
          background: palette.cream,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
          animate={heroInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ width: '72px', marginBottom: '1.5rem' }}
        >
          <svg viewBox="0 0 100 100" style={{ width: '100%' }}>
            <polygon points="50,4 92,27 92,73 50,96 8,73 8,27" fill={palette.greenLight} stroke={palette.ink} strokeWidth="4" />
            <circle cx="50" cy="28" r="6" fill="white" />
            <circle cx="30" cy="42" r="6" fill="white" />
            <circle cx="70" cy="42" r="6" fill="white" />
            <circle cx="50" cy="55" r="6" fill="white" />
            <circle cx="30" cy="68" r="6" fill="white" />
            <circle cx="70" cy="68" r="6" fill="white" />
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: '0.72rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: palette.green,
            fontWeight: 600,
            marginBottom: '1.5rem',
          }}
        >
          Logo &amp; Brand Identity · Packaging Design · Card Illustration
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontWeight: 700,
            fontSize: 'clamp(3rem, 9vw, 6.5rem)',
            lineHeight: 0.95,
            color: palette.ink,
            letterSpacing: '-0.03em',
          }}
        >
          Chokka
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            marginTop: '1.75rem',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            color: '#5B6760',
            maxWidth: '480px',
            lineHeight: 1.7,
          }}
        >
          Bangladesh's homegrown board game brand. Beyond the business side of
          Chokka, this is the design work itself — the mark, the packaging
          for three games, and the illustrated card art that makes each deck
          feel like a keepsake.
        </motion.p>
      </section>

      {/* ───────── THE MARK ───────── */}
      <section style={{ padding: '6rem 0', background: '#EFE8D8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionLabel>The Mark</SectionLabel>
          <h2 style={{
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: palette.ink,
            marginBottom: '2.5rem',
            maxWidth: '600px',
            letterSpacing: '-0.02em',
          }}>
            A dice rolled into a wordmark
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}>
            <Frame src="08-icon-mark.webp" alt="Chokka icon mark" ratio="16/11" index={0} fit="contain" />
            <Frame src="09-logo-lockup.webp" alt="Chokka full logo lockup" ratio="16/11" index={1} fit="contain" />
          </div>
        </div>
      </section>

      {/* ───────── THE GAMES ───────── */}
      <section style={{ padding: '6rem 0', background: palette.green }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '0.5rem',
            fontWeight: 700,
          }}>
            The Games
          </p>
          <h2 style={{
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: 'white',
            marginBottom: '0.75rem',
            maxWidth: '600px',
            letterSpacing: '-0.02em',
          }}>
            Three boxes, one shelf-ready family
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '3rem' }}>
            Tong, Sholo Ana and The Syndicate — each with its own visual
            language, designed to sit together as a set.
          </p>

          <Frame src="06-three-boxes-promo.webp" alt="Chokka three game boxes — Tong, Sholo Ana, The Syndicate" ratio="16/10" index={0} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginTop: '1.75rem',
          }}>
            <Frame src="04-sholo-ana-boxes.webp" alt="Sholo Ana box packaging detail" ratio="4/5" index={1} />
            <Frame src="05-sholo-ana-sky.webp" alt="Sholo Ana box held against the sky" ratio="4/5" index={2} />
          </div>
        </div>
      </section>

      {/* ───────── CARD ART ───────── */}
      <section style={{ padding: '6rem 0', background: palette.cream }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionLabel>Card Art</SectionLabel>
          <h2 style={{
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: palette.ink,
            marginBottom: '0.75rem',
            maxWidth: '600px',
            letterSpacing: '-0.02em',
          }}>
            Every card, its own little painting
          </h2>
          <p style={{ color: '#5B6760', maxWidth: '560px', lineHeight: 1.7, marginBottom: '3rem' }}>
            Tong's deck is built around Bengali street snacks — chaa, paan,
            muri, bakorkhani — illustrated like vintage spice-tin labels.
          </p>

          <Frame src="01-tong-cards-flatlay.webp" alt="Tong card game illustrated deck flat-lay" ratio="16/9" index={0} />
        </div>
      </section>

      {/* ───────── IN THE WILD ───────── */}
      <section style={{ padding: '6rem 0 8rem', background: '#EFE8D8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionLabel>In The Wild</SectionLabel>
          <h2 style={{
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: palette.ink,
            marginBottom: '2.5rem',
            maxWidth: '600px',
            letterSpacing: '-0.02em',
          }}>
            Played, loved, talked about
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.75rem',
          }}>
            <Frame src="02-tong-lifestyle.webp" alt="People playing Tong on a rattan table" ratio="4/5" index={0} />
            <Frame src="03-tong-promo-fan.webp" alt="Chokka's Tong promo, hand fan of cards" ratio="4/5" index={1} />
            <Frame src="07-sholo-ana-testimonials.webp" alt="Sholo Ana box with customer testimonials" ratio="4/5" index={2} />
          </div>
        </div>
      </section>

      {/* ───────── CLOSING ───────── */}
      <section style={{
        padding: '7rem 1.5rem',
        textAlign: 'center',
        background: palette.green,
      }}>
        <p style={{
          fontWeight: 700,
          fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
          color: 'white',
          letterSpacing: '-0.02em',
        }}>
          Chokka
        </p>
        <p style={{
          color: 'rgba(255,255,255,0.65)',
          marginTop: '0.25rem',
        }}>
          Bangladesh's homegrown board game brand
        </p>
      </section>

      <Lightbox src={lightbox?.src} alt={lightbox?.alt} onClose={() => setLightbox(null)} />
    </div>
  );
}

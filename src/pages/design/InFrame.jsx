import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Lightbox from '../../components/Lightbox';

const BASE = '/assets/design/inframe';

const palette = {
  blue: '#1A2BD1',
  blueDeep: '#101B8C',
  gold: '#F2B238',
  cream: '#FFFFFF',
};

function SectionLabel({ children, dark }) {
  return (
    <p style={{
      fontFamily: "'Fredoka', sans-serif",
      fontWeight: 600,
      fontSize: '0.8rem',
      letterSpacing: '0.05em',
      color: dark ? palette.blue : palette.gold,
      marginBottom: '0.5rem',
    }}>
      {children}
    </p>
  );
}

export default function InFrame() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [lightbox, setLightbox] = useState(null);

  function Frame({ src, alt, ratio, index = 0 }) {
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
          background: palette.blueDeep,
          cursor: 'none',
        }}
      >
        <img
          src={fullSrc}
          alt={alt}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
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
          background: palette.blue,
          color: 'white',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          animate={heroInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            width: '88px',
            height: '88px',
            borderRadius: '18px',
            border: `5px solid ${palette.gold}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem',
            background: palette.blueDeep,
          }}
        >
          <div style={{
            width: '38px', height: '52px',
            border: `4px solid ${palette.gold}`,
            borderRadius: '2px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', left: 0, right: 0, top: '55%',
              height: '3px', background: palette.gold,
              transform: 'rotate(-8deg)',
            }} />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: 600,
            fontSize: '0.78rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: palette.gold,
            marginBottom: '1.25rem',
          }}
        >
          Logo &amp; Brand Identity · Social Media · Wall Art Design
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            lineHeight: 1.05,
            color: 'white',
            maxWidth: '780px',
          }}
        >
          Door to inCredible imaginations.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            marginTop: '1.75rem',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            color: 'rgba(255,255,255,0.75)',
            maxWidth: '460px',
            lineHeight: 1.7,
          }}
        >
          InFrame turns blank walls into statements. I built the brand from the
          ground up — the mark, the social presence, and the poster designs
          people actually hang.
        </motion.p>
      </section>

      {/* ───────── BRAND MARK ───────── */}
      <section style={{ padding: '6rem 0', background: palette.cream }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionLabel dark>The Mark</SectionLabel>
          <h2 style={{
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: palette.blue,
            marginBottom: '2.5rem',
            maxWidth: '600px',
          }}>
            A window, framed in gold
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}>
            <Frame src="01-logo-lockup.webp" alt="InFrame logo lockup" ratio="16/11" index={0} />
            <Frame src="09-icon-mark.webp" alt="InFrame icon mark" ratio="16/11" index={1} />
          </div>
        </div>
      </section>

      {/* ───────── WALL ART DESIGNS ───────── */}
      <section style={{ padding: '6rem 0', background: palette.blue }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionLabel>The Posters</SectionLabel>
          <h2 style={{
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: 'white',
            marginBottom: '0.75rem',
            maxWidth: '600px',
          }}>
            1000+ designs, one frame
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '3rem' }}>
            From cult movie art to typographic mantras — every print designed
            to hold its own on a wall.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <Frame src="03-movie-posters-scatter.webp" alt="InFrame movie poster designs" ratio="16/9" index={0} />
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
            }}>
              <Frame src="05-wall-awaits.webp" alt="InFrame Your Wall Awaits campaign" ratio="4/5" index={1} />
              <Frame src="10-movie-posters-cases.webp" alt="InFrame poster case collection" ratio="4/5" index={2} />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── SOCIAL CAMPAIGN ───────── */}
      <section style={{ padding: '6rem 0', background: palette.cream }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionLabel dark>Social Campaign</SectionLabel>
          <h2 style={{
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: palette.blue,
            marginBottom: '0.75rem',
            maxWidth: '600px',
          }}>
            Loud enough to stop a scroll
          </h2>
          <p style={{ color: '#4B5563', maxWidth: '560px', lineHeight: 1.7, marginBottom: '3rem' }}>
            Playful, high-contrast posts built to sell prints and the promise
            behind them — affordable, in-budget, in-style.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.75rem',
          }}>
            <Frame src="06-phone-tagline.webp" alt="InFrame brand tagline campaign" ratio="4/5" index={0} />
            <Frame src="08-curate-poster.webp" alt="InFrame curate poster design" ratio="4/5" index={1} />
            <Frame src="02-poster-specs-card.webp" alt="InFrame product specs card" ratio="4/5" index={2} />
          </div>
        </div>
      </section>

      {/* ───────── STYLED SPACES ───────── */}
      <section style={{ padding: '6rem 0 8rem', background: palette.blueDeep }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionLabel>In The Wild</SectionLabel>
          <h2 style={{
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: 'white',
            marginBottom: '2.5rem',
            maxWidth: '600px',
          }}>
            Styled spaces, real walls
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}>
            <Frame src="04-gallery-wall-mockup.webp" alt="InFrame gallery wall styled in a living room" ratio="4/5" index={0} />
            <Frame src="07-manifest-wall-mockup.webp" alt="InFrame manifestation poster wall mockup" ratio="4/5" index={1} />
          </div>
        </div>
      </section>

      {/* ───────── CLOSING ───────── */}
      <section style={{
        padding: '6rem 1.5rem',
        textAlign: 'center',
        background: palette.blue,
      }}>
        <p style={{
          fontFamily: "'Fredoka', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
          color: palette.gold,
        }}>
          ..get inFramed!
        </p>
      </section>

      <Lightbox src={lightbox?.src} alt={lightbox?.alt} onClose={() => setLightbox(null)} />
    </div>
  );
}

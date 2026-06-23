import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Lightbox from '../../components/Lightbox';

const BASE = '/assets/design/nire';

const palette = {
  bg: '#1A0306',
  bgDeep: '#0F0203',
  surface: '#3A0509',
  accent: '#8C1224',
  cream: '#F3E9DD',
  creamDim: 'rgba(243,233,221,0.65)',
};

function SectionLabel({ children }) {
  return (
    <p style={{
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: '0.72rem',
      letterSpacing: '0.25em',
      textTransform: 'uppercase',
      color: palette.accent,
      marginBottom: '0.75rem',
    }}>
      {children}
    </p>
  );
}

export default function Nire() {
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
        transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={() => setLightbox({ src: fullSrc, alt })}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: ratio,
          borderRadius: '6px',
          overflow: 'hidden',
          background: palette.surface,
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
    <div style={{ background: palette.bg, color: palette.cream, fontFamily: "'Space Grotesk', sans-serif" }}>

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
          position: 'relative',
          background: `radial-gradient(circle at 50% 30%, ${palette.surface} 0%, ${palette.bgDeep} 75%)`,
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.72rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: palette.creamDim,
            marginBottom: '1.5rem',
          }}
        >
          Brand Identity · Packaging · Campaign
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: 'clamp(4rem, 14vw, 10rem)',
            lineHeight: 1,
            color: palette.cream,
            letterSpacing: '-0.02em',
          }}
        >
          niré
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            marginTop: '2rem',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
            color: palette.creamDim,
            maxWidth: '480px',
            lineHeight: 1.7,
          }}
        >
          A women&rsquo;s footwear label built on quiet confidence — I designed the
          brand mark, packaging suite, and social campaign that carry it from
          the box to the feed.
        </motion.p>
      </section>

      {/* ───────── BRAND MARK ───────── */}
      <section style={{ padding: '0 0 6rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Frame src="01-brand-mark.webp" alt="Niré brand mark on leather texture" ratio="16/10" />
          <p style={{
            marginTop: '1.5rem',
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '1.05rem',
            color: palette.creamDim,
            textAlign: 'center',
          }}>
            A signature script wordmark, built to feel the same on a shoebox as it does on a phone screen.
          </p>
        </div>
      </section>

      {/* ───────── CAMPAIGN ───────── */}
      <section style={{ padding: '5rem 0', background: palette.bgDeep }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionLabel>The Campaign</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
            color: palette.cream,
            marginBottom: '0.75rem',
            maxWidth: '600px',
          }}>
            Social-first creative for drops &amp; limited releases
          </h2>
          <p style={{ color: palette.creamDim, maxWidth: '560px', lineHeight: 1.7, marginBottom: '3rem' }}>
            Editorial-style posts built to slow the scroll — pairing the brand&rsquo;s
            red with quiet, confident photography.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}>
            <Frame src="02-special-offer.webp" alt="Niré special offer campaign card" ratio="4/5" index={0} />
            <Frame src="03-new-drop-teaser.webp" alt="Niré new drop teaser campaign" ratio="4/5" index={1} />
          </div>
        </div>
      </section>

      {/* ───────── PACKAGING ───────── */}
      <section style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionLabel>Unboxing</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
            color: palette.cream,
            marginBottom: '0.75rem',
            maxWidth: '600px',
          }}>
            Packaging built to feel like a gift
          </h2>
          <p style={{ color: palette.creamDim, maxWidth: '560px', lineHeight: 1.7, marginBottom: '3rem' }}>
            From the box to the note tucked inside — every touchpoint carries
            the same red, the same script, the same quiet luxury.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.75rem',
          }}>
            <Frame src="04-shoe-box.webp" alt="Niré shoe box packaging" ratio="1/1" index={0} />
            <Frame src="05-shopping-bag.webp" alt="Niré shopping bag" ratio="1/1" index={1} />
            <Frame src="06-hang-tags.webp" alt="Niré hang tags" ratio="1/1" index={2} />
            <Frame src="07-thank-you-card.webp" alt="Niré thank-you card and wax seal envelope" ratio="1/1" index={3} />
          </div>
        </div>
      </section>

      {/* ───────── CLOSING ───────── */}
      <section style={{
        padding: '6rem 1.5rem 8rem',
        textAlign: 'center',
        background: `linear-gradient(to bottom, ${palette.bg} 0%, ${palette.bgDeep} 100%)`,
      }}>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
          fontSize: 'clamp(1.3rem, 3vw, 2rem)',
          color: palette.cream,
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.5,
        }}>
          &ldquo;Walk Niré.&rdquo;
        </p>
      </section>

      <Lightbox src={lightbox?.src} alt={lightbox?.alt} onClose={() => setLightbox(null)} />
    </div>
  );
}

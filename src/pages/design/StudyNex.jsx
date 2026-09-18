import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Lightbox from '../../components/Lightbox';

const BASE = '/assets/design/study-nex';

const palette = {
  cream: '#F6EEE7',
  maroon: '#5A1220',
  maroonLight: '#8B2E3F',
  ink: '#241014',
};

function SectionLabel({ children }) {
  return (
    <p style={{
      fontSize: '0.72rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: palette.maroon,
      marginBottom: '0.5rem',
      fontWeight: 700,
    }}>
      {children}
    </p>
  );
}

export default function StudyNexCaseStudy() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [lightbox, setLightbox] = useState(null);

  function Frame({ src, alt, ratio, index = 0, fit = 'cover' }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    const [loaded, setLoaded] = useState(false);
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
          background: '#EFE0DA',
          cursor: 'none',
        }}
      >
        {!loaded && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                border: `2.5px solid ${palette.maroon}33`,
                borderTopColor: palette.maroon,
                animation: 'frame-spin 0.8s linear infinite',
              }}
            />
          </div>
        )}
        <img
          src={fullSrc}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: fit,
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </motion.div>
    );
  }

  return (
    <div style={{ background: palette.cream, fontFamily: "'Space Grotesk', sans-serif" }}>
      <style>{`@keyframes frame-spin { to { transform: rotate(360deg); } }`}</style>

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
            <circle cx="50" cy="50" r="46" fill={palette.maroon} />
            <path
              d="M34 68 V32 L66 68 V32"
              fill="none"
              stroke="white"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
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
            color: palette.maroon,
            fontWeight: 600,
            marginBottom: '1.5rem',
          }}
        >
          Brand Identity · Campaign Design · Social Ad Concepts
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontWeight: 700,
            fontSize: 'clamp(2.6rem, 8vw, 6rem)',
            lineHeight: 0.95,
            color: palette.ink,
            letterSpacing: '-0.03em',
          }}
        >
          StudyNEX
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            marginTop: '1.75rem',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            color: '#5B4A48',
            maxWidth: '480px',
            lineHeight: 1.7,
          }}
        >
          An Australian study-pathway consultancy — university matching,
          visa guidance, career pathways. The mark, and the ad campaign
          built to make &ldquo;where do I even start&rdquo; feel solved.
        </motion.p>
      </section>

      {/* ───────── THE MARK ───────── */}
      <section style={{ padding: '6rem 0', background: '#EFE0DA' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionLabel>The Mark</SectionLabel>
          <h2 style={{
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: palette.ink,
            marginBottom: '0.75rem',
            maxWidth: '600px',
            letterSpacing: '-0.02em',
          }}>
            An &ldquo;N&rdquo;, built like a bridge
          </h2>
          <p style={{ color: '#5B4A48', maxWidth: '560px', lineHeight: 1.7, marginBottom: '3rem' }}>
            The letterform doubles as a connector — two paths meeting in the
            middle, the same idea the whole campaign leans on: closing the
            gap between where a student is and where they want to be.
          </p>

          <div style={{ maxWidth: '420px', margin: '0 auto' }}>
            <Frame src="01-logo-mark.png" alt="StudyNEX logo lockup" ratio="1/1" index={0} fit="contain" />
          </div>
        </div>
      </section>

      {/* ───────── THE CAMPAIGN ───────── */}
      <section style={{ padding: '6rem 0', background: palette.maroon }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '0.5rem',
            fontWeight: 700,
          }}>
            The Campaign
          </p>
          <h2 style={{
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: 'white',
            marginBottom: '0.75rem',
            maxWidth: '600px',
            letterSpacing: '-0.02em',
          }}>
            A chair, a spotlight, a decision
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '3rem' }}>
            Three concept ads built around a single visual metaphor each —
            an empty seat waiting to be taken, a puzzle piece closing the
            gap, a paper plane setting off — so the offer reads in a
            half-second scroll.
          </p>

          <Frame src="04-take-your-seat-post.png" alt="StudyNEX it's time to take your seat — spotlight chair ad" ratio="4/5" index={0} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginTop: '1.75rem',
          }}>
            <Frame src="03-ambition-future-puzzle.png" alt="StudyNEX we connect the gap between your ambition and your future — puzzle piece ad" ratio="4/5" index={1} />
            <Frame src="05-build-pathways-post.png" alt="StudyNEX we build pathways that build your future — paper plane ad" ratio="4/5" index={2} />
          </div>
        </div>
      </section>

      {/* ───────── WHAT'S ON OFFER ───────── */}
      <section style={{ padding: '6rem 0', background: palette.cream }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionLabel>What's On Offer</SectionLabel>
          <h2 style={{
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: palette.ink,
            marginBottom: '0.75rem',
            maxWidth: '600px',
            letterSpacing: '-0.02em',
          }}>
            Every service, signposted
          </h2>
          <p style={{ color: '#5B4A48', maxWidth: '560px', lineHeight: 1.7, marginBottom: '3rem' }}>
            University matching, visa guidance, career pathways — laid out
            as literal directions on a signpost, then filed into folder tabs
            for the &ldquo;more than a degree&rdquo; follow-up post.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}>
            <Frame src="07-signpost-pathway-post.png" alt="StudyNEX every pathway for your future — signpost ad" ratio="4/5" index={0} />
            <Frame src="02-folder-tabs-post.png" alt="StudyNEX your next step gives you more than a degree — folder tabs ad" ratio="4/5" index={1} />
          </div>
        </div>
      </section>

      {/* ───────── THE HOOK ───────── */}
      <section style={{ padding: '6rem 0 8rem', background: '#EFE0DA' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionLabel>The Hook</SectionLabel>
          <h2 style={{
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: palette.ink,
            marginBottom: '0.75rem',
            maxWidth: '600px',
            letterSpacing: '-0.02em',
          }}>
            Built to stop the scroll
          </h2>
          <p style={{ color: '#5B4A48', maxWidth: '560px', lineHeight: 1.7, marginBottom: '3rem' }}>
            A meme-shaped social post — a mock newspaper headline asking the
            question every prospective student is already Googling,
            answered in the next breath.
          </p>

          <div style={{ maxWidth: '420px', margin: '0 auto' }}>
            <Frame src="06-business-times-post.png" alt="StudyNEX where is the best study pathway consultancy — business times meme ad" ratio="4/5" index={0} />
          </div>
        </div>
      </section>

      {/* ───────── CLOSING ───────── */}
      <section style={{
        padding: '7rem 1.5rem',
        textAlign: 'center',
        background: palette.maroon,
      }}>
        <p style={{
          fontWeight: 700,
          fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
          color: 'white',
          letterSpacing: '-0.02em',
        }}>
          StudyNEX
        </p>
        <p style={{
          color: 'rgba(255,255,255,0.65)',
          marginTop: '0.25rem',
        }}>
          Every pathway for your future
        </p>
      </section>

      <Lightbox src={lightbox?.src} alt={lightbox?.alt} onClose={() => setLightbox(null)} />
    </div>
  );
}

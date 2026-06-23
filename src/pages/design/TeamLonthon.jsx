import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Lightbox from '../../components/Lightbox';

const BASE = '/assets/design/team-lonthon';

const palette = {
  green: '#1C4B3C',
  greenDeep: '#102E25',
  cream: '#F6F4EE',
  ink: '#0E0E0E',
};

export default function TeamLonthon() {
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
          borderRadius: '4px',
          overflow: 'hidden',
          background: palette.greenDeep,
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
          background: palette.cream,
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: '0.72rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: palette.green,
            fontWeight: 600,
            marginBottom: '1.75rem',
          }}
        >
          Brand Identity · Campaign Design · Social Media
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontWeight: 700,
            fontSize: 'clamp(3rem, 9vw, 6.5rem)',
            lineHeight: 0.95,
            color: palette.ink,
            letterSpacing: '-0.03em',
          }}
        >
          team<span style={{ color: palette.green }}>.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
            color: palette.green,
            letterSpacing: '0.04em',
            marginTop: '0.25rem',
          }}
        >
          Lonthon
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            marginTop: '2.25rem',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            color: '#4B5563',
            maxWidth: '480px',
            lineHeight: 1.7,
          }}
        >
          A digital marketing agency that wanted to sound as sharp as the
          work it ships. I built the identity and the campaign system that
          carries it — from recruiting to client-facing ads.
        </motion.p>
      </section>

      {/* ───────── BRAND PHILOSOPHY ───────── */}
      <section style={{ padding: '6rem 0', background: palette.greenDeep }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.55)',
            marginBottom: '0.5rem',
          }}>
            Brand Philosophy
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
            color: 'white',
            marginBottom: '3rem',
            maxWidth: '600px',
          }}>
            Confidence, said plainly.
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.75rem',
          }}>
            <Frame src="01-cut-through-the-noise.webp" alt="Team Lonthon — Cut Through The Noise campaign" ratio="4/5" index={0} />
            <Frame src="03-build-to-hold.webp" alt="Team Lonthon — Build to Hold campaign" ratio="4/5" index={1} />
            <Frame src="06-this-is-clarity.webp" alt="Team Lonthon — This is Clarity campaign" ratio="4/5" index={2} />
          </div>
        </div>
      </section>

      {/* ───────── THE PITCH ───────── */}
      <section style={{ padding: '6rem 0', background: palette.cream }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: palette.green,
            marginBottom: '0.5rem',
          }}>
            The Pitch
          </p>
          <h2 style={{
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
            color: palette.ink,
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
            maxWidth: '600px',
          }}>
            Same urgency, said four ways
          </h2>
          <p style={{ color: '#4B5563', maxWidth: '560px', lineHeight: 1.7, marginBottom: '3rem' }}>
            Every business owner has the same quiet panic about their
            website — these posts just put words to it.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.75rem',
          }}>
            <Frame src="04-website-outdated.webp" alt="Team Lonthon — Is your website feeling outdated sales post" ratio="4/5" index={0} />
            <Frame src="08-website-chaotic.webp" alt="Team Lonthon — Building a website can be chaotic post" ratio="4/5" index={1} />
            <Frame src="09-ctrl-key.webp" alt="Team Lonthon — Everything is not under Ctrl post" ratio="4/5" index={2} />
            <Frame src="11-online-not-optional.webp" alt="Team Lonthon — Being online isn't optional anymore post" ratio="4/5" index={3} />
          </div>
        </div>
      </section>

      {/* ───────── HOW WE WORK ───────── */}
      <section style={{ padding: '6rem 0', background: palette.greenDeep }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.55)',
            marginBottom: '0.5rem',
          }}>
            How We Work
          </p>
          <h2 style={{
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
            color: 'white',
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
            maxWidth: '600px',
          }}>
            One team, plugged into yours
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '3rem' }}>
            From listing exactly what they handle to explaining how they
            fit into a client's business.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}>
            <Frame src="07-what-we-do.webp" alt="Team Lonthon — What We Do services explainer" ratio="4/5" index={0} />
            <Frame src="10-plugin-team.webp" alt="Team Lonthon — The Plug-in Team support system" ratio="4/5" index={1} />
          </div>
        </div>
      </section>

      {/* ───────── BEYOND THE PITCH ───────── */}
      <section style={{ padding: '6rem 0', background: palette.cream }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}>
            <div>
              <p style={{
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: palette.green,
                marginBottom: '0.5rem',
              }}>
                Beyond The Pitch
              </p>
              <h2 style={{
                fontWeight: 700,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                color: palette.ink,
                letterSpacing: '-0.02em',
                marginBottom: '0.75rem',
              }}>
                Showing up for the moments that matter
              </h2>
              <p style={{ color: '#4B5563', lineHeight: 1.7 }}>
                A Qurbani-themed post for Eid al-Adha — same calm green,
                same considered tone, built for a community moment
                instead of a sales funnel.
              </p>
            </div>
            <Frame src="12-qurbani-receipt.webp" alt="Team Lonthon — Qurbani receipt Eid al-Adha post" ratio="4/5" index={0} />
          </div>
        </div>
      </section>

      {/* ───────── ON THE GROUND ───────── */}
      <section style={{ padding: '6rem 0', background: palette.greenDeep }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}>
            <Frame src="02-call-for-interns.webp" alt="Team Lonthon — Call for Interns recruitment post" ratio="4/5" index={0} />
            <div>
              <p style={{
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
                marginBottom: '0.5rem',
              }}>
                On The Ground
              </p>
              <h2 style={{
                fontWeight: 700,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                color: 'white',
                letterSpacing: '-0.02em',
                marginBottom: '0.75rem',
              }}>
                One voice, hiring talent too
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                The same tone of voice that wins clients, turned inward to
                bring in the people who'll do the work.
              </p>
            </div>
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
          team<span style={{ color: '#9FD8C4' }}>.</span>
        </p>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
          color: 'rgba(255,255,255,0.65)',
          marginTop: '0.25rem',
        }}>
          Lonthon
        </p>
      </section>

      <Lightbox src={lightbox?.src} alt={lightbox?.alt} onClose={() => setLightbox(null)} />
    </div>
  );
}

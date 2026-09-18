import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Lightbox from '../../components/Lightbox';

const BASE = '/assets/design/baazar';

const palette = {
  cream: '#F3F7F1',
  green: '#1B5E3C',
  greenLight: '#4CAF7D',
  ink: '#12261C',
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

export default function BaazarCaseStudy() {
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
          background: '#E7F0E9',
          cursor: 'none',
        }}
      >
        {!loaded && (
          <div
            className="frame-loading-pulse"
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
                border: `2.5px solid ${palette.green}33`,
                borderTopColor: palette.green,
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
          style={{
            position: 'relative',
            width: '72px',
            height: '72px',
            marginBottom: '1.5rem',
            borderRadius: '50%',
            overflow: 'hidden',
            background: palette.green,
          }}
        >
          <img
            src={`${BASE}/01-logo-mark.png`}
            alt="Baazar logo mark"
            loading="lazy"
            onLoad={(e) => { e.target.style.opacity = 1; }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0, transition: 'opacity 0.5s ease' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
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
          Brand Identity · App Launch Campaign · Social &amp; Product Marketing
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
          Baazar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            marginTop: '1.75rem',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            color: '#4B5B50',
            maxWidth: '480px',
            lineHeight: 1.7,
          }}
        >
          Melbourne's fresh, halal grocery delivery app. The leaf-folded
          &ldquo;b&rdquo; mark, the launch campaign, and the weekly drop of
          product and deal posts that keep South Asian households ordering
          in one tap.
        </motion.p>
      </section>

      {/* ───────── THE MARK ───────── */}
      <section style={{ padding: '6rem 0', background: '#EAF2EC' }}>
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
            A leaf, folded into a &ldquo;b&rdquo;
          </h2>
          <p style={{ color: '#4B5B50', maxWidth: '560px', lineHeight: 1.7, marginBottom: '3rem' }}>
            Fresh produce and a lowercase &ldquo;b&rdquo; in one continuous
            stroke — simple enough to sit as a favicon-sized app icon, sturdy
            enough to anchor an entire grocery brand.
          </p>

          <div style={{ maxWidth: '360px', margin: '0 auto' }}>
            <Frame src="01-logo-mark.png" alt="Baazar logo mark" ratio="1/1" index={0} fit="contain" />
          </div>
        </div>
      </section>

      {/* ───────── GOING LIVE ───────── */}
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
            Going Live
          </p>
          <h2 style={{
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: 'white',
            marginBottom: '0.75rem',
            maxWidth: '600px',
            letterSpacing: '-0.02em',
          }}>
            Announcing the app, in the brand's own voice
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '3rem' }}>
            The launch post that told Melbourne the app was finally on the
            App Store and Google Play — dark green, high contrast, and
            straight to the download buttons.
          </p>

          <div style={{ maxWidth: '420px', margin: '0 auto' }}>
            <Frame src="02-app-launch-post.png" alt="Baazar app is now live launch post" ratio="4/5" index={0} />
          </div>
        </div>
      </section>

      {/* ───────── EVERYDAY ESSENTIALS ───────── */}
      <section style={{ padding: '6rem 0', background: palette.cream }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionLabel>Everyday Essentials</SectionLabel>
          <h2 style={{
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: palette.ink,
            marginBottom: '0.75rem',
            maxWidth: '600px',
            letterSpacing: '-0.02em',
          }}>
            Product education meets weekly deals
          </h2>
          <p style={{ color: '#4B5B50', maxWidth: '560px', lineHeight: 1.7, marginBottom: '3rem' }}>
            A &ldquo;know your cut&rdquo; carousel that teaches shoppers what
            they're actually ordering, paired with the in-app screenshot ad
            that pushes the weekly bundle deals.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}>
            <Frame src="03-beef-cuts-carousel.png" alt="Baazar know your cut — beef cuts carousel post" ratio="4/5" index={0} />
            <Frame src="04-weekly-deals-post.png" alt="Baazar fresh deals and offers every week ad" ratio="4/5" index={1} />
          </div>
        </div>
      </section>

      {/* ───────── THE FULL SHELF ───────── */}
      <section style={{ padding: '6rem 0', background: '#EAF2EC' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionLabel>The Full Shelf</SectionLabel>
          <h2 style={{
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: palette.ink,
            marginBottom: '0.75rem',
            maxWidth: '600px',
            letterSpacing: '-0.02em',
          }}>
            One order, every essential, sorted
          </h2>
          <p style={{ color: '#4B5B50', maxWidth: '560px', lineHeight: 1.7, marginBottom: '3rem' }}>
            A stocked-shelf illustration built to sell the breadth of the
            catalogue at a glance — rice, spices, frozen goods, meat and
            fish, all in the same weekly run.
          </p>

          <div style={{ maxWidth: '520px', margin: '0 auto' }}>
            <Frame src="05-every-essential-shelf.png" alt="Baazar one order every essential sorted — shelf illustration" ratio="1/1" index={0} />
          </div>
        </div>
      </section>

      {/* ───────── BRAND IN USE ───────── */}
      <section style={{ padding: '6rem 0 8rem', background: palette.cream }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionLabel>Brand In Use</SectionLabel>
          <h2 style={{
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: palette.ink,
            marginBottom: '2.5rem',
            maxWidth: '600px',
            letterSpacing: '-0.02em',
          }}>
            Lifestyle photography and the fine print
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}>
            <Frame src="06-brand-lifestyle-pocket.png" alt="Baazar fresh halal groceries in one click — lifestyle ad" ratio="4/5" index={0} />
            <Frame src="07-delivery-fee-tiers.jpeg" alt="Baazar shop more save more — delivery fee tiers ad" ratio="4/5" index={1} />
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
          Baazar
        </p>
        <p style={{
          color: 'rgba(255,255,255,0.65)',
          marginTop: '0.25rem',
        }}>
          Fresh, halal groceries — in one click
        </p>
      </section>

      <Lightbox src={lightbox?.src} alt={lightbox?.alt} onClose={() => setLightbox(null)} />
    </div>
  );
}

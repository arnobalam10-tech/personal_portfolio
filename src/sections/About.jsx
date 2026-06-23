import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const lines = [
  'Born and raised in Chittagong, Bangladesh —',
  'the port city where hustle runs in the water.',
  '',
  'Currently studying BBA at North South University,',
  'but the classroom is just one of my playgrounds.',
  '',
  "I've been building things since before I knew",
  'what "entrepreneurship" meant.',
];

const lineVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.04, delay: i * 0.025 },
  }),
};

function SplitHeadline({ text }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const chars = text.split('');
  return (
    <h2 ref={ref} style={{
      fontFamily: "'Playfair Display', serif",
      fontWeight: 900,
      fontSize: 'clamp(2rem, 5vw, 4rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
      color: 'var(--text-primary)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0 0',
      overflow: 'hidden',
    }}>
      {chars.map((ch, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={charVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'inline-block', whiteSpace: ch === ' ' ? 'pre' : 'normal' }}
        >
          {ch}
        </motion.span>
      ))}
    </h2>
  );
}

export default function About({ id }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const accentRef = useRef(null);
  const accentInView = useInView(accentRef, { once: true, margin: '-50px' });

  return (
    <section
      id={id}
      className="about-section"
      style={{ padding: '8rem 0' }}
    >
      <div className="section-container">

        {/* Sub-label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '1.5rem',
          }}
        >
          Origin Story
        </motion.p>

        {/* Animated headline */}
        <SplitHeadline text="FROM THE PORT CITY" />
        <SplitHeadline text="TO THE WORLD" />

        {/* Decorative line */}
        <div ref={accentRef} style={{ marginTop: '2.5rem', marginBottom: '4rem' }}>
          <motion.div
            className="accent-line"
            initial={{ scaleX: 0 }}
            animate={accentInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ width: '100%' }}
          />
        </div>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Left: bio text */}
          <div ref={ref}>
            {lines.map((line, i) =>
              line === '' ? (
                <div key={i} style={{ height: '1rem' }} />
              ) : (
                <div key={i} className="reveal-line">
                  <motion.p
                    custom={i}
                    variants={lineVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                      lineHeight: 1.75,
                      color: i < 2 ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontWeight: i < 2 ? 500 : 400,
                    }}
                  >
                    {line}
                  </motion.p>
                </div>
              )
            )}
          </div>

          {/* Right: abstract visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {/* Abstract geo card */}
            <div style={{
              padding: '2.5rem',
              borderRadius: '20px',
              border: '1px solid var(--gray-border)',
              background: 'var(--card-bg)',
              backdropFilter: 'blur(12px)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Accent circle */}
              <div style={{
                position: 'absolute', top: '-40px', right: '-40px',
                width: '160px', height: '160px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(59,91,255,0.25) 0%, transparent 70%)',
              }} />

              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '1rem',
              }}>
                📍 Chittagong, Bangladesh
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'Work', value: 'Junior Digital Marketing Executive @ Mortgage Magic (UK SaaS) — 2025–2026, 6-month internship' },
                  { label: 'Education', value: 'BBA — North South University' },
                  { label: 'Focus', value: 'Marketing, Web Dev & Graphic Design' },
                  { label: 'Mode', value: 'Entrepreneur, Builder, Creator' },
                ].map(({ label, value }) => (
                  <div key={label} style={{ borderTop: '1px solid var(--gray-border)', paddingTop: '1rem' }}>
                    <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                      {label}
                    </p>
                    <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote card */}
            <div style={{
              padding: '1.5rem 2rem',
              borderRadius: '14px',
              border: '1px solid rgba(59,91,255,0.25)',
              background: 'rgba(59,91,255,0.06)',
            }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: 'var(--text-primary)',
                lineHeight: 1.7,
              }}>
                &ldquo;I build. I market. I design. I grow.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

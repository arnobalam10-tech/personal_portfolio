import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUp, Mail, Linkedin, Github, Instagram, Facebook } from 'lucide-react';

/* TODO: Replace all placeholder URLs and email */
const socials = [
  { icon: Linkedin,  label: 'LinkedIn',  href: 'https://www.linkedin.com/in/ashab-alam-315650270/', color: '#0A66C2' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/alampost._/', color: '#E4405F' },
  { icon: Facebook,  label: 'Facebook',  href: 'https://www.facebook.com/arnob.alam.710456', color: '#1877F2' },
  { icon: Github,    label: 'GitHub',    href: 'https://github.com/arnobalam10-tech', color: '#333333' },
  { icon: Mail,      label: 'Email',     href: 'mailto:arnob.alam10@gmail.com', color: '#3B5BFF' },
];

function MagneticSocial({ social }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.25;
    const dy = (e.clientY - cy) * 0.25;
    ref.current.style.transform = `translate(${dx}px, ${dy}px) translateY(-6px)`;
    ref.current.style.borderColor = social.color;
    ref.current.style.boxShadow = `0 20px 40px ${social.color}33`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = '';
    ref.current.style.borderColor = '';
    ref.current.style.boxShadow = '';
  };

  const Icon = social.icon;

  return (
    <motion.a
      ref={ref}
      href={social.href}
      className="social-link"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease' }}
    >
      <Icon size={22} style={{ color: social.color }} />
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '0.72rem',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text-secondary)',
      }}>
        {social.label}
      </span>
    </motion.a>
  );
}

export default function Contact({ id, onScrollTop }) {
  const headlineRef = useRef(null);
  const headlineInView = useInView(headlineRef, { once: true, margin: '-60px' });

  return (
    <section id={id} className="contact-section">
      {/* Animated aurora background */}
      <div className="aurora-bg" />

      {/* Noise grain overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        opacity: 0.4, pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#6B8AFF',
            marginBottom: '1.25rem',
            textAlign: 'center',
          }}
        >
          Let&rsquo;s Connect
        </motion.p>

        {/* Big headline */}
        <div ref={headlineRef} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          {['LET\'S BUILD', 'SOMETHING', 'TOGETHER'].map((word, i) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, y: 50 }}
              animate={headlineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="reveal-line"
            >
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: 'clamp(2.5rem, 8vw, 7rem)',
                lineHeight: 0.95,
                color: '#FFFFFF',
                letterSpacing: '-0.04em',
                display: 'block',
              }}>
                {word}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
            color: 'rgba(255,255,255,0.6)',
            textAlign: 'center',
            maxWidth: '560px',
            margin: '0 auto 4rem',
            lineHeight: 1.75,
          }}
        >
          Got a project in mind? Want to collaborate? Just want to say hi?
          I&rsquo;m always open to new conversations.
        </motion.p>

        {/* Social links */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '6rem',
        }}>
          {socials.map((s) => (
            <MagneticSocial key={s.label} social={s} />
          ))}
        </div>

        {/* Footer bar */}
        <div style={{
          borderTop: '1px solid var(--gray-border)',
          paddingTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.78rem',
            color: 'var(--text-secondary)',
          }}>
            {/* TODO: Update name */}
            © 2026 Ashab Alam. All rights reserved.
          </p>



          {/* Back to top */}
          <motion.button
            onClick={onScrollTop}
            className="back-to-top"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Palette } from 'lucide-react';
import { designProjects } from '../data/designProjects';

function DesignCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link to={`/design/${project.slug}`} className="design-tile">
        <div
          className="design-tile-face"
          style={{ background: `linear-gradient(135deg, ${project.accent}33 0%, ${project.accent}99 100%)` }}
        >
          <img
            src={project.logo || project.cover}
            alt={project.title}
            style={{ maxWidth: '55%', maxHeight: '55%', objectFit: 'contain' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="design-tile-hint">
            View Case Study <ArrowUpRight size={14} />
          </div>
        </div>

        <div style={{ padding: '1.25rem 0.25rem' }}>
          <p style={{
            fontSize: '0.68rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '0.4rem',
          }}>
            {project.category}
          </p>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            color: 'var(--text-primary)',
          }}>
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="design-empty-state"
    >
      <Palette size={28} style={{ color: 'var(--accent)' }} />
      <p style={{
        fontFamily: "'Playfair Display', serif",
        fontStyle: 'italic',
        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
        color: 'var(--text-primary)',
        marginTop: '1.25rem',
        maxWidth: '420px',
      }}>
        Case studies are being curated — design work is dropping here soon.
      </p>
    </motion.div>
  );
}

export default function Design({ id }) {
  return (
    <section id={id} className="design-section">
      <div className="section-container">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '3rem' }}
        >
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '0.5rem',
          }}>
            Visual Work
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
          }}>
            Graphic Design
          </h2>
        </motion.div>

        {designProjects.length === 0 ? (
          <EmptyState />
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}>
            {designProjects.map((project, i) => (
              <DesignCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

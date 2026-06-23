import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Sparkles, Megaphone, Palette } from 'lucide-react';

/* TODO: tweak tags to match your actual toolset */
const categories = [
  {
    icon: Code2,
    label: 'Web Development',
    tags: ['React', 'WordPress', 'Shopify', 'Tailwind CSS', 'Custom Plugins'],
  },
  {
    icon: Sparkles,
    label: 'Vibe Coding',
    tags: ['Claude Code', 'Antigravity', 'Rapid Prototyping', 'AI-Assisted Dev'],
  },
  {
    icon: Megaphone,
    label: 'Digital Marketing',
    tags: ['SEO', 'Paid Ads', 'Content Strategy', 'Analytics', 'Growth'],
  },
  {
    icon: Palette,
    label: 'Graphic Design',
    tags: ['Brand Identity', 'Social Media Creatives', 'Adobe Photoshop', 'Illustrator', 'Figma'],
  },
];

function SkillCard({ category, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="skill-card"
    >
      <div className="skill-card-icon">
        <Icon size={20} />
      </div>

      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
        fontSize: '1.2rem',
        color: 'var(--text-primary)',
        marginTop: '1.25rem',
        marginBottom: '1rem',
      }}>
        {category.label}
      </h3>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {category.tags.map((tag) => (
          <span key={tag} className="skill-tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills({ id }) {
  return (
    <section id={id} className="skills-section">
      <div className="section-container">

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
            marginBottom: '0.5rem',
          }}
        >
          What I Do
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '3rem',
            maxWidth: '700px',
          }}
        >
          Four disciplines. One way of thinking.
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}>
          {categories.map((category, i) => (
            <SkillCard key={category.label} category={category} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

/* TODO: Replace with actual project data — screenshots, names, descriptions, links */
const projects = [
  {
    id: 1,
    name: 'Chokka',
    tags: ['Ecommerce', 'Vibe Coded', 'Claude Code'],
    description: 'Full nicely vibe coded ecommerce site with proper admin panel including analytics and 3d card animations in the front end made with claude code.',
    color: ['#0D1B4B', '#1a3a8f'],
    emoji: '🛍️',
    url: 'https://www.chokka.shop',
  },
  {
    id: 2,
    name: 'Nafisa Alam',
    tags: ['Personal Portfolio', 'Vibe Coded', 'Doctor'],
    description: 'Personal Portfolio website for a Doctor from China. Vibe coded with antigravity. Admin panel support to add and remove contents.',
    color: ['#1A0A2E', '#3B1F6B'],
    emoji: '🩺',
    url: 'https://nafisaalam.vercel.app/',
  },
  {
    id: 3,
    name: 'Estore Vendor',
    tags: ['Culinary', 'Wordpress', 'Dynamic Menu'],
    description: 'Website for a culinary business in the UK. Added full dynamic menu along with booking system. Dynamic html coded in Wordpress.',
    color: ['#0A1A1A', '#0D4040'],
    emoji: '🍽️',
    url: 'https://estorevendor.com/',
  },
  {
    id: 4,
    name: 'Ashatoru',
    tags: ['Shopify', 'Ecommerce', 'Custom Plugins'],
    description: 'Shopify store for a bag brand - Custom shopify plugins and custom css and html code also used.',
    color: ['#1A0A0A', '#4A1010'],
    emoji: '👜',
    url: 'https://ashatoru.com/',
  },
  {
    id: 5,
    name: 'WhatsMyGrade',
    tags: ['Passion Project', 'EdTech', 'SaaS'],
    description: 'I hated mid-semester confusion about my grades, so I built this dashboard. It tracks progress and calculates exactly what scores you need on finals to hit your target. 500+ users with $0 marketing.',
    color: ['#0A0A1F', '#1A1A5C'],
    emoji: '🎓',
    url: 'https://whatsmygrade.xyz/',
    featured: true,
  },
];

function ProjectCard({ project, index, full }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="project-card"
      style={{ gridColumn: full ? '1 / -1' : 'auto' }}
    >
      {/* Project thumbnail */}
      <div style={{
        width: '100%',
        aspectRatio: full ? '21/9' : '4/3',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Gradient + emoji fallback (shows until WebP is uploaded) */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(135deg, ${project.color[0]} 0%, ${project.color[1]} 100%)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />

        </div>

        {/* Real screenshot — drop project-{id}.webp in public/assets/projects/
            Sits on top of gradient; if file missing, gradient shows through */}
        <img
          src={`/assets/projects/project-${project.id}.webp`}
          alt={project.name}
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />

        {/* Dark overlay + hover link */}
        <div className="project-card-overlay" style={{ position: 'absolute', inset: 0 }} />
        <div className="project-view-link" style={{
          position: 'absolute', bottom: '1.5rem', right: '1.5rem',
          display: 'flex', alignItems: 'center', gap: '0.4rem',
        }}>
          <a href={project.url} style={{
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            color: 'white', fontSize: '0.8rem', fontWeight: 600,
            letterSpacing: '0.05em', textDecoration: 'none',
          }}>
            View Project <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Card info */}
      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
          <div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
            }}>
              {project.name}
            </h3>
            <p style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: '500px',
            }}>
              {project.description}
            </p>
          </div>
        </div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
          style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: '0.3rem 0.85rem',
                borderRadius: '100px',
                border: '1px solid var(--gray-border)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Portfolio({ id }) {
  return (
    <section id={id} className="portfolio-section">
      <div className="section-container">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.5rem',
            }}>
              Selected Works
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}>
              Featured Works
            </h2>
          </div>

          <a
            href="#"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--accent)',
              textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: '0.25rem',
              letterSpacing: '0.05em',
              paddingBottom: '2px',
              borderBottom: '1px solid var(--accent)',
              transition: 'opacity 0.3s ease',
            }}
          >
            All Works →
          </a>
        </motion.div>

        {/* Project Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.slice(0, 4).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} full={false} />
          ))}
        </div>

        {/* Featured / full-width last card */}
        <div style={{ marginTop: '1.5rem' }}>
          <ProjectCard project={projects[4]} index={4} full={true} />
        </div>

      </div>
    </section>
  );
}
